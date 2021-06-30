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
    'ㅏ': { 'letter': 'a' },
    'ㅐ': { 'letter': 'ae' },
    'ㅑ': { 'letter': 'ya' },
    'ㅒ': { 'letter': 'yae' },
    'ㅓ': { 'letter': 'eo' },
    'ㅔ': { 'letter': 'e' },
    'ㅕ': { 'letter': 'yeo' },
    'ㅖ': { 'letter': 'ye' },
    'ㅗ': { 'letter': 'o' },
    'ㅘ': { 'letter': 'wa' },
    'ㅙ': { 'letter': 'wae' },
    'ㅚ': { 'letter': 'oe' },
    'ㅛ': { 'letter': 'yo' },
    'ㅜ': { 'letter': 'u' },
    'ㅝ': { 'letter': 'wo' },
    'ㅞ': { 'letter': 'we' },
    'ㅟ': { 'letter': 'wi' },
    'ㅠ': { 'letter': 'yu' },
    'ㅡ': { 'letter': 'eu' },
    'ㅢ': { 'letter': 'ui' },
    'ㅣ': { 'letter': 'i' },
    "ㄱ": { 'letter': "g" },
    'ㄲ': { 'letter': "kk" },
    "ㄴ": { 'letter': "n" },
    "ㄷ": { 'letter': "d" },
    "ㄸ": { 'letter': "tt" },
    "ㄹ": { 'letter': "r, l" },
    "ㅁ": { 'letter': "m" },
    "ㅂ": { 'letter': "b" },
    "ㅃ": { 'letter': "pp" },
    "ㅅ": { 'letter': "s" },
    "ㅆ": { 'letter': "ss" },
    "ㅇ": { 'letter': "-, ng" },
    "ㅈ": { 'letter': "j" },
    "ㅉ": { 'letter': "jj" },
    "ㅊ": { 'letter': "ch" },
    "ㅋ": { 'letter': "k" },
    "ㅌ": { 'letter': "t" },
    "ㅍ": { 'letter': "p" },
    "ㅎ": { 'letter': "h" },
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
