// Configuration
const localStorageKey = "cree" + "Level1Vocabulary" + "Srs";
const srsTitle = "Plains Cree Vocabulary";
const languageTitle = "Cree";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "cr-PL";
const activateSpeech = false;

// Gradient
const gradientBackground = "purple-background";
const loadergradientBackground = "purple-loader-background";

// CTA Background
const ctaClass = "purple-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the HSK1 vocabulary list everyday. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "1": {
        "character": "ᑖᓂᓯ",
        "letter": "hello, how are you.",
        "pinyin": "tânisi",
        "audio": "../_audio/1.m4a"
    },
    "2": {
        "character": "ᓇᒨᔭ",
        "letter": "no",
        "pinyin": "namôya",
        "audio": "../_audio/2.m4a"
    },
    "3": {
        "character": "ᓇᒨᔭ ᓈᓂᑕᐤ",
        "letter": "fine",
        "pinyin": "namôya nânitaw",
        "audio": "../_audio/3.m4a"
    },
    "4": {
        "character": "ᓈᓂᑕᐤ",
        "letter": "about",
        "pinyin": "nânitaw",
        "audio": "../_audio/4.m4a"
    },
    "5": {
        "character": "ᑭᔭ",
        "letter": "you",
        "pinyin": "kiya",
        "audio": "../_audio/5.m4a"
    },
    "6": {
        "character": "ᒫᑲ",
        "letter": "but",
        "pinyin": "mâka",
        "audio": "../_audio/6.m4a"
    },
    "7": {
        "character": "ᑭᔭ ᒫᑲ᙮",
        "letter": "How about you?",
        "pinyin": "kiya mâka",
        "audio": "../_audio/7.m4a"
    },
    "8": {
        "character": "ᐯᔭᑿᐣ",
        "letter": "the same",
        "pinyin": "pêyakwan",
        "audio": "../_audio/8.m4a"
    },
    "9": {
        "character": "ᓂᑎᓯᔨᐦᑳᓱᐣ",
        "letter": "my name is",
        "pinyin": "nitisiyihkâson",
        "audio": "../_audio/9.m4a"
    },
    "10": {
        "character": "ᑭᑎᓯᔨᐦᑳᓱᐣ",
        "letter": "your name is",
        "pinyin": "kitisiyihkâson",
        "audio": "../_audio/10.m4a"
    },
    "11": {
        "character": "ᐅᐦᒋ",
        "letter": "from",
        "pinyin": "ohci",
        "audio": "../_audio/11.m4a"
    },
    "12": {
        "character": "ᓂᔭ",
        "letter": "I/me",
        "pinyin": "niya",
        "audio": "../_audio/12.m4a"
    },
    "13": {
        "character": "ᑖᓂᑌ",
        "letter": "where",
        "pinyin": "tânitê",
        "audio": "../_audio/13.m4a"
    },
    "14": {
        "character": "ᒣᒁᐨ",
        "letter": "now",
        "pinyin": "mêkwâc",
        "audio": "../_audio/14.m4a"
    },
    "15": {
        "character": "ᓂᐑᑭᐣ",
        "letter": "I live/reside",
        "pinyin": "niwîkin",
        "audio": "../_audio/15.m4a"
    },
    "16": {
        "character": "ᐁᑯᑕ",
        "letter": "there",
        "pinyin": "êkota",
        "audio": "../_audio/16.m4a"
    },
    "17": {
        "character": "ᑭᐑᑭᐣ",
        "letter": "you live",
        "pinyin": "kiwîkin",
        "audio": "../_audio/17.m4a"
    },
    "18": {
        "character": "ᒦᓇ",
        "letter": "also/too",
        "pinyin": "mîna",
        "audio": "../_audio/18.m4a"
    },
    "19": {
        "character": "ᓃᐢᑕ",
        "letter": "me too",
        "pinyin": "nîsta",
        "audio": "../_audio/19.m4a"
    },
    "20": {
        "character": "ᑮᐢᑕ",
        "letter": "you too",
        "pinyin": "kîsta",
        "audio": "../_audio/20.m4a"
    },
    "21": {
        "character": "ᐅᑭᐢᑭᓌᐦᐊᒫᑫᐤ",
        "letter": "a teacher",
        "pinyin": "okiskinwahamâkêw",
        "audio": "../_audio/21.m4a"
    },
    "22": {
        "character": "ᐅᑭᐢᑭᓌᐦᐊᒫᑲᐣ",
        "letter": "a student",
        "pinyin": "okiskinwahamâkan",
        "audio": "../_audio/22.m4a"
    },
    "23": {
        "character": "ᑲᔭᐦᑌ",
        "letter": "originally",
        "pinyin": "kayahtê",
        "audio": "../_audio/23.m4a"
    },
    "24": {
        "character": "ᐅᒧᓲᒥᒫᐤ",
        "letter": "a grandfather",
        "pinyin": "omosômimâw",
        "audio": "../_audio/24.m4a"
    },
    "25": {
        "character": "ᐅᐦᑯᒥᒫᐤ",
        "letter": "a grandmother",
        "pinyin": "ohkomimâw",
        "audio": "../_audio/25.m4a"
    },
    "26": {
        "character": "ᐅᑳᐑᒫᐤ",
        "letter": "a mother",
        "pinyin": "okâwîmâw",
        "audio": "../_audio/26.m4a"
    },
    "27": {
        "character": "ᐅᐦᑖᐑᒫᐤ",
        "letter": "a father",
        "pinyin": "ohtâwîmâw",
        "audio": "../_audio/27.m4a"
    },
    "28": {
        "character": "ᐅᑯᓯᓯᒫᐤ",
        "letter": "a son",
        "pinyin": "okosisimâw",
        "audio": "../_audio/28.m4a"
    },
    "29": {
        "character": "ᐅᑖᓂᓯᒫᐤ",
        "letter": "a daughter",
        "pinyin": "otânisimâw",
        "audio": "../_audio/29.m4a"
    },
    "30": {
        "character": "ᐅᒥᓯᒫᐤ",
        "letter": "an older sister",
        "pinyin": "omisimâw",
        "audio": "../_audio/30.m4a"
    },
    "31": {
        "character": "ᐅᐢᑌᓯᒫᐤ",
        "letter": "an older brother",
        "pinyin": "ostêsimâw",
        "audio": "../_audio/31.m4a"
    },
    "32": {
        "character": "ᐅᓰᒥᒫᐤ",
        "letter": "a younger sibling",
        "pinyin": "osîmimâw",
        "audio": "../_audio/32.m4a"
    },
    "33": {
        "character": "ᐊᐚᓯᐢ",
        "letter": "a child",
        "pinyin": "awâsis",
        "audio": "../_audio/33.m4a"
    },
    "34": {
        "character": "ᒥᑖᐢ",
        "letter": "a pair of pants",
        "pinyin": "mitâs",
        "audio": "../_audio/34.m4a"
    },
    "35": {
        "character": "ᐚᐱᑿᓂᐩ",
        "letter": "a flower",
        "pinyin": "wâpikwaniy",
        "audio": "../_audio/35.m4a"
    },
    "36": {
        "character": "ᐊᓯᑲᐣ",
        "letter": "socks",
        "pinyin": "asikanak",
        "audio": "../_audio/36.m4a"
    },
    "37": {
        "character": "ᒪᐢᑯᓯᐩ",
        "letter": "a piece of grass",
        "pinyin": "maskosiy",
        "audio": "../_audio/37.m4a"
    },
    "38": {
        "character": "ᐊᐢᑎᐢ",
        "letter": "a mitt/glove",
        "pinyin": "astis",
        "audio": "../_audio/38.m4a"
    },
    "39": {
        "character": "ᓃᐱᐩ",
        "letter": "a leaf",
        "pinyin": "nîpiy",
        "audio": "../_audio/39.m4a"
    },
    "40": {
        "character": "ᑖᐱᐢᑳᑲᐣ",
        "letter": "a scarf/tie",
        "pinyin": "tâpiskâkan",
        "audio": "../_audio/40.m4a"
    },
    "41": {
        "character": "ᒪᐢᑭᐦᑭᐩ",
        "letter": "medicine",
        "pinyin": "maskihkiy",
        "audio": "../_audio/41.m4a"
    },
    "42": {
        "character": "ᒪᐢᑲᓯᐩ",
        "letter": "a finger/toe-nail",
        "pinyin": "maskasiy",
        "audio": "../_audio/42.m4a"
    },
    "43": {
        "character": "ᒣᐢᑕᑲᐩ",
        "letter": "hair",
        "pinyin": "mêstakaya",
        "audio": "../_audio/43.m4a"
    },
    "44": {
        "character": "ᐅᐢᑇᑲᐣ",
        "letter": "a pipe",
        "pinyin": "ospwâkan",
        "audio": "../_audio/44.m4a"
    },
    "45": {
        "character": "ᒦᐱᐟ",
        "letter": "a tooth",
        "pinyin": "mîpit",
        "audio": "../_audio/45.m4a"
    },
    "46": {
        "character": "ᐊᓯᓂᐩ",
        "letter": "a rock/stone",
        "pinyin": "asiniy",
        "audio": "../_audio/46.m4a"
    },
    "47": {
        "character": "ᒥᐢᑮᓯᐠ",
        "letter": "an eye",
        "pinyin": "miskîsik",
        "audio": "../_audio/47.m4a"
    },
    "48": {
        "character": "ᐁᒥᐦᒁᐣ",
        "letter": "a spoon",
        "pinyin": "êmihkwân",
        "audio": "../_audio/48.m4a"
    },
    "49": {
        "character": "ᒥᓯᐟ",
        "letter": "a foot",
        "pinyin": "misit",
        "audio": "../_audio/49.m4a"
    },
    "50": {
        "character": "ᐊᐢᑭᕽ",
        "letter": "a pail",
        "pinyin": "askihk",
        "audio": "../_audio/50.m4a"
    },
    "51": {
        "character": "ᒥᐢᑳᐟ",
        "letter": "a leg",
        "pinyin": "miskât",
        "audio": "../_audio/51.m4a"
    },
    "52": {
        "character": "ᐊᐳᐩ",
        "letter": "a paddle",
        "pinyin": "apoy",
        "audio": "../_audio/52.m4a"
    },
    "53": {
        "character": "ᒥᐢᑎᒁᐣ",
        "letter": "a head",
        "pinyin": "mistikwân",
        "audio": "../_audio/53.m4a"
    },
    "54": {
        "character": "ᐋᐦᒑᐱᐩ",
        "letter": "a bow",
        "pinyin": "âhcâpiy",
        "audio": "../_audio/54.m4a"
    },
    "55": {
        "character": "ᒥᑑᐣ",
        "letter": "a mouth",
        "pinyin": "mitôn",
        "audio": "../_audio/55.m4a"
    },
    "56": {
        "character": "ᐊᑲᐢᐠ",
        "letter": "an arrow",
        "pinyin": "akask",
        "audio": "../_audio/56.m4a"
    },
    "57": {
        "character": "ᒥᐦᑕᐘᑲᐩ",
        "letter": "an ear",
        "pinyin": "mihtawakay",
        "audio": "../_audio/57.m4a"
    },
    "58": {
        "character": "ᓭᐦᑫᐸᔩᐢ",
        "letter": "a car",
        "pinyin": "sêhkêpayîs",
        "audio": "../_audio/58.m4a"
    },
    "59": {
        "character": "ᒥᒋᐦᒋᐩ",
        "letter": "a hand",
        "pinyin": "micihciy",
        "audio": "../_audio/59.m4a"
    },
    "60": {
        "character": "ᓲᒥᓂᐢ",
        "letter": "a raisin",
        "pinyin": "sôminis",
        "audio": "../_audio/60.m4a"
    },
    "61": {
        "character": "ᒥᑌᐦᐃᒥᐣ",
        "letter": "a strawberry",
        "pinyin": "mitêhimin",
        "audio": "../_audio/61.m4a"
    },
    "62": {
        "character": "ᐊᔫᐢᑲᐣ",
        "letter": "a raspberry",
        "pinyin": "ayôskan",
        "audio": "../_audio/62.m4a"
    },
    "63": {
        "character": "ᐃᔨᓂᒥᐣ",
        "letter": "a blueberry",
        "pinyin": "iyinimin",
        "audio": "../_audio/63.m4a"
    },
    "64": {
        "character": "ᐅᐢᑳᑖᐢᐠ",
        "letter": "a carrot",
        "pinyin": "oskâtâsk",
        "audio": "../_audio/64.m4a"
    },
    "65": {
        "character": "ᑕᑿᐦᐃᒥᐣ",
        "letter": "a chokecherry",
        "pinyin": "takwahimin",
        "audio": "../_audio/65.m4a"
    },
    "66": {
        "character": "ᐏᐦᑭᐦᑲᓯᑲᐣ",
        "letter": "a cake",
        "pinyin": "wihkihkasikan",
        "audio": "../_audio/66.m4a"
    },
    "67": {
        "character": "ᐏᐦᑿᐢᑿ",
        "letter": "sweetgrass (pl)",
        "pinyin": "wihkwaskwa",
        "audio": "../_audio/67.m4a"
    },
    "68": {
        "character": "ᐊᐘ",
        "letter": "this (AN)",
        "pinyin": "awa",
        "audio": "../_audio/68.m4a"
    },
    "69": {
        "character": "ᐆᒪ",
        "letter": "this (IN)",
        "pinyin": "ôma",
        "audio": "../_audio/69.m4a"
    },
    "70": {
        "character": "ᐊᓇ",
        "letter": "that (AN)",
        "pinyin": "ana",
        "audio": "../_audio/70.m4a"
    },
    "71": {
        "character": "ᐊᓂᒪ",
        "letter": "that (IN)",
        "pinyin": "anima",
        "audio": "../_audio/71.m4a"
    },
    "72": {
        "character": "ᓈᐦᐊ",
        "letter": "that (over there) (AN)",
        "pinyin": "nâha",
        "audio": "../_audio/72.m4a"
    },
    "73": {
        "character": "ᓀᒪ",
        "letter": "that (over there) (IN)",
        "pinyin": "nêma",
        "audio": "../_audio/73.m4a"
    },
    "74": {
        "character": "ᐆᑭ",
        "letter": "these (AN)",
        "pinyin": "ôki",
        "audio": "../_audio/74.m4a"
    },
    "75": {
        "character": "ᐆᐦᐃ",
        "letter": "these (IN)",
        "pinyin": "Ôhi",
        "audio": "../_audio/75.m4a"
    },
    "76": {
        "character": "ᐊᓂᑭ",
        "letter": "those (AN)",
        "pinyin": "aniki",
        "audio": "../_audio/76.m4a"
    },
    "77": {
        "character": "ᐊᓂᐦᐃ",
        "letter": "those (IN)",
        "pinyin": "anihi",
        "audio": "../_audio/77.m4a"
    },
    "78": {
        "character": "ᓀᑭ",
        "letter": "those (over there) (AN)",
        "pinyin": "nêki",
        "audio": "../_audio/78.m4a"
    },
    "79": {
        "character": "ᓀᐦᐃ",
        "letter": "those (over there) (IN)",
        "pinyin": "nêhi",
        "audio": "../_audio/79.m4a"
    },
    "80": {
        "character": "ᑖᓂᐚ",
        "letter": "where (AN)",
        "pinyin": "tâniwâ",
        "audio": "../_audio/80.m4a"
    },
    "81": {
        "character": "ᑖᓂᐍ",
        "letter": "where (IN)",
        "pinyin": "tâniwê",
        "audio": "../_audio/81.m4a"
    },
    "82": {
        "character": "ᑖᓂᐍᐦᑳᐠ",
        "letter": "where (for plural nouns) (AN)",
        "pinyin": "tâniwêhkâk",
        "audio": "../_audio/82.m4a"
    },
    "83": {
        "character": "ᑖᓂᐍᐦᐋ",
        "letter": "where (for plural nouns) (IN)",
        "pinyin": "tâniwêhâ",
        "audio": "../_audio/83.m4a"
    },
    "84": {
        "character": "ᑖᓇ",
        "letter": "which (AN)",
        "pinyin": "tâna",
        "audio": "../_audio/84.m4a"
    },
    "85": {
        "character": "ᑖᓂᒪ",
        "letter": "which (IN)",
        "pinyin": "tânima",
        "audio": "../_audio/85.m4a"
    },
    "86": {
        "character": "ᑖᓂᑭ",
        "letter": "which (for plural nouns) (AN)",
        "pinyin": "tâniki",
        "audio": "../_audio/86.m4a"
    },
    "87": {
        "character": "ᑖᓂᐦᐃ",
        "letter": "which (for plural nouns) (IN)",
        "pinyin": "tânihi",
        "audio": "../_audio/87.m4a"
    },
    "88": {
        "character": "ᑮᒁᐩ",
        "letter": "what (IN)",
        "pinyin": "kîkwây",
        "audio": "../_audio/88.m4a"
    },
    "89": {
        "character": "ᑮᒁᔭ",
        "letter": "what (plural) (IN)",
        "pinyin": "kîkwâya",
        "audio": "../_audio/89.m4a"
    },
    "90": {
        "character": "ᐊᐑᓇ",
        "letter": "who (AN)",
        "pinyin": "awîna",
        "audio": "../_audio/90.m4a"
    },
    "91": {
        "character": "ᐊᐑᓂᑭ",
        "letter": "who (plural) (AN)",
        "pinyin": "awîniki",
        "audio": "../_audio/91.m4a"
    },
    "92": {
        "character": "ᑫᑯ",
        "letter": "which/what kind",
        "pinyin": "kêko",
        "audio": "../_audio/92.m4a"
    },
    "93": {
        "character": "ᓂᐹ",
        "letter": "to sleep",
        "pinyin": "nipâ",
        "audio": "../_audio/93.m4a"
    },
    "94": {
        "character": "ᐘᓂᐢᑳ",
        "letter": "to wake/get up",
        "pinyin": "waniskâ",
        "audio": "../_audio/94.m4a"
    },
    "95": {
        "character": "ᑳᑮᓯᒧ",
        "letter": "to pray (traditionally)",
        "pinyin": "kâkîsimo",
        "audio": "../_audio/95.m4a"
    },
    "96": {
        "character": "ᑭᐢᑖᐱᑌᐦ",
        "letter": "to brush teeth",
        "pinyin": "kistâpitêho",
        "audio": "../_audio/96.m4a"
    },
    "97": {
        "character": "ᑳᓯᐦᑵ",
        "letter": "to wash face",
        "pinyin": "kâsihkwê",
        "audio": "../_audio/97.m4a"
    },
    "98": {
        "character": "ᓰᑲᐦ",
        "letter": "to comb hair",
        "pinyin": "sîkaho",
        "audio": "../_audio/98.m4a"
    },
    "99": {
        "character": "ᐳᐢᑕᔭᐏᓂᓭ",
        "letter": "to dress",
        "pinyin": "postayawinisê",
        "audio": "../_audio/99.m4a"
    },
    "100": {
        "character": "ᑮᓯᑌᐳ",
        "letter": "to cook",
        "pinyin": "kîsitêpo",
        "audio": "../_audio/100.m4a"
    },
    "101": {
        "character": "ᐊᐱ",
        "letter": "to sit/be at home",
        "pinyin": "api",
        "audio": "../_audio/101.m4a"
    },
    "102": {
        "character": "ᒦᒋᓱ",
        "letter": "to eat",
        "pinyin": "mîciso",
        "audio": "../_audio/102.m4a"
    },
    "103": {
        "character": "ᒥᓂᐦᑵ",
        "letter": "to drink",
        "pinyin": "minihkwê",
        "audio": "../_audio/103.m4a"
    },
    "104": {
        "character": "ᐸᓯᑰ",
        "letter": "to get up/stand up",
        "pinyin": "pasikô",
        "audio": "../_audio/104.m4a"
    },
    "105": {
        "character": "ᐘᔭᐑ",
        "letter": "to go out",
        "pinyin": "wayawî",
        "audio": "../_audio/105.m4a"
    },
    "106": {
        "character": "ᐱᒧᐦᑌ",
        "letter": "to walk",
        "pinyin": "pimohtê",
        "audio": "../_audio/106.m4a"
    },
    "107": {
        "character": "ᐴᓯ",
        "letter": "to get on board",
        "pinyin": "pôsi",
        "audio": "../_audio/107.m4a"
    },
    "108": {
        "character": "ᐱᒥᐸᔨ",
        "letter": "to drive",
        "pinyin": "pimipayi",
        "audio": "../_audio/108.m4a"
    },
    "109": {
        "character": "ᑲᐹ",
        "letter": "to get out",
        "pinyin": "kapâ",
        "audio": "../_audio/109.m4a"
    },
    "110": {
        "character": "ᐊᑐᐢᑫ",
        "letter": "to work",
        "pinyin": "atoskê",
        "audio": "../_audio/110.m4a"
    },
    "111": {
        "character": "ᒪᓯᓇᐦᐃᑫ",
        "letter": "to write",
        "pinyin": "masinahikê",
        "audio": "../_audio/111.m4a"
    },
    "112": {
        "character": "ᐊᔭᒥᐦᒋᑫ",
        "letter": "to read",
        "pinyin": "ayamihcikê",
        "audio": "../_audio/112.m4a"
    },
    "113": {
        "character": "ᓃᒥᐦᐃᑐ",
        "letter": "to dance",
        "pinyin": "nîmihito",
        "audio": "../_audio/113.m4a"
    },
    "114": {
        "character": "ᓂᑲᒧ",
        "letter": "to sing",
        "pinyin": "nikamo",
        "audio": "../_audio/114.m4a"
    },
    "115": {
        "character": "ᒫᑐ",
        "letter": "to cry",
        "pinyin": "mâto",
        "audio": "../_audio/115.m4a"
    },
    "116": {
        "character": "ᐹᐦᐱ",
        "letter": "to laugh",
        "pinyin": "pâhpi",
        "audio": "../_audio/116.m4a"
    },
    "117": {
        "character": "ᓭᓵᐑ",
        "letter": "to exercise",
        "pinyin": "sêsâwî",
        "audio": "../_audio/117.m4a"
    },
    "118": {
        "character": "ᐱᒥᐸᐦᑖ",
        "letter": "to run",
        "pinyin": "pimipahtâ",
        "audio": "../_audio/118.m4a"
    },
    "119": {
        "character": "ᑮᐍ",
        "letter": "to go home",
        "pinyin": "kîwê",
        "audio": "../_audio/119.m4a"
    },
    "120": {
        "character": "ᐱᐦᑐᑵ",
        "letter": "to enter",
        "pinyin": "pihtokwê",
        "audio": "../_audio/120.m4a"
    },
    "121": {
        "character": "ᓄᐦᑌᑲᑌ",
        "letter": "to be hungry",
        "pinyin": "nohtêkatê",
        "audio": "../_audio/121.m4a"
    },
    "122": {
        "character": "ᑭᓰᐯᑭᔮᑲᓀ",
        "letter": "to wash dishes",
        "pinyin": "kisîpêkiyâkanê",
        "audio": "../_audio/122.m4a"
    },
    "123": {
        "character": "ᑳᓰᔮᑲᓀ",
        "letter": "to dry dishes",
        "pinyin": "kâsîyâkanê",
        "audio": "../_audio/123.m4a"
    },
    "124": {
        "character": "ᓄᐦᑌᑿᓯ",
        "letter": "to be sleepy",
        "pinyin": "nohtêkwasi",
        "audio": "../_audio/124.m4a"
    },
    "125": {
        "character": "ᑫᑕᔭᐏᓂᓭ",
        "letter": "to undress",
        "pinyin": "kêtayawinisê",
        "audio": "../_audio/125.m4a"
    },
    "126": {
        "character": "ᑲᐏᓯᒧ",
        "letter": "to lay down",
        "pinyin": "kawisimo",
        "audio": "../_audio/126.m4a"
    },
    "127": {
        "character": "ᒪᑘᐦᒁᒥ",
        "letter": "to snore",
        "pinyin": "matwêhkwâmi",
        "audio": "../_audio/127.m4a"
    },
    "128": {
        "character": "ᐅᑖᕽ ᐃᐢᐸᔨᐤ",
        "letter": "last week",
        "pinyin": "otâhk ispayiw",
        "audio": "../_audio/128.m4a"
    },
    "129": {
        "character": "ᑯᑕᐠ ᐃᐢᐸᔨᑭ",
        "letter": "next week",
        "pinyin": "kotak ispayiki",
        "audio": "../_audio/129.m4a"
    },
    "130": {
        "character": "ᐯᔭᐠ ᐃᐢᐸᔨᐤ",
        "letter": "one week",
        "pinyin": "pêyak ispayiw",
        "audio": "../_audio/130.m4a"
    },
    "131": {
        "character": "ᐊᓄᐦᐨ ᑳᐃᐢᐸᔨᐠ",
        "letter": "this week",
        "pinyin": "anohc kâ-ispayik",
        "audio": "../_audio/131.m4a"
    },
    "132": {
        "character": "ᐚᐸᐦᑭ",
        "letter": "tomorrow",
        "pinyin": "wâpahki",
        "audio": "../_audio/132.m4a"
    },
    "133": {
        "character": "ᐊᐘᓯᐚᐸᐦᑭ",
        "letter": "day after tomorrow",
        "pinyin": "awasi-wâpahki",
        "audio": "../_audio/133.m4a"
    },
    "134": {
        "character": "ᐅᑖᑯᓰᕽ",
        "letter": "yesterday",
        "pinyin": "otâkosîhk",
        "audio": "../_audio/134.m4a"
    },
    "135": {
        "character": "ᐊᐘᓯᑖᑯᓰᕽ",
        "letter": "day before yesterday",
        "pinyin": "awasi-tâkosîhk",
        "audio": "../_audio/135.m4a"
    },
    "136": {
        "character": "ᑎᐱᐢᑯᕽ",
        "letter": "last night",
        "pinyin": "tipiskohk",
        "audio": "../_audio/136.m4a"
    },
    "137": {
        "character": "ᐊᐘᓯᑎᐱᐢᑯᕽ",
        "letter": "night before last night",
        "pinyin": "awasi-tipiskohk",
        "audio": "../_audio/137.m4a"
    },
    "138": {
        "character": "ᑎᐱᐢᑳᑭ",
        "letter": "tonight",
        "pinyin": "tipiskâki",
        "audio": "../_audio/138.m4a"
    },
    "139": {
        "character": "ᐊᐢᑮᐏᐣ",
        "letter": "year",
        "pinyin": "askîwin",
        "audio": "../_audio/139.m4a"
    },
    "140": {
        "character": "ᐊᓄᐦᐨ ᑳᐊᐢᑮᐏᐠ",
        "letter": "this year",
        "pinyin": "anohc kâ-askîwik",
        "audio": "../_audio/140.m4a"
    },
    "141": {
        "character": "ᐅᑖᕽ ᐊᐢᑮᐏᐣ",
        "letter": "last year",
        "pinyin": "otâhk askîwin",
        "audio": "../_audio/141.m4a"
    },
    "142": {
        "character": "ᑯᑕᐠ ᐊᐢᑮᐏᑭ",
        "letter": "next year",
        "pinyin": "kotak askîwiki",
        "audio": "../_audio/142.m4a"
    },
    "143": {
        "character": "ᐏᔮᐢ",
        "letter": "meat",
        "pinyin": "wiyâs",
        "audio": "../_audio/143.m4a"
    },
    "144": {
        "character": "ᒧᐢᑐᓱᐏᔮᐢ",
        "letter": "beef",
        "pinyin": "mostosowiyâs",
        "audio": "../_audio/144.m4a"
    },
    "145": {
        "character": "ᑯᐦᑰᓯᐏᔮᐢ",
        "letter": "pork/ham",
        "pinyin": "kohkôsiwiyâs",
        "audio": "../_audio/145.m4a"
    },
    "146": {
        "character": "ᑯᐦᑰᓯᐑᔨᐣ",
        "letter": "bacon",
        "pinyin": "kohkôsiwîyin",
        "audio": "../_audio/146.m4a"
    },
    "147": {
        "character": "ᑯᐦᑰᓱᑇᒼ",
        "letter": "ham",
        "pinyin": "kohkôsopwâm",
        "audio": "../_audio/147.m4a"
    },
    "148": {
        "character": "ᒨᓱᐏᔮᐢ",
        "letter": "moose meat",
        "pinyin": "môsowiyâs",
        "audio": "../_audio/148.m4a"
    },
    "149": {
        "character": "ᐊᑎᐦᑯᐏᔮᐢ",
        "letter": "caribou meat",
        "pinyin": "atihkowiyâs",
        "audio": "../_audio/149.m4a"
    },
    "150": {
        "character": "ᓯᑯᐱᒋᑲᓂᐏᔮᐢ",
        "letter": "ground meat",
        "pinyin": "sikopicikaniwiyâs",
        "audio": "../_audio/150.m4a"
    },
    "151": {
        "character": "ᒥᑌᐦ",
        "letter": "heart",
        "pinyin": "mitêh",
        "audio": "../_audio/151.m4a"
    },
    "152": {
        "character": "ᐑᓂᐩ",
        "letter": "bone marrow",
        "pinyin": "wîniy",
        "audio": "../_audio/152.m4a"
    },
    "153": {
        "character": "ᒥᑌᔭᓂᐩ",
        "letter": "tongue",
        "pinyin": "mitêyaniy",
        "audio": "../_audio/153.m4a"
    },
    "154": {
        "character": "ᒥᒐᑭᓰᓴ",
        "letter": "sausages",
        "pinyin": "micakisîsa",
        "audio": "../_audio/154.m4a"
    },
    "155": {
        "character": "ᐱᒥᐦᑳᐣ",
        "letter": "pemmican",
        "pinyin": "pimihkân",
        "audio": "../_audio/155.m4a"
    },
    "156": {
        "character": "ᑲᐦᑫᐘᐠ",
        "letter": "dried meat",
        "pinyin": "kahkêwak",
        "audio": "../_audio/156.m4a"
    },
    "157": {
        "character": "ᐸᐢᒁᒧᐢᑐᓱᐏᔮᐢ",
        "letter": "buffalo meat",
        "pinyin": "paskwâmostosowiyâs",
        "audio": "../_audio/157.m4a"
    },
    "158": {
        "character": "ᐸᐦᑲᐦᐋᐦᒁᓄᐏᔮᐢ",
        "letter": "chicken meat",
        "pinyin": "pahkahâhkwânowiyâs",
        "audio": "../_audio/158.m4a"
    },
    "159": {
        "character": "ᐊᒥᐢᑯᐏᔮᐢ",
        "letter": "beaver meat",
        "pinyin": "amiskowiyâs",
        "audio": "../_audio/159.m4a"
    },
    "160": {
        "character": "ᒫᔭᑎᐦᑯᐏᔮᐢ",
        "letter": "mutton",
        "pinyin": "mâyatihkowiyâs",
        "audio": "../_audio/160.m4a"
    },
    "161": {
        "character": "ᒦᓂᐢ",
        "letter": "berry",
        "pinyin": "mînis",
        "audio": "../_audio/161.m4a"
    },
    "162": {
        "character": "ᐃᔨᓂᒥᓇ",
        "letter": "blueberries",
        "pinyin": "iyinimina",
        "audio": "../_audio/162.m4a"
    },
    "163": {
        "character": "ᐑᓴᑮᒥᓇ",
        "letter": "cranberries",
        "pinyin": "wîsakîmina",
        "audio": "../_audio/163.m4a"
    },
    "164": {
        "character": "ᒪᐢᑫᑰᒥᓇ",
        "letter": "cranberries",
        "pinyin": "maskêkômina",
        "audio": "../_audio/164.m4a"
    },
    "165": {
        "character": "ᓃᐱᒥᓈᓇ",
        "letter": "cranberries",
        "pinyin": "nîpiminâna",
        "audio": "../_audio/165.m4a"
    },
    "166": {
        "character": "ᑕᑿᐦᐃᒥᓈᓇ",
        "letter": "choke-cherries",
        "pinyin": "takwahiminâna",
        "audio": "../_audio/166.m4a"
    },
    "167": {
        "character": "ᒥᑌᐦᐃᒥᓇ",
        "letter": "strawberries",
        "pinyin": "mitêhimina",
        "audio": "../_audio/167.m4a"
    },
    "168": {
        "character": "ᒥᓵᐢᑲᑑᒥᓇ",
        "letter": "Saskatoon berries",
        "pinyin": "misâskatômina",
        "audio": "../_audio/168.m4a"
    },
    "169": {
        "character": "ᐅᑎᓰᐦᑳᐣ",
        "letter": "turnip",
        "pinyin": "otisîhkân",
        "audio": "../_audio/169.m4a"
    },
    "170": {
        "character": "ᑳᒥᐦᑿᐢᒁᐦᑭ",
        "letter": "beets",
        "pinyin": "kâ-mihkwaskwâhki",
        "audio": "../_audio/170.m4a"
    },
    "171": {
        "character": "ᓃᐱᔭ",
        "letter": "lettuce/salad",
        "pinyin": "nîpiya",
        "audio": "../_audio/171.m4a"
    },
    "172": {
        "character": "ᓇᐸᑖᑿ",
        "letter": "potatoes",
        "pinyin": "napatâkwa",
        "audio": "../_audio/172.m4a"
    },
    "173": {
        "character": "ᑭᐢᒋᑳᓇ",
        "letter": "potatoes",
        "pinyin": "kiscikâna",
        "audio": "../_audio/173.m4a"
    },
    "174": {
        "character": "ᐊᐢᑭᑇᐘ",
        "letter": "potatoes",
        "pinyin": "askipwâwa",
        "audio": "../_audio/174.m4a"
    },
    "175": {
        "character": "ᐑᔨᐦᑎᐦᑊ",
        "letter": "brain",
        "pinyin": "wîyihtihp",
        "audio": "../_audio/175.m4a"
    },
    "176": {
        "character": "ᑐᐦᑑᓵᐴᐏᐱᒥᐩ",
        "letter": "butter",
        "pinyin": "tohtôsâpôwipimiy",
        "audio": "../_audio/176.m4a"
    },
    "177": {
        "character": "ᐱᒥᐩ",
        "letter": "oil/lard/grease",
        "pinyin": "pimiy",
        "audio": "../_audio/177.m4a"
    },
    "178": {
        "character": "ᒪᓂᐦᐃᑲᐣ",
        "letter": "cream",
        "pinyin": "manihikan",
        "audio": "../_audio/178.m4a"
    },
    "179": {
        "character": "ᑐᐦᑑᓵᐳᐩ",
        "letter": "milk",
        "pinyin": "tohtôsâpoy",
        "audio": "../_audio/179.m4a"
    },
    "180": {
        "character": "ᐚᐏ",
        "letter": "egg",
        "pinyin": "wâwi",
        "audio": "../_audio/180.m4a"
    },
    "181": {
        "character": "ᐃᐢᑵᓯᓵᐳᐩ",
        "letter": "beer",
        "pinyin": "iskwêsisâpoy",
        "audio": "../_audio/181.m4a"
    },
    "182": {
        "character": "ᐃᐢᑯᑌᐚᐳᐩ",
        "letter": "liquor",
        "pinyin": "iskotêwâpoy",
        "audio": "../_audio/182.m4a"
    },
    "183": {
        "character": "ᓂᐦᑎᐩ",
        "letter": "tea",
        "pinyin": "nihtiy",
        "audio": "../_audio/183.m4a"
    },
    "184": {
        "character": "ᒪᐢᑭᐦᑮᐚᐳᐩ",
        "letter": "herb-tea",
        "pinyin": "maskihkîwâpoy",
        "audio": "../_audio/184.m4a"
    },
    "185": {
        "character": "ᐱᐦᑲᑌᐚᐳᐩ",
        "letter": "coffee",
        "pinyin": "pihkatêwâpoy",
        "audio": "../_audio/185.m4a"
    },
    "186": {
        "character": "ᓰᐚᐳᐩ",
        "letter": "pop",
        "pinyin": "sîwâpoy",
        "audio": "../_audio/186.m4a"
    },
    "187": {
        "character": "ᑭᓵᐢᑌᐚᐳᐩ",
        "letter": "Kool-Aid",
        "pinyin": "kisâstêwâpoy",
        "audio": "../_audio/187.m4a"
    },
    "188": {
        "character": "ᓲᒥᓈᐳᐩ",
        "letter": "wine",
        "pinyin": "sôminâpoy",
        "audio": "../_audio/188.m4a"
    },
    "189": {
        "character": "ᒦᒋᒫᐳᐩ",
        "letter": "soup",
        "pinyin": "mîcimâpoy",
        "audio": "../_audio/189.m4a"
    },
    "190": {
        "character": "ᐅᓵᐚᐳᐩ",
        "letter": "orange juice",
        "pinyin": "osâwâpoy",
        "audio": "../_audio/190.m4a"
    },
    "191": {
        "character": "ᓰᐏᓅᐢ/ᓰᐚᐢ",
        "letter": "candy",
        "pinyin": "sîwinôs/sîwâs",
        "audio": "../_audio/191.m4a"
    },
    "192": {
        "character": "ᐋᒨᒣᔨ",
        "letter": "honey",
        "pinyin": "âmômêyi",
        "audio": "../_audio/192.m4a"
    },
    "193": {
        "character": "ᐋᒨᓰᓯᐹᐢᑿᐟ",
        "letter": "honey",
        "pinyin": "âmôsîsipâskwat",
        "audio": "../_audio/193.m4a"
    },
    "194": {
        "character": "ᓰᓯᐹᐢᑿᐟ",
        "letter": "maple sugar",
        "pinyin": "sîsipâskwat",
        "audio": "../_audio/194.m4a"
    },
    "195": {
        "character": "ᐯᐢᑯᒥᓇ",
        "letter": "pepper",
        "pinyin": "pêskomina",
        "audio": "../_audio/195.m4a"
    },
    "196": {
        "character": "ᐑᓴᑲᐟ",
        "letter": "pepper",
        "pinyin": "wîsakat",
        "audio": "../_audio/196.m4a"
    },
    "197": {
        "character": "ᐊᐢᑮᐏᓰᐏᐦᑖᑲᐣ",
        "letter": "pepper",
        "pinyin": "askîwisîwihtâkan",
        "audio": "../_audio/197.m4a"
    },
    "198": {
        "character": "ᓰᐏᐦᑖᑲᐣ",
        "letter": "salt",
        "pinyin": "sîwihtâkan",
        "audio": "../_audio/198.m4a"
    },
    "199": {
        "character": "ᓰᐏᓂᑲᐣ",
        "letter": "sugar",
        "pinyin": "sîwinikan",
        "audio": "../_audio/199.m4a"
    },
    "200": {
        "character": "ᐏᐦᑎᑰᐏᒦᒋᐏᐣ",
        "letter": "popcorn",
        "pinyin": "wihtikôwimîciwin",
        "audio": "../_audio/200.m4a"
    },
    "201": {
        "character": "ᒦᒋᐏᐣ",
        "letter": "food",
        "pinyin": "mîciwin",
        "audio": "../_audio/201.m4a"
    },
    "202": {
        "character": "ᐅᐦᐱᐦᑲᓯᑲᐣ",
        "letter": "yeast",
        "pinyin": "ohpihkasikan",
        "audio": "../_audio/202.m4a"
    },
    "203": {
        "character": "ᐏᐦᑫᐢ",
        "letter": "muskrat-root",
        "pinyin": "wihkês",
        "audio": "../_audio/203.m4a"
    },
    "204": {
        "character": "ᐏᐦᑲᐢᑿ",
        "letter": "sweet-grass",
        "pinyin": "wihkaskwa",
        "audio": "../_audio/204.m4a"
    },
    "205": {
        "character": "ᐸᐢᒁᐏᐦᑲᐢᑿ",
        "letter": "sage",
        "pinyin": "paskwâwihkaskwa",
        "audio": "../_audio/205.m4a"
    },
    "206": {
        "character": "ᒪᐢᑭᐦᑭᐩ",
        "letter": "medicine",
        "pinyin": "maskihkiy",
        "audio": "../_audio/206.m4a"
    },
    "207": {
        "character": "ᐊᐱᐢᑖᒉᑯᐢ",
        "letter": "antelope",
        "pinyin": "apistâcêkos",
        "audio": "../_audio/207.m4a"
    },
    "208": {
        "character": "ᒨᔁ",
        "letter": "moose",
        "pinyin": "môswa",
        "audio": "../_audio/208.m4a"
    },
    "209": {
        "character": "ᐚᐚᐢᑫᓯᐤ",
        "letter": "elk",
        "pinyin": "wâwâskêsiw",
        "audio": "../_audio/209.m4a"
    },
    "210": {
        "character": "ᒫᔭᑎᕽ",
        "letter": "sheep",
        "pinyin": "mâyatihk",
        "audio": "../_audio/210.m4a"
    },
    "211": {
        "character": "ᐚᐳᐢ",
        "letter": "rabbit",
        "pinyin": "wâpos",
        "audio": "../_audio/211.m4a"
    },
    "212": {
        "character": "ᐊᐱᓯᒨᓱᐢ",
        "letter": "deer",
        "pinyin": "apisimôsos",
        "audio": "../_audio/212.m4a"
    },
    "213": {
        "character": "ᓰᓰᑊ",
        "letter": "duck",
        "pinyin": "sîsîp",
        "audio": "../_audio/213.m4a"
    },
    "214": {
        "character": "ᓂᐢᑲ",
        "letter": "goose",
        "pinyin": "niska",
        "audio": "../_audio/214.m4a"
    },
    "215": {
        "character": "ᐊᑎᕽ",
        "letter": "caribou",
        "pinyin": "atihk",
        "audio": "../_audio/215.m4a"
    },
    "216": {
        "character": "ᒪᐢᑿ",
        "letter": "bear",
        "pinyin": "maskwa",
        "audio": "../_audio/216.m4a"
    },
    "217": {
        "character": "ᒹᑿ",
        "letter": "loon",
        "pinyin": "mwâkwa",
        "audio": "../_audio/217.m4a"
    },
    "218": {
        "character": "ᐊᓂᑿᒑᐢᐠ",
        "letter": "gopher/squirrel",
        "pinyin": "anikwacâsk",
        "audio": "../_audio/218.m4a"
    },
    "219": {
        "character": "ᐸᐦᑲᐦᐋᐦᒁᐣ",
        "letter": "chicken",
        "pinyin": "pahkahâhkwân",
        "audio": "../_audio/219.m4a"
    },
    "220": {
        "character": "ᐸᐢᒁᒧᐢᑐᐢ",
        "letter": "buffalo",
        "pinyin": "paskwâmostos",
        "audio": "../_audio/220.m4a"
    },
    "221": {
        "character": "ᐱᐦᐁᐤ",
        "letter": "grouse",
        "pinyin": "pihêw",
        "audio": "../_audio/221.m4a"
    },
    "222": {
        "character": "ᐸᐢᐸᐢᑭᐤ",
        "letter": "birch grouse",
        "pinyin": "paspaskiw",
        "audio": "../_audio/222.m4a"
    },
    "223": {
        "character": "ᒥᓯᐦᐁᐤ",
        "letter": "turkey",
        "pinyin": "misihêw",
        "audio": "../_audio/223.m4a"
    },
    "224": {
        "character": "ᐊᒥᐢᐠ",
        "letter": "beaver",
        "pinyin": "amisk",
        "audio": "../_audio/224.m4a"
    },
    "225": {
        "character": "ᑭᓄᓭᐤ",
        "letter": "fish",
        "pinyin": "kinosêw",
        "audio": "../_audio/225.m4a"
    },
    "226": {
        "character": "ᐅᑳᐤ",
        "letter": "pickerel",
        "pinyin": "okâw",
        "audio": "../_audio/226.m4a"
    },
    "227": {
        "character": "ᐊᑎᐦᑲᒣᐠ",
        "letter": "white-fish",
        "pinyin": "atihkamêk",
        "audio": "../_audio/227.m4a"
    },
    "228": {
        "character": "ᐃᔨᓂᑭᓄᓭᐤ",
        "letter": "jack-fish",
        "pinyin": "iyinikinosêw",
        "audio": "../_audio/228.m4a"
    },
    "229": {
        "character": "ᒥᓂᐩ",
        "letter": "Mariah fish",
        "pinyin": "miniy",
        "audio": "../_audio/229.m4a"
    },
    "230": {
        "character": "ᐅᑑᓇᐱᐩ",
        "letter": "tullabee",
        "pinyin": "otônapiy",
        "audio": "../_audio/230.m4a"
    },
    "231": {
        "character": "ᓇᒣᐤ",
        "letter": "sturgeon",
        "pinyin": "namêw",
        "audio": "../_audio/231.m4a"
    },
    "232": {
        "character": "ᓇᒣᑯᐢ",
        "letter": "trout",
        "pinyin": "namêkos",
        "audio": "../_audio/232.m4a"
    },
    "233": {
        "character": "ᓇᒣᐱᐣ",
        "letter": "sucker",
        "pinyin": "namêpin",
        "audio": "../_audio/233.m4a"
    },
    "234": {
        "character": "ᒪᓅᒥᓇᐠ",
        "letter": "rice",
        "pinyin": "manôminak",
        "audio": "../_audio/234.m4a"
    },
    "235": {
        "character": "ᒪᐢᑯᓰᒥᓇ",
        "letter": "wild rice",
        "pinyin": "maskosîmina",
        "audio": "../_audio/235.m4a"
    },
    "236": {
        "character": "ᐆᒌᒋᓴᐠ",
        "letter": "rice",
        "pinyin": "ôcîcisak",
        "audio": "../_audio/236.m4a"
    },
    "237": {
        "character": "ᐚᐱᓅᒥᓇᐠ",
        "letter": "rice",
        "pinyin": "wâpinôminak",
        "audio": "../_audio/237.m4a"
    },
    "238": {
        "character": "ᒪᐦᑖᒥᐣ",
        "letter": "corn",
        "pinyin": "mahtâmin",
        "audio": "../_audio/238.m4a"
    },
    "239": {
        "character": "ᐅᐢᑳᑖᐢᐠ",
        "letter": "carrot",
        "pinyin": "oskâtâsk",
        "audio": "../_audio/239.m4a"
    },
    "240": {
        "character": "ᒪᐢᑭᒧᒋᓴᐠ",
        "letter": "beans",
        "pinyin": "maskimocisak",
        "audio": "../_audio/240.m4a"
    },
    "241": {
        "character": "ᐏᐦᒉᑲᐢᑯᓰᐢ",
        "letter": "onion",
        "pinyin": "wihcêkaskosîs",
        "audio": "../_audio/241.m4a"
    },
    "242": {
        "character": "ᑭᐦᒎᑭᓂᐩ",
        "letter": "tomato",
        "pinyin": "kihcôkiniy",
        "audio": "../_audio/242.m4a"
    },
    "243": {
        "character": "ᐅᑭᓂᔭᐠ",
        "letter": "wild rose-hips",
        "pinyin": "okiniyak",
        "audio": "../_audio/243.m4a"
    },
    "244": {
        "character": "ᓵᐴᒥᓇᐠ",
        "letter": "gooseberries",
        "pinyin": "sâpôminak",
        "audio": "../_audio/244.m4a"
    },
    "245": {
        "character": "ᐊᔫᐢᑲᓇᐠ",
        "letter": "raspberries",
        "pinyin": "ayôskanak",
        "audio": "../_audio/245.m4a"
    },
    "246": {
        "character": "ᓲᒥᓂᓴᐠ",
        "letter": "raisins",
        "pinyin": "sôminisak",
        "audio": "../_audio/246.m4a"
    },
    "247": {
        "character": "ᐱᒋᒁᐢ",
        "letter": "apple",
        "pinyin": "picikwâs",
        "audio": "../_audio/247.m4a"
    },
    "248": {
        "character": "ᐚᑳᐢ",
        "letter": "banana",
        "pinyin": "wâkâs",
        "audio": "../_audio/248.m4a"
    },
    "249": {
        "character": "ᐅᓵᐚᐢ",
        "letter": "orange",
        "pinyin": "osâwâs",
        "audio": "../_audio/249.m4a"
    },
    "250": {
        "character": "ᐸᑳᐣ",
        "letter": "nut",
        "pinyin": "pakân",
        "audio": "../_audio/250.m4a"
    },
    "251": {
        "character": "ᐱᐦᑲᓯᑲᐣ",
        "letter": "toast",
        "pinyin": "pihkasikan",
        "audio": "../_audio/251.m4a"
    },
    "252": {
        "character": "ᐋᓅᒥᐣ",
        "letter": "oatmeal",
        "pinyin": "ânômin",
        "audio": "../_audio/252.m4a"
    },
    "253": {
        "character": "ᐸᐦᑵᓯᑲᐣ",
        "letter": "bannock",
        "pinyin": "pahkwêsikan",
        "audio": "../_audio/253.m4a"
    },
    "254": {
        "character": "ᐲᓷᐦᑲᓯᑲᐣ",
        "letter": "bread",
        "pinyin": "pîswêhkasikan",
        "audio": "../_audio/254.m4a"
    },
    "255": {
        "character": "ᐲᓷᐦᑲᓯᑲᓂᓴᐠ",
        "letter": "buns",
        "pinyin": "pîswêhkasikanisak",
        "audio": "../_audio/255.m4a"
    },
    "256": {
        "character": "ᓰᐏᐦᑲᓯᑲᐣ",
        "letter": "cake",
        "pinyin": "sîwihkasikan",
        "audio": "../_audio/256.m4a"
    },
    "257": {
        "character": "ᐏᐦᑭᐦᑲᓯᑲᐣ",
        "letter": "cake",
        "pinyin": "wihkihkasikan",
        "audio": "../_audio/257.m4a"
    },
    "258": {
        "character": "ᓰᐏᐦᑲᓯᑲᓇᐠ",
        "letter": "baked goods",
        "pinyin": "sîwihkasikanak",
        "audio": "../_audio/258.m4a"
    },
    "259": {
        "character": "ᓰᐏᓂᑲᐣ",
        "letter": "sugar",
        "pinyin": "sîwinikan",
        "audio": "../_audio/259.m4a"
    },
    "260": {
        "character": "ᔩᐘᐦᐃᑲᓇᐠ",
        "letter": "ground meat/fish",
        "pinyin": "yîwahikanak",
        "audio": "../_audio/260.m4a"
    },
    "261": {
        "character": "ᒥᐢᑿᒥᐩ",
        "letter": "ice",
        "pinyin": "miskwamiy",
        "audio": "../_audio/261.m4a"
    },
    "262": {
        "character": "ᓇᒦᐢᒌᑯᐢ",
        "letter": "dried fillets",
        "pinyin": "namîscîkos",
        "audio": "../_audio/262.m4a"
    },
    "263": {
        "character": "ᒧᐦᑯᒫᐣ",
        "letter": "knife (NI)",
        "pinyin": "mohkomân",
        "audio": "../_audio/263.m4a"
    },
    "264": {
        "character": "ᒌᐢᑕᐦᐋᓭᐳᐣ",
        "letter": "fork (NI)",
        "pinyin": "cîstahâsêpon",
        "audio": "../_audio/264.m4a"
    },
    "265": {
        "character": "ᐁᒥᐦᒁᐣ",
        "letter": "spoon(NA)",
        "pinyin": "êmihkwân",
        "audio": "../_audio/265.m4a"
    },
    "266": {
        "character": "ᐅᔮᑲᐣ",
        "letter": "plate (NI)",
        "pinyin": "oyâkan",
        "audio": "../_audio/266.m4a"
    },
    "267": {
        "character": "ᒥᓂᐦᒁᒋᑲᐣ",
        "letter": "cup (NI)",
        "pinyin": "minihkwâcikan",
        "audio": "../_audio/267.m4a"
    },
    "268": {
        "character": "ᐊᐢᑭᕽ",
        "letter": "pail (NA)",
        "pinyin": "askihk",
        "audio": "../_audio/268.m4a"
    },
    "269": {
        "character": "ᓰᓰᐸᐢᑭᕽ",
        "letter": "kettle (NA)",
        "pinyin": "sîsîpaskihk",
        "audio": "../_audio/269.m4a"
    },
    "270": {
        "character": "ᓵᓵᐱᐢᑭᓯᑲᐣ",
        "letter": "frying-pan (NA)",
        "pinyin": "sâsâpiskisikan",
        "audio": "../_audio/270.m4a"
    },
    "271": {
        "character": "ᓵᓭᐢᑭᐦᒁᐣ",
        "letter": "frying-pan (NA)",
        "pinyin": "sâsêskihkwân",
        "audio": "../_audio/271.m4a"
    },
    "272": {
        "character": "ᑯᒐᐚᑲᓂᐢ",
        "letter": "match (NI)",
        "pinyin": "kocawâkanis",
        "audio": "../_audio/272.m4a"
    },
    "273": {
        "character": "ᐊᑯᒋᑲᐣ",
        "letter": "cupboard (NI)",
        "pinyin": "akocikan",
        "audio": "../_audio/273.m4a"
    },
    "274": {
        "character": "ᑯᑕᐚᓈᐱᐢᐠ",
        "letter": "stove (NI)",
        "pinyin": "kotawânâpisk",
        "audio": "../_audio/274.m4a"
    },
    "275": {
        "character": "ᑫᓯᐢᑲᐏᐦᑲᓯᑲᐣ",
        "letter": "micro-wave (NI)",
        "pinyin": "kêsiskawihkasikan",
        "audio": "../_audio/275.m4a"
    },
    "276": {
        "character": "ᓭᑯᐍᐱᓈᐱᐢᐠ",
        "letter": "oven (NI)",
        "pinyin": "sêkowêpinâpisk",
        "audio": "../_audio/276.m4a"
    },
    "277": {
        "character": "ᐊᐦᑿᒋᑲᐣ",
        "letter": "freezer (NI)",
        "pinyin": "ahkwacikan",
        "audio": "../_audio/277.m4a"
    },
    "278": {
        "character": "ᑕᐦᑲᐢᒋᑲᐣ",
        "letter": "fridge (NI)",
        "pinyin": "tahkascikan",
        "audio": "../_audio/278.m4a"
    },
    "279": {
        "character": "ᑭᓭᐲᓯᒼ",
        "letter": "January.",
        "pinyin": "kisêpîsim",
        "audio": "../_audio/279.m4a"
    },
    "280": {
        "character": "ᒥᑭᓯᐏᐲᓯᒼ",
        "letter": "February",
        "pinyin": "mikisiwipîsim",
        "audio": "../_audio/280.m4a"
    },
    "281": {
        "character": "ᓂᐢᑭᐲᓯᒼ",
        "letter": "March",
        "pinyin": "niskipîsim",
        "audio": "../_audio/281.m4a"
    },
    "282": {
        "character": "ᐊᔩᑭᐲᓯᒼ",
        "letter": "April",
        "pinyin": "ayîkipîsim",
        "audio": "../_audio/282.m4a"
    },
    "283": {
        "character": "ᓵᑭᐸᑳᐏᐲᓯᒼ",
        "letter": "May",
        "pinyin": "sâkipakâwipîsim",
        "audio": "../_audio/283.m4a"
    },
    "284": {
        "character": "ᐹᐢᑳᐏᐦᐅᐏᐲᓯᒼ",
        "letter": "June",
        "pinyin": "pâskâwihowipîsim",
        "audio": "../_audio/284.m4a"
    },
    "285": {
        "character": "ᐸᐢᑯᐏᐲᓯᒼ",
        "letter": "July",
        "pinyin": "paskowipîsim",
        "audio": "../_audio/285.m4a"
    },
    "286": {
        "character": "ᐅᐦᐸᐦᐅᐏᐲᓯᒼ",
        "letter": "August",
        "pinyin": "ohpahowipîsim",
        "audio": "../_audio/286.m4a"
    },
    "287": {
        "character": "ᓅᒋᐦᐃᑐᐏᐲᓯᒼ",
        "letter": "September",
        "pinyin": "nôcihitowipîsim",
        "audio": "../_audio/287.m4a"
    },
    "288": {
        "character": "ᑕᒁᑭᐲᓯᒼ",
        "letter": "September",
        "pinyin": "takwâkipîsim",
        "audio": "../_audio/288.m4a"
    },
    "289": {
        "character": "ᐱᓈᐢᑯᐏᐲᓯᒼ",
        "letter": "October",
        "pinyin": "pinâskowipîsim",
        "audio": "../_audio/289.m4a"
    },
    "290": {
        "character": "ᐃᐦᑯᐲᐏᐲᓯᒼ",
        "letter": "November",
        "pinyin": "ihkopîwipîsim",
        "audio": "../_audio/290.m4a"
    },
    "291": {
        "character": "ᐸᐚᒐᑭᓇᓰᓯᐲᓯᒼ",
        "letter": "December",
        "pinyin": "pawâcakinasîsipîsim",
        "audio": "../_audio/291.m4a"
    },
    "292": {
        "character": "ᐯᔭᐠ",
        "letter": "1",
        "pinyin": "pêyak",
        "audio": "../_audio/292.m4a"
    },
    "293": {
        "character": "ᓃᓱ",
        "letter": "2",
        "pinyin": "nîso",
        "audio": "../_audio/293.m4a"
    },
    "294": {
        "character": "ᓂᐢᑐ",
        "letter": "3",
        "pinyin": "nisto",
        "audio": "../_audio/294.m4a"
    },
    "295": {
        "character": "ᓀᐓ",
        "letter": "4",
        "pinyin": "nêwo",
        "audio": "../_audio/295.m4a"
    },
    "296": {
        "character": "ᓂᔮᓇᐣ",
        "letter": "5",
        "pinyin": "niyânan",
        "audio": "../_audio/296.m4a"
    },
    "297": {
        "character": "ᓂᑯᑤᓯᐠ",
        "letter": "6",
        "pinyin": "nikotwâsik",
        "audio": "../_audio/297.m4a"
    },
    "298": {
        "character": "ᑌᐸᑯᐦᑊ",
        "letter": "7",
        "pinyin": "têpakohp",
        "audio": "../_audio/298.m4a"
    },
    "299": {
        "character": "ᐊᔦᓈᓀᐤ",
        "letter": "8",
        "pinyin": "ayênânêw",
        "audio": "../_audio/299.m4a"
    },
    "300": {
        "character": "ᑫᑳᒥᑖᑕᐦᐟ*",
        "letter": "9",
        "pinyin": "kêkâ-mitâtaht*",
        "audio": "../_audio/300.m4a"
    },
    "301": {
        "character": "ᒥᑖᑕᐦᐟ",
        "letter": "10",
        "pinyin": "mitâtaht",
        "audio": "../_audio/301.m4a"
    },
    "302": {
        "character": "ᐯᔭᑯᓵᑊ",
        "letter": "11",
        "pinyin": "pêyakosâp",
        "audio": "../_audio/302.m4a"
    },
    "303": {
        "character": "ᓃᓱᓵᑊ",
        "letter": "12",
        "pinyin": "nîsosâp",
        "audio": "../_audio/303.m4a"
    },
    "304": {
        "character": "ᓂᐢᑐᓵᑊ",
        "letter": "13",
        "pinyin": "nistosâp",
        "audio": "../_audio/304.m4a"
    },
    "305": {
        "character": "ᓀᐓᓵᑊ",
        "letter": "14",
        "pinyin": "nêwosâp",
        "audio": "../_audio/305.m4a"
    },
    "306": {
        "character": "ᓂᔮᓇᓄᓵᑊ",
        "letter": "15",
        "pinyin": "niyânanosâp",
        "audio": "../_audio/306.m4a"
    },
    "307": {
        "character": "ᓂᑯᑤᐢ(ᐃᐠ)ᐅᓵᑊ",
        "letter": "16",
        "pinyin": "nikotwâs(ik)osâp",
        "audio": "../_audio/307.m4a"
    },
    "308": {
        "character": "ᑌᐸᑯᐦᐳᓵᑊ",
        "letter": "17",
        "pinyin": "têpakohposâp",
        "audio": "../_audio/308.m4a"
    },
    "309": {
        "character": "ᐊᔦᓈᓀᐓᓵᑊ",
        "letter": "18",
        "pinyin": "ayênânêwosâp",
        "audio": "../_audio/309.m4a"
    },
    "310": {
        "character": "ᑫᑳᒥᑖᑕᐦᑐᓵᑊ",
        "letter": "19",
        "pinyin": "kêkâ-mitâtahtosâp",
        "audio": "../_audio/310.m4a"
    },
    "311": {
        "character": "ᓃᐢ(ᐅᒼ)ᐃᑕᓇᐤ",
        "letter": "20",
        "pinyin": "nîs(om)itanaw",
        "audio": "../_audio/311.m4a"
    },
    "312": {
        "character": "ᓂᐢᑐᒥᑕᓇᐤ",
        "letter": "30",
        "pinyin": "nistomitanaw",
        "audio": "../_audio/312.m4a"
    },
    "313": {
        "character": "ᓀ(ᐓ)ᒥᑕᓇᐤ",
        "letter": "40",
        "pinyin": "nê(wo)mitanaw",
        "audio": "../_audio/313.m4a"
    },
    "314": {
        "character": "ᓂᔮᓇᓄᒥᑕᓇᐤ",
        "letter": "50",
        "pinyin": "niyânanomitanaw",
        "audio": "../_audio/314.m4a"
    },
    "315": {
        "character": "ᓂᑯᑤᓯᑯᒥᑕᓇᐤ",
        "letter": "60",
        "pinyin": "nikotwâsikomitanaw",
        "audio": "../_audio/315.m4a"
    },
    "316": {
        "character": "ᑌᐸᑯᐦᐳᒥᑕᓇᐤ",
        "letter": "70",
        "pinyin": "têpakohpomitanaw",
        "audio": "../_audio/316.m4a"
    },
    "317": {
        "character": "ᐊᔦᓈᓀ(ᐓ)ᒥᑕᓇᐤ",
        "letter": "80",
        "pinyin": "ayênânê(wo)mitanaw",
        "audio": "../_audio/317.m4a"
    },
    "318": {
        "character": "ᑫᑳᒥᑖᑕᐦᑐᒥᑕᓇᐤ",
        "letter": "90",
        "pinyin": "kêkâ-mitâtahtomitanaw",
        "audio": "../_audio/318.m4a"
    },
    "319": {
        "character": "ᒥᑖᑕᐦᑐᒥᑕᓇᐤ",
        "letter": "100",
        "pinyin": "mitâtahtomitanaw",
        "audio": "../_audio/319.m4a"
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