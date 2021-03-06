// Configuration
const localStorageKey = "inuktitut" + "Characters" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Inuktitut characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "ᐁ": { "letter" :  "ai" },
  "ᐃ": { "letter" :  "i" },
  "ᐄ": { "letter" :  "ii" },
  "ᐅ": { "letter" :  "u" },
  "ᐆ": { "letter" :  "uu" },
  "ᐊ": { "letter" :  "a" },
  "ᐋ": { "letter" :  "aa" },
  "ᐯ": { "letter" :  "pai" },
  "ᐱ": { "letter" :  "pi" },
  "ᐲ": { "letter" :  "pii" },
  "ᐳ": { "letter" :  "pu" },
  "ᐴ": { "letter" :  "puu" },
  "ᐸ": { "letter" :  "pa" },
  "ᐹ": { "letter" :  "paa" },
  "ᑉ": { "letter" :  "p" },
  "ᑌ": { "letter" :  "tai" },
  "ᑎ": { "letter" :  "ti" },
  "ᑏ": { "letter" :  "tii" },
  "ᑐ": { "letter" :  "tu" },
  "ᑑ": { "letter" :  "tuu" },
  "ᑕ": { "letter" :  "ta" },
  "ᑖ": { "letter" :  "taa" },
  "ᑦ": { "letter" :  "t" },
  "ᑫ": { "letter" :  "kai" },
  "ᑭ": { "letter" :  "ki" },
  "ᑮ": { "letter" :  "kii" },
  "ᑯ": { "letter" :  "ku" },
  "ᑰ": { "letter" :  "kuu" },
  "ᑲ": { "letter" :  "ka" },
  "ᑳ": { "letter" :  "kaa" },
  "ᒃ": { "letter" :  "k" },
  "ᒉ": { "letter" :  "gai" },
  "ᒋ": { "letter" :  "gi" },
  "ᒌ": { "letter" :  "gii" },
  "ᒍ": { "letter" :  "gu" },
  "ᒎ": { "letter" :  "guu" },
  "ᒐ": { "letter" :  "ga" },
  "ᒑ": { "letter" :  "gaa" },
  "ᒡ": { "letter" :  "g" },
  "ᒣ": { "letter" :  "mai" },
  "ᒥ": { "letter" :  "mi" },
  "ᒦ": { "letter" :  "mii" },
  "ᒧ": { "letter" :  "mu" },
  "ᒨ": { "letter" :  "muu" },
  "ᒪ": { "letter" :  "ma" },
  "ᒫ": { "letter" :  "maa" },
  "ᒻ": { "letter" :  "m" },
  "ᓀ": { "letter" :  "nai" },
  "ᓂ": { "letter" :  "ni" },
  "ᓃ": { "letter" :  "nii" },
  "ᓄ": { "letter" :  "nu" },
  "ᓅ": { "letter" :  "nuu" },
  "ᓇ": { "letter" :  "na" },
  "ᓈ": { "letter" :  "naa" },
  "ᓐ": { "letter" :  "n" },
  "ᓭ": { "letter" :  "sai" },
  "ᓯ": { "letter" :  "si" },
  "ᓰ": { "letter" :  "sii" },
  "ᓱ": { "letter" :  "su" },
  "ᓲ": { "letter" :  "suu" },
  "ᓴ": { "letter" :  "sa" },
  "ᓵ": { "letter" :  "saa" },
  "ᔅ": { "letter" :  "s" },
  "ᓓ": { "letter" :  "lai" },
  "ᓕ": { "letter" :  "li" },
  "ᓖ": { "letter" :  "lii" },
  "ᓗ": { "letter" :  "lu" },
  "ᓘ": { "letter" :  "luu" },
  "ᓚ": { "letter" :  "la" },
  "ᓛ": { "letter" :  "laa" },
  "ᓪ": { "letter" :  "l" },
  "ᔦ": { "letter" :  "jai" },
  "ᔨ": { "letter" :  "ji" },
  "ᔩ": { "letter" :  "jii" },
  "ᔪ": { "letter" :  "ju" },
  "ᔫ": { "letter" :  "juu" },
  "ᔭ": { "letter" :  "ja" },
  "ᔮ": { "letter" :  "jaa" },
  "ᔾ": { "letter" :  "j" },
  "ᕓ": { "letter" :  "vai" },
  "ᕕ": { "letter" :  "vi" },
  "ᕖ": { "letter" :  "vii" },
  "ᕗ": { "letter" :  "vu" },
  "ᕘ": { "letter" :  "vuu" },
  "ᕙ": { "letter" :  "va" },
  "ᕚ": { "letter" :  "vaa" },
  "ᕝ": { "letter" :  "v" },
  "ᕂ": { "letter" :  "rai" },
  "ᕆ": { "letter" :  "ri" },
  "ᕇ": { "letter" :  "rii" },
  "ᕈ": { "letter" :  "ru" },
  "ᕉ": { "letter" :  "ruu" },
  "ᕋ": { "letter" :  "ra" },
  "ᕌ": { "letter" :  "raa" },
  "ᕐ": { "letter" :  "r" },
  "ᙯ": { "letter" :  "qai" },
  "ᕿ": { "letter" :  "qi" },
  "ᖀ": { "letter" :  "qii" },
  "ᖁ": { "letter" :  "qu" },
  "ᖂ": { "letter" :  "quu" },
  "ᖃ": { "letter" :  "qa" },
  "ᖄ": { "letter" :  "qaa" },
  "ᖅ": { "letter" :  "q" },
  "ᙰ": { "letter" :  "ngai" },
  "ᖏ": { "letter" :  "ngi" },
  "ᖐ": { "letter" :  "ngii" },
  "ᖑ": { "letter" :  "ngu" },
  "ᖒ": { "letter" :  "nguu" },
  "ᖓ": { "letter" :  "nga" },
  "ᖔ": { "letter" :  "ngaa" },
  "ᖕ": { "letter" :  "ng" },
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
