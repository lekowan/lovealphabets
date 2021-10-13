// Exercise Type (character, vocabulary )
const mysteryOfNilsChartType = "vocabulary";

const mysteryOfNilsMap =  {
  "hva": {
    "letter": "what"
  },
  "gjør": {
    "letter": "do (present)"
  },
  "du": {
    "letter": "you (s)"
  },
  "Jeg": {
    "letter": "I"
  },
  "lager": {
    "letter": "make"
  },
  "en": {
    "letter": "a (m)"
  },
  "en gave": {
    "letter": "a gift, present"
  },
  "til": {
    "letter": "until"
  },
  "hun": {
    "letter": "she"
  },
  "har": {
    "letter": "have (present)"
  },
  "en bursdag": {
    "letter": "a birthday"
  },
  "er": {
    "letter": "be (Present)"
  },
  "det": {
    "letter": "it, that"
  },
  "nisse": {
    "letter": "Mythical Norwegian creature"
  },
  "forstår": {
    "letter": "understand"
  },
  "ikke": {
    "letter": "not"
  },
  "ja": {
    "letter": "yes"
  },
  "trenger": {
    "letter": "needs"
  },
  "liten": {
    "letter": "little"
  },
  "en venn": {
    "letter": "a friend"
  },
  "derfor": {
    "letter": "therefore"
  },
  "sitter": {
    "letter": "sits"
  },
  "og": {
    "letter": "and"
  },
  "arbeider": {
    "letter": "works"
  },
  "nå": {
    "letter": "now"
  },
  "nesten": {
    "letter": "almost"
  },
  "ferdig": {
    "letter": "done, ready, through, finished"
  },
  "han": {
    "letter": "he"
  },
  "vi": {
    "letter": "we"
  },
  "dere": {
    "letter": "you (plural)"
  },
  "de": {
    "letter": "they"
  },
  "å våkne": {
    "letter": "to wake up"
  },
  "onsdag": {
    "letter": "wednesday"
  },
  "i dag": {
    "letter": "today"
  },
  "nei": {
    "letter": "no"
  },
  "torsdag": {
    "letter": "thursday"
  },
  "allerede": {
    "letter": "already"
  },
  "å bety": {
    "letter": "to mean"
  },
  "selvfølgelig": {
    "letter": "of course"
  },
  "et år": {
    "letter": "a year"
  },
  "åtte år": {
    "letter": "eight years"
  },
  "gammel": {
    "letter": "old"
  },
  "å komme": {
    "letter": "to come"
  },
  "god": {
    "letter": "good"
  },
  "en morgen": {
    "letter": "a morning"
  },
  "gratulerer med dagen": {
    "letter": "happy birthday"
  },
  "tusen": {
    "letter": "thousand"
  },
  "takk": {
    "letter": "thanks, thank you"
  },
  "tusen takk": {
    "letter": "many thanks (lit: a thousand thanks)"
  },
  "å spise": {
    "letter": "to eat"
  },
  "en frokost": {
    "letter": "a breakfast"
  },
  "skolen": {
    "letter": "the school"
  },
  "å begynne": {
    "letter": "to begin"
  },
  "snart": {
    "letter": "soon"
  },
  "å stå opp": {
    "letter": "to get up, to stand up"
  },
  "et egg": {
    "letter": "an egg"
  },
  "et rundstykke": {
    "letter": "a roll"
  },
  "ei brødskive": {
    "letter": "a slice of bread"
  },
  "med": {
    "letter": "with"
  },
  "en ost": {
    "letter": "a cheese"
  },
  "å drikke": {
    "letter": "to drink"
  },
  "en kopp": {
    "letter": "a cup"
  },
  "varm": {
    "letter": "hot, warm"
  },
  "en sjokolade": {
    "letter": "a chocolate"
  },
  "en kopp sjokolade": {
    "letter": "a cup of hot chocolate"
  },
  "null": {
    "letter": "0"
  },
  "én": {
    "letter": "1"
  },
  "to": {
    "letter": "2"
  },
  "tre": {
    "letter": "3"
  },
  "fire": {
    "letter": "4"
  },
  "fem": {
    "letter": "5"
  },
  "seks": {
    "letter": "6"
  },
  "sju": {
    "letter": "7"
  },
  "syv": {
    "letter": "7"
  },
  "åtte": {
    "letter": "8"
  },
  "ni": {
    "letter": "9"
  },
  "ti": {
    "letter": "10"
  },
  "God morgen": {
    "letter": "Good morning"
  },
  "God kveld": {
    "letter": "Good evening"
  },
  "Hei": {
    "letter": "Hi"
  },
  "God natt": {
    "letter": "Good night"
  },
  "ha det!": {
    "letter": "bye! (literally: have it (good))"
  },
  "ha det bra!": {
    "letter": "goodbye! be fine!"
  },
  "et brød": {
    "letter": "a bread, a loaf of bread"
  },
  "et eple": {
    "letter": "an apple"
  },
  "et smør": {
    "letter": "a butter"
  },
  "en salami": {
    "letter": "a salami"
  },
  "en honning": {
    "letter": "honey"
  },
  "en kaffe": {
    "letter": "a coffee"
  },
  "en te": {
    "letter": "tea"
  },
  "ei frokostblanding": {
    "letter": "breakfast cereals"
  },
  "ei melk": {
    "letter": "milk"
  },
  "en juice": {
    "letter": "juice"
  },
  "et syltetøy": {
    "letter": "jam, marmalade"
  },
  "Jeg forstår ikke.": {
    "letter": "I don't understand"
  },
  "Kan du gjenta?": {
    "letter": "Can you repeat that?"
  },
  "Jeg snakker bare litt Norsk.": {
    "letter": "I speak only a little Norwegian."
  },
  "Hva betyr ... på engelsk?": {
    "letter": "What does ... in English?"
  },
  "å måtte": {
    "letter": "to have to"
  },
  "må": {
    "letter": "must/have to (Present)"
  },
  "å få": {
    "letter": "to get, receive"
  },
  "en klem": {
    "letter": "a hug"
  },
  "også": {
    "letter": "too, also"
  },
  "her": {
    "letter": "here"
  },
  "den": {
    "letter": "it (masculine and feminine)"
  },
  "å ville": {
    "letter": "want (infinitive)"
  },
  "vil": {
    "letter": "want (Present)"
  },
  "å åpne": {
    "letter": "to open"
  },
  "først": {
    "letter": "first"
  },
  "en telefon": {
    "letter": "a telephone"
  },
  "en smarttelefon": {
    "letter": "a smartphone"
  },
  "å kunne": {
    "letter": "can (Infinitive)"
  },
  "kan": {
    "letter": "can (Present)"
  },
  "bare": {
    "letter": "here: just, simply"
  },
  "å ringe": {
    "letter": "to ring, call"
  },
  "men": {
    "letter": "but"
  },
  "å sende": {
    "letter": "to send"
  },
  "en e-post": {
    "letter": "an e-mail"
  },
  "å gå": {
    "letter": "to walk, go"
  },
  "på": {
    "letter": "on, onto, in, upon, at"
  },
  "på Internett": {
    "letter": "on the Internet"
  },
  "å gå på Internett": {
    "letter": "to surf the Internet, to go on the Internet"
  },
  "å ta": {
    "letter": "to take"
  },
  "et bilde": {
    "letter": "a picture"
  },
  "bilder": {
    "letter": "pictures"
  },
  "ei bestemor": {
    "letter": "a grandmother"
  },
  "elektronisk": {
    "letter": "electronic"
  },
  "å koste": {
    "letter": "to cost"
  },
  "mye": {
    "letter": "a lot"
  },
  "sant": {
    "letter": "TRUE"
  },
  "ikke sant?": {
    "letter": "right?"
  },
  "å svare": {
    "letter": "to answer"
  },
  "å vente": {
    "letter": "to wait"
  },
  "å hete": {
    "letter": "to be called/named"
  },
  "Han heter Nils.": {
    "letter": "His name is Nils."
  },
  "aha": {
    "letter": "aha, I see"
  },
  "glad": {
    "letter": "happy, glad"
  },
  "jo": {
    "letter": "confirmation (''we *do* live'')"
  },
  "å føle": {
    "letter": "to feel"
  },
  "litt": {
    "letter": "a little"
  },
  "trist": {
    "letter": "sad"
  },
  "å se": {
    "letter": "to see"
  },
  "hvorfor": {
    "letter": "why"
  },
  "så": {
    "letter": "saw (past)"
  },
  "bedre": {
    "letter": "better"
  },
  "Mange takk!": {
    "letter": "Many thanks!"
  },
  "Takk skal du ha!": {
    "letter": "Thanks a lot!"
  },
  "Takk for maten!": {
    "letter": "Thanks for the food!"
  },
  "Takk for sist!": {
    "letter": "Hi! (literally: thanks for the last time (we met))"
  },
  "skuffet": {
    "letter": "disappointed"
  },
  "å skulle": {
    "letter": "will, shall (infinitive)"
  },
  "skal": {
    "letter": "shall/will (present tense)"
  },
  "å gjøre": {
    "letter": "to do"
  },
  "gjerne": {
    "letter": "gladly, soon, readily, willingly"
  },
  "å ha": {
    "letter": "to have"
  },
  "hun vil gjerne ha": {
    "letter": "she would like to have"
  },
  "ut": {
    "letter": "out"
  },
  "av": {
    "letter": "of, from"
  },
  "et vindu": {
    "letter": "a window"
  },
  "å leke": {
    "letter": "to play"
  },
  "ei hånd": {
    "letter": "a hand"
  },
  "å si": {
    "letter": "to say"
  },
  "sier": {
    "letter": "say (Present)"
  },
  "Hva heter du?": {
    "letter": "What's your name?"
  },
  "fra": {
    "letter": "from"
  },
  "Norge": {
    "letter": "Norway"
  },
  "hvor": {
    "letter": "where"
  },
  "Hvor kommer du fra?": {
    "letter": "Where are you from?"
  },
  "en skog": {
    "letter": "a forest"
  },
  "ingenting": {
    "letter": "nothing"
  },
  "hvor gammel": {
    "letter": "how old"
  },
  "kjedelig": {
    "letter": "boring"
  },
  "ikke ... lenger": {
    "letter": "not ... any more"
  },
  "å sette": {
    "letter": "to place / to put"
  },
  "ei seng": {
    "letter": "a bed"
  },
  "hvert": {
    "letter": "any"
  },
  "i": {
    "letter": "in/at"
  },
  "i hvert fall": {
    "letter": "in any case, at least"
  },
  "et bord": {
    "letter": "a table"
  },
  "en kommode": {
    "letter": "a chest of drawers"
  },
  "en plass": {
    "letter": "place, space"
  },
  "kanskje": {
    "letter": "perhaps, maybe"
  },
  "et skap": {
    "letter": "a cupboard, a wardrobe"
  },
  "eller": {
    "letter": "or"
  },
  "en stol": {
    "letter": "a chair"
  },
  "ved": {
    "letter": "by/at"
  },
  "ved siden av": {
    "letter": "beside"
  },
  "ei dør": {
    "letter": "a door"
  },
  "en TV": {
    "letter": "a TV"
  },
  "et skrivebord": {
    "letter": "a desk"
  },
  "ei lampe": {
    "letter": "a lamp"
  },
  "ei bokhylle": {
    "letter": "a book shelf"
  },
  "en komfyr": {
    "letter": "a stove"
  },
  "en ovn": {
    "letter": "an oven"
  },
  "en vask": {
    "letter": "a sink"
  },
  "en kaffemaskin": {
    "letter": "a coffee machine"
  },
  "et kjøleskap": {
    "letter": "a refrigerator"
  },
  "en datamaskin": {
    "letter": "a computer"
  },
  "God dag, Deres Majestet.": {
    "letter": "Good day, Your Majesty."
  },
  "Jeg heter...": {
    "letter": "My name is..."
  },
  "Hva gjør du?": {
    "letter": "What do you do?/What are you doing?"
  },
  "Jeg er elektriker.": {
    "letter": "I am an electrician."
  },
  "Hyggelig å hilse på deg!": {
    "letter": "Nice to meet you!"
  },
  "Hyggelig å møte deg!": {
    "letter": "Nice to meet you! (People you've met before)"
  },
  "Hyggelig å treffe deg!": {
    "letter": "Nice to see you!"
  },
  "Jeg kommer fra...": {
    "letter": "I come from..."
  },
  "Hvordan går det?": {
    "letter": "How are you? (literally: How goes it?)"
  },
  "Takk, det går bra.": {
    "letter": "Thanks, I'm fine."
  },
  "Takk, ikke så verst.": {
    "letter": "Thanks, I'm doing ok."
  },
  "Det går dårlig.": {
    "letter": "Not great."
  },
  "Hva med deg?": {
    "letter": "What about you?"
  },
  "God helg!": {
    "letter": "Have a nice weekend!"
  },
  "I like måte!": {
    "letter": "Same to you!"
  },
  "Hvor bor du?": {
    "letter": "Where do you live?"
  },
  "Hvor gammel er du?": {
    "letter": "How old are you?"
  },
  "når": {
    "letter": "when"
  },
  "etter": {
    "letter": "from, after, by"
  },
  "ei stue": {
    "letter": "a living room"
  },
  "en familie": {
    "letter": "a family"
  },
  "ei mor": {
    "letter": "a mother"
  },
  "en far": {
    "letter": "a father"
  },
  "en bror": {
    "letter": "a brother"
  },
  "der": {
    "letter": "there (in or at that place)"
  },
  "å bo": {
    "letter": "to live, to reside"
  },
  "sammen": {
    "letter": "together"
  },
  "dem": {
    "letter": "them"
  },
  "å spørre": {
    "letter": "to ask"
  },
  "spør": {
    "letter": "ask/question (Present)"
  },
  "å vite": {
    "letter": "to know (knowledge of a fact)"
  },
  "vet": {
    "letter": "know (Present)"
  },
  "å lete etter": {
    "letter": "to search for"
  },
  "ham": {
    "letter": "him"
  },
  "egentlig": {
    "letter": "actually"
  },
  "synd": {
    "letter": "A pity"
  },
  "det er synd": {
    "letter": "what a pity"
  },
  "å like": {
    "letter": "to like"
  },
  "heller": {
    "letter": "rather"
  },
  "å være": {
    "letter": "be"
  },
  "frekk": {
    "letter": "Bold, impudent, cheeky"
  },
  "veldig": {
    "letter": "very"
  },
  "dyr": {
    "letter": "expensive"
  },
  "penger": {
    "letter": "money"
  },
  "hyggelig": {
    "letter": "pleasant, nice"
  },
  "henne": {
    "letter": "her, she"
  },
  "å gi": {
    "letter": "to give"
  },
  "deg": {
    "letter": "you"
  },
  "et kjøkken": {
    "letter": "a kitchen"
  },
  "meg": {
    "letter": "me, myself"
  },
  "å hente": {
    "letter": "to fetch, pick up, get"
  },
  "bra": {
    "letter": "fine, good, well"
  },
  "å se på TV": {
    "letter": "to watch TV"
  },
  "oss": {
    "letter": "us"
  },
  "elleve": {
    "letter": "eleven"
  },
  "tolv": {
    "letter": "twelve"
  },
  "tretten": {
    "letter": "thirteen"
  },
  "fjorten": {
    "letter": "fourteen"
  },
  "femten": {
    "letter": "fifteen"
  },
  "seksten": {
    "letter": "sixteen"
  },
  "sytten": {
    "letter": "seventeen"
  },
  "atten": {
    "letter": "eighteen"
  },
  "nitten": {
    "letter": "nineteen"
  },
  "tjue": {
    "letter": "twenty"
  },
  "tjueen": {
    "letter": "Twenty-one"
  },
  "tjueto": {
    "letter": "Twenty two"
  },
  "tretti": {
    "letter": "thirty"
  },
  "trettien": {
    "letter": "thirty one"
  },
  "førti": {
    "letter": "forty"
  },
  "femti": {
    "letter": "fifty"
  },
  "seksti": {
    "letter": "sixty"
  },
  "sytti": {
    "letter": "seventy"
  },
  "åtti": {
    "letter": "eighty"
  },
  "nitti": {
    "letter": "ninety"
  },
  "ett hundre": {
    "letter": "One hundred"
  },
  "ett hundreogen": {
    "letter": "One hundred and one"
  },
  "ett hundreogførtitre": {
    "letter": "One hundred and forty three"
  },
  "tohundre": {
    "letter": "Two hundred"
  },
  "ett tusen": {
    "letter": "one thousand"
  },
  "ett tusenogfemten": {
    "letter": "one thousand and fifteen"
  },
  "femtusenetthundreogtretti": {
    "letter": "five thousand one hundred and thirty"
  },
  "en million": {
    "letter": "a million"
  },
  "en lege": {
    "letter": "a doctor, GP"
  },
  "en sykepleier": {
    "letter": "a nurse"
  },
  "en student": {
    "letter": "a student"
  },
  "en elev": {
    "letter": "a pupil"
  },
  "en redaktør": {
    "letter": "an editor"
  },
  "min": {
    "letter": "my"
  },
  "ei søster": {
    "letter": "a sister"
  },
  "å studere": {
    "letter": "to study"
  },
  "økonomi": {
    "letter": "economy, economics"
  },
  "en kjæreste": {
    "letter": "a loved one (boyfriend or girlfriend)"
  },
  "som": {
    "letter": "those, like, which, who, as"
  },
  "å gifte seg": {
    "letter": "to get married, to marry"
  },
  "mine": {
    "letter": "mine (plural)"
  },
  "foreldre": {
    "letter": "parents"
  },
  "besteforeldre": {
    "letter": "grandparents"
  },
  "en pensjonist": {
    "letter": "a retiree"
  },
  "en gutt": {
    "letter": "a boy"
  },
  "ei jente": {
    "letter": "a girl"
  },
  "ei dame": {
    "letter": "a lady"
  },
  "en mann": {
    "letter": "a husband"
  },
  "ei kone": {
    "letter": "a wife"
  },
  "et søsken": {
    "letter": "a brother or sister, sibling"
  },
  "en sønn": {
    "letter": "a son"
  },
  "ei datter": {
    "letter": "a daughter"
  },
  "mormor": {
    "letter": "mother's mother (singular)"
  },
  "morfar": {
    "letter": "mother's father (singular)"
  },
  "farmor": {
    "letter": "father's mother (singular)"
  },
  "farfar": {
    "letter": "father's father (singular)"
  },
  "Han ser seg.": {
    "letter": "He sees himself."
  },
  "Han ser ham.": {
    "letter": "He sees him."
  },
  "Hvor er du, Tom?": {
    "letter": "Where are you, Tom?"
  },
  "Jeg vil snakke med deg, Tom.": {
    "letter": "I want to talk to you, Tom."
  },
  "Hvor er dere, Tom og Betty?": {
    "letter": "Where are you, Tom and Betty?"
  },
  "Jeg vil snakke med dere, Tom og Betty.": {
    "letter": "I want to talk to you, Tom and Betty."
  },
  "Jeg vil gå hjem.": {
    "letter": "I want to go home."
  },
  "Jeg må gå hjem.": {
    "letter": "I have to go home."
  },
  "Jeg kan gå hjem.": {
    "letter": "I can go home."
  },
  "Jeg skal gå hjem.": {
    "letter": "I will go home."
  },
  "Jeg bør gå hjem.": {
    "letter": "I should go home."
  },
  "ei klokke": {
    "letter": "a clock, watch"
  },
  "Klokka er seks.": {
    "letter": "It is six o'clock."
  },
  "å høre": {
    "letter": "to hear"
  },
  "noe": {
    "letter": "something"
  },
  "ei skinke": {
    "letter": "a ham"
  },
  "mamma": {
    "letter": "mom, mommy"
  },
  "å bevege seg": {
    "letter": "to move"
  },
  "å rope": {
    "letter": "to call, cry, shout"
  },
  "skremt": {
    "letter": "scared"
  },
  "helt": {
    "letter": "totally, entirely"
  },
  "rolig": {
    "letter": "steady, tranquil, quiet, serene, easy, smooth"
  },
  "å tulle": {
    "letter": "to joke"
  },
  "å flire": {
    "letter": "to grin, to smirk"
  },
  "dum": {
    "letter": "dumb/stupid"
  },
  "å tenke": {
    "letter": "to think"
  },
  "nok": {
    "letter": "probably, I gather"
  },
  "å pusse": {
    "letter": "to brush"
  },
  "tennene": {
    "letter": "the teeth"
  },
  "å vaske": {
    "letter": "to wash, clean"
  },
  "en historie": {
    "letter": "a history, story"
  },
  "sjokkert": {
    "letter": "shocked"
  },
  "å leve": {
    "letter": "to live"
  },
  "en fantasi": {
    "letter": "a fantasy, imagination"
  },
  "å tro": {
    "letter": "to believe"
  },
  "å stemme": {
    "letter": "to be correct, to vote"
  },
  "det stemmer ikke": {
    "letter": "that's not correct"
  },
  "å snakke": {
    "letter": "to speak"
  },
  "å glede seg": {
    "letter": "to be happy, to look forward"
  },
  "redd": {
    "letter": "apprehensive, afraid"
  },
  "å slutte": {
    "letter": "to stop, to finish"
  },
  "stille": {
    "letter": "quiet, silent"
  },
  "endelig": {
    "letter": "finally"
  },
  "å slappe av": {
    "letter": "to relax"
  },
  "igjen": {
    "letter": "again"
  },
  "mandag": {
    "letter": "monday"
  },
  "tirsdag": {
    "letter": "tuesday"
  },
  "fredag": {
    "letter": "friday"
  },
  "lørdag": {
    "letter": "saturday"
  },
  "søndag": {
    "letter": "sunday"
  },
  "i går": {
    "letter": "yesterday"
  },
  "i morgen": {
    "letter": "tomorrow"
  },
  "på mandag": {
    "letter": "this/last Monday"
  },
  "på mandager": {
    "letter": "every Monday"
  },
  "Klokka er tre.": {
    "letter": "15:00"
  },
  "Klokka er fem over tre.": {
    "letter": "15.05"
  },
  "Klokka er ti over tre.": {
    "letter": "15.1"
  },
  "Klokka er kvart over tre.": {
    "letter": "15:15"
  },
  "Klokka er ti på halv fire.": {
    "letter": "15.2"
  },
  "Klokka er fem på halv fire.": {
    "letter": "15.25"
  },
  "Klokka er halv fire.": {
    "letter": "15.3"
  },
  "Klokka er fem over halv fire.": {
    "letter": "15.35"
  },
  "Klokka er ti over halv fire.": {
    "letter": "15.4"
  },
  "Klokka er kvart på fire.": {
    "letter": "15.45"
  },
  "Klokka er ti på fire.": {
    "letter": "15.5"
  },
  "Klokka er fem på fire.": {
    "letter": "15.55"
  },
  "atten trettisju": {
    "letter": "18.37"
  },
  "Hva er klokka?": {
    "letter": "What is the time? (hva)"
  },
  "Hvor mye er klokka?": {
    "letter": "What is the time? (hvor)"
  },
  "Skolen begynner klokka åtte.": {
    "letter": "School starts at eight o'clock."
  },
  "rundt": {
    "letter": "round, about"
  },
  "en jobb": {
    "letter": "a job"
  },
  "på jobb": {
    "letter": "at work"
  },
  "da": {
    "letter": "here: when"
  },
  "et hus": {
    "letter": "a house"
  },
  "å se seg rundt": {
    "letter": "to look around"
  },
  "et glass": {
    "letter": "a glass"
  },
  "en tallerken": {
    "letter": "a plate"
  },
  "å hjelpe": {
    "letter": "to help"
  },
  "å rydde": {
    "letter": "to tidy"
  },
  "å hoppe": {
    "letter": "to jump"
  },
  "en oppvaskmaskin": {
    "letter": "a dishwasher"
  },
  "plutselig": {
    "letter": "suddenly"
  },
  "et skrik": {
    "letter": "a scream"
  },
  "stopp": {
    "letter": "stop"
  },
  "gal": {
    "letter": "crazy"
  },
  "å drive": {
    "letter": "to chase, to do"
  },
  "mot": {
    "letter": "towards, against, also: courage"
  },
  "noen": {
    "letter": "some, somebody, someone"
  },
  "en person": {
    "letter": "a person"
  },
  "hvem": {
    "letter": "who"
  },
  "å drive med": {
    "letter": "to do/to work with something"
  },
  "en bevegelse": {
    "letter": "a movement"
  },
  "brun": {
    "letter": "brown"
  },
  "en bamse": {
    "letter": "a teddy bear"
  },
  "en kjøkkenbenk": {
    "letter": "a work table in the kitchen, a kitchen counter"
  },
  "usikker": {
    "letter": "uncertain"
  },
  "å gjenta": {
    "letter": "to repeat"
  },
  "tilbake": {
    "letter": "back"
  },
  "et menneske": {
    "letter": "a human"
  },
  "å forklare": {
    "letter": "to explain"
  },
  "å smile": {
    "letter": "to smile"
  },
  "unnskyld": {
    "letter": "sorry, excuse me"
  },
  "direkte": {
    "letter": "direct"
  },
  "å skremme": {
    "letter": "to scare"
  },
  "å treffe": {
    "letter": "to meet"
  },
  "å finne": {
    "letter": "to find"
  },
  "å finne ut": {
    "letter": "to find out"
  },
  "ung": {
    "letter": "young"
  },
  "å skjønne": {
    "letter": "to understand"
  },
  "to hender": {
    "letter": "two hands"
  },
  "to mødre": {
    "letter": "two mothers"
  },
  "to brødre": {
    "letter": "two brothers"
  },
  "to fedre": {
    "letter": "two fathers"
  },
  "to søstre": {
    "letter": "two sisters"
  },
  "to døtre": {
    "letter": "two daughters"
  },
  "to menn": {
    "letter": "two men"
  },
  "en kniv": {
    "letter": "a knife"
  },
  "en gaffel": {
    "letter": "a fork"
  },
  "ei skje": {
    "letter": "a spoon"
  },
  "å koke": {
    "letter": "to boil"
  },
  "ei suppe": {
    "letter": "a soup"
  },
  "å steke": {
    "letter": "to roast"
  },
  "fisk": {
    "letter": "fish"
  },
  "å bake": {
    "letter": "to bake"
  },
  "ei kake": {
    "letter": "a cake"
  },
  "Vi lager mat.": {
    "letter": "We prepare food."
  },
  "Kan du vaske opp?": {
    "letter": "Could you wash the dishes?"
  },
  "Kan du dekke bordet?": {
    "letter": "Could you set the table?"
  },
  "Kan du rydde bordet?": {
    "letter": "Could you clear the table?"
  },
  "Kan du skjære opp brødet?": {
    "letter": "Could you cut the bread?"
  },
  "Kan du gi meg vannet?": {
    "letter": "Could you pass the water?"
  },
  "å dusje": {
    "letter": "to take a shower"
  },
  "en buss": {
    "letter": "a bus"
  },
  "en by": {
    "letter": "a city/town"
  },
  "et kontor": {
    "letter": "an office"
  },
  "etterpå": {
    "letter": "afterwards"
  },
  "å spille": {
    "letter": "to play (an instrument or sports)"
  },
  "tennis": {
    "letter": "tennis"
  },
  "å sove": {
    "letter": "to sleep"
  },
  "din": {
    "letter": "your"
  },
  "Jeg står opp klokka ...": {
    "letter": "I get up at ... o'clock."
  },
  "Så ...": {
    "letter": "Then..."
  },
  "Etterpå ...": {
    "letter": "After that..."
  },
  "Klokka ....": {
    "letter": "At ... o'clock..."
  },
  "Da ...": {
    "letter": "At that time..."
  },
  "Fra ... til ...": {
    "letter": "From....to..."
  },
  "sånn": {
    "letter": "ok/here we go"
  },
  "å fortelle": {
    "letter": "to tell"
  },
  "en sofa": {
    "letter": "a sofa, couch"
  },
  "viktig": {
    "letter": "important"
  },
  "en ting": {
    "letter": "a thing"
  },
  "mange ting": {
    "letter": "many things"
  },
  "folk": {
    "letter": "people"
  },
  "at": {
    "letter": "that (as in ''...understand that you live'')"
  },
  "heller ikke": {
    "letter": "not ... either"
  },
  "alltid": {
    "letter": "always"
  },
  "samme": {
    "letter": "same"
  },
  "et sted": {
    "letter": "a place"
  },
  "mange steder": {
    "letter": "many places"
  },
  "å skjule noe (for)": {
    "letter": "to hide something (from)"
  },
  "farlig": {
    "letter": "dangerous"
  },
  "et barn": {
    "letter": "a child"
  },
  "mange barn": {
    "letter": "many children"
  },
  "barna": {
    "letter": "the children"
  },
  "en voksen": {
    "letter": "an adult"
  },
  "mange voksne": {
    "letter": "many adults"
  },
  "å bli": {
    "letter": "to become"
  },
  "overrasket": {
    "letter": "surprised"
  },
  "rar": {
    "letter": "strange, odd"
  },
  "noe rart": {
    "letter": "something strange"
  },
  "til og med": {
    "letter": "even, also, up to and including"
  },
  "å dø": {
    "letter": "to die"
  },
  "en skrekk": {
    "letter": "a fright"
  },
  "faktisk": {
    "letter": "actually"
  },
  "absolutt": {
    "letter": "absolute(ly)"
  },
  "å vise": {
    "letter": "to show"
  },
  "en avtale": {
    "letter": "an agreement"
  },
  "mellom": {
    "letter": "between"
  },
  "alle": {
    "letter": "all"
  },
  "en dukke": {
    "letter": "a doll"
  },
  "én ting til": {
    "letter": "one more thing"
  },
  "en eske": {
    "letter": "a box, a carton"
  },
  "stor": {
    "letter": "big"
  },
  "en beholder": {
    "letter": "a container"
  },
  "å prøve": {
    "letter": "to try"
  },
  "å gjemme (seg)": {
    "letter": "to hide (oneself)"
  },
  "fort": {
    "letter": "quickly"
  },
  "mulig": {
    "letter": "possible"
  },
  "så fort som mulig": {
    "letter": "as quickly as possible"
  },
  "nemlig": {
    "letter": "namely,that is to say, you know"
  },
  "å rydde opp": {
    "letter": "to clean up, to tidy up"
  },
  "å legge": {
    "letter": "to put, to lay (down)"
  },
  "en bod": {
    "letter": "a storage room"
  },
  "en kjeller": {
    "letter": "a cellar, basement"
  },
  "for eksempel": {
    "letter": "for example"
  },
  "mørk": {
    "letter": "dark"
  },
  "å passe på": {
    "letter": "to pay attention to"
  },
  "ellers": {
    "letter": "otherwise"
  },
  "galt": {
    "letter": "wrong"
  },
  "en leilighet": {
    "letter": "an apartment"
  },
  "ved vinduet": {
    "letter": "by the window"
  },
  "ved døra": {
    "letter": "by the door"
  },
  "over": {
    "letter": "over, above, past, upper, overhead"
  },
  "over bordet": {
    "letter": "over the table"
  },
  "på rommet": {
    "letter": "in the room"
  },
  "på kjøkkenet": {
    "letter": "in the kitchen"
  },
  "på kino": {
    "letter": "at the cinema"
  },
  "på restaurant": {
    "letter": "at the restaurant"
  },
  "i stua": {
    "letter": "in the living room"
  },
  "i Norge": {
    "letter": "in Norway"
  },
  "i Oslo": {
    "letter": "in Oslo"
  },
  "på Grønland": {
    "letter": "in Greenland"
  },
  "på Finnsnes": {
    "letter": "in Finnsnes"
  },
  "bak": {
    "letter": "behind"
  },
  "bak bordet": {
    "letter": "behind the table"
  },
  "ved bordet": {
    "letter": "at the table"
  },
  "foran": {
    "letter": "in front of, before"
  },
  "foran bordet": {
    "letter": "in front of the table"
  },
  "under": {
    "letter": "under, below"
  },
  "under bordet": {
    "letter": "under the table"
  },
  "en stor kopp": {
    "letter": "a big cup"
  },
  "ei stor brødskive": {
    "letter": "a big slice of bread"
  },
  "et stort rundstykke": {
    "letter": "a big roll"
  },
  "mange store kopper": {
    "letter": "many big cups"
  },
  "mange store brødskiver": {
    "letter": "many big slices of bread"
  },
  "mange store rundstykker": {
    "letter": "many big rolls"
  },
  "et hyggelig rom": {
    "letter": "a nice room"
  },
  "koppene": {
    "letter": "the cups"
  },
  "brødskivene": {
    "letter": "the slices of bread"
  },
  "rundstykkene": {
    "letter": "the rolls"
  },
  "fin": {
    "letter": "fine, nice"
  },
  "man": {
    "letter": "one, you, someone, anyone"
  },
  "trang": {
    "letter": "cramped, narrow, want, tight"
  },
  "ei gate": {
    "letter": "a street"
  },
  "et rom": {
    "letter": "a room"
  },
  "rommet": {
    "letter": "the room"
  },
  "mange rom": {
    "letter": "many rooms"
  },
  "rommene": {
    "letter": "the rooms (definite plural)"
  },
  "et soverom": {
    "letter": "a bedroom"
  },
  "en bakgård": {
    "letter": "a backyard"
  },
  "møbler": {
    "letter": "furniture (plural)"
  },
  "svært": {
    "letter": "very"
  },
  "moderne": {
    "letter": "modern"
  },
  "å kjenne": {
    "letter": "to know (who/what someone/something is)"
  },
  "videre": {
    "letter": "on, further"
  },
  "et bad": {
    "letter": "a bathroom"
  },
  "dette": {
    "letter": "this, these"
  },
  "en dusj": {
    "letter": "a shower"
  },
  "et toalett": {
    "letter": "a toilet"
  },
  "en gang": {
    "letter": "a corridor"
  },
  "lang": {
    "letter": "long"
  },
  "et gulv": {
    "letter": "a floor"
  },
  "av tre": {
    "letter": "wooden"
  },
  "et teppe": {
    "letter": "a rug, carpet"
  },
  "alt": {
    "letter": "everything"
  },
  "å huske": {
    "letter": "to remember"
  },
  "mer": {
    "letter": "further, more"
  },
  "en bursdagsgave": {
    "letter": "a birthday present"
  },
  "å snakke om": {
    "letter": "to talk about"
  },
  "av og til": {
    "letter": "at times, occasionally, sometimes, on and off"
  },
  "fornøyd": {
    "letter": "satisfied, pleased"
  },
  "seg selv": {
    "letter": "oneself"
  },
  "Jeg kjenner Nils.": {
    "letter": "I know Nils. (I have seen him before, I know who he is.)"
  },
  "Jeg kjenner Oslo.": {
    "letter": "I know Oslo -- I have been there before."
  },
  "Jeg vet hva han heter.": {
    "letter": "I know what his name is."
  },
  "Jeg vet ikke hvor han bor.": {
    "letter": "I don't know where he lives."
  },
  "Man ser ei trang gate.": {
    "letter": "One can see a narrow street,"
  },
  "en moderne leilighet": {
    "letter": "a modern apartment"
  },
  "et moderne hus": {
    "letter": "a modern house"
  },
  "mange moderne leiligheter": {
    "letter": "many modern apartments"
  },
  "mange moderne hus": {
    "letter": "many modern houses"
  },
  "et norsk hus": {
    "letter": "a Norwegian house"
  },
  "et svart bord": {
    "letter": "a black table"
  },
  "et nytt hus": {
    "letter": "a new house"
  },
  "et blått hus": {
    "letter": "a blue house"
  },
  "et grått hus": {
    "letter": "a grey house"
  },
  "et grånt hus": {
    "letter": "a green house"
  },
  "en gammel historie": {
    "letter": "an old story"
  },
  "to gamle historier": {
    "letter": "two old stories"
  },
  "Hva driver du med?": {
    "letter": "What do you do?"
  },
  "Har du (fast) jobb?": {
    "letter": "Do you have a (permanent) job?"
  },
  "Jeg studerer medisin.": {
    "letter": "I am studying medicine."
  },
  "Jeg leter etter en jobb.": {
    "letter": "I am looking for a job."
  },
  "Jeg er pensjonist.": {
    "letter": "I'm retired."
  },
  "Jeg går på skolen.": {
    "letter": "I am going to school."
  },
  "Jeg er lærer.": {
    "letter": "I'm a teacher."
  },
  "Hege er elektriker.": {
    "letter": "Hege is an electrician."
  },
  "Mario er kokk.": {
    "letter": "Mario is a cook."
  },
  "Jeg er engelsk.": {
    "letter": "I'm English"
  },
  "Hege er norsk.": {
    "letter": "Hege is Norwegian."
  },
  "Mario er italiensk.": {
    "letter": "Mario is Italian."
  },
  "Jeg kommer fra England.": {
    "letter": "I come from England."
  },
  "Jeg kommer fra Norge.": {
    "letter": "I come from Norway."
  },
  "Jeg kommer fra Italia.": {
    "letter": "I come from Italy."
  },
  "Jeg er ... år gammel.": {
    "letter": "I am ... years old."
  },
  "Jeg bor i...": {
    "letter": "I live in..."
  },
  "Jeg liker...": {
    "letter": "I like..."
  },
  "en idé": {
    "letter": "an idea"
  },
  "et arbeid": {
    "letter": "work"
  },
  "ei saks": {
    "letter": "scissors"
  },
  "et papirarbeid": {
    "letter": "paperwork"
  },
  "en binders": {
    "letter": "A paper clip"
  },
  "en kunde": {
    "letter": "a customer"
  },
  "å gjøre notater": {
    "letter": "to take notes"
  },
  "en rapport": {
    "letter": "a report"
  },
  "gul": {
    "letter": "yellow"
  },
  "rød": {
    "letter": "red"
  },
  "blå": {
    "letter": "blue"
  },
  "grønn": {
    "letter": "green"
  },
  "svart": {
    "letter": "black"
  },
  "hvit": {
    "letter": "white"
  },
  "grå": {
    "letter": "grey, gray"
  },
  "oransje": {
    "letter": "orange"
  },
  "ei natt": {
    "letter": "a night"
  },
  "hans": {
    "letter": "his"
  },
  "ei pute": {
    "letter": "a pillow, cushion"
  },
  "å bruke som": {
    "letter": "to use as"
  },
  "hennes": {
    "letter": "her, hers"
  },
  "å ha vondt": {
    "letter": "to have pain"
  },
  "kvalm": {
    "letter": "queazy, sicken, squeamish"
  },
  "en smerte": {
    "letter": "a pain"
  },
  "verre": {
    "letter": "worse"
  },
  "forsiktig": {
    "letter": "careful(ly), cautious(ly), prudent, guardedly, sparing"
  },
  "svak": {
    "letter": "weak"
  },
  "å ligge": {
    "letter": "to lie"
  },
  "nærmere": {
    "letter": "closer"
  },
  "med en gang": {
    "letter": "right away"
  },
  "midt på natta": {
    "letter": "In the middle of the night"
  },
  "syk": {
    "letter": "sick"
  },
  "forferdelig": {
    "letter": "terrible, horrifying"
  },
  "et bryst": {
    "letter": "a chest"
  },
  "di": {
    "letter": "your"
  },
  "ditt": {
    "letter": "your"
  },
  "dine": {
    "letter": "your"
  },
  "verken - eller": {
    "letter": "neither - nor"
  },
  "å ta av": {
    "letter": "to undress"
  },
  "ei skjorte": {
    "letter": "a shirt"
  },
  "å trykke": {
    "letter": "to press"
  },
  "mer enn": {
    "letter": "more than"
  },
  "før": {
    "letter": "before"
  },
  "å burde": {
    "letter": "should"
  },
  "bør": {
    "letter": "should (present)"
  },
  "å lytte på": {
    "letter": "to listen to"
  },
  "en lunge": {
    "letter": "a lung"
  },
  "et øre": {
    "letter": "en ear"
  },
  "å kjenne på": {
    "letter": "to touch, to feel, to sense"
  },
  "et stykke": {
    "letter": "a piece"
  },
  "et papir": {
    "letter": "a paper"
  },
  "et stykke papir": {
    "letter": "a piece of paper"
  },
  "å skrive": {
    "letter": "to write"
  },
  "ei bok": {
    "letter": "a book"
  },
  "bøker": {
    "letter": "books (plural)"
  },
  "av papir": {
    "letter": "made of paper"
  },
  "en papirlapp": {
    "letter": "a slip of paper"
  },
  "sikkert": {
    "letter": "surely, certainly"
  },
  "å snu": {
    "letter": "to turn"
  },
  "én gang": {
    "letter": "one time, once"
  },
  "et par": {
    "letter": "a couple"
  },
  "et par ganger": {
    "letter": "a couple of times"
  },
  "uansett": {
    "letter": "anyway/whatever/regardless"
  },
  "ned": {
    "letter": "below, down"
  },
  "fortsatt": {
    "letter": "still, even now, yet"
  },
  "frisk": {
    "letter": "well, healthy, sound"
  },
  "mange": {
    "letter": "many"
  },
  "en liten gutt": {
    "letter": "a little boy"
  },
  "ei lita jente": {
    "letter": "a little girl"
  },
  "et lite hus": {
    "letter": "a little house"
  },
  "mange små gutter": {
    "letter": "many little boys"
  },
  "mange små jenter": {
    "letter": "many little girls"
  },
  "mange små hus": {
    "letter": "many little houses"
  },
  "kroppen": {
    "letter": "the body"
  },
  "et hode": {
    "letter": "a head"
  },
  "et kne": {
    "letter": "a knee"
  },
  "knær": {
    "letter": "knees (plural)"
  },
  "en hals": {
    "letter": "a throat, neck"
  },
  "en arm": {
    "letter": "an arm"
  },
  "ei nese": {
    "letter": "a nose"
  },
  "en munn": {
    "letter": "a mouth"
  },
  "hender": {
    "letter": "hands"
  },
  "en mage": {
    "letter": "a stomach"
  },
  "en fot": {
    "letter": "a foot"
  },
  "føtter": {
    "letter": "feet"
  },
  "et øye": {
    "letter": "an eye"
  },
  "øyer": {
    "letter": "eyes"
  },
  "øyne": {
    "letter": "eye (plural)"
  },
  "Hos legen": {
    "letter": "At the Doctor's"
  },
  "Det gjør vondt her.": {
    "letter": "It hurts here."
  },
  "Jeg har vondt i magen.": {
    "letter": "I have a pain in my stomach."
  },
  "Jeg har diaré.": {
    "letter": "I have diarrhoea."
  },
  "Kan du ta av skjorta?": {
    "letter": "Can you take off your shirt?"
  },
  "Pust inn / pust ut.": {
    "letter": "Breathe in / breathe out."
  },
  "Jeg må kaste opp.": {
    "letter": "I have to throw up."
  },
  "Du må ta legemidler.": {
    "letter": "You have to take medication."
  },
  "Kan jeg kjøpe det på apoteket uten resept?": {
    "letter": "Can I buy that at the pharmacy without a prescription?"
  },
  "Temperaturen din er høy.": {
    "letter": "You have a high temperature."
  },
  "Du må holde senga.": {
    "letter": "You have to stay in bed."
  },
  "Må du hoste ofte?": {
    "letter": "Do you cough frequently?"
  },
  "å kjøpe": {
    "letter": "to buy"
  },
  "en mat": {
    "letter": "food"
  },
  "fordi": {
    "letter": "because"
  },
  "et besøk": {
    "letter": "a visit"
  },
  "å komme på besøk": {
    "letter": "to visit"
  },
  "en middag": {
    "letter": "a dinner"
  },
  "hos": {
    "letter": "at the house of"
  },
  "en fisk": {
    "letter": "a fish"
  },
  "ei fiskesuppe": {
    "letter": "a fish soup"
  },
  "en karbonade": {
    "letter": "a traditional Norwegian meatball"
  },
  "en potet": {
    "letter": "a potato"
  },
  "grønnsaker": {
    "letter": "vegetables"
  },
  "en pudding": {
    "letter": "a pudding"
  },
  "vanilje": {
    "letter": "vanilla"
  },
  "en dessert": {
    "letter": "a dessert"
  },
  "en butikk": {
    "letter": "a shop"
  },
  "billig": {
    "letter": "cheap"
  },
  "et tilbud": {
    "letter": "an offer"
  },
  "på tilbud": {
    "letter": "sold at a discount"
  },
  "et bakeri": {
    "letter": "a bakery"
  },
  "en slags": {
    "letter": "a sort"
  },
  "ei gulrot": {
    "letter": "carrot"
  },
  "gulrøtter": {
    "letter": "carrots"
  },
  "en løk": {
    "letter": "an onion"
  },
  "best": {
    "letter": "best"
  },
  "en pose": {
    "letter": "a bag"
  },
  "hvilken": {
    "letter": "which, what"
  },
  "ei såpe": {
    "letter": "a soap"
  },
  "toalettpapir": {
    "letter": "toilet paper"
  },
  "ny": {
    "letter": "new"
  },
  "en børste": {
    "letter": "a brush"
  },
  "en oppvaskbørste": {
    "letter": "a dishwashing brush"
  },
  "ødelagt": {
    "letter": "broken"
  },
  "å betale": {
    "letter": "to pay"
  },
  "en kasserer": {
    "letter": "a cashier, checkout"
  },
  "mange kasserere": {
    "letter": "many cashiers"
  },
  "et kort": {
    "letter": "a card"
  },
  "et medlem": {
    "letter": "a member"
  },
  "medlemmet": {
    "letter": "the member"
  },
  "mange medlemmer": {
    "letter": "many members"
  },
  "et medlemskort": {
    "letter": "a membership card"
  },
  "Hva sier du?": {
    "letter": "Excuse me? I beg your pardon?"
  },
  "vær så snill": {
    "letter": "please"
  },
  "inn": {
    "letter": "in, inside, into"
  },
  "en kortleser": {
    "letter": "a credit card terminal"
  },
  "mange kortlesere": {
    "letter": "many credit card terminals"
  },
  "å slå": {
    "letter": "to beat"
  },
  "en kode": {
    "letter": "a code"
  },
  "å slå kode": {
    "letter": "to enter the code"
  },
  "en kvittering": {
    "letter": "a receipt"
  },
  "å stå": {
    "letter": "to stand"
  },
  "et fortau": {
    "letter": "a sidewalk, pavement"
  },
  "rett": {
    "letter": "directly"
  },
  "bort": {
    "letter": "away, off, over, towards"
  },
  "en stasjon": {
    "letter": "a station"
  },
  "en jernbane": {
    "letter": "a railway"
  },
  "en jernbanestasjon": {
    "letter": "a railway station"
  },
  "en melon": {
    "letter": "a melon"
  },
  "en appelsin": {
    "letter": "an orange"
  },
  "frukt": {
    "letter": "fruit"
  },
  "en paprika": {
    "letter": "a paprika"
  },
  "en salat": {
    "letter": "a salad"
  },
  "en sopp": {
    "letter": "a mushroom"
  },
  "en agurk": {
    "letter": "a cucumber"
  },
  "en banan": {
    "letter": "a banana"
  },
  "druer": {
    "letter": "grapes"
  },
  "en laks": {
    "letter": "a salmon"
  },
  "et kjøtt": {
    "letter": "meat"
  },
  "et svinekjøtt": {
    "letter": "pork"
  },
  "ei reke": {
    "letter": "a shrimp"
  },
  "en kylling": {
    "letter": "a chicken"
  },
  "en tomat": {
    "letter": "a tomato"
  },
  "et pålegg": {
    "letter": "a topping (to put on a slice of bread)"
  },
  "en pasta": {
    "letter": "pasta"
  },
  "ei pære": {
    "letter": "a pear"
  },
  "en matbutikk": {
    "letter": "a food store"
  },
  "et apotek": {
    "letter": "A drugstore"
  },
  "et legemiddel": {
    "letter": "a medicine"
  },
  "legemidler": {
    "letter": "medicines"
  },
  "en klesbutikk": {
    "letter": "a clothing store"
  },
  "klær": {
    "letter": "clothes"
  },
  "en kosmetikk": {
    "letter": "a cosmetic"
  },
  "en kiosk": {
    "letter": "a kiosk"
  },
  "en billett": {
    "letter": "a ticket"
  },
  "ei avis": {
    "letter": "a newspaper"
  },
  "et tidsskrift": {
    "letter": "a magazine"
  },
  "en skobutikk": {
    "letter": "a shoeshop"
  },
  "en sko": {
    "letter": "a shoe"
  },
  "mange sko": {
    "letter": "many shoes"
  },
  "en bensinstasjon": {
    "letter": "a petrol station"
  },
  "en bensin": {
    "letter": "fuel"
  },
  "å betale kontant": {
    "letter": "to pay cash"
  },
  "å betale med kort": {
    "letter": "to pay with credit card"
  },
  "å kjøpe på kreditt": {
    "letter": "to purchase on credit"
  },
  "døgnåpen": {
    "letter": "open 24 hours"
  },
  "åpningstider": {
    "letter": "opening hours"
  },
  "Hvilken kaffe skal hun kjøpe?": {
    "letter": "Which coffee will she buy?"
  },
  "Hvilken dør skal hun åpne?": {
    "letter": "Which door will she open?"
  },
  "Hvilket hus liker du?": {
    "letter": "Which house do you like?"
  },
  "Hvilke poteter skal hun kjøpe?": {
    "letter": "Which potatoes will she buy?"
  },
  "Alle skal komme på besøk.": {
    "letter": "Everyone will come to visit."
  },
  "Erna vil lage fisksuppe.": {
    "letter": "Erna will make fish soup."
  },
  "Jeg skal gå på kino klokka 20.00.": {
    "letter": "I will go to the cinema at 8:00. (I have already bought my ticket.)"
  },
  "Jeg vil gå på kino klokka 20.00.": {
    "letter": "I will go to the cinema at 8:00. (I have not bought my ticket yet.)"
  },
  "Hva skal hun kjøpe?": {
    "letter": "What should she buy? (advice)"
  },
  "Hun vil betale.": {
    "letter": "She wants to pay. (a wish)"
  },
  "Det vil regne i morgen.": {
    "letter": "It will rain tomorrow."
  },
  "en slags potet": {
    "letter": "one sort of potatoes"
  },
  "en slags ost": {
    "letter": "one sort of cheese"
  },
  "et slags brød": {
    "letter": "one sort of bread"
  },
  "mange slags ost": {
    "letter": "many sorts of cheese"
  },
  "mange slags poteter": {
    "letter": "many sorts of potatoes"
  },
  "mange typer ost": {
    "letter": "many types of cheese"
  },
  "mange typer poteter": {
    "letter": "many types of potatoes"
  },
  "Hellas": {
    "letter": "Greece"
  },
  "Brasil": {
    "letter": "Brazil"
  },
  "Canada": {
    "letter": "Canada"
  },
  "Tyrkia": {
    "letter": "Turkey"
  },
  "Sveits": {
    "letter": "Switzerland"
  },
  "Storbritannia": {
    "letter": "Great Britain, United Kingdom"
  },
  "Østerrike": {
    "letter": "Austria"
  },
  "Russland": {
    "letter": "Russia"
  },
  "Argentina": {
    "letter": "Argentina"
  },
  "Polen": {
    "letter": "Poland"
  },
  "Island": {
    "letter": "Iceland"
  },
  "Vatikanstaten": {
    "letter": "The Vatican State"
  },
  "Sverige": {
    "letter": "Sweden"
  },
  "engelsk": {
    "letter": "english"
  },
  "svensk": {
    "letter": "swedish"
  },
  "fransk": {
    "letter": "french"
  },
  "tysk": {
    "letter": "german"
  },
  "italiensk": {
    "letter": "Italian"
  },
  "portugisisk": {
    "letter": "Portuguese"
  },
  "polsk": {
    "letter": "polish"
  },
  "russisk": {
    "letter": "Russian"
  },
  "latin": {
    "letter": "Latin"
  },
  "spansk": {
    "letter": "spanish"
  },
  "islandsk": {
    "letter": "icelandic"
  },
  "tyrkisk": {
    "letter": "Turkish"
  },
  "gresk": {
    "letter": "Greek"
  },
  "norsk": {
    "letter": "norwegian"
  },
  "irsk": {
    "letter": "Irish"
  },
  "sørafrikansk": {
    "letter": "South African"
  },
  "østerriksk": {
    "letter": "Austrian"
  },
  "å forvirre": {
    "letter": "to confuse"
  },
  "forvirret": {
    "letter": "confused"
  },
  "en turist": {
    "letter": "a tourist"
  },
  "uvanlig": {
    "letter": "freakish, unaccustomed, uncommon"
  },
  "en følelse": {
    "letter": "a feeling"
  },
  "en film": {
    "letter": "a film"
  },
  "blid": {
    "letter": "cheerful, friendly"
  },
  "høflig": {
    "letter": "civil, courteous, polite"
  },
  "en vei": {
    "letter": "a road; here: a way, directions"
  },
  "å spørre etter veien": {
    "letter": "to ask for directions"
  },
  "spurte": {
    "letter": "asked (past)"
  },
  "å bære": {
    "letter": "to carry, to bear"
  },
  "tung": {
    "letter": "heavy"
  },
  "en koffert": {
    "letter": "a suitcase"
  },
  "slik": {
    "letter": "such, like this"
  },
  "var": {
    "letter": "was (past)"
  },
  "den gang": {
    "letter": "back then, at that time"
  },
  "nøyaktig": {
    "letter": "meticulous, exact, exactly, precise, accurate"
  },
  "for ... siden": {
    "letter": "...ago"
  },
  "en drøm": {
    "letter": "a dream"
  },
  "drømmer": {
    "letter": "dreams"
  },
  "en dagdrøm": {
    "letter": "a daydream"
  },
  "denne": {
    "letter": "this"
  },
  "til høyre": {
    "letter": "to the right"
  },
  "et kryss": {
    "letter": "a crossing"
  },
  "borte": {
    "letter": "away, off, over"
  },
  "omtrent": {
    "letter": "about, some, circa, roughly"
  },
  "til venstre": {
    "letter": "to the left"
  },
  "et hotell": {
    "letter": "a hotel"
  },
  "deretter": {
    "letter": "then, thereafter, next"
  },
  "rett fram": {
    "letter": "straight ahead"
  },
  "en annen": {
    "letter": "another (masculine)"
  },
  "ei anna": {
    "letter": "another (feminine)"
  },
  "et annet": {
    "letter": "another (neutral)"
  },
  "de andre": {
    "letter": "the others"
  },
  "et ansikt": {
    "letter": "a face"
  },
  "kjent": {
    "letter": "known, aware"
  },
  "et språk": {
    "letter": "a language"
  },
  "en uttale": {
    "letter": "a pronunciation"
  },
  "ennå": {
    "letter": "yet"
  },
  "å dra": {
    "letter": "to travel/go"
  },
  "ofte": {
    "letter": "often"
  },
  "aldri": {
    "letter": "never"
  },
  "å glemme": {
    "letter": "to forget"
  },
  "glemte": {
    "letter": "forgot (past)"
  },
  "vanskelig": {
    "letter": "difficult"
  },
  "utrolig": {
    "letter": "incredible, unbelievable, tumultuous, amazing"
  },
  "et minne": {
    "letter": "a memory"
  },
  "en bølge": {
    "letter": "a wave"
  },
  "hjem": {
    "letter": "home"
  },
  "å ordne": {
    "letter": "to arrange, to organise, to put in order"
  },
  "en tanke": {
    "letter": "a thought"
  },
  "en parkeringsplass": {
    "letter": "a parking lot"
  },
  "en rundkjøring": {
    "letter": "a roundabout"
  },
  "en utkjørsel": {
    "letter": "an exit (road, motorway)"
  },
  "en restaurant": {
    "letter": "a restaurant"
  },
  "en bar": {
    "letter": "a bar"
  },
  "en kino": {
    "letter": "a cinema"
  },
  "arbeidet": {
    "letter": "worked (past)"
  },
  "dekket": {
    "letter": "covered (past)"
  },
  "dusjet": {
    "letter": "showered (past)"
  },
  "giftet seg": {
    "letter": "got married (past)"
  },
  "gledet seg": {
    "letter": "became happy (past)"
  },
  "hentet": {
    "letter": "brought (past)"
  },
  "hetet": {
    "letter": "was named (past)"
  },
  "hoppet": {
    "letter": "jumped (past)"
  },
  "hostet": {
    "letter": "coughed (past)"
  },
  "husket": {
    "letter": "remembered (past)"
  },
  "kastet": {
    "letter": "threw (past)"
  },
  "kostet": {
    "letter": "cost (past)"
  },
  "laget": {
    "letter": "made, created (past)"
  },
  "lyttet": {
    "letter": "listened (past)"
  },
  "ordnet": {
    "letter": "organized (past)"
  },
  "passet på": {
    "letter": "paid attention to (past)"
  },
  "pusset": {
    "letter": "brushed (past)"
  },
  "pustet": {
    "letter": "breathed (past)"
  },
  "ryddet": {
    "letter": "tidied (past)"
  },
  "slappet av": {
    "letter": "relaxed (past)"
  },
  "sluttet": {
    "letter": "quit (past)"
  },
  "snakket": {
    "letter": "spoke (past)"
  },
  "trykket": {
    "letter": "pressed, printed (past)"
  },
  "tullet": {
    "letter": "joked (past)"
  },
  "vasket": {
    "letter": "washed (past)"
  },
  "ventet": {
    "letter": "waited (past)"
  },
  "våknet": {
    "letter": "woke up (past)"
  },
  "åpnet": {
    "letter": "opened (past)"
  },
  "betydde": {
    "letter": "meant (past)"
  },
  "bodde": {
    "letter": "lived (past)"
  },
  "bakte": {
    "letter": "baked (past)"
  },
  "begynte": {
    "letter": "began (past)"
  },
  "betalte": {
    "letter": "paid (past)"
  },
  "beveget": {
    "letter": "moved (past)"
  },
  "brukte": {
    "letter": "used (past)"
  },
  "flirte": {
    "letter": "smirked (past)"
  },
  "forklarte": {
    "letter": "explained (past)"
  },
  "følte": {
    "letter": "felt (past)"
  },
  "gjemte": {
    "letter": "hid (past)"
  },
  "hilste": {
    "letter": "greeted (past)"
  },
  "hørte": {
    "letter": "heard (past)"
  },
  "kjente": {
    "letter": "knew (past)"
  },
  "kjøpte": {
    "letter": "bought (past)"
  },
  "kokte": {
    "letter": "cooked (past)"
  },
  "lekte": {
    "letter": "played (past)"
  },
  "likte": {
    "letter": "liked (past)"
  },
  "ringte": {
    "letter": "called (past)"
  },
  "ropte": {
    "letter": "shouted (past)"
  },
  "sendte": {
    "letter": "sent (past)"
  },
  "skulte": {
    "letter": "hid (past)"
  },
  "skjærte": {
    "letter": "cut (past)"
  },
  "skjønte": {
    "letter": "understood (past)"
  },
  "skremte": {
    "letter": "scared (past)"
  },
  "smilte": {
    "letter": "smiled (past)"
  },
  "spilte": {
    "letter": "played (past)"
  },
  "spiste": {
    "letter": "ate (past)"
  },
  "stekte": {
    "letter": "roasted"
  },
  "stemte": {
    "letter": "was correct, voted (past)"
  },
  "studerte": {
    "letter": "studied (past)"
  },
  "svarte": {
    "letter": "answered (past)"
  },
  "tenkte": {
    "letter": "thought (past)"
  },
  "trengte": {
    "letter": "needed (past)"
  },
  "trykte": {
    "letter": "pressed (past)"
  },
  "viste": {
    "letter": "showed (past)"
  },
  "døde": {
    "letter": "died (past)"
  },
  "lagde": {
    "letter": "made (past)"
  },
  "levde": {
    "letter": "lived (past)"
  },
  "prøvde": {
    "letter": "tried (past)"
  },
  "bar": {
    "letter": "carried (past)"
  },
  "ble": {
    "letter": "became (past)"
  },
  "burde": {
    "letter": "should have (past)"
  },
  "drog": {
    "letter": "leave (past)"
  },
  "drakk": {
    "letter": "drank (past)"
  },
  "drev": {
    "letter": "drove (past)"
  },
  "fikk": {
    "letter": "received (past)"
  },
  "fant": {
    "letter": "found (past)"
  },
  "forsto": {
    "letter": "understood (past)"
  },
  "fortalte": {
    "letter": "told (past)"
  },
  "gikk": {
    "letter": "walked"
  },
  "gav": {
    "letter": "gave (past)"
  },
  "gjentok": {
    "letter": "repeated (past)"
  },
  "gjørde": {
    "letter": "did (past)"
  },
  "hadde": {
    "letter": "had (past)"
  },
  "hjalp": {
    "letter": "helped (past)"
  },
  "kom": {
    "letter": "came (past)"
  },
  "kunne": {
    "letter": "was able to (past)"
  },
  "lå": {
    "letter": "lie down      (past)"
  },
  "måtte": {
    "letter": "had to (past)"
  },
  "satte": {
    "letter": "put (past)"
  },
  "satt": {
    "letter": "sat (past)"
  },
  "skrev": {
    "letter": "wrote (past)"
  },
  "skulle": {
    "letter": "would (past)"
  },
  "slo": {
    "letter": "beat (past)"
  },
  "sov": {
    "letter": "slept (past)"
  },
  "stod": {
    "letter": "stood (past)"
  },
  "tok": {
    "letter": "take (Past)"
  },
  "traff": {
    "letter": "met (past)"
  },
  "ville": {
    "letter": "wanted (past)"
  },
  "visste": {
    "letter": "knew (past)"
  },
  "en kafé": {
    "letter": "a café"
  },
  "nettopp": {
    "letter": "just"
  },
  "drukket": {
    "letter": "drunk (past participle)"
  },
  "sterk": {
    "letter": "virulent, strong, vigorous, mighty"
  },
  "å bestille": {
    "letter": "to order"
  },
  "bestilte": {
    "letter": "ordered"
  },
  "en meny": {
    "letter": "a menu"
  },
  "et øyeblikk": {
    "letter": "a moment"
  },
  "en servitør": {
    "letter": "a waiter"
  },
  "særlig": {
    "letter": "particularly"
  },
  "fristende": {
    "letter": "tempting"
  },
  "ei kjøttkake": {
    "letter": "a meatball"
  },
  "dagens fisk": {
    "letter": "fish of the day"
  },
  "en ris": {
    "letter": "a rice"
  },
  "å snø": {
    "letter": "to snow"
  },
  "snødde": {
    "letter": "snowed"
  },
  "å blåse": {
    "letter": "to blow, be windy"
  },
  "blåste": {
    "letter": "blowed"
  },
  "ganske": {
    "letter": "quite, altogether"
  },
  "kraftig": {
    "letter": "virulent, sturdy, strong, ablebodied, powerful"
  },
  "en sak": {
    "letter": "a matter"
  },
  "Det vil si...": {
    "letter": "That means.../That is to say..."
  },
  "ei hytte": {
    "letter": "a cabin"
  },
  "å stille spørsmål": {
    "letter": "to ask questions"
  },
  "stilte spørsmål": {
    "letter": "asked questions"
  },
  "å besøke": {
    "letter": "to visit"
  },
  "besøkte": {
    "letter": "visited"
  },
  "Tromsø": {
    "letter": "a city in northern Norway"
  },
  "typisk": {
    "letter": "typical"
  },
  "både - og": {
    "letter": "both - and"
  },
  "å holde": {
    "letter": "to hold"
  },
  "holdt": {
    "letter": "held"
  },
  "har holdt": {
    "letter": "have held"
  },
  "hemmelig": {
    "letter": "secret"
  },
  "samtidig": {
    "letter": "simultaneous, contemporary, at the same time"
  },
  "å fortelle om": {
    "letter": "to tell about"
  },
  "fortalte om": {
    "letter": "told about"
  },
  "enten - eller": {
    "letter": "whether - or, either - or"
  },
  "en tekst": {
    "letter": "a text"
  },
  "skjult": {
    "letter": "hidden"
  },
  "en rest": {
    "letter": "a rest, here: the others"
  },
  "resten av": {
    "letter": "the rest of"
  },
  "et liv": {
    "letter": "a life"
  },
  "vær så god!": {
    "letter": "you're welcome! please! here you are!"
  },
  "å smake": {
    "letter": "to taste"
  },
  "smakte": {
    "letter": "tasted"
  },
  "en hemmelighet": {
    "letter": "a secret"
  },
  "en tid": {
    "letter": "a time"
  },
  "det er på tide å...": {
    "letter": "it is time to..."
  },
  "en sannhet": {
    "letter": "a truth"
  },
  "sent": {
    "letter": "late"
  },
  "for sent": {
    "letter": "too late"
  },
  "en regning": {
    "letter": "a bill"
  },
  "så klart": {
    "letter": "of course"
  },
  "det blir...": {
    "letter": "That is.../That will be..."
  },
  "å bekrefte": {
    "letter": "to confirm"
  },
  "bekreftet": {
    "letter": "confirmed"
  },
  "Ha en fin dag": {
    "letter": "Have a nice day"
  },
  "en time": {
    "letter": "an hour"
  },
  "kafeteria": {
    "letter": "canteen, cafeteria"
  },
  "matpakke": {
    "letter": "food pack"
  },
  "ledig": {
    "letter": "free, vacant, disengaged, unoccupied, spare"
  },
  "å anbefale": {
    "letter": "to recommend"
  },
  "anbefalte": {
    "letter": "recommended"
  },
  "en rødvin": {
    "letter": "a red wine"
  },
  "en rett": {
    "letter": "a dish"
  },
  "vegetariansk": {
    "letter": "vegetarian"
  },
  "et øl": {
    "letter": "a beer"
  },
  "en øl": {
    "letter": "a glass of beer"
  },
  "dessverre": {
    "letter": "unfortunately"
  },
  "hjemme": {
    "letter": "at home"
  },
  "ei bøtte": {
    "letter": "a bucket"
  },
  "å tømme": {
    "letter": "to empty"
  },
  "tømte": {
    "letter": "emptied"
  },
  "en do": {
    "letter": "a toilet"
  },
  "en støvsuger": {
    "letter": "a vacuum cleaner"
  },
  "å bråke": {
    "letter": "to make noise"
  },
  "bråkte": {
    "letter": "made noise"
  },
  "å skje": {
    "letter": "to happen"
  },
  "skjedde": {
    "letter": "happened"
  },
  "nervøs": {
    "letter": "nervous"
  },
  "ei hylle": {
    "letter": "a shelf"
  },
  "et grep": {
    "letter": "a grip"
  },
  "fast": {
    "letter": "firm"
  },
  "å mate": {
    "letter": "to feed"
  },
  "matet": {
    "letter": "fed"
  },
  "en katt": {
    "letter": "a cat"
  },
  "å stryke": {
    "letter": "to stroke / to iron / to press"
  },
  "strøk": {
    "letter": "ironed"
  },
  "har strøket": {
    "letter": "have ironed"
  },
  "å gå en tur": {
    "letter": "to take a walk"
  },
  "har gått": {
    "letter": "have walked"
  },
  "en hund": {
    "letter": "a dog"
  },
  "å feie": {
    "letter": "to sweep"
  },
  "feide": {
    "letter": "swept"
  },
  "ei trapp": {
    "letter": "a staircase, stairs"
  },
  "Hvor er det blitt av...": {
    "letter": "Where did ... go? What has become of ...?"
  },
  "kjempe-": {
    "letter": "extremely (prefix)"
  },
  "kjempefin": {
    "letter": "amazing, really good"
  },
  "en TV-serie": {
    "letter": "a TV series"
  },
  "en fjernkontroll": {
    "letter": "a remote control"
  },
  "å være spent": {
    "letter": "to be excited"
  },
  "å finne fram noe": {
    "letter": "to find something, to pull something out from"
  },
  "en boks": {
    "letter": "a box"
  },
  "en knapp": {
    "letter": "a button"
  },
  "forbauset": {
    "letter": "amazed, astonished"
  },
  "en skjerm": {
    "letter": "a screen"
  },
  "altså": {
    "letter": "thus; so"
  },
  "gøy": {
    "letter": "fun"
  },
  "å ha det gøy": {
    "letter": "to have fun"
  },
  "å le": {
    "letter": "to laugh"
  },
  "ler": {
    "letter": "laugh (Present)"
  },
  "lo": {
    "letter": "laugh (Past)"
  },
  "har ledd": {
    "letter": "have laughed"
  },
  "å kjede seg": {
    "letter": "to be bored"
  },
  "interessant": {
    "letter": "interesting, intriguing"
  },
  "å synes": {
    "letter": "to think"
  },
  "syntes over": {
    "letter": "thought over"
  },
  "en reklame": {
    "letter": "an advertisement"
  },
  "å bytte": {
    "letter": "to change, exchange"
  },
  "byttet": {
    "letter": "changed, exchanged"
  },
  "en kanal": {
    "letter": "a channel"
  },
  "å forsvinne": {
    "letter": "to disappear"
  },
  "forsvant": {
    "letter": "disappear (Past)"
  },
  "har forsvunnet": {
    "letter": "have disappeared"
  },
  "å lese": {
    "letter": "to read"
  },
  "leste": {
    "letter": "read, study (past)"
  },
  "langsomt": {
    "letter": "slowly"
  },
  "en nyhet": {
    "letter": "a piece of news"
  },
  "kveldsnyhetene": {
    "letter": "evening news"
  },
  "vi sees!": {
    "letter": "see you (literally: (until) we see each other (again))"
  },
  "halv": {
    "letter": "half"
  },
  "ei panne": {
    "letter": "a pan"
  },
  "velkommen til...": {
    "letter": "welcome to..."
  },
  "raskt": {
    "letter": "quickly"
  },
  "å nøle": {
    "letter": "to hesitate"
  },
  "nølte": {
    "letter": "hesitated"
  },
  "en sjanse": {
    "letter": "a chance"
  },
  "en tekstmelding": {
    "letter": "a text message (SMS)"
  },
  "å chatte": {
    "letter": "to chat"
  },
  "ei venninne": {
    "letter": "a (female) friend"
  },
  "en radio": {
    "letter": "a radio"
  },
  "en musikk": {
    "letter": "a music"
  },
  "nettet": {
    "letter": "Internet"
  },
  "en Internett": {
    "letter": "Internet"
  },
  "fantastisk": {
    "letter": "amazing"
  },
  "et kamera": {
    "letter": "a camera"
  },
  "høy": {
    "letter": "loud, high, tall"
  },
  "et fjell": {
    "letter": "a mountain"
  },
  "en fjord": {
    "letter": "a fjord, a typical Norwegian word for a geographical inlet"
  },
  "ei øy": {
    "letter": "an island"
  },
  "begeistret": {
    "letter": "excited"
  },
  "et land": {
    "letter": "here: a landscape, also: a country"
  },
  "å ønske": {
    "letter": "to wish"
  },
  "ønsket": {
    "letter": "wish, want (past)"
  },
  "vanligvis": {
    "letter": "usually, generally"
  },
  "snill": {
    "letter": "kind"
  },
  "å være enig": {
    "letter": "to agree"
  },
  "virkelig": {
    "letter": "really"
  },
  "å fortsette": {
    "letter": "to continue"
  },
  "fortsatte": {
    "letter": "continued"
  },
  "har fortsatt": {
    "letter": "have continued"
  },
  "å behandle": {
    "letter": "to treat"
  },
  "behandlet": {
    "letter": "treated"
  },
  "å skade": {
    "letter": "to damage, to harm"
  },
  "skadet": {
    "letter": "damaged, harmed"
  },
  "en julenisse": {
    "letter": "a Norwegian mythological creature with a similar role as Santa Claus"
  },
  "en blanding": {
    "letter": "a mixture"
  },
  "å bestemme seg": {
    "letter": "to decide"
  },
  "bestemte seg": {
    "letter": "decided"
  },
  "å bli kjent (med)": {
    "letter": "to get to know"
  },
  "heldigvis": {
    "letter": "fortunately, luckily"
  },
  "opptatt": {
    "letter": "engaged, busy"
  },
  "annen": {
    "letter": "other, second, else"
  },
  "været": {
    "letter": "the weather"
  },
  "en temperatur": {
    "letter": "temperature"
  },
  "en grad": {
    "letter": "a degree"
  },
  "en kuldegrad": {
    "letter": "minus degree"
  },
  "minusgrad": {
    "letter": "minus degree"
  },
  "en varmegrad": {
    "letter": "plus degree"
  },
  "plussgrad": {
    "letter": "plus degree"
  },
  "en vind": {
    "letter": "a wind"
  },
  "en bris": {
    "letter": "a breeze"
  },
  "en kuling": {
    "letter": "a high wind/moderate gale"
  },
  "en storm": {
    "letter": "a storm"
  },
  "en orkan": {
    "letter": "a hurricane"
  },
  "ei tåke": {
    "letter": "fog"
  },
  "et regn": {
    "letter": "rain"
  },
  "en regnbyge": {
    "letter": "a rain shower"
  },
  "en snø": {
    "letter": "a snow"
  },
  "sludd": {
    "letter": "sleet"
  },
  "et yr": {
    "letter": "drizzle"
  },
  "nedbør": {
    "letter": "precipitation/rainfall"
  },
  "sola skinner": {
    "letter": "the sun is shining"
  },
  "skydekke": {
    "letter": "cloud cover"
  },
  "overskyet": {
    "letter": "cloudy"
  },
  "delvis skyet": {
    "letter": "partly clouded"
  },
  "opphold": {
    "letter": "it's not raining anymore"
  },
  "klart": {
    "letter": "clear"
  },
  "vår": {
    "letter": "spring"
  },
  "sommer": {
    "letter": "summer"
  },
  "høst": {
    "letter": "autumn, harvest, fall, harvest"
  },
  "vinter": {
    "letter": "winter"
  },
  "om våren": {
    "letter": "in spring"
  },
  "i vår": {
    "letter": "this year's spring"
  },
  "tidlig på våren": {
    "letter": "early in the spring"
  },
  "sent på våren": {
    "letter": "late in spring"
  },
  "Januar": {
    "letter": "January"
  },
  "Februar": {
    "letter": "February"
  },
  "Mars": {
    "letter": "March"
  },
  "April": {
    "letter": "April"
  },
  "Mai": {
    "letter": "May"
  },
  "Juni": {
    "letter": "June"
  },
  "Juli": {
    "letter": "July"
  },
  "August": {
    "letter": "August"
  },
  "September": {
    "letter": "September"
  },
  "Oktober": {
    "letter": "October"
  },
  "November": {
    "letter": "November"
  },
  "Desember": {
    "letter": "December"
  },
  "fellesferie": {
    "letter": "general staff holiday"
  },
  "jul": {
    "letter": "Christmas"
  },
  "høstferie": {
    "letter": "Autumn holiday"
  },
  "mørketid": {
    "letter": "Polar Night"
  },
  "påske": {
    "letter": "easter"
  },
  "midnattssol": {
    "letter": "Midnight Sun"
  },
  "sankthans": {
    "letter": "Midsummer"
  },
  "nyttår": {
    "letter": "New Year"
  },
  "første": {
    "letter": "first"
  },
  "andre": {
    "letter": "second"
  },
  "tredje": {
    "letter": "third"
  },
  "fjerde": {
    "letter": "fourth"
  },
  "femte": {
    "letter": "fifth"
  },
  "sjette": {
    "letter": "sixth"
  },
  "sjuende": {
    "letter": "seventh"
  },
  "syvende": {
    "letter": "seventh"
  },
  "åttende": {
    "letter": "eighth"
  },
  "niende": {
    "letter": "ninth"
  },
  "tiende": {
    "letter": "tenth"
  },
  "ellevte": {
    "letter": "eleventh"
  },
  "tolvte": {
    "letter": "twelfth"
  },
  "trettende": {
    "letter": "thirteenth"
  },
  "fjortende": {
    "letter": "fourteenth"
  },
  "femtende": {
    "letter": "fifteenth"
  },
  "sekstende": {
    "letter": "sixteenth"
  },
  "syttende": {
    "letter": "seventeenth"
  },
  "attende": {
    "letter": "eighteenth"
  },
  "nittende": {
    "letter": "nineteenth"
  },
  "tjuende": {
    "letter": "twentieth"
  },
  "tyvende": {
    "letter": "twentieth"
  },
  "tjueførste": {
    "letter": "twenty-first"
  },
  "enogtyvende": {
    "letter": "twenty-first"
  },
  "tjueandre": {
    "letter": "twenty-second"
  },
  "toogtyvende": {
    "letter": "twenty-second"
  },
  "trettiende": {
    "letter": "thirty"
  },
  "tredevte": {
    "letter": "thirty"
  },
  "å handle om": {
    "letter": "to be about"
  },
  "handlet": {
    "letter": "was about"
  },
  "å ha lyst til å ...": {
    "letter": "to want to"
  },
  "ute": {
    "letter": "out, outside"
  },
  "så vidt ...": {
    "letter": "insofar as, as far as ..."
  },
  "å reise til": {
    "letter": "to travel to"
  },
  "reiste": {
    "letter": "travel (past)"
  },
  "et utland": {
    "letter": "a foreign country, abroad"
  },
  "en titt": {
    "letter": "a glance"
  },
  "å ta en titt på": {
    "letter": "to glance at"
  },
  "Jaså.": {
    "letter": "I see!"
  },
  "Jaså?": {
    "letter": "Is it? (Ironical)"
  },
  "Oslo": {
    "letter": "capital of Norway"
  },
  "Tja!": {
    "letter": "Oh well... (relenting)"
  },
  "en del": {
    "letter": "a part, here: quite a bit"
  },
  "nord": {
    "letter": "north"
  },
  "et fly": {
    "letter": "an airplane"
  },
  "ei hurtigrute": {
    "letter": "a Norwegian passenger and freight ship that still travels along the west coast"
  },
  "hvis": {
    "letter": "if"
  },
  "å puste": {
    "letter": "to breathe"
  },
  "dyp": {
    "letter": "deep"
  },
  "komplisert": {
    "letter": "complicated"
  },
  "en kilometer": {
    "letter": "a kilometre"
  },
  "et tog": {
    "letter": "a train"
  },
  "Trondheim": {
    "letter": "a city in central Norway"
  },
  "derfra": {
    "letter": "thence, from there"
  },
  "gjennom": {
    "letter": "through"
  },
  "ei luft": {
    "letter": "an air"
  },
  "skummel": {
    "letter": "scary, sinister, murky, creepy"
  },
  "en båt": {
    "letter": "a boat"
  },
  "hver": {
    "letter": "every, each"
  },
  "et problem": {
    "letter": "a problem"
  },
  "en innbygger": {
    "letter": "a resident"
  },
  "et reinsdyr": {
    "letter": "a reindeer"
  },
  "hoved-": {
    "letter": "prime, principal, main, chief"
  },
  "en hovedstad": {
    "letter": "a capital city"
  },
  "riktig": {
    "letter": "correct, right"
  },
  "en regjering": {
    "letter": "a government"
  },
  "en konge": {
    "letter": "a king"
  },
  "et fylke": {
    "letter": "a county (administrative region of Norway)"
  },
  "en landsdel": {
    "letter": "a region, part of a country"
  },
  "å kjøre": {
    "letter": "to drive"
  },
  "kjørte": {
    "letter": "drove"
  },
  "dansk": {
    "letter": "danish"
  },
  "å varme opp": {
    "letter": "to heat up, to warm"
  },
  "europeisk": {
    "letter": "Eoropean"
  },
  "en trikk": {
    "letter": "a tram"
  },
  "elektrisk": {
    "letter": "electric, electric(al)"
  },
  "et gatelys": {
    "letter": "a streetlight"
  },
  "en utkant": {
    "letter": "fringe, outskirts, regions far from the city"
  },
  "utenfor": {
    "letter": "outside"
  },
  "en region": {
    "letter": "a region"
  },
  "langt fra": {
    "letter": "far from"
  },
  "et sykehus": {
    "letter": "a hospital"
  },
  "en informasjon": {
    "letter": "information"
  },
  "en nabo": {
    "letter": "a neighbor"
  },
  "offentlig": {
    "letter": "public"
  },
  "å tjene": {
    "letter": "to earn"
  },
  "tjente": {
    "letter": "earned"
  },
  "født": {
    "letter": "born"
  },
  "en musiker": {
    "letter": "a musician"
  },
  "musikere": {
    "letter": "musicians"
  },
  "en kunstner": {
    "letter": "an artist"
  },
  "kunstnere": {
    "letter": "artists"
  },
  "stolt": {
    "letter": "proud"
  },
  "å gjette": {
    "letter": "to guess"
  },
  "gjettet": {
    "letter": "guessed"
  },
  "å invitere": {
    "letter": "to invite"
  },
  "inviterte": {
    "letter": "invited"
  },
  "å gråte": {
    "letter": "to cry"
  },
  "gråter": {
    "letter": "cries"
  },
  "gråt": {
    "letter": "cried"
  },
  "har grått": {
    "letter": "have cried"
  },
  "et klesskap": {
    "letter": "a wardrobe"
  },
  "en genser": {
    "letter": "a sweater"
  },
  "genseren": {
    "letter": "the sweater"
  },
  "gensere": {
    "letter": "sweaters"
  },
  "genserne": {
    "letter": "the sweaters"
  },
  "en bukse": {
    "letter": "pants, trousers"
  },
  "et skjørt": {
    "letter": "a skirt"
  },
  "å ombestemme seg": {
    "letter": "to change one's mind"
  },
  "ombestemte seg": {
    "letter": "changed one's mind"
  },
  "isteden": {
    "letter": "instead"
  },
  "et undertøy": {
    "letter": "underwear"
  },
  "en sokk": {
    "letter": "sock"
  },
  "ei regnjakke": {
    "letter": "a cagoule/light raincoat"
  },
  "ei lue": {
    "letter": "a cap"
  },
  "et skjerf": {
    "letter": "a scarf"
  },
  "en vott": {
    "letter": "a mitten"
  },
  "i tillegg": {
    "letter": "in addition"
  },
  "helst": {
    "letter": "preferably"
  },
  "en fjellsko": {
    "letter": "an alpine boot/hiking boot"
  },
  "enda": {
    "letter": "yet, still, though"
  },
  "en T-skjorte": {
    "letter": "a T-shirt"
  },
  "holder": {
    "letter": "holds"
  },
  "å holde med": {
    "letter": "to be enough"
  },
  "Det holder med én skjorte.": {
    "letter": "One shirt is enough."
  },
  "ei tann": {
    "letter": "a tooth"
  },
  "tanna": {
    "letter": "the tooth"
  },
  "tenner": {
    "letter": "teeth"
  },
  "en tannbørste": {
    "letter": "a toothbrush"
  },
  "en tannkrem": {
    "letter": "a toothpaste"
  },
  "å inneholde": {
    "letter": "to contain"
  },
  "inneholder": {
    "letter": "contains"
  },
  "inneholdt": {
    "letter": "contained"
  },
  "forskjellig": {
    "letter": "different, various"
  },
  "en medisin": {
    "letter": "a drug, medicine"
  },
  "skikkelig": {
    "letter": "pretty, quite"
  },
  "selvsagt": {
    "letter": "obvious, of course"
  },
  "spesiell": {
    "letter": "special"
  },
  "leddsetninger": {
    "letter": "subordinate clauses"
  },
  "subjunksjoner": {
    "letter": "subordinating clauses"
  },
  "en underbukse": {
    "letter": "a pair of underpants"
  },
  "en underskjorte": {
    "letter": "an undershirt"
  },
  "alene": {
    "letter": "alone"
  },
  "å snike inn": {
    "letter": "to sneak in"
  },
  "sneket": {
    "letter": "creep/sneak (Past Participle)"
  },
  "snek": {
    "letter": "creep/sneak (Past)"
  },
  "spennende": {
    "letter": "exciting"
  },
  "en veske": {
    "letter": "a handbag"
  },
  "å komme seg": {
    "letter": "to come, to get"
  },
  "tenk deg": {
    "letter": "guess what, imagine"
  },
  "ei uke": {
    "letter": "a week"
  },
  "dersom": {
    "letter": "if, in case, whether"
  },
  "det høres ... ut": {
    "letter": "it sounds ..."
  },
  "Hva skal hun i Tromsø?": {
    "letter": "What will she do in Tromsø?"
  },
  "å ane": {
    "letter": "to have a clue"
  },
  "ante": {
    "letter": "had a clue"
  },
  "å spille en rolle": {
    "letter": "to play a role, be important"
  },
  "spilte en rolle": {
    "letter": "played a role"
  },
  "hysj": {
    "letter": "pst! hush! be quiet!"
  },
  "en stund": {
    "letter": "a while"
  },
  "en apparat": {
    "letter": "a machine, an appliance"
  },
  "en mobiltelefon": {
    "letter": "a mobile telephone"
  },
  "full av": {
    "letter": "full of"
  },
  "stadig": {
    "letter": "ever, continual, regular, all the time"
  },
  "å savne": {
    "letter": "to miss"
  },
  "savnet": {
    "letter": "missing"
  },
  "noensinne": {
    "letter": "ever"
  },
  "Jeg er ved stasjonen.": {
    "letter": "I am near the station."
  },
  "Jeg er hos Per.": {
    "letter": "I am at Per's place."
  },
  "Kan du stave navnet ditt?": {
    "letter": "Can you spell your name?"
  },
  "lenge": {
    "letter": "long (of time)"
  },
  "lenge siden": {
    "letter": "long time since..."
  },
  "å rekke": {
    "letter": "to reach, to make (it)"
  },
  "rakk": {
    "letter": "extend/reach (Past)"
  },
  "rukket": {
    "letter": "extend/reach (Past Participle)"
  },
  "en nærhet": {
    "letter": "a closeness, vicinity"
  },
  "å flytte": {
    "letter": "to move"
  },
  "flyttet": {
    "letter": "moved"
  },
  "hektisk": {
    "letter": "hectic"
  },
  "å ha det travelt": {
    "letter": "to be busy"
  },
  "selv om": {
    "letter": "even though"
  },
  "å trives": {
    "letter": "thrive"
  },
  "trivdes": {
    "letter": "thrive, enjoy (past)"
  },
  "ensom": {
    "letter": "lonely"
  },
  "å stoppe": {
    "letter": "to stop"
  },
  "stoppet": {
    "letter": "stopped"
  },
  "neste": {
    "letter": "next"
  },
  "å komme fram": {
    "letter": "to arrive"
  },
  "å krysse": {
    "letter": "to cross"
  },
  "krysset": {
    "letter": "crossed"
  },
  "å gå av": {
    "letter": "to get off (the bus, the tram)"
  },
  "en trening": {
    "letter": "a practice"
  },
  "en fotballtrening": {
    "letter": "soccer practice"
  },
  "likevel": {
    "letter": "nevertheless"
  },
  "åpenbart": {
    "letter": "obviously"
  },
  "sulten": {
    "letter": "hungry"
  },
  "en kasserolle": {
    "letter": "a saucepan"
  },
  "en indrefilet": {
    "letter": "a tenderloin"
  },
  "en okse": {
    "letter": "a beef"
  },
  "en fløte": {
    "letter": "cream"
  },
  "flott": {
    "letter": "nice, wonderful"
  },
  "en svigersønn": {
    "letter": "a son-in-law"
  },
  "nei da": {
    "letter": "not really, nah"
  },
  "å hate": {
    "letter": "to hate"
  },
  "hatet": {
    "letter": "hated"
  },
  "en ridetime": {
    "letter": "a riding lesson"
  },
  "en sjakk": {
    "letter": "chess"
  },
  "å spille sjakk": {
    "letter": "to play chess"
  },
  "å ri": {
    "letter": "to ride on horseback"
  },
  "red": {
    "letter": "ride (Past)"
  },
  "har ridd": {
    "letter": "have ridden"
  },
  "en hest": {
    "letter": "a horse"
  },
  "deilig": {
    "letter": "great, wonderful"
  },
  "en fritid": {
    "letter": "spare time, leisure"
  },
  "en aktivitet": {
    "letter": "an activity"
  },
  "en fritidsaktivitet": {
    "letter": "a leisure activity"
  },
  "et dataspill": {
    "letter": "a computer game"
  },
  "mens": {
    "letter": "while, whilst"
  },
  "å hviske": {
    "letter": "to whisper"
  },
  "hvisket": {
    "letter": "whispered"
  },
  "å virke": {
    "letter": "to seem"
  },
  "virket": {
    "letter": "seemed"
  },
  "lav": {
    "letter": "quiet, low"
  },
  "flau": {
    "letter": "embarrassing"
  },
  "å miste": {
    "letter": "to lose"
  },
  "mistet": {
    "letter": "lost"
  },
  "langt": {
    "letter": "long (distance)"
  },
  "en lang vei": {
    "letter": "a long road"
  },
  "ei lang tid": {
    "letter": "a long time"
  },
  "Vi må gå langt.": {
    "letter": "We have to walk far."
  },
  "Vi må vente lenge.": {
    "letter": "We have to wait long."
  },
  "å elske": {
    "letter": "to love"
  },
  "elsket": {
    "letter": "loved"
  },
  "en sport": {
    "letter": "sports"
  },
  "å trene": {
    "letter": "to work out, to train"
  },
  "trente": {
    "letter": "worked out, trained"
  },
  "en basketball": {
    "letter": "basketball"
  },
  "en håndball": {
    "letter": "handball"
  },
  "en fotball": {
    "letter": "soccer"
  },
  "frustrert": {
    "letter": "frustrated"
  },
  "et mesterskap": {
    "letter": "a championship"
  },
  "en formiddag": {
    "letter": "a (late) morning"
  },
  "et lag": {
    "letter": "here: a team"
  },
  "Ålesund": {
    "letter": "a town in Western Norway"
  },
  "turn": {
    "letter": "gymnastics"
  },
  "en natur": {
    "letter": "nature"
  },
  "eneste": {
    "letter": "only, single, sole"
  },
  "hver eneste": {
    "letter": "every single"
  },
  "ei arbeidsuke": {
    "letter": "a working week"
  },
  "en energi": {
    "letter": "energy"
  },
  "å klatre": {
    "letter": "to climb"
  },
  "klatret": {
    "letter": "climbed"
  },
  "å fiske": {
    "letter": "to fish"
  },
  "fisket": {
    "letter": "fishing"
  },
  "et kulturmenneske": {
    "letter": "a person who enjoys culture"
  },
  "en kveld": {
    "letter": "an evening"
  },
  "en fredagskveld": {
    "letter": "a Friday night"
  },
  "en konsert": {
    "letter": "a concert"
  },
  "et konserthus": {
    "letter": "a concert hall"
  },
  "et teater": {
    "letter": "a theatre"
  },
  "teatret": {
    "letter": "the theatre"
  },
  "teatre": {
    "letter": "theatres"
  },
  "teatrene": {
    "letter": "the theatres"
  },
  "all slags": {
    "letter": "all sorts of"
  },
  "klassisk": {
    "letter": "classical"
  },
  "jazz": {
    "letter": "jazz"
  },
  "en fiolin": {
    "letter": "a violin"
  },
  "en gitar": {
    "letter": "a guitar"
  },
  "fullstendig": {
    "letter": "complete"
  },
  "en kommune": {
    "letter": "a municipality"
  },
  "å fikse": {
    "letter": "to arrange"
  },
  "fikset": {
    "letter": "arranged"
  },
  "super": {
    "letter": "super, perfect"
  },
  "ei flaske": {
    "letter": "a bottle"
  },
  "en vin": {
    "letter": "a wine"
  },
  "å håpe": {
    "letter": "to hope"
  },
  "såpass": {
    "letter": "so, kind of, such a..."
  },
  "pen": {
    "letter": "pretty"
  },
  "fra nå av": {
    "letter": "from now on"
  },
  "en blomst": {
    "letter": "a flower"
  },
  "i bursdagsgave": {
    "letter": "as a birthday present"
  },
  "tåpelig": {
    "letter": "inane, daft, foolish, inept"
  },
  "urealistisk": {
    "letter": "unrealistic"
  },
  "umulig": {
    "letter": "impossible"
  },
  "en begynnelse": {
    "letter": "a start, beginning"
  },
  "å be": {
    "letter": "to ask for"
  },
  "ba": {
    "letter": "asked"
  },
  "har bedt om": {
    "letter": "have asked for"
  },
  "å levere": {
    "letter": "to deliver, here: to return"
  },
  "leverte": {
    "letter": "delivered"
  },
  "et bibliotek": {
    "letter": "a library"
  },
  "et påskeegg": {
    "letter": "an Easter egg"
  },
  "å legge merke": {
    "letter": "to realise, to notice"
  },
  "la merke": {
    "letter": "realised"
  },
  "har lagt merke": {
    "letter": "have realised"
  },
  "sammenlignet med": {
    "letter": "compared to"
  },
  "smart": {
    "letter": "clever"
  },
  "en beskjed": {
    "letter": "a message"
  },
  "en beslutning": {
    "letter": "a decision"
  },
  "idiotisk": {
    "letter": "idiotic"
  },
  "å legge kortene på bordet": {
    "letter": "to lay the cards on the table, to be honest"
  },
  "håpløs": {
    "letter": "hopeless"
  },
  "å avbryte": {
    "letter": "to interrupt"
  },
  "avbrøt": {
    "letter": "interrupted"
  },
  "har avbrutt": {
    "letter": "have interrupted"
  },
  "en unnskylding": {
    "letter": "an excuse"
  },
  "å mene": {
    "letter": "to mean"
  },
  "mente": {
    "letter": "think, mean (past)"
  },
  "for en ...": {
    "letter": "what a ..."
  },
  "en overraskelse": {
    "letter": "a surprise"
  },
  "å være sikker på": {
    "letter": "to be sure of"
  },
  "et ord": {
    "letter": "a word"
  },
  "å lukke": {
    "letter": "to close"
  },
  "lukket": {
    "letter": "shut"
  },
  "å overdrive": {
    "letter": "to exaggerate"
  },
  "overdrev": {
    "letter": "exaggerated"
  },
  "overdrevet": {
    "letter": "exaggerated (perfect)"
  },
  "en fortvilelse": {
    "letter": "desperation, despair"
  },
  "å låne": {
    "letter": "to loan"
  },
  "lånte": {
    "letter": "loaned"
  },
  "å stenge": {
    "letter": "to close"
  },
  "stengte": {
    "letter": "closed"
  },
  "en pakke": {
    "letter": "a package"
  },
  "et frimerke": {
    "letter": "a stamp"
  },
  "et brev": {
    "letter": "a letter"
  },
  "å stjele": {
    "letter": "to steal"
  },
  "stjal": {
    "letter": "steal (Past)"
  },
  "har stjålet": {
    "letter": "have stolen"
  },
  "en sykkel": {
    "letter": "a bicycle"
  },
  "å anmelde": {
    "letter": "to report"
  },
  "anmeldte": {
    "letter": "reported"
  },
  "en politi": {
    "letter": "a police"
  },
  "en konto": {
    "letter": "an account"
  },
  "en bank": {
    "letter": "a bank"
  },
  "en barnehage": {
    "letter": "a kindergarten, nursery school"
  },
  "lett": {
    "letter": "easy, readily, simple, light"
  },
  "en håndveske": {
    "letter": "a handbag"
  },
  "en garderobe": {
    "letter": "a wardrobe"
  },
  "å synes synd på": {
    "letter": "to pity"
  },
  "en togtur": {
    "letter": "a train ride"
  },
  "å sovne": {
    "letter": "to fall asleep"
  },
  "sovnet": {
    "letter": "fell asleep"
  },
  "et bråk": {
    "letter": "a noise"
  },
  "visst": {
    "letter": "probably, here: it appears"
  },
  "et regiontog": {
    "letter": "a regional train"
  },
  "et natttog": {
    "letter": "a night train"
  },
  "å slippe": {
    "letter": "to get away, not have to do something"
  },
  "slapp": {
    "letter": "let go/release (Past)"
  },
  "sluppet": {
    "letter": "let go/release (Past Participle)"
  },
  "én vei": {
    "letter": "one way"
  },
  "tur-retur": {
    "letter": "round-trip"
  },
  "en hundrelapp": {
    "letter": "a one hundred NOK note"
  },
  "et spor": {
    "letter": "a track"
  },
  "bare hun ikke mister ...": {
    "letter": "by no means may she lose ..."
  },
  "trygg": {
    "letter": "safe, secure, sure, stable"
  },
  "å Gud!": {
    "letter": "oh my God!"
  },
  "å selge": {
    "letter": "to sell"
  },
  "solgte": {
    "letter": "sell (Past)"
  },
  "solgt": {
    "letter": "sell (Past Participle)"
  },
  "irritert": {
    "letter": "irritated"
  },
  "hva er det?": {
    "letter": "What is it? What happened?"
  },
  "å beklage": {
    "letter": "to regret, here: to be sorry"
  },
  "beklaget": {
    "letter": "regretted"
  },
  "å jobbe": {
    "letter": "to work"
  },
  "jobbet": {
    "letter": "work (past)"
  },
  "et tøy": {
    "letter": "a fabric"
  },
  "en nål": {
    "letter": "a needle"
  },
  "en tråd": {
    "letter": "a thread"
  },
  "selvstendig": {
    "letter": "independent"
  },
  "selvstendig næringsdrivende": {
    "letter": "self-employed"
  },
  "å lede": {
    "letter": "to lead"
  },
  "ledet": {
    "letter": "lead"
  },
  "egen": {
    "letter": "own, proper"
  },
  "en bedrift": {
    "letter": "a company"
  },
  "å gå av med pensjon": {
    "letter": "to retire"
  },
  "til tross for at": {
    "letter": "despite of"
  },
  "pensjonspenger": {
    "letter": "pension (money)"
  },
  "en Folketrygd": {
    "letter": "obligatory retirement and social insurance"
  },
  "å spare penger": {
    "letter": "to save money"
  },
  "sparte": {
    "letter": "saved"
  },
  "en sydame": {
    "letter": "a dressmaker (female)"
  },
  "å sy": {
    "letter": "to sew"
  },
  "sydde": {
    "letter": "sewed"
  },
  "en bachelorgrad": {
    "letter": "a bachelor's degree"
  },
  "en høyskole": {
    "letter": "a college"
  },
  "høgskole": {
    "letter": "college"
  },
  "en generell studiekompetanse": {
    "letter": "university admission"
  },
  "et studium": {
    "letter": "studies (usually plural)"
  },
  "studiet": {
    "letter": "university course (definite)"
  },
  "studier": {
    "letter": "university course (plural)"
  },
  "studiene": {
    "letter": "university course (definite plural)"
  },
  "en ambulansearbeider": {
    "letter": "a paramedic"
  },
  "slitsom": {
    "letter": "tiring"
  },
  "et skift": {
    "letter": "a shift"
  },
  "en vakt": {
    "letter": "a watch, duty, shift"
  },
  "å være ansatt": {
    "letter": "to be employed"
  },
  "å vare": {
    "letter": "to last"
  },
  "varte": {
    "letter": "lasted"
  },
  "en politimann": {
    "letter": "a policeman"
  },
  "politimenn": {
    "letter": "policemen"
  },
  "et mål": {
    "letter": "a goal"
  },
  "et utsikt": {
    "letter": "a view, here: (job) prospects"
  },
  "en grunnskole": {
    "letter": "general school (6-16 years)"
  },
  "barneskole og ungdomsskole": {
    "letter": "general school (6-16)"
  },
  "fireårig": {
    "letter": "four-year lasting"
  },
  "en opplæring": {
    "letter": "a training"
  },
  "et bygg": {
    "letter": "a construction"
  },
  "en anleggsteknikk": {
    "letter": "construction technique"
  },
  "et murerfag": {
    "letter": "a subject/course in masonry"
  },
  "et firma": {
    "letter": "a firm/company"
  },
  "et svennebrev": {
    "letter": "a certificate of apprenticeship (for craftsmen)"
  },
  "en murer": {
    "letter": "a mason"
  },
  "et mesterbrev": {
    "letter": "a master craftsman's diploma"
  },
  "senere": {
    "letter": "later"
  },
  "en prosjektleder": {
    "letter": "a project manager"
  },
  "å drømme om": {
    "letter": "to dream about"
  },
  "drømte": {
    "letter": "dreamed"
  },
  "en byggeleder": {
    "letter": "a construction manager"
  },
  "å utdanne seg": {
    "letter": "to educate oneself"
  },
  "utdannet": {
    "letter": "educated"
  },
  "et yrke": {
    "letter": "a profession"
  },
  "en videregående skole": {
    "letter": "a high/secondary school from 16-19 (20) years"
  },
  "en eksamen": {
    "letter": "an exam"
  },
  "eksamen i videregående skole": {
    "letter": "A-levels"
  },
  "et allmennfag": {
    "letter": "a general subject"
  },
  "å søke (på)": {
    "letter": "to apply for"
  },
  "søkte": {
    "letter": "seek, search (past)"
  },
  "juss": {
    "letter": "law studies"
  },
  "en advokat": {
    "letter": "a lawyer"
  },
  "UiO": {
    "letter": "Universitet i Oslo = University of Oslo"
  },
  "en russefeiring": {
    "letter": "party held by pupils before they finish their A-levels every May in Norway"
  },
  "å lære": {
    "letter": "to learn"
  },
  "lærte": {
    "letter": "teach, learn (past)"
  },
  "en ungdomsskole": {
    "letter": "junior high school (14-16 years)"
  },
  "en karakter": {
    "letter": "a grade (at school)"
  },
  "ambisiøs": {
    "letter": "ambitious"
  },
  "en barneskole": {
    "letter": "a primary school"
  },
  "en skolekamerat": {
    "letter": "a school mate"
  },
  "en lærer": {
    "letter": "a teacher"
  },
  "læreren": {
    "letter": "teacher (definite)"
  },
  "lærere": {
    "letter": "teacher (plural)"
  },
  "lærerne": {
    "letter": "teacher (definite plural)"
  },
  "et yndlingsfag": {
    "letter": "a favourite subject"
  },
  "en kroppsøving": {
    "letter": "physical education"
  },
  "en matematikk": {
    "letter": "mathematics"
  },
  "lysvåken": {
    "letter": "wide awake"
  },
  "en kupé": {
    "letter": "a compartment"
  },
  "sin": {
    "letter": "hers, his, its, their"
  },
  "å banke": {
    "letter": "to knock"
  },
  "banket": {
    "letter": "knocked"
  },
  "en uniform": {
    "letter": "a uniform"
  },
  "en konduktør": {
    "letter": "a conductor"
  },
  "en billettkontroll": {
    "letter": "ticket control"
  },
  "forhåpentligvis": {
    "letter": "hopefully (one hopes)"
  },
  "vel": {
    "letter": "well"
  },
  "en sovevogn": {
    "letter": "a sleeping car"
  },
  "å trekke ut": {
    "letter": "to pull out"
  },
  "trakk": {
    "letter": "drag/draw (Past)"
  },
  "trukket": {
    "letter": "drag/draw (Past Participle)"
  },
  "en benk": {
    "letter": "a bench"
  },
  "en bakside": {
    "letter": "a backside"
  },
  "sakte": {
    "letter": "slowly"
  },
  "Lillehammer": {
    "letter": "a Norwegian city north of Oslo"
  },
  "en høyttaler": {
    "letter": "a speaker, a loudspeaker"
  },
  "en tunnel": {
    "letter": "a tunnel"
  },
  "å planlegge": {
    "letter": "to plan"
  },
  "planla": {
    "letter": "planned"
  },
  "har planlagt": {
    "letter": "have planned"
  },
  "en reise": {
    "letter": "a journey"
  },
  "et reisebyrå": {
    "letter": "a travel agency"
  },
  "en rute": {
    "letter": "a route"
  },
  "et startsted": {
    "letter": "a starting point"
  },
  "et målsted": {
    "letter": "a destination"
  },
  "en T-bane": {
    "letter": "a metro"
  },
  "en drosje": {
    "letter": "a taxi"
  },
  "et middel": {
    "letter": "a means"
  },
  "midler": {
    "letter": "means, resources, funds"
  },
  "et transportmiddel": {
    "letter": "a means of transport"
  },
  "en rabatt": {
    "letter": "a discount"
  },
  "å validere": {
    "letter": "to validate"
  },
  "validerte": {
    "letter": "validated"
  },
  "en automat": {
    "letter": "a machine, automat"
  },
  "en stemplingsautomat": {
    "letter": "a validation machine"
  },
  "en holdeplass": {
    "letter": "a stop"
  },
  "en avgang": {
    "letter": "a departure"
  },
  "en ankomst": {
    "letter": "an arrival"
  },
  "å sjekke": {
    "letter": "to check"
  },
  "sjekket": {
    "letter": "checked"
  },
  "en rutetabell": {
    "letter": "a timetable"
  },
  "i rute": {
    "letter": "on time"
  },
  "presis": {
    "letter": "sharp, specific"
  },
  "forsinket": {
    "letter": "delayed"
  },
  "et kjøretøy": {
    "letter": "a vehicle"
  },
  "en bil": {
    "letter": "a car"
  },
  "en motorsykkel": {
    "letter": "a motorbike"
  },
  "til fots": {
    "letter": "by foot"
  },
  "å gå til fots": {
    "letter": "to walk"
  },
  "å passere": {
    "letter": "to pass"
  },
  "passerte": {
    "letter": "passed"
  },
  "hvor lenge tar ...?": {
    "letter": "how long does ... take?"
  },
  "et drivstoff": {
    "letter": "fuel"
  },
  "en herre": {
    "letter": "a gentleman"
  },
  "beregnet": {
    "letter": "estimated"
  },
  "en ankomsttid": {
    "letter": "a time of arrival"
  },
  "å minne": {
    "letter": "to remind, also: to remember"
  },
  "minnet": {
    "letter": "reminded"
  },
  "en passasjer": {
    "letter": "a passenger"
  },
  "å korrespondere": {
    "letter": "to correspond"
  },
  "korresponderte": {
    "letter": "corresponded"
  },
  "Bodø": {
    "letter": "a city in northern Norway"
  },
  "fremdeles": {
    "letter": "still"
  },
  "en gardin": {
    "letter": "a curtain"
  },
  "et sukker": {
    "letter": "sugar"
  },
  "greit nok": {
    "letter": "good enough"
  },
  "akkurat": {
    "letter": "exactly, precisely"
  },
  "en kjærlighet": {
    "letter": "love"
  },
  "et kaos": {
    "letter": "a chaos"
  },
  "et følelseskaos": {
    "letter": "an emotional chaos"
  },
  "forelsket": {
    "letter": "in love"
  },
  "å være forelsket i": {
    "letter": "to be in love with"
  },
  "en kollega": {
    "letter": "a colleague"
  },
  "kollegaen": {
    "letter": "the colleague"
  },
  "kolleger": {
    "letter": "colleagues"
  },
  "kollegene": {
    "letter": "the colleagues"
  },
  "å kysse": {
    "letter": "to kiss"
  },
  "kysset": {
    "letter": "kissed"
  },
  "å krangle": {
    "letter": "to quarrel"
  },
  "kranglet": {
    "letter": "argued"
  },
  "ekte": {
    "letter": "real"
  },
  "et vennskap": {
    "letter": "a friendship"
  },
  "gift": {
    "letter": "married"
  },
  "å skille": {
    "letter": "to separate, divorce"
  },
  "skiltes": {
    "letter": "separated, divorced"
  },
  "har skiltes": {
    "letter": "have separated"
  },
  "skilt": {
    "letter": "divorced"
  },
  "stakkars": {
    "letter": "poor (you poor thing)"
  },
  "den stakkars": {
    "letter": "the poor"
  },
  "mange stakkars": {
    "letter": "many poor"
  },
  "stygg": {
    "letter": "ugly"
  },
  "en medfølelse": {
    "letter": "empathy, compassion"
  },
  "forresten": {
    "letter": "by the way, incidentally"
  },
  "å stole på": {
    "letter": "to trust"
  },
  "stolte": {
    "letter": "trusted"
  },
  "kaldere": {
    "letter": "colder"
  },
  "lettere": {
    "letter": "easier"
  },
  "å orientere seg": {
    "letter": "to find one's bearings"
  },
  "orienterte": {
    "letter": "oriented"
  },
  "mindre": {
    "letter": "smaller"
  },
  "færre": {
    "letter": "fewer"
  },
  "en perrong": {
    "letter": "a platform"
  },
  "eldre": {
    "letter": "older, here: elderly"
  },
  "å svinge": {
    "letter": "to turn"
  },
  "svinget": {
    "letter": "turned"
  },
  "å takke": {
    "letter": "to thank"
  },
  "takket": {
    "letter": "thanked"
  },
  "å ta tid": {
    "letter": "to take time"
  },
  "har tatt": {
    "letter": "have taken"
  },
  "et skip": {
    "letter": "a ship"
  },
  "et råd": {
    "letter": "an advice, a tip; a council"
  },
  "kjedeligere": {
    "letter": "more boring"
  },
  "om bord": {
    "letter": "aboard"
  },
  "en resepsjon": {
    "letter": "a reception desk, front desk"
  },
  "en lugar": {
    "letter": "a cabin (on a ship)"
  },
  "en nøkkel": {
    "letter": "a key"
  },
  "nøkler": {
    "letter": "keys"
  },
  "koselig": {
    "letter": "cosy"
  },
  "et løp": {
    "letter": "a race"
  },
  "i løpet av": {
    "letter": "during, in the course of"
  },
  "finere": {
    "letter": "nicer, finer, prettier"
  },
  "ei elv": {
    "letter": "a river"
  },
  "en katedral": {
    "letter": "a cathedral"
  },
  "største": {
    "letter": "biggest"
  },
  "fineste": {
    "letter": "prettiest"
  },
  "en bygning": {
    "letter": "a building"
  },
  "ei havn": {
    "letter": "a port"
  },
  "billigere": {
    "letter": "cheaper"
  },
  "å abonnere på": {
    "letter": "to subscribe"
  },
  "abonnerte": {
    "letter": "subscribed"
  },
  "brukt": {
    "letter": "second-hand"
  },
  "å leie": {
    "letter": "to rent"
  },
  "leide": {
    "letter": "rented"
  },
  "et lån": {
    "letter": "a loan"
  },
  "USA": {
    "letter": "USA"
  },
  "sunn": {
    "letter": "healthy"
  },
  "en avdeling": {
    "letter": "department, compartment, branch, ward"
  },
  "ei pølse": {
    "letter": "a sausage"
  },
  "røkt": {
    "letter": "smoked"
  },
  "en fryser": {
    "letter": "a freezer"
  },
  "skummet melk": {
    "letter": "skimmed milk"
  },
  "ekstra": {
    "letter": "extra"
  },
  "H-melk": {
    "letter": "full cream milk"
  },
  "tjukk": {
    "letter": "thick, here: overweight"
  },
  "tvert imot": {
    "letter": "on the contrary"
  },
  "en kø": {
    "letter": "a queue, line"
  },
  "ei kasse": {
    "letter": "a cash register"
  },
  "ei lommebok": {
    "letter": "a wallet"
  },
  "lommebøker": {
    "letter": "wallets"
  },
  "å forandre seg": {
    "letter": "to change"
  },
  "forandret seg": {
    "letter": "changed"
  },
  "å skynde seg": {
    "letter": "to hurry (up)"
  },
  "skyndet seg": {
    "letter": "hurried (up)"
  },
  "ei kai": {
    "letter": "a quay"
  },
  "imidlertid": {
    "letter": "however"
  },
  "et område": {
    "letter": "an area"
  },
  "nå som": {
    "letter": "now as"
  },
  "tom": {
    "letter": "inane, void, empty, vain"
  },
  "å ta en sjanse": {
    "letter": "to take a chance"
  },
  "tok en sjanse": {
    "letter": "took a chance"
  },
  "har tatt en sjanse": {
    "letter": "have taken a chance"
  },
  "en livsstil": {
    "letter": "a lifestyle"
  },
  "et kosthold": {
    "letter": "a diet"
  },
  "et budsjett": {
    "letter": "a budget"
  },
  "variert": {
    "letter": "varied"
  },
  "å spise ute": {
    "letter": "to eat out"
  },
  "spiste ute": {
    "letter": "ate out"
  },
  "å sammenligne": {
    "letter": "to compare"
  },
  "sammenlignet": {
    "letter": "compared"
  },
  "en pris": {
    "letter": "a price"
  },
  "et prospekt": {
    "letter": "a leaflet"
  },
  "ei kokebok": {
    "letter": "a cookbook"
  },
  "kokebøker": {
    "letter": "cookbooks"
  },
  "enkel": {
    "letter": "easy"
  },
  "enkelt": {
    "letter": "easy (neuter singular)"
  },
  "enkle": {
    "letter": "easy (definite singular and plural)"
  },
  "en oppskrift": {
    "letter": "a recipe"
  },
  "å holde diett": {
    "letter": "to be on a diet"
  },
  "holdt diett": {
    "letter": "was on a diet"
  },
  "har holdt diett": {
    "letter": "have been on a diet"
  },
  "meningsløs": {
    "letter": "preposterous, wanton, senseless, pointless"
  },
  "rimelig": {
    "letter": "reasonable, just, fair"
  },
  "et motto": {
    "letter": "a motto, a slogan"
  },
  "velbalansert": {
    "letter": "well-balanced"
  },
  "generelt": {
    "letter": "generally"
  },
  "å (ikke) bry seg om noe": {
    "letter": "to (not) care about something"
  },
  "(ikke) brydde seg om noe": {
    "letter": "(didn't) care(d) about something"
  },
  "et kupp": {
    "letter": "a bargain"
  },
  "lat": {
    "letter": "lazy"
  },
  "talentløs": {
    "letter": "untalented"
  },
  "en frysemat": {
    "letter": "a frozen meal"
  },
  "å bruke penger": {
    "letter": "to spend money"
  },
  "brukte penger": {
    "letter": "spent money"
  },
  "å foretrekke": {
    "letter": "to prefer"
  },
  "foretrakk": {
    "letter": "prefered"
  },
  "har foretrukket": {
    "letter": "have preferred"
  },
  "ei gruppe": {
    "letter": "a group"
  },
  "å være i form": {
    "letter": "to be fit"
  },
  "å være meldt på": {
    "letter": "to be registered"
  },
  "et helsestudio": {
    "letter": "a fitness center"
  },
  "å nyte": {
    "letter": "to enjoy"
  },
  "nøt": {
    "letter": "enjoyed"
  },
  "har nytt": {
    "letter": "have enjoyed"
  },
  "et måltid": {
    "letter": "a meal"
  },
  "en hurtigmat": {
    "letter": "a fast food"
  },
  "økologisk": {
    "letter": "ecological"
  },
  "biologisk": {
    "letter": "biological"
  },
  "en bonde": {
    "letter": "a farmer"
  },
  "bønder": {
    "letter": "farmers"
  },
  "å bli født": {
    "letter": "to be born"
  },
  "ble født": {
    "letter": "was born"
  },
  "har blitt født": {
    "letter": "have been born"
  },
  "å ha råd til": {
    "letter": "to be able to afford"
  },
  "å legge på seg": {
    "letter": "to gain weight"
  },
  "la på seg": {
    "letter": "gained weight"
  },
  "har lagt på seg": {
    "letter": "have gained weight"
  },
  "et svangerskap": {
    "letter": "a pregnancy"
  },
  "å telle": {
    "letter": "to count"
  },
  "telte": {
    "letter": "counted"
  },
  "en kalori": {
    "letter": "a calorie"
  },
  "ideal": {
    "letter": "ideal"
  },
  "en figur": {
    "letter": "a figure"
  },
  "sjelden": {
    "letter": "rare, rarely"
  },
  "vegetarisk": {
    "letter": "vegetarian"
  },
  "å drive idrett": {
    "letter": "to do sports"
  },
  "drev idrett": {
    "letter": "did sports"
  },
  "har drevet idrett": {
    "letter": "have done sports"
  },
  "en helse": {
    "letter": "health"
  },
  "bevisst": {
    "letter": "conscious, wittingly"
  },
  "vital": {
    "letter": "vital"
  }
}

const mysteryOfNilsChartData = [{ subtitle: "", "content": mysteryOfNilsMap }]
