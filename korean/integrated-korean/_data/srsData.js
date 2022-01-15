// Configuration
const localStorageKey = "korean" + "IntegratedKorean" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ko-KR";
const activateSpeech = true;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

// Welcome Popover Content
const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the Integrated Korean (Beginning 1) textbook. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "1": {
        "character": "1학년",
        "letter": "freshman"
    },
    "2": {
        "character": "2학년",
        "letter": "sophomore"
    },
    "3": {
        "character": "3학년",
        "letter": "junior"
    },
    "4": {
        "character": "4학년",
        "letter": "senior"
    },
    "5": {
        "character": "과",
        "letter": "lesson, chapter"
    },
    "6": {
        "character": "대학생",
        "letter": "college student"
    },
    "7": {
        "character": "미국",
        "letter": "the United States"
    },
    "8": {
        "character": "사람",
        "letter": "person, people"
    },
    "9": {
        "character": "인사",
        "letter": "greeting"
    },
    "10": {
        "character": "학년",
        "letter": "school year"
    },
    "11": {
        "character": "학생",
        "letter": "student"
    },
    "12": {
        "character": "한국",
        "letter": "Korea"
    },
    "13": {
        "character": "나",
        "letter": "I (plain)"
    },
    "14": {
        "character": "저",
        "letter": "that (over there)"
    },
    "15": {
        "character": "나는",
        "letter": "as for me (plain)"
    },
    "16": {
        "character": "저는",
        "letter": "as for me (humble)"
    },
    "17": {
        "character": "나도",
        "letter": "I also (plain)"
    },
    "18": {
        "character": "저도",
        "letter": "I also (humble)"
    },
    "19": {
        "character": "일",
        "letter": "day"
    },
    "20": {
        "character": "이",
        "letter": "this"
    },
    "21": {
        "character": "안녕하다 (안녕하세요)",
        "letter": "to be well ('Hi', 'Hello', 'How are you?')"
    },
    "22": {
        "character": "이다 (이에요, 여요)",
        "letter": "to be (equation)"
    },
    "23": {
        "character": "도",
        "letter": "also, too"
    },
    "24": {
        "character": "은",
        "letter": "topic particle ('as for')"
    },
    "25": {
        "character": "는",
        "letter": "topic particle ('as for')"
    },
    "26": {
        "character": "선생님",
        "letter": "teacher"
    },
    "27": {
        "character": "씨",
        "letter": "(attached to a person's name for courtesy)"
    },
    "28": {
        "character": "영국",
        "letter": "United Kingdom"
    },
    "29": {
        "character": "영어",
        "letter": "the English language"
    },
    "30": {
        "character": "이름",
        "letter": "name"
    },
    "31": {
        "character": "일본",
        "letter": "Japan"
    },
    "32": {
        "character": "중국",
        "letter": "China"
    },
    "33": {
        "character": "클래스",
        "letter": "class"
    },
    "34": {
        "character": "한국어",
        "letter": "the Korean language"
    },
    "35": {
        "character": "한국말",
        "letter": "the Korean language"
    },
    "36": {
        "character": "네",
        "letter": "yes, I see, okay"
    },
    "37": {
        "character": "아니요",
        "letter": "no"
    },
    "38": {
        "character": "가",
        "letter": "(subject particle)"
    },
    "39": {
        "character": "그렇다 (그래요)",
        "letter": "to be so ('Is that right?')"
    },
    "40": {
        "character": "반갑다 (반갑습니다)",
        "letter": "to be glad ('Glad to meet you')"
    },
    "41": {
        "character": "아니다 (아니에요)",
        "letter": "to not be (negative equation)"
    },
    "42": {
        "character": "뭐",
        "letter": "what"
    },
    "43": {
        "character": "무넛",
        "letter": "what"
    },
    "44": {
        "character": "아",
        "letter": "oh"
    },
    "45": {
        "character": "프랑스",
        "letter": "France"
    },
    "46": {
        "character": "스페인",
        "letter": "Spain"
    },
    "47": {
        "character": "러시아",
        "letter": "Russia"
    },
    "48": {
        "character": "일본어",
        "letter": "Japanese (language)"
    },
    "49": {
        "character": "일어",
        "letter": "Japanese (language)"
    },
    "50": {
        "character": "중국어",
        "letter": "Chinese (language)"
    },
    "51": {
        "character": "프랑스어",
        "letter": "French (language)"
    },
    "52": {
        "character": "스페인어",
        "letter": "Spanish (language)"
    },
    "53": {
        "character": "러시아어",
        "letter": "Russian (language)"
    },
    "54": {
        "character": "한국사람",
        "letter": "Korean (person)"
    },
    "55": {
        "character": "미국사람",
        "letter": "American (person)"
    },
    "56": {
        "character": "영국사람",
        "letter": "British (person)"
    },
    "57": {
        "character": "일본사람",
        "letter": "Japanese (person)"
    },
    "58": {
        "character": "중국사람",
        "letter": "Chinese (person)"
    },
    "59": {
        "character": "프랑스사람",
        "letter": "French (person)"
    },
    "60": {
        "character": "스페인사람",
        "letter": "Spanish (person)"
    },
    "61": {
        "character": "러시아사람",
        "letter": "Russian (person)"
    },
    "62": {
        "character": "가방",
        "letter": "bag"
    },
    "63": {
        "character": "기숙사",
        "letter": "dormitory"
    },
    "64": {
        "character": "대학교",
        "letter": "college, university"
    },
    "65": {
        "character": "도서관",
        "letter": "library"
    },
    "66": {
        "character": "유니온빌딩",
        "letter": "Union Building"
    },
    "67": {
        "character": "시계",
        "letter": "clock, watch"
    },
    "68": {
        "character": "식당",
        "letter": "restaurant"
    },
    "69": {
        "character": "학교식당",
        "letter": "school cafeteria"
    },
    "70": {
        "character": "안",
        "letter": "do not"
    },
    "71": {
        "character": "앞",
        "letter": "the front"
    },
    "72": {
        "character": "뒤",
        "letter": "the back, behind"
    },
    "73": {
        "character": "옆",
        "letter": "the side, beside"
    },
    "74": {
        "character": "어디",
        "letter": "what place, where (question word)"
    },
    "75": {
        "character": "우체국",
        "letter": "post office"
    },
    "76": {
        "character": "위",
        "letter": "the top side, above"
    },
    "77": {
        "character": "밑",
        "letter": "the bottom, below"
    },
    "78": {
        "character": "의자",
        "letter": "chair"
    },
    "79": {
        "character": "책",
        "letter": "book"
    },
    "80": {
        "character": "책방",
        "letter": "bookstore"
    },
    "81": {
        "character": "첵상",
        "letter": "desk"
    },
    "82": {
        "character": "캠퍼스",
        "letter": "campus"
    },
    "83": {
        "character": "학교",
        "letter": "school"
    },
    "84": {
        "character": "학생회관",
        "letter": "student center"
    },
    "85": {
        "character": "층",
        "letter": "floor, layer"
    },
    "86": {
        "character": "있다 (있어요)",
        "letter": "to have"
    },
    "87": {
        "character": "저어",
        "letter": "uh (expression of hesitation)"
    },
    "88": {
        "character": "에",
        "letter": "at, in, on (time)"
    },
    "89": {
        "character": "숙제",
        "letter": "homework"
    },
    "90": {
        "character": "숙제하다",
        "letter": "to do homework"
    },
    "91": {
        "character": "아침",
        "letter": "breakfast; morning"
    },
    "92": {
        "character": "음식",
        "letter": "food"
    },
    "93": {
        "character": "커피",
        "letter": "coffee"
    },
    "94": {
        "character": "괜찮다 (괜찮아요)",
        "letter": "to be all right, to be okay"
    },
    "95": {
        "character": "넓다",
        "letter": "to be spacious, to be wide"
    },
    "96": {
        "character": "많다",
        "letter": "to be many, to be much"
    },
    "97": {
        "character": "맛있다 (맛있어요)",
        "letter": "to be delicious"
    },
    "98": {
        "character": "싸다 (싸요)",
        "letter": "to be cheap"
    },
    "99": {
        "character": "어떻다 (어때요)",
        "letter": "to be how"
    },
    "100": {
        "character": "좋다 (좋아요)",
        "letter": "to be good, to be nice"
    },
    "101": {
        "character": "크다",
        "letter": "to be big"
    },
    "102": {
        "character": "아주",
        "letter": "very, really"
    },
    "103": {
        "character": "참",
        "letter": "by the way"
    },
    "104": {
        "character": "가다",
        "letter": "to go"
    },
    "105": {
        "character": "먹다 (먹어요)",
        "letter": "to eat"
    },
    "106": {
        "character": "앉다",
        "letter": "to sit"
    },
    "107": {
        "character": "알다",
        "letter": "to know"
    },
    "108": {
        "character": "하다 (해요)",
        "letter": "to do"
    },
    "109": {
        "character": "어",
        "letter": "oh"
    },
    "110": {
        "character": "~어요",
        "letter": "(polite ending)"
    },
    "111": {
        "character": "~아요",
        "letter": "(polite ending)"
    },
    "112": {
        "character": "그리고",
        "letter": "and"
    },
    "113": {
        "character": "경제학",
        "letter": "economics"
    },
    "114": {
        "character": "교과서",
        "letter": "textbook"
    },
    "115": {
        "character": "교실",
        "letter": "classroom"
    },
    "116": {
        "character": "내일",
        "letter": "tomorrow"
    },
    "117": {
        "character": "반",
        "letter": "class"
    },
    "118": {
        "character": "사질",
        "letter": "dictionary"
    },
    "119": {
        "character": "수업",
        "letter": "course; class"
    },
    "120": {
        "character": "시간",
        "letter": "hour (duration)"
    },
    "121": {
        "character": "여자",
        "letter": "woman"
    },
    "122": {
        "character": "오늘",
        "letter": "today"
    },
    "123": {
        "character": "우산",
        "letter": "umbrella"
    },
    "124": {
        "character": "질문",
        "letter": "question"
    },
    "125": {
        "character": "집",
        "letter": "home; house"
    },
    "126": {
        "character": "친구",
        "letter": "friend"
    },
    "127": {
        "character": "컴퓨터",
        "letter": "computer"
    },
    "128": {
        "character": "누구",
        "letter": "who"
    },
    "129": {
        "character": "인사하다",
        "letter": "to greet"
    },
    "130": {
        "character": "읽다",
        "letter": "to read"
    },
    "131": {
        "character": "없다 (없어요)",
        "letter": "to not be (existence), to not have"
    },
    "132": {
        "character": "재미있다 (재미있어요)",
        "letter": "to be interesting, fun"
    },
    "133": {
        "character": "그런데",
        "letter": "by the way"
    },
    "134": {
        "character": "~(으)세요",
        "letter": "(honorific polite ending)"
    },
    "135": {
        "character": "어제",
        "letter": "yesterday"
    },
    "136": {
        "character": "공부 (하다)",
        "letter": "study"
    },
    "137": {
        "character": "남자",
        "letter": "man"
    },
    "138": {
        "character": "시험",
        "letter": "test; exam"
    },
    "139": {
        "character": "역사",
        "letter": "history"
    },
    "140": {
        "character": "주스",
        "letter": "juice"
    },
    "141": {
        "character": "텔레비전",
        "letter": "television"
    },
    "142": {
        "character": "마시다",
        "letter": "to drink"
    },
    "143": {
        "character": "만나다",
        "letter": "to meet"
    },
    "144": {
        "character": "보다 (보세요)",
        "letter": "to see, to look, to watch"
    },
    "145": {
        "character": "지내다 (지내세요)",
        "letter": "to get along"
    },
    "146": {
        "character": "그래서",
        "letter": "so, therefore"
    },
    "147": {
        "character": "그럼",
        "letter": "(if so) then"
    },
    "148": {
        "character": "매일",
        "letter": "every day"
    },
    "149": {
        "character": "어떻게",
        "letter": "how"
    },
    "150": {
        "character": "열심히",
        "letter": "diligently"
    },
    "151": {
        "character": "요즘",
        "letter": "these days"
    },
    "152": {
        "character": "잘",
        "letter": "well"
    },
    "153": {
        "character": "지금",
        "letter": "now"
    },
    "154": {
        "character": "들",
        "letter": "(plural particle)"
    },
    "155": {
        "character": "을",
        "letter": "(object particle)"
    },
    "156": {
        "character": "를",
        "letter": "(object particle)"
    },
    "157": {
        "character": "밋없다",
        "letter": "to be tasteless, not delicious"
    },
    "158": {
        "character": "재미없다",
        "letter": "to be uninteresting"
    },
    "159": {
        "character": "바빠요",
        "letter": "I'm busy"
    },
    "160": {
        "character": "그저그래요",
        "letter": "Just so-so"
    },
    "161": {
        "character": "괜찮아요",
        "letter": "I'm all right, Not too bad"
    },
    "162": {
        "character": "좋아요",
        "letter": "I'm fine"
    },
    "163": {
        "character": "잘지내요",
        "letter": "I'm doing well"
    },
    "164": {
        "character": "동양학",
        "letter": "Asian studies"
    },
    "165": {
        "character": "물리학",
        "letter": "physics"
    },
    "166": {
        "character": "기계공학",
        "letter": "mechanical engineering"
    },
    "167": {
        "character": "음악",
        "letter": "music"
    },
    "168": {
        "character": "건축학",
        "letter": "architecture"
    },
    "169": {
        "character": "언어학",
        "letter": "linguistics"
    },
    "170": {
        "character": "교육학",
        "letter": "education"
    },
    "171": {
        "character": "생물학",
        "letter": "biology"
    },
    "172": {
        "character": "전기공학",
        "letter": "electrical engineering"
    },
    "173": {
        "character": "피아노",
        "letter": "piano"
    },
    "174": {
        "character": "펍학",
        "letter": "law"
    },
    "175": {
        "character": "개",
        "letter": "item"
    },
    "176": {
        "character": "고등학생",
        "letter": "high school student"
    },
    "177": {
        "character": "남동생",
        "letter": "younger brother"
    },
    "178": {
        "character": "대학원생",
        "letter": "graduate student"
    },
    "179": {
        "character": "동생",
        "letter": "younger sibling"
    },
    "180": {
        "character": "보스톤",
        "letter": "Boston"
    },
    "181": {
        "character": "부모님",
        "letter": "parents"
    },
    "182": {
        "character": "아버지",
        "letter": "father"
    },
    "183": {
        "character": "어머니",
        "letter": "mother"
    },
    "184": {
        "character": "여동생",
        "letter": "younger sister"
    },
    "185": {
        "character": "오빠",
        "letter": "the older brother of a female"
    },
    "186": {
        "character": "형",
        "letter": "the older brother of a male"
    },
    "187": {
        "character": "홍콩",
        "letter": "Hong Kong"
    },
    "188": {
        "character": "몇",
        "letter": "how many; what (with a counter)"
    },
    "189": {
        "character": "관",
        "letter": "volume"
    },
    "190": {
        "character": "년",
        "letter": "year"
    },
    "191": {
        "character": "달",
        "letter": "month"
    },
    "192": {
        "character": "달러",
        "letter": "dollar"
    },
    "193": {
        "character": "마리",
        "letter": "animal"
    },
    "194": {
        "character": "명",
        "letter": "people"
    },
    "195": {
        "character": "원",
        "letter": "won (Korean currency)"
    },
    "196": {
        "character": "월",
        "letter": "month"
    },
    "197": {
        "character": "두",
        "letter": "(with counter) two"
    },
    "198": {
        "character": "한",
        "letter": "(with counter) one"
    },
    "199": {
        "character": "계시다",
        "letter": "to be (existence); stay (hom.)"
    },
    "200": {
        "character": "하고",
        "letter": "with"
    },
    "201": {
        "character": "거",
        "letter": "thing (contraction of 것)"
    },
    "202": {
        "character": "누나",
        "letter": "the older sister of a male"
    },
    "203": {
        "character": "뉴욕",
        "letter": "New York"
    },
    "204": {
        "character": "룸메이트",
        "letter": "roommate"
    },
    "205": {
        "character": "방",
        "letter": "room"
    },
    "206": {
        "character": "사이",
        "letter": "relationship; between"
    },
    "207": {
        "character": "아파트",
        "letter": "apartment"
    },
    "208": {
        "character": "언니",
        "letter": "the older sister of a female"
    },
    "209": {
        "character": "로스앤젤레스",
        "letter": "Los Angeles (L.A.)"
    },
    "210": {
        "character": "하와이",
        "letter": "Hawai'i"
    },
    "211": {
        "character": "만",
        "letter": "only"
    },
    "212": {
        "character": "의",
        "letter": "of"
    },
    "213": {
        "character": "고맙다",
        "letter": "to be thankful"
    },
    "214": {
        "character": "나쁘다",
        "letter": "to be bad"
    },
    "215": {
        "character": "비싸다",
        "letter": "to be expensive"
    },
    "216": {
        "character": "예쁘다",
        "letter": "to be pretty"
    },
    "217": {
        "character": "작다",
        "letter": "to be small (in size)"
    },
    "218": {
        "character": "배우다",
        "letter": "to learn"
    },
    "219": {
        "character": "오다",
        "letter": "to come"
    },
    "220": {
        "character": "자다",
        "letter": "to sleep"
    },
    "221": {
        "character": "주다",
        "letter": "to give"
    },
    "222": {
        "character": "저희",
        "letter": "we; us; our (humble)"
    },
    "223": {
        "character": "우리",
        "letter": "we; us; our (plain)"
    },
    "224": {
        "character": "이거",
        "letter": "this (=이갓)"
    },
    "225": {
        "character": "내",
        "letter": "my (plain)"
    },
    "226": {
        "character": "재",
        "letter": "my (humble)"
    },
    "227": {
        "character": "공원",
        "letter": "park"
    },
    "228": {
        "character": "랩",
        "letter": "lab"
    },
    "229": {
        "character": "백화점",
        "letter": "department store"
    },
    "230": {
        "character": "생일",
        "letter": "birthday"
    },
    "231": {
        "character": "서점",
        "letter": "bookstore (= 책방)"
    },
    "232": {
        "character": "선물(하다)",
        "letter": "present, gift"
    },
    "233": {
        "character": "쇼핑(하다)",
        "letter": "shopping"
    },
    "234": {
        "character": "연습(하다)",
        "letter": "practice"
    },
    "235": {
        "character": "오래간만",
        "letter": "after a long time"
    },
    "236": {
        "character": "운동(하다)",
        "letter": "exercise"
    },
    "237": {
        "character": "일(하다)",
        "letter": "work"
    },
    "238": {
        "character": "저녁",
        "letter": "evening; dinner"
    },
    "239": {
        "character": "점심",
        "letter": "lunch"
    },
    "240": {
        "character": "커피숍",
        "letter": "coffee shop, cafe"
    },
    "241": {
        "character": "테니스",
        "letter": "tennis"
    },
    "242": {
        "character": "햄버거",
        "letter": "hamburger"
    },
    "243": {
        "character": "가르치다",
        "letter": "to teach"
    },
    "244": {
        "character": "사다",
        "letter": "to buy"
    },
    "245": {
        "character": "치다",
        "letter": "to play (tennis)"
    },
    "246": {
        "character": "에서",
        "letter": "from (location)"
    },
    "247": {
        "character": "안녕히",
        "letter": "in peace"
    },
    "248": {
        "character": "가게",
        "letter": "store"
    },
    "249": {
        "character": "오전",
        "letter": "morning, a.m"
    },
    "250": {
        "character": "오후",
        "letter": "afternoon, p.m"
    },
    "251": {
        "character": "옷",
        "letter": "clothes"
    },
    "252": {
        "character": "월요일",
        "letter": "Monday"
    },
    "253": {
        "character": "화요일",
        "letter": "Tuesday"
    },
    "254": {
        "character": "수요일",
        "letter": "Wednesday"
    },
    "255": {
        "character": "목요일",
        "letter": "Thursday"
    },
    "256": {
        "character": "금요일",
        "letter": "Friday"
    },
    "257": {
        "character": "토요일",
        "letter": "Saturday"
    },
    "258": {
        "character": "일요일",
        "letter": "Sunday"
    },
    "259": {
        "character": "정치학",
        "letter": "political science"
    },
    "260": {
        "character": "이번",
        "letter": "this time"
    },
    "261": {
        "character": "학기",
        "letter": "semester, academic term"
    },
    "262": {
        "character": "걷다",
        "letter": "to walk"
    },
    "263": {
        "character": "듣다(들어러)",
        "letter": "to listen, to take a course"
    },
    "264": {
        "character": "좋아하다",
        "letter": "to like"
    },
    "265": {
        "character": "과목",
        "letter": "course, subject"
    },
    "266": {
        "character": "분",
        "letter": "minute"
    },
    "267": {
        "character": "시",
        "letter": "hour, o'clock"
    },
    "268": {
        "character": "같이",
        "letter": "together"
    },
    "269": {
        "character": "언제",
        "letter": "when"
    },
    "270": {
        "character": "(으)러",
        "letter": "in order to"
    },
    "271": {
        "character": "날씨",
        "letter": "weather"
    },
    "272": {
        "character": "말(하다)",
        "letter": "speech, words"
    },
    "273": {
        "character": "버스",
        "letter": "bus"
    },
    "274": {
        "character": "볼펜",
        "letter": "ball point pen"
    },
    "275": {
        "character": "비행기",
        "letter": "airplane"
    },
    "276": {
        "character": "연필",
        "letter": "pencil"
    },
    "277": {
        "character": "자전거",
        "letter": "bicycle"
    },
    "278": {
        "character": "지하철",
        "letter": "subway"
    },
    "279": {
        "character": "자동차",
        "letter": "car"
    },
    "280": {
        "character": "하루",
        "letter": "(one) day"
    },
    "281": {
        "character": "한국타운",
        "letter": "Korea town"
    },
    "282": {
        "character": "까지",
        "letter": "up to (location)"
    },
    "283": {
        "character": "으로",
        "letter": "toward, to"
    },
    "284": {
        "character": "쯤",
        "letter": "about, around"
    },
    "285": {
        "character": "걸리다",
        "letter": "to take (time)"
    },
    "286": {
        "character": "살다",
        "letter": "to live"
    },
    "287": {
        "character": "쓰다",
        "letter": "to write"
    },
    "288": {
        "character": "가깝다",
        "letter": "to be close, to be near"
    },
    "289": {
        "character": "덥다",
        "letter": "to be hot"
    },
    "290": {
        "character": "멀다",
        "letter": "to be far"
    },
    "291": {
        "character": "쉽다",
        "letter": "to be easy"
    },
    "292": {
        "character": "어렵다",
        "letter": "to be difficult"
    },
    "293": {
        "character": "춥다",
        "letter": "to be cold"
    },
    "294": {
        "character": "좁다",
        "letter": "to be narrow"
    },
    "295": {
        "character": "보통",
        "letter": "usually"
    },
    "296": {
        "character": "얼마다; 얼마",
        "letter": "how long, how much"
    },
    "297": {
        "character": "조금",
        "letter": "a little"
    },
    "298": {
        "character": "뛰다",
        "letter": "to run"
    },
    "299": {
        "character": "운전하다",
        "letter": "to drive"
    },
    "300": {
        "character": "수영(하다)",
        "letter": "swimming"
    },
    "301": {
        "character": "수영장",
        "letter": "swimming pool"
    },
    "302": {
        "character": "전화(하다)",
        "letter": "telephone"
    },
    "303": {
        "character": "주말",
        "letter": "weekend"
    },
    "304": {
        "character": "테니스장",
        "letter": "tennis court"
    },
    "305": {
        "character": "파티",
        "letter": "party"
    },
    "306": {
        "character": "모르다",
        "letter": "to not know, to be unaware of"
    },
    "307": {
        "character": "일어나다",
        "letter": "to get up"
    },
    "308": {
        "character": "바쁘다",
        "letter": "to be busy"
    },
    "309": {
        "character": "너무",
        "letter": "too much"
    },
    "310": {
        "character": "못",
        "letter": "cannot"
    },
    "311": {
        "character": "왜",
        "letter": "why"
    },
    "312": {
        "character": "지난",
        "letter": "last, past"
    },
    "313": {
        "character": "았; 었; ㅆ",
        "letter": "(past tense)"
    },
    "314": {
        "character": "계절",
        "letter": "season"
    },
    "315": {
        "character": "꽃",
        "letter": "flower"
    },
    "316": {
        "character": "극장",
        "letter": "movie theater"
    },
    "317": {
        "character": "나라",
        "letter": "country"
    },
    "318": {
        "character": "내년",
        "letter": "next year"
    },
    "319": {
        "character": "다음",
        "letter": "next; following"
    },
    "320": {
        "character": "대학원",
        "letter": "graduate school"
    },
    "321": {
        "character": "방학",
        "letter": "school vacation"
    },
    "322": {
        "character": "브로드웨이 극장",
        "letter": "Broadway theater"
    },
    "323": {
        "character": "약속",
        "letter": "engagement; promise"
    },
    "324": {
        "character": "액션 영화",
        "letter": "action movie"
    },
    "325": {
        "character": "여름",
        "letter": "summer"
    },
    "326": {
        "character": "여행",
        "letter": "travel"
    },
    "327": {
        "character": "영화",
        "letter": "movie"
    },
    "328": {
        "character": "이스트 홀",
        "letter": "East Hall"
    },
    "329": {
        "character": "코미디",
        "letter": "comedy"
    },
    "330": {
        "character": "받다",
        "letter": "to receive"
    },
    "331": {
        "character": "아마",
        "letter": "probably; perhaps"
    },
    "332": {
        "character": "자주",
        "letter": "often; frequently"
    },
    "333": {
        "character": "정말",
        "letter": "really"
    },
    "334": {
        "character": "무슨",
        "letter": "what; what kind of"
    },
    "335": {
        "character": "어느",
        "letter": "which"
    },
    "336": {
        "character": "(으)ㄹ 거예요",
        "letter": "(probability)"
    },
    "337": {
        "character": "지난월요일",
        "letter": "last Monday"
    },
    "338": {
        "character": "이번월요일",
        "letter": "this Monday"
    },
    "339": {
        "character": "다음월요일",
        "letter": "next Monday"
    },
    "340": {
        "character": "지난토요일",
        "letter": "last Saturday"
    },
    "341": {
        "character": "이번토요일",
        "letter": "this Saturday"
    },
    "342": {
        "character": "다음토요일",
        "letter": "next Saturday"
    },
    "343": {
        "character": "지난주말",
        "letter": "last weekend"
    },
    "344": {
        "character": "이번주말",
        "letter": "this weekend"
    },
    "345": {
        "character": "다음주말",
        "letter": "next weekend"
    },
    "346": {
        "character": "지난주",
        "letter": "last week"
    },
    "347": {
        "character": "이번주",
        "letter": "this week"
    },
    "348": {
        "character": "다음주",
        "letter": "next week"
    },
    "349": {
        "character": "지난달",
        "letter": "last month"
    },
    "350": {
        "character": "이(번)달",
        "letter": "this month"
    },
    "351": {
        "character": "다음달",
        "letter": "next month"
    },
    "352": {
        "character": "적년",
        "letter": "last year"
    },
    "353": {
        "character": "올해",
        "letter": "this year"
    },
    "354": {
        "character": "가을",
        "letter": "autumn, fall"
    },
    "355": {
        "character": "겨울",
        "letter": "winter"
    },
    "356": {
        "character": "마켓",
        "letter": "market"
    },
    "357": {
        "character": "봄",
        "letter": "spring"
    },
    "358": {
        "character": "설거지",
        "letter": "dishwashing"
    },
    "359": {
        "character": "신문",
        "letter": "newspaper"
    },
    "360": {
        "character": "심리학",
        "letter": "psychology"
    },
    "361": {
        "character": "이야기",
        "letter": "talk, chat (= 에가)"
    },
    "362": {
        "character": "전공",
        "letter": "major"
    },
    "363": {
        "character": "주",
        "letter": "week"
    },
    "364": {
        "character": "준비",
        "letter": "preparation"
    },
    "365": {
        "character": "청소",
        "letter": "cleaning"
    },
    "366": {
        "character": "크리스마스",
        "letter": "Christmas"
    },
    "367": {
        "character": "흐리다",
        "letter": "to be cloudy"
    },
    "368": {
        "character": "보내다",
        "letter": "to spend time"
    },
    "369": {
        "character": "장(을) 보다",
        "letter": "to buy one's groceries"
    },
    "370": {
        "character": "가끔",
        "letter": "sometimes, occasionally"
    },
    "371": {
        "character": "많이",
        "letter": "each other"
    },
    "372": {
        "character": "~고",
        "letter": "and (clausal connective)"
    },
    "373": {
        "character": "가운데",
        "letter": "the middle, the center"
    },
    "374": {
        "character": "건너편",
        "letter": "the other side"
    },
    "375": {
        "character": "교회",
        "letter": "church"
    },
    "376": {
        "character": "꽃짐",
        "letter": "flower shop"
    },
    "377": {
        "character": "동네",
        "letter": "neighborhood"
    },
    "378": {
        "character": "서울",
        "letter": "Seoul"
    },
    "379": {
        "character": "슈퍼",
        "letter": "supermarket"
    },
    "380": {
        "character": "약국",
        "letter": "drugstore"
    },
    "381": {
        "character": "지도",
        "letter": "map"
    },
    "382": {
        "character": "쪽",
        "letter": "side; direction"
    },
    "383": {
        "character": "초등학교",
        "letter": "elementary school"
    },
    "384": {
        "character": "군데",
        "letter": "place; spot"
    },
    "385": {
        "character": "번",
        "letter": "number"
    },
    "386": {
        "character": "지요",
        "letter": "isn't it? (seeking agreement)"
    },
    "387": {
        "character": "여기",
        "letter": "here"
    },
    "388": {
        "character": "거기",
        "letter": "there"
    },
    "389": {
        "character": "저기",
        "letter": "over there"
    },
    "390": {
        "character": "내리다",
        "letter": "to get off"
    },
    "391": {
        "character": "타다",
        "letter": "to get in or on; ride"
    },
    "392": {
        "character": "깨끗하다",
        "letter": "to be clean"
    },
    "393": {
        "character": "따뜻하다",
        "letter": "to be warm"
    },
    "394": {
        "character": "조용하다",
        "letter": "to be quiet"
    },
    "395": {
        "character": "여러",
        "letter": "many, several"
    },
    "396": {
        "character": "그",
        "letter": "that"
    },
    "397": {
        "character": "근처",
        "letter": "nearby; vicinity"
    },
    "398": {
        "character": "마씀",
        "letter": "speech; words (honorific)"
    },
    "399": {
        "character": "말",
        "letter": "speech; words (plain)"
    },
    "400": {
        "character": "시천",
        "letter": "city hall"
    },
    "401": {
        "character": "역",
        "letter": "station"
    },
    "402": {
        "character": "오른쪽",
        "letter": "right side"
    },
    "403": {
        "character": "왼쪽",
        "letter": "left side"
    },
    "404": {
        "character": "우표",
        "letter": "stamp"
    },
    "405": {
        "character": "은행",
        "letter": "bank"
    },
    "406": {
        "character": "의사",
        "letter": "doctor"
    },
    "407": {
        "character": "처음",
        "letter": "the first time"
    },
    "408": {
        "character": "호선",
        "letter": "subway line"
    },
    "409": {
        "character": "좀",
        "letter": "a little (contraction of 조금)"
    },
    "410": {
        "character": "쭉",
        "letter": "straight"
    },
    "411": {
        "character": "돌다",
        "letter": "to turn"
    },
    "412": {
        "character": "팔다",
        "letter": "to sell"
    },
    "413": {
        "character": "묻다",
        "letter": "to ask"
    },
    "414": {
        "character": "보이다",
        "letter": "to be seen; visible"
    },
    "415": {
        "character": "뵙다",
        "letter": "to see (humble)"
    },
    "416": {
        "character": "보다",
        "letter": "to see (plain)"
    },
    "417": {
        "character": "감사하다",
        "letter": "to be thankful"
    },
    "418": {
        "character": "미안하다",
        "letter": "to be sorry"
    },
    "419": {
        "character": "습나다",
        "letter": "(deferential ending for a statement)"
    },
    "420": {
        "character": "습니까",
        "letter": "(deferential ending for a question)"
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