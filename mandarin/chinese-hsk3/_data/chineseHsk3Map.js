// Exercise Type (character, vocabulary )
const chineseHsk3ChartType = "vocabulary";

const chineseHsk3Map = {
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
        "character": "自己",
        "letter": "oneself",
        "pinyin": "zìjǐ"
    },
    "9": {
        "character": "大家",
        "letter": "everybody",
        "pinyin": "dàjiā"
    },
    "10": {
        "character": "其他",
        "letter": "other",
        "pinyin": "qítā"
    },
    "11": {
        "character": "别人",
        "letter": "other people",
        "pinyin": "biéren"
    },
    "12": {
        "character": "这/这儿",
        "letter": "this/here",
        "pinyin": "zhè/zhèr"
    },
    "13": {
        "character": "那/那儿",
        "letter": "that/there",
        "pinyin": "nà/nàr"
    },
    "14": {
        "character": "哪/哪儿",
        "letter": "which/where",
        "pinyin": "nǎ/nǎr"
    },
    "15": {
        "character": "谁",
        "letter": "who",
        "pinyin": "shéi"
    },
    "16": {
        "character": "什么",
        "letter": "what",
        "pinyin": "shénme"
    },
    "17": {
        "character": "多少",
        "letter": "how many or how much",
        "pinyin": "duōshao"
    },
    "18": {
        "character": "几",
        "letter": "how many or how much",
        "pinyin": "jǐ"
    },
    "19": {
        "character": "怎么",
        "letter": "how",
        "pinyin": "zěnme"
    },
    "20": {
        "character": "怎么样",
        "letter": "how about",
        "pinyin": "zěnmeyàng"
    },
    "21": {
        "character": "为什么",
        "letter": "why",
        "pinyin": "wèi shénme"
    },
    "22": {
        "character": "现在",
        "letter": "now",
        "pinyin": "xiànzài"
    },
    "23": {
        "character": "刚才",
        "letter": "just now",
        "pinyin": "gāngcái"
    },
    "24": {
        "character": "今天",
        "letter": "today",
        "pinyin": "jīntiān"
    },
    "25": {
        "character": "明天",
        "letter": "tomorrow",
        "pinyin": "míngtiān"
    },
    "26": {
        "character": "昨天",
        "letter": "yesterday",
        "pinyin": "zuótiān"
    },
    "27": {
        "character": "早上",
        "letter": "early morning",
        "pinyin": "zǎoshàng"
    },
    "28": {
        "character": "上午",
        "letter": "morning",
        "pinyin": "shàngwǔ"
    },
    "29": {
        "character": "中午",
        "letter": "noon",
        "pinyin": "zhōngwǔ"
    },
    "30": {
        "character": "下午",
        "letter": "afternoon",
        "pinyin": "xiàwǔ"
    },
    "31": {
        "character": "晚上",
        "letter": "evening",
        "pinyin": "wǎnshàng"
    },
    "32": {
        "character": "点",
        "letter": "o’clock",
        "pinyin": "diǎn"
    },
    "33": {
        "character": "小时",
        "letter": "hour",
        "pinyin": "xiǎoshí"
    },
    "34": {
        "character": "分钟",
        "letter": "minute",
        "pinyin": "fēnzhōng"
    },
    "35": {
        "character": "年",
        "letter": "year",
        "pinyin": "nián"
    },
    "36": {
        "character": "月",
        "letter": "month",
        "pinyin": "yuè"
    },
    "37": {
        "character": "日",
        "letter": "day",
        "pinyin": "rì"
    },
    "38": {
        "character": "号",
        "letter": "date or number",
        "pinyin": "hào"
    },
    "39": {
        "character": "星期",
        "letter": "week",
        "pinyin": "xīngqī"
    },
    "40": {
        "character": "周末",
        "letter": "weekend",
        "pinyin": "zhōumò"
    },
    "41": {
        "character": "时候",
        "letter": "a certain point in time",
        "pinyin": "shíhou"
    },
    "42": {
        "character": "时间",
        "letter": "a period of time",
        "pinyin": "shíjiān"
    },
    "43": {
        "character": "一会儿",
        "letter": "a short while",
        "pinyin": "yíhuìr"
    },
    "44": {
        "character": "以前",
        "letter": "before or ago",
        "pinyin": "yǐqián"
    },
    "45": {
        "character": "以后",
        "letter": "after or later",
        "pinyin": "yǐhòu"
    },
    "46": {
        "character": "最近",
        "letter": "recent time",
        "pinyin": "zuìjìn"
    },
    "47": {
        "character": "过去",
        "letter": "past",
        "pinyin": "guòqù"
    },
    "48": {
        "character": "去年",
        "letter": "last year",
        "pinyin": "qùnián"
    },
    "49": {
        "character": "季节",
        "letter": "season",
        "pinyin": "jìjié"
    },
    "50": {
        "character": "春",
        "letter": "spring",
        "pinyin": "chūn"
    },
    "51": {
        "character": "夏",
        "letter": "summer",
        "pinyin": "xià"
    },
    "52": {
        "character": "秋",
        "letter": "autumn",
        "pinyin": "qiū"
    },
    "53": {
        "character": "冬",
        "letter": "winter",
        "pinyin": "dōng"
    },
    "54": {
        "character": "节日",
        "letter": "festival",
        "pinyin": "jiérì"
    },
    "55": {
        "character": "生日",
        "letter": "birthday",
        "pinyin": "shēngrì"
    },
    "56": {
        "character": "人",
        "letter": "person or people",
        "pinyin": "rén"
    },
    "57": {
        "character": "男人",
        "letter": "man",
        "pinyin": "nánrén"
    },
    "58": {
        "character": "女人",
        "letter": "woman",
        "pinyin": "nǚrén"
    },
    "59": {
        "character": "名字",
        "letter": "name",
        "pinyin": "míngzì"
    },
    "60": {
        "character": "妈妈",
        "letter": "mom",
        "pinyin": "māma"
    },
    "61": {
        "character": "爸爸",
        "letter": "dad",
        "pinyin": "bàba"
    },
    "62": {
        "character": "丈夫",
        "letter": "husband",
        "pinyin": "zhàngfu"
    },
    "63": {
        "character": "妻子",
        "letter": "wife",
        "pinyin": "qīzi"
    },
    "64": {
        "character": "孩子",
        "letter": "child",
        "pinyin": "háizi"
    },
    "65": {
        "character": "儿子",
        "letter": "son",
        "pinyin": "érzi"
    },
    "66": {
        "character": "女儿",
        "letter": "daughter",
        "pinyin": "nǚ’ér"
    },
    "67": {
        "character": "哥哥",
        "letter": "elder brother",
        "pinyin": "gēge"
    },
    "68": {
        "character": "姐姐",
        "letter": "elder sister",
        "pinyin": "jiějie"
    },
    "69": {
        "character": "弟弟",
        "letter": "younger brother",
        "pinyin": "dìdi"
    },
    "70": {
        "character": "妹妹",
        "letter": "younger sister",
        "pinyin": "mèimei"
    },
    "71": {
        "character": "爷爷",
        "letter": "grandpa",
        "pinyin": "yéye"
    },
    "72": {
        "character": "奶奶",
        "letter": "grandma",
        "pinyin": "nǎinai"
    },
    "73": {
        "character": "叔叔",
        "letter": "uncle",
        "pinyin": "shūshu"
    },
    "74": {
        "character": "阿姨",
        "letter": "aunt or maid",
        "pinyin": "āyí"
    },
    "75": {
        "character": "朋友",
        "letter": "friend",
        "pinyin": "péngyǒu"
    },
    "76": {
        "character": "客人",
        "letter": "guest",
        "pinyin": "kèren"
    },
    "77": {
        "character": "邻居",
        "letter": "neighbor",
        "pinyin": "línjū"
    },
    "78": {
        "character": "先生",
        "letter": "Mr or sir",
        "pinyin": "xiānsheng"
    },
    "79": {
        "character": "小姐",
        "letter": "Miss",
        "pinyin": "xiǎojiě"
    },
    "80": {
        "character": "老师",
        "letter": "teacher",
        "pinyin": "lǎoshī"
    },
    "81": {
        "character": "学生",
        "letter": "student",
        "pinyin": "xuésheng"
    },
    "82": {
        "character": "同学",
        "letter": "schoolmate",
        "pinyin": "tóngxué"
    },
    "83": {
        "character": "同事",
        "letter": "colleague",
        "pinyin": "tóngshì"
    },
    "84": {
        "character": "校长",
        "letter": "head of a school",
        "pinyin": "xiàozhǎng"
    },
    "85": {
        "character": "医生",
        "letter": "doctor",
        "pinyin": "yīshēng"
    },
    "86": {
        "character": "司机",
        "letter": "driver",
        "pinyin": "sījī"
    },
    "87": {
        "character": "服务员",
        "letter": "waiter or waitress",
        "pinyin": "fúwùyuán"
    },
    "88": {
        "character": "经理",
        "letter": "manager",
        "pinyin": "jīnglǐ"
    },
    "89": {
        "character": "身体",
        "letter": "body",
        "pinyin": "shēntǐ"
    },
    "90": {
        "character": "脸",
        "letter": "face",
        "pinyin": "liǎn"
    },
    "91": {
        "character": "眼睛",
        "letter": "eye",
        "pinyin": "yǎnjīng"
    },
    "92": {
        "character": "耳朵",
        "letter": "ear",
        "pinyin": "ěrduo"
    },
    "93": {
        "character": "鼻子",
        "letter": "nose",
        "pinyin": "bízi"
    },
    "94": {
        "character": "口",
        "letter": "mouth",
        "pinyin": "kǒu"
    },
    "95": {
        "character": "头发",
        "letter": "hair",
        "pinyin": "tóufa"
    },
    "96": {
        "character": "腿",
        "letter": "leg",
        "pinyin": "tuǐ"
    },
    "97": {
        "character": "脚",
        "letter": "foot",
        "pinyin": "jiǎo"
    },
    "98": {
        "character": "声音",
        "letter": "sound or voice",
        "pinyin": "shēngyīn"
    },
    "99": {
        "character": "东西",
        "letter": "thing",
        "pinyin": "dōngxi"
    },
    "100": {
        "character": "钱",
        "letter": "money",
        "pinyin": "qián"
    },
    "101": {
        "character": "水",
        "letter": "water",
        "pinyin": "shuǐ"
    },
    "102": {
        "character": "茶",
        "letter": "tea",
        "pinyin": "chá"
    },
    "103": {
        "character": "咖啡",
        "letter": "coffee",
        "pinyin": "kāfēi"
    },
    "104": {
        "character": "牛奶",
        "letter": "milk",
        "pinyin": "niúnǎi"
    },
    "105": {
        "character": "面包",
        "letter": "bread",
        "pinyin": "miànbāo"
    },
    "106": {
        "character": "蛋糕",
        "letter": "cake",
        "pinyin": "dàngāo"
    },
    "107": {
        "character": "糖",
        "letter": "candy or sugar",
        "pinyin": "táng"
    },
    "108": {
        "character": "菜",
        "letter": "dish",
        "pinyin": "cài"
    },
    "109": {
        "character": "米饭",
        "letter": "(cooked) rice",
        "pinyin": "mǐfàn"
    },
    "110": {
        "character": "面条",
        "letter": "noodle",
        "pinyin": "miàntiáo"
    },
    "111": {
        "character": "鸡蛋",
        "letter": "egg",
        "pinyin": "jīdàn"
    },
    "112": {
        "character": "鱼",
        "letter": "fish",
        "pinyin": "yú"
    },
    "113": {
        "character": "羊肉",
        "letter": "lamb or mutton",
        "pinyin": "yángròu"
    },
    "114": {
        "character": "菜单",
        "letter": "menu",
        "pinyin": "càidān"
    },
    "115": {
        "character": "衣服",
        "letter": "clothes",
        "pinyin": "yīfu"
    },
    "116": {
        "character": "衬衫",
        "letter": "shirt",
        "pinyin": "chènshān"
    },
    "117": {
        "character": "裤子",
        "letter": "pants",
        "pinyin": "kùzi"
    },
    "118": {
        "character": "裙子",
        "letter": "skirt",
        "pinyin": "qúnzi"
    },
    "119": {
        "character": "帽子",
        "letter": "hat or cap",
        "pinyin": "màozi"
    },
    "120": {
        "character": "鞋",
        "letter": "shoe",
        "pinyin": "xié"
    },
    "121": {
        "character": "包",
        "letter": "bag",
        "pinyin": "bāo"
    },
    "122": {
        "character": "行李箱",
        "letter": "suitcase",
        "pinyin": "xínglǐxiāng"
    },
    "123": {
        "character": "伞",
        "letter": "umbrella",
        "pinyin": "sǎn"
    },
    "124": {
        "character": "眼镜",
        "letter": "glasses",
        "pinyin": "yǎnjìng"
    },
    "125": {
        "character": "书",
        "letter": "book",
        "pinyin": "shū"
    },
    "126": {
        "character": "报纸",
        "letter": "newspaper",
        "pinyin": "bàozhǐ"
    },
    "127": {
        "character": "字典",
        "letter": "dictionary",
        "pinyin": "zìdiǎn"
    },
    "128": {
        "character": "地图",
        "letter": "map",
        "pinyin": "dìtú"
    },
    "129": {
        "character": "票",
        "letter": "ticket",
        "pinyin": "piào"
    },
    "130": {
        "character": "信",
        "letter": "letter",
        "pinyin": "xìn"
    },
    "131": {
        "character": "照片",
        "letter": "photo",
        "pinyin": "zhàopiàn"
    },
    "132": {
        "character": "护照",
        "letter": "passport",
        "pinyin": "hùzhào"
    },
    "133": {
        "character": "照相机",
        "letter": "camera",
        "pinyin": "zhàoxiàngjī"
    },
    "134": {
        "character": "桌子",
        "letter": "table or desk",
        "pinyin": "zhuōzi"
    },
    "135": {
        "character": "椅子",
        "letter": "chair",
        "pinyin": "yǐzi"
    },
    "136": {
        "character": "黑板",
        "letter": "blackboard",
        "pinyin": "hēibǎn"
    },
    "137": {
        "character": "铅笔",
        "letter": "pencil",
        "pinyin": "qiānbǐ"
    },
    "138": {
        "character": "水果",
        "letter": "fruit",
        "pinyin": "shuǐguǒ"
    },
    "139": {
        "character": "苹果",
        "letter": "apple",
        "pinyin": "píngguǒ"
    },
    "140": {
        "character": "香蕉",
        "letter": "banana",
        "pinyin": "xiāngjiāo"
    },
    "141": {
        "character": "西瓜",
        "letter": "watermelon",
        "pinyin": "xīguā"
    },
    "142": {
        "character": "葡萄",
        "letter": "grape",
        "pinyin": "pútáo"
    },
    "143": {
        "character": "果汁",
        "letter": "juice",
        "pinyin": "guǒzhī"
    },
    "144": {
        "character": "啤酒",
        "letter": "beer",
        "pinyin": "píjiǔ"
    },
    "145": {
        "character": "草",
        "letter": "grass",
        "pinyin": "cǎo"
    },
    "146": {
        "character": "药",
        "letter": "medicine",
        "pinyin": "yào"
    },
    "147": {
        "character": "杯子",
        "letter": "cup or glass",
        "pinyin": "bēizi"
    },
    "148": {
        "character": "碗",
        "letter": "bowl",
        "pinyin": "wǎn"
    },
    "149": {
        "character": "筷子",
        "letter": "chopsticks",
        "pinyin": "kuàizi"
    },
    "150": {
        "character": "盘子",
        "letter": "plate",
        "pinyin": "pánzi"
    },
    "151": {
        "character": "手表",
        "letter": "watch",
        "pinyin": "shǒubiǎo"
    },
    "152": {
        "character": "手机",
        "letter": "mobile phone",
        "pinyin": "shǒujī"
    },
    "153": {
        "character": "电视",
        "letter": "TV",
        "pinyin": "diànshì"
    },
    "154": {
        "character": "电脑",
        "letter": "computer",
        "pinyin": "diànnǎo"
    },
    "155": {
        "character": "电子邮件",
        "letter": "email",
        "pinyin": "diànzǐ yóujiàn"
    },
    "156": {
        "character": "冰箱",
        "letter": "refrigerator",
        "pinyin": "bīngxiāng"
    },
    "157": {
        "character": "空调",
        "letter": "air conditioner",
        "pinyin": "kōngtiáo"
    },
    "158": {
        "character": "灯",
        "letter": "light",
        "pinyin": "dēng"
    },
    "159": {
        "character": "电影",
        "letter": "movie",
        "pinyin": "diànyǐng"
    },
    "160": {
        "character": "礼物",
        "letter": "gift",
        "pinyin": "lǐwù"
    },
    "161": {
        "character": "飞机",
        "letter": "plane",
        "pinyin": "fēijī"
    },
    "162": {
        "character": "出租车",
        "letter": "taxi",
        "pinyin": "chūzūchē"
    },
    "163": {
        "character": "公共汽车",
        "letter": "bus",
        "pinyin": "gōnggòng qìchē"
    },
    "164": {
        "character": "地铁",
        "letter": "metro",
        "pinyin": "dìtiě"
    },
    "165": {
        "character": "自行车",
        "letter": "bike",
        "pinyin": "zìxíngchē"
    },
    "166": {
        "character": "船",
        "letter": "boat",
        "pinyin": "chuán"
    },
    "167": {
        "character": "门",
        "letter": "door",
        "pinyin": "mén"
    },
    "168": {
        "character": "电梯",
        "letter": "elevator",
        "pinyin": "diàntī"
    },
    "169": {
        "character": "颜色",
        "letter": "color",
        "pinyin": "yánsè"
    },
    "170": {
        "character": "动物",
        "letter": "animal",
        "pinyin": "dòngwù"
    },
    "171": {
        "character": "猫",
        "letter": "cat",
        "pinyin": "māo"
    },
    "172": {
        "character": "狗",
        "letter": "dog",
        "pinyin": "gǒu"
    },
    "173": {
        "character": "马",
        "letter": "horse",
        "pinyin": "mǎ"
    },
    "174": {
        "character": "熊猫",
        "letter": "panda",
        "pinyin": "xióngmāo"
    },
    "175": {
        "character": "鸟",
        "letter": "bird",
        "pinyin": "niǎo"
    },
    "176": {
        "character": "树",
        "letter": "tree",
        "pinyin": "shù"
    },
    "177": {
        "character": "天气",
        "letter": "weather",
        "pinyin": "tiānqì"
    },
    "178": {
        "character": "太阳",
        "letter": "sun",
        "pinyin": "tàiyáng"
    },
    "179": {
        "character": "月亮",
        "letter": "moon",
        "pinyin": "yuèliang"
    },
    "180": {
        "character": "云",
        "letter": "cloud",
        "pinyin": "yún"
    },
    "181": {
        "character": "雪",
        "letter": "snow",
        "pinyin": "xuě"
    },
    "182": {
        "character": "字",
        "letter": "character",
        "pinyin": "zì"
    },
    "183": {
        "character": "词语",
        "letter": "word",
        "pinyin": "cíyǔ"
    },
    "184": {
        "character": "句子",
        "letter": "sentence",
        "pinyin": "jùzi"
    },
    "185": {
        "character": "汉语",
        "letter": "Chinese (language)",
        "pinyin": "Hànyǔ"
    },
    "186": {
        "character": "普通话",
        "letter": "(standard) Mandarin",
        "pinyin": "pǔtōnghuà"
    },
    "187": {
        "character": "数学",
        "letter": "math",
        "pinyin": "shùxué"
    },
    "188": {
        "character": "课",
        "letter": "lesson",
        "pinyin": "kè"
    },
    "189": {
        "character": "班",
        "letter": "class",
        "pinyin": "bān"
    },
    "190": {
        "character": "年级",
        "letter": "grade",
        "pinyin": "niánjí"
    },
    "191": {
        "character": "作业",
        "letter": "homework",
        "pinyin": "zuòyè"
    },
    "192": {
        "character": "考试",
        "letter": "exam",
        "pinyin": "kǎoshì"
    },
    "193": {
        "character": "成绩",
        "letter": "score",
        "pinyin": "chéngjì"
    },
    "194": {
        "character": "水平",
        "letter": "level or standard",
        "pinyin": "shuǐpíng"
    },
    "195": {
        "character": "问题",
        "letter": "question",
        "pinyin": "wèntí"
    },
    "196": {
        "character": "题",
        "letter": "question (exam, exercise)",
        "pinyin": "tí"
    },
    "197": {
        "character": "意思",
        "letter": "meaning",
        "pinyin": "yìsi"
    },
    "198": {
        "character": "事情",
        "letter": "matter",
        "pinyin": "shìqing"
    },
    "199": {
        "character": "兴趣",
        "letter": "interest",
        "pinyin": "xìngqù"
    },
    "200": {
        "character": "爱好",
        "letter": "hobby",
        "pinyin": "àihào"
    },
    "201": {
        "character": "音乐",
        "letter": "music",
        "pinyin": "yīnyuè"
    },
    "202": {
        "character": "体育",
        "letter": "sports or physical education",
        "pinyin": "tǐyù"
    },
    "203": {
        "character": "办法",
        "letter": "method",
        "pinyin": "bànfǎ"
    },
    "204": {
        "character": "习惯",
        "letter": "habit",
        "pinyin": "xíguàn"
    },
    "205": {
        "character": "比赛",
        "letter": "match",
        "pinyin": "bǐsài"
    },
    "206": {
        "character": "游戏",
        "letter": "game",
        "pinyin": "yóuxì"
    },
    "207": {
        "character": "故事",
        "letter": "story",
        "pinyin": "gùshi"
    },
    "208": {
        "character": "关系",
        "letter": "relation",
        "pinyin": "guānxì"
    },
    "209": {
        "character": "环境",
        "letter": "environment",
        "pinyin": "huánjìng"
    },
    "210": {
        "character": "会议",
        "letter": "meeting",
        "pinyin": "huìyì"
    },
    "211": {
        "character": "机会",
        "letter": "opportunity or chance",
        "pinyin": "jīhuì"
    },
    "212": {
        "character": "节目",
        "letter": "program",
        "pinyin": "jiémù"
    },
    "213": {
        "character": "世界",
        "letter": "world",
        "pinyin": "shìjiè"
    },
    "214": {
        "character": "历史",
        "letter": "history",
        "pinyin": "lìshǐ"
    },
    "215": {
        "character": "文化",
        "letter": "culture",
        "pinyin": "wénhuà"
    },
    "216": {
        "character": "新闻",
        "letter": "news",
        "pinyin": "xīnwén"
    },
    "217": {
        "character": "作用",
        "letter": "effect",
        "pinyin": "zuòyòng"
    },
    "218": {
        "character": "中国",
        "letter": "China",
        "pinyin": "Zhōngguó"
    },
    "219": {
        "character": "北京",
        "letter": "Beijing",
        "pinyin": "Běijīng"
    },
    "220": {
        "character": "国家",
        "letter": "nation",
        "pinyin": "guójiā"
    },
    "221": {
        "character": "城市",
        "letter": "city",
        "pinyin": "chéngshì"
    },
    "222": {
        "character": "地方",
        "letter": "place",
        "pinyin": "dìfāng"
    },
    "223": {
        "character": "家",
        "letter": "home or family",
        "pinyin": "jiā"
    },
    "224": {
        "character": "楼",
        "letter": "building or floor",
        "pinyin": "lóu"
    },
    "225": {
        "character": "房间",
        "letter": "room",
        "pinyin": "fángjiān"
    },
    "226": {
        "character": "厨房",
        "letter": "kitchen",
        "pinyin": "chúfáng"
    },
    "227": {
        "character": "洗手间",
        "letter": "washroom",
        "pinyin": "xǐshǒujiān"
    },
    "228": {
        "character": "学校",
        "letter": "school",
        "pinyin": "xuéxiào"
    },
    "229": {
        "character": "教室",
        "letter": "classroom",
        "pinyin": "jiàoshì"
    },
    "230": {
        "character": "图书馆",
        "letter": "library",
        "pinyin": "túshūguǎn"
    },
    "231": {
        "character": "公司",
        "letter": "company",
        "pinyin": "gōngsī"
    },
    "232": {
        "character": "办公室",
        "letter": "office",
        "pinyin": "bàngōngshì"
    },
    "233": {
        "character": "饭馆",
        "letter": "restaurant",
        "pinyin": "fànguǎn"
    },
    "234": {
        "character": "宾馆",
        "letter": "hotel",
        "pinyin": "bīngguǎn"
    },
    "235": {
        "character": "商店",
        "letter": "shop",
        "pinyin": "shāngdiàn"
    },
    "236": {
        "character": "超市",
        "letter": "supermarket",
        "pinyin": "chāoshì"
    },
    "237": {
        "character": "公园",
        "letter": "park",
        "pinyin": "gōngyuán"
    },
    "238": {
        "character": "花园",
        "letter": "garden",
        "pinyin": "huāyuán"
    },
    "239": {
        "character": "银行",
        "letter": "bank",
        "pinyin": "yínháng"
    },
    "240": {
        "character": "医院",
        "letter": "hospital",
        "pinyin": "yīyuàn"
    },
    "241": {
        "character": "机场",
        "letter": "airport",
        "pinyin": "jīchǎng"
    },
    "242": {
        "character": "火车站",
        "letter": "train station",
        "pinyin": "huǒchēzhàn"
    },
    "243": {
        "character": "路",
        "letter": "road",
        "pinyin": "lù"
    },
    "244": {
        "character": "街道",
        "letter": "street",
        "pinyin": "jiēdào"
    },
    "245": {
        "character": "河",
        "letter": "river",
        "pinyin": "hé"
    },
    "246": {
        "character": "上",
        "letter": "on, above or last",
        "pinyin": "shàng"
    },
    "247": {
        "character": "下",
        "letter": "under, below or next",
        "pinyin": "xià"
    },
    "248": {
        "character": "左边",
        "letter": "left",
        "pinyin": "zuǒbiān"
    },
    "249": {
        "character": "右边",
        "letter": "right",
        "pinyin": "yòubiān"
    },
    "250": {
        "character": "中间",
        "letter": "middle",
        "pinyin": "zhōngjiān"
    },
    "251": {
        "character": "旁边",
        "letter": "side",
        "pinyin": "pángbiān"
    },
    "252": {
        "character": "附近",
        "letter": "surrounding area",
        "pinyin": "fùjìn"
    },
    "253": {
        "character": "前面",
        "letter": "front",
        "pinyin": "qiánmiàn"
    },
    "254": {
        "character": "后面",
        "letter": "back",
        "pinyin": "hòumiàn"
    },
    "255": {
        "character": "里",
        "letter": "inside",
        "pinyin": "lǐ"
    },
    "256": {
        "character": "外",
        "letter": "outside",
        "pinyin": "wài"
    },
    "257": {
        "character": "东",
        "letter": "east",
        "pinyin": "dōng"
    },
    "258": {
        "character": "南",
        "letter": "south",
        "pinyin": "nán"
    },
    "259": {
        "character": "西",
        "letter": "west",
        "pinyin": "xī"
    },
    "260": {
        "character": "北方",
        "letter": "north or northern China",
        "pinyin": "běifāng"
    },
    "261": {
        "character": "个",
        "letter": "generic measure word",
        "pinyin": "gè"
    },
    "262": {
        "character": "元",
        "letter": "basic monetary unit of China",
        "pinyin": "yuán"
    },
    "263": {
        "character": "块",
        "letter": "basic monetary unit of China",
        "pinyin": "kuài"
    },
    "264": {
        "character": "角",
        "letter": "1/10 of Chinese Yuan",
        "pinyin": "jiǎo"
    },
    "265": {
        "character": "位",
        "letter": "measure word for people",
        "pinyin": "wèi"
    },
    "266": {
        "character": "本",
        "letter": "for books",
        "pinyin": "běn"
    },
    "267": {
        "character": "岁",
        "letter": "year (of age)",
        "pinyin": "suì"
    },
    "268": {
        "character": "些",
        "letter": "some",
        "pinyin": "xiē"
    },
    "269": {
        "character": "次",
        "letter": "time (frequency of an act)",
        "pinyin": "cì"
    },
    "270": {
        "character": "公斤",
        "letter": "kilo",
        "pinyin": "gōngjīn"
    },
    "271": {
        "character": "米",
        "letter": "meter",
        "pinyin": "mǐ"
    },
    "272": {
        "character": "件",
        "letter": "for affairs, clothes, furniture",
        "pinyin": "jiàn"
    },
    "273": {
        "character": "张",
        "letter": "for flat objects",
        "pinyin": "zhāng"
    },
    "274": {
        "character": "条",
        "letter": "for long objects",
        "pinyin": "tiáo"
    },
    "275": {
        "character": "辆",
        "letter": "for vehicles",
        "pinyin": "liàng"
    },
    "276": {
        "character": "把",
        "letter": "for things with a handle",
        "pinyin": "bǎ"
    },
    "277": {
        "character": "种",
        "letter": "type",
        "pinyin": "zhǒng"
    },
    "278": {
        "character": "层",
        "letter": "floor",
        "pinyin": "céng"
    },
    "279": {
        "character": "双",
        "letter": "pair",
        "pinyin": "shuāng"
    },
    "280": {
        "character": "段",
        "letter": "span of time or distance",
        "pinyin": "duàn"
    },
    "281": {
        "character": "刻",
        "letter": "quarter (time)",
        "pinyin": "kè"
    },
    "282": {
        "character": "做",
        "letter": "to do",
        "pinyin": "zuò"
    },
    "283": {
        "character": "是",
        "letter": "to be",
        "pinyin": "shì"
    },
    "284": {
        "character": "姓",
        "letter": "to be surnamed",
        "pinyin": "xìng"
    },
    "285": {
        "character": "在",
        "letter": "to be in",
        "pinyin": "zài"
    },
    "286": {
        "character": "有",
        "letter": "to have",
        "pinyin": "yǒu"
    },
    "287": {
        "character": "住",
        "letter": "to live or to stay",
        "pinyin": "zhù"
    },
    "288": {
        "character": "来",
        "letter": "to come",
        "pinyin": "lái"
    },
    "289": {
        "character": "去",
        "letter": "to go",
        "pinyin": "qù"
    },
    "290": {
        "character": "回",
        "letter": "to return",
        "pinyin": "huí"
    },
    "291": {
        "character": "进",
        "letter": "to enter",
        "pinyin": "jìn"
    },
    "292": {
        "character": "出",
        "letter": "to get out",
        "pinyin": "chū"
    },
    "293": {
        "character": "到",
        "letter": "to arrive",
        "pinyin": "dào"
    },
    "294": {
        "character": "想",
        "letter": "to think",
        "pinyin": "xiǎng"
    },
    "295": {
        "character": "要",
        "letter": "to want",
        "pinyin": "yào"
    },
    "296": {
        "character": "需要",
        "letter": "to need",
        "pinyin": "xūyào"
    },
    "297": {
        "character": "吃",
        "letter": "to eat",
        "pinyin": "chī"
    },
    "298": {
        "character": "喝",
        "letter": "to drink",
        "pinyin": "hē"
    },
    "299": {
        "character": "说话",
        "letter": "to speak",
        "pinyin": "shuōhuà"
    },
    "300": {
        "character": "讲",
        "letter": "to say or to speak",
        "pinyin": "jiǎng"
    },
    "301": {
        "character": "告诉",
        "letter": "to tell",
        "pinyin": "gàosù"
    },
    "302": {
        "character": "问",
        "letter": "to ask",
        "pinyin": "wèn"
    },
    "303": {
        "character": "回答",
        "letter": "to answer",
        "pinyin": "huídá"
    },
    "304": {
        "character": "看",
        "letter": "to look or to watch",
        "pinyin": "kàn"
    },
    "305": {
        "character": "看见",
        "letter": "to see",
        "pinyin": "kànjiàn"
    },
    "306": {
        "character": "听",
        "letter": "to listen",
        "pinyin": "tīng"
    },
    "307": {
        "character": "笑",
        "letter": "to smile or to laugh",
        "pinyin": "xiào"
    },
    "308": {
        "character": "哭",
        "letter": "to cry",
        "pinyin": "kū"
    },
    "309": {
        "character": "见面",
        "letter": "to meet",
        "pinyin": "jiànmiàn"
    },
    "310": {
        "character": "遇到",
        "letter": "to encounter",
        "pinyin": "yùdào"
    },
    "311": {
        "character": "给",
        "letter": "to give",
        "pinyin": "gěi"
    },
    "312": {
        "character": "送",
        "letter": "to give as a gift or to deliver",
        "pinyin": "sòng"
    },
    "313": {
        "character": "带",
        "letter": "to bring",
        "pinyin": "dài"
    },
    "314": {
        "character": "拿",
        "letter": "to hold or to take",
        "pinyin": "ná"
    },
    "315": {
        "character": "放",
        "letter": "to put",
        "pinyin": "fàng"
    },
    "316": {
        "character": "叫",
        "letter": "to call",
        "pinyin": "jiào"
    },
    "317": {
        "character": "买",
        "letter": "to buy",
        "pinyin": "mǎi"
    },
    "318": {
        "character": "卖",
        "letter": "to sell",
        "pinyin": "mài"
    },
    "319": {
        "character": "穿",
        "letter": "to wear",
        "pinyin": "chuān"
    },
    "320": {
        "character": "开",
        "letter": "to drive or to open",
        "pinyin": "kāi"
    },
    "321": {
        "character": "关",
        "letter": "to close or to shut",
        "pinyin": "guān"
    },
    "322": {
        "character": "坐",
        "letter": "to sit",
        "pinyin": "zuò"
    },
    "323": {
        "character": "站",
        "letter": "to stand",
        "pinyin": "zhàn"
    },
    "324": {
        "character": "读",
        "letter": "to read",
        "pinyin": "dú"
    },
    "325": {
        "character": "写",
        "letter": "to write",
        "pinyin": "xiě"
    },
    "326": {
        "character": "画",
        "letter": "to draw or to paint",
        "pinyin": "huà"
    },
    "327": {
        "character": "等",
        "letter": "to wait",
        "pinyin": "děng"
    },
    "328": {
        "character": "花",
        "letter": "to spend or to cost",
        "pinyin": "huā"
    },
    "329": {
        "character": "打电话",
        "letter": "to make a phone call",
        "pinyin": "dǎ diànhuà"
    },
    "330": {
        "character": "介绍",
        "letter": "to introduce",
        "pinyin": "jièshào"
    },
    "331": {
        "character": "认识",
        "letter": "to know",
        "pinyin": "rènshi"
    },
    "332": {
        "character": "知道",
        "letter": "to know",
        "pinyin": "zhīdao"
    },
    "333": {
        "character": "了解",
        "letter": "to know well",
        "pinyin": "liǎojiě"
    },
    "334": {
        "character": "觉得",
        "letter": "to feel or to think",
        "pinyin": "juédé"
    },
    "335": {
        "character": "认为",
        "letter": "to think or to consider",
        "pinyin": "rènwéi"
    },
    "336": {
        "character": "以为",
        "letter": "to think (wrongly)",
        "pinyin": "yǐwéi"
    },
    "337": {
        "character": "懂",
        "letter": "to understand",
        "pinyin": "dǒng"
    },
    "338": {
        "character": "明白",
        "letter": "to understand",
        "pinyin": "míngbai"
    },
    "339": {
        "character": "找",
        "letter": "to find",
        "pinyin": "zhǎo"
    },
    "340": {
        "character": "发现",
        "letter": "to discover",
        "pinyin": "fāxiàn"
    },
    "341": {
        "character": "记得",
        "letter": "to remember",
        "pinyin": "jìde"
    },
    "342": {
        "character": "忘记",
        "letter": "to forget",
        "pinyin": "wàngjì"
    },
    "343": {
        "character": "让",
        "letter": "to let",
        "pinyin": "ràng"
    },
    "344": {
        "character": "使",
        "letter": "to make",
        "pinyin": "shǐ"
    },
    "345": {
        "character": "用",
        "letter": "to use",
        "pinyin": "yòng"
    },
    "346": {
        "character": "希望",
        "letter": "to hope",
        "pinyin": "xīwàng"
    },
    "347": {
        "character": "帮助",
        "letter": "to help",
        "pinyin": "bāngzhù"
    },
    "348": {
        "character": "帮忙",
        "letter": "to help",
        "pinyin": "bāngmáng"
    },
    "349": {
        "character": "玩",
        "letter": "to play",
        "pinyin": "wán"
    },
    "350": {
        "character": "学习",
        "letter": "to learn",
        "pinyin": "xuéxí"
    },
    "351": {
        "character": "教",
        "letter": "to teach",
        "pinyin": "jiāo"
    },
    "352": {
        "character": "复习",
        "letter": "to review",
        "pinyin": "fùxí"
    },
    "353": {
        "character": "上网",
        "letter": "to get online",
        "pinyin": "shàngwǎng"
    },
    "354": {
        "character": "工作",
        "letter": "to work",
        "pinyin": "gōngzuò"
    },
    "355": {
        "character": "上班",
        "letter": "to go to work",
        "pinyin": "shàng bān"
    },
    "356": {
        "character": "睡觉",
        "letter": "to sleep",
        "pinyin": "shuìjiào"
    },
    "357": {
        "character": "起床",
        "letter": "to get up",
        "pinyin": "qǐ chuáng"
    },
    "358": {
        "character": "刷牙",
        "letter": "to brush teeth",
        "pinyin": "shuāyá"
    },
    "359": {
        "character": "洗澡",
        "letter": "to bathe",
        "pinyin": "xǐzǎo"
    },
    "360": {
        "character": "喜欢",
        "letter": "to like",
        "pinyin": "xǐhuan"
    },
    "361": {
        "character": "爱",
        "letter": "to love",
        "pinyin": "ài"
    },
    "362": {
        "character": "唱歌",
        "letter": "to sing",
        "pinyin": "chàng gē"
    },
    "363": {
        "character": "跳舞",
        "letter": "to dance",
        "pinyin": "tiào wǔ"
    },
    "364": {
        "character": "旅游",
        "letter": "to travel",
        "pinyin": "lǚyóu"
    },
    "365": {
        "character": "运动",
        "letter": "to do sports",
        "pinyin": "yùndòng"
    },
    "366": {
        "character": "走",
        "letter": "to walk",
        "pinyin": "zǒu"
    },
    "367": {
        "character": "跑步",
        "letter": "to run",
        "pinyin": "pǎo bù"
    },
    "368": {
        "character": "游泳",
        "letter": "to swim",
        "pinyin": "yóu yǒng"
    },
    "369": {
        "character": "骑",
        "letter": "to ride",
        "pinyin": "qí"
    },
    "370": {
        "character": "踢足球",
        "letter": "to play soccer",
        "pinyin": "tī zúqiú"
    },
    "371": {
        "character": "打篮球",
        "letter": "to play basketball",
        "pinyin": "dǎ lánqiú"
    },
    "372": {
        "character": "爬山",
        "letter": "to climb mountain",
        "pinyin": "pá shān"
    },
    "373": {
        "character": "锻炼",
        "letter": "to work out",
        "pinyin": "duànliàn"
    },
    "374": {
        "character": "休息",
        "letter": "to rest",
        "pinyin": "xiūxi"
    },
    "375": {
        "character": "生病",
        "letter": "to get sick",
        "pinyin": "shēng bìng"
    },
    "376": {
        "character": "发烧",
        "letter": "to have a fever",
        "pinyin": "fāshāo"
    },
    "377": {
        "character": "感冒",
        "letter": "to have a cold",
        "pinyin": "gǎnmào"
    },
    "378": {
        "character": "疼",
        "letter": "to ache",
        "pinyin": "téng"
    },
    "379": {
        "character": "洗",
        "letter": "to wash",
        "pinyin": "xǐ"
    },
    "380": {
        "character": "开始",
        "letter": "to begin",
        "pinyin": "kāishǐ"
    },
    "381": {
        "character": "完",
        "letter": "to finish",
        "pinyin": "wán"
    },
    "382": {
        "character": "结束",
        "letter": "to end",
        "pinyin": "jiéshù"
    },
    "383": {
        "character": "完成",
        "letter": "to complete or accomplish",
        "pinyin": "wánchéng"
    },
    "384": {
        "character": "打算",
        "letter": "to plan",
        "pinyin": "dǎsuàn"
    },
    "385": {
        "character": "决定",
        "letter": "to decide",
        "pinyin": "juédìng"
    },
    "386": {
        "character": "选择",
        "letter": "to choose",
        "pinyin": "xuǎnzé"
    },
    "387": {
        "character": "准备.",
        "letter": "to prepare",
        "pinyin": "zhǔnbèi"
    },
    "388": {
        "character": "同意",
        "letter": "to agree",
        "pinyin": "tóngyì"
    },
    "389": {
        "character": "解决",
        "letter": "to solve",
        "pinyin": "jiějué"
    },
    "390": {
        "character": "担心",
        "letter": "to worry",
        "pinyin": "dānxīn"
    },
    "391": {
        "character": "生气",
        "letter": "to get angry",
        "pinyin": "shēngqì"
    },
    "392": {
        "character": "欢迎",
        "letter": "to welcome",
        "pinyin": "huānyíng"
    },
    "393": {
        "character": "搬",
        "letter": "to move",
        "pinyin": "bān"
    },
    "394": {
        "character": "还",
        "letter": "still",
        "pinyin": "hái"
    },
    "395": {
        "character": "接",
        "letter": "to catch or to pick up",
        "pinyin": "jiē"
    },
    "396": {
        "character": "比较",
        "letter": "to compare",
        "pinyin": "bǐjiào"
    },
    "397": {
        "character": "变化",
        "letter": "to change",
        "pinyin": "biànhuà"
    },
    "398": {
        "character": "换",
        "letter": "to exchange",
        "pinyin": "huàn"
    },
    "399": {
        "character": "借",
        "letter": "to borrow or to lend",
        "pinyin": "jiè"
    },
    "400": {
        "character": "表示",
        "letter": "to express",
        "pinyin": "biǎoshì"
    },
    "401": {
        "character": "要求",
        "letter": "to require",
        "pinyin": "yāoqiú"
    },
    "402": {
        "character": "祝",
        "letter": "to wish",
        "pinyin": "zhù"
    },
    "403": {
        "character": "注意",
        "letter": "to pay attention to",
        "pinyin": "zhùyì"
    },
    "404": {
        "character": "表演",
        "letter": "to perform",
        "pinyin": "biǎoyǎn"
    },
    "405": {
        "character": "参加",
        "letter": "to attend",
        "pinyin": "cānjiā"
    },
    "406": {
        "character": "迟到",
        "letter": "to be late",
        "pinyin": "chídào"
    },
    "407": {
        "character": "出现",
        "letter": "to appear",
        "pinyin": "chūxiàn"
    },
    "408": {
        "character": "离开",
        "letter": "to leave",
        "pinyin": "líkāi"
    },
    "409": {
        "character": "经过",
        "letter": "to pass",
        "pinyin": "jīngguò"
    },
    "410": {
        "character": "练习",
        "letter": "to practice",
        "pinyin": "liànxí"
    },
    "411": {
        "character": "提高",
        "letter": "to improve",
        "pinyin": "tígāo"
    },
    "412": {
        "character": "检查",
        "letter": "to check",
        "pinyin": "jiǎnchá"
    },
    "413": {
        "character": "打扫",
        "letter": "to clean",
        "pinyin": "dǎsǎo"
    },
    "414": {
        "character": "相信",
        "letter": "to believe",
        "pinyin": "xiāngxìn"
    },
    "415": {
        "character": "放心",
        "letter": "to rest assured",
        "pinyin": "fàngxīn"
    },
    "416": {
        "character": "着急",
        "letter": "to worry",
        "pinyin": "zháojí"
    },
    "417": {
        "character": "关心",
        "letter": "to concern",
        "pinyin": "guānxīn"
    },
    "418": {
        "character": "照顾",
        "letter": "to look after",
        "pinyin": "zhàogù"
    },
    "419": {
        "character": "分",
        "letter": "to divide or separate",
        "pinyin": "fēn"
    },
    "420": {
        "character": "长",
        "letter": "long",
        "pinyin": "cháng"
    },
    "421": {
        "character": "敢",
        "letter": "to dare",
        "pinyin": "gǎn"
    },
    "422": {
        "character": "害怕",
        "letter": "to fear",
        "pinyin": "hàipà"
    },
    "423": {
        "character": "小心",
        "letter": "to be careful",
        "pinyin": "xiǎoxīn"
    },
    "424": {
        "character": "影响",
        "letter": "to affect",
        "pinyin": "yǐngxiǎng"
    },
    "425": {
        "character": "结婚",
        "letter": "to marry",
        "pinyin": "jiéhūn"
    },
    "426": {
        "character": "举行",
        "letter": "to hold (event)",
        "pinyin": "jǔxíng"
    },
    "427": {
        "character": "会",
        "letter": "can (to know how to)",
        "pinyin": "huì"
    },
    "428": {
        "character": "能",
        "letter": "can (to be able to)",
        "pinyin": "néng"
    },
    "429": {
        "character": "可以",
        "letter": "can (to be permitted to)",
        "pinyin": "kěyǐ"
    },
    "430": {
        "character": "必须",
        "letter": "must",
        "pinyin": "bìxū"
    },
    "431": {
        "character": "应该",
        "letter": "should",
        "pinyin": "yīnggāi"
    },
    "432": {
        "character": "愿意",
        "letter": "to be willing to",
        "pinyin": "yuànyì"
    },
    "433": {
        "character": "下雨",
        "letter": "to rain",
        "pinyin": "xià yǔ"
    },
    "434": {
        "character": "刮风",
        "letter": "to blow (wind)",
        "pinyin": "guā fēng"
    },
    "435": {
        "character": "好",
        "letter": "good",
        "pinyin": "hǎo"
    },
    "436": {
        "character": "坏",
        "letter": "bad",
        "pinyin": "huài"
    },
    "437": {
        "character": "差",
        "letter": "bad (in quality)",
        "pinyin": "chà"
    },
    "438": {
        "character": "大",
        "letter": "big",
        "pinyin": "dà"
    },
    "439": {
        "character": "小",
        "letter": "small",
        "pinyin": "xiǎo"
    },
    "440": {
        "character": "多",
        "letter": "many",
        "pinyin": "duō"
    },
    "441": {
        "character": "少",
        "letter": "few",
        "pinyin": "shǎo"
    },
    "442": {
        "character": "热",
        "letter": "hot",
        "pinyin": "rè"
    },
    "443": {
        "character": "冷",
        "letter": "cold",
        "pinyin": "lěng"
    },
    "444": {
        "character": "快",
        "letter": "fast",
        "pinyin": "kuài"
    },
    "445": {
        "character": "慢",
        "letter": "slow",
        "pinyin": "màn"
    },
    "446": {
        "character": "远",
        "letter": "far",
        "pinyin": "yuǎn"
    },
    "447": {
        "character": "近",
        "letter": "near",
        "pinyin": "jìn"
    },
    "448": {
        "character": "对",
        "letter": "right",
        "pinyin": "duì"
    },
    "449": {
        "character": "错",
        "letter": "wrong",
        "pinyin": "cuò"
    },
    "450": {
        "character": "久",
        "letter": "long (in time)",
        "pinyin": "jiǔ"
    },
    "451": {
        "character": "短",
        "letter": "short",
        "pinyin": "duǎn"
    },
    "452": {
        "character": "高",
        "letter": "tall or high",
        "pinyin": "gāo"
    },
    "453": {
        "character": "矮",
        "letter": "short (in height)",
        "pinyin": "ǎi"
    },
    "454": {
        "character": "低",
        "letter": "low",
        "pinyin": "dī"
    },
    "455": {
        "character": "胖",
        "letter": "fat",
        "pinyin": "pàng"
    },
    "456": {
        "character": "瘦",
        "letter": "thin",
        "pinyin": "shòu"
    },
    "457": {
        "character": "新",
        "letter": "new",
        "pinyin": "xīn"
    },
    "458": {
        "character": "旧",
        "letter": "old or used",
        "pinyin": "jiù"
    },
    "459": {
        "character": "年轻",
        "letter": "young",
        "pinyin": "niánqīng"
    },
    "460": {
        "character": "老",
        "letter": "old (in age)",
        "pinyin": "lǎo"
    },
    "461": {
        "character": "贵",
        "letter": "expensive",
        "pinyin": "guì"
    },
    "462": {
        "character": "便宜",
        "letter": "cheap",
        "pinyin": "piányi"
    },
    "463": {
        "character": "黑",
        "letter": "black",
        "pinyin": "hēi"
    },
    "464": {
        "character": "白",
        "letter": "white",
        "pinyin": "bái"
    },
    "465": {
        "character": "红",
        "letter": "red",
        "pinyin": "hóng"
    },
    "466": {
        "character": "黄",
        "letter": "yellow",
        "pinyin": "huáng"
    },
    "467": {
        "character": "蓝",
        "letter": "blue",
        "pinyin": "lán"
    },
    "468": {
        "character": "绿",
        "letter": "green",
        "pinyin": "lǜ"
    },
    "469": {
        "character": "晴",
        "letter": "sunny",
        "pinyin": "qíng"
    },
    "470": {
        "character": "阴",
        "letter": "cloudy",
        "pinyin": "yīn"
    },
    "471": {
        "character": "好吃",
        "letter": "tasty",
        "pinyin": "hǎochī"
    },
    "472": {
        "character": "甜",
        "letter": "sweet",
        "pinyin": "tián"
    },
    "473": {
        "character": "新鲜",
        "letter": "fresh",
        "pinyin": "xīnxiān"
    },
    "474": {
        "character": "容易",
        "letter": "easy",
        "pinyin": "róngyì"
    },
    "475": {
        "character": "简单",
        "letter": "simple",
        "pinyin": "jiǎndān"
    },
    "476": {
        "character": "难",
        "letter": "difficult",
        "pinyin": "nán"
    },
    "477": {
        "character": "奇怪",
        "letter": "strange",
        "pinyin": "qíguài"
    },
    "478": {
        "character": "特别",
        "letter": "special",
        "pinyin": "tèbié"
    },
    "479": {
        "character": "重要",
        "letter": "important",
        "pinyin": "zhòngyào"
    },
    "480": {
        "character": "有名",
        "letter": "famous",
        "pinyin": "yǒumíng"
    },
    "481": {
        "character": "漂亮",
        "letter": "pretty",
        "pinyin": "piàoliang"
    },
    "482": {
        "character": "聪明",
        "letter": "smart",
        "pinyin": "cōngming"
    },
    "483": {
        "character": "可爱",
        "letter": "cute",
        "pinyin": "Kě’ài"
    },
    "484": {
        "character": "高兴",
        "letter": "happy",
        "pinyin": "gāoxìng"
    },
    "485": {
        "character": "快乐",
        "letter": "happy",
        "pinyin": "kuàilè"
    },
    "486": {
        "character": "难过",
        "letter": "sad",
        "pinyin": "nánguò"
    },
    "487": {
        "character": "满意",
        "letter": "satisfied",
        "pinyin": "mǎnyì"
    },
    "488": {
        "character": "忙",
        "letter": "busy",
        "pinyin": "máng"
    },
    "489": {
        "character": "累",
        "letter": "tired",
        "pinyin": "lèi"
    },
    "490": {
        "character": "饿",
        "letter": "hungry",
        "pinyin": "è"
    },
    "491": {
        "character": "渴",
        "letter": "thirsty",
        "pinyin": "kě"
    },
    "492": {
        "character": "饱",
        "letter": "full",
        "pinyin": "bǎo"
    },
    "493": {
        "character": "相同",
        "letter": "same",
        "pinyin": "xiāngtóng"
    },
    "494": {
        "character": "一样",
        "letter": "same",
        "pinyin": "yíyàng"
    },
    "495": {
        "character": "主要",
        "letter": "main",
        "pinyin": "zhǔyào"
    },
    "496": {
        "character": "方便",
        "letter": "convenient",
        "pinyin": "fāngbiàn"
    },
    "497": {
        "character": "安静",
        "letter": "quiet",
        "pinyin": "ānjìng"
    },
    "498": {
        "character": "干净",
        "letter": "clean",
        "pinyin": "gānjìng"
    },
    "499": {
        "character": "清楚",
        "letter": "clear",
        "pinyin": "qīngchu"
    },
    "500": {
        "character": "健康",
        "letter": "healthy",
        "pinyin": "jiànkāng"
    },
    "501": {
        "character": "舒服",
        "letter": "comfortable",
        "pinyin": "shūfu"
    },
    "502": {
        "character": "热情",
        "letter": "enthusiastic",
        "pinyin": "rèqíng"
    },
    "503": {
        "character": "认真",
        "letter": "serious or careful",
        "pinyin": "rènzhēn"
    },
    "504": {
        "character": "努力",
        "letter": "studious or hardworking",
        "pinyin": "nǔlì"
    },
    "505": {
        "character": "很",
        "letter": "very",
        "pinyin": "hěn"
    },
    "506": {
        "character": "非常",
        "letter": "extremely",
        "pinyin": "fēicháng"
    },
    "507": {
        "character": "极",
        "letter": "extremely",
        "pinyin": "jí"
    },
    "508": {
        "character": "太",
        "letter": "too…",
        "pinyin": "tài"
    },
    "509": {
        "character": "多么",
        "letter": "how…",
        "pinyin": "duōme"
    },
    "510": {
        "character": "都",
        "letter": "both or all",
        "pinyin": "dōu"
    },
    "511": {
        "character": "不",
        "letter": "not",
        "pinyin": "bù"
    },
    "512": {
        "character": "没",
        "letter": "not",
        "pinyin": "méi"
    },
    "513": {
        "character": "每",
        "letter": "every",
        "pinyin": "měi"
    },
    "514": {
        "character": "最",
        "letter": "most",
        "pinyin": "zuì"
    },
    "515": {
        "character": "真",
        "letter": "really",
        "pinyin": "zhēn"
    },
    "516": {
        "character": "也",
        "letter": "also",
        "pinyin": "yě"
    },
    "517": {
        "character": "再",
        "letter": "again",
        "pinyin": "zài"
    },
    "518": {
        "character": "又",
        "letter": "again",
        "pinyin": "yòu"
    },
    "519": {
        "character": "只",
        "letter": "only",
        "pinyin": "zhǐ"
    },
    "520": {
        "character": "就",
        "letter": "at once",
        "pinyin": "jiǜ"
    },
    "521": {
        "character": "马上",
        "letter": "immediately",
        "pinyin": "mǎshàng"
    },
    "522": {
        "character": "才",
        "letter": "just",
        "pinyin": "cái"
    },
    "523": {
        "character": "更",
        "letter": "more",
        "pinyin": "gèng"
    },
    "524": {
        "character": "越",
        "letter": "more",
        "pinyin": "yuè"
    },
    "525": {
        "character": "别",
        "letter": "don’t…",
        "pinyin": "bié"
    },
    "526": {
        "character": "先",
        "letter": "first",
        "pinyin": "xiān"
    },
    "527": {
        "character": "已经",
        "letter": "already",
        "pinyin": "yǐjīng"
    },
    "528": {
        "character": "几乎",
        "letter": "almost",
        "pinyin": "jīhū"
    },
    "529": {
        "character": "一定",
        "letter": "definitely",
        "pinyin": "yídìng"
    },
    "530": {
        "character": "一起",
        "letter": "together",
        "pinyin": "yìqǐ"
    },
    "531": {
        "character": "一共",
        "letter": "altogether",
        "pinyin": "yígòng"
    },
    "532": {
        "character": "可能",
        "letter": "maybe",
        "pinyin": "kěnéng"
    },
    "533": {
        "character": "其实",
        "letter": "actually",
        "pinyin": "qíshí"
    },
    "534": {
        "character": "突然",
        "letter": "suddenly",
        "pinyin": "tūrán"
    },
    "535": {
        "character": "正在",
        "letter": "indicating action in progress",
        "pinyin": "zhèngzài"
    },
    "536": {
        "character": "一边",
        "letter": "at the same time",
        "pinyin": "yìbiān"
    },
    "537": {
        "character": "终于",
        "letter": "finally",
        "pinyin": "zhōngyú"
    },
    "538": {
        "character": "总是",
        "letter": "always",
        "pinyin": "zǒngshì"
    },
    "539": {
        "character": "经常",
        "letter": "often",
        "pinyin": "jīngcháng"
    },
    "540": {
        "character": "一般",
        "letter": "generally",
        "pinyin": "yìbān"
    },
    "541": {
        "character": "一直",
        "letter": "constantly",
        "pinyin": "yìzhí"
    },
    "542": {
        "character": "从",
        "letter": "from",
        "pinyin": "cóng"
    },
    "543": {
        "character": "向",
        "letter": "towards",
        "pinyin": "xiàng"
    },
    "544": {
        "character": "离",
        "letter": "away from",
        "pinyin": "lí"
    },
    "545": {
        "character": "比",
        "letter": "than",
        "pinyin": "bǐ"
    },
    "546": {
        "character": "跟",
        "letter": "with",
        "pinyin": "gēn"
    },
    "547": {
        "character": "被",
        "letter": "by",
        "pinyin": "bèi"
    },
    "548": {
        "character": "为",
        "letter": "for (sb/sth)",
        "pinyin": "wèi"
    },
    "549": {
        "character": "为了",
        "letter": "for (purpose)",
        "pinyin": "wèile"
    },
    "550": {
        "character": "关于",
        "letter": "about, regarding",
        "pinyin": "guānyú"
    },
    "551": {
        "character": "像",
        "letter": "as or like",
        "pinyin": "xiàng"
    },
    "552": {
        "character": "除了",
        "letter": "besides or except",
        "pinyin": "chúle"
    },
    "553": {
        "character": "根据",
        "letter": "according to",
        "pinyin": "gēnjù"
    },
    "554": {
        "character": "的",
        "letter": "possession particle",
        "pinyin": "de"
    },
    "555": {
        "character": "得",
        "letter": "structure particle",
        "pinyin": "de"
    },
    "556": {
        "character": "地",
        "letter": "structure particle",
        "pinyin": "de"
    },
    "557": {
        "character": "了",
        "letter": "aspect particle",
        "pinyin": "le"
    },
    "558": {
        "character": "着",
        "letter": "aspect particle",
        "pinyin": "zhe"
    },
    "559": {
        "character": "过",
        "letter": "aspect particle",
        "pinyin": "guò"
    },
    "560": {
        "character": "吗",
        "letter": "question particle",
        "pinyin": "ma"
    },
    "561": {
        "character": "呢",
        "letter": "question particle",
        "pinyin": "ne"
    },
    "562": {
        "character": "吧",
        "letter": "question particle",
        "pinyin": "ba"
    },
    "563": {
        "character": "啊",
        "letter": "exclamatory particle",
        "pinyin": "a"
    },
    "564": {
        "character": "和",
        "letter": "and",
        "pinyin": "hé"
    },
    "565": {
        "character": "但是",
        "letter": "but",
        "pinyin": "dànshì"
    },
    "566": {
        "character": "虽然",
        "letter": "although",
        "pinyin": "suīrán"
    },
    "567": {
        "character": "因为",
        "letter": "because",
        "pinyin": "yīnwèi"
    },
    "568": {
        "character": "所以",
        "letter": "so",
        "pinyin": "suǒyǐ"
    },
    "569": {
        "character": "还是",
        "letter": "or",
        "pinyin": "háishì"
    },
    "570": {
        "character": "或者",
        "letter": "or",
        "pinyin": "huòzhě"
    },
    "571": {
        "character": "然后",
        "letter": "then, afterwards",
        "pinyin": "ránhòu"
    },
    "572": {
        "character": "如果",
        "letter": "if",
        "pinyin": "rúguǒ"
    },
    "573": {
        "character": "而且",
        "letter": "moreover",
        "pinyin": "érqiě"
    },
    "574": {
        "character": "喂",
        "letter": "hello (on the phone)",
        "pinyin": "wèi"
    },
    "575": {
        "character": "谢谢",
        "letter": "thanks",
        "pinyin": "xièxie"
    },
    "576": {
        "character": "不客气",
        "letter": "you’re welcome",
        "pinyin": "bú kèqi"
    },
    "577": {
        "character": "再见",
        "letter": "goodbye",
        "pinyin": "zàijiàn"
    },
    "578": {
        "character": "请",
        "letter": "please…",
        "pinyin": "qǐng"
    },
    "579": {
        "character": "对不起",
        "letter": "sorry",
        "pinyin": "duìbuqǐ"
    },
    "580": {
        "character": "没关系",
        "letter": "it’s all right",
        "pinyin": "méi guānxi"
    },
    "581": {
        "character": "当然",
        "letter": "of course",
        "pinyin": "dāngrán"
    },
    "582": {
        "character": "零",
        "letter": "zero",
        "pinyin": "líng"
    },
    "583": {
        "character": "一",
        "letter": "one",
        "pinyin": "yī"
    },
    "584": {
        "character": "二",
        "letter": "two",
        "pinyin": "èr"
    },
    "585": {
        "character": "三",
        "letter": "three",
        "pinyin": "sān"
    },
    "586": {
        "character": "四",
        "letter": "four",
        "pinyin": "sì"
    },
    "587": {
        "character": "五",
        "letter": "five",
        "pinyin": "wǔ"
    },
    "588": {
        "character": "六",
        "letter": "six",
        "pinyin": "liù"
    },
    "589": {
        "character": "七",
        "letter": "seven",
        "pinyin": "qī"
    },
    "590": {
        "character": "八",
        "letter": "eight",
        "pinyin": "bā"
    },
    "591": {
        "character": "九",
        "letter": "nine",
        "pinyin": "jiǔ"
    },
    "592": {
        "character": "十",
        "letter": "ten",
        "pinyin": "shí"
    },
    "593": {
        "character": "两",
        "letter": "two",
        "pinyin": "liǎng"
    },
    "594": {
        "character": "百",
        "letter": "hundred",
        "pinyin": "bǎi"
    },
    "595": {
        "character": "千",
        "letter": "thousand",
        "pinyin": "qiān"
    },
    "596": {
        "character": "万",
        "letter": "ten thousand",
        "pinyin": "wàn"
    },
    "597": {
        "character": "第一",
        "letter": "first",
        "pinyin": "dì-yī"
    },
    "598": {
        "character": "半",
        "letter": "half",
        "pinyin": "bàn"
    }
}

const chineseHsk3ChartData = [
   { "subtitle": "", "content": chineseHsk3Map }, 
]