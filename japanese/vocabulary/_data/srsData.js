// Configuration
const localStorageKey = "japanese" + "Vocabulary" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study between 5 and 11 new Korean characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
"ごはん" : {"letter":  "meal", "type": "noun" },
"むすめ" : {"letter": "daughter" },
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
