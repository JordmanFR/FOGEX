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
    beltsData: {
        "profiles": {
            "T": {
                "T2.5": {
                    "pitch": 2.5,
                    "widths": ["004", "006", "010", "020", "050", "100"]
                },
                "T5": {
                    "pitch": 5,
                    "widths": ["010", "016", "025", "032", "050", "075", "100"]
                },
                "T10": {
                    "pitch": 10,
                    "widths": ["010", "016", "025", "032", "050", "075", "100"]
                },
                "T20": {
                    "pitch": 20,
                    "widths": ["025", "032", "050", "075", "100"]
                }
            },
            "AT": {
                "AT3": {
                    "pitch": 3,
                    "widths": ["008", "010", "012", "016", "020", "025", "050", "100"]
                },
                "AT5": {
                    "pitch": 5,
                    "widths": ["010", "016", "025", "032", "050", "075", "100"]
                },
                "AT10": {
                    "pitch": 10,
                    "widths": ["010", "016", "025", "032", "050", "075", "100"]
                },
                "AT15": {
                    "pitch": 15,
                    "widths": ["050", "075", "100"]
                },
                "AT20": {
                    "pitch": 20,
                    "widths": ["025", "032", "050", "075", "100"]
                }
            },
            "HTD": {
                "HT5": {
                    "pitch": 5,
                    "widths": ["010", "015", "025", "050", "100"],
                    "display": "HTD 5M"
                },
                "HT8": {
                    "pitch": 8,
                    "widths": ["020", "030", "050", "085", "100"],
                    "display": "HTD 8M"
                },
                "HT14": {
                    "pitch": 14,
                    "widths": ["040", "055", "085", "0115", "150"],
                    "display": "HTD 14M"
                }
            },
            "STD": {
                "ST5": {
                    "pitch": 5,
                    "widths": ["010", "015", "025", "050", "100"],
                    "display": "STD 5M"
                },
                "ST8": {
                    "pitch": 8,
                    "widths": ["020", "030", "050", "085", "100"],
                    "display": "STD 8M"
                },
                "ST14": {
                    "pitch": 14,
                    "widths": ["040", "055", "085", "0115", "150"],
                    "display": "STD 14M"
                }
            },
            "RTD": {
                "RP5": {
                    "pitch": 5,
                    "widths": ["010", "015", "025", "050", "100"],
                    "display": "RTD 5M"
                },
                "RP8": {
                    "pitch": 8,
                    "widths": ["020", "030", "050", "085", "100"],
                    "display": "RTD 8M"
                },
                "RP14": {
                    "pitch": 14,
                    "widths": ["040", "055", "085", "0115", "150"],
                    "display": "RTD 14M"
                }
            },
            "EAGLE": {
                "E5": {
                    "pitch": 5,
                    "widths": ["012.5", "025"],
                    "display": "EAGLE 5M"
                },
                "E8": {
                    "pitch": 8,
                    "widths": ["016", "025", "032", "050"],
                    "display": "EAGLE 8M"
                },
                "E10": {
                    "pitch": 10,
                    "widths": ["025", "032", "050", "075", "100"],
                    "display": "EAGLE 10M"
                },
                "E14": {
                    "pitch": 14,
                    "widths": ["035", "052", "070", "105"],
                    "display": "EAGLE 14M"
                }
            },
            "IMPERIAL": {
                "MXL": {
                    "pitch": 2.032,
                    "widths": ["025", "050", "100", "200", "400"]
                },
                "XL": {
                    "pitch": 5.08,
                    "widths": ["025", "050", "100", "200", "400"]
                },
                "L": {
                    "pitch": 9.525,
                    "widths": ["050", "075", "100", "200", "400"]
                },
                "H": {
                    "pitch": 12.7,
                    "widths": ["050", "075", "100", "200", "400"]
                },
                "XH": {
                    "pitch": 22.225,
                    "widths": ["100", "200", "400"]
                }
            }
        },
        "categories": {
            "R": {
                "code": "R",
                "name": "Courroie ouverte Elatech"
            },
            "V": {
                "code": "V",
                "name": "Courroie soudée Elatech"
            },
            "F": {
                "code": "F",
                "name": "Courroie ELAFLEX"
            }
        },
        "cables": {
            "A": {
                "code": "A",
                "name": "Cable Acier"
            },
            "K": {
                "code": "K",
                "name": "Cable Kevlar"
            },
            "S": {
                "code": "S",
                "name": "Cable Inox"
            }
        }
    }
};

// Initialisation
function initializeApp() {
    setupInitialUI();
    updateProgress(1);
}

function setupInitialUI() {
    createProfileSelect();
}

// Création du select pour les profils
function createProfileSelect() {
    const select = document.getElementById('profileSelect');
    select.innerHTML = ''; // Vider le select

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

// Gestion de la navigation
function updateProgress(step) {
    const totalSteps = 6;
    const progressWidth = (step / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
}

function selectOption(prefix, value, nextStep) {
    switch(state.currentStep) {
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

    navigateToStep(nextStep);
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

function selectOptionalOption(value, desc, nextStep) {
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

function showResult() {
    let codeArticle = '';
    if (state.category === 'R') {
        codeArticle = `${state.category}${state.width}${state.profile}${state.cable}`;
    } else {
        codeArticle = `${state.category}${state.width}${state.profile}${state.cable}${state.size}`;
    }

    if (state.optionalOption1) {
        codeArticle += state.optionalOption1;
    }

    document.getElementById('result').innerHTML = `Votre code article : <strong>${codeArticle}</strong>`;
    document.getElementById('designation').innerHTML = `Désignation : <strong>${generateDesignation()}</strong>`;
}

function generateDesignation() {
    const categoryName = state.beltsData.categories[state.category].name;
    const cableName = state.beltsData.cables[state.cable].name;
    
    let designation = `${categoryName} - ${state.profile} - ${state.width}mm - ${cableName}`;
    
    if (state.category !== 'R') {
        const profileGroup = getProfileGroup(state.profile);
        const profile = state.beltsData.profiles[profileGroup][state.profile];
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
