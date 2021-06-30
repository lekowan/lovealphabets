// Configuration
const localStorageKey = "armenian" + "UpperCaseCharacters" + "Srs"

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
    "Ա": { "letter": "a", "audio": "../_audio/1.mp3" },
    "Բ": { "letter": "b", "audio": "../_audio/2.mp3" },
    "Գ": { "letter": "g", "audio": "../_audio/3.mp3" },
    "Դ": { "letter": "d", "audio": "../_audio/4.mp3" },
    "Ե": { "letter": "e", "audio": "../_audio/5.mp3" },
    "Զ": { "letter": "z", "audio": "../_audio/6.mp3" },
    "Է": { "letter": "ē", "audio": "../_audio/7.mp3" },
    "Ը": { "letter": "ə", "audio": "../_audio/8.mp3" },
    "Թ": { "letter": "t'", "audio": "../_audio/9.mp3" },
    "Ժ": { "letter": "ž", "audio": "../_audio/10.mp3" },
    "Ի": { "letter": "i", "audio": "../_audio/11.mp3" },
    "Լ": { "letter": "l", "audio": "../_audio/12.mp3" },
    "Խ": { "letter": "x", "audio": "../_audio/13.mp3" },
    "Ծ": { "letter": "c", "audio": "../_audio/14.mp3" },
    "Կ": { "letter": "k", "audio": "../_audio/15.mp3" },
    "Հ": { "letter": "h", "audio": "../_audio/16.mp3" },
    "Ձ": { "letter": "dz", "audio": "../_audio/17.mp3" },
    "Ղ": { "letter": "ł", "audio": "../_audio/18.mp3" },
    "Ճ": { "letter": "č", "audio": "../_audio/19.mp3" },
    "Մ": { "letter": "m", "audio": "../_audio/20.mp3" },
    "Յ": { "letter": "y", "audio": "../_audio/21.mp3" },
    "Ն": { "letter": "n", "audio": "../_audio/22.mp3" },
    "Շ": { "letter": "š", "audio": "../_audio/23.mp3" },
    "Ո": { "letter": "o", "audio": "../_audio/24.mp3" },
    "Չ": { "letter": "č'", "audio": "../_audio/25.mp3" },
    "Պ": { "letter": "p", "audio": "../_audio/26.mp3" },
    "Ջ": { "letter": "ǰ", "audio": "../_audio/27.mp3" },
    "Ռ": { "letter": "ṙ", "audio": "../_audio/28.mp3" },
    "Ս": { "letter": "s", "audio": "../_audio/29.mp3" },
    "Վ": { "letter": "v", "audio": "../_audio/30.mp3" },
    "Տ": { "letter": "t", "audio": "../_audio/31.mp3" },
    "Ր": { "letter": "r", "audio": "../_audio/32.mp3" },
    "Ց": { "letter": "c'", "audio": "../_audio/33.mp3" },
    "ՈՒ": { "letter": "u", "audio": "../_audio/34.mp3" },
    "Փ": { "letter": "p'", "audio": "../_audio/35.mp3" },
    "Ք": { "letter": "k'", "audio": "../_audio/36.mp3" },
    "և": { "letter": "ew", "audio": "../_audio/37.mp3" },
    "Օ": { "letter": "ō", "audio": "../_audio/38.mp3" },
    "Ֆ": { "letter": "f", "audio": "../_audio/39.mp3" },
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
