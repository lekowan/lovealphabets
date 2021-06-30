// Configuration
const localStorageKey = "norwegian" + "Vocabulary" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "nb-NO";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study between 5 and 11 new Korean characters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = 
{
  "å ha": {
    "letter": "to have"
  },
  "å komme": {
    "letter": "to come"
  },
  "å hete": {
    "letter": "to be called"
  },
  "å bo": {
    "letter": "to live, to stay"
  },
  "å vaere": {
    "letter": "to be"
  },
  "er": {
    "letter": "am / are / is"
  },
  "fra": {
    "letter": "from"
  },
  "hva": {
    "letter": "what"
  },
  "hvor": {
    "letter": "where"
  },
  "i": {
    "letter": "in"
  },
  "ikke": {
    "letter": "not"
  },
  "jeg": {
    "letter": "I"
  },
  "du": {
    "letter": "you (subject)"
  },
  "men": {
    "letter": "but"
  },
  "nå": {
    "letter": "now"
  },
  "bil (en)": {
    "letter": "car"
  },
  "fly (et)": {
    "letter": "aeroplane"
  },
  "sommer": {
    "letter": "summer"
  },
  "med": {
    "letter": "with/by"
  },
  "motorsykkel": {
    "letter": "motorbike"
  },
  "når": {
    "letter": "when"
  },
  "og": {
    "letter": "and"
  },
  "student (en)": {
    "letter": "student"
  },
  "sykkel (en)": {
    "letter": "bicycle"
  },
  "til": {
    "letter": "to"
  },
  "han": {
    "letter": "he"
  },
  "hun": {
    "letter": "she"
  },
  "god dag": {
    "letter": "hello, how do you do, good day"
  },
  "god morgen": {
    "letter": "good morning"
  },
  "god kveld, god aften": {
    "letter": "good evening"
  },
  "ha det bra, ha det godt": {
    "letter": "goodbye"
  },
  "ha det": {
    "letter": "bye"
  },
  "morna": {
    "letter": "bye bye"
  },
  "adjø": {
    "letter": "adieu"
  },
  "på gjensyn": {
    "letter": "looking forward to seeing you again"
  },
  "god natt": {
    "letter": "good night (bed time)"
  },
  "god reise": {
    "letter": "have a good trip"
  },
  "hvordan har du det?": {
    "letter": "how are you?"
  },
  "hvordan går det?": {
    "letter": "how goes it?"
  },
  "takk, bare bra": {
    "letter": "thank you, just fine"
  },
  "takk, fint": {
    "letter": "thank you, fine"
  },
  "takk": {
    "letter": "thank"
  },
  "mange takk": {
    "letter": "many thanks"
  },
  "tusen takk": {
    "letter": "a thousand thanks"
  },
  "vil gjerne": {
    "letter": "would like to"
  },
  "å laere": {
    "letter": "to learn"
  },
  "tog (et)": {
    "letter": "train"
  },
  "bare": {
    "letter": "only, just"
  },
  "bra": {
    "letter": "well, fine"
  },
  "det": {
    "letter": "it (neuter)"
  },
  "den": {
    "letter": "it (common)"
  },
  "en": {
    "letter": "a (common)"
  },
  "et": {
    "letter": "a (neuter)"
  },
  "fint": {
    "letter": "fine"
  },
  "glass (et)": {
    "letter": "glass"
  },
  "hvordan": {
    "letter": "how"
  },
  "kaffe (en)": {
    "letter": "coffee"
  },
  "kopp (en)": {
    "letter": "cup"
  },
  "å møte": {
    "letter": "to meet"
  },
  "øl (et)": {
    "letter": "beer"
  },
  "å se": {
    "letter": "to see"
  },
  "skal": {
    "letter": "shall"
  },
  "å": {
    "letter": "to"
  },
  "å spise": {
    "letter": "to eat"
  },
  "her": {
    "letter": "here"
  },
  "mandag": {
    "letter": "Monday"
  },
  "tirsdag": {
    "letter": "Tuesday"
  },
  "onsdag": {
    "letter": "Wednesday"
  },
  "torsdag": {
    "letter": "Thursday"
  },
  "fredag": {
    "letter": "Friday"
  },
  "lørdag": {
    "letter": "Saturday"
  },
  "søndag": {
    "letter": "Sunday"
  },
  "å studere": {
    "letter": "to study"
  },
  "deg": {
    "letter": "you (object)"
  },
  "meg": {
    "letter": "me"
  },
  "å bli": {
    "letter": "to become"
  },
  "dame (en)": {
    "letter": "lady"
  },
  "direktør (en)": {
    "letter": "manager/director"
  },
  "ferie (en)": {
    "letter": "holiday"
  },
  "gammel": {
    "letter": "old"
  },
  "hotell (et)": {
    "letter": "hotel"
  },
  "hver": {
    "letter": "each"
  },
  "kjedelig": {
    "letter": "boring"
  },
  "kurset (et kurse)": {
    "letter": "course"
  },
  "kveld (en)": {
    "letter": "evening"
  },
  "å like": {
    "letter": "to like"
  },
  "laerer (en)": {
    "letter": "teacher"
  },
  "også": {
    "letter": "also, as well"
  },
  "på": {
    "letter": "on, at"
  },
  "skole (en)": {
    "letter": "school"
  },
  "stor": {
    "letter": "big"
  },
  "eller": {
    "letter": "or"
  },
  "etter": {
    "letter": "after"
  },
  "å gå": {
    "letter": "to go"
  },
  "hard": {
    "letter": "hard"
  },
  "hele": {
    "letter": "the whole"
  },
  "heller": {
    "letter": "rather"
  },
  "hvis": {
    "letter": "if"
  },
  "kan": {
    "letter": "can"
  },
  "må": {
    "letter": "must"
  },
  "pub (en)": {
    "letter": "pub"
  },
  "sammen": {
    "letter": "together"
  },
  "så": {
    "letter": "so, then"
  },
  "å ta": {
    "letter": "to take"
  },
  "tiden (en tid)": {
    "letter": "time"
  },
  "vi": {
    "letter": "we"
  },
  "bedre": {
    "letter": "better"
  },
  "å bestille": {
    "letter": "to book"
  },
  "billett (en)": {
    "letter": "ticket"
  },
  "dager (en dag)": {
    "letter": "days"
  },
  "Europa": {
    "letter": "Europe"
  },
  "ferge (en)": {
    "letter": "ferry"
  },
  "gjerne": {
    "letter": "gladly"
  },
  "godt": {
    "letter": "good"
  },
  "henne": {
    "letter": "her"
  },
  "hos": {
    "letter": "with"
  },
  "i morgen": {
    "letter": "tomorrow"
  },
  "kart (et)": {
    "letter": "map"
  },
  "å kjøre": {
    "letter": "to drive"
  },
  "min": {
    "letter": "my"
  },
  "over": {
    "letter": "over, of"
  },
  "pass (et)": {
    "letter": "passport"
  },
  "sent": {
    "letter": "late"
  },
  "som": {
    "letter": "which, that"
  },
  "Sverige": {
    "letter": "Sweden"
  },
  "tante (en)": {
    "letter": "aunt"
  },
  "vei (en)": {
    "letter": "road"
  },
  "videre": {
    "letter": "further"
  },
  "Jeg gleder meg til å reise til USA ...": {
    "letter": "I look forward to travelling to the USA ..."
  },
  "ingenting": {
    "letter": "nothing"
  },
  "gul": {
    "letter": "yellow"
  },
  "liten": {
    "letter": "small"
  },
  "mørk": {
    "letter": "dark"
  },
  "pen": {
    "letter": "pretty"
  },
  "stygg": {
    "letter": "ugly"
  },
  "dere": {
    "letter": "you (plural)"
  },
  "de": {
    "letter": "they"
  },
  "fordi": {
    "letter": "because"
  },
  "hvorfor": {
    "letter": "why"
  },
  "hyggelig": {
    "letter": "nice"
  },
  "kino (en)": {
    "letter": "cinema"
  },
  "bar (en)": {
    "letter": "bar"
  },
  "buss (en)": {
    "letter": "bus"
  },
  "lastebil (en)": {
    "letter": "lorry"
  },
  "lugar (en)": {
    "letter": "cabin"
  },
  "mange": {
    "letter": "many"
  },
  "middag (en)": {
    "letter": "dinner"
  },
  "ombord": {
    "letter": "on board"
  },
  "plass": {
    "letter": "space/room"
  },
  "sulten": {
    "letter": "hungry"
  },
  "tørst": {
    "letter": "thirsty"
  },
  "passasjer (en)": {
    "letter": "passenger"
  },
  "dette": {
    "letter": "this"
  },
  "mye": {
    "letter": "much"
  },
  "mat": {
    "letter": "food"
  },
  "fisk": {
    "letter": "fish"
  },
  "reker (en reke)": {
    "letter": "prawns"
  },
  "kjøtt (et)": {
    "letter": "meat"
  },
  "salater (en salat)": {
    "letter": "salad"
  },
  "flaske": {
    "letter": "bottle"
  },
  "rødvin": {
    "letter": "red wine"
  },
  "hvitvin": {
    "letter": "white wine"
  },
  "å drikke": {
    "letter": "to drink"
  },
  "alkohol": {
    "letter": "alcohol"
  },
  "å huske": {
    "letter": "to remember"
  },
  "at": {
    "letter": "that"
  },
  "strengt": {
    "letter": "strictly"
  },
  "forbudt": {
    "letter": "forbidden"
  },
  "å glemme": {
    "letter": "to forget"
  },
  "av": {
    "letter": "by"
  },
  "høyre": {
    "letter": "right"
  },
  "alltid": {
    "letter": "always"
  },
  "lys": {
    "letter": "light (lux)"
  },
  "selv om": {
    "letter": "even if"
  },
  "sol (en)": {
    "letter": "sun/sunshine"
  },
  "side (en)": {
    "letter": "side"
  },
  "å passe": {
    "letter": "to mind/look after"
  },
  "fartsgrense (en)": {
    "letter": "speed limit"
  },
  "sertifikat (et)": {
    "letter": "driving licence"
  },
  "mer": {
    "letter": "more"
  },
  "nok": {
    "letter": "enough"
  },
  "skål": {
    "letter": "cheers"
  },
  "å betale": {
    "letter": "to pay"
  },
  "brød (et)": {
    "letter": "bread"
  },
  "egg (et)": {
    "letter": "egg"
  },
  "frokost (en)": {
    "letter": "breakfast"
  },
  "å få": {
    "letter": "to get/receive"
  },
  "inn": {
    "letter": "in to"
  },
  "kokt": {
    "letter": "boiled"
  },
  "lang": {
    "letter": "long"
  },
  "litt": {
    "letter": "a little"
  },
  "melk (en)": {
    "letter": "milk"
  },
  "ost (en)": {
    "letter": "cheese"
  },
  "pølse (en)": {
    "letter": "sausage"
  },
  "ristet": {
    "letter": "toasted"
  },
  "rundstykker (et rundstykke)": {
    "letter": "bread rolls"
  },
  "sild (en)": {
    "letter": "herring"
  },
  "å snakke": {
    "letter": "to talk/speak"
  },
  "te (en)": {
    "letter": "tea"
  },
  "tilbake": {
    "letter": "back"
  },
  "å tro": {
    "letter": "to believe"
  },
  "veldig": {
    "letter": "very"
  },
  "venne (en)": {
    "letter": "friend"
  },
  "bord (et)": {
    "letter": "table"
  },
  "poteter": {
    "letter": "potatoes"
  },
  "porsjon": {
    "letter": "portion"
  },
  "vann": {
    "letter": "water"
  },
  "Amerika": {
    "letter": "America"
  },
  "by (en)": {
    "letter": "town/city"
  },
  "fjell (et)": {
    "letter": "mountain"
  },
  "flyplass (en)": {
    "letter": "airport"
  },
  "neste": {
    "letter": "next"
  },
  "nord": {
    "letter": "North"
  },
  "å arbeide": {
    "letter": "to work"
  },
  "blå": {
    "letter": "blue"
  },
  "borte": {
    "letter": "away"
  },
  "brune": {
    "letter": "brown"
  },
  "brygge (en)": {
    "letter": "quay"
  },
  "bygning (en)": {
    "letter": "building"
  },
  "der": {
    "letter": "there"
  },
  "dronning (en)": {
    "letter": "queen"
  },
  "etterpå": {
    "letter": "afterwards"
  },
  "festning (en)": {
    "letter": "castle"
  },
  "først": {
    "letter": "first"
  },
  "gate (en)": {
    "letter": "street"
  },
  "geitost (en)": {
    "letter": "goat cheese"
  },
  "grønn": {
    "letter": "green"
  },
  "konge (en)": {
    "letter": "king"
  },
  "langt": {
    "letter": "far"
  },
  "å ligge": {
    "letter": "to live, to lie"
  },
  "å likne": {
    "letter": "to look like"
  },
  "park (en)": {
    "letter": "park"
  },
  "å se seg om": {
    "letter": "to look around"
  },
  "sjø (en)": {
    "letter": "sea"
  },
  "å skinne": {
    "letter": "to shine"
  },
  "slott (et)": {
    "letter": "palace"
  },
  "trikk (en)": {
    "letter": "tram"
  },
  "tårn (et)": {
    "letter": "tower"
  },
  "ute": {
    "letter": "outside"
  },
  "vakker": {
    "letter": "beautiful"
  },
  "alle": {
    "letter": "all/everybody"
  },
  "dit": {
    "letter": "there"
  },
  "å gå av": {
    "letter": "to get off"
  },
  "venstre": {
    "letter": "left"
  },
  "åpen": {
    "letter": "open"
  },
  "broen (en)": {
    "letter": "bridge"
  },
  "bronse": {
    "letter": "bronze"
  },
  "disse": {
    "letter": "these"
  },
  "fontene (en)": {
    "letter": "fountain"
  },
  "granitt (en)": {
    "letter": "granite"
  },
  "gutten (en)": {
    "letter": "boy"
  },
  "hvem": {
    "letter": "who"
  },
  "igjen": {
    "letter": "again"
  },
  "kafé (en)": {
    "letter": "café"
  },
  "å lage": {
    "letter": "to make"
  },
  "pike (en)": {
    "letter": "girl"
  },
  "port (en)": {
    "letter": "gate"
  },
  "rundt": {
    "letter": "around"
  },
  "sikkert": {
    "letter": "surely"
  },
  "sint": {
    "letter": "cross"
  },
  "å synes": {
    "letter": "to think"
  },
  "søt": {
    "letter": "sweet"
  },
  "tykk": {
    "letter": "thick/fat"
  },
  "forbi": {
    "letter": "past"
  },
  "hovedgate (en)": {
    "letter": "main street"
  },
  "å stoppe": {
    "letter": "to stop"
  },
  "bak": {
    "letter": "behind"
  },
  "disken (en)": {
    "letter": "counter / till"
  },
  "døren (en)": {
    "letter": "door"
  },
  "dårlig": {
    "letter": "bad"
  },
  "å finne": {
    "letter": "to find"
  },
  "frimerke (et)": {
    "letter": "stamp"
  },
  "humør (et)": {
    "letter": "humour / mood"
  },
  "hundre (et)": {
    "letter": "hundred"
  },
  "hvilke": {
    "letter": "which (plural)"
  },
  "kiosk (en)": {
    "letter": "kiosk"
  },
  "å kjøpe": {
    "letter": "to buy"
  },
  "kort (et)": {
    "letter": "postcard"
  },
  "å koste": {
    "letter": "to cost"
  },
  "å mene": {
    "letter": "to mean"
  },
  "ned": {
    "letter": "down"
  },
  "nesten": {
    "letter": "almost"
  },
  "noen": {
    "letter": "some"
  },
  "å regne": {
    "letter": "to rain"
  },
  "å selge": {
    "letter": "to sell"
  },
  "å sende": {
    "letter": "to send"
  },
  "små (liten)": {
    "letter": "small"
  },
  "stativ (et)": {
    "letter": "stand"
  },
  "ved": {
    "letter": "by / next to"
  },
  "å vite": {
    "letter": "to know"
  },
  "null": {
    "letter": "zero"
  },
  "en/ett": {
    "letter": "one"
  },
  "to (number)": {
    "letter": "two"
  },
  "tre": {
    "letter": "three"
  },
  "firr": {
    "letter": "four"
  },
  "fem": {
    "letter": "five"
  },
  "seks": {
    "letter": "six"
  },
  "sju": {
    "letter": "seven"
  },
  "åtte": {
    "letter": "eight"
  },
  "ni": {
    "letter": "nine"
  },
  "ti": {
    "letter": "ten"
  },
  "alt": {
    "letter": "all/everything"
  },
  "andre": {
    "letter": "other"
  },
  "brosjyre (en)": {
    "letter": "brochure"
  },
  "denne": {
    "letter": "this"
  },
  "enden (en)": {
    "letter": "end"
  },
  "for": {
    "letter": "for"
  },
  "å forklare": {
    "letter": "to explain"
  },
  "hjelpe": {
    "letter": "help"
  },
  "ingen": {
    "letter": "no"
  },
  "kanskje": {
    "letter": "perhaps"
  },
  "mannen (en)": {
    "letter": "man"
  },
  "minutter (et minutt)": {
    "letter": "minutes"
  },
  "museer (et museum)": {
    "letter": "museums"
  },
  "å smile": {
    "letter": "to smile"
  },
  "uken (en uke)": {
    "letter": "week"
  },
  "unnskyld": {
    "letter": "excuse me"
  },
  "ingen årsak": {
    "letter": "no worries"
  },
  "en gang til": {
    "letter": "once more"
  },
  "hvilken/hvilket/hvilke": {
    "letter": "which"
  },
  "alene": {
    "letter": "alone"
  },
  "altfor": {
    "letter": "much too"
  },
  "begge, både": {
    "letter": "both"
  },
  "dine": {
    "letter": "your/yours"
  },
  "hva slags": {
    "letter": "what kind of"
  },
  "hverandre": {
    "letter": "each other"
  },
  "kassen (en)": {
    "letter": "till/cashdesk"
  },
  "kvitteringen (en)": {
    "letter": "receipt"
  },
  "lett": {
    "letter": "easy"
  },
  "lik": {
    "letter": "like"
  },
  "mynter (en mynt)": {
    "letter": "coins"
  },
  "navnet (et)": {
    "letter": "name"
  },
  "noe": {
    "letter": "something"
  },
  "papiret (et)": {
    "letter": "paper"
  },
  "penger": {
    "letter": "money"
  },
  "sant": {
    "letter": "TRUE"
  },
  "sedler (en seddel)": {
    "letter": "banknotes"
  },
  "sitt": {
    "letter": "her/his own"
  },
  "å skrive": {
    "letter": "to write"
  },
  "å trenge": {
    "letter": "to need"
  },
  "å veksle": {
    "letter": "to change/exchange"
  },
  "å gjøre": {
    "letter": "to do"
  },
  "far (en)": {
    "letter": "father"
  },
  "fulle (full)": {
    "letter": "full"
  },
  "å hente": {
    "letter": "to collect"
  },
  "å hilse": {
    "letter": "to greet"
  },
  "hjem (et)": {
    "letter": "house"
  },
  "hjemme": {
    "letter": "at home"
  },
  "å høre": {
    "letter": "to hear"
  },
  "i hele går": {
    "letter": "all yesterday"
  },
  "ikke så verst": {
    "letter": "not too bad"
  },
  "å krangler": {
    "letter": "to quarrel"
  },
  "jo": {
    "letter": "yes"
  },
  "lillebror": {
    "letter": "little brother"
  },
  "mor (en/ei)": {
    "letter": "mother"
  },
  "nummeret (et)": {
    "letter": "number"
  },
  "å ringe": {
    "letter": "to ring"
  },
  "å sla": {
    "letter": "to knock, to tap, to dial"
  },
  "snart": {
    "letter": "soon"
  },
  "verst": {
    "letter": "worst"
  },
  "vaer (et)": {
    "letter": "weather"
  },
  "altså": {
    "letter": "which means"
  },
  "avgang (en)": {
    "letter": "departure"
  },
  "billigere": {
    "letter": "cheaper"
  },
  "heldig": {
    "letter": "lucky"
  },
  "å holde": {
    "letter": "to keep, to hold"
  },
  "klokken": {
    "letter": "o'clock"
  },
  "ledig": {
    "letter": "free"
  },
  "med en gang": {
    "letter": "at once"
  },
  "plassbillett (en)": {
    "letter": "seat reservation"
  },
  "returbillett (en)": {
    "letter": "return ticket"
  },
  "å se etter": {
    "letter": "to check, to look for"
  },
  "var": {
    "letter": "was/were"
  },
  "vaer så god?": {
    "letter": "can I help you?"
  },
  "adressen (en adresse)": {
    "letter": "address"
  },
  "bestilt": {
    "letter": "ordered"
  },
  "et par": {
    "letter": "a couple of"
  },
  "familien (en familie)": {
    "letter": "family"
  },
  "for å": {
    "letter": "in order to"
  },
  "å forstå": {
    "letter": "to understand"
  },
  "frisøren (en)": {
    "letter": "hairdresser"
  },
  "før": {
    "letter": "before"
  },
  "glad for at": {
    "letter": "pleased"
  },
  "hennes": {
    "letter": "her/hers"
  },
  "kjøpt": {
    "letter": "bought"
  },
  "kom": {
    "letter": "came"
  },
  "om": {
    "letter": "about"
  },
  "pakke": {
    "letter": "pack"
  },
  "plutselig": {
    "letter": "suddenly"
  },
  "å reise": {
    "letter": "to travel"
  },
  "sa": {
    "letter": "said"
  },
  "å si": {
    "letter": "to say"
  },
  "senere": {
    "letter": "later"
  },
  "siden": {
    "letter": "since"
  },
  "sin": {
    "letter": "his/her/their own"
  },
  "stund (en)": {
    "letter": "while"
  },
  "å svare": {
    "letter": "to answer"
  },
  "tannlegen (en tannlege)": {
    "letter": "dentist"
  },
  "telt (et)": {
    "letter": "tent"
  },
  "tok": {
    "letter": "took"
  },
  "uker (en uke)": {
    "letter": "weeks"
  },
  "vanskelig": {
    "letter": "difficult"
  },
  "vent!": {
    "letter": "wait!"
  },
  "å vente": {
    "letter": "to wait"
  },
  "viktig": {
    "letter": "important"
  },
  "ville": {
    "letter": "wanted"
  },
  "å ville": {
    "letter": "to want"
  },
  "vaert": {
    "letter": "been"
  },
  "å bestille time": {
    "letter": "to make an appointment"
  },
  "om noen uker": {
    "letter": "in a few weeks"
  },
  "vaer så snill å": {
    "letter": "please"
  },
  "å dividere/å dele": {
    "letter": "to divide"
  },
  "å gange/å multiplisere": {
    "letter": "to multiply"
  },
  "å legge sammen": {
    "letter": "to add"
  },
  "å trekke fra": {
    "letter": "to take away"
  },
  "barna (et barn)": {
    "letter": "children"
  },
  "besteforeldre": {
    "letter": "grandparents"
  },
  "became/was": {
    "letter": "became"
  },
  "bodde": {
    "letter": "lived/used to live"
  },
  "da": {
    "letter": "when"
  },
  "bror (en)": {
    "letter": "brother"
  },
  "drept": {
    "letter": "killed"
  },
  "å drepe": {
    "letter": "to kill"
  },
  "eldste": {
    "letter": "eldest"
  },
  "etternavn (et)": {
    "letter": "surname"
  },
  "farfar": {
    "letter": "grandfather, paternal"
  },
  "farmor (en)": {
    "letter": "grandmother, paternal"
  },
  "for ... siden": {
    "letter": "ago"
  },
  "foreldre": {
    "letter": "parents"
  },
  "å fortelle": {
    "letter": "to tell"
  },
  "gift med": {
    "letter": "married to"
  },
  "giftet seg": {
    "letter": "got married"
  },
  "glad i": {
    "letter": "fond of / love"
  },
  "glade (glad)": {
    "letter": "happy"
  },
  "hadde": {
    "letter": "had"
  },
  "hage (en)": {
    "letter": "garden"
  },
  "jobb (en)": {
    "letter": "job"
  },
  "legekontor (et)": {
    "letter": "doctor's surgery"
  },
  "leilighet (en)": {
    "letter": "flat"
  },
  "morfar": {
    "letter": "grandfather, maternal"
  },
  "mormor": {
    "letter": "grandmother, maternal"
  },
  "måneder (en maned)": {
    "letter": "months"
  },
  "nevøer (en nevø)": {
    "letter": "nephews"
  },
  "niese (en)": {
    "letter": "niece"
  },
  "oft": {
    "letter": "often"
  },
  "svogeren (en)": {
    "letter": "brother-in-law"
  },
  "søsken": {
    "letter": "siblings"
  },
  "søstre (en søster)": {
    "letter": "sisters"
  },
  "til felles": {
    "letter": "in common"
  },
  "yngste": {
    "letter": "youngest"
  },
  "år (et)": {
    "letter": "year"
  },
  "alvorsord (et)": {
    "letter": "serious word"
  },
  "besøke": {
    "letter": "visit"
  },
  "bilnøkkelen (en)": {
    "letter": "car key"
  },
  "drittungen (en drittunge)": {
    "letter": "dirty kid"
  },
  "engel": {
    "letter": "angel"
  },
  "å få tak i": {
    "letter": "to get hold of"
  },
  "gikk": {
    "letter": "went"
  },
  "ham": {
    "letter": "him"
  },
  "hvilken": {
    "letter": "which"
  },
  "i dag": {
    "letter": "today"
  },
  "i går": {
    "letter": "yesterday"
  },
  "i orden": {
    "letter": "in orden"
  },
  "jakken (en jakke)": {
    "letter": "jacket"
  },
  "juling (en)": {
    "letter": "hiding/beating"
  },
  "å låne": {
    "letter": "to borrow"
  },
  "nye": {
    "letter": "new"
  },
  "å na": {
    "letter": "to reach"
  },
  "selv": {
    "letter": "himself"
  },
  "skulle": {
    "letter": "should"
  },
  "spurt": {
    "letter": "asked"
  },
  "å spørre": {
    "letter": "to ask"
  },
  "trodde": {
    "letter": "though"
  },
  "tur (en)": {
    "letter": "trip"
  },
  "bleie (en)": {
    "letter": "nappy"
  },
  "bolle (en)": {
    "letter": "bun"
  },
  "enn": {
    "letter": "than"
  },
  "å gi": {
    "letter": "to give"
  },
  "i en uke": {
    "letter": "for a week"
  },
  "inne": {
    "letter": "inside"
  },
  "is (en)": {
    "letter": "ice-cream"
  },
  "klem (en)": {
    "letter": "hug"
  },
  "lager": {
    "letter": "makes"
  },
  "mens": {
    "letter": "while"
  },
  "passet": {
    "letter": "looked after"
  },
  "pent": {
    "letter": "nicely"
  },
  "å rydder": {
    "letter": "to tidy"
  },
  "saft": {
    "letter": "juice/squash"
  },
  "å skifte": {
    "letter": "to change"
  },
  "skjørtet": {
    "letter": "skirt"
  },
  "å skrike": {
    "letter": "to scream"
  },
  "snill": {
    "letter": "good/kind"
  },
  "å sove": {
    "letter": "to sleep"
  },
  "ta meg av": {
    "letter": "tale care of"
  },
  "tørr": {
    "letter": "dry"
  },
  "å vaske": {
    "letter": "to wash"
  },
  "å vaske opp": {
    "letter": "to wash up"
  },
  "våt": {
    "letter": "wet"
  },
  "ofte": {
    "letter": "often"
  }
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
