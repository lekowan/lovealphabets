// Configuration
const localStorageKey = "russian" + "NewPenguinRussian" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ru-RU";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study a number of new Cyrillic letters every day. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "англичанка": {
    "letter": "Englishwoman"
  },
  "газета": {
    "letter": "newspaper"
  },
  "рубль": {
    "letter": "rouble"
  },
  "Сибирь": {
    "letter": "Siberia"
  },
  "сметана": {
    "letter": "sour cream"
  },
  "такси": {
    "letter": "taxi"
  },
  "упражнение": {
    "letter": "exercise"
  },
  "шоколад": {
    "letter": "chocolate"
  },
  "автобус": {
    "letter": "bus"
  },
  "гостиница": {
    "letter": "hotel"
  },
  "изучать/изучить": {
    "letter": "to study/to master"
  },
  "курить/покурить": {
    "letter": "to smoke"
  },
  "скажите": {
    "letter": "tell, say (formal imperative) (perf)"
  },
  "троллейбус": {
    "letter": "trolleybus"
  },
  "англичанин": {
    "letter": "Englishman"
  },
  "вокзал": {
    "letter": "train station"
  },
  "Крым": {
    "letter": "Crimea"
  },
  "лес": {
    "letter": "wood, forest"
  },
  "море": {
    "letter": "sea"
  },
  "налево": {
    "letter": "to the left"
  },
  "направо": {
    "letter": "to the right"
  },
  "номер": {
    "letter": "number"
  },
  "площадь": {
    "letter": "square"
  },
  "почта": {
    "letter": "post office"
  },
  "прямо": {
    "letter": "straight on"
  },
  "ресторан": {
    "letter": "restaurant"
  },
  "сад": {
    "letter": "garden"
  },
  "туалет": {
    "letter": "toilet"
  },
  "Украина": {
    "letter": "Ukraine"
  },
  "дедушка": {
    "letter": "grandfather"
  },
  "завтра": {
    "letter": "tomorrow"
  },
  "магазин": {
    "letter": "shop"
  },
  "музыка": {
    "letter": "music"
  },
  "отчество": {
    "letter": "patronymic"
  },
  "подождите": {
    "letter": "wait (formal imperative)"
  },
  "проживать/прожить": {
    "letter": "to reside"
  },
  "поздравляю": {
    "letter": "congratulations"
  },
  "познакомьтесь": {
    "letter": "meet, become acquainted (formal imperative)"
  },
  "позови, позовите": {
    "letter": "to call (imperative—informal, formal)"
  },
  "фамилия": {
    "letter": "surname"
  },
  "ванная": {
    "letter": "bathroom"
  },
  "вечерний": {
    "letter": "evening (adj)"
  },
  "добрый": {
    "letter": "good, kind"
  },
  "западный": {
    "letter": "western"
  },
  "зимний": {
    "letter": "winter (adj)"
  },
  "знаменитый": {
    "letter": "famous"
  },
  "квартира": {
    "letter": "apartment"
  },
  "красивый": {
    "letter": "beautiful"
  },
  "Кремль": {
    "letter": "the Kremlin"
  },
  "кухня": {
    "letter": "kitchen"
  },
  "мост": {
    "letter": "bridge"
  },
  "пальто": {
    "letter": "overcoat"
  },
  "погода": {
    "letter": "weather"
  },
  "последний": {
    "letter": "last"
  },
  "посольство": {
    "letter": "embassy"
  },
  "река": {
    "letter": "river"
  },
  "спальня": {
    "letter": "bedroom"
  },
  "станция": {
    "letter": "station"
  },
  "тёплый": {
    "letter": "warm"
  },
  "этаж": {
    "letter": "floor, story"
  },
  "апельсин": {
    "letter": "orange"
  },
  "блин": {
    "letter": "pancake"
  },
  "бутерброд": {
    "letter": "open sandwich"
  },
  "вкусный": {
    "letter": "tasty"
  },
  "горячий": {
    "letter": "hot (=жаркий)"
  },
  "дай, дайте, дади, дадите": {
    "letter": "give (imperative—informal, formal)"
  },
  "дорогой": {
    "letter": "dear, expensive"
  },
  "картофель": {
    "letter": "potatoes"
  },
  "кефир": {
    "letter": "kefir (a fermented milk drink)"
  },
  "килограмм": {
    "letter": "kilogram"
  },
  "колбаса": {
    "letter": "salami"
  },
  "масло": {
    "letter": "butter, oil"
  },
  "молоко": {
    "letter": "milk"
  },
  "молочный": {
    "letter": "milk, dairy (adj)"
  },
  "мясо": {
    "letter": "meat"
  },
  "отдел": {
    "letter": "section of a shop, department"
  },
  "пирожок": {
    "letter": "pie (small)"
  },
  "продавец": {
    "letter": "sales assistant"
  },
  "продукты": {
    "letter": "groceries, food"
  },
  "сахар": {
    "letter": "sugar"
  },
  "свежий": {
    "letter": "fresh"
  },
  "следующий": {
    "letter": "following, next"
  },
  "сыр": {
    "letter": "cheese"
  },
  "фрукт": {
    "letter": "a piece of fruit"
  },
  "хлеб": {
    "letter": "bread"
  },
  "яблоко": {
    "letter": "apple"
  },
  "яйцо": {
    "letter": "egg"
  },
  "бутылка": {
    "letter": "bottle"
  },
  "валютный": {
    "letter": "currency (adj)"
  },
  "вегетарианка": {
    "letter": "female vegetarian"
  },
  "грамм": {
    "letter": "gram"
  },
  "житель": {
    "letter": "inhabitant"
  },
  "иногда": {
    "letter": "sometimes"
  },
  "мало": {
    "letter": "little, not much"
  },
  "может быть": {
    "letter": "perhaps"
  },
  "овощ": {
    "letter": "vegetable"
  },
  "полкило": {
    "letter": "half a kilo"
  },
  "раз": {
    "letter": "a time"
  },
  "разный": {
    "letter": "various"
  },
  "с вас": {
    "letter": "you owe"
  },
  "сдача": {
    "letter": "change (money returned)"
  },
  "точно": {
    "letter": "exactly"
  },
  "банан": {
    "letter": "banana"
  },
  "билет": {
    "letter": "ticket"
  },
  "брать/взять": {
    "letter": "to take"
  },
  "буфет": {
    "letter": "snackbar"
  },
  "всего": {
    "letter": "in all, only"
  },
  "вчера": {
    "letter": "yesterday"
  },
  "дети": {
    "letter": "children"
  },
  "иностранный": {
    "letter": "foreign"
  },
  "к сожалению": {
    "letter": "unfortunately"
  },
  "карта": {
    "letter": "map"
  },
  "конверт": {
    "letter": "envelope"
  },
  "марка": {
    "letter": "postage stamp"
  },
  "неудобно": {
    "letter": "it's awkward"
  },
  "пирог": {
    "letter": "pie (large)"
  },
  "почтовый": {
    "letter": "postage"
  },
  "путеводитель": {
    "letter": "guidebook"
  },
  "разговор": {
    "letter": "conversation"
  },
  "размер": {
    "letter": "size, dimension"
  },
  "рыба": {
    "letter": "fish"
  },
  "словарь": {
    "letter": "dictionary"
  },
  "собака": {
    "letter": "dog"
  },
  "сок": {
    "letter": "juice"
  },
  "специально": {
    "letter": "specially"
  },
  "средний": {
    "letter": "average, middle"
  },
  "сюрприз": {
    "letter": "surprise"
  },
  "Балтийское море": {
    "letter": "Baltic Sea"
  },
  "болезнь": {
    "letter": "disease"
  },
  "всё равно": {
    "letter": "anyway, all the same"
  },
  "дождь": {
    "letter": "rain"
  },
  "долго": {
    "letter": "for a long time"
  },
  "заходите": {
    "letter": "come in (said to a guest)"
  },
  "извините за": {
    "letter": "excuse me for"
  },
  "искать/поискать": {
    "letter": "to look for, to seek"
  },
  "кино (indecl)": {
    "letter": "cinema"
  },
  "концерт": {
    "letter": "concert"
  },
  "красота": {
    "letter": "beauty"
  },
  "крестьянин": {
    "letter": "peasant"
  },
  "называть/назвать": {
    "letter": "to name something"
  },
  "называться/назваться": {
    "letter": "to be called (thing not person)"
  },
  "недавно": {
    "letter": "recently"
  },
  "одевать/одеть": {
    "letter": "to dress"
  },
  "опоздание": {
    "letter": "lateness"
  },
  "порт": {
    "letter": "port"
  },
  "проходите": {
    "letter": "go through (imperative)"
  },
  "прошлый": {
    "letter": "previous, last"
  },
  "раздевайтесь": {
    "letter": "take your coat off"
  },
  "сердиться/рассердиться": {
    "letter": "to be angry"
  },
  "смеяться/засмеяться": {
    "letter": "to start laughing"
  },
  "сосед": {
    "letter": "neighbour"
  },
  "строиться/построиться": {
    "letter": "to be built"
  },
  "тапочки": {
    "letter": "slippers"
  },
  "туман": {
    "letter": "mist, fog"
  },
  "улыбаться/улыбнуться": {
    "letter": "to smile"
  },
  "фильм": {
    "letter": "film"
  },
  "шутка": {
    "letter": "joke, prank"
  },
  "блюдо": {
    "letter": "dish, course of meal"
  },
  "будьте добры": {
    "letter": "be so good"
  },
  "вегетарианец": {
    "letter": "male vegetarian"
  },
  "вегетарианский": {
    "letter": "vegetarian (adj)"
  },
  "пить/выпить": {
    "letter": "to drink"
  },
  "гость": {
    "letter": "guest"
  },
  "гриб (грибы)": {
    "letter": "mushroom"
  },
  "есть/съесть": {
    "letter": "to eat"
  },
  "капуста": {
    "letter": "cabbage"
  },
  "минеральный": {
    "letter": "mineral (adj)"
  },
  "обед": {
    "letter": "dinner, meal"
  },
  "обедать/по-": {
    "letter": "to dine, have a meal"
  },
  "отдыхать/отдохнуть": {
    "letter": "to rest"
  },
  "официант": {
    "letter": "waiter"
  },
  "официантка (официанток)": {
    "letter": "waitress"
  },
  "помидор": {
    "letter": "tomato"
  },
  "посетитель": {
    "letter": "customer"
  },
  "предупреждать/предупредить": {
    "letter": "to warn"
  },
  "приходить/прийти": {
    "letter": "to come, to arrive"
  },
  "принеси/принесите": {
    "letter": "bring (inf/form imperative)"
  },
  "приносить/принести": {
    "letter": "to bring"
  },
  "прямой": {
    "letter": "direct, straight"
  },
  "рассказывать/рассказать": {
    "letter": "to tell, to talk about"
  },
  "салат": {
    "letter": "salad"
  },
  "Соединённые Штаты Америки": {
    "letter": "USA"
  },
  "уходить/уйти": {
    "letter": "to leave"
  },
  "читать/прочитать": {
    "letter": "to read"
  },
  "шампанское": {
    "letter": "champagne, sparkling wine"
  },
  "возможность": {
    "letter": "possibility, opportunity"
  },
  "входить/войти": {
    "letter": "to enter"
  },
  "вообще": {
    "letter": "in general"
  },
  "вспоминать/вспомнить": {
    "letter": "to remember"
  },
  "учить/выучить": {
    "letter": "to learn/to learn successfully (memorize)"
  },
  "давно": {
    "letter": "long ago"
  },
  "журналист": {
    "letter": "journalist"
  },
  "забывать/забыть": {
    "letter": "to forget"
  },
  "литература": {
    "letter": "literature"
  },
  "находить/найти": {
    "letter": "to find"
  },
  "немного": {
    "letter": "a little"
  },
  "обычно": {
    "letter": "usually"
  },
  "оканчивать/окончить": {
    "letter": "to finish, graduate from"
  },
  "оригинал": {
    "letter": "original"
  },
  "останавливать/остановить": {
    "letter": "to stop something"
  },
  "отвечать/ответить": {
    "letter": "to answer (someone)"
  },
  "относиться к / отнестись к": {
    "letter": "to relate to, to regard, treat"
  },
  "переводить/перевести": {
    "letter": "to translate"
  },
  "переезжать/переехать": {
    "letter": "to move (house), to drive across"
  },
  "повезло": {
    "letter": "(someone) was lucky"
  },
  "по-моему": {
    "letter": "in my opinion"
  },
  "по-немецки": {
    "letter": "in German"
  },
  "понимать/понять": {
    "letter": "to understand"
  },
  "популярный": {
    "letter": "popular"
  },
  "поступать/поступить": {
    "letter": "to enter (university, etc)"
  },
  "преподаватель": {
    "letter": "teacher, lecturer"
  },
  "преподавательница": {
    "letter": "teacher, lecturer"
  },
  "преподавать/преподать": {
    "letter": "to teach"
  },
  "приезжать/приехать": {
    "letter": "to arrive by transport"
  },
  "приказывать/приказать": {
    "letter": "to order someone to do something"
  },
  "жить/пожить": {
    "letter": "to live"
  },
  "равнодушно": {
    "letter": "indifferently, with indifference"
  },
  "радость": {
    "letter": "joy"
  },
  "рождаться/родиться": {
    "letter": "to be born"
  },
  "роман": {
    "letter": "novel, love affair"
  },
  "современный": {
    "letter": "modern, contemporary"
  },
  "считать/счесть": {
    "letter": "to consider, to count"
  },
  "телевизор": {
    "letter": "television"
  },
  "уметь/суметь": {
    "letter": "to know how to"
  },
  "шофёр": {
    "letter": "driver, chauffeur"
  },
  "август": {
    "letter": "August"
  },
  "беспокоиться/за-": {
    "letter": "to worry"
  },
  "возвращаться/вернуться": {
    "letter": "to return, come back"
  },
  "возражать/возразить": {
    "letter": "to object"
  },
  "вредно": {
    "letter": "harmful, it's harmful"
  },
  "годовщина": {
    "letter": "anniversary"
  },
  "громкий": {
    "letter": "loud"
  },
  "мужской": {
    "letter": "male"
  },
  "напиваться/напиться": {
    "letter": "to get drunk"
  },
  "настроение": {
    "letter": "mood"
  },
  "недалеко": {
    "letter": "not far"
  },
  "немножко": {
    "letter": "a little (diminutive)"
  },
  "оставаться/остаться": {
    "letter": "to remain, to stay"
  },
  "открывать/открыть": {
    "letter": "to open"
  },
  "отмечать/отметить": {
    "letter": "to mark, to celebrate"
  },
  "понятно": {
    "letter": "comprehensible"
  },
  "пьяный": {
    "letter": "drunk"
  },
  "развод": {
    "letter": "divorce"
  },
  "сестра": {
    "letter": "sister"
  },
  "суббота": {
    "letter": "Saturday"
  },
  "тихо": {
    "letter": "quiet, it's quiet"
  },
  "шапка (шапок)": {
    "letter": "hat (no brim)"
  },
  "шумно": {
    "letter": "noisy, it's noisy"
  },
  "бояться/побояться": {
    "letter": "to be afraid of (imp)"
  },
  "выходить/выйти": {
    "letter": "to go out"
  },
  "выход": {
    "letter": "exit"
  },
  "довольно": {
    "letter": "fairly, quite"
  },
  "доходить/дойти": {
    "letter": "to reach (on foot)"
  },
  "ещё раз": {
    "letter": "again"
  },
  "женский": {
    "letter": "female"
  },
  "записка (записок)": {
    "letter": "note"
  },
  "клиент": {
    "letter": "client"
  },
  "надоело": {
    "letter": "that's enough, I'm tired (of it)"
  },
  "наказывать/наказать": {
    "letter": "to punish"
  },
  "напоминать/напомнить": {
    "letter": "to remind (someone)"
  },
  "находиться/найтись": {
    "letter": "to be situated"
  },
  "обязательно": {
    "letter": "definitely, without fail"
  },
  "освобождаться/освободиться": {
    "letter": "to become free"
  },
  "оставлять/оставить": {
    "letter": "to leave (something)"
  },
  "передавать/передать": {
    "letter": "to pass, transmit, give message (to someone)"
  },
  "пересаживаться/пересесть": {
    "letter": "to change (from one form of transport to another)"
  },
  "переставать/перестать": {
    "letter": "to stop (doing something)"
  },
  "переход": {
    "letter": "street crossing"
  },
  "плакать/заплакать": {
    "letter": "to cry (to start crying)"
  },
  "поворачивать/повернуть": {
    "letter": "to turn (change direction)"
  },
  "подземный": {
    "letter": "underground"
  },
  "проезжать/проехать": {
    "letter": "to travel to"
  },
  "разрешать/разрешить": {
    "letter": "to allow (someone)"
  },
  "садиться/сесть": {
    "letter": "to sit down, to board"
  },
  "секретарь": {
    "letter": "secretary"
  },
  "сердце": {
    "letter": "heart"
  },
  "слева": {
    "letter": "on the left"
  },
  "собор василия блаженного": {
    "letter": "St Basil's on Red Square (the Cathedral of Vasilii the Blessed)"
  },
  "спускаться/спуститься": {
    "letter": "to go down"
  },
  "телефон": {
    "letter": "telephone"
  },
  "трамвай (трамваев)": {
    "letter": "tram"
  },
  "турист": {
    "letter": "tourist"
  },
  "успевать/успеть": {
    "letter": "to have time (to do something)"
  },
  "уставать/устать": {
    "letter": "to get tired"
  },
  "четвёртый": {
    "letter": "fourth"
  },
  "бывший": {
    "letter": "former"
  },
  "варенье": {
    "letter": "jam, preserves"
  },
  "врач": {
    "letter": "doctor"
  },
  "вставать/встать": {
    "letter": "to get up"
  },
  "гид": {
    "letter": "guide (person)"
  },
  "гитара": {
    "letter": "guitar"
  },
  "готовить/приготовить": {
    "letter": "to prepare, to cook"
  },
  "дальше": {
    "letter": "farther"
  },
  "дочка (дочек)": {
    "letter": "daughter (diminutive)"
  },
  "завод": {
    "letter": "factory"
  },
  "завтрак": {
    "letter": "breakfast"
  },
  "завтракать/по-": {
    "letter": "to eat breakfast"
  },
  "заниматься/заняться": {
    "letter": "to study (something)"
  },
  "знакомить/по-": {
    "letter": "to introduce someone to someone"
  },
  "знакомиться/по-": {
    "letter": "to get to know, to meet"
  },
  "играть/сыграть": {
    "letter": "to play"
  },
  "инженер": {
    "letter": "engineer"
  },
  "иностранец": {
    "letter": "foreigner"
  },
  "интересоваться/за-": {
    "letter": "to be interested in"
  },
  "карандаш (pl карандаши , g pl карандаша)": {
    "letter": "pencil"
  },
  "каша": {
    "letter": "kasha, Russian porridge"
  },
  "лимон": {
    "letter": "lemon"
  },
  "любимый": {
    "letter": "favourite"
  },
  "молчать/за-": {
    "letter": "to keep silent, say nothing"
  },
  "музыкант": {
    "letter": "musician"
  },
  "название": {
    "letter": "name (of an object)"
  },
  "организация": {
    "letter": "organization"
  },
  "палец (g sing пальца, pl пальцы )": {
    "letter": "finger"
  },
  "петь/спеть": {
    "letter": "to sing"
  },
  "председатель": {
    "letter": "chairman"
  },
  "привычка (привычек)": {
    "letter": "habit"
  },
  "профессионал": {
    "letter": "professional (noun)"
  },
  "разговаривать": {
    "letter": "to converse with, talk with (imp)"
  },
  "рано": {
    "letter": "early"
  },
  "раньше": {
    "letter": "before, earlier"
  },
  "революционер": {
    "letter": "revolutionary"
  },
  "революция": {
    "letter": "revolution"
  },
  "случаться/случиться": {
    "letter": "to happen, to occur"
  },
  "сначала": {
    "letter": "at first, from the beginning"
  },
  "спутник": {
    "letter": "travelling companion"
  },
  "становиться/стать": {
    "letter": "to become"
  },
  "стена": {
    "letter": "wall"
  },
  "увлекаться/увлечся": {
    "letter": "to be keen on, enthusiastic about"
  },
  "удовольствие": {
    "letter": "pleasure, satisfaction"
  },
  "ужин": {
    "letter": "dinner"
  },
  "ужинать/по-": {
    "letter": "to have dinner"
  },
  "являться/явиться": {
    "letter": "to be (something) (used in formal style, not conversation)"
  },
  "яичница": {
    "letter": "fried eggs"
  },
  "понедельник": {
    "letter": "Monday"
  },
  "вторник": {
    "letter": "Tuesday"
  },
  "среда": {
    "letter": "Wednesday"
  },
  "четверг": {
    "letter": "Thursday"
  },
  "пятница": {
    "letter": "Friday"
  },
  "воскресенье": {
    "letter": "Sunday"
  },
  "пятый": {
    "letter": "fifth"
  },
  "шестой": {
    "letter": "sixth"
  },
  "седьмой": {
    "letter": "seventh"
  },
  "восьмой": {
    "letter": "eighth"
  },
  "девятый": {
    "letter": "ninth"
  },
  "десятый": {
    "letter": "tenth"
  },
  "двадцатый": {
    "letter": "twentieth"
  },
  "сороковой": {
    "letter": "fortieth"
  },
  "пятидесятый": {
    "letter": "fiftieth"
  },
  "шестидесятый": {
    "letter": "sixtieth"
  },
  "семидесятый": {
    "letter": "seventieth"
  },
  "восьмидесятый": {
    "letter": "eightieth"
  },
  "девяностый": {
    "letter": "ninetieth"
  },
  "сотый": {
    "letter": "hundredth"
  },
  "сто первый": {
    "letter": "hundred and first"
  },
  "январь": {
    "letter": "January"
  },
  "февраль": {
    "letter": "February"
  },
  "март": {
    "letter": "March"
  },
  "апрель": {
    "letter": "April"
  },
  "май": {
    "letter": "May"
  },
  "июнь": {
    "letter": "June"
  },
  "июль": {
    "letter": "July"
  },
  "сентябрь": {
    "letter": "September"
  },
  "октябрь": {
    "letter": "October"
  },
  "ноябрь": {
    "letter": "November"
  },
  "декабрь": {
    "letter": "December"
  },
  "большинство": {
    "letter": "majority"
  },
  "будущий": {
    "letter": "future"
  },
  "бюро": {
    "letter": "office"
  },
  "выходной день": {
    "letter": "day off"
  },
  "гастроном": {
    "letter": "food shop"
  },
  "гулять/погулять": {
    "letter": "to take a walk"
  },
  "детство": {
    "letter": "childhood"
  },
  "закрывать/закрыть": {
    "letter": "to close"
  },
  "замечательный": {
    "letter": "remarkable"
  },
  "зарубежный": {
    "letter": "foreign (=иностранный)"
  },
  "затем": {
    "letter": "then, next (= потом)"
  },
  "москвич, москвича": {
    "letter": "Muscovite (f, m)"
  },
  "московский": {
    "letter": "Moscow (adj)"
  },
  "память": {
    "letter": "memory"
  },
  "перерыв": {
    "letter": "break"
  },
  "петербургский": {
    "letter": "Peterburg (adj)"
  },
  "писатель": {
    "letter": "writer"
  },
  "поезд": {
    "letter": "train"
  },
  "половина": {
    "letter": "half"
  },
  "праздник": {
    "letter": "national holiday, festival"
  },
  "проводить/провести": {
    "letter": "to spend ('conduct') time"
  },
  "прогулка, (прогулок)": {
    "letter": "walk"
  },
  "продовольственный": {
    "letter": "food (adj), grocery"
  },
  "промтоварный магазин": {
    "letter": "non-food goods shop"
  },
  "ровно": {
    "letter": "precisely, evenly (time, quantity)"
  },
  "рождение": {
    "letter": "birth"
  },
  "создавать/создать": {
    "letter": "to create"
  },
  "сон": {
    "letter": "sleep, dream (noun)"
  },
  "степень": {
    "letter": "degree, extent"
  },
  "тишина": {
    "letter": "silence, quiet"
  },
  "Урал": {
    "letter": "the Urals"
  },
  "часы": {
    "letter": "watch, clock"
  },
  "чудесный": {
    "letter": "wonderful"
  },
  "экскурсия": {
    "letter": "excursion"
  },
  "сто": {
    "letter": "100"
  },
  "двести": {
    "letter": "200"
  },
  "триста": {
    "letter": "300"
  },
  "четыреста": {
    "letter": "400"
  },
  "пятьсот": {
    "letter": "500"
  },
  "две тысячи": {
    "letter": "2000"
  },
  "пять тысяч": {
    "letter": "5000"
  },
  "двух": {
    "letter": "two (gen)"
  },
  "трёх": {
    "letter": "three (gen)"
  },
  "четырёх": {
    "letter": "four (gen)"
  },
  "близкий": {
    "letter": "near"
  },
  "богатый": {
    "letter": "rich"
  },
  "глубокий": {
    "letter": "deep"
  },
  "тихий": {
    "letter": "quiet"
  },
  "широкий": {
    "letter": "wide"
  },
  "ближе": {
    "letter": "nearer"
  },
  "богаче": {
    "letter": "richer"
  },
  "выше": {
    "letter": "taller"
  },
  "глубже": {
    "letter": "deeper"
  },
  "моложе": {
    "letter": "younger"
  },
  "ниже": {
    "letter": "lower"
  },
  "тише": {
    "letter": "quieter"
  },
  "шире": {
    "letter": "wider"
  },
  "умный": {
    "letter": "clever"
  },
  "весёлый": {
    "letter": "cheerful"
  },
  "Азия": {
    "letter": "Asia"
  },
  "американка": {
    "letter": "American woman"
  },
  "анекдот": {
    "letter": "joke, anecdote"
  },
  "Байкал": {
    "letter": "Lake Baikal"
  },
  "бар": {
    "letter": "bar"
  },
  "гора (acc гору, nom pl горы)": {
    "letter": "hill, mountain"
  },
  "граница": {
    "letter": "border"
  },
  "доставать/достать": {
    "letter": "to get hold of, obtain, to reach"
  },
  "древний": {
    "letter": "ancient"
  },
  "занимать/занять": {
    "letter": "to occupy (something)"
  },
  "запас": {
    "letter": "stock, reserve"
  },
  "зверь (зверей)": {
    "letter": "(wild) animal"
  },
  "золото": {
    "letter": "gold"
  },
  "Китай": {
    "letter": "China"
  },
  "лекция": {
    "letter": "lecture"
  },
  "Монголия": {
    "letter": "Mongolia"
  },
  "начало": {
    "letter": "beginning"
  },
  "огромный": {
    "letter": "enormous"
  },
  "озеро": {
    "letter": "lake"
  },
  "остров": {
    "letter": "island"
  },
  "отдельный": {
    "letter": "separate"
  },
  "поближе": {
    "letter": "a bit closer"
  },
  "позавчера": {
    "letter": "the day before yesterday"
  },
  "приглашать/пригласить": {
    "letter": "to invite (someone)"
  },
  "птица": {
    "letter": "bird"
  },
  "редкий": {
    "letter": "rare"
  },
  "специалист": {
    "letter": "specialist"
  },
  "территория": {
    "letter": "territory"
  },
  "худой": {
    "letter": "thin, bad"
  },
  "чистый": {
    "letter": "pure, clean"
  },
  "воспитывать/воспитать": {
    "letter": "to bring up, to rear (someone)"
  },
  "встречаться/встретиться": {
    "letter": "to meet (someone)"
  },
  "вход": {
    "letter": "entrance"
  },
  "декан": {
    "letter": "dean"
  },
  "деревня (деревень)": {
    "letter": "village, countryside"
  },
  "договариваться/договориться (c + inst)": {
    "letter": "to come to an agreement, make an arrangement (with someone)"
  },
  "должно быть": {
    "letter": "probably (must be)"
  },
  "Забайкалье": {
    "letter": "region beyond Lake Baikal"
  },
  "заворачивать/завернуть": {
    "letter": "to turn (around something)"
  },
  "зависеть от": {
    "letter": "to depend on (no perf)"
  },
  "записывать/записать": {
    "letter": "to note down"
  },
  "извиняться/извиниться": {
    "letter": "to apologize"
  },
  "командировка": {
    "letter": "business or study trip, assignment"
  },
  "переходить/перейти": {
    "letter": "to cross"
  },
  "подарок": {
    "letter": "present, gift"
  },
  "подниматься/подняться": {
    "letter": "to climb up, to rise"
  },
  "подъезд": {
    "letter": "entrance, doorway"
  },
  "профессор": {
    "letter": "professor"
  },
  "разводиться/развестись": {
    "letter": "to get divorced"
  },
  "рассеянный": {
    "letter": "absent-minded"
  },
  "светофор": {
    "letter": "traffic light"
  },
  "серьёзно": {
    "letter": "seriously"
  },
  "срочный": {
    "letter": "urgent"
  },
  "тёща": {
    "letter": "mother-in-law (wife's mother)"
  },
  "свекровь": {
    "letter": "mother-in-law (husband's mother)"
  },
  "угол": {
    "letter": "corner"
  },
  "вагон": {
    "letter": "carriage"
  },
  "вперёд": {
    "letter": "forward"
  },
  "Германия": {
    "letter": "Germany"
  },
  "грязный": {
    "letter": "dirty"
  },
  "кричать/закричать": {
    "letter": "to shout/to start shouting"
  },
  "как раз": {
    "letter": "exactly, just"
  },
  "лестница": {
    "letter": "staircase"
  },
  "оказываться/оказаться": {
    "letter": "to turn out, to find oneself"
  },
  "остановка (остановoк)": {
    "letter": "stop"
  },
  "пешком": {
    "letter": "on foot"
  },
  "полчаса": {
    "letter": "half an hour"
  },
  "противоположный": {
    "letter": "opposite"
  },
  "путь": {
    "letter": "way"
  },
  "самолёт": {
    "letter": "airplane"
  },
  "сворачивать/свернуть": {
    "letter": "to turn off (physically make a turn)"
  },
  "снег": {
    "letter": "snow"
  },
  "сходить/сойти": {
    "letter": "to get off"
  },
  "соседний": {
    "letter": "neighbouring, next"
  },
  "стадион": {
    "letter": "stadium"
  },
  "странно": {
    "letter": "strange, it's strange"
  },
  "тарелка": {
    "letter": "plate"
  },
  "слышать/услышать": {
    "letter": "to hear"
  },
  "автор": {
    "letter": "author"
  },
  "администратор": {
    "letter": "administrator"
  },
  "бокал": {
    "letter": "wineglass"
  },
  "верить/поверить": {
    "letter": "to believe"
  },
  "взгляд": {
    "letter": "view"
  },
  "вместо того чтобы": {
    "letter": "instead of (doing something)"
  },
  "вряд ли": {
    "letter": "hardly, unlikely"
  },
  "вызывать/вызвать": {
    "letter": "to summon"
  },
  "выражение": {
    "letter": "expression"
  },
  "выходить из себя / выйти из себя": {
    "letter": "to lose one's temper"
  },
  "герой (героев)": {
    "letter": "hero"
  },
  "гневный": {
    "letter": "angry"
  },
  "горничная": {
    "letter": "maid"
  },
  "жаловаться/пожаловаться": {
    "letter": "to complain"
  },
  "заявлять/заявить": {
    "letter": "to announce"
  },
  "иметь в виду": {
    "letter": "to bear in mind"
  },
  "касаться/коснуться": {
    "letter": "to touch, to concern"
  },
  "кипяток": {
    "letter": "boiling water"
  },
  "кровать": {
    "letter": "bed"
  },
  "культура": {
    "letter": "culture"
  },
  "мастер (pl мастера)": {
    "letter": "skilled workman"
  },
  "милиция": {
    "letter": "police"
  },
  "монтёр": {
    "letter": "electrician"
  },
  "наверное": {
    "letter": "probably"
  },
  "нарочно": {
    "letter": "deliberately"
  },
  "обои, обоев": {
    "letter": "wallpaper (m pl, g pl)"
  },
  "одинаковый": {
    "letter": "identical"
  },
  "переводчик": {
    "letter": "translator"
  },
  "переносить/перенести": {
    "letter": "to transfer"
  },
  "переселять/переселить": {
    "letter": "to move, resettle (someone)"
  },
  "повод": {
    "letter": "cause"
  },
  "поездка (поездок)": {
    "letter": "journey"
  },
  "пользоваться/вос-": {
    "letter": "to use (something)"
  },
  "проверять/проверить": {
    "letter": "to check"
  },
  "проживающий": {
    "letter": "resident"
  },
  "просьба": {
    "letter": "request"
  },
  "путешествовать/по-": {
    "letter": "to travel"
  },
  "разделять/разделить": {
    "letter": "to share (have in common)"
  },
  "ремонт": {
    "letter": "repairs, maintenance"
  },
  "родина": {
    "letter": "homeland"
  },
  "розетка (розеток)": {
    "letter": "electrical socket"
  },
  "сеть": {
    "letter": "network, circut"
  },
  "прятать/спрятать": {
    "letter": "to hide"
  },
  "сразу же": {
    "letter": "immediately"
  },
  "стиль": {
    "letter": "style"
  },
  "терпеть/потерпеть": {
    "letter": "to endure, to be patient"
  },
  "терпеть не могу": {
    "letter": "I can't stand"
  },
  "тургруппа": {
    "letter": "tourist group"
  },
  "туфля": {
    "letter": "shoe"
  },
  "уважать": {
    "letter": "to respect (no perf)"
  },
  "устраивать/устроить": {
    "letter": "to organize something, to suit someone"
  },
  "цвет (pl цвета)": {
    "letter": "colour"
  },
  "чайник": {
    "letter": "kettle, teapot"
  },
  "частый": {
    "letter": "frequent"
  },
  "чашка (чашек)": {
    "letter": "cup"
  },
  "электробритва": {
    "letter": "electric razor"
  },
  "брак": {
    "letter": "marriage"
  },
  "брачная пара": {
    "letter": "married couple"
  },
  "выступать инициатором / выступить инициатором": {
    "letter": "to be the initiator"
  },
  "двое": {
    "letter": "two, a twosome"
  },
  "заявление": {
    "letter": "application"
  },
  "защищать/защитить": {
    "letter": "to defend, to protect (someone)"
  },
  "известно": {
    "letter": "it is known"
  },
  "инициатива": {
    "letter": "initiative"
  },
  "инициатор": {
    "letter": "initiator"
  },
  "исковое заявление": {
    "letter": "divorce application"
  },
  "количество": {
    "letter": "quantity"
  },
  "конфликт": {
    "letter": "conflict"
  },
  "миллиард": {
    "letter": "billion"
  },
  "подавать/подать": {
    "letter": "to serve, to hand in, to lodge"
  },
  "полтора": {
    "letter": "one and a half (m,n)"
  },
  "полторы": {
    "letter": "one and a half"
  },
  "происходить/произойти": {
    "letter": "to occur"
  },
  "разводящийся": {
    "letter": "divorcing"
  },
  "распадающийся": {
    "letter": "breaking up"
  },
  "распадаться/распасться": {
    "letter": "to break up"
  },
  "свадьба (свадеб)": {
    "letter": "wedding"
  },
  "семейный": {
    "letter": "family (adj)"
  },
  "Советский Союз": {
    "letter": "Soviet Union"
  },
  "спектакль": {
    "letter": "performance, show"
  },
  "сравнивать/сравнить": {
    "letter": "to compare"
  },
  "стремиться/устремиться": {
    "letter": "to strive, to try"
  },
  "супруг, супруга, супруги": {
    "letter": "spouse (m,f,pl)"
  },
  "существовать/про-": {
    "letter": "to exist"
  },
  "тем самый": {
    "letter": "in this way ('by that very')"
  },
  "то есть": {
    "letter": "that is"
  },
  "треть": {
    "letter": "a third"
  },
  "трое": {
    "letter": "three, a threesome"
  },
  "четверо": {
    "letter": "four, a foursome"
  },
  "четверть": {
    "letter": "quarter"
  },
  "акцент": {
    "letter": "accent"
  },
  "библиотека": {
    "letter": "library"
  },
  "ближайший": {
    "letter": "next, nearest"
  },
  "будние дни": {
    "letter": "weekdays"
  },
  "век": {
    "letter": "century"
  },
  "виза": {
    "letter": "visa"
  },
  "завидовать/позавидовать": {
    "letter": "to envy"
  },
  "заезжать/заехать": {
    "letter": "to call on someone (by transport)"
  },
  "заказывать/заказать": {
    "letter": "to order (something)"
  },
  "заместитель": {
    "letter": "deputy"
  },
  "звучать/прозвучать": {
    "letter": "to sound"
  },
  "издательство": {
    "letter": "publishing house"
  },
  "контакт": {
    "letter": "contact"
  },
  "контракт": {
    "letter": "contract"
  },
  "менять/поменять": {
    "letter": "to change"
  },
  "министерство": {
    "letter": "ministry"
  },
  "однажды": {
    "letter": "once, one day"
  },
  "парикмахерская": {
    "letter": "hairdresser's"
  },
  "переговоры": {
    "letter": "negotiations, talks"
  },
  "подписывать/подписать": {
    "letter": "to sign"
  },
  "поздравлять/поздравить": {
    "letter": "to congratulate"
  },
  "посылать/послать": {
    "letter": "to sprinkle (with sth solid)"
  },
  "поэзия": {
    "letter": "poetry"
  },
  "поэт": {
    "letter": "poet"
  },
  "прерывать/прервать": {
    "letter": "to interrupt"
  },
  "престарелый": {
    "letter": "aged"
  },
  "приезд": {
    "letter": "arrival"
  },
  "принцип": {
    "letter": "principle"
  },
  "распространённый": {
    "letter": "common, widespread"
  },
  "смешно": {
    "letter": "it's funny"
  },
  "срок": {
    "letter": "period of time, time limit"
  },
  "стих": {
    "letter": "verse"
  },
  "сутки": {
    "letter": "twenty-four hours"
  },
  "святой": {
    "letter": "saint"
  },
  "тогдашний": {
    "letter": "then (colloquial, adj)"
  },
  "учреждение": {
    "letter": "institution, office"
  },
  "умирать/умереть": {
    "letter": "to die"
  },
  "фирма": {
    "letter": "firm, company"
  },
  "шутить/пошутить": {
    "letter": "to joke"
  },
  "экзамен": {
    "letter": "examination"
  },
  "эмигрировать": {
    "letter": "to emigrate (impf and perf)"
  },
  "эпоха": {
    "letter": "era, epoch"
  },
  "ананас": {
    "letter": "pineapple"
  },
  "валюта": {
    "letter": "currency, hard currency"
  },
  "значение": {
    "letter": "meaning, significance"
  },
  "никакой": {
    "letter": "no, none at all, any"
  },
  "обстоятельство": {
    "letter": "circumstance"
  },
  "переживать/пережать": {
    "letter": "to be upset, to worry"
  },
  "платить/заплатить": {
    "letter": "to pay"
  },
  "бывать/побывать": {
    "letter": "to visit (someone)"
  },
  "дарить/подарить": {
    "letter": "to give, to present"
  },
  "прекрасный": {
    "letter": "beautiful, fine"
  },
  "придумывать/придумать": {
    "letter": "to think up, to invent"
  },
  "продажа": {
    "letter": "sale"
  },
  "расти/вырасти": {
    "letter": "to grow"
  },
  "самостоятельно": {
    "letter": "independently ('self standing')"
  },
  "случайно": {
    "letter": "by chance"
  },
  "спекулянт": {
    "letter": "speculator (black marketeer)"
  },
  "спешить/поспешить": {
    "letter": "to hurry"
  },
  "справка (справок)": {
    "letter": "(piece of) information"
  },
  "стоить": {
    "letter": "to cost, to be worth (no perf)"
  },
  "сумка (сумок)": {
    "letter": "bag, shopping bag"
  },
  "торговец": {
    "letter": "trader"
  },
  "трудность": {
    "letter": "difficulty"
  },
  "уже не": {
    "letter": "not anymore"
  },
  "бросать/бросить": {
    "letter": "to throw, to throw away"
  },
  "вскакивать/вскочить": {
    "letter": "to jump in, to jump up"
  },
  "выскакивать/выскочить": {
    "letter": "to jump out"
  },
  "глядеть/поглядеть": {
    "letter": "to look"
  },
  "занят": {
    "letter": "busy"
  },
  "изба (pl избы)": {
    "letter": "peasant cottage"
  },
  "икра": {
    "letter": "caviar"
  },
  "пугаться/испугаться": {
    "letter": "to take fright (at)"
  },
  "коньяк (g коньяка)": {
    "letter": "cognac"
  },
  "ложиться/лечь": {
    "letter": "to lie down"
  },
  "мешать/помешать": {
    "letter": "to hinder (someone)"
  },
  "мешок": {
    "letter": "bag, sack"
  },
  "мужик": {
    "letter": "peasant man"
  },
  "ничего не поделаешь": {
    "letter": "there's nothing one can do (idiom)"
  },
  "ну,..": {
    "letter": "well,..."
  },
  "обижать/обидеть": {
    "letter": "to offend, to insult"
  },
  "отдавать/отдать": {
    "letter": "to give back, to return (to someone), to give away"
  },
  "отказываться/отказаться": {
    "letter": "to refuse"
  },
  "охотно": {
    "letter": "willingly"
  },
  "печь": {
    "letter": "stove"
  },
  "ночевать/переночевать": {
    "letter": "to spend the night"
  },
  "Пой!": {
    "letter": "Sing!"
  },
  "класть/положить": {
    "letter": "to put"
  },
  "стучать/постучать": {
    "letter": "to knock (at)"
  },
  "приходиться/прийтись": {
    "letter": "to be forced to"
  },
  "пускать/пустить": {
    "letter": "to let, to permit, to let in/out"
  },
  "стакан": {
    "letter": "glass, tumbler"
  },
  "хватать, сватыват / схватить": {
    "letter": "to seize (someone by something)"
  },
  "тесно": {
    "letter": "crowded, tight"
  },
  "ухо": {
    "letter": "ear"
  },
  "хозяин (pl хозяева, g pl хозяев)": {
    "letter": "host, owner, master"
  },
  "нечаянно": {
    "letter": "accidentally"
  },
  "ну что вы": {
    "letter": "forget it (informal)"
  },
  "пустяк": {
    "letter": "trifle"
  },
  "прочь": {
    "letter": "away, aside, away with you"
  },
  "Ни в коем случае.": {
    "letter": "Out of the question."
  },
  "ни за что": {
    "letter": "not for anything, never"
  },
  "наотрез": {
    "letter": "absolutely, flat-out"
  },
  "адрес (pl адреса)": {
    "letter": "address"
  },
  "атмосфера": {
    "letter": "atmosphere"
  },
  "возвращение": {
    "letter": "return"
  },
  "гастроли (f pl) (гастролей)": {
    "letter": "(theatre) tour ('guest roles')"
  },
  "детская площадка": {
    "letter": "children's playground"
  },
  "застолье": {
    "letter": "party (round a table with food/drink)"
  },
  "знакомый, знакомая": {
    "letter": "acquaintance (m, f)"
  },
  "знакомство": {
    "letter": "acquaintanceship, first meeting"
  },
  "качели (f pl, no sing) (качелей)": {
    "letter": "swings"
  },
  "кое-какой": {
    "letter": "some, any"
  },
  "неожиданный": {
    "letter": "unexpected"
  },
  "несмотря на то, что": {
    "letter": "in spite of the fact that"
  },
  "новогодний": {
    "letter": "New Year (adj)"
  },
  "особый": {
    "letter": "special"
  },
  "отличный": {
    "letter": "excellent"
  },
  "отъезд": {
    "letter": "departure"
  },
  "печаль": {
    "letter": "sadness"
  },
  "повторять/повторить": {
    "letter": "to repeat"
  },
  "поздравление": {
    "letter": "greeting, congratulation"
  },
  "поколение": {
    "letter": "generation"
  },
  "поселяться/поселиться": {
    "letter": "to settle, to take up residence"
  },
  "прежде всего": {
    "letter": "first of all, primarily"
  },
  "приступать к / приступить к": {
    "letter": "to get down to, to start on"
  },
  "пятиэтажный": {
    "letter": "five-floor"
  },
  "работа над + inst": {
    "letter": "work on something"
  },
  "середина": {
    "letter": "middle"
  },
  "скамья": {
    "letter": "bench"
  },
  "собираться/собраться": {
    "letter": "to intend to"
  },
  "собирать/собрать": {
    "letter": "to gather"
  },
  "старик": {
    "letter": "old man"
  },
  "старушка": {
    "letter": "old woman"
  },
  "статья": {
    "letter": "article"
  },
  "счастье": {
    "letter": "happiness, luck"
  },
  "так что": {
    "letter": "so, so that"
  },
  "то, что": {
    "letter": "the fact that"
  },
  "уважаемый": {
    "letter": "respected"
  },
  "уважение": {
    "letter": "respect"
  },
  "удивлённо": {
    "letter": "with surprise"
  },
  "удивляться/удивиться": {
    "letter": "to be surprised"
  },
  "улыбка": {
    "letter": "smile"
  },
  "целовать/поцеловать": {
    "letter": "to kiss"
  },
  "шумный": {
    "letter": "noisy"
  },
  "агент": {
    "letter": "agent"
  },
  "актёр": {
    "letter": "actor"
  },
  "актриса": {
    "letter": "actress"
  },
  "аплодировать/за-": {
    "letter": "to applaud someone"
  },
  "Африка": {
    "letter": "Africa"
  },
  "Великобритания": {
    "letter": "Great Britain"
  },
  "впервые": {
    "letter": "for the first time"
  },
  "выбирать/выбрать": {
    "letter": "to choose"
  },
  "вынуждать/вынудить": {
    "letter": "to force (someone to do something)"
  },
  "высказываться за/высказаться за": {
    "letter": "to speak for, to speak in favour of"
  },
  "генерал": {
    "letter": "general"
  },
  "единственно": {
    "letter": "only, solely (=только)"
  },
  "задавать/задать": {
    "letter": "to set, to pose"
  },
  "исключать/исключить": {
    "letter": "to exclude"
  },
  "кампания": {
    "letter": "campaign"
  },
  "кинофестиваль": {
    "letter": "film festival"
  },
  "король": {
    "letter": "king"
  },
  "обладать": {
    "letter": "to possess (no perf)"
  },
  "обсуждать/обсудить": {
    "letter": "to discuss"
  },
  "объявлять/объявить": {
    "letter": "to announce"
  },
  "опрос": {
    "letter": "survey"
  },
  "организо́вывать/организовать": {
    "letter": "to organize"
  },
  "поклонник": {
    "letter": "admirer"
  },
  "представлять/представить": {
    "letter": "to offer, to show, to introduce, to imagine"
  },
  "президент": {
    "letter": "president"
  },
  "премьера": {
    "letter": "premiere"
  },
  "премьер-министр": {
    "letter": "prime minister"
  },
  "принимать/принять": {
    "letter": "to accept"
  },
  "приобретать/приобрести": {
    "letter": "to acquire"
  },
  "программа": {
    "letter": "programme"
  },
  "разведённый": {
    "letter": "divorced"
  },
  "реальный": {
    "letter": "real, real-life"
  },
  "решение": {
    "letter": "decision"
  },
  "содержание": {
    "letter": "content, contents"
  },
  "спорить/поспорить": {
    "letter": "to argue, to dispute"
  },
  "суперзвезда": {
    "letter": "superstar"
  },
  "театральный": {
    "letter": "theatre (adj)"
  },
  "участвовать/по-": {
    "letter": "to participate in"
  },
  "удивлять/удивить": {
    "letter": "to surprise (someone)"
  },
  "чиновник": {
    "letter": "bureaucrat"
  },
  "беспощадно": {
    "letter": "mercilessly"
  },
  "борода": {
    "letter": "beard"
  },
  "боярин": {
    "letter": "boyar (powerful landowner)"
  },
  "брить/побрить": {
    "letter": "to shave"
  },
  "быт": {
    "letter": "way of life (=образ жизнь)"
  },
  "военно-морское дело": {
    "letter": "naval matters, naval science"
  },
  "военный": {
    "letter": "military"
  },
  "стан": {
    "letter": "camp"
  },
  "восстание": {
    "letter": "uprising"
  },
  "вскоре": {
    "letter": "soon (after)"
  },
  "выдающийся": {
    "letter": "outstanding"
  },
  "ясный": {
    "letter": "clear, fine, fair, evident"
  },
  "-яснять/-яснить": {
    "letter": "to clarify, to explain (combining form)"
  },
  "выяснять/выяснить": {
    "letter": "to find out, establish"
  },
  "глава": {
    "letter": "head, chief, chapter"
  },
  "Голландия": {
    "letter": "Holland"
  },
  "государство": {
    "letter": "State"
  },
  "государь": {
    "letter": "sovereign, sire"
  },
  "государственный": {
    "letter": "state, belonging to the state"
  },
  "дворянин": {
    "letter": "nobleman"
  },
  "бить/побить": {
    "letter": "to beat"
  },
  "добивать/добить": {
    "letter": "to finish off, to kill off"
  },
  "добиваться/добиться": {
    "letter": "to work for, to get, to obtain"
  },
  "европеизация": {
    "letter": "Europeanization"
  },
  "европеец": {
    "letter": "European"
  },
  "жениться (на) /по- (на) (+ prep)": {
    "letter": "to marry (of a man), to take a wife"
  },
  "заговорить": {
    "letter": "to start speaking first, to agree, to plot, to cast a spell"
  },
  "заговор": {
    "letter": "plot"
  },
  "заседать": {
    "letter": "to sit, to take part in a conference (imp. only)"
  },
  "заседание": {
    "letter": "meeting, sitting"
  },
  "издавать/издать": {
    "letter": "to publish"
  },
  "казни́ть": {
    "letter": "to execute (imp. and perf.)"
  },
  "колено": {
    "letter": "knee"
  },
  "корабль": {
    "letter": "ship"
  },
  "крепость": {
    "letter": "fortress"
  },
  "крепостной": {
    "letter": "serf"
  },
  "крепостничество": {
    "letter": "serfdom"
  },
  "культурный": {
    "letter": "cultural"
  },
  "купец (купцов)": {
    "letter": "merchant"
  },
  "медицина": {
    "letter": "medicine (field of study)"
  },
  "прав": {
    "letter": "right, proper"
  },
  "править (+ inst)": {
    "letter": "to govern, to rule (imp. only)"
  },
  "направлять/направить": {
    "letter": "to direct"
  },
  "учиться/научиться": {
    "letter": "to learn to do something"
  },
  "непосильный": {
    "letter": "excessive, over-demanding"
  },
  "ножницы": {
    "letter": "scissors"
  },
  "обрезáть/обрéзaть": {
    "letter": "to clip, to cut"
  },
  "обсерватория": {
    "letter": "observatory"
  },
  "обычай": {
    "letter": "custom"
  },
  "обязывать/обязать": {
    "letter": "to compel, to oblige"
  },
  "одновременно": {
    "letter": "at the same time"
  },
  "организатор": {
    "letter": "organizer"
  },
  "отставать/отстать": {
    "letter": "to be backward, to lag behind someone"
  },
  "отсталость": {
    "letter": "backwardness"
  },
  "парламент": {
    "letter": "parliament"
  },
  "передовой": {
    "letter": "advanced, progessive"
  },
  "плотник": {
    "letter": "carpenter"
  },
  "по-европейски": {
    "letter": "in European style"
  },
  "погибать/погибнуть": {
    "letter": "to perish"
  },
  "щадить/пощадить": {
    "letter": "to spare, to have mercy on"
  },
  "посещать/посетить": {
    "letter": "to visit (a place)"
  },
  "полностью": {
    "letter": "completely"
  },
  "предприятие": {
    "letter": "firm, company, business"
  },
  "преобразование": {
    "letter": "reform"
  },
  "преодолевать/преодолеть": {
    "letter": "to overcome"
  },
  "прибегать/прибежать": {
    "letter": "to come running"
  },
  "прибегать/прибегнуть (к)": {
    "letter": "to resort (to)"
  },
  "приговаривать/приговорить": {
    "letter": "to condemn to, to sentence to"
  },
  "приказ": {
    "letter": "order (noun)"
  },
  "приобщать/приобщить": {
    "letter": "to introduce to (something)"
  },
  "промышленный": {
    "letter": "industrial"
  },
  "противник": {
    "letter": "opponent"
  },
  "рабочий": {
    "letter": "worker"
  },
  "расправляться/расправиться": {
    "letter": "to deal with"
  },
  "резко": {
    "letter": "sharply"
  },
  "решительно": {
    "letter": "resolutely, with determination"
  },
  "родной": {
    "letter": "own (of family relationships), native"
  },
  "самодержавие": {
    "letter": "autocracy"
  },
  "согласие": {
    "letter": "agreement"
  },
  "создание": {
    "letter": "creation"
  },
  "способность (к) (f noun)": {
    "letter": "ability"
  },
  "способствовать/по- (+ dat)": {
    "letter": "to assist, to facilitate"
  },
  "спустя": {
    "letter": "later, after (a period of time)"
  },
  "стрелец (стрелцов)": {
    "letter": "strelets"
  },
  "уделять/уделить": {
    "letter": "to give, to devote"
  },
  "укрепление": {
    "letter": "strengthening"
  },
  "умственный": {
    "letter": "mental"
  },
  "уничтожение": {
    "letter": "annihilation"
  },
  "условие": {
    "letter": "condition"
  },
  "ухудшаться/ухудшиться": {
    "letter": "to get worse"
  },
  "физический": {
    "letter": "physical"
  },
  "царевич": {
    "letter": "son of the tsar"
  },
  "цель": {
    "letter": "goal, aim"
  },
  "цивилизация": {
    "letter": "civilization"
  },
  "энергия": {
    "letter": "energy"
  },
  "белый гриб": {
    "letter": "boletus"
  },
  "выкладывать/выложить": {
    "letter": "to spread out"
  },
  "головка": {
    "letter": "little head (diminutive)"
  },
  "грибной": {
    "letter": "mushroom (adj)"
  },
  "добавлять/добавить": {
    "letter": "to add"
  },
  "духовой шкаф": {
    "letter": "oven"
  },
  "жир": {
    "letter": "fat, grease"
  },
  "заменять/заменить": {
    "letter": "to replace"
  },
  "запекание": {
    "letter": "baking"
  },
  "кастрюля": {
    "letter": "saucepan"
  },
  "квашеный": {
    "letter": "sour, fermented"
  },
  "кипящий": {
    "letter": "boiling"
  },
  "лавровый лист": {
    "letter": "bay leaf"
  },
  "ломтик": {
    "letter": "slice"
  },
  "лук": {
    "letter": "onions"
  },
  "маслина": {
    "letter": "olive"
  },
  "миска": {
    "letter": "bowl"
  },
  "нарезáть/нарéзать": {
    "letter": "to cut, to slice"
  },
  "обжаривать/обжарить": {
    "letter": "to fry all over"
  },
  "огурец": {
    "letter": "cucumber"
  },
  "окончание": {
    "letter": "end"
  },
  "оставшийся": {
    "letter": "remaining"
  },
  "очищать/очистить": {
    "letter": "to clean"
  },
  "перец": {
    "letter": "pepper"
  },
  "подача": {
    "letter": "serving"
  },
  "берёза": {
    "letter": "birch tree"
  },
  "подберёзовик": {
    "letter": "brown birch boletus (a type of mushroom)"
  },
  "поджаривать/поджарить": {
    "letter": "to brown"
  },
  "прибавлять/прибавить": {
    "letter": "to add"
  },
  "промывать/промыть": {
    "letter": "to wash thoroughly"
  },
  "рыжик": {
    "letter": "saffron milk-cap (a type of mushroom)"
  },
  "сбрызгивать/сбрызнуть": {
    "letter": "to sprinkle (with liquid) (coll.)"
  },
  "сковорода": {
    "letter": "frying pan"
  },
  "смазывать/смазать": {
    "letter": "to grease something with something"
  },
  "смешивать/смешать": {
    "letter": "to mix"
  },
  "солёный": {
    "letter": "salted, pickled"
  },
  "соль": {
    "letter": "salt"
  },
  "солянка": {
    "letter": "solianka (spicy cabbage dish)"
  },
  "столовый": {
    "letter": "table (adj)"
  },
  "сухарь": {
    "letter": "dried crust, rusk"
  },
  "сушёный": {
    "letter": "dried"
  },
  "томат-пюре": {
    "letter": "tomato puree"
  },
  "тушение": {
    "letter": "stewing"
  },
  "тушёный": {
    "letter": "stewed"
  },
  "тушить/потушить": {
    "letter": "to stew"
  },
  "уксус": {
    "letter": "vinegar"
  },
  "адмиралтейство": {
    "letter": "admiralty"
  },
  "ансамбль": {
    "letter": "ensemble"
  },
  "аркада": {
    "letter": "arcade"
  },
  "архитектурный": {
    "letter": "architectural"
  },
  "барокко": {
    "letter": "baroque"
  },
  "богатство": {
    "letter": "richness, wealth"
  },
  "лепной": {
    "letter": "modeled, moulded"
  },
  "великолепный": {
    "letter": "magnificent"
  },
  "величественный": {
    "letter": "majestic, grand, sublime"
  },
  "верный": {
    "letter": "true, faithful"
  },
  "возвышаться/возвыситься": {
    "letter": "to tower"
  },
  "печать": {
    "letter": "seal, stamp, press"
  },
  "впечатление": {
    "letter": "impression"
  },
  "впечатлять/впечатлить": {
    "letter": "to impress"
  },
  "ворота": {
    "letter": "gates"
  },
  "въезд": {
    "letter": "entry, entrance"
  },
  "въездной": {
    "letter": "entrance (attribute)"
  },
  "въездные ворота": {
    "letter": "entrance gates"
  },
  "даваться/даться": {
    "letter": "to allow oneself (be cheated, be caught, etc)"
  },
  "выдаваться/выдаться": {
    "letter": "to project, to stand out"
  },
  "выступать/выступить": {
    "letter": "to step out, to project, to stick out"
  },
  "выходить на / выйти на (+ acc)": {
    "letter": "to look out on, to open on"
  },
  "садить/посадить": {
    "letter": "to seat, to plant"
  },
  "высаживаться/высадиться": {
    "letter": "to disembark, to land"
  },
  "гармония": {
    "letter": "harmony"
  },
  "гармоничный": {
    "letter": "harmonious"
  },
  "глупый": {
    "letter": "stupid, silly"
  },
  "готовый": {
    "letter": "ready"
  },
  "готов": {
    "letter": "ready (short)"
  },
  "декор": {
    "letter": "decoration"
  },
  "дворец": {
    "letter": "palace"
  },
  "Дворцовая площадь": {
    "letter": "Palace Square"
  },
  "замужем": {
    "letter": "married (said of a woman)"
  },
  "выходить замуж (за)/выйти замуж (за)": {
    "letter": "to marry (of the woman), to take a husband"
  },
  "-полнять/-полнить": {
    "letter": "to fill (combining form)"
  },
  "исполнять/исполнить": {
    "letter": "to carry out, to perform, to execute"
  },
  "колонна": {
    "letter": "column, pillar"
  },
  "крыло": {
    "letter": "wing"
  },
  "ландшафт": {
    "letter": "landscape"
  },
  "лыжа": {
    "letter": "ski (noun)"
  },
  "масштаб": {
    "letter": "scale (as on a map)"
  },
  "матрос": {
    "letter": "sailor"
  },
  "модель": {
    "letter": "model"
  },
  "музейный": {
    "letter": "museum (adj)"
  },
  "набережная": {
    "letter": "embankment"
  },
  "необычайно": {
    "letter": "extraordinarily"
  },
  "неповторимый": {
    "letter": "unique"
  },
  "нужный": {
    "letter": "necessary"
  },
  "образ": {
    "letter": "form, image, manner"
  },
  "обращать/обратить": {
    "letter": "to turn, to direct"
  },
  "океан": {
    "letter": "ocean"
  },
  "опаздывать/опоздать": {
    "letter": "to be late"
  },
  "определять/определить": {
    "letter": "to determine, to define"
  },
  "основывать/основать": {
    "letter": "to found"
  },
  "парадный": {
    "letter": "parade, front, main (entrance), gala, formal, full (dress, uniform)"
  },
  "полуостров": {
    "letter": "peninsula"
  },
  "портфель": {
    "letter": "briefcase"
  },
  "пропорция": {
    "letter": "proportion"
  },
  "разнообразие": {
    "letter": "diversity, variety"
  },
  "располагаться/расположиться": {
    "letter": "to be situated, to be placed"
  },
  "расположен": {
    "letter": "situated (short)"
  },
  "решётка": {
    "letter": "railing, decorated ironwork"
  },
  "склон": {
    "letter": "slope"
  },
  "стул": {
    "letter": "chair"
  },
  "субтропический": {
    "letter": "subtropical"
  },
  "торжественный": {
    "letter": "grand, stately, solemn"
  },
  "тройной": {
    "letter": "triple"
  },
  "украшать/украсить": {
    "letter": "to adorn"
  },
  "фасад": {
    "letter": "facade"
  },
  "чемодан": {
    "letter": "suitcase"
  },
  "батюшки": {
    "letter": "good gracious"
  },
  "благой": {
    "letter": "good, beneficial"
  },
  "говливать/говеть": {
    "letter": "to fast and attend church in preparation for communion (obs. to respect or honor someone highly)"
  },
  "благоговение": {
    "letter": "reverence"
  },
  "бог": {
    "letter": "god"
  },
  "бог с ним / бог с ней": {
    "letter": "good luck to him / good luck to her, what does it matter?"
  },
  "не бойся": {
    "letter": "don't be afraid"
  },
  "ведомство": {
    "letter": "department"
  },
  "вельможа": {
    "letter": "grandee, big shot"
  },
  "ветчина": {
    "letter": "ham"
  },
  "вишня (вишен)": {
    "letter": "cherry"
  },
  "крик": {
    "letter": "outcry, shout"
  },
  "кричать/крикнуть": {
    "letter": "to cry out, to shout (at)"
  },
  "восклицать/воскликнуть": {
    "letter": "to exclaim"
  },
  "восторг": {
    "letter": "delight, enthusiasm"
  },
  "восторженно": {
    "letter": "enthusiastically"
  },
  "восторгаться": {
    "letter": "to be enthusiastic, to be enraptured"
  },
  "вроде": {
    "letter": "like (similar to), such as"
  },
  "тянуть/потянуть": {
    "letter": "to pull"
  },
  "вытягивать/вытянуть": {
    "letter": "to stretch, to stand erect"
  },
  "гимназист": {
    "letter": "grammar-school boy"
  },
  "гимназия": {
    "letter": "grammar school"
  },
  "голубь": {
    "letter": "pigeon, dove"
  },
  "голубчик": {
    "letter": "dear friend, my dear"
  },
  "Господь": {
    "letter": "God (lit: Lord)"
  },
  "Господи!": {
    "letter": "Good heavens! Good Lord!"
  },
  "губа": {
    "letter": "lip"
  },
  "гуща": {
    "letter": "sediment, (coffee) grounds (sing.)"
  },
  "дослуживаться/дослужиться": {
    "letter": "to reach (a position)"
  },
  "дразнить/по-, раз-": {
    "letter": "to tease, to pester, to call someone a name"
  },
  "душка": {
    "letter": "dear, love, nice fellow, nice woman"
  },
  "душонок": {
    "letter": "swell, smart lad"
  },
  "жаловать/по-": {
    "letter": "to grant, to bestow"
  },
  "Добро пожаловать!": {
    "letter": "Welcome!"
  },
  "жалованье": {
    "letter": "(old word) salary"
  },
  "железо": {
    "letter": "iron"
  },
  "железная дорога": {
    "letter": "railway ('iron road')"
  },
  "женат": {
    "letter": "(short adj) married (of a man)"
  },
  "влага": {
    "letter": "moisture"
  },
  "живительный": {
    "letter": "life-giving"
  },
  "живительная влага": {
    "letter": "(coll) intoxicating liquor"
  },
  "стегать/стегнуть": {
    "letter": "to whip, to lash"
  },
  "застёгивать/застегнуть": {
    "letter": "to fasten"
  },
  "вьюк": {
    "letter": "load, bale, saddlebag"
  },
  "навьючивать/навьючить (+ inst)": {
    "letter": "to load (with)"
  },
  "хихикать/захихикать": {
    "letter": "to giggle"
  },
  "изумлять/изумить": {
    "letter": "to amaze"
  },
  "изумляться/изумиться": {
    "letter": "to be astonished"
  },
  "искра": {
    "letter": "spark"
  },
  "кривой": {
    "letter": "crooked"
  },
  "кривить/искривить": {
    "letter": "to bend, to distort"
  },
  "искривляться/искривиться": {
    "letter": "to become distorted, to twist"
  },
  "казна": {
    "letter": "treasury"
  },
  "казённый": {
    "letter": "state, belonging to the state"
  },
  "как бы": {
    "letter": "as it where, as if"
  },
  "картонка (картонок)": {
    "letter": "cardboard box"
  },
  "кислый": {
    "letter": "sour"
  },
  "кислота (pl кислоты)": {
    "letter": "acidity, sourness"
  },
  "китаец": {
    "letter": "Chinese (noun)"
  },
  "кое-как": {
    "letter": "somehow, just, with difficulty"
  },
  "кофейный": {
    "letter": "coffee (adj)"
  },
  "краса": {
    "letter": "beauty (poet)"
  },
  "красавец": {
    "letter": "handsome man"
  },
  "лоб": {
    "letter": "forehead"
  },
  "лобызать/об-": {
    "letter": "to kiss (archaic or ironic)"
  },
  "лобызаться/облобызаться": {
    "letter": "(old word) to kiss each other"
  },
  "лобызание": {
    "letter": "osculation, kiss (archaic)"
  },
  "лосниться": {
    "letter": "to shine, gleam (imp. only)"
  },
  "лютеранка (лютеранок)": {
    "letter": "Lutheran (Protestant)"
  },
  "милость": {
    "letter": "grace, mercy"
  },
  "милостивый": {
    "letter": "(old word) gracious, kind"
  },
  "милый мой": {
    "letter": "my dear"
  },
  "мундир": {
    "letter": "uniform (military)"
  },
  "небось": {
    "letter": "(coll) probably"
  },
  "некоторым образом": {
    "letter": "somehow, so to speak"
  },
  "камень": {
    "letter": "stone"
  },
  "каменеть/окаменеть": {
    "letter": "to turn to stone"
  },
  "шлем": {
    "letter": "helmet"
  },
  "ошеломлять/ошеломить": {
    "letter": "to stun, to astound"
  },
  "папироса": {
    "letter": "cigarette"
  },
  "папироска": {
    "letter": "Russian-style cigarette"
  },
  "пахнуть": {
    "letter": "to smell (of something) (imp. only)"
  },
  "бледный": {
    "letter": "pale, wan, pallid"
  },
  "бледнеть/побледнеть": {
    "letter": "to turn pale"
  },
  "подбородок": {
    "letter": "chin"
  },
  "дёргать/дёрнуть": {
    "letter": "to pull, to tug"
  },
  "подёргивать/подёрнуть": {
    "letter": "to cover, to coat"
  },
  "жать, сжимать / сжать": {
    "letter": "to press, to squeeze, to shake (hands)"
  },
  "пожимать/пожать": {
    "letter": "to press, to squeeze, to shake (hands) (archaic, used only in set idioms)"
  },
  "пожимать руку": {
    "letter": "to shake hands (imp)"
  },
  "пожать руку": {
    "letter": "to shake hands (perf)"
  },
  "пожимать плечами": {
    "letter": "to shrug one's shoulders (imp)"
  },
  "пожать плечами": {
    "letter": "to shrug one's shoulders (perf)"
  },
  "поклон": {
    "letter": "a bow (gesture)"
  },
  "поклоняться/поклониться": {
    "letter": "to bow"
  },
  "полно": {
    "letter": "(coll) enough of that"
  },
  "полный": {
    "letter": "full (of)"
  },
  "миловать/по-": {
    "letter": "to pardon, to forgive, to show mercy on"
  },
  "помилуй, помилуйте": {
    "letter": "pardon me (inf, form) (perf)"
  },
  "морщить/сморщить": {
    "letter": "to wrinkle (one's nose), to purse (one's lips)"
  },
  "морщиться/поморщиться": {
    "letter": "to wrinkle, to knit one's brow"
  },
  "портсигар": {
    "letter": "cigarette-case, cigar-case"
  },
  "сыпать/посыпать": {
    "letter": "to pour, to scatter (of solids)"
  },
  "сыпаться/посыпаться": {
    "letter": "to rain down (coll)"
  },
  "чтить/почтить": {
    "letter": "to honor, to revere"
  },
  "почтительный": {
    "letter": "respectful, deferential"
  },
  "всходить, восходить/взойти": {
    "letter": "to mount, to ascend, to rise"
  },
  "превосходить/превзойти": {
    "letter": "to excel, to surpass, to exceed"
  },
  "превосходительство": {
    "letter": "Excellency (title)"
  },
  "приватный": {
    "letter": "private (adj, arch)"
  },
  "приватно": {
    "letter": "(old word) privately"
  },
  "щурить/сощурить": {
    "letter": "to squint (one's eyes) (trans)"
  },
  "щурить глаза  / сощурить глаза": {
    "letter": "to squint"
  },
  "прищуривать/прищурить": {
    "letter": "to cause to squint"
  },
  "прищуренный": {
    "letter": "half-closed (of eyes)"
  },
  "приятный": {
    "letter": "pleasant"
  },
  "приятель": {
    "letter": "friend, pal"
  },
  "проба": {
    "letter": "test, trial"
  },
  "пробавляться/пробавиться (+ inst)": {
    "letter": "(coll) to get by, to make do"
  },
  "жечь/cжечь": {
    "letter": "to burn"
  },
  "прожигать/прожечь": {
    "letter": "to burn through"
  },
  "Прощай!, Прощайте!": {
    "letter": "Farewell! (inf, form)"
  },
  "прощание": {
    "letter": "farewell, parting"
  },
  "против": {
    "letter": "against, opposite, contrary to"
  },
  "противно": {
    "letter": "disgusting, disgusted"
  },
  "пуговица": {
    "letter": "button"
  },
  "пуговка (пуговок) (dim)": {
    "letter": "button"
  },
  "горб": {
    "letter": "hump"
  },
  "горбить/сгорбить": {
    "letter": "to hunch (transitive)"
  },
  "горбиться/сгорбиться": {
    "letter": "to stoop, to become bent"
  },
  "сладкий": {
    "letter": "sweet"
  },
  "сладость": {
    "letter": "sweetness"
  },
  "слеза": {
    "letter": "tear, teardrop"
  },
  "слуга": {
    "letter": "servant"
  },
  "служить/послужить": {
    "letter": "to serve, to work (as)"
  },
  "снимать/снять": {
    "letter": "to take off (something)"
  },
  "спеть/поспеть": {
    "letter": "to ripen"
  },
  "спелый": {
    "letter": "ripe"
  },
  "спина": {
    "letter": "back"
  },
  "узкий": {
    "letter": "narrow"
  },
  "суживаться/сузиться": {
    "letter": "to become narrow"
  },
  "ёж": {
    "letter": "hedgehog"
  },
  "ёжить/съёжить": {
    "letter": "(coll) to shrink, to stretch (smth)"
  },
  "съёживаться/съёжиться": {
    "letter": "to shrivel, to shrink"
  },
  "толстый": {
    "letter": "thick, fat (adj)"
  },
  "тон": {
    "letter": "tone"
  },
  "тонкий": {
    "letter": "thin"
  },
  "херес": {
    "letter": "sherry"
  },
  "кратный": {
    "letter": "multiple"
  },
  "троекратно": {
    "letter": "thrice, three times"
  },
  "туловище": {
    "letter": "torso"
  },
  "узел (pl узлы)": {
    "letter": "knot"
  },
  "урождённая": {
    "letter": "née (indicating maiden name)"
  },
  "ронять/уронить": {
    "letter": "to drop (usually unintentionally)"
  },
  "устремлять/устремить": {
    "letter": "to rush, to direct (one's gaze to), to fasten (one's eyes on)"
  },
  "тупой": {
    "letter": "dull, blunt, stupid"
  },
  "ученик (g sg ученика)": {
    "letter": "pupil, student (non-university)"
  },
  "тупить/затупить": {
    "letter": "to dull, to blunt"
  },
  "уступать/уступить": {
    "letter": "to give in, to cede, to sell, to discount"
  },
  "уступка (уступок)": {
    "letter": "price reduction, concession"
  },
  "ступать/ступить": {
    "letter": "to tread on, to step on"
  },
  "флёрдоранж": {
    "letter": "orange blossom"
  },
  "фураж": {
    "letter": "fodder"
  },
  "фуражка (фуражек)": {
    "letter": "peaked cap"
  },
  "хорошенько": {
    "letter": "(coll) properly, well and truly"
  },
  "худенький": {
    "letter": "(coll) slender, thin"
  },
  "чинопочитание": {
    "letter": "respect for rank, kowtowing, boot-licking"
  },
  "шаркать/шаркнуть": {
    "letter": "to shuffle"
  },
  "широчайший": {
    "letter": "widest"
  },
  "штука": {
    "letter": "thing, piece"
  },
  "щёголь": {
    "letter": "dandy"
  },
  "ябеда": {
    "letter": "information, slanderer, informer, tell-tale, sneak"
  },
  "ябедничать/наябедничать (на)": {
    "letter": "to inform (on), to tell tales (about), to sneak (on)"
  }
}

function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;
