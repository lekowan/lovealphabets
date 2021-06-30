// Configuration
const localStorageKey = "bengali" + "VowelsConsonants" + "Srs"

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Bengali characters (vowels and consonants with inherent 'a' vowel only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
     "অ": {
        "letter": "ô"
    },
    "আ": {
        "letter": "a"
    },
    "ই": {
        "letter": "i"
    },
    "ঈ": {
        "letter": "ī"
    },
    "উ": {
        "letter": "u"
    },
    "ঊ": {
        "letter": "ū"
    },
    "ঋ": {
        "letter": "ṛ"
    },
    "এ": {
        "letter": "e"
    },
    "ঐ": {
        "letter": "oi"
    },
    "ও": {
        "letter": "o"
    },
    "ঔ": {
        "letter": "ou"
    },
    "ক": {
        "letter": "kô"
    },
   
    "খ": {
        "letter": "khô"
    },
   
    "গ": {
        "letter": "gô"
    },
   
    "ঘ": {
        "letter": "ghô"
    },
   
    "ঙ": {
        "letter": "ṅô"
    },
   
    "চ": {
        "letter": "chô"
    },
   
    "ছ": {
        "letter": "chhô"
    },
   
    "জ": {
        "letter": "jô"
    },
   
    "ঝ": {
        "letter": "jhô"
    },
   
    "ঞ": {
        "letter": "ñô"
    },
  
    "ট": {
        "letter": "ṭô"
    },
   
    "ঠ": {
        "letter": "ṭhô"
    },
   
    "ড": {
        "letter": "ḍô"
    },
   
    "ঢ": {
        "letter": "ḍhô"
    },
  
    "ণ": {
        "letter": "ṇô"
    },
  
    "ত": {
        "letter": "tô"
    },
   
    "থ": {
        "letter": "thô"
    },
   
    "দ": {
        "letter": "dô"
    },
  
    "ধ": {
        "letter": "dhô"
    },
   
    "ন": {
        "letter": "nô"
    },
   
    "প": {
        "letter": "pô"
    },
   
    "ফ": {
        "letter": "phô"
    },
   
    "ব": {
        "letter": "bô"
    },
   
    "ভ": {
        "letter": "bhô"
    },
   
    "ম": {
        "letter": "mô"
    },
   
    "য": {
        "letter": "yô"
    },
   
    "র": {
        "letter": "rô"
    },
   
    "ল": {
        "letter": "lô"
    },
  
    "শ": {
        "letter": "shô"
    },
   
    "ষ": {
        "letter": "ṣô"
    },
   
    "স": {
        "letter": "sô"
    },
   
    "হ": {
        "letter": "hô"
    },
  
    "য়": {
        "letter": "ẏô"
    },
  
    "ড়": {
        "letter": "rô"
    },
   
    "ঢ়": {
        "letter": "rhô"
    },
   
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
