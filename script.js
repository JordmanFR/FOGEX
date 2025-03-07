// =============================================================================
// FOGEX - Configurateur de courroie polyuréthane
// =============================================================================

// -----------------------------------------------------------------------------
// 1. CONFIGURATION ET ÉTAT DE L'APPLICATION
// -----------------------------------------------------------------------------

/**
 * État global de l'application - stocke toutes les sélections utilisateur
 */
const state = {
    currentStep: 1,
    category: '',
    width: '',
    profile: '',
    cable: '',
    size: '',
    Fabric1: '',
    Fabric1Desc: '',
    beltsData: {},
    suggestedSizes: [],
    finalOption: '',
    finalOptionDesc: '',
    finalOptionDurete: '',
    finalOptionCouleur: '',
    guide: '',
    guideDesc: '',
    falseTeeth: '',
    coatingThickness: '',
    fabricOption: '', 
    fabricOptionDesc: '' 
};

/**
 * Données des courroies - définition des catégories, profils, câbles et compatibilités
 */
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

/**
 * Table de compatibilité entre catégories, profils et câbles
 * @param {string} category - La catégorie de courroie
 * @returns {Object} Table de compatibilité pour la catégorie
 */
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
            "F8.75": { "A": true, "P": true },
            "FT5": { "K": true, "S": true },
            "FT10": { "K": true, "S": true }, "FAT5": { "K": true, "S": true },
            "FAT10": { "K": true, "S": true }
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
// 2. INITIALISATION ET CONFIGURATION DE L'INTERFACE UTILISATEUR
// -----------------------------------------------------------------------------

/**
 * Initialisation de l'application
 */
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

/**
 * Configuration initiale de l'interface
 */
function setupInitialUI() {
    createProfileSelect();
}

/**
 * Initialisation des conteneurs de résultats
 */
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

/**
 * Configuration du sélecteur de thème sombre/clair
 */
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

/**
 * Configuration des boutons de copie
 */
function setupCopyButtons() {
    const resultCards = document.querySelectorAll('.result-card');
    
    resultCards.forEach(card => {
        card.addEventListener('click', handleResultCardClick);
    });
}

/**
 * Configuration des tooltips
 */
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

/**
 * Affiche un tooltip amélioré
 * @param {HTMLElement} element - Élément déclencheur du tooltip
 */
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

/**
 * Cache le tooltip
 */
function hideTooltipEnhanced() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.classList.remove('visible');
    }
}

/**
 * Met à jour la barre de progression
 * @param {number} step - Étape actuelle
 */
function updateProgress(step) {
    const progressBar = document.getElementById('progress');
    if (!progressBar) {
        console.error("Barre de progression non trouvée");
        return;
    }
    
    // Calculer le pourcentage de progression (10 étapes max)
    const percentage = Math.min((step / 10) * 100, 100);
    progressBar.style.width = `${percentage}%`;
    
    console.log(`Progression mise à jour: ${percentage}%`);
}

/**
 * Ajuste la taille des boutons en fonction de leur nombre
 */
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
        const buttonCount = step1Container.querySelectorAll('..category-image-button').length;
        if (buttonCount <= 5) {
            step1Container.classList.add('low-density');
        }
    }
}

/**
 * Modifie la taille des boutons selon la section
 * @param {string} sectionId - Sélecteur CSS de la section
 */
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

/**
 * Optimise les grilles de boutons
 */
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

// -----------------------------------------------------------------------------
// 3. NAVIGATION ET GESTION DES ÉTAPES
// -----------------------------------------------------------------------------

/**
 * Navigation entre les étapes de l'application
 * @param {number} nextStep - Numéro de l'étape suivante
 */
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
        showResultsPage(); // Afficher la page de résultats
        return;
    }
    
    state.currentStep = nextStep;
    
    const nextStepElement = document.getElementById(`step${state.currentStep}`);
    if (!nextStepElement) {
        console.error(`Élément step${state.currentStep} non trouvé`);
        return;
    }
    
    nextStepElement.classList.add('active');
    
    // Pour les étapes décimales comme 8.5, on arrondit à l'entier supérieur pour la barre de progression
    updateProgress(Math.ceil(state.currentStep));
    
    // Ajuster automatiquement la taille des boutons pour l'étape active
    updateButtonSizesBasedOnSection(`#step${nextStep}`);
    
    // Optimiser les grilles de boutons pour l'étape active
    setTimeout(optimizeButtonGrids, 10); // Petit délai pour laisser le DOM se mettre à jour
    
    // Mettre à jour les résultats en temps réel
    updateLiveResults();
}

/**
 * Affiche la page de résultats finale
 */
function showResultsPage() {
    // Masquer l'étape courante
    const currentStepElement = document.getElementById(`step${state.currentStep}`);
    if (currentStepElement) {
        currentStepElement.classList.remove('active');
    }
    
    // Afficher le récapitulatif des sélections
    updateSelectionsSummary();
    
    // Rendre visible la page de résultats
    const resultsPage = document.getElementById('results-page');
    if (resultsPage) {
        resultsPage.classList.add('active');
    } else {
        console.error("Page de résultats non trouvée dans le DOM");
    }
}

/**
 * Met à jour le récapitulatif des sélections
 */
function updateSelectionsSummary() {
    const summaryContainer = document.getElementById('selections-summary');
    if (!summaryContainer) return;
    
    let summary = '';
    
    // Catégorie
    if (state.category) {
        const categoryName = state.beltsData.categories[state.category]?.name || state.category;
        summary += `<p><strong>Catégorie:</strong> ${categoryName}</p>`;
    }
    
    // Profil
    if (state.profile) {
        summary += `<p><strong>Profil:</strong> ${state.profile}</p>`;
    }
    
    // Largeur
    if (state.width) {
        const displayWidth = getProfileGroup(state.profile) === 'Imperial' 
            ? convertToInches(state.width) 
            : `${parseInt(state.width)}mm`;
        summary += `<p><strong>Largeur:</strong> ${displayWidth}</p>`;
    }
    
    // Câble
    if (state.cable) {
        const cableName = state.beltsData.cables[state.cable]?.name || state.cable;
        summary += `<p><strong>Câble:</strong> ${cableName}</p>`;
    }
    
    // Longueur/Taille
    if (state.size) {
        summary += `<p><strong>Longueur:</strong> ${parseInt(state.size)}mm</p>`;
    }
    
    // Options supplémentaires
    if (state.fabricOptionDesc && state.fabricOptionDesc !== 'Sans') {
        summary += `<p><strong>Tissu:</strong> ${state.fabricOptionDesc}</p>`;
    }
    
    if (state.finalOptionDesc && state.finalOptionDesc !== 'Sans') {
        let coating = state.finalOptionDesc;
        if (state.coatingThickness) {
            coating += ` (${state.coatingThickness}mm)`;
        }
        summary += `<p><strong>Revêtement:</strong> ${coating}</p>`;
    }
    
    if (state.guideDesc) {
        summary += `<p><strong>Guide:</strong> ${state.guideDesc}</p>`;
    }
    
    if (state.falseTeeth) {
        summary += `<p><strong>Fausses dents:</strong> ${state.falseTeeth}</p>`;
    }
    
    summaryContainer.innerHTML = summary;
}

/**
 * Retourne à une étape précédente
 * @param {number} previousStep - Numéro de l'étape précédente
 */
function goBack(previousStep) {
    console.log("Retour à l'étape:", previousStep);
    resetResultsToInProgress();
    navigateToStep(previousStep);
}

/**
 * Redémarre l'application depuis le début
 */
function restartApp() {
    console.log("Redémarrage de l'application...");
    
    for (let key in state) {
        if (key !== 'beltsData') {
            state[key] = '';
        }
    }
    state.currentStep = 1;
    
    resetResultsToInProgress();
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step1').classList.add('active');
    
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => input.value = '');
    
    const profileSelect = document.getElementById('profileSelect');
    if (profileSelect) profileSelect.innerHTML = '';
    
    const weldabilityElement = document.getElementById('weldabilityInfo');
    if (weldabilityElement) {
        weldabilityElement.innerHTML = '';
        weldabilityElement.className = 'weldability';
    }
    
    updateProgress(1);
    
    adjustButtonSizes();
    optimizeButtonGrids();
    
    console.log("Application redémarrée, retour à l'étape 1");
}

/**
 * Réinitialise les résultats à "en cours"
 */
function resetResultsToInProgress() {
    document.querySelectorAll('.result-card').forEach(card => {
        card.classList.remove('finalized');
        card.classList.add('in-progress');
        card.style.cursor = 'default';
        
        card.removeEventListener('click', handleResultCardClick);
        
        updateResultContainer('result', `Code : <strong>En cours...</strong>`);
        updateResultContainer('designation', `Désignation : <strong>En cours...</strong>`);
        updateResultContainer('CodeStock', `Stock : <strong>En cours...</strong>`);
        updateResultContainer('alternativeCodeStock', `Alternative : <strong>En cours...</strong>`);
        
        const weldabilityElement = document.getElementById('weldabilityInfo');
        if (weldabilityElement) {
            weldabilityElement.className = 'weldability';
            weldabilityElement.innerHTML = '';
        }
    });
}

// -----------------------------------------------------------------------------
// 4. GESTION DES SÉLECTIONS UTILISATEUR
// -----------------------------------------------------------------------------

/**
 * Création du sélecteur de profil
 */
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

/**
 * Vérifie si un profil est compatible avec une catégorie
 * @param {string} profile - Code du profil
 * @param {string} category - Code de la catégorie
 * @returns {boolean} - Vrai si compatible
 */
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

/**
 * Met à jour les options de largeur pour l'étape 3
 */
function updateStep3Options() {
    const widthOptionsDiv = document.getElementById('widthOptions');
    widthOptionsDiv.innerHTML = '';
    widthOptionsDiv.className = 'button-container';

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

/**
 * Crée un bouton de sélection de largeur
 * @param {string} width - Valeur de la largeur
 * @param {HTMLElement} container - Conteneur des boutons
 * @param {string} label - Texte du bouton
 */
function createWidthButton(width, container, label = `${width}mm`) {
    const button = document.createElement('button');
    button.textContent = label;
    button.onclick = () => selectOption('', width, 4);
    container.appendChild(button);
}

/**
 * Sélectionne une largeur personnalisée
 */
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

/**
 * Valide une largeur personnalisée
 * @param {string} width - Largeur à valider
 * @returns {boolean} - Vrai si valide
 */
function validateCustomWidth(width) {
    return width.length > 0 && !isNaN(width) && width.length <= 3 && parseInt(width) > 0;
}

/**
 * Met à jour les options de câble pour l'étape 4
 */
function updateStep4Options() {
    const cableButtonsDiv = document.getElementById('cableButtons');
    cableButtonsDiv.innerHTML = '';
    cableButtonsDiv.className = 'button-container';

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

/**
 * Vérifie la compatibilité entre un profil et un câble
 * @param {string} profile - Code du profil
 * @param {string} cable - Code du câble
 * @returns {boolean} - Vrai si compatible
 */
function isCompatible(profile, cable) {
    return compatibilityTable(state.category)[profile] && compatibilityTable(state.category)[profile][cable];
}

/**
 * Valide la taille saisie
 */
function validateSize() {
    const sizeInput = document.getElementById('sizeInput');
    const size = sizeInput.value.trim();
    
    resetErrors();
    
    if (validateSizeInput(size)) {
        state.size = size.padStart(5, '0');
        
        let nextStep = 7; // Étape par défaut : sélection du tissu

        if (skipFabric()) {
            if (skipCoating()) {
                if (skipGuide()) {
                    finalizeResult();
                    showResultsPage();
                    return;
                } else {
                    nextStep = 9; // Guide
                }
            } else {
                nextStep = 8; // Revêtement
            }
        }
        
        resetResultsToInProgress();
        navigateToStep(nextStep);
    } else {
        const profileGroup = getProfileGroup(state.profile);
        const profile = state.beltsData.profiles[profileGroup][state.profile];
        const pitch = profile.pitch;
        const enteredSize = parseInt(sizeInput.value.trim());

        const lowerValidSize = Math.floor(enteredSize / pitch) * pitch;
        const upperValidSize = Math.ceil(enteredSize / pitch) * pitch;

        state.suggestedSizes = [lowerValidSize, upperValidSize].filter(s => s >= 1000);

        if (state.suggestedSizes.length > 0) {
            updateSuggestedSizesUI(state.suggestedSizes);
            navigateToStep(6);
        } else {
            showError('lengthError');
        }
    }
}

/**
 * Valide la saisie de taille
 * @param {string} size - Taille à valider
 * @returns {boolean} - Vrai si valide
 */
function validateSizeInput(size) {
    if (!size || isNaN(size) || size.length > 5 || parseInt(size) <= 0) {
        showError('sizeError');
        return false;
    }
    
    const sizeValue = parseInt(size);
    if (state.category !== 'U' && state.category !== 'R' && sizeValue < 600) {
        showError('lengthError');
        return false;
    }
    
    const profileGroup = getProfileGroup(state.profile);
    const profile = state.beltsData.profiles[profileGroup][state.profile];
    const numberOfTeeth = sizeValue / profile.pitch;
    
    if (!Number.isInteger(numberOfTeeth)) {
        showError('teethError');
        return false;
    }
    
    return true;
}

/**
 * Met à jour l'interface avec les tailles suggérées
 * @param {Array} sizes - Tableau des tailles suggérées
 */
function updateSuggestedSizesUI(sizes) {
    const suggestionsContainer = document.getElementById('suggestedSizes');
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.className = 'button-container';

    sizes.forEach(size => {
        const button = document.createElement('button');
        button.textContent = `${size} mm`;
        button.onclick = () => {
            state.size = String(size).padStart(5, '0');
            
            if (skipFabric()) {
                finalizeResult();
                if (state.category === 'R') {
                    showResultsPage();
                }
                return;
            }
            
            navigateToStep(7);
        };
        suggestionsContainer.appendChild(button);
    });
}

/**
 * Sélectionne une option facultative
 * @param {string} value - Valeur de l'option
 * @param {string} desc - Description de l'option
 */
function selectFabric(value, desc) {
    if (desc === 'PAZ' || desc === 'PAR' || desc === 'PAZAS' || desc === 'PARAS') {
        if (state.fabricOption.includes(value)) { 
            state.fabricOption = state.fabricOption.replace(value, ''); 
            state.fabricOptionDesc = state.fabricOptionDesc.replace(desc, ''); 
        } else {
            state.fabricOption += value; 
            state.fabricOptionDesc += desc; 
        }
    } else {
        state.fabricOption = value; 
        state.fabricOptionDesc = desc; 
    }

    state.fabricOptionDesc = state.fabricOptionDesc.replace('Sans', ''); 
    if (state.fabricOptionDesc === '') { 
        state.fabricOption = ''; 
    }

    if (state.category === 'R') {
        resetResultsToInProgress();
        finalizeResult();
        showResultsPage();
        return;
    }

    let nextStep = 8; // Par défaut, aller à l'étape 8 (revêtement)

    if (skipCoating()) {
        if (skipGuide()) {
            finalizeResult();
            showResultsPage();
            return;
        } else {
            nextStep = 9; // Si on saute le revêtement, aller à l'étape 9 (guide)
        }
    }

    navigateToStep(nextStep);
}

/**
 * Sélection générique d'options
 * @param {string} prefix - Préfixe de l'option
 * @param {string} value - Valeur de l'option
 * @param {number} nextStep - Étape suivante
 */
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
    
    updateLiveResults();
    
    navigateToStep(nextStep);
}

/**
 * Sélectionne un profil
 */
function selectProfile() {
    const profileSelect = document.getElementById('profileSelect');
    state.profile = profileSelect.value;
    updateStep3Options();
    updateStep4Options();
    navigateToStep(3);
}

// -----------------------------------------------------------------------------
// 5. GÉNÉRATION ET AFFICHAGE DU CODE
// -----------------------------------------------------------------------------

/**
 * Met à jour les résultats en temps réel
 */
function updateLiveResults() {
    try {
        let codeArticle = generateCodeArticle();
        let designation = generateDesignation();
        let codeStock = generateCodeStock();
        let alternativeCodeStock = generateAlternativeCodeStock();
        
        updateResultContainer('result', `Code : <strong>${codeArticle || 'En cours...'}</strong>`);
        updateResultContainer('designation', `Désignation : <strong>${designation || 'En cours...'}</strong>`);
        updateResultContainer('CodeStock', `Stock : <strong>${codeStock || 'En cours...'}</strong>`);
        updateResultContainer('alternativeCodeStock', `Alternative : <strong>${alternativeCodeStock || 'En cours...'}</strong>`);
        
        if (state.category === 'V' && state.profile && state.width) {
            updateWeldabilityInfo();
        }
    } catch (error) {
        console.error('Erreur dans updateLiveResults:', error);
    }
}

/**
 * Met à jour le conteneur de résultat
 * @param {string} id - ID du conteneur
 * @param {string} htmlContent - Contenu HTML à insérer
 */
function updateResultContainer(id, htmlContent) {
    const container = document.getElementById(id);
    if (container) {
        const contentElement = container.querySelector('.result-content');
        if (contentElement) {
            contentElement.innerHTML = htmlContent;
        }
    }
}

/**
 * Met à jour les informations de soudabilité
 */
function updateWeldabilityInfo() {
    const weldabilityElement = document.getElementById('weldabilityInfo');
    if (!weldabilityElement) return;
    
    const weldabilityMessage = getWeldabilityMessage(state.profile, state.width);
    const cssClass = getWeldabilityClass(weldabilityMessage);
    weldabilityElement.className = `weldability ${cssClass}`;
    weldabilityElement.innerHTML = `<strong>Faisabilité :</strong> ${weldabilityMessage}`;
}

/**
 * Génère le code article en fonction de l'état actuel
 * @returns {string} - Code article généré
 */
function generateCodeArticle() {
    if (!state.category) return '';
    
    let codeArticle = '';
    let width = state.width || '';
    let size = state.size || '';

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

    if (state.category !== 'R') {
        if (state.fabricOption) { 
            codeArticle += state.fabricOption; 
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
    }

    return codeArticle;
}

/**
 * Finalise les résultats et active la copie
 */
function finalizeResult() {
    updateLiveResults();
    
    document.querySelectorAll('.result-card').forEach(card => {
        card.classList.remove('in-progress');
        card.classList.add('finalized');
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', handleResultCardClick);
    });
    
    const resultContainer = document.getElementById('result-container');
    const containerRect = resultContainer.getBoundingClientRect();
    
    if (containerRect.bottom > window.innerHeight || containerRect.top < 0) {
        resultContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'end',  
            inline: 'nearest' 
        });
    }
}

/**
 * Gestionnaire d'événement pour la copie du résultat
 * @param {Event} event - Événement de clic
 */
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

/**
 * Génère la désignation en fonction de l'état actuel
 * @returns {string} - Désignation générée
 */
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

                if (state.fabricOptionDesc && state.fabricOptionDesc !== 'Sans') { 
                    designationParts.push(state.fabricOptionDesc); 
                }
                
                if (state.finalOptionDesc && state.finalOptionDesc !== 'Sans') {
                    let coating = state.finalOptionDesc;
                    if (state.coatingThickness) {
                        coating += ` (${state.coatingThickness}mm)`;
                    }
                    designationParts.push(coating);
                }

                if (state.guideDesc) {
                    designationParts.push(state.guideDesc);
                }
                
                if (state.falseTeeth) {
                    designationParts.push(`${state.falseTeeth} EFT`);
                }
            }
            else if (state.category === 'R' && state.fabricOptionDesc && state.fabricOptionDesc !== 'Sans') {
                designationParts.push(state.fabricOptionDesc);
            }
        }

        return designationParts.join(' - ');
    } catch (error) {
        console.error('Erreur dans generateDesignation:', error);
        return '';
    }
}

/**
 * Génère le code stock en fonction de l'état actuel
 * @returns {string} - Code stock généré
 */
function generateCodeStock() {
    let codeStock = '';
    let selectedWidth = state.width;

    if (state.category === 'R' || state.category === 'V') {
        const profileGroup = getProfileGroup(state.profile);
        const profileData = state.beltsData.profiles[profileGroup][state.profile];
        
        if (profileData && profileData.widths) {
            const currentWidthNum = parseInt(selectedWidth);
            let foundStandardWidth = false;
            
            for (const stdWidth of profileData.widths) {
                const stdWidthNum = parseInt(stdWidth);
                if (stdWidthNum >= currentWidthNum) {
                    selectedWidth = stdWidth;
                    foundStandardWidth = true;
                    break;
                }
            }
            
            if (!foundStandardWidth && profileData.widths.length > 0) {
                selectedWidth = profileData.widths[profileData.widths.length - 1];
            }
        }
    }

    if (state.category === 'V' && getWeldability(state.profile, selectedWidth) !== 'YES') {
        const nextWidth = getNextWeldableWidth(state.profile, selectedWidth);
        if (nextWidth !== null) {
            selectedWidth = nextWidth;
        }
    }

    if (state.category === 'U') {
        codeStock = `${parseInt(state.size)}${state.profile}`;
    } else if (state.category === 'R') {
        codeStock = `R${selectedWidth}${state.profile}${state.cable}`;
    } else if (state.category === 'V') {
        codeStock = `R${selectedWidth}${state.profile}${state.cable}`;
    } else if (state.category === 'F') {
        codeStock = 'Impossible';
    }

    if (state.fabricOption) { 
        codeStock += state.fabricOption; 
    }

    return codeStock;
}

/**
 * Génère le code stock alternatif en fonction de l'état actuel
 * @returns {string} - Code stock alternatif généré
 */
function generateAlternativeCodeStock() {
    let alternativeCodeStock = '';
    let selectedWidth = state.width;
    let baseCode = 'R100';

    const profileGroup = getProfileGroup(state.profile);
    const profileData = state.beltsData.profiles[profileGroup][state.profile];
    const widths = profileData.widths.map(w => parseInt(w));

    if (getProfileGroup(state.profile) === 'Imperial') {
        selectedWidth = selectedWidth.replace(/^0+/, '');
        baseCode = 'R400';
    } else {
        selectedWidth = selectedWidth.replace(/^0+/, '');
    }

    let alternativeWidth = null;
    let originalWidth = parseInt(selectedWidth);

    for (let i = widths.length - 1; i >= 0; i--) {
        let width = widths[i];
        if (originalWidth % width === 0) {
            alternativeWidth = width;
            break;
        }
    }

    if (alternativeWidth === null) {
        return 'N/A';
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

    if (state.fabricOption) { 
        alternativeCodeStock += state.fabricOption.replace(/^\//, ''); 
    }

    return alternativeCodeStock;
}

/**
 * Valide le nombre de fausses dents
 * @param {string} value - Valeur saisie
 */
function validateFalseTeeth(value) {
    if (value === '') {
        state.falseTeeth = '';
        resetResultsToInProgress();
        finalizeResult();
        showResultsPage();
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
        resetResultsToInProgress();
        finalizeResult();
        showResultsPage();
    } else {
        alert('Veuillez entrer un nombre valide de fausses dents.');
    }
}

// -----------------------------------------------------------------------------
// 6. FONCTIONS UTILITAIRES
// -----------------------------------------------------------------------------

/**
 * Convertit une valeur en millimètres en pouces
 * @param {number} mmValue - Valeur en millimètres
 * @returns {string} - Valeur convertie en pouces
 */
function convertToInches(mmValue) {
    const inchesValue = (mmValue / 100).toFixed(2);
    return `${inchesValue}po`;
}

/**
 * Obtient le groupe de profil pour un code de profil donné
 * @param {string} profileCode - Code du profil
 * @returns {string} - Groupe de profil
 */
function getProfileGroup(profileCode) {
    return Object.entries(state.beltsData.profiles).find(([group, profiles]) => 
        Object.keys(profiles).includes(profileCode)
    )[0];
}

/**
 * Vérifie si l'étape de sélection de tissu doit être sautée
 * @returns {boolean} - Vrai si l'étape doit être sautée
 */
function skipFabric() {
    if (state.profile.startsWith('ST') ||
        state.profile.startsWith('RP') ||
        state.profile.startsWith('E')) {
        state.fabricOption = '/Z';
        state.fabricOptionDesc = 'PAZ';
        return true;
    } else if (state.profile.startsWith('F') ) {
        state.fabricOption = '';
        state.fabricOptionDesc = 'Sans';
        return true;
    }
    return false;
}

/**
 * Vérifie si l'étape de sélection de revêtement doit être sautée
 * @returns {boolean} - Vrai si l'étape doit être sautée
 */
function skipCoating() {
    const fabricOptions = ['PAR', 'PAZ + PAR', 'PARAS', 'PAZAS + PARAS'];
    if (fabricOptions.includes(state.fabricOptionDesc) || state.profile.startsWith('FT') || state.profile.startsWith('FAT')) {
        selectFinalOption('', 'Sans', '', '');
        return true;
    }
    return false;
}

/**
 * Vérifie si l'étape de sélection de guide doit être sautée
 * @returns {boolean} - Vrai si l'étape doit être sautée
 */
function skipGuide() {
    if (state.profile.startsWith('E') ||
        state.profile.startsWith('TK') ||
        state.profile.startsWith('ATK') ||
        state.profile === 'H-K13') {
        state.guide = '';
        state.guideDesc = '';
        return true;
    }
    return false;
}

/**
 * Vérifie si l'étape de sélection de fausses dents doit être sautée
 * @returns {boolean} - Vrai si l'étape doit être sautée
 */
function skipFalseTeeth() {
    return !(['AT10', 'FAT10', 'H', 'AT20', 'XH'].includes(state.profile));
}

/**
 * Réinitialise les messages d'erreur
 */
function resetErrors() {
    ['sizeError', 'lengthError', 'teethError'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}

/**
 * Affiche un message d'erreur
 * @param {string} errorId - ID de l'élément d'erreur
 */
function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
}

/**
 * Obtient la faisabilité de soudure pour un profil et une largeur donnés
 * @param {string} profile - Code du profil
 * @param {string} width - Largeur
 * @returns {string} - Faisabilité de soudure
 */
function getWeldability(profile, width) {
    const weldabilityData = state.beltsData.weldability[profile];
    if (!weldabilityData) return 'NO';

    const currentWeldability = weldabilityData[width];
    if (currentWeldability === 'YES') {
        return 'YES';
    }

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

/**
 * Obtient la prochaine largeur soudable pour un profil donné
 * @param {string} profile - Code du profil
 * @param {string} currentWidth - Largeur actuelle
 * @returns {string|null} - Prochaine largeur soudable ou null
 */
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

    return null;
}

/**
 * Obtient la classe CSS de faisabilité de soudure
 * @param {string} message - Message de faisabilité
 * @returns {string} - Classe CSS
 */
function getWeldabilityClass(message) {
    if (message === state.beltsData.messages.YES) {
        return 'weldability-ok';
    } else if (message === state.beltsData.messages.YES_BUT) {
        return 'weldability-warning';
    }
    return 'weldability-attention';
}

/**
 * Obtient le message de faisabilité de soudure
 * @param {string} profile - Code du profil
 * @param {string} width - Largeur
 * @returns {string} - Message de faisabilité
 */
function getWeldabilityMessage(profile, width) {
    const weldability = getWeldability(profile, width);
    return state.beltsData.messages[weldability] || 'Information non disponible';
}

/**
 * Gère l'événement de touche pour la largeur
 * @param {Event} event - Événement de touche
 */
function handleWidthKeydown(event) {
    if (event.key === 'Enter') {
        selectCustomWidth();
    }
}

/**
 * Gère l'événement de touche pour la longueur
 * @param {Event} event - Événement de touche
 */
function handleLengthKeydown(event) {
    if (event.key === 'Enter') {
        validateSize();
    }
}

/**
 * Sélectionne l'option finale
 * @param {string} code - Code de l'option
 * @param {string} description - Description de l'option
 * @param {string} durete - Dureté de l'option
 * @param {string} couleur - Couleur de l'option
 */
function selectFinalOption(code, description, durete, couleur) {
    state.finalOption = code;
    state.finalOptionDesc = description;
    state.finalOptionDurete = durete;
    state.finalOptionCouleur = couleur;
    if (code === '') {
        state.finalOptionDesc = '';
    }
    
    resetResultsToInProgress();
    
    if (requiresCoatingThickness(code)) {
        navigateToStep(8.5);
    } else {
        let nextStep = 9; // Étape par défaut : sélection du guide

        if (skipGuide()) {
            if (skipFalseTeeth()) {
                finalizeResult();
                showResultsPage();
                return;
            } else {
                nextStep = 10; // Fausses dents
            }
        }

        navigateToStep(nextStep);
    }
}

/**
 * Valide l'épaisseur du revêtement
 */
function validateCoatingThickness() {
	const thicknessInput = document.getElementById('coatingThicknessInput').value;
	if (thicknessInput && !isNaN(thicknessInput) && parseFloat(thicknessInput) > 0) {
		state.coatingThickness = thicknessInput;
		navigateToStep(9);
	} else {
		alert('Veuillez entrer une épaisseur de revêtement valide (nombre positif).');
	}
}

/**
 * Sélectionne un guide
 * @param {string} guideCode - Code du guide
 */
function selectGuide(guideCode) {
    state.guide = guideCode;
    state.guideDesc = guideCode ? `avec Guide ${guideCode}` : '';
    
    resetResultsToInProgress();
    
    if (state.category === 'R') {
        finalizeResult();
        showResultsPage();
        return;
    }
    
    if (skipFalseTeeth()) {
        finalizeResult();
        showResultsPage();
    } else {
        navigateToStep(10);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM entièrement chargé");
    try {
        initializeApp();
        console.log("Application initialisée avec succès");
        
        setupInputValidation();
    } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
    }
});

/**
 * Configuration de la validation des inputs
 */
function setupInputValidation() {
    const numericInputs = [
        document.getElementById('customWidthInput'),
        document.getElementById('sizeInput'),
        document.getElementById('coatingThicknessInput')
    ];
    
    numericInputs.forEach(input => {
        if (input) {
            input.setAttribute('min', '1');
            
            input.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
                
                if (this.value.length > 1 && this.value.startsWith('0')) {
                    this.value = this.value.substring(1);
                }
                
                if (this.value === '' || this.value === '0') {
                    return;
                }
            });
        }
    });
    
    const customWidthError = document.getElementById('customWidthError');
    if (customWidthError) {
        customWidthError.textContent = 'Veuillez entrer une largeur valide (nombre positif, max 3 chiffres).';
    }
    
    const sizeError = document.getElementById('sizeError');
    if (sizeError) {
        sizeError.textContent = 'Veuillez entrer une taille valide (nombre positif).';
    }
}

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

/**
 * Vérifie si une option nécessite une épaisseur de revêtement
 * @param {string} code - Code de l'option
 * @returns {boolean} - Vrai si une épaisseur est requise
 */
function requiresCoatingThickness(code) {
    const excludedCodes = ['', 'SG50T', 'FBPU', 'FBPVC', 'SG50R', 'SG60', 'SG70', 'MG'];
    return !excludedCodes.includes(code);
}

