        // Variables globales
let codeArticle = '';
let currentStep = 1;
let category = '';
let width = '';
let profile = '';
let cable = '';
let size = '';
let errors = [];
let optionalOption1 = '';
let optionalOption1Desc = '';

// Options de largeur pour chaque profil
const widthOptions = {
    "T2.5": ["004", "006", "010", "020", "050", "100"],
    "T5": ["010", "016", "025", "032", "050", "075", "100"],
    "T10": ["010", "016", "025", "032", "050", "075", "100"],
    "T20": ["025", "032", "050", "075", "100"],
    "AT3": ["008", "010", "012", "016", "020", "025", "050", "100"],
    "AT5": ["010", "016", "025", "032", "050", "075", "100"],
    "AT10": ["010", "016", "025", "032", "050", "075", "100"],
    "AT15": ["050", "075", "100"],
    "AT20": ["025", "032", "050", "075", "100"],
    "HT3": ["010", "015", "025", "050", "100"],
    "HT5": ["010", "015", "025", "050", "100"],
    "HT8": ["020", "030", "050", "085", "100"],
    "HT14": ["040", "055", "085", "0115", "150"],
    "ST5": ["010", "015", "025", "050", "100"],
    "ST8": ["020", "030", "050", "085", "100"],
    "ST14": ["040", "055", "085", "0115", "150"],
    "RP5": ["010", "015", "025", "050", "100"],
    "RP8": ["020", "030", "050", "085", "100"],
    "RP14": ["040", "055", "085", "0115", "150"],
    "E5": ["012.5", "025"],
    "E8": ["016", "025", "032", "050"],
    "E10": ["025", "032", "050", "075", "100"],
    "E14": ["035", "052", "070", "105"],
    "MXL": ["025","050", "100","200","400"],
    "XL": ["025","050", "100","200","400"],
    "L": ["050","075", "100","200","400"],
    "H": ["050","075", "100","200","400"],
    "XH": ["100", "200", "400"]
};

// Pas pour chaque profil (en mm par dent)
const profilePitch = {
    "T2.5": 2.5,
    "T5": 5,
    "T10": 10,
    "T20": 20,
    "AT3": 3,
    "AT5": 5,
    "AT10": 10,
    "AT15": 15,
    "AT20": 20,
    "HT3": 3,
    "HT5": 5,
    "HT8": 8,
    "HT14": 14,
    "ST5": 5,
    "ST8": 8,
    "ST14": 14,
    "RP5": 5,
    "RP8": 8,
    "RP14": 14,
    "E5": 5,
    "E8": 8,
    "E10": 10,
    "E14": 14,
    "MXL": 2.032,
    "XL": 5.08,
    "L": 9.525,
    "H": 12.7,
    "XH": 22.225
};

// Fonction pour mettre à jour la barre de progression
function updateProgress(step) {
    const totalSteps = 6; // Nombre total d'étapes
    const progressWidth = (step / totalSteps) * 100; // Calcul de la largeur en pourcentage
    document.getElementById('progress').style.width = `${progressWidth}%`;
}

// Fonction pour sélectionner une option
function selectOption(prefix, value, nextStep) {
    if (currentStep === 1) category = value;
    if (currentStep === 3) width = value;
    if (currentStep === 4) cable = value;

    // Construire le code article
    if (category === 'R') {
        codeArticle = category + width + profile + cable;
    } else {
        codeArticle = category + width + profile + cable + size;
    }

    // Masquer l'étape actuelle
    document.getElementById('step' + currentStep).classList.remove('active');

    if (nextStep > 6) {
        showResult();
        return;
    }

    // Afficher la prochaine étape
    currentStep = nextStep;
    document.getElementById('step' + currentStep).classList.add('active');

    // Mettre à jour la barre de progression
    updateProgress(currentStep);
}

// Fonction pour revenir à l'étape précédente
function goBack(previousStep) {
    document.getElementById('step' + currentStep).classList.remove('active');
    currentStep = previousStep;
    document.getElementById('step' + currentStep).classList.add('active');
    updateProgress(currentStep);
}

// Fonction pour sélectionner le profil et passer à l'étape 3
function selectProfile() {
    const profileSelect = document.getElementById('profileSelect');
    const selectedProfile = profileSelect.value;
    profile = selectedProfile; // Stocker le profil sélectionné

    // Mettre à jour les options de largeur pour l'étape 3
    updateStep3Options();

    // Passer à l'étape 3
    document.getElementById('step2').classList.remove('active');
    currentStep = 3;
    document.getElementById('step3').classList.add('active');

    // Mettre à jour la barre de progression
    updateProgress(currentStep);
}

// Fonction pour mettre à jour les options de largeur
function updateStep3Options() {
    const profileSelect = document.getElementById('profileSelect');
    const selectedProfile = profileSelect.value;
    const widthOptionsDiv = document.getElementById('widthOptions');

    // Vider les options précédentes
    widthOptionsDiv.innerHTML = '';

    // Ajouter les nouvelles options en fonction du profil sélectionné
    widthOptions[selectedProfile].forEach(width => {
        const button = document.createElement('button');
        button.textContent = `${width}mm`;
        button.onclick = () => selectOption('', width, 4);
        widthOptionsDiv.appendChild(button);
    });
}

// Fonction pour valider la taille
function validateSize() {
    const sizeInput = document.getElementById('sizeInput').value.trim();
    const sizeError = document.getElementById('sizeError');
    const lengthError = document.getElementById('lengthError');
    const teethError = document.getElementById('teethError');

    // Réinitialiser les erreurs
    errors = [];
    sizeError.style.display = 'none';
    lengthError.style.display = 'none';
    teethError.style.display = 'none';

    // Validation de la taille
    if (!sizeInput || isNaN(sizeInput) || sizeInput.length > 5) {
        errors.push('sizeError');
        sizeError.style.display = 'block';
    }

    // Validation de la longueur minimale
    if (parseInt(sizeInput) < 1000) {
        errors.push('lengthError');
        lengthError.style.display = 'block';
    }

    // Validation du nombre de dents
    if (!errors.includes('sizeError')) {
        const pitch = profilePitch[profile] || 1; // Pas par défaut si non trouvé
        const lengthInMm = parseInt(sizeInput, 10); // Convertir la taille en nombre
        const numberOfTeeth = lengthInMm / pitch; // Calculer le nombre de dents

        if (!Number.isInteger(numberOfTeeth)) {
            errors.push('teethError');
            teethError.style.display = 'block';
        }
    }

    // Si aucune erreur, passer à l'étape suivante
    if (errors.length === 0) {
        // Compléter avec des zéros devant pour atteindre 5 caractères
        const paddedSize = sizeInput.padStart(5, '0').toUpperCase();
        size = paddedSize; // Stocker la taille

        // Mettre à jour le code article et afficher le résultat
        updateArticleCode();

        // Si le profil est STD, RTD ou EAGLE, sauter l'étape 6
        if (profile.startsWith('ST') || profile.startsWith('RP') || profile.startsWith('E')) {
            optionalOption1 = '/Z'; // Valeur par défaut
            optionalOption1Desc = 'PAZ'; // Désignation par défaut
            showResult(); // Afficher le résultat final
            return;
        }

        // Sinon, passer à l'étape 6
        document.getElementById('step' + currentStep).classList.remove('active');
        currentStep = 6; // Passer à l'étape facultative 6
        document.getElementById('step' + currentStep).classList.add('active');

        // Mettre à jour la barre de progression
        updateProgress(currentStep);
    }
}

// Fonction pour mettre à jour le code article
function updateArticleCode() {
    // Construire le code article
    if (category === 'R') {
        codeArticle = category + width + profile + cable;
    } else {
        codeArticle = category + width + profile + cable + size;
    }

    // Ajouter les options facultatives si présentes
    if (optionalOption1) codeArticle += optionalOption1;

    // Afficher le code article
    document.getElementById('result').innerHTML = `Votre code article : <strong>${codeArticle}</strong>`;

    // Générer et afficher la désignation
    const designation = generateDesignation();
    document.getElementById('designation').innerHTML = `Désignation : <strong>${designation}</strong>`;
}

// Fonction pour générer la désignation
function generateDesignation() {
    let designation = '';

    // Ajouter la catégorie
    if (category === 'R') designation += 'Courroie ouverte Elatech - ';
    else if (category === 'V') designation += 'Courroie soudée Elatech - ';
    else if (category === 'F') designation += 'Courroie ELAFLEX - ';

    // Ajouter le profil
    designation += `${profile} - `;

    // Ajouter la largeur
    designation += `${width}mm - `;

    // Ajouter le câble
    if (cable === 'A') designation += 'Cable Acier ';
    else if (cable === 'K') designation += 'Cable Kevlar ';
    else if (cable === 'S') designation += 'Cable Inox ';
	
	// Ajouter le nombre de dents uniquement si ce n'est pas une courroie ouverte
    if (category !== 'R') {
        const pitch = profilePitch[profile] || 1; // Pas par défaut si non trouvé
        const lengthInMm = parseInt(size, 10); // Convertir la taille en nombre
        const numberOfTeeth = Math.round(lengthInMm / pitch); // Calculer le nombre de dents
        designation += `- ${numberOfTeeth} dents `;

    // Ajouter le revêtement en tissu
    if (optionalOption1Desc) designation +=  optionalOption1Desc + ' ';

    }

    return designation;
}

// Fonction pour sélectionner une option facultative
function selectOptionalOption(value, desc, nextStep) {
    if (currentStep === 6) {
        optionalOption1 = value;
        optionalOption1Desc = desc;
    }

    // Mettre à jour le code article
    updateArticleCode();

    // Masquer l'étape actuelle
    document.getElementById('step' + currentStep).classList.remove('active');

    // Afficher la prochaine étape
    currentStep = nextStep;
    document.getElementById('step' + currentStep).classList.add('active');

    // Mettre à jour la barre de progression
    updateProgress(currentStep);
}

// Initialiser la barre de progression au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    updateProgress(1); // Commencer à l'étape 1
});
