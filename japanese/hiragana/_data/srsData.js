// Configuration
const localStorageKey = "japanese" + "Hiragana" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Hiragana every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "あ": { "letter":  "a"},
    "い": { "letter":  "i"},
    "う": { "letter":  "u"},
    "え": { "letter":  "e"},
    "お": { "letter":  "o"},
    "か": { "letter":  "ka"},
    "き": { "letter":  "ki"},
    "く": { "letter":  "ku"},
    "け": { "letter":  "ke"},
    "こ": { "letter":  "ko"},
    "さ": { "letter":  "sa"},
    "し": { "letter":  "shi"},
    "す": { "letter":  "su"},
    "せ": { "letter":  "se"},
    "そ": { "letter":  "so"},
    "た": { "letter":  "ta"},
    "ち": { "letter":  "chi"},
    "つ": { "letter":  "tsu"},
    "て": { "letter":  "te"},
    "と": { "letter":  "to"},
    "な": { "letter":  "na"},
    "に": { "letter":  "ni"},
    "ぬ": { "letter":  "nu"},
    "ね": { "letter":  "ne"},
    "の": { "letter":  "no"},
    "は": { "letter":  "ha"},
    "ひ": { "letter":  "hi"},
    "ふ": { "letter":  "fu"},
    "へ": { "letter":  "he"},
    "ほ": { "letter":  "ho"},
    "ま": { "letter":  "ma"},
    "み": { "letter":  "mi"},
    "む": { "letter":  "mu"},
    "め": { "letter":  "me"},
    "も": { "letter":  "mo"},
    "や": { "letter":  "ya"},
    "ゆ": { "letter":  "yu"},
    "よ": { "letter":  "yo"},
    "ら": { "letter":  "ra"},
    "り": { "letter":  "ri"},
    "る": { "letter":  "ru"},
    "れ": { "letter":  "re"},
    "ろ": { "letter":  "ro"},
    "わ": { "letter":  "wa"},
    "を": { "letter":  "wo"},
    "ん": { "letter":  "n" },
    "が": { "letter":  "ga"},
    "ぎ": { "letter":  "gi"},
    "ぐ": { "letter":  "gu"},
    "げ": { "letter":  "ge"},
    "ご": { "letter":  "go"},
    "ざ": { "letter":  "za"},
    "じ": { "letter":  "ji"},
    "ず": { "letter":  "zu"},
    "ぜ": { "letter":  "ze"},
    "ぞ": { "letter":  "zo"},
    "だ": { "letter":  "da"},
    "ぢ": { "letter":  "ji"},
    "づ": { "letter":  "zu"},
    "で": { "letter":  "de"},
    "ど": { "letter":  "do"},
    "ば": { "letter":  "ba"},
    "び": { "letter":  "bi"},
    "ぶ": { "letter":  "bu"},
    "べ": { "letter":  "be"},
    "ぼ": { "letter":  "bo"},
    "ぱ": { "letter":  "pa"},
    "ぴ": { "letter":  "pi"},
    "ぷ": { "letter":  "pu"},
    "ぺ": { "letter":  "pe"},
    "ぽ": { "letter":  "po"},
    "きゃ": { "letter":  "kya"},
    "きゅ": { "letter":  "kyu"},
    "きょ": { "letter":  "kyo"},
    "しゃ": { "letter":  "sha"},
    "しゅ": { "letter":  "shu"},
    "しょ": { "letter":  "sho"},
    "ちゃ": { "letter":  "cha"},
    "ちゅ": { "letter":  "chu"},
    "ちょ": { "letter":  "cho"},
    "にゃ": { "letter":  "nya"},
    "にゅ": { "letter":  "nyu"},
    "にょ": { "letter":  "nyo"},
    "ひゃ": { "letter":  "hya"},
    "ひゅ": { "letter":  "hyu"},
    "ひょ": { "letter":  "hyo"},
    "みゃ": { "letter":  "mya"},
    "みゅ": { "letter":  "myu"},
    "みょ": { "letter":  "myo"},
    "りゃ": { "letter":  "rya"},
    "りゅ": { "letter":  "ryu"},
    "りょ": { "letter":  "ryo"},
    "ぎゃ": { "letter":  "gya"},
    "ぎゅ": { "letter":  "gyu"},
    "ぎょ": { "letter":  "gyo"},
    "じゃ": { "letter":  "ja"},
    "じゅ": { "letter":  "ju"},
    "じょ": { "letter":  "jo"},
    "びゃ": { "letter":  "bya"},
    "びゅ": { "letter":  "byu"},
    "びょ": { "letter":  "byo"},
    "ぴゃ": { "letter":  "pya"},
    "ぴゅ": { "letter":  "pyu"},
    "ぴょ": { "letter":  "pyo"},
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
