// Configuration
const localStorageKey = "mandarin" + "Hsk4Vocabulary" + "Srs";

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
        "letter": "a",
        "pinyin": "exclamatory particle"
    },
    "2": {
        "character": "爱",
        "letter": "ài",
        "pinyin": "to love"
    },
    "3": {
        "character": "矮",
        "letter": "ǎi",
        "pinyin": "short (in height)"
    },
    "4": {
        "character": "爱好",
        "letter": "àihào",
        "pinyin": "hobby"
    },
    "5": {
        "character": "爱情",
        "letter": "àiqíng",
        "pinyin": "love, romance"
    },
    "6": {
        "character": "安静",
        "letter": "ānjìng",
        "pinyin": "quiet"
    },
    "7": {
        "character": "安排",
        "letter": "ānpái",
        "pinyin": "arrangement, set up"
    },
    "8": {
        "character": "安全",
        "letter": "ānquán",
        "pinyin": "secure, safe, security, safety"
    },
    "9": {
        "character": "按时",
        "letter": "ànshí",
        "pinyin": "on time, before deadline, on schedule"
    },
    "10": {
        "character": "按照",
        "letter": "ànzhào",
        "pinyin": "according to, on the basis of"
    },
    "11": {
        "character": "阿姨",
        "letter": "āyí",
        "pinyin": "aunt or maid"
    },
    "12": {
        "character": "吧",
        "letter": "ba",
        "pinyin": "question particle"
    },
    "13": {
        "character": "把",
        "letter": "bǎ",
        "pinyin": "for things with a handle"
    },
    "14": {
        "character": "八",
        "letter": "bā",
        "pinyin": "eight"
    },
    "15": {
        "character": "爸爸",
        "letter": "bàba",
        "pinyin": "dad"
    },
    "16": {
        "character": "白",
        "letter": "bái",
        "pinyin": "white"
    },
    "17": {
        "character": "百",
        "letter": "bǎi",
        "pinyin": "hundred"
    },
    "18": {
        "character": "百分之",
        "letter": "bǎifēnzhī",
        "pinyin": "percent"
    },
    "19": {
        "character": "半",
        "letter": "bàn",
        "pinyin": "half"
    },
    "20": {
        "character": "班",
        "letter": "bān",
        "pinyin": "class"
    },
    "21": {
        "character": "搬",
        "letter": "bān",
        "pinyin": "to move"
    },
    "22": {
        "character": "办法",
        "letter": "bànfǎ",
        "pinyin": "method"
    },
    "23": {
        "character": "棒",
        "letter": "bàng",
        "pinyin": "smart, capable, strong, stick"
    },
    "24": {
        "character": "帮忙",
        "letter": "bāngmáng",
        "pinyin": "to help"
    },
    "25": {
        "character": "办公室",
        "letter": "bàngōngshì",
        "pinyin": "office"
    },
    "26": {
        "character": "帮助",
        "letter": "bāngzhù",
        "pinyin": "to help"
    },
    "27": {
        "character": "抱",
        "letter": "bào",
        "pinyin": "hold, adopt"
    },
    "28": {
        "character": "饱",
        "letter": "bǎo",
        "pinyin": "full"
    },
    "29": {
        "character": "包",
        "letter": "bāo",
        "pinyin": "bag"
    },
    "30": {
        "character": "保护",
        "letter": "bǎohù",
        "pinyin": "protect, safeguard"
    },
    "31": {
        "character": "报名",
        "letter": "bàomíng",
        "pinyin": "sign up, register"
    },
    "32": {
        "character": "抱歉",
        "letter": "bàoqiàn",
        "pinyin": "feel sorry, feel regret, apologize"
    },
    "33": {
        "character": "保证",
        "letter": "bǎozhèng",
        "pinyin": "ensure, guarantee"
    },
    "34": {
        "character": "报纸",
        "letter": "bàozhǐ",
        "pinyin": "newspaper"
    },
    "35": {
        "character": "包子",
        "letter": "bāozi",
        "pinyin": "bun, steamed stuffed bun"
    },
    "36": {
        "character": "倍",
        "letter": "bèi",
        "pinyin": "times, double, twice as much"
    },
    "37": {
        "character": "被",
        "letter": "bèi",
        "pinyin": "by"
    },
    "38": {
        "character": "北方",
        "letter": "běifāng",
        "pinyin": "north or northern China"
    },
    "39": {
        "character": "北京",
        "letter": "Běijīng",
        "pinyin": "Beijing"
    },
    "40": {
        "character": "杯子",
        "letter": "bēizi",
        "pinyin": "cup or glass"
    },
    "41": {
        "character": "笨",
        "letter": "bèn",
        "pinyin": "stupid, foolish, silly"
    },
    "42": {
        "character": "本",
        "letter": "běn",
        "pinyin": "for books"
    },
    "43": {
        "character": "本来",
        "letter": "běnlái",
        "pinyin": "originally"
    },
    "44": {
        "character": "比",
        "letter": "bǐ",
        "pinyin": "than"
    },
    "45": {
        "character": "遍",
        "letter": "biàn",
        "pinyin": "all over, everywhere"
    },
    "46": {
        "character": "变化",
        "letter": "biànhuà",
        "pinyin": "to change"
    },
    "47": {
        "character": "表格",
        "letter": "biǎogé",
        "pinyin": "form"
    },
    "48": {
        "character": "表示",
        "letter": "biǎoshì",
        "pinyin": "to express"
    },
    "49": {
        "character": "表演",
        "letter": "biǎoyǎn",
        "pinyin": "to perform"
    },
    "50": {
        "character": "表扬",
        "letter": "biǎoyáng",
        "pinyin": "praise"
    },
    "51": {
        "character": "标准",
        "letter": "biāozhǔn",
        "pinyin": "standard"
    },
    "52": {
        "character": "别",
        "letter": "bié",
        "pinyin": "don’t…"
    },
    "53": {
        "character": "别人",
        "letter": "biéren",
        "pinyin": "other people"
    },
    "54": {
        "character": "比较",
        "letter": "bǐjiào",
        "pinyin": "to compare"
    },
    "55": {
        "character": "饼干",
        "letter": "bǐnggān",
        "pinyin": "biscuit, cookie"
    },
    "56": {
        "character": "宾馆",
        "letter": "bīngguǎn",
        "pinyin": "hotel"
    },
    "57": {
        "character": "并且",
        "letter": "bìngqiě",
        "pinyin": "also, and, moreover, furthermore"
    },
    "58": {
        "character": "冰箱",
        "letter": "bīngxiāng",
        "pinyin": "refrigerator"
    },
    "59": {
        "character": "比如",
        "letter": "bǐrú",
        "pinyin": "such as, for example"
    },
    "60": {
        "character": "比赛",
        "letter": "bǐsài",
        "pinyin": "match"
    },
    "61": {
        "character": "必须",
        "letter": "bìxū",
        "pinyin": "must"
    },
    "62": {
        "character": "毕业",
        "letter": "bìyè",
        "pinyin": "graduation"
    },
    "63": {
        "character": "鼻子",
        "letter": "bízi",
        "pinyin": "nose"
    },
    "64": {
        "character": "博士",
        "letter": "bóshì",
        "pinyin": "Ph.D, doctor of philosophy"
    },
    "65": {
        "character": "不",
        "letter": "bù",
        "pinyin": "not"
    },
    "66": {
        "character": "不客气",
        "letter": "bú kèqi",
        "pinyin": "you’re welcome"
    },
    "67": {
        "character": "不得不",
        "letter": "bùdébù",
        "pinyin": "have to, can't avoid, have no choice or option"
    },
    "68": {
        "character": "部分",
        "letter": "bùfen",
        "pinyin": "part, share, section"
    },
    "69": {
        "character": "不管",
        "letter": "bùguǎn",
        "pinyin": "no matter, regardless of"
    },
    "70": {
        "character": "不过",
        "letter": "búguò",
        "pinyin": "only, however, anyway"
    },
    "71": {
        "character": "不仅",
        "letter": "bùjǐn",
        "pinyin": "not only"
    },
    "72": {
        "character": "擦",
        "letter": "cā",
        "pinyin": "rub, wipe, erase"
    },
    "73": {
        "character": "才",
        "letter": "cái",
        "pinyin": "just"
    },
    "74": {
        "character": "菜",
        "letter": "cài",
        "pinyin": "dish"
    },
    "75": {
        "character": "猜",
        "letter": "cāi",
        "pinyin": "to guess"
    },
    "76": {
        "character": "菜单",
        "letter": "càidān",
        "pinyin": "menu"
    },
    "77": {
        "character": "材料",
        "letter": "cáiliào",
        "pinyin": "material"
    },
    "78": {
        "character": "参观",
        "letter": "cānguān",
        "pinyin": "visit, to look around"
    },
    "79": {
        "character": "参加",
        "letter": "cānjiā",
        "pinyin": "to attend"
    },
    "80": {
        "character": "餐厅",
        "letter": "cāntīng",
        "pinyin": "restaurant, dining hall"
    },
    "81": {
        "character": "草",
        "letter": "cǎo",
        "pinyin": "grass"
    },
    "82": {
        "character": "层",
        "letter": "céng",
        "pinyin": "floor"
    },
    "83": {
        "character": "厕所",
        "letter": "cèsuǒ",
        "pinyin": "toilet, washroom"
    },
    "84": {
        "character": "茶",
        "letter": "chá",
        "pinyin": "tea"
    },
    "85": {
        "character": "差",
        "letter": "chà",
        "pinyin": "bad (in quality)"
    },
    "86": {
        "character": "差不多",
        "letter": "chà bù duō",
        "pinyin": "almost, nearly"
    },
    "87": {
        "character": "尝",
        "letter": "cháng",
        "pinyin": "taste, flavor"
    },
    "88": {
        "character": "长",
        "letter": "zhǎng",
        "pinyin": "to grow"
    },
    "89": {
        "character": "场",
        "letter": "chǎng",
        "pinyin": "large place used for a specific purpose"
    },
    "90": {
        "character": "长城",
        "letter": "cháng chéng",
        "pinyin": "the Great Wall"
    },
    "91": {
        "character": "唱歌",
        "letter": "chàng gē",
        "pinyin": "to sing"
    },
    "92": {
        "character": "长江",
        "letter": "cháng jiāng",
        "pinyin": "yangtze river"
    },
    "93": {
        "character": "超过",
        "letter": "chāoguò",
        "pinyin": "to surpass, to exceed, to outstrip"
    },
    "94": {
        "character": "超市",
        "letter": "chāoshì",
        "pinyin": "supermarket"
    },
    "95": {
        "character": "成功",
        "letter": "chénggōng",
        "pinyin": "success"
    },
    "96": {
        "character": "成绩",
        "letter": "chéngjì",
        "pinyin": "score"
    },
    "97": {
        "character": "诚实",
        "letter": "chéngshí",
        "pinyin": "honest, truthful"
    },
    "98": {
        "character": "城市",
        "letter": "chéngshì",
        "pinyin": "city"
    },
    "99": {
        "character": "成为",
        "letter": "chéngwéi",
        "pinyin": "become"
    },
    "100": {
        "character": "乘坐",
        "letter": "chéngzuò",
        "pinyin": "to ride (in a vehicle)"
    },
    "101": {
        "character": "衬衫",
        "letter": "chènshān",
        "pinyin": "shirt"
    },
    "102": {
        "character": "吃",
        "letter": "chī",
        "pinyin": "to eat"
    },
    "103": {
        "character": "迟到",
        "letter": "chídào",
        "pinyin": "to be late"
    },
    "104": {
        "character": "吃惊",
        "letter": "chījīng",
        "pinyin": "to be amazed, to be shocked"
    },
    "105": {
        "character": "重新",
        "letter": "chóngxīn",
        "pinyin": "again, once more"
    },
    "106": {
        "character": "抽烟",
        "letter": "chōuyān",
        "pinyin": "to smoke (a cigarette, tobacco)"
    },
    "107": {
        "character": "出",
        "letter": "chū",
        "pinyin": "to get out"
    },
    "108": {
        "character": "船",
        "letter": "chuán",
        "pinyin": "boat"
    },
    "109": {
        "character": "穿",
        "letter": "chuān",
        "pinyin": "to wear"
    },
    "110": {
        "character": "窗户",
        "letter": "chuānghu",
        "pinyin": "window"
    },
    "111": {
        "character": "传真",
        "letter": "chuánzhēn",
        "pinyin": "fax"
    },
    "112": {
        "character": "出差",
        "letter": "chūchāi",
        "pinyin": "to go on an official or business trip"
    },
    "113": {
        "character": "出发",
        "letter": "chūfā",
        "pinyin": "to start out, to set off"
    },
    "114": {
        "character": "厨房",
        "letter": "chúfáng",
        "pinyin": "kitchen"
    },
    "115": {
        "character": "除了",
        "letter": "chúle",
        "pinyin": "besides or except"
    },
    "116": {
        "character": "春",
        "letter": "chūn",
        "pinyin": "spring"
    },
    "117": {
        "character": "出生",
        "letter": "chūshēng",
        "pinyin": "born, birth"
    },
    "118": {
        "character": "出现",
        "letter": "chūxiàn",
        "pinyin": "to appear"
    },
    "119": {
        "character": "出租车",
        "letter": "chūzūchē",
        "pinyin": "taxi"
    },
    "120": {
        "character": "次",
        "letter": "cì",
        "pinyin": "time (frequency of an act)"
    },
    "121": {
        "character": "词语",
        "letter": "cíyǔ",
        "pinyin": "word"
    },
    "122": {
        "character": "从",
        "letter": "cóng",
        "pinyin": "from"
    },
    "123": {
        "character": "从来",
        "letter": "cónglái",
        "pinyin": "always"
    },
    "124": {
        "character": "聪明",
        "letter": "cōngming",
        "pinyin": "smart"
    },
    "125": {
        "character": "存",
        "letter": "cún",
        "pinyin": "exist, deposit, store, keep, survive"
    },
    "126": {
        "character": "错",
        "letter": "cuò",
        "pinyin": "wrong"
    },
    "127": {
        "character": "错误",
        "letter": "cuò wù",
        "pinyin": "error, mistake"
    },
    "128": {
        "character": "粗心",
        "letter": "cūxīn",
        "pinyin": "careless"
    },
    "129": {
        "character": "大",
        "letter": "dà",
        "pinyin": "big"
    },
    "130": {
        "character": "打电话",
        "letter": "dǎ diànhuà",
        "pinyin": "to make a phone call"
    },
    "131": {
        "character": "打篮球",
        "letter": "dǎ lánqiú",
        "pinyin": "to play basketball"
    },
    "132": {
        "character": "答案",
        "letter": "dá'àn",
        "pinyin": "answer, solution"
    },
    "133": {
        "character": "打扮",
        "letter": "dǎban",
        "pinyin": "dress up, make up"
    },
    "134": {
        "character": "大概",
        "letter": "dàgài",
        "pinyin": "probably, roughly"
    },
    "135": {
        "character": "戴",
        "letter": "dài",
        "pinyin": "to put on or wear (glasses, hat, gloves etc)"
    },
    "136": {
        "character": "带",
        "letter": "dài",
        "pinyin": "to bring"
    },
    "137": {
        "character": "大夫",
        "letter": "dàifu",
        "pinyin": "doctor"
    },
    "138": {
        "character": "大家",
        "letter": "dàjiā",
        "pinyin": "everybody"
    },
    "139": {
        "character": "当",
        "letter": "dāng",
        "pinyin": "when, during"
    },
    "140": {
        "character": "蛋糕",
        "letter": "dàngāo",
        "pinyin": "cake"
    },
    "141": {
        "character": "当然",
        "letter": "dāngrán",
        "pinyin": "of course"
    },
    "142": {
        "character": "当时",
        "letter": "dāngshí",
        "pinyin": "at that time"
    },
    "143": {
        "character": "但是",
        "letter": "dànshì",
        "pinyin": "but"
    },
    "144": {
        "character": "担心",
        "letter": "dānxīn",
        "pinyin": "to worry"
    },
    "145": {
        "character": "倒",
        "letter": "dào",
        "pinyin": "to move backwards, converse"
    },
    "146": {
        "character": "到",
        "letter": "dào",
        "pinyin": "to arrive"
    },
    "147": {
        "character": "刀",
        "letter": "dāo",
        "pinyin": "knife"
    },
    "148": {
        "character": "到处",
        "letter": "dàochù",
        "pinyin": "everywhere, in all places"
    },
    "149": {
        "character": "到底",
        "letter": "dàodǐ",
        "pinyin": "finally, in the end, after all"
    },
    "150": {
        "character": "道歉",
        "letter": "dàoqiàn",
        "pinyin": "apologize"
    },
    "151": {
        "character": "导游",
        "letter": "dǎoyóu",
        "pinyin": "tourist guide, guidebook"
    },
    "152": {
        "character": "打扰",
        "letter": "dǎrǎo",
        "pinyin": "disturb, bother, trouble"
    },
    "153": {
        "character": "打扫",
        "letter": "dǎsǎo",
        "pinyin": "to clean"
    },
    "154": {
        "character": "大使馆",
        "letter": "dàshǐguǎn",
        "pinyin": "embassy"
    },
    "155": {
        "character": "打算",
        "letter": "dǎsuàn",
        "pinyin": "to plan"
    },
    "156": {
        "character": "打印",
        "letter": "dǎyìn",
        "pinyin": "print"
    },
    "157": {
        "character": "大约",
        "letter": "dàyuē",
        "pinyin": "about, approximately"
    },
    "158": {
        "character": "打招呼",
        "letter": "dǎzhāohū",
        "pinyin": "to give prior notice"
    },
    "159": {
        "character": "打折",
        "letter": "dǎzhé",
        "pinyin": "to give a discount"
    },
    "160": {
        "character": "打针",
        "letter": "dǎzhēn",
        "pinyin": "to give or have an injection"
    },
    "161": {
        "character": "的",
        "letter": "de",
        "pinyin": "possession particle"
    },
    "162": {
        "character": "得",
        "letter": "dé",
        "pinyin": "particle used to express capability, possibility, degree"
    },
    "163": {
        "character": "地",
        "letter": "de",
        "pinyin": "structure particle"
    },
    "164": {
        "character": "等",
        "letter": "děng",
        "pinyin": "to wait"
    },
    "165": {
        "character": "灯",
        "letter": "dēng",
        "pinyin": "light"
    },
    "166": {
        "character": "登机牌",
        "letter": "dēng jī pái",
        "pinyin": "boarding pass"
    },
    "167": {
        "character": "得意",
        "letter": "déyì",
        "pinyin": "proud"
    },
    "168": {
        "character": "底",
        "letter": "dǐ",
        "pinyin": "bottom, base, background"
    },
    "169": {
        "character": "低",
        "letter": "dī",
        "pinyin": "low"
    },
    "170": {
        "character": "第一",
        "letter": "dì-yī",
        "pinyin": "first"
    },
    "171": {
        "character": "点",
        "letter": "diǎn",
        "pinyin": "o’clock"
    },
    "172": {
        "character": "电脑",
        "letter": "diànnǎo",
        "pinyin": "computer"
    },
    "173": {
        "character": "电视",
        "letter": "diànshì",
        "pinyin": "TV"
    },
    "174": {
        "character": "电梯",
        "letter": "diàntī",
        "pinyin": "elevator"
    },
    "175": {
        "character": "电影",
        "letter": "diànyǐng",
        "pinyin": "movie"
    },
    "176": {
        "character": "电子邮件",
        "letter": "diànzǐ yóujiàn",
        "pinyin": "email"
    },
    "177": {
        "character": "掉",
        "letter": "diào",
        "pinyin": "fall, drop, lose, come off"
    },
    "178": {
        "character": "调查",
        "letter": "diàochá",
        "pinyin": "investigation, inquiry, survey"
    },
    "179": {
        "character": "弟弟",
        "letter": "dìdi",
        "pinyin": "younger brother"
    },
    "180": {
        "character": "地点",
        "letter": "dìdiǎn",
        "pinyin": "location, place, venue"
    },
    "181": {
        "character": "地方",
        "letter": "dìfāng",
        "pinyin": "place"
    },
    "182": {
        "character": "地球",
        "letter": "dìqiú",
        "pinyin": "earth, planet"
    },
    "183": {
        "character": "地铁",
        "letter": "dìtiě",
        "pinyin": "metro"
    },
    "184": {
        "character": "地图",
        "letter": "dìtú",
        "pinyin": "map"
    },
    "185": {
        "character": "丢",
        "letter": "diū",
        "pinyin": "throw, put aside"
    },
    "186": {
        "character": "地址",
        "letter": "dìzhǐ",
        "pinyin": "address"
    },
    "187": {
        "character": "懂",
        "letter": "dǒng",
        "pinyin": "to understand"
    },
    "188": {
        "character": "冬",
        "letter": "dōng",
        "pinyin": "winter"
    },
    "189": {
        "character": "东",
        "letter": "dōng",
        "pinyin": "east"
    },
    "190": {
        "character": "动物",
        "letter": "dòngwù",
        "pinyin": "animal"
    },
    "191": {
        "character": "东西",
        "letter": "dōngxi",
        "pinyin": "thing"
    },
    "192": {
        "character": "动作",
        "letter": "dòngzuò",
        "pinyin": "action, movement"
    },
    "193": {
        "character": "都",
        "letter": "dōu",
        "pinyin": "both or all"
    },
    "194": {
        "character": "读",
        "letter": "dú",
        "pinyin": "to read"
    },
    "195": {
        "character": "段",
        "letter": "duàn",
        "pinyin": "span of time or distance"
    },
    "196": {
        "character": "短",
        "letter": "duǎn",
        "pinyin": "short"
    },
    "197": {
        "character": "锻炼",
        "letter": "duànliàn",
        "pinyin": "to work out"
    },
    "198": {
        "character": "短信",
        "letter": "duǎnxìn",
        "pinyin": "SMS"
    },
    "199": {
        "character": "堵车",
        "letter": "dǔchē",
        "pinyin": "traffic jam"
    },
    "200": {
        "character": "对",
        "letter": "duì",
        "pinyin": "right"
    },
    "201": {
        "character": "对不起",
        "letter": "duìbuqǐ",
        "pinyin": "sorry"
    },
    "202": {
        "character": "对话",
        "letter": "duìhuà",
        "pinyin": "dialogue"
    },
    "203": {
        "character": "对面",
        "letter": "duìmiàn",
        "pinyin": "opposite"
    },
    "204": {
        "character": "对于",
        "letter": "duìyú",
        "pinyin": "regarding, As far as is concerned"
    },
    "205": {
        "character": "多",
        "letter": "duō",
        "pinyin": "many"
    },
    "206": {
        "character": "多么",
        "letter": "duōme",
        "pinyin": "how…"
    },
    "207": {
        "character": "多少",
        "letter": "duōshao",
        "pinyin": "how many or how much"
    },
    "208": {
        "character": "肚子",
        "letter": "dùzi",
        "pinyin": "belly, stomach"
    },
    "209": {
        "character": "饿",
        "letter": "è",
        "pinyin": "hungry"
    },
    "210": {
        "character": "而",
        "letter": "ér",
        "pinyin": "and, as well as"
    },
    "211": {
        "character": "二",
        "letter": "èr",
        "pinyin": "two"
    },
    "212": {
        "character": "耳朵",
        "letter": "ěrduo",
        "pinyin": "ear"
    },
    "213": {
        "character": "而且",
        "letter": "érqiě",
        "pinyin": "moreover"
    },
    "214": {
        "character": "儿童",
        "letter": "értóng",
        "pinyin": "children"
    },
    "215": {
        "character": "儿子",
        "letter": "érzi",
        "pinyin": "son"
    },
    "216": {
        "character": "法律",
        "letter": "fǎlǜ",
        "pinyin": "law"
    },
    "217": {
        "character": "反对",
        "letter": "fǎnduì",
        "pinyin": "opposition"
    },
    "218": {
        "character": "放",
        "letter": "fàng",
        "pinyin": "to put"
    },
    "219": {
        "character": "方便",
        "letter": "fāngbiàn",
        "pinyin": "convenient"
    },
    "220": {
        "character": "房东",
        "letter": "fángdōng",
        "pinyin": "landlord, owner of land"
    },
    "221": {
        "character": "方法",
        "letter": "fāngfǎ",
        "pinyin": "method, way, means"
    },
    "222": {
        "character": "房间",
        "letter": "fángjiān",
        "pinyin": "room"
    },
    "223": {
        "character": "方面",
        "letter": "fāngmiàn",
        "pinyin": "aspect, respect"
    },
    "224": {
        "character": "放弃",
        "letter": "fàngqì",
        "pinyin": "give up, abandon"
    },
    "225": {
        "character": "放暑假",
        "letter": "fàngshǔjià",
        "pinyin": "summer vacation"
    },
    "226": {
        "character": "放松",
        "letter": "fàngsōng",
        "pinyin": "relax"
    },
    "227": {
        "character": "饭馆",
        "letter": "fànguǎn",
        "pinyin": "restaurant"
    },
    "228": {
        "character": "方向",
        "letter": "fāngxiàng",
        "pinyin": "direction, orientation"
    },
    "229": {
        "character": "放心",
        "letter": "fàngxīn",
        "pinyin": "to rest assured"
    },
    "230": {
        "character": "烦恼",
        "letter": "fánnǎo",
        "pinyin": "annoyance, vexation"
    },
    "231": {
        "character": "翻译",
        "letter": "fānyì",
        "pinyin": "translate, interpreter"
    },
    "232": {
        "character": "发烧",
        "letter": "fāshāo",
        "pinyin": "to have a fever"
    },
    "233": {
        "character": "发生",
        "letter": "fāshēng",
        "pinyin": "happen, occur, break out"
    },
    "234": {
        "character": "发现",
        "letter": "fāxiàn",
        "pinyin": "to discover"
    },
    "235": {
        "character": "发展",
        "letter": "fāzhǎn",
        "pinyin": "development, growth"
    },
    "236": {
        "character": "非常",
        "letter": "fēicháng",
        "pinyin": "extremely"
    },
    "237": {
        "character": "飞机",
        "letter": "fēijī",
        "pinyin": "plane"
    },
    "238": {
        "character": "份",
        "letter": "fèn",
        "pinyin": "part, share, copy"
    },
    "239": {
        "character": "分",
        "letter": "fēn",
        "pinyin": "to divide or separate"
    },
    "240": {
        "character": "丰富",
        "letter": "fēngfù",
        "pinyin": "rich"
    },
    "241": {
        "character": "分钟",
        "letter": "fēnzhōng",
        "pinyin": "minute"
    },
    "242": {
        "character": "否则",
        "letter": "fǒuzé",
        "pinyin": "otherwise"
    },
    "243": {
        "character": "富",
        "letter": "fù",
        "pinyin": "rich, surname Fu"
    },
    "244": {
        "character": "符合",
        "letter": "fúhé",
        "pinyin": "in keeping with, in accordance with"
    },
    "245": {
        "character": "附近",
        "letter": "fùjìn",
        "pinyin": "surrounding area"
    },
    "246": {
        "character": "付款",
        "letter": "fùkuǎn",
        "pinyin": "payment"
    },
    "247": {
        "character": "父亲",
        "letter": "fùqīn",
        "pinyin": "father"
    },
    "248": {
        "character": "服务员",
        "letter": "fúwùyuán",
        "pinyin": "waiter or waitress"
    },
    "249": {
        "character": "复习",
        "letter": "fùxí",
        "pinyin": "to review"
    },
    "250": {
        "character": "复印",
        "letter": "fùyìn",
        "pinyin": "photocopy"
    },
    "251": {
        "character": "复杂",
        "letter": "fùzá",
        "pinyin": "complicated"
    },
    "252": {
        "character": "负责",
        "letter": "fùzé",
        "pinyin": "to take responsibility"
    },
    "253": {
        "character": "改变",
        "letter": "gǎibiàn",
        "pinyin": "change, transform"
    },
    "254": {
        "character": "干",
        "letter": "gàn",
        "pinyin": "to do (some work)"
    },
    "255": {
        "character": "敢",
        "letter": "gǎn",
        "pinyin": "to dare"
    },
    "256": {
        "character": "赶",
        "letter": "gǎn",
        "pinyin": "rush, hurry, to catch up"
    },
    "257": {
        "character": "干杯",
        "letter": "gānbēi",
        "pinyin": "cheers"
    },
    "258": {
        "character": "感动",
        "letter": "gǎndòng",
        "pinyin": "to move, moving"
    },
    "259": {
        "character": "刚",
        "letter": "gāng",
        "pinyin": "just, exactly, hard, strong"
    },
    "260": {
        "character": "刚才",
        "letter": "gāngcái",
        "pinyin": "just now"
    },
    "261": {
        "character": "干净",
        "letter": "gānjìng",
        "pinyin": "clean"
    },
    "262": {
        "character": "感觉",
        "letter": "gǎnjué",
        "pinyin": "feel, perception, sense"
    },
    "263": {
        "character": "感冒",
        "letter": "gǎnmào",
        "pinyin": "to have a cold"
    },
    "264": {
        "character": "感情",
        "letter": "gǎnqíng",
        "pinyin": "feeling, emotion, sensation"
    },
    "265": {
        "character": "感谢",
        "letter": "gǎnxiè",
        "pinyin": "gratitude, grateful, thankful"
    },
    "266": {
        "character": "高",
        "letter": "gāo",
        "pinyin": "tall or high"
    },
    "267": {
        "character": "告诉",
        "letter": "gàosù",
        "pinyin": "to tell"
    },
    "268": {
        "character": "高速公路",
        "letter": "gāosù gōnglù",
        "pinyin": "expressway, highway"
    },
    "269": {
        "character": "高兴",
        "letter": "gāoxìng",
        "pinyin": "happy"
    },
    "270": {
        "character": "各",
        "letter": "gè",
        "pinyin": "each, every"
    },
    "271": {
        "character": "个",
        "letter": "gè",
        "pinyin": "generic measure word"
    },
    "272": {
        "character": "胳膊",
        "letter": "gēbó",
        "pinyin": "arm"
    },
    "273": {
        "character": "哥哥",
        "letter": "gēge",
        "pinyin": "elder brother"
    },
    "274": {
        "character": "给",
        "letter": "gěi",
        "pinyin": "to give"
    },
    "275": {
        "character": "跟",
        "letter": "gēn",
        "pinyin": "with"
    },
    "276": {
        "character": "更",
        "letter": "gèng",
        "pinyin": "more"
    },
    "277": {
        "character": "根据",
        "letter": "gēnjù",
        "pinyin": "according to"
    },
    "278": {
        "character": "功夫",
        "letter": "gōngfū",
        "pinyin": "skill, effort, art, kung fu"
    },
    "279": {
        "character": "公共汽车",
        "letter": "gōnggòng qìchē",
        "pinyin": "bus"
    },
    "280": {
        "character": "公斤",
        "letter": "gōngjīn",
        "pinyin": "kilo"
    },
    "281": {
        "character": "公里",
        "letter": "gōnglǐ",
        "pinyin": "kilometer"
    },
    "282": {
        "character": "公司",
        "letter": "gōngsī",
        "pinyin": "company"
    },
    "283": {
        "character": "共同",
        "letter": "gòngtóng",
        "pinyin": "common, join, together"
    },
    "284": {
        "character": "公园",
        "letter": "gōngyuán",
        "pinyin": "park"
    },
    "285": {
        "character": "工资",
        "letter": "gōngzī",
        "pinyin": "wage, pay"
    },
    "286": {
        "character": "工作",
        "letter": "gōngzuò",
        "pinyin": "to work"
    },
    "287": {
        "character": "够",
        "letter": "gòu",
        "pinyin": "to reach, to be enough"
    },
    "288": {
        "character": "狗",
        "letter": "gǒu",
        "pinyin": "dog"
    },
    "289": {
        "character": "购物",
        "letter": "gòuwù",
        "pinyin": "shopping"
    },
    "290": {
        "character": "挂",
        "letter": "guà",
        "pinyin": "suspend, hang"
    },
    "291": {
        "character": "刮风",
        "letter": "guā fēng",
        "pinyin": "to blow (wind)"
    },
    "292": {
        "character": "关",
        "letter": "guān",
        "pinyin": "to close or to shut"
    },
    "293": {
        "character": "逛",
        "letter": "guàng",
        "pinyin": "to stroll, to visit"
    },
    "294": {
        "character": "光",
        "letter": "guāng",
        "pinyin": "light, bright"
    },
    "295": {
        "character": "广播",
        "letter": "guǎngbō",
        "pinyin": "radio broadcast, widely spread"
    },
    "296": {
        "character": "广告",
        "letter": "guǎnggào",
        "pinyin": "advertisement"
    },
    "297": {
        "character": "关键",
        "letter": "guānjiàn",
        "pinyin": "key, crucial point, crux"
    },
    "298": {
        "character": "管理",
        "letter": "guǎnlǐ",
        "pinyin": "administration, management"
    },
    "299": {
        "character": "关系",
        "letter": "guānxì",
        "pinyin": "relation"
    },
    "300": {
        "character": "关心",
        "letter": "guānxīn",
        "pinyin": "to concern"
    },
    "301": {
        "character": "关于",
        "letter": "guānyú",
        "pinyin": "about, regarding"
    },
    "302": {
        "character": "观众",
        "letter": "guānzhòng",
        "pinyin": "audience, spectators"
    },
    "303": {
        "character": "贵",
        "letter": "guì",
        "pinyin": "expensive"
    },
    "304": {
        "character": "规定",
        "letter": "guīdìng",
        "pinyin": "rule, regulation"
    },
    "305": {
        "character": "估计",
        "letter": "gūjì",
        "pinyin": "estimate"
    },
    "306": {
        "character": "顾客",
        "letter": "gùkè",
        "pinyin": "customer, client"
    },
    "307": {
        "character": "鼓励",
        "letter": "gǔlì",
        "pinyin": "encourage"
    },
    "308": {
        "character": "过",
        "letter": "guò",
        "pinyin": "aspect particle"
    },
    "309": {
        "character": "过程",
        "letter": "guòchéng",
        "pinyin": "course of events, process"
    },
    "310": {
        "character": "国籍",
        "letter": "guójí",
        "pinyin": "nationality, country of citizenship"
    },
    "311": {
        "character": "国际",
        "letter": "guójì",
        "pinyin": "international"
    },
    "312": {
        "character": "国家",
        "letter": "guójiā",
        "pinyin": "nation"
    },
    "313": {
        "character": "过去",
        "letter": "guòqù",
        "pinyin": "past"
    },
    "314": {
        "character": "果汁",
        "letter": "guǒzhī",
        "pinyin": "juice"
    },
    "315": {
        "character": "故事",
        "letter": "gùshi",
        "pinyin": "story"
    },
    "316": {
        "character": "故意",
        "letter": "gùyì",
        "pinyin": "deliberately, on purpose"
    },
    "317": {
        "character": "还",
        "letter": "huán",
        "pinyin": "to return (sth)"
    },
    "318": {
        "character": "害怕",
        "letter": "hàipà",
        "pinyin": "to fear"
    },
    "319": {
        "character": "还是",
        "letter": "háishì",
        "pinyin": "or"
    },
    "320": {
        "character": "害羞",
        "letter": "hàixiū",
        "pinyin": "shy"
    },
    "321": {
        "character": "海洋",
        "letter": "hǎiyáng",
        "pinyin": "ocean"
    },
    "322": {
        "character": "孩子",
        "letter": "háizi",
        "pinyin": "child"
    },
    "323": {
        "character": "汗",
        "letter": "hàn",
        "pinyin": "sweat, perspiration"
    },
    "324": {
        "character": "航班",
        "letter": "hángbān",
        "pinyin": "flight"
    },
    "325": {
        "character": "寒假",
        "letter": "hánjià",
        "pinyin": "winter vacation"
    },
    "326": {
        "character": "汉语",
        "letter": "Hànyǔ",
        "pinyin": "Chinese (language)"
    },
    "327": {
        "character": "号",
        "letter": "hào",
        "pinyin": "date or number"
    },
    "328": {
        "character": "好",
        "letter": "hǎo",
        "pinyin": "good"
    },
    "329": {
        "character": "好吃",
        "letter": "hǎochī",
        "pinyin": "tasty"
    },
    "330": {
        "character": "好处",
        "letter": "hǎochù",
        "pinyin": "benefit"
    },
    "331": {
        "character": "号码",
        "letter": "hàomǎ",
        "pinyin": "number"
    },
    "332": {
        "character": "好像",
        "letter": "hǎoxiàng",
        "pinyin": "as if, to seem like"
    },
    "333": {
        "character": "河",
        "letter": "hé",
        "pinyin": "river"
    },
    "334": {
        "character": "和",
        "letter": "hé",
        "pinyin": "and"
    },
    "335": {
        "character": "喝",
        "letter": "hē",
        "pinyin": "to drink"
    },
    "336": {
        "character": "合格",
        "letter": "hégé",
        "pinyin": "qualified, eligible"
    },
    "337": {
        "character": "黑",
        "letter": "hēi",
        "pinyin": "black"
    },
    "338": {
        "character": "黑板",
        "letter": "hēibǎn",
        "pinyin": "blackboard"
    },
    "339": {
        "character": "很",
        "letter": "hěn",
        "pinyin": "very"
    },
    "340": {
        "character": "合适",
        "letter": "héshì",
        "pinyin": "appropriate, suitable"
    },
    "341": {
        "character": "盒子",
        "letter": "hézi",
        "pinyin": "box"
    },
    "342": {
        "character": "红",
        "letter": "hóng",
        "pinyin": "red"
    },
    "343": {
        "character": "厚",
        "letter": "hòu",
        "pinyin": "thick"
    },
    "344": {
        "character": "后悔",
        "letter": "hòuhuǐ",
        "pinyin": "regret, repent"
    },
    "345": {
        "character": "后面",
        "letter": "hòumiàn",
        "pinyin": "back"
    },
    "346": {
        "character": "画",
        "letter": "huà",
        "pinyin": "to draw or to paint"
    },
    "347": {
        "character": "花",
        "letter": "huā",
        "pinyin": "to spend or to cost"
    },
    "348": {
        "character": "坏",
        "letter": "huài",
        "pinyin": "bad"
    },
    "349": {
        "character": "怀疑",
        "letter": "huáiyí",
        "pinyin": "doubt, suspect"
    },
    "350": {
        "character": "换",
        "letter": "huàn",
        "pinyin": "to exchange"
    },
    "351": {
        "character": "黄",
        "letter": "huáng",
        "pinyin": "yellow"
    },
    "352": {
        "character": "环境",
        "letter": "huánjìng",
        "pinyin": "environment"
    },
    "353": {
        "character": "欢迎",
        "letter": "huānyíng",
        "pinyin": "to welcome"
    },
    "354": {
        "character": "花园",
        "letter": "huāyuán",
        "pinyin": "garden"
    },
    "355": {
        "character": "回",
        "letter": "huí",
        "pinyin": "to return"
    },
    "356": {
        "character": "会",
        "letter": "huì",
        "pinyin": "can (to know how to)"
    },
    "357": {
        "character": "回答",
        "letter": "huídá",
        "pinyin": "to answer"
    },
    "358": {
        "character": "回忆",
        "letter": "huíyì",
        "pinyin": "memories, recollection"
    },
    "359": {
        "character": "会议",
        "letter": "huìyì",
        "pinyin": "meeting"
    },
    "360": {
        "character": "火",
        "letter": "huǒ",
        "pinyin": "fire"
    },
    "361": {
        "character": "火车站",
        "letter": "huǒchēzhàn",
        "pinyin": "train station"
    },
    "362": {
        "character": "获得",
        "letter": "huòdé",
        "pinyin": "get, receive"
    },
    "363": {
        "character": "活动",
        "letter": "huódòng",
        "pinyin": "activity"
    },
    "364": {
        "character": "活泼",
        "letter": "huópō",
        "pinyin": "lively, active"
    },
    "365": {
        "character": "或者",
        "letter": "huòzhě",
        "pinyin": "or"
    },
    "366": {
        "character": "护士",
        "letter": "hùshi",
        "pinyin": "nurse"
    },
    "367": {
        "character": "互相",
        "letter": "hùxiāng",
        "pinyin": "each other, mutual"
    },
    "368": {
        "character": "护照",
        "letter": "hùzhào",
        "pinyin": "passport"
    },
    "369": {
        "character": "极",
        "letter": "jí",
        "pinyin": "extremely"
    },
    "370": {
        "character": "寄",
        "letter": "jì",
        "pinyin": "to mail, to send"
    },
    "371": {
        "character": "几",
        "letter": "jǐ",
        "pinyin": "how many or how much"
    },
    "372": {
        "character": "假",
        "letter": "jiǎ",
        "pinyin": "fake, false"
    },
    "373": {
        "character": "家",
        "letter": "jiā",
        "pinyin": "home or family"
    },
    "374": {
        "character": "加班",
        "letter": "jiābān",
        "pinyin": "overtime work"
    },
    "375": {
        "character": "价格",
        "letter": "jiàgé",
        "pinyin": "price"
    },
    "376": {
        "character": "家具",
        "letter": "jiājù",
        "pinyin": "furniture"
    },
    "377": {
        "character": "件",
        "letter": "jiàn",
        "pinyin": "for affairs, clothes, furniture"
    },
    "378": {
        "character": "检查",
        "letter": "jiǎnchá",
        "pinyin": "to check"
    },
    "379": {
        "character": "坚持",
        "letter": "jiānchí",
        "pinyin": "to insist on, to continue upholding"
    },
    "380": {
        "character": "简单",
        "letter": "jiǎndān",
        "pinyin": "simple"
    },
    "381": {
        "character": "减肥",
        "letter": "jiǎnféi",
        "pinyin": "to lose weight"
    },
    "382": {
        "character": "讲",
        "letter": "jiǎng",
        "pinyin": "to say or to speak"
    },
    "383": {
        "character": "降低",
        "letter": "jiàngdī",
        "pinyin": "to bring down"
    },
    "384": {
        "character": "奖金",
        "letter": "jiǎngjīn",
        "pinyin": "bonus, award money"
    },
    "385": {
        "character": "将来",
        "letter": "jiānglái",
        "pinyin": "future"
    },
    "386": {
        "character": "降落",
        "letter": "jiàngluò",
        "pinyin": "landing, descent"
    },
    "387": {
        "character": "健康",
        "letter": "jiànkāng",
        "pinyin": "healthy"
    },
    "388": {
        "character": "见面",
        "letter": "jiànmiàn",
        "pinyin": "to meet"
    },
    "389": {
        "character": "减少",
        "letter": "jiǎnshǎo",
        "pinyin": "reduce, decrease"
    },
    "390": {
        "character": "建议",
        "letter": "jiànyì",
        "pinyin": "suggest, recommend, proposal"
    },
    "391": {
        "character": "叫",
        "letter": "jiào",
        "pinyin": "to call"
    },
    "392": {
        "character": "脚",
        "letter": "jiǎo",
        "pinyin": "foot"
    },
    "393": {
        "character": "角",
        "letter": "jiǎo",
        "pinyin": "1/10 of Chinese Yuan"
    },
    "394": {
        "character": "交",
        "letter": "jiāo",
        "pinyin": "hand over"
    },
    "395": {
        "character": "教",
        "letter": "jiāo",
        "pinyin": "to teach"
    },
    "396": {
        "character": "骄傲",
        "letter": "jiāo'ào",
        "pinyin": "proud"
    },
    "397": {
        "character": "交流",
        "letter": "jiāoliú",
        "pinyin": "communication"
    },
    "398": {
        "character": "郊区",
        "letter": "jiāoqū",
        "pinyin": "suburbs, outskirts"
    },
    "399": {
        "character": "教室",
        "letter": "jiàoshì",
        "pinyin": "classroom"
    },
    "400": {
        "character": "教授",
        "letter": "jiàoshòu",
        "pinyin": "professor"
    },
    "401": {
        "character": "交通",
        "letter": "jiāotōng",
        "pinyin": "traffic, communication"
    },
    "402": {
        "character": "教育",
        "letter": "jiàoyù",
        "pinyin": "education"
    },
    "403": {
        "character": "饺子",
        "letter": "jiǎozi",
        "pinyin": "dumpling"
    },
    "404": {
        "character": "加油站",
        "letter": "jiāyóuzhàn",
        "pinyin": "gas station"
    },
    "405": {
        "character": "机场",
        "letter": "jīchǎng",
        "pinyin": "airport"
    },
    "406": {
        "character": "基础",
        "letter": "jīchǔ",
        "pinyin": "foundation, base"
    },
    "407": {
        "character": "鸡蛋",
        "letter": "jīdàn",
        "pinyin": "egg"
    },
    "408": {
        "character": "记得",
        "letter": "jìde",
        "pinyin": "to remember"
    },
    "409": {
        "character": "激动",
        "letter": "jīdòng",
        "pinyin": "excited, agitate"
    },
    "410": {
        "character": "节",
        "letter": "jié",
        "pinyin": "festival, holiday"
    },
    "411": {
        "character": "借",
        "letter": "jiè",
        "pinyin": "to borrow or to lend"
    },
    "412": {
        "character": "接",
        "letter": "jiē",
        "pinyin": "to catch or to pick up"
    },
    "413": {
        "character": "街道",
        "letter": "jiēdào",
        "pinyin": "street"
    },
    "414": {
        "character": "结果",
        "letter": "jiéguǒ",
        "pinyin": "result, outcome"
    },
    "415": {
        "character": "结婚",
        "letter": "jiéhūn",
        "pinyin": "to marry"
    },
    "416": {
        "character": "姐姐",
        "letter": "jiějie",
        "pinyin": "elder sister"
    },
    "417": {
        "character": "解决",
        "letter": "jiějué",
        "pinyin": "to solve"
    },
    "418": {
        "character": "节目",
        "letter": "jiémù",
        "pinyin": "program"
    },
    "419": {
        "character": "节日",
        "letter": "jiérì",
        "pinyin": "festival"
    },
    "420": {
        "character": "介绍",
        "letter": "jièshào",
        "pinyin": "to introduce"
    },
    "421": {
        "character": "解释",
        "letter": "jiěshì",
        "pinyin": "explanation"
    },
    "422": {
        "character": "接受",
        "letter": "jiēshòu",
        "pinyin": "accept"
    },
    "423": {
        "character": "结束",
        "letter": "jiéshù",
        "pinyin": "to end"
    },
    "424": {
        "character": "节约",
        "letter": "jiéyuē",
        "pinyin": "saving"
    },
    "425": {
        "character": "接着",
        "letter": "jiēzhe",
        "pinyin": "then, to carry on"
    },
    "426": {
        "character": "几乎",
        "letter": "jīhū",
        "pinyin": "almost"
    },
    "427": {
        "character": "计划",
        "letter": "jìhuà",
        "pinyin": "plan"
    },
    "428": {
        "character": "机会",
        "letter": "jīhuì",
        "pinyin": "opportunity or chance"
    },
    "429": {
        "character": "积极",
        "letter": "jījí",
        "pinyin": "energetic, proactive, positive"
    },
    "430": {
        "character": "季节",
        "letter": "jìjié",
        "pinyin": "season"
    },
    "431": {
        "character": "积累",
        "letter": "jīlěi",
        "pinyin": "accumulation"
    },
    "432": {
        "character": "进",
        "letter": "jìn",
        "pinyin": "to enter"
    },
    "433": {
        "character": "近",
        "letter": "jìn",
        "pinyin": "near"
    },
    "434": {
        "character": "精彩",
        "letter": "jīngcǎi",
        "pinyin": "marvellous, brilliant"
    },
    "435": {
        "character": "警察",
        "letter": "jǐngchá",
        "pinyin": "policeman"
    },
    "436": {
        "character": "经常",
        "letter": "jīngcháng",
        "pinyin": "often"
    },
    "437": {
        "character": "经过",
        "letter": "jīngguò",
        "pinyin": "to pass"
    },
    "438": {
        "character": "经济",
        "letter": "jīngjì",
        "pinyin": "economic"
    },
    "439": {
        "character": "京剧",
        "letter": "jīngjù",
        "pinyin": "beijing opera"
    },
    "440": {
        "character": "经历",
        "letter": "jīnglì",
        "pinyin": "experience"
    },
    "441": {
        "character": "经理",
        "letter": "jīnglǐ",
        "pinyin": "manager"
    },
    "442": {
        "character": "竟然",
        "letter": "jìngrán",
        "pinyin": "unexpectedly"
    },
    "443": {
        "character": "景色",
        "letter": "jǐngsè",
        "pinyin": "view, scenery"
    },
    "444": {
        "character": "尽管",
        "letter": "jǐnguǎn",
        "pinyin": "although, despite"
    },
    "445": {
        "character": "经验",
        "letter": "jīngyàn",
        "pinyin": "experience"
    },
    "446": {
        "character": "竞争",
        "letter": "jìngzhēng",
        "pinyin": "competition"
    },
    "447": {
        "character": "镜子",
        "letter": "jìngzi",
        "pinyin": "mirror"
    },
    "448": {
        "character": "今天",
        "letter": "jīntiān",
        "pinyin": "today"
    },
    "449": {
        "character": "进行",
        "letter": "jìnxíng",
        "pinyin": "in progress"
    },
    "450": {
        "character": "紧张",
        "letter": "jǐnzhāng",
        "pinyin": "nervous"
    },
    "451": {
        "character": "禁止",
        "letter": "jìnzhǐ",
        "pinyin": "prohibit, forbid"
    },
    "452": {
        "character": "既然",
        "letter": "jìrán",
        "pinyin": "since, as, although"
    },
    "453": {
        "character": "及时",
        "letter": "jíshí",
        "pinyin": "timely, without delay"
    },
    "454": {
        "character": "即使",
        "letter": "jíshǐ",
        "pinyin": "even if"
    },
    "455": {
        "character": "技术",
        "letter": "jìshù",
        "pinyin": "technology"
    },
    "456": {
        "character": "旧",
        "letter": "jiù",
        "pinyin": "old or used"
    },
    "457": {
        "character": "久",
        "letter": "jiǔ",
        "pinyin": "long (in time)"
    },
    "458": {
        "character": "九",
        "letter": "jiǔ",
        "pinyin": "nine"
    },
    "459": {
        "character": "就",
        "letter": "jiǜ",
        "pinyin": "at once"
    },
    "460": {
        "character": "究竟",
        "letter": "jiūjìng",
        "pinyin": "after all, actually"
    },
    "461": {
        "character": "继续",
        "letter": "jìxù",
        "pinyin": "continue"
    },
    "462": {
        "character": "记者",
        "letter": "jìzhě",
        "pinyin": "reporter, journalist"
    },
    "463": {
        "character": "举",
        "letter": "jǔ",
        "pinyin": "lift, to hold up, to raise"
    },
    "464": {
        "character": "举办",
        "letter": "jǔbàn",
        "pinyin": "to conduct, to hold"
    },
    "465": {
        "character": "觉得",
        "letter": "juédé",
        "pinyin": "to feel or to think"
    },
    "466": {
        "character": "决定",
        "letter": "juédìng",
        "pinyin": "to decide"
    },
    "467": {
        "character": "聚会",
        "letter": "jùhuì",
        "pinyin": "get together"
    },
    "468": {
        "character": "拒绝",
        "letter": "jùjué",
        "pinyin": "refuse, decline, reject"
    },
    "469": {
        "character": "距离",
        "letter": "jùlí",
        "pinyin": "distance"
    },
    "470": {
        "character": "举行",
        "letter": "jǔxíng",
        "pinyin": "to hold (event)"
    },
    "471": {
        "character": "句子",
        "letter": "jùzi",
        "pinyin": "sentence"
    },
    "472": {
        "character": "咖啡",
        "letter": "kāfēi",
        "pinyin": "coffee"
    },
    "473": {
        "character": "开",
        "letter": "kāi",
        "pinyin": "to drive or to open"
    },
    "474": {
        "character": "开始",
        "letter": "kāishǐ",
        "pinyin": "to begin"
    },
    "475": {
        "character": "开玩笑",
        "letter": "kāiwánxiào",
        "pinyin": "just kidding, to make fun"
    },
    "476": {
        "character": "开心",
        "letter": "kāixīn",
        "pinyin": "to feel happy, to have a great time"
    },
    "477": {
        "character": "看",
        "letter": "kàn",
        "pinyin": "to look or to watch"
    },
    "478": {
        "character": "看法",
        "letter": "kànfǎ",
        "pinyin": "view"
    },
    "479": {
        "character": "看见",
        "letter": "kànjiàn",
        "pinyin": "to see"
    },
    "480": {
        "character": "考虑",
        "letter": "kǎolǜ",
        "pinyin": "consideration"
    },
    "481": {
        "character": "考试",
        "letter": "kǎoshì",
        "pinyin": "exam"
    },
    "482": {
        "character": "烤鸭",
        "letter": "kǎoyā",
        "pinyin": "roast duck"
    },
    "483": {
        "character": "课",
        "letter": "kè",
        "pinyin": "lesson"
    },
    "484": {
        "character": "刻",
        "letter": "kè",
        "pinyin": "quarter (time)"
    },
    "485": {
        "character": "渴",
        "letter": "kě",
        "pinyin": "thirsty"
    },
    "486": {
        "character": "棵",
        "letter": "kē",
        "pinyin": "classifier for trees"
    },
    "487": {
        "character": "可爱",
        "letter": "Kě’ài",
        "pinyin": "cute"
    },
    "488": {
        "character": "可怜",
        "letter": "kělián",
        "pinyin": "pathetic, pitiful"
    },
    "489": {
        "character": "肯定",
        "letter": "kěndìng",
        "pinyin": "to be sure, to be certain"
    },
    "490": {
        "character": "可能",
        "letter": "kěnéng",
        "pinyin": "maybe"
    },
    "491": {
        "character": "客人",
        "letter": "kèren",
        "pinyin": "guest"
    },
    "492": {
        "character": "可是",
        "letter": "kěshì",
        "pinyin": "however, but"
    },
    "493": {
        "character": "咳嗽",
        "letter": "késou",
        "pinyin": "cough"
    },
    "494": {
        "character": "客厅",
        "letter": "kètīng",
        "pinyin": "living room"
    },
    "495": {
        "character": "可惜",
        "letter": "kěxī",
        "pinyin": "unfortunately"
    },
    "496": {
        "character": "科学",
        "letter": "kēxué",
        "pinyin": "science"
    },
    "497": {
        "character": "可以",
        "letter": "kěyǐ",
        "pinyin": "can (to be permitted to)"
    },
    "498": {
        "character": "空",
        "letter": "kōng",
        "pinyin": "leisure, free time, to empty"
    },
    "499": {
        "character": "恐怕",
        "letter": "kǒngpà",
        "pinyin": "I'm afraid, to fear"
    },
    "500": {
        "character": "空气",
        "letter": "kōngqì",
        "pinyin": "air"
    },
    "501": {
        "character": "空调",
        "letter": "kōngtiáo",
        "pinyin": "air conditioner"
    },
    "502": {
        "character": "口",
        "letter": "kǒu",
        "pinyin": "mouth"
    },
    "503": {
        "character": "苦",
        "letter": "kǔ",
        "pinyin": "bitter, pain, to suffer"
    },
    "504": {
        "character": "哭",
        "letter": "kū",
        "pinyin": "to cry"
    },
    "505": {
        "character": "块",
        "letter": "kuài",
        "pinyin": "basic monetary unit of China"
    },
    "506": {
        "character": "快",
        "letter": "kuài",
        "pinyin": "fast"
    },
    "507": {
        "character": "快乐",
        "letter": "kuàilè",
        "pinyin": "happy"
    },
    "508": {
        "character": "筷子",
        "letter": "kuàizi",
        "pinyin": "chopsticks"
    },
    "509": {
        "character": "矿泉水",
        "letter": "kuàngquán shuǐ",
        "pinyin": "mineral water"
    },
    "510": {
        "character": "困",
        "letter": "kùn",
        "pinyin": "sleepy"
    },
    "511": {
        "character": "困难",
        "letter": "kùnnan",
        "pinyin": "difficulty, problem, issue"
    },
    "512": {
        "character": "裤子",
        "letter": "kùzi",
        "pinyin": "pants"
    },
    "513": {
        "character": "辣",
        "letter": "là",
        "pinyin": "hot (spicy)"
    },
    "514": {
        "character": "拉",
        "letter": "lā",
        "pinyin": "pull"
    },
    "515": {
        "character": "来",
        "letter": "lái",
        "pinyin": "to come"
    },
    "516": {
        "character": "来不及",
        "letter": "láibují",
        "pinyin": "there's not enough time"
    },
    "517": {
        "character": "来得及",
        "letter": "láidejí",
        "pinyin": "there's still time"
    },
    "518": {
        "character": "来自",
        "letter": "láizì",
        "pinyin": "from, come from"
    },
    "519": {
        "character": "垃圾桶",
        "letter": "lājītǒng",
        "pinyin": "trash, rubbish bin"
    },
    "520": {
        "character": "蓝",
        "letter": "lán",
        "pinyin": "blue"
    },
    "521": {
        "character": "懒",
        "letter": "lǎn",
        "pinyin": "lazy"
    },
    "522": {
        "character": "浪费",
        "letter": "làngfèi",
        "pinyin": "waste"
    },
    "523": {
        "character": "浪漫",
        "letter": "làngmàn",
        "pinyin": "romantic"
    },
    "524": {
        "character": "老",
        "letter": "lǎo",
        "pinyin": "old (in age)"
    },
    "525": {
        "character": "老虎",
        "letter": "lǎohǔ",
        "pinyin": "tiger"
    },
    "526": {
        "character": "老师",
        "letter": "lǎoshī",
        "pinyin": "teacher"
    },
    "527": {
        "character": "了",
        "letter": "le",
        "pinyin": "aspect particle"
    },
    "528": {
        "character": "累",
        "letter": "lèi",
        "pinyin": "tired"
    },
    "529": {
        "character": "冷",
        "letter": "lěng",
        "pinyin": "cold"
    },
    "530": {
        "character": "冷静",
        "letter": "lěngjìng",
        "pinyin": "calm down, cool-headed"
    },
    "531": {
        "character": "离",
        "letter": "lí",
        "pinyin": "away from"
    },
    "532": {
        "character": "里",
        "letter": "lǐ",
        "pinyin": "inside"
    },
    "533": {
        "character": "俩",
        "letter": "liǎ",
        "pinyin": "both, some"
    },
    "534": {
        "character": "连",
        "letter": "lián",
        "pinyin": "even, repeatedly"
    },
    "535": {
        "character": "脸",
        "letter": "liǎn",
        "pinyin": "face"
    },
    "536": {
        "character": "辆",
        "letter": "liàng",
        "pinyin": "for vehicles"
    },
    "537": {
        "character": "两",
        "letter": "liǎng",
        "pinyin": "two"
    },
    "538": {
        "character": "凉快",
        "letter": "liángkuai",
        "pinyin": "nice and cold, pleasantly cool"
    },
    "539": {
        "character": "联系",
        "letter": "liánxì",
        "pinyin": "contact, connection, relation"
    },
    "540": {
        "character": "练习",
        "letter": "liànxí",
        "pinyin": "to practice"
    },
    "541": {
        "character": "了解",
        "letter": "liǎojiě",
        "pinyin": "to know well"
    },
    "542": {
        "character": "礼拜天",
        "letter": "lǐbài tiān",
        "pinyin": "sunday"
    },
    "543": {
        "character": "理发",
        "letter": "lǐfà",
        "pinyin": "haircut, barber, hairdressing"
    },
    "544": {
        "character": "厉害",
        "letter": "lìhai",
        "pinyin": "great, awesome, tremendous"
    },
    "545": {
        "character": "理解",
        "letter": "lǐjiě",
        "pinyin": "understanding, comprehension"
    },
    "546": {
        "character": "离开",
        "letter": "líkāi",
        "pinyin": "to leave"
    },
    "547": {
        "character": "礼貌",
        "letter": "lǐmào",
        "pinyin": "courtesy, manners, politeness"
    },
    "548": {
        "character": "零",
        "letter": "líng",
        "pinyin": "zero"
    },
    "549": {
        "character": "零钱",
        "letter": "língqián",
        "pinyin": "small change, pocket money"
    },
    "550": {
        "character": "另外",
        "letter": "lìngwài",
        "pinyin": "in addition"
    },
    "551": {
        "character": "邻居",
        "letter": "línjū",
        "pinyin": "neighbor"
    },
    "552": {
        "character": "力气",
        "letter": "lìqi",
        "pinyin": "strength"
    },
    "553": {
        "character": "例如",
        "letter": "lìrú",
        "pinyin": "for example"
    },
    "554": {
        "character": "历史",
        "letter": "lìshǐ",
        "pinyin": "history"
    },
    "555": {
        "character": "留",
        "letter": "liú",
        "pinyin": "retain, stay, keep, preserve"
    },
    "556": {
        "character": "六",
        "letter": "liù",
        "pinyin": "six"
    },
    "557": {
        "character": "流利",
        "letter": "liúlì",
        "pinyin": "fluent"
    },
    "558": {
        "character": "流行",
        "letter": "liúxíng",
        "pinyin": "popular"
    },
    "559": {
        "character": "礼物",
        "letter": "lǐwù",
        "pinyin": "gift"
    },
    "560": {
        "character": "理想",
        "letter": "lǐxiǎng",
        "pinyin": "ideal, perfection, desirable"
    },
    "561": {
        "character": "楼",
        "letter": "lóu",
        "pinyin": "building or floor"
    },
    "562": {
        "character": "路",
        "letter": "lù",
        "pinyin": "road"
    },
    "563": {
        "character": "绿",
        "letter": "lǜ",
        "pinyin": "green"
    },
    "564": {
        "character": "乱",
        "letter": "luàn",
        "pinyin": "chaos, disorderly"
    },
    "565": {
        "character": "律师",
        "letter": "lǜshī",
        "pinyin": "lawyer"
    },
    "566": {
        "character": "旅行",
        "letter": "lǚxíng",
        "pinyin": "travel, trip, journey"
    },
    "567": {
        "character": "旅游",
        "letter": "lǚyóu",
        "pinyin": "to travel"
    },
    "568": {
        "character": "吗",
        "letter": "ma",
        "pinyin": "question particle"
    },
    "569": {
        "character": "马",
        "letter": "mǎ",
        "pinyin": "horse"
    },
    "570": {
        "character": "麻烦",
        "letter": "máfan",
        "pinyin": "trouble, inconvenient"
    },
    "571": {
        "character": "马虎",
        "letter": "mǎhu",
        "pinyin": "careless"
    },
    "572": {
        "character": "卖",
        "letter": "mài",
        "pinyin": "to sell"
    },
    "573": {
        "character": "买",
        "letter": "mǎi",
        "pinyin": "to buy"
    },
    "574": {
        "character": "妈妈",
        "letter": "māma",
        "pinyin": "mom"
    },
    "575": {
        "character": "慢",
        "letter": "màn",
        "pinyin": "slow"
    },
    "576": {
        "character": "满",
        "letter": "mǎn",
        "pinyin": "full, completely, satisfied"
    },
    "577": {
        "character": "忙",
        "letter": "máng",
        "pinyin": "busy"
    },
    "578": {
        "character": "满意",
        "letter": "mǎnyì",
        "pinyin": "satisfied"
    },
    "579": {
        "character": "毛",
        "letter": "máo",
        "pinyin": "hair, feather, wool, down"
    },
    "580": {
        "character": "猫",
        "letter": "māo",
        "pinyin": "cat"
    },
    "581": {
        "character": "毛巾",
        "letter": "máojīn",
        "pinyin": "towel"
    },
    "582": {
        "character": "帽子",
        "letter": "màozi",
        "pinyin": "hat or cap"
    },
    "583": {
        "character": "马上",
        "letter": "mǎshàng",
        "pinyin": "immediately"
    },
    "584": {
        "character": "没",
        "letter": "méi",
        "pinyin": "not"
    },
    "585": {
        "character": "每",
        "letter": "měi",
        "pinyin": "every"
    },
    "586": {
        "character": "没关系",
        "letter": "méi guānxi",
        "pinyin": "it’s all right"
    },
    "587": {
        "character": "美丽",
        "letter": "měilì",
        "pinyin": "beautiful, pretty"
    },
    "588": {
        "character": "妹妹",
        "letter": "mèimei",
        "pinyin": "younger sister"
    },
    "589": {
        "character": "门",
        "letter": "mén",
        "pinyin": "door"
    },
    "590": {
        "character": "梦",
        "letter": "mèng",
        "pinyin": "dream"
    },
    "591": {
        "character": "米",
        "letter": "mǐ",
        "pinyin": "meter"
    },
    "592": {
        "character": "面包",
        "letter": "miànbāo",
        "pinyin": "bread"
    },
    "593": {
        "character": "免费",
        "letter": "miǎnfèi",
        "pinyin": "free of charge"
    },
    "594": {
        "character": "面条",
        "letter": "miàntiáo",
        "pinyin": "noodle"
    },
    "595": {
        "character": "秒",
        "letter": "miǎo",
        "pinyin": "second (of time)"
    },
    "596": {
        "character": "米饭",
        "letter": "mǐfàn",
        "pinyin": "(cooked) rice"
    },
    "597": {
        "character": "迷路",
        "letter": "mílù",
        "pinyin": "get lost"
    },
    "598": {
        "character": "密码",
        "letter": "mìmǎ",
        "pinyin": "password, secret code, pin number"
    },
    "599": {
        "character": "明白",
        "letter": "míngbai",
        "pinyin": "to understand"
    },
    "600": {
        "character": "明天",
        "letter": "míngtiān",
        "pinyin": "tomorrow"
    },
    "601": {
        "character": "名字",
        "letter": "míngzì",
        "pinyin": "name"
    },
    "602": {
        "character": "民族",
        "letter": "mínzú",
        "pinyin": "nationality, ethnic group"
    },
    "603": {
        "character": "目的",
        "letter": "mùdì",
        "pinyin": "purpose, target, objective"
    },
    "604": {
        "character": "互联网",
        "letter": "mùliánwǎng",
        "pinyin": "internet"
    },
    "605": {
        "character": "母亲",
        "letter": "mǔqīn",
        "pinyin": "mother"
    },
    "606": {
        "character": "拿",
        "letter": "ná",
        "pinyin": "to hold or to take"
    },
    "607": {
        "character": "那/那儿",
        "letter": "nà/nàr",
        "pinyin": "that/there"
    },
    "608": {
        "character": "哪/哪儿",
        "letter": "nǎ/nǎr",
        "pinyin": "which/where"
    },
    "609": {
        "character": "奶奶",
        "letter": "nǎinai",
        "pinyin": "grandma"
    },
    "610": {
        "character": "耐心",
        "letter": "nàixīn",
        "pinyin": "patience"
    },
    "611": {
        "character": "南",
        "letter": "nán",
        "pinyin": "south"
    },
    "612": {
        "character": "难",
        "letter": "nán",
        "pinyin": "difficult"
    },
    "613": {
        "character": "难道",
        "letter": "nándào",
        "pinyin": "could it be that...?"
    },
    "614": {
        "character": "难过",
        "letter": "nánguò",
        "pinyin": "sad"
    },
    "615": {
        "character": "男人",
        "letter": "nánrén",
        "pinyin": "man"
    },
    "616": {
        "character": "难受",
        "letter": "nánshòu",
        "pinyin": "uncomfortable"
    },
    "617": {
        "character": "呢",
        "letter": "ne",
        "pinyin": "question particle"
    },
    "618": {
        "character": "内",
        "letter": "nèi",
        "pinyin": "inside, inner, within"
    },
    "619": {
        "character": "内容",
        "letter": "nèiróng",
        "pinyin": "content, details"
    },
    "620": {
        "character": "能",
        "letter": "néng",
        "pinyin": "can (to be able to)"
    },
    "621": {
        "character": "能力",
        "letter": "nénglì",
        "pinyin": "capability, ability"
    },
    "622": {
        "character": "你",
        "letter": "nǐ",
        "pinyin": "you (singular)"
    },
    "623": {
        "character": "年",
        "letter": "nián",
        "pinyin": "year"
    },
    "624": {
        "character": "年级",
        "letter": "niánjí",
        "pinyin": "grade"
    },
    "625": {
        "character": "年龄",
        "letter": "niánlíng",
        "pinyin": "age (a person)"
    },
    "626": {
        "character": "年轻",
        "letter": "niánqīng",
        "pinyin": "young"
    },
    "627": {
        "character": "鸟",
        "letter": "niǎo",
        "pinyin": "bird"
    },
    "628": {
        "character": "您",
        "letter": "nín",
        "pinyin": "you (singular/honorific)"
    },
    "629": {
        "character": "牛奶",
        "letter": "niúnǎi",
        "pinyin": "milk"
    },
    "630": {
        "character": "弄",
        "letter": "nòng",
        "pinyin": "get, make"
    },
    "631": {
        "character": "女儿",
        "letter": "nǚ’ér",
        "pinyin": "daughter"
    },
    "632": {
        "character": "暖和",
        "letter": "nuǎnhuo",
        "pinyin": "warm"
    },
    "633": {
        "character": "努力",
        "letter": "nǔlì",
        "pinyin": "studious or hardworking"
    },
    "634": {
        "character": "女人",
        "letter": "nǚrén",
        "pinyin": "woman"
    },
    "635": {
        "character": "偶尔",
        "letter": "ǒu'ěr",
        "pinyin": "occasionally"
    },
    "636": {
        "character": "爬山",
        "letter": "pá shān",
        "pinyin": "to climb mountain"
    },
    "637": {
        "character": "排队",
        "letter": "páiduì",
        "pinyin": "queue, line up"
    },
    "638": {
        "character": "排列",
        "letter": "páiliè",
        "pinyin": "array, arrangement"
    },
    "639": {
        "character": "判断",
        "letter": "pànduàn",
        "pinyin": "judgment"
    },
    "640": {
        "character": "胖",
        "letter": "pàng",
        "pinyin": "fat"
    },
    "641": {
        "character": "旁边",
        "letter": "pángbiān",
        "pinyin": "side"
    },
    "642": {
        "character": "盘子",
        "letter": "pánzi",
        "pinyin": "plate"
    },
    "643": {
        "character": "跑步",
        "letter": "pǎo bù",
        "pinyin": "to run"
    },
    "644": {
        "character": "陪",
        "letter": "péi",
        "pinyin": "accompany"
    },
    "645": {
        "character": "朋友",
        "letter": "péngyǒu",
        "pinyin": "friend"
    },
    "646": {
        "character": "骗",
        "letter": "piàn",
        "pinyin": "to cheat, to trick, to fool"
    },
    "647": {
        "character": "篇",
        "letter": "piān",
        "pinyin": "piece, sheet, articles"
    },
    "648": {
        "character": "便宜",
        "letter": "piányi",
        "pinyin": "cheap"
    },
    "649": {
        "character": "票",
        "letter": "piào",
        "pinyin": "ticket"
    },
    "650": {
        "character": "漂亮",
        "letter": "piàoliang",
        "pinyin": "pretty"
    },
    "651": {
        "character": "皮肤",
        "letter": "pífū",
        "pinyin": "skin"
    },
    "652": {
        "character": "啤酒",
        "letter": "píjiǔ",
        "pinyin": "beer"
    },
    "653": {
        "character": "苹果",
        "letter": "píngguǒ",
        "pinyin": "apple"
    },
    "654": {
        "character": "乒乓球",
        "letter": "pīngpāng qiú",
        "pinyin": "table tennis"
    },
    "655": {
        "character": "平时",
        "letter": "píngshí",
        "pinyin": "peacetime, in normal times"
    },
    "656": {
        "character": "批评",
        "letter": "pīpíng",
        "pinyin": "criticism"
    },
    "657": {
        "character": "脾气",
        "letter": "píqi",
        "pinyin": "temperament, disposition"
    },
    "658": {
        "character": "破",
        "letter": "pò",
        "pinyin": "broken, damaged"
    },
    "659": {
        "character": "普遍",
        "letter": "pǔbiàn",
        "pinyin": "universal"
    },
    "660": {
        "character": "葡萄",
        "letter": "pútáo",
        "pinyin": "grape"
    },
    "661": {
        "character": "普通话",
        "letter": "pǔtōnghuà",
        "pinyin": "(standard) Mandarin"
    },
    "662": {
        "character": "骑",
        "letter": "qí",
        "pinyin": "to ride"
    },
    "663": {
        "character": "七",
        "letter": "qī",
        "pinyin": "seven"
    },
    "664": {
        "character": "起床",
        "letter": "qǐ chuáng",
        "pinyin": "to get up"
    },
    "665": {
        "character": "钱",
        "letter": "qián",
        "pinyin": "money"
    },
    "666": {
        "character": "千",
        "letter": "qiān",
        "pinyin": "thousand"
    },
    "667": {
        "character": "铅笔",
        "letter": "qiānbǐ",
        "pinyin": "pencil"
    },
    "668": {
        "character": "前面",
        "letter": "qiánmiàn",
        "pinyin": "front"
    },
    "669": {
        "character": "千万",
        "letter": "qiānwàn",
        "pinyin": "ten million"
    },
    "670": {
        "character": "签证",
        "letter": "qiānzhèng",
        "pinyin": "visa"
    },
    "671": {
        "character": "桥",
        "letter": "qiáo",
        "pinyin": "bridge"
    },
    "672": {
        "character": "敲",
        "letter": "qiāo",
        "pinyin": "knock"
    },
    "673": {
        "character": "巧克力",
        "letter": "qiǎokèlì",
        "pinyin": "chocolate"
    },
    "674": {
        "character": "其次",
        "letter": "qícì",
        "pinyin": "next, second"
    },
    "675": {
        "character": "奇怪",
        "letter": "qíguài",
        "pinyin": "strange"
    },
    "676": {
        "character": "气候",
        "letter": "qìhòu",
        "pinyin": "climate"
    },
    "677": {
        "character": "晴",
        "letter": "qíng",
        "pinyin": "sunny"
    },
    "678": {
        "character": "请",
        "letter": "qǐng",
        "pinyin": "please…"
    },
    "679": {
        "character": "轻",
        "letter": "qīng",
        "pinyin": "light"
    },
    "680": {
        "character": "清楚",
        "letter": "qīngchu",
        "pinyin": "clear"
    },
    "681": {
        "character": "情况",
        "letter": "qíngkuàng",
        "pinyin": "circumstances, situation"
    },
    "682": {
        "character": "轻松",
        "letter": "qīngsōng",
        "pinyin": "easy, relaxed"
    },
    "683": {
        "character": "亲戚",
        "letter": "qīnqi",
        "pinyin": "relative"
    },
    "684": {
        "character": "穷",
        "letter": "qióng",
        "pinyin": "poor"
    },
    "685": {
        "character": "其实",
        "letter": "qíshí",
        "pinyin": "actually"
    },
    "686": {
        "character": "其他",
        "letter": "qítā",
        "pinyin": "other"
    },
    "687": {
        "character": "秋",
        "letter": "qiū",
        "pinyin": "autumn"
    },
    "688": {
        "character": "其中",
        "letter": "qízhōng",
        "pinyin": "among"
    },
    "689": {
        "character": "妻子",
        "letter": "qīzi",
        "pinyin": "wife"
    },
    "690": {
        "character": "去",
        "letter": "qù",
        "pinyin": "to go"
    },
    "691": {
        "character": "取",
        "letter": "qǔ",
        "pinyin": "take, get, choose"
    },
    "692": {
        "character": "全部",
        "letter": "quánbù",
        "pinyin": "whole, entire, complete"
    },
    "693": {
        "character": "区别",
        "letter": "qūbié",
        "pinyin": "difference, distinguish"
    },
    "694": {
        "character": "却",
        "letter": "què",
        "pinyin": "but, however, yet, while"
    },
    "695": {
        "character": "缺点",
        "letter": "quēdiǎn",
        "pinyin": "weak point, shortcoming"
    },
    "696": {
        "character": "缺少",
        "letter": "quēshǎo",
        "pinyin": "lack, shortage"
    },
    "697": {
        "character": "确实",
        "letter": "quèshí",
        "pinyin": "indeed, really, reliable"
    },
    "698": {
        "character": "去年",
        "letter": "qùnián",
        "pinyin": "last year"
    },
    "699": {
        "character": "裙子",
        "letter": "qúnzi",
        "pinyin": "skirt"
    },
    "700": {
        "character": "然而",
        "letter": "rán'ér",
        "pinyin": "however, yet, but"
    },
    "701": {
        "character": "让",
        "letter": "ràng",
        "pinyin": "to let"
    },
    "702": {
        "character": "然后",
        "letter": "ránhòu",
        "pinyin": "then, afterwards"
    },
    "703": {
        "character": "热",
        "letter": "rè",
        "pinyin": "hot"
    },
    "704": {
        "character": "人",
        "letter": "rén",
        "pinyin": "person or people"
    },
    "705": {
        "character": "热闹",
        "letter": "rènào",
        "pinyin": "lively"
    },
    "706": {
        "character": "扔",
        "letter": "rēng",
        "pinyin": "throw"
    },
    "707": {
        "character": "仍然",
        "letter": "réngrán",
        "pinyin": "still"
    },
    "708": {
        "character": "任何",
        "letter": "rènhé",
        "pinyin": "whatever, any"
    },
    "709": {
        "character": "认识",
        "letter": "rènshi",
        "pinyin": "to know"
    },
    "710": {
        "character": "认为",
        "letter": "rènwéi",
        "pinyin": "to think or to consider"
    },
    "711": {
        "character": "任务",
        "letter": "rènwu",
        "pinyin": "task, mission, assignment"
    },
    "712": {
        "character": "认真",
        "letter": "rènzhēn",
        "pinyin": "serious or careful"
    },
    "713": {
        "character": "热情",
        "letter": "rèqíng",
        "pinyin": "enthusiastic"
    },
    "714": {
        "character": "日",
        "letter": "rì",
        "pinyin": "day"
    },
    "715": {
        "character": "日记",
        "letter": "rìjì",
        "pinyin": "diary"
    },
    "716": {
        "character": "容易",
        "letter": "róngyì",
        "pinyin": "easy"
    },
    "717": {
        "character": "如果",
        "letter": "rúguǒ",
        "pinyin": "if"
    },
    "718": {
        "character": "入口",
        "letter": "rùkǒu",
        "pinyin": "entrance"
    },
    "719": {
        "character": "伞",
        "letter": "sǎn",
        "pinyin": "umbrella"
    },
    "720": {
        "character": "三",
        "letter": "sān",
        "pinyin": "three"
    },
    "721": {
        "character": "散步",
        "letter": "sànbù",
        "pinyin": "to go for a walk"
    },
    "722": {
        "character": "森林",
        "letter": "sēnlín",
        "pinyin": "forest"
    },
    "723": {
        "character": "沙发",
        "letter": "shāfā",
        "pinyin": "sofa"
    },
    "724": {
        "character": "上",
        "letter": "shàng",
        "pinyin": "on, above or last"
    },
    "725": {
        "character": "上班",
        "letter": "shàng bān",
        "pinyin": "to go to work"
    },
    "726": {
        "character": "商店",
        "letter": "shāngdiàn",
        "pinyin": "shop"
    },
    "727": {
        "character": "商量",
        "letter": "shāngliang",
        "pinyin": "discuss, consult"
    },
    "728": {
        "character": "上网",
        "letter": "shàngwǎng",
        "pinyin": "to get online"
    },
    "729": {
        "character": "上午",
        "letter": "shàngwǔ",
        "pinyin": "morning"
    },
    "730": {
        "character": "伤心",
        "letter": "shāngxīn",
        "pinyin": "sad, broken-hearted"
    },
    "731": {
        "character": "少",
        "letter": "shǎo",
        "pinyin": "few"
    },
    "732": {
        "character": "稍微",
        "letter": "shāowēi",
        "pinyin": "slightly, a little bit"
    },
    "733": {
        "character": "勺子",
        "letter": "sháozi",
        "pinyin": "spoon"
    },
    "734": {
        "character": "社会",
        "letter": "shèhuì",
        "pinyin": "society"
    },
    "735": {
        "character": "谁",
        "letter": "shéi",
        "pinyin": "who"
    },
    "736": {
        "character": "深",
        "letter": "shēn",
        "pinyin": "deep"
    },
    "737": {
        "character": "剩",
        "letter": "shèng",
        "pinyin": "to be left"
    },
    "738": {
        "character": "省",
        "letter": "shěng",
        "pinyin": "province"
    },
    "739": {
        "character": "生病",
        "letter": "shēng bìng",
        "pinyin": "to get sick"
    },
    "740": {
        "character": "生活",
        "letter": "shēnghuó",
        "pinyin": "life, activity"
    },
    "741": {
        "character": "生命",
        "letter": "shēngmìng",
        "pinyin": "life, living"
    },
    "742": {
        "character": "生气",
        "letter": "shēngqì",
        "pinyin": "to get angry"
    },
    "743": {
        "character": "生日",
        "letter": "shēngrì",
        "pinyin": "birthday"
    },
    "744": {
        "character": "生意",
        "letter": "shēngyi",
        "pinyin": "business"
    },
    "745": {
        "character": "声音",
        "letter": "shēngyīn",
        "pinyin": "sound or voice"
    },
    "746": {
        "character": "什么",
        "letter": "shénme",
        "pinyin": "what"
    },
    "747": {
        "character": "申请",
        "letter": "shēnqǐng",
        "pinyin": "to apply for something"
    },
    "748": {
        "character": "身体",
        "letter": "shēntǐ",
        "pinyin": "body"
    },
    "749": {
        "character": "甚至",
        "letter": "shènzhì",
        "pinyin": "so much so that, even"
    },
    "750": {
        "character": "十",
        "letter": "shí",
        "pinyin": "ten"
    },
    "751": {
        "character": "是",
        "letter": "shì",
        "pinyin": "to be"
    },
    "752": {
        "character": "使",
        "letter": "shǐ",
        "pinyin": "to make"
    },
    "753": {
        "character": "失败",
        "letter": "shībài",
        "pinyin": "fail, lose"
    },
    "754": {
        "character": "十分",
        "letter": "shífēn",
        "pinyin": "very, fully, divide into ten equal parts"
    },
    "755": {
        "character": "是否",
        "letter": "shìfǒu",
        "pinyin": "whether"
    },
    "756": {
        "character": "师傅",
        "letter": "shīfu",
        "pinyin": "qualified worker, master worker"
    },
    "757": {
        "character": "适合",
        "letter": "shìhé",
        "pinyin": "to fit, to suit"
    },
    "758": {
        "character": "时候",
        "letter": "shíhou",
        "pinyin": "a certain point in time"
    },
    "759": {
        "character": "实际",
        "letter": "shíjì",
        "pinyin": "actual, reality"
    },
    "760": {
        "character": "世纪",
        "letter": "shìjì",
        "pinyin": "century"
    },
    "761": {
        "character": "时间",
        "letter": "shíjiān",
        "pinyin": "a period of time"
    },
    "762": {
        "character": "世界",
        "letter": "shìjiè",
        "pinyin": "world"
    },
    "763": {
        "character": "事情",
        "letter": "shìqing",
        "pinyin": "matter"
    },
    "764": {
        "character": "失望",
        "letter": "shīwàng",
        "pinyin": "disappointed"
    },
    "765": {
        "character": "适应",
        "letter": "shìyìng",
        "pinyin": "adapt, to be suitable"
    },
    "766": {
        "character": "使用",
        "letter": "shǐyòng",
        "pinyin": "to use"
    },
    "767": {
        "character": "实在",
        "letter": "shízài",
        "pinyin": "really, honestly"
    },
    "768": {
        "character": "瘦",
        "letter": "shòu",
        "pinyin": "thin"
    },
    "769": {
        "character": "收",
        "letter": "shōu",
        "pinyin": "receive, accept, collect"
    },
    "770": {
        "character": "手表",
        "letter": "shǒubiǎo",
        "pinyin": "watch"
    },
    "771": {
        "character": "受不了",
        "letter": "shòubuliǎo",
        "pinyin": "unbearable, can't stand it"
    },
    "772": {
        "character": "受到",
        "letter": "shòudào",
        "pinyin": "suffer, obtained"
    },
    "773": {
        "character": "首都",
        "letter": "shǒudū",
        "pinyin": "capital"
    },
    "774": {
        "character": "售货员",
        "letter": "shòuhuòyuán",
        "pinyin": "salesperson"
    },
    "775": {
        "character": "手机",
        "letter": "shǒujī",
        "pinyin": "mobile phone"
    },
    "776": {
        "character": "收入",
        "letter": "shōurù",
        "pinyin": "income"
    },
    "777": {
        "character": "收拾",
        "letter": "shōushi",
        "pinyin": "to put in order, pack, tidy"
    },
    "778": {
        "character": "首先",
        "letter": "shǒuxiān",
        "pinyin": "in the first place"
    },
    "779": {
        "character": "树",
        "letter": "shù",
        "pinyin": "tree"
    },
    "780": {
        "character": "输",
        "letter": "shū",
        "pinyin": "lose, fail"
    },
    "781": {
        "character": "书",
        "letter": "shū",
        "pinyin": "book"
    },
    "782": {
        "character": "帅",
        "letter": "shuài",
        "pinyin": "handsome"
    },
    "783": {
        "character": "双",
        "letter": "shuāng",
        "pinyin": "pair"
    },
    "784": {
        "character": "刷牙",
        "letter": "shuāyá",
        "pinyin": "to brush teeth"
    },
    "785": {
        "character": "舒服",
        "letter": "shūfu",
        "pinyin": "comfortable"
    },
    "786": {
        "character": "水",
        "letter": "shuǐ",
        "pinyin": "water"
    },
    "787": {
        "character": "水果",
        "letter": "shuǐguǒ",
        "pinyin": "fruit"
    },
    "788": {
        "character": "睡觉",
        "letter": "shuìjiào",
        "pinyin": "to sleep"
    },
    "789": {
        "character": "水平",
        "letter": "shuǐpíng",
        "pinyin": "level or standard"
    },
    "790": {
        "character": "数量",
        "letter": "shùliàng",
        "pinyin": "quantity, amount"
    },
    "791": {
        "character": "顺便",
        "letter": "shùnbiàn",
        "pinyin": "conveniently, Incidentally"
    },
    "792": {
        "character": "顺利",
        "letter": "shùnlì",
        "pinyin": "smoothly"
    },
    "793": {
        "character": "顺序",
        "letter": "shùnxù",
        "pinyin": "sequence, order"
    },
    "794": {
        "character": "说话",
        "letter": "shuōhuà",
        "pinyin": "to speak"
    },
    "795": {
        "character": "说明",
        "letter": "shuōmíng",
        "pinyin": "explanation"
    },
    "796": {
        "character": "硕士",
        "letter": "shuòshì",
        "pinyin": "master's degree"
    },
    "797": {
        "character": "修理",
        "letter": "shūri",
        "pinyin": "repair, maintenance"
    },
    "798": {
        "character": "叔叔",
        "letter": "shūshu",
        "pinyin": "uncle"
    },
    "799": {
        "character": "熟悉",
        "letter": "shúxī",
        "pinyin": "be familiar with"
    },
    "800": {
        "character": "数学",
        "letter": "shùxué",
        "pinyin": "math"
    },
    "801": {
        "character": "数字",
        "letter": "shùzì",
        "pinyin": "number, digit"
    },
    "802": {
        "character": "四",
        "letter": "sì",
        "pinyin": "four"
    },
    "803": {
        "character": "死",
        "letter": "sǐ",
        "pinyin": "dead, die, pass out"
    },
    "804": {
        "character": "司机",
        "letter": "sījī",
        "pinyin": "driver"
    },
    "805": {
        "character": "送",
        "letter": "sòng",
        "pinyin": "to give as a gift or to deliver"
    },
    "806": {
        "character": "酸",
        "letter": "suān",
        "pinyin": "acid, sour, tart"
    },
    "807": {
        "character": "速度",
        "letter": "sùdù",
        "pinyin": "speed, rate"
    },
    "808": {
        "character": "岁",
        "letter": "suì",
        "pinyin": "year (of age)"
    },
    "809": {
        "character": "随便",
        "letter": "suíbiàn",
        "pinyin": "as one wishes, casual"
    },
    "810": {
        "character": "虽然",
        "letter": "suīrán",
        "pinyin": "although"
    },
    "811": {
        "character": "随着",
        "letter": "suízhe",
        "pinyin": "along with"
    },
    "812": {
        "character": "塑料袋",
        "letter": "sùliàodài",
        "pinyin": "plastic bag"
    },
    "813": {
        "character": "孙子",
        "letter": "sūnzi",
        "pinyin": "grandson (paternal)"
    },
    "814": {
        "character": "所以",
        "letter": "suǒyǐ",
        "pinyin": "so"
    },
    "815": {
        "character": "所有",
        "letter": "suǒyǒu",
        "pinyin": "all"
    },
    "816": {
        "character": "他",
        "letter": "tā",
        "pinyin": "he or him"
    },
    "817": {
        "character": "她",
        "letter": "tā",
        "pinyin": "she or her"
    },
    "818": {
        "character": "它",
        "letter": "tā",
        "pinyin": "it"
    },
    "819": {
        "character": "台",
        "letter": "tái",
        "pinyin": "platform, station, classifier for vehicles or machines"
    },
    "820": {
        "character": "抬",
        "letter": "tái",
        "pinyin": "to lift, to raise, to carry"
    },
    "821": {
        "character": "太",
        "letter": "tài",
        "pinyin": "too…"
    },
    "822": {
        "character": "态度",
        "letter": "tàidu",
        "pinyin": "attitude, manner, approach"
    },
    "823": {
        "character": "太阳",
        "letter": "tàiyáng",
        "pinyin": "sun"
    },
    "824": {
        "character": "谈",
        "letter": "tán",
        "pinyin": "chat, discuss, talk"
    },
    "825": {
        "character": "糖",
        "letter": "táng",
        "pinyin": "candy or sugar"
    },
    "826": {
        "character": "趟",
        "letter": "tàng",
        "pinyin": "quantifier for the number of trips or runs made"
    },
    "827": {
        "character": "躺",
        "letter": "tǎng",
        "pinyin": "lie, to recline"
    },
    "828": {
        "character": "汤",
        "letter": "tāng",
        "pinyin": "soup, hot water"
    },
    "829": {
        "character": "弹钢琴",
        "letter": "tángāngqín",
        "pinyin": "play the piano"
    },
    "830": {
        "character": "讨论",
        "letter": "tǎolùn",
        "pinyin": "to talk over, to discuss"
    },
    "831": {
        "character": "讨厌",
        "letter": "tǎoyàn",
        "pinyin": "hate, dislike, annoying"
    },
    "832": {
        "character": "特别",
        "letter": "tèbié",
        "pinyin": "special"
    },
    "833": {
        "character": "特点",
        "letter": "tèdiǎn",
        "pinyin": "characteristic, feature"
    },
    "834": {
        "character": "疼",
        "letter": "téng",
        "pinyin": "to ache"
    },
    "835": {
        "character": "提",
        "letter": "tí",
        "pinyin": "to carry, to lift, to raise"
    },
    "836": {
        "character": "题",
        "letter": "tí",
        "pinyin": "question (exam, exercise)"
    },
    "837": {
        "character": "踢足球",
        "letter": "tī zúqiú",
        "pinyin": "to play soccer"
    },
    "838": {
        "character": "甜",
        "letter": "tián",
        "pinyin": "sweet"
    },
    "839": {
        "character": "填空",
        "letter": "tiánkòng",
        "pinyin": "fill in the blanks"
    },
    "840": {
        "character": "天气",
        "letter": "tiānqì",
        "pinyin": "weather"
    },
    "841": {
        "character": "条",
        "letter": "tiáo",
        "pinyin": "for long objects"
    },
    "842": {
        "character": "跳舞",
        "letter": "tiào wǔ",
        "pinyin": "to dance"
    },
    "843": {
        "character": "条件",
        "letter": "tiáojiàn",
        "pinyin": "condition, requirement"
    },
    "844": {
        "character": "提高",
        "letter": "tígāo",
        "pinyin": "to improve"
    },
    "845": {
        "character": "提供",
        "letter": "tígōng",
        "pinyin": "supply, provide"
    },
    "846": {
        "character": "停",
        "letter": "tíng",
        "pinyin": "stop, halt"
    },
    "847": {
        "character": "挺",
        "letter": "tǐng",
        "pinyin": "very, extraordinary, outstanding, classifier for machine guns"
    },
    "848": {
        "character": "听",
        "letter": "tīng",
        "pinyin": "to listen"
    },
    "849": {
        "character": "提前",
        "letter": "tíqián",
        "pinyin": "in advance"
    },
    "850": {
        "character": "提醒",
        "letter": "tíxǐng",
        "pinyin": "remind"
    },
    "851": {
        "character": "体育",
        "letter": "tǐyù",
        "pinyin": "sports or physical education"
    },
    "852": {
        "character": "通过",
        "letter": "tōngguò",
        "pinyin": "through"
    },
    "853": {
        "character": "同情",
        "letter": "tóngqíng",
        "pinyin": "sympathy"
    },
    "854": {
        "character": "同时",
        "letter": "tóngshí",
        "pinyin": "simultaneously, at the same time"
    },
    "855": {
        "character": "同事",
        "letter": "tóngshì",
        "pinyin": "colleague"
    },
    "856": {
        "character": "同学",
        "letter": "tóngxué",
        "pinyin": "schoolmate"
    },
    "857": {
        "character": "同意",
        "letter": "tóngyì",
        "pinyin": "to agree"
    },
    "858": {
        "character": "通知",
        "letter": "tōngzhī",
        "pinyin": "notice, notification"
    },
    "859": {
        "character": "头发",
        "letter": "tóufa",
        "pinyin": "hair"
    },
    "860": {
        "character": "腿",
        "letter": "tuǐ",
        "pinyin": "leg"
    },
    "861": {
        "character": "推",
        "letter": "tuī",
        "pinyin": "push"
    },
    "862": {
        "character": "推迟",
        "letter": "tuīchí",
        "pinyin": "delay, postpone"
    },
    "863": {
        "character": "脱",
        "letter": "tuō",
        "pinyin": "take off, get away from"
    },
    "864": {
        "character": "突然",
        "letter": "tūrán",
        "pinyin": "suddenly"
    },
    "865": {
        "character": "图书馆",
        "letter": "túshūguǎn",
        "pinyin": "library"
    },
    "866": {
        "character": "外",
        "letter": "wài",
        "pinyin": "outside"
    },
    "867": {
        "character": "玩",
        "letter": "wán",
        "pinyin": "to play"
    },
    "868": {
        "character": "完",
        "letter": "wán",
        "pinyin": "to finish"
    },
    "869": {
        "character": "万",
        "letter": "wàn",
        "pinyin": "ten thousand"
    },
    "870": {
        "character": "碗",
        "letter": "wǎn",
        "pinyin": "bowl"
    },
    "871": {
        "character": "完成",
        "letter": "wánchéng",
        "pinyin": "to complete or accomplish"
    },
    "872": {
        "character": "忘记",
        "letter": "wàngjì",
        "pinyin": "to forget"
    },
    "873": {
        "character": "网球",
        "letter": "wǎngqiú",
        "pinyin": "tennis"
    },
    "874": {
        "character": "往往",
        "letter": "wǎngwǎng",
        "pinyin": "often, frequently"
    },
    "875": {
        "character": "网站",
        "letter": "wǎngzhàn",
        "pinyin": "website, network station"
    },
    "876": {
        "character": "完全",
        "letter": "wánquán",
        "pinyin": "completely, entirely"
    },
    "877": {
        "character": "晚上",
        "letter": "wǎnshàng",
        "pinyin": "evening"
    },
    "878": {
        "character": "袜子",
        "letter": "wàzi",
        "pinyin": "socks"
    },
    "879": {
        "character": "位",
        "letter": "wèi",
        "pinyin": "measure word for people"
    },
    "880": {
        "character": "为",
        "letter": "wèi",
        "pinyin": "for (sb/sth)"
    },
    "881": {
        "character": "喂",
        "letter": "wèi",
        "pinyin": "hello (on the phone)"
    },
    "882": {
        "character": "为什么",
        "letter": "wèi shénme",
        "pinyin": "why"
    },
    "883": {
        "character": "味道",
        "letter": "wèidào",
        "pinyin": "taste, flavor, smell"
    },
    "884": {
        "character": "为了",
        "letter": "wèile",
        "pinyin": "for (purpose)"
    },
    "885": {
        "character": "卫生间",
        "letter": "wèishēngjiān",
        "pinyin": "bathroom, toilet"
    },
    "886": {
        "character": "危险",
        "letter": "wēixiǎn",
        "pinyin": "dangerous"
    },
    "887": {
        "character": "问",
        "letter": "wèn",
        "pinyin": "to ask"
    },
    "888": {
        "character": "温度",
        "letter": "wēndù",
        "pinyin": "temperature"
    },
    "889": {
        "character": "文化",
        "letter": "wénhuà",
        "pinyin": "culture"
    },
    "890": {
        "character": "问题",
        "letter": "wèntí",
        "pinyin": "question"
    },
    "891": {
        "character": "文章",
        "letter": "wénzhāng",
        "pinyin": "article, essay"
    },
    "892": {
        "character": "我",
        "letter": "wǒ",
        "pinyin": "I or me"
    },
    "893": {
        "character": "我们",
        "letter": "wǒmen",
        "pinyin": "we or me"
    },
    "894": {
        "character": "无",
        "letter": "wú",
        "pinyin": "nothing"
    },
    "895": {
        "character": "五",
        "letter": "wǔ",
        "pinyin": "five"
    },
    "896": {
        "character": "误会",
        "letter": "wùhuì",
        "pinyin": "misunderstand, mistake"
    },
    "897": {
        "character": "无聊",
        "letter": "wúliáo",
        "pinyin": "boring"
    },
    "898": {
        "character": "无论",
        "letter": "wúlùn",
        "pinyin": "no matter what"
    },
    "899": {
        "character": "污染",
        "letter": "wūrǎn",
        "pinyin": "pollution, contamination"
    },
    "900": {
        "character": "洗",
        "letter": "xǐ",
        "pinyin": "to wash"
    },
    "901": {
        "character": "西",
        "letter": "xī",
        "pinyin": "west"
    },
    "902": {
        "character": "夏",
        "letter": "xià",
        "pinyin": "summer"
    },
    "903": {
        "character": "下",
        "letter": "xià",
        "pinyin": "under, below or next"
    },
    "904": {
        "character": "下雨",
        "letter": "xià yǔ",
        "pinyin": "to rain"
    },
    "905": {
        "character": "咸",
        "letter": "xián",
        "pinyin": "salty"
    },
    "906": {
        "character": "先",
        "letter": "xiān",
        "pinyin": "first"
    },
    "907": {
        "character": "向",
        "letter": "xiàng",
        "pinyin": "towards"
    },
    "908": {
        "character": "像",
        "letter": "xiàng",
        "pinyin": "as or like"
    },
    "909": {
        "character": "响",
        "letter": "xiǎng",
        "pinyin": "ring, classifier for noises"
    },
    "910": {
        "character": "想",
        "letter": "xiǎng",
        "pinyin": "to think"
    },
    "911": {
        "character": "香",
        "letter": "xiāng",
        "pinyin": "fragrant, sweet smelling"
    },
    "912": {
        "character": "相反",
        "letter": "xiāngfǎn",
        "pinyin": "opposite, contrary"
    },
    "913": {
        "character": "香蕉",
        "letter": "xiāngjiāo",
        "pinyin": "banana"
    },
    "914": {
        "character": "橡皮",
        "letter": "xiàngpí",
        "pinyin": "rubber, eraser"
    },
    "915": {
        "character": "相同",
        "letter": "xiāngtóng",
        "pinyin": "same"
    },
    "916": {
        "character": "详细",
        "letter": "xiángxì",
        "pinyin": "detailed"
    },
    "917": {
        "character": "相信",
        "letter": "xiāngxìn",
        "pinyin": "to believe"
    },
    "918": {
        "character": "现金",
        "letter": "xiànjīn",
        "pinyin": "cash"
    },
    "919": {
        "character": "羡慕",
        "letter": "xiànmù",
        "pinyin": "envious, envy"
    },
    "920": {
        "character": "先生",
        "letter": "xiānsheng",
        "pinyin": "Mr or sir"
    },
    "921": {
        "character": "现在",
        "letter": "xiànzài",
        "pinyin": "now"
    },
    "922": {
        "character": "笑",
        "letter": "xiào",
        "pinyin": "to smile or to laugh"
    },
    "923": {
        "character": "小",
        "letter": "xiǎo",
        "pinyin": "small"
    },
    "924": {
        "character": "小吃",
        "letter": "xiǎochī",
        "pinyin": "snack"
    },
    "925": {
        "character": "效果",
        "letter": "xiàoguǒ",
        "pinyin": "result, effect"
    },
    "926": {
        "character": "笑话",
        "letter": "xiàohua",
        "pinyin": "joke"
    },
    "927": {
        "character": "小伙子",
        "letter": "xiǎohuǒzi",
        "pinyin": "young man, young fellow"
    },
    "928": {
        "character": "小姐",
        "letter": "xiǎojiě",
        "pinyin": "Miss"
    },
    "929": {
        "character": "小时",
        "letter": "xiǎoshí",
        "pinyin": "hour"
    },
    "930": {
        "character": "小说",
        "letter": "xiǎoshuō",
        "pinyin": "novel, fiction"
    },
    "931": {
        "character": "消息",
        "letter": "xiāoxi",
        "pinyin": "news, information"
    },
    "932": {
        "character": "小心",
        "letter": "xiǎoxīn",
        "pinyin": "to be careful"
    },
    "933": {
        "character": "校长",
        "letter": "xiàozhǎng",
        "pinyin": "head of a school"
    },
    "934": {
        "character": "下午",
        "letter": "xiàwǔ",
        "pinyin": "afternoon"
    },
    "935": {
        "character": "鞋",
        "letter": "xié",
        "pinyin": "shoe"
    },
    "936": {
        "character": "写",
        "letter": "xiě",
        "pinyin": "to write"
    },
    "937": {
        "character": "些",
        "letter": "xiē",
        "pinyin": "some"
    },
    "938": {
        "character": "谢谢",
        "letter": "xièxie",
        "pinyin": "thanks"
    },
    "939": {
        "character": "西瓜",
        "letter": "xīguā",
        "pinyin": "watermelon"
    },
    "940": {
        "character": "习惯",
        "letter": "xíguàn",
        "pinyin": "habit"
    },
    "941": {
        "character": "西红柿",
        "letter": "xīhóngshì",
        "pinyin": "tomato"
    },
    "942": {
        "character": "喜欢",
        "letter": "xǐhuan",
        "pinyin": "to like"
    },
    "943": {
        "character": "信",
        "letter": "xìn",
        "pinyin": "letter"
    },
    "944": {
        "character": "新",
        "letter": "xīn",
        "pinyin": "new"
    },
    "945": {
        "character": "信封",
        "letter": "xìnfēng",
        "pinyin": "envelope"
    },
    "946": {
        "character": "行",
        "letter": "xíng",
        "pinyin": "row, travel, all right"
    },
    "947": {
        "character": "姓",
        "letter": "xìng",
        "pinyin": "to be surnamed"
    },
    "948": {
        "character": "醒",
        "letter": "xǐng",
        "pinyin": "wake up"
    },
    "949": {
        "character": "性别",
        "letter": "xìngbié",
        "pinyin": "gender, sex"
    },
    "950": {
        "character": "兴奋",
        "letter": "xīngfèn",
        "pinyin": "excitement"
    },
    "951": {
        "character": "幸福",
        "letter": "xìngfú",
        "pinyin": "happiness"
    },
    "952": {
        "character": "性格",
        "letter": "xìnggé",
        "pinyin": "character, temperament"
    },
    "953": {
        "character": "行李箱",
        "letter": "xínglǐxiāng",
        "pinyin": "suitcase"
    },
    "954": {
        "character": "星期",
        "letter": "xīngqī",
        "pinyin": "week"
    },
    "955": {
        "character": "兴趣",
        "letter": "xìngqù",
        "pinyin": "interest"
    },
    "956": {
        "character": "辛苦",
        "letter": "xīnkǔ",
        "pinyin": "hard, exhausting"
    },
    "957": {
        "character": "心情",
        "letter": "xīnqíng",
        "pinyin": "mood, frame of mind"
    },
    "958": {
        "character": "新闻",
        "letter": "xīnwén",
        "pinyin": "news"
    },
    "959": {
        "character": "信息",
        "letter": "xìnxī",
        "pinyin": "information"
    },
    "960": {
        "character": "新鲜",
        "letter": "xīnxiān",
        "pinyin": "fresh"
    },
    "961": {
        "character": "信心",
        "letter": "xìnxīn",
        "pinyin": "confidence, faith"
    },
    "962": {
        "character": "熊猫",
        "letter": "xióngmāo",
        "pinyin": "panda"
    },
    "963": {
        "character": "洗手间",
        "letter": "xǐshǒujiān",
        "pinyin": "washroom"
    },
    "964": {
        "character": "休息",
        "letter": "xiūxi",
        "pinyin": "to rest"
    },
    "965": {
        "character": "希望",
        "letter": "xīwàng",
        "pinyin": "to hope"
    },
    "966": {
        "character": "吸引",
        "letter": "xīyǐn",
        "pinyin": "to attract (interest, investment etc)"
    },
    "967": {
        "character": "洗澡",
        "letter": "xǐzǎo",
        "pinyin": "to bathe"
    },
    "968": {
        "character": "选择",
        "letter": "xuǎnzé",
        "pinyin": "to choose"
    },
    "969": {
        "character": "许多",
        "letter": "xǔduō",
        "pinyin": "many, much, lot of"
    },
    "970": {
        "character": "雪",
        "letter": "xuě",
        "pinyin": "snow"
    },
    "971": {
        "character": "学期",
        "letter": "xuéqí",
        "pinyin": "semester, school term"
    },
    "972": {
        "character": "学生",
        "letter": "xuésheng",
        "pinyin": "student"
    },
    "973": {
        "character": "学习",
        "letter": "xuéxí",
        "pinyin": "to learn"
    },
    "974": {
        "character": "学校",
        "letter": "xuéxiào",
        "pinyin": "school"
    },
    "975": {
        "character": "需要",
        "letter": "xūyào",
        "pinyin": "to need"
    },
    "976": {
        "character": "呀",
        "letter": "ya",
        "pinyin": "ahh!, expressing surprise or doubt"
    },
    "977": {
        "character": "牙膏",
        "letter": "yágāo",
        "pinyin": "toothpaste"
    },
    "978": {
        "character": "压力",
        "letter": "yālì",
        "pinyin": "pressure"
    },
    "979": {
        "character": "盐",
        "letter": "yán",
        "pinyin": "salt"
    },
    "980": {
        "character": "演出",
        "letter": "yǎnchū",
        "pinyin": "to perform, to show, to act (in a play)"
    },
    "981": {
        "character": "养成",
        "letter": "yǎngchéng",
        "pinyin": "cultivate, acquire"
    },
    "982": {
        "character": "严格",
        "letter": "yángé",
        "pinyin": "strict, tight"
    },
    "983": {
        "character": "阳光",
        "letter": "yángguāng",
        "pinyin": "sunshine, sunlight"
    },
    "984": {
        "character": "羊肉",
        "letter": "yángròu",
        "pinyin": "lamb or mutton"
    },
    "985": {
        "character": "样子",
        "letter": "yàngzi",
        "pinyin": "looks, appearance"
    },
    "986": {
        "character": "眼镜",
        "letter": "yǎnjìng",
        "pinyin": "glasses"
    },
    "987": {
        "character": "眼睛",
        "letter": "yǎnjīng",
        "pinyin": "eye"
    },
    "988": {
        "character": "研究",
        "letter": "yánjiūshēng",
        "pinyin": "graduate student"
    },
    "989": {
        "character": "颜色",
        "letter": "yánsè",
        "pinyin": "color"
    },
    "990": {
        "character": "演员",
        "letter": "yǎnyuán",
        "pinyin": "actor or actress"
    },
    "991": {
        "character": "严重",
        "letter": "yánzhòng",
        "pinyin": "serious, critical"
    },
    "992": {
        "character": "药",
        "letter": "yào",
        "pinyin": "medicine"
    },
    "993": {
        "character": "要",
        "letter": "yào",
        "pinyin": "to want"
    },
    "994": {
        "character": "邀请",
        "letter": "yāoqǐng",
        "pinyin": "invitation"
    },
    "995": {
        "character": "要求",
        "letter": "yāoqiú",
        "pinyin": "to require"
    },
    "996": {
        "character": "要是",
        "letter": "yàoshi",
        "pinyin": "if"
    },
    "997": {
        "character": "钥匙",
        "letter": "yàoshi",
        "pinyin": "key"
    },
    "998": {
        "character": "亚洲",
        "letter": "yàzhōu",
        "pinyin": "asia"
    },
    "999": {
        "character": "页",
        "letter": "yè",
        "pinyin": "page"
    },
    "1000": {
        "character": "也",
        "letter": "yě",
        "pinyin": "also"
    },
    "1001": {
        "character": "也许",
        "letter": "yěxǔ",
        "pinyin": "perhaps, maybe, probably"
    },
    "1002": {
        "character": "爷爷",
        "letter": "yéye",
        "pinyin": "grandpa"
    },
    "1003": {
        "character": "叶子",
        "letter": "yèzi",
        "pinyin": "leaf, foliage"
    },
    "1004": {
        "character": "以",
        "letter": "yǐ",
        "pinyin": "with, to use as, according to"
    },
    "1005": {
        "character": "一",
        "letter": "yī",
        "pinyin": "one"
    },
    "1006": {
        "character": "一般",
        "letter": "yìbān",
        "pinyin": "generally"
    },
    "1007": {
        "character": "一边",
        "letter": "yìbiān",
        "pinyin": "at the same time"
    },
    "1008": {
        "character": "一定",
        "letter": "yídìng",
        "pinyin": "definitely"
    },
    "1009": {
        "character": "衣服",
        "letter": "yīfu",
        "pinyin": "clothes"
    },
    "1010": {
        "character": "一共",
        "letter": "yígòng",
        "pinyin": "altogether"
    },
    "1011": {
        "character": "以后",
        "letter": "yǐhòu",
        "pinyin": "after or later"
    },
    "1012": {
        "character": "一会儿",
        "letter": "yíhuìr",
        "pinyin": "a short while"
    },
    "1013": {
        "character": "意见",
        "letter": "yìjiàn",
        "pinyin": "opinion, suggestion, objection"
    },
    "1014": {
        "character": "已经",
        "letter": "yǐjīng",
        "pinyin": "already"
    },
    "1015": {
        "character": "阴",
        "letter": "yīn",
        "pinyin": "cloudy"
    },
    "1016": {
        "character": "因此",
        "letter": "yīncǐ",
        "pinyin": "consequently, therefore"
    },
    "1017": {
        "character": "赢",
        "letter": "yíng",
        "pinyin": "win, beat"
    },
    "1018": {
        "character": "应该",
        "letter": "yīnggāi",
        "pinyin": "should"
    },
    "1019": {
        "character": "应聘",
        "letter": "yìngpìn",
        "pinyin": "to apply for position"
    },
    "1020": {
        "character": "影响",
        "letter": "yǐngxiǎng",
        "pinyin": "to affect"
    },
    "1021": {
        "character": "银行",
        "letter": "yínháng",
        "pinyin": "bank"
    },
    "1022": {
        "character": "引起",
        "letter": "yǐnqǐ",
        "pinyin": "to give rise, cause"
    },
    "1023": {
        "character": "因为",
        "letter": "yīnwèi",
        "pinyin": "because"
    },
    "1024": {
        "character": "印象",
        "letter": "yìnxiàng",
        "pinyin": "impression, reflection"
    },
    "1025": {
        "character": "音乐",
        "letter": "yīnyuè",
        "pinyin": "music"
    },
    "1026": {
        "character": "一起",
        "letter": "yìqǐ",
        "pinyin": "together"
    },
    "1027": {
        "character": "以前",
        "letter": "yǐqián",
        "pinyin": "before or ago"
    },
    "1028": {
        "character": "一切",
        "letter": "yíqiè",
        "pinyin": "all, everything"
    },
    "1029": {
        "character": "医生",
        "letter": "yīshēng",
        "pinyin": "doctor"
    },
    "1030": {
        "character": "艺术",
        "letter": "yìshù",
        "pinyin": "art"
    },
    "1031": {
        "character": "意思",
        "letter": "yìsi",
        "pinyin": "meaning"
    },
    "1032": {
        "character": "以为",
        "letter": "yǐwéi",
        "pinyin": "to think (wrongly)"
    },
    "1033": {
        "character": "一样",
        "letter": "yíyàng",
        "pinyin": "same"
    },
    "1034": {
        "character": "医院",
        "letter": "yīyuàn",
        "pinyin": "hospital"
    },
    "1035": {
        "character": "一直",
        "letter": "yìzhí",
        "pinyin": "constantly"
    },
    "1036": {
        "character": "椅子",
        "letter": "yǐzi",
        "pinyin": "chair"
    },
    "1037": {
        "character": "用",
        "letter": "yòng",
        "pinyin": "to use"
    },
    "1038": {
        "character": "勇敢",
        "letter": "yǒnggǎn",
        "pinyin": "brave, courageous"
    },
    "1039": {
        "character": "永远",
        "letter": "yǒngyuǎn",
        "pinyin": "forever, eternal"
    },
    "1040": {
        "character": "由",
        "letter": "yóu",
        "pinyin": "from, to follow"
    },
    "1041": {
        "character": "又",
        "letter": "yòu",
        "pinyin": "again"
    },
    "1042": {
        "character": "有",
        "letter": "yǒu",
        "pinyin": "to have"
    },
    "1043": {
        "character": "游泳",
        "letter": "yóu yǒng",
        "pinyin": "to swim"
    },
    "1044": {
        "character": "右边",
        "letter": "yòubiān",
        "pinyin": "right"
    },
    "1045": {
        "character": "优点",
        "letter": "yōudiǎn",
        "pinyin": "advantage, benefit"
    },
    "1046": {
        "character": "友好",
        "letter": "yǒuhǎo",
        "pinyin": "friendly"
    },
    "1047": {
        "character": "邮局",
        "letter": "yóujú",
        "pinyin": "post Office"
    },
    "1048": {
        "character": "有名",
        "letter": "yǒumíng",
        "pinyin": "famous"
    },
    "1049": {
        "character": "幽默",
        "letter": "yōumò",
        "pinyin": "humor"
    },
    "1050": {
        "character": "尤其",
        "letter": "yóuqí",
        "pinyin": "especially, particularly"
    },
    "1051": {
        "character": "有趣",
        "letter": "yǒuqù",
        "pinyin": "interesting, fascinating"
    },
    "1052": {
        "character": "游戏",
        "letter": "yóuxì",
        "pinyin": "game"
    },
    "1053": {
        "character": "优秀",
        "letter": "yōuxiù",
        "pinyin": "excellent, outstanding"
    },
    "1054": {
        "character": "友谊",
        "letter": "yǒuyì",
        "pinyin": "friendship, fellowship"
    },
    "1055": {
        "character": "由于",
        "letter": "yóuyú",
        "pinyin": "due to, because of"
    },
    "1056": {
        "character": "鱼",
        "letter": "yú",
        "pinyin": "fish"
    },
    "1057": {
        "character": "与",
        "letter": "yǔ",
        "pinyin": "versus, and"
    },
    "1058": {
        "character": "元",
        "letter": "yuán",
        "pinyin": "basic monetary unit of China"
    },
    "1059": {
        "character": "远",
        "letter": "yuǎn",
        "pinyin": "far"
    },
    "1060": {
        "character": "原来",
        "letter": "yuánlái",
        "pinyin": "original"
    },
    "1061": {
        "character": "原谅",
        "letter": "yuánliàng",
        "pinyin": "forgive"
    },
    "1062": {
        "character": "愿意",
        "letter": "yuànyì",
        "pinyin": "to be willing to"
    },
    "1063": {
        "character": "原因",
        "letter": "yuányīn",
        "pinyin": "reason, cause, origin"
    },
    "1064": {
        "character": "遇到",
        "letter": "yùdào",
        "pinyin": "to encounter"
    },
    "1065": {
        "character": "月",
        "letter": "yuè",
        "pinyin": "month"
    },
    "1066": {
        "character": "越",
        "letter": "yuè",
        "pinyin": "more"
    },
    "1067": {
        "character": "阅读",
        "letter": "yuèdú",
        "pinyin": "read"
    },
    "1068": {
        "character": "约会",
        "letter": "yuēhuì",
        "pinyin": "appointment, engagement, date"
    },
    "1069": {
        "character": "月亮",
        "letter": "yuèliang",
        "pinyin": "moon"
    },
    "1070": {
        "character": "语法",
        "letter": "yǔfǎ",
        "pinyin": "grammar"
    },
    "1071": {
        "character": "愉快",
        "letter": "yúkuài",
        "pinyin": "cheerful, delightful, pleasant"
    },
    "1072": {
        "character": "羽毛球",
        "letter": "yǔmáoqiú",
        "pinyin": "badminton, shuttlecock"
    },
    "1073": {
        "character": "云",
        "letter": "yún",
        "pinyin": "cloud"
    },
    "1074": {
        "character": "运动",
        "letter": "yùndòng",
        "pinyin": "to do sports"
    },
    "1075": {
        "character": "允许",
        "letter": "yǔnxǔ",
        "pinyin": "allow, permit"
    },
    "1076": {
        "character": "于是",
        "letter": "yúshì",
        "pinyin": "then, consequently"
    },
    "1077": {
        "character": "预习",
        "letter": "yùxí",
        "pinyin": "to prepare a lesson"
    },
    "1078": {
        "character": "语言",
        "letter": "yǔyán",
        "pinyin": "language"
    },
    "1079": {
        "character": "在",
        "letter": "zài",
        "pinyin": "to be in"
    },
    "1080": {
        "character": "再",
        "letter": "zài",
        "pinyin": "again"
    },
    "1081": {
        "character": "再见",
        "letter": "zàijiàn",
        "pinyin": "goodbye"
    },
    "1082": {
        "character": "脏",
        "letter": "zāng",
        "pinyin": "dirty"
    },
    "1083": {
        "character": "咱们",
        "letter": "zánmen",
        "pinyin": "we or us(including both speaker and person spoken to)"
    },
    "1084": {
        "character": "暂时",
        "letter": "zànshí",
        "pinyin": "temporary"
    },
    "1085": {
        "character": "早上",
        "letter": "zǎoshàng",
        "pinyin": "early morning"
    },
    "1086": {
        "character": "杂志",
        "letter": "zázhì",
        "pinyin": "magazine"
    },
    "1087": {
        "character": "增加",
        "letter": "zēngjiā",
        "pinyin": "increase"
    },
    "1088": {
        "character": "怎么",
        "letter": "zěnme",
        "pinyin": "how"
    },
    "1089": {
        "character": "怎么样",
        "letter": "zěnmeyàng",
        "pinyin": "how about"
    },
    "1090": {
        "character": "责任",
        "letter": "zérèn",
        "pinyin": "responsibility, duty"
    },
    "1091": {
        "character": "站",
        "letter": "zhàn",
        "pinyin": "to stand"
    },
    "1092": {
        "character": "张",
        "letter": "zhāng",
        "pinyin": "for flat objects"
    },
    "1093": {
        "character": "丈夫",
        "letter": "zhàngfu",
        "pinyin": "husband"
    },
    "1094": {
        "character": "占线",
        "letter": "zhànxiàn",
        "pinyin": "busy (telephone)"
    },
    "1095": {
        "character": "照",
        "letter": "zhào",
        "pinyin": "according to"
    },
    "1096": {
        "character": "找",
        "letter": "zhǎo",
        "pinyin": "to find"
    },
    "1097": {
        "character": "照顾",
        "letter": "zhàogù",
        "pinyin": "to look after"
    },
    "1098": {
        "character": "着急",
        "letter": "zháojí",
        "pinyin": "to worry"
    },
    "1099": {
        "character": "照片",
        "letter": "zhàopiàn",
        "pinyin": "photo"
    },
    "1100": {
        "character": "招聘",
        "letter": "zhāopìn",
        "pinyin": "recruitment, to invite applications for a job"
    },
    "1101": {
        "character": "照相机",
        "letter": "zhàoxiàngjī",
        "pinyin": "camera"
    },
    "1102": {
        "character": "着",
        "letter": "zhe",
        "pinyin": "aspect particle"
    },
    "1103": {
        "character": "这/这儿",
        "letter": "zhè/zhèr",
        "pinyin": "this/here"
    },
    "1104": {
        "character": "真",
        "letter": "zhēn",
        "pinyin": "really"
    },
    "1105": {
        "character": "正常",
        "letter": "zhèngcháng",
        "pinyin": "normal, regular"
    },
    "1106": {
        "character": "正好",
        "letter": "zhènghǎo",
        "pinyin": "just right, just enough"
    },
    "1107": {
        "character": "整理",
        "letter": "zhěnglǐ",
        "pinyin": "arrangement"
    },
    "1108": {
        "character": "证明",
        "letter": "zhèngmíng",
        "pinyin": "prove, certificate, identification"
    },
    "1109": {
        "character": "正确",
        "letter": "zhèngquè",
        "pinyin": "correct, proper"
    },
    "1110": {
        "character": "正式",
        "letter": "zhèngshì",
        "pinyin": "formal, official"
    },
    "1111": {
        "character": "正在",
        "letter": "zhèngzài",
        "pinyin": "indicating action in progress"
    },
    "1112": {
        "character": "真正",
        "letter": "zhēnzhèng",
        "pinyin": "genuine, real"
    },
    "1113": {
        "character": "指",
        "letter": "zhǐ",
        "pinyin": "finger, to point"
    },
    "1114": {
        "character": "只",
        "letter": "zhǐ",
        "pinyin": "only"
    },
    "1115": {
        "character": "之",
        "letter": "zhī",
        "pinyin": "of"
    },
    "1116": {
        "character": "支持",
        "letter": "zhīchí",
        "pinyin": "support, sustain"
    },
    "1117": {
        "character": "知道",
        "letter": "zhīdao",
        "pinyin": "to know"
    },
    "1118": {
        "character": "值得",
        "letter": "zhídé",
        "pinyin": "worth"
    },
    "1119": {
        "character": "只好",
        "letter": "zhǐhǎo",
        "pinyin": "have to, without any better option"
    },
    "1120": {
        "character": "直接",
        "letter": "zhíjiē",
        "pinyin": "direct, straightforward"
    },
    "1121": {
        "character": "质量",
        "letter": "zhìliàng",
        "pinyin": "quality"
    },
    "1122": {
        "character": "至少",
        "letter": "zhìshǎo",
        "pinyin": "at least"
    },
    "1123": {
        "character": "知识",
        "letter": "zhīshi",
        "pinyin": "knowledge, intellectual"
    },
    "1124": {
        "character": "植物",
        "letter": "zhíwù",
        "pinyin": "plant, botanical"
    },
    "1125": {
        "character": "只要",
        "letter": "zhǐyào",
        "pinyin": "as long as"
    },
    "1126": {
        "character": "职业",
        "letter": "zhíyè",
        "pinyin": "occupation, profession"
    },
    "1127": {
        "character": "重",
        "letter": "zhòng",
        "pinyin": "weight, heavy"
    },
    "1128": {
        "character": "种",
        "letter": "zhǒng",
        "pinyin": "type"
    },
    "1129": {
        "character": "重点",
        "letter": "zhòngdiǎn",
        "pinyin": "focal point, priority, key"
    },
    "1130": {
        "character": "中国",
        "letter": "Zhōngguó",
        "pinyin": "China"
    },
    "1131": {
        "character": "中间",
        "letter": "zhōngjiān",
        "pinyin": "middle"
    },
    "1132": {
        "character": "重视",
        "letter": "zhòngshì",
        "pinyin": "to attach importance to something"
    },
    "1133": {
        "character": "中午",
        "letter": "zhōngwǔ",
        "pinyin": "noon"
    },
    "1134": {
        "character": "重要",
        "letter": "zhòngyào",
        "pinyin": "important"
    },
    "1135": {
        "character": "终于",
        "letter": "zhōngyú",
        "pinyin": "finally"
    },
    "1136": {
        "character": "周末",
        "letter": "zhōumò",
        "pinyin": "weekend"
    },
    "1137": {
        "character": "周围",
        "letter": "zhōuwéi",
        "pinyin": "surroundings, environment"
    },
    "1138": {
        "character": "住",
        "letter": "zhù",
        "pinyin": "to live or to stay"
    },
    "1139": {
        "character": "祝",
        "letter": "zhù",
        "pinyin": "to wish"
    },
    "1140": {
        "character": "赚",
        "letter": "zhuàn",
        "pinyin": "earn, make a profit"
    },
    "1141": {
        "character": "转",
        "letter": "zhuǎn",
        "pinyin": "to turn, to change direction, to transfer"
    },
    "1142": {
        "character": "专门",
        "letter": "zhuānmén",
        "pinyin": "specialist, specialized"
    },
    "1143": {
        "character": "专业",
        "letter": "zhuānyè",
        "pinyin": "major, specialty, main field of study"
    },
    "1144": {
        "character": "祝贺",
        "letter": "zhùhè",
        "pinyin": "congratulations"
    },
    "1145": {
        "character": "著名",
        "letter": "zhùmíng",
        "pinyin": "famous, well-known"
    },
    "1146": {
        "character": "准备.",
        "letter": "zhǔnbèi",
        "pinyin": "to prepare"
    },
    "1147": {
        "character": "准确",
        "letter": "zhǔnquè",
        "pinyin": "accuracy, exact"
    },
    "1148": {
        "character": "准时",
        "letter": "zhǔnshí",
        "pinyin": "on time, punctual"
    },
    "1149": {
        "character": "桌子",
        "letter": "zhuōzi",
        "pinyin": "table or desk"
    },
    "1150": {
        "character": "主要",
        "letter": "zhǔyào",
        "pinyin": "main"
    },
    "1151": {
        "character": "注意",
        "letter": "zhùyì",
        "pinyin": "to pay attention to"
    },
    "1152": {
        "character": "主意",
        "letter": "zhǔyi",
        "pinyin": "idea, plan"
    },
    "1153": {
        "character": "字",
        "letter": "zì",
        "pinyin": "character"
    },
    "1154": {
        "character": "字典",
        "letter": "zìdiǎn",
        "pinyin": "dictionary"
    },
    "1155": {
        "character": "自己",
        "letter": "zìjǐ",
        "pinyin": "oneself"
    },
    "1156": {
        "character": "自然",
        "letter": "zìrán",
        "pinyin": "natural, free from affectation"
    },
    "1157": {
        "character": "仔细",
        "letter": "zǐxì",
        "pinyin": "careful, attentive"
    },
    "1158": {
        "character": "自信",
        "letter": "zìxìn",
        "pinyin": "self-confidence"
    },
    "1159": {
        "character": "自行车",
        "letter": "zìxíngchē",
        "pinyin": "bike"
    },
    "1160": {
        "character": "总结",
        "letter": "zǒngjié",
        "pinyin": "summary, conclude"
    },
    "1161": {
        "character": "总是",
        "letter": "zǒngshì",
        "pinyin": "always"
    },
    "1162": {
        "character": "走",
        "letter": "zǒu",
        "pinyin": "to walk"
    },
    "1163": {
        "character": "租",
        "letter": "zū",
        "pinyin": "rent, hire"
    },
    "1164": {
        "character": "最",
        "letter": "zuì",
        "pinyin": "most"
    },
    "1165": {
        "character": "最好",
        "letter": "zuìhǎo",
        "pinyin": "best"
    },
    "1166": {
        "character": "最近",
        "letter": "zuìjìn",
        "pinyin": "recent time"
    },
    "1167": {
        "character": "尊重",
        "letter": "zūnzhòng",
        "pinyin": "respect, honor"
    },
    "1168": {
        "character": "座",
        "letter": "zuò",
        "pinyin": "seat, base, (classifier for buildings, mountains)"
    },
    "1169": {
        "character": "做",
        "letter": "zuò",
        "pinyin": "to do"
    },
    "1170": {
        "character": "坐",
        "letter": "zuò",
        "pinyin": "to sit"
    },
    "1171": {
        "character": "左边",
        "letter": "zuǒbiān",
        "pinyin": "left"
    },
    "1172": {
        "character": "作家",
        "letter": "zuòjiā",
        "pinyin": "writer, author"
    },
    "1173": {
        "character": "昨天",
        "letter": "zuótiān",
        "pinyin": "yesterday"
    },
    "1174": {
        "character": "座位",
        "letter": "zuòwèi",
        "pinyin": "a place to sit"
    },
    "1175": {
        "character": "作业",
        "letter": "zuòyè",
        "pinyin": "homework"
    },
    "1176": {
        "character": "作用",
        "letter": "zuòyòng",
        "pinyin": "effect"
    },
    "1177": {
        "character": "左右",
        "letter": "zuǒyòu",
        "pinyin": "approximately, about, left and right"
    },
    "1178": {
        "character": "作者",
        "letter": "zuòzhě",
        "pinyin": "writer, author"
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