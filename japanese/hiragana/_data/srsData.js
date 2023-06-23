// Configuration
const localStorageKey = "japanese" + "Hiragana" + "Srs";
const languageTitle = "Japanese";

// Display level
const srsTitle = "Hiragana";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Exercise Type (character, vocabulary )
//const exerciseType = "vocabulary";
const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Hiragana characters. \n \n After your first session, you will also revise learned characters from previous sessions";

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const allSyllableMap = {
  1: {
    character: "あ",
    letter: "a"
  },
  2: {
    character: "い",
    letter: "i"
  },
  3: {
    character: "う",
    letter: "u"
  },
  4: {
    character: "え",
    letter: "e"
  },
  5: {
    character: "お",
    letter: "o"
  },
  6: {
    character: "か",
    letter: "ka"
  },
  7: {
    character: "き",
    letter: "ki"
  },
  8: {
    character: "く",
    letter: "ku"
  },
  9: {
    character: "け",
    letter: "ke"
  },
  10: {
    character: "こ",
    letter: "ko"
  },
  11: {
    character: "さ",
    letter: "sa"
  },
  12: {
    character: "し",
    letter: "shi"
  },
  13: {
    character: "す",
    letter: "su"
  },
  14: {
    character: "せ",
    letter: "se"
  },
  15: {
    character: "そ",
    letter: "so"
  },
  16: {
    character: "た",
    letter: "ta"
  },
  17: {
    character: "ち",
    letter: "chi"
  },
  18: {
    character: "つ",
    letter: "tsu"
  },
  19: {
    character: "て",
    letter: "te"
  },
  20: {
    character: "と",
    letter: "to"
  },
  21: {
    character: "な",
    letter: "na"
  },
  22: {
    character: "に",
    letter: "ni"
  },
  23: {
    character: "ぬ",
    letter: "nu"
  },
  24: {
    character: "ね",
    letter: "ne"
  },
  25: {
    character: "の",
    letter: "no"
  },
  26: {
    character: "は",
    letter: "ha"
  },
  27: {
    character: "ひ",
    letter: "hi"
  },
  28: {
    character: "ふ",
    letter: "fu"
  },
  29: {
    character: "へ",
    letter: "he"
  },
  30: {
    character: "ほ",
    letter: "ho"
  },
  31: {
    character: "ま",
    letter: "ma"
  },
  32: {
    character: "み",
    letter: "mi"
  },
  33: {
    character: "む",
    letter: "mu"
  },
  34: {
    character: "め",
    letter: "me"
  },
  35: {
    character: "も",
    letter: "mo"
  },
  36: {
    character: "や",
    letter: "ya"
  },
  37: {
    character: "ゆ",
    letter: "yu"
  },
  38: {
    character: "よ",
    letter: "yo"
  },
  39: {
    character: "ら",
    letter: "ra"
  },
  40: {
    character: "り",
    letter: "ri"
  },
  41: {
    character: "る",
    letter: "ru"
  },
  42: {
    character: "れ",
    letter: "re"
  },
  43: {
    character: "ろ",
    letter: "ro"
  },
  44: {
    character: "わ",
    letter: "wa"
  },
  45: {
    character: "を",
    letter: "wo"
  },
  46: {
    character: "ん",
    letter: "n"
  },
  47: {
    character: "が",
    letter: "ga"
  },
  48: {
    character: "ぎ",
    letter: "gi"
  },
  49: {
    character: "ぐ",
    letter: "gu"
  },
  50: {
    character: "げ",
    letter: "ge"
  },
  51: {
    character: "ご",
    letter: "go"
  },
  52: {
    character: "ざ",
    letter: "za"
  },
  53: {
    character: "じ",
    letter: "ji"
  },
  54: {
    character: "ず",
    letter: "zu"
  },
  55: {
    character: "ぜ",
    letter: "ze"
  },
  56: {
    character: "ぞ",
    letter: "zo"
  },
  57: {
    character: "だ",
    letter: "da"
  },
  58: {
    character: "ぢ",
    letter: "ji"
  },
  59: {
    character: "づ",
    letter: "zu"
  },
  60: {
    character: "で",
    letter: "de"
  },
  61: {
    character: "ど",
    letter: "do"
  },
  62: {
    character: "ば",
    letter: "ba"
  },
  63: {
    character: "び",
    letter: "bi"
  },
  64: {
    character: "ぶ",
    letter: "bu"
  },
  65: {
    character: "べ",
    letter: "be"
  },
  66: {
    character: "ぼ",
    letter: "bo"
  },
  67: {
    character: "ぱ",
    letter: "pa"
  },
  68: {
    character: "ぴ",
    letter: "pi"
  },
  69: {
    character: "ぷ",
    letter: "pu"
  },
  70: {
    character: "ぺ",
    letter: "pe"
  },
  71: {
    character: "ぽ",
    letter: "po"
  },
  72: {
    character: "きゃ",
    letter: "kya"
  },
  73: {
    character: "きゅ",
    letter: "kyu"
  },
  74: {
    character: "きょ",
    letter: "kyo"
  },
  75: {
    character: "しゃ",
    letter: "sha"
  },
  76: {
    character: "しゅ",
    letter: "shu"
  },
  77: {
    character: "しょ",
    letter: "sho"
  },
  78: {
    character: "ちゃ",
    letter: "cha"
  },
  79: {
    character: "ちゅ",
    letter: "chu"
  },
  80: {
    character: "ちょ",
    letter: "cho"
  },
  81: {
    character: "にゃ",
    letter: "nya"
  },
  82: {
    character: "にゅ",
    letter: "nyu"
  },
  83: {
    character: "にょ",
    letter: "nyo"
  },
  84: {
    character: "ひゃ",
    letter: "hya"
  },
  85: {
    character: "ひゅ",
    letter: "hyu"
  },
  86: {
    character: "ひょ",
    letter: "hyo"
  },
  87: {
    character: "みゃ",
    letter: "mya"
  },
  88: {
    character: "みゅ",
    letter: "myu"
  },
  89: {
    character: "みょ",
    letter: "myo"
  },
  90: {
    character: "りゃ",
    letter: "rya"
  },
  91: {
    character: "りゅ",
    letter: "ryu"
  },
  92: {
    character: "りょ",
    letter: "ryo"
  },
  93: {
    character: "ぎゃ",
    letter: "gya"
  },
  94: {
    character: "ぎゅ",
    letter: "gyu"
  },
  95: {
    character: "ぎょ",
    letter: "gyo"
  },
  96: {
    character: "じゃ",
    letter: "ja"
  },
  97: {
    character: "じゅ",
    letter: "ju"
  },
  98: {
    character: "じょ",
    letter: "jo"
  },
  99: {
    character: "びゃ",
    letter: "bya"
  },
  100: {
    character: "びゅ",
    letter: "byu"
  },
  101: {
    character: "びょ",
    letter: "byo"
  },
  102: {
    character: "ぴゃ",
    letter: "pya"
  },
  103: {
    character: "ぴゅ",
    letter: "pyu"
  },
  104: {
    character: "ぴょ",
    letter: "pyo"
  }
};

function getCharacter(n) {
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
