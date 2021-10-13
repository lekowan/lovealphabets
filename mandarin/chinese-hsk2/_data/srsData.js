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
  "我": {
    "letter": "I or me",
    "pinyin": "wǒ"
  },
  "你": {
    "letter": "you (singular)",
    "pinyin": "nǐ"
  },
  "您": {
    "letter": "you (singular/honorific)",
    "pinyin": "nín"
  },
  "他": {
    "letter": "he or him",
    "pinyin": "tā"
  },
  "她": {
    "letter": "she or her",
    "pinyin": "tā"
  },
  "它": {
    "letter": "it",
    "pinyin": "tā"
  },
  "我们": {
    "letter": "we or me",
    "pinyin": "wǒmen"
  },
  "大家": {
    "letter": "everybody",
    "pinyin": "dàjiā"
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
  "为什么": {
    "letter": "why",
    "pinyin": "wèi shénme"
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
  "早上": {
    "letter": "early morning",
    "pinyin": "zǎoshàng"
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
  "晚上": {
    "letter": "evening",
    "pinyin": "wǎnshàng"
  },
  "点": {
    "letter": "o’clock",
    "pinyin": "diǎn"
  },
  "小时": {
    "letter": "hour",
    "pinyin": "xiǎoshí"
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
  "号": {
    "letter": "date or number",
    "pinyin": "hào"
  },
  "星期": {
    "letter": "week",
    "pinyin": "xīngqī"
  },
  "时候": {
    "letter": "a certain point in time",
    "pinyin": "shíhou"
  },
  "时间": {
    "letter": "a period of time",
    "pinyin": "shíjiān"
  },
  "去年": {
    "letter": "last year",
    "pinyin": "qùnián"
  },
  "人": {
    "letter": "person or people",
    "pinyin": "rén"
  },
  "男人": {
    "letter": "man",
    "pinyin": "nánrén"
  },
  "女人": {
    "letter": "woman",
    "pinyin": "nǚrén"
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
  "丈夫": {
    "letter": "husband",
    "pinyin": "zhàngfu"
  },
  "妻子": {
    "letter": "wife",
    "pinyin": "qīzi"
  },
  "孩子": {
    "letter": "child",
    "pinyin": "háizi"
  },
  "儿子": {
    "letter": "son",
    "pinyin": "érzi"
  },
  "女儿": {
    "letter": "daughter",
    "pinyin": "nǚ’ér"
  },
  "哥哥": {
    "letter": "elder brother",
    "pinyin": "gēge"
  },
  "姐姐": {
    "letter": "elder sister",
    "pinyin": "jiějie"
  },
  "弟弟": {
    "letter": "younger brother",
    "pinyin": "dìdi"
  },
  "妹妹": {
    "letter": "younger sister",
    "pinyin": "mèimei"
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
  "服务员": {
    "letter": "waiter or waitress",
    "pinyin": "fúwùyuán"
  },
  "身体": {
    "letter": "body",
    "pinyin": "shēntǐ"
  },
  "眼睛": {
    "letter": "eye",
    "pinyin": "yǎnjīng"
  },
  "生日": {
    "letter": "birthday",
    "pinyin": "shēngrì"
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
  "咖啡": {
    "letter": "coffee",
    "pinyin": "kāfēi"
  },
  "牛奶": {
    "letter": "milk",
    "pinyin": "niúnǎi"
  },
  "菜": {
    "letter": "dish",
    "pinyin": "cài"
  },
  "米饭": {
    "letter": "(cooked) rice",
    "pinyin": "mǐfàn"
  },
  "鸡蛋": {
    "letter": "egg",
    "pinyin": "jīdàn"
  },
  "鱼": {
    "letter": "fish",
    "pinyin": "yú"
  },
  "羊肉": {
    "letter": "lamb or mutton",
    "pinyin": "yángròu"
  },
  "衣服": {
    "letter": "clothes",
    "pinyin": "yīfu"
  },
  "书": {
    "letter": "book",
    "pinyin": "shū"
  },
  "报纸": {
    "letter": "newspaper",
    "pinyin": "bàozhǐ"
  },
  "票": {
    "letter": "ticket",
    "pinyin": "piào"
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
  "西瓜": {
    "letter": "watermelon",
    "pinyin": "xīguā"
  },
  "药": {
    "letter": "medicine",
    "pinyin": "yào"
  },
  "杯子": {
    "letter": "cup or glass",
    "pinyin": "bēizi"
  },
  "手表": {
    "letter": "watch",
    "pinyin": "shǒubiǎo"
  },
  "手机": {
    "letter": "mobile phone",
    "pinyin": "shǒujī"
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
  "公共汽车": {
    "letter": "bus",
    "pinyin": "gōnggòng qìchē"
  },
  "自行车": {
    "letter": "bike",
    "pinyin": "zìxíngchē"
  },
  "船": {
    "letter": "boat",
    "pinyin": "chuán"
  },
  "门": {
    "letter": "door",
    "pinyin": "mén"
  },
  "颜色": {
    "letter": "color",
    "pinyin": "yánsè"
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
  "雪": {
    "letter": "snow",
    "pinyin": "xuě"
  },
  "字": {
    "letter": "character",
    "pinyin": "zì"
  },
  "汉语": {
    "letter": "Chinese (language)",
    "pinyin": "Hànyǔ"
  },
  "课": {
    "letter": "lesson",
    "pinyin": "kè"
  },
  "考试": {
    "letter": "exam",
    "pinyin": "kǎoshì"
  },
  "问题": {
    "letter": "question",
    "pinyin": "wèntí"
  },
  "题": {
    "letter": "question (exam, exercise)",
    "pinyin": "tí"
  },
  "意思": {
    "letter": "meaning",
    "pinyin": "yìsi"
  },
  "事情": {
    "letter": "matter",
    "pinyin": "shìqing"
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
  "房间": {
    "letter": "room",
    "pinyin": "fángjiān"
  },
  "学校": {
    "letter": "school",
    "pinyin": "xuéxiào"
  },
  "教室": {
    "letter": "classroom",
    "pinyin": "jiàoshì"
  },
  "公司": {
    "letter": "company",
    "pinyin": "gōngsī"
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
  "机场": {
    "letter": "airport",
    "pinyin": "jīchǎng"
  },
  "火车站": {
    "letter": "train station",
    "pinyin": "huǒchēzhàn"
  },
  "路": {
    "letter": "road",
    "pinyin": "lù"
  },
  "上": {
    "letter": "on, above or last",
    "pinyin": "shàng"
  },
  "下": {
    "letter": "under, below or next",
    "pinyin": "xià"
  },
  "左边": {
    "letter": "left",
    "pinyin": "zuǒbiān"
  },
  "右边": {
    "letter": "right",
    "pinyin": "yòubiān"
  },
  "旁边": {
    "letter": "side",
    "pinyin": "pángbiān"
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
  "外": {
    "letter": "outside",
    "pinyin": "wài"
  },
  "个": {
    "letter": "generic measure word",
    "pinyin": "gè"
  },
  "元": {
    "letter": "basic monetary unit of China",
    "pinyin": "yuán"
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
  "次": {
    "letter": "time (frequency of an act)",
    "pinyin": "cì"
  },
  "公斤": {
    "letter": "kilo",
    "pinyin": "gōngjīn"
  },
  "件": {
    "letter": "for affairs, clothes, furniture",
    "pinyin": "jiàn"
  },
  "张": {
    "letter": "for flat objects",
    "pinyin": "zhāng"
  },
  "做": {
    "letter": "to do",
    "pinyin": "zuò"
  },
  "是": {
    "letter": "to be",
    "pinyin": "shì"
  },
  "姓": {
    "letter": "to be surnamed",
    "pinyin": "xìng"
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
  "进": {
    "letter": "to enter",
    "pinyin": "jìn"
  },
  "出": {
    "letter": "to get out",
    "pinyin": "chū"
  },
  "到": {
    "letter": "to arrive",
    "pinyin": "dào"
  },
  "想": {
    "letter": "to think",
    "pinyin": "xiǎng"
  },
  "要": {
    "letter": "to want",
    "pinyin": "yào"
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
  "告诉": {
    "letter": "to tell",
    "pinyin": "gàosù"
  },
  "问": {
    "letter": "to ask",
    "pinyin": "wèn"
  },
  "回答": {
    "letter": "to answer",
    "pinyin": "huídá"
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
  "笑": {
    "letter": "to smile or to laugh",
    "pinyin": "xiào"
  },
  "给": {
    "letter": "to give",
    "pinyin": "gěi"
  },
  "送": {
    "letter": "to give as a gift or to deliver",
    "pinyin": "sòng"
  },
  "叫": {
    "letter": "to call",
    "pinyin": "jiào"
  },
  "买": {
    "letter": "to buy",
    "pinyin": "mǎi"
  },
  "卖": {
    "letter": "to sell",
    "pinyin": "mài"
  },
  "穿": {
    "letter": "to wear",
    "pinyin": "chuān"
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
  "等": {
    "letter": "to wait",
    "pinyin": "děng"
  },
  "打电话": {
    "letter": "to make a phone call",
    "pinyin": "dǎ diànhuà"
  },
  "介绍": {
    "letter": "to introduce",
    "pinyin": "jièshào"
  },
  "认识": {
    "letter": "to know",
    "pinyin": "rènshi"
  },
  "知道": {
    "letter": "to know",
    "pinyin": "zhīdao"
  },
  "觉得": {
    "letter": "to feel or to think",
    "pinyin": "juédé"
  },
  "懂": {
    "letter": "to understand",
    "pinyin": "dǒng"
  },
  "找": {
    "letter": "to find",
    "pinyin": "zhǎo"
  },
  "让": {
    "letter": "to let",
    "pinyin": "ràng"
  },
  "希望": {
    "letter": "to hope",
    "pinyin": "xīwàng"
  },
  "帮助": {
    "letter": "to help",
    "pinyin": "bāngzhù"
  },
  "玩": {
    "letter": "to play",
    "pinyin": "wán"
  },
  "学习": {
    "letter": "to learn",
    "pinyin": "xuéxí"
  },
  "工作": {
    "letter": "to work",
    "pinyin": "gōngzuò"
  },
  "上班": {
    "letter": "to go to work",
    "pinyin": "shàng bān"
  },
  "睡觉": {
    "letter": "to sleep",
    "pinyin": "shuìjiào"
  },
  "起床": {
    "letter": "to get up",
    "pinyin": "qǐ chuáng"
  },
  "喜欢": {
    "letter": "to like",
    "pinyin": "xǐhuan"
  },
  "爱": {
    "letter": "to love",
    "pinyin": "ài"
  },
  "唱歌": {
    "letter": "to sing",
    "pinyin": "chàng gē"
  },
  "跳舞": {
    "letter": "to dance",
    "pinyin": "tiào wǔ"
  },
  "旅游": {
    "letter": "to travel",
    "pinyin": "lǚyóu"
  },
  "运动": {
    "letter": "to do sports",
    "pinyin": "yùndòng"
  },
  "走": {
    "letter": "to walk",
    "pinyin": "zǒu"
  },
  "跑步": {
    "letter": "to run",
    "pinyin": "pǎo bù"
  },
  "游泳": {
    "letter": "to swim",
    "pinyin": "yóu yǒng"
  },
  "踢足球": {
    "letter": "to play soccer",
    "pinyin": "tī zúqiú"
  },
  "打篮球": {
    "letter": "to play basketball",
    "pinyin": "dǎ lánqiú"
  },
  "休息": {
    "letter": "to rest",
    "pinyin": "xiūxi"
  },
  "生病": {
    "letter": "to get sick",
    "pinyin": "shēng bìng"
  },
  "洗": {
    "letter": "to wash",
    "pinyin": "xǐ"
  },
  "开始": {
    "letter": "to begin",
    "pinyin": "kāishǐ"
  },
  "完": {
    "letter": "to finish",
    "pinyin": "wán"
  },
  "准备.": {
    "letter": "to prepare",
    "pinyin": "zhǔnbèi"
  },
  "欢迎": {
    "letter": "to welcome",
    "pinyin": "huānyíng"
  },
  "会": {
    "letter": "can (to know how to)",
    "pinyin": "huì"
  },
  "能": {
    "letter": "can (to be able to)",
    "pinyin": "néng"
  },
  "可以": {
    "letter": "can (to be permitted to)",
    "pinyin": "kěyǐ"
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
  "快": {
    "letter": "fast",
    "pinyin": "kuài"
  },
  "慢": {
    "letter": "slow",
    "pinyin": "màn"
  },
  "远": {
    "letter": "far",
    "pinyin": "yuǎn"
  },
  "近": {
    "letter": "near",
    "pinyin": "jìn"
  },
  "对": {
    "letter": "right",
    "pinyin": "duì"
  },
  "错": {
    "letter": "wrong",
    "pinyin": "cuò"
  },
  "长": {
    "letter": "long",
    "pinyin": "cháng"
  },
  "高": {
    "letter": "tall or high",
    "pinyin": "gāo"
  },
  "新": {
    "letter": "new",
    "pinyin": "xīn"
  },
  "贵": {
    "letter": "expensive",
    "pinyin": "guì"
  },
  "便宜": {
    "letter": "cheap",
    "pinyin": "piányi"
  },
  "黑": {
    "letter": "black",
    "pinyin": "hēi"
  },
  "白": {
    "letter": "white",
    "pinyin": "bái"
  },
  "红": {
    "letter": "red",
    "pinyin": "hóng"
  },
  "晴": {
    "letter": "sunny",
    "pinyin": "qíng"
  },
  "阴": {
    "letter": "cloudy",
    "pinyin": "yīn"
  },
  "好吃": {
    "letter": "tasty",
    "pinyin": "hǎochī"
  },
  "漂亮": {
    "letter": "pretty",
    "pinyin": "piàoliang"
  },
  "高兴": {
    "letter": "happy",
    "pinyin": "gāoxìng"
  },
  "快乐": {
    "letter": "happy",
    "pinyin": "kuàilè"
  },
  "忙": {
    "letter": "busy",
    "pinyin": "máng"
  },
  "累": {
    "letter": "tired",
    "pinyin": "lèi"
  },
  "很": {
    "letter": "very",
    "pinyin": "hěn"
  },
  "非常": {
    "letter": "extremely",
    "pinyin": "fēicháng"
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
  "每": {
    "letter": "every",
    "pinyin": "měi"
  },
  "最": {
    "letter": "most",
    "pinyin": "zuì"
  },
  "真": {
    "letter": "really",
    "pinyin": "zhēn"
  },
  "也": {
    "letter": "also",
    "pinyin": "yě"
  },
  "还": {
    "letter": "still",
    "pinyin": "hái"
  },
  "再": {
    "letter": "again",
    "pinyin": "zài"
  },
  "就": {
    "letter": "at once",
    "pinyin": "jiǜ"
  },
  "别": {
    "letter": "don’t…",
    "pinyin": "bié"
  },
  "已经": {
    "letter": "already",
    "pinyin": "yǐjīng"
  },
  "一起": {
    "letter": "together",
    "pinyin": "yìqǐ"
  },
  "可能": {
    "letter": "maybe",
    "pinyin": "kěnéng"
  },
  "正在": {
    "letter": "indicating action in progress",
    "pinyin": "zhèngzài"
  },
  "从": {
    "letter": "from",
    "pinyin": "cóng"
  },
  "向": {
    "letter": "towards",
    "pinyin": "xiàng"
  },
  "离": {
    "letter": "away from",
    "pinyin": "lí"
  },
  "比": {
    "letter": "than",
    "pinyin": "bǐ"
  },
  "的": {
    "letter": "possession particle",
    "pinyin": "de"
  },
  "得": {
    "letter": "structure particle",
    "pinyin": "de"
  },
  "了": {
    "letter": "aspect particle",
    "pinyin": "le"
  },
  "着": {
    "letter": "aspect particle",
    "pinyin": "zhe"
  },
  "过": {
    "letter": "aspect particle",
    "pinyin": "guò"
  },
  "吗": {
    "letter": "question particle",
    "pinyin": "ma"
  },
  "呢": {
    "letter": "question particle",
    "pinyin": "ne"
  },
  "吧": {
    "letter": "question particle",
    "pinyin": "ba"
  },
  "和": {
    "letter": "and",
    "pinyin": "hé"
  },
  "但是": {
    "letter": "but",
    "pinyin": "dànshì"
  },
  "因为": {
    "letter": "because",
    "pinyin": "yīnwèi"
  },
  "所以": {
    "letter": "so",
    "pinyin": "suǒyǐ"
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
  },
  "两": {
    "letter": "two",
    "pinyin": "liǎng"
  },
  "百": {
    "letter": "hundred",
    "pinyin": "bǎi"
  },
  "千": {
    "letter": "thousand",
    "pinyin": "qiān"
  },
  "第一": {
    "letter": "first",
    "pinyin": "dì-yī"
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
