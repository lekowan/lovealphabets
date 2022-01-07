// Configuration
const localStorageKey = "greek" + "AllCaseCharacters" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "el-GR";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Greek letters (both uppercase and lowercase) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "Α": { "letter" :  "a" },
    "Β": { "letter" :  "v" },
    "Γ": { "letter" :  "g" },
    "Δ": { "letter" :  "d" },
    "Ε": { "letter" :  "e" },
    "Ζ": { "letter" :  "z" },
    "Η": { "letter" :  "ī" },
    "Θ": { "letter" :  "th" },
    "Ι": { "letter" :  "i" },
    "Κ": { "letter" :  "k" },
    "Λ": { "letter" :  "l" },
    "Μ": { "letter" :  "m" },
    "Ν": { "letter" :  "n" },
    "Ξ": { "letter" :  "x" },
    "Ο": { "letter" :  "o" },
    "Π": { "letter" :  "p" },
    "Ρ": { "letter" :  "r" },
    "Σ": { "letter" :  "s" },
    "Τ": { "letter" :  "t" },
    "Υ": { "letter" :  "y" },
    "Φ": { "letter" :  "f" },
    "Χ": { "letter" :  "ch" },
    "Ψ": { "letter" :  "ps" },
    "Ω": { "letter" :  "ō" },
    "α": { "letter" :  "a" },
    "β": { "letter" :  "v" },
    "γ": { "letter" :  "g" },
    "δ": { "letter" :  "d" },
    "ε": { "letter" :  "e" },
    "ζ": { "letter" :  "z" },
    "η": { "letter" :  "ī" },
    "θ": { "letter" :  "th" },
    "ι": { "letter" :  "i" },
    "κ": { "letter" :  "k" },
    "λ": { "letter" :  "l" },
    "μ": { "letter" :  "m" },
    "ν": { "letter" :  "n" },
    "ξ": { "letter" :  "x" },
    "ο": { "letter" :  "o" },
    "π": { "letter" :  "p" },
    "ρ": { "letter" :  "r" },
    "σ": { "letter" :  "s" },
    "ς": { "letter" :  "s" },
    "τ": { "letter" :  "t" },
    "υ": { "letter" :  "y" },
    "φ": { "letter" :  "f" },
    "χ": { "letter" :  "ch" },
    "ψ": { "letter" :  "ps" },
    "ω": { "letter" :  "ō" }
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
