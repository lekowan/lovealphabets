// Configuration
const localStorageKey = "tibetan" + "VowelsConsonants" + "Srs"

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Tibetan characters (vowels and consonants with inherent 'a' vowel only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "ི": {
        "letter": "i"
    },
    "ུ": {
        "letter": "u"
    },
    "ེ": {
        "letter": "e"
    },
    "ོ": {
        "letter": "o"
    },
    "ཀ": {
        "letter": "ka"
    },
    "ཅ": {
        "letter": "ca"
    },
    "ཏ": {
        "letter": "ta"
    },
    "པ": {
        "letter": "pa"
    },
    "ཙ": {
        "letter": "tsa"
    },
    "ཞ": {
        "letter": "zha"
    },
    "ར": {
        "letter": "ra"
    },
    "ཧ": {
        "letter": "ha"
    },
    "ཁ": {
        "letter": "kha"
    },
    "ཆ": {
        "letter": "cha"
    },
    "ཐ": {
        "letter": "tha"
    },
    "ཕ": {
        "letter": "pha"
    },
    "ཚ": {
        "letter": "tsha"
    },
    "ཟ": {
        "letter": "za"
    },
    "ལ": {
        "letter": "la"
    },
    "ཨ": {
        "letter": "a"
    },
    "ག": {
        "letter": "ga"
    },
    "ཇ": {
        "letter": "ja"
    },
    "ད": {
        "letter": "da"
    },
    "བ": {
        "letter": "ba"
    },
    "ཛ": {
        "letter": "dza"
    },
    "འ": {
        "letter": "(')a"
    },
    "ཤ": {
        "letter": "sha"
    },
    "ང": {
        "letter": "nga"
    },
    "ཉ": {
        "letter": "nya"
    },
    "ན": {
        "letter": "na"
    },
    "མ": {
        "letter": "ma"
    },
    "ཝ": {
        "letter": "wa"
    },
    "ཡ": {
        "letter": "ya"
    },
    "ས": {
        "letter": "sa"
    },
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
