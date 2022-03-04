// Configuration
const localStorageKey = "norwegian" + "MysteryOfNilsVocabulary" + "Srs";
const languageTitle = "Norwegian";

// Speech Synthesis
const language = "nb-NO";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Norwegian words from the Mystery of Nils textbook. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "hva",
        "letter": "what"
    },
    "2": {
        "character": "gjør",
        "letter": "do (present)"
    },
    "3": {
        "character": "du",
        "letter": "you (s)"
    },
    "4": {
        "character": "Jeg",
        "letter": "I"
    },
    "5": {
        "character": "lager",
        "letter": "make"
    },
    "6": {
        "character": "en",
        "letter": "a (m)"
    },
    "7": {
        "character": "en gave",
        "letter": "a gift, present"
    },
    "8": {
        "character": "til",
        "letter": "until"
    },
    "9": {
        "character": "hun",
        "letter": "she"
    },
    "10": {
        "character": "har",
        "letter": "have (present)"
    },
    "11": {
        "character": "en bursdag",
        "letter": "a birthday"
    },
    "12": {
        "character": "er",
        "letter": "be (Present)"
    },
    "13": {
        "character": "det",
        "letter": "it, that"
    },
    "14": {
        "character": "nisse",
        "letter": "Mythical Norwegian creature"
    },
    "15": {
        "character": "forstår",
        "letter": "understand"
    },
    "16": {
        "character": "ikke",
        "letter": "not"
    },
    "17": {
        "character": "ja",
        "letter": "yes"
    },
    "18": {
        "character": "trenger",
        "letter": "needs"
    },
    "19": {
        "character": "liten",
        "letter": "little"
    },
    "20": {
        "character": "en venn",
        "letter": "a friend"
    },
    "21": {
        "character": "derfor",
        "letter": "therefore"
    },
    "22": {
        "character": "sitter",
        "letter": "sits"
    },
    "23": {
        "character": "og",
        "letter": "and"
    },
    "24": {
        "character": "arbeider",
        "letter": "works"
    },
    "25": {
        "character": "nå",
        "letter": "now"
    },
    "26": {
        "character": "nesten",
        "letter": "almost"
    },
    "27": {
        "character": "ferdig",
        "letter": "done, ready, through, finished"
    },
    "28": {
        "character": "han",
        "letter": "he"
    },
    "29": {
        "character": "vi",
        "letter": "we"
    },
    "30": {
        "character": "dere",
        "letter": "you (plural)"
    },
    "31": {
        "character": "de",
        "letter": "they"
    },
    "32": {
        "character": "å våkne",
        "letter": "to wake up"
    },
    "33": {
        "character": "onsdag",
        "letter": "wednesday"
    },
    "34": {
        "character": "i dag",
        "letter": "today"
    },
    "35": {
        "character": "nei",
        "letter": "no"
    },
    "36": {
        "character": "torsdag",
        "letter": "thursday"
    },
    "37": {
        "character": "allerede",
        "letter": "already"
    },
    "38": {
        "character": "å bety",
        "letter": "to mean"
    },
    "39": {
        "character": "selvfølgelig",
        "letter": "of course"
    },
    "40": {
        "character": "et år",
        "letter": "a year"
    },
    "41": {
        "character": "åtte år",
        "letter": "eight years"
    },
    "42": {
        "character": "gammel",
        "letter": "old"
    },
    "43": {
        "character": "å komme",
        "letter": "to come"
    },
    "44": {
        "character": "god",
        "letter": "good"
    },
    "45": {
        "character": "en morgen",
        "letter": "a morning"
    },
    "46": {
        "character": "gratulerer med dagen",
        "letter": "happy birthday"
    },
    "47": {
        "character": "tusen",
        "letter": "thousand"
    },
    "48": {
        "character": "takk",
        "letter": "thanks, thank you"
    },
    "49": {
        "character": "tusen takk",
        "letter": "many thanks (lit: a thousand thanks)"
    },
    "50": {
        "character": "å spise",
        "letter": "to eat"
    },
    "51": {
        "character": "en frokost",
        "letter": "a breakfast"
    },
    "52": {
        "character": "skolen",
        "letter": "the school"
    },
    "53": {
        "character": "å begynne",
        "letter": "to begin"
    },
    "54": {
        "character": "snart",
        "letter": "soon"
    },
    "55": {
        "character": "å stå opp",
        "letter": "to get up, to stand up"
    },
    "56": {
        "character": "et egg",
        "letter": "an egg"
    },
    "57": {
        "character": "et rundstykke",
        "letter": "a roll"
    },
    "58": {
        "character": "ei brødskive",
        "letter": "a slice of bread"
    },
    "59": {
        "character": "med",
        "letter": "with"
    },
    "60": {
        "character": "en ost",
        "letter": "a cheese"
    },
    "61": {
        "character": "å drikke",
        "letter": "to drink"
    },
    "62": {
        "character": "en kopp",
        "letter": "a cup"
    },
    "63": {
        "character": "varm",
        "letter": "hot, warm"
    },
    "64": {
        "character": "en sjokolade",
        "letter": "a chocolate"
    },
    "65": {
        "character": "en kopp sjokolade",
        "letter": "a cup of hot chocolate"
    },
    "66": {
        "character": "null",
        "letter": "0"
    },
    "67": {
        "character": "én",
        "letter": "1"
    },
    "68": {
        "character": "to",
        "letter": "2"
    },
    "69": {
        "character": "tre",
        "letter": "3"
    },
    "70": {
        "character": "fire",
        "letter": "4"
    },
    "71": {
        "character": "fem",
        "letter": "5"
    },
    "72": {
        "character": "seks",
        "letter": "6"
    },
    "73": {
        "character": "sju",
        "letter": "7"
    },
    "74": {
        "character": "syv",
        "letter": "7"
    },
    "75": {
        "character": "åtte",
        "letter": "8"
    },
    "76": {
        "character": "ni",
        "letter": "9"
    },
    "77": {
        "character": "ti",
        "letter": "10"
    },
    "78": {
        "character": "God morgen",
        "letter": "Good morning"
    },
    "79": {
        "character": "God kveld",
        "letter": "Good evening"
    },
    "80": {
        "character": "Hei",
        "letter": "Hi"
    },
    "81": {
        "character": "God natt",
        "letter": "Good night"
    },
    "82": {
        "character": "ha det!",
        "letter": "bye! (literally: have it (good))"
    },
    "83": {
        "character": "ha det bra!",
        "letter": "goodbye! be fine!"
    },
    "84": {
        "character": "et brød",
        "letter": "a bread, a loaf of bread"
    },
    "85": {
        "character": "et eple",
        "letter": "an apple"
    },
    "86": {
        "character": "et smør",
        "letter": "a butter"
    },
    "87": {
        "character": "en salami",
        "letter": "a salami"
    },
    "88": {
        "character": "en honning",
        "letter": "honey"
    },
    "89": {
        "character": "en kaffe",
        "letter": "a coffee"
    },
    "90": {
        "character": "en te",
        "letter": "tea"
    },
    "91": {
        "character": "ei frokostblanding",
        "letter": "breakfast cereals"
    },
    "92": {
        "character": "ei melk",
        "letter": "milk"
    },
    "93": {
        "character": "en juice",
        "letter": "juice"
    },
    "94": {
        "character": "et syltetøy",
        "letter": "jam, marmalade"
    },
    "95": {
        "character": "Jeg forstår ikke.",
        "letter": "I don't understand"
    },
    "96": {
        "character": "Kan du gjenta?",
        "letter": "Can you repeat that?"
    },
    "97": {
        "character": "Jeg snakker bare litt Norsk.",
        "letter": "I speak only a little Norwegian."
    },
    "98": {
        "character": "Hva betyr ... på engelsk?",
        "letter": "What does ... in English?"
    },
    "99": {
        "character": "å måtte",
        "letter": "to have to"
    },
    "100": {
        "character": "må",
        "letter": "must/have to (Present)"
    },
    "101": {
        "character": "å få",
        "letter": "to get, receive"
    },
    "102": {
        "character": "en klem",
        "letter": "a hug"
    },
    "103": {
        "character": "også",
        "letter": "too, also"
    },
    "104": {
        "character": "her",
        "letter": "here"
    },
    "105": {
        "character": "den",
        "letter": "it (masculine and feminine)"
    },
    "106": {
        "character": "å ville",
        "letter": "want (infinitive)"
    },
    "107": {
        "character": "vil",
        "letter": "want (Present)"
    },
    "108": {
        "character": "å åpne",
        "letter": "to open"
    },
    "109": {
        "character": "først",
        "letter": "first"
    },
    "110": {
        "character": "en telefon",
        "letter": "a telephone"
    },
    "111": {
        "character": "en smarttelefon",
        "letter": "a smartphone"
    },
    "112": {
        "character": "å kunne",
        "letter": "can (Infinitive)"
    },
    "113": {
        "character": "kan",
        "letter": "can (Present)"
    },
    "114": {
        "character": "bare",
        "letter": "here: just, simply"
    },
    "115": {
        "character": "å ringe",
        "letter": "to ring, call"
    },
    "116": {
        "character": "men",
        "letter": "but"
    },
    "117": {
        "character": "å sende",
        "letter": "to send"
    },
    "118": {
        "character": "en e-post",
        "letter": "an e-mail"
    },
    "119": {
        "character": "å gå",
        "letter": "to walk, go"
    },
    "120": {
        "character": "på",
        "letter": "on, onto, in, upon, at"
    },
    "121": {
        "character": "på Internett",
        "letter": "on the Internet"
    },
    "122": {
        "character": "å gå på Internett",
        "letter": "to surf the Internet, to go on the Internet"
    },
    "123": {
        "character": "å ta",
        "letter": "to take"
    },
    "124": {
        "character": "et bilde",
        "letter": "a picture"
    },
    "125": {
        "character": "bilder",
        "letter": "pictures"
    },
    "126": {
        "character": "ei bestemor",
        "letter": "a grandmother"
    },
    "127": {
        "character": "elektronisk",
        "letter": "electronic"
    },
    "128": {
        "character": "å koste",
        "letter": "to cost"
    },
    "129": {
        "character": "mye",
        "letter": "a lot"
    },
    "130": {
        "character": "sant",
        "letter": "TRUE"
    },
    "131": {
        "character": "ikke sant?",
        "letter": "right?"
    },
    "132": {
        "character": "å svare",
        "letter": "to answer"
    },
    "133": {
        "character": "å vente",
        "letter": "to wait"
    },
    "134": {
        "character": "å hete",
        "letter": "to be called/named"
    },
    "135": {
        "character": "Han heter Nils.",
        "letter": "His name is Nils."
    },
    "136": {
        "character": "aha",
        "letter": "aha, I see"
    },
    "137": {
        "character": "glad",
        "letter": "happy, glad"
    },
    "138": {
        "character": "jo",
        "letter": "confirmation (''we *do* live'')"
    },
    "139": {
        "character": "å føle",
        "letter": "to feel"
    },
    "140": {
        "character": "litt",
        "letter": "a little"
    },
    "141": {
        "character": "trist",
        "letter": "sad"
    },
    "142": {
        "character": "å se",
        "letter": "to see"
    },
    "143": {
        "character": "hvorfor",
        "letter": "why"
    },
    "144": {
        "character": "så",
        "letter": "saw (past)"
    },
    "145": {
        "character": "bedre",
        "letter": "better"
    },
    "146": {
        "character": "Mange takk!",
        "letter": "Many thanks!"
    },
    "147": {
        "character": "Takk skal du ha!",
        "letter": "Thanks a lot!"
    },
    "148": {
        "character": "Takk for maten!",
        "letter": "Thanks for the food!"
    },
    "149": {
        "character": "Takk for sist!",
        "letter": "Hi! (literally: thanks for the last time (we met))"
    },
    "150": {
        "character": "skuffet",
        "letter": "disappointed"
    },
    "151": {
        "character": "å skulle",
        "letter": "will, shall (infinitive)"
    },
    "152": {
        "character": "skal",
        "letter": "shall/will (present tense)"
    },
    "153": {
        "character": "å gjøre",
        "letter": "to do"
    },
    "154": {
        "character": "gjerne",
        "letter": "gladly, soon, readily, willingly"
    },
    "155": {
        "character": "å ha",
        "letter": "to have"
    },
    "156": {
        "character": "hun vil gjerne ha",
        "letter": "she would like to have"
    },
    "157": {
        "character": "ut",
        "letter": "out"
    },
    "158": {
        "character": "av",
        "letter": "of, from"
    },
    "159": {
        "character": "et vindu",
        "letter": "a window"
    },
    "160": {
        "character": "å leke",
        "letter": "to play"
    },
    "161": {
        "character": "ei hånd",
        "letter": "a hand"
    },
    "162": {
        "character": "å si",
        "letter": "to say"
    },
    "163": {
        "character": "sier",
        "letter": "say (Present)"
    },
    "164": {
        "character": "Hva heter du?",
        "letter": "What's your name?"
    },
    "165": {
        "character": "fra",
        "letter": "from"
    },
    "166": {
        "character": "Norge",
        "letter": "Norway"
    },
    "167": {
        "character": "hvor",
        "letter": "where"
    },
    "168": {
        "character": "Hvor kommer du fra?",
        "letter": "Where are you from?"
    },
    "169": {
        "character": "en skog",
        "letter": "a forest"
    },
    "170": {
        "character": "ingenting",
        "letter": "nothing"
    },
    "171": {
        "character": "hvor gammel",
        "letter": "how old"
    },
    "172": {
        "character": "kjedelig",
        "letter": "boring"
    },
    "173": {
        "character": "ikke ... lenger",
        "letter": "not ... any more"
    },
    "174": {
        "character": "å sette",
        "letter": "to place / to put"
    },
    "175": {
        "character": "ei seng",
        "letter": "a bed"
    },
    "176": {
        "character": "hvert",
        "letter": "any"
    },
    "177": {
        "character": "i",
        "letter": "in/at"
    },
    "178": {
        "character": "i hvert fall",
        "letter": "in any case, at least"
    },
    "179": {
        "character": "et bord",
        "letter": "a table"
    },
    "180": {
        "character": "en kommode",
        "letter": "a chest of drawers"
    },
    "181": {
        "character": "en plass",
        "letter": "place, space"
    },
    "182": {
        "character": "kanskje",
        "letter": "perhaps, maybe"
    },
    "183": {
        "character": "et skap",
        "letter": "a cupboard, a wardrobe"
    },
    "184": {
        "character": "eller",
        "letter": "or"
    },
    "185": {
        "character": "en stol",
        "letter": "a chair"
    },
    "186": {
        "character": "ved",
        "letter": "by/at"
    },
    "187": {
        "character": "ved siden av",
        "letter": "beside"
    },
    "188": {
        "character": "ei dør",
        "letter": "a door"
    },
    "189": {
        "character": "en TV",
        "letter": "a TV"
    },
    "190": {
        "character": "et skrivebord",
        "letter": "a desk"
    },
    "191": {
        "character": "ei lampe",
        "letter": "a lamp"
    },
    "192": {
        "character": "ei bokhylle",
        "letter": "a book shelf"
    },
    "193": {
        "character": "en komfyr",
        "letter": "a stove"
    },
    "194": {
        "character": "en ovn",
        "letter": "an oven"
    },
    "195": {
        "character": "en vask",
        "letter": "a sink"
    },
    "196": {
        "character": "en kaffemaskin",
        "letter": "a coffee machine"
    },
    "197": {
        "character": "et kjøleskap",
        "letter": "a refrigerator"
    },
    "198": {
        "character": "en datamaskin",
        "letter": "a computer"
    },
    "199": {
        "character": "God dag, Deres Majestet.",
        "letter": "Good day, Your Majesty."
    },
    "200": {
        "character": "Jeg heter...",
        "letter": "My name is..."
    },
    "201": {
        "character": "Hva gjør du?",
        "letter": "What do you do?/What are you doing?"
    },
    "202": {
        "character": "Jeg er elektriker.",
        "letter": "I am an electrician."
    },
    "203": {
        "character": "Hyggelig å hilse på deg!",
        "letter": "Nice to meet you!"
    },
    "204": {
        "character": "Hyggelig å møte deg!",
        "letter": "Nice to meet you! (People you've met before)"
    },
    "205": {
        "character": "Hyggelig å treffe deg!",
        "letter": "Nice to see you!"
    },
    "206": {
        "character": "Jeg kommer fra...",
        "letter": "I come from..."
    },
    "207": {
        "character": "Hvordan går det?",
        "letter": "How are you? (literally: How goes it?)"
    },
    "208": {
        "character": "Takk, det går bra.",
        "letter": "Thanks, I'm fine."
    },
    "209": {
        "character": "Takk, ikke så verst.",
        "letter": "Thanks, I'm doing ok."
    },
    "210": {
        "character": "Det går dårlig.",
        "letter": "Not great."
    },
    "211": {
        "character": "Hva med deg?",
        "letter": "What about you?"
    },
    "212": {
        "character": "God helg!",
        "letter": "Have a nice weekend!"
    },
    "213": {
        "character": "I like måte!",
        "letter": "Same to you!"
    },
    "214": {
        "character": "Hvor bor du?",
        "letter": "Where do you live?"
    },
    "215": {
        "character": "Hvor gammel er du?",
        "letter": "How old are you?"
    },
    "216": {
        "character": "når",
        "letter": "when"
    },
    "217": {
        "character": "etter",
        "letter": "from, after, by"
    },
    "218": {
        "character": "ei stue",
        "letter": "a living room"
    },
    "219": {
        "character": "en familie",
        "letter": "a family"
    },
    "220": {
        "character": "ei mor",
        "letter": "a mother"
    },
    "221": {
        "character": "en far",
        "letter": "a father"
    },
    "222": {
        "character": "en bror",
        "letter": "a brother"
    },
    "223": {
        "character": "der",
        "letter": "there (in or at that place)"
    },
    "224": {
        "character": "å bo",
        "letter": "to live, to reside"
    },
    "225": {
        "character": "sammen",
        "letter": "together"
    },
    "226": {
        "character": "dem",
        "letter": "them"
    },
    "227": {
        "character": "å spørre",
        "letter": "to ask"
    },
    "228": {
        "character": "spør",
        "letter": "ask/question (Present)"
    },
    "229": {
        "character": "å vite",
        "letter": "to know (knowledge of a fact)"
    },
    "230": {
        "character": "vet",
        "letter": "know (Present)"
    },
    "231": {
        "character": "å lete etter",
        "letter": "to search for"
    },
    "232": {
        "character": "ham",
        "letter": "him"
    },
    "233": {
        "character": "egentlig",
        "letter": "actually"
    },
    "234": {
        "character": "synd",
        "letter": "A pity"
    },
    "235": {
        "character": "det er synd",
        "letter": "what a pity"
    },
    "236": {
        "character": "å like",
        "letter": "to like"
    },
    "237": {
        "character": "heller",
        "letter": "rather"
    },
    "238": {
        "character": "å være",
        "letter": "be"
    },
    "239": {
        "character": "frekk",
        "letter": "Bold, impudent, cheeky"
    },
    "240": {
        "character": "veldig",
        "letter": "very"
    },
    "241": {
        "character": "dyr",
        "letter": "expensive"
    },
    "242": {
        "character": "penger",
        "letter": "money"
    },
    "243": {
        "character": "hyggelig",
        "letter": "pleasant, nice"
    },
    "244": {
        "character": "henne",
        "letter": "her, she"
    },
    "245": {
        "character": "å gi",
        "letter": "to give"
    },
    "246": {
        "character": "deg",
        "letter": "you"
    },
    "247": {
        "character": "et kjøkken",
        "letter": "a kitchen"
    },
    "248": {
        "character": "meg",
        "letter": "me, myself"
    },
    "249": {
        "character": "å hente",
        "letter": "to fetch, pick up, get"
    },
    "250": {
        "character": "bra",
        "letter": "fine, good, well"
    },
    "251": {
        "character": "å se på TV",
        "letter": "to watch TV"
    },
    "252": {
        "character": "oss",
        "letter": "us"
    },
    "253": {
        "character": "elleve",
        "letter": "eleven"
    },
    "254": {
        "character": "tolv",
        "letter": "twelve"
    },
    "255": {
        "character": "tretten",
        "letter": "thirteen"
    },
    "256": {
        "character": "fjorten",
        "letter": "fourteen"
    },
    "257": {
        "character": "femten",
        "letter": "fifteen"
    },
    "258": {
        "character": "seksten",
        "letter": "sixteen"
    },
    "259": {
        "character": "sytten",
        "letter": "seventeen"
    },
    "260": {
        "character": "atten",
        "letter": "eighteen"
    },
    "261": {
        "character": "nitten",
        "letter": "nineteen"
    },
    "262": {
        "character": "tjue",
        "letter": "twenty"
    },
    "263": {
        "character": "tjueen",
        "letter": "Twenty-one"
    },
    "264": {
        "character": "tjueto",
        "letter": "Twenty two"
    },
    "265": {
        "character": "tretti",
        "letter": "thirty"
    },
    "266": {
        "character": "trettien",
        "letter": "thirty one"
    },
    "267": {
        "character": "førti",
        "letter": "forty"
    },
    "268": {
        "character": "femti",
        "letter": "fifty"
    },
    "269": {
        "character": "seksti",
        "letter": "sixty"
    },
    "270": {
        "character": "sytti",
        "letter": "seventy"
    },
    "271": {
        "character": "åtti",
        "letter": "eighty"
    },
    "272": {
        "character": "nitti",
        "letter": "ninety"
    },
    "273": {
        "character": "ett hundre",
        "letter": "One hundred"
    },
    "274": {
        "character": "ett hundreogen",
        "letter": "One hundred and one"
    },
    "275": {
        "character": "ett hundreogførtitre",
        "letter": "One hundred and forty three"
    },
    "276": {
        "character": "tohundre",
        "letter": "Two hundred"
    },
    "277": {
        "character": "ett tusen",
        "letter": "one thousand"
    },
    "278": {
        "character": "ett tusenogfemten",
        "letter": "one thousand and fifteen"
    },
    "279": {
        "character": "femtusenetthundreogtretti",
        "letter": "five thousand one hundred and thirty"
    },
    "280": {
        "character": "en million",
        "letter": "a million"
    },
    "281": {
        "character": "en lege",
        "letter": "a doctor, GP"
    },
    "282": {
        "character": "en sykepleier",
        "letter": "a nurse"
    },
    "283": {
        "character": "en student",
        "letter": "a student"
    },
    "284": {
        "character": "en elev",
        "letter": "a pupil"
    },
    "285": {
        "character": "en redaktør",
        "letter": "an editor"
    },
    "286": {
        "character": "min",
        "letter": "my"
    },
    "287": {
        "character": "ei søster",
        "letter": "a sister"
    },
    "288": {
        "character": "å studere",
        "letter": "to study"
    },
    "289": {
        "character": "økonomi",
        "letter": "economy, economics"
    },
    "290": {
        "character": "en kjæreste",
        "letter": "a loved one (boyfriend or girlfriend)"
    },
    "291": {
        "character": "som",
        "letter": "those, like, which, who, as"
    },
    "292": {
        "character": "å gifte seg",
        "letter": "to get married, to marry"
    },
    "293": {
        "character": "mine",
        "letter": "mine (plural)"
    },
    "294": {
        "character": "foreldre",
        "letter": "parents"
    },
    "295": {
        "character": "besteforeldre",
        "letter": "grandparents"
    },
    "296": {
        "character": "en pensjonist",
        "letter": "a retiree"
    },
    "297": {
        "character": "en gutt",
        "letter": "a boy"
    },
    "298": {
        "character": "ei jente",
        "letter": "a girl"
    },
    "299": {
        "character": "ei dame",
        "letter": "a lady"
    },
    "300": {
        "character": "en mann",
        "letter": "a husband"
    },
    "301": {
        "character": "ei kone",
        "letter": "a wife"
    },
    "302": {
        "character": "et søsken",
        "letter": "a brother or sister, sibling"
    },
    "303": {
        "character": "en sønn",
        "letter": "a son"
    },
    "304": {
        "character": "ei datter",
        "letter": "a daughter"
    },
    "305": {
        "character": "mormor",
        "letter": "mother's mother (singular)"
    },
    "306": {
        "character": "morfar",
        "letter": "mother's father (singular)"
    },
    "307": {
        "character": "farmor",
        "letter": "father's mother (singular)"
    },
    "308": {
        "character": "farfar",
        "letter": "father's father (singular)"
    },
    "309": {
        "character": "Han ser seg.",
        "letter": "He sees himself."
    },
    "310": {
        "character": "Han ser ham.",
        "letter": "He sees him."
    },
    "311": {
        "character": "Hvor er du, Tom?",
        "letter": "Where are you, Tom?"
    },
    "312": {
        "character": "Jeg vil snakke med deg, Tom.",
        "letter": "I want to talk to you, Tom."
    },
    "313": {
        "character": "Hvor er dere, Tom og Betty?",
        "letter": "Where are you, Tom and Betty?"
    },
    "314": {
        "character": "Jeg vil snakke med dere, Tom og Betty.",
        "letter": "I want to talk to you, Tom and Betty."
    },
    "315": {
        "character": "Jeg vil gå hjem.",
        "letter": "I want to go home."
    },
    "316": {
        "character": "Jeg må gå hjem.",
        "letter": "I have to go home."
    },
    "317": {
        "character": "Jeg kan gå hjem.",
        "letter": "I can go home."
    },
    "318": {
        "character": "Jeg skal gå hjem.",
        "letter": "I will go home."
    },
    "319": {
        "character": "Jeg bør gå hjem.",
        "letter": "I should go home."
    },
    "320": {
        "character": "ei klokke",
        "letter": "a clock, watch"
    },
    "321": {
        "character": "Klokka er seks.",
        "letter": "It is six o'clock."
    },
    "322": {
        "character": "å høre",
        "letter": "to hear"
    },
    "323": {
        "character": "noe",
        "letter": "something"
    },
    "324": {
        "character": "ei skinke",
        "letter": "a ham"
    },
    "325": {
        "character": "mamma",
        "letter": "mom, mommy"
    },
    "326": {
        "character": "å bevege seg",
        "letter": "to move"
    },
    "327": {
        "character": "å rope",
        "letter": "to call, cry, shout"
    },
    "328": {
        "character": "skremt",
        "letter": "scared"
    },
    "329": {
        "character": "helt",
        "letter": "totally, entirely"
    },
    "330": {
        "character": "rolig",
        "letter": "steady, tranquil, quiet, serene, easy, smooth"
    },
    "331": {
        "character": "å tulle",
        "letter": "to joke"
    },
    "332": {
        "character": "å flire",
        "letter": "to grin, to smirk"
    },
    "333": {
        "character": "dum",
        "letter": "dumb/stupid"
    },
    "334": {
        "character": "å tenke",
        "letter": "to think"
    },
    "335": {
        "character": "nok",
        "letter": "probably, I gather"
    },
    "336": {
        "character": "å pusse",
        "letter": "to brush"
    },
    "337": {
        "character": "tennene",
        "letter": "the teeth"
    },
    "338": {
        "character": "å vaske",
        "letter": "to wash, clean"
    },
    "339": {
        "character": "en historie",
        "letter": "a history, story"
    },
    "340": {
        "character": "sjokkert",
        "letter": "shocked"
    },
    "341": {
        "character": "å leve",
        "letter": "to live"
    },
    "342": {
        "character": "en fantasi",
        "letter": "a fantasy, imagination"
    },
    "343": {
        "character": "å tro",
        "letter": "to believe"
    },
    "344": {
        "character": "å stemme",
        "letter": "to be correct, to vote"
    },
    "345": {
        "character": "det stemmer ikke",
        "letter": "that's not correct"
    },
    "346": {
        "character": "å snakke",
        "letter": "to speak"
    },
    "347": {
        "character": "å glede seg",
        "letter": "to be happy, to look forward"
    },
    "348": {
        "character": "redd",
        "letter": "apprehensive, afraid"
    },
    "349": {
        "character": "å slutte",
        "letter": "to stop, to finish"
    },
    "350": {
        "character": "stille",
        "letter": "quiet, silent"
    },
    "351": {
        "character": "endelig",
        "letter": "finally"
    },
    "352": {
        "character": "å slappe av",
        "letter": "to relax"
    },
    "353": {
        "character": "igjen",
        "letter": "again"
    },
    "354": {
        "character": "mandag",
        "letter": "monday"
    },
    "355": {
        "character": "tirsdag",
        "letter": "tuesday"
    },
    "356": {
        "character": "fredag",
        "letter": "friday"
    },
    "357": {
        "character": "lørdag",
        "letter": "saturday"
    },
    "358": {
        "character": "søndag",
        "letter": "sunday"
    },
    "359": {
        "character": "i går",
        "letter": "yesterday"
    },
    "360": {
        "character": "i morgen",
        "letter": "tomorrow"
    },
    "361": {
        "character": "på mandag",
        "letter": "this/last Monday"
    },
    "362": {
        "character": "på mandager",
        "letter": "every Monday"
    },
    "363": {
        "character": "Klokka er tre.",
        "letter": "15:00"
    },
    "364": {
        "character": "Klokka er fem over tre.",
        "letter": "15.05"
    },
    "365": {
        "character": "Klokka er ti over tre.",
        "letter": "15.1"
    },
    "366": {
        "character": "Klokka er kvart over tre.",
        "letter": "15:15"
    },
    "367": {
        "character": "Klokka er ti på halv fire.",
        "letter": "15.2"
    },
    "368": {
        "character": "Klokka er fem på halv fire.",
        "letter": "15.25"
    },
    "369": {
        "character": "Klokka er halv fire.",
        "letter": "15.3"
    },
    "370": {
        "character": "Klokka er fem over halv fire.",
        "letter": "15.35"
    },
    "371": {
        "character": "Klokka er ti over halv fire.",
        "letter": "15.4"
    },
    "372": {
        "character": "Klokka er kvart på fire.",
        "letter": "15.45"
    },
    "373": {
        "character": "Klokka er ti på fire.",
        "letter": "15.5"
    },
    "374": {
        "character": "Klokka er fem på fire.",
        "letter": "15.55"
    },
    "375": {
        "character": "atten trettisju",
        "letter": "18.37"
    },
    "376": {
        "character": "Hva er klokka?",
        "letter": "What is the time? (hva)"
    },
    "377": {
        "character": "Hvor mye er klokka?",
        "letter": "What is the time? (hvor)"
    },
    "378": {
        "character": "Skolen begynner klokka åtte.",
        "letter": "School starts at eight o'clock."
    },
    "379": {
        "character": "rundt",
        "letter": "round, about"
    },
    "380": {
        "character": "en jobb",
        "letter": "a job"
    },
    "381": {
        "character": "på jobb",
        "letter": "at work"
    },
    "382": {
        "character": "da",
        "letter": "here: when"
    },
    "383": {
        "character": "et hus",
        "letter": "a house"
    },
    "384": {
        "character": "å se seg rundt",
        "letter": "to look around"
    },
    "385": {
        "character": "et glass",
        "letter": "a glass"
    },
    "386": {
        "character": "en tallerken",
        "letter": "a plate"
    },
    "387": {
        "character": "å hjelpe",
        "letter": "to help"
    },
    "388": {
        "character": "å rydde",
        "letter": "to tidy"
    },
    "389": {
        "character": "å hoppe",
        "letter": "to jump"
    },
    "390": {
        "character": "en oppvaskmaskin",
        "letter": "a dishwasher"
    },
    "391": {
        "character": "plutselig",
        "letter": "suddenly"
    },
    "392": {
        "character": "et skrik",
        "letter": "a scream"
    },
    "393": {
        "character": "stopp",
        "letter": "stop"
    },
    "394": {
        "character": "gal",
        "letter": "crazy"
    },
    "395": {
        "character": "å drive",
        "letter": "to chase, to do"
    },
    "396": {
        "character": "mot",
        "letter": "towards, against, also: courage"
    },
    "397": {
        "character": "noen",
        "letter": "some, somebody, someone"
    },
    "398": {
        "character": "en person",
        "letter": "a person"
    },
    "399": {
        "character": "hvem",
        "letter": "who"
    },
    "400": {
        "character": "å drive med",
        "letter": "to do/to work with something"
    },
    "401": {
        "character": "en bevegelse",
        "letter": "a movement"
    },
    "402": {
        "character": "brun",
        "letter": "brown"
    },
    "403": {
        "character": "en bamse",
        "letter": "a teddy bear"
    },
    "404": {
        "character": "en kjøkkenbenk",
        "letter": "a work table in the kitchen, a kitchen counter"
    },
    "405": {
        "character": "usikker",
        "letter": "uncertain"
    },
    "406": {
        "character": "å gjenta",
        "letter": "to repeat"
    },
    "407": {
        "character": "tilbake",
        "letter": "back"
    },
    "408": {
        "character": "et menneske",
        "letter": "a human"
    },
    "409": {
        "character": "å forklare",
        "letter": "to explain"
    },
    "410": {
        "character": "å smile",
        "letter": "to smile"
    },
    "411": {
        "character": "unnskyld",
        "letter": "sorry, excuse me"
    },
    "412": {
        "character": "direkte",
        "letter": "direct"
    },
    "413": {
        "character": "å skremme",
        "letter": "to scare"
    },
    "414": {
        "character": "å treffe",
        "letter": "to meet"
    },
    "415": {
        "character": "å finne",
        "letter": "to find"
    },
    "416": {
        "character": "å finne ut",
        "letter": "to find out"
    },
    "417": {
        "character": "ung",
        "letter": "young"
    },
    "418": {
        "character": "å skjønne",
        "letter": "to understand"
    },
    "419": {
        "character": "to hender",
        "letter": "two hands"
    },
    "420": {
        "character": "to mødre",
        "letter": "two mothers"
    },
    "421": {
        "character": "to brødre",
        "letter": "two brothers"
    },
    "422": {
        "character": "to fedre",
        "letter": "two fathers"
    },
    "423": {
        "character": "to søstre",
        "letter": "two sisters"
    },
    "424": {
        "character": "to døtre",
        "letter": "two daughters"
    },
    "425": {
        "character": "to menn",
        "letter": "two men"
    },
    "426": {
        "character": "en kniv",
        "letter": "a knife"
    },
    "427": {
        "character": "en gaffel",
        "letter": "a fork"
    },
    "428": {
        "character": "ei skje",
        "letter": "a spoon"
    },
    "429": {
        "character": "å koke",
        "letter": "to boil"
    },
    "430": {
        "character": "ei suppe",
        "letter": "a soup"
    },
    "431": {
        "character": "å steke",
        "letter": "to roast"
    },
    "432": {
        "character": "fisk",
        "letter": "fish"
    },
    "433": {
        "character": "å bake",
        "letter": "to bake"
    },
    "434": {
        "character": "ei kake",
        "letter": "a cake"
    },
    "435": {
        "character": "Vi lager mat.",
        "letter": "We prepare food."
    },
    "436": {
        "character": "Kan du vaske opp?",
        "letter": "Could you wash the dishes?"
    },
    "437": {
        "character": "Kan du dekke bordet?",
        "letter": "Could you set the table?"
    },
    "438": {
        "character": "Kan du rydde bordet?",
        "letter": "Could you clear the table?"
    },
    "439": {
        "character": "Kan du skjære opp brødet?",
        "letter": "Could you cut the bread?"
    },
    "440": {
        "character": "Kan du gi meg vannet?",
        "letter": "Could you pass the water?"
    },
    "441": {
        "character": "å dusje",
        "letter": "to take a shower"
    },
    "442": {
        "character": "en buss",
        "letter": "a bus"
    },
    "443": {
        "character": "en by",
        "letter": "a city/town"
    },
    "444": {
        "character": "et kontor",
        "letter": "an office"
    },
    "445": {
        "character": "etterpå",
        "letter": "afterwards"
    },
    "446": {
        "character": "å spille",
        "letter": "to play (an instrument or sports)"
    },
    "447": {
        "character": "tennis",
        "letter": "tennis"
    },
    "448": {
        "character": "å sove",
        "letter": "to sleep"
    },
    "449": {
        "character": "din",
        "letter": "your"
    },
    "450": {
        "character": "Jeg står opp klokka ...",
        "letter": "I get up at ... o'clock."
    },
    "451": {
        "character": "Så ...",
        "letter": "Then..."
    },
    "452": {
        "character": "Etterpå ...",
        "letter": "After that..."
    },
    "453": {
        "character": "Klokka ....",
        "letter": "At ... o'clock..."
    },
    "454": {
        "character": "Da ...",
        "letter": "At that time..."
    },
    "455": {
        "character": "Fra ... til ...",
        "letter": "From....to..."
    },
    "456": {
        "character": "sånn",
        "letter": "ok/here we go"
    },
    "457": {
        "character": "å fortelle",
        "letter": "to tell"
    },
    "458": {
        "character": "en sofa",
        "letter": "a sofa, couch"
    },
    "459": {
        "character": "viktig",
        "letter": "important"
    },
    "460": {
        "character": "en ting",
        "letter": "a thing"
    },
    "461": {
        "character": "mange ting",
        "letter": "many things"
    },
    "462": {
        "character": "folk",
        "letter": "people"
    },
    "463": {
        "character": "at",
        "letter": "that (as in ''...understand that you live'')"
    },
    "464": {
        "character": "heller ikke",
        "letter": "not ... either"
    },
    "465": {
        "character": "alltid",
        "letter": "always"
    },
    "466": {
        "character": "samme",
        "letter": "same"
    },
    "467": {
        "character": "et sted",
        "letter": "a place"
    },
    "468": {
        "character": "mange steder",
        "letter": "many places"
    },
    "469": {
        "character": "å skjule noe (for)",
        "letter": "to hide something (from)"
    },
    "470": {
        "character": "farlig",
        "letter": "dangerous"
    },
    "471": {
        "character": "et barn",
        "letter": "a child"
    },
    "472": {
        "character": "mange barn",
        "letter": "many children"
    },
    "473": {
        "character": "barna",
        "letter": "the children"
    },
    "474": {
        "character": "en voksen",
        "letter": "an adult"
    },
    "475": {
        "character": "mange voksne",
        "letter": "many adults"
    },
    "476": {
        "character": "å bli",
        "letter": "to become"
    },
    "477": {
        "character": "overrasket",
        "letter": "surprised"
    },
    "478": {
        "character": "rar",
        "letter": "strange, odd"
    },
    "479": {
        "character": "noe rart",
        "letter": "something strange"
    },
    "480": {
        "character": "til og med",
        "letter": "even, also, up to and including"
    },
    "481": {
        "character": "å dø",
        "letter": "to die"
    },
    "482": {
        "character": "en skrekk",
        "letter": "a fright"
    },
    "483": {
        "character": "faktisk",
        "letter": "actually"
    },
    "484": {
        "character": "absolutt",
        "letter": "absolute(ly)"
    },
    "485": {
        "character": "å vise",
        "letter": "to show"
    },
    "486": {
        "character": "en avtale",
        "letter": "an agreement"
    },
    "487": {
        "character": "mellom",
        "letter": "between"
    },
    "488": {
        "character": "alle",
        "letter": "all"
    },
    "489": {
        "character": "en dukke",
        "letter": "a doll"
    },
    "490": {
        "character": "én ting til",
        "letter": "one more thing"
    },
    "491": {
        "character": "en eske",
        "letter": "a box, a carton"
    },
    "492": {
        "character": "stor",
        "letter": "big"
    },
    "493": {
        "character": "en beholder",
        "letter": "a container"
    },
    "494": {
        "character": "å prøve",
        "letter": "to try"
    },
    "495": {
        "character": "å gjemme (seg)",
        "letter": "to hide (oneself)"
    },
    "496": {
        "character": "fort",
        "letter": "quickly"
    },
    "497": {
        "character": "mulig",
        "letter": "possible"
    },
    "498": {
        "character": "så fort som mulig",
        "letter": "as quickly as possible"
    },
    "499": {
        "character": "nemlig",
        "letter": "namely,that is to say, you know"
    },
    "500": {
        "character": "å rydde opp",
        "letter": "to clean up, to tidy up"
    },
    "501": {
        "character": "å legge",
        "letter": "to put, to lay (down)"
    },
    "502": {
        "character": "en bod",
        "letter": "a storage room"
    },
    "503": {
        "character": "en kjeller",
        "letter": "a cellar, basement"
    },
    "504": {
        "character": "for eksempel",
        "letter": "for example"
    },
    "505": {
        "character": "mørk",
        "letter": "dark"
    },
    "506": {
        "character": "å passe på",
        "letter": "to pay attention to"
    },
    "507": {
        "character": "ellers",
        "letter": "otherwise"
    },
    "508": {
        "character": "galt",
        "letter": "wrong"
    },
    "509": {
        "character": "en leilighet",
        "letter": "an apartment"
    },
    "510": {
        "character": "ved vinduet",
        "letter": "by the window"
    },
    "511": {
        "character": "ved døra",
        "letter": "by the door"
    },
    "512": {
        "character": "over",
        "letter": "over, above, past, upper, overhead"
    },
    "513": {
        "character": "over bordet",
        "letter": "over the table"
    },
    "514": {
        "character": "på rommet",
        "letter": "in the room"
    },
    "515": {
        "character": "på kjøkkenet",
        "letter": "in the kitchen"
    },
    "516": {
        "character": "på kino",
        "letter": "at the cinema"
    },
    "517": {
        "character": "på restaurant",
        "letter": "at the restaurant"
    },
    "518": {
        "character": "i stua",
        "letter": "in the living room"
    },
    "519": {
        "character": "i Norge",
        "letter": "in Norway"
    },
    "520": {
        "character": "i Oslo",
        "letter": "in Oslo"
    },
    "521": {
        "character": "på Grønland",
        "letter": "in Greenland"
    },
    "522": {
        "character": "på Finnsnes",
        "letter": "in Finnsnes"
    },
    "523": {
        "character": "bak",
        "letter": "behind"
    },
    "524": {
        "character": "bak bordet",
        "letter": "behind the table"
    },
    "525": {
        "character": "ved bordet",
        "letter": "at the table"
    },
    "526": {
        "character": "foran",
        "letter": "in front of, before"
    },
    "527": {
        "character": "foran bordet",
        "letter": "in front of the table"
    },
    "528": {
        "character": "under",
        "letter": "under, below"
    },
    "529": {
        "character": "under bordet",
        "letter": "under the table"
    },
    "530": {
        "character": "en stor kopp",
        "letter": "a big cup"
    },
    "531": {
        "character": "ei stor brødskive",
        "letter": "a big slice of bread"
    },
    "532": {
        "character": "et stort rundstykke",
        "letter": "a big roll"
    },
    "533": {
        "character": "mange store kopper",
        "letter": "many big cups"
    },
    "534": {
        "character": "mange store brødskiver",
        "letter": "many big slices of bread"
    },
    "535": {
        "character": "mange store rundstykker",
        "letter": "many big rolls"
    },
    "536": {
        "character": "et hyggelig rom",
        "letter": "a nice room"
    },
    "537": {
        "character": "koppene",
        "letter": "the cups"
    },
    "538": {
        "character": "brødskivene",
        "letter": "the slices of bread"
    },
    "539": {
        "character": "rundstykkene",
        "letter": "the rolls"
    },
    "540": {
        "character": "fin",
        "letter": "fine, nice"
    },
    "541": {
        "character": "man",
        "letter": "one, you, someone, anyone"
    },
    "542": {
        "character": "trang",
        "letter": "cramped, narrow, want, tight"
    },
    "543": {
        "character": "ei gate",
        "letter": "a street"
    },
    "544": {
        "character": "et rom",
        "letter": "a room"
    },
    "545": {
        "character": "rommet",
        "letter": "the room"
    },
    "546": {
        "character": "mange rom",
        "letter": "many rooms"
    },
    "547": {
        "character": "rommene",
        "letter": "the rooms (definite plural)"
    },
    "548": {
        "character": "et soverom",
        "letter": "a bedroom"
    },
    "549": {
        "character": "en bakgård",
        "letter": "a backyard"
    },
    "550": {
        "character": "møbler",
        "letter": "furniture (plural)"
    },
    "551": {
        "character": "svært",
        "letter": "very"
    },
    "552": {
        "character": "moderne",
        "letter": "modern"
    },
    "553": {
        "character": "å kjenne",
        "letter": "to know (who/what someone/something is)"
    },
    "554": {
        "character": "videre",
        "letter": "on, further"
    },
    "555": {
        "character": "et bad",
        "letter": "a bathroom"
    },
    "556": {
        "character": "dette",
        "letter": "this, these"
    },
    "557": {
        "character": "en dusj",
        "letter": "a shower"
    },
    "558": {
        "character": "et toalett",
        "letter": "a toilet"
    },
    "559": {
        "character": "en gang",
        "letter": "a corridor"
    },
    "560": {
        "character": "lang",
        "letter": "long"
    },
    "561": {
        "character": "et gulv",
        "letter": "a floor"
    },
    "562": {
        "character": "av tre",
        "letter": "wooden"
    },
    "563": {
        "character": "et teppe",
        "letter": "a rug, carpet"
    },
    "564": {
        "character": "alt",
        "letter": "everything"
    },
    "565": {
        "character": "å huske",
        "letter": "to remember"
    },
    "566": {
        "character": "mer",
        "letter": "further, more"
    },
    "567": {
        "character": "en bursdagsgave",
        "letter": "a birthday present"
    },
    "568": {
        "character": "å snakke om",
        "letter": "to talk about"
    },
    "569": {
        "character": "av og til",
        "letter": "at times, occasionally, sometimes, on and off"
    },
    "570": {
        "character": "fornøyd",
        "letter": "satisfied, pleased"
    },
    "571": {
        "character": "seg selv",
        "letter": "oneself"
    },
    "572": {
        "character": "Jeg kjenner Nils.",
        "letter": "I know Nils. (I have seen him before, I know who he is.)"
    },
    "573": {
        "character": "Jeg kjenner Oslo.",
        "letter": "I know Oslo -- I have been there before."
    },
    "574": {
        "character": "Jeg vet hva han heter.",
        "letter": "I know what his name is."
    },
    "575": {
        "character": "Jeg vet ikke hvor han bor.",
        "letter": "I don't know where he lives."
    },
    "576": {
        "character": "Man ser ei trang gate.",
        "letter": "One can see a narrow street,"
    },
    "577": {
        "character": "en moderne leilighet",
        "letter": "a modern apartment"
    },
    "578": {
        "character": "et moderne hus",
        "letter": "a modern house"
    },
    "579": {
        "character": "mange moderne leiligheter",
        "letter": "many modern apartments"
    },
    "580": {
        "character": "mange moderne hus",
        "letter": "many modern houses"
    },
    "581": {
        "character": "et norsk hus",
        "letter": "a Norwegian house"
    },
    "582": {
        "character": "et svart bord",
        "letter": "a black table"
    },
    "583": {
        "character": "et nytt hus",
        "letter": "a new house"
    },
    "584": {
        "character": "et blått hus",
        "letter": "a blue house"
    },
    "585": {
        "character": "et grått hus",
        "letter": "a grey house"
    },
    "586": {
        "character": "et grånt hus",
        "letter": "a green house"
    },
    "587": {
        "character": "en gammel historie",
        "letter": "an old story"
    },
    "588": {
        "character": "to gamle historier",
        "letter": "two old stories"
    },
    "589": {
        "character": "Hva driver du med?",
        "letter": "What do you do?"
    },
    "590": {
        "character": "Har du (fast) jobb?",
        "letter": "Do you have a (permanent) job?"
    },
    "591": {
        "character": "Jeg studerer medisin.",
        "letter": "I am studying medicine."
    },
    "592": {
        "character": "Jeg leter etter en jobb.",
        "letter": "I am looking for a job."
    },
    "593": {
        "character": "Jeg er pensjonist.",
        "letter": "I'm retired."
    },
    "594": {
        "character": "Jeg går på skolen.",
        "letter": "I am going to school."
    },
    "595": {
        "character": "Jeg er lærer.",
        "letter": "I'm a teacher."
    },
    "596": {
        "character": "Hege er elektriker.",
        "letter": "Hege is an electrician."
    },
    "597": {
        "character": "Mario er kokk.",
        "letter": "Mario is a cook."
    },
    "598": {
        "character": "Jeg er engelsk.",
        "letter": "I'm English"
    },
    "599": {
        "character": "Hege er norsk.",
        "letter": "Hege is Norwegian."
    },
    "600": {
        "character": "Mario er italiensk.",
        "letter": "Mario is Italian."
    },
    "601": {
        "character": "Jeg kommer fra England.",
        "letter": "I come from England."
    },
    "602": {
        "character": "Jeg kommer fra Norge.",
        "letter": "I come from Norway."
    },
    "603": {
        "character": "Jeg kommer fra Italia.",
        "letter": "I come from Italy."
    },
    "604": {
        "character": "Jeg er ... år gammel.",
        "letter": "I am ... years old."
    },
    "605": {
        "character": "Jeg bor i...",
        "letter": "I live in..."
    },
    "606": {
        "character": "Jeg liker...",
        "letter": "I like..."
    },
    "607": {
        "character": "en idé",
        "letter": "an idea"
    },
    "608": {
        "character": "et arbeid",
        "letter": "work"
    },
    "609": {
        "character": "ei saks",
        "letter": "scissors"
    },
    "610": {
        "character": "et papirarbeid",
        "letter": "paperwork"
    },
    "611": {
        "character": "en binders",
        "letter": "A paper clip"
    },
    "612": {
        "character": "en kunde",
        "letter": "a customer"
    },
    "613": {
        "character": "å gjøre notater",
        "letter": "to take notes"
    },
    "614": {
        "character": "en rapport",
        "letter": "a report"
    },
    "615": {
        "character": "gul",
        "letter": "yellow"
    },
    "616": {
        "character": "rød",
        "letter": "red"
    },
    "617": {
        "character": "blå",
        "letter": "blue"
    },
    "618": {
        "character": "grønn",
        "letter": "green"
    },
    "619": {
        "character": "svart",
        "letter": "black"
    },
    "620": {
        "character": "hvit",
        "letter": "white"
    },
    "621": {
        "character": "grå",
        "letter": "grey, gray"
    },
    "622": {
        "character": "oransje",
        "letter": "orange"
    },
    "623": {
        "character": "ei natt",
        "letter": "a night"
    },
    "624": {
        "character": "hans",
        "letter": "his"
    },
    "625": {
        "character": "ei pute",
        "letter": "a pillow, cushion"
    },
    "626": {
        "character": "å bruke som",
        "letter": "to use as"
    },
    "627": {
        "character": "hennes",
        "letter": "her, hers"
    },
    "628": {
        "character": "å ha vondt",
        "letter": "to have pain"
    },
    "629": {
        "character": "kvalm",
        "letter": "queazy, sicken, squeamish"
    },
    "630": {
        "character": "en smerte",
        "letter": "a pain"
    },
    "631": {
        "character": "verre",
        "letter": "worse"
    },
    "632": {
        "character": "forsiktig",
        "letter": "careful(ly), cautious(ly), prudent, guardedly, sparing"
    },
    "633": {
        "character": "svak",
        "letter": "weak"
    },
    "634": {
        "character": "å ligge",
        "letter": "to lie"
    },
    "635": {
        "character": "nærmere",
        "letter": "closer"
    },
    "636": {
        "character": "med en gang",
        "letter": "right away"
    },
    "637": {
        "character": "midt på natta",
        "letter": "In the middle of the night"
    },
    "638": {
        "character": "syk",
        "letter": "sick"
    },
    "639": {
        "character": "forferdelig",
        "letter": "terrible, horrifying"
    },
    "640": {
        "character": "et bryst",
        "letter": "a chest"
    },
    "641": {
        "character": "di",
        "letter": "your"
    },
    "642": {
        "character": "ditt",
        "letter": "your"
    },
    "643": {
        "character": "dine",
        "letter": "your"
    },
    "644": {
        "character": "verken - eller",
        "letter": "neither - nor"
    },
    "645": {
        "character": "å ta av",
        "letter": "to undress"
    },
    "646": {
        "character": "ei skjorte",
        "letter": "a shirt"
    },
    "647": {
        "character": "å trykke",
        "letter": "to press"
    },
    "648": {
        "character": "mer enn",
        "letter": "more than"
    },
    "649": {
        "character": "før",
        "letter": "before"
    },
    "650": {
        "character": "å burde",
        "letter": "should"
    },
    "651": {
        "character": "bør",
        "letter": "should (present)"
    },
    "652": {
        "character": "å lytte på",
        "letter": "to listen to"
    },
    "653": {
        "character": "en lunge",
        "letter": "a lung"
    },
    "654": {
        "character": "et øre",
        "letter": "en ear"
    },
    "655": {
        "character": "å kjenne på",
        "letter": "to touch, to feel, to sense"
    },
    "656": {
        "character": "et stykke",
        "letter": "a piece"
    },
    "657": {
        "character": "et papir",
        "letter": "a paper"
    },
    "658": {
        "character": "et stykke papir",
        "letter": "a piece of paper"
    },
    "659": {
        "character": "å skrive",
        "letter": "to write"
    },
    "660": {
        "character": "ei bok",
        "letter": "a book"
    },
    "661": {
        "character": "bøker",
        "letter": "books (plural)"
    },
    "662": {
        "character": "av papir",
        "letter": "made of paper"
    },
    "663": {
        "character": "en papirlapp",
        "letter": "a slip of paper"
    },
    "664": {
        "character": "sikkert",
        "letter": "surely, certainly"
    },
    "665": {
        "character": "å snu",
        "letter": "to turn"
    },
    "666": {
        "character": "én gang",
        "letter": "one time, once"
    },
    "667": {
        "character": "et par",
        "letter": "a couple"
    },
    "668": {
        "character": "et par ganger",
        "letter": "a couple of times"
    },
    "669": {
        "character": "uansett",
        "letter": "anyway/whatever/regardless"
    },
    "670": {
        "character": "ned",
        "letter": "below, down"
    },
    "671": {
        "character": "fortsatt",
        "letter": "still, even now, yet"
    },
    "672": {
        "character": "frisk",
        "letter": "well, healthy, sound"
    },
    "673": {
        "character": "mange",
        "letter": "many"
    },
    "674": {
        "character": "en liten gutt",
        "letter": "a little boy"
    },
    "675": {
        "character": "ei lita jente",
        "letter": "a little girl"
    },
    "676": {
        "character": "et lite hus",
        "letter": "a little house"
    },
    "677": {
        "character": "mange små gutter",
        "letter": "many little boys"
    },
    "678": {
        "character": "mange små jenter",
        "letter": "many little girls"
    },
    "679": {
        "character": "mange små hus",
        "letter": "many little houses"
    },
    "680": {
        "character": "kroppen",
        "letter": "the body"
    },
    "681": {
        "character": "et hode",
        "letter": "a head"
    },
    "682": {
        "character": "et kne",
        "letter": "a knee"
    },
    "683": {
        "character": "knær",
        "letter": "knees (plural)"
    },
    "684": {
        "character": "en hals",
        "letter": "a throat, neck"
    },
    "685": {
        "character": "en arm",
        "letter": "an arm"
    },
    "686": {
        "character": "ei nese",
        "letter": "a nose"
    },
    "687": {
        "character": "en munn",
        "letter": "a mouth"
    },
    "688": {
        "character": "hender",
        "letter": "hands"
    },
    "689": {
        "character": "en mage",
        "letter": "a stomach"
    },
    "690": {
        "character": "en fot",
        "letter": "a foot"
    },
    "691": {
        "character": "føtter",
        "letter": "feet"
    },
    "692": {
        "character": "et øye",
        "letter": "an eye"
    },
    "693": {
        "character": "øyer",
        "letter": "eyes"
    },
    "694": {
        "character": "øyne",
        "letter": "eye (plural)"
    },
    "695": {
        "character": "Hos legen",
        "letter": "At the Doctor's"
    },
    "696": {
        "character": "Det gjør vondt her.",
        "letter": "It hurts here."
    },
    "697": {
        "character": "Jeg har vondt i magen.",
        "letter": "I have a pain in my stomach."
    },
    "698": {
        "character": "Jeg har diaré.",
        "letter": "I have diarrhoea."
    },
    "699": {
        "character": "Kan du ta av skjorta?",
        "letter": "Can you take off your shirt?"
    },
    "700": {
        "character": "Pust inn / pust ut.",
        "letter": "Breathe in / breathe out."
    },
    "701": {
        "character": "Jeg må kaste opp.",
        "letter": "I have to throw up."
    },
    "702": {
        "character": "Du må ta legemidler.",
        "letter": "You have to take medication."
    },
    "703": {
        "character": "Kan jeg kjøpe det på apoteket uten resept?",
        "letter": "Can I buy that at the pharmacy without a prescription?"
    },
    "704": {
        "character": "Temperaturen din er høy.",
        "letter": "You have a high temperature."
    },
    "705": {
        "character": "Du må holde senga.",
        "letter": "You have to stay in bed."
    },
    "706": {
        "character": "Må du hoste ofte?",
        "letter": "Do you cough frequently?"
    },
    "707": {
        "character": "å kjøpe",
        "letter": "to buy"
    },
    "708": {
        "character": "en mat",
        "letter": "food"
    },
    "709": {
        "character": "fordi",
        "letter": "because"
    },
    "710": {
        "character": "et besøk",
        "letter": "a visit"
    },
    "711": {
        "character": "å komme på besøk",
        "letter": "to visit"
    },
    "712": {
        "character": "en middag",
        "letter": "a dinner"
    },
    "713": {
        "character": "hos",
        "letter": "at the house of"
    },
    "714": {
        "character": "en fisk",
        "letter": "a fish"
    },
    "715": {
        "character": "ei fiskesuppe",
        "letter": "a fish soup"
    },
    "716": {
        "character": "en karbonade",
        "letter": "a traditional Norwegian meatball"
    },
    "717": {
        "character": "en potet",
        "letter": "a potato"
    },
    "718": {
        "character": "grønnsaker",
        "letter": "vegetables"
    },
    "719": {
        "character": "en pudding",
        "letter": "a pudding"
    },
    "720": {
        "character": "vanilje",
        "letter": "vanilla"
    },
    "721": {
        "character": "en dessert",
        "letter": "a dessert"
    },
    "722": {
        "character": "en butikk",
        "letter": "a shop"
    },
    "723": {
        "character": "billig",
        "letter": "cheap"
    },
    "724": {
        "character": "et tilbud",
        "letter": "an offer"
    },
    "725": {
        "character": "på tilbud",
        "letter": "sold at a discount"
    },
    "726": {
        "character": "et bakeri",
        "letter": "a bakery"
    },
    "727": {
        "character": "en slags",
        "letter": "a sort"
    },
    "728": {
        "character": "ei gulrot",
        "letter": "carrot"
    },
    "729": {
        "character": "gulrøtter",
        "letter": "carrots"
    },
    "730": {
        "character": "en løk",
        "letter": "an onion"
    },
    "731": {
        "character": "best",
        "letter": "best"
    },
    "732": {
        "character": "en pose",
        "letter": "a bag"
    },
    "733": {
        "character": "hvilken",
        "letter": "which, what"
    },
    "734": {
        "character": "ei såpe",
        "letter": "a soap"
    },
    "735": {
        "character": "toalettpapir",
        "letter": "toilet paper"
    },
    "736": {
        "character": "ny",
        "letter": "new"
    },
    "737": {
        "character": "en børste",
        "letter": "a brush"
    },
    "738": {
        "character": "en oppvaskbørste",
        "letter": "a dishwashing brush"
    },
    "739": {
        "character": "ødelagt",
        "letter": "broken"
    },
    "740": {
        "character": "å betale",
        "letter": "to pay"
    },
    "741": {
        "character": "en kasserer",
        "letter": "a cashier, checkout"
    },
    "742": {
        "character": "mange kasserere",
        "letter": "many cashiers"
    },
    "743": {
        "character": "et kort",
        "letter": "a card"
    },
    "744": {
        "character": "et medlem",
        "letter": "a member"
    },
    "745": {
        "character": "medlemmet",
        "letter": "the member"
    },
    "746": {
        "character": "mange medlemmer",
        "letter": "many members"
    },
    "747": {
        "character": "et medlemskort",
        "letter": "a membership card"
    },
    "748": {
        "character": "Hva sier du?",
        "letter": "Excuse me? I beg your pardon?"
    },
    "749": {
        "character": "vær så snill",
        "letter": "please"
    },
    "750": {
        "character": "inn",
        "letter": "in, inside, into"
    },
    "751": {
        "character": "en kortleser",
        "letter": "a credit card terminal"
    },
    "752": {
        "character": "mange kortlesere",
        "letter": "many credit card terminals"
    },
    "753": {
        "character": "å slå",
        "letter": "to beat"
    },
    "754": {
        "character": "en kode",
        "letter": "a code"
    },
    "755": {
        "character": "å slå kode",
        "letter": "to enter the code"
    },
    "756": {
        "character": "en kvittering",
        "letter": "a receipt"
    },
    "757": {
        "character": "å stå",
        "letter": "to stand"
    },
    "758": {
        "character": "et fortau",
        "letter": "a sidewalk, pavement"
    },
    "759": {
        "character": "rett",
        "letter": "directly"
    },
    "760": {
        "character": "bort",
        "letter": "away, off, over, towards"
    },
    "761": {
        "character": "en stasjon",
        "letter": "a station"
    },
    "762": {
        "character": "en jernbane",
        "letter": "a railway"
    },
    "763": {
        "character": "en jernbanestasjon",
        "letter": "a railway station"
    },
    "764": {
        "character": "en melon",
        "letter": "a melon"
    },
    "765": {
        "character": "en appelsin",
        "letter": "an orange"
    },
    "766": {
        "character": "frukt",
        "letter": "fruit"
    },
    "767": {
        "character": "en paprika",
        "letter": "a paprika"
    },
    "768": {
        "character": "en salat",
        "letter": "a salad"
    },
    "769": {
        "character": "en sopp",
        "letter": "a mushroom"
    },
    "770": {
        "character": "en agurk",
        "letter": "a cucumber"
    },
    "771": {
        "character": "en banan",
        "letter": "a banana"
    },
    "772": {
        "character": "druer",
        "letter": "grapes"
    },
    "773": {
        "character": "en laks",
        "letter": "a salmon"
    },
    "774": {
        "character": "et kjøtt",
        "letter": "meat"
    },
    "775": {
        "character": "et svinekjøtt",
        "letter": "pork"
    },
    "776": {
        "character": "ei reke",
        "letter": "a shrimp"
    },
    "777": {
        "character": "en kylling",
        "letter": "a chicken"
    },
    "778": {
        "character": "en tomat",
        "letter": "a tomato"
    },
    "779": {
        "character": "et pålegg",
        "letter": "a topping (to put on a slice of bread)"
    },
    "780": {
        "character": "en pasta",
        "letter": "pasta"
    },
    "781": {
        "character": "ei pære",
        "letter": "a pear"
    },
    "782": {
        "character": "en matbutikk",
        "letter": "a food store"
    },
    "783": {
        "character": "et apotek",
        "letter": "A drugstore"
    },
    "784": {
        "character": "et legemiddel",
        "letter": "a medicine"
    },
    "785": {
        "character": "legemidler",
        "letter": "medicines"
    },
    "786": {
        "character": "en klesbutikk",
        "letter": "a clothing store"
    },
    "787": {
        "character": "klær",
        "letter": "clothes"
    },
    "788": {
        "character": "en kosmetikk",
        "letter": "a cosmetic"
    },
    "789": {
        "character": "en kiosk",
        "letter": "a kiosk"
    },
    "790": {
        "character": "en billett",
        "letter": "a ticket"
    },
    "791": {
        "character": "ei avis",
        "letter": "a newspaper"
    },
    "792": {
        "character": "et tidsskrift",
        "letter": "a magazine"
    },
    "793": {
        "character": "en skobutikk",
        "letter": "a shoeshop"
    },
    "794": {
        "character": "en sko",
        "letter": "a shoe"
    },
    "795": {
        "character": "mange sko",
        "letter": "many shoes"
    },
    "796": {
        "character": "en bensinstasjon",
        "letter": "a petrol station"
    },
    "797": {
        "character": "en bensin",
        "letter": "fuel"
    },
    "798": {
        "character": "å betale kontant",
        "letter": "to pay cash"
    },
    "799": {
        "character": "å betale med kort",
        "letter": "to pay with credit card"
    },
    "800": {
        "character": "å kjøpe på kreditt",
        "letter": "to purchase on credit"
    },
    "801": {
        "character": "døgnåpen",
        "letter": "open 24 hours"
    },
    "802": {
        "character": "åpningstider",
        "letter": "opening hours"
    },
    "803": {
        "character": "Hvilken kaffe skal hun kjøpe?",
        "letter": "Which coffee will she buy?"
    },
    "804": {
        "character": "Hvilken dør skal hun åpne?",
        "letter": "Which door will she open?"
    },
    "805": {
        "character": "Hvilket hus liker du?",
        "letter": "Which house do you like?"
    },
    "806": {
        "character": "Hvilke poteter skal hun kjøpe?",
        "letter": "Which potatoes will she buy?"
    },
    "807": {
        "character": "Alle skal komme på besøk.",
        "letter": "Everyone will come to visit."
    },
    "808": {
        "character": "Erna vil lage fisksuppe.",
        "letter": "Erna will make fish soup."
    },
    "809": {
        "character": "Jeg skal gå på kino klokka 20.00.",
        "letter": "I will go to the cinema at 8:00. (I have already bought my ticket.)"
    },
    "810": {
        "character": "Jeg vil gå på kino klokka 20.00.",
        "letter": "I will go to the cinema at 8:00. (I have not bought my ticket yet.)"
    },
    "811": {
        "character": "Hva skal hun kjøpe?",
        "letter": "What should she buy? (advice)"
    },
    "812": {
        "character": "Hun vil betale.",
        "letter": "She wants to pay. (a wish)"
    },
    "813": {
        "character": "Det vil regne i morgen.",
        "letter": "It will rain tomorrow."
    },
    "814": {
        "character": "en slags potet",
        "letter": "one sort of potatoes"
    },
    "815": {
        "character": "en slags ost",
        "letter": "one sort of cheese"
    },
    "816": {
        "character": "et slags brød",
        "letter": "one sort of bread"
    },
    "817": {
        "character": "mange slags ost",
        "letter": "many sorts of cheese"
    },
    "818": {
        "character": "mange slags poteter",
        "letter": "many sorts of potatoes"
    },
    "819": {
        "character": "mange typer ost",
        "letter": "many types of cheese"
    },
    "820": {
        "character": "mange typer poteter",
        "letter": "many types of potatoes"
    },
    "821": {
        "character": "Hellas",
        "letter": "Greece"
    },
    "822": {
        "character": "Brasil",
        "letter": "Brazil"
    },
    "823": {
        "character": "Canada",
        "letter": "Canada"
    },
    "824": {
        "character": "Tyrkia",
        "letter": "Turkey"
    },
    "825": {
        "character": "Sveits",
        "letter": "Switzerland"
    },
    "826": {
        "character": "Storbritannia",
        "letter": "Great Britain, United Kingdom"
    },
    "827": {
        "character": "Østerrike",
        "letter": "Austria"
    },
    "828": {
        "character": "Russland",
        "letter": "Russia"
    },
    "829": {
        "character": "Argentina",
        "letter": "Argentina"
    },
    "830": {
        "character": "Polen",
        "letter": "Poland"
    },
    "831": {
        "character": "Island",
        "letter": "Iceland"
    },
    "832": {
        "character": "Vatikanstaten",
        "letter": "The Vatican State"
    },
    "833": {
        "character": "Sverige",
        "letter": "Sweden"
    },
    "834": {
        "character": "engelsk",
        "letter": "english"
    },
    "835": {
        "character": "svensk",
        "letter": "swedish"
    },
    "836": {
        "character": "fransk",
        "letter": "french"
    },
    "837": {
        "character": "tysk",
        "letter": "german"
    },
    "838": {
        "character": "italiensk",
        "letter": "Italian"
    },
    "839": {
        "character": "portugisisk",
        "letter": "Portuguese"
    },
    "840": {
        "character": "polsk",
        "letter": "polish"
    },
    "841": {
        "character": "russisk",
        "letter": "Russian"
    },
    "842": {
        "character": "latin",
        "letter": "Latin"
    },
    "843": {
        "character": "spansk",
        "letter": "spanish"
    },
    "844": {
        "character": "islandsk",
        "letter": "icelandic"
    },
    "845": {
        "character": "tyrkisk",
        "letter": "Turkish"
    },
    "846": {
        "character": "gresk",
        "letter": "Greek"
    },
    "847": {
        "character": "norsk",
        "letter": "norwegian"
    },
    "848": {
        "character": "irsk",
        "letter": "Irish"
    },
    "849": {
        "character": "sørafrikansk",
        "letter": "South African"
    },
    "850": {
        "character": "østerriksk",
        "letter": "Austrian"
    },
    "851": {
        "character": "å forvirre",
        "letter": "to confuse"
    },
    "852": {
        "character": "forvirret",
        "letter": "confused"
    },
    "853": {
        "character": "en turist",
        "letter": "a tourist"
    },
    "854": {
        "character": "uvanlig",
        "letter": "freakish, unaccustomed, uncommon"
    },
    "855": {
        "character": "en følelse",
        "letter": "a feeling"
    },
    "856": {
        "character": "en film",
        "letter": "a film"
    },
    "857": {
        "character": "blid",
        "letter": "cheerful, friendly"
    },
    "858": {
        "character": "høflig",
        "letter": "civil, courteous, polite"
    },
    "859": {
        "character": "en vei",
        "letter": "a road; here: a way, directions"
    },
    "860": {
        "character": "å spørre etter veien",
        "letter": "to ask for directions"
    },
    "861": {
        "character": "spurte",
        "letter": "asked (past)"
    },
    "862": {
        "character": "å bære",
        "letter": "to carry, to bear"
    },
    "863": {
        "character": "tung",
        "letter": "heavy"
    },
    "864": {
        "character": "en koffert",
        "letter": "a suitcase"
    },
    "865": {
        "character": "slik",
        "letter": "such, like this"
    },
    "866": {
        "character": "var",
        "letter": "was (past)"
    },
    "867": {
        "character": "den gang",
        "letter": "back then, at that time"
    },
    "868": {
        "character": "nøyaktig",
        "letter": "meticulous, exact, exactly, precise, accurate"
    },
    "869": {
        "character": "for ... siden",
        "letter": "...ago"
    },
    "870": {
        "character": "en drøm",
        "letter": "a dream"
    },
    "871": {
        "character": "drømmer",
        "letter": "dreams"
    },
    "872": {
        "character": "en dagdrøm",
        "letter": "a daydream"
    },
    "873": {
        "character": "denne",
        "letter": "this"
    },
    "874": {
        "character": "til høyre",
        "letter": "to the right"
    },
    "875": {
        "character": "et kryss",
        "letter": "a crossing"
    },
    "876": {
        "character": "borte",
        "letter": "away, off, over"
    },
    "877": {
        "character": "omtrent",
        "letter": "about, some, circa, roughly"
    },
    "878": {
        "character": "til venstre",
        "letter": "to the left"
    },
    "879": {
        "character": "et hotell",
        "letter": "a hotel"
    },
    "880": {
        "character": "deretter",
        "letter": "then, thereafter, next"
    },
    "881": {
        "character": "rett fram",
        "letter": "straight ahead"
    },
    "882": {
        "character": "en annen",
        "letter": "another (masculine)"
    },
    "883": {
        "character": "ei anna",
        "letter": "another (feminine)"
    },
    "884": {
        "character": "et annet",
        "letter": "another (neutral)"
    },
    "885": {
        "character": "de andre",
        "letter": "the others"
    },
    "886": {
        "character": "et ansikt",
        "letter": "a face"
    },
    "887": {
        "character": "kjent",
        "letter": "known, aware"
    },
    "888": {
        "character": "et språk",
        "letter": "a language"
    },
    "889": {
        "character": "en uttale",
        "letter": "a pronunciation"
    },
    "890": {
        "character": "ennå",
        "letter": "yet"
    },
    "891": {
        "character": "å dra",
        "letter": "to travel/go"
    },
    "892": {
        "character": "ofte",
        "letter": "often"
    },
    "893": {
        "character": "aldri",
        "letter": "never"
    },
    "894": {
        "character": "å glemme",
        "letter": "to forget"
    },
    "895": {
        "character": "glemte",
        "letter": "forgot (past)"
    },
    "896": {
        "character": "vanskelig",
        "letter": "difficult"
    },
    "897": {
        "character": "utrolig",
        "letter": "incredible, unbelievable, tumultuous, amazing"
    },
    "898": {
        "character": "et minne",
        "letter": "a memory"
    },
    "899": {
        "character": "en bølge",
        "letter": "a wave"
    },
    "900": {
        "character": "hjem",
        "letter": "home"
    },
    "901": {
        "character": "å ordne",
        "letter": "to arrange, to organise, to put in order"
    },
    "902": {
        "character": "en tanke",
        "letter": "a thought"
    },
    "903": {
        "character": "en parkeringsplass",
        "letter": "a parking lot"
    },
    "904": {
        "character": "en rundkjøring",
        "letter": "a roundabout"
    },
    "905": {
        "character": "en utkjørsel",
        "letter": "an exit (road, motorway)"
    },
    "906": {
        "character": "en restaurant",
        "letter": "a restaurant"
    },
    "907": {
        "character": "en bar",
        "letter": "a bar"
    },
    "908": {
        "character": "en kino",
        "letter": "a cinema"
    },
    "909": {
        "character": "arbeidet",
        "letter": "worked (past)"
    },
    "910": {
        "character": "dekket",
        "letter": "covered (past)"
    },
    "911": {
        "character": "dusjet",
        "letter": "showered (past)"
    },
    "912": {
        "character": "giftet seg",
        "letter": "got married (past)"
    },
    "913": {
        "character": "gledet seg",
        "letter": "became happy (past)"
    },
    "914": {
        "character": "hentet",
        "letter": "brought (past)"
    },
    "915": {
        "character": "hetet",
        "letter": "was named (past)"
    },
    "916": {
        "character": "hoppet",
        "letter": "jumped (past)"
    },
    "917": {
        "character": "hostet",
        "letter": "coughed (past)"
    },
    "918": {
        "character": "husket",
        "letter": "remembered (past)"
    },
    "919": {
        "character": "kastet",
        "letter": "threw (past)"
    },
    "920": {
        "character": "kostet",
        "letter": "cost (past)"
    },
    "921": {
        "character": "laget",
        "letter": "made, created (past)"
    },
    "922": {
        "character": "lyttet",
        "letter": "listened (past)"
    },
    "923": {
        "character": "ordnet",
        "letter": "organized (past)"
    },
    "924": {
        "character": "passet på",
        "letter": "paid attention to (past)"
    },
    "925": {
        "character": "pusset",
        "letter": "brushed (past)"
    },
    "926": {
        "character": "pustet",
        "letter": "breathed (past)"
    },
    "927": {
        "character": "ryddet",
        "letter": "tidied (past)"
    },
    "928": {
        "character": "slappet av",
        "letter": "relaxed (past)"
    },
    "929": {
        "character": "sluttet",
        "letter": "quit (past)"
    },
    "930": {
        "character": "snakket",
        "letter": "spoke (past)"
    },
    "931": {
        "character": "trykket",
        "letter": "pressed, printed (past)"
    },
    "932": {
        "character": "tullet",
        "letter": "joked (past)"
    },
    "933": {
        "character": "vasket",
        "letter": "washed (past)"
    },
    "934": {
        "character": "ventet",
        "letter": "waited (past)"
    },
    "935": {
        "character": "våknet",
        "letter": "woke up (past)"
    },
    "936": {
        "character": "åpnet",
        "letter": "opened (past)"
    },
    "937": {
        "character": "betydde",
        "letter": "meant (past)"
    },
    "938": {
        "character": "bodde",
        "letter": "lived (past)"
    },
    "939": {
        "character": "bakte",
        "letter": "baked (past)"
    },
    "940": {
        "character": "begynte",
        "letter": "began (past)"
    },
    "941": {
        "character": "betalte",
        "letter": "paid (past)"
    },
    "942": {
        "character": "beveget",
        "letter": "moved (past)"
    },
    "943": {
        "character": "brukte",
        "letter": "used (past)"
    },
    "944": {
        "character": "flirte",
        "letter": "smirked (past)"
    },
    "945": {
        "character": "forklarte",
        "letter": "explained (past)"
    },
    "946": {
        "character": "følte",
        "letter": "felt (past)"
    },
    "947": {
        "character": "gjemte",
        "letter": "hid (past)"
    },
    "948": {
        "character": "hilste",
        "letter": "greeted (past)"
    },
    "949": {
        "character": "hørte",
        "letter": "heard (past)"
    },
    "950": {
        "character": "kjente",
        "letter": "knew (past)"
    },
    "951": {
        "character": "kjøpte",
        "letter": "bought (past)"
    },
    "952": {
        "character": "kokte",
        "letter": "cooked (past)"
    },
    "953": {
        "character": "lekte",
        "letter": "played (past)"
    },
    "954": {
        "character": "likte",
        "letter": "liked (past)"
    },
    "955": {
        "character": "ringte",
        "letter": "called (past)"
    },
    "956": {
        "character": "ropte",
        "letter": "shouted (past)"
    },
    "957": {
        "character": "sendte",
        "letter": "sent (past)"
    },
    "958": {
        "character": "skulte",
        "letter": "hid (past)"
    },
    "959": {
        "character": "skjærte",
        "letter": "cut (past)"
    },
    "960": {
        "character": "skjønte",
        "letter": "understood (past)"
    },
    "961": {
        "character": "skremte",
        "letter": "scared (past)"
    },
    "962": {
        "character": "smilte",
        "letter": "smiled (past)"
    },
    "963": {
        "character": "spilte",
        "letter": "played (past)"
    },
    "964": {
        "character": "spiste",
        "letter": "ate (past)"
    },
    "965": {
        "character": "stekte",
        "letter": "roasted"
    },
    "966": {
        "character": "stemte",
        "letter": "was correct, voted (past)"
    },
    "967": {
        "character": "studerte",
        "letter": "studied (past)"
    },
    "968": {
        "character": "svarte",
        "letter": "answered (past)"
    },
    "969": {
        "character": "tenkte",
        "letter": "thought (past)"
    },
    "970": {
        "character": "trengte",
        "letter": "needed (past)"
    },
    "971": {
        "character": "trykte",
        "letter": "pressed (past)"
    },
    "972": {
        "character": "viste",
        "letter": "showed (past)"
    },
    "973": {
        "character": "døde",
        "letter": "died (past)"
    },
    "974": {
        "character": "lagde",
        "letter": "made (past)"
    },
    "975": {
        "character": "levde",
        "letter": "lived (past)"
    },
    "976": {
        "character": "prøvde",
        "letter": "tried (past)"
    },
    "977": {
        "character": "bar",
        "letter": "carried (past)"
    },
    "978": {
        "character": "ble",
        "letter": "became (past)"
    },
    "979": {
        "character": "burde",
        "letter": "should have (past)"
    },
    "980": {
        "character": "drog",
        "letter": "leave (past)"
    },
    "981": {
        "character": "drakk",
        "letter": "drank (past)"
    },
    "982": {
        "character": "drev",
        "letter": "drove (past)"
    },
    "983": {
        "character": "fikk",
        "letter": "received (past)"
    },
    "984": {
        "character": "fant",
        "letter": "found (past)"
    },
    "985": {
        "character": "forsto",
        "letter": "understood (past)"
    },
    "986": {
        "character": "fortalte",
        "letter": "told (past)"
    },
    "987": {
        "character": "gikk",
        "letter": "walked"
    },
    "988": {
        "character": "gav",
        "letter": "gave (past)"
    },
    "989": {
        "character": "gjentok",
        "letter": "repeated (past)"
    },
    "990": {
        "character": "gjørde",
        "letter": "did (past)"
    },
    "991": {
        "character": "hadde",
        "letter": "had (past)"
    },
    "992": {
        "character": "hjalp",
        "letter": "helped (past)"
    },
    "993": {
        "character": "kom",
        "letter": "came (past)"
    },
    "994": {
        "character": "kunne",
        "letter": "was able to (past)"
    },
    "995": {
        "character": "lå",
        "letter": "lie down      (past)"
    },
    "996": {
        "character": "måtte",
        "letter": "had to (past)"
    },
    "997": {
        "character": "satte",
        "letter": "put (past)"
    },
    "998": {
        "character": "satt",
        "letter": "sat (past)"
    },
    "999": {
        "character": "skrev",
        "letter": "wrote (past)"
    },
    "1000": {
        "character": "skulle",
        "letter": "would (past)"
    },
    "1001": {
        "character": "slo",
        "letter": "beat (past)"
    },
    "1002": {
        "character": "sov",
        "letter": "slept (past)"
    },
    "1003": {
        "character": "stod",
        "letter": "stood (past)"
    },
    "1004": {
        "character": "tok",
        "letter": "take (Past)"
    },
    "1005": {
        "character": "traff",
        "letter": "met (past)"
    },
    "1006": {
        "character": "ville",
        "letter": "wanted (past)"
    },
    "1007": {
        "character": "visste",
        "letter": "knew (past)"
    },
    "1008": {
        "character": "en kafé",
        "letter": "a café"
    },
    "1009": {
        "character": "nettopp",
        "letter": "just"
    },
    "1010": {
        "character": "drukket",
        "letter": "drunk (past participle)"
    },
    "1011": {
        "character": "sterk",
        "letter": "virulent, strong, vigorous, mighty"
    },
    "1012": {
        "character": "å bestille",
        "letter": "to order"
    },
    "1013": {
        "character": "bestilte",
        "letter": "ordered"
    },
    "1014": {
        "character": "en meny",
        "letter": "a menu"
    },
    "1015": {
        "character": "et øyeblikk",
        "letter": "a moment"
    },
    "1016": {
        "character": "en servitør",
        "letter": "a waiter"
    },
    "1017": {
        "character": "særlig",
        "letter": "particularly"
    },
    "1018": {
        "character": "fristende",
        "letter": "tempting"
    },
    "1019": {
        "character": "ei kjøttkake",
        "letter": "a meatball"
    },
    "1020": {
        "character": "dagens fisk",
        "letter": "fish of the day"
    },
    "1021": {
        "character": "en ris",
        "letter": "a rice"
    },
    "1022": {
        "character": "å snø",
        "letter": "to snow"
    },
    "1023": {
        "character": "snødde",
        "letter": "snowed"
    },
    "1024": {
        "character": "å blåse",
        "letter": "to blow, be windy"
    },
    "1025": {
        "character": "blåste",
        "letter": "blowed"
    },
    "1026": {
        "character": "ganske",
        "letter": "quite, altogether"
    },
    "1027": {
        "character": "kraftig",
        "letter": "virulent, sturdy, strong, ablebodied, powerful"
    },
    "1028": {
        "character": "en sak",
        "letter": "a matter"
    },
    "1029": {
        "character": "Det vil si...",
        "letter": "That means.../That is to say..."
    },
    "1030": {
        "character": "ei hytte",
        "letter": "a cabin"
    },
    "1031": {
        "character": "å stille spørsmål",
        "letter": "to ask questions"
    },
    "1032": {
        "character": "stilte spørsmål",
        "letter": "asked questions"
    },
    "1033": {
        "character": "å besøke",
        "letter": "to visit"
    },
    "1034": {
        "character": "besøkte",
        "letter": "visited"
    },
    "1035": {
        "character": "Tromsø",
        "letter": "a city in northern Norway"
    },
    "1036": {
        "character": "typisk",
        "letter": "typical"
    },
    "1037": {
        "character": "både - og",
        "letter": "both - and"
    },
    "1038": {
        "character": "å holde",
        "letter": "to hold"
    },
    "1039": {
        "character": "holdt",
        "letter": "held"
    },
    "1040": {
        "character": "har holdt",
        "letter": "have held"
    },
    "1041": {
        "character": "hemmelig",
        "letter": "secret"
    },
    "1042": {
        "character": "samtidig",
        "letter": "simultaneous, contemporary, at the same time"
    },
    "1043": {
        "character": "å fortelle om",
        "letter": "to tell about"
    },
    "1044": {
        "character": "fortalte om",
        "letter": "told about"
    },
    "1045": {
        "character": "enten - eller",
        "letter": "whether - or, either - or"
    },
    "1046": {
        "character": "en tekst",
        "letter": "a text"
    },
    "1047": {
        "character": "skjult",
        "letter": "hidden"
    },
    "1048": {
        "character": "en rest",
        "letter": "a rest, here: the others"
    },
    "1049": {
        "character": "resten av",
        "letter": "the rest of"
    },
    "1050": {
        "character": "et liv",
        "letter": "a life"
    },
    "1051": {
        "character": "vær så god!",
        "letter": "you're welcome! please! here you are!"
    },
    "1052": {
        "character": "å smake",
        "letter": "to taste"
    },
    "1053": {
        "character": "smakte",
        "letter": "tasted"
    },
    "1054": {
        "character": "en hemmelighet",
        "letter": "a secret"
    },
    "1055": {
        "character": "en tid",
        "letter": "a time"
    },
    "1056": {
        "character": "det er på tide å...",
        "letter": "it is time to..."
    },
    "1057": {
        "character": "en sannhet",
        "letter": "a truth"
    },
    "1058": {
        "character": "sent",
        "letter": "late"
    },
    "1059": {
        "character": "for sent",
        "letter": "too late"
    },
    "1060": {
        "character": "en regning",
        "letter": "a bill"
    },
    "1061": {
        "character": "så klart",
        "letter": "of course"
    },
    "1062": {
        "character": "det blir...",
        "letter": "That is.../That will be..."
    },
    "1063": {
        "character": "å bekrefte",
        "letter": "to confirm"
    },
    "1064": {
        "character": "bekreftet",
        "letter": "confirmed"
    },
    "1065": {
        "character": "Ha en fin dag",
        "letter": "Have a nice day"
    },
    "1066": {
        "character": "en time",
        "letter": "an hour"
    },
    "1067": {
        "character": "kafeteria",
        "letter": "canteen, cafeteria"
    },
    "1068": {
        "character": "matpakke",
        "letter": "food pack"
    },
    "1069": {
        "character": "ledig",
        "letter": "free, vacant, disengaged, unoccupied, spare"
    },
    "1070": {
        "character": "å anbefale",
        "letter": "to recommend"
    },
    "1071": {
        "character": "anbefalte",
        "letter": "recommended"
    },
    "1072": {
        "character": "en rødvin",
        "letter": "a red wine"
    },
    "1073": {
        "character": "en rett",
        "letter": "a dish"
    },
    "1074": {
        "character": "vegetariansk",
        "letter": "vegetarian"
    },
    "1075": {
        "character": "et øl",
        "letter": "a beer"
    },
    "1076": {
        "character": "en øl",
        "letter": "a glass of beer"
    },
    "1077": {
        "character": "dessverre",
        "letter": "unfortunately"
    },
    "1078": {
        "character": "hjemme",
        "letter": "at home"
    },
    "1079": {
        "character": "ei bøtte",
        "letter": "a bucket"
    },
    "1080": {
        "character": "å tømme",
        "letter": "to empty"
    },
    "1081": {
        "character": "tømte",
        "letter": "emptied"
    },
    "1082": {
        "character": "en do",
        "letter": "a toilet"
    },
    "1083": {
        "character": "en støvsuger",
        "letter": "a vacuum cleaner"
    },
    "1084": {
        "character": "å bråke",
        "letter": "to make noise"
    },
    "1085": {
        "character": "bråkte",
        "letter": "made noise"
    },
    "1086": {
        "character": "å skje",
        "letter": "to happen"
    },
    "1087": {
        "character": "skjedde",
        "letter": "happened"
    },
    "1088": {
        "character": "nervøs",
        "letter": "nervous"
    },
    "1089": {
        "character": "ei hylle",
        "letter": "a shelf"
    },
    "1090": {
        "character": "et grep",
        "letter": "a grip"
    },
    "1091": {
        "character": "fast",
        "letter": "firm"
    },
    "1092": {
        "character": "å mate",
        "letter": "to feed"
    },
    "1093": {
        "character": "matet",
        "letter": "fed"
    },
    "1094": {
        "character": "en katt",
        "letter": "a cat"
    },
    "1095": {
        "character": "å stryke",
        "letter": "to stroke / to iron / to press"
    },
    "1096": {
        "character": "strøk",
        "letter": "ironed"
    },
    "1097": {
        "character": "har strøket",
        "letter": "have ironed"
    },
    "1098": {
        "character": "å gå en tur",
        "letter": "to take a walk"
    },
    "1099": {
        "character": "har gått",
        "letter": "have walked"
    },
    "1100": {
        "character": "en hund",
        "letter": "a dog"
    },
    "1101": {
        "character": "å feie",
        "letter": "to sweep"
    },
    "1102": {
        "character": "feide",
        "letter": "swept"
    },
    "1103": {
        "character": "ei trapp",
        "letter": "a staircase, stairs"
    },
    "1104": {
        "character": "Hvor er det blitt av...",
        "letter": "Where did ... go? What has become of ...?"
    },
    "1105": {
        "character": "kjempe-",
        "letter": "extremely (prefix)"
    },
    "1106": {
        "character": "kjempefin",
        "letter": "amazing, really good"
    },
    "1107": {
        "character": "en TV-serie",
        "letter": "a TV series"
    },
    "1108": {
        "character": "en fjernkontroll",
        "letter": "a remote control"
    },
    "1109": {
        "character": "å være spent",
        "letter": "to be excited"
    },
    "1110": {
        "character": "å finne fram noe",
        "letter": "to find something, to pull something out from"
    },
    "1111": {
        "character": "en boks",
        "letter": "a box"
    },
    "1112": {
        "character": "en knapp",
        "letter": "a button"
    },
    "1113": {
        "character": "forbauset",
        "letter": "amazed, astonished"
    },
    "1114": {
        "character": "en skjerm",
        "letter": "a screen"
    },
    "1115": {
        "character": "altså",
        "letter": "thus; so"
    },
    "1116": {
        "character": "gøy",
        "letter": "fun"
    },
    "1117": {
        "character": "å ha det gøy",
        "letter": "to have fun"
    },
    "1118": {
        "character": "å le",
        "letter": "to laugh"
    },
    "1119": {
        "character": "ler",
        "letter": "laugh (Present)"
    },
    "1120": {
        "character": "lo",
        "letter": "laugh (Past)"
    },
    "1121": {
        "character": "har ledd",
        "letter": "have laughed"
    },
    "1122": {
        "character": "å kjede seg",
        "letter": "to be bored"
    },
    "1123": {
        "character": "interessant",
        "letter": "interesting, intriguing"
    },
    "1124": {
        "character": "å synes",
        "letter": "to think"
    },
    "1125": {
        "character": "syntes over",
        "letter": "thought over"
    },
    "1126": {
        "character": "en reklame",
        "letter": "an advertisement"
    },
    "1127": {
        "character": "å bytte",
        "letter": "to change, exchange"
    },
    "1128": {
        "character": "byttet",
        "letter": "changed, exchanged"
    },
    "1129": {
        "character": "en kanal",
        "letter": "a channel"
    },
    "1130": {
        "character": "å forsvinne",
        "letter": "to disappear"
    },
    "1131": {
        "character": "forsvant",
        "letter": "disappear (Past)"
    },
    "1132": {
        "character": "har forsvunnet",
        "letter": "have disappeared"
    },
    "1133": {
        "character": "å lese",
        "letter": "to read"
    },
    "1134": {
        "character": "leste",
        "letter": "read, study (past)"
    },
    "1135": {
        "character": "langsomt",
        "letter": "slowly"
    },
    "1136": {
        "character": "en nyhet",
        "letter": "a piece of news"
    },
    "1137": {
        "character": "kveldsnyhetene",
        "letter": "evening news"
    },
    "1138": {
        "character": "vi sees!",
        "letter": "see you (literally: (until) we see each other (again))"
    },
    "1139": {
        "character": "halv",
        "letter": "half"
    },
    "1140": {
        "character": "ei panne",
        "letter": "a pan"
    },
    "1141": {
        "character": "velkommen til...",
        "letter": "welcome to..."
    },
    "1142": {
        "character": "raskt",
        "letter": "quickly"
    },
    "1143": {
        "character": "å nøle",
        "letter": "to hesitate"
    },
    "1144": {
        "character": "nølte",
        "letter": "hesitated"
    },
    "1145": {
        "character": "en sjanse",
        "letter": "a chance"
    },
    "1146": {
        "character": "en tekstmelding",
        "letter": "a text message (SMS)"
    },
    "1147": {
        "character": "å chatte",
        "letter": "to chat"
    },
    "1148": {
        "character": "ei venninne",
        "letter": "a (female) friend"
    },
    "1149": {
        "character": "en radio",
        "letter": "a radio"
    },
    "1150": {
        "character": "en musikk",
        "letter": "a music"
    },
    "1151": {
        "character": "nettet",
        "letter": "Internet"
    },
    "1152": {
        "character": "en Internett",
        "letter": "Internet"
    },
    "1153": {
        "character": "fantastisk",
        "letter": "amazing"
    },
    "1154": {
        "character": "et kamera",
        "letter": "a camera"
    },
    "1155": {
        "character": "høy",
        "letter": "loud, high, tall"
    },
    "1156": {
        "character": "et fjell",
        "letter": "a mountain"
    },
    "1157": {
        "character": "en fjord",
        "letter": "a fjord, a typical Norwegian word for a geographical inlet"
    },
    "1158": {
        "character": "ei øy",
        "letter": "an island"
    },
    "1159": {
        "character": "begeistret",
        "letter": "excited"
    },
    "1160": {
        "character": "et land",
        "letter": "here: a landscape, also: a country"
    },
    "1161": {
        "character": "å ønske",
        "letter": "to wish"
    },
    "1162": {
        "character": "ønsket",
        "letter": "wish, want (past)"
    },
    "1163": {
        "character": "vanligvis",
        "letter": "usually, generally"
    },
    "1164": {
        "character": "snill",
        "letter": "kind"
    },
    "1165": {
        "character": "å være enig",
        "letter": "to agree"
    },
    "1166": {
        "character": "virkelig",
        "letter": "really"
    },
    "1167": {
        "character": "å fortsette",
        "letter": "to continue"
    },
    "1168": {
        "character": "fortsatte",
        "letter": "continued"
    },
    "1169": {
        "character": "har fortsatt",
        "letter": "have continued"
    },
    "1170": {
        "character": "å behandle",
        "letter": "to treat"
    },
    "1171": {
        "character": "behandlet",
        "letter": "treated"
    },
    "1172": {
        "character": "å skade",
        "letter": "to damage, to harm"
    },
    "1173": {
        "character": "skadet",
        "letter": "damaged, harmed"
    },
    "1174": {
        "character": "en julenisse",
        "letter": "a Norwegian mythological creature with a similar role as Santa Claus"
    },
    "1175": {
        "character": "en blanding",
        "letter": "a mixture"
    },
    "1176": {
        "character": "å bestemme seg",
        "letter": "to decide"
    },
    "1177": {
        "character": "bestemte seg",
        "letter": "decided"
    },
    "1178": {
        "character": "å bli kjent (med)",
        "letter": "to get to know"
    },
    "1179": {
        "character": "heldigvis",
        "letter": "fortunately, luckily"
    },
    "1180": {
        "character": "opptatt",
        "letter": "engaged, busy"
    },
    "1181": {
        "character": "annen",
        "letter": "other, second, else"
    },
    "1182": {
        "character": "været",
        "letter": "the weather"
    },
    "1183": {
        "character": "en temperatur",
        "letter": "temperature"
    },
    "1184": {
        "character": "en grad",
        "letter": "a degree"
    },
    "1185": {
        "character": "en kuldegrad",
        "letter": "minus degree"
    },
    "1186": {
        "character": "minusgrad",
        "letter": "minus degree"
    },
    "1187": {
        "character": "en varmegrad",
        "letter": "plus degree"
    },
    "1188": {
        "character": "plussgrad",
        "letter": "plus degree"
    },
    "1189": {
        "character": "en vind",
        "letter": "a wind"
    },
    "1190": {
        "character": "en bris",
        "letter": "a breeze"
    },
    "1191": {
        "character": "en kuling",
        "letter": "a high wind/moderate gale"
    },
    "1192": {
        "character": "en storm",
        "letter": "a storm"
    },
    "1193": {
        "character": "en orkan",
        "letter": "a hurricane"
    },
    "1194": {
        "character": "ei tåke",
        "letter": "fog"
    },
    "1195": {
        "character": "et regn",
        "letter": "rain"
    },
    "1196": {
        "character": "en regnbyge",
        "letter": "a rain shower"
    },
    "1197": {
        "character": "en snø",
        "letter": "a snow"
    },
    "1198": {
        "character": "sludd",
        "letter": "sleet"
    },
    "1199": {
        "character": "et yr",
        "letter": "drizzle"
    },
    "1200": {
        "character": "nedbør",
        "letter": "precipitation/rainfall"
    },
    "1201": {
        "character": "sola skinner",
        "letter": "the sun is shining"
    },
    "1202": {
        "character": "skydekke",
        "letter": "cloud cover"
    },
    "1203": {
        "character": "overskyet",
        "letter": "cloudy"
    },
    "1204": {
        "character": "delvis skyet",
        "letter": "partly clouded"
    },
    "1205": {
        "character": "opphold",
        "letter": "it's not raining anymore"
    },
    "1206": {
        "character": "klart",
        "letter": "clear"
    },
    "1207": {
        "character": "vår",
        "letter": "spring"
    },
    "1208": {
        "character": "sommer",
        "letter": "summer"
    },
    "1209": {
        "character": "høst",
        "letter": "autumn, harvest, fall, harvest"
    },
    "1210": {
        "character": "vinter",
        "letter": "winter"
    },
    "1211": {
        "character": "om våren",
        "letter": "in spring"
    },
    "1212": {
        "character": "i vår",
        "letter": "this year's spring"
    },
    "1213": {
        "character": "tidlig på våren",
        "letter": "early in the spring"
    },
    "1214": {
        "character": "sent på våren",
        "letter": "late in spring"
    },
    "1215": {
        "character": "Januar",
        "letter": "January"
    },
    "1216": {
        "character": "Februar",
        "letter": "February"
    },
    "1217": {
        "character": "Mars",
        "letter": "March"
    },
    "1218": {
        "character": "April",
        "letter": "April"
    },
    "1219": {
        "character": "Mai",
        "letter": "May"
    },
    "1220": {
        "character": "Juni",
        "letter": "June"
    },
    "1221": {
        "character": "Juli",
        "letter": "July"
    },
    "1222": {
        "character": "August",
        "letter": "August"
    },
    "1223": {
        "character": "September",
        "letter": "September"
    },
    "1224": {
        "character": "Oktober",
        "letter": "October"
    },
    "1225": {
        "character": "November",
        "letter": "November"
    },
    "1226": {
        "character": "Desember",
        "letter": "December"
    },
    "1227": {
        "character": "fellesferie",
        "letter": "general staff holiday"
    },
    "1228": {
        "character": "jul",
        "letter": "Christmas"
    },
    "1229": {
        "character": "høstferie",
        "letter": "Autumn holiday"
    },
    "1230": {
        "character": "mørketid",
        "letter": "Polar Night"
    },
    "1231": {
        "character": "påske",
        "letter": "easter"
    },
    "1232": {
        "character": "midnattssol",
        "letter": "Midnight Sun"
    },
    "1233": {
        "character": "sankthans",
        "letter": "Midsummer"
    },
    "1234": {
        "character": "nyttår",
        "letter": "New Year"
    },
    "1235": {
        "character": "første",
        "letter": "first"
    },
    "1236": {
        "character": "andre",
        "letter": "second"
    },
    "1237": {
        "character": "tredje",
        "letter": "third"
    },
    "1238": {
        "character": "fjerde",
        "letter": "fourth"
    },
    "1239": {
        "character": "femte",
        "letter": "fifth"
    },
    "1240": {
        "character": "sjette",
        "letter": "sixth"
    },
    "1241": {
        "character": "sjuende",
        "letter": "seventh"
    },
    "1242": {
        "character": "syvende",
        "letter": "seventh"
    },
    "1243": {
        "character": "åttende",
        "letter": "eighth"
    },
    "1244": {
        "character": "niende",
        "letter": "ninth"
    },
    "1245": {
        "character": "tiende",
        "letter": "tenth"
    },
    "1246": {
        "character": "ellevte",
        "letter": "eleventh"
    },
    "1247": {
        "character": "tolvte",
        "letter": "twelfth"
    },
    "1248": {
        "character": "trettende",
        "letter": "thirteenth"
    },
    "1249": {
        "character": "fjortende",
        "letter": "fourteenth"
    },
    "1250": {
        "character": "femtende",
        "letter": "fifteenth"
    },
    "1251": {
        "character": "sekstende",
        "letter": "sixteenth"
    },
    "1252": {
        "character": "syttende",
        "letter": "seventeenth"
    },
    "1253": {
        "character": "attende",
        "letter": "eighteenth"
    },
    "1254": {
        "character": "nittende",
        "letter": "nineteenth"
    },
    "1255": {
        "character": "tjuende",
        "letter": "twentieth"
    },
    "1256": {
        "character": "tyvende",
        "letter": "twentieth"
    },
    "1257": {
        "character": "tjueførste",
        "letter": "twenty-first"
    },
    "1258": {
        "character": "enogtyvende",
        "letter": "twenty-first"
    },
    "1259": {
        "character": "tjueandre",
        "letter": "twenty-second"
    },
    "1260": {
        "character": "toogtyvende",
        "letter": "twenty-second"
    },
    "1261": {
        "character": "trettiende",
        "letter": "thirty"
    },
    "1262": {
        "character": "tredevte",
        "letter": "thirty"
    },
    "1263": {
        "character": "å handle om",
        "letter": "to be about"
    },
    "1264": {
        "character": "handlet",
        "letter": "was about"
    },
    "1265": {
        "character": "å ha lyst til å ...",
        "letter": "to want to"
    },
    "1266": {
        "character": "ute",
        "letter": "out, outside"
    },
    "1267": {
        "character": "så vidt ...",
        "letter": "insofar as, as far as ..."
    },
    "1268": {
        "character": "å reise til",
        "letter": "to travel to"
    },
    "1269": {
        "character": "reiste",
        "letter": "travel (past)"
    },
    "1270": {
        "character": "et utland",
        "letter": "a foreign country, abroad"
    },
    "1271": {
        "character": "en titt",
        "letter": "a glance"
    },
    "1272": {
        "character": "å ta en titt på",
        "letter": "to glance at"
    },
    "1273": {
        "character": "Jaså.",
        "letter": "I see!"
    },
    "1274": {
        "character": "Jaså?",
        "letter": "Is it? (Ironical)"
    },
    "1275": {
        "character": "Oslo",
        "letter": "capital of Norway"
    },
    "1276": {
        "character": "Tja!",
        "letter": "Oh well... (relenting)"
    },
    "1277": {
        "character": "en del",
        "letter": "a part, here: quite a bit"
    },
    "1278": {
        "character": "nord",
        "letter": "north"
    },
    "1279": {
        "character": "et fly",
        "letter": "an airplane"
    },
    "1280": {
        "character": "ei hurtigrute",
        "letter": "a Norwegian passenger and freight ship that still travels along the west coast"
    },
    "1281": {
        "character": "hvis",
        "letter": "if"
    },
    "1282": {
        "character": "å puste",
        "letter": "to breathe"
    },
    "1283": {
        "character": "dyp",
        "letter": "deep"
    },
    "1284": {
        "character": "komplisert",
        "letter": "complicated"
    },
    "1285": {
        "character": "en kilometer",
        "letter": "a kilometre"
    },
    "1286": {
        "character": "et tog",
        "letter": "a train"
    },
    "1287": {
        "character": "Trondheim",
        "letter": "a city in central Norway"
    },
    "1288": {
        "character": "derfra",
        "letter": "thence, from there"
    },
    "1289": {
        "character": "gjennom",
        "letter": "through"
    },
    "1290": {
        "character": "ei luft",
        "letter": "an air"
    },
    "1291": {
        "character": "skummel",
        "letter": "scary, sinister, murky, creepy"
    },
    "1292": {
        "character": "en båt",
        "letter": "a boat"
    },
    "1293": {
        "character": "hver",
        "letter": "every, each"
    },
    "1294": {
        "character": "et problem",
        "letter": "a problem"
    },
    "1295": {
        "character": "en innbygger",
        "letter": "a resident"
    },
    "1296": {
        "character": "et reinsdyr",
        "letter": "a reindeer"
    },
    "1297": {
        "character": "hoved-",
        "letter": "prime, principal, main, chief"
    },
    "1298": {
        "character": "en hovedstad",
        "letter": "a capital city"
    },
    "1299": {
        "character": "riktig",
        "letter": "correct, right"
    },
    "1300": {
        "character": "en regjering",
        "letter": "a government"
    },
    "1301": {
        "character": "en konge",
        "letter": "a king"
    },
    "1302": {
        "character": "et fylke",
        "letter": "a county (administrative region of Norway)"
    },
    "1303": {
        "character": "en landsdel",
        "letter": "a region, part of a country"
    },
    "1304": {
        "character": "å kjøre",
        "letter": "to drive"
    },
    "1305": {
        "character": "kjørte",
        "letter": "drove"
    },
    "1306": {
        "character": "dansk",
        "letter": "danish"
    },
    "1307": {
        "character": "å varme opp",
        "letter": "to heat up, to warm"
    },
    "1308": {
        "character": "europeisk",
        "letter": "Eoropean"
    },
    "1309": {
        "character": "en trikk",
        "letter": "a tram"
    },
    "1310": {
        "character": "elektrisk",
        "letter": "electric, electric(al)"
    },
    "1311": {
        "character": "et gatelys",
        "letter": "a streetlight"
    },
    "1312": {
        "character": "en utkant",
        "letter": "fringe, outskirts, regions far from the city"
    },
    "1313": {
        "character": "utenfor",
        "letter": "outside"
    },
    "1314": {
        "character": "en region",
        "letter": "a region"
    },
    "1315": {
        "character": "langt fra",
        "letter": "far from"
    },
    "1316": {
        "character": "et sykehus",
        "letter": "a hospital"
    },
    "1317": {
        "character": "en informasjon",
        "letter": "information"
    },
    "1318": {
        "character": "en nabo",
        "letter": "a neighbor"
    },
    "1319": {
        "character": "offentlig",
        "letter": "public"
    },
    "1320": {
        "character": "å tjene",
        "letter": "to earn"
    },
    "1321": {
        "character": "tjente",
        "letter": "earned"
    },
    "1322": {
        "character": "født",
        "letter": "born"
    },
    "1323": {
        "character": "en musiker",
        "letter": "a musician"
    },
    "1324": {
        "character": "musikere",
        "letter": "musicians"
    },
    "1325": {
        "character": "en kunstner",
        "letter": "an artist"
    },
    "1326": {
        "character": "kunstnere",
        "letter": "artists"
    },
    "1327": {
        "character": "stolt",
        "letter": "proud"
    },
    "1328": {
        "character": "å gjette",
        "letter": "to guess"
    },
    "1329": {
        "character": "gjettet",
        "letter": "guessed"
    },
    "1330": {
        "character": "å invitere",
        "letter": "to invite"
    },
    "1331": {
        "character": "inviterte",
        "letter": "invited"
    },
    "1332": {
        "character": "å gråte",
        "letter": "to cry"
    },
    "1333": {
        "character": "gråter",
        "letter": "cries"
    },
    "1334": {
        "character": "gråt",
        "letter": "cried"
    },
    "1335": {
        "character": "har grått",
        "letter": "have cried"
    },
    "1336": {
        "character": "et klesskap",
        "letter": "a wardrobe"
    },
    "1337": {
        "character": "en genser",
        "letter": "a sweater"
    },
    "1338": {
        "character": "genseren",
        "letter": "the sweater"
    },
    "1339": {
        "character": "gensere",
        "letter": "sweaters"
    },
    "1340": {
        "character": "genserne",
        "letter": "the sweaters"
    },
    "1341": {
        "character": "en bukse",
        "letter": "pants, trousers"
    },
    "1342": {
        "character": "et skjørt",
        "letter": "a skirt"
    },
    "1343": {
        "character": "å ombestemme seg",
        "letter": "to change one's mind"
    },
    "1344": {
        "character": "ombestemte seg",
        "letter": "changed one's mind"
    },
    "1345": {
        "character": "isteden",
        "letter": "instead"
    },
    "1346": {
        "character": "et undertøy",
        "letter": "underwear"
    },
    "1347": {
        "character": "en sokk",
        "letter": "sock"
    },
    "1348": {
        "character": "ei regnjakke",
        "letter": "a cagoule/light raincoat"
    },
    "1349": {
        "character": "ei lue",
        "letter": "a cap"
    },
    "1350": {
        "character": "et skjerf",
        "letter": "a scarf"
    },
    "1351": {
        "character": "en vott",
        "letter": "a mitten"
    },
    "1352": {
        "character": "i tillegg",
        "letter": "in addition"
    },
    "1353": {
        "character": "helst",
        "letter": "preferably"
    },
    "1354": {
        "character": "en fjellsko",
        "letter": "an alpine boot/hiking boot"
    },
    "1355": {
        "character": "enda",
        "letter": "yet, still, though"
    },
    "1356": {
        "character": "en T-skjorte",
        "letter": "a T-shirt"
    },
    "1357": {
        "character": "holder",
        "letter": "holds"
    },
    "1358": {
        "character": "å holde med",
        "letter": "to be enough"
    },
    "1359": {
        "character": "Det holder med én skjorte.",
        "letter": "One shirt is enough."
    },
    "1360": {
        "character": "ei tann",
        "letter": "a tooth"
    },
    "1361": {
        "character": "tanna",
        "letter": "the tooth"
    },
    "1362": {
        "character": "tenner",
        "letter": "teeth"
    },
    "1363": {
        "character": "en tannbørste",
        "letter": "a toothbrush"
    },
    "1364": {
        "character": "en tannkrem",
        "letter": "a toothpaste"
    },
    "1365": {
        "character": "å inneholde",
        "letter": "to contain"
    },
    "1366": {
        "character": "inneholder",
        "letter": "contains"
    },
    "1367": {
        "character": "inneholdt",
        "letter": "contained"
    },
    "1368": {
        "character": "forskjellig",
        "letter": "different, various"
    },
    "1369": {
        "character": "en medisin",
        "letter": "a drug, medicine"
    },
    "1370": {
        "character": "skikkelig",
        "letter": "pretty, quite"
    },
    "1371": {
        "character": "selvsagt",
        "letter": "obvious, of course"
    },
    "1372": {
        "character": "spesiell",
        "letter": "special"
    },
    "1373": {
        "character": "leddsetninger",
        "letter": "subordinate clauses"
    },
    "1374": {
        "character": "subjunksjoner",
        "letter": "subordinating clauses"
    },
    "1375": {
        "character": "en underbukse",
        "letter": "a pair of underpants"
    },
    "1376": {
        "character": "en underskjorte",
        "letter": "an undershirt"
    },
    "1377": {
        "character": "alene",
        "letter": "alone"
    },
    "1378": {
        "character": "å snike inn",
        "letter": "to sneak in"
    },
    "1379": {
        "character": "sneket",
        "letter": "creep/sneak (Past Participle)"
    },
    "1380": {
        "character": "snek",
        "letter": "creep/sneak (Past)"
    },
    "1381": {
        "character": "spennende",
        "letter": "exciting"
    },
    "1382": {
        "character": "en veske",
        "letter": "a handbag"
    },
    "1383": {
        "character": "å komme seg",
        "letter": "to come, to get"
    },
    "1384": {
        "character": "tenk deg",
        "letter": "guess what, imagine"
    },
    "1385": {
        "character": "ei uke",
        "letter": "a week"
    },
    "1386": {
        "character": "dersom",
        "letter": "if, in case, whether"
    },
    "1387": {
        "character": "det høres ... ut",
        "letter": "it sounds ..."
    },
    "1388": {
        "character": "Hva skal hun i Tromsø?",
        "letter": "What will she do in Tromsø?"
    },
    "1389": {
        "character": "å ane",
        "letter": "to have a clue"
    },
    "1390": {
        "character": "ante",
        "letter": "had a clue"
    },
    "1391": {
        "character": "å spille en rolle",
        "letter": "to play a role, be important"
    },
    "1392": {
        "character": "spilte en rolle",
        "letter": "played a role"
    },
    "1393": {
        "character": "hysj",
        "letter": "pst! hush! be quiet!"
    },
    "1394": {
        "character": "en stund",
        "letter": "a while"
    },
    "1395": {
        "character": "en apparat",
        "letter": "a machine, an appliance"
    },
    "1396": {
        "character": "en mobiltelefon",
        "letter": "a mobile telephone"
    },
    "1397": {
        "character": "full av",
        "letter": "full of"
    },
    "1398": {
        "character": "stadig",
        "letter": "ever, continual, regular, all the time"
    },
    "1399": {
        "character": "å savne",
        "letter": "to miss"
    },
    "1400": {
        "character": "savnet",
        "letter": "missing"
    },
    "1401": {
        "character": "noensinne",
        "letter": "ever"
    },
    "1402": {
        "character": "Jeg er ved stasjonen.",
        "letter": "I am near the station."
    },
    "1403": {
        "character": "Jeg er hos Per.",
        "letter": "I am at Per's place."
    },
    "1404": {
        "character": "Kan du stave navnet ditt?",
        "letter": "Can you spell your name?"
    },
    "1405": {
        "character": "lenge",
        "letter": "long (of time)"
    },
    "1406": {
        "character": "lenge siden",
        "letter": "long time since..."
    },
    "1407": {
        "character": "å rekke",
        "letter": "to reach, to make (it)"
    },
    "1408": {
        "character": "rakk",
        "letter": "extend/reach (Past)"
    },
    "1409": {
        "character": "rukket",
        "letter": "extend/reach (Past Participle)"
    },
    "1410": {
        "character": "en nærhet",
        "letter": "a closeness, vicinity"
    },
    "1411": {
        "character": "å flytte",
        "letter": "to move"
    },
    "1412": {
        "character": "flyttet",
        "letter": "moved"
    },
    "1413": {
        "character": "hektisk",
        "letter": "hectic"
    },
    "1414": {
        "character": "å ha det travelt",
        "letter": "to be busy"
    },
    "1415": {
        "character": "selv om",
        "letter": "even though"
    },
    "1416": {
        "character": "å trives",
        "letter": "thrive"
    },
    "1417": {
        "character": "trivdes",
        "letter": "thrive, enjoy (past)"
    },
    "1418": {
        "character": "ensom",
        "letter": "lonely"
    },
    "1419": {
        "character": "å stoppe",
        "letter": "to stop"
    },
    "1420": {
        "character": "stoppet",
        "letter": "stopped"
    },
    "1421": {
        "character": "neste",
        "letter": "next"
    },
    "1422": {
        "character": "å komme fram",
        "letter": "to arrive"
    },
    "1423": {
        "character": "å krysse",
        "letter": "to cross"
    },
    "1424": {
        "character": "krysset",
        "letter": "crossed"
    },
    "1425": {
        "character": "å gå av",
        "letter": "to get off (the bus, the tram)"
    },
    "1426": {
        "character": "en trening",
        "letter": "a practice"
    },
    "1427": {
        "character": "en fotballtrening",
        "letter": "soccer practice"
    },
    "1428": {
        "character": "likevel",
        "letter": "nevertheless"
    },
    "1429": {
        "character": "åpenbart",
        "letter": "obviously"
    },
    "1430": {
        "character": "sulten",
        "letter": "hungry"
    },
    "1431": {
        "character": "en kasserolle",
        "letter": "a saucepan"
    },
    "1432": {
        "character": "en indrefilet",
        "letter": "a tenderloin"
    },
    "1433": {
        "character": "en okse",
        "letter": "a beef"
    },
    "1434": {
        "character": "en fløte",
        "letter": "cream"
    },
    "1435": {
        "character": "flott",
        "letter": "nice, wonderful"
    },
    "1436": {
        "character": "en svigersønn",
        "letter": "a son-in-law"
    },
    "1437": {
        "character": "nei da",
        "letter": "not really, nah"
    },
    "1438": {
        "character": "å hate",
        "letter": "to hate"
    },
    "1439": {
        "character": "hatet",
        "letter": "hated"
    },
    "1440": {
        "character": "en ridetime",
        "letter": "a riding lesson"
    },
    "1441": {
        "character": "en sjakk",
        "letter": "chess"
    },
    "1442": {
        "character": "å spille sjakk",
        "letter": "to play chess"
    },
    "1443": {
        "character": "å ri",
        "letter": "to ride on horseback"
    },
    "1444": {
        "character": "red",
        "letter": "ride (Past)"
    },
    "1445": {
        "character": "har ridd",
        "letter": "have ridden"
    },
    "1446": {
        "character": "en hest",
        "letter": "a horse"
    },
    "1447": {
        "character": "deilig",
        "letter": "great, wonderful"
    },
    "1448": {
        "character": "en fritid",
        "letter": "spare time, leisure"
    },
    "1449": {
        "character": "en aktivitet",
        "letter": "an activity"
    },
    "1450": {
        "character": "en fritidsaktivitet",
        "letter": "a leisure activity"
    },
    "1451": {
        "character": "et dataspill",
        "letter": "a computer game"
    },
    "1452": {
        "character": "mens",
        "letter": "while, whilst"
    },
    "1453": {
        "character": "å hviske",
        "letter": "to whisper"
    },
    "1454": {
        "character": "hvisket",
        "letter": "whispered"
    },
    "1455": {
        "character": "å virke",
        "letter": "to seem"
    },
    "1456": {
        "character": "virket",
        "letter": "seemed"
    },
    "1457": {
        "character": "lav",
        "letter": "quiet, low"
    },
    "1458": {
        "character": "flau",
        "letter": "embarrassing"
    },
    "1459": {
        "character": "å miste",
        "letter": "to lose"
    },
    "1460": {
        "character": "mistet",
        "letter": "lost"
    },
    "1461": {
        "character": "langt",
        "letter": "long (distance)"
    },
    "1462": {
        "character": "en lang vei",
        "letter": "a long road"
    },
    "1463": {
        "character": "ei lang tid",
        "letter": "a long time"
    },
    "1464": {
        "character": "Vi må gå langt.",
        "letter": "We have to walk far."
    },
    "1465": {
        "character": "Vi må vente lenge.",
        "letter": "We have to wait long."
    },
    "1466": {
        "character": "å elske",
        "letter": "to love"
    },
    "1467": {
        "character": "elsket",
        "letter": "loved"
    },
    "1468": {
        "character": "en sport",
        "letter": "sports"
    },
    "1469": {
        "character": "å trene",
        "letter": "to work out, to train"
    },
    "1470": {
        "character": "trente",
        "letter": "worked out, trained"
    },
    "1471": {
        "character": "en basketball",
        "letter": "basketball"
    },
    "1472": {
        "character": "en håndball",
        "letter": "handball"
    },
    "1473": {
        "character": "en fotball",
        "letter": "soccer"
    },
    "1474": {
        "character": "frustrert",
        "letter": "frustrated"
    },
    "1475": {
        "character": "et mesterskap",
        "letter": "a championship"
    },
    "1476": {
        "character": "en formiddag",
        "letter": "a (late) morning"
    },
    "1477": {
        "character": "et lag",
        "letter": "here: a team"
    },
    "1478": {
        "character": "Ålesund",
        "letter": "a town in Western Norway"
    },
    "1479": {
        "character": "turn",
        "letter": "gymnastics"
    },
    "1480": {
        "character": "en natur",
        "letter": "nature"
    },
    "1481": {
        "character": "eneste",
        "letter": "only, single, sole"
    },
    "1482": {
        "character": "hver eneste",
        "letter": "every single"
    },
    "1483": {
        "character": "ei arbeidsuke",
        "letter": "a working week"
    },
    "1484": {
        "character": "en energi",
        "letter": "energy"
    },
    "1485": {
        "character": "å klatre",
        "letter": "to climb"
    },
    "1486": {
        "character": "klatret",
        "letter": "climbed"
    },
    "1487": {
        "character": "å fiske",
        "letter": "to fish"
    },
    "1488": {
        "character": "fisket",
        "letter": "fishing"
    },
    "1489": {
        "character": "et kulturmenneske",
        "letter": "a person who enjoys culture"
    },
    "1490": {
        "character": "en kveld",
        "letter": "an evening"
    },
    "1491": {
        "character": "en fredagskveld",
        "letter": "a Friday night"
    },
    "1492": {
        "character": "en konsert",
        "letter": "a concert"
    },
    "1493": {
        "character": "et konserthus",
        "letter": "a concert hall"
    },
    "1494": {
        "character": "et teater",
        "letter": "a theatre"
    },
    "1495": {
        "character": "teatret",
        "letter": "the theatre"
    },
    "1496": {
        "character": "teatre",
        "letter": "theatres"
    },
    "1497": {
        "character": "teatrene",
        "letter": "the theatres"
    },
    "1498": {
        "character": "all slags",
        "letter": "all sorts of"
    },
    "1499": {
        "character": "klassisk",
        "letter": "classical"
    },
    "1500": {
        "character": "jazz",
        "letter": "jazz"
    },
    "1501": {
        "character": "en fiolin",
        "letter": "a violin"
    },
    "1502": {
        "character": "en gitar",
        "letter": "a guitar"
    },
    "1503": {
        "character": "fullstendig",
        "letter": "complete"
    },
    "1504": {
        "character": "en kommune",
        "letter": "a municipality"
    },
    "1505": {
        "character": "å fikse",
        "letter": "to arrange"
    },
    "1506": {
        "character": "fikset",
        "letter": "arranged"
    },
    "1507": {
        "character": "super",
        "letter": "super, perfect"
    },
    "1508": {
        "character": "ei flaske",
        "letter": "a bottle"
    },
    "1509": {
        "character": "en vin",
        "letter": "a wine"
    },
    "1510": {
        "character": "å håpe",
        "letter": "to hope"
    },
    "1511": {
        "character": "såpass",
        "letter": "so, kind of, such a..."
    },
    "1512": {
        "character": "pen",
        "letter": "pretty"
    },
    "1513": {
        "character": "fra nå av",
        "letter": "from now on"
    },
    "1514": {
        "character": "en blomst",
        "letter": "a flower"
    },
    "1515": {
        "character": "i bursdagsgave",
        "letter": "as a birthday present"
    },
    "1516": {
        "character": "tåpelig",
        "letter": "inane, daft, foolish, inept"
    },
    "1517": {
        "character": "urealistisk",
        "letter": "unrealistic"
    },
    "1518": {
        "character": "umulig",
        "letter": "impossible"
    },
    "1519": {
        "character": "en begynnelse",
        "letter": "a start, beginning"
    },
    "1520": {
        "character": "å be",
        "letter": "to ask for"
    },
    "1521": {
        "character": "ba",
        "letter": "asked"
    },
    "1522": {
        "character": "har bedt om",
        "letter": "have asked for"
    },
    "1523": {
        "character": "å levere",
        "letter": "to deliver, here: to return"
    },
    "1524": {
        "character": "leverte",
        "letter": "delivered"
    },
    "1525": {
        "character": "et bibliotek",
        "letter": "a library"
    },
    "1526": {
        "character": "et påskeegg",
        "letter": "an Easter egg"
    },
    "1527": {
        "character": "å legge merke",
        "letter": "to realise, to notice"
    },
    "1528": {
        "character": "la merke",
        "letter": "realised"
    },
    "1529": {
        "character": "har lagt merke",
        "letter": "have realised"
    },
    "1530": {
        "character": "sammenlignet med",
        "letter": "compared to"
    },
    "1531": {
        "character": "smart",
        "letter": "clever"
    },
    "1532": {
        "character": "en beskjed",
        "letter": "a message"
    },
    "1533": {
        "character": "en beslutning",
        "letter": "a decision"
    },
    "1534": {
        "character": "idiotisk",
        "letter": "idiotic"
    },
    "1535": {
        "character": "å legge kortene på bordet",
        "letter": "to lay the cards on the table, to be honest"
    },
    "1536": {
        "character": "håpløs",
        "letter": "hopeless"
    },
    "1537": {
        "character": "å avbryte",
        "letter": "to interrupt"
    },
    "1538": {
        "character": "avbrøt",
        "letter": "interrupted"
    },
    "1539": {
        "character": "har avbrutt",
        "letter": "have interrupted"
    },
    "1540": {
        "character": "en unnskylding",
        "letter": "an excuse"
    },
    "1541": {
        "character": "å mene",
        "letter": "to mean"
    },
    "1542": {
        "character": "mente",
        "letter": "think, mean (past)"
    },
    "1543": {
        "character": "for en ...",
        "letter": "what a ..."
    },
    "1544": {
        "character": "en overraskelse",
        "letter": "a surprise"
    },
    "1545": {
        "character": "å være sikker på",
        "letter": "to be sure of"
    },
    "1546": {
        "character": "et ord",
        "letter": "a word"
    },
    "1547": {
        "character": "å lukke",
        "letter": "to close"
    },
    "1548": {
        "character": "lukket",
        "letter": "shut"
    },
    "1549": {
        "character": "å overdrive",
        "letter": "to exaggerate"
    },
    "1550": {
        "character": "overdrev",
        "letter": "exaggerated"
    },
    "1551": {
        "character": "overdrevet",
        "letter": "exaggerated (perfect)"
    },
    "1552": {
        "character": "en fortvilelse",
        "letter": "desperation, despair"
    },
    "1553": {
        "character": "å låne",
        "letter": "to loan"
    },
    "1554": {
        "character": "lånte",
        "letter": "loaned"
    },
    "1555": {
        "character": "å stenge",
        "letter": "to close"
    },
    "1556": {
        "character": "stengte",
        "letter": "closed"
    },
    "1557": {
        "character": "en pakke",
        "letter": "a package"
    },
    "1558": {
        "character": "et frimerke",
        "letter": "a stamp"
    },
    "1559": {
        "character": "et brev",
        "letter": "a letter"
    },
    "1560": {
        "character": "å stjele",
        "letter": "to steal"
    },
    "1561": {
        "character": "stjal",
        "letter": "steal (Past)"
    },
    "1562": {
        "character": "har stjålet",
        "letter": "have stolen"
    },
    "1563": {
        "character": "en sykkel",
        "letter": "a bicycle"
    },
    "1564": {
        "character": "å anmelde",
        "letter": "to report"
    },
    "1565": {
        "character": "anmeldte",
        "letter": "reported"
    },
    "1566": {
        "character": "en politi",
        "letter": "a police"
    },
    "1567": {
        "character": "en konto",
        "letter": "an account"
    },
    "1568": {
        "character": "en bank",
        "letter": "a bank"
    },
    "1569": {
        "character": "en barnehage",
        "letter": "a kindergarten, nursery school"
    },
    "1570": {
        "character": "lett",
        "letter": "easy, readily, simple, light"
    },
    "1571": {
        "character": "en håndveske",
        "letter": "a handbag"
    },
    "1572": {
        "character": "en garderobe",
        "letter": "a wardrobe"
    },
    "1573": {
        "character": "å synes synd på",
        "letter": "to pity"
    },
    "1574": {
        "character": "en togtur",
        "letter": "a train ride"
    },
    "1575": {
        "character": "å sovne",
        "letter": "to fall asleep"
    },
    "1576": {
        "character": "sovnet",
        "letter": "fell asleep"
    },
    "1577": {
        "character": "et bråk",
        "letter": "a noise"
    },
    "1578": {
        "character": "visst",
        "letter": "probably, here: it appears"
    },
    "1579": {
        "character": "et regiontog",
        "letter": "a regional train"
    },
    "1580": {
        "character": "et natttog",
        "letter": "a night train"
    },
    "1581": {
        "character": "å slippe",
        "letter": "to get away, not have to do something"
    },
    "1582": {
        "character": "slapp",
        "letter": "let go/release (Past)"
    },
    "1583": {
        "character": "sluppet",
        "letter": "let go/release (Past Participle)"
    },
    "1584": {
        "character": "én vei",
        "letter": "one way"
    },
    "1585": {
        "character": "tur-retur",
        "letter": "round-trip"
    },
    "1586": {
        "character": "en hundrelapp",
        "letter": "a one hundred NOK note"
    },
    "1587": {
        "character": "et spor",
        "letter": "a track"
    },
    "1588": {
        "character": "bare hun ikke mister ...",
        "letter": "by no means may she lose ..."
    },
    "1589": {
        "character": "trygg",
        "letter": "safe, secure, sure, stable"
    },
    "1590": {
        "character": "å Gud!",
        "letter": "oh my God!"
    },
    "1591": {
        "character": "å selge",
        "letter": "to sell"
    },
    "1592": {
        "character": "solgte",
        "letter": "sell (Past)"
    },
    "1593": {
        "character": "solgt",
        "letter": "sell (Past Participle)"
    },
    "1594": {
        "character": "irritert",
        "letter": "irritated"
    },
    "1595": {
        "character": "hva er det?",
        "letter": "What is it? What happened?"
    },
    "1596": {
        "character": "å beklage",
        "letter": "to regret, here: to be sorry"
    },
    "1597": {
        "character": "beklaget",
        "letter": "regretted"
    },
    "1598": {
        "character": "å jobbe",
        "letter": "to work"
    },
    "1599": {
        "character": "jobbet",
        "letter": "work (past)"
    },
    "1600": {
        "character": "et tøy",
        "letter": "a fabric"
    },
    "1601": {
        "character": "en nål",
        "letter": "a needle"
    },
    "1602": {
        "character": "en tråd",
        "letter": "a thread"
    },
    "1603": {
        "character": "selvstendig",
        "letter": "independent"
    },
    "1604": {
        "character": "selvstendig næringsdrivende",
        "letter": "self-employed"
    },
    "1605": {
        "character": "å lede",
        "letter": "to lead"
    },
    "1606": {
        "character": "ledet",
        "letter": "lead"
    },
    "1607": {
        "character": "egen",
        "letter": "own, proper"
    },
    "1608": {
        "character": "en bedrift",
        "letter": "a company"
    },
    "1609": {
        "character": "å gå av med pensjon",
        "letter": "to retire"
    },
    "1610": {
        "character": "til tross for at",
        "letter": "despite of"
    },
    "1611": {
        "character": "pensjonspenger",
        "letter": "pension (money)"
    },
    "1612": {
        "character": "en Folketrygd",
        "letter": "obligatory retirement and social insurance"
    },
    "1613": {
        "character": "å spare penger",
        "letter": "to save money"
    },
    "1614": {
        "character": "sparte",
        "letter": "saved"
    },
    "1615": {
        "character": "en sydame",
        "letter": "a dressmaker (female)"
    },
    "1616": {
        "character": "å sy",
        "letter": "to sew"
    },
    "1617": {
        "character": "sydde",
        "letter": "sewed"
    },
    "1618": {
        "character": "en bachelorgrad",
        "letter": "a bachelor's degree"
    },
    "1619": {
        "character": "en høyskole",
        "letter": "a college"
    },
    "1620": {
        "character": "høgskole",
        "letter": "college"
    },
    "1621": {
        "character": "en generell studiekompetanse",
        "letter": "university admission"
    },
    "1622": {
        "character": "et studium",
        "letter": "studies (usually plural)"
    },
    "1623": {
        "character": "studiet",
        "letter": "university course (definite)"
    },
    "1624": {
        "character": "studier",
        "letter": "university course (plural)"
    },
    "1625": {
        "character": "studiene",
        "letter": "university course (definite plural)"
    },
    "1626": {
        "character": "en ambulansearbeider",
        "letter": "a paramedic"
    },
    "1627": {
        "character": "slitsom",
        "letter": "tiring"
    },
    "1628": {
        "character": "et skift",
        "letter": "a shift"
    },
    "1629": {
        "character": "en vakt",
        "letter": "a watch, duty, shift"
    },
    "1630": {
        "character": "å være ansatt",
        "letter": "to be employed"
    },
    "1631": {
        "character": "å vare",
        "letter": "to last"
    },
    "1632": {
        "character": "varte",
        "letter": "lasted"
    },
    "1633": {
        "character": "en politimann",
        "letter": "a policeman"
    },
    "1634": {
        "character": "politimenn",
        "letter": "policemen"
    },
    "1635": {
        "character": "et mål",
        "letter": "a goal"
    },
    "1636": {
        "character": "et utsikt",
        "letter": "a view, here: (job) prospects"
    },
    "1637": {
        "character": "en grunnskole",
        "letter": "general school (6-16 years)"
    },
    "1638": {
        "character": "barneskole og ungdomsskole",
        "letter": "general school (6-16)"
    },
    "1639": {
        "character": "fireårig",
        "letter": "four-year lasting"
    },
    "1640": {
        "character": "en opplæring",
        "letter": "a training"
    },
    "1641": {
        "character": "et bygg",
        "letter": "a construction"
    },
    "1642": {
        "character": "en anleggsteknikk",
        "letter": "construction technique"
    },
    "1643": {
        "character": "et murerfag",
        "letter": "a subject/course in masonry"
    },
    "1644": {
        "character": "et firma",
        "letter": "a firm/company"
    },
    "1645": {
        "character": "et svennebrev",
        "letter": "a certificate of apprenticeship (for craftsmen)"
    },
    "1646": {
        "character": "en murer",
        "letter": "a mason"
    },
    "1647": {
        "character": "et mesterbrev",
        "letter": "a master craftsman's diploma"
    },
    "1648": {
        "character": "senere",
        "letter": "later"
    },
    "1649": {
        "character": "en prosjektleder",
        "letter": "a project manager"
    },
    "1650": {
        "character": "å drømme om",
        "letter": "to dream about"
    },
    "1651": {
        "character": "drømte",
        "letter": "dreamed"
    },
    "1652": {
        "character": "en byggeleder",
        "letter": "a construction manager"
    },
    "1653": {
        "character": "å utdanne seg",
        "letter": "to educate oneself"
    },
    "1654": {
        "character": "utdannet",
        "letter": "educated"
    },
    "1655": {
        "character": "et yrke",
        "letter": "a profession"
    },
    "1656": {
        "character": "en videregående skole",
        "letter": "a high/secondary school from 16-19 (20) years"
    },
    "1657": {
        "character": "en eksamen",
        "letter": "an exam"
    },
    "1658": {
        "character": "eksamen i videregående skole",
        "letter": "A-levels"
    },
    "1659": {
        "character": "et allmennfag",
        "letter": "a general subject"
    },
    "1660": {
        "character": "å søke (på)",
        "letter": "to apply for"
    },
    "1661": {
        "character": "søkte",
        "letter": "seek, search (past)"
    },
    "1662": {
        "character": "juss",
        "letter": "law studies"
    },
    "1663": {
        "character": "en advokat",
        "letter": "a lawyer"
    },
    "1664": {
        "character": "UiO",
        "letter": "Universitet i Oslo = University of Oslo"
    },
    "1665": {
        "character": "en russefeiring",
        "letter": "party held by pupils before they finish their A-levels every May in Norway"
    },
    "1666": {
        "character": "å lære",
        "letter": "to learn"
    },
    "1667": {
        "character": "lærte",
        "letter": "teach, learn (past)"
    },
    "1668": {
        "character": "en ungdomsskole",
        "letter": "junior high school (14-16 years)"
    },
    "1669": {
        "character": "en karakter",
        "letter": "a grade (at school)"
    },
    "1670": {
        "character": "ambisiøs",
        "letter": "ambitious"
    },
    "1671": {
        "character": "en barneskole",
        "letter": "a primary school"
    },
    "1672": {
        "character": "en skolekamerat",
        "letter": "a school mate"
    },
    "1673": {
        "character": "en lærer",
        "letter": "a teacher"
    },
    "1674": {
        "character": "læreren",
        "letter": "teacher (definite)"
    },
    "1675": {
        "character": "lærere",
        "letter": "teacher (plural)"
    },
    "1676": {
        "character": "lærerne",
        "letter": "teacher (definite plural)"
    },
    "1677": {
        "character": "et yndlingsfag",
        "letter": "a favourite subject"
    },
    "1678": {
        "character": "en kroppsøving",
        "letter": "physical education"
    },
    "1679": {
        "character": "en matematikk",
        "letter": "mathematics"
    },
    "1680": {
        "character": "lysvåken",
        "letter": "wide awake"
    },
    "1681": {
        "character": "en kupé",
        "letter": "a compartment"
    },
    "1682": {
        "character": "sin",
        "letter": "hers, his, its, their"
    },
    "1683": {
        "character": "å banke",
        "letter": "to knock"
    },
    "1684": {
        "character": "banket",
        "letter": "knocked"
    },
    "1685": {
        "character": "en uniform",
        "letter": "a uniform"
    },
    "1686": {
        "character": "en konduktør",
        "letter": "a conductor"
    },
    "1687": {
        "character": "en billettkontroll",
        "letter": "ticket control"
    },
    "1688": {
        "character": "forhåpentligvis",
        "letter": "hopefully (one hopes)"
    },
    "1689": {
        "character": "vel",
        "letter": "well"
    },
    "1690": {
        "character": "en sovevogn",
        "letter": "a sleeping car"
    },
    "1691": {
        "character": "å trekke ut",
        "letter": "to pull out"
    },
    "1692": {
        "character": "trakk",
        "letter": "drag/draw (Past)"
    },
    "1693": {
        "character": "trukket",
        "letter": "drag/draw (Past Participle)"
    },
    "1694": {
        "character": "en benk",
        "letter": "a bench"
    },
    "1695": {
        "character": "en bakside",
        "letter": "a backside"
    },
    "1696": {
        "character": "sakte",
        "letter": "slowly"
    },
    "1697": {
        "character": "Lillehammer",
        "letter": "a Norwegian city north of Oslo"
    },
    "1698": {
        "character": "en høyttaler",
        "letter": "a speaker, a loudspeaker"
    },
    "1699": {
        "character": "en tunnel",
        "letter": "a tunnel"
    },
    "1700": {
        "character": "å planlegge",
        "letter": "to plan"
    },
    "1701": {
        "character": "planla",
        "letter": "planned"
    },
    "1702": {
        "character": "har planlagt",
        "letter": "have planned"
    },
    "1703": {
        "character": "en reise",
        "letter": "a journey"
    },
    "1704": {
        "character": "et reisebyrå",
        "letter": "a travel agency"
    },
    "1705": {
        "character": "en rute",
        "letter": "a route"
    },
    "1706": {
        "character": "et startsted",
        "letter": "a starting point"
    },
    "1707": {
        "character": "et målsted",
        "letter": "a destination"
    },
    "1708": {
        "character": "en T-bane",
        "letter": "a metro"
    },
    "1709": {
        "character": "en drosje",
        "letter": "a taxi"
    },
    "1710": {
        "character": "et middel",
        "letter": "a means"
    },
    "1711": {
        "character": "midler",
        "letter": "means, resources, funds"
    },
    "1712": {
        "character": "et transportmiddel",
        "letter": "a means of transport"
    },
    "1713": {
        "character": "en rabatt",
        "letter": "a discount"
    },
    "1714": {
        "character": "å validere",
        "letter": "to validate"
    },
    "1715": {
        "character": "validerte",
        "letter": "validated"
    },
    "1716": {
        "character": "en automat",
        "letter": "a machine, automat"
    },
    "1717": {
        "character": "en stemplingsautomat",
        "letter": "a validation machine"
    },
    "1718": {
        "character": "en holdeplass",
        "letter": "a stop"
    },
    "1719": {
        "character": "en avgang",
        "letter": "a departure"
    },
    "1720": {
        "character": "en ankomst",
        "letter": "an arrival"
    },
    "1721": {
        "character": "å sjekke",
        "letter": "to check"
    },
    "1722": {
        "character": "sjekket",
        "letter": "checked"
    },
    "1723": {
        "character": "en rutetabell",
        "letter": "a timetable"
    },
    "1724": {
        "character": "i rute",
        "letter": "on time"
    },
    "1725": {
        "character": "presis",
        "letter": "sharp, specific"
    },
    "1726": {
        "character": "forsinket",
        "letter": "delayed"
    },
    "1727": {
        "character": "et kjøretøy",
        "letter": "a vehicle"
    },
    "1728": {
        "character": "en bil",
        "letter": "a car"
    },
    "1729": {
        "character": "en motorsykkel",
        "letter": "a motorbike"
    },
    "1730": {
        "character": "til fots",
        "letter": "by foot"
    },
    "1731": {
        "character": "å gå til fots",
        "letter": "to walk"
    },
    "1732": {
        "character": "å passere",
        "letter": "to pass"
    },
    "1733": {
        "character": "passerte",
        "letter": "passed"
    },
    "1734": {
        "character": "hvor lenge tar ...?",
        "letter": "how long does ... take?"
    },
    "1735": {
        "character": "et drivstoff",
        "letter": "fuel"
    },
    "1736": {
        "character": "en herre",
        "letter": "a gentleman"
    },
    "1737": {
        "character": "beregnet",
        "letter": "estimated"
    },
    "1738": {
        "character": "en ankomsttid",
        "letter": "a time of arrival"
    },
    "1739": {
        "character": "å minne",
        "letter": "to remind, also: to remember"
    },
    "1740": {
        "character": "minnet",
        "letter": "reminded"
    },
    "1741": {
        "character": "en passasjer",
        "letter": "a passenger"
    },
    "1742": {
        "character": "å korrespondere",
        "letter": "to correspond"
    },
    "1743": {
        "character": "korresponderte",
        "letter": "corresponded"
    },
    "1744": {
        "character": "Bodø",
        "letter": "a city in northern Norway"
    },
    "1745": {
        "character": "fremdeles",
        "letter": "still"
    },
    "1746": {
        "character": "en gardin",
        "letter": "a curtain"
    },
    "1747": {
        "character": "et sukker",
        "letter": "sugar"
    },
    "1748": {
        "character": "greit nok",
        "letter": "good enough"
    },
    "1749": {
        "character": "akkurat",
        "letter": "exactly, precisely"
    },
    "1750": {
        "character": "en kjærlighet",
        "letter": "love"
    },
    "1751": {
        "character": "et kaos",
        "letter": "a chaos"
    },
    "1752": {
        "character": "et følelseskaos",
        "letter": "an emotional chaos"
    },
    "1753": {
        "character": "forelsket",
        "letter": "in love"
    },
    "1754": {
        "character": "å være forelsket i",
        "letter": "to be in love with"
    },
    "1755": {
        "character": "en kollega",
        "letter": "a colleague"
    },
    "1756": {
        "character": "kollegaen",
        "letter": "the colleague"
    },
    "1757": {
        "character": "kolleger",
        "letter": "colleagues"
    },
    "1758": {
        "character": "kollegene",
        "letter": "the colleagues"
    },
    "1759": {
        "character": "å kysse",
        "letter": "to kiss"
    },
    "1760": {
        "character": "kysset",
        "letter": "kissed"
    },
    "1761": {
        "character": "å krangle",
        "letter": "to quarrel"
    },
    "1762": {
        "character": "kranglet",
        "letter": "argued"
    },
    "1763": {
        "character": "ekte",
        "letter": "real"
    },
    "1764": {
        "character": "et vennskap",
        "letter": "a friendship"
    },
    "1765": {
        "character": "gift",
        "letter": "married"
    },
    "1766": {
        "character": "å skille",
        "letter": "to separate, divorce"
    },
    "1767": {
        "character": "skiltes",
        "letter": "separated, divorced"
    },
    "1768": {
        "character": "har skiltes",
        "letter": "have separated"
    },
    "1769": {
        "character": "skilt",
        "letter": "divorced"
    },
    "1770": {
        "character": "stakkars",
        "letter": "poor (you poor thing)"
    },
    "1771": {
        "character": "den stakkars",
        "letter": "the poor"
    },
    "1772": {
        "character": "mange stakkars",
        "letter": "many poor"
    },
    "1773": {
        "character": "stygg",
        "letter": "ugly"
    },
    "1774": {
        "character": "en medfølelse",
        "letter": "empathy, compassion"
    },
    "1775": {
        "character": "forresten",
        "letter": "by the way, incidentally"
    },
    "1776": {
        "character": "å stole på",
        "letter": "to trust"
    },
    "1777": {
        "character": "stolte",
        "letter": "trusted"
    },
    "1778": {
        "character": "kaldere",
        "letter": "colder"
    },
    "1779": {
        "character": "lettere",
        "letter": "easier"
    },
    "1780": {
        "character": "å orientere seg",
        "letter": "to find one's bearings"
    },
    "1781": {
        "character": "orienterte",
        "letter": "oriented"
    },
    "1782": {
        "character": "mindre",
        "letter": "smaller"
    },
    "1783": {
        "character": "færre",
        "letter": "fewer"
    },
    "1784": {
        "character": "en perrong",
        "letter": "a platform"
    },
    "1785": {
        "character": "eldre",
        "letter": "older, here: elderly"
    },
    "1786": {
        "character": "å svinge",
        "letter": "to turn"
    },
    "1787": {
        "character": "svinget",
        "letter": "turned"
    },
    "1788": {
        "character": "å takke",
        "letter": "to thank"
    },
    "1789": {
        "character": "takket",
        "letter": "thanked"
    },
    "1790": {
        "character": "å ta tid",
        "letter": "to take time"
    },
    "1791": {
        "character": "har tatt",
        "letter": "have taken"
    },
    "1792": {
        "character": "et skip",
        "letter": "a ship"
    },
    "1793": {
        "character": "et råd",
        "letter": "an advice, a tip; a council"
    },
    "1794": {
        "character": "kjedeligere",
        "letter": "more boring"
    },
    "1795": {
        "character": "om bord",
        "letter": "aboard"
    },
    "1796": {
        "character": "en resepsjon",
        "letter": "a reception desk, front desk"
    },
    "1797": {
        "character": "en lugar",
        "letter": "a cabin (on a ship)"
    },
    "1798": {
        "character": "en nøkkel",
        "letter": "a key"
    },
    "1799": {
        "character": "nøkler",
        "letter": "keys"
    },
    "1800": {
        "character": "koselig",
        "letter": "cosy"
    },
    "1801": {
        "character": "et løp",
        "letter": "a race"
    },
    "1802": {
        "character": "i løpet av",
        "letter": "during, in the course of"
    },
    "1803": {
        "character": "finere",
        "letter": "nicer, finer, prettier"
    },
    "1804": {
        "character": "ei elv",
        "letter": "a river"
    },
    "1805": {
        "character": "en katedral",
        "letter": "a cathedral"
    },
    "1806": {
        "character": "største",
        "letter": "biggest"
    },
    "1807": {
        "character": "fineste",
        "letter": "prettiest"
    },
    "1808": {
        "character": "en bygning",
        "letter": "a building"
    },
    "1809": {
        "character": "ei havn",
        "letter": "a port"
    },
    "1810": {
        "character": "billigere",
        "letter": "cheaper"
    },
    "1811": {
        "character": "å abonnere på",
        "letter": "to subscribe"
    },
    "1812": {
        "character": "abonnerte",
        "letter": "subscribed"
    },
    "1813": {
        "character": "brukt",
        "letter": "second-hand"
    },
    "1814": {
        "character": "å leie",
        "letter": "to rent"
    },
    "1815": {
        "character": "leide",
        "letter": "rented"
    },
    "1816": {
        "character": "et lån",
        "letter": "a loan"
    },
    "1817": {
        "character": "USA",
        "letter": "USA"
    },
    "1818": {
        "character": "sunn",
        "letter": "healthy"
    },
    "1819": {
        "character": "en avdeling",
        "letter": "department, compartment, branch, ward"
    },
    "1820": {
        "character": "ei pølse",
        "letter": "a sausage"
    },
    "1821": {
        "character": "røkt",
        "letter": "smoked"
    },
    "1822": {
        "character": "en fryser",
        "letter": "a freezer"
    },
    "1823": {
        "character": "skummet melk",
        "letter": "skimmed milk"
    },
    "1824": {
        "character": "ekstra",
        "letter": "extra"
    },
    "1825": {
        "character": "H-melk",
        "letter": "full cream milk"
    },
    "1826": {
        "character": "tjukk",
        "letter": "thick, here: overweight"
    },
    "1827": {
        "character": "tvert imot",
        "letter": "on the contrary"
    },
    "1828": {
        "character": "en kø",
        "letter": "a queue, line"
    },
    "1829": {
        "character": "ei kasse",
        "letter": "a cash register"
    },
    "1830": {
        "character": "ei lommebok",
        "letter": "a wallet"
    },
    "1831": {
        "character": "lommebøker",
        "letter": "wallets"
    },
    "1832": {
        "character": "å forandre seg",
        "letter": "to change"
    },
    "1833": {
        "character": "forandret seg",
        "letter": "changed"
    },
    "1834": {
        "character": "å skynde seg",
        "letter": "to hurry (up)"
    },
    "1835": {
        "character": "skyndet seg",
        "letter": "hurried (up)"
    },
    "1836": {
        "character": "ei kai",
        "letter": "a quay"
    },
    "1837": {
        "character": "imidlertid",
        "letter": "however"
    },
    "1838": {
        "character": "et område",
        "letter": "an area"
    },
    "1839": {
        "character": "nå som",
        "letter": "now as"
    },
    "1840": {
        "character": "tom",
        "letter": "inane, void, empty, vain"
    },
    "1841": {
        "character": "å ta en sjanse",
        "letter": "to take a chance"
    },
    "1842": {
        "character": "tok en sjanse",
        "letter": "took a chance"
    },
    "1843": {
        "character": "har tatt en sjanse",
        "letter": "have taken a chance"
    },
    "1844": {
        "character": "en livsstil",
        "letter": "a lifestyle"
    },
    "1845": {
        "character": "et kosthold",
        "letter": "a diet"
    },
    "1846": {
        "character": "et budsjett",
        "letter": "a budget"
    },
    "1847": {
        "character": "variert",
        "letter": "varied"
    },
    "1848": {
        "character": "å spise ute",
        "letter": "to eat out"
    },
    "1849": {
        "character": "spiste ute",
        "letter": "ate out"
    },
    "1850": {
        "character": "å sammenligne",
        "letter": "to compare"
    },
    "1851": {
        "character": "sammenlignet",
        "letter": "compared"
    },
    "1852": {
        "character": "en pris",
        "letter": "a price"
    },
    "1853": {
        "character": "et prospekt",
        "letter": "a leaflet"
    },
    "1854": {
        "character": "ei kokebok",
        "letter": "a cookbook"
    },
    "1855": {
        "character": "kokebøker",
        "letter": "cookbooks"
    },
    "1856": {
        "character": "enkel",
        "letter": "easy"
    },
    "1857": {
        "character": "enkelt",
        "letter": "easy (neuter singular)"
    },
    "1858": {
        "character": "enkle",
        "letter": "easy (definite singular and plural)"
    },
    "1859": {
        "character": "en oppskrift",
        "letter": "a recipe"
    },
    "1860": {
        "character": "å holde diett",
        "letter": "to be on a diet"
    },
    "1861": {
        "character": "holdt diett",
        "letter": "was on a diet"
    },
    "1862": {
        "character": "har holdt diett",
        "letter": "have been on a diet"
    },
    "1863": {
        "character": "meningsløs",
        "letter": "preposterous, wanton, senseless, pointless"
    },
    "1864": {
        "character": "rimelig",
        "letter": "reasonable, just, fair"
    },
    "1865": {
        "character": "et motto",
        "letter": "a motto, a slogan"
    },
    "1866": {
        "character": "velbalansert",
        "letter": "well-balanced"
    },
    "1867": {
        "character": "generelt",
        "letter": "generally"
    },
    "1868": {
        "character": "å (ikke) bry seg om noe",
        "letter": "to (not) care about something"
    },
    "1869": {
        "character": "(ikke) brydde seg om noe",
        "letter": "(didn't) care(d) about something"
    },
    "1870": {
        "character": "et kupp",
        "letter": "a bargain"
    },
    "1871": {
        "character": "lat",
        "letter": "lazy"
    },
    "1872": {
        "character": "talentløs",
        "letter": "untalented"
    },
    "1873": {
        "character": "en frysemat",
        "letter": "a frozen meal"
    },
    "1874": {
        "character": "å bruke penger",
        "letter": "to spend money"
    },
    "1875": {
        "character": "brukte penger",
        "letter": "spent money"
    },
    "1876": {
        "character": "å foretrekke",
        "letter": "to prefer"
    },
    "1877": {
        "character": "foretrakk",
        "letter": "prefered"
    },
    "1878": {
        "character": "har foretrukket",
        "letter": "have preferred"
    },
    "1879": {
        "character": "ei gruppe",
        "letter": "a group"
    },
    "1880": {
        "character": "å være i form",
        "letter": "to be fit"
    },
    "1881": {
        "character": "å være meldt på",
        "letter": "to be registered"
    },
    "1882": {
        "character": "et helsestudio",
        "letter": "a fitness center"
    },
    "1883": {
        "character": "å nyte",
        "letter": "to enjoy"
    },
    "1884": {
        "character": "nøt",
        "letter": "enjoyed"
    },
    "1885": {
        "character": "har nytt",
        "letter": "have enjoyed"
    },
    "1886": {
        "character": "et måltid",
        "letter": "a meal"
    },
    "1887": {
        "character": "en hurtigmat",
        "letter": "a fast food"
    },
    "1888": {
        "character": "økologisk",
        "letter": "ecological"
    },
    "1889": {
        "character": "biologisk",
        "letter": "biological"
    },
    "1890": {
        "character": "en bonde",
        "letter": "a farmer"
    },
    "1891": {
        "character": "bønder",
        "letter": "farmers"
    },
    "1892": {
        "character": "å bli født",
        "letter": "to be born"
    },
    "1893": {
        "character": "ble født",
        "letter": "was born"
    },
    "1894": {
        "character": "har blitt født",
        "letter": "have been born"
    },
    "1895": {
        "character": "å ha råd til",
        "letter": "to be able to afford"
    },
    "1896": {
        "character": "å legge på seg",
        "letter": "to gain weight"
    },
    "1897": {
        "character": "la på seg",
        "letter": "gained weight"
    },
    "1898": {
        "character": "har lagt på seg",
        "letter": "have gained weight"
    },
    "1899": {
        "character": "et svangerskap",
        "letter": "a pregnancy"
    },
    "1900": {
        "character": "å telle",
        "letter": "to count"
    },
    "1901": {
        "character": "telte",
        "letter": "counted"
    },
    "1902": {
        "character": "en kalori",
        "letter": "a calorie"
    },
    "1903": {
        "character": "ideal",
        "letter": "ideal"
    },
    "1904": {
        "character": "en figur",
        "letter": "a figure"
    },
    "1905": {
        "character": "sjelden",
        "letter": "rare, rarely"
    },
    "1906": {
        "character": "vegetarisk",
        "letter": "vegetarian"
    },
    "1907": {
        "character": "å drive idrett",
        "letter": "to do sports"
    },
    "1908": {
        "character": "drev idrett",
        "letter": "did sports"
    },
    "1909": {
        "character": "har drevet idrett",
        "letter": "have done sports"
    },
    "1910": {
        "character": "en helse",
        "letter": "health"
    },
    "1911": {
        "character": "bevisst",
        "letter": "conscious, wittingly"
    },
    "1912": {
        "character": "vital",
        "letter": "vital"
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