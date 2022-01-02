// Configuration
const localStorageKey = "korean" + "Characters" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ko-KR";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

// Welcome Popover Content
const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Korean characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "1": {
    "character": "ㅏ",
    "letter": "a"
  },
  "2": {
    "character": "ㅐ",
    "letter": "ae"
  },
  "3": {
    "character": "ㅑ",
    "letter": "ya"
  }
};

function getCharacter(n){
  if (!n) {
    n = this;
  }
  console.log(n);
  let obj = allSyllableMap[n];
  console.log('char', obj);
  return obj["character"];   
}

function translation(n) {
  if (!n) {
    n = this;
  }
  console.log(n);
  let obj = allSyllableMap[n];
  console.log(obj);
  return obj["letter"];
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;