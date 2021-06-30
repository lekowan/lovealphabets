// Configuration
const localStorageKey = "russian" + "LowerCaseCharacters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Cyrillic letters (lowercase only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "а": { "letter":"a" },
    "б": { "letter":"b" },
    "в": { "letter":"v" },
    "г": { "letter":"g" },
    "д": { "letter":"d" },
    "е": { "letter":["ye","je","e"] },
    "ё": { "letter":["yo","jo"] },
    "ж": { "letter":"zh" },
    "з": { "letter":"z" },
    "и": { "letter":"i" },
    "й": { "letter":["y","i","j"] },
    "к": { "letter":"k" },
    "л": { "letter":"l" },
    "м": { "letter":"m" },
    "н": { "letter":"n" },
    "о": { "letter":"o" },
    "п": { "letter":"p" },
    "р": { "letter":"r" },
    "с": { "letter":"s" },
    "т": { "letter":"t" },
    "у": { "letter":"u" },
    "ф": { "letter":"f" },
    "х": { "letter": ["kh","h"] },
    "ц": { "letter": ["ts","c"] },
    "ч": { "letter":"ch" },
    "ш": { "letter": ["sh","s"] },
    "щ": { "letter": ["shch","sch"] },
    "ъ": { "letter": "-" },
    "ы": { "letter":"y" },
    "ь": { "letter": "-" },
    "э": { "letter": ["e","è"] },
    "ю": { "letter": ["yu","ju"] },
    "я": { "letter": ["ya","ja"] },
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
