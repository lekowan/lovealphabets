// Configuration
const localStorageKey = "korean" + "NativeKorean" + "Srs";

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
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study the Native-Korean numerals. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "하나": {
    "letter": "1"
  },
  "둘": {
    "letter": "2"
  },
  "셋": {
    "letter": "3"
  },
  "넷": {
    "letter": "4"
  },
  "다섯": {
    "letter": "5"
  },
  "여섯": {
    "letter": "6"
  },
  "일곱": {
    "letter": "7"
  },
  "여덟": {
    "letter": "8"
  },
  "아홉": {
    "letter": "9"
  },
  "열": {
    "letter": "10"
  },
  "열하나": {
    "letter": "11"
  },
  "열둘": {
    "letter": "12"
  },
  "열셋": {
    "letter": "13"
  },
  "열넷": {
    "letter": "14"
  },
  "열다섯": {
    "letter": "15"
  },
  "열여섯": {
    "letter": "16"
  },
  "열일곱": {
    "letter": "17"
  },
  "열여덟": {
    "letter": "18"
  },
  "열아홉": {
    "letter": "19"
  },
  "스물": {
    "letter": "20"
  },
  "서른": {
    "letter": "30"
  },
  "마흔": {
    "letter": "40"
  },
  "쉰": {
    "letter": "50"
  },
  "예순": {
    "letter": "60"
  },
  "일흔": {
    "letter": "70"
  },
  "여든": {
    "letter": "80"
  },
  "아흔": {
    "letter": "90"
  }
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
