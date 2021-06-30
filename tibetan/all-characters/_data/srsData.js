// Configuration
const localStorageKey = "tibetan" + "AllCharacters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Tibetan characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "ི": {
        "letter": "i"
    },
    "ུ": {
        "letter": "u"
    },
    "ེ": {
        "letter": "e"
    },
    "ོ": {
        "letter": "o"
    },
    "ཀ": {
        "letter": "ka"
    },
    "ཅ": {
        "letter": "ca"
    },
    "ཏ": {
        "letter": "ta"
    },
    "པ": {
        "letter": "pa"
    },
    "ཙ": {
        "letter": "tsa"
    },
    "ཞ": {
        "letter": "zha"
    },
    "ར": {
        "letter": "ra"
    },
    "ཧ": {
        "letter": "ha"
    },
    "ཁ": {
        "letter": "kha"
    },
    "ཆ": {
        "letter": "cha"
    },
    "ཐ": {
        "letter": "tha"
    },
    "ཕ": {
        "letter": "pha"
    },
    "ཚ": {
        "letter": "tsha"
    },
    "ཟ": {
        "letter": "za"
    },
    "ལ": {
        "letter": "la"
    },
    "ཨ": {
        "letter": "a"
    },
    "ག": {
        "letter": "ga"
    },
    "ཇ": {
        "letter": "ja"
    },
    "ད": {
        "letter": "da"
    },
    "བ": {
        "letter": "ba"
    },
    "ཛ": {
        "letter": "dza"
    },
    "འ": {
        "letter": "(')a"
    },
    "ཤ": {
        "letter": "sha"
    },
    "ང": {
        "letter": "nga"
    },
    "ཉ": {
        "letter": "nya"
    },
    "ན": {
        "letter": "na"
    },
    "མ": {
        "letter": "ma"
    },
    "ཝ": {
        "letter": "wa"
    },
    "ཡ": {
        "letter": "ya"
    },
    "ས": {
        "letter": "sa"
    },
    "ཀི": {
        "letter": "ki"
    },
    "ཅི": {
        "letter": "ci"
    },
    "ཏི": {
        "letter": "ti"
    },
    "པི": {
        "letter": "pi"
    },
    "ཙི": {
        "letter": "tsi"
    },
    "ཞི": {
        "letter": "zhi"
    },
    "རི": {
        "letter": "ri"
    },
    "ཧི": {
        "letter": "hi"
    },
    "ཁི": {
        "letter": "khi"
    },
    "ཆི": {
        "letter": "chi"
    },
    "ཐི": {
        "letter": "thi"
    },
    "ཕི": {
        "letter": "phi"
    },
    "ཚི": {
        "letter": "tshi"
    },
    "ཟི": {
        "letter": "zi"
    },
    "ལི": {
        "letter": "li"
    },
    "ཨི": {
        "letter": "ai"
    },
    "གི": {
        "letter": "gi"
    },
    "ཇི": {
        "letter": "ji"
    },
    "དི": {
        "letter": "di"
    },
    "བི": {
        "letter": "bi"
    },
    "ཛི": {
        "letter": "dzi"
    },
    "འི": {
        "letter": "(')ai"
    },
    "ཤི": {
        "letter": "shi"
    },
    "ངི": {
        "letter": "ngi"
    },
    "ཉི": {
        "letter": "nyi"
    },
    "ནི": {
        "letter": "ni"
    },
    "མི": {
        "letter": "mi"
    },
    "ཝི": {
        "letter": "wi"
    },
    "ཡི": {
        "letter": "yi"
    },
    "སི": {
        "letter": "si"
    },
    "ཀུ": {
        "letter": "ku"
    },
    "ཅུ": {
        "letter": "cu"
    },
    "ཏུ": {
        "letter": "tu"
    },
    "པུ": {
        "letter": "pu"
    },
    "ཙུ": {
        "letter": "tsu"
    },
    "ཞུ": {
        "letter": "zhu"
    },
    "རུ": {
        "letter": "ru"
    },
    "ཧུ": {
        "letter": "hu"
    },
    "ཁུ": {
        "letter": "khu"
    },
    "ཆུ": {
        "letter": "chu"
    },
    "ཐུ": {
        "letter": "thu"
    },
    "ཕུ": {
        "letter": "phu"
    },
    "ཚུ": {
        "letter": "tshu"
    },
    "ཟུ": {
        "letter": "zu"
    },
    "ལུ": {
        "letter": "lu"
    },
    "ཨུ": {
        "letter": "au"
    },
    "གུ": {
        "letter": "gu"
    },
    "ཇུ": {
        "letter": "ju"
    },
    "དུ": {
        "letter": "du"
    },
    "བུ": {
        "letter": "bu"
    },
    "ཛུ": {
        "letter": "dzu"
    },
    "འུ": {
        "letter": "(')au"
    },
    "ཤུ": {
        "letter": "shu"
    },
    "ངུ": {
        "letter": "ngu"
    },
    "ཉུ": {
        "letter": "nyu"
    },
    "ནུ": {
        "letter": "nu"
    },
    "མུ": {
        "letter": "mu"
    },
    "ཝུ": {
        "letter": "wu"
    },
    "ཡུ": {
        "letter": "yu"
    },
    "སུ": {
        "letter": "su"
    },
    "ཀེ": {
        "letter": "ke"
    },
    "ཅེ": {
        "letter": "ce"
    },
    "ཏེ": {
        "letter": "te"
    },
    "པེ": {
        "letter": "pe"
    },
    "ཙེ": {
        "letter": "tse"
    },
    "ཞེ": {
        "letter": "zhe"
    },
    "རེ": {
        "letter": "re"
    },
    "ཧེ": {
        "letter": "he"
    },
    "ཁེ": {
        "letter": "khe"
    },
    "ཆེ": {
        "letter": "che"
    },
    "ཐེ": {
        "letter": "the"
    },
    "ཕེ": {
        "letter": "phe"
    },
    "ཚེ": {
        "letter": "tshe"
    },
    "ཟེ": {
        "letter": "ze"
    },
    "ལེ": {
        "letter": "le"
    },
    "ཨེ": {
        "letter": "ae"
    },
    "གེ": {
        "letter": "ge"
    },
    "ཇེ": {
        "letter": "je"
    },
    "དེ": {
        "letter": "de"
    },
    "བེ": {
        "letter": "be"
    },
    "ཛེ": {
        "letter": "dze"
    },
    "འེ": {
        "letter": "(')ae"
    },
    "ཤེ": {
        "letter": "she"
    },
    "ངེ": {
        "letter": "nge"
    },
    "ཉེ": {
        "letter": "nye"
    },
    "ནེ": {
        "letter": "ne"
    },
    "མེ": {
        "letter": "me"
    },
    "ཝེ": {
        "letter": "we"
    },
    "ཡེ": {
        "letter": "ye"
    },
    "སེ": {
        "letter": "se"
    },
    "ཀོ": {
        "letter": "ko"
    },
    "ཅོ": {
        "letter": "co"
    },
    "ཏོ": {
        "letter": "to"
    },
    "པོ": {
        "letter": "po"
    },
    "ཙོ": {
        "letter": "tso"
    },
    "ཞོ": {
        "letter": "zho"
    },
    "རོ": {
        "letter": "ro"
    },
    "ཧོ": {
        "letter": "ho"
    },
    "ཁོ": {
        "letter": "kho"
    },
    "ཆོ": {
        "letter": "cho"
    },
    "ཐོ": {
        "letter": "tho"
    },
    "ཕོ": {
        "letter": "pho"
    },
    "ཚོ": {
        "letter": "tsho"
    },
    "ཟོ": {
        "letter": "zo"
    },
    "ལོ": {
        "letter": "lo"
    },
    "ཨོ": {
        "letter": "ao"
    },
    "གོ": {
        "letter": "go"
    },
    "ཇོ": {
        "letter": "jo"
    },
    "དོ": {
        "letter": "do"
    },
    "བོ": {
        "letter": "bo"
    },
    "ཛོ": {
        "letter": "dzo"
    },
    "འོ": {
        "letter": "(')ao"
    },
    "ཤོ": {
        "letter": "sho"
    },
    "ངོ": {
        "letter": "ngo"
    },
    "ཉོ": {
        "letter": "nyo"
    },
    "ནོ": {
        "letter": "no"
    },
    "མོ": {
        "letter": "mo"
    },
    "ཝོ": {
        "letter": "wo"
    },
    "ཡོ": {
        "letter": "yo"
    },
    "སོ": {
        "letter": "so"
    }
}



function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
