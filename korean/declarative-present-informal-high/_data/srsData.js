// Configuration
const localStorageKey = "korean" + "declarativePresentInformalHighVerbs" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "ko-KR";
const activateSpeech = false;

// Gradient
const gradientBackground = "pink-background";
const loadergradientBackground = "pink-loader-background";

// CTA Background
const ctaClass = "pink-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

// Welcome Popover Content
const welcomeIntro = "In this spaced-repetition practice (SRS), you will need to change Infinitive verbs into their Declarative Present (Informal High). \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "보다": {
    "letter": "봐요",
    "pinyin": "to see/watch"
  },
  "말하다": {
    "letter": "말해요",
    "pinyin": "to talk/speak"
  },
  "묻다": {
    "letter": "물어요",
    "pinyin": "to ask"
  },
  "대답하다": {
    "letter": "대답해요",
    "pinyin": "to answer"
  },
  "생각하다": {
    "letter": "생각해요",
    "pinyin": "to think"
  },
  "자다": {
    "letter": "자요",
    "pinyin": "to sleep"
  },
  "꿈꾸다": {
    "letter": "꿈꿔요",
    "pinyin": "to dream"
  },
  "만들다": {
    "letter": "만들어요",
    "pinyin": "to make/create"
  },
  "듣다": {
    "letter": "들어요",
    "pinyin": "to listen/hear"
  },
  "놀다": {
    "letter": "놀아요",
    "pinyin": "to play"
  },
  "필요하다": {
    "letter": "필요해요",
    "pinyin": "to need"
  },
  "이다": {
    "letter": "이에요",
    "pinyin": "to be"
  },
  "되다": {
    "letter": "돼요",
    "pinyin": "to become"
  },
  "할수있다": {
    "letter": "할수있어요",
    "pinyin": "to be able to"
  },
  "하다": {
    "letter": "해요",
    "pinyin": "to do"
  },
  "배우다": {
    "letter": "배워요",
    "pinyin": "to learn"
  },
  "공부하다": {
    "letter": "공부해요",
    "pinyin": "to study"
  },
  "쓰다": {
    "letter": "써요",
    "pinyin": "to wear (a hat or glasses)"
  },
  "읽다": {
    "letter": "읽어요",
    "pinyin": "to read"
  },
  "일하다": {
    "letter": "일해요",
    "pinyin": "to work"
  },
  "가르치다": {
    "letter": "가르쳐요",
    "pinyin": "to teach"
  },
  "주다": {
    "letter": "줘요",
    "pinyin": "to give"
  },
  "받다": {
    "letter": "받아요",
    "pinyin": "to receive"
  },
  "청소하다": {
    "letter": "청소해요",
    "pinyin": "to clean"
  },
  "씻다": {
    "letter": "씻어요",
    "pinyin": "to wash"
  },
  "전화하다": {
    "letter": "전화해요",
    "pinyin": "to call (telephone)"
  },
  "있다": {
    "letter": "있어요",
    "pinyin": "to have/exist"
  },
  "없다": {
    "letter": "없어요",
    "pinyin": "to not have"
  },
  "끝나다": {
    "letter": "끝나요",
    "pinyin": "to finish"
  },
  "알다": {
    "letter": "알아요",
    "pinyin": "to know"
  },
  "모르다": {
    "letter": "몰라요",
    "pinyin": "to not know"
  },
  "연습하다": {
    "letter": "연습해요",
    "pinyin": "to practice"
  },
  "찍다": {
    "letter": "찍어요",
    "pinyin": "to take (a photo)"
  },
  "가져가다": {
    "letter": "가져가요",
    "pinyin": "to take/carry"
  },
  "그리다": {
    "letter": "그려요",
    "pinyin": "to draw/paint"
  },
  "놓다": {
    "letter": "놓아요",
    "pinyin": "to put"
  },
  "오다": {
    "letter": "와요",
    "pinyin": "to come"
  },
  "가다": {
    "letter": "가요",
    "pinyin": "to go"
  },
  "걷다": {
    "letter": "걸어요",
    "pinyin": "to walk"
  },
  "앉다": {
    "letter": "앉아요",
    "pinyin": "to sit"
  },
  "일어나": {
    "letter": "일어나요",
    "pinyin": "to wake up"
  },
  "춤추다": {
    "letter": "춤춰요",
    "pinyin": "to dance"
  },
  "만나다": {
    "letter": "만나요",
    "pinyin": "to meet"
  },
  "운동하다": {
    "letter": "운동해요",
    "pinyin": "to exercise"
  },
  "운전하다": {
    "letter": "운전해요",
    "pinyin": "to drive"
  },
  "타다": {
    "letter": "타요",
    "pinyin": "to ride"
  },
  "열다": {
    "letter": "열어요",
    "pinyin": "to open"
  },
  "닫다": {
    "letter": "닫아요",
    "pinyin": "to close"
  },
  "도착하다": {
    "letter": "도착해요",
    "pinyin": "to arrive"
  },
  "출발하다": {
    "letter": "출발해요",
    "pinyin": "to depart"
  },
  "들어오다": {
    "letter": "들어와요",
    "pinyin": "to enter"
  },
  "나가다": {
    "letter": "나가요",
    "pinyin": "to exit"
  },
  "기다리다": {
    "letter": "기다려요",
    "pinyin": "to wait"
  },
  "그만하다": {
    "letter": "그만해요",
    "pinyin": "to stop"
  },
  "서두르다": {
    "letter": "서둘러요",
    "pinyin": "to hurry"
  },
  "움직이다": {
    "letter": "움직이에요",
    "pinyin": "to move"
  },
  "돌아오다": {
    "letter": "돌아와요",
    "pinyin": "to return"
  },
  "여행하다": {
    "letter": "여행해요",
    "pinyin": "to travel"
  },
  "먹다": {
    "letter": "먹어요",
    "pinyin": "to eat"
  },
  "마시다": {
    "letter": "마셔요",
    "pinyin": "to drink"
  },
  "요리하다": {
    "letter": "요리해요",
    "pinyin": "to cook"
  },
  "썰다": {
    "letter": "썰어요",
    "pinyin": "to chop"
  },
  "끓이다": {
    "letter": "끓여요",
    "pinyin": "to boil"
  },
  "볶다": {
    "letter": "볶아요",
    "pinyin": "to fry"
  },
  "휘젓다": {
    "letter": "휘저어요",
    "pinyin": "to stir"
  },
  "굽다": {
    "letter": "구워요",
    "pinyin": "to grill/bake/roast"
  },
  "섞다": {
    "letter": "섞어요",
    "pinyin": "to mix"
  },
  "붓다": {
    "letter": "부어요",
    "pinyin": "to pour"
  },
  "입다": {
    "letter": "입어요",
    "pinyin": "to wear (shirt, pants, dress)"
  },
  "신다": {
    "letter": "신어요",
    "pinyin": "to wear (shoes or socks)"
  },
  "벗다": {
    "letter": "벗어요",
    "pinyin": "to undress"
  },
  "갈아입다": {
    "letter": "갈아입어요",
    "pinyin": "to change clothes"
  },
  "울다": {
    "letter": "울어요",
    "pinyin": "to cry"
  },
  "좋아하다": {
    "letter": "좋아해요",
    "pinyin": "to like"
  },
  "싫어하다": {
    "letter": "싫어해요",
    "pinyin": "to dislike"
  },
  "웃다": {
    "letter": "웃어요",
    "pinyin": "to laugh"
  },
  "기뻐하다": {
    "letter": "기뻐해요",
    "pinyin": "to be happy"
  },
  "사랑하다": {
    "letter": "사랑해요",
    "pinyin": "to love"
  },
  "사랑에 빠지다": {
    "letter": "사랑해요",
    "pinyin": "to fall in love"
  },
  "약속하다": {
    "letter": "약속해요",
    "pinyin": "to promise"
  },
  "고백하다": {
    "letter": "고백해요",
    "pinyin": "to confess"
  },
  "걱정하다": {
    "letter": "걱정해요",
    "pinyin": "to worry"
  },
  "결혼하다": {
    "letter": "결혼해요",
    "pinyin": "to marry"
  },
  "거짓말하다": {
    "letter": "거짓말해요",
    "pinyin": "to lie"
  },
  "살다": {
    "letter": "살아요",
    "pinyin": "to live"
  },
  "죽다": {
    "letter": "죽어요",
    "pinyin": "to die"
  },
  "싸우다": {
    "letter": "싸워요",
    "pinyin": "to fight/argue"
  },
  "이기다": {
    "letter": "이겨요",
    "pinyin": "to win"
  },
  "지다": {
    "letter": "이겨요",
    "pinyin": "to lose"
  },
  "죄송하다": {
    "letter": "죄송해요",
    "pinyin": "to be sorry"
  },
  "기억하다": {
    "letter": "기억해요",
    "pinyin": "to remember"
  },
  "결정하다": {
    "letter": "결정해요",
    "pinyin": "to decide"
  },
  "사다": {
    "letter": "사요",
    "pinyin": "to buy"
  },
  "팔다": {
    "letter": "팔아요",
    "pinyin": "to sell"
  },
  "주문하다": {
    "letter": "주문해요",
    "pinyin": "to order"
  },
  "도와주다": {
    "letter": "도와줘요",
    "pinyin": "to help"
  },
  "내다": {
    "letter": "내요",
    "pinyin": "to pay"
  },
  "보내다": {
    "letter": "보내요",
    "pinyin": "to send"
  },
  "빌리다": {
    "letter": "빌려요",
    "pinyin": "to borrow"
  },
  "사용하다": {
    "letter": "사용해요",
    "pinyin": "to use"
  }
}


function translation(n) {
    if (!n) { n = this; }
    let letterObj = allSyllableMap[n];
    return letterObj.letter;
}

String.prototype.romanize = translation;


function transliteration(n) {
    if (!n) { n = this; }
    let transliterationObj = allSyllableMap[n];
    return transliterationObj.pinyin;
}

String.prototype.transliterate = transliteration;
