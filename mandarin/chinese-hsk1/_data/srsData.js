// Configuration
const localStorageKey = "mandarin" + "Hsk1Vocabulary" + "Srs";
const srsTitle = "Hsk1 Vocabulary";
const languageTitle = "Mandarin";

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
    "1": {
        "character": "我",
        "letter": "I or me",
        "pinyin": "wǒ"
    },
    "2": {
        "character": "你",
        "letter": "you (singular)",
        "pinyin": "nǐ"
    },
    "3": {
        "character": "他",
        "letter": "he or him",
        "pinyin": "tā"
    },
    "4": {
        "character": "她",
        "letter": "she or her",
        "pinyin": "tā"
    },
    "5": {
        "character": "我们",
        "letter": "we or us",
        "pinyin": "wǒmen"
    },
    "6": {
        "character": "人",
        "letter": "person or people",
        "pinyin": "rén"
    },
    "7": {
        "character": "名字",
        "letter": "name",
        "pinyin": "míngzì"
    },
    "8": {
        "character": "妈妈",
        "letter": "mom",
        "pinyin": "māma"
    },
    "9": {
        "character": "爸爸",
        "letter": "dad",
        "pinyin": "bàba"
    },
    "10": {
        "character": "儿子",
        "letter": "son",
        "pinyin": "érzi"
    },
    "11": {
        "character": "女儿",
        "letter": "daughter",
        "pinyin": "nǚ’ér"
    },
    "12": {
        "character": "朋友",
        "letter": "friend",
        "pinyin": "péngyǒu"
    },
    "13": {
        "character": "先生",
        "letter": "Mr or sir",
        "pinyin": "xiānsheng"
    },
    "14": {
        "character": "小姐",
        "letter": "Miss",
        "pinyin": "xiǎojiě"
    },
    "15": {
        "character": "老师",
        "letter": "teacher",
        "pinyin": "lǎoshī"
    },
    "16": {
        "character": "学生",
        "letter": "student",
        "pinyin": "xuésheng"
    },
    "17": {
        "character": "同学",
        "letter": "schoolmate",
        "pinyin": "tóngxué"
    },
    "18": {
        "character": "医生",
        "letter": "doctor",
        "pinyin": "yīshēng"
    },
    "19": {
        "character": "东西",
        "letter": "thing",
        "pinyin": "dōngxi"
    },
    "20": {
        "character": "钱",
        "letter": "money",
        "pinyin": "qián"
    },
    "21": {
        "character": "水",
        "letter": "water",
        "pinyin": "shuǐ"
    },
    "22": {
        "character": "茶",
        "letter": "tea",
        "pinyin": "chá"
    },
    "23": {
        "character": "菜",
        "letter": "dish",
        "pinyin": "cài"
    },
    "24": {
        "character": "米饭",
        "letter": "(cooked) rice",
        "pinyin": "mǐfàn"
    },
    "25": {
        "character": "衣服",
        "letter": "clothes",
        "pinyin": "yīfu"
    },
    "26": {
        "character": "书",
        "letter": "book",
        "pinyin": "shū"
    },
    "27": {
        "character": "桌子",
        "letter": "table or desk",
        "pinyin": "zhuōzi"
    },
    "28": {
        "character": "椅子",
        "letter": "chair",
        "pinyin": "yǐzi"
    },
    "29": {
        "character": "水果",
        "letter": "fruit",
        "pinyin": "shuǐguǒ"
    },
    "30": {
        "character": "苹果",
        "letter": "apple",
        "pinyin": "píngguǒ"
    },
    "31": {
        "character": "杯子",
        "letter": "cup or glass",
        "pinyin": "bēizi"
    },
    "32": {
        "character": "电视",
        "letter": "TV",
        "pinyin": "diànshì"
    },
    "33": {
        "character": "电脑",
        "letter": "computer",
        "pinyin": "diànnǎo"
    },
    "34": {
        "character": "电影",
        "letter": "movie",
        "pinyin": "diànyǐng"
    },
    "35": {
        "character": "飞机",
        "letter": "plane",
        "pinyin": "fēijī"
    },
    "36": {
        "character": "出租车",
        "letter": "taxi",
        "pinyin": "chūzūchē"
    },
    "37": {
        "character": "猫",
        "letter": "cat",
        "pinyin": "māo"
    },
    "38": {
        "character": "狗",
        "letter": "dog",
        "pinyin": "gǒu"
    },
    "39": {
        "character": "天气",
        "letter": "weather",
        "pinyin": "tiānqì"
    },
    "40": {
        "character": "字",
        "letter": "character",
        "pinyin": "zì"
    },
    "41": {
        "character": "汉语",
        "letter": "Chinese (language)",
        "pinyin": "Hànyǔ"
    },
    "42": {
        "character": "这/这儿",
        "letter": "this/here",
        "pinyin": "zhè/zhèr"
    },
    "43": {
        "character": "那/那儿",
        "letter": "that/there",
        "pinyin": "nà/nàr"
    },
    "44": {
        "character": "哪/哪儿",
        "letter": "which/where",
        "pinyin": "nǎ/nǎr"
    },
    "45": {
        "character": "谁",
        "letter": "who",
        "pinyin": "shéi"
    },
    "46": {
        "character": "什么",
        "letter": "what",
        "pinyin": "shénme"
    },
    "47": {
        "character": "多少",
        "letter": "how many or how much",
        "pinyin": "duōshao"
    },
    "48": {
        "character": "几",
        "letter": "how many or how much",
        "pinyin": "jǐ"
    },
    "49": {
        "character": "怎么",
        "letter": "how",
        "pinyin": "zěnme"
    },
    "50": {
        "character": "怎么样",
        "letter": "how about",
        "pinyin": "zěnmeyàng"
    },
    "51": {
        "character": "现在",
        "letter": "now",
        "pinyin": "xiànzài"
    },
    "52": {
        "character": "今天",
        "letter": "today",
        "pinyin": "jīntiān"
    },
    "53": {
        "character": "明天",
        "letter": "tomorrow",
        "pinyin": "míngtiān"
    },
    "54": {
        "character": "昨天",
        "letter": "yesterday",
        "pinyin": "zuótiān"
    },
    "55": {
        "character": "上午",
        "letter": "morning",
        "pinyin": "shàngwǔ"
    },
    "56": {
        "character": "中午",
        "letter": "noon",
        "pinyin": "zhōngwǔ"
    },
    "57": {
        "character": "下午",
        "letter": "afternoon",
        "pinyin": "xiàwǔ"
    },
    "58": {
        "character": "点",
        "letter": "o’clock",
        "pinyin": "diǎn"
    },
    "59": {
        "character": "分钟",
        "letter": "minute",
        "pinyin": "fēnzhōng"
    },
    "60": {
        "character": "年",
        "letter": "year",
        "pinyin": "nián"
    },
    "61": {
        "character": "月",
        "letter": "month",
        "pinyin": "yuè"
    },
    "62": {
        "character": "日",
        "letter": "day",
        "pinyin": "rì"
    },
    "63": {
        "character": "星期",
        "letter": "week",
        "pinyin": "xīngqī"
    },
    "64": {
        "character": "时候",
        "letter": "a certain point in time",
        "pinyin": "shíhou"
    },
    "65": {
        "character": "中国",
        "letter": "China",
        "pinyin": "Zhōngguó"
    },
    "66": {
        "character": "北京",
        "letter": "Beijing",
        "pinyin": "Běijīng"
    },
    "67": {
        "character": "家",
        "letter": "home or family",
        "pinyin": "jiā"
    },
    "68": {
        "character": "学校",
        "letter": "school",
        "pinyin": "xuéxiào"
    },
    "69": {
        "character": "饭馆",
        "letter": "restaurant",
        "pinyin": "fànguǎn"
    },
    "70": {
        "character": "商店",
        "letter": "shop",
        "pinyin": "shāngdiàn"
    },
    "71": {
        "character": "医院",
        "letter": "hospital",
        "pinyin": "yīyuàn"
    },
    "72": {
        "character": "火车站",
        "letter": "train station",
        "pinyin": "huǒchēzhàn"
    },
    "73": {
        "character": "上",
        "letter": "on, above or last",
        "pinyin": "shàng"
    },
    "74": {
        "character": "下",
        "letter": "under, below or next",
        "pinyin": "xià"
    },
    "75": {
        "character": "前面",
        "letter": "front",
        "pinyin": "qiánmiàn"
    },
    "76": {
        "character": "后面",
        "letter": "back",
        "pinyin": "hòumiàn"
    },
    "77": {
        "character": "里",
        "letter": "inside",
        "pinyin": "lǐ"
    },
    "78": {
        "character": "个",
        "letter": "generic measure word",
        "pinyin": "gè"
    },
    "79": {
        "character": "块",
        "letter": "basic monetary unit of China",
        "pinyin": "kuài"
    },
    "80": {
        "character": "本",
        "letter": "for books",
        "pinyin": "běn"
    },
    "81": {
        "character": "岁",
        "letter": "year (of age)",
        "pinyin": "suì"
    },
    "82": {
        "character": "些",
        "letter": "some",
        "pinyin": "xiē"
    },
    "83": {
        "character": "做",
        "letter": "to do",
        "pinyin": "zuò"
    },
    "84": {
        "character": "是",
        "letter": "to be",
        "pinyin": "shì"
    },
    "85": {
        "character": "在",
        "letter": "to be in",
        "pinyin": "zài"
    },
    "86": {
        "character": "有",
        "letter": "to have",
        "pinyin": "yǒu"
    },
    "87": {
        "character": "住",
        "letter": "to live or to stay",
        "pinyin": "zhù"
    },
    "88": {
        "character": "来",
        "letter": "to come",
        "pinyin": "lái"
    },
    "89": {
        "character": "去",
        "letter": "to go",
        "pinyin": "qù"
    },
    "90": {
        "character": "回",
        "letter": "to return",
        "pinyin": "huí"
    },
    "91": {
        "character": "想",
        "letter": "to think",
        "pinyin": "xiǎng"
    },
    "92": {
        "character": "吃",
        "letter": "to eat",
        "pinyin": "chī"
    },
    "93": {
        "character": "喝",
        "letter": "to drink",
        "pinyin": "hē"
    },
    "94": {
        "character": "说话",
        "letter": "to speak",
        "pinyin": "shuōhuà"
    },
    "95": {
        "character": "看",
        "letter": "to look or to watch",
        "pinyin": "kàn"
    },
    "96": {
        "character": "看见",
        "letter": "to see",
        "pinyin": "kànjiàn"
    },
    "97": {
        "character": "听",
        "letter": "to listen",
        "pinyin": "tīng"
    },
    "98": {
        "character": "叫",
        "letter": "to call",
        "pinyin": "jiào"
    },
    "99": {
        "character": "买",
        "letter": "to buy",
        "pinyin": "mǎi"
    },
    "100": {
        "character": "开",
        "letter": "to drive or to open",
        "pinyin": "kāi"
    },
    "101": {
        "character": "坐",
        "letter": "to sit",
        "pinyin": "zuò"
    },
    "102": {
        "character": "读",
        "letter": "to read",
        "pinyin": "dú"
    },
    "103": {
        "character": "写",
        "letter": "to write",
        "pinyin": "xiě"
    },
    "104": {
        "character": "打电话",
        "letter": "to make a phone call",
        "pinyin": "dǎ diànhuà"
    },
    "105": {
        "character": "认识",
        "letter": "to know",
        "pinyin": "rènshi"
    },
    "106": {
        "character": "学习",
        "letter": "to learn",
        "pinyin": "xuéxí"
    },
    "107": {
        "character": "工作",
        "letter": "to work",
        "pinyin": "gōngzuò"
    },
    "108": {
        "character": "睡觉",
        "letter": "to sleep",
        "pinyin": "shuìjiào"
    },
    "109": {
        "character": "喜欢",
        "letter": "to like",
        "pinyin": "xǐhuan"
    },
    "110": {
        "character": "爱",
        "letter": "to love",
        "pinyin": "ài"
    },
    "111": {
        "character": "会",
        "letter": "can (to know how to)",
        "pinyin": "huì"
    },
    "112": {
        "character": "能",
        "letter": "can (to be able to)",
        "pinyin": "néng"
    },
    "113": {
        "character": "下雨",
        "letter": "to rain",
        "pinyin": "xià yǔ"
    },
    "114": {
        "character": "好",
        "letter": "good",
        "pinyin": "hǎo"
    },
    "115": {
        "character": "大",
        "letter": "big",
        "pinyin": "dà"
    },
    "116": {
        "character": "小",
        "letter": "small",
        "pinyin": "xiǎo"
    },
    "117": {
        "character": "多",
        "letter": "many",
        "pinyin": "duō"
    },
    "118": {
        "character": "少",
        "letter": "few",
        "pinyin": "shǎo"
    },
    "119": {
        "character": "热",
        "letter": "hot",
        "pinyin": "rè"
    },
    "120": {
        "character": "冷",
        "letter": "cold",
        "pinyin": "lěng"
    },
    "121": {
        "character": "漂亮",
        "letter": "pretty",
        "pinyin": "piàoliang"
    },
    "122": {
        "character": "高兴",
        "letter": "happy",
        "pinyin": "gāoxìng"
    },
    "123": {
        "character": "很",
        "letter": "very",
        "pinyin": "hěn"
    },
    "124": {
        "character": "太",
        "letter": "too…",
        "pinyin": "tài"
    },
    "125": {
        "character": "都",
        "letter": "both or all",
        "pinyin": "dōu"
    },
    "126": {
        "character": "不",
        "letter": "not",
        "pinyin": "bù"
    },
    "127": {
        "character": "没",
        "letter": "not",
        "pinyin": "méi"
    },
    "128": {
        "character": "的",
        "letter": "possession particle",
        "pinyin": "de"
    },
    "129": {
        "character": "了",
        "letter": "aspect particle",
        "pinyin": "le"
    },
    "130": {
        "character": "吗",
        "letter": "question particle",
        "pinyin": "ma"
    },
    "131": {
        "character": "呢",
        "letter": "question particle",
        "pinyin": "ne"
    },
    "132": {
        "character": "和",
        "letter": "and",
        "pinyin": "hé"
    },
    "133": {
        "character": "喂",
        "letter": "hello (on the phone)",
        "pinyin": "wèi"
    },
    "134": {
        "character": "谢谢",
        "letter": "thanks",
        "pinyin": "xièxie"
    },
    "135": {
        "character": "不客气",
        "letter": "you’re welcome",
        "pinyin": "bú kèqi"
    },
    "136": {
        "character": "再见",
        "letter": "goodbye",
        "pinyin": "zàijiàn"
    },
    "137": {
        "character": "请",
        "letter": "please…",
        "pinyin": "qǐng"
    },
    "138": {
        "character": "对不起",
        "letter": "sorry",
        "pinyin": "duìbuqǐ"
    },
    "139": {
        "character": "没关系",
        "letter": "it’s all right",
        "pinyin": "méi guānxi"
    },
    "140": {
        "character": "零",
        "letter": "zero",
        "pinyin": "líng"
    },
    "141": {
        "character": "一",
        "letter": "one",
        "pinyin": "yī"
    },
    "142": {
        "character": "二",
        "letter": "two",
        "pinyin": "èr"
    },
    "143": {
        "character": "三",
        "letter": "three",
        "pinyin": "sān"
    },
    "144": {
        "character": "四",
        "letter": "four",
        "pinyin": "sì"
    },
    "145": {
        "character": "五",
        "letter": "five",
        "pinyin": "wǔ"
    },
    "146": {
        "character": "六",
        "letter": "six",
        "pinyin": "liù"
    },
    "147": {
        "character": "七",
        "letter": "seven",
        "pinyin": "qī"
    },
    "148": {
        "character": "八",
        "letter": "eight",
        "pinyin": "bā"
    },
    "149": {
        "character": "九",
        "letter": "nine",
        "pinyin": "jiǔ"
    },
    "150": {
        "character": "十",
        "letter": "ten",
        "pinyin": "shí"
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