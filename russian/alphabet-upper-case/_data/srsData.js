// Configuration
const localStorageKey = "russian" + "UpperCaseCharacters" + "Srs"

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ru-RU";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Cyrillic letters (uppercase only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "А": { "letter": "a" },
    "Б": { "letter":"b"},
    "В": { "letter":"v"},
    "Г": { "letter":"g"},
    "Д": { "letter":"d"},
    "Е": { "letter": ["ye","je","e"]},
    "Ё": { "letter": ["yo","jo"]},
    "Ж": { "letter":"zh"},
    "З": { "letter":"z"},
    "И": { "letter":"i"},
    "Й": { "letter":["y","i","j"]},
    "К": { "letter":"k"},
    "Л": { "letter":"l"},
    "М": { "letter":"m"},
    "Н": { "letter":"n"},
    "О": { "letter":"o"},
    "П": { "letter":"p"},
    "Р": { "letter":"r"},
    "С": { "letter":"s"},
    "Т": { "letter":"t"},
    "У": { "letter":"u"},
    "Ф": { "letter":"f"},
    "Х": { "letter":["kh","h"]},
    "Ц": { "letter":["ts","c"]},
    "Ч": { "letter":"ch"},
    "Ш": { "letter":["sh","s"]},
    "Щ": { "letter":["shch","sch"]},
    "Ъ": { "letter":"-"},
    "Ы": { "letter":"y"},
    "Ь": { "letter":"-"},
    "Э": { "letter":["e","è"]},
    "Ю": { "letter":["yu","ju"]},
    "Я": { "letter":["ya","ja"]},
  }


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
