// Configuration
const localStorageKey = "japanese" + "Katakana" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Katakana every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "ア": { "letter":  "a" },
  "イ": { "letter":  "i" },
  "ウ": { "letter":  "u" },
  "エ": { "letter":  "e" },
  "オ": { "letter":  "o" },
  "カ": { "letter":  "ka" },
  "キ": { "letter":  "ki" },
  "ク": { "letter":  "ku" },
  "ケ": { "letter":  "ke" },
  "コ": { "letter":  "ko" },
  "サ": { "letter":  "sa" },
  "シ": { "letter":  "shi" },
  "ス": { "letter":  "su" },
  "セ": { "letter":  "se" },
  "ソ": { "letter":  "so" },
  "タ": { "letter":  "ta" },
  "チ": { "letter":  "chi" },
  "ツ": { "letter":  "tsu" },
  "テ": { "letter":  "te" },
  "ト": { "letter":  "to" },
  "ナ": { "letter":  "na" },
  "ニ": { "letter":  "ni" },
  "ヌ": { "letter":  "nu" },
  "ネ": { "letter":  "ne" },
  "ノ": { "letter":  "no" },
  "ハ": { "letter":  "ha" },
  "ヒ": { "letter":  "hi" },
  "フ": { "letter":  "fu" },
  "ヘ": { "letter":  "he" },
  "ホ": { "letter":  "ho" },
  "マ": { "letter":  "ma" },
  "ミ": { "letter":  "mi" },
  "ム": { "letter":  "mu" },
  "メ": { "letter":  "me" },
  "モ": { "letter":  "mo" },
  "ヤ": { "letter":  "ya" },
  "ユ": { "letter":  "yu" },
  "ヨ": { "letter":  "yo" },
  "ラ": { "letter":  "ra" },
  "リ": { "letter":  "ri" },
  "ル": { "letter":  "ru" },
  "レ": { "letter":  "re" },
  "ロ": { "letter":  "ro" },
  "ワ": { "letter":  "wa" },
  "ヲ": { "letter":  "wo" },
  "ン": { "letter":  "n" },
  "ガ": { "letter":  "ga" },
  "ギ": { "letter":  "gi" },
  "グ": { "letter":  "gu" },
  "ゲ": { "letter":  "ge" },
  "ゴ": { "letter":  "go" },
  "ザ": { "letter":  "za" },
  "ジ": { "letter":  "ji" },
  "ズ": { "letter":  "zu" },
  "ゼ": { "letter":  "ze" },
  "ゾ": { "letter":  "zo" },
  "ダ": { "letter":  "da" },
  "ヂ": { "letter":  "ji" },
  "ヅ": { "letter":  "zu" },
  "デ": { "letter":  "de" },
  "ド": { "letter":  "do" },
  "バ": { "letter":  "ba" },
  "ビ": { "letter":  "bi" },
  "ブ": { "letter":  "bu" },
  "ベ": { "letter":  "be" },
  "ボ": { "letter":  "bo" },
  "パ": { "letter":  "pa" },
  "ピ": { "letter":  "pi" },
  "プ": { "letter":  "pu" },
  "ペ": { "letter":  "pe" },
  "ポ": { "letter":  "po" },
  "キャ": { "letter":  "kya" },
  "キュ": { "letter":  "kyu" },
  "キョ": { "letter":  "kyo" },
  "シャ": { "letter":  "sha" },
  "シュ": { "letter":  "shu" },
  "ショ": { "letter":  "sho" },
  "チャ": { "letter":  "cha" },
  "チュ": { "letter":  "chu" },
  "チョ": { "letter":  "cho" },
  "ニャ": { "letter":  "nya" },
  "ニュ": { "letter":  "nyu" },
  "ニョ": { "letter":  "nyo" },
  "ヒャ": { "letter":  "hya" },
  "ヒュ": { "letter":  "hyu" },
  "ヒョ": { "letter":  "hyo" },
  "ミャ": { "letter":  "mya" },
  "ミュ": { "letter":  "myu" },
  "ミョ": { "letter":  "myo" },
  "リャ": { "letter":  "rya" },
  "リュ": { "letter":  "ryu" },
  "リョ": { "letter":  "ryo" },
  "ギャ": { "letter":  "gya" },
  "ギュ": { "letter":  "gyu" },
  "ギョ": { "letter":  "gyo" },
  "ジャ": { "letter":  "ja" },
  "ジュ": { "letter":  "ju" },
  "ジョ": { "letter":  "jo" },
  "ビャ": { "letter":  "bya" },
  "ビュ": { "letter":  "byu" },
  "ビョ": { "letter":  "byo" },
  "ピャ": { "letter":  "pya" },
  "ピュ": { "letter":  "pyu" },
  "ピョ": { "letter":  "pyo" },
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
