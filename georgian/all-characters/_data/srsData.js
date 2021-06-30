// Configuration
const localStorageKey = "georgian" + "Characters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Georgian letters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "ა": { "letter" : "a" },
  "ბ": { "letter" : "b" },
  "გ": { "letter" : "g" },
  "დ": { "letter" : "d" },
  "ე": { "letter" : "e" },
  "ვ": { "letter" : "v" },
  "ზ": { "letter" : "z" },
  "თ": { "letter" : "t" },
  "ი": { "letter" : "i" },
  "კ": { "letter" : "k'" },
  "ლ": { "letter" : "l" },
  "მ": { "letter" : "m" },
  "ნ": { "letter" : "n" },
  "ო": { "letter" : "o" },
  "პ": { "letter" : "p'" },
  "ჟ": { "letter" : "zh" },
  "რ": { "letter" : "r" },
  "ს": { "letter" : "s" },
  "ტ": { "letter" : "t'" },
  "უ": { "letter" : "u" },
  "ფ": { "letter" : "p" },
  "ქ": { "letter" : "k" },
  "ღ": { "letter" : "gh" },
  "ყ": { "letter" : "q'" },
  "შ": { "letter" : "sh" },
  "ჩ": { "letter" : "ch" },
  "ც": { "letter" : "ts" },
  "ძ": { "letter" : "dz" },
  "წ": { "letter" : "ts'" },
  "ჭ": { "letter" : "ch'" },
  "ხ": { "letter" : "kh" },
  "ჯ": { "letter" : "j" },
  "ჰ": { "letter" : "h" },
}



function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
