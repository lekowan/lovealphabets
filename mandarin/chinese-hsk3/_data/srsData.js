// Configuration
const localStorageKey = "mandarin" + "Hsk3Vocabulary" + "Srs";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the HSK3 vocabulary list everyday. \n \n After your first session, you will also revise learned characters from previous sessions";

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
  "自己": {
    "letter": "oneself",
    "pinyin": "zìjǐ"
  },
  "大家": {
    "letter": "everybody",
    "pinyin": "dàjiā"
  },
  "其他": {
    "letter": "other",
    "pinyin": "qítā"
  },
  "别人": {
    "letter": "other people",
    "pinyin": "biéren"
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
  "刚才": {
    "letter": "just now",
    "pinyin": "gāngcái"
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
  "周末": {
    "letter": "weekend",
    "pinyin": "zhōumò"
  },
  "时候": {
    "letter": "a certain point in time",
    "pinyin": "shíhou"
  },
  "时间": {
    "letter": "a period of time",
    "pinyin": "shíjiān"
  },
  "一会儿": {
    "letter": "a short while",
    "pinyin": "yíhuìr"
  },
  "以前": {
    "letter": "before or ago",
    "pinyin": "yǐqián"
  },
  "以后": {
    "letter": "after or later",
    "pinyin": "yǐhòu"
  },
  "最近": {
    "letter": "recent time",
    "pinyin": "zuìjìn"
  },
  "过去": {
    "letter": "past",
    "pinyin": "guòqù"
  },
  "去年": {
    "letter": "last year",
    "pinyin": "qùnián"
  },
  "季节": {
    "letter": "season",
    "pinyin": "jìjié"
  },
  "春": {
    "letter": "spring",
    "pinyin": "chūn"
  },
  "夏": {
    "letter": "summer",
    "pinyin": "xià"
  },
  "秋": {
    "letter": "autumn",
    "pinyin": "qiū"
  },
  "冬": {
    "letter": "winter",
    "pinyin": "dōng"
  },
  "节日": {
    "letter": "festival",
    "pinyin": "jiérì"
  },
  "生日": {
    "letter": "birthday",
    "pinyin": "shēngrì"
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
  "爷爷": {
    "letter": "grandpa",
    "pinyin": "yéye"
  },
  "奶奶": {
    "letter": "grandma",
    "pinyin": "nǎinai"
  },
  "叔叔": {
    "letter": "uncle",
    "pinyin": "shūshu"
  },
  "阿姨": {
    "letter": "aunt or maid",
    "pinyin": "āyí"
  },
  "朋友": {
    "letter": "friend",
    "pinyin": "péngyǒu"
  },
  "客人": {
    "letter": "guest",
    "pinyin": "kèren"
  },
  "邻居": {
    "letter": "neighbor",
    "pinyin": "línjū"
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
  "同事": {
    "letter": "colleague",
    "pinyin": "tóngshì"
  },
  "校长": {
    "letter": "head of a school",
    "pinyin": "xiàozhǎng"
  },
  "医生": {
    "letter": "doctor",
    "pinyin": "yīshēng"
  },
  "司机": {
    "letter": "driver",
    "pinyin": "sījī"
  },
  "服务员": {
    "letter": "waiter or waitress",
    "pinyin": "fúwùyuán"
  },
  "经理": {
    "letter": "manager",
    "pinyin": "jīnglǐ"
  },
  "身体": {
    "letter": "body",
    "pinyin": "shēntǐ"
  },
  "脸": {
    "letter": "face",
    "pinyin": "liǎn"
  },
  "眼睛": {
    "letter": "eye",
    "pinyin": "yǎnjīng"
  },
  "耳朵": {
    "letter": "ear",
    "pinyin": "ěrduo"
  },
  "鼻子": {
    "letter": "nose",
    "pinyin": "bízi"
  },
  "口": {
    "letter": "mouth",
    "pinyin": "kǒu"
  },
  "头发": {
    "letter": "hair",
    "pinyin": "tóufa"
  },
  "腿": {
    "letter": "leg",
    "pinyin": "tuǐ"
  },
  "脚": {
    "letter": "foot",
    "pinyin": "jiǎo"
  },
  "声音": {
    "letter": "sound or voice",
    "pinyin": "shēngyīn"
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
  "面包": {
    "letter": "bread",
    "pinyin": "miànbāo"
  },
  "蛋糕": {
    "letter": "cake",
    "pinyin": "dàngāo"
  },
  "糖": {
    "letter": "candy or sugar",
    "pinyin": "táng"
  },
  "菜": {
    "letter": "dish",
    "pinyin": "cài"
  },
  "米饭": {
    "letter": "(cooked) rice",
    "pinyin": "mǐfàn"
  },
  "面条": {
    "letter": "noodle",
    "pinyin": "miàntiáo"
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
  "菜单": {
    "letter": "menu",
    "pinyin": "càidān"
  },
  "衣服": {
    "letter": "clothes",
    "pinyin": "yīfu"
  },
  "衬衫": {
    "letter": "shirt",
    "pinyin": "chènshān"
  },
  "裤子": {
    "letter": "pants",
    "pinyin": "kùzi"
  },
  "裙子": {
    "letter": "skirt",
    "pinyin": "qúnzi"
  },
  "帽子": {
    "letter": "hat or cap",
    "pinyin": "màozi"
  },
  "鞋": {
    "letter": "shoe",
    "pinyin": "xié"
  },
  "包": {
    "letter": "bag",
    "pinyin": "bāo"
  },
  "行李箱": {
    "letter": "suitcase",
    "pinyin": "xínglǐxiāng"
  },
  "伞": {
    "letter": "umbrella",
    "pinyin": "sǎn"
  },
  "眼镜": {
    "letter": "glasses",
    "pinyin": "yǎnjìng"
  },
  "书": {
    "letter": "book",
    "pinyin": "shū"
  },
  "报纸": {
    "letter": "newspaper",
    "pinyin": "bàozhǐ"
  },
  "字典": {
    "letter": "dictionary",
    "pinyin": "zìdiǎn"
  },
  "地图": {
    "letter": "map",
    "pinyin": "dìtú"
  },
  "票": {
    "letter": "ticket",
    "pinyin": "piào"
  },
  "信": {
    "letter": "letter",
    "pinyin": "xìn"
  },
  "照片": {
    "letter": "photo",
    "pinyin": "zhàopiàn"
  },
  "护照": {
    "letter": "passport",
    "pinyin": "hùzhào"
  },
  "照相机": {
    "letter": "camera",
    "pinyin": "zhàoxiàngjī"
  },
  "桌子": {
    "letter": "table or desk",
    "pinyin": "zhuōzi"
  },
  "椅子": {
    "letter": "chair",
    "pinyin": "yǐzi"
  },
  "黑板": {
    "letter": "blackboard",
    "pinyin": "hēibǎn"
  },
  "铅笔": {
    "letter": "pencil",
    "pinyin": "qiānbǐ"
  },
  "水果": {
    "letter": "fruit",
    "pinyin": "shuǐguǒ"
  },
  "苹果": {
    "letter": "apple",
    "pinyin": "píngguǒ"
  },
  "香蕉": {
    "letter": "banana",
    "pinyin": "xiāngjiāo"
  },
  "西瓜": {
    "letter": "watermelon",
    "pinyin": "xīguā"
  },
  "葡萄": {
    "letter": "grape",
    "pinyin": "pútáo"
  },
  "果汁": {
    "letter": "juice",
    "pinyin": "guǒzhī"
  },
  "啤酒": {
    "letter": "beer",
    "pinyin": "píjiǔ"
  },
  "草": {
    "letter": "grass",
    "pinyin": "cǎo"
  },
  "药": {
    "letter": "medicine",
    "pinyin": "yào"
  },
  "杯子": {
    "letter": "cup or glass",
    "pinyin": "bēizi"
  },
  "碗": {
    "letter": "bowl",
    "pinyin": "wǎn"
  },
  "筷子": {
    "letter": "chopsticks",
    "pinyin": "kuàizi"
  },
  "盘子": {
    "letter": "plate",
    "pinyin": "pánzi"
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
  "电子邮件": {
    "letter": "email",
    "pinyin": "diànzǐ yóujiàn"
  },
  "冰箱": {
    "letter": "refrigerator",
    "pinyin": "bīngxiāng"
  },
  "空调": {
    "letter": "air conditioner",
    "pinyin": "kōngtiáo"
  },
  "灯": {
    "letter": "light",
    "pinyin": "dēng"
  },
  "电影": {
    "letter": "movie",
    "pinyin": "diànyǐng"
  },
  "礼物": {
    "letter": "gift",
    "pinyin": "lǐwù"
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
  "地铁": {
    "letter": "metro",
    "pinyin": "dìtiě"
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
  "电梯": {
    "letter": "elevator",
    "pinyin": "diàntī"
  },
  "颜色": {
    "letter": "color",
    "pinyin": "yánsè"
  },
  "动物": {
    "letter": "animal",
    "pinyin": "dòngwù"
  },
  "猫": {
    "letter": "cat",
    "pinyin": "māo"
  },
  "狗": {
    "letter": "dog",
    "pinyin": "gǒu"
  },
  "马": {
    "letter": "horse",
    "pinyin": "mǎ"
  },
  "熊猫": {
    "letter": "panda",
    "pinyin": "xióngmāo"
  },
  "鸟": {
    "letter": "bird",
    "pinyin": "niǎo"
  },
  "树": {
    "letter": "tree",
    "pinyin": "shù"
  },
  "天气": {
    "letter": "weather",
    "pinyin": "tiānqì"
  },
  "太阳": {
    "letter": "sun",
    "pinyin": "tàiyáng"
  },
  "月亮": {
    "letter": "moon",
    "pinyin": "yuèliang"
  },
  "云": {
    "letter": "cloud",
    "pinyin": "yún"
  },
  "雪": {
    "letter": "snow",
    "pinyin": "xuě"
  },
  "字": {
    "letter": "character",
    "pinyin": "zì"
  },
  "词语": {
    "letter": "word",
    "pinyin": "cíyǔ"
  },
  "句子": {
    "letter": "sentence",
    "pinyin": "jùzi"
  },
  "汉语": {
    "letter": "Chinese (language)",
    "pinyin": "Hànyǔ"
  },
  "普通话": {
    "letter": "(standard) Mandarin",
    "pinyin": "pǔtōnghuà"
  },
  "数学": {
    "letter": "math",
    "pinyin": "shùxué"
  },
  "课": {
    "letter": "lesson",
    "pinyin": "kè"
  },
  "班": {
    "letter": "class",
    "pinyin": "bān"
  },
  "年级": {
    "letter": "grade",
    "pinyin": "niánjí"
  },
  "作业": {
    "letter": "homework",
    "pinyin": "zuòyè"
  },
  "考试": {
    "letter": "exam",
    "pinyin": "kǎoshì"
  },
  "成绩": {
    "letter": "score",
    "pinyin": "chéngjì"
  },
  "水平": {
    "letter": "level or standard",
    "pinyin": "shuǐpíng"
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
  "兴趣": {
    "letter": "interest",
    "pinyin": "xìngqù"
  },
  "爱好": {
    "letter": "hobby",
    "pinyin": "àihào"
  },
  "音乐": {
    "letter": "music",
    "pinyin": "yīnyuè"
  },
  "体育": {
    "letter": "sports or physical education",
    "pinyin": "tǐyù"
  },
  "办法": {
    "letter": "method",
    "pinyin": "bànfǎ"
  },
  "习惯": {
    "letter": "habit",
    "pinyin": "xíguàn"
  },
  "比赛": {
    "letter": "match",
    "pinyin": "bǐsài"
  },
  "游戏": {
    "letter": "game",
    "pinyin": "yóuxì"
  },
  "故事": {
    "letter": "story",
    "pinyin": "gùshi"
  },
  "关系": {
    "letter": "relation",
    "pinyin": "guānxì"
  },
  "环境": {
    "letter": "environment",
    "pinyin": "huánjìng"
  },
  "会议": {
    "letter": "meeting",
    "pinyin": "huìyì"
  },
  "机会": {
    "letter": "opportunity or chance",
    "pinyin": "jīhuì"
  },
  "节目": {
    "letter": "program",
    "pinyin": "jiémù"
  },
  "世界": {
    "letter": "world",
    "pinyin": "shìjiè"
  },
  "历史": {
    "letter": "history",
    "pinyin": "lìshǐ"
  },
  "文化": {
    "letter": "culture",
    "pinyin": "wénhuà"
  },
  "新闻": {
    "letter": "news",
    "pinyin": "xīnwén"
  },
  "作用": {
    "letter": "effect",
    "pinyin": "zuòyòng"
  },
  "中国": {
    "letter": "China",
    "pinyin": "Zhōngguó"
  },
  "北京": {
    "letter": "Beijing",
    "pinyin": "Běijīng"
  },
  "国家": {
    "letter": "nation",
    "pinyin": "guójiā"
  },
  "城市": {
    "letter": "city",
    "pinyin": "chéngshì"
  },
  "地方": {
    "letter": "place",
    "pinyin": "dìfāng"
  },
  "家": {
    "letter": "home or family",
    "pinyin": "jiā"
  },
  "楼": {
    "letter": "building or floor",
    "pinyin": "lóu"
  },
  "房间": {
    "letter": "room",
    "pinyin": "fángjiān"
  },
  "厨房": {
    "letter": "kitchen",
    "pinyin": "chúfáng"
  },
  "洗手间": {
    "letter": "washroom",
    "pinyin": "xǐshǒujiān"
  },
  "学校": {
    "letter": "school",
    "pinyin": "xuéxiào"
  },
  "教室": {
    "letter": "classroom",
    "pinyin": "jiàoshì"
  },
  "图书馆": {
    "letter": "library",
    "pinyin": "túshūguǎn"
  },
  "公司": {
    "letter": "company",
    "pinyin": "gōngsī"
  },
  "办公室": {
    "letter": "office",
    "pinyin": "bàngōngshì"
  },
  "饭馆": {
    "letter": "restaurant",
    "pinyin": "fànguǎn"
  },
  "宾馆": {
    "letter": "hotel",
    "pinyin": "bīngguǎn"
  },
  "商店": {
    "letter": "shop",
    "pinyin": "shāngdiàn"
  },
  "超市": {
    "letter": "supermarket",
    "pinyin": "chāoshì"
  },
  "公园": {
    "letter": "park",
    "pinyin": "gōngyuán"
  },
  "花园": {
    "letter": "garden",
    "pinyin": "huāyuán"
  },
  "银行": {
    "letter": "bank",
    "pinyin": "yínháng"
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
  "街道": {
    "letter": "street",
    "pinyin": "jiēdào"
  },
  "河": {
    "letter": "river",
    "pinyin": "hé"
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
  "中间": {
    "letter": "middle",
    "pinyin": "zhōngjiān"
  },
  "旁边": {
    "letter": "side",
    "pinyin": "pángbiān"
  },
  "附近": {
    "letter": "surrounding area",
    "pinyin": "fùjìn"
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
  "东": {
    "letter": "east",
    "pinyin": "dōng"
  },
  "南": {
    "letter": "south",
    "pinyin": "nán"
  },
  "西": {
    "letter": "west",
    "pinyin": "xī"
  },
  "北方": {
    "letter": "north or northern China",
    "pinyin": "běifāng"
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
  "角": {
    "letter": "1/10 of Chinese Yuan",
    "pinyin": "jiǎo"
  },
  "位": {
    "letter": "measure word for people",
    "pinyin": "wèi"
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
  "米": {
    "letter": "meter",
    "pinyin": "mǐ"
  },
  "件": {
    "letter": "for affairs, clothes, furniture",
    "pinyin": "jiàn"
  },
  "张": {
    "letter": "for flat objects",
    "pinyin": "zhāng"
  },
  "条": {
    "letter": "for long objects",
    "pinyin": "tiáo"
  },
  "辆": {
    "letter": "for vehicles",
    "pinyin": "liàng"
  },
  "把": {
    "letter": "for things with a handle",
    "pinyin": "bǎ"
  },
  "种": {
    "letter": "type",
    "pinyin": "zhǒng"
  },
  "层": {
    "letter": "floor",
    "pinyin": "céng"
  },
  "双": {
    "letter": "pair",
    "pinyin": "shuāng"
  },
  "段": {
    "letter": "span of time or distance",
    "pinyin": "duàn"
  },
  "刻": {
    "letter": "quarter (time)",
    "pinyin": "kè"
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
  "需要": {
    "letter": "to need",
    "pinyin": "xūyào"
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
  "讲": {
    "letter": "to say or to speak",
    "pinyin": "jiǎng"
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
  "哭": {
    "letter": "to cry",
    "pinyin": "kū"
  },
  "见面": {
    "letter": "to meet",
    "pinyin": "jiànmiàn"
  },
  "遇到": {
    "letter": "to encounter",
    "pinyin": "yùdào"
  },
  "给": {
    "letter": "to give",
    "pinyin": "gěi"
  },
  "送": {
    "letter": "to give as a gift or to deliver",
    "pinyin": "sòng"
  },
  "带": {
    "letter": "to bring",
    "pinyin": "dài"
  },
  "拿": {
    "letter": "to hold or to take",
    "pinyin": "ná"
  },
  "放": {
    "letter": "to put",
    "pinyin": "fàng"
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
  "关": {
    "letter": "to close or to shut",
    "pinyin": "guān"
  },
  "坐": {
    "letter": "to sit",
    "pinyin": "zuò"
  },
  "站": {
    "letter": "to stand",
    "pinyin": "zhàn"
  },
  "读": {
    "letter": "to read",
    "pinyin": "dú"
  },
  "写": {
    "letter": "to write",
    "pinyin": "xiě"
  },
  "画": {
    "letter": "to draw or to paint",
    "pinyin": "huà"
  },
  "等": {
    "letter": "to wait",
    "pinyin": "děng"
  },
  "花": {
    "letter": "to spend or to cost",
    "pinyin": "huā"
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
  "了解": {
    "letter": "to know well",
    "pinyin": "liǎojiě"
  },
  "觉得": {
    "letter": "to feel or to think",
    "pinyin": "juédé"
  },
  "认为": {
    "letter": "to think or to consider",
    "pinyin": "rènwéi"
  },
  "以为": {
    "letter": "to think (wrongly)",
    "pinyin": "yǐwéi"
  },
  "懂": {
    "letter": "to understand",
    "pinyin": "dǒng"
  },
  "明白": {
    "letter": "to understand",
    "pinyin": "míngbai"
  },
  "找": {
    "letter": "to find",
    "pinyin": "zhǎo"
  },
  "发现": {
    "letter": "to discover",
    "pinyin": "fāxiàn"
  },
  "记得": {
    "letter": "to remember",
    "pinyin": "jìde"
  },
  "忘记": {
    "letter": "to forget",
    "pinyin": "wàngjì"
  },
  "让": {
    "letter": "to let",
    "pinyin": "ràng"
  },
  "使": {
    "letter": "to make",
    "pinyin": "shǐ"
  },
  "用": {
    "letter": "to use",
    "pinyin": "yòng"
  },
  "希望": {
    "letter": "to hope",
    "pinyin": "xīwàng"
  },
  "帮助": {
    "letter": "to help",
    "pinyin": "bāngzhù"
  },
  "帮忙": {
    "letter": "to help",
    "pinyin": "bāngmáng"
  },
  "玩": {
    "letter": "to play",
    "pinyin": "wán"
  },
  "学习": {
    "letter": "to learn",
    "pinyin": "xuéxí"
  },
  "教": {
    "letter": "to teach",
    "pinyin": "jiāo"
  },
  "复习": {
    "letter": "to review",
    "pinyin": "fùxí"
  },
  "上网": {
    "letter": "to get online",
    "pinyin": "shàngwǎng"
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
  "刷牙": {
    "letter": "to brush teeth",
    "pinyin": "shuāyá"
  },
  "洗澡": {
    "letter": "to bathe",
    "pinyin": "xǐzǎo"
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
  "骑": {
    "letter": "to ride",
    "pinyin": "qí"
  },
  "踢足球": {
    "letter": "to play soccer",
    "pinyin": "tī zúqiú"
  },
  "打篮球": {
    "letter": "to play basketball",
    "pinyin": "dǎ lánqiú"
  },
  "爬山": {
    "letter": "to climb mountain",
    "pinyin": "pá shān"
  },
  "锻炼": {
    "letter": "to work out",
    "pinyin": "duànliàn"
  },
  "休息": {
    "letter": "to rest",
    "pinyin": "xiūxi"
  },
  "生病": {
    "letter": "to get sick",
    "pinyin": "shēng bìng"
  },
  "发烧": {
    "letter": "to have a fever",
    "pinyin": "fāshāo"
  },
  "感冒": {
    "letter": "to have a cold",
    "pinyin": "gǎnmào"
  },
  "疼": {
    "letter": "to ache",
    "pinyin": "téng"
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
  "结束": {
    "letter": "to end",
    "pinyin": "jiéshù"
  },
  "完成": {
    "letter": "to complete or accomplish",
    "pinyin": "wánchéng"
  },
  "打算": {
    "letter": "to plan",
    "pinyin": "dǎsuàn"
  },
  "决定": {
    "letter": "to decide",
    "pinyin": "juédìng"
  },
  "选择": {
    "letter": "to choose",
    "pinyin": "xuǎnzé"
  },
  "准备.": {
    "letter": "to prepare",
    "pinyin": "zhǔnbèi"
  },
  "同意": {
    "letter": "to agree",
    "pinyin": "tóngyì"
  },
  "解决": {
    "letter": "to solve",
    "pinyin": "jiějué"
  },
  "担心": {
    "letter": "to worry",
    "pinyin": "dānxīn"
  },
  "生气": {
    "letter": "to get angry",
    "pinyin": "shēngqì"
  },
  "欢迎": {
    "letter": "to welcome",
    "pinyin": "huānyíng"
  },
  "搬": {
    "letter": "to move",
    "pinyin": "bān"
  },
  "还": {
    "letter": "still",
    "pinyin": "hái"
  },
  "接": {
    "letter": "to catch or to pick up",
    "pinyin": "jiē"
  },
  "比较": {
    "letter": "to compare",
    "pinyin": "bǐjiào"
  },
  "变化": {
    "letter": "to change",
    "pinyin": "biànhuà"
  },
  "换": {
    "letter": "to exchange",
    "pinyin": "huàn"
  },
  "借": {
    "letter": "to borrow or to lend",
    "pinyin": "jiè"
  },
  "表示": {
    "letter": "to express",
    "pinyin": "biǎoshì"
  },
  "要求": {
    "letter": "to require",
    "pinyin": "yāoqiú"
  },
  "祝": {
    "letter": "to wish",
    "pinyin": "zhù"
  },
  "注意": {
    "letter": "to pay attention to",
    "pinyin": "zhùyì"
  },
  "表演": {
    "letter": "to perform",
    "pinyin": "biǎoyǎn"
  },
  "参加": {
    "letter": "to attend",
    "pinyin": "cānjiā"
  },
  "迟到": {
    "letter": "to be late",
    "pinyin": "chídào"
  },
  "出现": {
    "letter": "to appear",
    "pinyin": "chūxiàn"
  },
  "离开": {
    "letter": "to leave",
    "pinyin": "líkāi"
  },
  "经过": {
    "letter": "to pass",
    "pinyin": "jīngguò"
  },
  "练习": {
    "letter": "to practice",
    "pinyin": "liànxí"
  },
  "提高": {
    "letter": "to improve",
    "pinyin": "tígāo"
  },
  "检查": {
    "letter": "to check",
    "pinyin": "jiǎnchá"
  },
  "打扫": {
    "letter": "to clean",
    "pinyin": "dǎsǎo"
  },
  "相信": {
    "letter": "to believe",
    "pinyin": "xiāngxìn"
  },
  "放心": {
    "letter": "to rest assured",
    "pinyin": "fàngxīn"
  },
  "着急": {
    "letter": "to worry",
    "pinyin": "zháojí"
  },
  "关心": {
    "letter": "to concern",
    "pinyin": "guānxīn"
  },
  "照顾": {
    "letter": "to look after",
    "pinyin": "zhàogù"
  },
  "分": {
    "letter": "to divide or separate",
    "pinyin": "fēn"
  },
  "长": {
    "letter": "long",
    "pinyin": "cháng"
  },
  "敢": {
    "letter": "to dare",
    "pinyin": "gǎn"
  },
  "害怕": {
    "letter": "to fear",
    "pinyin": "hàipà"
  },
  "小心": {
    "letter": "to be careful",
    "pinyin": "xiǎoxīn"
  },
  "影响": {
    "letter": "to affect",
    "pinyin": "yǐngxiǎng"
  },
  "结婚": {
    "letter": "to marry",
    "pinyin": "jiéhūn"
  },
  "举行": {
    "letter": "to hold (event)",
    "pinyin": "jǔxíng"
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
  "必须": {
    "letter": "must",
    "pinyin": "bìxū"
  },
  "应该": {
    "letter": "should",
    "pinyin": "yīnggāi"
  },
  "愿意": {
    "letter": "to be willing to",
    "pinyin": "yuànyì"
  },
  "下雨": {
    "letter": "to rain",
    "pinyin": "xià yǔ"
  },
  "刮风": {
    "letter": "to blow (wind)",
    "pinyin": "guā fēng"
  },
  "好": {
    "letter": "good",
    "pinyin": "hǎo"
  },
  "坏": {
    "letter": "bad",
    "pinyin": "huài"
  },
  "差": {
    "letter": "bad (in quality)",
    "pinyin": "chà"
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
  "久": {
    "letter": "long (in time)",
    "pinyin": "jiǔ"
  },
  "短": {
    "letter": "short",
    "pinyin": "duǎn"
  },
  "高": {
    "letter": "tall or high",
    "pinyin": "gāo"
  },
  "矮": {
    "letter": "short (in height)",
    "pinyin": "ǎi"
  },
  "低": {
    "letter": "low",
    "pinyin": "dī"
  },
  "胖": {
    "letter": "fat",
    "pinyin": "pàng"
  },
  "瘦": {
    "letter": "thin",
    "pinyin": "shòu"
  },
  "新": {
    "letter": "new",
    "pinyin": "xīn"
  },
  "旧": {
    "letter": "old or used",
    "pinyin": "jiù"
  },
  "年轻": {
    "letter": "young",
    "pinyin": "niánqīng"
  },
  "老": {
    "letter": "old (in age)",
    "pinyin": "lǎo"
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
  "黄": {
    "letter": "yellow",
    "pinyin": "huáng"
  },
  "蓝": {
    "letter": "blue",
    "pinyin": "lán"
  },
  "绿": {
    "letter": "green",
    "pinyin": "lǜ"
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
  "甜": {
    "letter": "sweet",
    "pinyin": "tián"
  },
  "新鲜": {
    "letter": "fresh",
    "pinyin": "xīnxiān"
  },
  "容易": {
    "letter": "easy",
    "pinyin": "róngyì"
  },
  "简单": {
    "letter": "simple",
    "pinyin": "jiǎndān"
  },
  "难": {
    "letter": "difficult",
    "pinyin": "nán"
  },
  "奇怪": {
    "letter": "strange",
    "pinyin": "qíguài"
  },
  "特别": {
    "letter": "special",
    "pinyin": "tèbié"
  },
  "重要": {
    "letter": "important",
    "pinyin": "zhòngyào"
  },
  "有名": {
    "letter": "famous",
    "pinyin": "yǒumíng"
  },
  "漂亮": {
    "letter": "pretty",
    "pinyin": "piàoliang"
  },
  "聪明": {
    "letter": "smart",
    "pinyin": "cōngming"
  },
  "可爱": {
    "letter": "cute",
    "pinyin": "Kě’ài"
  },
  "高兴": {
    "letter": "happy",
    "pinyin": "gāoxìng"
  },
  "快乐": {
    "letter": "happy",
    "pinyin": "kuàilè"
  },
  "难过": {
    "letter": "sad",
    "pinyin": "nánguò"
  },
  "满意": {
    "letter": "satisfied",
    "pinyin": "mǎnyì"
  },
  "忙": {
    "letter": "busy",
    "pinyin": "máng"
  },
  "累": {
    "letter": "tired",
    "pinyin": "lèi"
  },
  "饿": {
    "letter": "hungry",
    "pinyin": "è"
  },
  "渴": {
    "letter": "thirsty",
    "pinyin": "kě"
  },
  "饱": {
    "letter": "full",
    "pinyin": "bǎo"
  },
  "相同": {
    "letter": "same",
    "pinyin": "xiāngtóng"
  },
  "一样": {
    "letter": "same",
    "pinyin": "yíyàng"
  },
  "主要": {
    "letter": "main",
    "pinyin": "zhǔyào"
  },
  "方便": {
    "letter": "convenient",
    "pinyin": "fāngbiàn"
  },
  "安静": {
    "letter": "quiet",
    "pinyin": "ānjìng"
  },
  "干净": {
    "letter": "clean",
    "pinyin": "gānjìng"
  },
  "清楚": {
    "letter": "clear",
    "pinyin": "qīngchu"
  },
  "健康": {
    "letter": "healthy",
    "pinyin": "jiànkāng"
  },
  "舒服": {
    "letter": "comfortable",
    "pinyin": "shūfu"
  },
  "热情": {
    "letter": "enthusiastic",
    "pinyin": "rèqíng"
  },
  "认真": {
    "letter": "serious or careful",
    "pinyin": "rènzhēn"
  },
  "努力": {
    "letter": "studious or hardworking",
    "pinyin": "nǔlì"
  },
  "很": {
    "letter": "very",
    "pinyin": "hěn"
  },
  "非常": {
    "letter": "extremely",
    "pinyin": "fēicháng"
  },
  "极": {
    "letter": "extremely",
    "pinyin": "jí"
  },
  "太": {
    "letter": "too…",
    "pinyin": "tài"
  },
  "多么": {
    "letter": "how…",
    "pinyin": "duōme"
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
  "再": {
    "letter": "again",
    "pinyin": "zài"
  },
  "又": {
    "letter": "again",
    "pinyin": "yòu"
  },
  "只": {
    "letter": "only",
    "pinyin": "zhǐ"
  },
  "就": {
    "letter": "at once",
    "pinyin": "jiǜ"
  },
  "马上": {
    "letter": "immediately",
    "pinyin": "mǎshàng"
  },
  "才": {
    "letter": "just",
    "pinyin": "cái"
  },
  "更": {
    "letter": "more",
    "pinyin": "gèng"
  },
  "越": {
    "letter": "more",
    "pinyin": "yuè"
  },
  "别": {
    "letter": "don’t…",
    "pinyin": "bié"
  },
  "先": {
    "letter": "first",
    "pinyin": "xiān"
  },
  "已经": {
    "letter": "already",
    "pinyin": "yǐjīng"
  },
  "几乎": {
    "letter": "almost",
    "pinyin": "jīhū"
  },
  "一定": {
    "letter": "definitely",
    "pinyin": "yídìng"
  },
  "一起": {
    "letter": "together",
    "pinyin": "yìqǐ"
  },
  "一共": {
    "letter": "altogether",
    "pinyin": "yígòng"
  },
  "可能": {
    "letter": "maybe",
    "pinyin": "kěnéng"
  },
  "其实": {
    "letter": "actually",
    "pinyin": "qíshí"
  },
  "突然": {
    "letter": "suddenly",
    "pinyin": "tūrán"
  },
  "正在": {
    "letter": "indicating action in progress",
    "pinyin": "zhèngzài"
  },
  "一边": {
    "letter": "at the same time",
    "pinyin": "yìbiān"
  },
  "终于": {
    "letter": "finally",
    "pinyin": "zhōngyú"
  },
  "总是": {
    "letter": "always",
    "pinyin": "zǒngshì"
  },
  "经常": {
    "letter": "often",
    "pinyin": "jīngcháng"
  },
  "一般": {
    "letter": "generally",
    "pinyin": "yìbān"
  },
  "一直": {
    "letter": "constantly",
    "pinyin": "yìzhí"
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
  "跟": {
    "letter": "with",
    "pinyin": "gēn"
  },
  "被": {
    "letter": "by",
    "pinyin": "bèi"
  },
  "为": {
    "letter": "for (sb/sth)",
    "pinyin": "wèi"
  },
  "为了": {
    "letter": "for (purpose)",
    "pinyin": "wèile"
  },
  "关于": {
    "letter": "about, regarding",
    "pinyin": "guānyú"
  },
  "像": {
    "letter": "as or like",
    "pinyin": "xiàng"
  },
  "除了": {
    "letter": "besides or except",
    "pinyin": "chúle"
  },
  "根据": {
    "letter": "according to",
    "pinyin": "gēnjù"
  },
  "的": {
    "letter": "possession particle",
    "pinyin": "de"
  },
  "得": {
    "letter": "structure particle",
    "pinyin": "de"
  },
  "地": {
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
  "啊": {
    "letter": "exclamatory particle",
    "pinyin": "a"
  },
  "和": {
    "letter": "and",
    "pinyin": "hé"
  },
  "但是": {
    "letter": "but",
    "pinyin": "dànshì"
  },
  "虽然": {
    "letter": "although",
    "pinyin": "suīrán"
  },
  "因为": {
    "letter": "because",
    "pinyin": "yīnwèi"
  },
  "所以": {
    "letter": "so",
    "pinyin": "suǒyǐ"
  },
  "还是": {
    "letter": "or",
    "pinyin": "háishì"
  },
  "或者": {
    "letter": "or",
    "pinyin": "huòzhě"
  },
  "然后": {
    "letter": "then, afterwards",
    "pinyin": "ránhòu"
  },
  "如果": {
    "letter": "if",
    "pinyin": "rúguǒ"
  },
  "而且": {
    "letter": "moreover",
    "pinyin": "érqiě"
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
  "当然": {
    "letter": "of course",
    "pinyin": "dāngrán"
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
  "万": {
    "letter": "ten thousand",
    "pinyin": "wàn"
  },
  "第一": {
    "letter": "first",
    "pinyin": "dì-yī"
  },
  "半": {
    "letter": "half",
    "pinyin": "bàn"
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

