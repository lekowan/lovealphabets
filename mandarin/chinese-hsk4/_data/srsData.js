// Configuration
const localStorageKey = "mandarin" + "Hsk4Vocabulary" + "Srs";
const languageTitle = "Hsk4 Vocabulary";

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

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the HSK4 vocabulary list everyday. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "1": {
        "character": "啊",
        "letter": "exclamatory particle",
        "pinyin": "a"
    },
    "2": {
        "character": "爱",
        "letter": "to love",
        "pinyin": "ài"
    },
    "3": {
        "character": "矮",
        "letter": "short (in height)",
        "pinyin": "ǎi"
    },
    "4": {
        "character": "爱好",
        "letter": "hobby",
        "pinyin": "àihào"
    },
    "5": {
        "character": "爱情",
        "letter": "love, romance",
        "pinyin": "àiqíng"
    },
    "6": {
        "character": "安静",
        "letter": "quiet",
        "pinyin": "ānjìng"
    },
    "7": {
        "character": "安排",
        "letter": "arrangement, set up",
        "pinyin": "ānpái"
    },
    "8": {
        "character": "安全",
        "letter": "secure, safe, security, safety",
        "pinyin": "ānquán"
    },
    "9": {
        "character": "按时",
        "letter": "on time, before deadline, on schedule",
        "pinyin": "ànshí"
    },
    "10": {
        "character": "按照",
        "letter": "according to, on the basis of",
        "pinyin": "ànzhào"
    },
    "11": {
        "character": "阿姨",
        "letter": "aunt or maid",
        "pinyin": "āyí"
    },
    "12": {
        "character": "吧",
        "letter": "question particle",
        "pinyin": "ba"
    },
    "13": {
        "character": "把",
        "letter": "for things with a handle",
        "pinyin": "bǎ"
    },
    "14": {
        "character": "八",
        "letter": "eight",
        "pinyin": "bā"
    },
    "15": {
        "character": "爸爸",
        "letter": "dad",
        "pinyin": "bàba"
    },
    "16": {
        "character": "白",
        "letter": "white",
        "pinyin": "bái"
    },
    "17": {
        "character": "百",
        "letter": "hundred",
        "pinyin": "bǎi"
    },
    "18": {
        "character": "百分之",
        "letter": "percent",
        "pinyin": "bǎifēnzhī"
    },
    "19": {
        "character": "半",
        "letter": "half",
        "pinyin": "bàn"
    },
    "20": {
        "character": "班",
        "letter": "class",
        "pinyin": "bān"
    },
    "21": {
        "character": "搬",
        "letter": "to move",
        "pinyin": "bān"
    },
    "22": {
        "character": "办法",
        "letter": "method",
        "pinyin": "bànfǎ"
    },
    "23": {
        "character": "棒",
        "letter": "smart, capable, strong, stick",
        "pinyin": "bàng"
    },
    "24": {
        "character": "帮忙",
        "letter": "to help",
        "pinyin": "bāngmáng"
    },
    "25": {
        "character": "办公室",
        "letter": "office",
        "pinyin": "bàngōngshì"
    },
    "26": {
        "character": "帮助",
        "letter": "to help",
        "pinyin": "bāngzhù"
    },
    "27": {
        "character": "抱",
        "letter": "hold, adopt",
        "pinyin": "bào"
    },
    "28": {
        "character": "饱",
        "letter": "full",
        "pinyin": "bǎo"
    },
    "29": {
        "character": "包",
        "letter": "bag",
        "pinyin": "bāo"
    },
    "30": {
        "character": "保护",
        "letter": "protect, safeguard",
        "pinyin": "bǎohù"
    },
    "31": {
        "character": "报名",
        "letter": "sign up, register",
        "pinyin": "bàomíng"
    },
    "32": {
        "character": "抱歉",
        "letter": "feel sorry, feel regret, apologize",
        "pinyin": "bàoqiàn"
    },
    "33": {
        "character": "保证",
        "letter": "ensure, guarantee",
        "pinyin": "bǎozhèng"
    },
    "34": {
        "character": "报纸",
        "letter": "newspaper",
        "pinyin": "bàozhǐ"
    },
    "35": {
        "character": "包子",
        "letter": "bun, steamed stuffed bun",
        "pinyin": "bāozi"
    },
    "36": {
        "character": "倍",
        "letter": "times, double, twice as much",
        "pinyin": "bèi"
    },
    "37": {
        "character": "被",
        "letter": "by",
        "pinyin": "bèi"
    },
    "38": {
        "character": "北方",
        "letter": "north or northern China",
        "pinyin": "běifāng"
    },
    "39": {
        "character": "北京",
        "letter": "Beijing",
        "pinyin": "Běijīng"
    },
    "40": {
        "character": "杯子",
        "letter": "cup or glass",
        "pinyin": "bēizi"
    },
    "41": {
        "character": "笨",
        "letter": "stupid, foolish, silly",
        "pinyin": "bèn"
    },
    "42": {
        "character": "本",
        "letter": "for books",
        "pinyin": "běn"
    },
    "43": {
        "character": "本来",
        "letter": "originally",
        "pinyin": "běnlái"
    },
    "44": {
        "character": "比",
        "letter": "than",
        "pinyin": "bǐ"
    },
    "45": {
        "character": "遍",
        "letter": "all over, everywhere",
        "pinyin": "biàn"
    },
    "46": {
        "character": "变化",
        "letter": "to change",
        "pinyin": "biànhuà"
    },
    "47": {
        "character": "表格",
        "letter": "form",
        "pinyin": "biǎogé"
    },
    "48": {
        "character": "表示",
        "letter": "to express",
        "pinyin": "biǎoshì"
    },
    "49": {
        "character": "表演",
        "letter": "to perform",
        "pinyin": "biǎoyǎn"
    },
    "50": {
        "character": "表扬",
        "letter": "praise",
        "pinyin": "biǎoyáng"
    },
    "51": {
        "character": "标准",
        "letter": "standard",
        "pinyin": "biāozhǔn"
    },
    "52": {
        "character": "别",
        "letter": "don’t…",
        "pinyin": "bié"
    },
    "53": {
        "character": "别人",
        "letter": "other people",
        "pinyin": "biéren"
    },
    "54": {
        "character": "比较",
        "letter": "to compare",
        "pinyin": "bǐjiào"
    },
    "55": {
        "character": "饼干",
        "letter": "biscuit, cookie",
        "pinyin": "bǐnggān"
    },
    "56": {
        "character": "宾馆",
        "letter": "hotel",
        "pinyin": "bīngguǎn"
    },
    "57": {
        "character": "并且",
        "letter": "also, and, moreover, furthermore",
        "pinyin": "bìngqiě"
    },
    "58": {
        "character": "冰箱",
        "letter": "refrigerator",
        "pinyin": "bīngxiāng"
    },
    "59": {
        "character": "比如",
        "letter": "such as, for example",
        "pinyin": "bǐrú"
    },
    "60": {
        "character": "比赛",
        "letter": "match",
        "pinyin": "bǐsài"
    },
    "61": {
        "character": "必须",
        "letter": "must",
        "pinyin": "bìxū"
    },
    "62": {
        "character": "毕业",
        "letter": "graduation",
        "pinyin": "bìyè"
    },
    "63": {
        "character": "鼻子",
        "letter": "nose",
        "pinyin": "bízi"
    },
    "64": {
        "character": "博士",
        "letter": "Ph.D, doctor of philosophy",
        "pinyin": "bóshì"
    },
    "65": {
        "character": "不",
        "letter": "not",
        "pinyin": "bù"
    },
    "66": {
        "character": "不客气",
        "letter": "you’re welcome",
        "pinyin": "bú kèqi"
    },
    "67": {
        "character": "不得不",
        "letter": "have to, can't avoid, have no choice or option",
        "pinyin": "bùdébù"
    },
    "68": {
        "character": "部分",
        "letter": "part, share, section",
        "pinyin": "bùfen"
    },
    "69": {
        "character": "不管",
        "letter": "no matter, regardless of",
        "pinyin": "bùguǎn"
    },
    "70": {
        "character": "不过",
        "letter": "only, however, anyway",
        "pinyin": "búguò"
    },
    "71": {
        "character": "不仅",
        "letter": "not only",
        "pinyin": "bùjǐn"
    },
    "72": {
        "character": "擦",
        "letter": "rub, wipe, erase",
        "pinyin": "cā"
    },
    "73": {
        "character": "才",
        "letter": "just",
        "pinyin": "cái"
    },
    "74": {
        "character": "菜",
        "letter": "dish",
        "pinyin": "cài"
    },
    "75": {
        "character": "猜",
        "letter": "to guess",
        "pinyin": "cāi"
    },
    "76": {
        "character": "菜单",
        "letter": "menu",
        "pinyin": "càidān"
    },
    "77": {
        "character": "材料",
        "letter": "material",
        "pinyin": "cáiliào"
    },
    "78": {
        "character": "参观",
        "letter": "visit, to look around",
        "pinyin": "cānguān"
    },
    "79": {
        "character": "参加",
        "letter": "to attend",
        "pinyin": "cānjiā"
    },
    "80": {
        "character": "餐厅",
        "letter": "restaurant, dining hall",
        "pinyin": "cāntīng"
    },
    "81": {
        "character": "草",
        "letter": "grass",
        "pinyin": "cǎo"
    },
    "82": {
        "character": "层",
        "letter": "floor",
        "pinyin": "céng"
    },
    "83": {
        "character": "厕所",
        "letter": "toilet, washroom",
        "pinyin": "cèsuǒ"
    },
    "84": {
        "character": "茶",
        "letter": "tea",
        "pinyin": "chá"
    },
    "85": {
        "character": "差",
        "letter": "bad (in quality)",
        "pinyin": "chà"
    },
    "86": {
        "character": "差不多",
        "letter": "almost, nearly",
        "pinyin": "chà bù duō"
    },
    "87": {
        "character": "尝",
        "letter": "taste, flavor",
        "pinyin": "cháng"
    },
    "88": {
        "character": "长",
        "letter": "to grow",
        "pinyin": "zhǎng"
    },
    "89": {
        "character": "场",
        "letter": "large place used for a specific purpose",
        "pinyin": "chǎng"
    },
    "90": {
        "character": "长城",
        "letter": "the Great Wall",
        "pinyin": "cháng chéng"
    },
    "91": {
        "character": "唱歌",
        "letter": "to sing",
        "pinyin": "chàng gē"
    },
    "92": {
        "character": "长江",
        "letter": "yangtze river",
        "pinyin": "cháng jiāng"
    },
    "93": {
        "character": "超过",
        "letter": "to surpass, to exceed, to outstrip",
        "pinyin": "chāoguò"
    },
    "94": {
        "character": "超市",
        "letter": "supermarket",
        "pinyin": "chāoshì"
    },
    "95": {
        "character": "成功",
        "letter": "success",
        "pinyin": "chénggōng"
    },
    "96": {
        "character": "成绩",
        "letter": "score",
        "pinyin": "chéngjì"
    },
    "97": {
        "character": "诚实",
        "letter": "honest, truthful",
        "pinyin": "chéngshí"
    },
    "98": {
        "character": "城市",
        "letter": "city",
        "pinyin": "chéngshì"
    },
    "99": {
        "character": "成为",
        "letter": "become",
        "pinyin": "chéngwéi"
    },
    "100": {
        "character": "乘坐",
        "letter": "to ride (in a vehicle)",
        "pinyin": "chéngzuò"
    },
    "101": {
        "character": "衬衫",
        "letter": "shirt",
        "pinyin": "chènshān"
    },
    "102": {
        "character": "吃",
        "letter": "to eat",
        "pinyin": "chī"
    },
    "103": {
        "character": "迟到",
        "letter": "to be late",
        "pinyin": "chídào"
    },
    "104": {
        "character": "吃惊",
        "letter": "to be amazed, to be shocked",
        "pinyin": "chījīng"
    },
    "105": {
        "character": "重新",
        "letter": "again, once more",
        "pinyin": "chóngxīn"
    },
    "106": {
        "character": "抽烟",
        "letter": "to smoke (a cigarette, tobacco)",
        "pinyin": "chōuyān"
    },
    "107": {
        "character": "出",
        "letter": "to get out",
        "pinyin": "chū"
    },
    "108": {
        "character": "船",
        "letter": "boat",
        "pinyin": "chuán"
    },
    "109": {
        "character": "穿",
        "letter": "to wear",
        "pinyin": "chuān"
    },
    "110": {
        "character": "窗户",
        "letter": "window",
        "pinyin": "chuānghu"
    },
    "111": {
        "character": "传真",
        "letter": "fax",
        "pinyin": "chuánzhēn"
    },
    "112": {
        "character": "出差",
        "letter": "to go on an official or business trip",
        "pinyin": "chūchāi"
    },
    "113": {
        "character": "出发",
        "letter": "to start out, to set off",
        "pinyin": "chūfā"
    },
    "114": {
        "character": "厨房",
        "letter": "kitchen",
        "pinyin": "chúfáng"
    },
    "115": {
        "character": "除了",
        "letter": "besides or except",
        "pinyin": "chúle"
    },
    "116": {
        "character": "春",
        "letter": "spring",
        "pinyin": "chūn"
    },
    "117": {
        "character": "出生",
        "letter": "born, birth",
        "pinyin": "chūshēng"
    },
    "118": {
        "character": "出现",
        "letter": "to appear",
        "pinyin": "chūxiàn"
    },
    "119": {
        "character": "出租车",
        "letter": "taxi",
        "pinyin": "chūzūchē"
    },
    "120": {
        "character": "次",
        "letter": "time (frequency of an act)",
        "pinyin": "cì"
    },
    "121": {
        "character": "词语",
        "letter": "word",
        "pinyin": "cíyǔ"
    },
    "122": {
        "character": "从",
        "letter": "from",
        "pinyin": "cóng"
    },
    "123": {
        "character": "从来",
        "letter": "always",
        "pinyin": "cónglái"
    },
    "124": {
        "character": "聪明",
        "letter": "smart",
        "pinyin": "cōngming"
    },
    "125": {
        "character": "存",
        "letter": "exist, deposit, store, keep, survive",
        "pinyin": "cún"
    },
    "126": {
        "character": "错",
        "letter": "wrong",
        "pinyin": "cuò"
    },
    "127": {
        "character": "错误",
        "letter": "error, mistake",
        "pinyin": "cuò wù"
    },
    "128": {
        "character": "粗心",
        "letter": "careless",
        "pinyin": "cūxīn"
    },
    "129": {
        "character": "大",
        "letter": "big",
        "pinyin": "dà"
    },
    "130": {
        "character": "打电话",
        "letter": "to make a phone call",
        "pinyin": "dǎ diànhuà"
    },
    "131": {
        "character": "打篮球",
        "letter": "to play basketball",
        "pinyin": "dǎ lánqiú"
    },
    "132": {
        "character": "答案",
        "letter": "answer, solution",
        "pinyin": "dá'àn"
    },
    "133": {
        "character": "打扮",
        "letter": "dress up, make up",
        "pinyin": "dǎban"
    },
    "134": {
        "character": "大概",
        "letter": "probably, roughly",
        "pinyin": "dàgài"
    },
    "135": {
        "character": "戴",
        "letter": "to put on or wear (glasses, hat, gloves etc)",
        "pinyin": "dài"
    },
    "136": {
        "character": "带",
        "letter": "to bring",
        "pinyin": "dài"
    },
    "137": {
        "character": "大夫",
        "letter": "doctor",
        "pinyin": "dàifu"
    },
    "138": {
        "character": "大家",
        "letter": "everybody",
        "pinyin": "dàjiā"
    },
    "139": {
        "character": "当",
        "letter": "when, during",
        "pinyin": "dāng"
    },
    "140": {
        "character": "蛋糕",
        "letter": "cake",
        "pinyin": "dàngāo"
    },
    "141": {
        "character": "当然",
        "letter": "of course",
        "pinyin": "dāngrán"
    },
    "142": {
        "character": "当时",
        "letter": "at that time",
        "pinyin": "dāngshí"
    },
    "143": {
        "character": "但是",
        "letter": "but",
        "pinyin": "dànshì"
    },
    "144": {
        "character": "担心",
        "letter": "to worry",
        "pinyin": "dānxīn"
    },
    "145": {
        "character": "倒",
        "letter": "to move backwards, converse",
        "pinyin": "dào"
    },
    "146": {
        "character": "到",
        "letter": "to arrive",
        "pinyin": "dào"
    },
    "147": {
        "character": "刀",
        "letter": "knife",
        "pinyin": "dāo"
    },
    "148": {
        "character": "到处",
        "letter": "everywhere, in all places",
        "pinyin": "dàochù"
    },
    "149": {
        "character": "到底",
        "letter": "finally, in the end, after all",
        "pinyin": "dàodǐ"
    },
    "150": {
        "character": "道歉",
        "letter": "apologize",
        "pinyin": "dàoqiàn"
    },
    "151": {
        "character": "导游",
        "letter": "tourist guide, guidebook",
        "pinyin": "dǎoyóu"
    },
    "152": {
        "character": "打扰",
        "letter": "disturb, bother, trouble",
        "pinyin": "dǎrǎo"
    },
    "153": {
        "character": "打扫",
        "letter": "to clean",
        "pinyin": "dǎsǎo"
    },
    "154": {
        "character": "大使馆",
        "letter": "embassy",
        "pinyin": "dàshǐguǎn"
    },
    "155": {
        "character": "打算",
        "letter": "to plan",
        "pinyin": "dǎsuàn"
    },
    "156": {
        "character": "打印",
        "letter": "print",
        "pinyin": "dǎyìn"
    },
    "157": {
        "character": "大约",
        "letter": "about, approximately",
        "pinyin": "dàyuē"
    },
    "158": {
        "character": "打招呼",
        "letter": "to give prior notice",
        "pinyin": "dǎzhāohū"
    },
    "159": {
        "character": "打折",
        "letter": "to give a discount",
        "pinyin": "dǎzhé"
    },
    "160": {
        "character": "打针",
        "letter": "to give or have an injection",
        "pinyin": "dǎzhēn"
    },
    "161": {
        "character": "的",
        "letter": "possession particle",
        "pinyin": "de"
    },
    "162": {
        "character": "得",
        "letter": "particle used to express capability, possibility, degree",
        "pinyin": "dé"
    },
    "163": {
        "character": "地",
        "letter": "structure particle",
        "pinyin": "de"
    },
    "164": {
        "character": "等",
        "letter": "to wait",
        "pinyin": "děng"
    },
    "165": {
        "character": "灯",
        "letter": "light",
        "pinyin": "dēng"
    },
    "166": {
        "character": "登机牌",
        "letter": "boarding pass",
        "pinyin": "dēng jī pái"
    },
    "167": {
        "character": "得意",
        "letter": "proud",
        "pinyin": "déyì"
    },
    "168": {
        "character": "底",
        "letter": "bottom, base, background",
        "pinyin": "dǐ"
    },
    "169": {
        "character": "低",
        "letter": "low",
        "pinyin": "dī"
    },
    "170": {
        "character": "第一",
        "letter": "first",
        "pinyin": "dì-yī"
    },
    "171": {
        "character": "点",
        "letter": "o’clock",
        "pinyin": "diǎn"
    },
    "172": {
        "character": "电脑",
        "letter": "computer",
        "pinyin": "diànnǎo"
    },
    "173": {
        "character": "电视",
        "letter": "TV",
        "pinyin": "diànshì"
    },
    "174": {
        "character": "电梯",
        "letter": "elevator",
        "pinyin": "diàntī"
    },
    "175": {
        "character": "电影",
        "letter": "movie",
        "pinyin": "diànyǐng"
    },
    "176": {
        "character": "电子邮件",
        "letter": "email",
        "pinyin": "diànzǐ yóujiàn"
    },
    "177": {
        "character": "掉",
        "letter": "fall, drop, lose, come off",
        "pinyin": "diào"
    },
    "178": {
        "character": "调查",
        "letter": "investigation, inquiry, survey",
        "pinyin": "diàochá"
    },
    "179": {
        "character": "弟弟",
        "letter": "younger brother",
        "pinyin": "dìdi"
    },
    "180": {
        "character": "地点",
        "letter": "location, place, venue",
        "pinyin": "dìdiǎn"
    },
    "181": {
        "character": "地方",
        "letter": "place",
        "pinyin": "dìfāng"
    },
    "182": {
        "character": "地球",
        "letter": "earth, planet",
        "pinyin": "dìqiú"
    },
    "183": {
        "character": "地铁",
        "letter": "metro",
        "pinyin": "dìtiě"
    },
    "184": {
        "character": "地图",
        "letter": "map",
        "pinyin": "dìtú"
    },
    "185": {
        "character": "丢",
        "letter": "throw, put aside",
        "pinyin": "diū"
    },
    "186": {
        "character": "地址",
        "letter": "address",
        "pinyin": "dìzhǐ"
    },
    "187": {
        "character": "懂",
        "letter": "to understand",
        "pinyin": "dǒng"
    },
    "188": {
        "character": "冬",
        "letter": "winter",
        "pinyin": "dōng"
    },
    "189": {
        "character": "东",
        "letter": "east",
        "pinyin": "dōng"
    },
    "190": {
        "character": "动物",
        "letter": "animal",
        "pinyin": "dòngwù"
    },
    "191": {
        "character": "东西",
        "letter": "thing",
        "pinyin": "dōngxi"
    },
    "192": {
        "character": "动作",
        "letter": "action, movement",
        "pinyin": "dòngzuò"
    },
    "193": {
        "character": "都",
        "letter": "both or all",
        "pinyin": "dōu"
    },
    "194": {
        "character": "读",
        "letter": "to read",
        "pinyin": "dú"
    },
    "195": {
        "character": "段",
        "letter": "span of time or distance",
        "pinyin": "duàn"
    },
    "196": {
        "character": "短",
        "letter": "short",
        "pinyin": "duǎn"
    },
    "197": {
        "character": "锻炼",
        "letter": "to work out",
        "pinyin": "duànliàn"
    },
    "198": {
        "character": "短信",
        "letter": "SMS",
        "pinyin": "duǎnxìn"
    },
    "199": {
        "character": "堵车",
        "letter": "traffic jam",
        "pinyin": "dǔchē"
    },
    "200": {
        "character": "对",
        "letter": "right",
        "pinyin": "duì"
    },
    "201": {
        "character": "对不起",
        "letter": "sorry",
        "pinyin": "duìbuqǐ"
    },
    "202": {
        "character": "对话",
        "letter": "dialogue",
        "pinyin": "duìhuà"
    },
    "203": {
        "character": "对面",
        "letter": "opposite",
        "pinyin": "duìmiàn"
    },
    "204": {
        "character": "对于",
        "letter": "regarding, As far as is concerned",
        "pinyin": "duìyú"
    },
    "205": {
        "character": "多",
        "letter": "many",
        "pinyin": "duō"
    },
    "206": {
        "character": "多么",
        "letter": "how…",
        "pinyin": "duōme"
    },
    "207": {
        "character": "多少",
        "letter": "how many or how much",
        "pinyin": "duōshao"
    },
    "208": {
        "character": "肚子",
        "letter": "belly, stomach",
        "pinyin": "dùzi"
    },
    "209": {
        "character": "饿",
        "letter": "hungry",
        "pinyin": "è"
    },
    "210": {
        "character": "而",
        "letter": "and, as well as",
        "pinyin": "ér"
    },
    "211": {
        "character": "二",
        "letter": "two",
        "pinyin": "èr"
    },
    "212": {
        "character": "耳朵",
        "letter": "ear",
        "pinyin": "ěrduo"
    },
    "213": {
        "character": "而且",
        "letter": "moreover",
        "pinyin": "érqiě"
    },
    "214": {
        "character": "儿童",
        "letter": "children",
        "pinyin": "értóng"
    },
    "215": {
        "character": "儿子",
        "letter": "son",
        "pinyin": "érzi"
    },
    "216": {
        "character": "法律",
        "letter": "law",
        "pinyin": "fǎlǜ"
    },
    "217": {
        "character": "反对",
        "letter": "opposition",
        "pinyin": "fǎnduì"
    },
    "218": {
        "character": "放",
        "letter": "to put",
        "pinyin": "fàng"
    },
    "219": {
        "character": "方便",
        "letter": "convenient",
        "pinyin": "fāngbiàn"
    },
    "220": {
        "character": "房东",
        "letter": "landlord, owner of land",
        "pinyin": "fángdōng"
    },
    "221": {
        "character": "方法",
        "letter": "method, way, means",
        "pinyin": "fāngfǎ"
    },
    "222": {
        "character": "房间",
        "letter": "room",
        "pinyin": "fángjiān"
    },
    "223": {
        "character": "方面",
        "letter": "aspect, respect",
        "pinyin": "fāngmiàn"
    },
    "224": {
        "character": "放弃",
        "letter": "give up, abandon",
        "pinyin": "fàngqì"
    },
    "225": {
        "character": "放暑假",
        "letter": "summer vacation",
        "pinyin": "fàngshǔjià"
    },
    "226": {
        "character": "放松",
        "letter": "relax",
        "pinyin": "fàngsōng"
    },
    "227": {
        "character": "饭馆",
        "letter": "restaurant",
        "pinyin": "fànguǎn"
    },
    "228": {
        "character": "方向",
        "letter": "direction, orientation",
        "pinyin": "fāngxiàng"
    },
    "229": {
        "character": "放心",
        "letter": "to rest assured",
        "pinyin": "fàngxīn"
    },
    "230": {
        "character": "烦恼",
        "letter": "annoyance, vexation",
        "pinyin": "fánnǎo"
    },
    "231": {
        "character": "翻译",
        "letter": "translate, interpreter",
        "pinyin": "fānyì"
    },
    "232": {
        "character": "发烧",
        "letter": "to have a fever",
        "pinyin": "fāshāo"
    },
    "233": {
        "character": "发生",
        "letter": "happen, occur, break out",
        "pinyin": "fāshēng"
    },
    "234": {
        "character": "发现",
        "letter": "to discover",
        "pinyin": "fāxiàn"
    },
    "235": {
        "character": "发展",
        "letter": "development, growth",
        "pinyin": "fāzhǎn"
    },
    "236": {
        "character": "非常",
        "letter": "extremely",
        "pinyin": "fēicháng"
    },
    "237": {
        "character": "飞机",
        "letter": "plane",
        "pinyin": "fēijī"
    },
    "238": {
        "character": "份",
        "letter": "part, share, copy",
        "pinyin": "fèn"
    },
    "239": {
        "character": "分",
        "letter": "to divide or separate",
        "pinyin": "fēn"
    },
    "240": {
        "character": "丰富",
        "letter": "rich",
        "pinyin": "fēngfù"
    },
    "241": {
        "character": "分钟",
        "letter": "minute",
        "pinyin": "fēnzhōng"
    },
    "242": {
        "character": "否则",
        "letter": "otherwise",
        "pinyin": "fǒuzé"
    },
    "243": {
        "character": "富",
        "letter": "rich, surname Fu",
        "pinyin": "fù"
    },
    "244": {
        "character": "符合",
        "letter": "in keeping with, in accordance with",
        "pinyin": "fúhé"
    },
    "245": {
        "character": "附近",
        "letter": "surrounding area",
        "pinyin": "fùjìn"
    },
    "246": {
        "character": "付款",
        "letter": "payment",
        "pinyin": "fùkuǎn"
    },
    "247": {
        "character": "父亲",
        "letter": "father",
        "pinyin": "fùqīn"
    },
    "248": {
        "character": "服务员",
        "letter": "waiter or waitress",
        "pinyin": "fúwùyuán"
    },
    "249": {
        "character": "复习",
        "letter": "to review",
        "pinyin": "fùxí"
    },
    "250": {
        "character": "复印",
        "letter": "photocopy",
        "pinyin": "fùyìn"
    },
    "251": {
        "character": "复杂",
        "letter": "complicated",
        "pinyin": "fùzá"
    },
    "252": {
        "character": "负责",
        "letter": "to take responsibility",
        "pinyin": "fùzé"
    },
    "253": {
        "character": "改变",
        "letter": "change, transform",
        "pinyin": "gǎibiàn"
    },
    "254": {
        "character": "干",
        "letter": "to do (some work)",
        "pinyin": "gàn"
    },
    "255": {
        "character": "敢",
        "letter": "to dare",
        "pinyin": "gǎn"
    },
    "256": {
        "character": "赶",
        "letter": "rush, hurry, to catch up",
        "pinyin": "gǎn"
    },
    "257": {
        "character": "干杯",
        "letter": "cheers",
        "pinyin": "gānbēi"
    },
    "258": {
        "character": "感动",
        "letter": "to move, moving",
        "pinyin": "gǎndòng"
    },
    "259": {
        "character": "刚",
        "letter": "just, exactly, hard, strong",
        "pinyin": "gāng"
    },
    "260": {
        "character": "刚才",
        "letter": "just now",
        "pinyin": "gāngcái"
    },
    "261": {
        "character": "干净",
        "letter": "clean",
        "pinyin": "gānjìng"
    },
    "262": {
        "character": "感觉",
        "letter": "feel, perception, sense",
        "pinyin": "gǎnjué"
    },
    "263": {
        "character": "感冒",
        "letter": "to have a cold",
        "pinyin": "gǎnmào"
    },
    "264": {
        "character": "感情",
        "letter": "feeling, emotion, sensation",
        "pinyin": "gǎnqíng"
    },
    "265": {
        "character": "感谢",
        "letter": "gratitude, grateful, thankful",
        "pinyin": "gǎnxiè"
    },
    "266": {
        "character": "高",
        "letter": "tall or high",
        "pinyin": "gāo"
    },
    "267": {
        "character": "告诉",
        "letter": "to tell",
        "pinyin": "gàosù"
    },
    "268": {
        "character": "高速公路",
        "letter": "expressway, highway",
        "pinyin": "gāosù gōnglù"
    },
    "269": {
        "character": "高兴",
        "letter": "happy",
        "pinyin": "gāoxìng"
    },
    "270": {
        "character": "各",
        "letter": "each, every",
        "pinyin": "gè"
    },
    "271": {
        "character": "个",
        "letter": "generic measure word",
        "pinyin": "gè"
    },
    "272": {
        "character": "胳膊",
        "letter": "arm",
        "pinyin": "gēbó"
    },
    "273": {
        "character": "哥哥",
        "letter": "elder brother",
        "pinyin": "gēge"
    },
    "274": {
        "character": "给",
        "letter": "to give",
        "pinyin": "gěi"
    },
    "275": {
        "character": "跟",
        "letter": "with",
        "pinyin": "gēn"
    },
    "276": {
        "character": "更",
        "letter": "more",
        "pinyin": "gèng"
    },
    "277": {
        "character": "根据",
        "letter": "according to",
        "pinyin": "gēnjù"
    },
    "278": {
        "character": "功夫",
        "letter": "skill, effort, art, kung fu",
        "pinyin": "gōngfū"
    },
    "279": {
        "character": "公共汽车",
        "letter": "bus",
        "pinyin": "gōnggòng qìchē"
    },
    "280": {
        "character": "公斤",
        "letter": "kilo",
        "pinyin": "gōngjīn"
    },
    "281": {
        "character": "公里",
        "letter": "kilometer",
        "pinyin": "gōnglǐ"
    },
    "282": {
        "character": "公司",
        "letter": "company",
        "pinyin": "gōngsī"
    },
    "283": {
        "character": "共同",
        "letter": "common, join, together",
        "pinyin": "gòngtóng"
    },
    "284": {
        "character": "公园",
        "letter": "park",
        "pinyin": "gōngyuán"
    },
    "285": {
        "character": "工资",
        "letter": "wage, pay",
        "pinyin": "gōngzī"
    },
    "286": {
        "character": "工作",
        "letter": "to work",
        "pinyin": "gōngzuò"
    },
    "287": {
        "character": "够",
        "letter": "to reach, to be enough",
        "pinyin": "gòu"
    },
    "288": {
        "character": "狗",
        "letter": "dog",
        "pinyin": "gǒu"
    },
    "289": {
        "character": "购物",
        "letter": "shopping",
        "pinyin": "gòuwù"
    },
    "290": {
        "character": "挂",
        "letter": "suspend, hang",
        "pinyin": "guà"
    },
    "291": {
        "character": "刮风",
        "letter": "to blow (wind)",
        "pinyin": "guā fēng"
    },
    "292": {
        "character": "关",
        "letter": "to close or to shut",
        "pinyin": "guān"
    },
    "293": {
        "character": "逛",
        "letter": "to stroll, to visit",
        "pinyin": "guàng"
    },
    "294": {
        "character": "光",
        "letter": "light, bright",
        "pinyin": "guāng"
    },
    "295": {
        "character": "广播",
        "letter": "radio broadcast, widely spread",
        "pinyin": "guǎngbō"
    },
    "296": {
        "character": "广告",
        "letter": "advertisement",
        "pinyin": "guǎnggào"
    },
    "297": {
        "character": "关键",
        "letter": "key, crucial point, crux",
        "pinyin": "guānjiàn"
    },
    "298": {
        "character": "管理",
        "letter": "administration, management",
        "pinyin": "guǎnlǐ"
    },
    "299": {
        "character": "关系",
        "letter": "relation",
        "pinyin": "guānxì"
    },
    "300": {
        "character": "关心",
        "letter": "to concern",
        "pinyin": "guānxīn"
    },
    "301": {
        "character": "关于",
        "letter": "about, regarding",
        "pinyin": "guānyú"
    },
    "302": {
        "character": "观众",
        "letter": "audience, spectators",
        "pinyin": "guānzhòng"
    },
    "303": {
        "character": "贵",
        "letter": "expensive",
        "pinyin": "guì"
    },
    "304": {
        "character": "规定",
        "letter": "rule, regulation",
        "pinyin": "guīdìng"
    },
    "305": {
        "character": "估计",
        "letter": "estimate",
        "pinyin": "gūjì"
    },
    "306": {
        "character": "顾客",
        "letter": "customer, client",
        "pinyin": "gùkè"
    },
    "307": {
        "character": "鼓励",
        "letter": "encourage",
        "pinyin": "gǔlì"
    },
    "308": {
        "character": "过",
        "letter": "aspect particle",
        "pinyin": "guò"
    },
    "309": {
        "character": "过程",
        "letter": "course of events, process",
        "pinyin": "guòchéng"
    },
    "310": {
        "character": "国籍",
        "letter": "nationality, country of citizenship",
        "pinyin": "guójí"
    },
    "311": {
        "character": "国际",
        "letter": "international",
        "pinyin": "guójì"
    },
    "312": {
        "character": "国家",
        "letter": "nation",
        "pinyin": "guójiā"
    },
    "313": {
        "character": "过去",
        "letter": "past",
        "pinyin": "guòqù"
    },
    "314": {
        "character": "果汁",
        "letter": "juice",
        "pinyin": "guǒzhī"
    },
    "315": {
        "character": "故事",
        "letter": "story",
        "pinyin": "gùshi"
    },
    "316": {
        "character": "故意",
        "letter": "deliberately, on purpose",
        "pinyin": "gùyì"
    },
    "317": {
        "character": "还",
        "letter": "to return (sth)",
        "pinyin": "huán"
    },
    "318": {
        "character": "害怕",
        "letter": "to fear",
        "pinyin": "hàipà"
    },
    "319": {
        "character": "还是",
        "letter": "or",
        "pinyin": "háishì"
    },
    "320": {
        "character": "害羞",
        "letter": "shy",
        "pinyin": "hàixiū"
    },
    "321": {
        "character": "海洋",
        "letter": "ocean",
        "pinyin": "hǎiyáng"
    },
    "322": {
        "character": "孩子",
        "letter": "child",
        "pinyin": "háizi"
    },
    "323": {
        "character": "汗",
        "letter": "sweat, perspiration",
        "pinyin": "hàn"
    },
    "324": {
        "character": "航班",
        "letter": "flight",
        "pinyin": "hángbān"
    },
    "325": {
        "character": "寒假",
        "letter": "winter vacation",
        "pinyin": "hánjià"
    },
    "326": {
        "character": "汉语",
        "letter": "Chinese (language)",
        "pinyin": "Hànyǔ"
    },
    "327": {
        "character": "号",
        "letter": "date or number",
        "pinyin": "hào"
    },
    "328": {
        "character": "好",
        "letter": "good",
        "pinyin": "hǎo"
    },
    "329": {
        "character": "好吃",
        "letter": "tasty",
        "pinyin": "hǎochī"
    },
    "330": {
        "character": "好处",
        "letter": "benefit",
        "pinyin": "hǎochù"
    },
    "331": {
        "character": "号码",
        "letter": "number",
        "pinyin": "hàomǎ"
    },
    "332": {
        "character": "好像",
        "letter": "as if, to seem like",
        "pinyin": "hǎoxiàng"
    },
    "333": {
        "character": "河",
        "letter": "river",
        "pinyin": "hé"
    },
    "334": {
        "character": "和",
        "letter": "and",
        "pinyin": "hé"
    },
    "335": {
        "character": "喝",
        "letter": "to drink",
        "pinyin": "hē"
    },
    "336": {
        "character": "合格",
        "letter": "qualified, eligible",
        "pinyin": "hégé"
    },
    "337": {
        "character": "黑",
        "letter": "black",
        "pinyin": "hēi"
    },
    "338": {
        "character": "黑板",
        "letter": "blackboard",
        "pinyin": "hēibǎn"
    },
    "339": {
        "character": "很",
        "letter": "very",
        "pinyin": "hěn"
    },
    "340": {
        "character": "合适",
        "letter": "appropriate, suitable",
        "pinyin": "héshì"
    },
    "341": {
        "character": "盒子",
        "letter": "box",
        "pinyin": "hézi"
    },
    "342": {
        "character": "红",
        "letter": "red",
        "pinyin": "hóng"
    },
    "343": {
        "character": "厚",
        "letter": "thick",
        "pinyin": "hòu"
    },
    "344": {
        "character": "后悔",
        "letter": "regret, repent",
        "pinyin": "hòuhuǐ"
    },
    "345": {
        "character": "后面",
        "letter": "back",
        "pinyin": "hòumiàn"
    },
    "346": {
        "character": "画",
        "letter": "to draw or to paint",
        "pinyin": "huà"
    },
    "347": {
        "character": "花",
        "letter": "to spend or to cost",
        "pinyin": "huā"
    },
    "348": {
        "character": "坏",
        "letter": "bad",
        "pinyin": "huài"
    },
    "349": {
        "character": "怀疑",
        "letter": "doubt, suspect",
        "pinyin": "huáiyí"
    },
    "350": {
        "character": "换",
        "letter": "to exchange",
        "pinyin": "huàn"
    },
    "351": {
        "character": "黄",
        "letter": "yellow",
        "pinyin": "huáng"
    },
    "352": {
        "character": "环境",
        "letter": "environment",
        "pinyin": "huánjìng"
    },
    "353": {
        "character": "欢迎",
        "letter": "to welcome",
        "pinyin": "huānyíng"
    },
    "354": {
        "character": "花园",
        "letter": "garden",
        "pinyin": "huāyuán"
    },
    "355": {
        "character": "回",
        "letter": "to return",
        "pinyin": "huí"
    },
    "356": {
        "character": "会",
        "letter": "can (to know how to)",
        "pinyin": "huì"
    },
    "357": {
        "character": "回答",
        "letter": "to answer",
        "pinyin": "huídá"
    },
    "358": {
        "character": "回忆",
        "letter": "memories, recollection",
        "pinyin": "huíyì"
    },
    "359": {
        "character": "会议",
        "letter": "meeting",
        "pinyin": "huìyì"
    },
    "360": {
        "character": "火",
        "letter": "fire",
        "pinyin": "huǒ"
    },
    "361": {
        "character": "火车站",
        "letter": "train station",
        "pinyin": "huǒchēzhàn"
    },
    "362": {
        "character": "获得",
        "letter": "get, receive",
        "pinyin": "huòdé"
    },
    "363": {
        "character": "活动",
        "letter": "activity",
        "pinyin": "huódòng"
    },
    "364": {
        "character": "活泼",
        "letter": "lively, active",
        "pinyin": "huópō"
    },
    "365": {
        "character": "或者",
        "letter": "or",
        "pinyin": "huòzhě"
    },
    "366": {
        "character": "护士",
        "letter": "nurse",
        "pinyin": "hùshi"
    },
    "367": {
        "character": "互相",
        "letter": "each other, mutual",
        "pinyin": "hùxiāng"
    },
    "368": {
        "character": "护照",
        "letter": "passport",
        "pinyin": "hùzhào"
    },
    "369": {
        "character": "极",
        "letter": "extremely",
        "pinyin": "jí"
    },
    "370": {
        "character": "寄",
        "letter": "to mail, to send",
        "pinyin": "jì"
    },
    "371": {
        "character": "几",
        "letter": "how many or how much",
        "pinyin": "jǐ"
    },
    "372": {
        "character": "假",
        "letter": "fake, false",
        "pinyin": "jiǎ"
    },
    "373": {
        "character": "家",
        "letter": "home or family",
        "pinyin": "jiā"
    },
    "374": {
        "character": "加班",
        "letter": "overtime work",
        "pinyin": "jiābān"
    },
    "375": {
        "character": "价格",
        "letter": "price",
        "pinyin": "jiàgé"
    },
    "376": {
        "character": "家具",
        "letter": "furniture",
        "pinyin": "jiājù"
    },
    "377": {
        "character": "件",
        "letter": "for affairs, clothes, furniture",
        "pinyin": "jiàn"
    },
    "378": {
        "character": "检查",
        "letter": "to check",
        "pinyin": "jiǎnchá"
    },
    "379": {
        "character": "坚持",
        "letter": "to insist on, to continue upholding",
        "pinyin": "jiānchí"
    },
    "380": {
        "character": "简单",
        "letter": "simple",
        "pinyin": "jiǎndān"
    },
    "381": {
        "character": "减肥",
        "letter": "to lose weight",
        "pinyin": "jiǎnféi"
    },
    "382": {
        "character": "讲",
        "letter": "to say or to speak",
        "pinyin": "jiǎng"
    },
    "383": {
        "character": "降低",
        "letter": "to bring down",
        "pinyin": "jiàngdī"
    },
    "384": {
        "character": "奖金",
        "letter": "bonus, award money",
        "pinyin": "jiǎngjīn"
    },
    "385": {
        "character": "将来",
        "letter": "future",
        "pinyin": "jiānglái"
    },
    "386": {
        "character": "降落",
        "letter": "landing, descent",
        "pinyin": "jiàngluò"
    },
    "387": {
        "character": "健康",
        "letter": "healthy",
        "pinyin": "jiànkāng"
    },
    "388": {
        "character": "见面",
        "letter": "to meet",
        "pinyin": "jiànmiàn"
    },
    "389": {
        "character": "减少",
        "letter": "reduce, decrease",
        "pinyin": "jiǎnshǎo"
    },
    "390": {
        "character": "建议",
        "letter": "suggest, recommend, proposal",
        "pinyin": "jiànyì"
    },
    "391": {
        "character": "叫",
        "letter": "to call",
        "pinyin": "jiào"
    },
    "392": {
        "character": "脚",
        "letter": "foot",
        "pinyin": "jiǎo"
    },
    "393": {
        "character": "角",
        "letter": "1/10 of Chinese Yuan",
        "pinyin": "jiǎo"
    },
    "394": {
        "character": "交",
        "letter": "hand over",
        "pinyin": "jiāo"
    },
    "395": {
        "character": "教",
        "letter": "to teach",
        "pinyin": "jiāo"
    },
    "396": {
        "character": "骄傲",
        "letter": "proud",
        "pinyin": "jiāo'ào"
    },
    "397": {
        "character": "交流",
        "letter": "communication",
        "pinyin": "jiāoliú"
    },
    "398": {
        "character": "郊区",
        "letter": "suburbs, outskirts",
        "pinyin": "jiāoqū"
    },
    "399": {
        "character": "教室",
        "letter": "classroom",
        "pinyin": "jiàoshì"
    },
    "400": {
        "character": "教授",
        "letter": "professor",
        "pinyin": "jiàoshòu"
    },
    "401": {
        "character": "交通",
        "letter": "traffic, communication",
        "pinyin": "jiāotōng"
    },
    "402": {
        "character": "教育",
        "letter": "education",
        "pinyin": "jiàoyù"
    },
    "403": {
        "character": "饺子",
        "letter": "dumpling",
        "pinyin": "jiǎozi"
    },
    "404": {
        "character": "加油站",
        "letter": "gas station",
        "pinyin": "jiāyóuzhàn"
    },
    "405": {
        "character": "机场",
        "letter": "airport",
        "pinyin": "jīchǎng"
    },
    "406": {
        "character": "基础",
        "letter": "foundation, base",
        "pinyin": "jīchǔ"
    },
    "407": {
        "character": "鸡蛋",
        "letter": "egg",
        "pinyin": "jīdàn"
    },
    "408": {
        "character": "记得",
        "letter": "to remember",
        "pinyin": "jìde"
    },
    "409": {
        "character": "激动",
        "letter": "excited, agitate",
        "pinyin": "jīdòng"
    },
    "410": {
        "character": "节",
        "letter": "festival, holiday",
        "pinyin": "jié"
    },
    "411": {
        "character": "借",
        "letter": "to borrow or to lend",
        "pinyin": "jiè"
    },
    "412": {
        "character": "接",
        "letter": "to catch or to pick up",
        "pinyin": "jiē"
    },
    "413": {
        "character": "街道",
        "letter": "street",
        "pinyin": "jiēdào"
    },
    "414": {
        "character": "结果",
        "letter": "result, outcome",
        "pinyin": "jiéguǒ"
    },
    "415": {
        "character": "结婚",
        "letter": "to marry",
        "pinyin": "jiéhūn"
    },
    "416": {
        "character": "姐姐",
        "letter": "elder sister",
        "pinyin": "jiějie"
    },
    "417": {
        "character": "解决",
        "letter": "to solve",
        "pinyin": "jiějué"
    },
    "418": {
        "character": "节目",
        "letter": "program",
        "pinyin": "jiémù"
    },
    "419": {
        "character": "节日",
        "letter": "festival",
        "pinyin": "jiérì"
    },
    "420": {
        "character": "介绍",
        "letter": "to introduce",
        "pinyin": "jièshào"
    },
    "421": {
        "character": "解释",
        "letter": "explanation",
        "pinyin": "jiěshì"
    },
    "422": {
        "character": "接受",
        "letter": "accept",
        "pinyin": "jiēshòu"
    },
    "423": {
        "character": "结束",
        "letter": "to end",
        "pinyin": "jiéshù"
    },
    "424": {
        "character": "节约",
        "letter": "saving",
        "pinyin": "jiéyuē"
    },
    "425": {
        "character": "接着",
        "letter": "then, to carry on",
        "pinyin": "jiēzhe"
    },
    "426": {
        "character": "几乎",
        "letter": "almost",
        "pinyin": "jīhū"
    },
    "427": {
        "character": "计划",
        "letter": "plan",
        "pinyin": "jìhuà"
    },
    "428": {
        "character": "机会",
        "letter": "opportunity or chance",
        "pinyin": "jīhuì"
    },
    "429": {
        "character": "积极",
        "letter": "energetic, proactive, positive",
        "pinyin": "jījí"
    },
    "430": {
        "character": "季节",
        "letter": "season",
        "pinyin": "jìjié"
    },
    "431": {
        "character": "积累",
        "letter": "accumulation",
        "pinyin": "jīlěi"
    },
    "432": {
        "character": "进",
        "letter": "to enter",
        "pinyin": "jìn"
    },
    "433": {
        "character": "近",
        "letter": "near",
        "pinyin": "jìn"
    },
    "434": {
        "character": "精彩",
        "letter": "marvellous, brilliant",
        "pinyin": "jīngcǎi"
    },
    "435": {
        "character": "警察",
        "letter": "policeman",
        "pinyin": "jǐngchá"
    },
    "436": {
        "character": "经常",
        "letter": "often",
        "pinyin": "jīngcháng"
    },
    "437": {
        "character": "经过",
        "letter": "to pass",
        "pinyin": "jīngguò"
    },
    "438": {
        "character": "经济",
        "letter": "economic",
        "pinyin": "jīngjì"
    },
    "439": {
        "character": "京剧",
        "letter": "beijing opera",
        "pinyin": "jīngjù"
    },
    "440": {
        "character": "经历",
        "letter": "experience",
        "pinyin": "jīnglì"
    },
    "441": {
        "character": "经理",
        "letter": "manager",
        "pinyin": "jīnglǐ"
    },
    "442": {
        "character": "竟然",
        "letter": "unexpectedly",
        "pinyin": "jìngrán"
    },
    "443": {
        "character": "景色",
        "letter": "view, scenery",
        "pinyin": "jǐngsè"
    },
    "444": {
        "character": "尽管",
        "letter": "although, despite",
        "pinyin": "jǐnguǎn"
    },
    "445": {
        "character": "经验",
        "letter": "experience",
        "pinyin": "jīngyàn"
    },
    "446": {
        "character": "竞争",
        "letter": "competition",
        "pinyin": "jìngzhēng"
    },
    "447": {
        "character": "镜子",
        "letter": "mirror",
        "pinyin": "jìngzi"
    },
    "448": {
        "character": "今天",
        "letter": "today",
        "pinyin": "jīntiān"
    },
    "449": {
        "character": "进行",
        "letter": "in progress",
        "pinyin": "jìnxíng"
    },
    "450": {
        "character": "紧张",
        "letter": "nervous",
        "pinyin": "jǐnzhāng"
    },
    "451": {
        "character": "禁止",
        "letter": "prohibit, forbid",
        "pinyin": "jìnzhǐ"
    },
    "452": {
        "character": "既然",
        "letter": "since, as, although",
        "pinyin": "jìrán"
    },
    "453": {
        "character": "及时",
        "letter": "timely, without delay",
        "pinyin": "jíshí"
    },
    "454": {
        "character": "即使",
        "letter": "even if",
        "pinyin": "jíshǐ"
    },
    "455": {
        "character": "技术",
        "letter": "technology",
        "pinyin": "jìshù"
    },
    "456": {
        "character": "旧",
        "letter": "old or used",
        "pinyin": "jiù"
    },
    "457": {
        "character": "久",
        "letter": "long (in time)",
        "pinyin": "jiǔ"
    },
    "458": {
        "character": "九",
        "letter": "nine",
        "pinyin": "jiǔ"
    },
    "459": {
        "character": "就",
        "letter": "at once",
        "pinyin": "jiǜ"
    },
    "460": {
        "character": "究竟",
        "letter": "after all, actually",
        "pinyin": "jiūjìng"
    },
    "461": {
        "character": "继续",
        "letter": "continue",
        "pinyin": "jìxù"
    },
    "462": {
        "character": "记者",
        "letter": "reporter, journalist",
        "pinyin": "jìzhě"
    },
    "463": {
        "character": "举",
        "letter": "lift, to hold up, to raise",
        "pinyin": "jǔ"
    },
    "464": {
        "character": "举办",
        "letter": "to conduct, to hold",
        "pinyin": "jǔbàn"
    },
    "465": {
        "character": "觉得",
        "letter": "to feel or to think",
        "pinyin": "juédé"
    },
    "466": {
        "character": "决定",
        "letter": "to decide",
        "pinyin": "juédìng"
    },
    "467": {
        "character": "聚会",
        "letter": "get together",
        "pinyin": "jùhuì"
    },
    "468": {
        "character": "拒绝",
        "letter": "refuse, decline, reject",
        "pinyin": "jùjué"
    },
    "469": {
        "character": "距离",
        "letter": "distance",
        "pinyin": "jùlí"
    },
    "470": {
        "character": "举行",
        "letter": "to hold (event)",
        "pinyin": "jǔxíng"
    },
    "471": {
        "character": "句子",
        "letter": "sentence",
        "pinyin": "jùzi"
    },
    "472": {
        "character": "咖啡",
        "letter": "coffee",
        "pinyin": "kāfēi"
    },
    "473": {
        "character": "开",
        "letter": "to drive or to open",
        "pinyin": "kāi"
    },
    "474": {
        "character": "开始",
        "letter": "to begin",
        "pinyin": "kāishǐ"
    },
    "475": {
        "character": "开玩笑",
        "letter": "just kidding, to make fun",
        "pinyin": "kāiwánxiào"
    },
    "476": {
        "character": "开心",
        "letter": "to feel happy, to have a great time",
        "pinyin": "kāixīn"
    },
    "477": {
        "character": "看",
        "letter": "to look or to watch",
        "pinyin": "kàn"
    },
    "478": {
        "character": "看法",
        "letter": "view",
        "pinyin": "kànfǎ"
    },
    "479": {
        "character": "看见",
        "letter": "to see",
        "pinyin": "kànjiàn"
    },
    "480": {
        "character": "考虑",
        "letter": "consideration",
        "pinyin": "kǎolǜ"
    },
    "481": {
        "character": "考试",
        "letter": "exam",
        "pinyin": "kǎoshì"
    },
    "482": {
        "character": "烤鸭",
        "letter": "roast duck",
        "pinyin": "kǎoyā"
    },
    "483": {
        "character": "课",
        "letter": "lesson",
        "pinyin": "kè"
    },
    "484": {
        "character": "刻",
        "letter": "quarter (time)",
        "pinyin": "kè"
    },
    "485": {
        "character": "渴",
        "letter": "thirsty",
        "pinyin": "kě"
    },
    "486": {
        "character": "棵",
        "letter": "classifier for trees",
        "pinyin": "kē"
    },
    "487": {
        "character": "可爱",
        "letter": "cute",
        "pinyin": "Kě’ài"
    },
    "488": {
        "character": "可怜",
        "letter": "pathetic, pitiful",
        "pinyin": "kělián"
    },
    "489": {
        "character": "肯定",
        "letter": "to be sure, to be certain",
        "pinyin": "kěndìng"
    },
    "490": {
        "character": "可能",
        "letter": "maybe",
        "pinyin": "kěnéng"
    },
    "491": {
        "character": "客人",
        "letter": "guest",
        "pinyin": "kèren"
    },
    "492": {
        "character": "可是",
        "letter": "however, but",
        "pinyin": "kěshì"
    },
    "493": {
        "character": "咳嗽",
        "letter": "cough",
        "pinyin": "késou"
    },
    "494": {
        "character": "客厅",
        "letter": "living room",
        "pinyin": "kètīng"
    },
    "495": {
        "character": "可惜",
        "letter": "unfortunately",
        "pinyin": "kěxī"
    },
    "496": {
        "character": "科学",
        "letter": "science",
        "pinyin": "kēxué"
    },
    "497": {
        "character": "可以",
        "letter": "can (to be permitted to)",
        "pinyin": "kěyǐ"
    },
    "498": {
        "character": "空",
        "letter": "leisure, free time, to empty",
        "pinyin": "kōng"
    },
    "499": {
        "character": "恐怕",
        "letter": "I'm afraid, to fear",
        "pinyin": "kǒngpà"
    },
    "500": {
        "character": "空气",
        "letter": "air",
        "pinyin": "kōngqì"
    },
    "501": {
        "character": "空调",
        "letter": "air conditioner",
        "pinyin": "kōngtiáo"
    },
    "502": {
        "character": "口",
        "letter": "mouth",
        "pinyin": "kǒu"
    },
    "503": {
        "character": "苦",
        "letter": "bitter, pain, to suffer",
        "pinyin": "kǔ"
    },
    "504": {
        "character": "哭",
        "letter": "to cry",
        "pinyin": "kū"
    },
    "505": {
        "character": "块",
        "letter": "basic monetary unit of China",
        "pinyin": "kuài"
    },
    "506": {
        "character": "快",
        "letter": "fast",
        "pinyin": "kuài"
    },
    "507": {
        "character": "快乐",
        "letter": "happy",
        "pinyin": "kuàilè"
    },
    "508": {
        "character": "筷子",
        "letter": "chopsticks",
        "pinyin": "kuàizi"
    },
    "509": {
        "character": "矿泉水",
        "letter": "mineral water",
        "pinyin": "kuàngquán shuǐ"
    },
    "510": {
        "character": "困",
        "letter": "sleepy",
        "pinyin": "kùn"
    },
    "511": {
        "character": "困难",
        "letter": "difficulty, problem, issue",
        "pinyin": "kùnnan"
    },
    "512": {
        "character": "裤子",
        "letter": "pants",
        "pinyin": "kùzi"
    },
    "513": {
        "character": "辣",
        "letter": "hot (spicy)",
        "pinyin": "là"
    },
    "514": {
        "character": "拉",
        "letter": "pull",
        "pinyin": "lā"
    },
    "515": {
        "character": "来",
        "letter": "to come",
        "pinyin": "lái"
    },
    "516": {
        "character": "来不及",
        "letter": "there's not enough time",
        "pinyin": "láibují"
    },
    "517": {
        "character": "来得及",
        "letter": "there's still time",
        "pinyin": "láidejí"
    },
    "518": {
        "character": "来自",
        "letter": "from, come from",
        "pinyin": "láizì"
    },
    "519": {
        "character": "垃圾桶",
        "letter": "trash, rubbish bin",
        "pinyin": "lājītǒng"
    },
    "520": {
        "character": "蓝",
        "letter": "blue",
        "pinyin": "lán"
    },
    "521": {
        "character": "懒",
        "letter": "lazy",
        "pinyin": "lǎn"
    },
    "522": {
        "character": "浪费",
        "letter": "waste",
        "pinyin": "làngfèi"
    },
    "523": {
        "character": "浪漫",
        "letter": "romantic",
        "pinyin": "làngmàn"
    },
    "524": {
        "character": "老",
        "letter": "old (in age)",
        "pinyin": "lǎo"
    },
    "525": {
        "character": "老虎",
        "letter": "tiger",
        "pinyin": "lǎohǔ"
    },
    "526": {
        "character": "老师",
        "letter": "teacher",
        "pinyin": "lǎoshī"
    },
    "527": {
        "character": "了",
        "letter": "aspect particle",
        "pinyin": "le"
    },
    "528": {
        "character": "累",
        "letter": "tired",
        "pinyin": "lèi"
    },
    "529": {
        "character": "冷",
        "letter": "cold",
        "pinyin": "lěng"
    },
    "530": {
        "character": "冷静",
        "letter": "calm down, cool-headed",
        "pinyin": "lěngjìng"
    },
    "531": {
        "character": "离",
        "letter": "away from",
        "pinyin": "lí"
    },
    "532": {
        "character": "里",
        "letter": "inside",
        "pinyin": "lǐ"
    },
    "533": {
        "character": "俩",
        "letter": "both, some",
        "pinyin": "liǎ"
    },
    "534": {
        "character": "连",
        "letter": "even, repeatedly",
        "pinyin": "lián"
    },
    "535": {
        "character": "脸",
        "letter": "face",
        "pinyin": "liǎn"
    },
    "536": {
        "character": "辆",
        "letter": "for vehicles",
        "pinyin": "liàng"
    },
    "537": {
        "character": "两",
        "letter": "two",
        "pinyin": "liǎng"
    },
    "538": {
        "character": "凉快",
        "letter": "nice and cold, pleasantly cool",
        "pinyin": "liángkuai"
    },
    "539": {
        "character": "联系",
        "letter": "contact, connection, relation",
        "pinyin": "liánxì"
    },
    "540": {
        "character": "练习",
        "letter": "to practice",
        "pinyin": "liànxí"
    },
    "541": {
        "character": "了解",
        "letter": "to know well",
        "pinyin": "liǎojiě"
    },
    "542": {
        "character": "礼拜天",
        "letter": "sunday",
        "pinyin": "lǐbài tiān"
    },
    "543": {
        "character": "理发",
        "letter": "haircut, barber, hairdressing",
        "pinyin": "lǐfà"
    },
    "544": {
        "character": "厉害",
        "letter": "great, awesome, tremendous",
        "pinyin": "lìhai"
    },
    "545": {
        "character": "理解",
        "letter": "understanding, comprehension",
        "pinyin": "lǐjiě"
    },
    "546": {
        "character": "离开",
        "letter": "to leave",
        "pinyin": "líkāi"
    },
    "547": {
        "character": "礼貌",
        "letter": "courtesy, manners, politeness",
        "pinyin": "lǐmào"
    },
    "548": {
        "character": "零",
        "letter": "zero",
        "pinyin": "líng"
    },
    "549": {
        "character": "零钱",
        "letter": "small change, pocket money",
        "pinyin": "língqián"
    },
    "550": {
        "character": "另外",
        "letter": "in addition",
        "pinyin": "lìngwài"
    },
    "551": {
        "character": "邻居",
        "letter": "neighbor",
        "pinyin": "línjū"
    },
    "552": {
        "character": "力气",
        "letter": "strength",
        "pinyin": "lìqi"
    },
    "553": {
        "character": "例如",
        "letter": "for example",
        "pinyin": "lìrú"
    },
    "554": {
        "character": "历史",
        "letter": "history",
        "pinyin": "lìshǐ"
    },
    "555": {
        "character": "留",
        "letter": "retain, stay, keep, preserve",
        "pinyin": "liú"
    },
    "556": {
        "character": "六",
        "letter": "six",
        "pinyin": "liù"
    },
    "557": {
        "character": "流利",
        "letter": "fluent",
        "pinyin": "liúlì"
    },
    "558": {
        "character": "流行",
        "letter": "popular",
        "pinyin": "liúxíng"
    },
    "559": {
        "character": "礼物",
        "letter": "gift",
        "pinyin": "lǐwù"
    },
    "560": {
        "character": "理想",
        "letter": "ideal, perfection, desirable",
        "pinyin": "lǐxiǎng"
    },
    "561": {
        "character": "楼",
        "letter": "building or floor",
        "pinyin": "lóu"
    },
    "562": {
        "character": "路",
        "letter": "road",
        "pinyin": "lù"
    },
    "563": {
        "character": "绿",
        "letter": "green",
        "pinyin": "lǜ"
    },
    "564": {
        "character": "乱",
        "letter": "chaos, disorderly",
        "pinyin": "luàn"
    },
    "565": {
        "character": "律师",
        "letter": "lawyer",
        "pinyin": "lǜshī"
    },
    "566": {
        "character": "旅行",
        "letter": "travel, trip, journey",
        "pinyin": "lǚxíng"
    },
    "567": {
        "character": "旅游",
        "letter": "to travel",
        "pinyin": "lǚyóu"
    },
    "568": {
        "character": "吗",
        "letter": "question particle",
        "pinyin": "ma"
    },
    "569": {
        "character": "马",
        "letter": "horse",
        "pinyin": "mǎ"
    },
    "570": {
        "character": "麻烦",
        "letter": "trouble, inconvenient",
        "pinyin": "máfan"
    },
    "571": {
        "character": "马虎",
        "letter": "careless",
        "pinyin": "mǎhu"
    },
    "572": {
        "character": "卖",
        "letter": "to sell",
        "pinyin": "mài"
    },
    "573": {
        "character": "买",
        "letter": "to buy",
        "pinyin": "mǎi"
    },
    "574": {
        "character": "妈妈",
        "letter": "mom",
        "pinyin": "māma"
    },
    "575": {
        "character": "慢",
        "letter": "slow",
        "pinyin": "màn"
    },
    "576": {
        "character": "满",
        "letter": "full, completely, satisfied",
        "pinyin": "mǎn"
    },
    "577": {
        "character": "忙",
        "letter": "busy",
        "pinyin": "máng"
    },
    "578": {
        "character": "满意",
        "letter": "satisfied",
        "pinyin": "mǎnyì"
    },
    "579": {
        "character": "毛",
        "letter": "hair, feather, wool, down",
        "pinyin": "máo"
    },
    "580": {
        "character": "猫",
        "letter": "cat",
        "pinyin": "māo"
    },
    "581": {
        "character": "毛巾",
        "letter": "towel",
        "pinyin": "máojīn"
    },
    "582": {
        "character": "帽子",
        "letter": "hat or cap",
        "pinyin": "màozi"
    },
    "583": {
        "character": "马上",
        "letter": "immediately",
        "pinyin": "mǎshàng"
    },
    "584": {
        "character": "没",
        "letter": "not",
        "pinyin": "méi"
    },
    "585": {
        "character": "每",
        "letter": "every",
        "pinyin": "měi"
    },
    "586": {
        "character": "没关系",
        "letter": "it’s all right",
        "pinyin": "méi guānxi"
    },
    "587": {
        "character": "美丽",
        "letter": "beautiful, pretty",
        "pinyin": "měilì"
    },
    "588": {
        "character": "妹妹",
        "letter": "younger sister",
        "pinyin": "mèimei"
    },
    "589": {
        "character": "门",
        "letter": "door",
        "pinyin": "mén"
    },
    "590": {
        "character": "梦",
        "letter": "dream",
        "pinyin": "mèng"
    },
    "591": {
        "character": "米",
        "letter": "meter",
        "pinyin": "mǐ"
    },
    "592": {
        "character": "面包",
        "letter": "bread",
        "pinyin": "miànbāo"
    },
    "593": {
        "character": "免费",
        "letter": "free of charge",
        "pinyin": "miǎnfèi"
    },
    "594": {
        "character": "面条",
        "letter": "noodle",
        "pinyin": "miàntiáo"
    },
    "595": {
        "character": "秒",
        "letter": "second (of time)",
        "pinyin": "miǎo"
    },
    "596": {
        "character": "米饭",
        "letter": "(cooked) rice",
        "pinyin": "mǐfàn"
    },
    "597": {
        "character": "迷路",
        "letter": "get lost",
        "pinyin": "mílù"
    },
    "598": {
        "character": "密码",
        "letter": "password, secret code, pin number",
        "pinyin": "mìmǎ"
    },
    "599": {
        "character": "明白",
        "letter": "to understand",
        "pinyin": "míngbai"
    },
    "600": {
        "character": "明天",
        "letter": "tomorrow",
        "pinyin": "míngtiān"
    },
    "601": {
        "character": "名字",
        "letter": "name",
        "pinyin": "míngzì"
    },
    "602": {
        "character": "民族",
        "letter": "nationality, ethnic group",
        "pinyin": "mínzú"
    },
    "603": {
        "character": "目的",
        "letter": "purpose, target, objective",
        "pinyin": "mùdì"
    },
    "604": {
        "character": "互联网",
        "letter": "internet",
        "pinyin": "mùliánwǎng"
    },
    "605": {
        "character": "母亲",
        "letter": "mother",
        "pinyin": "mǔqīn"
    },
    "606": {
        "character": "拿",
        "letter": "to hold or to take",
        "pinyin": "ná"
    },
    "607": {
        "character": "那/那儿",
        "letter": "that/there",
        "pinyin": "nà/nàr"
    },
    "608": {
        "character": "哪/哪儿",
        "letter": "which/where",
        "pinyin": "nǎ/nǎr"
    },
    "609": {
        "character": "奶奶",
        "letter": "grandma",
        "pinyin": "nǎinai"
    },
    "610": {
        "character": "耐心",
        "letter": "patience",
        "pinyin": "nàixīn"
    },
    "611": {
        "character": "南",
        "letter": "south",
        "pinyin": "nán"
    },
    "612": {
        "character": "难",
        "letter": "difficult",
        "pinyin": "nán"
    },
    "613": {
        "character": "难道",
        "letter": "could it be that...?",
        "pinyin": "nándào"
    },
    "614": {
        "character": "难过",
        "letter": "sad",
        "pinyin": "nánguò"
    },
    "615": {
        "character": "男人",
        "letter": "man",
        "pinyin": "nánrén"
    },
    "616": {
        "character": "难受",
        "letter": "uncomfortable",
        "pinyin": "nánshòu"
    },
    "617": {
        "character": "呢",
        "letter": "question particle",
        "pinyin": "ne"
    },
    "618": {
        "character": "内",
        "letter": "inside, inner, within",
        "pinyin": "nèi"
    },
    "619": {
        "character": "内容",
        "letter": "content, details",
        "pinyin": "nèiróng"
    },
    "620": {
        "character": "能",
        "letter": "can (to be able to)",
        "pinyin": "néng"
    },
    "621": {
        "character": "能力",
        "letter": "capability, ability",
        "pinyin": "nénglì"
    },
    "622": {
        "character": "你",
        "letter": "you (singular)",
        "pinyin": "nǐ"
    },
    "623": {
        "character": "年",
        "letter": "year",
        "pinyin": "nián"
    },
    "624": {
        "character": "年级",
        "letter": "grade",
        "pinyin": "niánjí"
    },
    "625": {
        "character": "年龄",
        "letter": "age (a person)",
        "pinyin": "niánlíng"
    },
    "626": {
        "character": "年轻",
        "letter": "young",
        "pinyin": "niánqīng"
    },
    "627": {
        "character": "鸟",
        "letter": "bird",
        "pinyin": "niǎo"
    },
    "628": {
        "character": "您",
        "letter": "you (singular/honorific)",
        "pinyin": "nín"
    },
    "629": {
        "character": "牛奶",
        "letter": "milk",
        "pinyin": "niúnǎi"
    },
    "630": {
        "character": "弄",
        "letter": "get, make",
        "pinyin": "nòng"
    },
    "631": {
        "character": "女儿",
        "letter": "daughter",
        "pinyin": "nǚ’ér"
    },
    "632": {
        "character": "暖和",
        "letter": "warm",
        "pinyin": "nuǎnhuo"
    },
    "633": {
        "character": "努力",
        "letter": "studious or hardworking",
        "pinyin": "nǔlì"
    },
    "634": {
        "character": "女人",
        "letter": "woman",
        "pinyin": "nǚrén"
    },
    "635": {
        "character": "偶尔",
        "letter": "occasionally",
        "pinyin": "ǒu'ěr"
    },
    "636": {
        "character": "爬山",
        "letter": "to climb mountain",
        "pinyin": "pá shān"
    },
    "637": {
        "character": "排队",
        "letter": "queue, line up",
        "pinyin": "páiduì"
    },
    "638": {
        "character": "排列",
        "letter": "array, arrangement",
        "pinyin": "páiliè"
    },
    "639": {
        "character": "判断",
        "letter": "judgment",
        "pinyin": "pànduàn"
    },
    "640": {
        "character": "胖",
        "letter": "fat",
        "pinyin": "pàng"
    },
    "641": {
        "character": "旁边",
        "letter": "side",
        "pinyin": "pángbiān"
    },
    "642": {
        "character": "盘子",
        "letter": "plate",
        "pinyin": "pánzi"
    },
    "643": {
        "character": "跑步",
        "letter": "to run",
        "pinyin": "pǎo bù"
    },
    "644": {
        "character": "陪",
        "letter": "accompany",
        "pinyin": "péi"
    },
    "645": {
        "character": "朋友",
        "letter": "friend",
        "pinyin": "péngyǒu"
    },
    "646": {
        "character": "骗",
        "letter": "to cheat, to trick, to fool",
        "pinyin": "piàn"
    },
    "647": {
        "character": "篇",
        "letter": "piece, sheet, articles",
        "pinyin": "piān"
    },
    "648": {
        "character": "便宜",
        "letter": "cheap",
        "pinyin": "piányi"
    },
    "649": {
        "character": "票",
        "letter": "ticket",
        "pinyin": "piào"
    },
    "650": {
        "character": "漂亮",
        "letter": "pretty",
        "pinyin": "piàoliang"
    },
    "651": {
        "character": "皮肤",
        "letter": "skin",
        "pinyin": "pífū"
    },
    "652": {
        "character": "啤酒",
        "letter": "beer",
        "pinyin": "píjiǔ"
    },
    "653": {
        "character": "苹果",
        "letter": "apple",
        "pinyin": "píngguǒ"
    },
    "654": {
        "character": "乒乓球",
        "letter": "table tennis",
        "pinyin": "pīngpāng qiú"
    },
    "655": {
        "character": "平时",
        "letter": "peacetime, in normal times",
        "pinyin": "píngshí"
    },
    "656": {
        "character": "批评",
        "letter": "criticism",
        "pinyin": "pīpíng"
    },
    "657": {
        "character": "脾气",
        "letter": "temperament, disposition",
        "pinyin": "píqi"
    },
    "658": {
        "character": "破",
        "letter": "broken, damaged",
        "pinyin": "pò"
    },
    "659": {
        "character": "普遍",
        "letter": "universal",
        "pinyin": "pǔbiàn"
    },
    "660": {
        "character": "葡萄",
        "letter": "grape",
        "pinyin": "pútáo"
    },
    "661": {
        "character": "普通话",
        "letter": "(standard) Mandarin",
        "pinyin": "pǔtōnghuà"
    },
    "662": {
        "character": "骑",
        "letter": "to ride",
        "pinyin": "qí"
    },
    "663": {
        "character": "七",
        "letter": "seven",
        "pinyin": "qī"
    },
    "664": {
        "character": "起床",
        "letter": "to get up",
        "pinyin": "qǐ chuáng"
    },
    "665": {
        "character": "钱",
        "letter": "money",
        "pinyin": "qián"
    },
    "666": {
        "character": "千",
        "letter": "thousand",
        "pinyin": "qiān"
    },
    "667": {
        "character": "铅笔",
        "letter": "pencil",
        "pinyin": "qiānbǐ"
    },
    "668": {
        "character": "前面",
        "letter": "front",
        "pinyin": "qiánmiàn"
    },
    "669": {
        "character": "千万",
        "letter": "ten million",
        "pinyin": "qiānwàn"
    },
    "670": {
        "character": "签证",
        "letter": "visa",
        "pinyin": "qiānzhèng"
    },
    "671": {
        "character": "桥",
        "letter": "bridge",
        "pinyin": "qiáo"
    },
    "672": {
        "character": "敲",
        "letter": "knock",
        "pinyin": "qiāo"
    },
    "673": {
        "character": "巧克力",
        "letter": "chocolate",
        "pinyin": "qiǎokèlì"
    },
    "674": {
        "character": "其次",
        "letter": "next, second",
        "pinyin": "qícì"
    },
    "675": {
        "character": "奇怪",
        "letter": "strange",
        "pinyin": "qíguài"
    },
    "676": {
        "character": "气候",
        "letter": "climate",
        "pinyin": "qìhòu"
    },
    "677": {
        "character": "晴",
        "letter": "sunny",
        "pinyin": "qíng"
    },
    "678": {
        "character": "请",
        "letter": "please…",
        "pinyin": "qǐng"
    },
    "679": {
        "character": "轻",
        "letter": "light",
        "pinyin": "qīng"
    },
    "680": {
        "character": "清楚",
        "letter": "clear",
        "pinyin": "qīngchu"
    },
    "681": {
        "character": "情况",
        "letter": "circumstances, situation",
        "pinyin": "qíngkuàng"
    },
    "682": {
        "character": "轻松",
        "letter": "easy, relaxed",
        "pinyin": "qīngsōng"
    },
    "683": {
        "character": "亲戚",
        "letter": "relative",
        "pinyin": "qīnqi"
    },
    "684": {
        "character": "穷",
        "letter": "poor",
        "pinyin": "qióng"
    },
    "685": {
        "character": "其实",
        "letter": "actually",
        "pinyin": "qíshí"
    },
    "686": {
        "character": "其他",
        "letter": "other",
        "pinyin": "qítā"
    },
    "687": {
        "character": "秋",
        "letter": "autumn",
        "pinyin": "qiū"
    },
    "688": {
        "character": "其中",
        "letter": "among",
        "pinyin": "qízhōng"
    },
    "689": {
        "character": "妻子",
        "letter": "wife",
        "pinyin": "qīzi"
    },
    "690": {
        "character": "去",
        "letter": "to go",
        "pinyin": "qù"
    },
    "691": {
        "character": "取",
        "letter": "take, get, choose",
        "pinyin": "qǔ"
    },
    "692": {
        "character": "全部",
        "letter": "whole, entire, complete",
        "pinyin": "quánbù"
    },
    "693": {
        "character": "区别",
        "letter": "difference, distinguish",
        "pinyin": "qūbié"
    },
    "694": {
        "character": "却",
        "letter": "but, however, yet, while",
        "pinyin": "què"
    },
    "695": {
        "character": "缺点",
        "letter": "weak point, shortcoming",
        "pinyin": "quēdiǎn"
    },
    "696": {
        "character": "缺少",
        "letter": "lack, shortage",
        "pinyin": "quēshǎo"
    },
    "697": {
        "character": "确实",
        "letter": "indeed, really, reliable",
        "pinyin": "quèshí"
    },
    "698": {
        "character": "去年",
        "letter": "last year",
        "pinyin": "qùnián"
    },
    "699": {
        "character": "裙子",
        "letter": "skirt",
        "pinyin": "qúnzi"
    },
    "700": {
        "character": "然而",
        "letter": "however, yet, but",
        "pinyin": "rán'ér"
    },
    "701": {
        "character": "让",
        "letter": "to let",
        "pinyin": "ràng"
    },
    "702": {
        "character": "然后",
        "letter": "then, afterwards",
        "pinyin": "ránhòu"
    },
    "703": {
        "character": "热",
        "letter": "hot",
        "pinyin": "rè"
    },
    "704": {
        "character": "人",
        "letter": "person or people",
        "pinyin": "rén"
    },
    "705": {
        "character": "热闹",
        "letter": "lively",
        "pinyin": "rènào"
    },
    "706": {
        "character": "扔",
        "letter": "throw",
        "pinyin": "rēng"
    },
    "707": {
        "character": "仍然",
        "letter": "still",
        "pinyin": "réngrán"
    },
    "708": {
        "character": "任何",
        "letter": "whatever, any",
        "pinyin": "rènhé"
    },
    "709": {
        "character": "认识",
        "letter": "to know",
        "pinyin": "rènshi"
    },
    "710": {
        "character": "认为",
        "letter": "to think or to consider",
        "pinyin": "rènwéi"
    },
    "711": {
        "character": "任务",
        "letter": "task, mission, assignment",
        "pinyin": "rènwu"
    },
    "712": {
        "character": "认真",
        "letter": "serious or careful",
        "pinyin": "rènzhēn"
    },
    "713": {
        "character": "热情",
        "letter": "enthusiastic",
        "pinyin": "rèqíng"
    },
    "714": {
        "character": "日",
        "letter": "day",
        "pinyin": "rì"
    },
    "715": {
        "character": "日记",
        "letter": "diary",
        "pinyin": "rìjì"
    },
    "716": {
        "character": "容易",
        "letter": "easy",
        "pinyin": "róngyì"
    },
    "717": {
        "character": "如果",
        "letter": "if",
        "pinyin": "rúguǒ"
    },
    "718": {
        "character": "入口",
        "letter": "entrance",
        "pinyin": "rùkǒu"
    },
    "719": {
        "character": "伞",
        "letter": "umbrella",
        "pinyin": "sǎn"
    },
    "720": {
        "character": "三",
        "letter": "three",
        "pinyin": "sān"
    },
    "721": {
        "character": "散步",
        "letter": "to go for a walk",
        "pinyin": "sànbù"
    },
    "722": {
        "character": "森林",
        "letter": "forest",
        "pinyin": "sēnlín"
    },
    "723": {
        "character": "沙发",
        "letter": "sofa",
        "pinyin": "shāfā"
    },
    "724": {
        "character": "上",
        "letter": "on, above or last",
        "pinyin": "shàng"
    },
    "725": {
        "character": "上班",
        "letter": "to go to work",
        "pinyin": "shàng bān"
    },
    "726": {
        "character": "商店",
        "letter": "shop",
        "pinyin": "shāngdiàn"
    },
    "727": {
        "character": "商量",
        "letter": "discuss, consult",
        "pinyin": "shāngliang"
    },
    "728": {
        "character": "上网",
        "letter": "to get online",
        "pinyin": "shàngwǎng"
    },
    "729": {
        "character": "上午",
        "letter": "morning",
        "pinyin": "shàngwǔ"
    },
    "730": {
        "character": "伤心",
        "letter": "sad, broken-hearted",
        "pinyin": "shāngxīn"
    },
    "731": {
        "character": "少",
        "letter": "few",
        "pinyin": "shǎo"
    },
    "732": {
        "character": "稍微",
        "letter": "slightly, a little bit",
        "pinyin": "shāowēi"
    },
    "733": {
        "character": "勺子",
        "letter": "spoon",
        "pinyin": "sháozi"
    },
    "734": {
        "character": "社会",
        "letter": "society",
        "pinyin": "shèhuì"
    },
    "735": {
        "character": "谁",
        "letter": "who",
        "pinyin": "shéi"
    },
    "736": {
        "character": "深",
        "letter": "deep",
        "pinyin": "shēn"
    },
    "737": {
        "character": "剩",
        "letter": "to be left",
        "pinyin": "shèng"
    },
    "738": {
        "character": "省",
        "letter": "province",
        "pinyin": "shěng"
    },
    "739": {
        "character": "生病",
        "letter": "to get sick",
        "pinyin": "shēng bìng"
    },
    "740": {
        "character": "生活",
        "letter": "life, activity",
        "pinyin": "shēnghuó"
    },
    "741": {
        "character": "生命",
        "letter": "life, living",
        "pinyin": "shēngmìng"
    },
    "742": {
        "character": "生气",
        "letter": "to get angry",
        "pinyin": "shēngqì"
    },
    "743": {
        "character": "生日",
        "letter": "birthday",
        "pinyin": "shēngrì"
    },
    "744": {
        "character": "生意",
        "letter": "business",
        "pinyin": "shēngyi"
    },
    "745": {
        "character": "声音",
        "letter": "sound or voice",
        "pinyin": "shēngyīn"
    },
    "746": {
        "character": "什么",
        "letter": "what",
        "pinyin": "shénme"
    },
    "747": {
        "character": "申请",
        "letter": "to apply for something",
        "pinyin": "shēnqǐng"
    },
    "748": {
        "character": "身体",
        "letter": "body",
        "pinyin": "shēntǐ"
    },
    "749": {
        "character": "甚至",
        "letter": "so much so that, even",
        "pinyin": "shènzhì"
    },
    "750": {
        "character": "十",
        "letter": "ten",
        "pinyin": "shí"
    },
    "751": {
        "character": "是",
        "letter": "to be",
        "pinyin": "shì"
    },
    "752": {
        "character": "使",
        "letter": "to make",
        "pinyin": "shǐ"
    },
    "753": {
        "character": "失败",
        "letter": "fail, lose",
        "pinyin": "shībài"
    },
    "754": {
        "character": "十分",
        "letter": "very, fully, divide into ten equal parts",
        "pinyin": "shífēn"
    },
    "755": {
        "character": "是否",
        "letter": "whether",
        "pinyin": "shìfǒu"
    },
    "756": {
        "character": "师傅",
        "letter": "qualified worker, master worker",
        "pinyin": "shīfu"
    },
    "757": {
        "character": "适合",
        "letter": "to fit, to suit",
        "pinyin": "shìhé"
    },
    "758": {
        "character": "时候",
        "letter": "a certain point in time",
        "pinyin": "shíhou"
    },
    "759": {
        "character": "实际",
        "letter": "actual, reality",
        "pinyin": "shíjì"
    },
    "760": {
        "character": "世纪",
        "letter": "century",
        "pinyin": "shìjì"
    },
    "761": {
        "character": "时间",
        "letter": "a period of time",
        "pinyin": "shíjiān"
    },
    "762": {
        "character": "世界",
        "letter": "world",
        "pinyin": "shìjiè"
    },
    "763": {
        "character": "事情",
        "letter": "matter",
        "pinyin": "shìqing"
    },
    "764": {
        "character": "失望",
        "letter": "disappointed",
        "pinyin": "shīwàng"
    },
    "765": {
        "character": "适应",
        "letter": "adapt, to be suitable",
        "pinyin": "shìyìng"
    },
    "766": {
        "character": "使用",
        "letter": "to use",
        "pinyin": "shǐyòng"
    },
    "767": {
        "character": "实在",
        "letter": "really, honestly",
        "pinyin": "shízài"
    },
    "768": {
        "character": "瘦",
        "letter": "thin",
        "pinyin": "shòu"
    },
    "769": {
        "character": "收",
        "letter": "receive, accept, collect",
        "pinyin": "shōu"
    },
    "770": {
        "character": "手表",
        "letter": "watch",
        "pinyin": "shǒubiǎo"
    },
    "771": {
        "character": "受不了",
        "letter": "unbearable, can't stand it",
        "pinyin": "shòubuliǎo"
    },
    "772": {
        "character": "受到",
        "letter": "suffer, obtained",
        "pinyin": "shòudào"
    },
    "773": {
        "character": "首都",
        "letter": "capital",
        "pinyin": "shǒudū"
    },
    "774": {
        "character": "售货员",
        "letter": "salesperson",
        "pinyin": "shòuhuòyuán"
    },
    "775": {
        "character": "手机",
        "letter": "mobile phone",
        "pinyin": "shǒujī"
    },
    "776": {
        "character": "收入",
        "letter": "income",
        "pinyin": "shōurù"
    },
    "777": {
        "character": "收拾",
        "letter": "to put in order, pack, tidy",
        "pinyin": "shōushi"
    },
    "778": {
        "character": "首先",
        "letter": "in the first place",
        "pinyin": "shǒuxiān"
    },
    "779": {
        "character": "树",
        "letter": "tree",
        "pinyin": "shù"
    },
    "780": {
        "character": "输",
        "letter": "lose, fail",
        "pinyin": "shū"
    },
    "781": {
        "character": "书",
        "letter": "book",
        "pinyin": "shū"
    },
    "782": {
        "character": "帅",
        "letter": "handsome",
        "pinyin": "shuài"
    },
    "783": {
        "character": "双",
        "letter": "pair",
        "pinyin": "shuāng"
    },
    "784": {
        "character": "刷牙",
        "letter": "to brush teeth",
        "pinyin": "shuāyá"
    },
    "785": {
        "character": "舒服",
        "letter": "comfortable",
        "pinyin": "shūfu"
    },
    "786": {
        "character": "水",
        "letter": "water",
        "pinyin": "shuǐ"
    },
    "787": {
        "character": "水果",
        "letter": "fruit",
        "pinyin": "shuǐguǒ"
    },
    "788": {
        "character": "睡觉",
        "letter": "to sleep",
        "pinyin": "shuìjiào"
    },
    "789": {
        "character": "水平",
        "letter": "level or standard",
        "pinyin": "shuǐpíng"
    },
    "790": {
        "character": "数量",
        "letter": "quantity, amount",
        "pinyin": "shùliàng"
    },
    "791": {
        "character": "顺便",
        "letter": "conveniently, Incidentally",
        "pinyin": "shùnbiàn"
    },
    "792": {
        "character": "顺利",
        "letter": "smoothly",
        "pinyin": "shùnlì"
    },
    "793": {
        "character": "顺序",
        "letter": "sequence, order",
        "pinyin": "shùnxù"
    },
    "794": {
        "character": "说话",
        "letter": "to speak",
        "pinyin": "shuōhuà"
    },
    "795": {
        "character": "说明",
        "letter": "explanation",
        "pinyin": "shuōmíng"
    },
    "796": {
        "character": "硕士",
        "letter": "master's degree",
        "pinyin": "shuòshì"
    },
    "797": {
        "character": "修理",
        "letter": "repair, maintenance",
        "pinyin": "shūri"
    },
    "798": {
        "character": "叔叔",
        "letter": "uncle",
        "pinyin": "shūshu"
    },
    "799": {
        "character": "熟悉",
        "letter": "be familiar with",
        "pinyin": "shúxī"
    },
    "800": {
        "character": "数学",
        "letter": "math",
        "pinyin": "shùxué"
    },
    "801": {
        "character": "数字",
        "letter": "number, digit",
        "pinyin": "shùzì"
    },
    "802": {
        "character": "四",
        "letter": "four",
        "pinyin": "sì"
    },
    "803": {
        "character": "死",
        "letter": "dead, die, pass out",
        "pinyin": "sǐ"
    },
    "804": {
        "character": "司机",
        "letter": "driver",
        "pinyin": "sījī"
    },
    "805": {
        "character": "送",
        "letter": "to give as a gift or to deliver",
        "pinyin": "sòng"
    },
    "806": {
        "character": "酸",
        "letter": "acid, sour, tart",
        "pinyin": "suān"
    },
    "807": {
        "character": "速度",
        "letter": "speed, rate",
        "pinyin": "sùdù"
    },
    "808": {
        "character": "岁",
        "letter": "year (of age)",
        "pinyin": "suì"
    },
    "809": {
        "character": "随便",
        "letter": "as one wishes, casual",
        "pinyin": "suíbiàn"
    },
    "810": {
        "character": "虽然",
        "letter": "although",
        "pinyin": "suīrán"
    },
    "811": {
        "character": "随着",
        "letter": "along with",
        "pinyin": "suízhe"
    },
    "812": {
        "character": "塑料袋",
        "letter": "plastic bag",
        "pinyin": "sùliàodài"
    },
    "813": {
        "character": "孙子",
        "letter": "grandson (paternal)",
        "pinyin": "sūnzi"
    },
    "814": {
        "character": "所以",
        "letter": "so",
        "pinyin": "suǒyǐ"
    },
    "815": {
        "character": "所有",
        "letter": "all",
        "pinyin": "suǒyǒu"
    },
    "816": {
        "character": "他",
        "letter": "he or him",
        "pinyin": "tā"
    },
    "817": {
        "character": "她",
        "letter": "she or her",
        "pinyin": "tā"
    },
    "818": {
        "character": "它",
        "letter": "it",
        "pinyin": "tā"
    },
    "819": {
        "character": "台",
        "letter": "platform, station, classifier for vehicles or machines",
        "pinyin": "tái"
    },
    "820": {
        "character": "抬",
        "letter": "to lift, to raise, to carry",
        "pinyin": "tái"
    },
    "821": {
        "character": "太",
        "letter": "too…",
        "pinyin": "tài"
    },
    "822": {
        "character": "态度",
        "letter": "attitude, manner, approach",
        "pinyin": "tàidu"
    },
    "823": {
        "character": "太阳",
        "letter": "sun",
        "pinyin": "tàiyáng"
    },
    "824": {
        "character": "谈",
        "letter": "chat, discuss, talk",
        "pinyin": "tán"
    },
    "825": {
        "character": "糖",
        "letter": "candy or sugar",
        "pinyin": "táng"
    },
    "826": {
        "character": "趟",
        "letter": "quantifier for the number of trips or runs made",
        "pinyin": "tàng"
    },
    "827": {
        "character": "躺",
        "letter": "lie, to recline",
        "pinyin": "tǎng"
    },
    "828": {
        "character": "汤",
        "letter": "soup, hot water",
        "pinyin": "tāng"
    },
    "829": {
        "character": "弹钢琴",
        "letter": "play the piano",
        "pinyin": "tángāngqín"
    },
    "830": {
        "character": "讨论",
        "letter": "to talk over, to discuss",
        "pinyin": "tǎolùn"
    },
    "831": {
        "character": "讨厌",
        "letter": "hate, dislike, annoying",
        "pinyin": "tǎoyàn"
    },
    "832": {
        "character": "特别",
        "letter": "special",
        "pinyin": "tèbié"
    },
    "833": {
        "character": "特点",
        "letter": "characteristic, feature",
        "pinyin": "tèdiǎn"
    },
    "834": {
        "character": "疼",
        "letter": "to ache",
        "pinyin": "téng"
    },
    "835": {
        "character": "提",
        "letter": "to carry, to lift, to raise",
        "pinyin": "tí"
    },
    "836": {
        "character": "题",
        "letter": "question (exam, exercise)",
        "pinyin": "tí"
    },
    "837": {
        "character": "踢足球",
        "letter": "to play soccer",
        "pinyin": "tī zúqiú"
    },
    "838": {
        "character": "甜",
        "letter": "sweet",
        "pinyin": "tián"
    },
    "839": {
        "character": "填空",
        "letter": "fill in the blanks",
        "pinyin": "tiánkòng"
    },
    "840": {
        "character": "天气",
        "letter": "weather",
        "pinyin": "tiānqì"
    },
    "841": {
        "character": "条",
        "letter": "for long objects",
        "pinyin": "tiáo"
    },
    "842": {
        "character": "跳舞",
        "letter": "to dance",
        "pinyin": "tiào wǔ"
    },
    "843": {
        "character": "条件",
        "letter": "condition, requirement",
        "pinyin": "tiáojiàn"
    },
    "844": {
        "character": "提高",
        "letter": "to improve",
        "pinyin": "tígāo"
    },
    "845": {
        "character": "提供",
        "letter": "supply, provide",
        "pinyin": "tígōng"
    },
    "846": {
        "character": "停",
        "letter": "stop, halt",
        "pinyin": "tíng"
    },
    "847": {
        "character": "挺",
        "letter": "very, extraordinary, outstanding, classifier for machine guns",
        "pinyin": "tǐng"
    },
    "848": {
        "character": "听",
        "letter": "to listen",
        "pinyin": "tīng"
    },
    "849": {
        "character": "提前",
        "letter": "in advance",
        "pinyin": "tíqián"
    },
    "850": {
        "character": "提醒",
        "letter": "remind",
        "pinyin": "tíxǐng"
    },
    "851": {
        "character": "体育",
        "letter": "sports or physical education",
        "pinyin": "tǐyù"
    },
    "852": {
        "character": "通过",
        "letter": "through",
        "pinyin": "tōngguò"
    },
    "853": {
        "character": "同情",
        "letter": "sympathy",
        "pinyin": "tóngqíng"
    },
    "854": {
        "character": "同时",
        "letter": "simultaneously, at the same time",
        "pinyin": "tóngshí"
    },
    "855": {
        "character": "同事",
        "letter": "colleague",
        "pinyin": "tóngshì"
    },
    "856": {
        "character": "同学",
        "letter": "schoolmate",
        "pinyin": "tóngxué"
    },
    "857": {
        "character": "同意",
        "letter": "to agree",
        "pinyin": "tóngyì"
    },
    "858": {
        "character": "通知",
        "letter": "notice, notification",
        "pinyin": "tōngzhī"
    },
    "859": {
        "character": "头发",
        "letter": "hair",
        "pinyin": "tóufa"
    },
    "860": {
        "character": "腿",
        "letter": "leg",
        "pinyin": "tuǐ"
    },
    "861": {
        "character": "推",
        "letter": "push",
        "pinyin": "tuī"
    },
    "862": {
        "character": "推迟",
        "letter": "delay, postpone",
        "pinyin": "tuīchí"
    },
    "863": {
        "character": "脱",
        "letter": "take off, get away from",
        "pinyin": "tuō"
    },
    "864": {
        "character": "突然",
        "letter": "suddenly",
        "pinyin": "tūrán"
    },
    "865": {
        "character": "图书馆",
        "letter": "library",
        "pinyin": "túshūguǎn"
    },
    "866": {
        "character": "外",
        "letter": "outside",
        "pinyin": "wài"
    },
    "867": {
        "character": "玩",
        "letter": "to play",
        "pinyin": "wán"
    },
    "868": {
        "character": "完",
        "letter": "to finish",
        "pinyin": "wán"
    },
    "869": {
        "character": "万",
        "letter": "ten thousand",
        "pinyin": "wàn"
    },
    "870": {
        "character": "碗",
        "letter": "bowl",
        "pinyin": "wǎn"
    },
    "871": {
        "character": "完成",
        "letter": "to complete or accomplish",
        "pinyin": "wánchéng"
    },
    "872": {
        "character": "忘记",
        "letter": "to forget",
        "pinyin": "wàngjì"
    },
    "873": {
        "character": "网球",
        "letter": "tennis",
        "pinyin": "wǎngqiú"
    },
    "874": {
        "character": "往往",
        "letter": "often, frequently",
        "pinyin": "wǎngwǎng"
    },
    "875": {
        "character": "网站",
        "letter": "website, network station",
        "pinyin": "wǎngzhàn"
    },
    "876": {
        "character": "完全",
        "letter": "completely, entirely",
        "pinyin": "wánquán"
    },
    "877": {
        "character": "晚上",
        "letter": "evening",
        "pinyin": "wǎnshàng"
    },
    "878": {
        "character": "袜子",
        "letter": "socks",
        "pinyin": "wàzi"
    },
    "879": {
        "character": "位",
        "letter": "measure word for people",
        "pinyin": "wèi"
    },
    "880": {
        "character": "为",
        "letter": "for (sb/sth)",
        "pinyin": "wèi"
    },
    "881": {
        "character": "喂",
        "letter": "hello (on the phone)",
        "pinyin": "wèi"
    },
    "882": {
        "character": "为什么",
        "letter": "why",
        "pinyin": "wèi shénme"
    },
    "883": {
        "character": "味道",
        "letter": "taste, flavor, smell",
        "pinyin": "wèidào"
    },
    "884": {
        "character": "为了",
        "letter": "for (purpose)",
        "pinyin": "wèile"
    },
    "885": {
        "character": "卫生间",
        "letter": "bathroom, toilet",
        "pinyin": "wèishēngjiān"
    },
    "886": {
        "character": "危险",
        "letter": "dangerous",
        "pinyin": "wēixiǎn"
    },
    "887": {
        "character": "问",
        "letter": "to ask",
        "pinyin": "wèn"
    },
    "888": {
        "character": "温度",
        "letter": "temperature",
        "pinyin": "wēndù"
    },
    "889": {
        "character": "文化",
        "letter": "culture",
        "pinyin": "wénhuà"
    },
    "890": {
        "character": "问题",
        "letter": "question",
        "pinyin": "wèntí"
    },
    "891": {
        "character": "文章",
        "letter": "article, essay",
        "pinyin": "wénzhāng"
    },
    "892": {
        "character": "我",
        "letter": "I or me",
        "pinyin": "wǒ"
    },
    "893": {
        "character": "我们",
        "letter": "we or me",
        "pinyin": "wǒmen"
    },
    "894": {
        "character": "无",
        "letter": "nothing",
        "pinyin": "wú"
    },
    "895": {
        "character": "五",
        "letter": "five",
        "pinyin": "wǔ"
    },
    "896": {
        "character": "误会",
        "letter": "misunderstand, mistake",
        "pinyin": "wùhuì"
    },
    "897": {
        "character": "无聊",
        "letter": "boring",
        "pinyin": "wúliáo"
    },
    "898": {
        "character": "无论",
        "letter": "no matter what",
        "pinyin": "wúlùn"
    },
    "899": {
        "character": "污染",
        "letter": "pollution, contamination",
        "pinyin": "wūrǎn"
    },
    "900": {
        "character": "洗",
        "letter": "to wash",
        "pinyin": "xǐ"
    },
    "901": {
        "character": "西",
        "letter": "west",
        "pinyin": "xī"
    },
    "902": {
        "character": "夏",
        "letter": "summer",
        "pinyin": "xià"
    },
    "903": {
        "character": "下",
        "letter": "under, below or next",
        "pinyin": "xià"
    },
    "904": {
        "character": "下雨",
        "letter": "to rain",
        "pinyin": "xià yǔ"
    },
    "905": {
        "character": "咸",
        "letter": "salty",
        "pinyin": "xián"
    },
    "906": {
        "character": "先",
        "letter": "first",
        "pinyin": "xiān"
    },
    "907": {
        "character": "向",
        "letter": "towards",
        "pinyin": "xiàng"
    },
    "908": {
        "character": "像",
        "letter": "as or like",
        "pinyin": "xiàng"
    },
    "909": {
        "character": "响",
        "letter": "ring, classifier for noises",
        "pinyin": "xiǎng"
    },
    "910": {
        "character": "想",
        "letter": "to think",
        "pinyin": "xiǎng"
    },
    "911": {
        "character": "香",
        "letter": "fragrant, sweet smelling",
        "pinyin": "xiāng"
    },
    "912": {
        "character": "相反",
        "letter": "opposite, contrary",
        "pinyin": "xiāngfǎn"
    },
    "913": {
        "character": "香蕉",
        "letter": "banana",
        "pinyin": "xiāngjiāo"
    },
    "914": {
        "character": "橡皮",
        "letter": "rubber, eraser",
        "pinyin": "xiàngpí"
    },
    "915": {
        "character": "相同",
        "letter": "same",
        "pinyin": "xiāngtóng"
    },
    "916": {
        "character": "详细",
        "letter": "detailed",
        "pinyin": "xiángxì"
    },
    "917": {
        "character": "相信",
        "letter": "to believe",
        "pinyin": "xiāngxìn"
    },
    "918": {
        "character": "现金",
        "letter": "cash",
        "pinyin": "xiànjīn"
    },
    "919": {
        "character": "羡慕",
        "letter": "envious, envy",
        "pinyin": "xiànmù"
    },
    "920": {
        "character": "先生",
        "letter": "Mr or sir",
        "pinyin": "xiānsheng"
    },
    "921": {
        "character": "现在",
        "letter": "now",
        "pinyin": "xiànzài"
    },
    "922": {
        "character": "笑",
        "letter": "to smile or to laugh",
        "pinyin": "xiào"
    },
    "923": {
        "character": "小",
        "letter": "small",
        "pinyin": "xiǎo"
    },
    "924": {
        "character": "小吃",
        "letter": "snack",
        "pinyin": "xiǎochī"
    },
    "925": {
        "character": "效果",
        "letter": "result, effect",
        "pinyin": "xiàoguǒ"
    },
    "926": {
        "character": "笑话",
        "letter": "joke",
        "pinyin": "xiàohua"
    },
    "927": {
        "character": "小伙子",
        "letter": "young man, young fellow",
        "pinyin": "xiǎohuǒzi"
    },
    "928": {
        "character": "小姐",
        "letter": "Miss",
        "pinyin": "xiǎojiě"
    },
    "929": {
        "character": "小时",
        "letter": "hour",
        "pinyin": "xiǎoshí"
    },
    "930": {
        "character": "小说",
        "letter": "novel, fiction",
        "pinyin": "xiǎoshuō"
    },
    "931": {
        "character": "消息",
        "letter": "news, information",
        "pinyin": "xiāoxi"
    },
    "932": {
        "character": "小心",
        "letter": "to be careful",
        "pinyin": "xiǎoxīn"
    },
    "933": {
        "character": "校长",
        "letter": "head of a school",
        "pinyin": "xiàozhǎng"
    },
    "934": {
        "character": "下午",
        "letter": "afternoon",
        "pinyin": "xiàwǔ"
    },
    "935": {
        "character": "鞋",
        "letter": "shoe",
        "pinyin": "xié"
    },
    "936": {
        "character": "写",
        "letter": "to write",
        "pinyin": "xiě"
    },
    "937": {
        "character": "些",
        "letter": "some",
        "pinyin": "xiē"
    },
    "938": {
        "character": "谢谢",
        "letter": "thanks",
        "pinyin": "xièxie"
    },
    "939": {
        "character": "西瓜",
        "letter": "watermelon",
        "pinyin": "xīguā"
    },
    "940": {
        "character": "习惯",
        "letter": "habit",
        "pinyin": "xíguàn"
    },
    "941": {
        "character": "西红柿",
        "letter": "tomato",
        "pinyin": "xīhóngshì"
    },
    "942": {
        "character": "喜欢",
        "letter": "to like",
        "pinyin": "xǐhuan"
    },
    "943": {
        "character": "信",
        "letter": "letter",
        "pinyin": "xìn"
    },
    "944": {
        "character": "新",
        "letter": "new",
        "pinyin": "xīn"
    },
    "945": {
        "character": "信封",
        "letter": "envelope",
        "pinyin": "xìnfēng"
    },
    "946": {
        "character": "行",
        "letter": "row, travel, all right",
        "pinyin": "xíng"
    },
    "947": {
        "character": "姓",
        "letter": "to be surnamed",
        "pinyin": "xìng"
    },
    "948": {
        "character": "醒",
        "letter": "wake up",
        "pinyin": "xǐng"
    },
    "949": {
        "character": "性别",
        "letter": "gender, sex",
        "pinyin": "xìngbié"
    },
    "950": {
        "character": "兴奋",
        "letter": "excitement",
        "pinyin": "xīngfèn"
    },
    "951": {
        "character": "幸福",
        "letter": "happiness",
        "pinyin": "xìngfú"
    },
    "952": {
        "character": "性格",
        "letter": "character, temperament",
        "pinyin": "xìnggé"
    },
    "953": {
        "character": "行李箱",
        "letter": "suitcase",
        "pinyin": "xínglǐxiāng"
    },
    "954": {
        "character": "星期",
        "letter": "week",
        "pinyin": "xīngqī"
    },
    "955": {
        "character": "兴趣",
        "letter": "interest",
        "pinyin": "xìngqù"
    },
    "956": {
        "character": "辛苦",
        "letter": "hard, exhausting",
        "pinyin": "xīnkǔ"
    },
    "957": {
        "character": "心情",
        "letter": "mood, frame of mind",
        "pinyin": "xīnqíng"
    },
    "958": {
        "character": "新闻",
        "letter": "news",
        "pinyin": "xīnwén"
    },
    "959": {
        "character": "信息",
        "letter": "information",
        "pinyin": "xìnxī"
    },
    "960": {
        "character": "新鲜",
        "letter": "fresh",
        "pinyin": "xīnxiān"
    },
    "961": {
        "character": "信心",
        "letter": "confidence, faith",
        "pinyin": "xìnxīn"
    },
    "962": {
        "character": "熊猫",
        "letter": "panda",
        "pinyin": "xióngmāo"
    },
    "963": {
        "character": "洗手间",
        "letter": "washroom",
        "pinyin": "xǐshǒujiān"
    },
    "964": {
        "character": "休息",
        "letter": "to rest",
        "pinyin": "xiūxi"
    },
    "965": {
        "character": "希望",
        "letter": "to hope",
        "pinyin": "xīwàng"
    },
    "966": {
        "character": "吸引",
        "letter": "to attract (interest, investment etc)",
        "pinyin": "xīyǐn"
    },
    "967": {
        "character": "洗澡",
        "letter": "to bathe",
        "pinyin": "xǐzǎo"
    },
    "968": {
        "character": "选择",
        "letter": "to choose",
        "pinyin": "xuǎnzé"
    },
    "969": {
        "character": "许多",
        "letter": "many, much, lot of",
        "pinyin": "xǔduō"
    },
    "970": {
        "character": "雪",
        "letter": "snow",
        "pinyin": "xuě"
    },
    "971": {
        "character": "学期",
        "letter": "semester, school term",
        "pinyin": "xuéqí"
    },
    "972": {
        "character": "学生",
        "letter": "student",
        "pinyin": "xuésheng"
    },
    "973": {
        "character": "学习",
        "letter": "to learn",
        "pinyin": "xuéxí"
    },
    "974": {
        "character": "学校",
        "letter": "school",
        "pinyin": "xuéxiào"
    },
    "975": {
        "character": "需要",
        "letter": "to need",
        "pinyin": "xūyào"
    },
    "976": {
        "character": "呀",
        "letter": "ahh!, expressing surprise or doubt",
        "pinyin": "ya"
    },
    "977": {
        "character": "牙膏",
        "letter": "toothpaste",
        "pinyin": "yágāo"
    },
    "978": {
        "character": "压力",
        "letter": "pressure",
        "pinyin": "yālì"
    },
    "979": {
        "character": "盐",
        "letter": "salt",
        "pinyin": "yán"
    },
    "980": {
        "character": "演出",
        "letter": "to perform, to show, to act (in a play)",
        "pinyin": "yǎnchū"
    },
    "981": {
        "character": "养成",
        "letter": "cultivate, acquire",
        "pinyin": "yǎngchéng"
    },
    "982": {
        "character": "严格",
        "letter": "strict, tight",
        "pinyin": "yángé"
    },
    "983": {
        "character": "阳光",
        "letter": "sunshine, sunlight",
        "pinyin": "yángguāng"
    },
    "984": {
        "character": "羊肉",
        "letter": "lamb or mutton",
        "pinyin": "yángròu"
    },
    "985": {
        "character": "样子",
        "letter": "looks, appearance",
        "pinyin": "yàngzi"
    },
    "986": {
        "character": "眼镜",
        "letter": "glasses",
        "pinyin": "yǎnjìng"
    },
    "987": {
        "character": "眼睛",
        "letter": "eye",
        "pinyin": "yǎnjīng"
    },
    "988": {
        "character": "研究",
        "letter": "graduate student",
        "pinyin": "yánjiūshēng"
    },
    "989": {
        "character": "颜色",
        "letter": "color",
        "pinyin": "yánsè"
    },
    "990": {
        "character": "演员",
        "letter": "actor or actress",
        "pinyin": "yǎnyuán"
    },
    "991": {
        "character": "严重",
        "letter": "serious, critical",
        "pinyin": "yánzhòng"
    },
    "992": {
        "character": "药",
        "letter": "medicine",
        "pinyin": "yào"
    },
    "993": {
        "character": "要",
        "letter": "to want",
        "pinyin": "yào"
    },
    "994": {
        "character": "邀请",
        "letter": "invitation",
        "pinyin": "yāoqǐng"
    },
    "995": {
        "character": "要求",
        "letter": "to require",
        "pinyin": "yāoqiú"
    },
    "996": {
        "character": "要是",
        "letter": "if",
        "pinyin": "yàoshi"
    },
    "997": {
        "character": "钥匙",
        "letter": "key",
        "pinyin": "yàoshi"
    },
    "998": {
        "character": "亚洲",
        "letter": "asia",
        "pinyin": "yàzhōu"
    },
    "999": {
        "character": "页",
        "letter": "page",
        "pinyin": "yè"
    },
    "1000": {
        "character": "也",
        "letter": "also",
        "pinyin": "yě"
    },
    "1001": {
        "character": "也许",
        "letter": "perhaps, maybe, probably",
        "pinyin": "yěxǔ"
    },
    "1002": {
        "character": "爷爷",
        "letter": "grandpa",
        "pinyin": "yéye"
    },
    "1003": {
        "character": "叶子",
        "letter": "leaf, foliage",
        "pinyin": "yèzi"
    },
    "1004": {
        "character": "以",
        "letter": "with, to use as, according to",
        "pinyin": "yǐ"
    },
    "1005": {
        "character": "一",
        "letter": "one",
        "pinyin": "yī"
    },
    "1006": {
        "character": "一般",
        "letter": "generally",
        "pinyin": "yìbān"
    },
    "1007": {
        "character": "一边",
        "letter": "at the same time",
        "pinyin": "yìbiān"
    },
    "1008": {
        "character": "一定",
        "letter": "definitely",
        "pinyin": "yídìng"
    },
    "1009": {
        "character": "衣服",
        "letter": "clothes",
        "pinyin": "yīfu"
    },
    "1010": {
        "character": "一共",
        "letter": "altogether",
        "pinyin": "yígòng"
    },
    "1011": {
        "character": "以后",
        "letter": "after or later",
        "pinyin": "yǐhòu"
    },
    "1012": {
        "character": "一会儿",
        "letter": "a short while",
        "pinyin": "yíhuìr"
    },
    "1013": {
        "character": "意见",
        "letter": "opinion, suggestion, objection",
        "pinyin": "yìjiàn"
    },
    "1014": {
        "character": "已经",
        "letter": "already",
        "pinyin": "yǐjīng"
    },
    "1015": {
        "character": "阴",
        "letter": "cloudy",
        "pinyin": "yīn"
    },
    "1016": {
        "character": "因此",
        "letter": "consequently, therefore",
        "pinyin": "yīncǐ"
    },
    "1017": {
        "character": "赢",
        "letter": "win, beat",
        "pinyin": "yíng"
    },
    "1018": {
        "character": "应该",
        "letter": "should",
        "pinyin": "yīnggāi"
    },
    "1019": {
        "character": "应聘",
        "letter": "to apply for position",
        "pinyin": "yìngpìn"
    },
    "1020": {
        "character": "影响",
        "letter": "to affect",
        "pinyin": "yǐngxiǎng"
    },
    "1021": {
        "character": "银行",
        "letter": "bank",
        "pinyin": "yínháng"
    },
    "1022": {
        "character": "引起",
        "letter": "to give rise, cause",
        "pinyin": "yǐnqǐ"
    },
    "1023": {
        "character": "因为",
        "letter": "because",
        "pinyin": "yīnwèi"
    },
    "1024": {
        "character": "印象",
        "letter": "impression, reflection",
        "pinyin": "yìnxiàng"
    },
    "1025": {
        "character": "音乐",
        "letter": "music",
        "pinyin": "yīnyuè"
    },
    "1026": {
        "character": "一起",
        "letter": "together",
        "pinyin": "yìqǐ"
    },
    "1027": {
        "character": "以前",
        "letter": "before or ago",
        "pinyin": "yǐqián"
    },
    "1028": {
        "character": "一切",
        "letter": "all, everything",
        "pinyin": "yíqiè"
    },
    "1029": {
        "character": "医生",
        "letter": "doctor",
        "pinyin": "yīshēng"
    },
    "1030": {
        "character": "艺术",
        "letter": "art",
        "pinyin": "yìshù"
    },
    "1031": {
        "character": "意思",
        "letter": "meaning",
        "pinyin": "yìsi"
    },
    "1032": {
        "character": "以为",
        "letter": "to think (wrongly)",
        "pinyin": "yǐwéi"
    },
    "1033": {
        "character": "一样",
        "letter": "same",
        "pinyin": "yíyàng"
    },
    "1034": {
        "character": "医院",
        "letter": "hospital",
        "pinyin": "yīyuàn"
    },
    "1035": {
        "character": "一直",
        "letter": "constantly",
        "pinyin": "yìzhí"
    },
    "1036": {
        "character": "椅子",
        "letter": "chair",
        "pinyin": "yǐzi"
    },
    "1037": {
        "character": "用",
        "letter": "to use",
        "pinyin": "yòng"
    },
    "1038": {
        "character": "勇敢",
        "letter": "brave, courageous",
        "pinyin": "yǒnggǎn"
    },
    "1039": {
        "character": "永远",
        "letter": "forever, eternal",
        "pinyin": "yǒngyuǎn"
    },
    "1040": {
        "character": "由",
        "letter": "from, to follow",
        "pinyin": "yóu"
    },
    "1041": {
        "character": "又",
        "letter": "again",
        "pinyin": "yòu"
    },
    "1042": {
        "character": "有",
        "letter": "to have",
        "pinyin": "yǒu"
    },
    "1043": {
        "character": "游泳",
        "letter": "to swim",
        "pinyin": "yóu yǒng"
    },
    "1044": {
        "character": "右边",
        "letter": "right",
        "pinyin": "yòubiān"
    },
    "1045": {
        "character": "优点",
        "letter": "advantage, benefit",
        "pinyin": "yōudiǎn"
    },
    "1046": {
        "character": "友好",
        "letter": "friendly",
        "pinyin": "yǒuhǎo"
    },
    "1047": {
        "character": "邮局",
        "letter": "post Office",
        "pinyin": "yóujú"
    },
    "1048": {
        "character": "有名",
        "letter": "famous",
        "pinyin": "yǒumíng"
    },
    "1049": {
        "character": "幽默",
        "letter": "humor",
        "pinyin": "yōumò"
    },
    "1050": {
        "character": "尤其",
        "letter": "especially, particularly",
        "pinyin": "yóuqí"
    },
    "1051": {
        "character": "有趣",
        "letter": "interesting, fascinating",
        "pinyin": "yǒuqù"
    },
    "1052": {
        "character": "游戏",
        "letter": "game",
        "pinyin": "yóuxì"
    },
    "1053": {
        "character": "优秀",
        "letter": "excellent, outstanding",
        "pinyin": "yōuxiù"
    },
    "1054": {
        "character": "友谊",
        "letter": "friendship, fellowship",
        "pinyin": "yǒuyì"
    },
    "1055": {
        "character": "由于",
        "letter": "due to, because of",
        "pinyin": "yóuyú"
    },
    "1056": {
        "character": "鱼",
        "letter": "fish",
        "pinyin": "yú"
    },
    "1057": {
        "character": "与",
        "letter": "versus, and",
        "pinyin": "yǔ"
    },
    "1058": {
        "character": "元",
        "letter": "basic monetary unit of China",
        "pinyin": "yuán"
    },
    "1059": {
        "character": "远",
        "letter": "far",
        "pinyin": "yuǎn"
    },
    "1060": {
        "character": "原来",
        "letter": "original",
        "pinyin": "yuánlái"
    },
    "1061": {
        "character": "原谅",
        "letter": "forgive",
        "pinyin": "yuánliàng"
    },
    "1062": {
        "character": "愿意",
        "letter": "to be willing to",
        "pinyin": "yuànyì"
    },
    "1063": {
        "character": "原因",
        "letter": "reason, cause, origin",
        "pinyin": "yuányīn"
    },
    "1064": {
        "character": "遇到",
        "letter": "to encounter",
        "pinyin": "yùdào"
    },
    "1065": {
        "character": "月",
        "letter": "month",
        "pinyin": "yuè"
    },
    "1066": {
        "character": "越",
        "letter": "more",
        "pinyin": "yuè"
    },
    "1067": {
        "character": "阅读",
        "letter": "read",
        "pinyin": "yuèdú"
    },
    "1068": {
        "character": "约会",
        "letter": "appointment, engagement, date",
        "pinyin": "yuēhuì"
    },
    "1069": {
        "character": "月亮",
        "letter": "moon",
        "pinyin": "yuèliang"
    },
    "1070": {
        "character": "语法",
        "letter": "grammar",
        "pinyin": "yǔfǎ"
    },
    "1071": {
        "character": "愉快",
        "letter": "cheerful, delightful, pleasant",
        "pinyin": "yúkuài"
    },
    "1072": {
        "character": "羽毛球",
        "letter": "badminton, shuttlecock",
        "pinyin": "yǔmáoqiú"
    },
    "1073": {
        "character": "云",
        "letter": "cloud",
        "pinyin": "yún"
    },
    "1074": {
        "character": "运动",
        "letter": "to do sports",
        "pinyin": "yùndòng"
    },
    "1075": {
        "character": "允许",
        "letter": "allow, permit",
        "pinyin": "yǔnxǔ"
    },
    "1076": {
        "character": "于是",
        "letter": "then, consequently",
        "pinyin": "yúshì"
    },
    "1077": {
        "character": "预习",
        "letter": "to prepare a lesson",
        "pinyin": "yùxí"
    },
    "1078": {
        "character": "语言",
        "letter": "language",
        "pinyin": "yǔyán"
    },
    "1079": {
        "character": "在",
        "letter": "to be in",
        "pinyin": "zài"
    },
    "1080": {
        "character": "再",
        "letter": "again",
        "pinyin": "zài"
    },
    "1081": {
        "character": "再见",
        "letter": "goodbye",
        "pinyin": "zàijiàn"
    },
    "1082": {
        "character": "脏",
        "letter": "dirty",
        "pinyin": "zāng"
    },
    "1083": {
        "character": "咱们",
        "letter": "we or us(including both speaker and person spoken to)",
        "pinyin": "zánmen"
    },
    "1084": {
        "character": "暂时",
        "letter": "temporary",
        "pinyin": "zànshí"
    },
    "1085": {
        "character": "早上",
        "letter": "early morning",
        "pinyin": "zǎoshàng"
    },
    "1086": {
        "character": "杂志",
        "letter": "magazine",
        "pinyin": "zázhì"
    },
    "1087": {
        "character": "增加",
        "letter": "increase",
        "pinyin": "zēngjiā"
    },
    "1088": {
        "character": "怎么",
        "letter": "how",
        "pinyin": "zěnme"
    },
    "1089": {
        "character": "怎么样",
        "letter": "how about",
        "pinyin": "zěnmeyàng"
    },
    "1090": {
        "character": "责任",
        "letter": "responsibility, duty",
        "pinyin": "zérèn"
    },
    "1091": {
        "character": "站",
        "letter": "to stand",
        "pinyin": "zhàn"
    },
    "1092": {
        "character": "张",
        "letter": "for flat objects",
        "pinyin": "zhāng"
    },
    "1093": {
        "character": "丈夫",
        "letter": "husband",
        "pinyin": "zhàngfu"
    },
    "1094": {
        "character": "占线",
        "letter": "busy (telephone)",
        "pinyin": "zhànxiàn"
    },
    "1095": {
        "character": "照",
        "letter": "according to",
        "pinyin": "zhào"
    },
    "1096": {
        "character": "找",
        "letter": "to find",
        "pinyin": "zhǎo"
    },
    "1097": {
        "character": "照顾",
        "letter": "to look after",
        "pinyin": "zhàogù"
    },
    "1098": {
        "character": "着急",
        "letter": "to worry",
        "pinyin": "zháojí"
    },
    "1099": {
        "character": "照片",
        "letter": "photo",
        "pinyin": "zhàopiàn"
    },
    "1100": {
        "character": "招聘",
        "letter": "recruitment, to invite applications for a job",
        "pinyin": "zhāopìn"
    },
    "1101": {
        "character": "照相机",
        "letter": "camera",
        "pinyin": "zhàoxiàngjī"
    },
    "1102": {
        "character": "着",
        "letter": "aspect particle",
        "pinyin": "zhe"
    },
    "1103": {
        "character": "这/这儿",
        "letter": "this/here",
        "pinyin": "zhè/zhèr"
    },
    "1104": {
        "character": "真",
        "letter": "really",
        "pinyin": "zhēn"
    },
    "1105": {
        "character": "正常",
        "letter": "normal, regular",
        "pinyin": "zhèngcháng"
    },
    "1106": {
        "character": "正好",
        "letter": "just right, just enough",
        "pinyin": "zhènghǎo"
    },
    "1107": {
        "character": "整理",
        "letter": "arrangement",
        "pinyin": "zhěnglǐ"
    },
    "1108": {
        "character": "证明",
        "letter": "prove, certificate, identification",
        "pinyin": "zhèngmíng"
    },
    "1109": {
        "character": "正确",
        "letter": "correct, proper",
        "pinyin": "zhèngquè"
    },
    "1110": {
        "character": "正式",
        "letter": "formal, official",
        "pinyin": "zhèngshì"
    },
    "1111": {
        "character": "正在",
        "letter": "indicating action in progress",
        "pinyin": "zhèngzài"
    },
    "1112": {
        "character": "真正",
        "letter": "genuine, real",
        "pinyin": "zhēnzhèng"
    },
    "1113": {
        "character": "指",
        "letter": "finger, to point",
        "pinyin": "zhǐ"
    },
    "1114": {
        "character": "只",
        "letter": "only",
        "pinyin": "zhǐ"
    },
    "1115": {
        "character": "之",
        "letter": "of",
        "pinyin": "zhī"
    },
    "1116": {
        "character": "支持",
        "letter": "support, sustain",
        "pinyin": "zhīchí"
    },
    "1117": {
        "character": "知道",
        "letter": "to know",
        "pinyin": "zhīdao"
    },
    "1118": {
        "character": "值得",
        "letter": "worth",
        "pinyin": "zhídé"
    },
    "1119": {
        "character": "只好",
        "letter": "have to, without any better option",
        "pinyin": "zhǐhǎo"
    },
    "1120": {
        "character": "直接",
        "letter": "direct, straightforward",
        "pinyin": "zhíjiē"
    },
    "1121": {
        "character": "质量",
        "letter": "quality",
        "pinyin": "zhìliàng"
    },
    "1122": {
        "character": "至少",
        "letter": "at least",
        "pinyin": "zhìshǎo"
    },
    "1123": {
        "character": "知识",
        "letter": "knowledge, intellectual",
        "pinyin": "zhīshi"
    },
    "1124": {
        "character": "植物",
        "letter": "plant, botanical",
        "pinyin": "zhíwù"
    },
    "1125": {
        "character": "只要",
        "letter": "as long as",
        "pinyin": "zhǐyào"
    },
    "1126": {
        "character": "职业",
        "letter": "occupation, profession",
        "pinyin": "zhíyè"
    },
    "1127": {
        "character": "重",
        "letter": "weight, heavy",
        "pinyin": "zhòng"
    },
    "1128": {
        "character": "种",
        "letter": "type",
        "pinyin": "zhǒng"
    },
    "1129": {
        "character": "重点",
        "letter": "focal point, priority, key",
        "pinyin": "zhòngdiǎn"
    },
    "1130": {
        "character": "中国",
        "letter": "China",
        "pinyin": "Zhōngguó"
    },
    "1131": {
        "character": "中间",
        "letter": "middle",
        "pinyin": "zhōngjiān"
    },
    "1132": {
        "character": "重视",
        "letter": "to attach importance to something",
        "pinyin": "zhòngshì"
    },
    "1133": {
        "character": "中午",
        "letter": "noon",
        "pinyin": "zhōngwǔ"
    },
    "1134": {
        "character": "重要",
        "letter": "important",
        "pinyin": "zhòngyào"
    },
    "1135": {
        "character": "终于",
        "letter": "finally",
        "pinyin": "zhōngyú"
    },
    "1136": {
        "character": "周末",
        "letter": "weekend",
        "pinyin": "zhōumò"
    },
    "1137": {
        "character": "周围",
        "letter": "surroundings, environment",
        "pinyin": "zhōuwéi"
    },
    "1138": {
        "character": "住",
        "letter": "to live or to stay",
        "pinyin": "zhù"
    },
    "1139": {
        "character": "祝",
        "letter": "to wish",
        "pinyin": "zhù"
    },
    "1140": {
        "character": "赚",
        "letter": "earn, make a profit",
        "pinyin": "zhuàn"
    },
    "1141": {
        "character": "转",
        "letter": "to turn, to change direction, to transfer",
        "pinyin": "zhuǎn"
    },
    "1142": {
        "character": "专门",
        "letter": "specialist, specialized",
        "pinyin": "zhuānmén"
    },
    "1143": {
        "character": "专业",
        "letter": "major, specialty, main field of study",
        "pinyin": "zhuānyè"
    },
    "1144": {
        "character": "祝贺",
        "letter": "congratulations",
        "pinyin": "zhùhè"
    },
    "1145": {
        "character": "著名",
        "letter": "famous, well-known",
        "pinyin": "zhùmíng"
    },
    "1146": {
        "character": "准备.",
        "letter": "to prepare",
        "pinyin": "zhǔnbèi"
    },
    "1147": {
        "character": "准确",
        "letter": "accuracy, exact",
        "pinyin": "zhǔnquè"
    },
    "1148": {
        "character": "准时",
        "letter": "on time, punctual",
        "pinyin": "zhǔnshí"
    },
    "1149": {
        "character": "桌子",
        "letter": "table or desk",
        "pinyin": "zhuōzi"
    },
    "1150": {
        "character": "主要",
        "letter": "main",
        "pinyin": "zhǔyào"
    },
    "1151": {
        "character": "注意",
        "letter": "to pay attention to",
        "pinyin": "zhùyì"
    },
    "1152": {
        "character": "主意",
        "letter": "idea, plan",
        "pinyin": "zhǔyi"
    },
    "1153": {
        "character": "字",
        "letter": "character",
        "pinyin": "zì"
    },
    "1154": {
        "character": "字典",
        "letter": "dictionary",
        "pinyin": "zìdiǎn"
    },
    "1155": {
        "character": "自己",
        "letter": "oneself",
        "pinyin": "zìjǐ"
    },
    "1156": {
        "character": "自然",
        "letter": "natural, free from affectation",
        "pinyin": "zìrán"
    },
    "1157": {
        "character": "仔细",
        "letter": "careful, attentive",
        "pinyin": "zǐxì"
    },
    "1158": {
        "character": "自信",
        "letter": "self-confidence",
        "pinyin": "zìxìn"
    },
    "1159": {
        "character": "自行车",
        "letter": "bike",
        "pinyin": "zìxíngchē"
    },
    "1160": {
        "character": "总结",
        "letter": "summary, conclude",
        "pinyin": "zǒngjié"
    },
    "1161": {
        "character": "总是",
        "letter": "always",
        "pinyin": "zǒngshì"
    },
    "1162": {
        "character": "走",
        "letter": "to walk",
        "pinyin": "zǒu"
    },
    "1163": {
        "character": "租",
        "letter": "rent, hire",
        "pinyin": "zū"
    },
    "1164": {
        "character": "最",
        "letter": "most",
        "pinyin": "zuì"
    },
    "1165": {
        "character": "最好",
        "letter": "best",
        "pinyin": "zuìhǎo"
    },
    "1166": {
        "character": "最近",
        "letter": "recent time",
        "pinyin": "zuìjìn"
    },
    "1167": {
        "character": "尊重",
        "letter": "respect, honor",
        "pinyin": "zūnzhòng"
    },
    "1168": {
        "character": "座",
        "letter": "seat, base, (classifier for buildings, mountains)",
        "pinyin": "zuò"
    },
    "1169": {
        "character": "做",
        "letter": "to do",
        "pinyin": "zuò"
    },
    "1170": {
        "character": "坐",
        "letter": "to sit",
        "pinyin": "zuò"
    },
    "1171": {
        "character": "左边",
        "letter": "left",
        "pinyin": "zuǒbiān"
    },
    "1172": {
        "character": "作家",
        "letter": "writer, author",
        "pinyin": "zuòjiā"
    },
    "1173": {
        "character": "昨天",
        "letter": "yesterday",
        "pinyin": "zuótiān"
    },
    "1174": {
        "character": "座位",
        "letter": "a place to sit",
        "pinyin": "zuòwèi"
    },
    "1175": {
        "character": "作业",
        "letter": "homework",
        "pinyin": "zuòyè"
    },
    "1176": {
        "character": "作用",
        "letter": "effect",
        "pinyin": "zuòyòng"
    },
    "1177": {
        "character": "左右",
        "letter": "approximately, about, left and right",
        "pinyin": "zuǒyòu"
    },
    "1178": {
        "character": "作者",
        "letter": "writer, author",
        "pinyin": "zuòzhě"
    }
}

function getCharacter(n){
  if (!n) {
    n = this;
  }
  console.log(n);
  let obj = allSyllableMap[n];
  console.log('char', obj);
  return obj["character"];   
}

function translation(n) {
  if (!n) {
    n = this;
  }
  console.log(n);
  let obj = allSyllableMap[n];
  console.log(obj);
  return obj["letter"];
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;