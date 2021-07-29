// Configuration
const localStorageKey = "korean" + "SinoKorean" + "Srs";

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

// Welcome Popover Content
const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the Integrated Korean (Beginning 1) textbook. \n \n After your first session, you will also revise learned characters from previous sessions";


const allSyllableMap = {
 "영, 령, 공": {
    "letter": "0"
  },
  "일": {
    "letter": "1"
  },
  "이": {
    "letter": "2"
  },
  "삼": {
    "letter": "3"
  },
  "사": {
    "letter": "4"
  },
  "오": {
    "letter": "5"
  },
  "육, 륙": {
    "letter": "6"
  },
  "칠": {
    "letter": "7"
  },
  "팔": {
    "letter": "8"
  },
  "구": {
    "letter": "9"
  },
  "십": {
    "letter": "10"
  },
  "십일": {
    "letter": "11"
  },
  "십이": {
    "letter": "12"
  },
  "십삼": {
    "letter": "13"
  },
  "십사": {
    "letter": "14"
  },
  "십오": {
    "letter": "15"
  },
  "십육, 십륙": {
    "letter": "16"
  },
  "십칠": {
    "letter": "17"
  },
  "십팔": {
    "letter": "18"
  },
  "십구": {
    "letter": "19"
  },
  "이십": {
    "letter": "20"
  },
  "삼십": {
    "letter": "30"
  },
  "사십": {
    "letter": "40"
  },
  "오십": {
    "letter": "50"
  },
  "육십": {
    "letter": "60"
  },
  "륙십": {
    "letter": "60"
  },
  "칠십": {
    "letter": "70"
  },
  "팔십": {
    "letter": "80"
  },
  "구십": {
    "letter": "90"
  },
  "백": {
    "letter": "100"
  },
  "천": {
    "letter": "1,000"
  },
  "만": {
    "letter": "10,000"
  },
  "억": {
    "letter": "100,000,000"
  }
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
