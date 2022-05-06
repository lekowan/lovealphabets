// Configuration
const localStorageKey = "japanese" + "Katakana" + "Srs";
const languageTitle = "Japanese";

// Display level
const srsTitle = "Katakana";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Exercise Type (character, vocabulary )
//const exerciseType = "vocabulary";
const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 3 Part 1. \n \n After your first session, you will also revise learned characters from previous sessions";

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "character";

const allSyllableMap = {
    "1": {
        "character": "ア",
        "letter": "a"
    },
    "2": {
        "character": "イ",
        "letter": "i"
    },
    "3": {
        "character": "ウ",
        "letter": "u"
    },
    "4": {
        "character": "エ",
        "letter": "e"
    },
    "5": {
        "character": "オ",
        "letter": "o"
    },
    "6": {
        "character": "カ",
        "letter": "ka"
    },
    "7": {
        "character": "キ",
        "letter": "ki"
    },
    "8": {
        "character": "ク",
        "letter": "ku"
    },
    "9": {
        "character": "ケ",
        "letter": "ke"
    },
    "10": {
        "character": "コ",
        "letter": "ko"
    },
    "11": {
        "character": "サ",
        "letter": "sa"
    },
    "12": {
        "character": "シ",
        "letter": "shi"
    },
    "13": {
        "character": "ス",
        "letter": "su"
    },
    "14": {
        "character": "セ",
        "letter": "se"
    },
    "15": {
        "character": "ソ",
        "letter": "so"
    },
    "16": {
        "character": "タ",
        "letter": "ta"
    },
    "17": {
        "character": "チ",
        "letter": "chi"
    },
    "18": {
        "character": "ツ",
        "letter": "tsu"
    },
    "19": {
        "character": "テ",
        "letter": "te"
    },
    "20": {
        "character": "ト",
        "letter": "to"
    },
    "21": {
        "character": "ナ",
        "letter": "na"
    },
    "22": {
        "character": "ニ",
        "letter": "ni"
    },
    "23": {
        "character": "ヌ",
        "letter": "nu"
    },
    "24": {
        "character": "ネ",
        "letter": "ne"
    },
    "25": {
        "character": "ノ",
        "letter": "no"
    },
    "26": {
        "character": "ハ",
        "letter": "ha"
    },
    "27": {
        "character": "ヒ",
        "letter": "hi"
    },
    "28": {
        "character": "フ",
        "letter": "fu"
    },
    "29": {
        "character": "ヘ",
        "letter": "he"
    },
    "30": {
        "character": "ホ",
        "letter": "ho"
    },
    "31": {
        "character": "マ",
        "letter": "ma"
    },
    "32": {
        "character": "ミ",
        "letter": "mi"
    },
    "33": {
        "character": "ム",
        "letter": "mu"
    },
    "34": {
        "character": "メ",
        "letter": "me"
    },
    "35": {
        "character": "モ",
        "letter": "mo"
    },
    "36": {
        "character": "ヤ",
        "letter": "ya"
    },
    "37": {
        "character": "ユ",
        "letter": "yu"
    },
    "38": {
        "character": "ヨ",
        "letter": "yo"
    },
    "39": {
        "character": "ラ",
        "letter": "ra"
    },
    "40": {
        "character": "リ",
        "letter": "ri"
    },
    "41": {
        "character": "ル",
        "letter": "ru"
    },
    "42": {
        "character": "レ",
        "letter": "re"
    },
    "43": {
        "character": "ロ",
        "letter": "ro"
    },
    "44": {
        "character": "ワ",
        "letter": "wa"
    },
    "45": {
        "character": "ヲ",
        "letter": "wo"
    },
    "46": {
        "character": "ン",
        "letter": "n"
    },
    "47": {
        "character": "ガ",
        "letter": "ga"
    },
    "48": {
        "character": "ギ",
        "letter": "gi"
    },
    "49": {
        "character": "グ",
        "letter": "gu"
    },
    "50": {
        "character": "ゲ",
        "letter": "ge"
    },
    "51": {
        "character": "ゴ",
        "letter": "go"
    },
    "52": {
        "character": "ザ",
        "letter": "za"
    },
    "53": {
        "character": "ジ",
        "letter": "ji"
    },
    "54": {
        "character": "ズ",
        "letter": "zu"
    },
    "55": {
        "character": "ゼ",
        "letter": "ze"
    },
    "56": {
        "character": "ゾ",
        "letter": "zo"
    },
    "57": {
        "character": "ダ",
        "letter": "da"
    },
    "58": {
        "character": "ヂ",
        "letter": "ji"
    },
    "59": {
        "character": "ヅ",
        "letter": "zu"
    },
    "60": {
        "character": "デ",
        "letter": "de"
    },
    "61": {
        "character": "ド",
        "letter": "do"
    },
    "62": {
        "character": "バ",
        "letter": "ba"
    },
    "63": {
        "character": "ビ",
        "letter": "bi"
    },
    "64": {
        "character": "ブ",
        "letter": "bu"
    },
    "65": {
        "character": "ベ",
        "letter": "be"
    },
    "66": {
        "character": "ボ",
        "letter": "bo"
    },
    "67": {
        "character": "パ",
        "letter": "pa"
    },
    "68": {
        "character": "ピ",
        "letter": "pi"
    },
    "69": {
        "character": "プ",
        "letter": "pu"
    },
    "70": {
        "character": "ペ",
        "letter": "pe"
    },
    "71": {
        "character": "ポ",
        "letter": "po"
    },
    "72": {
        "character": "キャ",
        "letter": "kya"
    },
    "73": {
        "character": "キュ",
        "letter": "kyu"
    },
    "74": {
        "character": "キョ",
        "letter": "kyo"
    },
    "75": {
        "character": "シャ",
        "letter": "sha"
    },
    "76": {
        "character": "シュ",
        "letter": "shu"
    },
    "77": {
        "character": "ショ",
        "letter": "sho"
    },
    "78": {
        "character": "チャ",
        "letter": "cha"
    },
    "79": {
        "character": "チュ",
        "letter": "chu"
    },
    "80": {
        "character": "チョ",
        "letter": "cho"
    },
    "81": {
        "character": "ニャ",
        "letter": "nya"
    },
    "82": {
        "character": "ニュ",
        "letter": "nyu"
    },
    "83": {
        "character": "ニョ",
        "letter": "nyo"
    },
    "84": {
        "character": "ヒャ",
        "letter": "hya"
    },
    "85": {
        "character": "ヒュ",
        "letter": "hyu"
    },
    "86": {
        "character": "ヒョ",
        "letter": "hyo"
    },
    "87": {
        "character": "ミャ",
        "letter": "mya"
    },
    "88": {
        "character": "ミュ",
        "letter": "myu"
    },
    "89": {
        "character": "ミョ",
        "letter": "myo"
    },
    "90": {
        "character": "リャ",
        "letter": "rya"
    },
    "91": {
        "character": "リュ",
        "letter": "ryu"
    },
    "92": {
        "character": "リョ",
        "letter": "ryo"
    },
    "93": {
        "character": "ギャ",
        "letter": "gya"
    },
    "94": {
        "character": "ギュ",
        "letter": "gyu"
    },
    "95": {
        "character": "ギョ",
        "letter": "gyo"
    },
    "96": {
        "character": "ジャ",
        "letter": "ja"
    },
    "97": {
        "character": "ジュ",
        "letter": "ju"
    },
    "98": {
        "character": "ジョ",
        "letter": "jo"
    },
    "99": {
        "character": "ビャ",
        "letter": "bya"
    },
    "100": {
        "character": "ビュ",
        "letter": "byu"
    },
    "101": {
        "character": "ビョ",
        "letter": "byo"
    },
    "102": {
        "character": "ピャ",
        "letter": "pya"
    },
    "103": {
        "character": "ピュ",
        "letter": "pyu"
    },
    "104": {
        "character": "ピョ",
        "letter": "pyo"
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