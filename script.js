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

// Données intégrées
const beltsData = {
    "messages": {
        "YES": "Peut être soudée même à l'unité",
        "YES_BUT": "Peut être obtenu à partir d'une courroie plus large (trace de refente à prévoir)",
        "NO": "Doit être réclamé à Elatech"
    },
    "categories": {
        "R": { "name": "Courroie ouverte Elatech" },
        "V": { "name": "Courroie soudée Elatech" },
        "F": { "name": "Courroie ELAFLEX" }
    },
    "cables": {
        "A": { "name": "Cable Acier" },
        "K": { "name": "Cable Kevlar" },
        "S": { "name": "Cable Inox" }
    },
    "weldability": {
        "T2.5": {
            "004": "NO",
            "006": "NO",
            "010": "NO",
            "020": "NO",
            "050": "NO",
            "100": "NO"
        },
        "T5": {
            "010": "YES_BUT",
            "016": "YES",
            "025": "YES",
            "032": "YES_BUT",
            "050": "YES_BUT",
            "075": "YES_BUT",
            "100": "YES"
        },
        "T10": {
            "010": "YES_BUT",
            "016": "YES_BUT",
            "025": "YES",
            "032": "YES",
            "050": "YES",
            "075": "YES_BUT",
            "100": "YES",
            "150": "NO",
            "200": "NO"
        },
        "T20": {
            "025": "YES_BUT",
            "032": "YES_BUT",
            "050": "YES_BUT",
            "075": "YES_BUT",
            "100": "YES",
            "150": "NO"
        },
        "MXL": {
            "025": "NO",
            "050": "NO",
            "100": "NO",
            "200": "NO",
            "400": "NO"
        },
        "XL": {
            "025": "NO",
            "031": "NO",
            "037": "NO",
            "050": "NO",
            "075": "NO",
            "100": "NO",
            "150": "NO",
            "200": "NO",
            "400": "NO"
        },
        "L": {
            "050": "YES_BUT",
            "075": "YES_BUT",
            "100": "YES_BUT",
            "150": "YES_BUT",
            "200": "YES_BUT",
            "300": "YES_BUT",
            "400": "YES"
        },
        "H": {
            "050": "YES_BUT",
            "075": "YES_BUT",
            "100": "YES_BUT",
            "150": "YES_BUT",
            "200": "YES",
            "300": "YES_BUT",
            "400": "YES",
            "600": "NO",
            "800": "NO"
        },
        "XH": {
            "100": "NO",
            "200": "NO",
            "300": "NO",
            "400": "NO",
            "600": "NO"
        },
        "AT3": {
            "008": "NO",
            "010": "NO",
            "012": "NO",
            "016": "NO",
            "020": "NO",
            "025": "NO",
            "050": "NO",
            "100": "NO"
        },
        "AT5": {
            "010": "YES_BUT",
            "016": "YES",
            "025": "YES",
            "032": "YES",
            "050": "YES_BUT",
            "075": "YES_BUT",
            "100": "YES",
            "150": "NO"
        },
        "AT10": {
            "016": "YES",
            "025": "YES",
            "032": "YES",
            "050": "YES",
            "075": "YES",
            "100": "YES",
            "150": "NO"
        },
        "AT15": {
            "100": "NO"
        },
        "AT20": {
            "025": "YES_BUT",
            "032": "YES_BUT",
            "050": "YES_BUT",
            "075": "YES",
            "100": "YES",
            "150": "NO"
        },
        "ATK5-K6": {
            "032": "NO",
            "050": "NO",
            "075": "NO",
            "100": "NO"
        },
        "TK5-K6": {
            "032": "NO",
            "050": "NO",
            "075": "NO",
            "100": "NO"
        },
        "TK10-K6": {
            "032": "NO",
            "050": "NO",
            "075": "NO",
            "100": "NO",
            "150": "NO"
        },
        "TK10-K13": {
            "032": "NO",
            "050": "NO",
            "075": "NO",
            "100": "NO",
            "150": "NO"
        },
        "TK20-K13": {
            "032": "NO",
            "050": "NO"
        },
        "ATK10-K6": {
            "025": "YES",
            "032": "YES",
            "050": "YES",
            "075": "YES",
            "100": "NO"
        },
        "ATK10-K13": {
            "032": "YES",
            "050": "YES",
            "075": "YES",
            "100": "YES",
            "150": "NO"
        },
        "H-K13": {
            "003": "NO",
            "004": "NO",
            "006": "NO",
            "100": "NO",
            "200": "NO"
        },
        "HT3": {
            "010": "NO",
            "015": "NO",
            "025": "NO",
            "050": "NO",
            "100": "NO"
        },
        "HT5": {
            "010": "YES_BUT",
            "015": "YES_BUT",
            "025": "YES_BUT",
            "050": "YES",
            "075": "YES_BUT",
            "100": "YES"
        },
        "HT8": {
            "010": "YES_BUT",
            "015": "YES_BUT",
            "020": "YES",
            "030": "YES",
            "050": "YES",
            "085": "YES",
            "100": "YES"
        },
        "HT14": {
            "025": "YES_BUT",
            "040": "YES_BUT",
            "055": "YES",
            "085": "YES",
            "115": "YES",
            "150": "NO"
        },
        "FT5": {
			"016": "YES_BUT",
			"025": "YES_BUT",
			"032": "YES_BUT",
			"050": "YES_BUT",
			"075": "YES_BUT",
            "100": "YES"
        },
        "FT10": {
            "016": "YES_BUT",
			"025": "YES_BUT",
			"032": "YES_BUT",
			"050": "YES_BUT",
			"075": "YES_BUT",
            "100": "YES"
        },
        "FAT5": {
            "016": "YES_BUT",
			"025": "YES_BUT",
			"032": "YES_BUT",
			"050": "YES_BUT",
			"075": "YES_BUT",
            "100": "YES"
        },
        "FAT10": {
            "016": "YES_BUT",
			"025": "YES_BUT",
			"032": "YES_BUT",
			"050": "YES_BUT",
			"075": "YES_BUT",
            "100": "YES"
        },
        "ST5": {
            "010": "NO",
            "015": "NO",
            "025": "NO",
            "050": "NO",
            "100": "NO",
            "150": "NO"
        },
        "ST8": {
            "010": "NO",
            "015": "NO",
            "020": "NO",
            "030": "NO",
            "050": "NO",
            "085": "NO",
            "100": "NO"
        },
        "ST14": {
            "040": "NO",
            "055": "NO",
            "085": "NO",
            "115": "NO"
        },
        "RP5": {
            "010": "NO",
            "015": "NO",
            "025": "NO",
            "030": "NO",
            "050": "NO",
            "100": "NO"
        },
        "RP8": {
            "010": "YES_BUT",
            "015": "YES_BUT",
            "020": "YES_BUT",
            "030": "YES_BUT",
            "050": "YES",
            "085": "NO",
            "100": "NO"
        },
        "RP14": {
            "040": "NO",
            "055": "NO",
            "085": "NO",
            "115": "NO"
        },
        "E5": {
            "012.5": "NO",
            "025": "NO"
        },
        "E8": {
            "016": "YES",
            "025": "YES",
            "032": "YES",
            "050": "NO"
        },
        "E10": {
            "015": "NO",
            "032": "NO",
            "050": "NO",
            "075": "NO",
            "100": "NO"
        },
        "E14": {
            "035": "NO",
            "052.5": "NO",
            "070": "NO",
            "105": "NO"
        },
        "SAT10": {
            "050": "NO",
            "075": "NO",
            "100": "NO"
        },
        "ATF10": {
            "025": "YES_BUT",
            "050": "YES_BUT",
            "075": "YES_BUT",
            "100": "YES"
        },
        "ATM10": {
            "100": "NO"
        },
        "ATF20": {
            "050": "NO",
            "075": "NO",
            "100": "NO"
        }
    },
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
                "widths": ["010", "016", "025", "032", "050", "075", "100", "150", "200"]
            },
            "T20": {
                "pitch": 20,
                "widths": ["025", "032", "050", "075", "100", "150"]
            }
        },
        "AT": {
            "AT3": {
                "pitch": 3,
                "widths": ["008", "010", "012", "016", "020", "025", "050", "100"]
            },
            "AT5": {
                "pitch": 5,
                "widths": ["010", "016", "025", "032", "050", "075", "100", "150"]
            },
            "AT10": {
                "pitch": 10,
                "widths": ["016", "025", "032", "050", "075", "100", "150"]
            },
            "AT20": {
                "pitch": 20,
                "widths": ["025", "032", "050", "075", "100", "150"]
            }
        },
        "HTD": {
            "HT3": {
                "pitch": 3,
                "widths": ["010", "015", "025", "050", "100"],
                "display": "HTD 3M"
            },
            "HT5": {
                "pitch": 5,
                "widths": ["010", "015", "025", "050", "075", "100"],
                "display": "HTD 5M"
            },
            "HT8": {
                "pitch": 8,
                "widths": ["010", "015", "020", "030", "050", "085", "100"],
                "display": "HTD 8M"
            },
            "HT14": {
                "pitch": 14,
                "widths": ["025", "040", "055", "085", "115", "150"],
                "display": "HTD 14M"
            }
        },
        "iFOOD": {
            "FT5": {
                "pitch": 5,
                "widths": ["100"]
            },
            "FT10": {
                "pitch": 10,
                "widths": ["100"]
            },
            "FAT5": {
                "pitch": 5,
                "widths": ["100"]
            },
            "FAT10": {
                "pitch": 10,
                "widths": ["100"]
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
                "widths": ["015", "032", "050", "075", "100"],
                "display": "EAGLE 10M"
            },
            "E14": {
                "pitch": 14,
                "widths": ["035", "052.5", "070", "105"],
                "display": "EAGLE 14M"
            }
        },
        "Imperial": {
            "MXL": {
                "pitch": 2.032,
                "widths": ["025", "050", "100", "200", "400"]
            },
            "XL": {
                "pitch": 5.08,
                "widths": ["025", "031", "037", "050", "075", "100", "150", "200", "400"]
            },
            "L": {
                "pitch": 9.525,
                "widths": ["050", "075", "100", "150", "200", "300", "400"]
            },
            "H": {
                "pitch": 12.7,
                "widths": ["050", "075", "100", "150", "200", "300", "400", "600", "800"]
            },
            "XH": {
                "pitch": 22.225,
                "widths": ["100", "200", "300", "400", "600"]
            }
        },
        "Profils avec guide": {
            "TK5-K6": {
                "pitch": 5,
                "widths": ["032", "050", "075", "100"]
            },
            "TK10-K6": {
                "pitch": 10,
                "widths": ["032", "050", "075", "100", "150"]
            },
            "TK10-K13": {
                "pitch": 10,
                "widths": ["032", "050", "075", "100", "150"]
            },
            "TK20-K13": {
                "pitch": 20,
                "widths": ["032", "050"]
            },
            "ATK5-K6": {
                "pitch": 5,
                "widths": ["032", "050", "075", "100"]
            },
            "ATK10-K6": {
                "pitch": 10,
                "widths": ["025", "032", "050", "075", "100"]
            },
            "ATK10-K13": {
                "pitch": 10,
                "widths": ["032", "050", "075", "100", "150"]
            },
            "H-K13": {
                "pitch": 13,
                "widths": ["003", "004", "006", "100", "200"]
            }
        },
        "STD": {
            "ST5": {
                "pitch": 5,
                "widths": ["010", "015", "025", "050", "100", "150"]
            },
            "ST8": {
                "pitch": 8,
                "widths": ["010", "015", "020", "030", "050", "085", "100"]
            },
            "ST14": {
                "pitch": 14,
                "widths": ["040", "055", "085", "115"]
            }
        },
        "RPD": {
            "RP5": {
                "pitch": 5,
                "widths": ["010", "015", "025", "030", "050", "100"]
            },
            "RP8": {
                "pitch": 8,
                "widths": ["010", "015", "020", "030", "050", "085", "100"]
            },
            "RP14": {
                "pitch": 14,
                "widths": ["040", "055", "085", "115"]
            }
        },
        "Spéciaux": {
            "SAT10": {
                "pitch": 10,
                "widths": ["050", "075", "100"]
            },
            "ATF10": {
                "pitch": 10,
                "widths": ["025", "050", "075", "100"]
            },
            "ATF20": {
                "pitch": 20,
                "widths": ["050", "075", "100"]
            },
            "ATM10": {
                "pitch": 10,
                "widths": ["100"]
            }
        }
    }
};

// Initialisation
function initializeApp() {
    console.log("Initialisation de l'application...");
    state.beltsData = beltsData;
    setupInitialUI();
    updateProgress(1);
}

function setupInitialUI() {
    createProfileSelect();
}

// Switch thème sombre
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('switch');

    // Initialiser le switch en fonction du thème actuel
    const savedTheme = localStorage.getItem('theme') || 'auto';
    if (savedTheme === 'dark' || (savedTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeSwitch.checked = true;
        setTheme('dark');
    } else {
        themeSwitch.checked = false;
        setTheme('light');
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    function setTheme(theme) {
        if (theme === 'auto') {
            document.body.classList.remove('theme-light', 'theme-dark');
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('theme-dark');
            } else {
                document.body.classList.add('theme-light');
            }
        } else if (theme === 'light') {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
            localStorage.setItem('theme', 'light');
        } else if (theme === 'dark') {
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Écoutez les modifications du thème préféré de l'utilisateur
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (localStorage.getItem('theme') === 'auto') {
                setTheme('auto');
            }
        });
    }
});

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

function getWeldability(profile, width) {
    const weldabilityData = state.beltsData.weldability[profile];
    if (!weldabilityData) return 'NO';
    return weldabilityData[width] || 'NO';
}

function getNextWeldableWidth(profile, currentWidth) {
    const profileGroup = getProfileGroup(profile);
    const profileData = state.beltsData.profiles[profileGroup][profile];
    const widths = profileData.widths;
    const currentIndex = widths.indexOf(currentWidth);

    for (let i = currentIndex + 1; i < widths.length; i++) {
        if (getWeldability(profile, widths[i]) === 'YES') {
            return widths[i];
        }
    }

    return null; // If no larger weldable width is found, return null
}

function getWeldabilityClass(message) {
    if (message === state.beltsData.messages.YES) {
        return 'weldability-ok';
    } else if (message === state.beltsData.messages.YES_BUT) {
        return 'weldability-warning';
    }
    return 'weldability-attention';
}

function getWeldabilityMessage(profile, width) {
    const weldability = getWeldability(profile, width);
    return state.beltsData.messages[weldability] || 'Information non disponible';
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
            
            if (state.optionalOption1Desc && state.optionalOption1Desc !== 'Sans') {
                designation += ` ${state.optionalOption1Desc}`;
            }
        }
        
        return designation;
    } catch (error) {
        console.error('Erreur dans generateDesignation:', error);
        return '';
    }
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
        const weldabilityElement = document.getElementById('weldabilityInfo');
        const specialCodeElement = document.getElementById('specialCode');

        if (state.category === 'V') {
            const weldabilityMessage = getWeldabilityMessage(state.profile, state.width);
            const cssClass = getWeldabilityClass(weldabilityMessage);
            weldabilityElement.className = `weldability ${cssClass}`;
            weldabilityElement.innerHTML = `<strong>Information de faisabilité :</strong> ${weldabilityMessage}`;
        } else {
            weldabilityElement.innerHTML = '';
        }

        if (resultElement) {
            resultElement.innerHTML = `Code article : <strong>${codeArticle}</strong>`;
        }

        const designation = generateDesignation();
        if (designationElement && designation) {
            designationElement.innerHTML = `Désignation : <strong>${designation}</strong>`;
        }

        // Logique pour afficher le code spécial
        let specialCode = '';
        let selectedWidth = state.width;

        // Cherche la prochaine largeur faisable
        while (getWeldability(state.profile, selectedWidth) !== 'YES') {
            const nextWidth = getNextWeldableWidth(state.profile, selectedWidth);
            if (nextWidth === null) {
                selectedWidth = state.width; // Aucune largeur faisable trouvée
                break;
            }
            selectedWidth = nextWidth;
        }

        if (state.category === 'R') {
            specialCode = codeArticle;
        } else if (state.category === 'V') {
            if (parseInt(selectedWidth) > 100) {
                specialCode = `R100${state.profile}${state.cable}/P${selectedWidth}`;
            } else {
                specialCode = `R${selectedWidth}${state.profile}${state.cable}`;
            }
        } else if (state.category === 'F') {
            specialCode = 'Impossible';
        }

        if (specialCodeElement) {
            specialCodeElement.innerHTML = `Stock à vérifier : <strong>${specialCode}</strong>`;
        }
    } catch (error) {
        console.error('Erreur dans showResult:', error);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initializeApp);