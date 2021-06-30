// Configuration
const localStorageKey = "hindi" + "VowelsConsonants" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "";
const activateSpeech = false;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Devanagari characters (vowels and consonants with inherent 'a' vowel only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "अ": {
        "letter": "a"
    },
    "आ": {
        "letter": "ā"
    },
    "इ": {
        "letter": "i"
    },
    "ई": {
        "letter": "ī"
    },
    "उ": {
        "letter": "u"
    },
    "ऊ": {
        "letter": "ū"
    },
    "ऋ": {
        "letter": "ṛ"
    },
    "ए": {
        "letter": "e"
    },
    "ऐ": {
        "letter": "ai"
    },
    "ओ": {
        "letter": "o"
    },
    "औ": {
        "letter": "au"
    },

    "क": {
        "letter": "ka"
    },

    "ख": {
        "letter": "kha"
    },

    "ग": {
        "letter": "ga"
    },

    "घ": {
        "letter": "gha"
    },

    "ङ": {
        "letter": "ṅa"
    },

    "च": {
        "letter": "ca"
    },

    "छ": {
        "letter": "cha"
    },

    "ज": {
        "letter": "ja"
    },

    "झ": {
        "letter": "jha"
    },

    "ञ": {
        "letter": "ña"
    },

    "ट": {
        "letter": "ṭa"
    },

    "ठ": {
        "letter": "ṭha"
    },
    "ठा": {
        "letter": "ṭhā"
    },

    "ड": {
        "letter": "ḍa"
    },

    "ढ": {
        "letter": "ḍha"
    },

    "ण": {
        "letter": "ṇa"
    },

    "ड़": {
        "letter": "ḍa़"
    },

    "ढ़": {
        "letter": "ḍha़"
    },

    "त": {
        "letter": "ta"
    },

    "थ": {
        "letter": "tha"
    },

    "द": {
        "letter": "da"
    },

    "ध": {
        "letter": "dha"
    },

    "न": {
        "letter": "na"
    },

    "प": {
        "letter": "pa"
    },

    "फ": {
        "letter": "pha"
    },

    "ब": {
        "letter": "ba"
    },

    "भ": {
        "letter": "bha"
    },

    "म": {
        "letter": "ma"
    },

    "य": {
        "letter": "ya"
    },

    "र": {
        "letter": "ra"
    },

    "ल": {
        "letter": "la"
    },

    "व": {
        "letter": "va"
    },

    "श": {
        "letter": "śa"
    },

    "ष": {
        "letter": "ṣa"
    },

    "स": {
        "letter": "sa"
    },

    "ह": {
        "letter": "ha"
    },
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;