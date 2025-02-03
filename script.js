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
    beltsData: {}
};

// Initialisation
function initializeApp() {
    console.log("Initialisation de l'application...");
    loadData()
        .then(data => {
            state.beltsData = data;
            setupInitialUI();
            updateProgress(1);
        })
        .catch(error => {
            console.error("Erreur lors du chargement des données:", error);
        });
}

// Charger les données depuis le fichier JSON
function loadData() {
    return fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau lors du chargement du fichier JSON');
            }
            return response.json();
        });
}

function setupInitialUI() {
    createProfileSelect();
}

// Création du select pour les profils
function createProfileSelect() {
    const select = document.getElementById('profileSelect');
    select.innerHTML = '';

    Object.entries(state.beltsData.profiles).forEach(([groupName, profiles]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = `${groupName}`;
        
        Object.entries(profiles).forEach(([code, data]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = data.display || code;
            optgroup.appendChild(option);
        });
        
        select.appendChild(optgroup);
    });
}

// Gestion de la navigation
function updateProgress(step) {
    const totalSteps = 6;
    const progressWidth = (step / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
}

function selectOption(prefix, value, nextStep) {
    console.log("Option sélectionnée:", value);
    console.log("Étape actuelle:", state.currentStep);
    switch(state.currentStep) {
        case 1:
            state.category = value;
            console.log("Catégorie définie:", state.category);
            break;
        case 3:
            state.width = value;
            break;
        case 4:
            state.cable = value;
            break;
    }
    navigateToStep(nextStep);
}

function navigateToStep(nextStep) {
    console.log("Navigation vers l'étape:", nextStep);
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

function selectProfile() {
    const profileSelect = document.getElementById('profileSelect');
    state.profile = profileSelect.value;
    updateStep3Options();
    navigateToStep(3);
}

function updateStep3Options() {
    const widthOptionsDiv = document.getElementById('widthOptions');
    widthOptionsDiv.innerHTML = '';
    
    const profileGroup = getProfileGroup(state.profile);
    const profile = state.beltsData.profiles[profileGroup][state.profile];
    
    profile.widths.forEach(width => {
        const button = document.createElement('button');
        button.textContent = `${width}mm`;
        button.onclick = () => selectOption('', width, 4);
        widthOptionsDiv.appendChild(button);
    });
}

// Validation de la taille
function validateSize() {
    const sizeInput = document.getElementById('sizeInput');
    const size = sizeInput.value.trim();
    
    resetErrors();
    
    if (validateSizeInput(size)) {
        state.size = size.padStart(5, '0');
        
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
    
    const profileGroup = getProfileGroup(state.profile);
    const profile = state.beltsData.profiles[profileGroup][state.profile];
    const numberOfTeeth = parseInt(size) / profile.pitch;
    
    if (!Number.isInteger(numberOfTeeth)) {
        showError('teethError');
        return false;
    }
    
    return true;
}

function selectOptionalOption(value, desc) {
    state.optionalOption1 = value;
    state.optionalOption1Desc = desc;
    showResult();
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

function getWeldabilityMessage(profile, width) {
    const weldabilityData = state.beltsData.weldability[profile];
    if (!weldabilityData) return state.beltsData.messages.NO;
    
    const status = weldabilityData[width];
    return state.beltsData.messages[status || "NO"];
}

function getWeldabilityClass(message) {
    if (message === state.beltsData.messages.YES) {
        return 'weldability-ok';
    } else if (message === state.beltsData.messages.YES_BUT) {
        return 'weldability-warning';
    }
    return 'weldability-attention';
}

function showResult() {
    try {
        let codeArticle = '';
        if (state.category === 'R') {
            codeArticle = `${state.category}${state.width}${state.profile}${state.cable}`;
        } else {
            codeArticle = `${state.category}${state.width}${state.profile}${state.cable}${state.size}`;
        }

        if (state.optionalOption1) {
            codeArticle += state.optionalOption1;
        }

        const resultElement = document.getElementById('result');
        const designationElement = document.getElementById('designation');

        if (resultElement) {
            resultElement.innerHTML = `Votre code article : <strong>${codeArticle}</strong>`;
        }

        const designation = generateDesignation();
        if (designationElement && designation) {
            designationElement.innerHTML = `Désignation : <strong>${designation}</strong>`;
        }

        if (state.category === 'V') {
            const weldabilityMessage = getWeldabilityMessage(state.profile, state.width);
            
            let weldabilityElement = document.getElementById('weldabilityInfo');
            if (!weldabilityElement) {
                weldabilityElement = document.createElement('div');
                weldabilityElement.id = 'weldabilityInfo';
                resultElement.parentNode.insertBefore(
                    weldabilityElement, 
                    resultElement.nextSibling
                );
            }
            
            const cssClass = getWeldabilityClass(weldabilityMessage);
            weldabilityElement.className = `weldability ${cssClass}`;
            weldabilityElement.innerHTML = `<strong>Information de faisabilité :</strong> ${weldabilityMessage}`;
        }
    } catch (error) {
        console.error('Erreur dans showResult:', error);
    }
}

function generateDesignation() {
    try {
        const category = state.beltsData.categories[state.category];
        const cable = state.beltsData.cables[state.cable];
        
        if (!category || !cable) {
            console.error('Catégorie ou câble non trouvé');
            return '';
        }

        let designation = `${category.name} - ${state.profile} - ${state.width}mm - ${cable.name}`;
        
        if (state.category !== 'R' && state.size) {
            const profileGroup = getProfileGroup(state.profile);
            const profile = state.beltsData.profiles[profileGroup][state.profile];
            if (profile && profile.pitch) {
                const numberOfTeeth = Math.round(parseInt(state.size) / profile.pitch);
                designation += ` - ${numberOfTeeth} dents`;
            }
            
            if (state.optionalOption1Desc) {
                designation += ` ${state.optionalOption1Desc}`;
            }
        }
        
        return designation;
    } catch (error) {
        console.error('Erreur dans generateDesignation:', error);
        return '';
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initializeApp);