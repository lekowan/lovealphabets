// Configuration
const localStorageKey = "inuktitut" + "IColumnCharacters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Inuktitut characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "ᐃ": { "letter" :  "i" },
  "ᐱ": { "letter" :  "pi" },
  "ᑎ": { "letter" :  "ti" },
  "ᑭ": { "letter" :  "ki" },
  "ᒋ": { "letter" :  "gi" },
  "ᒥ": { "letter" :  "mi" },
  "ᓂ": { "letter" :  "ni" },
  "ᓯ": { "letter" :  "si" },
  "ᓕ": { "letter" :  "li" },
  "ᔨ": { "letter" :  "ji" },
  "ᕕ": { "letter" :  "vi" },
  "ᕆ": { "letter" :  "ri" },
  "ᕿ": { "letter" :  "qi" },
  "ᖏ": { "letter" :  "ngi" },
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
