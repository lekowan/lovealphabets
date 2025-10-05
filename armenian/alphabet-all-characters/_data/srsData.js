// Configuration
const localStorageKey = "armenian" + "AllCaseCharacters" + "Srs";
const srsTitle = "Armenian Alphabet";
const languageTitle = "Armenian";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Armenian letters (both uppercase and lowercase) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  1: { character: "Ա", letter: "a", audio: "../_audio/1.mp3" },
  2: { character: "Բ", letter: "b", audio: "../_audio/2.mp3" },
  3: { character: "Գ", letter: "g", audio: "../_audio/3.mp3" },
  4: { character: "Դ", letter: "d", audio: "../_audio/4.mp3" },
  5: { character: "Ե", letter: "e", audio: "../_audio/5.mp3" },
  6: { character: "Զ", letter: "z", audio: "../_audio/6.mp3" },
  7: { character: "Է", letter: "ē", audio: "../_audio/7.mp3" },
  8: { character: "Ը", letter: "ə", audio: "../_audio/8.mp3" },
  9: { character: "Թ", letter: "t'", audio: "../_audio/9.mp3" },
  10: { character: "Ժ", letter: "ž", audio: "../_audio/10.mp3" },
  11: { character: "Ի", letter: "i", audio: "../_audio/11.mp3" },
  12: { character: "Լ", letter: "l", audio: "../_audio/12.mp3" },
  13: { character: "Խ", letter: "x", audio: "../_audio/13.mp3" },
  14: { character: "Ծ", letter: "c", audio: "../_audio/14.mp3" },
  15: { character: "Կ", letter: "k", audio: "../_audio/15.mp3" },
  16: { character: "Հ", letter: "h", audio: "../_audio/16.mp3" },
  17: { character: "Ձ", letter: "dz", audio: "../_audio/17.mp3" },
  18: { character: "Ղ", letter: "ł", audio: "../_audio/18.mp3" },
  19: { character: "Ճ", letter: "č", audio: "../_audio/19.mp3" },
  20: { character: "Մ", letter: "m", audio: "../_audio/20.mp3" },
  21: { character: "Յ", letter: "y", audio: "../_audio/21.mp3" },
  22: { character: "Ն", letter: "n", audio: "../_audio/22.mp3" },
  23: { character: "Շ", letter: "š", audio: "../_audio/23.mp3" },
  24: { character: "Ո", letter: "o", audio: "../_audio/24.mp3" },
  25: { character: "Չ", letter: "č'", audio: "../_audio/25.mp3" },
  26: { character: "Պ", letter: "p", audio: "../_audio/26.mp3" },
  27: { character: "Ջ", letter: "ǰ", audio: "../_audio/27.mp3" },
  28: { character: "Ռ", letter: "ṙ", audio: "../_audio/28.mp3" },
  29: { character: "Ս", letter: "s", audio: "../_audio/29.mp3" },
  30: { character: "Վ", letter: "v", audio: "../_audio/30.mp3" },
  31: { character: "Տ", letter: "t", audio: "../_audio/31.mp3" },
  32: { character: "Ր", letter: "r", audio: "../_audio/32.mp3" },
  33: { character: "Ց", letter: "c'", audio: "../_audio/33.mp3" },
  34: { character: "ՈՒ", letter: "u", audio: "../_audio/34.mp3" },
  35: { character: "Փ", letter: "p'", audio: "../_audio/35.mp3" },
  36: { character: "Ք", letter: "k'", audio: "../_audio/36.mp3" },
  37: { character: "և", letter: "ew", audio: "../_audio/37.mp3" },
  38: { character: "Օ", letter: "ō", audio: "../_audio/38.mp3" },
  39: { character: "Ֆ", letter: "f", audio: "../_audio/39.mp3" },
  40: { character: "ա", letter: "a", audio: "../_audio/1.mp3" },
  41: { character: "բ", letter: "b", audio: "../_audio/2.mp3" },
  42: { character: "գ", letter: "g", audio: "../_audio/3.mp3" },
  43: { character: "դ", letter: "d", audio: "../_audio/4.mp3" },
  44: { character: "ե", letter: "e", audio: "../_audio/5.mp3" },
  45: { character: "զ", letter: "z", audio: "../_audio/6.mp3" },
  46: { character: "է", letter: "ē", audio: "../_audio/7.mp3" },
  47: { character: "ը", letter: "ə", audio: "../_audio/8.mp3" },
  48: { character: "թ", letter: "t'", audio: "../_audio/9.mp3" },
  49: { character: "ժ", letter: "ž", audio: "../_audio/10.mp3" },
  50: { character: "ի", letter: "i", audio: "../_audio/11.mp3" },
  51: { character: "լ", letter: "l", audio: "../_audio/12.mp3" },
  52: { character: "խ", letter: "x", audio: "../_audio/13.mp3" },
  53: { character: "ծ", letter: "c", audio: "../_audio/14.mp3" },
  54: { character: "կ", letter: "k", audio: "../_audio/15.mp3" },
  55: { character: "հ", letter: "h", audio: "../_audio/16.mp3" },
  56: { character: "ձ", letter: "dz", audio: "../_audio/17.mp3" },
  57: { character: "ղ", letter: "ł", audio: "../_audio/18.mp3" },
  58: { character: "ճ", letter: "č", audio: "../_audio/19.mp3" },
  59: { character: "մ", letter: "m", audio: "../_audio/20.mp3" },
  60: { character: "յ", letter: "y", audio: "../_audio/21.mp3" },
  61: { character: "ն", letter: "n", audio: "../_audio/22.mp3" },
  62: { character: "շ", letter: "š", audio: "../_audio/23.mp3" },
  63: { character: "ո", letter: "o", audio: "../_audio/24.mp3" },
  64: { character: "չ", letter: "č'", audio: "../_audio/25.mp3" },
  65: { character: "պ", letter: "p", audio: "../_audio/26.mp3" },
  66: { character: "ջ", letter: "ǰ", audio: "../_audio/27.mp3" },
  67: { character: "ռ", letter: "ṙ", audio: "../_audio/28.mp3" },
  68: { character: "ս", letter: "s", audio: "../_audio/29.mp3" },
  69: { character: "վ", letter: "v", audio: "../_audio/30.mp3" },
  70: { character: "տ", letter: "t", audio: "../_audio/31.mp3" },
  71: { character: "ր", letter: "r", audio: "../_audio/32.mp3" },
  72: { character: "ց", letter: "c'", audio: "../_audio/33.mp3" },
  73: { character: "ու", letter: "u", audio: "../_audio/34.mp3" },
  74: { character: "փ", letter: "p'", audio: "../_audio/35.mp3" },
  75: { character: "ք", letter: "k'", audio: "../_audio/36.mp3" },
  76: { character: "ևվ", letter: "ew", audio: "../_audio/37.mp3" },
  77: { character: "օ", letter: "ō", audio: "../_audio/38.mp3" },
  78: { character: "ֆ", letter: "f", audio: "../_audio/39.mp3" }
};

function getCharacter(n) {
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj.character;
}

function translation(n) {
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj.letter;
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;
