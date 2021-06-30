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

const koreanIntro = "In this spaced-repetition practice (SRS), you will study the Sino-Korean numerals.";

const allSyllableMap = {
 "0": {
   "letter":"영, 령, 공"
  },
 "1": {
   "letter":"일"
  },
 "2": {
   "letter":"이"
  },
 "3": {
   "letter":"삼"
  },
 "4": {
   "letter":"사"
  },
 "5": {
   "letter":"오"
  },
 "6": {
   "letter":"육, 륙"
  },
 "7": {
   "letter":"칠"
  },
 "8": {
   "letter":"팔"
  },
 "9": {
   "letter":"구"
  },
 "10": {
   "letter":"십"
  },
 "11": {
   "letter":"십일"
  },
 "12": {
   "letter":"십이"
  },
 "13": {
   "letter":"십삼"
  },
 "14": {
   "letter":"십사"
  },
 "15": {
   "letter":"십오"
  },
 "16": {
   "letter":"십육, 십륙"
  },
 "17": {
   "letter":"십칠"
  },
 "18": {
   "letter":"십팔"
  },
 "19": {
   "letter":"십구"
  },
 "20": {
   "letter":"이십"
  },
 "30": {
   "letter":"삼십"
  },
 "40": {
   "letter":"사십"
  },
 "50": {
   "letter":"오십"
  },
 "60": {
   "letter":"륙십"
  },
 "70": {
   "letter":"칠십"
  },
 "80": {
   "letter":"팔십"
  },
 "90": {
   "letter":"구십"
  },
 "100": {
   "letter":"백"
  },
 "1,000": {
   "letter":"천"
  },
 "10,000": {
   "letter":"만"
  },
 "100,000,000": {
   "letter":"억"
  }
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
