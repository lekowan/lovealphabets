// Configuration
const localStorageKey = "korean" + "Characters" + "Srs";
const srsTitle = "The Korean Hangul";
const languageTitle = "Korean";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ko-KR";
const activateSpeech = true;

// Gradient
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
    },
    "4": {
        "character": "ㅒ",
        "letter": "yae"
    },
    "5": {
        "character": "ㅓ",
        "letter": "eo"
    },
    "6": {
        "character": "ㅔ",
        "letter": "e"
    },
    "7": {
        "character": "ㅕ",
        "letter": "yeo"
    },
    "8": {
        "character": "ㅖ",
        "letter": "ye"
    },
    "9": {
        "character": "ㅗ",
        "letter": "o"
    },
    "10": {
        "character": "ㅘ",
        "letter": "wa"
    },
    "11": {
        "character": "ㅙ",
        "letter": "wae"
    },
    "12": {
        "character": "ㅚ",
        "letter": "oe"
    },
    "13": {
        "character": "ㅛ",
        "letter": "yo"
    },
    "14": {
        "character": "ㅜ",
        "letter": "u"
    },
    "15": {
        "character": "ㅝ",
        "letter": "wo"
    },
    "16": {
        "character": "ㅞ",
        "letter": "we"
    },
    "17": {
        "character": "ㅟ",
        "letter": "wi"
    },
    "18": {
        "character": "ㅠ",
        "letter": "yu"
    },
    "19": {
        "character": "ㅡ",
        "letter": "eu"
    },
    "20": {
        "character": "ㅢ",
        "letter": "ui"
    },
    "21": {
        "character": "ㅣ",
        "letter": "i"
    },
    "22": {
        "character": "ㄱ",
        "letter": "g"
    },
    "23": {
        "character": "ㄲ",
        "letter": "kk"
    },
    "24": {
        "character": "ㄴ",
        "letter": "n"
    },
    "25": {
        "character": "ㄷ",
        "letter": "d"
    },
    "26": {
        "character": "ㄸ",
        "letter": "tt"
    },
    "27": {
        "character": "ㄹ",
        "letter": "r, l"
    },
    "28": {
        "character": "ㅁ",
        "letter": "m"
    },
    "29": {
        "character": "ㅂ",
        "letter": "b"
    },
    "30": {
        "character": "ㅃ",
        "letter": "pp"
    },
    "31": {
        "character": "ㅅ",
        "letter": "s"
    },
    "32": {
        "character": "ㅆ",
        "letter": "ss"
    },
    "33": {
        "character": "ㅇ",
        "letter": "-, ng"
    },
    "34": {
        "character": "ㅈ",
        "letter": "j"
    },
    "35": {
        "character": "ㅉ",
        "letter": "jj"
    },
    "36": {
        "character": "ㅊ",
        "letter": "ch"
    },
    "37": {
        "character": "ㅋ",
        "letter": "k"
    },
    "38": {
        "character": "ㅌ",
        "letter": "t"
    },
    "39": {
        "character": "ㅍ",
        "letter": "p"
    },
    "40": {
        "character": "ㅎ",
        "letter": "h"
    }
}

function getCharacter(n){
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["character"];   
}

function translation(n) {
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["letter"];
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;