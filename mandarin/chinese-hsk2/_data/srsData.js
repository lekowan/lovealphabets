// Configuration
const localStorageKey = "mandarin" + "Hsk2Vocabulary" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the HSK2 vocabulary list everyday. \n \n After your first session, you will also revise learned characters from previous sessions";

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
        "character": "您",
        "letter": "you (singular/honorific)",
        "pinyin": "nín"
    },
    "4": {
        "character": "他",
        "letter": "he or him",
        "pinyin": "tā"
    },
    "5": {
        "character": "她",
        "letter": "she or her",
        "pinyin": "tā"
    },
    "6": {
        "character": "它",
        "letter": "it",
        "pinyin": "tā"
    },
    "7": {
        "character": "我们",
        "letter": "we or us",
        "pinyin": "wǒmen"
    },
    "8": {
        "character": "大家",
        "letter": "everybody",
        "pinyin": "dàjiā"
    },
    "9": {
        "character": "这/这儿",
        "letter": "this/here",
        "pinyin": "zhè/zhèr"
    },
    "10": {
        "character": "那/那儿",
        "letter": "that/there",
        "pinyin": "nà/nàr"
    },
    "11": {
        "character": "哪/哪儿",
        "letter": "which/where",
        "pinyin": "nǎ/nǎr"
    },
    "12": {
        "character": "谁",
        "letter": "who",
        "pinyin": "shéi"
    },
    "13": {
        "character": "什么",
        "letter": "what",
        "pinyin": "shénme"
    },
    "14": {
        "character": "多少",
        "letter": "how many or how much",
        "pinyin": "duōshao"
    },
    "15": {
        "character": "几",
        "letter": "how many or how much",
        "pinyin": "jǐ"
    },
    "16": {
        "character": "怎么",
        "letter": "how",
        "pinyin": "zěnme"
    },
    "17": {
        "character": "怎么样",
        "letter": "how about",
        "pinyin": "zěnmeyàng"
    },
    "18": {
        "character": "为什么",
        "letter": "why",
        "pinyin": "wèi shénme"
    },
    "19": {
        "character": "现在",
        "letter": "now",
        "pinyin": "xiànzài"
    },
    "20": {
        "character": "今天",
        "letter": "today",
        "pinyin": "jīntiān"
    },
    "21": {
        "character": "明天",
        "letter": "tomorrow",
        "pinyin": "míngtiān"
    },
    "22": {
        "character": "昨天",
        "letter": "yesterday",
        "pinyin": "zuótiān"
    },
    "23": {
        "character": "早上",
        "letter": "early morning",
        "pinyin": "zǎoshàng"
    },
    "24": {
        "character": "上午",
        "letter": "morning",
        "pinyin": "shàngwǔ"
    },
    "25": {
        "character": "中午",
        "letter": "noon",
        "pinyin": "zhōngwǔ"
    },
    "26": {
        "character": "下午",
        "letter": "afternoon",
        "pinyin": "xiàwǔ"
    },
    "27": {
        "character": "晚上",
        "letter": "evening",
        "pinyin": "wǎnshàng"
    },
    "28": {
        "character": "点",
        "letter": "o’clock",
        "pinyin": "diǎn"
    },
    "29": {
        "character": "小时",
        "letter": "hour",
        "pinyin": "xiǎoshí"
    },
    "30": {
        "character": "分钟",
        "letter": "minute",
        "pinyin": "fēnzhōng"
    },
    "31": {
        "character": "年",
        "letter": "year",
        "pinyin": "nián"
    },
    "32": {
        "character": "月",
        "letter": "month",
        "pinyin": "yuè"
    },
    "33": {
        "character": "日",
        "letter": "day",
        "pinyin": "rì"
    },
    "34": {
        "character": "号",
        "letter": "date or number",
        "pinyin": "hào"
    },
    "35": {
        "character": "星期",
        "letter": "week",
        "pinyin": "xīngqī"
    },
    "36": {
        "character": "时候",
        "letter": "a certain point in time",
        "pinyin": "shíhou"
    },
    "37": {
        "character": "时间",
        "letter": "a period of time",
        "pinyin": "shíjiān"
    },
    "38": {
        "character": "去年",
        "letter": "last year",
        "pinyin": "qùnián"
    },
    "39": {
        "character": "人",
        "letter": "person or people",
        "pinyin": "rén"
    },
    "40": {
        "character": "男人",
        "letter": "man",
        "pinyin": "nánrén"
    },
    "41": {
        "character": "女人",
        "letter": "woman",
        "pinyin": "nǚrén"
    },
    "42": {
        "character": "名字",
        "letter": "name",
        "pinyin": "míngzì"
    },
    "43": {
        "character": "妈妈",
        "letter": "mom",
        "pinyin": "māma"
    },
    "44": {
        "character": "爸爸",
        "letter": "dad",
        "pinyin": "bàba"
    },
    "45": {
        "character": "丈夫",
        "letter": "husband",
        "pinyin": "zhàngfu"
    },
    "46": {
        "character": "妻子",
        "letter": "wife",
        "pinyin": "qīzi"
    },
    "47": {
        "character": "孩子",
        "letter": "child",
        "pinyin": "háizi"
    },
    "48": {
        "character": "儿子",
        "letter": "son",
        "pinyin": "érzi"
    },
    "49": {
        "character": "女儿",
        "letter": "daughter",
        "pinyin": "nǚ’ér"
    },
    "50": {
        "character": "哥哥",
        "letter": "elder brother",
        "pinyin": "gēge"
    },
    "51": {
        "character": "姐姐",
        "letter": "elder sister",
        "pinyin": "jiějie"
    },
    "52": {
        "character": "弟弟",
        "letter": "younger brother",
        "pinyin": "dìdi"
    },
    "53": {
        "character": "妹妹",
        "letter": "younger sister",
        "pinyin": "mèimei"
    },
    "54": {
        "character": "朋友",
        "letter": "friend",
        "pinyin": "péngyǒu"
    },
    "55": {
        "character": "先生",
        "letter": "Mr or sir",
        "pinyin": "xiānsheng"
    },
    "56": {
        "character": "小姐",
        "letter": "Miss",
        "pinyin": "xiǎojiě"
    },
    "57": {
        "character": "老师",
        "letter": "teacher",
        "pinyin": "lǎoshī"
    },
    "58": {
        "character": "学生",
        "letter": "student",
        "pinyin": "xuésheng"
    },
    "59": {
        "character": "同学",
        "letter": "schoolmate",
        "pinyin": "tóngxué"
    },
    "60": {
        "character": "医生",
        "letter": "doctor",
        "pinyin": "yīshēng"
    },
    "61": {
        "character": "服务员",
        "letter": "waiter or waitress",
        "pinyin": "fúwùyuán"
    },
    "62": {
        "character": "身体",
        "letter": "body",
        "pinyin": "shēntǐ"
    },
    "63": {
        "character": "眼睛",
        "letter": "eye",
        "pinyin": "yǎnjīng"
    },
    "64": {
        "character": "生日",
        "letter": "birthday",
        "pinyin": "shēngrì"
    },
    "65": {
        "character": "东西",
        "letter": "thing",
        "pinyin": "dōngxi"
    },
    "66": {
        "character": "钱",
        "letter": "money",
        "pinyin": "qián"
    },
    "67": {
        "character": "水",
        "letter": "water",
        "pinyin": "shuǐ"
    },
    "68": {
        "character": "茶",
        "letter": "tea",
        "pinyin": "chá"
    },
    "69": {
        "character": "咖啡",
        "letter": "coffee",
        "pinyin": "kāfēi"
    },
    "70": {
        "character": "牛奶",
        "letter": "milk",
        "pinyin": "niúnǎi"
    },
    "71": {
        "character": "菜",
        "letter": "dish",
        "pinyin": "cài"
    },
    "72": {
        "character": "米饭",
        "letter": "(cooked) rice",
        "pinyin": "mǐfàn"
    },
    "73": {
        "character": "鸡蛋",
        "letter": "egg",
        "pinyin": "jīdàn"
    },
    "74": {
        "character": "鱼",
        "letter": "fish",
        "pinyin": "yú"
    },
    "75": {
        "character": "羊肉",
        "letter": "lamb or mutton",
        "pinyin": "yángròu"
    },
    "76": {
        "character": "衣服",
        "letter": "clothes",
        "pinyin": "yīfu"
    },
    "77": {
        "character": "书",
        "letter": "book",
        "pinyin": "shū"
    },
    "78": {
        "character": "报纸",
        "letter": "newspaper",
        "pinyin": "bàozhǐ"
    },
    "79": {
        "character": "票",
        "letter": "ticket",
        "pinyin": "piào"
    },
    "80": {
        "character": "桌子",
        "letter": "table or desk",
        "pinyin": "zhuōzi"
    },
    "81": {
        "character": "椅子",
        "letter": "chair",
        "pinyin": "yǐzi"
    },
    "82": {
        "character": "水果",
        "letter": "fruit",
        "pinyin": "shuǐguǒ"
    },
    "83": {
        "character": "苹果",
        "letter": "apple",
        "pinyin": "píngguǒ"
    },
    "84": {
        "character": "西瓜",
        "letter": "watermelon",
        "pinyin": "xīguā"
    },
    "85": {
        "character": "药",
        "letter": "medicine",
        "pinyin": "yào"
    },
    "86": {
        "character": "杯子",
        "letter": "cup or glass",
        "pinyin": "bēizi"
    },
    "87": {
        "character": "手表",
        "letter": "watch",
        "pinyin": "shǒubiǎo"
    },
    "88": {
        "character": "手机",
        "letter": "mobile phone",
        "pinyin": "shǒujī"
    },
    "89": {
        "character": "电视",
        "letter": "TV",
        "pinyin": "diànshì"
    },
    "90": {
        "character": "电脑",
        "letter": "computer",
        "pinyin": "diànnǎo"
    },
    "91": {
        "character": "电影",
        "letter": "movie",
        "pinyin": "diànyǐng"
    },
    "92": {
        "character": "飞机",
        "letter": "plane",
        "pinyin": "fēijī"
    },
    "93": {
        "character": "出租车",
        "letter": "taxi",
        "pinyin": "chūzūchē"
    },
    "94": {
        "character": "公共汽车",
        "letter": "bus",
        "pinyin": "gōnggòng qìchē"
    },
    "95": {
        "character": "自行车",
        "letter": "bike",
        "pinyin": "zìxíngchē"
    },
    "96": {
        "character": "船",
        "letter": "boat",
        "pinyin": "chuán"
    },
    "97": {
        "character": "门",
        "letter": "door",
        "pinyin": "mén"
    },
    "98": {
        "character": "颜色",
        "letter": "color",
        "pinyin": "yánsè"
    },
    "99": {
        "character": "猫",
        "letter": "cat",
        "pinyin": "māo"
    },
    "100": {
        "character": "狗",
        "letter": "dog",
        "pinyin": "gǒu"
    },
    "101": {
        "character": "天气",
        "letter": "weather",
        "pinyin": "tiānqì"
    },
    "102": {
        "character": "雪",
        "letter": "snow",
        "pinyin": "xuě"
    },
    "103": {
        "character": "字",
        "letter": "character",
        "pinyin": "zì"
    },
    "104": {
        "character": "汉语",
        "letter": "Chinese (language)",
        "pinyin": "Hànyǔ"
    },
    "105": {
        "character": "课",
        "letter": "lesson",
        "pinyin": "kè"
    },
    "106": {
        "character": "考试",
        "letter": "exam",
        "pinyin": "kǎoshì"
    },
    "107": {
        "character": "问题",
        "letter": "question",
        "pinyin": "wèntí"
    },
    "108": {
        "character": "题",
        "letter": "question (exam, exercise)",
        "pinyin": "tí"
    },
    "109": {
        "character": "意思",
        "letter": "meaning",
        "pinyin": "yìsi"
    },
    "110": {
        "character": "事情",
        "letter": "matter",
        "pinyin": "shìqing"
    },
    "111": {
        "character": "中国",
        "letter": "China",
        "pinyin": "Zhōngguó"
    },
    "112": {
        "character": "北京",
        "letter": "Beijing",
        "pinyin": "Běijīng"
    },
    "113": {
        "character": "家",
        "letter": "home or family",
        "pinyin": "jiā"
    },
    "114": {
        "character": "房间",
        "letter": "room",
        "pinyin": "fángjiān"
    },
    "115": {
        "character": "学校",
        "letter": "school",
        "pinyin": "xuéxiào"
    },
    "116": {
        "character": "教室",
        "letter": "classroom",
        "pinyin": "jiàoshì"
    },
    "117": {
        "character": "公司",
        "letter": "company",
        "pinyin": "gōngsī"
    },
    "118": {
        "character": "饭馆",
        "letter": "restaurant",
        "pinyin": "fànguǎn"
    },
    "119": {
        "character": "商店",
        "letter": "shop",
        "pinyin": "shāngdiàn"
    },
    "120": {
        "character": "医院",
        "letter": "hospital",
        "pinyin": "yīyuàn"
    },
    "121": {
        "character": "机场",
        "letter": "airport",
        "pinyin": "jīchǎng"
    },
    "122": {
        "character": "火车站",
        "letter": "train station",
        "pinyin": "huǒchēzhàn"
    },
    "123": {
        "character": "路",
        "letter": "road",
        "pinyin": "lù"
    },
    "124": {
        "character": "上",
        "letter": "on, above or last",
        "pinyin": "shàng"
    },
    "125": {
        "character": "下",
        "letter": "under, below or next",
        "pinyin": "xià"
    },
    "126": {
        "character": "左边",
        "letter": "left",
        "pinyin": "zuǒbiān"
    },
    "127": {
        "character": "右边",
        "letter": "right",
        "pinyin": "yòubiān"
    },
    "128": {
        "character": "旁边",
        "letter": "side",
        "pinyin": "pángbiān"
    },
    "129": {
        "character": "前面",
        "letter": "front",
        "pinyin": "qiánmiàn"
    },
    "130": {
        "character": "后面",
        "letter": "back",
        "pinyin": "hòumiàn"
    },
    "131": {
        "character": "里",
        "letter": "inside",
        "pinyin": "lǐ"
    },
    "132": {
        "character": "外",
        "letter": "outside",
        "pinyin": "wài"
    },
    "133": {
        "character": "个",
        "letter": "generic measure word",
        "pinyin": "gè"
    },
    "134": {
        "character": "元",
        "letter": "basic monetary unit of China",
        "pinyin": "yuán"
    },
    "135": {
        "character": "块",
        "letter": "basic monetary unit of China",
        "pinyin": "kuài"
    },
    "136": {
        "character": "本",
        "letter": "for books",
        "pinyin": "běn"
    },
    "137": {
        "character": "岁",
        "letter": "year (of age)",
        "pinyin": "suì"
    },
    "138": {
        "character": "些",
        "letter": "some",
        "pinyin": "xiē"
    },
    "139": {
        "character": "次",
        "letter": "time (frequency of an act)",
        "pinyin": "cì"
    },
    "140": {
        "character": "公斤",
        "letter": "kilo",
        "pinyin": "gōngjīn"
    },
    "141": {
        "character": "件",
        "letter": "for affairs, clothes, furniture",
        "pinyin": "jiàn"
    },
    "142": {
        "character": "张",
        "letter": "for flat objects",
        "pinyin": "zhāng"
    },
    "143": {
        "character": "做",
        "letter": "to do",
        "pinyin": "zuò"
    },
    "144": {
        "character": "是",
        "letter": "to be",
        "pinyin": "shì"
    },
    "145": {
        "character": "姓",
        "letter": "to be surnamed",
        "pinyin": "xìng"
    },
    "146": {
        "character": "在",
        "letter": "to be in",
        "pinyin": "zài"
    },
    "147": {
        "character": "有",
        "letter": "to have",
        "pinyin": "yǒu"
    },
    "148": {
        "character": "住",
        "letter": "to live or to stay",
        "pinyin": "zhù"
    },
    "149": {
        "character": "来",
        "letter": "to come",
        "pinyin": "lái"
    },
    "150": {
        "character": "去",
        "letter": "to go",
        "pinyin": "qù"
    },
    "151": {
        "character": "回",
        "letter": "to return",
        "pinyin": "huí"
    },
    "152": {
        "character": "进",
        "letter": "to enter",
        "pinyin": "jìn"
    },
    "153": {
        "character": "出",
        "letter": "to get out",
        "pinyin": "chū"
    },
    "154": {
        "character": "到",
        "letter": "to arrive",
        "pinyin": "dào"
    },
    "155": {
        "character": "想",
        "letter": "to think",
        "pinyin": "xiǎng"
    },
    "156": {
        "character": "要",
        "letter": "to want",
        "pinyin": "yào"
    },
    "157": {
        "character": "吃",
        "letter": "to eat",
        "pinyin": "chī"
    },
    "158": {
        "character": "喝",
        "letter": "to drink",
        "pinyin": "hē"
    },
    "159": {
        "character": "说话",
        "letter": "to speak",
        "pinyin": "shuōhuà"
    },
    "160": {
        "character": "告诉",
        "letter": "to tell",
        "pinyin": "gàosù"
    },
    "161": {
        "character": "问",
        "letter": "to ask",
        "pinyin": "wèn"
    },
    "162": {
        "character": "回答",
        "letter": "to answer",
        "pinyin": "huídá"
    },
    "163": {
        "character": "看",
        "letter": "to look or to watch",
        "pinyin": "kàn"
    },
    "164": {
        "character": "看见",
        "letter": "to see",
        "pinyin": "kànjiàn"
    },
    "165": {
        "character": "听",
        "letter": "to listen",
        "pinyin": "tīng"
    },
    "166": {
        "character": "笑",
        "letter": "to smile or to laugh",
        "pinyin": "xiào"
    },
    "167": {
        "character": "给",
        "letter": "to give",
        "pinyin": "gěi"
    },
    "168": {
        "character": "送",
        "letter": "to give as a gift or to deliver",
        "pinyin": "sòng"
    },
    "169": {
        "character": "叫",
        "letter": "to call",
        "pinyin": "jiào"
    },
    "170": {
        "character": "买",
        "letter": "to buy",
        "pinyin": "mǎi"
    },
    "171": {
        "character": "卖",
        "letter": "to sell",
        "pinyin": "mài"
    },
    "172": {
        "character": "穿",
        "letter": "to wear",
        "pinyin": "chuān"
    },
    "173": {
        "character": "开",
        "letter": "to drive or to open",
        "pinyin": "kāi"
    },
    "174": {
        "character": "坐",
        "letter": "to sit",
        "pinyin": "zuò"
    },
    "175": {
        "character": "读",
        "letter": "to read",
        "pinyin": "dú"
    },
    "176": {
        "character": "写",
        "letter": "to write",
        "pinyin": "xiě"
    },
    "177": {
        "character": "等",
        "letter": "to wait",
        "pinyin": "děng"
    },
    "178": {
        "character": "打电话",
        "letter": "to make a phone call",
        "pinyin": "dǎ diànhuà"
    },
    "179": {
        "character": "介绍",
        "letter": "to introduce",
        "pinyin": "jièshào"
    },
    "180": {
        "character": "认识",
        "letter": "to know",
        "pinyin": "rènshi"
    },
    "181": {
        "character": "知道",
        "letter": "to know",
        "pinyin": "zhīdao"
    },
    "182": {
        "character": "觉得",
        "letter": "to feel or to think",
        "pinyin": "juédé"
    },
    "183": {
        "character": "懂",
        "letter": "to understand",
        "pinyin": "dǒng"
    },
    "184": {
        "character": "找",
        "letter": "to find",
        "pinyin": "zhǎo"
    },
    "185": {
        "character": "让",
        "letter": "to let",
        "pinyin": "ràng"
    },
    "186": {
        "character": "希望",
        "letter": "to hope",
        "pinyin": "xīwàng"
    },
    "187": {
        "character": "帮助",
        "letter": "to help",
        "pinyin": "bāngzhù"
    },
    "188": {
        "character": "玩",
        "letter": "to play",
        "pinyin": "wán"
    },
    "189": {
        "character": "学习",
        "letter": "to learn",
        "pinyin": "xuéxí"
    },
    "190": {
        "character": "工作",
        "letter": "to work",
        "pinyin": "gōngzuò"
    },
    "191": {
        "character": "上班",
        "letter": "to go to work",
        "pinyin": "shàng bān"
    },
    "192": {
        "character": "睡觉",
        "letter": "to sleep",
        "pinyin": "shuìjiào"
    },
    "193": {
        "character": "起床",
        "letter": "to get up",
        "pinyin": "qǐ chuáng"
    },
    "194": {
        "character": "喜欢",
        "letter": "to like",
        "pinyin": "xǐhuan"
    },
    "195": {
        "character": "爱",
        "letter": "to love",
        "pinyin": "ài"
    },
    "196": {
        "character": "唱歌",
        "letter": "to sing",
        "pinyin": "chàng gē"
    },
    "197": {
        "character": "跳舞",
        "letter": "to dance",
        "pinyin": "tiào wǔ"
    },
    "198": {
        "character": "旅游",
        "letter": "to travel",
        "pinyin": "lǚyóu"
    },
    "199": {
        "character": "运动",
        "letter": "to do sports",
        "pinyin": "yùndòng"
    },
    "200": {
        "character": "走",
        "letter": "to walk",
        "pinyin": "zǒu"
    },
    "201": {
        "character": "跑步",
        "letter": "to run",
        "pinyin": "pǎo bù"
    },
    "202": {
        "character": "游泳",
        "letter": "to swim",
        "pinyin": "yóu yǒng"
    },
    "203": {
        "character": "踢足球",
        "letter": "to play soccer",
        "pinyin": "tī zúqiú"
    },
    "204": {
        "character": "打篮球",
        "letter": "to play basketball",
        "pinyin": "dǎ lánqiú"
    },
    "205": {
        "character": "休息",
        "letter": "to rest",
        "pinyin": "xiūxi"
    },
    "206": {
        "character": "生病",
        "letter": "to get sick",
        "pinyin": "shēng bìng"
    },
    "207": {
        "character": "洗",
        "letter": "to wash",
        "pinyin": "xǐ"
    },
    "208": {
        "character": "开始",
        "letter": "to begin",
        "pinyin": "kāishǐ"
    },
    "209": {
        "character": "完",
        "letter": "to finish",
        "pinyin": "wán"
    },
    "210": {
        "character": "准备.",
        "letter": "to prepare",
        "pinyin": "zhǔnbèi"
    },
    "211": {
        "character": "欢迎",
        "letter": "to welcome",
        "pinyin": "huānyíng"
    },
    "212": {
        "character": "会",
        "letter": "can (to know how to)",
        "pinyin": "huì"
    },
    "213": {
        "character": "能",
        "letter": "can (to be able to)",
        "pinyin": "néng"
    },
    "214": {
        "character": "可以",
        "letter": "can (to be permitted to)",
        "pinyin": "kěyǐ"
    },
    "215": {
        "character": "下雨",
        "letter": "to rain",
        "pinyin": "xià yǔ"
    },
    "216": {
        "character": "好",
        "letter": "good",
        "pinyin": "hǎo"
    },
    "217": {
        "character": "大",
        "letter": "big",
        "pinyin": "dà"
    },
    "218": {
        "character": "小",
        "letter": "small",
        "pinyin": "xiǎo"
    },
    "219": {
        "character": "多",
        "letter": "many",
        "pinyin": "duō"
    },
    "220": {
        "character": "少",
        "letter": "few",
        "pinyin": "shǎo"
    },
    "221": {
        "character": "热",
        "letter": "hot",
        "pinyin": "rè"
    },
    "222": {
        "character": "冷",
        "letter": "cold",
        "pinyin": "lěng"
    },
    "223": {
        "character": "快",
        "letter": "fast",
        "pinyin": "kuài"
    },
    "224": {
        "character": "慢",
        "letter": "slow",
        "pinyin": "màn"
    },
    "225": {
        "character": "远",
        "letter": "far",
        "pinyin": "yuǎn"
    },
    "226": {
        "character": "近",
        "letter": "near",
        "pinyin": "jìn"
    },
    "227": {
        "character": "对",
        "letter": "right",
        "pinyin": "duì"
    },
    "228": {
        "character": "错",
        "letter": "wrong",
        "pinyin": "cuò"
    },
    "229": {
        "character": "长",
        "letter": "long",
        "pinyin": "cháng"
    },
    "230": {
        "character": "高",
        "letter": "tall or high",
        "pinyin": "gāo"
    },
    "231": {
        "character": "新",
        "letter": "new",
        "pinyin": "xīn"
    },
    "232": {
        "character": "贵",
        "letter": "expensive",
        "pinyin": "guì"
    },
    "233": {
        "character": "便宜",
        "letter": "cheap",
        "pinyin": "piányi"
    },
    "234": {
        "character": "黑",
        "letter": "black",
        "pinyin": "hēi"
    },
    "235": {
        "character": "白",
        "letter": "white",
        "pinyin": "bái"
    },
    "236": {
        "character": "红",
        "letter": "red",
        "pinyin": "hóng"
    },
    "237": {
        "character": "晴",
        "letter": "sunny",
        "pinyin": "qíng"
    },
    "238": {
        "character": "阴",
        "letter": "cloudy",
        "pinyin": "yīn"
    },
    "239": {
        "character": "好吃",
        "letter": "tasty",
        "pinyin": "hǎochī"
    },
    "240": {
        "character": "漂亮",
        "letter": "pretty",
        "pinyin": "piàoliang"
    },
    "241": {
        "character": "高兴",
        "letter": "happy",
        "pinyin": "gāoxìng"
    },
    "242": {
        "character": "快乐",
        "letter": "happy",
        "pinyin": "kuàilè"
    },
    "243": {
        "character": "忙",
        "letter": "busy",
        "pinyin": "máng"
    },
    "244": {
        "character": "累",
        "letter": "tired",
        "pinyin": "lèi"
    },
    "245": {
        "character": "很",
        "letter": "very",
        "pinyin": "hěn"
    },
    "246": {
        "character": "非常",
        "letter": "extremely",
        "pinyin": "fēicháng"
    },
    "247": {
        "character": "太",
        "letter": "too…",
        "pinyin": "tài"
    },
    "248": {
        "character": "都",
        "letter": "both or all",
        "pinyin": "dōu"
    },
    "249": {
        "character": "不",
        "letter": "not",
        "pinyin": "bù"
    },
    "250": {
        "character": "没",
        "letter": "not",
        "pinyin": "méi"
    },
    "251": {
        "character": "每",
        "letter": "every",
        "pinyin": "měi"
    },
    "252": {
        "character": "最",
        "letter": "most",
        "pinyin": "zuì"
    },
    "253": {
        "character": "真",
        "letter": "really",
        "pinyin": "zhēn"
    },
    "254": {
        "character": "也",
        "letter": "also",
        "pinyin": "yě"
    },
    "255": {
        "character": "还",
        "letter": "still",
        "pinyin": "hái"
    },
    "256": {
        "character": "再",
        "letter": "again",
        "pinyin": "zài"
    },
    "257": {
        "character": "就",
        "letter": "at once",
        "pinyin": "jiǜ"
    },
    "258": {
        "character": "别",
        "letter": "don’t…",
        "pinyin": "bié"
    },
    "259": {
        "character": "已经",
        "letter": "already",
        "pinyin": "yǐjīng"
    },
    "260": {
        "character": "一起",
        "letter": "together",
        "pinyin": "yìqǐ"
    },
    "261": {
        "character": "可能",
        "letter": "maybe",
        "pinyin": "kěnéng"
    },
    "262": {
        "character": "正在",
        "letter": "indicating action in progress",
        "pinyin": "zhèngzài"
    },
    "263": {
        "character": "从",
        "letter": "from",
        "pinyin": "cóng"
    },
    "264": {
        "character": "向",
        "letter": "towards",
        "pinyin": "xiàng"
    },
    "265": {
        "character": "离",
        "letter": "away from",
        "pinyin": "lí"
    },
    "266": {
        "character": "比",
        "letter": "than",
        "pinyin": "bǐ"
    },
    "267": {
        "character": "的",
        "letter": "possession particle",
        "pinyin": "de"
    },
    "268": {
        "character": "得",
        "letter": "structure particle",
        "pinyin": "de"
    },
    "269": {
        "character": "了",
        "letter": "aspect particle",
        "pinyin": "le"
    },
    "270": {
        "character": "着",
        "letter": "aspect particle",
        "pinyin": "zhe"
    },
    "271": {
        "character": "过",
        "letter": "aspect particle",
        "pinyin": "guò"
    },
    "272": {
        "character": "吗",
        "letter": "question particle",
        "pinyin": "ma"
    },
    "273": {
        "character": "呢",
        "letter": "question particle",
        "pinyin": "ne"
    },
    "274": {
        "character": "吧",
        "letter": "question particle",
        "pinyin": "ba"
    },
    "275": {
        "character": "和",
        "letter": "and",
        "pinyin": "hé"
    },
    "276": {
        "character": "但是",
        "letter": "but",
        "pinyin": "dànshì"
    },
    "277": {
        "character": "因为",
        "letter": "because",
        "pinyin": "yīnwèi"
    },
    "278": {
        "character": "所以",
        "letter": "so",
        "pinyin": "suǒyǐ"
    },
    "279": {
        "character": "喂",
        "letter": "hello (on the phone)",
        "pinyin": "wèi"
    },
    "280": {
        "character": "谢谢",
        "letter": "thanks",
        "pinyin": "xièxie"
    },
    "281": {
        "character": "不客气",
        "letter": "you’re welcome",
        "pinyin": "bú kèqi"
    },
    "282": {
        "character": "再见",
        "letter": "goodbye",
        "pinyin": "zàijiàn"
    },
    "283": {
        "character": "请",
        "letter": "please…",
        "pinyin": "qǐng"
    },
    "284": {
        "character": "对不起",
        "letter": "sorry",
        "pinyin": "duìbuqǐ"
    },
    "285": {
        "character": "没关系",
        "letter": "it’s all right",
        "pinyin": "méi guānxi"
    },
    "286": {
        "character": "零",
        "letter": "zero",
        "pinyin": "líng"
    },
    "287": {
        "character": "一",
        "letter": "one",
        "pinyin": "yī"
    },
    "288": {
        "character": "二",
        "letter": "two",
        "pinyin": "èr"
    },
    "289": {
        "character": "三",
        "letter": "three",
        "pinyin": "sān"
    },
    "290": {
        "character": "四",
        "letter": "four",
        "pinyin": "sì"
    },
    "291": {
        "character": "五",
        "letter": "five",
        "pinyin": "wǔ"
    },
    "292": {
        "character": "六",
        "letter": "six",
        "pinyin": "liù"
    },
    "293": {
        "character": "七",
        "letter": "seven",
        "pinyin": "qī"
    },
    "294": {
        "character": "八",
        "letter": "eight",
        "pinyin": "bā"
    },
    "295": {
        "character": "九",
        "letter": "nine",
        "pinyin": "jiǔ"
    },
    "296": {
        "character": "十",
        "letter": "ten",
        "pinyin": "shí"
    },
    "297": {
        "character": "两",
        "letter": "two",
        "pinyin": "liǎng"
    },
    "298": {
        "character": "百",
        "letter": "hundred",
        "pinyin": "bǎi"
    },
    "299": {
        "character": "千",
        "letter": "thousand",
        "pinyin": "qiān"
    },
    "300": {
        "character": "第一",
        "letter": "first",
        "pinyin": "dì-yī"
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