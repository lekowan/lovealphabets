// Configuration
const localStorageKey = "armenian" + "UpperCaseCharacters" + "Srs";
const srsTitle = "Armenian Alphabet Upper Case";
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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Armenian letters (uppercase only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

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
  39: { character: "Ֆ", letter: "f", audio: "../_audio/39.mp3" }
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
