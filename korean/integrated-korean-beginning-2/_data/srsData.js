// Configuration
const localStorageKey = "korean" + "IntegratedKoreanBeginning2" + "Srs";
const srsTitle = "Integrated Korean (Beginning&nbsp;2)";
const languageTitle = "Korean";

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
        "character": "건물",
        "letter": "building "
    },
    "2": {
        "character": "돈",
        "letter": "money "
    },
    "3": {
        "character": "돌",
        "letter": "the first birthday "
    },
    "4": {
        "character": "며칠",
        "letter": "what date; a few days "
    },
    "5": {
        "character": "번호",
        "letter": "number "
    },
    "6": {
        "character": "올해",
        "letter": "this year "
    },
    "7": {
        "character": "이메일",
        "letter": "e-mail "
    },
    "8": {
        "character": "잔치",
        "letter": "feast; party "
    },
    "9": {
        "character": "카드",
        "letter": "card "
    },
    "10": {
        "character": "편지",
        "letter": "letter ~()"
    },
    "11": {
        "character": "으ㄴ",
        "letter": "noun modifying form (adjective) "
    },
    "12": {
        "character": "보내다",
        "letter": "to send "
    },
    "13": {
        "character": "축하하다",
        "letter": "to congratulate "
    },
    "14": {
        "character": "길다",
        "letter": "to be long "
    },
    "15": {
        "character": "키가작다",
        "letter": "to be short "
    },
    "16": {
        "character": "께",
        "letter": "to (a person) (honorific) /"
    },
    "17": {
        "character": "와과",
        "letter": "and (joins nouns) "
    },
    "18": {
        "character": "한테",
        "letter": "to (a person or an animal; colloquial form) "
    },
    "19": {
        "character": "한테서",
        "letter": "from (a person or an animal; colloquial form) "
    },
    "20": {
        "character": "모자",
        "letter": "cap; hat "
    },
    "21": {
        "character": "가족",
        "letter": "family "
    },
    "22": {
        "character": "나이",
        "letter": "age "
    },
    "23": {
        "character": "딸",
        "letter": "daughter "
    },
    "24": {
        "character": "댁",
        "letter": "home; house (honorific) "
    },
    "25": {
        "character": "사진",
        "letter": "photo; picture "
    },
    "26": {
        "character": "생신",
        "letter": "birthday (honorific) "
    },
    "27": {
        "character": "성함",
        "letter": "name (honorific) "
    },
    "28": {
        "character": "스웨터",
        "letter": "sweater "
    },
    "29": {
        "character": "아들",
        "letter": "son "
    },
    "30": {
        "character": "연세",
        "letter": "age (honorific) "
    },
    "31": {
        "character": "작년",
        "letter": "last year "
    },
    "32": {
        "character": "장갑",
        "letter": "gloves "
    },
    "33": {
        "character": "할머니",
        "letter": "grandmother "
    },
    "34": {
        "character": "할아버지",
        "letter": "grandfather "
    },
    "35": {
        "character": "살",
        "letter": "years old "
    },
    "36": {
        "character": "분",
        "letter": "people (honorific) "
    },
    "37": {
        "character": "돌아가시다",
        "letter": "to pass away "
    },
    "38": {
        "character": "드리다",
        "letter": "to give (honorific) "
    },
    "39": {
        "character": "드시다",
        "letter": "to eat (honorific) "
    },
    "40": {
        "character": "주무시다",
        "letter": "to sleep (honorific) "
    },
    "41": {
        "character": "죽다",
        "letter": "to die "
    },
    "42": {
        "character": "찍다",
        "letter": "to take a photo "
    },
    "43": {
        "character": "건강하다",
        "letter": "to be healthy "
    },
    "44": {
        "character": "즐겁다",
        "letter": "to be joyful "
    },
    "45": {
        "character": "다",
        "letter": "all "
    },
    "46": {
        "character": "께서",
        "letter": "subject particle (honorific) ~()"
    },
    "47": {
        "character": "으시",
        "letter": "subject honorifics "
    },
    "48": {
        "character": "교수님",
        "letter": "professor "
    },
    "49": {
        "character": "동안",
        "letter": "during; for (a time period) "
    },
    "50": {
        "character": "문화",
        "letter": "culture "
    },
    "51": {
        "character": "밖",
        "letter": "outside "
    },
    "52": {
        "character": "시드니",
        "letter": "Sydney "
    },
    "53": {
        "character": "연구실",
        "letter": "professor's office "
    },
    "54": {
        "character": "택시",
        "letter": "taxi "
    },
    "55": {
        "character": "호주",
        "letter": "Australia "
    },
    "56": {
        "character": "놀다",
        "letter": "to play; to not work "
    },
    "57": {
        "character": "싶다",
        "letter": "to want to "
    },
    "58": {
        "character": "죄송하다",
        "letter": "to be sorry "
    },
    "59": {
        "character": "그냥",
        "letter": "just; without any special reason "
    },
    "60": {
        "character": "굉장히",
        "letter": "extremely "
    },
    "61": {
        "character": "일찍",
        "letter": "early ~()/"
    },
    "62": {
        "character": "으ㄴ데는데",
        "letter": "clausal connective (background information) ~()/"
    },
    "63": {
        "character": "으ㄴ데요는데요",
        "letter": "a polite sentence ending for background information "
    },
    "64": {
        "character": "시작하다",
        "letter": "to begin "
    },
    "65": {
        "character": "가수",
        "letter": "singer "
    },
    "66": {
        "character": "교통",
        "letter": "transportation; traffic "
    },
    "67": {
        "character": "날",
        "letter": "day "
    },
    "68": {
        "character": "머리",
        "letter": "head; hair "
    },
    "69": {
        "character": "일",
        "letter": "event ()"
    },
    "70": {
        "character": "다음부터는",
        "letter": "from next time "
    },
    "71": {
        "character": "무척",
        "letter": "very "
    },
    "72": {
        "character": "직접",
        "letter": "directly ~/"
    },
    "73": {
        "character": "어서아서",
        "letter": "clausal connective (cause) ~"
    },
    "74": {
        "character": "는",
        "letter": "noun modifying form (verb) "
    },
    "75": {
        "character": "늦다",
        "letter": "to be late "
    },
    "76": {
        "character": "들어오다",
        "letter": "to come in "
    },
    "77": {
        "character": "이사하다",
        "letter": "to move "
    },
    "78": {
        "character": "막히다",
        "letter": "to be blocked; congested "
    },
    "79": {
        "character": "복잡하다",
        "letter": "to be crowded "
    },
    "80": {
        "character": "불편하다",
        "letter": "to be uncomfortable; inconvenient "
    },
    "81": {
        "character": "빠르다",
        "letter": "to be fast "
    },
    "82": {
        "character": "아프다",
        "letter": "to be sick "
    },
    "83": {
        "character": "편하다",
        "letter": "to be comfortable; convenient "
    },
    "84": {
        "character": "그렇지만",
        "letter": "but; however "
    },
    "85": {
        "character": "갈비",
        "letter": "kalbi (barbecued spareribs) "
    },
    "86": {
        "character": "물",
        "letter": "water "
    },
    "87": {
        "character": "바닷가",
        "letter": "beach "
    },
    "88": {
        "character": "밴쿠버",
        "letter": "Vancouver "
    },
    "89": {
        "character": "불고기",
        "letter": "bulgogi (roast meat) "
    },
    "90": {
        "character": "생활",
        "letter": "daily life; living "
    },
    "91": {
        "character": "어젯밤",
        "letter": "last night "
    },
    "92": {
        "character": "차",
        "letter": "tea "
    },
    "93": {
        "character": "청바지",
        "letter": "blue jeans "
    },
    "94": {
        "character": "캐나다",
        "letter": "Canada "
    },
    "95": {
        "character": "잔",
        "letter": "glass; cup "
    },
    "96": {
        "character": "어떤",
        "letter": "which; what kind of "
    },
    "97": {
        "character": "되다",
        "letter": "to become; get; turn into () "
    },
    "98": {
        "character": "눈이오다",
        "letter": "to snow "
    },
    "99": {
        "character": "만들다",
        "letter": "to make "
    },
    "100": {
        "character": "사귀다",
        "letter": "to make friends "
    },
    "101": {
        "character": "쓰다",
        "letter": "to use; to write; bitter "
    },
    "102": {
        "character": "착하다",
        "letter": "to be good-natured; kind-hearted "
    },
    "103": {
        "character": "친절하다",
        "letter": "to be kind; considerate ~() "
    },
    "104": {
        "character": "으ㄹ래요",
        "letter": "intention; will ~ "
    },
    "105": {
        "character": "고있다",
        "letter": "continuing action "
    },
    "106": {
        "character": "골프",
        "letter": "golf "
    },
    "107": {
        "character": "기차",
        "letter": "train "
    },
    "108": {
        "character": "연극",
        "letter": "play "
    },
    "109": {
        "character": "인터넷",
        "letter": "Internet "
    },
    "110": {
        "character": "입구",
        "letter": "entrance "
    },
    "111": {
        "character": "끝나다",
        "letter": "to be over; finished "
    },
    "112": {
        "character": "쉬다",
        "letter": "to rest "
    },
    "113": {
        "character": "알아보다",
        "letter": "to find out; check out "
    },
    "114": {
        "character": "찾다",
        "letter": "to find; look for () "
    },
    "115": {
        "character": "춤을추다",
        "letter": "to dance () "
    },
    "116": {
        "character": "힘이들다",
        "letter": "to be hard "
    },
    "117": {
        "character": "벌써",
        "letter": "already "
    },
    "118": {
        "character": "까지",
        "letter": "to; until; through (time) "
    },
    "119": {
        "character": "밖에",
        "letter": "nothing but; only "
    },
    "120": {
        "character": "부터",
        "letter": "from (time) ()"
    },
    "121": {
        "character": "이나",
        "letter": "as much; many as ~() ?"
    },
    "122": {
        "character": "으ㄹ까요",
        "letter": "shall we; I wonder "
    },
    "123": {
        "character": "글쎄요",
        "letter": "well; it's hard to say "
    },
    "124": {
        "character": "데",
        "letter": "place "
    },
    "125": {
        "character": "동부",
        "letter": "east coast "
    },
    "126": {
        "character": "막내",
        "letter": "youngest child "
    },
    "127": {
        "character": "바지",
        "letter": "pants "
    },
    "128": {
        "character": "밤",
        "letter": "night "
    },
    "129": {
        "character": "부엌",
        "letter": "kitchen "
    },
    "130": {
        "character": "셔츠",
        "letter": "shirt "
    },
    "131": {
        "character": "형제",
        "letter": "sibling(s) "
    },
    "132": {
        "character": "첫",
        "letter": "first "
    },
    "133": {
        "character": "다르다",
        "letter": "to be different "
    },
    "134": {
        "character": "피곤하다",
        "letter": "to be tired "
    },
    "135": {
        "character": "결혼하다",
        "letter": "to get married "
    },
    "136": {
        "character": "기다리다",
        "letter": "to wait "
    },
    "137": {
        "character": "자라다",
        "letter": "to grow up "
    },
    "138": {
        "character": "태어나다",
        "letter": "to be born "
    },
    "139": {
        "character": "아직",
        "letter": "still; yet "
    },
    "140": {
        "character": "까지",
        "letter": "including / "
    },
    "141": {
        "character": "째번째",
        "letter": "ordinal numbers ~"
    },
    "142": {
        "character": "겠",
        "letter": "intention; will (conjecture) ~/"
    },
    "143": {
        "character": "어서아서",
        "letter": "clausal connective (sequential) "
    },
    "144": {
        "character": "눈",
        "letter": "eyes; snow "
    },
    "145": {
        "character": "색",
        "letter": "color "
    },
    "146": {
        "character": "안경",
        "letter": "eyeglasses "
    },
    "147": {
        "character": "얼굴",
        "letter": "face "
    },
    "148": {
        "character": "한복",
        "letter": "traditional Korean dress  (honorific)"
    },
    "149": {
        "character": "형님",
        "letter": "male's older brother "
    },
    "150": {
        "character": "끼다",
        "letter": "to wear (glasses, gloves, rings) "
    },
    "151": {
        "character": "나오다",
        "letter": "to come out "
    },
    "152": {
        "character": "다니다",
        "letter": "to attend "
    },
    "153": {
        "character": "닮다",
        "letter": "to resemble; take after; look like "
    },
    "154": {
        "character": "쓰다",
        "letter": "to wear headgear "
    },
    "155": {
        "character": "입다",
        "letter": "to wear; put on (clothes) ()"
    },
    "156": {
        "character": "이랑",
        "letter": "with (colloquial) "
    },
    "157": {
        "character": "까맣다",
        "letter": "to be black "
    },
    "158": {
        "character": "노랗다",
        "letter": "to be yellow "
    },
    "159": {
        "character": "빨갛다",
        "letter": "To be red  "
    },
    "160": {
        "character": "키가크다",
        "letter": "to be tall  "
    },
    "161": {
        "character": "파랗다",
        "letter": "to be blue "
    },
    "162": {
        "character": "하얗다",
        "letter": "to be white "
    },
    "163": {
        "character": "또",
        "letter": "and; also; too "
    },
    "164": {
        "character": "오래",
        "letter": "long time "
    },
    "165": {
        "character": "어머",
        "letter": "oh my! ~"
    },
    "166": {
        "character": "네요",
        "letter": "surprised reaction ~()"
    },
    "167": {
        "character": "으ㄴ",
        "letter": "noun-modifying form (past) /"
    },
    "168": {
        "character": "노랑노란색",
        "letter": "yellow /"
    },
    "169": {
        "character": "하양하얀색",
        "letter": "white /"
    },
    "170": {
        "character": "까망까만색",
        "letter": "black /"
    },
    "171": {
        "character": "빨강빨간색",
        "letter": "red /"
    },
    "172": {
        "character": "파랑파란색",
        "letter": "blue "
    },
    "173": {
        "character": "초록색",
        "letter": "green "
    },
    "174": {
        "character": "주황색",
        "letter": "orange (color) "
    },
    "175": {
        "character": "분홍색",
        "letter": "pink "
    },
    "176": {
        "character": "보라색",
        "letter": "purple "
    },
    "177": {
        "character": "밤색",
        "letter": "brown "
    },
    "178": {
        "character": "회색",
        "letter": "gray "
    },
    "179": {
        "character": "도시",
        "letter": "city "
    },
    "180": {
        "character": "몸조리",
        "letter": "care of health "
    },
    "181": {
        "character": "엄마",
        "letter": "mom  "
    },
    "182": {
        "character": "감기에걸리다",
        "letter": "to have/catch a cold "
    },
    "183": {
        "character": "돕다",
        "letter": "to help "
    },
    "184": {
        "character": "바꾸다",
        "letter": "to change, switch "
    },
    "185": {
        "character": "빨래하다",
        "letter": "to do the laundry "
    },
    "186": {
        "character": "부치다",
        "letter": "to mail (a letter, parcel) () "
    },
    "187": {
        "character": "비가오다",
        "letter": "to rain "
    },
    "188": {
        "character": "빌리다",
        "letter": "to borrow "
    },
    "189": {
        "character": "빌려주다",
        "letter": "To lend "
    },
    "190": {
        "character": "실례하다",
        "letter": "to be excused () "
    },
    "191": {
        "character": "배가고프다",
        "letter": "to be hungry "
    },
    "192": {
        "character": "나중에",
        "letter": "later "
    },
    "193": {
        "character": "다시",
        "letter": "again "
    },
    "194": {
        "character": "여보세요",
        "letter": "hello (on the phone) "
    },
    "195": {
        "character": "이따가",
        "letter": "A little later "
    },
    "196": {
        "character": "이젠",
        "letter": "As for now ~() "
    },
    "197": {
        "character": "으ㄹ게요",
        "letter": "I will (volition or promise) ~/ "
    },
    "198": {
        "character": "어아주다",
        "letter": "do something for another's benefit ~/ "
    },
    "199": {
        "character": "어아야되다",
        "letter": "must (obligation or necessity, passive) "
    },
    "200": {
        "character": "그동안",
        "letter": "meantime "
    },
    "201": {
        "character": "뉴스",
        "letter": "news "
    },
    "202": {
        "character": "메시지",
        "letter": "message "
    },
    "203": {
        "character": "반",
        "letter": "half (e.g., 30 min) "
    },
    "204": {
        "character": "비",
        "letter": "rain  (honorific)"
    },
    "205": {
        "character": "사모님",
        "letter": "someone's wife "
    },
    "206": {
        "character": "신발",
        "letter": "shoes "
    },
    "207": {
        "character": "여보",
        "letter": "honey, dear "
    },
    "208": {
        "character": "인터뷰",
        "letter": "interview "
    },
    "209": {
        "character": "새",
        "letter": "new "
    },
    "210": {
        "character": "시끄럽다",
        "letter": "to be noisy "
    },
    "211": {
        "character": "남기다",
        "letter": "to leave (a message)  "
    },
    "212": {
        "character": "돈이들다",
        "letter": "to cost money "
    },
    "213": {
        "character": "들어가다",
        "letter": "to enter "
    },
    "214": {
        "character": "부탁하다",
        "letter": "to ask a favor "
    },
    "215": {
        "character": "그만",
        "letter": "Without doing anything further "
    },
    "216": {
        "character": "때문에",
        "letter": "because of "
    },
    "217": {
        "character": "잠깐만",
        "letter": "for a short time (3 syllables) ~"
    },
    "218": {
        "character": "겠",
        "letter": "would (intention) "
    },
    "219": {
        "character": "물가",
        "letter": "cost of living "
    },
    "220": {
        "character": "발",
        "letter": "Foot "
    },
    "221": {
        "character": "공항",
        "letter": "airport "
    },
    "222": {
        "character": "기사",
        "letter": "driver "
    },
    "223": {
        "character": "길",
        "letter": "street, road "
    },
    "224": {
        "character": "모레",
        "letter": "the day after tomorrow "
    },
    "225": {
        "character": "손님",
        "letter": "guest, customer "
    },
    "226": {
        "character": "아저씨",
        "letter": "mister; a man of one's parents' age "
    },
    "227": {
        "character": "연락",
        "letter": "contact "
    },
    "228": {
        "character": "인천",
        "letter": "Incheon "
    },
    "229": {
        "character": "전",
        "letter": "before "
    },
    "230": {
        "character": "후",
        "letter": "after "
    },
    "231": {
        "character": "휴일",
        "letter": "holiday, day off "
    },
    "232": {
        "character": "적어도",
        "letter": "at least "
    },
    "233": {
        "character": "빨리",
        "letter": "fast, quickly "
    },
    "234": {
        "character": "건너다",
        "letter": "to cross () "
    },
    "235": {
        "character": "돈을내다",
        "letter": "to pay "
    },
    "236": {
        "character": "수고하다",
        "letter": "to put forth effort, take trouble "
    },
    "237": {
        "character": "운전하다",
        "letter": "to drive ~()"
    },
    "238": {
        "character": "이라서",
        "letter": "because N am/are/is ~ "
    },
    "239": {
        "character": "지못하다",
        "letter": "cannot (long form of negation) "
    },
    "240": {
        "character": "게임",
        "letter": "Game "
    },
    "241": {
        "character": "계단",
        "letter": "Stairs "
    },
    "242": {
        "character": "곳",
        "letter": "Place "
    },
    "243": {
        "character": "노래방",
        "letter": "karaoke (bar) "
    },
    "244": {
        "character": "목소리",
        "letter": "voice "
    },
    "245": {
        "character": "엘리베이터",
        "letter": "elevator "
    },
    "246": {
        "character": "웬일",
        "letter": "what matter "
    },
    "247": {
        "character": "정류장",
        "letter": "(bus) stop "
    },
    "248": {
        "character": "출구",
        "letter": "exit "
    },
    "249": {
        "character": "큰아버지",
        "letter": "uncle (father's older brother) "
    },
    "250": {
        "character": "택시비",
        "letter": "taxi fare "
    },
    "251": {
        "character": "휴게실",
        "letter": "lounge "
    },
    "252": {
        "character": "더",
        "letter": "more () "
    },
    "253": {
        "character": "배가부르다",
        "letter": "to have a full stomach "
    },
    "254": {
        "character": "적다",
        "letter": "to be few, scarce () "
    },
    "255": {
        "character": "노래부르다",
        "letter": "to sing "
    },
    "256": {
        "character": "도착하다",
        "letter": "to arrive   /  "
    },
    "257": {
        "character": "마중나오다마중나가다",
        "letter": "to come/go out to greet someone () "
    },
    "258": {
        "character": "목이마르다",
        "letter": "to be thirsty "
    },
    "259": {
        "character": "졸다",
        "letter": "to doze off ~"
    },
    "260": {
        "character": "게",
        "letter": "adverbial suffix ~  ()"
    },
    "261": {
        "character": "지말다마세요",
        "letter": "to stop, cease "
    },
    "262": {
        "character": "까만색",
        "letter": "black (=) "
    },
    "263": {
        "character": "까망사이즈",
        "letter": "size "
    },
    "264": {
        "character": "세일",
        "letter": "sale "
    },
    "265": {
        "character": "양말",
        "letter": "socks, stockings "
    },
    "266": {
        "character": "운동화",
        "letter": "sports shoes, sneakers "
    },
    "267": {
        "character": "점원",
        "letter": "clerk, salesperson "
    },
    "268": {
        "character": "금방",
        "letter": "soon (not ...) "
    },
    "269": {
        "character": "곧어서",
        "letter": "quick(ly) "
    },
    "270": {
        "character": "번",
        "letter": "number of times (e.g.,  ,  ) "
    },
    "271": {
        "character": "한번두번켤레",
        "letter": "pair ~()  /"
    },
    "272": {
        "character": "으ㄹ수있다없다",
        "letter": "can/cannot (sentence pattern)  "
    },
    "273": {
        "character": "갈아입다",
        "letter": "to change (clothes)  "
    },
    "274": {
        "character": "갈아타다",
        "letter": "to change (vehicles)  "
    },
    "275": {
        "character": "갖고가다",
        "letter": "to take  "
    },
    "276": {
        "character": "갖고오다",
        "letter": "to bring  "
    },
    "277": {
        "character": "갖고다니다",
        "letter": "to carry around  "
    },
    "278": {
        "character": "갖다놓다",
        "letter": "to bring/put down somewhere  /(humble)"
    },
    "279": {
        "character": "갖다주다드리다",
        "letter": "to bring/take something to someone "
    },
    "280": {
        "character": "걸어가다",
        "letter": "to go on foot "
    },
    "281": {
        "character": "걸어오다",
        "letter": "to come on foot "
    },
    "282": {
        "character": "걸어다니다",
        "letter": "to walk around "
    },
    "283": {
        "character": "돌아오다",
        "letter": "to return, come back  "
    },
    "284": {
        "character": "타고가다",
        "letter": "to go riding  "
    },
    "285": {
        "character": "타고오다",
        "letter": "to come riding  "
    },
    "286": {
        "character": "타고다니다",
        "letter": "to come/go riding "
    },
    "287": {
        "character": "에",
        "letter": "for, per "
    },
    "288": {
        "character": "거리",
        "letter": "distance; street ()"
    },
    "289": {
        "character": "계획하다",
        "letter": "plan ()"
    },
    "290": {
        "character": "등산하다",
        "letter": "hiking ()"
    },
    "291": {
        "character": "목욕하다",
        "letter": "bath "
    },
    "292": {
        "character": "문",
        "letter": "door ()"
    },
    "293": {
        "character": "샤워하다",
        "letter": "shower "
    },
    "294": {
        "character": "잡지",
        "letter": "magazine ()"
    },
    "295": {
        "character": "졸업하다",
        "letter": "graduation "
    },
    "296": {
        "character": "화장실",
        "letter": "bathroom, restroom "
    },
    "297": {
        "character": "별로",
        "letter": "not really "
    },
    "298": {
        "character": "제일",
        "letter": "first, most "
    },
    "299": {
        "character": "구경하다",
        "letter": "to look around; to sightsee "
    },
    "300": {
        "character": "고르다",
        "letter": "to choose, select "
    },
    "301": {
        "character": "세수하다",
        "letter": "to wash one's face () "
    },
    "302": {
        "character": "손을씻다",
        "letter": "to wash one's hands "
    },
    "303": {
        "character": "열다",
        "letter": "to open () "
    },
    "304": {
        "character": "이를닦다",
        "letter": "to brush one's teeth ~ "
    },
    "305": {
        "character": "고나서",
        "letter": "after (clausal connection) ~()"
    },
    "306": {
        "character": "으면서",
        "letter": "while ~ing ~()"
    },
    "307": {
        "character": "으ㄹ",
        "letter": "noun modifying form (prospective) "
    },
    "308": {
        "character": "과자",
        "letter": "chips, cookies, crackers "
    },
    "309": {
        "character": "냉면",
        "letter": "naengmyon (cold buckwheat noodles) "
    },
    "310": {
        "character": "라면",
        "letter": "instant noodles (ramen) "
    },
    "311": {
        "character": "밥",
        "letter": "cooked rice; meal "
    },
    "312": {
        "character": "볼링",
        "letter": "bowling "
    },
    "313": {
        "character": "비빔밥",
        "letter": "pibimbap (rice with vegetables and beef) "
    },
    "314": {
        "character": "순두부찌개",
        "letter": "spicy soft tofu stew "
    },
    "315": {
        "character": "육개장",
        "letter": "spicy beef and leek soup "
    },
    "316": {
        "character": "음식점",
        "letter": "restaurant (=) "
    },
    "317": {
        "character": "식당자리",
        "letter": "seat "
    },
    "318": {
        "character": "종업원",
        "letter": "employee "
    },
    "319": {
        "character": "케이크",
        "letter": "cake "
    },
    "320": {
        "character": "물어보다",
        "letter": "to inquire "
    },
    "321": {
        "character": "싫어하다",
        "letter": "to dislike "
    },
    "322": {
        "character": "주문하다",
        "letter": "to order "
    },
    "323": {
        "character": "뜨겁다",
        "letter": "to be hot "
    },
    "324": {
        "character": "시원하다",
        "letter": "to be cool, refreshing "
    },
    "325": {
        "character": "싫다",
        "letter": "to be undesirable "
    },
    "326": {
        "character": "차다",
        "letter": "to be cold ~"
    },
    "327": {
        "character": "기",
        "letter": "nominalizer ~ "
    },
    "328": {
        "character": "기때문에",
        "letter": "because ~/ "
    },
    "329": {
        "character": "어아보다",
        "letter": "to try to "
    },
    "330": {
        "character": "값",
        "letter": "price "
    },
    "331": {
        "character": "계산서",
        "letter": "check "
    },
    "332": {
        "character": "김치",
        "letter": "kimchi "
    },
    "333": {
        "character": "녹차",
        "letter": "green tea "
    },
    "334": {
        "character": "된장찌개",
        "letter": "soybean-paste stew "
    },
    "335": {
        "character": "메뉴",
        "letter": "menu "
    },
    "336": {
        "character": "반찬",
        "letter": "side dishes "
    },
    "337": {
        "character": "샌드위치",
        "letter": "Sandwich "
    },
    "338": {
        "character": "식사",
        "letter": "meal "
    },
    "339": {
        "character": "음료수",
        "letter": "beverage "
    },
    "340": {
        "character": "피자",
        "letter": "pizza ~/ "
    },
    "341": {
        "character": "어아드리다",
        "letter": "do something for another's benefit (honorific)  / (honorific)"
    },
    "342": {
        "character": "놓아주다드리다",
        "letter": "to put something down (for someone)  / (honorific)"
    },
    "343": {
        "character": "돌려주다드리다",
        "letter": "to return (something to/for someone) "
    },
    "344": {
        "character": "시키다",
        "letter": "to order (food) "
    },
    "345": {
        "character": "식사하다",
        "letter": "to have a meal  / (honorific)"
    },
    "346": {
        "character": "잘라주다드리다",
        "letter": "to cut (something for someone) "
    },
    "347": {
        "character": "달다",
        "letter": "to be sweet "
    },
    "348": {
        "character": "맵다",
        "letter": "to be spicy "
    },
    "349": {
        "character": "않다",
        "letter": "to not be, to not do "
    },
    "350": {
        "character": "짜다",
        "letter": "to be salty "
    },
    "351": {
        "character": "그림",
        "letter": "picture, painting "
    },
    "352": {
        "character": "기분",
        "letter": "feeling "
    },
    "353": {
        "character": "대답",
        "letter": "Answer "
    },
    "354": {
        "character": "록",
        "letter": "Rock music "
    },
    "355": {
        "character": "바이올린",
        "letter": "Violin "
    },
    "356": {
        "character": "서비스",
        "letter": "Service ()"
    },
    "357": {
        "character": "연주하다",
        "letter": "musical performance "
    },
    "358": {
        "character": "잠",
        "letter": "sleep "
    },
    "359": {
        "character": "재즈",
        "letter": "jazz "
    },
    "360": {
        "character": "취미",
        "letter": "Hobby "
    },
    "361": {
        "character": "클래식",
        "letter": "classical music "
    },
    "362": {
        "character": "헤드폰",
        "letter": "headphones "
    },
    "363": {
        "character": "보다",
        "letter": "than ()"
    },
    "364": {
        "character": "이나",
        "letter": "or (with nouns) "
    },
    "365": {
        "character": "그리다",
        "letter": "to draw "
    },
    "366": {
        "character": "틀다",
        "letter": "to turn on, switch on, play (music) "
    },
    "367": {
        "character": "더럽다",
        "letter": "to be dirty "
    },
    "368": {
        "character": "편리하다",
        "letter": "to be convenient, handy, easy "
    },
    "369": {
        "character": "가장",
        "letter": "the most "
    },
    "370": {
        "character": "덜",
        "letter": "less "
    },
    "371": {
        "character": "새로",
        "letter": "newly "
    },
    "372": {
        "character": "중에서",
        "letter": "between, among ~()"
    },
    "373": {
        "character": "으면",
        "letter": "if ~ "
    },
    "374": {
        "character": "는것",
        "letter": "(an act of) ~ing "
    },
    "375": {
        "character": "기타",
        "letter": "Guitar "
    },
    "376": {
        "character": "때",
        "letter": "time "
    },
    "377": {
        "character": "악기",
        "letter": "Musical instrument "
    },
    "378": {
        "character": "요리",
        "letter": "Cooking "
    },
    "379": {
        "character": "음악회",
        "letter": "concert "
    },
    "380": {
        "character": "중학교",
        "letter": "middle school "
    },
    "381": {
        "character": "축구",
        "letter": "soccer "
    },
    "382": {
        "character": "태권도",
        "letter": "Korean martial art (Taekwondo) "
    },
    "383": {
        "character": "피아노",
        "letter": "piano "
    },
    "384": {
        "character": "한글",
        "letter": "Korean alphabet "
    },
    "385": {
        "character": "심심하다",
        "letter": "To be bored  ()"
    },
    "386": {
        "character": "어리다어렸을",
        "letter": "to be young  "
    },
    "387": {
        "character": "스키타다",
        "letter": "to ski "
    },
    "388": {
        "character": "조심하다",
        "letter": "to be careful "
    },
    "389": {
        "character": "치다",
        "letter": "to play (piano, guitar) "
    },
    "390": {
        "character": "특히",
        "letter": "particularly ~() "
    },
    "391": {
        "character": "으ㄹ줄",
        "letter": "how to"
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