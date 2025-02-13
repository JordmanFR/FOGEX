// -----------------------------------------------------------------------------
// État de l'application
// -----------------------------------------------------------------------------

const state = {
    currentStep: 1,
    category: '',
    width: '',
    profile: '',
    cable: '',
    size: '',
    optionalOption1: '',
    optionalOption1Desc: '',
    beltsData: {},
    suggestedSizes: []
};

// -----------------------------------------------------------------------------
// Initialisation des données
// -----------------------------------------------------------------------------

const beltsData = {
    "messages": {
        "YES": "Peut être soudée même à l'unité",
        "YES_BUT": "Peut être obtenu à partir d'une courroie plus large (traces de refente à prévoir)",
        "NO": "Doit être réclamé à Elatech"
    },
    "categories": {
        "R": { "name": "Courroie ouverte Elatech" },
        "V": { "name": "Courroie soudée Elatech" },
        "F": { "name": "Courroie ElaFlex SD" },
        "W": { "name": "Courroie Syncro MAX Elatech" },
        "U": { "name": "Courroie iSync Elatech" }

    },
    "cables": {
        "A": { "name": "Acier" },
        "K": { "name": "Kevlar" },
        "S": { "name": "Inox" },
        "F": { "name": "Haute Flexibilité" },
        "P": { "name": "Haute Performance" },
        "XHPL": { "name": "Très Haute Performance" }
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
            "150": "YES",
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
                "widths": ["025", "050", "075", "100"]
            },
            "FT10": {
                "pitch": 10,
                "widths": ["025", "050", "075", "100"]
            },
            "FAT5": {
                "pitch": 5,
                "widths": ["025", "050", "075", "100"]
            },
            "FAT10": {
                "pitch": 10,
                "widths": ["025", "050", "075", "100"]
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

// Table de compatibilité
const compatibilityTable = (category) => {
    switch (category) {
        case 'R':
            return {
                "T2.5": { "A": true, "F": true },
                "T5": { "A": true, "K": true, "F": true, "P": true },
                "T10": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "T20": { "A": true, "K": true, "S": true, "F": true },
                "MXL": { "A": true, "F": true },
                "XL": { "A": true, "K": true, "F": true },
                "L": { "A": true, "K": true, "S": true },
                "H": { "A": true, "K": true, "S": true },
                "XH": { "A": true, "K": true, "S": true },
                "AT3": { "A": true, "F": true },
                "AT5": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "AT10": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "AT20": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "ATK5-K6": { "A": true, "K": true },
                "TK5-K6": { "A": true, "K": true },
                "TK10-K6": { "A": true, "K": true },
                "TK10-K13": { "A": true, "K": true },
                "TK20-K13": { "A": true },
                "ATK10-K6": { "A": true, "K": true },
                "ATK10-K13": { "A": true, "K": true },
                "H-K13": { "A": true },
                "HT3": { "A": true, "F": true },
                "HT5": { "A": true, "K": true, "S": true },
                "HT8": { "A": true, "K": true, "S": true, "P": true },
                "HT14": { "A": true, "P": true, "XHPL": true },
                "ST5": { "A": true, "K": true, "S": true, "F": true },
                "ST8": { "A": true, "K": true, "S": true, "P": true },
                "ST14": { "A": true },
                "RP5": { "A": true, "K": true, "S": true, "F": true },
                "RP8": { "A": true, "K": true, "S": true, "P": true },
                "RP14": { "A": true, "P": true, "XHPL": true },
                "E5": { "A": true },
                "E8": { "A": true, "K": true, "S": true, "P": true },
                "E10": { "A": true },
                "E14": { "A": true, "P": true, "XHPL": true },
                "SAT10": { "A": true, "S": true, "F": true },
                "ATF10": { "A": true },
                "ATF20": { "A": true },
                "PG14M": { "A": true },
                "PG20M": { "A": true },
                "F1": { "A": true, "K": true, "F": true },
                "F2": { "A": true, "K": true, "S": true },
                "F2.5": { "A": true, "K": true, "S": true },
                "F3": { "A": true, "K": true },
                "F8.75": { "A": true, "P": true }
            };
        case 'V':
            return {
                "T2.5": { "A": true },
                "T5": { "A": true, "K": true },
                "T10": { "A": true, "K": true, "S": true },
                "T20": { "A": true, "K": true, "S": true },
                "MXL": { "A": true },
                "XL": { "A": true, "K": true },
                "L": { "A": true, "K": true, "S": true },
                "H": { "A": true, "K": true, "S": true },
                "XH": { "A": true, "K": true, "S": true },
                "AT3": { "A": true },
                "AT5": { "A": true, "K": true, "S": true },
                "AT10": { "A": true, "K": true, "S": true },
                "AT20": { "A": true, "K": true, "S": true },
                "ATK5-K6": { "A": true, "K": true },
                "TK5-K6": { "A": true, "K": true },
                "TK10-K6": { "A": true, "K": true },
                "TK10-K13": { "A": true, "K": true },
                "TK20-K13": { "A": true },
                "ATK10-K6": { "A": true, "K": true },
                "ATK10-K13": { "A": true, "K": true },
                "H-K13": { "A": true },
                "HT3": { "A": true },
                "HT5": { "A": true, "K": true, "S": true },
                "HT8": { "A": true, "K": true, "S": true },
                "HT14": { "A": true },
                "FT5": { "K": true, "S": true },
                "FT10": { "K": true, "S": true },
                "FAT5": { "K": true, "S": true },
                "FAT10": { "K": true, "S": true },
                "ST5": { "A": true, "K": true, "S": true },
                "ST8": { "A": true, "K": true, "S": true },
                "ST14": { "A": true },
                "RP5": { "A": true, "K": true, "S": true },
                "RP8": { "A": true, "K": true, "S": true },
                "RP14": { "A": true },
                "E5": { "A": true },
                "E8": { "A": true, "K": true, "S": true },
                "E10": { "A": true },
                "E14": { "A": true },
                "SAT10": { "A": true },
                "ATF10": { "A": true },
                "ATF20": { "A": true },
                "PG14M": { "A": true },
                "PG20M": { "A": true },
                "F1": { "A": true, "K": true },
                "F2": { "A": true, "K": true, "S": true },
                "F2.5": { "A": true, "K": true, "S": true },
                "F3": { "A": true, "K": true },
                "F8.75": { "A": true }
            };
        case 'F':
            return {
                "T5": { "A": true, "K": true, "S": true },
                "T10": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "T20": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "XL": { "A": true, "K": true, "F": true },
                "L": { "A": true, "K": true, "S": true, "F": true },
                "H": { "A": true, "K": true, "S": true, "F": true },
                "XH": { "A": true, "K": true, "S": true, "F": true },
                "AT3": { "A": true },
                "AT5": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "AT10": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "AT15": { "A": true, "K": true },
                "AT20": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "ATK5-K6": { "A": true, "K": true, "F": true, "P": true },
                "ATK10-K6": { "A": true, "K": true, "F": true, "P": true },
                "HT5": { "A": true, "K": true, "S": true, "F": true },
                "HT8": { "A": true, "K": true, "S": true, "F": true },
                "HT14": { "A": true, "K": true, "S": true, "F": true },
                "ST5": { "A": true, "K": true, "S": true, "F": true },
                "ST8": { "A": true, "K": true, "S": true, "F": true },
                "ST14": { "A": true, "K": true, "S": true, "F": true },
                "RP5": { "A": true, "K": true, "S": true, "F": true },
                "RP8": { "A": true, "K": true, "S": true, "F": true },
                "RP14": { "A": true, "K": true, "S": true, "F": true },
                "E5": { "A": true },
                "E8": { "A": true },
                "E10": { "A": true },
                "E14": { "A": true },
                "ATM10": { "A": true, "K": true, "S": true, "F": true, "P": true },
                "F2": { "A": true, "K": true, "S": true, "F": true },
                "F2.5": { "A": true, "K": true, "S": true, "F": true },
                "F3": { "A": true, "K": true, "S": true, "F": true }
            };
        case 'W':
            return {
                "T10": { "K": true },
                "AT10": { "K": true },
                "H": { "K": true }
            };
        case 'U':
            return {
                "T2.5": { "A": true },
                "T5": { "A": true },
                "T10": { "A": true },
                "XL": { "A": true },
                "L": { "A": true },
                "AT5": { "A": true },
                "AT10": { "A": true }
            };
        default:
            return {};
    }
};

// -----------------------------------------------------------------------------
// Initialisation de l'interface utilisateur
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// Fonctions de navigation
// -----------------------------------------------------------------------------

function navigateToStep(nextStep) {
    console.log("Navigation vers l'étape:", nextStep);
    document.getElementById(`step${state.currentStep}`).classList.remove('active');
    if (nextStep > 7) {
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

function updateProgress(step) {
    const totalSteps = 6;
    const progressWidth = (step / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
}

// -----------------------------------------------------------------------------
// Fonctions spécifiques à l'étape
// -----------------------------------------------------------------------------

// ** Étape 1 : Sélection de la catégorie **
// Aucune fonction spécifique nécessaire, l'interface est gérée directement dans le HTML

// ** Étape 2 : Sélection du profil **
function createProfileSelect() {
    const select = document.getElementById('profileSelect');
    select.innerHTML = '';

    const category = state.category;
    const profiles = state.beltsData.profiles;

    Object.entries(profiles).forEach(([groupName, groupProfiles]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = `${groupName}`;
        
        Object.entries(groupProfiles).forEach(([code, data]) => {
            if (isProfileCompatibleWithCategory(code, category)) {
                const option = document.createElement('option');
                option.value = code;
                option.textContent = data.display || code;
                optgroup.appendChild(option);
            }
        });
        
        if (optgroup.children.length > 0) {
            select.appendChild(optgroup);
        }
    });
}

function isProfileCompatibleWithCategory(profile, category) {
    const compatibleCategories = {
        "R": ["T2.5", "T5", "T10", "T20", "MXL", "XL", "L", "H", "XH", "AT3", "AT5", "AT10", "AT15", "AT20", "ATK5-K6", "TK5-K6", "TK10-K6", "TK10-K13", "TK20-K13", "ATK10-K6", "ATK10-K13", "H-K13", "HT3", "HT5", "HT8", "HT14", "FT5", "FT10", "FAT5", "FAT10", "ST5", "ST8", "ST14", "RP5", "RP8", "RP14", "E5", "E8", "E10", "E14", "SAT10", "ATF10", "ATM10", "ATF20", "PG14M", "PG20M", "F1", "F2", "F2.5", "F3", "F8.75"],
        "V": ["T2.5", "T5", "T10", "T20", "MXL", "XL", "L", "H", "XH", "AT3", "AT5", "AT10", "AT15", "AT20", "ATK5-K6", "TK5-K6", "TK10-K6", "TK10-K13", "TK20-K13", "ATK10-K6", "ATK10-K13", "H-K13", "HT3", "HT5", "HT8", "HT14", "FT5", "FT10", "FAT5", "FAT10", "ST5", "ST8", "ST14", "RP5", "RP8", "RP14", "E5", "E8", "E10", "E14", "SAT10", "ATF10", "ATM10", "ATF20", "PG14M", "PG20M", "F1", "F2", "F2.5", "F3", "F8.75"],
        "F": ["T10", "T20", "L", "H", "AT10", "AT20", "HT8", "HT14", "ST8", "ST14", "RP8", "RP14"],
        "W": ["T10", "AT10", "H"],
        "U": ["T2.5", "T5", "T10", "XL", "L", "AT5", "AT10"]
    };

    return compatibleCategories[category] && compatibleCategories[category].includes(profile);
}

// ** Étape 3 : Sélection de la largeur **
function updateStep3Options() {
    const widthOptionsDiv = document.getElementById('widthOptions');
    widthOptionsDiv.innerHTML = '';
    
    // Cas spécial pour la catégorie W
    if (state.category === 'W') {
        let specialWidths;
        if (state.profile === 'H') {
            specialWidths = ['254', '304', '406', '457', '508'];
        } else if (state.profile === 'T10' || state.profile === 'AT10') {
            specialWidths = ['250', '300', '350', '400', '450', '500'];
        }
        
        if (specialWidths) {
            specialWidths.forEach(width => {
                const button = document.createElement('button');
                button.textContent = `${width}mm`;
                button.onclick = () => selectOption('', width.padStart(3, '0'), 4);
                widthOptionsDiv.appendChild(button);
            });
            return;
        }
    }
    
    // Cas normal pour les autres catégories
    const profileGroup = getProfileGroup(state.profile);
    const profile = state.beltsData.profiles[profileGroup][state.profile];
    
    profile.widths.forEach(width => {
        const button = document.createElement('button');
        if (profileGroup === 'Imperial') {
            button.textContent = convertToInches(width);
        } else {
            button.textContent = `${width}mm`;
        }
        button.onclick = () => selectOption('', width, 4);
        widthOptionsDiv.appendChild(button);
    });
}

function selectCustomWidth() {
    const customWidthInput = document.getElementById('customWidthInput');
    let customWidth = customWidthInput.value.trim();
    
    resetErrors();
    
    if (validateCustomWidth(customWidth)) {
        customWidth = customWidth.padStart(3, '0');  // Ajouter des zéros au début si nécessaire
        state.width = customWidth;
        navigateToStep(4);
    } else {
        showError('customWidthError');
    }
}

function validateCustomWidth(width) {
    return width.length > 0 && !isNaN(width) && width.length <= 3;
}

// ** Étape 4 : Sélection du câble **
function updateStep4Options() {
    const cableButtonsDiv = document.getElementById('cableButtons');
    cableButtonsDiv.innerHTML = '';

    const profile = state.profile;
    const cables = state.beltsData.cables;

    Object.keys(cables).forEach(cableCode => {
        if (isCompatible(profile, cableCode)) {
            const button = document.createElement('button');
            button.textContent = cables[cableCode].name;
            button.onclick = () => selectOption('', cableCode, 5);
            cableButtonsDiv.appendChild(button);
        }
    });
}

function isCompatible(profile, cable) {
    return compatibilityTable(state.category)[profile] && compatibilityTable(state.category)[profile][cable];
}

// ** Étape 5 : Saisie de la taille **
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
            navigateToStep(7);
        }
    } else {
        // Proposer les tailles valides les plus proches
        const profileGroup = getProfileGroup(state.profile);
        const profile = state.beltsData.profiles[profileGroup][state.profile];
        const pitch = profile.pitch;
        const enteredSize = parseInt(sizeInput.value.trim());

        const lowerValidSize = Math.floor(enteredSize / pitch) * pitch;
        const upperValidSize = Math.ceil(enteredSize / pitch) * pitch;

        state.suggestedSizes = [lowerValidSize, upperValidSize].filter(s => s >= 1000);

        if (state.suggestedSizes.length > 0) {
            updateSuggestedSizesUI(state.suggestedSizes);
            navigateToStep(6); // Aller à l'étape de suggestion
        } else {
            showError('lengthError'); // Si aucune suggestion, afficher l'erreur de longueur
        }
    }
}

function validateSizeInput(size) {
    if (!size || isNaN(size) || size.length > 5) {
        showError('sizeError');
        return false;
    }
    
    const sizeValue = parseInt(size); // Convertir la taille en entier
    if (sizeValue < 1000) {
        showError('lengthError');
        return false;
    }
    
    const profileGroup = getProfileGroup(state.profile);
    const profile = state.beltsData.profiles[profileGroup][state.profile];
    const numberOfTeeth = sizeValue / profile.pitch; // Utiliser la valeur entière pour le calcul
    
    if (!Number.isInteger(numberOfTeeth)) {
        showError('teethError');
        return false;
    }
    
    return true;
}

// ** Étape 6 : Tailles suggérées **
function updateSuggestedSizesUI(sizes) {
    const suggestionsContainer = document.getElementById('suggestedSizes');
    suggestionsContainer.innerHTML = ''; // Effacer les suggestions précédentes

    sizes.forEach(size => {
        const button = document.createElement('button');
        button.textContent = `${size} mm`;
        button.onclick = () => {
            state.size = String(size).padStart(5, '0');
            if (shouldSkipCoating()) {
                state.optionalOption1 = '/Z';
                state.optionalOption1Desc = 'PAZ';
                showResult();
            } else {
                navigateToStep(7);
            }
        };
        suggestionsContainer.appendChild(button);
    });
}

// ** Étape 7 : Sélection du revêtement **
function selectOptionalOption(value, desc) {
    state.optionalOption1 = value;
    state.optionalOption1Desc = desc;
    showResult();
}

// -----------------------------------------------------------------------------
// Sélection générique d'options
// -----------------------------------------------------------------------------

function selectOption(prefix, value, nextStep) {
    console.log("Option sélectionnée:", value);
    console.log("Étape actuelle:", state.currentStep);
    switch(state.currentStep) {
        case 1:
            state.category = value;
            console.log("Catégorie définie:", state.category);
            createProfileSelect();
            break;
        case 3:
            state.width = value.padStart(3, '0');  // Ajouter des zéros au début si nécessaire
            break;
        case 4:
            state.cable = value;
            break;
    }
    navigateToStep(nextStep);
}

function selectProfile() {
    const profileSelect = document.getElementById('profileSelect');
    state.profile = profileSelect.value;
    updateStep3Options();
    updateStep4Options();
    navigateToStep(3);
}

// -----------------------------------------------------------------------------
// Génération et affichage du code
// -----------------------------------------------------------------------------

function generateDesignation() {
    try {
        const designationParts = [];

        const category = state.beltsData.categories[state.category];
        const cable = state.beltsData.cables[state.cable];

        if (!category || !cable) {
            console.error('Catégorie ou câble non trouvé');
            return '';
        }

        if (state.category === 'U') {
            // Format de désignation iSync : "COURROIE PU ISYNC" [longueur]-[profil]
            designationParts.push(`COURROIE PU ISYNC ${parseInt(state.size)}-${state.profile}`);
        } else {
            designationParts.push(category.name);
            designationParts.push(state.profile);

            if (getProfileGroup(state.profile) === 'Imperial') {
                designationParts.push(convertToInches(state.width));
            } else {
                designationParts.push(`${parseInt(state.width)}mm`);
            }

            designationParts.push(cable.name);

            if (state.category !== 'R' && state.size) {
                const profileGroup = getProfileGroup(state.profile);
                const profile = state.beltsData.profiles[profileGroup][state.profile];
                if (profile && profile.pitch) {
                    const numberOfTeeth = Math.round(parseInt(state.size) / profile.pitch);
                    designationParts.push(`${numberOfTeeth} dents`);
                }

                if (state.optionalOption1Desc && state.optionalOption1Desc !== 'Sans') {
                    designationParts.push(state.optionalOption1Desc);
                }
            }
        }

        return designationParts.join(' - ');
    } catch (error) {
        console.error('Erreur dans generateDesignation:', error);
        return '';
    }
}

function generateCodeStock() {
    let codeStock = '';
    let selectedWidth = state.width;

    // Cherche la prochaine largeur faisable
    if (getWeldability(state.profile, selectedWidth) !== 'YES') {
        const nextWidth = getNextWeldableWidth(state.profile, selectedWidth);
        if (nextWidth !== null) {
            selectedWidth = nextWidth;
        }
    }

    if (state.category === 'U') {
        // Format de code stock iSync : [longueur][profil]
        codeStock = `${parseInt(state.size)}${state.profile}`;
    } else if (state.category === 'R') {
        codeStock = `R${selectedWidth}${state.profile}${state.cable}`;
    } else if (state.category === 'V') {
        codeStock = `R${selectedWidth}${state.profile}${state.cable}`;
    } else if (state.category === 'F') {
        codeStock = 'Impossible';
    }

    if (state.optionalOption1) {
        codeStock += state.optionalOption1;
    }

    return codeStock;
}

function generateAlternativeCodeStock() {
    let alternativeCodeStock = '';
    let selectedWidth = state.width;
    let baseCode = 'R100';

    // Retirer les zéros en début de largeur sauf si c'est un profil Imperial
    if (getProfileGroup(state.profile) === 'Imperial') {
        selectedWidth = selectedWidth.replace(/^0+/, '');
        baseCode = 'R400';
    } else {
        selectedWidth = selectedWidth.replace(/^0+/, ''); // Retirer les zéros en début
    }

    if (state.category === 'U') {
        alternativeCodeStock = 'N/A';
    } else if (state.category === 'R') {
        alternativeCodeStock = `${baseCode}${state.profile}${state.cable}/P${selectedWidth}`;
    } else if (state.category === 'V') {
        alternativeCodeStock = `${baseCode}${state.profile}${state.cable}/P${selectedWidth}`;
    } else if (state.category === 'F') {
        alternativeCodeStock = 'Impossible';
    }

    if (state.optionalOption1) {
        alternativeCodeStock += state.optionalOption1.replace(/^\//, '');
    }

    return alternativeCodeStock;
}

function showResult() {
    try {
        let codeArticle = '';
        let width = state.width;
        let size = state.size;

        // Pour les profils impériaux, arrondir la longueur à l'entier inférieur
        if (getProfileGroup(state.profile) === 'Imperial') {
            size = Math.floor(parseInt(size)).toString().padStart(5, '0');
        }

        switch (state.category) {
            case 'R':
                codeArticle = `R${width}${state.profile}${state.cable}`;
                break;
            case 'V':
                codeArticle = `V${width}${state.profile}${state.cable}${size}`;
                break;
            case 'F':
                codeArticle = `F${width}${state.profile}${state.cable}${size}`;
                break;
            case 'W':
                codeArticle = `W${width}${state.profile}${state.cable}${size}`;
                break;
            case 'U':
                codeArticle = `${state.profile}-${parseInt(state.size)}`;
                break;
            default:
                codeArticle = 'Format non défini';
        }

        if (state.optionalOption1) {
            codeArticle += state.optionalOption1;
        }

        const resultElement = document.getElementById('result');
        const designationElement = document.getElementById('designation');
        const weldabilityElement = document.getElementById('weldabilityInfo');
        const CodeStockElement = document.getElementById('CodeStock');
        const alternativeCodeStockElement = document.getElementById('alternativeCodeStock');

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
        if (designationElement) {
            designationElement.innerHTML = `Désignation : <strong>${designation}</strong>`;
        }

        // Afficher le code stock
        const CodeStock = generateCodeStock();
        if (CodeStockElement) {
            CodeStockElement.innerHTML = `Stock à contrôler : <strong>${CodeStock}</strong>`;
        }

        // Afficher le code stock alternatif
        const alternativeCodeStock = generateAlternativeCodeStock();
        if (alternativeCodeStockElement) {
            alternativeCodeStockElement.innerHTML = `Ou alors : <strong>${alternativeCodeStock}</strong>`;
        }
    } catch (error) {
        console.error('Erreur dans showResult:', error);
    }
}

// -----------------------------------------------------------------------------
// Fonctions utilitaires
// -----------------------------------------------------------------------------

function convertToInches(mmValue) {
    const inchesValue = (mmValue / 100).toFixed(2);
    return `${inchesValue}po`;
}

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
    
    // Vérifier si la largeur actuelle est faisable
    const currentWeldability = weldabilityData[width];
    if (currentWeldability === 'YES') {
        return 'YES';
    }

    // Vérifier les largeurs supérieures pour un YES atteignable
    const profileGroup = getProfileGroup(profile);
    const profileData = state.beltsData.profiles[profileGroup][profile];
    const widths = profileData.widths;
    const currentIndex = widths.indexOf(width);

    for (let i = currentIndex + 1; i < widths.length; i++) {
        if (weldabilityData[widths[i]] === 'YES') {
            return 'YES_BUT';
        }
    }

    return currentWeldability || 'NO';
}

function getNextWeldableWidth(profile, currentWidth) {
    const profileGroup = getProfileGroup(profile);
    const profileData = state.beltsData.profiles[profileGroup][profile];
    const widths = profileData.widths;
    const currentWidthNumber = parseInt(currentWidth);

    for (let i = 0; i < widths.length; i++) {
        const widthNumber = parseInt(widths[i]);
        if (widthNumber >= currentWidthNumber && getWeldability(profile, widths[i]) === 'YES') {
            return widths[i];
        }
    }

    return null; // Si aucune largeur faisable plus grande n'est trouvée, retourner null
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

function showTooltip(element) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = element.dataset.title.replace(/;/g, '<br>');
    tooltip.style.display = 'block';

    // Positionner l'info-bulle à côté du bouton
    const rect = element.getBoundingClientRect();
    tooltip.style.top = (rect.bottom + window.scrollY) + 'px';
    tooltip.style.left = (rect.left + window.scrollX) + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// Ajouter ces deux fonctions juste avant la section "Fonctions utilitaires"

function handleWidthKeydown(event) {
    if (event.key === 'Enter') {
        selectCustomWidth();
    }
}

function handleLengthKeydown(event) {
    if (event.key === 'Enter') {
        validateSize();
    }
} // Ajout de l'accolade manquante ici

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initializeApp);