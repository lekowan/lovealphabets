// Configuration
const localStorageKey = "cherokee" + "Characters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Cherokee characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
   "Ꭰ": { "letter": "a" },
    "Ꭱ": { "letter": "e" },
    "Ꭲ": { "letter": "i" },
    "Ꭳ": { "letter": "o" },
    "Ꭴ": { "letter": "u" },
    "Ꭵ": { "letter": "v" },
    "Ꭶ": { "letter": "ga" },
    "Ꭷ": { "letter": "ka" },
    "Ꭸ": { "letter": "ge" },
    "Ꭹ": { "letter": "gi" },
    "Ꭺ": { "letter": "go" },
    "Ꭻ": { "letter": "gu" },
    "Ꭼ": { "letter": "gv" },
    "Ꭽ": { "letter": "ha" },
    "Ꭾ": { "letter": "he" },
    "Ꭿ": { "letter": "hi" },
    "Ꮀ": { "letter": "ho" },
    "Ꮁ": { "letter": "hu" },
    "Ꮂ": { "letter": "hv" },
    "Ꮃ": { "letter": "la" },
    "Ꮄ": { "letter": "le" },
    "Ꮅ": { "letter": "li" },
    "Ꮆ": { "letter": "lo" },
    "Ꮇ": { "letter": "lu" },
    "Ꮈ": { "letter": "lv" },
    "Ꮉ": { "letter": "ma" },
    "Ꮊ": { "letter": "me" },
    "Ꮋ": { "letter": "mi" },
    "Ꮌ": { "letter": "mo" },
    "Ꮍ": { "letter": "mu" },
    "Ꮎ": { "letter": "na" },
    "Ꮏ": { "letter": "hna" },
    "Ꮐ": { "letter": "nah" },
    "Ꮑ": { "letter": "ne" },
    "Ꮒ": { "letter": "ni" },
    "Ꮓ": { "letter": "no" },
    "Ꮔ": { "letter": "nu" },
    "Ꮕ": { "letter": "nv" },
    "Ꮖ": { "letter": "qua" },
    "Ꮗ": { "letter": "que" },
    "Ꮘ": { "letter": "qui" },
    "Ꮙ": { "letter": "quo" },
    "Ꮚ": { "letter": "quu" },
    "Ꮛ": { "letter": "quv" },
    "Ꮝ": { "letter": "s" },
    "Ꮜ": { "letter": "sa" },
    "Ꮞ": { "letter": "se" },
    "Ꮟ": { "letter": "si" },
    "Ꮠ": { "letter": "so" },
    "Ꮡ": { "letter": "su" },
    "Ꮢ": { "letter": "sv" },
    "Ꮣ": { "letter": "da" },
    "Ꮤ": { "letter": "ta" },
    "Ꮥ": { "letter": "de" },
    "Ꮦ": { "letter": "te" },
    "Ꮧ": { "letter": "di" },
    "Ꮨ": { "letter": "ti" },
    "Ꮩ": { "letter": "do" },
    "Ꮪ": { "letter": "du" },
    "Ꮫ": { "letter": "dv" },
    "Ꮬ": { "letter": "dla" },
    "Ꮭ": { "letter": "tla" },
    "Ꮮ": { "letter": "tle" },
    "Ꮯ": { "letter": "tli" },
    "Ꮰ": { "letter": "tlo" },
    "Ꮱ": { "letter": "tlu" },
    "Ꮲ": { "letter": "tlv" },
    "Ꮳ": { "letter": "tsa" },
    "Ꮴ": { "letter": "tse" },
    "Ꮵ": { "letter": "tsi" },
    "Ꮶ": { "letter": "tso" },
    "Ꮷ": { "letter": "tsu" },
    "Ꮸ": { "letter": "tsv" },
    "Ꮹ": { "letter": "wa" },
    "Ꮺ": { "letter": "we" },
    "Ꮻ": { "letter": "wi" },
    "Ꮼ": { "letter": "wo" },
    "Ꮽ": { "letter": "wu" },
    "Ꮾ": { "letter": "wv" },
    "Ꮿ": { "letter": "ya" },
    "Ᏸ": { "letter": "ye" },
    "Ᏹ": { "letter": "yi" },
    "Ᏺ": { "letter": "yo" },
    "Ᏻ": { "letter": "yu" },
    "Ᏼ": { "letter": "yv" },
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
