// Configuration
const localStorageKey = "arabic" + "IsolatedFormCharacters" + "Srs";
// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ar-SA";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Arabic characters (isolated form only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "ا": {
    "letter": "ʾ"
  },
  "ب": {
    "letter": "b"
  },
  "ج": {
    "letter": "j"
  },
  "د": {
    "letter": "d"
  },
  "ه": {
    "letter": "h"
  },
  "و": {
    "letter": "w"
  },
  "ز": {
    "letter": "z"
  },
  "ح": {
    "letter": "ḥ"
  },
  "ط": {
    "letter": "ṭ"
  },
  "ي": {
    "letter": "y"
  },
  "ك": {
    "letter": "k"
  },
  "ل": {
    "letter": "l"
  },
  "م": {
    "letter": "m"
  },
  "ن": {
    "letter": "n"
  },
  "س": {
    "letter": "s"
  },
  "ع": {
    "letter": "ʿ"
  },
  "ف": {
    "letter": "f"
  },
  "ص": {
    "letter": "ṣ"
  },
  "ق": {
    "letter": "q"
  },
  "ر": {
    "letter": "r"
  },
  "ش": {
    "letter": "sh"
  },
  "ت": {
    "letter": "t"
  },
  "ث": {
    "letter": "th"
  },
  "خ": {
    "letter": "kh"
  },
  "ذ": {
    "letter": "dh"
  },
  "ض": {
    "letter": "ḍ"
  },
  "ظ": {
    "letter": "ẓ"
  },
  "غ": {
    "letter": "gh"
  }
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
