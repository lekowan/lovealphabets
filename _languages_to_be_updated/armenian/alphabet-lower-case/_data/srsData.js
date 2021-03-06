// Configuration
const localStorageKey = "armenian" + "LowerCaseCharacters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Armenian letters (lowercase only) every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
     "ա": { "letter": "a", "audio": "../_audio/1.mp3" },
    "բ": { "letter": "b", "audio": "../_audio/2.mp3" },
    "գ": { "letter": "g", "audio": "../_audio/3.mp3" },
    "դ": { "letter": "d", "audio": "../_audio/4.mp3" },
    "ե": { "letter": "e", "audio": "../_audio/5.mp3" },
    "զ": { "letter": "z", "audio": "../_audio/6.mp3" },
    "է": { "letter": "ē", "audio": "../_audio/7.mp3" },
    "ը": { "letter": "ə", "audio": "../_audio/8.mp3" },
    "թ": { "letter": "t'", "audio": "../_audio/9.mp3" },
    "ժ": { "letter": "ž", "audio": "../_audio/10.mp3" },
    "ի": { "letter": "i", "audio": "../_audio/11.mp3" },
    "լ": { "letter": "l", "audio": "../_audio/12.mp3" },
    "խ": { "letter": "x", "audio": "../_audio/13.mp3" },
    "ծ": { "letter": "c", "audio": "../_audio/14.mp3" },
    "կ": { "letter": "k", "audio": "../_audio/15.mp3" },
    "հ": { "letter": "h", "audio": "../_audio/16.mp3" },
    "ձ": { "letter": "dz", "audio": "../_audio/17.mp3" },
    "ղ": { "letter": "ł", "audio": "../_audio/18.mp3" },
    "ճ": { "letter": "č", "audio": "../_audio/19.mp3" },
    "մ": { "letter": "m", "audio": "../_audio/20.mp3" },
    "յ": { "letter": "y", "audio": "../_audio/21.mp3" },
    "ն": { "letter": "n", "audio": "../_audio/22.mp3" },
    "շ": { "letter": "š", "audio": "../_audio/23.mp3" },
    "ո": { "letter": "o", "audio": "../_audio/24.mp3" },
    "չ": { "letter": "č'", "audio": "../_audio/25.mp3" },
    "պ": { "letter": "p", "audio": "../_audio/26.mp3" },
    "ջ": { "letter": "ǰ", "audio": "../_audio/27.mp3" },
    "ռ": { "letter": "ṙ", "audio": "../_audio/28.mp3" },
    "ս": { "letter": "s", "audio": "../_audio/29.mp3" },
    "վ": { "letter": "v", "audio": "../_audio/30.mp3" },
    "տ": { "letter": "t", "audio": "../_audio/31.mp3" },
    "ր": { "letter": "r", "audio": "../_audio/32.mp3" },
    "ց": { "letter": "c'", "audio": "../_audio/33.mp3" },
    "ու": { "letter": "u", "audio": "../_audio/34.mp3" },
    "փ": { "letter": "p'", "audio": "../_audio/35.mp3" },
    "ք": { "letter": "k'", "audio": "../_audio/36.mp3" },
    "ևվ": { "letter": "ew", "audio": "../_audio/37.mp3" },
    "օ": { "letter": "ō", "audio": "../_audio/38.mp3" },
    "ֆ": { "letter": "f", "audio": "../_audio/39.mp3" }
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
