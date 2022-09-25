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
        "pinyin": "tânisi"
    },
    "2": {
        "character": "ᓇᒨᔭ",
        "letter": "no",
        "pinyin": "namôya"
    },
    "3": {
        "character": "ᓇᒨᔭ ᓈᓂᑕᐤ",
        "letter": "fine",
        "pinyin": "namôya nânitaw"
    },
    "4": {
        "character": "ᓈᓂᑕᐤ",
        "letter": "about",
        "pinyin": "nânitaw"
    },
    "5": {
        "character": "ᑭᔭ",
        "letter": "you",
        "pinyin": "kiya"
    },
    "6": {
        "character": "ᒫᑲ",
        "letter": "but",
        "pinyin": "mâka"
    },
    "7": {
        "character": "ᑭᔭ ᒫᑲ᙮",
        "letter": "How about you?",
        "pinyin": "kiya mâka."
    },
    "8": {
        "character": "ᐯᔭᑿᐣ",
        "letter": "the same",
        "pinyin": "pêyakwan"
    },
    "9": {
        "character": "ᓂᑎᓯᔨᐦᑳᓱᐣ",
        "letter": "my name is",
        "pinyin": "nitisiyihkâson"
    },
    "10": {
        "character": "ᑭᑎᓯᔨᐦᑳᓱᐣ",
        "letter": "your name is",
        "pinyin": "kitisiyihkâson"
    },
    "11": {
        "character": "ᐅᐦᒋ",
        "letter": "from",
        "pinyin": "ohci"
    },
    "12": {
        "character": "ᓂᔭ",
        "letter": "I/me",
        "pinyin": "niya"
    },
    "13": {
        "character": "ᑖᓂᑌ",
        "letter": "where",
        "pinyin": "tânitê"
    },
    "14": {
        "character": "ᒣᒁᐨ",
        "letter": "now",
        "pinyin": "mêkwâc"
    },
    "15": {
        "character": "ᓂᐑᑭᐣ",
        "letter": "I live/reside",
        "pinyin": "niwîkin"
    },
    "16": {
        "character": "ᐁᑯᑕ",
        "letter": "there",
        "pinyin": "êkota"
    },
    "17": {
        "character": "ᑭᐑᑭᐣ",
        "letter": "you live",
        "pinyin": "kiwîkin"
    },
    "18": {
        "character": "ᒦᓇ",
        "letter": "also/too",
        "pinyin": "mîna"
    },
    "19": {
        "character": "ᓃᐢᑕ",
        "letter": "me too",
        "pinyin": "nîsta"
    },
    "20": {
        "character": "ᑮᐢᑕ",
        "letter": "you too",
        "pinyin": "kîsta"
    },
    "21": {
        "character": "ᐅᑭᐢᑭᓌᐦᐊᒫᑫᐤ",
        "letter": "a teacher",
        "pinyin": "okiskinwahamâkêw"
    },
    "22": {
        "character": "ᐅᑭᐢᑭᓌᐦᐊᒫᑲᐣ",
        "letter": "a student",
        "pinyin": "okiskinwahamâkan"
    },
    "23": {
        "character": "ᑲᔭᐦᑌ",
        "letter": "originally",
        "pinyin": "kayahtê"
    },
    "24": {
        "character": "ᐅᒧᓲᒥᒫᐤ",
        "letter": "a grandfather",
        "pinyin": "omosômimâw"
    },
    "25": {
        "character": "ᐅᐦᑯᒥᒫᐤ",
        "letter": "a grandmother",
        "pinyin": "ohkomimâw"
    },
    "26": {
        "character": "ᐅᑳᐑᒫᐤ",
        "letter": "a mother",
        "pinyin": "okâwîmâw"
    },
    "27": {
        "character": "ᐅᐦᑖᐑᒫᐤ",
        "letter": "a father",
        "pinyin": "ohtâwîmâw"
    },
    "28": {
        "character": "ᐅᑯᓯᓯᒫᐤ",
        "letter": "a son",
        "pinyin": "okosisimâw"
    },
    "29": {
        "character": "ᐅᑖᓂᓯᒫᐤ",
        "letter": "a daughter",
        "pinyin": "otânisimâw"
    },
    "30": {
        "character": "ᐅᒥᓯᒫᐤ",
        "letter": "an older sister",
        "pinyin": "omisimâw"
    },
    "31": {
        "character": "ᐅᐢᑌᓯᒫᐤ",
        "letter": "an older brother",
        "pinyin": "ostêsimâw"
    },
    "32": {
        "character": "ᐅᓰᒥᒫᐤ",
        "letter": "a younger sibling",
        "pinyin": "osîmimâw"
    },
    "33": {
        "character": "ᐊᐚᓯᐢ",
        "letter": "a child",
        "pinyin": "awâsis"
    },
    "34": {
        "character": "ᒥᑖᐢ",
        "letter": "a pair of pants",
        "pinyin": "mitâs"
    },
    "35": {
        "character": "ᐚᐱᑿᓂᐩ",
        "letter": "a flower",
        "pinyin": "wâpikwaniy"
    },
    "36": {
        "character": "ᐊᓯᑲᐣ",
        "letter": "a sock",
        "pinyin": "asikan"
    },
    "37": {
        "character": "ᒪᐢᑯᓯᐩ",
        "letter": "a piece of grass",
        "pinyin": "maskosiy"
    },
    "38": {
        "character": "ᐊᐢᑎᐢ",
        "letter": "a mitt/glove",
        "pinyin": "astis"
    },
    "39": {
        "character": "ᓃᐱᐩ",
        "letter": "a leaf",
        "pinyin": "nîpiy"
    },
    "40": {
        "character": "ᑖᐱᐢᑳᑲᐣ",
        "letter": "a scarf/tie",
        "pinyin": "tâpiskâkan"
    },
    "41": {
        "character": "ᒪᐢᑭᐦᑭᐩ",
        "letter": "medicine",
        "pinyin": "maskihkiy"
    },
    "42": {
        "character": "ᒪᐢᑲᓯᐩ",
        "letter": "a finger/toe-nail",
        "pinyin": "maskasiy"
    },
    "43": {
        "character": "ᒣᐢᑕᑲᐩ",
        "letter": "a hair",
        "pinyin": "mêstakay"
    },
    "44": {
        "character": "ᐅᐢᑇᑲᐣ",
        "letter": "a pipe",
        "pinyin": "ospwâkan"
    },
    "45": {
        "character": "ᒦᐱᐟ",
        "letter": "a tooth",
        "pinyin": "mîpit"
    },
    "46": {
        "character": "ᐊᓯᓂᐩ",
        "letter": "a rock/stone",
        "pinyin": "asiniy"
    },
    "47": {
        "character": "ᒥᐢᑮᓯᐠ",
        "letter": "an eye",
        "pinyin": "miskîsik"
    },
    "48": {
        "character": "ᐁᒥᐦᒁᐣ",
        "letter": "a spoon",
        "pinyin": "êmihkwân"
    },
    "49": {
        "character": "ᒥᓯᐟ",
        "letter": "a foot",
        "pinyin": "misit"
    },
    "50": {
        "character": "ᐊᐢᑭᕽ",
        "letter": "a pail",
        "pinyin": "askihk"
    },
    "51": {
        "character": "ᒥᐢᑳᐟ",
        "letter": "a leg",
        "pinyin": "miskât"
    },
    "52": {
        "character": "ᐊᐳᐩ",
        "letter": "a paddle",
        "pinyin": "apoy"
    },
    "53": {
        "character": "ᒥᐢᑎᒁᐣ",
        "letter": "a head",
        "pinyin": "mistikwân"
    },
    "54": {
        "character": "ᐋᐦᒑᐱᐩ",
        "letter": "a bow",
        "pinyin": "âhcâpiy"
    },
    "55": {
        "character": "ᒥᑑᐣ",
        "letter": "a mouth",
        "pinyin": "mitôn"
    },
    "56": {
        "character": "ᐊᑲᐢᐠ",
        "letter": "an arrow",
        "pinyin": "akask"
    },
    "57": {
        "character": "ᒥᐦᑕᐘᑲᐩ",
        "letter": "an ear",
        "pinyin": "mihtawakay"
    },
    "58": {
        "character": "ᓭᐦᑫᐸᔩᐢ",
        "letter": "a car",
        "pinyin": "sêhkêpayîs"
    },
    "59": {
        "character": "ᒥᒋᐦᒋᐩ",
        "letter": "a hand",
        "pinyin": "micihciy"
    },
    "60": {
        "character": "ᓲᒥᓂᐢ",
        "letter": "a raisin",
        "pinyin": "sôminis"
    },
    "61": {
        "character": "ᒥᑌᐦᐃᒥᐣ",
        "letter": "a strawberry",
        "pinyin": "mitêhimin"
    },
    "62": {
        "character": "ᐊᔫᐢᑲᐣ",
        "letter": "a raspberry",
        "pinyin": "ayôskan"
    },
    "63": {
        "character": "ᐃᔨᓂᒥᐣ",
        "letter": "a blueberry",
        "pinyin": "iyinimin"
    },
    "64": {
        "character": "ᐅᐢᑳᑖᐢᐠ",
        "letter": "a carrot",
        "pinyin": "oskâtâsk"
    },
    "65": {
        "character": "ᑕᑿᐦᐃᒥᐣ",
        "letter": "a chokecherry",
        "pinyin": "takwahimin"
    },
    "66": {
        "character": "ᐏᐦᑭᐦᑲᓯᑲᐣ",
        "letter": "a cake",
        "pinyin": "wihkihkasikan"
    },
    "67": {
        "character": "ᐏᐦᑿᐢᑿ",
        "letter": "sweetgrass (pl)",
        "pinyin": "wihkwaskwa"
    },
    "68": {
        "character": "ᐊᐘ",
        "letter": "this (AN)",
        "pinyin": "awa"
    },
    "69": {
        "character": "ᐆᒪ",
        "letter": "this (IN)",
        "pinyin": "ôma"
    },
    "70": {
        "character": "ᐊᓇ",
        "letter": "that (AN)",
        "pinyin": "ana"
    },
    "71": {
        "character": "ᐊᓂᒪ",
        "letter": "that (IN)",
        "pinyin": "anima"
    },
    "72": {
        "character": "ᓈᐦᐊ",
        "letter": "that (over there) (AN)",
        "pinyin": "nâha"
    },
    "73": {
        "character": "ᓀᒪ",
        "letter": "that (over there) (IN)",
        "pinyin": "nêma"
    },
    "74": {
        "character": "ᐆᑭ",
        "letter": "these (AN)",
        "pinyin": "ôki"
    },
    "75": {
        "character": "ᐆᐦᐃ",
        "letter": "these (IN)",
        "pinyin": "Ôhi"
    },
    "76": {
        "character": "ᐊᓂᑭ",
        "letter": "those (AN)",
        "pinyin": "aniki"
    },
    "77": {
        "character": "ᐊᓂᐦᐃ",
        "letter": "those (IN)",
        "pinyin": "anihi"
    },
    "78": {
        "character": "ᓀᑭ",
        "letter": "those (over there) (AN)",
        "pinyin": "nêki"
    },
    "79": {
        "character": "ᓀᐦᐃ",
        "letter": "those (over there) (IN)",
        "pinyin": "nêhi"
    },
    "80": {
        "character": "ᑖᓂᐚ",
        "letter": "where (AN)",
        "pinyin": "tâniwâ"
    },
    "81": {
        "character": "ᑖᓂᐍ",
        "letter": "where (IN)",
        "pinyin": "tâniwê"
    },
    "82": {
        "character": "ᑖᓂᐍᐦᑳᐠ",
        "letter": "where (for plural nouns) (AN)",
        "pinyin": "tâniwêhkâk"
    },
    "83": {
        "character": "ᑖᓂᐍᐦᐋ",
        "letter": "where (for plural nouns) (IN)",
        "pinyin": "tâniwêhâ"
    },
    "84": {
        "character": "ᑖᓇ",
        "letter": "which (AN)",
        "pinyin": "tâna"
    },
    "85": {
        "character": "ᑖᓂᒪ",
        "letter": "which (IN)",
        "pinyin": "tânima"
    },
    "86": {
        "character": "ᑖᓂᑭ",
        "letter": "which (for plural nouns) (AN)",
        "pinyin": "tâniki"
    },
    "87": {
        "character": "ᑖᓂᐦᐃ",
        "letter": "which (for plural nouns) (IN)",
        "pinyin": "tânihi"
    },
    "88": {
        "character": "ᑮᒁᐩ",
        "letter": "what (IN)",
        "pinyin": "kîkwây"
    },
    "89": {
        "character": "ᑮᒁᔭ",
        "letter": "what (plural) (IN)",
        "pinyin": "kîkwâya"
    },
    "90": {
        "character": "ᐊᐑᓇ",
        "letter": "who (AN)",
        "pinyin": "awîna"
    },
    "91": {
        "character": "ᐊᐑᓂᑭ",
        "letter": "who (plural) (AN)",
        "pinyin": "awîniki"
    },
    "92": {
        "character": "ᑫᑯ",
        "letter": "which/what kind",
        "pinyin": "kêko"
    },
    "93": {
        "character": "ᓂᐹ",
        "letter": "sleep",
        "pinyin": "nipâ"
    },
    "94": {
        "character": "ᐘᓂᐢᑳ",
        "letter": "wake/get up",
        "pinyin": "waniskâ"
    },
    "95": {
        "character": "ᑳᑮᓯᒧ",
        "letter": "pray (traditionally)",
        "pinyin": "kâkîsimo"
    },
    "96": {
        "character": "ᑭᐢᑖᐱᑌᐦ",
        "letter": "brush teeth",
        "pinyin": "kistâpitêho"
    },
    "97": {
        "character": "ᑳᓯᐦᑵ",
        "letter": "wash face",
        "pinyin": "kâsihkwê"
    },
    "98": {
        "character": "ᓰᑲᐦ",
        "letter": "comb hair",
        "pinyin": "sîkaho"
    },
    "99": {
        "character": "ᐳᐢᑕᔭᐏᓂᓭ",
        "letter": "dress",
        "pinyin": "postayawinisê"
    },
    "100": {
        "character": "ᑮᓯᑌᐳ",
        "letter": "cook",
        "pinyin": "kîsitêpo"
    },
    "101": {
        "character": "ᐊᐱ",
        "letter": "sit/be at home",
        "pinyin": "api"
    },
    "102": {
        "character": "ᒦᒋᓱ",
        "letter": "eat",
        "pinyin": "mîciso"
    },
    "103": {
        "character": "ᒥᓂᐦᑵ",
        "letter": "drink",
        "pinyin": "minihkwê"
    },
    "104": {
        "character": "ᐸᓯᑰ",
        "letter": "get up/stand up",
        "pinyin": "pasikô"
    },
    "105": {
        "character": "ᐘᔭᐑ",
        "letter": "go out",
        "pinyin": "wayawî"
    },
    "106": {
        "character": "ᐱᒧᐦᑌ",
        "letter": "walk",
        "pinyin": "pimohtê"
    },
    "107": {
        "character": "ᐴᓯ",
        "letter": "get on board",
        "pinyin": "pôsi"
    },
    "108": {
        "character": "ᐱᒥᐸᔨ",
        "letter": "drive",
        "pinyin": "pimipayi"
    },
    "109": {
        "character": "ᑲᐹ",
        "letter": "get out",
        "pinyin": "kapâ"
    },
    "110": {
        "character": "ᐊᑐᐢᑫ",
        "letter": "work",
        "pinyin": "atoskê"
    },
    "111": {
        "character": "ᒪᓯᓇᐦᐃᑫ",
        "letter": "write",
        "pinyin": "masinahikê"
    },
    "112": {
        "character": "ᐊᔭᒥᐦᒋᑫ",
        "letter": "read",
        "pinyin": "ayamihcikê"
    },
    "113": {
        "character": "ᓃᒥᐦᐃᑐ",
        "letter": "dance",
        "pinyin": "nîmihito"
    },
    "114": {
        "character": "ᓂᑲᒧ",
        "letter": "sing",
        "pinyin": "nikamo"
    },
    "115": {
        "character": "ᒫᑐ",
        "letter": "cry",
        "pinyin": "mâto"
    },
    "116": {
        "character": "ᐹᐦᐱ",
        "letter": "laugh",
        "pinyin": "pâhpi"
    },
    "117": {
        "character": "ᓭᓵᐑ",
        "letter": "exercise",
        "pinyin": "sêsâwî"
    },
    "118": {
        "character": "ᐱᒥᐸᐦᑖ",
        "letter": "run",
        "pinyin": "pimipahtâ"
    },
    "119": {
        "character": "ᑮᐍ",
        "letter": "go home",
        "pinyin": "kîwê"
    },
    "120": {
        "character": "ᐱᐦᑐᑵ",
        "letter": "enter",
        "pinyin": "pihtokwê"
    },
    "121": {
        "character": "ᓄᐦᑌᑲᑌ",
        "letter": "be hungry",
        "pinyin": "nohtêkatê"
    },
    "122": {
        "character": "ᑭᓰᐯᑭᔮᑲᓀ",
        "letter": "wash dishes",
        "pinyin": "kisîpêkiyâkanê"
    },
    "123": {
        "character": "ᑳᓰᔮᑲᓀ",
        "letter": "dry dishes",
        "pinyin": "kâsîyâkanê"
    },
    "124": {
        "character": "ᓄᐦᑌᑿᓯ",
        "letter": "be sleepy",
        "pinyin": "nohtêkwasi"
    },
    "125": {
        "character": "ᑫᑕᔭᐏᓂᓭ",
        "letter": "undress",
        "pinyin": "kêtayawinisê"
    },
    "126": {
        "character": "ᑲᐏᓯᒧ",
        "letter": "lay down",
        "pinyin": "kawisimo"
    },
    "127": {
        "character": "ᒪᑘᐦᒁᒥ",
        "letter": "snore",
        "pinyin": "matwêhkwâmi"
    },
    "128": {
        "character": "ᐅᑖᕽ ᐃᐢᐸᔨᐤ",
        "letter": "last week",
        "pinyin": "otâhk ispayiw"
    },
    "129": {
        "character": "ᑯᑕᐠ ᐃᐢᐸᔨᑭ",
        "letter": "next week",
        "pinyin": "kotak ispayiki"
    },
    "130": {
        "character": "ᐯᔭᐠ ᐃᐢᐸᔨᐤ",
        "letter": "one week",
        "pinyin": "pêyak ispayiw"
    },
    "131": {
        "character": "ᐊᓄᐦᐨ ᑳᐃᐢᐸᔨᐠ",
        "letter": "this week",
        "pinyin": "anohc kâ-ispayik"
    },
    "132": {
        "character": "ᐚᐸᐦᑭ",
        "letter": "tomorrow",
        "pinyin": "wâpahki"
    },
    "133": {
        "character": "ᐊᐘᓯᐚᐸᐦᑭ",
        "letter": "day after tomorrow",
        "pinyin": "awasi-wâpahki"
    },
    "134": {
        "character": "ᐅᑖᑯᓰᕽ",
        "letter": "yesterday",
        "pinyin": "otâkosîhk"
    },
    "135": {
        "character": "ᐊᐘᓯᑖᑯᓰᕽ",
        "letter": "day before yesterday",
        "pinyin": "awasi-tâkosîhk"
    },
    "136": {
        "character": "ᑎᐱᐢᑯᕽ",
        "letter": "last night",
        "pinyin": "tipiskohk"
    },
    "137": {
        "character": "ᐊᐘᓯᑎᐱᐢᑯᕽ",
        "letter": "night before last night",
        "pinyin": "awasi-tipiskohk"
    },
    "138": {
        "character": "ᑎᐱᐢᑳᑭ",
        "letter": "tonight",
        "pinyin": "tipiskâki"
    },
    "139": {
        "character": "ᐊᐢᑮᐏᐣ",
        "letter": "year",
        "pinyin": "askîwin"
    },
    "140": {
        "character": "ᐊᓄᐦᐨ ᑳᐊᐢᑮᐏᐠ",
        "letter": "this year",
        "pinyin": "anohc kâ-askîwik"
    },
    "141": {
        "character": "ᐅᑖᕽ ᐊᐢᑮᐏᐣ",
        "letter": "last year",
        "pinyin": "otâhk askîwin"
    },
    "142": {
        "character": "ᑯᑕᐠ ᐊᐢᑮᐏᑭ",
        "letter": "next year",
        "pinyin": "kotak askîwiki"
    },
    "143": {
        "character": "ᐏᔮᐢ",
        "letter": "meat",
        "pinyin": "wiyâs"
    },
    "144": {
        "character": "ᒧᐢᑐᓱᐏᔮᐢ",
        "letter": "beef",
        "pinyin": "mostosowiyâs"
    },
    "145": {
        "character": "ᑯᐦᑰᓯᐏᔮᐢ",
        "letter": "pork/ham",
        "pinyin": "kohkôsiwiyâs"
    },
    "146": {
        "character": "ᑯᐦᑰᓯᐑᔨᐣ",
        "letter": "bacon",
        "pinyin": "kohkôsiwîyin"
    },
    "147": {
        "character": "ᑯᐦᑰᓱᑇᒼ",
        "letter": "ham",
        "pinyin": "kohkôsopwâm"
    },
    "148": {
        "character": "ᒨᓱᐏᔮᐢ",
        "letter": "moose meat",
        "pinyin": "môsowiyâs"
    },
    "149": {
        "character": "ᐊᑎᐦᑯᐏᔮᐢ",
        "letter": "caribou meat",
        "pinyin": "atihkowiyâs"
    },
    "150": {
        "character": "ᓯᑯᐱᒋᑲᓂᐏᔮᐢ",
        "letter": "ground meat",
        "pinyin": "sikopicikaniwiyâs"
    },
    "151": {
        "character": "ᒥᑌᐦ",
        "letter": "heart",
        "pinyin": "mitêh"
    },
    "152": {
        "character": "ᐑᓂᐩ",
        "letter": "bone marrow",
        "pinyin": "wîniy"
    },
    "153": {
        "character": "ᒥᑌᔭᓂᐩ",
        "letter": "tongue",
        "pinyin": "mitêyaniy"
    },
    "154": {
        "character": "ᒥᒐᑭᓰᓴ",
        "letter": "sausages",
        "pinyin": "micakisîsa"
    },
    "155": {
        "character": "ᐱᒥᐦᑳᐣ",
        "letter": "pemmican",
        "pinyin": "pimihkân"
    },
    "156": {
        "character": "ᑲᐦᑫᐘᐠ",
        "letter": "dried meat",
        "pinyin": "kahkêwak"
    },
    "157": {
        "character": "ᐸᐢᒁᒧᐢᑐᓱᐏᔮᐢ",
        "letter": "buffalo meat",
        "pinyin": "paskwâmostosowiyâs"
    },
    "158": {
        "character": "ᐸᐦᑲᐦᐋᐦᒁᓄᐏᔮᐢ",
        "letter": "chicken meat",
        "pinyin": "pahkahâhkwânowiyâs"
    },
    "159": {
        "character": "ᐊᒥᐢᑯᐏᔮᐢ",
        "letter": "beaver meat",
        "pinyin": "amiskowiyâs"
    },
    "160": {
        "character": "ᒫᔭᑎᐦᑯᐏᔮᐢ",
        "letter": "mutton",
        "pinyin": "mâyatihkowiyâs"
    },
    "161": {
        "character": "ᒦᓂᐢ",
        "letter": "berry",
        "pinyin": "mînis"
    },
    "162": {
        "character": "ᐃᔨᓂᒥᓇ",
        "letter": "blueberries",
        "pinyin": "iyinimina"
    },
    "163": {
        "character": "ᐑᓴᑮᒥᓇ",
        "letter": "cranberries",
        "pinyin": "wîsakîmina"
    },
    "164": {
        "character": "ᒪᐢᑫᑰᒥᓇ",
        "letter": "cranberries",
        "pinyin": "maskêkômina"
    },
    "165": {
        "character": "ᓃᐱᒥᓈᓇ",
        "letter": "cranberries",
        "pinyin": "nîpiminâna"
    },
    "166": {
        "character": "ᑕᑿᐦᐃᒥᓈᓇ",
        "letter": "choke-cherries",
        "pinyin": "takwahiminâna"
    },
    "167": {
        "character": "ᒥᑌᐦᐃᒥᓇ",
        "letter": "strawberries",
        "pinyin": "mitêhimina"
    },
    "168": {
        "character": "ᒥᓵᐢᑲᑑᒥᓇ",
        "letter": "Saskatoon berries",
        "pinyin": "misâskatômina"
    },
    "169": {
        "character": "ᐅᑎᓰᐦᑳᐣ",
        "letter": "turnip",
        "pinyin": "otisîhkân"
    },
    "170": {
        "character": "ᑳᒥᐦᑿᐢᒁᐦᑭ",
        "letter": "beets",
        "pinyin": "kâ-mihkwaskwâhki"
    },
    "171": {
        "character": "ᓃᐱᔭ",
        "letter": "lettuce/salad",
        "pinyin": "nîpiya"
    },
    "172": {
        "character": "ᓇᐸᑖᑿ",
        "letter": "potatoes",
        "pinyin": "napatâkwa"
    },
    "173": {
        "character": "ᑭᐢᒋᑳᓇ",
        "letter": "potatoes",
        "pinyin": "kiscikâna"
    },
    "174": {
        "character": "ᐊᐢᑭᑇᐘ",
        "letter": "potatoes",
        "pinyin": "askipwâwa"
    },
    "175": {
        "character": "ᐑᔨᐦᑎᐦᑊ",
        "letter": "brain",
        "pinyin": "wîyihtihp"
    },
    "176": {
        "character": "ᑐᐦᑑᓵᐴᐏᐱᒥᐩ",
        "letter": "butter",
        "pinyin": "tohtôsâpôwipimiy"
    },
    "177": {
        "character": "ᐱᒥᐩ",
        "letter": "oil/lard/grease",
        "pinyin": "pimiy"
    },
    "178": {
        "character": "ᒪᓂᐦᐃᑲᐣ",
        "letter": "cream",
        "pinyin": "manihikan"
    },
    "179": {
        "character": "ᑐᐦᑑᓵᐳᐩ",
        "letter": "milk",
        "pinyin": "tohtôsâpoy"
    },
    "180": {
        "character": "ᐚᐏ",
        "letter": "egg",
        "pinyin": "wâwi"
    },
    "181": {
        "character": "ᐃᐢᑵᓯᓵᐳᐩ",
        "letter": "beer",
        "pinyin": "iskwêsisâpoy"
    },
    "182": {
        "character": "ᐃᐢᑯᑌᐚᐳᐩ",
        "letter": "liquor",
        "pinyin": "iskotêwâpoy"
    },
    "183": {
        "character": "ᓂᐦᑎᐩ",
        "letter": "tea",
        "pinyin": "nihtiy"
    },
    "184": {
        "character": "ᒪᐢᑭᐦᑮᐚᐳᐩ",
        "letter": "herb-tea",
        "pinyin": "maskihkîwâpoy"
    },
    "185": {
        "character": "ᐱᐦᑲᑌᐚᐳᐩ",
        "letter": "coffee",
        "pinyin": "pihkatêwâpoy"
    },
    "186": {
        "character": "ᓰᐚᐳᐩ",
        "letter": "pop",
        "pinyin": "sîwâpoy"
    },
    "187": {
        "character": "ᑭᓵᐢᑌᐚᐳᐩ",
        "letter": "Kool-Aid",
        "pinyin": "kisâstêwâpoy"
    },
    "188": {
        "character": "ᓲᒥᓈᐳᐩ",
        "letter": "wine",
        "pinyin": "sôminâpoy"
    },
    "189": {
        "character": "ᒦᒋᒫᐳᐩ",
        "letter": "soup",
        "pinyin": "mîcimâpoy"
    },
    "190": {
        "character": "ᐅᓵᐚᐳᐩ",
        "letter": "orange juice",
        "pinyin": "osâwâpoy"
    },
    "191": {
        "character": "ᓰᐏᓅᐢ/ᓰᐚᐢ",
        "letter": "candy",
        "pinyin": "sîwinôs/sîwâs"
    },
    "192": {
        "character": "ᐋᒨᒣᔨ",
        "letter": "honey",
        "pinyin": "âmômêyi"
    },
    "193": {
        "character": "ᐋᒨᓰᓯᐹᐢᑿᐟ",
        "letter": "honey",
        "pinyin": "âmôsîsipâskwat"
    },
    "194": {
        "character": "ᓰᓯᐹᐢᑿᐟ",
        "letter": "maple sugar",
        "pinyin": "sîsipâskwat"
    },
    "195": {
        "character": "ᐯᐢᑯᒥᓇ",
        "letter": "pepper",
        "pinyin": "pêskomina"
    },
    "196": {
        "character": "ᐑᓴᑲᐟ",
        "letter": "pepper",
        "pinyin": "wîsakat"
    },
    "197": {
        "character": "ᐊᐢᑮᐏᓰᐏᐦᑖᑲᐣ",
        "letter": "pepper",
        "pinyin": "askîwisîwihtâkan"
    },
    "198": {
        "character": "ᓰᐏᐦᑖᑲᐣ",
        "letter": "salt",
        "pinyin": "sîwihtâkan"
    },
    "199": {
        "character": "ᓰᐏᓂᑲᐣ",
        "letter": "sugar",
        "pinyin": "sîwinikan"
    },
    "200": {
        "character": "ᐏᐦᑎᑰᐏᒦᒋᐏᐣ",
        "letter": "popcorn",
        "pinyin": "wihtikôwimîciwin"
    },
    "201": {
        "character": "ᒦᒋᐏᐣ",
        "letter": "food",
        "pinyin": "mîciwin"
    },
    "202": {
        "character": "ᐅᐦᐱᐦᑲᓯᑲᐣ",
        "letter": "yeast",
        "pinyin": "ohpihkasikan"
    },
    "203": {
        "character": "ᐏᐦᑫᐢ",
        "letter": "muskrat-root",
        "pinyin": "wihkês"
    },
    "204": {
        "character": "ᐏᐦᑲᐢᑿ",
        "letter": "sweet-grass",
        "pinyin": "wihkaskwa"
    },
    "205": {
        "character": "ᐸᐢᒁᐏᐦᑲᐢᑿ",
        "letter": "sage",
        "pinyin": "paskwâwihkaskwa"
    },
    "206": {
        "character": "ᒪᐢᑭᐦᑭᐩ",
        "letter": "medicine",
        "pinyin": "maskihkiy"
    },
    "207": {
        "character": "ᐊᐱᐢᑖᒉᑯᐢ",
        "letter": "antelope",
        "pinyin": "apistâcêkos"
    },
    "208": {
        "character": "ᒨᔁ",
        "letter": "moose",
        "pinyin": "môswa"
    },
    "209": {
        "character": "ᐚᐚᐢᑫᓯᐤ",
        "letter": "elk",
        "pinyin": "wâwâskêsiw"
    },
    "210": {
        "character": "ᒫᔭᑎᕽ",
        "letter": "sheep",
        "pinyin": "mâyatihk"
    },
    "211": {
        "character": "ᐚᐳᐢ",
        "letter": "rabbit",
        "pinyin": "wâpos"
    },
    "212": {
        "character": "ᐊᐱᓯᒨᓱᐢ",
        "letter": "deer",
        "pinyin": "apisimôsos"
    },
    "213": {
        "character": "ᓰᓰᑊ",
        "letter": "duck",
        "pinyin": "sîsîp"
    },
    "214": {
        "character": "ᓂᐢᑲ",
        "letter": "goose",
        "pinyin": "niska"
    },
    "215": {
        "character": "ᐊᑎᕽ",
        "letter": "caribou",
        "pinyin": "atihk"
    },
    "216": {
        "character": "ᒪᐢᑿ",
        "letter": "bear",
        "pinyin": "maskwa"
    },
    "217": {
        "character": "ᒹᑿ",
        "letter": "loon",
        "pinyin": "mwâkwa"
    },
    "218": {
        "character": "ᐊᓂᑿᒑᐢᐠ",
        "letter": "gopher/squirrel",
        "pinyin": "anikwacâsk"
    },
    "219": {
        "character": "ᐸᐦᑲᐦᐋᐦᒁᐣ",
        "letter": "chicken",
        "pinyin": "pahkahâhkwân"
    },
    "220": {
        "character": "ᐸᐢᒁᒧᐢᑐᐢ",
        "letter": "buffalo",
        "pinyin": "paskwâmostos"
    },
    "221": {
        "character": "ᐱᐦᐁᐤ",
        "letter": "grouse",
        "pinyin": "pihêw"
    },
    "222": {
        "character": "ᐸᐢᐸᐢᑭᐤ",
        "letter": "birch grouse",
        "pinyin": "paspaskiw"
    },
    "223": {
        "character": "ᒥᓯᐦᐁᐤ",
        "letter": "turkey",
        "pinyin": "misihêw"
    },
    "224": {
        "character": "ᐊᒥᐢᐠ",
        "letter": "beaver",
        "pinyin": "amisk"
    },
    "225": {
        "character": "ᑭᓄᓭᐤ",
        "letter": "fish",
        "pinyin": "kinosêw"
    },
    "226": {
        "character": "ᐅᑳᐤ",
        "letter": "pickerel",
        "pinyin": "okâw"
    },
    "227": {
        "character": "ᐊᑎᐦᑲᒣᐠ",
        "letter": "white-fish",
        "pinyin": "atihkamêk"
    },
    "228": {
        "character": "ᐃᔨᓂᑭᓄᓭᐤ",
        "letter": "jack-fish",
        "pinyin": "iyinikinosêw"
    },
    "229": {
        "character": "ᒥᓂᐩ",
        "letter": "Mariah fish",
        "pinyin": "miniy"
    },
    "230": {
        "character": "ᐅᑑᓇᐱᐩ",
        "letter": "tullabee",
        "pinyin": "otônapiy"
    },
    "231": {
        "character": "ᓇᒣᐤ",
        "letter": "sturgeon",
        "pinyin": "namêw"
    },
    "232": {
        "character": "ᓇᒣᑯᐢ",
        "letter": "trout",
        "pinyin": "namêkos"
    },
    "233": {
        "character": "ᓇᒣᐱᐣ",
        "letter": "sucker",
        "pinyin": "namêpin"
    },
    "234": {
        "character": "ᒪᓅᒥᓇᐠ",
        "letter": "rice",
        "pinyin": "manôminak"
    },
    "235": {
        "character": "ᒪᐢᑯᓰᒥᓇ",
        "letter": "wild rice",
        "pinyin": "maskosîmina"
    },
    "236": {
        "character": "ᐆᒌᒋᓴᐠ",
        "letter": "rice",
        "pinyin": "ôcîcisak"
    },
    "237": {
        "character": "ᐚᐱᓅᒥᓇᐠ",
        "letter": "rice",
        "pinyin": "wâpinôminak"
    },
    "238": {
        "character": "ᒪᐦᑖᒥᐣ",
        "letter": "corn",
        "pinyin": "mahtâmin"
    },
    "239": {
        "character": "ᐅᐢᑳᑖᐢᐠ",
        "letter": "carrot",
        "pinyin": "oskâtâsk"
    },
    "240": {
        "character": "ᒪᐢᑭᒧᒋᓴᐠ",
        "letter": "beans",
        "pinyin": "maskimocisak"
    },
    "241": {
        "character": "ᐏᐦᒉᑲᐢᑯᓰᐢ",
        "letter": "onion",
        "pinyin": "wihcêkaskosîs"
    },
    "242": {
        "character": "ᑭᐦᒎᑭᓂᐩ",
        "letter": "tomato",
        "pinyin": "kihcôkiniy"
    },
    "243": {
        "character": "ᐅᑭᓂᔭᐠ",
        "letter": "wild rose-hips",
        "pinyin": "okiniyak"
    },
    "244": {
        "character": "ᓵᐴᒥᓇᐠ",
        "letter": "gooseberries",
        "pinyin": "sâpôminak"
    },
    "245": {
        "character": "ᐊᔫᐢᑲᓇᐠ",
        "letter": "raspberries",
        "pinyin": "ayôskanak"
    },
    "246": {
        "character": "ᓲᒥᓂᓴᐠ",
        "letter": "raisins",
        "pinyin": "sôminisak"
    },
    "247": {
        "character": "ᐱᒋᒁᐢ",
        "letter": "apple",
        "pinyin": "picikwâs"
    },
    "248": {
        "character": "ᐚᑳᐢ",
        "letter": "banana",
        "pinyin": "wâkâs"
    },
    "249": {
        "character": "ᐅᓵᐚᐢ",
        "letter": "orange",
        "pinyin": "osâwâs"
    },
    "250": {
        "character": "ᐸᑳᐣ",
        "letter": "nut",
        "pinyin": "pakân"
    },
    "251": {
        "character": "ᐱᐦᑲᓯᑲᐣ",
        "letter": "toast",
        "pinyin": "pihkasikan"
    },
    "252": {
        "character": "ᐋᓅᒥᐣ",
        "letter": "oatmeal",
        "pinyin": "ânômin"
    },
    "253": {
        "character": "ᐸᐦᑵᓯᑲᐣ",
        "letter": "bannock",
        "pinyin": "pahkwêsikan"
    },
    "254": {
        "character": "ᐲᓷᐦᑲᓯᑲᐣ",
        "letter": "bread",
        "pinyin": "pîswêhkasikan"
    },
    "255": {
        "character": "ᐲᓷᐦᑲᓯᑲᓂᓴᐠ",
        "letter": "buns",
        "pinyin": "pîswêhkasikanisak"
    },
    "256": {
        "character": "ᓰᐏᐦᑲᓯᑲᐣ",
        "letter": "cake",
        "pinyin": "sîwihkasikan"
    },
    "257": {
        "character": "ᐏᐦᑭᐦᑲᓯᑲᐣ",
        "letter": "cake",
        "pinyin": "wihkihkasikan"
    },
    "258": {
        "character": "ᓰᐏᐦᑲᓯᑲᓇᐠ",
        "letter": "baked goods",
        "pinyin": "sîwihkasikanak"
    },
    "259": {
        "character": "ᓰᐏᓂᑲᐣ",
        "letter": "sugar",
        "pinyin": "sîwinikan"
    },
    "260": {
        "character": "ᔩᐘᐦᐃᑲᓇᐠ",
        "letter": "ground meat/fish",
        "pinyin": "yîwahikanak"
    },
    "261": {
        "character": "ᒥᐢᑿᒥᐩ",
        "letter": "ice",
        "pinyin": "miskwamiy"
    },
    "262": {
        "character": "ᓇᒦᐢᒌᑯᐢ",
        "letter": "dried fillets",
        "pinyin": "namîscîkos"
    },
    "263": {
        "character": "ᒧᐦᑯᒫᐣ",
        "letter": "knife (NI)",
        "pinyin": "mohkomân"
    },
    "264": {
        "character": "ᒌᐢᑕᐦᐋᓭᐳᐣ",
        "letter": "fork (NI)",
        "pinyin": "cîstahâsêpon"
    },
    "265": {
        "character": "ᐁᒥᐦᒁᐣ",
        "letter": "spoon(NA)",
        "pinyin": "êmihkwân"
    },
    "266": {
        "character": "ᐅᔮᑲᐣ",
        "letter": "plate (NI)",
        "pinyin": "oyâkan"
    },
    "267": {
        "character": "ᒥᓂᐦᒁᒋᑲᐣ",
        "letter": "cup (NI)",
        "pinyin": "minihkwâcikan"
    },
    "268": {
        "character": "ᐊᐢᑭᕽ",
        "letter": "pail (NA)",
        "pinyin": "askihk"
    },
    "269": {
        "character": "ᓰᓰᐸᐢᑭᕽ",
        "letter": "kettle (NA)",
        "pinyin": "sîsîpaskihk"
    },
    "270": {
        "character": "ᓵᓵᐱᐢᑭᓯᑲᐣ",
        "letter": "frying-pan (NA)",
        "pinyin": "sâsâpiskisikan"
    },
    "271": {
        "character": "ᓵᓭᐢᑭᐦᒁᐣ",
        "letter": "frying-pan (NA)",
        "pinyin": "sâsêskihkwân"
    },
    "272": {
        "character": "ᑯᒐᐚᑲᓂᐢ",
        "letter": "match (NI)",
        "pinyin": "kocawâkanis"
    },
    "273": {
        "character": "ᐊᑯᒋᑲᐣ",
        "letter": "cupboard (NI)",
        "pinyin": "akocikan"
    },
    "274": {
        "character": "ᑯᑕᐚᓈᐱᐢᐠ",
        "letter": "stove (NI)",
        "pinyin": "kotawânâpisk"
    },
    "275": {
        "character": "ᑫᓯᐢᑲᐏᐦᑲᓯᑲᐣ",
        "letter": "micro-wave (NI)",
        "pinyin": "kêsiskawihkasikan"
    },
    "276": {
        "character": "ᓭᑯᐍᐱᓈᐱᐢᐠ",
        "letter": "oven (NI)",
        "pinyin": "sêkowêpinâpisk"
    },
    "277": {
        "character": "ᐊᐦᑿᒋᑲᐣ",
        "letter": "freezer (NI)",
        "pinyin": "ahkwacikan"
    },
    "278": {
        "character": "ᑕᐦᑲᐢᒋᑲᐣ",
        "letter": "fridge (NI)",
        "pinyin": "tahkascikan"
    },
    "279": {
        "character": "ᑭᓭᐲᓯᒼ",
        "letter": "January.",
        "pinyin": "kisêpîsim"
    },
    "280": {
        "character": "ᒥᑭᓯᐏᐲᓯᒼ",
        "letter": "February",
        "pinyin": "mikisiwipîsim"
    },
    "281": {
        "character": "ᓂᐢᑭᐲᓯᒼ",
        "letter": "March",
        "pinyin": "niskipîsim"
    },
    "282": {
        "character": "ᐊᔩᑭᐲᓯᒼ",
        "letter": "April",
        "pinyin": "ayîkipîsim"
    },
    "283": {
        "character": "ᓵᑭᐸᑳᐏᐲᓯᒼ",
        "letter": "May",
        "pinyin": "sâkipakâwipîsim"
    },
    "284": {
        "character": "ᐹᐢᑳᐏᐦᐅᐏᐲᓯᒼ",
        "letter": "June",
        "pinyin": "pâskâwihowipîsim"
    },
    "285": {
        "character": "ᐸᐢᑯᐏᐲᓯᒼ",
        "letter": "July",
        "pinyin": "paskowipîsim"
    },
    "286": {
        "character": "ᐅᐦᐸᐦᐅᐏᐲᓯᒼ",
        "letter": "August",
        "pinyin": "ohpahowipîsim"
    },
    "287": {
        "character": "ᓅᒋᐦᐃᑐᐏᐲᓯᒼ",
        "letter": "September",
        "pinyin": "nôcihitowipîsim"
    },
    "288": {
        "character": "ᑕᒁᑭᐲᓯᒼ",
        "letter": "September",
        "pinyin": "takwâkipîsim"
    },
    "289": {
        "character": "ᐱᓈᐢᑯᐏᐲᓯᒼ",
        "letter": "October",
        "pinyin": "pinâskowipîsim"
    },
    "290": {
        "character": "ᐃᐦᑯᐲᐏᐲᓯᒼ",
        "letter": "November",
        "pinyin": "ihkopîwipîsim"
    },
    "291": {
        "character": "ᐸᐚᒐᑭᓇᓰᓯᐲᓯᒼ",
        "letter": "December",
        "pinyin": "pawâcakinasîsipîsim"
    },
    "292": {
        "character": "ᐯᔭᐠ",
        "letter": "1",
        "pinyin": "pêyak"
    },
    "293": {
        "character": "ᓃᓱ",
        "letter": "2",
        "pinyin": "nîso"
    },
    "294": {
        "character": "ᓂᐢᑐ",
        "letter": "3",
        "pinyin": "nisto"
    },
    "295": {
        "character": "ᓀᐓ",
        "letter": "4",
        "pinyin": "nêwo"
    },
    "296": {
        "character": "ᓂᔮᓇᐣ",
        "letter": "5",
        "pinyin": "niyânan"
    },
    "297": {
        "character": "ᓂᑯᑤᓯᐠ",
        "letter": "6",
        "pinyin": "nikotwâsik"
    },
    "298": {
        "character": "ᑌᐸᑯᐦᑊ",
        "letter": "7",
        "pinyin": "têpakohp"
    },
    "299": {
        "character": "ᐊᔦᓈᓀᐤ",
        "letter": "8",
        "pinyin": "ayênânêw"
    },
    "300": {
        "character": "ᑫᑳᒥᑖᑕᐦᐟ*",
        "letter": "9",
        "pinyin": "kêkâ-mitâtaht*"
    },
    "301": {
        "character": "ᒥᑖᑕᐦᐟ",
        "letter": "10",
        "pinyin": "mitâtaht"
    },
    "302": {
        "character": "ᐯᔭᑯᓵᑊ",
        "letter": "11",
        "pinyin": "pêyakosâp"
    },
    "303": {
        "character": "ᓃᓱᓵᑊ",
        "letter": "12",
        "pinyin": "nîsosâp"
    },
    "304": {
        "character": "ᓂᐢᑐᓵᑊ",
        "letter": "13",
        "pinyin": "nistosâp"
    },
    "305": {
        "character": "ᓀᐓᓵᑊ",
        "letter": "14",
        "pinyin": "nêwosâp"
    },
    "306": {
        "character": "ᓂᔮᓇᓄᓵᑊ",
        "letter": "15",
        "pinyin": "niyânanosâp"
    },
    "307": {
        "character": "ᓂᑯᑤᐢ(ᐃᐠ)ᐅᓵᑊ",
        "letter": "16",
        "pinyin": "nikotwâs(ik)osâp"
    },
    "308": {
        "character": "ᑌᐸᑯᐦᐳᓵᑊ",
        "letter": "17",
        "pinyin": "têpakohposâp"
    },
    "309": {
        "character": "ᐊᔦᓈᓀᐓᓵᑊ",
        "letter": "18",
        "pinyin": "ayênânêwosâp"
    },
    "310": {
        "character": "ᑫᑳᒥᑖᑕᐦᑐᓵᑊ",
        "letter": "19",
        "pinyin": "kêkâ-mitâtahtosâp"
    },
    "311": {
        "character": "ᓃᐢ(ᐅᒼ)ᐃᑕᓇᐤ",
        "letter": "20",
        "pinyin": "nîs(om)itanaw"
    },
    "312": {
        "character": "ᓂᐢᑐᒥᑕᓇᐤ",
        "letter": "30",
        "pinyin": "nistomitanaw"
    },
    "313": {
        "character": "ᓀ(ᐓ)ᒥᑕᓇᐤ",
        "letter": "40",
        "pinyin": "nê(wo)mitanaw"
    },
    "314": {
        "character": "ᓂᔮᓇᓄᒥᑕᓇᐤ",
        "letter": "50",
        "pinyin": "niyânanomitanaw"
    },
    "315": {
        "character": "ᓂᑯᑤᓯᑯᒥᑕᓇᐤ",
        "letter": "60",
        "pinyin": "nikotwâsikomitanaw"
    },
    "316": {
        "character": "ᑌᐸᑯᐦᐳᒥᑕᓇᐤ",
        "letter": "70",
        "pinyin": "têpakohpomitanaw"
    },
    "317": {
        "character": "ᐊᔦᓈᓀ(ᐓ)ᒥᑕᓇᐤ",
        "letter": "80",
        "pinyin": "ayênânê(wo)mitanaw"
    },
    "318": {
        "character": "ᑫᑳᒥᑖᑕᐦᑐᒥᑕᓇᐤ",
        "letter": "90",
        "pinyin": "kêkâ-mitâtahtomitanaw"
    },
    "319": {
        "character": "ᒥᑖᑕᐦᑐᒥᑕᓇᐤ",
        "letter": "100",
        "pinyin": "mitâtahtomitanaw"
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