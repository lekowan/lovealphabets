// Configuration
const localStorageKey = "mandarin" + "Hsk1VocabularyAudio" + "Srs";

// Display level
const displayLevel = "SRS Practice";

// Speech Synthesis
const language = "zh-CN";
const activateSpeech = true;

// Gradient
const gradientBackground = "purple-background";
const loadergradientBackground = "purple-loader-background";

// CTA Background
const ctaClass = "purple-cta";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the HSK1 vocabulary list everyday. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "我": {
    "letter": "I or me",
    "pinyin": "wǒ"
  },
  "你": {
    "letter": "you (singular)",
    "pinyin": "nǐ"
  },
  "他": {
    "letter": "he or him",
    "pinyin": "tā"
  },
  "她": {
    "letter": "she or her",
    "pinyin": "tā"
  },
  "我们": {
    "letter": "we or me",
    "pinyin": "wǒmen"
  },
  "人": {
    "letter": "person or people",
    "pinyin": "rén"
  },
  "名字": {
    "letter": "name",
    "pinyin": "míngzì"
  },
  "妈妈": {
    "letter": "mom",
    "pinyin": "māma"
  },
  "爸爸": {
    "letter": "dad",
    "pinyin": "bàba"
  },
  "儿子": {
    "letter": "son",
    "pinyin": "érzi"
  },
  "女儿": {
    "letter": "daughter",
    "pinyin": "nǚ’ér"
  },
  "朋友": {
    "letter": "friend",
    "pinyin": "péngyǒu"
  },
  "先生": {
    "letter": "Mr or sir",
    "pinyin": "xiānsheng"
  },
  "小姐": {
    "letter": "Miss",
    "pinyin": "xiǎojiě"
  },
  "老师": {
    "letter": "teacher",
    "pinyin": "lǎoshī"
  },
  "学生": {
    "letter": "student",
    "pinyin": "xuésheng"
  },
  "同学": {
    "letter": "schoolmate",
    "pinyin": "tóngxué"
  },
  "医生": {
    "letter": "doctor",
    "pinyin": "yīshēng"
  },
  "东西": {
    "letter": "thing",
    "pinyin": "dōngxi"
  },
  "钱": {
    "letter": "money",
    "pinyin": "qián"
  },
  "水": {
    "letter": "water",
    "pinyin": "shuǐ"
  },
  "茶": {
    "letter": "tea",
    "pinyin": "chá"
  },
  "菜": {
    "letter": "dish",
    "pinyin": "cài"
  },
  "米饭": {
    "letter": "(cooked) rice",
    "pinyin": "mǐfàn"
  },
  "衣服": {
    "letter": "clothes",
    "pinyin": "yīfu"
  },
  "书": {
    "letter": "book",
    "pinyin": "shū"
  },
  "桌子": {
    "letter": "table or desk",
    "pinyin": "zhuōzi"
  },
  "椅子": {
    "letter": "chair",
    "pinyin": "yǐzi"
  },
  "水果": {
    "letter": "fruit",
    "pinyin": "shuǐguǒ"
  },
  "苹果": {
    "letter": "apple",
    "pinyin": "píngguǒ"
  },
  "杯子": {
    "letter": "cup or glass",
    "pinyin": "bēizi"
  },
  "电视": {
    "letter": "TV",
    "pinyin": "diànshì"
  },
  "电脑": {
    "letter": "computer",
    "pinyin": "diànnǎo"
  },
  "电影": {
    "letter": "movie",
    "pinyin": "diànyǐng"
  },
  "飞机": {
    "letter": "plane",
    "pinyin": "fēijī"
  },
  "出租车": {
    "letter": "taxi",
    "pinyin": "chūzūchē"
  },
  "猫": {
    "letter": "cat",
    "pinyin": "māo"
  },
  "狗": {
    "letter": "dog",
    "pinyin": "gǒu"
  },
  "天气": {
    "letter": "weather",
    "pinyin": "tiānqì"
  },
  "字": {
    "letter": "character",
    "pinyin": "zì"
  },
  "汉语": {
    "letter": "Chinese (language)",
    "pinyin": "Hànyǔ"
  },
  "这/这儿": {
    "letter": "this/here",
    "pinyin": "zhè/zhèr"
  },
  "那/那儿": {
    "letter": "that/there",
    "pinyin": "nà/nàr"
  },
  "哪/哪儿": {
    "letter": "which/where",
    "pinyin": "nǎ/nǎr"
  },
  "谁": {
    "letter": "who",
    "pinyin": "shéi"
  },
  "什么": {
    "letter": "what",
    "pinyin": "shénme"
  },
  "多少": {
    "letter": "how many or how much",
    "pinyin": "duōshao"
  },
  "几": {
    "letter": "how many or how much",
    "pinyin": "jǐ"
  },
  "怎么": {
    "letter": "how",
    "pinyin": "zěnme"
  },
  "怎么样": {
    "letter": "how about",
    "pinyin": "zěnmeyàng"
  },
  "现在": {
    "letter": "now",
    "pinyin": "xiànzài"
  },
  "今天": {
    "letter": "today",
    "pinyin": "jīntiān"
  },
  "明天": {
    "letter": "tomorrow",
    "pinyin": "míngtiān"
  },
  "昨天": {
    "letter": "yesterday",
    "pinyin": "zuótiān"
  },
  "上午": {
    "letter": "morning",
    "pinyin": "shàngwǔ"
  },
  "中午": {
    "letter": "noon",
    "pinyin": "zhōngwǔ"
  },
  "下午": {
    "letter": "afternoon",
    "pinyin": "xiàwǔ"
  },
  "点": {
    "letter": "o’clock",
    "pinyin": "diǎn"
  },
  "分钟": {
    "letter": "minute",
    "pinyin": "fēnzhōng"
  },
  "年": {
    "letter": "year",
    "pinyin": "nián"
  },
  "月": {
    "letter": "month",
    "pinyin": "yuè"
  },
  "日": {
    "letter": "day",
    "pinyin": "rì"
  },
  "星期": {
    "letter": "week",
    "pinyin": "xīngqī"
  },
  "时候": {
    "letter": "a certain point in time",
    "pinyin": "shíhou"
  },
  "中国": {
    "letter": "China",
    "pinyin": "Zhōngguó"
  },
  "北京": {
    "letter": "Beijing",
    "pinyin": "Běijīng"
  },
  "家": {
    "letter": "home or family",
    "pinyin": "jiā"
  },
  "学校": {
    "letter": "school",
    "pinyin": "xuéxiào"
  },
  "饭馆": {
    "letter": "restaurant",
    "pinyin": "fànguǎn"
  },
  "商店": {
    "letter": "shop",
    "pinyin": "shāngdiàn"
  },
  "医院": {
    "letter": "hospital",
    "pinyin": "yīyuàn"
  },
  "火车站": {
    "letter": "train station",
    "pinyin": "huǒchēzhàn"
  },
  "上": {
    "letter": "on, above or last",
    "pinyin": "shàng"
  },
  "下": {
    "letter": "under, below or next",
    "pinyin": "xià"
  },
  "前面": {
    "letter": "front",
    "pinyin": "qiánmiàn"
  },
  "后面": {
    "letter": "back",
    "pinyin": "hòumiàn"
  },
  "里": {
    "letter": "inside",
    "pinyin": "lǐ"
  },
  "个": {
    "letter": "generic measure word",
    "pinyin": "gè"
  },
  "块": {
    "letter": "basic monetary unit of China",
    "pinyin": "kuài"
  },
  "本": {
    "letter": "for books",
    "pinyin": "běn"
  },
  "岁": {
    "letter": "year (of age)",
    "pinyin": "suì"
  },
  "些": {
    "letter": "some",
    "pinyin": "xiē"
  },
  "做": {
    "letter": "to do",
    "pinyin": "zuò"
  },
  "是": {
    "letter": "to be",
    "pinyin": "shì"
  },
  "在": {
    "letter": "to be in",
    "pinyin": "zài"
  },
  "有": {
    "letter": "to have",
    "pinyin": "yǒu"
  },
  "住": {
    "letter": "to live or to stay",
    "pinyin": "zhù"
  },
  "来": {
    "letter": "to come",
    "pinyin": "lái"
  },
  "去": {
    "letter": "to go",
    "pinyin": "qù"
  },
  "回": {
    "letter": "to return",
    "pinyin": "huí"
  },
  "想": {
    "letter": "to think",
    "pinyin": "xiǎng"
  },
  "吃": {
    "letter": "to eat",
    "pinyin": "chī"
  },
  "喝": {
    "letter": "to drink",
    "pinyin": "hē"
  },
  "说话": {
    "letter": "to speak",
    "pinyin": "shuōhuà"
  },
  "看": {
    "letter": "to look or to watch",
    "pinyin": "kàn"
  },
  "看见": {
    "letter": "to see",
    "pinyin": "kànjiàn"
  },
  "听": {
    "letter": "to listen",
    "pinyin": "tīng"
  },
  "叫": {
    "letter": "to call",
    "pinyin": "jiào"
  },
  "买": {
    "letter": "to buy",
    "pinyin": "mǎi"
  },
  "开": {
    "letter": "to drive or to open",
    "pinyin": "kāi"
  },
  "坐": {
    "letter": "to sit",
    "pinyin": "zuò"
  },
  "读": {
    "letter": "to read",
    "pinyin": "dú"
  },
  "写": {
    "letter": "to write",
    "pinyin": "xiě"
  },
  "打电话": {
    "letter": "to make a phone call",
    "pinyin": "dǎ diànhuà"
  },
  "认识": {
    "letter": "to know",
    "pinyin": "rènshi"
  },
  "学习": {
    "letter": "to learn",
    "pinyin": "xuéxí"
  },
  "工作": {
    "letter": "to work",
    "pinyin": "gōngzuò"
  },
  "睡觉": {
    "letter": "to sleep",
    "pinyin": "shuìjiào"
  },
  "喜欢": {
    "letter": "to like",
    "pinyin": "xǐhuan"
  },
  "爱": {
    "letter": "to love",
    "pinyin": "ài"
  },
  "会": {
    "letter": "can (to know how to)",
    "pinyin": "huì"
  },
  "能": {
    "letter": "can (to be able to)",
    "pinyin": "néng"
  },
  "下雨": {
    "letter": "to rain",
    "pinyin": "xià yǔ"
  },
  "好": {
    "letter": "good",
    "pinyin": "hǎo"
  },
  "大": {
    "letter": "big",
    "pinyin": "dà"
  },
  "小": {
    "letter": "small",
    "pinyin": "xiǎo"
  },
  "多": {
    "letter": "many",
    "pinyin": "duō"
  },
  "少": {
    "letter": "few",
    "pinyin": "shǎo"
  },
  "热": {
    "letter": "hot",
    "pinyin": "rè"
  },
  "冷": {
    "letter": "cold",
    "pinyin": "lěng"
  },
  "漂亮": {
    "letter": "pretty",
    "pinyin": "piàoliang"
  },
  "高兴": {
    "letter": "happy",
    "pinyin": "gāoxìng"
  },
  "很": {
    "letter": "very",
    "pinyin": "hěn"
  },
  "太": {
    "letter": "too…",
    "pinyin": "tài"
  },
  "都": {
    "letter": "both or all",
    "pinyin": "dōu"
  },
  "不": {
    "letter": "not",
    "pinyin": "bù"
  },
  "没": {
    "letter": "not",
    "pinyin": "méi"
  },
  "的": {
    "letter": "possession particle",
    "pinyin": "de"
  },
  "了": {
    "letter": "aspect particle",
    "pinyin": "le"
  },
  "吗": {
    "letter": "question particle",
    "pinyin": "ma"
  },
  "呢": {
    "letter": "question particle",
    "pinyin": "ne"
  },
  "和": {
    "letter": "and",
    "pinyin": "hé"
  },
  "喂": {
    "letter": "hello (on the phone)",
    "pinyin": "wèi"
  },
  "谢谢": {
    "letter": "thanks",
    "pinyin": "xièxie"
  },
  "不客气": {
    "letter": "you’re welcome",
    "pinyin": "bú kèqi"
  },
  "再见": {
    "letter": "goodbye",
    "pinyin": "zàijiàn"
  },
  "请": {
    "letter": "please…",
    "pinyin": "qǐng"
  },
  "对不起": {
    "letter": "sorry",
    "pinyin": "duìbuqǐ"
  },
  "没关系": {
    "letter": "it’s all right",
    "pinyin": "méi guānxi"
  },
  "零": {
    "letter": "zero",
    "pinyin": "líng"
  },
  "一": {
    "letter": "one",
    "pinyin": "yī"
  },
  "二": {
    "letter": "two",
    "pinyin": "èr"
  },
  "三": {
    "letter": "three",
    "pinyin": "sān"
  },
  "四": {
    "letter": "four",
    "pinyin": "sì"
  },
  "五": {
    "letter": "five",
    "pinyin": "wǔ"
  },
  "六": {
    "letter": "six",
    "pinyin": "liù"
  },
  "七": {
    "letter": "seven",
    "pinyin": "qī"
  },
  "八": {
    "letter": "eight",
    "pinyin": "bā"
  },
  "九": {
    "letter": "nine",
    "pinyin": "jiǔ"
  },
  "十": {
    "letter": "ten",
    "pinyin": "shí"
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

