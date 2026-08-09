// Configuration
const localStorageKey = "korean" + "HangugeoConAngDuck1Sentences" + "Srs";
const srsTitle = "Hangugeo con AngDuck #1";
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
const welcomeIntro = "In this spaced-repetition practice (SRS), you will study full sentences from Hangugeo con AngDuck episode #1. \n \n After your first session, you will also revise learned sentences from previous sessions";

const allSyllableMap = {
    "1": {
        "character": "한국어 con",
        "letter": "Hangugeo con; Korean with..."
    },
    "2": {
        "character": "여러분, 안녕하세요?",
        "letter": "Hello, everyone."
    },
    "3": {
        "character": "한국어 con 앵덕의 시간입니다.",
        "letter": "It's time for Hangugeo con AngDuck."
    },
    "4": {
        "character": "저는 여러분의 한국어 선생님 앵덕입니다.",
        "letter": "I am your Korean teacher, AngDuck."
    },
    "5": {
        "character": "반갑습니다, 여러분.",
        "letter": "Nice to meet you, everyone."
    },
    "6": {
        "character": "그럼 오늘부터 저와 함께 한국어 공부를 시작해 볼까요?",
        "letter": "Then, starting today, shall we begin studying Korean together?"
    },
    "7": {
        "character": "오늘은 상대방의 이름을 물어보는 방법에 대해서 이야기를 해 보겠습니다.",
        "letter": "Today, we will talk about how to ask another person's name."
    },
    "8": {
        "character": "여러분의 이름은 무엇인가요?",
        "letter": "What is your name?"
    },
    "9": {
        "character": "저의 이름은 앵덕입니다.",
        "letter": "My name is AngDuck."
    },
    "10": {
        "character": "여러분의 이름은 뭐예요?",
        "letter": "What is your name?"
    },
    "11": {
        "character": "여러분은 성함이 어떻게 되시나요?",
        "letter": "May I ask your name?"
    },
    "12": {
        "character": "제가 지금 두 가지 방법으로 여러분의 이름을 물어봤습니다.",
        "letter": "I just asked your name in two different ways."
    },
    "13": {
        "character": "이름이 무엇입니까? 이름이 뭐예요? 라고 질문을 해도 괜찮지만 성함이 어떻게 되세요? 라고 질문을 하는 쪽이 훨씬 더 예의가 바른 표현입니다.",
        "letter": "It is okay to ask, \"What is your name?\" or \"What's your name?\", but asking \"May I ask your name?\" is a much more polite expression."
    },
    "14": {
        "character": "예의가 바르다는 것은 polite 하다는 의미이죠.",
        "letter": "Being \"yeuiga bareuda\" means being polite."
    },
    "15": {
        "character": "그러니까 여러분들께서는 상대방의 이름을 물어볼 때 이름이 뭐예요? 이름이 무엇인가요? 라고 질문을 하기 보다는 성함이 어떻게 되시나요? 라고 질문을 해주세요.",
        "letter": "So when you ask another person's name, rather than asking \"What's your name?\" or \"What is your name?\", please ask \"May I ask your name?\""
    },
    "16": {
        "character": "그렇지만 실제 일상 생활에서는 성함이 어떻게 되시나요? 라고 길게 이야기를 하지 않아도 그냥 저 성함이라고까지만 이야기를 하셔도 상대방이 이름을 알려 줄 거예요.",
        "letter": "However, in actual daily life, even if you do not say the full sentence \"May I ask your name?\", and simply say something like \"Um, your name...\", the other person will tell you their name."
    },
    "17": {
        "character": "그러니까 성함이 어떻게 되시나요? 라고 질문을 해도 괜찮고 그냥 저 성함이라고까지만 이야기를 해도 괜찮습니다.",
        "letter": "So it is fine to ask \"May I ask your name?\", and it is also fine to simply say something like \"Um, your name...\""
    },
    "18": {
        "character": "그럼 저는 내일 또 새로운 이야기를 가지고 돌아오겠습니다.",
        "letter": "Then I will come back tomorrow with another new story."
    },
    "19": {
        "character": "내일 만나요 여러분.",
        "letter": "See you tomorrow, everyone."
    },
    "20": {
        "character": "안녕히 계세요.",
        "letter": "Goodbye."
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
