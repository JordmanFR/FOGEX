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
    suggestedSizes: [],
    finalOption: '',
    finalOptionDesc: '',
    finalOptionDurete: '',
    finalOptionCouleur: '',
    guide: '',
    guideDesc: '',
    falseTeeth: '',
    coatingThickness: ''
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
        "W": { "name": "Courroie Syncro Max Elatech" },
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
        "Profils avec guide extrudé et centré": {
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
        "PGD": {
            "PG14M": {
                "pitch": 14,
                "widths": ["050", "100", "150", "180"]
            },
            "PG20M": {
                "pitch": 20,
                "widths": ["050", "100", "150", "180"]
            }
        },
        "Plate": {
            "F1": {
                "pitch": 1,
                "widths": ["010","020","030","040","050", "100"]
            },
            "F2": {
                "pitch": 2,
                "widths": ["010","015","025","030","050","075", "100"]
            },
            "F2.5": {
                "pitch": 2.5,
                "widths": ["020","025","050","075","100", "120"]
            },
            "F3": {
                "pitch": 3,
                "widths": ["025","030","060","120", "150"]
            },
            "F8.75": {
                "pitch": 8.75,
                "widths": ["075", "150"]
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
    const table = {
        'R': {
            "T2.5": { "A": true, "F": true }, "T5": { "A": true, "K": true, "F": true, "P": true },
            "T10": { "A": true, "K": true, "S": true, "F": true, "P": true }, "T20": { "A": true, "K": true, "S": true, "F": true },
            "MXL": { "A": true, "F": true }, "XL": { "A": true, "K": true, "F": true },
            "L": { "A": true, "K": true, "S": true }, "H": { "A": true, "K": true, "S": true },
            "XH": { "A": true, "K": true, "S": true }, "AT3": { "A": true, "F": true },
            "AT5": { "A": true, "K": true, "S": true, "F": true, "P": true }, "AT10": { "A": true, "K": true, "S": true, "F": true, "P": true },
            "AT20": { "A": true, "K": true, "S": true, "F": true, "P": true }, "ATK5-K6": { "A": true, "K": true },
            "TK5-K6": { "A": true, "K": true }, "TK10-K6": { "A": true, "K": true },
            "TK10-K13": { "A": true, "K": true }, "TK20-K13": { "A": true },
            "ATK10-K6": { "A": true, "K": true }, "ATK10-K13": { "A": true, "K": true },
            "H-K13": { "A": true }, "HT3": { "A": true, "F": true },
            "HT5": { "A": true, "K": true, "S": true }, "HT8": { "A": true, "K": true, "S": true, "P": true },
            "HT14": { "A": true, "P": true, "XHPL": true }, "ST5": { "A": true, "K": true, "S": true, "F": true },
            "ST8": { "A": true, "K": true, "S": true, "P": true }, "ST14": { "A": true },
            "RP5": { "A": true, "K": true, "S": true, "F": true }, "RP8": { "A": true, "K": true, "S": true, "P": true },
            "RP14": { "A": true, "P": true, "XHPL": true }, "E5": { "A": true },
            "E8": { "A": true, "K": true, "S": true, "P": true }, "E10": { "A": true },
            "E14": { "A": true, "P": true, "XHPL": true }, "SAT10": { "A": true, "S": true, "F": true },
            "ATF10": { "A": true }, "ATF20": { "A": true },
            "PG14M": { "A": true }, "PG20M": { "A": true },
            "F1": { "A": true, "K": true, "F": true }, "F2": { "A": true, "K": true, "S": true },
            "F2.5": { "A": true, "K": true, "S": true }, "F3": { "A": true, "K": true },
            "F8.75": { "A": true, "P": true }
        },
        'V': {
            "T2.5": { "A": true }, "T5": { "A": true, "K": true },
            "T10": { "A": true, "K": true, "S": true }, "T20": { "A": true, "K": true, "S": true },
            "MXL": { "A": true }, "XL": { "A": true, "K": true },
            "L": { "A": true, "K": true, "S": true }, "H": { "A": true, "K": true, "S": true },
            "XH": { "A": true, "K": true, "S": true }, "AT3": { "A": true },
            "AT5": { "A": true, "K": true, "S": true }, "AT10": { "A": true, "K": true, "S": true },
            "AT20": { "A": true, "K": true, "S": true }, "ATK5-K6": { "A": true, "K": true },
            "TK5-K6": { "A": true, "K": true }, "TK10-K6": { "A": true, "K": true },
            "TK10-K13": { "A": true, "K": true }, "TK20-K13": { "A": true },
            "ATK10-K6": { "A": true, "K": true }, "ATK10-K13": { "A": true, "K": true },
            "H-K13": { "A": true }, "HT3": { "A": true },
            "HT5": { "A": true, "K": true, "S": true }, "HT8": { "A": true, "K": true, "S": true },
            "HT14": { "A": true }, "FT5": { "K": true, "S": true },
            "FT10": { "K": true, "S": true }, "FAT5": { "K": true, "S": true },
            "FAT10": { "K": true, "S": true }, "ST5": { "A": true, "K": true, "S": true },
            "ST8": { "A": true, "K": true, "S": true }, "ST14": { "A": true },
            "RP5": { "A": true, "K": true, "S": true }, "RP8": { "A": true, "K": true, "S": true },
            "RP14": { "A": true }, "E5": { "A": true },
            "E8": { "A": true, "K": true, "S": true }, "E10": { "A": true },
            "E14": { "A": true }, "SAT10": { "A": true },
            "ATF10": { "A": true }, "ATF20": { "A": true },
            "PG14M": { "A": true }, "PG20M": { "A": true },
            "F1": { "A": true, "K": true }, "F2": { "A": true, "K": true, "S": true },
            "F2.5": { "A": true, "K": true, "S": true }, "F3": { "A": true, "K": true },
            "F8.75": { "A": true }
        },
        'F': {
            "T5": { "A": true, "K": true, "S": true }, "T10": { "A": true, "K": true, "S": true, "F": true, "P": true },
            "T20": { "A": true, "K": true, "S": true, "F": true, "P": true }, "XL": { "A": true, "K": true, "F": true },
            "L": { "A": true, "K": true, "S": true, "F": true }, "H": { "A": true, "K": true, "S": true, "F": true },
            "XH": { "A": true, "K": true, "S": true, "F": true }, "AT3": { "A": true },
            "AT5": { "A": true, "K": true, "S": true, "F": true, "P": true }, "AT10": { "A": true, "K": true, "S": true, "F": true, "P": true },
            "AT15": { "A": true, "K": true }, "AT20": { "A": true, "K": true, "S": true, "F": true, "P": true },
            "ATK5-K6": { "A": true, "K": true, "F": true, "P": true }, "ATK10-K6": { "A": true, "K": true, "F": true, "P": true },
            "HT5": { "A": true, "K": true, "S": true, "F": true }, "HT8": { "A": true, "K": true, "S": true, "F": true },
            "HT14": { "A": true, "K": true, "S": true, "F": true }, "ST5": { "A": true, "K": true, "S": true, "F": true },
            "ST8": { "A": true, "K": true, "S": true, "F": true }, "ST14": { "A": true, "K": true, "S": true, "F": true },
            "RP5": { "A": true, "K": true, "S": true, "F": true }, "RP8": { "A": true, "K": true, "S": true, "F": true },
            "RP14": { "A": true, "K": true, "S": true, "F": true }, "E5": { "A": true },
            "E8": { "A": true }, "E10": { "A": true },
            "E14": { "A": true }, "ATM10": { "A": true, "K": true, "S": true, "F": true, "P": true },
            "F2": { "A": true, "K": true, "S": true, "F": true }, "F2.5": { "A": true, "K": true, "S": true, "F": true },
            "F3": { "A": true, "K": true, "S": true, "F": true }
        },
        'W': {
            "T10": { "K": true },
            "H": { "K": true }
        },
        'U': {
            "T2.5": { "A": true },
            "T5": { "A": true },
            "T10": { "A": true },
            "XL": { "A": true },
            "L": { "A": true },
            "AT5": { "A": true },
            "AT10": { "A": true }
        }
    };
    return table[category] || {};
};

// -----------------------------------------------------------------------------
// Initialisation de l'interface utilisateur
// -----------------------------------------------------------------------------

// Initialisation
function initializeApp() {
    console.log("Initialisation de l'application...");
    state.beltsData = beltsData;
    setupInitialUI();
    setupThemeSwitcher();
    setupCopyButtons();
    setupTooltips(); // Initialiser les tooltips
    updateProgress(1);
    
    // Ajuster la taille des boutons et optimiser les grilles
    adjustButtonSizes();
    optimizeButtonGrids();
    
    // Afficher les conteneurs de résultats vides mais avec l'état "en cours"
    initializeResultContainers();
    
    // Vérifier si la page est bien chargée
    console.log("Application initialisée, étape actuelle:", state.currentStep);
    console.log("Données chargées:", Object.keys(state.beltsData).length > 0 ? "Oui" : "Non");
}

function setupInitialUI() {
    createProfileSelect();
}

// Initialisation des conteneurs de résultats
function initializeResultContainers() {
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach(card => {
        card.style.display = 'flex'; // On affiche les cartes
        card.classList.add('in-progress'); // On ajoute la classe "en cours"
        
        // On désactive temporairement les événements de copie
        card.removeEventListener('click', handleResultCardClick);
        card.style.cursor = 'default';
        
        const contentElement = card.querySelector('.result-content');
        if (contentElement) {
            // Initialiser avec des valeurs par défaut (textes plus courts)
            if (contentElement.parentElement.id === 'result') {
                contentElement.innerHTML = 'Code : <strong>En cours...</strong>';
            } else if (contentElement.parentElement.id === 'designation') {
                contentElement.innerHTML = 'Désignation : <strong>En cours...</strong>';
            } else if (contentElement.parentElement.id === 'CodeStock') {
                contentElement.innerHTML = 'Stock : <strong>En cours...</strong>';
            } else if (contentElement.parentElement.id === 'alternativeCodeStock') {
                contentElement.innerHTML = 'Alternative : <strong>En cours...</strong>';
            }
        }
    });
}

// Configure le switch pour le mode sombre
function setupThemeSwitcher() {
    const themeSwitch = document.getElementById('checkbox');
    if (!themeSwitch) {
        console.error("Élément checkbox pour le thème non trouvé");
        return;
    }
    
    // Vérifier si l'utilisateur a déjà une préférence
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    console.log("Thème actuel:", currentTheme);
    
    // Appliquer le thème sauvegardé ou celui du système
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    }
    
    // Écouter les changements de thème
    themeSwitch.addEventListener('change', function(e) {
        console.log("Changement de thème détecté:", e.target.checked ? "dark" : "light");
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Configure les boutons de copie
function setupCopyButtons() {
    const resultCards = document.querySelectorAll('.result-card');
    
    resultCards.forEach(card => {
        card.addEventListener('click', handleResultCardClick);
    });
}

// Configuration globale des tooltips
function setupTooltips() {
    // S'assurer que le tooltip existe
    let tooltip = document.getElementById('tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        tooltip.className = 'tooltip';
        document.body.appendChild(tooltip);
    }
    
    // Ajouter les événements aux éléments avec data-title
    document.querySelectorAll('[data-title]').forEach(el => {
        el.addEventListener('mouseenter', function() {
            showTooltipEnhanced(this);
        });
        el.addEventListener('mouseleave', function() {
            hideTooltipEnhanced();
        });
    });
    
    // Configurer les tooltips pour les boutons de l'étape 1 spécifiquement
    document.querySelectorAll('.category-image-button').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            showTooltipEnhanced(this);
        });
        
        button.addEventListener('mouseleave', function(e) {
            hideTooltipEnhanced();
        });
    });
}

// Fonctions améliorées pour les tooltips
function showTooltipEnhanced(element) {
    if (!element.dataset.title) return;
    
    let tooltip = document.getElementById('tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        tooltip.className = 'tooltip';
        document.body.appendChild(tooltip);
    }
    
    // Remplir le tooltip avec le contenu formaté
    tooltip.innerHTML = element.dataset.title;
    tooltip.classList.add('visible');
    
    // Positionner le tooltip de manière optimale
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Calculer la position optimale basée sur l'espace disponible
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    
    if (spaceBelow >= 150 || spaceBelow > spaceAbove) {
        // Positionner en dessous si assez d'espace ou plus d'espace qu'au-dessus
        tooltip.style.top = (rect.bottom + scrollTop + 10) + 'px';
    } else {
        // Sinon, positionner au-dessus
        tooltip.style.top = (rect.top + scrollTop - tooltip.offsetHeight - 10) + 'px';
    }
    
    // Centrer horizontalement avec limites de largeur d'écran
    let leftPos = rect.left + scrollLeft + (rect.width / 2) - (tooltip.offsetWidth / 2);
    
    // Éviter de sortir de l'écran
    const rightEdge = window.innerWidth - tooltip.offsetWidth - 10;
    leftPos = Math.min(Math.max(10, leftPos), rightEdge);
    
    tooltip.style.left = leftPos + 'px';
}

function hideTooltipEnhanced() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.classList.remove('visible');
    }
}

// Remplacer la fonction showTooltip existante
function showTooltip(element) {
    showTooltipEnhanced(element);
}

// Remplacer la fonction hideTooltip existante
function hideTooltip() {
    hideTooltipEnhanced();
}

// -----------------------------------------------------------------------------
// Fonctions de navigation
// -----------------------------------------------------------------------------

function navigateToStep(nextStep) {
    console.log("Navigation vers l'étape:", nextStep);
    
    const currentStepElement = document.getElementById(`step${state.currentStep}`);
    if (!currentStepElement) {
        console.error(`Élément step${state.currentStep} non trouvé`);
        return;
    }
    
    currentStepElement.classList.remove('active');
    
    if (nextStep > 10) {
        finalizeResult();
        return;
    }
    
    state.currentStep = nextStep;
    
    const nextStepElement = document.getElementById(`step${state.currentStep}`);
    if (!nextStepElement) {
        console.error(`Élément step${state.currentStep} non trouvé`);
        return;
    }
    
    nextStepElement.classList.add('active');
    updateProgress(state.currentStep);
    
    // Ajuster automatiquement la taille des boutons pour l'étape active
    updateButtonSizesBasedOnSection(`#step${nextStep}`);
    
    // Optimiser les grilles de boutons pour l'étape active
    setTimeout(optimizeButtonGrids, 10); // Petit délai pour laisser le DOM se mettre à jour
    
    // Ensure step 10 is only proposed for specific profiles
    if (nextStep === 9 && !['AT10', 'H', 'AT20', 'XH'].includes(state.profile)) {
        finalizeResult();
    }
    
    // Mettre à jour les résultats en temps réel
    updateLiveResults();
}

function goBack(previousStep) {
    console.log("Retour à l'étape:", previousStep);
    
    // Mettre les résultats en "mode en cours" lorsqu'on revient en arrière
    resetResultsToInProgress();
    
    // Naviguer vers l'étape précédente
    navigateToStep(previousStep);
}

// Réinitialise l'état des résultats lorsqu'on revient en arrière
function resetResultsToInProgress() {
    document.querySelectorAll('.result-card').forEach(card => {
        // Remettre les cartes en mode "en cours"
        card.classList.add('in-progress');
        card.classList.remove('finalized');
        card.style.cursor = 'default';
        
        // Désactiver les événements de copie
        card.removeEventListener('click', handleResultCardClick);
    });
    
    // Mettre à jour le contenu des résultats avec "En cours..."
    updateResultContainer('result', `Code : <strong>En cours...</strong>`);
    updateResultContainer('designation', `Désignation : <strong>En cours...</strong>`);
    updateResultContainer('CodeStock', `Stock : <strong>En cours...</strong>`);
    updateResultContainer('alternativeCodeStock', `Alternative : <strong>En cours...</strong>`);
    
    // Masquer l'info de soudabilité
    const weldabilityElement = document.getElementById('weldabilityInfo');
    if (weldabilityElement) {
        weldabilityElement.innerHTML = '';
        weldabilityElement.className = 'weldability';
    }
}

function updateProgress(step) {
    const totalSteps = 10;
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

    for (const [groupName, groupProfiles] of Object.entries(profiles)) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = `${groupName}`;

        for (const [code, data] of Object.entries(groupProfiles)) {
            if (isProfileCompatibleWithCategory(code, category)) {
                const option = document.createElement('option');
                option.value = code;
                option.textContent = data.display || code;
                optgroup.appendChild(option);
            }
        }

        if (optgroup.children.length > 0) {
            select.appendChild(optgroup);
        }
    }
}

function isProfileCompatibleWithCategory(profile, category) {
    const compatibleCategories = {
        "R": ["T2.5", "T5", "T10", "T20", "MXL", "XL", "L", "H", "XH", "AT3", "AT5", "AT10", "AT15", "AT20", "ATK5-K6", "TK5-K6", "TK10-K6", "TK10-K13", "TK20-K13", "ATK10-K6", "ATK10-K13", "H-K13", "HT3", "HT5", "HT8", "HT14", "FT5", "FT10", "FAT5", "FAT10", "ST5", "ST8", "ST14", "RP5", "RP8", "RP14", "E5", "E8", "E10", "E14", "SAT10", "ATF10", "ATM10", "ATF20", "PG14M", "PG20M", "F1", "F2", "F2.5", "F3", "F8.75"],
        "V": ["T2.5", "T5", "T10", "T20", "MXL", "XL", "L", "H", "XH", "AT3", "AT5", "AT10", "AT15", "AT20", "ATK5-K6", "TK5-K6", "TK10-K6", "TK10-K13", "TK20-K13", "ATK10-K6", "ATK10-K13", "H-K13", "HT3", "HT5", "HT8", "HT14", "FT5", "FT10", "FAT5", "FAT10", "ST5", "ST8", "ST14", "RP5", "RP8", "RP14", "E5", "E8", "E10", "E14", "SAT10", "ATF10", "ATM10", "ATF20", "PG14M", "PG20M", "F1", "F2", "F2.5", "F3", "F8.75"],
        "F": ["FT5", "FT10", "FAT5", "FAT10", "T5", "T10", "T20", "XL", "L", "H", "XH", "AT3", "AT5", "AT10", "AT15", "AT20", "ATK5-K6", "ATK10-K6", "HT5", "HT8", "HT14", "ST5", "ST8", "ST14", "RP5", "RP8", "RP14", "ATM10", "F2", "F2.5", "F3"],
        "W": ["T10", "H"],
        "U": ["T2.5", "T5", "T10", "XL", "L", "AT5", "AT10"]
    };

    return compatibleCategories[category]?.includes(profile) || false;
}

// ** Étape 3 : Sélection de la largeur **
function updateStep3Options() {
    const widthOptionsDiv = document.getElementById('widthOptions');
    widthOptionsDiv.innerHTML = '';
    widthOptionsDiv.className = 'button-container'; // Assure que le conteneur a la classe correcte

    if (state.category === 'W') {
        const specialWidths = {
            'H': ['254', '304', '406', '457', '508'],
            'T10': ['250', '300', '350', '400', '450', '500']
        }[state.profile];

        if (specialWidths) {
            specialWidths.forEach(width => {
                createWidthButton(width, widthOptionsDiv);
            });
            return;
        }
    }

    const profileGroup = getProfileGroup(state.profile);
    const profile = state.beltsData.profiles[profileGroup][state.profile];

    profile.widths.forEach(width => {
        const label = profileGroup === 'Imperial' ? convertToInches(width) : `${width}mm`;
        createWidthButton(width, widthOptionsDiv, label);
    });
}

function createWidthButton(width, container, label = `${width}mm`) {
    const button = document.createElement('button');
    button.textContent = label;
    button.onclick = () => selectOption('', width, 4);
    container.appendChild(button);
}

function selectCustomWidth() {
    const customWidthInput = document.getElementById('customWidthInput');
    let customWidth = customWidthInput.value.trim();

    resetErrors();

    if (validateCustomWidth(customWidth)) {
        customWidth = customWidth.padStart(3, '0');
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
    cableButtonsDiv.className = 'button-container'; // Assure que le conteneur a la classe correcte

    const profile = state.profile;
    const cables = state.beltsData.cables;

    for (const cableCode of Object.keys(cables)) {
        if (isCompatible(profile, cableCode)) {
            const button = document.createElement('button');
            button.textContent = cables[cableCode].name;
            button.onclick = () => selectOption('', cableCode, 5);
            cableButtonsDiv.appendChild(button);
        }
    }
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
            // Marquer les résultats comme "en cours" avant de passer à l'étape finale
            resetResultsToInProgress();
            finalizeResult();
        } else {
            resetResultsToInProgress(); // Réinitialiser les résultats à "en cours"
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
    if (state.category !== 'U' && sizeValue < 600) {
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
    suggestionsContainer.className = 'button-container'; // Assure que le conteneur a la classe correcte

    sizes.forEach(size => {
        const button = document.createElement('button');
        button.textContent = `${size} mm`;
        button.onclick = () => {
            state.size = String(size).padStart(5, '0');
            if (shouldSkipCoating()) {
                state.optionalOption1 = '/Z';
                state.optionalOption1Desc = 'PAZ';
                finalizeResult();
            } else {
                navigateToStep(7);
            }
        };
        suggestionsContainer.appendChild(button);
    });
}

// ** Étape 7 : Sélection du revêtement **
function selectOptionalOption(value, desc) {
    if (desc === 'PAZ' || desc === 'PAR' || desc === 'PAZAS' || desc === 'PARAS') {
        // Toggle PAZ/PAZAS options
        if (state.optionalOption1.includes(value)) {
            state.optionalOption1 = state.optionalOption1.replace(value, '');
            state.optionalOption1Desc = state.optionalOption1Desc.replace(desc, '');
        } else {
            state.optionalOption1 += value;
            state.optionalOption1Desc += desc;
        }
    } else {
        // Handle other options
        state.optionalOption1 = value;
        state.optionalOption1Desc = desc;
    }

    // Clean up descriptions
    state.optionalOption1Desc = state.optionalOption1Desc.replace('Sans', '');
    if (state.optionalOption1Desc === '') {
        state.optionalOption1 = '';
    }

    navigateToStep(8);
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
    
    // Mettre à jour les résultats en temps réel après chaque sélection
    updateLiveResults();
    
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

// Fonction pour mettre à jour les résultats en temps réel
function updateLiveResults() {
    try {
        // Génération des codes basés sur l'état actuel
        let codeArticle = generateCodeArticle();
        let designation = generateDesignation();
        let codeStock = generateCodeStock();
        let alternativeCodeStock = generateAlternativeCodeStock();
        
        // Mise à jour des conteneurs avec des textes plus courts
        updateResultContainer('result', `Code : <strong>${codeArticle || 'En cours...'}</strong>`);
        updateResultContainer('designation', `Désignation : <strong>${designation || 'En cours...'}</strong>`);
        updateResultContainer('CodeStock', `Stock : <strong>${codeStock || 'En cours...'}</strong>`);
        updateResultContainer('alternativeCodeStock', `Alternative : <strong>${alternativeCodeStock || 'En cours...'}</strong>`);
        
        // Mettre à jour l'info de soudabilité si c'est une courroie V
        if (state.category === 'V' && state.profile && state.width) {
            updateWeldabilityInfo();
        }
    } catch (error) {
        console.error('Erreur dans updateLiveResults:', error);
    }
}

function updateResultContainer(id, htmlContent) {
    const container = document.getElementById(id);
    if (container) {
        const contentElement = container.querySelector('.result-content');
        if (contentElement) {
            contentElement.innerHTML = htmlContent;
        }
    }
}

function updateWeldabilityInfo() {
    const weldabilityElement = document.getElementById('weldabilityInfo');
    if (!weldabilityElement) return;
    
    const weldabilityMessage = getWeldabilityMessage(state.profile, state.width);
    const cssClass = getWeldabilityClass(weldabilityMessage);
    weldabilityElement.className = `weldability ${cssClass}`;
    weldabilityElement.innerHTML = `<strong>Faisabilité :</strong> ${weldabilityMessage}`; // Texte simplifié
}

// Générer le code article en fonction de l'état actuel
function generateCodeArticle() {
    if (!state.category) return '';
    
    let codeArticle = '';
    let width = state.width || '';
    let size = state.size || '';

    // Pour les profils impériaux, arrondir la longueur à l'entier inférieur
    if (state.profile && getProfileGroup(state.profile) === 'Imperial' && size) {
        size = Math.floor(parseInt(size)).toString().padStart(5, '0');
    }

    switch (state.category) {
        case 'R':
            codeArticle = `R${width}${state.profile || ''}${state.cable || ''}`;
            break;
        case 'V':
            codeArticle = `V${width}${state.profile || ''}${state.cable || ''}${size}`;
            break;
        case 'F':
            codeArticle = `F${width}${state.profile || ''}${state.cable || ''}${size}`;
            break;
        case 'W':
            codeArticle = `W${width}${state.profile || ''}${state.cable || ''}${size}`;
            break;
        case 'U':
            codeArticle = state.profile ? `${state.profile}${size ? '-' + parseInt(size) : ''}` : '';
            break;
        default:
            codeArticle = 'Format non défini';
    }

    if (state.optionalOption1) {
        codeArticle += state.optionalOption1;
    }

    if (state.finalOption) {
        codeArticle += "+" + state.finalOption;
    }

    if (state.guide) {
        codeArticle += "+" + state.guide;
    }

    if (state.falseTeeth) {
        codeArticle += "+EFT" + state.falseTeeth;
    }

    return codeArticle;
}

// Finaliser les résultats et activer la copie
function finalizeResult() {
    // Appeler une dernière fois la mise à jour des résultats
    updateLiveResults();
    
    // Marquer les résultats comme finalisés
    document.querySelectorAll('.result-card').forEach(card => {
        card.classList.remove('in-progress');
        card.classList.add('finalized');
        card.style.cursor = 'pointer';
        
        // Réactiver les événements de copie
        card.addEventListener('click', handleResultCardClick);
    });
    
    // Rendre visible les conteneurs de résultats sans défiler la page
    // Seulement si le conteneur de résultats n'est pas déjà visible
    const resultContainer = document.getElementById('result-container');
    const containerRect = resultContainer.getBoundingClientRect();
    
    // Si le conteneur n'est pas visible dans la fenêtre actuelle
    if (containerRect.bottom > window.innerHeight || containerRect.top < 0) {
        resultContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'end',  // Aligner avec le bas de la fenêtre
            inline: 'nearest' 
        });
    }
}

// Gestionnaire d'événement pour la copie du résultat
function handleResultCardClick(event) {
    const contentElement = this.querySelector('.result-content');
    if (!contentElement) {
        console.error("Élément de contenu non trouvé");
        return;
    }
    
    const content = contentElement.textContent;
    const splitPosition = content.indexOf(':');
    
    if (splitPosition === -1) {
        console.error("Format de contenu incorrect:", content);
        return;
    }
    
    const textToCopy = content.substring(splitPosition + 1).trim();
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            this.classList.add('copied');
            
            // Afficher une notification
            const tooltip = this.querySelector('.copy-tooltip');
            if (tooltip) {
                const originalText = tooltip.textContent;
                tooltip.textContent = 'Copié !';
                
                setTimeout(() => {
                    this.classList.remove('copied');
                    tooltip.textContent = originalText;
                }, 2000);
            }
        })
        .catch(err => {
            console.error('Erreur lors de la copie: ', err);
        });
}

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

        if (state.finalOptionDesc) {
			let coating = state.finalOptionDesc;
			if (state.coatingThickness) {
				coating += ` (${state.coatingThickness}mm)`;
			}
            designationParts.push(coating); // Ajout de la description du revêtement
        }

        if (state.guideDesc) {
            designationParts.push(state.guideDesc); // Ajout de la description du guide
        }
		
		if (state.falseTeeth) {
            designationParts.push(`${state.falseTeeth} EFT`); // Ajout des fausses dents
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
    if (state.category !== 'R' && getWeldability(state.profile, selectedWidth) !== 'YES') {
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

    const profileGroup = getProfileGroup(state.profile);
    const profileData = state.beltsData.profiles[profileGroup][state.profile];
    const widths = profileData.widths.map(w => parseInt(w));
	
	// Retirer les zéros en début de largeur sauf si c'est un profil Imperial
    if (getProfileGroup(state.profile) === 'Imperial') {
        selectedWidth = selectedWidth.replace(/^0+/, '');
        baseCode = 'R400';
    } else {
        selectedWidth = selectedWidth.replace(/^0+/, ''); // Retirer les zéros en début
    }

    // Trouver la largeur alternative
    let alternativeWidth = null;
    let originalWidth = parseInt(selectedWidth);

    // Parcourir les largeurs disponibles en ordre décroissant pour prioriser la valeur la plus élevée
    for (let i = widths.length - 1; i >= 0; i--) {
        let width = widths[i];
        if (originalWidth % width === 0) {
            alternativeWidth = width;
            break;
        }
    }

    if (alternativeWidth === null) {
        return 'N/A'; // Si aucune largeur alternative valide n'est trouvée
    }

    if (state.category === 'U') {
        alternativeCodeStock = 'N/A';
    } else if (state.category === 'R') {
        alternativeCodeStock = `${baseCode}${state.profile}${state.cable}/P${alternativeWidth}`;
    } else if (state.category === 'V') {
        alternativeCodeStock = `${baseCode}${state.profile}${state.cable}/P${alternativeWidth}`;
    } else if (state.category === 'F') {
        alternativeCodeStock = 'Impossible';
    }

    if (state.optionalOption1) {
        alternativeCodeStock += state.optionalOption1.replace(/^\//, '');
    }

    return alternativeCodeStock;
}

function validateFalseTeeth(value) {
    if (value === '') {
        state.falseTeeth = '';
        resetResultsToInProgress(); // Réinitialiser avant de finaliser
        finalizeResult();
        return;
    }
    
    const input = document.getElementById('falseTeethInput');
    if (!input) {
        console.error('Élément falseTeethInput non trouvé');
        return;
    }
    
    const inputValue = input.value;
    
    if (inputValue && !isNaN(inputValue) && parseInt(inputValue) > 0) {
        state.falseTeeth = inputValue;
        resetResultsToInProgress(); // Réinitialiser avant de finaliser
        finalizeResult();
    } else {
        alert('Veuillez entrer un nombre valide de fausses dents.');
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

// Fonctions améliorées pour les tooltips
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

function showTooltip(element) {
    showTooltipEnhanced(element);
}

function hideTooltip() {
    hideTooltipEnhanced();
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
}

function selectFinalOption(code, description, durete, couleur) {
    state.finalOption = code;
    state.finalOptionDesc = description;
    state.finalOptionDurete = durete;
    state.finalOptionCouleur = couleur;
    if (code === '') {
        state.finalOptionDesc = '';
    }
    
    // Réinitialiser les résultats à "en cours"
    resetResultsToInProgress();
    
    if (requiresCoatingThickness(code)) {
        navigateToStep(8.5);
    } else {
        navigateToStep(9); // Aller à l'étape 9 après la sélection de l'option finale
    }
}

function validateCoatingThickness() {
	const thicknessInput = document.getElementById('coatingThicknessInput').value;
	if (thicknessInput && !isNaN(thicknessInput)) {
		state.coatingThickness = thicknessInput;
		navigateToStep(9);
	} else {
		alert('Please enter a valid coating thickness.');
	}
}

function selectGuide(guideCode) {
    state.guideDesc = guideCode ? `avec Guide ${guideCode}` : '';
    state.guide = guideCode;
    
    // Réinitialiser les résultats à "en cours" avant de finaliser
    resetResultsToInProgress();
    finalizeResult();
}

function requiresCoatingThickness(code) {
	const coatingsRequiringThickness = ['CFX', 'PUR70', 'PUR85', 'PY50', 'PY70', 'POR', 'SYL-B', 'SYL-V', 'SYL-M', 'FBPU', 'FBPVC', 'PVCW', 'PVCG', 'SG50T', 'LTX', 'LNP', 'LTR', 'TNX', 'VTN', 'RP400', 'CRX', 'APL', 'SLC', 'SLCPU', 'SLCF', 'TG50', 'TG70', 'CHRL', 'RIB-H-APL', 'RIB-H-PU70'];
	return coatingsRequiringThickness.includes(code);
}

// Ajustement dynamique de la taille des boutons en fonction de leur nombre
function adjustButtonSizes() {
    // Pour l'étape 8 (revêtements)
    const step8CategoryContainers = document.querySelectorAll('#step8 .category-buttons');
    step8CategoryContainers.forEach(container => {
        const buttonCount = container.querySelectorAll('.category-image-button').length;
        if (buttonCount > 8) {
            container.classList.add('high-density');
            container.classList.remove('medium-density', 'low-density');
        } else if (buttonCount > 5) {
            container.classList.add('medium-density');
            container.classList.remove('high-density', 'low-density');
        } else {
            container.classList.add('low-density');
            container.classList.remove('high-density', 'medium-density');
        }
    });
    
    // Pour l'étape 1 (catégories)
    const step1Container = document.querySelector('#step1 .category-buttons');
    if (step1Container) {
        const buttonCount = step1Container.querySelectorAll('.category-image-button').length;
        if (buttonCount <= 5) {
            step1Container.classList.add('low-density');
        }
    }
}

// Fonction pour modifier la taille des boutons selon la section
function updateButtonSizesBasedOnSection(sectionId) {
    const buttons = document.querySelectorAll(`${sectionId} .category-image-button`);
    
    // Définir les tailles en fonction de la section
    let width, height;
    
    switch (sectionId) {
        case '#step1': // Page d'accueil - grands boutons
            width = '140px';
            height = '140px';
            break;
        case '#step7': // Tissus - taille moyenne
            width = '120px';
            height = '120px';
            break;
        case '#step8': // Revêtements - petits boutons car nombreux
            width = '100px';
            height = '110px';
            break;
        default:
            return; // Ne rien faire pour les autres sections
    }
    
    // Appliquer les tailles
    buttons.forEach(button => {
        button.style.width = width;
        button.style.height = height;
    });
}

// Optimisation des grilles de boutons
function optimizeButtonGrids() {
    // Adapter les grilles en fonction du nombre de boutons
    document.querySelectorAll('.category-buttons').forEach(container => {
        const buttons = container.querySelectorAll('.category-image-button');
        const buttonCount = buttons.length;
        
        // Centrer tous les conteneurs
        container.style.marginLeft = 'auto';
        container.style.marginRight = 'auto';
        
        // Si moins de 6 boutons, centrer la grille
        if (buttonCount > 0 && buttonCount <= 5) {
            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.justifyContent = 'center';
            container.style.maxWidth = `${buttonCount * 170}px`;
        } else {
            container.style.display = 'grid';
            container.style.justifyItems = 'center';
        }
    });
    
    // Centrer les autres conteneurs de boutons
    document.querySelectorAll('.button-container').forEach(container => {
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'center';
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM entièrement chargé");
    try {
        initializeApp();
        console.log("Application initialisée avec succès");
    } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
    }
});

// Ajout d'un gestionnaire d'erreurs global
window.addEventListener('error', function(event) {
    console.error("Erreur globale capturée:", event.message, "à", event.filename, ":", event.lineno);
});

// Assurer que la fonction s'exécute aussi lors du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (document.querySelector('.step.active')) {
        optimizeButtonGrids();
    }
});

// Réinitialise complètement l'application pour recommencer
function restartApp() {
    console.log("Redémarrage de l'application...");
    
    // Réinitialiser l'état
    for (let key in state) {
        if (key !== 'beltsData') { // Garder les données de référence
            state[key] = '';
        }
    }
    state.currentStep = 1;
    
    // Réinitialiser les éléments d'interface
    resetResultsToInProgress();
    
    // Masquer toutes les étapes et afficher l'étape 1
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step1').classList.add('active');
    
    // Mettre à jour la barre de progression
    updateProgress(1);
    
    // Nettoyer les inputs si présents
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => input.value = '');
    
    // Réinitialiser le select du profil
    const profileSelect = document.getElementById('profileSelect');
    if (profileSelect) profileSelect.innerHTML = '';
    
    // Nettoyer les infos de soudabilité
    const weldabilityElement = document.getElementById('weldabilityInfo');
    if (weldabilityElement) {
        weldabilityElement.innerHTML = '';
        weldabilityElement.className = 'weldability';
    }
    
    // Mettre à jour les boutons pour l'étape 1
    adjustButtonSizes();
    optimizeButtonGrids();
    
    console.log("Application redémarrée, retour à l'étape 1");
}

function goBack(previousStep) {
    console.log("Retour à l'étape:", previousStep);
    
    // Mettre les résultats en "mode en cours" lorsqu'on revient en arrière
    resetResultsToInProgress();
    
    // Naviguer vers l'étape précédente
    navigateToStep(previousStep);
}

// Réinitialise l'état des résultats lorsqu'on revient en arrière
function resetResultsToInProgress() {
    document.querySelectorAll('.result-card').forEach(card => {
        // Remettre les cartes en mode "en cours"
        card.classList.add('in-progress');
        card.classList.remove('finalized');
        card.style.cursor = 'default';
        
        // Désactiver les événements de copie
        card.removeEventListener('click', handleResultCardClick);
    });
    
    // Mettre à jour le contenu des résultats avec "En cours..."
    updateResultContainer('result', `Code : <strong>En cours...</strong>`);
    updateResultContainer('designation', `Désignation : <strong>En cours...</strong>`);
    updateResultContainer('CodeStock', `Stock : <strong>En cours...</strong>`);
    updateResultContainer('alternativeCodeStock', `Alternative : <strong>En cours...</strong>`);
    
    // Masquer l'info de soudabilité
    const weldabilityElement = document.getElementById('weldabilityInfo');
    if (weldabilityElement) {
        weldabilityElement.innerHTML = '';
        weldabilityElement.className = 'weldability';
    }
}