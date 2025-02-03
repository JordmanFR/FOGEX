// État de l'application
const state = {
    currentStep: 1,
    category: '',
    width: '',
    profile: '',
    cable: '',
    size: '',
    optionalOption1: '',
    optionalOption1Desc: '',
    beltsData: null
};

// Fonctions d'initialisation
async function initializeApp() {
    try {
        const response = await fetch('data.json');
        state.beltsData = await response.json();
        setupInitialUI();
        updateProgress(1);
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
    }
}

function setupInitialUI() {
    createCategoryButtons();
    createProfileSelect();
    createCableButtons();
    createCoatingButtons();
}

// Création des éléments UI dynamiques
function createCategoryButtons() {
    const container = document.getElementById('categoryButtons');
    Object.entries(state.beltsData.categories).forEach(([code, data]) => {
        const button = document.createElement('button');
        button.textContent = data.name;
        button.onclick = () => selectOption('', code, 2);
        container.appendChild(button);
    });
}

function createProfileSelect() {
    const select = document.getElementById('profileSelect');
    Object.entries(state.beltsData.profiles).forEach(([groupName, profiles]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = `Profil ${groupName}`;
        
        Object.entries(profiles).forEach(([code, data]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = data.display || code;
            optgroup.appendChild(option);
        });
        select.appendChild(optgroup);
    });
}

function createCableButtons() {
    const container = document.getElementById('cableButtons');
    Object.entries(state.beltsData.cables).forEach(([code, data]) => {
        const button = document.createElement('button');
        button.textContent = data.name;
        button.onclick = () => selectOption('', code, 5);
        container.appendChild(button);
    });
}

function createCoatingButtons() {
    const container = document.getElementById('coatingButtons');
    Object.entries(state.beltsData.coatings).forEach(([code, data]) => {
        const button = document.createElement('button');
        button.textContent = data.name;
        button.onclick = () => selectOptionalOption(data.code, data.name, 7);
        container.appendChild(button);
    });
}

// Gestion de la navigation
function updateProgress(step) {
    const totalSteps = 6;
    const progressWidth = (step / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
}

function navigateToStep(nextStep) {
    document.getElementById(`step${state.currentStep}`).classList.remove('active');
    if (nextStep > 6) {
        showResult();
        return;
    }
    state.currentStep = nextStep;
    document.getElementById(`step${state.currentStep}`).classList.add('active');
    updateProgress(state.currentStep);
}

function goBack(previousStep) {
    navigateToStep(previousStep);
}

// Gestion des sélections
function selectOption(prefix, value, nextStep) {
    switch (state.currentStep) {
        case 1:
            state.category = value;
            break;
        case 3:
            state.width = value;
            break;
        case 4:
            state.cable = value;
            break;
    }
    updateArticleCode();
    navigateToStep(nextStep);
}

function selectProfile() {
    const profileSelect = document.getElementById('profileSelect');
    state.profile = profileSelect.value;
    updateStep3Options();
    navigateToStep(3);
}

function updateStep3Options() {
    const widthOptionsDiv = document.getElementById('widthOptions');
    widthOptionsDiv.innerHTML = '';
    
    const profile = state.beltsData.profiles[getProfileGroup(state.profile)][state.profile];
    profile.widths.forEach(width => {
        const button = document.createElement('button');
        button.textContent = `${width}mm`;
        button.onclick = () => selectOption('', width, 4);
        widthOptionsDiv.appendChild(button);
    });
}

// Validation et génération du code
function validateSize() {
    const sizeInput = document.getElementById('sizeInput');
    const size = sizeInput.value.trim();
    
    // Réinitialiser les erreurs
    resetErrors();
    
    if (validateSizeInput(size)) {
        state.size = size.padStart(5, '0');
        updateArticleCode();
        
        if (shouldSkipCoating()) {
            state.optionalOption1 = '/Z';
            state.optionalOption1Desc = 'PAZ';
            showResult();
        } else {
            navigateToStep(6);
        }
    }
}

function validateSizeInput(size) {
    if (!size || isNaN(size) || size.length > 5) {
        showError('sizeError');
        return false;
    }
    
    if (parseInt(size) < 1000) {
        showError('lengthError');
        return false;
    }
    
    const profile = state.beltsData.profiles[getProfileGroup(state.profile)][state.profile];
    const numberOfTeeth = parseInt(size) / profile.pitch;
    
    if (!Number.isInteger(numberOfTeeth)) {
        showError('teethError');
        return false;
    }
    
    return true;
}

// Fonctions utilitaires
function getProfileGroup(profileCode) {
    return Object.entries(state.beltsData.profiles).find(([group, profiles]) => 
        Object.keys(profiles).includes(profileCode)
    )[0];
}

function shouldSkipCoating() {
    return state.profile.startsWith('ST') || 
           state.profile.startsWith('RP') || 
           state.profile.startsWith('E');
}

function resetErrors() {
    ['sizeError', 'lengthError', 'teethError'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
}

// Génération du résultat
function updateArticleCode() {
    const code = state.category === 'R' 
        ? `${state.category}${state.width}${state.profile}${state.cable}`
        : `${state.category}${state.width}${state.profile}${state.cable}${state.size}`;
        
    const finalCode = state.optionalOption1 ? code + state.optionalOption1 : code;
    
    document.getElementById('result').innerHTML = `Votre code article : <strong>${finalCode}</strong>`;
    document.getElementById('designation').innerHTML = `Désignation : <strong>${generateDesignation()}</strong>`;
}

function generateDesignation() {
    const category = state.beltsData.categories[state.category].name;
    const cable = state.beltsData.cables[state.cable].name;
    let designation = `${category} - ${state.profile} - ${state.width}mm - ${cable}`;
    
    if (state.category !== 'R') {
        const profile = state.beltsData.profiles[getProfileGroup(state.profile)][state.profile];
        const numberOfTeeth = Math.round(parseInt(state.size) / profile.pitch);
        designation += ` - ${numberOfTeeth} dents`;
        
        if (state.optionalOption1Desc) {
            designation += ` ${state.optionalOption1Desc}`;
        }
    }
    
    return designation;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initializeApp);
