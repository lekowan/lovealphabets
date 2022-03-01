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
        "character": "阿姨",
        "letter": "maternal aunt; step-mother; childcare worker; nursemaid; woman of similar age to one's parents (term of address used by child); CL:個|个[gè]",
        "pinyin": "āyí"
    },
    "2": {
        "character": "啊",
        "letter": "modal particle ending sentence, showing affirmation, approval, or consent",
        "pinyin": "a"
    },
    "3": {
        "character": "矮",
        "letter": "low; short (in length)",
        "pinyin": "ǎi"
    },
    "4": {
        "character": "\u0001",
        "letter": "to love; affection; to be fond of; to like",
        "pinyin": "ài"
    },
    "5": {
        "character": "\u0001好",
        "letter": "to like; to take pleasure in; keen on; fond of; interest; hobby; appetite for; CL:個|个[gè]",
        "pinyin": "àihào"
    },
    "6": {
        "character": "\u0001情",
        "letter": "romance; love (romantic); CL:個|个[gè]",
        "pinyin": "àiqíng"
    },
    "7": {
        "character": "安静",
        "letter": "quiet; peaceful; calm",
        "pinyin": "ānjìng"
    },
    "8": {
        "character": "安排",
        "letter": "to arrange; to plan; to set up",
        "pinyin": "ānpái"
    },
    "9": {
        "character": "安全",
        "letter": "safe; secure; safety; security",
        "pinyin": "ānquán"
    },
    "10": {
        "character": "暗",
        "letter": "dark; gloomy; hidden; secret; muddled; obscure; in the dark",
        "pinyin": "àn"
    },
    "11": {
        "character": "按",
        "letter": "on time; before deadline; on schedule",
        "pinyin": "ànshí"
    },
    "12": {
        "character": "按照",
        "letter": "according to; in accordance with; in the light of; on the basis of",
        "pinyin": "ànzhào"
    },
    "13": {
        "character": "八",
        "letter": "eight;",
        "pinyin": "bā"
    },
    "14": {
        "character": "把",
        "letter": "to hold; to contain; to grasp; to take hold of; a handle; particle marking the following noun as a direct object; classifier for objects with handle",
        "pinyin": "bǎ"
    },
    "15": {
        "character": "爸爸",
        "letter": "(informal) father; CL:個|个[gè],位[wèi]",
        "pinyin": "bàba"
    },
    "16": {
        "character": "吧",
        "letter": "(modal particle indicating polite suggestion); ...right?; ...OK?",
        "pinyin": "ba"
    },
    "17": {
        "character": "白",
        "letter": "white; snowy; pure; bright; empty; blank; plain; clear; to make clear; in vain; gratuitous; free of charge; reactionary; anti-communist; funeral; to stare coldly; to write wrong character; to state; to explain; vernacular; spoken lines in opera; surname Bai",
        "pinyin": "bái"
    },
    "18": {
        "character": "百",
        "letter": "hundred; numerous; all kinds of; surname Bai  2/56",
        "pinyin": "bǎi"
    },
    "19": {
        "character": "班",
        "letter": "team; class; squad; work shift; classifier for groups; ranking; surname Ban; CL:個|个[gè]",
        "pinyin": "bān"
    },
    "20": {
        "character": "搬",
        "letter": "to move; to shift; to remove; to transport; to apply indiscriminately; to copy mechanically",
        "pinyin": "bān"
    },
    "21": {
        "character": "半",
        "letter": "half; semi-; incomplete; (after a number) and a half",
        "pinyin": "bàn"
    },
    "22": {
        "character": "\u0001法",
        "letter": "means; method; way (of doing sth); CL:條|条 [tiáo],個|个[gè]",
        "pinyin": "bànfǎ"
    },
    "23": {
        "character": "\u0001公室",
        "letter": "an office; business premises; a bureau; CL:間|\u0005 [jiān]",
        "pinyin": "bàngōngshì"
    },
    "24": {
        "character": "帮忙",
        "letter": "to help; to lend a hand; to do a favor; to do a good turn",
        "pinyin": "bāngmáng"
    },
    "25": {
        "character": "帮助",
        "letter": "assistance; aid; to help; to assist",
        "pinyin": "bāngzhù"
    },
    "26": {
        "character": "包",
        "letter": "to cover; to wrap; to hold; to include; to take charge of; package; wrapper; container; bag; to hold or embrace; bundle; packet; to contract (to or for); surname Bao; CL:個|个[gè],隻|只[zhī]",
        "pinyin": "bāo"
    },
    "27": {
        "character": "包括",
        "letter": "to comprise; to include; to involve; to incorporate; to consist of",
        "pinyin": "bāokuò"
    },
    "28": {
        "character": "bǎo",
        "letter": "eat till full; satisfied",
        "pinyin": "to"
    },
    "29": {
        "character": "保\u0004",
        "letter": "to protect; to defend; to safeguard; protection; CL: 種|䝅[zhǒng]",
        "pinyin": "bǎohù"
    },
    "30": {
        "character": "保\u0007",
        "letter": "guarantee; to guarantee; to ensure; to safeguard; to pledge; CL:個|个[gè]",
        "pinyin": "bǎozhèng"
    },
    "31": {
        "character": "抱",
        "letter": "to hold; to carry (in one's arms); to hug or embrace; surround; cherish",
        "pinyin": "bào"
    },
    "32": {
        "character": "抱歉",
        "letter": "sorry; We apologize!; to feel apologetic; to regret",
        "pinyin": "bàoqiàn"
    },
    "33": {
        "character": "道",
        "letter": "report; CL:篇[piān],份[fèn]",
        "pinyin": "bàodào"
    },
    "34": {
        "character": "名",
        "letter": "to sign up; to enter one's name; to apply; to register; to enroll; to enlist",
        "pinyin": "bàomíng"
    },
    "35": {
        "character": "\b",
        "letter": "newspaper; newsprint; CL:份[fèn],期[qī],張|\u0006 [zhāng]",
        "pinyin": "bàozhǐ"
    },
    "36": {
        "character": "杯子",
        "letter": "cup; glass; CL:個|个[gè],支[zhī],枝[zhī]  3/56",
        "pinyin": "bēizi"
    },
    "37": {
        "character": "北方",
        "letter": "north; the northern part a country; China north of the Yellow River",
        "pinyin": "běifāng"
    },
    "38": {
        "character": "北京",
        "letter": "Beijing, capital of People's Republic of China; Peking; PRC government",
        "pinyin": "běijīng"
    },
    "39": {
        "character": "倍",
        "letter": "(two, three etc) -fold; times (multiplier); double; to increase or multiply",
        "pinyin": "bèi"
    },
    "40": {
        "character": "被",
        "letter": "by (indicates passive-voice sentences or clauses); quilt; to cover (literary)",
        "pinyin": "bèi"
    },
    "41": {
        "character": "本",
        "letter": "roots or stems of plants; origin; source; this; the current; root; foundation; basis; classifier for books, periodicals, files etc; originally",
        "pinyin": "běn"
    },
    "42": {
        "character": "本来",
        "letter": "original; originally; at first; it goes without saying; of course",
        "pinyin": "běnlái"
    },
    "43": {
        "character": "笨",
        "letter": "stupid; foolish; silly; slow-witted; clumsy",
        "pinyin": "bèn"
    },
    "44": {
        "character": "鼻子",
        "letter": "nose; CL:個|个[gè],隻|只[zhī]",
        "pinyin": "bízi"
    },
    "45": {
        "character": "比",
        "letter": "(particle used for comparison and -er than); to compare; to contrast; to gesture (with hands); ratio",
        "pinyin": "bǐ"
    },
    "46": {
        "character": "比\u0007",
        "letter": "compare; contrast; fairly; comparatively; relatively; quite; rather",
        "pinyin": "bǐjiào"
    },
    "47": {
        "character": "比\b",
        "letter": "competition (sports etc); match; CL:場|\u0004[chǎng], 次[cì]",
        "pinyin": "bǐsài"
    },
    "48": {
        "character": "笔\u0006本",
        "letter": "notebook; CL:本[běn]",
        "pinyin": "bǐjìběn"
    },
    "49": {
        "character": "必\t",
        "letter": "to have to; must; compulsory; necessarily",
        "pinyin": "bìxū"
    },
    "50": {
        "character": "\u0001",
        "letter": "graduation; to graduate; to finish school",
        "pinyin": "bìyè"
    },
    "51": {
        "character": "遍",
        "letter": "a time; everywhere; turn; all over; one time",
        "pinyin": "biàn"
    },
    "52": {
        "character": "化",
        "letter": "change; variation; to change; to vary; CL:個|个 [gè]",
        "pinyin": "biànhuà"
    },
    "53": {
        "character": "准",
        "letter": "(an official) standard; norm; criterion; CL:個|个 [gè]",
        "pinyin": "biāozhǔn"
    },
    "54": {
        "character": "表\u0005",
        "letter": "to voice (an opinion); to express; to convey",
        "pinyin": "biǎodá"
    },
    "55": {
        "character": "表格",
        "letter": "form; table; CL:張|\u000b[zhāng],份[fèn]",
        "pinyin": "biǎogé"
    },
    "56": {
        "character": "表示",
        "letter": "to express; to show; to say; to state; to indicate; to mean  4/56",
        "pinyin": "biǎoshì"
    },
    "57": {
        "character": "表演",
        "letter": "play; show; performance; exhibition; to perform; to act; to demonstrate; CL:場|[chǎng]",
        "pinyin": "biǎoyǎn"
    },
    "58": {
        "character": "表\t",
        "letter": "to praise; to commend",
        "pinyin": "biǎoyáng"
    },
    "59": {
        "character": "䫲",
        "letter": "to leave; to depart; to separate; to distinguish; to classify; other; another; do not; must not; to pin",
        "pinyin": "bié"
    },
    "60": {
        "character": "䫲人",
        "letter": "other people; others; other person",
        "pinyin": "biérén"
    },
    "61": {
        "character": "\u0001\u0004",
        "letter": "guesthouse; CL:個|个[gè],家[jiā]",
        "pinyin": "bīnguǎn"
    },
    "62": {
        "character": "冰箱",
        "letter": "icebox; freezer cabinet; refrigerator; CL:臺|台[tái], 個|个[gè]",
        "pinyin": "bīngxiāng"
    },
    "63": {
        "character": "干",
        "letter": "biscuit; cracker; cookie; CL:片[piàn],塊|\u0007[kuài]",
        "pinyin": "bǐnggān"
    },
    "64": {
        "character": "并且",
        "letter": "and; besides; moreover; furthermore; in addition",
        "pinyin": "bìngqiě"
    },
    "65": {
        "character": "博士",
        "letter": "doctor; court academician (in feudal China); Ph.D.",
        "pinyin": "bóshì"
    },
    "66": {
        "character": "不但",
        "letter": "not only (... but also...)",
        "pinyin": "bùdàn"
    },
    "67": {
        "character": "不\u0005",
        "letter": "only; merely; no more than; but; however; anyway (to get back to a previous topic)",
        "pinyin": "bùguò"
    },
    "68": {
        "character": "不客气",
        "letter": "you're welcome; impolite; rude; blunt; don't mention it",
        "pinyin": "bùkèqi"
    },
    "69": {
        "character": "不",
        "letter": "(negative prefix); not; no",
        "pinyin": "bù"
    },
    "70": {
        "character": "不得不",
        "letter": "have no choice or option but to; cannot but; have to; can't help it; can't avoid",
        "pinyin": "bùdébù"
    },
    "71": {
        "character": "不管",
        "letter": "no matter (what, how); regardless of; no matter",
        "pinyin": "bùguǎn"
    },
    "72": {
        "character": "不\u0006",
        "letter": "not only (this one); not just (...) but also",
        "pinyin": "bùjǐn"
    },
    "73": {
        "character": "部分",
        "letter": "part; share; section; piece; CL:個|个[gè]",
        "pinyin": "bùfèn"
    },
    "74": {
        "character": "擦",
        "letter": "to wipe; to erase; rubbing (brush stroke in painting); to clean; to polish",
        "pinyin": "cā"
    },
    "75": {
        "character": "猜",
        "letter": "to guess",
        "pinyin": "cāi"
    },
    "76": {
        "character": "才",
        "letter": "ability; talent; endowment; gift; an expert; only (then); only if; just",
        "pinyin": "cái"
    },
    "77": {
        "character": "材料",
        "letter": "material; data; makings; stuff; CL:個|个[gè],種|䝅 [zhǒng]",
        "pinyin": "cáiliào"
    },
    "78": {
        "character": "菜",
        "letter": "dish (type of food); vegetables; vegetable; cuisine; CL:盤|\b[pán],道[dào]  5/56",
        "pinyin": "cài"
    },
    "79": {
        "character": "菜\u0007",
        "letter": "menu; CL:份[fèn],張|\u000f[zhāng]",
        "pinyin": "càidān"
    },
    "80": {
        "character": "参\b",
        "letter": "to look around; to inspect; visit and observe",
        "pinyin": "cānguān"
    },
    "81": {
        "character": "参加",
        "letter": "to participate; to take part; to join",
        "pinyin": "cānjiā"
    },
    "82": {
        "character": "草",
        "letter": "grass; straw; manuscript; draft (of a document); careless; rough; CL:䯿[kē],撮[zuǒ],株[zhū],根 [gēn]",
        "pinyin": "cǎo"
    },
    "83": {
        "character": "\u0001",
        "letter": "layer; stratum; laminated; floor (of a building); storey; classifier for layers; repeated; sheaf (math.)",
        "pinyin": "céng"
    },
    "84": {
        "character": "茶",
        "letter": "tea; tea plant; CL:杯[bēi],壺| [hú]",
        "pinyin": "chá"
    },
    "85": {
        "character": "差",
        "letter": "differ from; short of; to lack; poor",
        "pinyin": "chà"
    },
    "86": {
        "character": "差不多",
        "letter": "almost; nearly; more or less",
        "pinyin": "chàbuduō"
    },
    "87": {
        "character": "cháng",
        "letter": "taste; flavor; (past tense marker); already; formerly; ever; once; test",
        "pinyin": "to"
    },
    "88": {
        "character": "\u0004",
        "letter": "length; long; forever; always; constantly",
        "pinyin": "cháng"
    },
    "89": {
        "character": "\u0004城",
        "letter": "the Great Wall",
        "pinyin": "chángchéng"
    },
    "90": {
        "character": "\u0004江",
        "letter": "Changjiang river; Yangtze river",
        "pinyin": "chángjiāng"
    },
    "91": {
        "character": "chǎng",
        "letter": "place used for a specific purpose; stage; scene (of a play); classifier for sporting or recreational activities; classifier for number of exams",
        "pinyin": "large"
    },
    "92": {
        "character": "唱歌",
        "letter": "to sing a song",
        "pinyin": "chànggē"
    },
    "93": {
        "character": "超\t",
        "letter": "to surpass; to exceed; to outstrip",
        "pinyin": "chāoguò"
    },
    "94": {
        "character": "超市",
        "letter": "supermarket (abbr.); CL:家[jiā]",
        "pinyin": "chāoshì"
    },
    "95": {
        "character": "䬘",
        "letter": "to quarrel; to make a noise; noisy; to disturb by making a noise",
        "pinyin": "chǎo"
    },
    "96": {
        "character": "\u0005衫",
        "letter": "shirt; blouse; CL:件[jiàn]",
        "pinyin": "chènshān"
    },
    "97": {
        "character": "成功",
        "letter": "success; to succeed; CL:次[cì],個|个[gè]",
        "pinyin": "chénggōng"
    },
    "98": {
        "character": "成\u000b",
        "letter": "achievement; performance records; grades; CL:項| \u000e[xiàng],個|个[gè]",
        "pinyin": "chéngjì"
    },
    "99": {
        "character": "成熟",
        "letter": "mature; ripe; Taiwan pr. chéng shóu",
        "pinyin": "chéngshú"
    },
    "100": {
        "character": "成",
        "letter": "to become; to turn into",
        "pinyin": "chéngwéi"
    },
    "101": {
        "character": "\u0006\f",
        "letter": "honest; honesty; honorable; truthful  6/56",
        "pinyin": "chéngshí"
    },
    "102": {
        "character": "城市",
        "letter": "city; town; CL:座[zuò]",
        "pinyin": "chéngshì"
    },
    "103": {
        "character": "乘坐",
        "letter": "to ride (in a vehicle)",
        "pinyin": "chéngzuò"
    },
    "104": {
        "character": "吃",
        "letter": "to eat; to have one's meal; to eradicate; to destroy; to absorb; to suffer; to exhaust",
        "pinyin": "chī"
    },
    "105": {
        "character": "吃\b",
        "letter": "to be startled; to be shocked; to be amazed",
        "pinyin": "chījīng"
    },
    "106": {
        "character": "到",
        "letter": "to arrive late",
        "pinyin": "chídào"
    },
    "107": {
        "character": "重新",
        "letter": "again; once more; re108 抽烟 chōuyān to smoke (a cigarette, tobacco)",
        "pinyin": "chóngxīn"
    },
    "108": {
        "character": "出",
        "letter": "to go out; to come out; to occur; to produce; to go beyond; to rise; to put forth; to happen; classifier for dramas, plays, operas etc",
        "pinyin": "chū"
    },
    "109": {
        "character": "出差",
        "letter": "to go on an official or business trip",
        "pinyin": "chūchāi"
    },
    "110": {
        "character": "出\u0005",
        "letter": "to start out; to set off",
        "pinyin": "chūfā"
    },
    "111": {
        "character": "出生",
        "letter": "to be born",
        "pinyin": "chūshēng"
    },
    "112": {
        "character": "出\t",
        "letter": "to appear; to arise; to emerge; to show up",
        "pinyin": "chūxiàn"
    },
    "113": {
        "character": "出租\u0001",
        "letter": "taxi",
        "pinyin": "chūzūchē"
    },
    "114": {
        "character": "厨房",
        "letter": "kitchen; CL:間|\u0007[jiān]",
        "pinyin": "chúfáng"
    },
    "115": {
        "character": "除了",
        "letter": "besides; apart from (... also...); in addition to; except (for)",
        "pinyin": "chúle"
    },
    "116": {
        "character": "穿",
        "letter": "to bore through; pierce; perforate; penetrate; pass through; to dress; to wear; to put on; to thread",
        "pinyin": "chuān"
    },
    "117": {
        "character": "船",
        "letter": "a boat; vessel; ship; CL:條|条[tiáo],艘[sōu],隻|只 [zhī]",
        "pinyin": "chuán"
    },
    "118": {
        "character": "真",
        "letter": "fax; facsimile",
        "pinyin": "chuánzhēn"
    },
    "119": {
        "character": "窗\u0006",
        "letter": "window; CL:個|个[gè],扇[shàn]",
        "pinyin": "chuānghu"
    },
    "120": {
        "character": "春",
        "letter": "spring (time); gay; joyful; youthful; love; lust; life",
        "pinyin": "chūn"
    },
    "121": {
        "character": "\u0004典",
        "letter": "dictionary (of Chinese compound words); also written 辭典|辞典[cí diǎn]; CL:部[bù],本[běn]",
        "pinyin": "cídiǎn"
    },
    "122": {
        "character": "\u0004",
        "letter": "word (general term including monosyllables through to short phrases); term (e.g. technical term); expression",
        "pinyin": "cíyǔ"
    },
    "123": {
        "character": "次",
        "letter": "next in sequence; second; the second (day, time etc); secondary; vice-; sub-; infra-; inferior quality;  7/56 substandard; order; sequence; hypo- (chemistry); classifier for enumerated events: time",
        "pinyin": "cì"
    },
    "124": {
        "character": "\u0001明",
        "letter": "acute (of sight and hearing); clever; intelligent; bright; smart",
        "pinyin": "cōngming"
    },
    "125": {
        "character": "从",
        "letter": "from; via; passing through; through (a gap); past; ever (followed by negative, meaning never); (formerly pr. zòng and related to 縱| ) to follow; to comply with; to obey; to join; to engage in; adopting some mode of action or attitude; follower; retainer; accessory; accomplice; related by common paternal grandfather or earlier ancestor; surname Cong",
        "pinyin": "cóng"
    },
    "126": {
        "character": "从来",
        "letter": "always; at all times; never (if used in negative sentence)",
        "pinyin": "cónglái"
    },
    "127": {
        "character": "粗心",
        "letter": "careless; thoughtless",
        "pinyin": "cūxīn"
    },
    "128": {
        "character": "cuò",
        "letter": "error; blunder; fault; cross; uneven; wrong; CL:個|个[gè]",
        "pinyin": "mistake;"
    },
    "129": {
        "character": "答案",
        "letter": "answer; solution; CL:個|个[gè]",
        "pinyin": "dáàn"
    },
    "130": {
        "character": "打扮",
        "letter": "to decorate; to dress; to make up; to adorn; manner of dressing; style of dress",
        "pinyin": "dǎban"
    },
    "131": {
        "character": "打\u0005",
        "letter": "to make a telephone call",
        "pinyin": "dǎdiànhuà"
    },
    "132": {
        "character": "打\u0006球",
        "letter": "play basketball",
        "pinyin": "dǎlánqiú"
    },
    "133": {
        "character": "打\u0007",
        "letter": "to disturb; to bother; to trouble",
        "pinyin": "dǎrǎo"
    },
    "134": {
        "character": "打\b",
        "letter": "to clean; to sweep",
        "pinyin": "dǎsǎo"
    },
    "135": {
        "character": "打算",
        "letter": "to plan; to intend; to calculate; plan; intention; calculation; CL:個|个[gè]",
        "pinyin": "dǎsuàn"
    },
    "136": {
        "character": "打印",
        "letter": "to print; to seal; to stamp",
        "pinyin": "dǎyìn"
    },
    "137": {
        "character": "打折",
        "letter": "to give a discount",
        "pinyin": "dǎzhé"
    },
    "138": {
        "character": "打\t",
        "letter": "to give or have an injection",
        "pinyin": "dǎzhēn"
    },
    "139": {
        "character": "大",
        "letter": "big; huge; large; major; great; wide; deep; oldest; eldest",
        "pinyin": "dà"
    },
    "140": {
        "character": "大概",
        "letter": "roughly; probably; rough; approximate; about",
        "pinyin": "dàgài"
    },
    "141": {
        "character": "大家",
        "letter": "authority; everyone",
        "pinyin": "dàjiā"
    },
    "142": {
        "character": "大使\u0004",
        "letter": "embassy; CL:座[zuò],個|个[gè]  8/56",
        "pinyin": "dàshǐguǎn"
    },
    "143": {
        "character": "大\u0006",
        "letter": "approximately; about",
        "pinyin": "dàyuē"
    },
    "144": {
        "character": "dài",
        "letter": "belt; girdle; ribbon; tire; area; zone; region; CL:條|条[tiáo]; to wear; to carry; to lead; to bring; to look after; to raise",
        "pinyin": "band;"
    },
    "145": {
        "character": "戴",
        "letter": "to put on or wear (glasses, hat, gloves etc); to respect; to bear; to support",
        "pinyin": "dài"
    },
    "146": {
        "character": "代表",
        "letter": "representative; delegate; CL:位[wèi],個|个[gè],名 [míng]; to represent; to stand for; on behalf of; in the name of",
        "pinyin": "dàibiǎo"
    },
    "147": {
        "character": "代替",
        "letter": "instead; to replace; to substitute (X for Y, or a number in an algebraic expression)",
        "pinyin": "dàitì"
    },
    "148": {
        "character": "大夫",
        "letter": "doctor; minister of state (in pre-Han states); CL:個| 个[gè],位[wèi]",
        "pinyin": "dàifu"
    },
    "149": {
        "character": "担心",
        "letter": "anxious; worried; uneasy; to worry; to be anxious",
        "pinyin": "dānxīn"
    },
    "150": {
        "character": "蛋䊏",
        "letter": "cake; CL:塊|\u0004[kuài],個|个[gè]",
        "pinyin": "dàngāo"
    },
    "151": {
        "character": "但是",
        "letter": "but; however",
        "pinyin": "dànshì"
    },
    "152": {
        "character": "当",
        "letter": "to be; to act as; manage; withstand; when; during; ought; should; match equally; equal; same; obstruct; just at (a time or place); on the spot; right; just at",
        "pinyin": "dāng"
    },
    "153": {
        "character": "当地",
        "letter": "local",
        "pinyin": "dāngdì"
    },
    "154": {
        "character": "当然",
        "letter": "only natural; as it should be; certainly; of course; without doubt",
        "pinyin": "dāngrán"
    },
    "155": {
        "character": "当\u0005",
        "letter": "then; at that time; while",
        "pinyin": "dāngshí"
    },
    "156": {
        "character": "刀",
        "letter": "knife; CL:把[bǎ]",
        "pinyin": "dāo"
    },
    "157": {
        "character": "游",
        "letter": "tour guide; to conduct a tour; a guidebook",
        "pinyin": "dǎoyóu"
    },
    "158": {
        "character": "到",
        "letter": "to (a place); until (a time); up to; to go; to arrive",
        "pinyin": "dào"
    },
    "159": {
        "character": "到\u0001",
        "letter": "in all places; everywhere",
        "pinyin": "dàochù"
    },
    "160": {
        "character": "到底",
        "letter": "finally; in the end; when all is said and done; after all; to the end; to the last",
        "pinyin": "dàodǐ"
    },
    "161": {
        "character": "道歉",
        "letter": "to apologize; to make an apology",
        "pinyin": "dàoqiàn"
    },
    "162": {
        "character": "得意",
        "letter": "proud of oneself; pleased with oneself; complacent  9/56",
        "pinyin": "déyì"
    },
    "163": {
        "character": "地",
        "letter": "-ly; structural particle: used before a verb or adjective, linking it to preceding modifying adverbial adjunct",
        "pinyin": "de"
    },
    "164": {
        "character": "的",
        "letter": "of; structural particle: used before a noun, linking it to preceding possessive or descriptive attributive",
        "pinyin": "de"
    },
    "165": {
        "character": "得",
        "letter": "structural particle: used after a verb (or adjective as main verb), linking it to following phrase indicating effect, degree, possibility etc",
        "pinyin": "de"
    },
    "166": {
        "character": "得",
        "letter": "to have to; must; ought to; to need to",
        "pinyin": "děi"
    },
    "167": {
        "character": "灯",
        "letter": "lamp; light; lantern; CL:盞|[zhǎn]",
        "pinyin": "dēng"
    },
    "168": {
        "character": "等",
        "letter": "wait for; await",
        "pinyin": "děng"
    },
    "169": {
        "character": "等",
        "letter": "et cetera; and so on; et al. (and other authors); after; as soon as; once",
        "pinyin": "děng"
    },
    "170": {
        "character": "低",
        "letter": "low; beneath; to lower (one's head); to let droop; to hang down; to incline",
        "pinyin": "dī"
    },
    "171": {
        "character": "底",
        "letter": "background; bottom; base; the end of a period of time; towards the end of (last month)",
        "pinyin": "dǐ"
    },
    "172": {
        "character": "弟弟",
        "letter": "younger brother; CL:個|个[gè],位[wèi]",
        "pinyin": "dìdi"
    },
    "173": {
        "character": "地方",
        "letter": "region; regional (away from the central administration)",
        "pinyin": "dìfāng"
    },
    "174": {
        "character": "地球",
        "letter": "the Earth; planet; CL:個|个[gè]",
        "pinyin": "dìqiú"
    },
    "175": {
        "character": "地\u0001",
        "letter": "subway; metro",
        "pinyin": "dìtiě"
    },
    "176": {
        "character": "地",
        "letter": "map; CL:張|\u0004[zhāng],本[běn]",
        "pinyin": "dìtú"
    },
    "177": {
        "character": "地址",
        "letter": "address; CL:個|个[gè]",
        "pinyin": "dìzhǐ"
    },
    "178": {
        "character": "第一",
        "letter": "first; number one",
        "pinyin": "dìyī"
    },
    "179": {
        "character": "点",
        "letter": "drop (of liquid); stain; spot; speck; jot; dot stroke (in Chinese characters); decimal point; point; mark (of degree or level); a place (with certain characteristics); iron bell; o’clock; a little; a bit; some; (point) unit of measurement for type; to touch on briefly; to make clear; to light; to ignite; to kindle; period of time at night (24 minutes) (old); a drip; to dibble; classifier for small indeterminate quantities  10/56",
        "pinyin": "diǎn"
    },
    "180": {
        "character": "\u0004",
        "letter": "computer; CL:臺|台[tái]",
        "pinyin": "diànnǎo"
    },
    "181": {
        "character": "\u0004\u000b",
        "letter": "television; TV; CL:臺|台[tái],個|个[gè]",
        "pinyin": "diànshì"
    },
    "182": {
        "character": "\u0004梯",
        "letter": "elevator; CL:臺|台[tái],部[bù]",
        "pinyin": "diàntī"
    },
    "183": {
        "character": "\u0004影",
        "letter": "movie; film; CL:部[bù],片[piàn],幕[mù],場| [chǎng]",
        "pinyin": "diànyǐng"
    },
    "184": {
        "character": "\u0004子件",
        "letter": "electronic mail; email; CL:封[fēng]",
        "pinyin": "diànzǐyóujiàn"
    },
    "185": {
        "character": "掉",
        "letter": "to fall; to drop; to lag behind; to lose; to go missing; to reduce; fall (in prices); to lose (value, weight etc); to wag; to swing; to turn; to change; to exchange; to swap; to show off; to shed (hair)",
        "pinyin": "diào"
    },
    "186": {
        "character": "\u0005\u0001",
        "letter": "investigation; inquiry; to investigate; to survey; survey; (opinion) poll; CL:項|\f[xiàng],個|个[gè]",
        "pinyin": "diàochá"
    },
    "187": {
        "character": "\u0006",
        "letter": "to lose; to put aside; to throw",
        "pinyin": "diū"
    },
    "188": {
        "character": "冬",
        "letter": "winter",
        "pinyin": "dōng"
    },
    "189": {
        "character": "\u0007",
        "letter": "east; host (i.e. sitting on east side of guest); landlord; surname Dong",
        "pinyin": "dōng"
    },
    "190": {
        "character": "\u0007西",
        "letter": "thing; stuff; person; CL:個|个[gè],件[jiàn]",
        "pinyin": "dōngxi"
    },
    "191": {
        "character": "懂",
        "letter": "to understand; to know",
        "pinyin": "dǒng"
    },
    "192": {
        "character": "\b物",
        "letter": "animal; CL:隻|只[zhī],群[qún],個|个[gè]",
        "pinyin": "dòngwù"
    },
    "193": {
        "character": "\b作",
        "letter": "movement; motion; action; CL:個|个[gè]",
        "pinyin": "dòngzuò"
    },
    "194": {
        "character": "都",
        "letter": "all, both; entirely (due to) each; even; already",
        "pinyin": "dōu"
    },
    "195": {
        "character": "dú",
        "letter": "read; to study; reading of word (i.e. pronunciation), similar to 拼音[pīn yīn]",
        "pinyin": "to"
    },
    "196": {
        "character": "堵",
        "letter": "traffic jam; choking",
        "pinyin": "dǔchē"
    },
    "197": {
        "character": "肚子",
        "letter": "belly; abdomen; stomach; CL:個|个[gè]",
        "pinyin": "dùzi"
    },
    "198": {
        "character": "短",
        "letter": "short or brief; to lack; weak point; fault",
        "pinyin": "duǎn"
    },
    "199": {
        "character": "段",
        "letter": "paragraph; section; segment; stage (of a process); classifier for stories, periods of time, lengths of thread etc",
        "pinyin": "duàn"
    },
    "200": {
        "character": "断",
        "letter": "to break; to snap; to cut off; to give up or abstain from sth; to judge; (usu. used in the negative) absolutely, definitely,decidedly  11/56",
        "pinyin": "duàn"
    },
    "201": {
        "character": "\b",
        "letter": "to engage in physical exercise; to toughen; to temper",
        "pinyin": "duànliàn"
    },
    "202": {
        "character": "duì",
        "letter": "pair; to be opposite; to oppose; to face; versus; for; to; correct (answer); to answer; to reply; to direct (towards sth); right",
        "pinyin": "couple;"
    },
    "203": {
        "character": "duì",
        "letter": "for",
        "pinyin": "(介\u0001)to;"
    },
    "204": {
        "character": "不起",
        "letter": "unworthy; to let down; I'm sorry; excuse me; pardon me; if you please; sorry? (please repeat)",
        "pinyin": "duìbuqǐ"
    },
    "205": {
        "character": "\u0007",
        "letter": "dialog; CL:個|个[gè]",
        "pinyin": "duìhuà"
    },
    "206": {
        "character": "面",
        "letter": "opposite",
        "pinyin": "duìmiàn"
    },
    "207": {
        "character": "\u0004",
        "letter": "stop; pause; to arrange; to lay out; to kowtow; to stamp; at once; classifier for meals, beating, tellings off etc: time, bout, spell, meal",
        "pinyin": "dùn"
    },
    "208": {
        "character": "多",
        "letter": "many; much; a lot of; numerous; multi210 多么 duōme how (wonderful etc); what (a great idea etc); however (difficult it may be etc)",
        "pinyin": "duō"
    },
    "209": {
        "character": "多少",
        "letter": "number; amount; somewhat",
        "pinyin": "duōshǎo"
    },
    "210": {
        "character": "䯳",
        "letter": "flower; earlobe; fig. item on both sides; classifier for flowers, clouds etc",
        "pinyin": "duǒ"
    },
    "211": {
        "character": "\u0005",
        "letter": "to be hungry; hungry",
        "pinyin": "è"
    },
    "212": {
        "character": "而",
        "letter": "and; as well as; and so; but (not); yet (not); (indicates causal relation); (indicates change of state); (indicates contrast)",
        "pinyin": "ér"
    },
    "213": {
        "character": "而且",
        "letter": "(not only ...) but also; moreover; in addition; furthermore",
        "pinyin": "érqiě"
    },
    "214": {
        "character": "儿童",
        "letter": "child; CL:個|个[gè]",
        "pinyin": "értóng"
    },
    "215": {
        "character": "儿子",
        "letter": "son",
        "pinyin": "érzi"
    },
    "216": {
        "character": "耳䯳",
        "letter": "ear; CL:隻|只[zhī],個|个[gè],對|[duì]",
        "pinyin": "ěrduo"
    },
    "217": {
        "character": "二",
        "letter": "two; 2; stupid (Beijing dialect)",
        "pinyin": "èr"
    },
    "218": {
        "character": "\u0006",
        "letter": "to send out; to show (one's feeling); to issue; to develop; classifier for gunshots (rounds)",
        "pinyin": "fā"
    },
    "219": {
        "character": "\u0006\t",
        "letter": "have a high temperature (from illness); have a fever",
        "pinyin": "fāshāo"
    },
    "220": {
        "character": "\u0006生",
        "letter": "to happen; to occur; to take place; to break out  12/56",
        "pinyin": "fāshēng"
    },
    "221": {
        "character": "fāxiàn",
        "letter": "find; to discover",
        "pinyin": "to"
    },
    "222": {
        "character": "展",
        "letter": "development; growth; to develop; to grow; to expand",
        "pinyin": "fāzhǎn"
    },
    "223": {
        "character": "法律",
        "letter": "law; CL:條|条[tiáo], 套[tào], 個|个[gè]",
        "pinyin": "fǎlǜ"
    },
    "224": {
        "character": "翻\f",
        "letter": "to translate; to interpret; translator; interpreter; translation; interpretation; CL:個|个[gè],位[wèi], 名[míng]",
        "pinyin": "fānyì"
    },
    "225": {
        "character": "\b",
        "letter": "agonize; agony; annoyance; upset; vexation; worries",
        "pinyin": "fánnǎo"
    },
    "226": {
        "character": "反\u0001",
        "letter": "to fight against; to oppose; to be opposed to; opposition",
        "pinyin": "fǎnduì"
    },
    "227": {
        "character": "反",
        "letter": "to mirror; to reflect; mirror image; reflection; fig. to report; to make known; to render; used erroneously for 反應|反, response or reaction",
        "pinyin": "fǎnyìng"
    },
    "228": {
        "character": "\u0004\u0006",
        "letter": "restaurant; CL:家[jiā]",
        "pinyin": "fànguǎn"
    },
    "229": {
        "character": "范\t",
        "letter": "range; scope; limit; extent; CL:個|个[gè]",
        "pinyin": "fànwéi"
    },
    "230": {
        "character": "方便",
        "letter": "convenient; to help out; to make things easy for people; convenience; suitable; having money to spare; (euphemism) to go to the toilet",
        "pinyin": "fāngbiàn"
    },
    "231": {
        "character": "方法",
        "letter": "method; way; means; CL:個|个[gè]",
        "pinyin": "fāngfǎ"
    },
    "232": {
        "character": "方面",
        "letter": "respect; aspect; field; side; CL:個|个[gè]",
        "pinyin": "fāngmiàn"
    },
    "233": {
        "character": "方向",
        "letter": "direction; orientation; path to follow; CL:個|个 [gè]",
        "pinyin": "fāngxiàng"
    },
    "234": {
        "character": "房\u0007",
        "letter": "room; CL:間|\u0007[jiān]",
        "pinyin": "fángjiān"
    },
    "235": {
        "character": "\u0005",
        "letter": "to visit; to call on; to interview; CL:次[cì]",
        "pinyin": "fǎngwèn"
    },
    "236": {
        "character": "放",
        "letter": "to release; to free; to let go; to put; to place; to let out; to set off (fireworks)",
        "pinyin": "fàng"
    },
    "237": {
        "character": "放弃",
        "letter": "to renounce; to abandon; to give up",
        "pinyin": "fàngqì"
    },
    "238": {
        "character": "放暑假",
        "letter": "take summer vacation",
        "pinyin": "fàngshǔjià"
    },
    "239": {
        "character": "放心",
        "letter": "to set one's mind at rest; to be at ease; to rest",
        "pinyin": "fàngxīn"
    },
    "240": {
        "character": "非常",
        "letter": "unusual; extraordinary; extreme; very; exceptional  13/56",
        "pinyin": "fēicháng"
    },
    "241": {
        "character": "机",
        "letter": "airplane; CL: 架[jià]",
        "pinyin": "fēijī"
    },
    "242": {
        "character": "分",
        "letter": "to divide; to separate; to allocate; to distinguish (good and bad); part or subdivision; fraction; one tenth (of certain units); unit of length equivalent to 0.33 cm; minute; a point (in sports or games); 0.1 yuan (unit of money)",
        "pinyin": "fēn"
    },
    "243": {
        "character": "…分之…",
        "letter": "used for fractions and percentages, e.g. 四分之一 is 1/4 and 百分之一 is 1%",
        "pinyin": "fēnzhī"
    },
    "244": {
        "character": "分\f",
        "letter": "minute",
        "pinyin": "fēnzhōng"
    },
    "245": {
        "character": "份",
        "letter": "part; share; portion; copy; classifier for gifts, newspaper, magazine, papers, reports, contracts etc",
        "pinyin": "fèn"
    },
    "246": {
        "character": "丰富",
        "letter": "rich; plentiful; abundant",
        "pinyin": "fēngfù"
    },
    "247": {
        "character": "景",
        "letter": "scenery; landscape; CL:個|个[gè]",
        "pinyin": "fēngjǐng"
    },
    "248": {
        "character": "否\u000b",
        "letter": "if not; otherwise; else; or else",
        "pinyin": "fǒuzé"
    },
    "249": {
        "character": "符合",
        "letter": "in keeping with; in accordance with; tallying with; in line with; to agree with; to accord with; to conform to; to correspond with; to manage; to handle",
        "pinyin": "fúhé"
    },
    "250": {
        "character": "服\u0006\b",
        "letter": "waiter; waitress; attendant; customer service personnel; CL:個|个[gè]",
        "pinyin": "fúwùyuán"
    },
    "251": {
        "character": "富",
        "letter": "rich; surname Fu",
        "pinyin": "fù"
    },
    "252": {
        "character": "附近",
        "letter": "(in the) vicinity; nearby; neighboring; next to",
        "pinyin": "fùjìn"
    },
    "253": {
        "character": "父\u0005",
        "letter": "father; also pr. with light tone [fù qin]; CL:個|个 [gè]",
        "pinyin": "fùqīn"
    },
    "254": {
        "character": "䐾\u0007",
        "letter": "to revise; to review; revision; CL:次[cì]",
        "pinyin": "fùxí"
    },
    "255": {
        "character": "䐾印",
        "letter": "to photocopy; to duplicate a document",
        "pinyin": "fùyìn"
    },
    "256": {
        "character": "䐾\t",
        "letter": "complicated; complex",
        "pinyin": "fùzá"
    },
    "257": {
        "character": "\u0004",
        "letter": "to be in charge of; to take responsibility for; to be to blame; conscientious",
        "pinyin": "fùzé"
    },
    "258": {
        "character": "改\u0001",
        "letter": "to change; to alter; to transform",
        "pinyin": "gǎibiàn"
    },
    "259": {
        "character": "干杯",
        "letter": "to drink a toast; Cheers! (proposing a toast); Here's to you!; Bottoms up!; lit. dry cup  14/56",
        "pinyin": "gānbēi"
    },
    "260": {
        "character": "干\u0006",
        "letter": "clean; neat",
        "pinyin": "gānjìng"
    },
    "261": {
        "character": "干燥",
        "letter": "to dry (of weather, paint, cement etc); desiccation; dull; uninteresting; arid",
        "pinyin": "gānzào"
    },
    "262": {
        "character": "敢",
        "letter": "to dare; daring; (polite) may I venture",
        "pinyin": "gǎn"
    },
    "263": {
        "character": "感",
        "letter": "to move (sb); to touch (sb emotionally); moving",
        "pinyin": "gǎndòng"
    },
    "264": {
        "character": "感\u0007",
        "letter": "to feel; to become aware of; feeling; sense; perception; CL:個|个[gè]",
        "pinyin": "gǎnjué"
    },
    "265": {
        "character": "感冒",
        "letter": "to catch cold; (common) cold; CL:場|\u0001[cháng], 次[cì]",
        "pinyin": "gǎnmào"
    },
    "266": {
        "character": "感情",
        "letter": "feeling; emotion; sensation; likes and dislikes; deep affection for sb or sth; relationship (i.e. love affair); CL:個|个[gè],種|䝅[zhǒng]",
        "pinyin": "gǎnqíng"
    },
    "267": {
        "character": "感\t",
        "letter": "(express) thanks; gratitude; grateful; thankful; thanks",
        "pinyin": "gǎnxiè"
    },
    "268": {
        "character": "干",
        "letter": "to work; to do; to manage",
        "pinyin": "gān"
    },
    "269": {
        "character": "才",
        "letter": "just now; a moment ago",
        "pinyin": "gāngcái"
    },
    "270": {
        "character": "gānggang",
        "letter": "recently; just a moment ago",
        "pinyin": "just"
    },
    "271": {
        "character": "高",
        "letter": "high; tall; above average; loud; your (honorific); surname Gao",
        "pinyin": "gāo"
    },
    "272": {
        "character": "高\u0005",
        "letter": "high level; high grade; advanced; high-ranking",
        "pinyin": "gāojí"
    },
    "273": {
        "character": "高䫤",
        "letter": "happy; glad; willing (to do sth); in a cheerful mood",
        "pinyin": "gāoxìng"
    },
    "274": {
        "character": "告\b",
        "letter": "to tell; to inform; to let know",
        "pinyin": "gàosu"
    },
    "275": {
        "character": "哥哥",
        "letter": "older brother; CL:個|个[gè],位[wèi]",
        "pinyin": "gēge"
    },
    "276": {
        "character": "各",
        "letter": "each; every",
        "pinyin": "gè"
    },
    "277": {
        "character": "个",
        "letter": "individual; this; that; size; classifier for people or objects in general",
        "pinyin": "gè"
    },
    "278": {
        "character": "个子",
        "letter": "height; stature; build; size",
        "pinyin": "gèzi"
    },
    "279": {
        "character": "\u0004",
        "letter": "to; for; for the benefit of; to give; to allow; to do sth (for sb); (passive particle)",
        "pinyin": "gěi"
    },
    "280": {
        "character": "跟",
        "letter": "heel; to follow closely; to go with; to marry sb (of woman); with; towards; as (compared to); from (different from); and (in addition to)  15/56",
        "pinyin": "gēn"
    },
    "281": {
        "character": "根据",
        "letter": "according to; based on; basis; foundation; CL:個| 个[gè]",
        "pinyin": "gēnjù"
    },
    "282": {
        "character": "更",
        "letter": "to change or replace; to experience; one of the five two hour periods into which the night was formerly divided; watch (eg of a sentry or guard)",
        "pinyin": "gēng"
    },
    "283": {
        "character": "公共汽",
        "letter": "bus; CL:輛|\b[liàng],班[bān]",
        "pinyin": "gōnggòngqìchē"
    },
    "284": {
        "character": "公斤",
        "letter": "kilogram (kg)",
        "pinyin": "gōngjīn"
    },
    "285": {
        "character": "公里",
        "letter": "kilometer",
        "pinyin": "gōnglǐ"
    },
    "286": {
        "character": "公司",
        "letter": "(business) company; company; firm; corporation; incorporated; CL:家[jiā]",
        "pinyin": "gōngsī"
    },
    "287": {
        "character": "公䭉",
        "letter": "public park; CL:場|\u0001[chǎng]",
        "pinyin": "gōngyuán"
    },
    "288": {
        "character": "工具",
        "letter": "tool; instrument; utensil; means (to achieve a goal etc)",
        "pinyin": "gōngjù"
    },
    "289": {
        "character": "工",
        "letter": "wages; pay; CL:個|个[gè],份[fèn],月[yuè]",
        "pinyin": "gōngzī"
    },
    "290": {
        "character": "工作",
        "letter": "job; work; construction; task; CL:個|个[gè],份 [fèn],項|\t[xiàng]",
        "pinyin": "gōngzuò"
    },
    "291": {
        "character": "共同",
        "letter": "common; joint; jointly; together; collaborative",
        "pinyin": "gòngtóng"
    },
    "292": {
        "character": "狗",
        "letter": "dog; CL:隻|只[zhī],條|条[tiáo]",
        "pinyin": "gǒu"
    },
    "293": {
        "character": "䭧",
        "letter": "to reach; to be enough",
        "pinyin": "gòu"
    },
    "294": {
        "character": "\u0005物",
        "letter": "shopping",
        "pinyin": "gòuwù"
    },
    "295": {
        "character": "孤",
        "letter": "lone; lonely; loneliness",
        "pinyin": "gūdān"
    },
    "296": {
        "character": "估\u0007",
        "letter": "to estimate; to reckon; CL:個|个[gè]",
        "pinyin": "gūjì"
    },
    "297": {
        "character": "鼓励",
        "letter": "to encourage",
        "pinyin": "gǔlì"
    },
    "298": {
        "character": "鼓掌",
        "letter": "to applaud; to clap",
        "pinyin": "gǔzhǎng"
    },
    "299": {
        "character": "\u0006客",
        "letter": "client; customer; CL:位[wèi]",
        "pinyin": "gùkè"
    },
    "300": {
        "character": "故事",
        "letter": "old practice; CL:個|个[gè]",
        "pinyin": "gùshì"
    },
    "301": {
        "character": "故意",
        "letter": "deliberately; on purpose",
        "pinyin": "gùyì"
    },
    "302": {
        "character": "刮\u0004",
        "letter": "to be windy",
        "pinyin": "guāfēng"
    },
    "303": {
        "character": "挂",
        "letter": "to hang or suspend (from a hook etc); (of a telephone call) to hang up; to be worried or  16/56 concerned; to make a phone call (topolect); to register or record; to hitch; classifier for sets or clusters of objects",
        "pinyin": "guà"
    },
    "304": {
        "character": "䎔",
        "letter": "mountain pass; to close; to shut; to turn off; to concern; to involve",
        "pinyin": "guān"
    },
    "305": {
        "character": "䎔\b",
        "letter": "crucial point; crux; CL:個|个[gè]; key; crucial; pivotal",
        "pinyin": "guānjiàn"
    },
    "306": {
        "character": "䎔系",
        "letter": "relation; relationship; to concern; to affect; to have to do with; guanxi; CL:個|个[gè]",
        "pinyin": "guānxì"
    },
    "307": {
        "character": "䎔心",
        "letter": "to care for sth; caring; concerned",
        "pinyin": "guānxīn"
    },
    "308": {
        "character": "䎔于",
        "letter": "pertaining to; concerning; regarding; with regards to; about; a matter of",
        "pinyin": "guānyú"
    },
    "309": {
        "character": "guānzhòng",
        "letter": "audience; visitors (to an exhibition etc)",
        "pinyin": "spectators;"
    },
    "310": {
        "character": "管理",
        "letter": "to supervise; to manage; to administer; management; administration; CL:個|个[gè]",
        "pinyin": "guǎnlǐ"
    },
    "311": {
        "character": "光",
        "letter": "light; ray; CL:道[dào]; bright; only; merely; to use up",
        "pinyin": "guāng"
    },
    "312": {
        "character": "广播",
        "letter": "broadcast; widely spread; CL:個|个[gè]",
        "pinyin": "guǎngbō"
    },
    "313": {
        "character": "广告",
        "letter": "to advertise; a commercial; advertisement; CL:項| [xiàng]",
        "pinyin": "guǎnggào"
    },
    "314": {
        "character": "䶯",
        "letter": "to stroll; to visit",
        "pinyin": "guàng"
    },
    "315": {
        "character": "\u0004定",
        "letter": "provision; to fix; to set; to formulate; to stipulate; to provide; regulation; rule; CL:個|个[gè]",
        "pinyin": "guīdìng"
    },
    "316": {
        "character": "\u0005",
        "letter": "expensive; noble; your (name); precious",
        "pinyin": "guì"
    },
    "317": {
        "character": "国\u0007",
        "letter": "international",
        "pinyin": "guójì"
    },
    "318": {
        "character": "国家",
        "letter": "country; nation; state; CL:個|个[gè]",
        "pinyin": "guójiā"
    },
    "319": {
        "character": "果然",
        "letter": "really; sure enough; as expected",
        "pinyin": "guǒrán"
    },
    "320": {
        "character": "果汁",
        "letter": "fruit juice",
        "pinyin": "guǒzhī"
    },
    "321": {
        "character": "\u0006",
        "letter": "to cross; to go over; to pass (time); to celebrate (a holiday); to live; to get along; excessively; too-; surname Guo",
        "pinyin": "guò"
    },
    "322": {
        "character": "\u0006",
        "letter": "助\u0001 (indicates a past action or state, \u0001+\u0006)",
        "pinyin": "guò"
    },
    "323": {
        "character": "\u0006程",
        "letter": " 17/56 course of events; process; CL:個|个[gè]",
        "pinyin": "guòchéng"
    },
    "324": {
        "character": "去",
        "letter": "(in the) past; former; previous; to go over; to pass by",
        "pinyin": "guòqu"
    },
    "325": {
        "character": "\u0004",
        "letter": "still; still in progress; still more; yet; even more; in addition; fairly; passably (good); as early as; even; also; else",
        "pinyin": "hái"
    },
    "326": {
        "character": "\u0004是",
        "letter": "or; still; nevertheless",
        "pinyin": "háishì"
    },
    "327": {
        "character": "孩子",
        "letter": "child",
        "pinyin": "háizi"
    },
    "328": {
        "character": "海洋",
        "letter": "ocean; CL:個|个[gè]",
        "pinyin": "hǎiyáng"
    },
    "329": {
        "character": "害怕",
        "letter": "to be afraid; to be scared",
        "pinyin": "hàipà"
    },
    "330": {
        "character": "害羞",
        "letter": "blush; shy",
        "pinyin": "hàixiū"
    },
    "331": {
        "character": "寒假",
        "letter": "winter vacation",
        "pinyin": "hánjià"
    },
    "332": {
        "character": "汗",
        "letter": "perspiration; sweat; CL:滴[dī],頭|\u0006[tóu],身 [shēn]; Khan (Persian or Mongol king or emperor); Khan (name); to be speechless (out of helplessness, embarrassment etc) (Internet slang used as an interjection)",
        "pinyin": "hàn"
    },
    "333": {
        "character": "\u0007",
        "letter": "Chinese language; CL:門|門[mén]",
        "pinyin": "hànyǔ"
    },
    "334": {
        "character": "航班",
        "letter": "scheduled flight; flight number; plane; scheduled sailing; sailing number; passenger ship",
        "pinyin": "hángbān"
    },
    "335": {
        "character": "好",
        "letter": "good; well; proper; good to; easy to; very; so; (suffix indicating completion or readiness)",
        "pinyin": "hǎo"
    },
    "336": {
        "character": "好吃",
        "letter": "tasty; delicious",
        "pinyin": "hǎochī"
    },
    "337": {
        "character": "好\u0001",
        "letter": "benefit; advantage; gain; profit; also pronounced hǎo chù; CL:個|个[gè]",
        "pinyin": "hǎochu"
    },
    "338": {
        "character": "好像",
        "letter": "as if; to seem like",
        "pinyin": "hǎoxiàng"
    },
    "339": {
        "character": "号",
        "letter": "day of a month; (suffix used after) name of a ship; (ordinal) number",
        "pinyin": "hào"
    },
    "340": {
        "character": "号\u0005",
        "letter": "number; CL:堆[duī],個|个[gè]",
        "pinyin": "hàomǎ"
    },
    "341": {
        "character": "喝",
        "letter": "to drink; to shout (a command); My goodness!",
        "pinyin": "hē"
    },
    "342": {
        "character": "和",
        "letter": "and; together with; with; sum; union; peace; harmony; surname He; Japanese related; Taiwan pr. hàn  18/56",
        "pinyin": "hé"
    },
    "343": {
        "character": "河",
        "letter": "river; CL:條|条[tiáo],道[dào]",
        "pinyin": "hé"
    },
    "344": {
        "character": "合格",
        "letter": "qualified; meeting a standard; eligible (voter)",
        "pinyin": "hégé"
    },
    "345": {
        "character": "合适",
        "letter": "suitable; fitting; decent; to fit",
        "pinyin": "héshì"
    },
    "346": {
        "character": "盒子",
        "letter": "case",
        "pinyin": "hézi"
    },
    "347": {
        "character": "黑",
        "letter": "black; dark; abbr. for Heilongjiang 黑龍江|黑\b 江 province in northeast China",
        "pinyin": "hēi"
    },
    "348": {
        "character": "黑板",
        "letter": "blackboard; CL:塊|\u0007[kuài],個|个[gè]",
        "pinyin": "hēibǎn"
    },
    "349": {
        "character": "很",
        "letter": "(adverb of degree); quite; very; awfully",
        "pinyin": "hěn"
    },
    "350": {
        "character": "\u0001",
        "letter": "bonus; popular; red; revolutionary",
        "pinyin": "hóng"
    },
    "351": {
        "character": "猴子",
        "letter": "monkey; CL:隻|只[zhī]",
        "pinyin": "hóuzi"
    },
    "352": {
        "character": "厚",
        "letter": "thick; deep or profound; kind; generous; rich or strong in flavor; to favor; to stress",
        "pinyin": "hòu"
    },
    "353": {
        "character": "后悔",
        "letter": "to regret; to repent",
        "pinyin": "hòuhuǐ"
    },
    "354": {
        "character": "后来",
        "letter": "afterwards; later",
        "pinyin": "hòulái"
    },
    "355": {
        "character": "后面",
        "letter": "rear; back; behind; later; afterwards",
        "pinyin": "hòumian"
    },
    "356": {
        "character": "忽然",
        "letter": "suddenly; all of a sudden",
        "pinyin": "hūrán"
    },
    "357": {
        "character": "士",
        "letter": "nurse; CL:個|个[gè]",
        "pinyin": "hùshi"
    },
    "358": {
        "character": "照",
        "letter": "passport; CL:本[běn],個|个[gè]",
        "pinyin": "hùzhào"
    },
    "359": {
        "character": "互相",
        "letter": "each other; mutually; mutual",
        "pinyin": "hùxiāng"
    },
    "360": {
        "character": "花",
        "letter": "flower; blossom; fancy pattern; CL:䯳[duǒ],支 [zhī],束[shù],把[bǎ],盆[pén],簇[cù]; to spend (money, time); surname Hua",
        "pinyin": "huā"
    },
    "361": {
        "character": "花䭉",
        "letter": "garden; CL:座[zuò],個|个[gè]",
        "pinyin": "huāyuán"
    },
    "362": {
        "character": "画",
        "letter": "to draw; picture; painting; CL:幅[fú],張|\t[zhāng]",
        "pinyin": "huà"
    },
    "363": {
        "character": "疑",
        "letter": "to doubt; to suspect; doubt; suspicion; skeptical",
        "pinyin": "huáiyí"
    },
    "364": {
        "character": "坏",
        "letter": "bad; spoiled; broken; to break down",
        "pinyin": "huài"
    },
    "365": {
        "character": "\u0004迎",
        "letter": "to welcome; welcome",
        "pinyin": "huānyíng"
    },
    "366": {
        "character": "\u0006",
        "letter": "to pay back; to return; surname Huan",
        "pinyin": "huán"
    },
    "367": {
        "character": "\u0005境",
        "letter": "environment; circumstances; surroundings; CL:個| 个[gè]; ambient  19/56",
        "pinyin": "huánjìng"
    },
    "368": {
        "character": "\u0006",
        "letter": "change; exchange",
        "pinyin": "huàn"
    },
    "369": {
        "character": "黄",
        "letter": "yellow; pornographic; to fall through",
        "pinyin": "huáng"
    },
    "370": {
        "character": "回",
        "letter": "to circle; to go back; to turn around; to answer; to return; to revolve; Hui ethnic group (Chinese Muslims); time; classifier for acts of a play; section or chapter (of a classic book)",
        "pinyin": "huí"
    },
    "371": {
        "character": "回答",
        "letter": "to reply; to answer; the answer; CL:個|个[gè]",
        "pinyin": "huídá"
    },
    "372": {
        "character": "回\f",
        "letter": "to recall; recollection; CL:個|个[gè]",
        "pinyin": "huíyì"
    },
    "373": {
        "character": "会",
        "letter": "can; be possible; be able to; will; be likely to; be sure to; to assemble; to meet; to gather; to see; union; group; association; CL:個|个[gè]; a moment (Taiwan pr. for this sense is huǐ)",
        "pinyin": "huì"
    },
    "374": {
        "character": "会",
        "letter": "meeting; conference; CL:場|\u0001[chǎng],屆|届[jiè]",
        "pinyin": "huìyì"
    },
    "375": {
        "character": "活\u0005",
        "letter": "to exercise; to move about; to operate; activity; loose; shaky; active; movable; maneuver; to use connections; CL:項|\u000b[xiàng],個|个[gè]",
        "pinyin": "huódòng"
    },
    "376": {
        "character": "活",
        "letter": "lively; vivacious; brisk; active",
        "pinyin": "huópo"
    },
    "377": {
        "character": "火",
        "letter": "fire; CL:把[bǎ]",
        "pinyin": "huǒ"
    },
    "378": {
        "character": "火站",
        "letter": "train station",
        "pinyin": "huǒchēzhàn"
    },
    "379": {
        "character": "\u0007得",
        "letter": "to obtain; to receive; to get",
        "pinyin": "huòdé"
    },
    "380": {
        "character": "或者",
        "letter": "or; possibly; maybe; perhaps",
        "pinyin": "huòzhě"
    },
    "381": {
        "character": "机\u0001",
        "letter": "airport; airfield; CL:家[jiā],處|\u0004[chù]",
        "pinyin": "jīchǎng"
    },
    "382": {
        "character": "机会",
        "letter": "opportunity; chance; occasion; CL:個|个[gè]",
        "pinyin": "jīhuì"
    },
    "383": {
        "character": "基",
        "letter": "base; foundation; basis; underlying; CL:個|个[gè]",
        "pinyin": "jīchǔ"
    },
    "384": {
        "character": "蛋",
        "letter": "(chicken) egg; hen's egg; CL:個|个[gè],打[dá]",
        "pinyin": "jīdàn"
    },
    "385": {
        "character": "激\u0005",
        "letter": "to excite; to agitate; exciting",
        "pinyin": "jīdòng"
    },
    "386": {
        "character": "几乎",
        "letter": "almost; nearly; practically",
        "pinyin": "jīhū"
    },
    "387": {
        "character": "\b䈀",
        "letter": "active; energetic; vigorous; positive (outlook); proactive",
        "pinyin": "jījí"
    },
    "388": {
        "character": "\b累",
        "letter": "to accumulate; accumulation; cumulative; cumulatively",
        "pinyin": "jīlěi"
    },
    "389": {
        "character": "䈀",
        "letter": "extremely; pole (geography, physics); utmost; top  20/56",
        "pinyin": "jí"
    },
    "390": {
        "character": "䈀其",
        "letter": "extremely",
        "pinyin": "jíqí"
    },
    "391": {
        "character": "集合",
        "letter": "a congregation; to gather; a set",
        "pinyin": "jíhé"
    },
    "392": {
        "character": "及\b",
        "letter": "in time; promptly; without delay; timely",
        "pinyin": "jíshí"
    },
    "393": {
        "character": "即使",
        "letter": "even if; even though; given that",
        "pinyin": "jíshǐ"
    },
    "394": {
        "character": "几",
        "letter": "how much; how many; several; a few",
        "pinyin": "jǐ"
    },
    "395": {
        "character": "寄",
        "letter": "to live (in a house); to lodge; to mail; to send; to entrust; to depend",
        "pinyin": "jì"
    },
    "396": {
        "character": "得",
        "letter": "to remember",
        "pinyin": "jìde"
    },
    "397": {
        "character": "者",
        "letter": "reporter; journalist; CL:個|个[gè]",
        "pinyin": "jìzhě"
    },
    "398": {
        "character": "䎞",
        "letter": "plan; project; program; to plan; to map out; CL: 個|个[gè],項| [xiàng]",
        "pinyin": "jìhuà"
    },
    "399": {
        "character": "季\u0007",
        "letter": "time; season; period; CL:個|个[gè]",
        "pinyin": "jìjié"
    },
    "400": {
        "character": "既然",
        "letter": "since; as; this being the case",
        "pinyin": "jìrán"
    },
    "401": {
        "character": "技\t",
        "letter": "technology; technique; skill; CL:門|門[mén],種|䝅 [zhǒng],項| [xiàng]",
        "pinyin": "jìshù"
    },
    "402": {
        "character": "\u0004\u000b",
        "letter": "to continue; to proceed with; to go on with",
        "pinyin": "jìxù"
    },
    "403": {
        "character": "家",
        "letter": "home; family; classifier for families or businesses; refers to the philosophical schools of pre-Han China; noun suffix for specialists in some activity such as musician or revolutionary, corresponds to English -ist, -er, -ary or -ian; surname Jia; CL:個| 个[gè]",
        "pinyin": "jiā"
    },
    "404": {
        "character": "家具",
        "letter": "furniture; CL:件[jiàn],套[tào]",
        "pinyin": "jiājù"
    },
    "405": {
        "character": "加班",
        "letter": "to work overtime",
        "pinyin": "jiābān"
    },
    "406": {
        "character": "加油站",
        "letter": "gas station",
        "pinyin": "jiāyóuzhàn"
    },
    "407": {
        "character": "假",
        "letter": "fake; false; artificial; to borrow; if; suppose",
        "pinyin": "jiǎ"
    },
    "408": {
        "character": "价格",
        "letter": "price; CL:個|个[gè]",
        "pinyin": "jiàgé"
    },
    "409": {
        "character": "\u0005持",
        "letter": "to continue upholding; to remain committed to; persistence; to persist; to uphold; to insist on; persevere",
        "pinyin": "jiānchí"
    },
    "410": {
        "character": "\u0006\u0001",
        "letter": "inspection; to examine; to inspect; CL:次[cì]  21/56",
        "pinyin": "jiǎnchá"
    },
    "411": {
        "character": "\u0001",
        "letter": "simple; not complicated",
        "pinyin": "jiǎndān"
    },
    "412": {
        "character": "䫩肥",
        "letter": "to lose weight",
        "pinyin": "jiǎnféi"
    },
    "413": {
        "character": "䫩少",
        "letter": "to lessen; to decrease; to reduce; to lower",
        "pinyin": "jiǎnshǎo"
    },
    "414": {
        "character": "件",
        "letter": "item; component; classifier for events, things, clothes etc",
        "pinyin": "jiàn"
    },
    "415": {
        "character": "健康",
        "letter": "health; healthy",
        "pinyin": "jiànkāng"
    },
    "416": {
        "character": "\u0004面",
        "letter": "to meet; to see sb; CL:次[cì]",
        "pinyin": "jiànmiàn"
    },
    "417": {
        "character": "将来",
        "letter": "in the future; future; the future; CL:個|个[gè]",
        "pinyin": "jiānglái"
    },
    "418": {
        "character": "\u0006",
        "letter": "to speak; to explain; to negotiate; to emphasise; to be particular about; as far as sth is concerned; speech; lecture",
        "pinyin": "jiǎng"
    },
    "419": {
        "character": "\u0005金",
        "letter": "premium; award money; a bonus",
        "pinyin": "jiǎngjīn"
    },
    "420": {
        "character": "降低",
        "letter": "to reduce; to lower; to bring down",
        "pinyin": "jiàngdī"
    },
    "421": {
        "character": "教",
        "letter": "to teach",
        "pinyin": "jiāo"
    },
    "422": {
        "character": "交",
        "letter": "to hand over; to deliver; to pay (money); to turn over; to make friends; to intersect (lines)",
        "pinyin": "jiāo"
    },
    "423": {
        "character": "交流",
        "letter": "exchange; give-and-take; to exchange; to alternate; communication; alternating current (electricity)",
        "pinyin": "jiāoliú"
    },
    "424": {
        "character": "交通",
        "letter": "to be connected; traffic; communications; liaison",
        "pinyin": "jiāotōng"
    },
    "425": {
        "character": "\u0007傲",
        "letter": "arrogant; full of oneself; conceited; proud of sth; CL:個|个[gè]",
        "pinyin": "jiāoào"
    },
    "426": {
        "character": "角",
        "letter": "angle; corner; horn; horn-shaped; unit of money equal to 0.1 yuan; CL:個|个[gè]",
        "pinyin": "jiǎo"
    },
    "427": {
        "character": "脚",
        "letter": "foot; leg; base; kick; CL:雙|双[shuāng],隻|只[zhī]",
        "pinyin": "jiǎo"
    },
    "428": {
        "character": "\b子",
        "letter": "dumpling; pot-sticker; CL:個|个[gè],隻|只[zhī]",
        "pinyin": "jiǎozi"
    },
    "429": {
        "character": "叫",
        "letter": "to shout; to call; to order; to ask; to be called; by (indicates agent in the passive mood)",
        "pinyin": "jiào"
    },
    "430": {
        "character": "教室",
        "letter": "classroom; CL:間|[jiān]",
        "pinyin": "jiàoshì"
    },
    "431": {
        "character": "教授",
        "letter": "professor; to instruct; to lecture on; CL:個|个[gè], 位[wèi]",
        "pinyin": "jiàoshòu"
    },
    "432": {
        "character": "教育",
        "letter": "to educate; to teach; education  22/56",
        "pinyin": "jiàoyù"
    },
    "433": {
        "character": "接",
        "letter": "to receive; to answer (the phone); to meet or welcome sb; to connect; to catch; to join; to extend; to take one's turn on duty; take over for sb",
        "pinyin": "jiē"
    },
    "434": {
        "character": "接受",
        "letter": "to accept; to receive",
        "pinyin": "jiēshòu"
    },
    "435": {
        "character": "街道",
        "letter": "street; CL:條|条[tiáo]",
        "pinyin": "jiēdào"
    },
    "436": {
        "character": "果",
        "letter": "to bear fruit; CL:個|个[gè]",
        "pinyin": "jiēguǒ"
    },
    "437": {
        "character": "婚",
        "letter": "to marry; to get married; CL:次[cì]",
        "pinyin": "jiéhūn"
    },
    "438": {
        "character": "束",
        "letter": "termination; to finish; to end; to conclude; to close",
        "pinyin": "jiéshù"
    },
    "439": {
        "character": "\u0001目",
        "letter": "program; item (on a program); CL:臺|台[tái],個| 个[gè],套[tào]",
        "pinyin": "jiémù"
    },
    "440": {
        "character": "\u0001日",
        "letter": "holiday; festival; CL:個|个[gè]",
        "pinyin": "jiérì"
    },
    "441": {
        "character": "\u0001\u0007",
        "letter": "to economize; to conserve (resources); economy; frugal",
        "pinyin": "jiéyuē"
    },
    "442": {
        "character": "姐姐",
        "letter": "older sister; CL:個|个[gè]",
        "pinyin": "jiějie"
    },
    "443": {
        "character": "解决",
        "letter": "to settle (a dispute); to resolve; to solve",
        "pinyin": "jiějué"
    },
    "444": {
        "character": "解\u0006",
        "letter": "explanation; to explain; to interpret; to resolve; CL:個|个[gè]",
        "pinyin": "jiěshì"
    },
    "445": {
        "character": "借",
        "letter": "to lend; to borrow; excuse; pretext; by means of; to seize (an opportunity); to take (an opportunity)",
        "pinyin": "jiè"
    },
    "446": {
        "character": "介\u0005",
        "letter": "to present; to introduce; to recommend; to suggest; to let know; to brief",
        "pinyin": "jièshào"
    },
    "447": {
        "character": "今天",
        "letter": "today; at the present; now",
        "pinyin": "jīntiān"
    },
    "448": {
        "character": "尽管",
        "letter": "despite; although; even though; in spite of; unhesitatingly; do not hesitate (to ask, complain etc); (go ahead and do it) without hesitating",
        "pinyin": "jǐnguǎn"
    },
    "449": {
        "character": "\b",
        "letter": "nervous; keyed up; intense; tense; strained; in short supply; scarce; CL:陣|\t[zhèn]",
        "pinyin": "jǐnzhāng"
    },
    "450": {
        "character": "近",
        "letter": "near; close to; approximately",
        "pinyin": "jìn"
    },
    "451": {
        "character": "\u0004",
        "letter": "to advance; to enter; to come (or go) into; to receive or admit; to eat or drink; to submit or present; (used after a verb) into, in; to score a goal",
        "pinyin": "jìn"
    },
    "452": {
        "character": "\u0004行",
        "letter": "to advance; to conduct; underway; in progress; to  23/56 do; to carry out; to carry on; to execute",
        "pinyin": "jìnxíng"
    },
    "453": {
        "character": "禁止",
        "letter": "to prohibit; to forbid; to ban",
        "pinyin": "jìnzhǐ"
    },
    "454": {
        "character": "精彩",
        "letter": "brilliant; splendid",
        "pinyin": "jīngcǎi"
    },
    "455": {
        "character": "精神",
        "letter": "spirit; mind; consciousness; thought; mental; psychological; essence; gist; CL:個|个[gè]",
        "pinyin": "jīngshén"
    },
    "456": {
        "character": "\u0005常",
        "letter": "day to day; everyday; daily; frequently; constantly; regularly; often",
        "pinyin": "jīngcháng"
    },
    "457": {
        "character": "\u0005",
        "letter": "to pass; to go through; process; course; CL:個|个 [gè]",
        "pinyin": "jīngguò"
    },
    "458": {
        "character": "\u0005\u0004",
        "letter": "economy; economic",
        "pinyin": "jīngjì"
    },
    "459": {
        "character": "\u0005理",
        "letter": "manager; director; CL:個|个[gè],位[wèi],名[míng]",
        "pinyin": "jīnglǐ"
    },
    "460": {
        "character": "\u0005",
        "letter": "experience; CL:個|个[gè],次[cì]; to experience; to go through",
        "pinyin": "jīnglì"
    },
    "461": {
        "character": "\u0005\u000b",
        "letter": "to experience; experience",
        "pinyin": "jīngyàn"
    },
    "462": {
        "character": "京\t",
        "letter": "Beijing opera; CL:場|[chǎng],出[chū]",
        "pinyin": "jīngjù"
    },
    "463": {
        "character": "警察",
        "letter": "police; policeman; policewoman; CL:個|个[gè]",
        "pinyin": "jǐngchá"
    },
    "464": {
        "character": "竟然",
        "letter": "unexpectedly; to one's surprise; in spite of everything; in that crazy way; actually; to go as far as to",
        "pinyin": "jìngrán"
    },
    "465": {
        "character": "\u0007争",
        "letter": "to compete; competition",
        "pinyin": "jìngzhēng"
    },
    "466": {
        "character": "\u0006子",
        "letter": "mirror; CL:面[miàn],個|个[gè]",
        "pinyin": "jìngzi"
    },
    "467": {
        "character": "究竟",
        "letter": "after all (when all is said and done); actually; outcome; result",
        "pinyin": "jiūjìng"
    },
    "468": {
        "character": "九",
        "letter": "nine;",
        "pinyin": "jiǔ"
    },
    "469": {
        "character": "久",
        "letter": "(long) time; (long) duration of time",
        "pinyin": "jiǔ"
    },
    "470": {
        "character": "旧",
        "letter": "old; opposite: new 新; former; worn (with age)",
        "pinyin": "jiù"
    },
    "471": {
        "character": "就",
        "letter": "at once; right away; only; just (emphasis); as early as; already; as soon as; then; in that case; as many as; even if; to approach; to move towards; to undertake; to engage in; to suffer; subjected to; to accomplish; to take advantage of; to go with (of foods); with regard to; concerning",
        "pinyin": "jiù"
    },
    "472": {
        "character": "\b\u0001",
        "letter": "to conduct; to hold  24/56",
        "pinyin": "jǔbàn"
    },
    "473": {
        "character": "行",
        "letter": "to hold (a meeting, ceremony etc)",
        "pinyin": "jǔxíng"
    },
    "474": {
        "character": "拒\u0005",
        "letter": "to refuse; to decline; to reject",
        "pinyin": "jùjué"
    },
    "475": {
        "character": "距离",
        "letter": "distance; to be apart; CL:個|个[gè]",
        "pinyin": "jùlí"
    },
    "476": {
        "character": "句子",
        "letter": "sentence; CL:個|个[gè]",
        "pinyin": "jùzi"
    },
    "477": {
        "character": "\u0004得",
        "letter": "to think; to feel",
        "pinyin": "juéde"
    },
    "478": {
        "character": "决定",
        "letter": "to decide (to do something); to resolve; decision; CL:個|个[gè],項|\b[xiàng]; certainly",
        "pinyin": "juédìng"
    },
    "479": {
        "character": "咖佔",
        "letter": "coffee; CL:杯[bēi]",
        "pinyin": "kāfēi"
    },
    "480": {
        "character": "䇖",
        "letter": "to open; to start; to turn on; to boil; to write out (a medical prescription); to operate (vehicle); abbr. for 開爾文|䇖尔文 degrees Kelvin",
        "pinyin": "kāi"
    },
    "481": {
        "character": "䇖始",
        "letter": "to begin; beginning; to start; initial; CL:個|个[gè]",
        "pinyin": "kāishǐ"
    },
    "482": {
        "character": "䇖玩笑",
        "letter": "to play a joke; to make fun of; to joke",
        "pinyin": "kāiwánxiào"
    },
    "483": {
        "character": "看",
        "letter": "to see; to look at; to read; to watch; to consider; to regard as; to view as; to treat as; to judge; (after repeated verb) to give it a try; depending on (how you're judging); to visit; to call on; to treat (an illness); to look after; Watch out! (for a danger)",
        "pinyin": "kàn"
    },
    "484": {
        "character": "看法",
        "letter": "way of looking at a thing; view; opinion; CL:個| 个[gè]",
        "pinyin": "kànfǎ"
    },
    "485": {
        "character": "看",
        "letter": "to see; to catch sight of",
        "pinyin": "kànjiàn"
    },
    "486": {
        "character": "考\u0006",
        "letter": "to think over; to consider; consideration",
        "pinyin": "kǎolǜ"
    },
    "487": {
        "character": "考\u0007",
        "letter": "exam; CL:次[cì]",
        "pinyin": "kǎoshì"
    },
    "488": {
        "character": "䯿",
        "letter": "classifier for trees, cabbages, plants etc",
        "pinyin": "kē"
    },
    "489": {
        "character": "科学",
        "letter": "science; scientific knowledge; scientific; CL:門|門 [mén],個|个[gè],種|䝅[zhǒng]",
        "pinyin": "kēxué"
    },
    "490": {
        "character": "咳嗽",
        "letter": "to cough; CL:陣|\t[zhèn]",
        "pinyin": "késou"
    },
    "491": {
        "character": "渴",
        "letter": "thirsty",
        "pinyin": "kě"
    },
    "492": {
        "character": "可\u0001",
        "letter": "amiable; cute; lovely",
        "pinyin": "kěài"
    },
    "493": {
        "character": "可怜",
        "letter": "pitiful; pathetic",
        "pinyin": "kělián"
    },
    "494": {
        "character": "可能",
        "letter": "might (happen); possible; probable; possibility;  25/56 probability; maybe; perhaps; CL:個|个[gè]",
        "pinyin": "kěnéng"
    },
    "495": {
        "character": "可是",
        "letter": "but; however",
        "pinyin": "kěshì"
    },
    "496": {
        "character": "可惜",
        "letter": "it is a pity; what a pity; (it's) too bad",
        "pinyin": "kěxī"
    },
    "497": {
        "character": "可以",
        "letter": "can; may; possible; able to",
        "pinyin": "kěyǐ"
    },
    "498": {
        "character": "刻",
        "letter": "quarter (hour); moment; to carve; to engrave; to cut; oppressive; classifier for short time intervals",
        "pinyin": "kè"
    },
    "499": {
        "character": "\u0004",
        "letter": "subject; course; class; lesson; CL:堂[táng],|節 [jié],門|門[mén]",
        "pinyin": "kè"
    },
    "500": {
        "character": "客人",
        "letter": "visitor; guest; customer; client; CL:位[wèi]",
        "pinyin": "kèrén"
    },
    "501": {
        "character": "肯定",
        "letter": "to be sure; to be certain; sure; certain; definite; to confirm; to affirm; affirmative",
        "pinyin": "kěndìng"
    },
    "502": {
        "character": "空气",
        "letter": "air; atmosphere",
        "pinyin": "kōngqì"
    },
    "503": {
        "character": "空\u0001",
        "letter": "air conditioning",
        "pinyin": "kōngtiáo"
    },
    "504": {
        "character": "恐怕",
        "letter": "fear; to dread; I'm afraid that...; perhaps; maybe",
        "pinyin": "kǒngpà"
    },
    "505": {
        "character": "口",
        "letter": "mouth; classifier for things with mouths (people, domestic animals, cannons, wells etc)",
        "pinyin": "kǒu"
    },
    "506": {
        "character": "哭",
        "letter": "to cry; to weep",
        "pinyin": "kū"
    },
    "507": {
        "character": "苦",
        "letter": "bitter; hardship; pain; to suffer; painstaking",
        "pinyin": "kǔ"
    },
    "508": {
        "character": "\u0005子",
        "letter": "trousers; pants; CL:條|条[tiáo]",
        "pinyin": "kùzi"
    },
    "509": {
        "character": "\u0006",
        "letter": "lump (of earth); chunk; piece; classifier for pieces of cloth, cake, soap etc; colloquial word for yuan (or other unit of currency such as Hong Kong or US dollar etc), usually as 塊錢|\u0006",
        "pinyin": "kuài"
    },
    "510": {
        "character": "快",
        "letter": "rapid; quick; speed; rate; soon; almost; to make haste; clever; sharp (of knives or wits); forthright; plain-spoken; gratified; pleased; pleasant",
        "pinyin": "kuài"
    },
    "511": {
        "character": "快\b",
        "letter": "happy; merry",
        "pinyin": "kuàilè"
    },
    "512": {
        "character": "䲳子",
        "letter": "chopsticks; CL:對|[duì],根[gēn],把[bǎ],雙|双 [shuāng]",
        "pinyin": "kuàizi"
    },
    "513": {
        "character": "\u0007",
        "letter": "lenient; wide; broad",
        "pinyin": "kuān"
    },
    "514": {
        "character": "困",
        "letter": "to trap; to surround; hard-pressed; stranded; destitute",
        "pinyin": "kùn"
    },
    "515": {
        "character": "困\t",
        "letter": "(financial etc) difficulty; problem; issue; CL:個|个  26/56 [gè]",
        "pinyin": "kùnnan"
    },
    "516": {
        "character": "大",
        "letter": "to expand; to enlarge; to broaden one's scope",
        "pinyin": "kuòdà"
    },
    "517": {
        "character": "拉",
        "letter": "to pull; to play (string instruments); to drag; to draw",
        "pinyin": "lā"
    },
    "518": {
        "character": "䭘䭓桶",
        "letter": "rubbish bin",
        "pinyin": "lājītǒng"
    },
    "519": {
        "character": "辣",
        "letter": "hot (spicy); pungent",
        "pinyin": "là"
    },
    "520": {
        "character": "来",
        "letter": "to come; to arrive; to come round; ever since; next",
        "pinyin": "lái"
    },
    "521": {
        "character": "来不及",
        "letter": "there's not enough time (to do sth); it's too late (to do sth)",
        "pinyin": "láibují"
    },
    "522": {
        "character": "来得及",
        "letter": "there's still time; able to do sth in time",
        "pinyin": "láidejí"
    },
    "523": {
        "character": "lán",
        "letter": "indigo plant",
        "pinyin": "blue;"
    },
    "524": {
        "character": "\u0004",
        "letter": "lazy",
        "pinyin": "lǎn"
    },
    "525": {
        "character": "浪\u0001",
        "letter": "to waste; to squander",
        "pinyin": "làngfèi"
    },
    "526": {
        "character": "浪漫",
        "letter": "romantic",
        "pinyin": "làngmàn"
    },
    "527": {
        "character": "老",
        "letter": "prefix used before the surname of a person or a numeral indicating the order of birth of the children in a family or to indicate affection or familiarity; old (of people); venerable (person); experienced; of long standing; always; all the time; of the past; very; outdated; (of meat etc) tough",
        "pinyin": "lǎo"
    },
    "528": {
        "character": "老虎",
        "letter": "tiger; CL:隻|只[zhī]",
        "pinyin": "lǎohǔ"
    },
    "529": {
        "character": "老\u0005",
        "letter": "teacher; CL:個|个[gè],位[wèi]",
        "pinyin": "lǎoshī"
    },
    "530": {
        "character": "了",
        "letter": "(modal particle intensifying preceding clause); (completed action marker)",
        "pinyin": "le"
    },
    "531": {
        "character": "累",
        "letter": "tired; weary; to strain; to wear out; to work hard",
        "pinyin": "lèi"
    },
    "532": {
        "character": "冷",
        "letter": "cold",
        "pinyin": "lěng"
    },
    "533": {
        "character": "冷静",
        "letter": "calm; cool-headed",
        "pinyin": "lěngjìng"
    },
    "534": {
        "character": "离",
        "letter": "to leave; to part from; to be away from; (in giving distances) from; without (sth); independent of; one of the eight trigrams of the Book of Changes representing fire (old)",
        "pinyin": "lí"
    },
    "535": {
        "character": "离䇖",
        "letter": "to depart; to leave  27/56",
        "pinyin": "líkāi"
    },
    "536": {
        "character": "里",
        "letter": "lining; interior; inside; internal; also written 裡|里 [lǐ]",
        "pinyin": "lǐ"
    },
    "537": {
        "character": "理\u0001",
        "letter": "a barber; hairdressing",
        "pinyin": "lǐfà"
    },
    "538": {
        "character": "理解",
        "letter": "to comprehend; to understand; comprehension; understanding",
        "pinyin": "lǐjiě"
    },
    "539": {
        "character": "理想",
        "letter": "a dream; an ideal; perfection; ideal; perfect; desirable; CL:個|个[gè]",
        "pinyin": "lǐxiǎng"
    },
    "540": {
        "character": "礼貌",
        "letter": "courtesy; manners",
        "pinyin": "lǐmào"
    },
    "541": {
        "character": "礼物",
        "letter": "gift; present; CL:件[jiàn],個|个[gè],份[fèn]",
        "pinyin": "lǐwù"
    },
    "542": {
        "character": "厉害",
        "letter": "difficult to deal with; difficult to endure; ferocious; radical; serious; terrible; violent; tremendous; awesome",
        "pinyin": "lìhai"
    },
    "543": {
        "character": "力气",
        "letter": "strength; CL:把[bǎ]",
        "pinyin": "lìqi"
    },
    "544": {
        "character": "例如",
        "letter": "for example; for instance; such as",
        "pinyin": "lìrú"
    },
    "545": {
        "character": "史",
        "letter": "history; CL:門|門[mén],段[duàn]",
        "pinyin": "lìshǐ"
    },
    "546": {
        "character": "liǎ",
        "letter": "(colloquial equivalent of 兩個|䫆个); both; some",
        "pinyin": "two"
    },
    "547": {
        "character": "\u0005",
        "letter": "to link; to join; to connect; continuously; in succession; including; (used with 也, 都 etc) even; company (military)",
        "pinyin": "lián"
    },
    "548": {
        "character": "\u0004系",
        "letter": "connection; contact; relation; in touch with; to integrate; to link; to touch",
        "pinyin": "liánxì"
    },
    "549": {
        "character": "\u0006",
        "letter": "face; CL:張|\u000b[zhāng],個|个[gè]",
        "pinyin": "liǎn"
    },
    "550": {
        "character": "\u0007",
        "letter": "exercise; drill; practice; CL:個|个[gè]",
        "pinyin": "liànxí"
    },
    "551": {
        "character": "凉快",
        "letter": "nice and cold; pleasantly cool",
        "pinyin": "liángkuai"
    },
    "552": {
        "character": "䫆",
        "letter": "both; two; ounce; some; a few; tael; weight equal to grams",
        "pinyin": "liǎng"
    },
    "553": {
        "character": "亮",
        "letter": "bright; clear; resonant; to shine; to show; to reveal",
        "pinyin": "liàng"
    },
    "554": {
        "character": "\b",
        "letter": "classifier for vehicles",
        "pinyin": "liàng"
    },
    "555": {
        "character": "聊天",
        "letter": "to chat; to gossip",
        "pinyin": "liáotiān"
    },
    "556": {
        "character": "了解",
        "letter": "to understand; to realize; to find out",
        "pinyin": "liǎojiě"
    },
    "557": {
        "character": "居",
        "letter": "neighbor; next door; CL:個|个[gè]  28/56",
        "pinyin": "línjū"
    },
    "558": {
        "character": "零",
        "letter": "zero; nought; zero sign; fractional; fragmentary; odd (of numbers); (placed between two numbers to indicate a smaller quantity followed by a larger one); fraction; (in mathematics) remainder (after division); extra; to wither and fall; to wither",
        "pinyin": "líng"
    },
    "559": {
        "character": "另外",
        "letter": "additional; in addition; besides; separate; other; moreover; furthermore",
        "pinyin": "lìngwài"
    },
    "560": {
        "character": "留",
        "letter": "to leave (eg a message); to retain; to stay; to remain; to keep; to preserve",
        "pinyin": "liú"
    },
    "561": {
        "character": "留学",
        "letter": "to study abroad",
        "pinyin": "liúxué"
    },
    "562": {
        "character": "流泪",
        "letter": "to shed tears",
        "pinyin": "liúlèi"
    },
    "563": {
        "character": "流利",
        "letter": "fluent",
        "pinyin": "liúlì"
    },
    "564": {
        "character": "流行",
        "letter": "to spread; to rage (of contagious disease); popular; fashionable; prevalent; (math.) manifold",
        "pinyin": "liúxíng"
    },
    "565": {
        "character": "六",
        "letter": "six;",
        "pinyin": "liù"
    },
    "566": {
        "character": "楼",
        "letter": "house with more than",
        "pinyin": "lóu"
    },
    "567": {
        "character": "story;",
        "letter": "building; floor; CL:層|\u0001[céng],座[zuò],棟|[dòng]",
        "pinyin": "storied"
    },
    "568": {
        "character": "路",
        "letter": "road; path; way; CL:條|条[tiáo]",
        "pinyin": "lù"
    },
    "569": {
        "character": "乱",
        "letter": "in confusion or disorder; in a confused state of mind; disorder; upheaval; riot; illicit sexual relations; to throw into disorder; to mix up; indiscriminate; random; arbitrary",
        "pinyin": "luàn"
    },
    "570": {
        "character": "旅游",
        "letter": "trip; journey; tourism; travel; tour",
        "pinyin": "lǚyóu"
    },
    "571": {
        "character": "\u0004",
        "letter": "green",
        "pinyin": "lǜ"
    },
    "572": {
        "character": "律\t",
        "letter": "lawyer",
        "pinyin": "lǜshī"
    },
    "573": {
        "character": "\u0005\u0005",
        "letter": "mama; mommy; mother; CL:個|个[gè],位[wèi]",
        "pinyin": "māma"
    },
    "574": {
        "character": "麻",
        "letter": "inconvenient; troublesome; to trouble or bother sb; to put sb to trouble",
        "pinyin": "máfan"
    },
    "575": {
        "character": "\u0006",
        "letter": "horse; abbr. for Malaysia 馬來西亞|\u0006来西",
        "pinyin": "mǎ"
    },
    "576": {
        "character": "\u0006虎",
        "letter": "careless; sloppy; negligent; skimpy",
        "pinyin": "mǎhu"
    },
    "577": {
        "character": "\u0006上",
        "letter": "at once, right away, immediately; lit. on horseback",
        "pinyin": "mǎshàng"
    },
    "578": {
        "character": "\u0007",
        "letter": "(question tag)",
        "pinyin": "ma"
    },
    "579": {
        "character": "\b",
        "letter": "to buy; to purchase  29/56",
        "pinyin": "mǎi"
    },
    "580": {
        "character": "\b",
        "letter": "to sell; to betray; to spare no effort; to show off or flaunt",
        "pinyin": "mài"
    },
    "581": {
        "character": "mǎn",
        "letter": "filled; packed; fully; completely; quite; to reach the limit; to satisfy; satisfied; contented; to fill; abbr. for Manchurian",
        "pinyin": "full;"
    },
    "582": {
        "character": "意",
        "letter": "satisfied; pleased; to one's satisfaction",
        "pinyin": "mǎnyì"
    },
    "583": {
        "character": "慢",
        "letter": "slow",
        "pinyin": "màn"
    },
    "584": {
        "character": "忙",
        "letter": "busy; hurriedly",
        "pinyin": "máng"
    },
    "585": {
        "character": "猫",
        "letter": "cat; CL:隻|只[zhī]",
        "pinyin": "māo"
    },
    "586": {
        "character": "毛巾",
        "letter": "towel; CL:條|条[tiáo]",
        "pinyin": "máojīn"
    },
    "587": {
        "character": "帽子",
        "letter": "hat; cap; CL:頂|[dǐng]",
        "pinyin": "màozi"
    },
    "588": {
        "character": "没",
        "letter": "(negative prefix for verbs); have not; not",
        "pinyin": "méi"
    },
    "589": {
        "character": "没䎔系",
        "letter": "it doesn't matter",
        "pinyin": "méiguānxi"
    },
    "590": {
        "character": "每",
        "letter": "each; every",
        "pinyin": "měi"
    },
    "591": {
        "character": "美\u0006",
        "letter": "beautiful",
        "pinyin": "měilì"
    },
    "592": {
        "character": "妹妹",
        "letter": "younger sister; fig. younger woman (esp. girl friend or rival); CL:個|个[gè]",
        "pinyin": "mèimei"
    },
    "593": {
        "character": "門",
        "letter": "gate; door; CL:扇[shàn]; gateway; doorway; CL: 個|个[gè]; opening; valve; switch; way to do something; knack; family; house; (religious) sect; school (of thought); class; category; phylum or division (taxonomy); classifier for large guns; classifier for lessons, subjects, branches of technology",
        "pinyin": "mén"
    },
    "594": {
        "character": "梦",
        "letter": "dream; CL:場|\u0001[cháng],個|个[gè]",
        "pinyin": "mèng"
    },
    "595": {
        "character": "米",
        "letter": "rice; CL:粒[lì]; meter (classifier)",
        "pinyin": "mǐ"
    },
    "596": {
        "character": "米",
        "letter": "(cooked) rice",
        "pinyin": "mǐfàn"
    },
    "597": {
        "character": "密\u0007",
        "letter": "code; secret code; password; pin number",
        "pinyin": "mìmǎ"
    },
    "598": {
        "character": "免\u0004",
        "letter": "free (of charge)",
        "pinyin": "miǎnfèi"
    },
    "599": {
        "character": "面包",
        "letter": "bread; CL:片[piàn],袋[dài],塊|\u0005[kuài]",
        "pinyin": "miànbāo"
    },
    "600": {
        "character": "面条",
        "letter": "noodles",
        "pinyin": "miàntiáo"
    },
    "601": {
        "character": "民族",
        "letter": "nationality; ethnic group; CL:個|个[gè]  30/56",
        "pinyin": "mínzú"
    },
    "602": {
        "character": "明白",
        "letter": "clear; obvious; unequivocal; to understand; to realize",
        "pinyin": "míngbai"
    },
    "603": {
        "character": "明天",
        "letter": "tomorrow",
        "pinyin": "míngtiān"
    },
    "604": {
        "character": "名字",
        "letter": "name (of a person or thing); CL:個|个[gè]",
        "pinyin": "míngzi"
    },
    "605": {
        "character": "母",
        "letter": "mother; also pr. with light tone [mǔ qin]; CL:個| 个[gè]",
        "pinyin": "mǔqīn"
    },
    "606": {
        "character": "目的",
        "letter": "purpose; aim; goal; target; objective; CL:個|个[gè]",
        "pinyin": "mùdì"
    },
    "607": {
        "character": "拿",
        "letter": "to hold; to seize; to catch; to apprehend; to take",
        "pinyin": "ná"
    },
    "608": {
        "character": "䬟",
        "letter": "how; which",
        "pinyin": "nǎ"
    },
    "609": {
        "character": "䬟儿",
        "letter": "where?; wherever; anywhere",
        "pinyin": "nǎr"
    },
    "610": {
        "character": "那",
        "letter": "that; those; then (in that case); commonly pr. nèi before a classifier, esp. in Beijing",
        "pinyin": "nà"
    },
    "611": {
        "character": "那儿",
        "letter": "there",
        "pinyin": "nàr"
    },
    "612": {
        "character": "䑊䑊",
        "letter": "(informal) father's mother; paternal grandmother; CL:位[wèi]",
        "pinyin": "nǎinai"
    },
    "613": {
        "character": "耐心",
        "letter": "patient (adjective)",
        "pinyin": "nàixīn"
    },
    "614": {
        "character": "南",
        "letter": "south",
        "pinyin": "nán"
    },
    "615": {
        "character": "nán",
        "letter": "(to...); problem; difficulty; difficult; not good",
        "pinyin": "difficult"
    },
    "616": {
        "character": "道",
        "letter": "don't tell me ...; could it be that...?",
        "pinyin": "nándào"
    },
    "617": {
        "character": "\u0001",
        "letter": "feel sorry; be grieved",
        "pinyin": "nánguò"
    },
    "618": {
        "character": "受",
        "letter": "to feel unwell; to suffer pain; to be difficult to bear",
        "pinyin": "nánshòu"
    },
    "619": {
        "character": "男人",
        "letter": "a man; a male; men; CL:個|个[gè]",
        "pinyin": "nánrén"
    },
    "620": {
        "character": "䏆",
        "letter": "(question particle for subjects already mentioned)",
        "pinyin": "ne"
    },
    "621": {
        "character": "内",
        "letter": "inside; inner; internal; within; interior",
        "pinyin": "nèi"
    },
    "622": {
        "character": "内容",
        "letter": "content; substance; details; CL:個|个[gè],項|\u0004 [xiàng]",
        "pinyin": "nèiróng"
    },
    "623": {
        "character": "能",
        "letter": "to be able to; to be capable of; ability; capability; able; capable; can possibly; (usually used in the negative) to have the possibility of",
        "pinyin": "néng"
    },
    "624": {
        "character": "能力",
        "letter": "capability; capable; able; ability; CL:個|个[gè]  31/56",
        "pinyin": "nénglì"
    },
    "625": {
        "character": "你",
        "letter": "you (informal, as opposed to polite 䓟[nín])",
        "pinyin": "nǐ"
    },
    "626": {
        "character": "年",
        "letter": "year; CL:個|个[gè]",
        "pinyin": "nián"
    },
    "627": {
        "character": "年",
        "letter": "grade; CL:個|个[gè]",
        "pinyin": "niánjí"
    },
    "628": {
        "character": "年",
        "letter": "(a person's) age; CL:把[bǎ],個|个[gè]",
        "pinyin": "niánlíng"
    },
    "629": {
        "character": "年\b",
        "letter": "young",
        "pinyin": "niánqīng"
    },
    "630": {
        "character": "\u0004",
        "letter": "bird; CL:隻|只[zhī],群[qún]",
        "pinyin": "niǎo"
    },
    "631": {
        "character": "䓟",
        "letter": "you (polite, as opposed to informal 你[nǐ])",
        "pinyin": "nín"
    },
    "632": {
        "character": "牛䑊",
        "letter": "cow's milk; CL:瓶[píng],杯[bēi]",
        "pinyin": "niúnǎi"
    },
    "633": {
        "character": "\u0005村",
        "letter": "rural area; village; CL:個|个[gè]",
        "pinyin": "nóngcūn"
    },
    "634": {
        "character": "弄",
        "letter": "to do; to manage; to handle; to play with; to fool with; to mess with; to fix; to toy with",
        "pinyin": "nòng"
    },
    "635": {
        "character": "努力",
        "letter": "great effort; to strive; to try hard",
        "pinyin": "nǔlì"
    },
    "636": {
        "character": "暖和",
        "letter": "warm; nice and warm",
        "pinyin": "nuǎnhuo"
    },
    "637": {
        "character": "女儿",
        "letter": "daughter",
        "pinyin": "nǚér"
    },
    "638": {
        "character": "女人",
        "letter": "woman",
        "pinyin": "nǚrén"
    },
    "639": {
        "character": "偶尔",
        "letter": "occasionally; once in a while; sometimes",
        "pinyin": "ǒuěr"
    },
    "640": {
        "character": "爬山",
        "letter": "to climb a mountain; to mountaineer; hiking; mountaineering",
        "pinyin": "páshān"
    },
    "641": {
        "character": "排列",
        "letter": "array; arrangement; permutation (i.e. ordered choice of n elements out of m)",
        "pinyin": "páiliè"
    },
    "642": {
        "character": "\u0006子",
        "letter": "tray; plate; dish; CL:個|个[gè]",
        "pinyin": "pánzi"
    },
    "643": {
        "character": "判断",
        "letter": "to decide; to determine; CL:個|个[gè]",
        "pinyin": "pànduàn"
    },
    "644": {
        "character": "旁\u0001",
        "letter": "lateral; side; to the side; beside",
        "pinyin": "pángbiān"
    },
    "645": {
        "character": "胖",
        "letter": "fat; plump",
        "pinyin": "pàng"
    },
    "646": {
        "character": "䋯步",
        "letter": "to walk quickly; to march; to run",
        "pinyin": "pǎobù"
    },
    "647": {
        "character": "陪",
        "letter": "to accompany; to keep sb company",
        "pinyin": "péi"
    },
    "648": {
        "character": "朋友",
        "letter": "friend; CL:個|个[gè],位[wèi]",
        "pinyin": "péngyou"
    },
    "649": {
        "character": "批\u0007",
        "letter": "to criticize; criticism; CL:個|个[gè]",
        "pinyin": "pīpíng"
    },
    "650": {
        "character": "皮䟭",
        "letter": "skin; CL:種|䝅[zhǒng]  32/56",
        "pinyin": "pífū"
    },
    "651": {
        "character": "䏜酒",
        "letter": "beer; CL:杯[bēi],瓶[píng],罐[guàn],桶[tǒng],缸 [gāng]",
        "pinyin": "píjiǔ"
    },
    "652": {
        "character": "脾气",
        "letter": "temperament; disposition; temper; CL:個|个[gè]",
        "pinyin": "píqì"
    },
    "653": {
        "character": "篇",
        "letter": "sheet; piece of writing; bound set of bamboo slips used for record keeping (old); classifier for written items: chapter, article",
        "pinyin": "piān"
    },
    "654": {
        "character": "便宜",
        "letter": "small advantages; to let sb off lightly; cheap; inexpensive",
        "pinyin": "piányi"
    },
    "655": {
        "character": "\u0004",
        "letter": "to cheat; to swindle; to deceive; to fool; to hoodwink; to trick",
        "pinyin": "piàn"
    },
    "656": {
        "character": "票",
        "letter": "ticket; ballot; bank note; CL:張|\b[zhāng]; person held for ransom; amateur performance of Chinese opera; classifier for shipments and business transactions (topolect)",
        "pinyin": "piào"
    },
    "657": {
        "character": "漂亮",
        "letter": "pretty; beautiful",
        "pinyin": "piàoliang"
    },
    "658": {
        "character": "\u0005球",
        "letter": "table tennis; ping-pong; ping pong; table tennis ball; CL:個|个[gè]",
        "pinyin": "pīngpāngqiú"
    },
    "659": {
        "character": "苹果",
        "letter": "apple; CL:個|个[gè],顆|[kē]",
        "pinyin": "píngguǒ"
    },
    "660": {
        "character": "平\u0007",
        "letter": "in normal times; in peacetime",
        "pinyin": "píngshí"
    },
    "661": {
        "character": "瓶子",
        "letter": "bottle; CL:個|个[gè]",
        "pinyin": "píngzi"
    },
    "662": {
        "character": "破",
        "letter": "broken; damaged; worn out; to break, split or cleave; to get rid of; to destroy; to break with; to defeat; to capture (a city etc); to expose the truth of",
        "pinyin": "pò"
    },
    "663": {
        "character": "葡萄",
        "letter": "grape",
        "pinyin": "pútao"
    },
    "664": {
        "character": "普遍",
        "letter": "universal; general; widespread; common",
        "pinyin": "pǔbiàn"
    },
    "665": {
        "character": "普通\u0001",
        "letter": "Mandarin (common language); Putonghua (common speech of the Chinese language); ordinary speech",
        "pinyin": "pǔtōnghuà"
    },
    "666": {
        "character": "七",
        "letter": "seven;",
        "pinyin": "qī"
    },
    "667": {
        "character": "妻子",
        "letter": "wife; CL:個|个[gè]",
        "pinyin": "qīzi"
    },
    "668": {
        "character": "\u0006",
        "letter": "to ride (an animal or bike); to sit astride",
        "pinyin": "qí"
    },
    "669": {
        "character": "其次",
        "letter": "next; secondly  33/56",
        "pinyin": "qícì"
    },
    "670": {
        "character": "其",
        "letter": "actually, in fact, really",
        "pinyin": "qíshí"
    },
    "671": {
        "character": "其他",
        "letter": "other; the others; else; other than (that person); in addition to the person mentioned above",
        "pinyin": "qítā"
    },
    "672": {
        "character": "其中",
        "letter": "among; in; included among these",
        "pinyin": "qízhōng"
    },
    "673": {
        "character": "奇怪",
        "letter": "strange; odd",
        "pinyin": "qíguài"
    },
    "674": {
        "character": "起床",
        "letter": "to get up",
        "pinyin": "qǐchuáng"
    },
    "675": {
        "character": "起\u0001",
        "letter": "to take off (in an airplane)",
        "pinyin": "qǐfēi"
    },
    "676": {
        "character": "起来",
        "letter": "beginning or continuing an action; upward movement; stand up",
        "pinyin": "qǐlai"
    },
    "677": {
        "character": "气候",
        "letter": "climate; atmosphere; situation; CL:種|䝅[zhǒng]",
        "pinyin": "qìhòu"
    },
    "678": {
        "character": "千",
        "letter": "thousand",
        "pinyin": "qiān"
    },
    "679": {
        "character": "千万",
        "letter": "ten million; countless; many; one must by all means",
        "pinyin": "qiānwàn"
    },
    "680": {
        "character": "笔",
        "letter": "(lead) pencil; CL:支[zhī],枝[zhī],桿|杆[gǎn]",
        "pinyin": "qiānbǐ"
    },
    "681": {
        "character": "\u0004\u000b",
        "letter": "visa; certificate; to certify; CL:個|个[gè]",
        "pinyin": "qiānzhèng"
    },
    "682": {
        "character": "\u0005",
        "letter": "coin; money; CL:筆|笔[bǐ]",
        "pinyin": "qián"
    },
    "683": {
        "character": "前面",
        "letter": "ahead; in front; preceding; above",
        "pinyin": "qiánmiàn"
    },
    "684": {
        "character": "\u0006",
        "letter": "wall; CL:面[miàn],堵[dǔ]",
        "pinyin": "qiáng"
    },
    "685": {
        "character": "敲",
        "letter": "extort; knock; to strike; to knock (at a door); to hit",
        "pinyin": "qiāo"
    },
    "686": {
        "character": "\u0007",
        "letter": "bridge; CL:座[zuò]",
        "pinyin": "qiáo"
    },
    "687": {
        "character": "巧克力",
        "letter": "chocolate (loanword); CL:塊|[kuài]",
        "pinyin": "qiǎokèlì"
    },
    "688": {
        "character": "\b戚",
        "letter": "a relative (i.e. family relation); CL:門|門[mén],個| 个[gè],位[wèi]",
        "pinyin": "qīnqi"
    },
    "689": {
        "character": "qīng",
        "letter": "easy; gentle; soft; reckless; unimportant; frivolous; small in number; unstressed; neutral",
        "pinyin": "light;"
    },
    "690": {
        "character": "松",
        "letter": "gentle; relaxed",
        "pinyin": "qīngsōng"
    },
    "691": {
        "character": "清楚",
        "letter": "clear; clearly understood; distinct",
        "pinyin": "qīngchu"
    },
    "692": {
        "character": "晴",
        "letter": "clear; fine (weather)",
        "pinyin": "qíng"
    },
    "693": {
        "character": "情况",
        "letter": "circumstances; state of affairs; situation; CL:個|个 [gè],種|䝅[zhǒng]  34/56",
        "pinyin": "qíngkuàng"
    },
    "694": {
        "character": "qǐng",
        "letter": "ask; to invite; please (do sth); to treat (to a meal etc); to request",
        "pinyin": "to"
    },
    "695": {
        "character": "假",
        "letter": "ask for time off",
        "pinyin": "qǐngjià"
    },
    "696": {
        "character": "客",
        "letter": "give a dinner party; entertain guests; invite to dinner",
        "pinyin": "qǐngkè"
    },
    "697": {
        "character": "qióng",
        "letter": "poor",
        "pinyin": "exhausted;"
    },
    "698": {
        "character": "秋",
        "letter": "autumn; fall; harvest time; a swing; surname Qiu",
        "pinyin": "qiū"
    },
    "699": {
        "character": "区䫲",
        "letter": "difference; to distinguish; to discriminate; to make a distinction; CL:個|个[gè]",
        "pinyin": "qūbié"
    },
    "700": {
        "character": "取",
        "letter": "to take; to get; to choose; to fetch",
        "pinyin": "qǔ"
    },
    "701": {
        "character": "去",
        "letter": "to go; to go to (a place); to cause to go or send (sb); to remove; to get rid of; (when used either before or after a verb) to go in order to do sth; to be apart from in space or time; (after a verb of motion indicates movement away from the speaker); (used after certain verbs to indicate detachment or separation); (of a time or an event etc) just passed or elapsed",
        "pinyin": "qù"
    },
    "702": {
        "character": "去年",
        "letter": "last year",
        "pinyin": "qùnián"
    },
    "703": {
        "character": "全部",
        "letter": "whole; entire; complete",
        "pinyin": "quánbù"
    },
    "704": {
        "character": "缺点",
        "letter": "weak point; fault; shortcoming; CL:個|个[gè]",
        "pinyin": "quēdiǎn"
    },
    "705": {
        "character": "缺少",
        "letter": "lack; shortage of; shortfall; to be short (of); to lack",
        "pinyin": "quēshǎo"
    },
    "706": {
        "character": "却",
        "letter": "but; yet; however; while; to go back; to decline; to retreat; nevertheless; even though",
        "pinyin": "què"
    },
    "707": {
        "character": "䉯\u0006",
        "letter": "indeed; really; reliable; real; true",
        "pinyin": "quèshí"
    },
    "708": {
        "character": "群",
        "letter": "group; crowd; flock, herd, pack etc",
        "pinyin": "qún"
    },
    "709": {
        "character": "裙子",
        "letter": "skirt; CL:條|条[tiáo]",
        "pinyin": "qúnzi"
    },
    "710": {
        "character": "然而",
        "letter": "however; yet; but",
        "pinyin": "ránér"
    },
    "711": {
        "character": "然后",
        "letter": "after; then (afterwards); after that; afterwards",
        "pinyin": "ránhòu"
    },
    "712": {
        "character": "\u0004",
        "letter": "to yield; to permit; to let sb do sth; to have sb do sth",
        "pinyin": "ràng"
    },
    "713": {
        "character": "\u0005",
        "letter": "heat; to heat up; fervent; hot (of weather); warm up",
        "pinyin": "rè"
    },
    "714": {
        "character": "\u0005\u0001",
        "letter": "bustling with noise and excitement; lively  35/56",
        "pinyin": "rènao"
    },
    "715": {
        "character": "\u0004情",
        "letter": "cordial; enthusiastic; passion; passionate; passionately",
        "pinyin": "rèqíng"
    },
    "716": {
        "character": "人",
        "letter": "man; person; people; CL:個|个[gè],位[wèi]",
        "pinyin": "rén"
    },
    "717": {
        "character": "人民\u0001",
        "letter": "Renminbi (RMB); Chinese Yuan (CNY)",
        "pinyin": "rénmínbì"
    },
    "718": {
        "character": "任何",
        "letter": "any; whatever; whichever; whatsoever",
        "pinyin": "rènhé"
    },
    "719": {
        "character": "任\f",
        "letter": "mission; assignment; task; duty; role; CL:項| [xiàng],個|个[gè]",
        "pinyin": "rènwu"
    },
    "720": {
        "character": "\u0005",
        "letter": "to know; to recognize; to be familiar with; acquainted with sth; knowledge; understanding; awareness; cognition",
        "pinyin": "rènshi"
    },
    "721": {
        "character": "\u0005\u000b",
        "letter": "to believe; to think; to consider; to feel",
        "pinyin": "rènwéi"
    },
    "722": {
        "character": "\u0005真",
        "letter": "conscientious; earnest; serious; to take seriously; to take to heart",
        "pinyin": "rènzhēn"
    },
    "723": {
        "character": "\u0006",
        "letter": "to throw; to throw away",
        "pinyin": "rēng"
    },
    "724": {
        "character": "仍然",
        "letter": "still; yet",
        "pinyin": "réngrán"
    },
    "725": {
        "character": "日",
        "letter": "sun; day; date, day of the month; abbr. for 日本| 日本 Japan",
        "pinyin": "rì"
    },
    "726": {
        "character": "日",
        "letter": "diary; CL:則|\u000e[zé],本[běn],篇[piān]",
        "pinyin": "rìjì"
    },
    "727": {
        "character": "容易",
        "letter": "easy; likely; liable (to)",
        "pinyin": "róngyì"
    },
    "728": {
        "character": "如果",
        "letter": "if; in case; in the event that",
        "pinyin": "rúguǒ"
    },
    "729": {
        "character": "入口",
        "letter": "entrance",
        "pinyin": "rùkǒu"
    },
    "730": {
        "character": "\u0007",
        "letter": "soft; flexible",
        "pinyin": "ruǎn"
    },
    "731": {
        "character": "三",
        "letter": "three;",
        "pinyin": "sān"
    },
    "732": {
        "character": "\b",
        "letter": "umbrella; parasol; CL:把[bǎ]",
        "pinyin": "sǎn"
    },
    "733": {
        "character": "散步",
        "letter": "to take a walk; to go for a walk",
        "pinyin": "sànbù"
    },
    "734": {
        "character": "森林",
        "letter": "forest; CL:片[piàn]",
        "pinyin": "sēnlín"
    },
    "735": {
        "character": "沙",
        "letter": "sofa; CL:條|条[tiáo],張|\u000f[zhāng]",
        "pinyin": "shāfā"
    },
    "736": {
        "character": "商店",
        "letter": "store; shop; CL:家[jiā],個|个[gè]",
        "pinyin": "shāngdiàn"
    },
    "737": {
        "character": "商量",
        "letter": "to consult; to talk over; to discuss",
        "pinyin": "shāngliang"
    },
    "738": {
        "character": "心",
        "letter": "to grieve; broken-hearted",
        "pinyin": "shāngxīn"
    },
    "739": {
        "character": "上",
        "letter": "on; on top; upon; first (of multiple parts);  36/56 previous; last; upper; higher; above; to climb; to go into; to go up; to attend (class or university)",
        "pinyin": "shàng"
    },
    "740": {
        "character": "上班",
        "letter": "to go to work; to be on duty; to start work; to go to the office",
        "pinyin": "shàngbān"
    },
    "741": {
        "character": "上网",
        "letter": "to be on the internet; to stretch a net (in a sports game or for covering sth); to be netted (of fish)",
        "pinyin": "shàngwǎng"
    },
    "742": {
        "character": "上午",
        "letter": "morning; CL:個|个[gè]",
        "pinyin": "shàngwǔ"
    },
    "743": {
        "character": "稍微",
        "letter": "a little bit",
        "pinyin": "shāowēi"
    },
    "744": {
        "character": "少",
        "letter": "few; little; lack",
        "pinyin": "shǎo"
    },
    "745": {
        "character": "社会",
        "letter": "society; CL:個|个[gè]",
        "pinyin": "shèhuì"
    },
    "746": {
        "character": "shéi",
        "letter": "also pronounced shuí",
        "pinyin": "who;"
    },
    "747": {
        "character": "深",
        "letter": "close; deep; late; profound; dark (of color, water etc)",
        "pinyin": "shēn"
    },
    "748": {
        "character": "申",
        "letter": "to apply for sth; application (form etc); CL:份[fèn]",
        "pinyin": "shēnqǐng"
    },
    "749": {
        "character": "身体",
        "letter": "(human) body; health; CL:個|个[gè]",
        "pinyin": "shēntǐ"
    },
    "750": {
        "character": "什么",
        "letter": "what?; who?; something; anything",
        "pinyin": "shénme"
    },
    "751": {
        "character": "甚至",
        "letter": "even; so much so that",
        "pinyin": "shènzhì"
    },
    "752": {
        "character": "生病",
        "letter": "to fall ill; to sicken",
        "pinyin": "shēngbìng"
    },
    "753": {
        "character": "生活",
        "letter": "life; activity; to live; livelihood",
        "pinyin": "shēnghuó"
    },
    "754": {
        "character": "生命",
        "letter": "life; living; biological; CL:個|个[gè]",
        "pinyin": "shēngmìng"
    },
    "755": {
        "character": "生气",
        "letter": "angry; mad; offended; animated; to get angry; to be enraged; to take offense; animation",
        "pinyin": "shēngqì"
    },
    "756": {
        "character": "生日",
        "letter": "birthday; CL:個|个[gè]",
        "pinyin": "shēngrì"
    },
    "757": {
        "character": "声音",
        "letter": "voice; sound; CL:個|个[gè]",
        "pinyin": "shēngyīn"
    },
    "758": {
        "character": "省",
        "letter": "to save; to economize; to do without; to omit; to leave out; province; CL:個|个[gè]",
        "pinyin": "shěng"
    },
    "759": {
        "character": "剩",
        "letter": "to remain; to be left; to have as remainder",
        "pinyin": "shèng"
    },
    "760": {
        "character": "失\u0001",
        "letter": "to be defeated; to lose; to fail (e.g. experiments); failure; defeat; CL:次[cì]",
        "pinyin": "shībài"
    },
    "761": {
        "character": "失望",
        "letter": "disappointed; to lose hope; to despair  37/56",
        "pinyin": "shīwàng"
    },
    "762": {
        "character": "\u0007傅",
        "letter": "master; qualified worker; respectful form of address for older men; CL:個|个[gè],位[wèi],名 [míng]",
        "pinyin": "shīfu"
    },
    "763": {
        "character": "湿\u0006",
        "letter": "moist",
        "pinyin": "shīrùn"
    },
    "764": {
        "character": "\b子",
        "letter": "lion; CL:隻|只[zhī],頭|\f[tóu]; Leo (star sign)",
        "pinyin": "shīzi"
    },
    "765": {
        "character": "十",
        "letter": "ten;",
        "pinyin": "shí"
    },
    "766": {
        "character": "十分",
        "letter": "to divide into ten equal parts; very; hundred percent; completely; extremely; utterly; absolutely",
        "pinyin": "shífēn"
    },
    "767": {
        "character": "候",
        "letter": "time; length of time; moment; period",
        "pinyin": "shíhou"
    },
    "768": {
        "character": "\u0005",
        "letter": "time; period; CL:段[duàn]",
        "pinyin": "shíjiān"
    },
    "769": {
        "character": "shíjì",
        "letter": "reality; practice",
        "pinyin": "actual;"
    },
    "770": {
        "character": "在",
        "letter": "in reality; honestly; really; verily; concrete",
        "pinyin": "shízài"
    },
    "771": {
        "character": "食品",
        "letter": "foodstuff; food; provisions; CL:種|䝅[zhǒng]",
        "pinyin": "shípǐn"
    },
    "772": {
        "character": "使",
        "letter": "to make; to cause; to enable; to use; to employ; to send; to instruct sb to do sth; envoy; messenger",
        "pinyin": "shǐ"
    },
    "773": {
        "character": "使用",
        "letter": "to use; to employ; to apply; to make use of",
        "pinyin": "shǐyòng"
    },
    "774": {
        "character": "是",
        "letter": "is; are; am; yes; to be",
        "pinyin": "shì"
    },
    "775": {
        "character": "shì",
        "letter": "test; to try; experiment; examination; test",
        "pinyin": "to"
    },
    "776": {
        "character": "市\u0001",
        "letter": "market place; market (also in abstract); abbr. for 超級市場|超市\u0001 supermarket; CL:個|个[gè]",
        "pinyin": "shìchǎng"
    },
    "777": {
        "character": "适合",
        "letter": "to fit; to suit",
        "pinyin": "shìhé"
    },
    "778": {
        "character": "适",
        "letter": "to suit; to fit; to be suitable; to adapt; to get used to sth",
        "pinyin": "shìyìng"
    },
    "779": {
        "character": "世\u0004",
        "letter": "century; CL:個|个[gè]",
        "pinyin": "shìjì"
    },
    "780": {
        "character": "世界",
        "letter": "world; CL:個|个[gè]",
        "pinyin": "shìjiè"
    },
    "781": {
        "character": "事情",
        "letter": "affair; matter; thing; business; CL:件[jiàn],樁|\u000e [zhuāng]",
        "pinyin": "shìqíng"
    },
    "782": {
        "character": "收",
        "letter": "to receive; to accept; to collect; in care of (used on address line after name)",
        "pinyin": "shōu"
    },
    "783": {
        "character": "收入",
        "letter": "to take in; income; revenue; CL:筆|笔[bǐ],個|个 [gè]  38/56",
        "pinyin": "shōurù"
    },
    "784": {
        "character": "收拾",
        "letter": "to put in order; to tidy up; to pack; to repair; to punish (colloquial); to manage",
        "pinyin": "shōushi"
    },
    "785": {
        "character": "手表",
        "letter": "wrist watch; CL:塊|[kuài],隻|只[zhī],個|个[gè]",
        "pinyin": "shǒubiǎo"
    },
    "786": {
        "character": "手机",
        "letter": "cell phone; cellular phone; mobile phone; CL:部 [bù]",
        "pinyin": "shǒujī"
    },
    "787": {
        "character": "首都",
        "letter": "capital (city); CL:個|个[gè]",
        "pinyin": "shǒudū"
    },
    "788": {
        "character": "首先",
        "letter": "first (of all); in the first place",
        "pinyin": "shǒuxiān"
    },
    "789": {
        "character": "瘦",
        "letter": "tight; thin; lean",
        "pinyin": "shòu"
    },
    "790": {
        "character": "受不了",
        "letter": "unbearable; unable to endure; can't stand",
        "pinyin": "shòubùliǎo"
    },
    "791": {
        "character": "受到",
        "letter": "to receive; to suffer; obtained; given",
        "pinyin": "shòudào"
    },
    "792": {
        "character": "售\u0001\b",
        "letter": "salesperson; CL:個|个[gè]",
        "pinyin": "shòuhuòyuán"
    },
    "793": {
        "character": "\u0005",
        "letter": "book; letter; CL:本[běn],冊|册[cè],部[bù]; see also 書經|\u0005 Book of History",
        "pinyin": "shū"
    },
    "794": {
        "character": "\u0004",
        "letter": "to lose; to transport; to donate; to enter (a password)",
        "pinyin": "shū"
    },
    "795": {
        "character": "舒服",
        "letter": "comfortable; feeling well",
        "pinyin": "shūfu"
    },
    "796": {
        "character": "叔叔",
        "letter": "father's younger brother; uncle; Taiwan pr. shú shu; CL:個|个[gè]",
        "pinyin": "shūshu"
    },
    "797": {
        "character": "熟悉",
        "letter": "to be familiar with; to know well",
        "pinyin": "shúxī"
    },
    "798": {
        "character": "\u0006",
        "letter": "tree; CL:䯿[kē]",
        "pinyin": "shù"
    },
    "799": {
        "character": "数量",
        "letter": "amount; quantity; CL:個|个[gè]",
        "pinyin": "shùliàng"
    },
    "800": {
        "character": "数学",
        "letter": "mathematics; mathematical",
        "pinyin": "shùxué"
    },
    "801": {
        "character": "数字",
        "letter": "numeral; digit; number; figure; amount; digital (electronics etc); CL:個|个[gè]",
        "pinyin": "shùzì"
    },
    "802": {
        "character": "刷牙",
        "letter": "to brush teeth",
        "pinyin": "shuāyá"
    },
    "803": {
        "character": "\u0007",
        "letter": "handsome; graceful; smart; commander in chief",
        "pinyin": "shuài"
    },
    "804": {
        "character": "双",
        "letter": "two; double; pair; both",
        "pinyin": "shuāng"
    },
    "805": {
        "character": "水",
        "letter": "water; river; liquid; beverage; additional charges or income; (of clothes) classifier for number of washes",
        "pinyin": "shuǐ"
    },
    "806": {
        "character": "水果",
        "letter": "fruit; CL:個|个[gè]  39/56",
        "pinyin": "shuǐguǒ"
    },
    "807": {
        "character": "水平",
        "letter": "level (of achievement etc); standard; horizontal",
        "pinyin": "shuǐpíng"
    },
    "808": {
        "character": "睡",
        "letter": "to go to bed; to go to sleep",
        "pinyin": "shuìjiào"
    },
    "809": {
        "character": "便",
        "letter": "conveniently; in passing; without much extra effort",
        "pinyin": "shùnbiàn"
    },
    "810": {
        "character": "利",
        "letter": "smoothly; without a hitch",
        "pinyin": "shùnlì"
    },
    "811": {
        "character": "序",
        "letter": "sequence; order",
        "pinyin": "shùnxù"
    },
    "812": {
        "character": "\u0004\u0001",
        "letter": "to speak; to say; to talk; to gossip; to tell stories; talk; word",
        "pinyin": "shuōhuà"
    },
    "813": {
        "character": "\u0004明",
        "letter": "to explain; to illustrate; explanation; directions; caption; CL:個|个[gè]",
        "pinyin": "shuōmíng"
    },
    "814": {
        "character": "\u0005士",
        "letter": "master's degree; learned person",
        "pinyin": "shuòshì"
    },
    "815": {
        "character": "司机",
        "letter": "chauffeur; driver; CL:個|个[gè]",
        "pinyin": "sījī"
    },
    "816": {
        "character": "死",
        "letter": "to die; impassable; uncrossable; inflexible; rigid; extremely",
        "pinyin": "sǐ"
    },
    "817": {
        "character": "四",
        "letter": "four;",
        "pinyin": "sì"
    },
    "818": {
        "character": "送",
        "letter": "to deliver; to carry; to give (as a present); to present (with); to see off; to send",
        "pinyin": "sòng"
    },
    "819": {
        "character": "速度",
        "letter": "speed; rate; velocity; CL:個|个[gè]",
        "pinyin": "sùdù"
    },
    "820": {
        "character": "塑料袋",
        "letter": "plastic bag",
        "pinyin": "sùliàodài"
    },
    "821": {
        "character": "酸",
        "letter": "sour; sore; ache; acid",
        "pinyin": "suān"
    },
    "822": {
        "character": "算",
        "letter": "regard as; to figure; to calculate; to compute",
        "pinyin": "suàn"
    },
    "823": {
        "character": "虽然",
        "letter": "although; even though; even if",
        "pinyin": "suīrán"
    },
    "824": {
        "character": "随便",
        "letter": "as one wishes; as one pleases; at random; negligent; casual; wanton",
        "pinyin": "suíbiàn"
    },
    "825": {
        "character": "随着",
        "letter": "along with; in the wake of; following",
        "pinyin": "suízhe"
    },
    "826": {
        "character": "\u0006",
        "letter": "classifier for years (of age); year; year (of crop harvests)",
        "pinyin": "suì"
    },
    "827": {
        "character": "\u0007子",
        "letter": "grandson; son's son",
        "pinyin": "sūnzi"
    },
    "828": {
        "character": "所以",
        "letter": "therefore; as a result; so",
        "pinyin": "suǒyǐ"
    },
    "829": {
        "character": "所有",
        "letter": "all; to have; to possess; to own",
        "pinyin": "suǒyǒu"
    },
    "830": {
        "character": "他",
        "letter": "he or him; (used for either sex when the sex is unknown or unimportant); (used before sb's name for emphasis); (used as a meaningless mock object); other; another  40/56",
        "pinyin": "tā"
    },
    "831": {
        "character": "䭪",
        "letter": "she",
        "pinyin": "tā"
    },
    "832": {
        "character": "它",
        "letter": "it",
        "pinyin": "tā"
    },
    "833": {
        "character": "台",
        "letter": "desk; platform; stage; terrace; stand; support; desk; station; broadcasting station; classifier for vehicles or machines; Taiwan (abbr.)",
        "pinyin": "tái"
    },
    "834": {
        "character": "抬",
        "letter": "to lift; to raise; (of two or more persons) to carry",
        "pinyin": "tái"
    },
    "835": {
        "character": "太",
        "letter": "highest; greatest; too (much); very; extremely",
        "pinyin": "tài"
    },
    "836": {
        "character": "太䧈",
        "letter": "sun; CL:個|个[gè]",
        "pinyin": "tàiyáng"
    },
    "837": {
        "character": "\u0006度",
        "letter": "manner; bearing; attitude; approach; CL:個|个[gè]",
        "pinyin": "tàidu"
    },
    "838": {
        "character": "\u0007",
        "letter": "to speak; to talk; to converse; to chat; to discuss",
        "pinyin": "tán"
    },
    "839": {
        "character": "\u0001琴",
        "letter": "play the piano",
        "pinyin": "tángāngqín"
    },
    "840": {
        "character": "\b",
        "letter": "soup; hot or boiling water; decoction of medicinal herbs; water in which sth has been boiled",
        "pinyin": "tāng"
    },
    "841": {
        "character": "䶀",
        "letter": "to wade; to trample; to turn the soil",
        "pinyin": "tāng"
    },
    "842": {
        "character": "糖",
        "letter": "sugar; sweets; candy; CL:顆|[kē],塊|\u0004[kuài]",
        "pinyin": "táng"
    },
    "843": {
        "character": "tǎng",
        "letter": "recline; to lie down",
        "pinyin": "to"
    },
    "844": {
        "character": "\u0005",
        "letter": "to discuss; to talk over; CL:個|个[gè]",
        "pinyin": "tǎolùn"
    },
    "845": {
        "character": "tǎoyàn",
        "letter": "troublesome; nuisance; nasty; to hate doing sth",
        "pinyin": "disgusting;"
    },
    "846": {
        "character": "特䫲",
        "letter": "especially; special; particular; unusual",
        "pinyin": "tèbié"
    },
    "847": {
        "character": "特点",
        "letter": "characteristic (feature); trait; feature; CL:個|个[gè]",
        "pinyin": "tèdiǎn"
    },
    "848": {
        "character": "仏",
        "letter": "(it) hurts; love fondly; ache; pain; sore",
        "pinyin": "téng"
    },
    "849": {
        "character": "䤫足球",
        "letter": "play soccer(football)",
        "pinyin": "tīzúqiú"
    },
    "850": {
        "character": "tí",
        "letter": "problem for discussion; exam question; subject; to inscribe; to mention; surname Ti; CL: 個|个[gè],道[dào]",
        "pinyin": "topic;"
    },
    "851": {
        "character": "提高",
        "letter": "to raise; to increase",
        "pinyin": "tígāo"
    },
    "852": {
        "character": "提供",
        "letter": "to offer; to supply; to provide; to furnish",
        "pinyin": "tígōng"
    },
    "853": {
        "character": "提前",
        "letter": "to shift to an earlier date; to bring forward; to advance",
        "pinyin": "tíqián"
    },
    "854": {
        "character": "提醒",
        "letter": "to remind; to call attention to; to warn of  41/56",
        "pinyin": "tíxǐng"
    },
    "855": {
        "character": "体育",
        "letter": "sports; physical education",
        "pinyin": "tǐyù"
    },
    "856": {
        "character": "天气",
        "letter": "weather",
        "pinyin": "tiānqì"
    },
    "857": {
        "character": "甜",
        "letter": "sweet",
        "pinyin": "tián"
    },
    "858": {
        "character": "填空",
        "letter": "to fill a job vacancy; to fill in a blank (e.g. on questionnaire or exam paper)",
        "pinyin": "tiánkòng"
    },
    "859": {
        "character": "条",
        "letter": "strip; item; article; clause (of law or treaty); classifier for long thin things (ribbon, river, road, trousers etc)",
        "pinyin": "tiáo"
    },
    "860": {
        "character": "条件",
        "letter": "condition; circumstances; term; factor; requirement; prerequisite; qualification; CL:個|个 [gè]",
        "pinyin": "tiáojiàn"
    },
    "861": {
        "character": "跳舞",
        "letter": "to dance",
        "pinyin": "tiàowǔ"
    },
    "862": {
        "character": "听",
        "letter": "to listen; to hear; to obey; a can (loanword from English tin); classifier for canned beverages",
        "pinyin": "tīng"
    },
    "863": {
        "character": "停止",
        "letter": "to stop; to halt; to cease",
        "pinyin": "tíngzhǐ"
    },
    "864": {
        "character": "伾",
        "letter": "to stick out; to (physically) straighten up; to endure or hold out; straight; stiff; outstanding; extraordinary; rather; quite; very; classifier for machine guns",
        "pinyin": "tǐng"
    },
    "865": {
        "character": "通",
        "letter": "by means of; through; via; to pass through; to get through; to adopt; to pass (a bill); to switch over",
        "pinyin": "tōngguò"
    },
    "866": {
        "character": "通知",
        "letter": "to notify; to inform; notice; notification; CL:個|个 [gè]",
        "pinyin": "tōngzhī"
    },
    "867": {
        "character": "同情",
        "letter": "compassion; relent; sympathize; sympathy",
        "pinyin": "tóngqíng"
    },
    "868": {
        "character": "同事",
        "letter": "colleague; co-worker; CL:個|个[gè],位[wèi]",
        "pinyin": "tóngshì"
    },
    "869": {
        "character": "同学",
        "letter": "(fellow) classmate; CL:位[wèi],個|个[gè]",
        "pinyin": "tóngxué"
    },
    "870": {
        "character": "同意",
        "letter": "to agree; to consent; to approve",
        "pinyin": "tóngyì"
    },
    "871": {
        "character": "\u0005\u0001",
        "letter": "hair (on the head)",
        "pinyin": "tóufa"
    },
    "872": {
        "character": "突然",
        "letter": "sudden; abrupt; unexpected",
        "pinyin": "tūrán"
    },
    "873": {
        "character": "\u0006\u0004",
        "letter": "library; CL:家[jiā],個|个[gè]",
        "pinyin": "túshūguǎn"
    },
    "874": {
        "character": "推",
        "letter": "to push; to cut; to refuse; to reject; to decline; to shirk (responsibility); to put off; to delay; to push forward; to nominate; to elect  42/56",
        "pinyin": "tuī"
    },
    "875": {
        "character": "推\u0001",
        "letter": "to postpone; to put off; to defer",
        "pinyin": "tuīchí"
    },
    "876": {
        "character": "腿",
        "letter": "leg; CL:條|条[tiáo]",
        "pinyin": "tuǐ"
    },
    "877": {
        "character": "脱",
        "letter": "to shed; to take off; to escape; to get away from",
        "pinyin": "tuō"
    },
    "878": {
        "character": "䵈子",
        "letter": "socks; stockings; CL:隻|只[zhī],對|[duì],雙|双 [shuāng]",
        "pinyin": "wàzi"
    },
    "879": {
        "character": "外",
        "letter": "outside; in addition; foreign; external",
        "pinyin": "wài"
    },
    "880": {
        "character": "玩",
        "letter": "toy; sth used for amusement; curio or antique (Taiwan pr. wàn); to play; to have fun; to trifle with; to keep sth for entertainment",
        "pinyin": "wán"
    },
    "881": {
        "character": "完",
        "letter": "to finish; to be over; whole; complete; entire",
        "pinyin": "wán"
    },
    "882": {
        "character": "完成",
        "letter": "complete; accomplish; perfect tense (grammar)",
        "pinyin": "wánchéng"
    },
    "883": {
        "character": "完全",
        "letter": "complete; whole; totally; entirely",
        "pinyin": "wánquán"
    },
    "884": {
        "character": "碗",
        "letter": "bowl; cup; CL:隻|只[zhī],個|个[gè]",
        "pinyin": "wǎn"
    },
    "885": {
        "character": "晩上",
        "letter": "in the evening; CL:個|个[gè]",
        "pinyin": "wǎnshang"
    },
    "886": {
        "character": "万",
        "letter": "ten thousand; a great number",
        "pinyin": "wàn"
    },
    "887": {
        "character": "往",
        "letter": "to go (in a direction); to; towards; (of a train) bound for; past; previous",
        "pinyin": "wǎng"
    },
    "888": {
        "character": "往往",
        "letter": "often; frequently",
        "pinyin": "wǎngwǎng"
    },
    "889": {
        "character": "网球",
        "letter": "tennis; CL:個|个[gè]",
        "pinyin": "wǎngqiú"
    },
    "890": {
        "character": "网站",
        "letter": "website; network station; node",
        "pinyin": "wǎngzhàn"
    },
    "891": {
        "character": "忘",
        "letter": "to forget",
        "pinyin": "wàngjì"
    },
    "892": {
        "character": "危\u0005",
        "letter": "danger; dangerous",
        "pinyin": "wēixiǎn"
    },
    "893": {
        "character": "䏟",
        "letter": "hello (interj., esp. on telephone); hey; to feed (sb or some animal)",
        "pinyin": "wèi"
    },
    "894": {
        "character": "位",
        "letter": "position; location; place; seat; classifier for people (honorific); classifier for binary bits (e.g. 十六位 1-bit or",
        "pinyin": "wèi"
    },
    "895": {
        "character": "bytes)",
        "letter": ""
    },
    "896": {
        "character": "\u0004",
        "letter": "because of; for; to",
        "pinyin": "wèi"
    },
    "897": {
        "character": "\u0004了",
        "letter": "in order to; for the purpose of; so as to",
        "pinyin": "wèile"
    },
    "898": {
        "character": "\u0004什么",
        "letter": "why?; for what reason?",
        "pinyin": "wèishénme"
    },
    "899": {
        "character": "味道",
        "letter": "flavor; smell; hint of",
        "pinyin": "wèidào"
    },
    "900": {
        "character": "温度",
        "letter": " 43/56 temperature; CL:個|个[gè]",
        "pinyin": "wēndù"
    },
    "901": {
        "character": "文化",
        "letter": "culture; civilization; cultural; CL:個|个[gè],種|䝅 [zhǒng]",
        "pinyin": "wénhuà"
    },
    "902": {
        "character": "文章",
        "letter": "article; essay; literary works; writings; hidden meaning; CL:篇[piān],段[duàn],頁|\f[yè]",
        "pinyin": "wénzhāng"
    },
    "903": {
        "character": "\b",
        "letter": "to ask",
        "pinyin": "wèn"
    },
    "904": {
        "character": "\b\u0007",
        "letter": "question; problem; issue; topic; CL:個|个[gè]",
        "pinyin": "wèntí"
    },
    "905": {
        "character": "我",
        "letter": "I; me; my",
        "pinyin": "wǒ"
    },
    "906": {
        "character": "我\u0006",
        "letter": "we; us; ourselves; our",
        "pinyin": "wǒmen"
    },
    "907": {
        "character": "握手",
        "letter": "to shake hands",
        "pinyin": "wòshǒu"
    },
    "908": {
        "character": "染",
        "letter": "pollution; contamination; CL:個|个[gè]",
        "pinyin": "wūrǎn"
    },
    "909": {
        "character": "无",
        "letter": "-less; not to have; no; none; not; to lack; un908 无聊 wúliáo nonsense; bored",
        "pinyin": "wú"
    },
    "910": {
        "character": "无\u0005",
        "letter": "no matter what or how; regardless of whether...",
        "pinyin": "wúlùn"
    },
    "911": {
        "character": "五",
        "letter": "five;",
        "pinyin": "wǔ"
    },
    "912": {
        "character": "会",
        "letter": "to misunderstand; to mistake; misunderstanding; CL:個|个[gè]",
        "pinyin": "wùhuì"
    },
    "913": {
        "character": "西",
        "letter": "west",
        "pinyin": "xī"
    },
    "914": {
        "character": "西瓜",
        "letter": "watermelon; CL:條|条[tiáo]",
        "pinyin": "xīguā"
    },
    "915": {
        "character": "西柿",
        "letter": "tomato; CL:隻|只[zhī]",
        "pinyin": "xīhóngshì"
    },
    "916": {
        "character": "希望",
        "letter": "to wish for; to desire; hope CL:個|个[gè]",
        "pinyin": "xīwàng"
    },
    "917": {
        "character": "吸引",
        "letter": "to attract (interest, investment etc); CL:個|个[gè]",
        "pinyin": "xīyǐn"
    },
    "918": {
        "character": "\u0001",
        "letter": "habit; custom; usual practice; to be used to; CL: 個|个[gè]",
        "pinyin": "xíguàn"
    },
    "919": {
        "character": "洗",
        "letter": "to wash; to bathe",
        "pinyin": "xǐ"
    },
    "920": {
        "character": "洗手\u0004",
        "letter": "toilet; lavatory; washroom",
        "pinyin": "xǐshǒujiān"
    },
    "921": {
        "character": "洗衣机",
        "letter": "washer; washing machine; CL:臺|台[tái]",
        "pinyin": "xǐyījī"
    },
    "922": {
        "character": "洗澡",
        "letter": "to bathe; to take a shower",
        "pinyin": "xǐzǎo"
    },
    "923": {
        "character": "喜",
        "letter": "to like; to be fond of",
        "pinyin": "xǐhuan"
    },
    "924": {
        "character": "夏",
        "letter": "summer  44/56",
        "pinyin": "xià"
    },
    "925": {
        "character": "下",
        "letter": "down; downwards; below; lower; later; next (week etc); second (of two parts); to decline; to go down",
        "pinyin": "xià"
    },
    "926": {
        "character": "下午",
        "letter": "afternoon; p.m.; CL:個|个[gè]",
        "pinyin": "xiàwǔ"
    },
    "927": {
        "character": "下雨",
        "letter": "to rain; rainy",
        "pinyin": "xiàyǔ"
    },
    "928": {
        "character": "先",
        "letter": "early; prior; former; in advance; first",
        "pinyin": "xiān"
    },
    "929": {
        "character": "先生",
        "letter": "teacher; Mister (Mr.); husband; doctor (topolect); CL:個|个[gè],位[wèi]",
        "pinyin": "xiānsheng"
    },
    "930": {
        "character": "咸",
        "letter": "salted; salty; stingy; miserly",
        "pinyin": "xián"
    },
    "931": {
        "character": "代",
        "letter": "modern times; modern age; modern era",
        "pinyin": "xiàndài"
    },
    "932": {
        "character": "在",
        "letter": "now; at present; at the moment; modern; current; nowadays",
        "pinyin": "xiànzài"
    },
    "933": {
        "character": "羡慕",
        "letter": "envious; envy; to admire",
        "pinyin": "xiànmù"
    },
    "934": {
        "character": "限制",
        "letter": "to restrict; to limit; to confine; restriction; limit; CL:個|个[gè]",
        "pinyin": "xiànzhì"
    },
    "935": {
        "character": "香",
        "letter": "fragrant; sweet smelling; aromatic; savory or appetizing; (to eat) with relish; (of sleep) sound; perfume or spice; joss or incense stick; CL:根 [gēn]",
        "pinyin": "xiāng"
    },
    "936": {
        "character": "香蕉",
        "letter": "banana; CL:枝[zhī],根[gēn],個|个[gè],把[bǎ]",
        "pinyin": "xiāngjiāo"
    },
    "937": {
        "character": "相反",
        "letter": "opposite; contrary",
        "pinyin": "xiāngfǎn"
    },
    "938": {
        "character": "相同",
        "letter": "identical; same",
        "pinyin": "xiāngtóng"
    },
    "939": {
        "character": "相信",
        "letter": "be convinced (that something is true); believe; to accept sth as true",
        "pinyin": "xiāngxìn"
    },
    "940": {
        "character": "\u0001",
        "letter": "detailed; in detail; minute",
        "pinyin": "xiángxì"
    },
    "941": {
        "character": "响",
        "letter": "to make a sound; to sound; to ring; loud; classifier for noises",
        "pinyin": "xiǎng"
    },
    "942": {
        "character": "想",
        "letter": "to think; to believe; to suppose; to wish; to want; to miss",
        "pinyin": "xiǎng"
    },
    "943": {
        "character": "向",
        "letter": "direction; orientation; to face; to turn toward; to; towards; shortly before; formerly; to side with; to be partial to; all along (previously); surname Xiang",
        "pinyin": "xiàng"
    },
    "944": {
        "character": "像",
        "letter": "(look) like; similar (to); appearance; to appear; to  45/56 seem; image; portrait; resemble; seem",
        "pinyin": "xiàng"
    },
    "945": {
        "character": "消息",
        "letter": "news; information; CL:條|条[tiáo]",
        "pinyin": "xiāoxi"
    },
    "946": {
        "character": "小",
        "letter": "small; tiny; few; young",
        "pinyin": "xiǎo"
    },
    "947": {
        "character": "小姐",
        "letter": "young lady; miss; CL:個|个[gè],位[wèi]",
        "pinyin": "xiǎojie"
    },
    "948": {
        "character": "小\u0004",
        "letter": "hour; CL:個|个[gè]",
        "pinyin": "xiǎoshí"
    },
    "949": {
        "character": "小\u0005",
        "letter": "novel; fiction; CL:本[běn],部[bù]",
        "pinyin": "xiǎoshuō"
    },
    "950": {
        "character": "小心",
        "letter": "to be careful; to take care",
        "pinyin": "xiǎoxīn"
    },
    "951": {
        "character": "笑",
        "letter": "laugh; smile; CL:個|个[gè]",
        "pinyin": "xiào"
    },
    "952": {
        "character": "笑",
        "letter": "joke; jest; CL:個|个[gè]",
        "pinyin": "xiàohuà"
    },
    "953": {
        "character": "效果",
        "letter": "result; effect; quality; CL:個|个[gè]",
        "pinyin": "xiàoguǒ"
    },
    "954": {
        "character": "校\u0001",
        "letter": "(college, university) president; headmaster; CL:個| 个[gè],位[wèi],名[míng]",
        "pinyin": "xiàozhǎng"
    },
    "955": {
        "character": "些",
        "letter": "some; few; several; (a measure word)",
        "pinyin": "xiē"
    },
    "956": {
        "character": "鞋",
        "letter": "shoe; CL:雙|双[shuāng],隻|只[zhī]",
        "pinyin": "xié"
    },
    "957": {
        "character": "写",
        "letter": "to write",
        "pinyin": "xiě"
    },
    "958": {
        "character": "\b\b",
        "letter": "to thank; thanks",
        "pinyin": "xièxie"
    },
    "959": {
        "character": "新",
        "letter": "new; newly; meso- (chemistry)",
        "pinyin": "xīn"
    },
    "960": {
        "character": "新\u0006",
        "letter": "news; CL:條|条[tiáo],個|个[gè]",
        "pinyin": "xīnwén"
    },
    "961": {
        "character": "新\u0007",
        "letter": "fresh (experience, food etc); freshness",
        "pinyin": "xīnxiān"
    },
    "962": {
        "character": "辛苦",
        "letter": "hard; exhausting; with much toil; thanks for your trouble",
        "pinyin": "xīnkǔ"
    },
    "963": {
        "character": "心情",
        "letter": "mood; frame of mind; CL:個|个[gè]",
        "pinyin": "xīnqíng"
    },
    "964": {
        "character": "信",
        "letter": "letter; mail; to trust; to believe; to profess faith in; truthful; confidence; trust; at will; at random",
        "pinyin": "xìn"
    },
    "965": {
        "character": "信任",
        "letter": "to trust; to have confidence in",
        "pinyin": "xìnrèn"
    },
    "966": {
        "character": "信心",
        "letter": "confidence; faith (in sb or sth); CL:個|个[gè]",
        "pinyin": "xìnxīn"
    },
    "967": {
        "character": "信用卡",
        "letter": "credit card",
        "pinyin": "xìnyòngkǎ"
    },
    "968": {
        "character": "䫤",
        "letter": "excited; excitement  46/56",
        "pinyin": "xīngfèn"
    },
    "969": {
        "character": "星期",
        "letter": "week; CL:個|个[gè]",
        "pinyin": "xīngqī"
    },
    "970": {
        "character": "行",
        "letter": "to walk; to go; to travel; a visit; temporary; makeshift; current; in circulation; to do; to perform; capable; competent; effective; all right; OK!; will do",
        "pinyin": "xíng"
    },
    "971": {
        "character": "行李箱",
        "letter": "suitcase",
        "pinyin": "xínglixiāng"
    },
    "972": {
        "character": "醒",
        "letter": "to wake up; to awaken; to be awake",
        "pinyin": "xǐng"
    },
    "973": {
        "character": "姓",
        "letter": "family name; surname; name; CL:個|个[gè]",
        "pinyin": "xìng"
    },
    "974": {
        "character": "性䫲",
        "letter": "gender; sex; distinguishing between the sexes",
        "pinyin": "xìngbié"
    },
    "975": {
        "character": "性格",
        "letter": "nature; disposition; temperament; character; CL: 個|个[gè]",
        "pinyin": "xìnggé"
    },
    "976": {
        "character": "幸福",
        "letter": "blessed; happiness; happy",
        "pinyin": "xìngfú"
    },
    "977": {
        "character": "䫤趣",
        "letter": "interest in (something); CL:個|个[gè]",
        "pinyin": "xìngqu"
    },
    "978": {
        "character": "熊猫",
        "letter": "panda; CL:隻|只[zhī]",
        "pinyin": "xióngmāo"
    },
    "979": {
        "character": "修",
        "letter": "to decorate; to embellish; to repair; to build; to study; to write; to cultivate",
        "pinyin": "xiū"
    },
    "980": {
        "character": "休息",
        "letter": "rest; to rest",
        "pinyin": "xiūxi"
    },
    "981": {
        "character": "需要",
        "letter": "to need; to want; to demand; needs; to require",
        "pinyin": "xūyào"
    },
    "982": {
        "character": "多",
        "letter": "many; a lot of; much",
        "pinyin": "xǔduō"
    },
    "983": {
        "character": "\u0004\u0007",
        "letter": "to select; to pick; choice; option; alternative",
        "pinyin": "xuǎnzé"
    },
    "984": {
        "character": "学生",
        "letter": "student; school child",
        "pinyin": "xuésheng"
    },
    "985": {
        "character": "学",
        "letter": "to learn; to study",
        "pinyin": "xuéxí"
    },
    "986": {
        "character": "学校",
        "letter": "school; CL:所[suǒ]",
        "pinyin": "xuéxiào"
    },
    "987": {
        "character": "雪",
        "letter": "snow; snowfall; CL:場|\u0001[cháng]; to have the appearance of snow; to wipe away, off or out; to clean",
        "pinyin": "xuě"
    },
    "988": {
        "character": "血",
        "letter": "blood; informal colloquial and Taiwan pr. xiě; also pr. xuě; CL:滴[dī],片[piàn]",
        "pinyin": "xuè"
    },
    "989": {
        "character": "\u0005力",
        "letter": "pressure",
        "pinyin": "yālì"
    },
    "990": {
        "character": "牙膏",
        "letter": "toothpaste; CL:管[guǎn]",
        "pinyin": "yágāo"
    },
    "991": {
        "character": "\u0006洲",
        "letter": "Asia; Asian",
        "pinyin": "yàzhōu"
    },
    "992": {
        "character": "呀",
        "letter": " 47/56 (particle equivalent to 啊 after a vowel, expressing",
        "pinyin": "ya"
    },
    "993": {
        "character": "\u0005",
        "letter": "surprise or doubt) salt; CL:粒[lì]",
        "pinyin": "yán"
    },
    "994": {
        "character": "\u0006格",
        "letter": "strict; stringent; tight; rigorous",
        "pinyin": "yángé"
    },
    "995": {
        "character": "\u0006重",
        "letter": "grave; serious; severe; critical",
        "pinyin": "yánzhòng"
    },
    "996": {
        "character": "研究生",
        "letter": "graduate student; postgraduate student; research student",
        "pinyin": "yánjiūshēng"
    },
    "997": {
        "character": "\u0007色",
        "letter": "color; CL:個|个[gè]",
        "pinyin": "yánsè"
    },
    "998": {
        "character": "演出",
        "letter": "to act (in a play); to perform; to put on (a performance); performance; concert; show; CL:場| \u0001[cháng],次[cì]",
        "pinyin": "yǎnchū"
    },
    "999": {
        "character": "演\u000b",
        "letter": "actor or actress; performer; CL:個|个[gè],位[wèi], 名[míng]",
        "pinyin": "yǎnyuán"
    },
    "1000": {
        "character": "眼",
        "letter": "spectacles; eyeglasses; CL:副[fù]",
        "pinyin": "yǎnjìng"
    },
    "1001": {
        "character": "眼睛",
        "letter": "eye; CL:隻|只[zhī],雙|双[shuāng]",
        "pinyin": "yǎnjing"
    },
    "1002": {
        "character": "䧈光",
        "letter": "sunshine; CL:線|\u0004[xiàn]",
        "pinyin": "yángguāng"
    },
    "1003": {
        "character": "羊肉",
        "letter": "mutton",
        "pinyin": "yángròu"
    },
    "1004": {
        "character": "䟙成",
        "letter": "to cultivate; to raise; to form (a habit); to acquire",
        "pinyin": "yǎngchéng"
    },
    "1005": {
        "character": "\b子",
        "letter": "manner; air; looks; aspect",
        "pinyin": "yàngzi"
    },
    "1006": {
        "character": "邀",
        "letter": "to invite; invitation; CL:個|个[gè]",
        "pinyin": "yāoqǐng"
    },
    "1007": {
        "character": "要求",
        "letter": "to request; to require; to stake a claim; to ask; to demand; CL:點|点[diǎn]",
        "pinyin": "yāoqiú"
    },
    "1008": {
        "character": "要",
        "letter": "important; vital; to want; will; going to (as future auxiliary); may; must",
        "pinyin": "yào"
    },
    "1009": {
        "character": "yào",
        "letter": "drug; cure; CL:種|䝅[zhǒng],服[fù]",
        "pinyin": "medicine;"
    },
    "1010": {
        "character": "匙",
        "letter": "key; CL:把[bǎ]",
        "pinyin": "yàoshi"
    },
    "1011": {
        "character": "yéye",
        "letter": "father's father; paternal grandfather; CL: 個|个[gè]",
        "pinyin": "(informal)"
    },
    "1012": {
        "character": "也",
        "letter": "also; too; (in classical Chinese) final particle serving as copula  48/56",
        "pinyin": "yě"
    },
    "1013": {
        "character": "也\u0004",
        "letter": "perhaps; maybe",
        "pinyin": "yěxǔ"
    },
    "1014": {
        "character": "\u0006",
        "letter": "page; leaf",
        "pinyin": "yè"
    },
    "1015": {
        "character": "叶子",
        "letter": "foliage; leaf; CL:片[piàn]",
        "pinyin": "yèzi"
    },
    "1016": {
        "character": "一",
        "letter": "one; 1; single; a (article); as soon as; entire; whole; all; throughout; one radical in Chinese characters (Kangxi radical 1)",
        "pinyin": "yī"
    },
    "1017": {
        "character": "衣服",
        "letter": "clothes; CL:件[jiàn],套[tào]",
        "pinyin": "yīfu"
    },
    "1018": {
        "character": "医生",
        "letter": "doctor; CL:個|个[gè],位[wèi],名[míng]",
        "pinyin": "yīshēng"
    },
    "1019": {
        "character": "医院",
        "letter": "hospital; CL:所[suǒ],家[jiā],座[zuò]",
        "pinyin": "yīyuàn"
    },
    "1020": {
        "character": "一定",
        "letter": "surely; certainly; necessarily; fixed; a certain (extent etc); given; particular; must",
        "pinyin": "yídìng"
    },
    "1021": {
        "character": "一共",
        "letter": "altogether",
        "pinyin": "yígòng"
    },
    "1022": {
        "character": "一会儿",
        "letter": "a while",
        "pinyin": "yíhuìr"
    },
    "1023": {
        "character": "一切",
        "letter": "everything; every; all",
        "pinyin": "yíqiè"
    },
    "1024": {
        "character": "一\u0005",
        "letter": "same; like; equal to; the same as; just like",
        "pinyin": "yíyàng"
    },
    "1025": {
        "character": "以",
        "letter": "to use; according to; so as to; by means of; in order to; by; with; because",
        "pinyin": "yǐ"
    },
    "1026": {
        "character": "以后",
        "letter": "after; later; afterwards; following; later on; in the future",
        "pinyin": "yǐhòu"
    },
    "1027": {
        "character": "以前",
        "letter": "before; formerly; previous; ago",
        "pinyin": "yǐqián"
    },
    "1028": {
        "character": "以",
        "letter": "to believe; to think; to consider; to be under the impression",
        "pinyin": "yǐwéi"
    },
    "1029": {
        "character": "已",
        "letter": "already",
        "pinyin": "yǐjīng"
    },
    "1030": {
        "character": "椅子",
        "letter": "chair; CL:把[bǎ],套[tào]",
        "pinyin": "yǐzi"
    },
    "1031": {
        "character": "\u0007",
        "letter": "a hundred million; calculate",
        "pinyin": "yì"
    },
    "1032": {
        "character": "一般",
        "letter": "same; ordinary; common; general; generally; in general",
        "pinyin": "yìbān"
    },
    "1033": {
        "character": "一\u0001",
        "letter": "one side; either side; on the one hand; on the other hand; doing while",
        "pinyin": "yìbiān"
    },
    "1034": {
        "character": "一起",
        "letter": "in the same place; together; with; altogether (in total)",
        "pinyin": "yìqǐ"
    },
    "1035": {
        "character": "一直",
        "letter": "straight (in a straight line); continuously; always; from the beginning of ... up to ...; all along  49/56",
        "pinyin": "yìzhí"
    },
    "1036": {
        "character": "意",
        "letter": "idea; opinion; suggestion; objection; complaint; CL:點|点[diǎn],條|条[tiáo]",
        "pinyin": "yìjiàn"
    },
    "1037": {
        "character": "意思",
        "letter": "idea; opinion; meaning; wish; desire; CL:個|个 [gè]",
        "pinyin": "yìsi"
    },
    "1038": {
        "character": "\u0006\u0004",
        "letter": "art; CL:種|䝅[zhǒng]",
        "pinyin": "yìshù"
    },
    "1039": {
        "character": "䧉",
        "letter": "overcast (weather); cloudy; shady; Yin (the negative principle of Yin and Yang); negative (electric.); feminine; moon; implicit; hidden; genitalia",
        "pinyin": "yīn"
    },
    "1040": {
        "character": "因此",
        "letter": "thus; consequently; as a result",
        "pinyin": "yīncǐ"
    },
    "1041": {
        "character": "因\u0005",
        "letter": "because; owing to; on account of",
        "pinyin": "yīnwèi"
    },
    "1042": {
        "character": "音",
        "letter": "music; CL:張|[zhāng],曲[qǔ],段[duàn]",
        "pinyin": "yīnyuè"
    },
    "1043": {
        "character": "\u0007行",
        "letter": "bank; CL:家[jiā],個|个[gè]",
        "pinyin": "yínháng"
    },
    "1044": {
        "character": "\b料",
        "letter": "drink; beverage",
        "pinyin": "yǐnliào"
    },
    "1045": {
        "character": "引起",
        "letter": "to give rise to; to lead to; to cause; to arouse",
        "pinyin": "yǐnqǐ"
    },
    "1046": {
        "character": "印象",
        "letter": "impression; reflection; perception; CL:個|个[gè]",
        "pinyin": "yìnxiàng"
    },
    "1047": {
        "character": "\u0001",
        "letter": "ought to; should; must",
        "pinyin": "yīnggāi"
    },
    "1048": {
        "character": "yíng",
        "letter": "beat; to win; to profit",
        "pinyin": "to"
    },
    "1049": {
        "character": "影响",
        "letter": "an influence; an effect; to influence; to affect (usually adversely); to disturb; CL:股[gǔ]",
        "pinyin": "yǐngxiǎng"
    },
    "1050": {
        "character": "硬",
        "letter": "hard; stiff; strong; firm; to manage to do sth with difficulty; good (quality); able (person)",
        "pinyin": "yìng"
    },
    "1051": {
        "character": "勇敢",
        "letter": "brave; courageous",
        "pinyin": "yǒnggǎn"
    },
    "1052": {
        "character": "永\f",
        "letter": "forever; eternal",
        "pinyin": "yǒngyuǎn"
    },
    "1053": {
        "character": "用",
        "letter": "to use; to employ; to have to; to eat or drink; expense or outlay; usefulness; hence; therefore",
        "pinyin": "yòng"
    },
    "1054": {
        "character": "点",
        "letter": "merit; benefit; strong point; advantage; CL:個|个 [gè]",
        "pinyin": "yōudiǎn"
    },
    "1055": {
        "character": "秀",
        "letter": "outstanding; excellent",
        "pinyin": "yōuxiù"
    },
    "1056": {
        "character": "幽默",
        "letter": "humor; humorous",
        "pinyin": "yōumò"
    },
    "1057": {
        "character": "由",
        "letter": "to follow; from; it is for...to; reason; cause; because of; due to; to; to leave it (to sb); by (introduces passive verb)  50/56",
        "pinyin": "yóu"
    },
    "1058": {
        "character": "由于",
        "letter": "due to; as a result of; thanks to; owing to; since; because",
        "pinyin": "yóuyú"
    },
    "1059": {
        "character": "尤其",
        "letter": "especially; particularly",
        "pinyin": "yóuqí"
    },
    "1060": {
        "character": "游\u0006",
        "letter": "game; play; CL:場|[chǎng]",
        "pinyin": "yóuxì"
    },
    "1061": {
        "character": "游泳",
        "letter": "swim",
        "pinyin": "yóuyǒng"
    },
    "1062": {
        "character": "有",
        "letter": "to have; there is; there are; to exist; to be",
        "pinyin": "yǒu"
    },
    "1063": {
        "character": "有名",
        "letter": "famous; well-known",
        "pinyin": "yǒumíng"
    },
    "1064": {
        "character": "有趣",
        "letter": "interesting; fascinating; amusing",
        "pinyin": "yǒuqù"
    },
    "1065": {
        "character": "友好",
        "letter": "friendly (relations)",
        "pinyin": "yǒuhǎo"
    },
    "1066": {
        "character": "友\u0007",
        "letter": "companionship; fellowship; friendship",
        "pinyin": "yǒuyì"
    },
    "1067": {
        "character": "又",
        "letter": "(once) again; also; both... and...; again",
        "pinyin": "yòu"
    },
    "1068": {
        "character": "右\u0001",
        "letter": "right side; right, to the right",
        "pinyin": "yòubian"
    },
    "1069": {
        "character": "\b",
        "letter": "fish; CL:條|条[tiáo],尾[wěi]",
        "pinyin": "yú"
    },
    "1070": {
        "character": "愉快",
        "letter": "cheerful; cheerily; delightful; pleasant; pleasantly; pleasing; happy; delighted",
        "pinyin": "yúkuài"
    },
    "1071": {
        "character": "于是",
        "letter": "thereupon; as a result; consequently; thus; hence",
        "pinyin": "yúshì"
    },
    "1072": {
        "character": "与",
        "letter": "(same as 歟|欤, final particle expression doubt or surprise, similar to \u0004 or 䏆)",
        "pinyin": "yú"
    },
    "1073": {
        "character": "法",
        "letter": "grammar",
        "pinyin": "yǔfǎ"
    },
    "1074": {
        "character": "言",
        "letter": "language; CL:門|門[mén],種|䝅[zhǒng]",
        "pinyin": "yǔyán"
    },
    "1075": {
        "character": "羽毛球",
        "letter": "shuttlecock; badminton; CL:個|个[gè]",
        "pinyin": "yǔmáoqiú"
    },
    "1076": {
        "character": "遇到",
        "letter": "to meet; to run into; to come across",
        "pinyin": "yùdào"
    },
    "1077": {
        "character": "\u0005",
        "letter": "to prepare a lesson",
        "pinyin": "yùxí"
    },
    "1078": {
        "character": "元",
        "letter": "Chinese monetary unit; dollar; primary; first; the Yuan or Mongol dynasty (12-13); surname Yuan",
        "pinyin": "yuán"
    },
    "1079": {
        "character": "yuán",
        "letter": "round; circular; spherical; (of the moon) full; unit of Chinese currency (Yuan); tactful; to justify",
        "pinyin": "circle;"
    },
    "1080": {
        "character": "原来",
        "letter": "original; former; originally; formerly; at first; so... actually",
        "pinyin": "yuánlái"
    },
    "1081": {
        "character": "原",
        "letter": "to excuse; to forgive; to pardon  51/56",
        "pinyin": "yuánliàng"
    },
    "1082": {
        "character": "原因",
        "letter": "cause; origin; root cause; reason; CL:個|个[gè]",
        "pinyin": "yuányīn"
    },
    "1083": {
        "character": "yuǎn",
        "letter": "distant; remote",
        "pinyin": "far;"
    },
    "1084": {
        "character": "愿意",
        "letter": "to wish; to want; ready; willing (to do sth)",
        "pinyin": "yuànyì"
    },
    "1085": {
        "character": "会",
        "letter": "appointment; engagement; date; CL:次[cì],個|个 [gè]",
        "pinyin": "yuēhuì"
    },
    "1086": {
        "character": "越",
        "letter": "to exceed; to climb over; to surpass; the more... the more",
        "pinyin": "yuè"
    },
    "1087": {
        "character": "月",
        "letter": "moon; month; CL:個|个[gè],輪|\u0006[lún]",
        "pinyin": "yuè"
    },
    "1088": {
        "character": "月亮",
        "letter": "moon",
        "pinyin": "yuèliang"
    },
    "1089": {
        "character": "\u0004",
        "letter": "to read; reading",
        "pinyin": "yuèdú"
    },
    "1090": {
        "character": "云",
        "letter": "(classical) to say",
        "pinyin": "yún"
    },
    "1091": {
        "character": "允\t",
        "letter": "to permit; to allow",
        "pinyin": "yǔnxǔ"
    },
    "1092": {
        "character": "\u000e",
        "letter": "movement; campaign; CL: 場|\u0001[chǎng]; sports",
        "pinyin": "yùndòng"
    },
    "1093": {
        "character": "\u000f志",
        "letter": "magazine; CL:本[běn],份[fèn],期[qī]",
        "pinyin": "zázhì"
    },
    "1094": {
        "character": "在",
        "letter": "(located) at; (to be) in; to exist; in the middle of doing sth; (indicating an action in progress)",
        "pinyin": "zài"
    },
    "1095": {
        "character": "再",
        "letter": "again; once more; re-; second; another; then (after sth, and not until then)",
        "pinyin": "zài"
    },
    "1096": {
        "character": "再\u0005",
        "letter": "goodbye; see you again later",
        "pinyin": "zàijiàn"
    },
    "1097": {
        "character": "䬜\u0007",
        "letter": "we or us (including both the speaker and the person(s) spoken to); I or me; you",
        "pinyin": "zánmen"
    },
    "1098": {
        "character": "\u0010\b",
        "letter": "temporary; provisional; for the time being",
        "pinyin": "zànshí"
    },
    "1099": {
        "character": "\u0011",
        "letter": "viscera; (anatomy) organ",
        "pinyin": "zàng"
    },
    "1100": {
        "character": "早上",
        "letter": "early morning; CL:個|个[gè]; Good morning!",
        "pinyin": "zǎoshang"
    },
    "1101": {
        "character": "\u0012任",
        "letter": "responsibility; blame; duty; CL:個|个[gè]",
        "pinyin": "zérèn"
    },
    "1102": {
        "character": "怎么",
        "letter": "how?; what?; why?",
        "pinyin": "zěnme"
    },
    "1103": {
        "character": "怎么",
        "letter": "how?; how about?; how was it?; how are things?",
        "pinyin": "zěnmeyàng"
    },
    "1104": {
        "character": "增加",
        "letter": "to raise; to increase",
        "pinyin": "zēngjiā"
    },
    "1105": {
        "character": "增",
        "letter": "to grow; to increase",
        "pinyin": "zēngzhǎng"
    },
    "1106": {
        "character": "窄",
        "letter": "narrow; narrow-minded; badly off",
        "pinyin": "zhǎi"
    },
    "1107": {
        "character": "站",
        "letter": "station; to stand; to halt; to stop; branch of a  52/56 company or organisation",
        "pinyin": "zhàn"
    },
    "1108": {
        "character": "\u0004",
        "letter": "to open up; to spread; sheet of paper; classifier for flat objects, sheet; classifier for votes",
        "pinyin": "zhāng"
    },
    "1109": {
        "character": "\u0001",
        "letter": "chief; head; elder; to grow; to develop",
        "pinyin": "zhǎng"
    },
    "1110": {
        "character": "丈夫",
        "letter": "husband; CL:個|个[gè]",
        "pinyin": "zhàngfu"
    },
    "1111": {
        "character": "招聘",
        "letter": "recruitment; to invite applications for a job",
        "pinyin": "zhāopìn"
    },
    "1112": {
        "character": "着急",
        "letter": "to worry; to feel anxious",
        "pinyin": "zháojí"
    },
    "1113": {
        "character": "找",
        "letter": "to try to find; to look for; to call on sb; to find; to seek; to return; to give change",
        "pinyin": "zhǎo"
    },
    "1114": {
        "character": "照",
        "letter": "to take care of; to show consideration; to attend to; to look after",
        "pinyin": "zhàogu"
    },
    "1115": {
        "character": "照片",
        "letter": "photo; photograph; picture; CL:張|\u0004[zhāng],套 [tào],幅[fú]",
        "pinyin": "zhàopiàn"
    },
    "1116": {
        "character": "照相机",
        "letter": "camera; CL:個|个[gè],架[jià],部[bù],台[tái],隻|只 [zhī]",
        "pinyin": "zhàoxiàngjī"
    },
    "1117": {
        "character": "\u0005",
        "letter": "this; these; (commonly pr. zhèi before a classifier, esp. in Beijing)",
        "pinyin": "zhè"
    },
    "1118": {
        "character": "\u0005儿",
        "letter": "here",
        "pinyin": "zhèr"
    },
    "1119": {
        "character": "着",
        "letter": "particle attached after verb to indicate action in progress, like -ing ending",
        "pinyin": "zhe"
    },
    "1120": {
        "character": "真",
        "letter": "really; truly; indeed; real; true; genuine",
        "pinyin": "zhēn"
    },
    "1121": {
        "character": "真正",
        "letter": "genuine; real; true; genuinely",
        "pinyin": "zhēnzhèng"
    },
    "1122": {
        "character": "整理",
        "letter": "to arrange; to tidy up; to sort out; to straighten out; to list systematically; to collate (data, files); to pack (luggage)",
        "pinyin": "zhěnglǐ"
    },
    "1123": {
        "character": "整",
        "letter": "orderly; neat; even; tidy",
        "pinyin": "zhěngqí"
    },
    "1124": {
        "character": "正常",
        "letter": "regular; normal; ordinary",
        "pinyin": "zhèngcháng"
    },
    "1125": {
        "character": "正好",
        "letter": "just (in time); just right; just enough; to happen to; to chance to; by chance; it just so happens that",
        "pinyin": "zhènghǎo"
    },
    "1126": {
        "character": "正䉯",
        "letter": "correct; proper",
        "pinyin": "zhèngquè"
    },
    "1127": {
        "character": "正式",
        "letter": "formal; official",
        "pinyin": "zhèngshì"
    },
    "1128": {
        "character": "正在",
        "letter": "in the process of (doing something or happening); while (doing)",
        "pinyin": "zhèngzài"
    },
    "1129": {
        "character": "\u0006明",
        "letter": "proof; certificate; identification; testimonial; CL:  53/56 個|个[gè]; to prove; to testify; to confirm the truth of",
        "pinyin": "zhèngmíng"
    },
    "1130": {
        "character": "之",
        "letter": "(possessive particle, literary equivalent of 的); him; her; it",
        "pinyin": "zhī"
    },
    "1131": {
        "character": "只",
        "letter": "classifier for birds and certain animals, one of a pair, some utensils, vessels etc",
        "pinyin": "zhī"
    },
    "1132": {
        "character": "支持",
        "letter": "to be in favor of; to support; to back; support; backing; to stand by; CL:個|个[gè]",
        "pinyin": "zhīchí"
    },
    "1133": {
        "character": "知道",
        "letter": "to know; to be aware of",
        "pinyin": "zhīdao"
    },
    "1134": {
        "character": "知",
        "letter": "intellectual; knowledge-related; knowledge; CL: 門|門[mén]",
        "pinyin": "zhīshi"
    },
    "1135": {
        "character": "\u0005得",
        "letter": "to be worth; to deserve",
        "pinyin": "zhíde"
    },
    "1136": {
        "character": "直接",
        "letter": "direct; opposite: indirect 間接|\u0001接; immediate; directly; straightforward",
        "pinyin": "zhíjiē"
    },
    "1137": {
        "character": "植物",
        "letter": "botanical; plant; vegetation; CL:種|䝅[zhǒng]",
        "pinyin": "zhíwù"
    },
    "1138": {
        "character": "\u0004",
        "letter": "occupation; profession; vocation; professional",
        "pinyin": "zhíyè"
    },
    "1139": {
        "character": "指",
        "letter": "finger; to point at or to; to indicate or refer to; to depend on; to count on; (of hair) to stand on end",
        "pinyin": "zhǐ"
    },
    "1140": {
        "character": "只",
        "letter": "only; merely; just; but",
        "pinyin": "zhǐ"
    },
    "1141": {
        "character": "只好",
        "letter": "without any better option; to have to; to be forced to",
        "pinyin": "zhǐhǎo"
    },
    "1142": {
        "character": "只要",
        "letter": "if only; so long as",
        "pinyin": "zhǐyào"
    },
    "1143": {
        "character": "\u0006量",
        "letter": "quality; mass (in physics); CL:個|个[gè]",
        "pinyin": "zhìliàng"
    },
    "1144": {
        "character": "至少",
        "letter": "at least; (to say the) least",
        "pinyin": "zhìshǎo"
    },
    "1145": {
        "character": "制造",
        "letter": "to manufacture; to make",
        "pinyin": "zhìzào"
    },
    "1146": {
        "character": "中国",
        "letter": "China; Middle Kingdom",
        "pinyin": "zhōngguó"
    },
    "1147": {
        "character": "中\u0001",
        "letter": "between; intermediate; mid; middle",
        "pinyin": "zhōngjiān"
    },
    "1148": {
        "character": "中文",
        "letter": "Chinese; Chinese written language; Chinese writing",
        "pinyin": "zhōngwén"
    },
    "1149": {
        "character": "中午",
        "letter": "noon; midday; CL:個|个[gè]",
        "pinyin": "zhōngwǔ"
    },
    "1150": {
        "character": "\u0007于",
        "letter": "at last; in the end; finally; eventually  54/56",
        "pinyin": "zhōngyú"
    },
    "1151": {
        "character": "䝅",
        "letter": "abbr. for 物種|物䝅, genus; race; seed; breed; species; strain; kind; type; has guts (i.e. courage); nerve; classifier for types: kind, sort; classifier for languages",
        "pinyin": "zhǒng"
    },
    "1152": {
        "character": "重点",
        "letter": "emphasis; focal point; priority; key; with the emphasis on; focusing on",
        "pinyin": "zhòngdiǎn"
    },
    "1153": {
        "character": "重\u0006",
        "letter": "to attach importance to sth; to value",
        "pinyin": "zhòngshì"
    },
    "1154": {
        "character": "重要",
        "letter": "important; significant; major",
        "pinyin": "zhòngyào"
    },
    "1155": {
        "character": "周末",
        "letter": "weekend",
        "pinyin": "zhōumò"
    },
    "1156": {
        "character": "周\b",
        "letter": "surroundings; environment; to encompass",
        "pinyin": "zhōuwéi"
    },
    "1157": {
        "character": "猪",
        "letter": "hog; pig; swine; CL:口[kǒu],頭|\u0007[tóu]",
        "pinyin": "zhū"
    },
    "1158": {
        "character": "逐\u0004",
        "letter": "gradually",
        "pinyin": "zhújiàn"
    },
    "1159": {
        "character": "主",
        "letter": "to take the initiative; to do sth of one's own accord; active; opposite: passive 被動|被[bèi dòng]; drive (of gears and shafts etc)",
        "pinyin": "zhǔdòng"
    },
    "1160": {
        "character": "主要",
        "letter": "main; principal; major; primary",
        "pinyin": "zhǔyào"
    },
    "1161": {
        "character": "主意",
        "letter": "plan; idea; decision; CL:個|个[gè]",
        "pinyin": "zhǔyi"
    },
    "1162": {
        "character": "住",
        "letter": "to live; to dwell; to stay; to reside; to stop",
        "pinyin": "zhù"
    },
    "1163": {
        "character": "祝",
        "letter": "invoke; pray to; wish; to express good wishes; surname Zhu",
        "pinyin": "zhù"
    },
    "1164": {
        "character": "祝",
        "letter": "to congratulate; congratulations; CL:個|个[gè]",
        "pinyin": "zhùhè"
    },
    "1165": {
        "character": "著名",
        "letter": "famous; noted; well-known; celebrated",
        "pinyin": "zhùmíng"
    },
    "1166": {
        "character": "注意",
        "letter": "to take note of; to pay attention to",
        "pinyin": "zhùyì"
    },
    "1167": {
        "character": "門",
        "letter": "specialist; specialized; customized",
        "pinyin": "zhuānmén"
    },
    "1168": {
        "character": "zhuānyè",
        "letter": "specialized field; main field of study (at university); major; CL:門|門[mén],個|个[gè]; professional",
        "pinyin": "specialty;"
    },
    "1169": {
        "character": "zhuàn",
        "letter": "make a profit",
        "pinyin": "earn;"
    },
    "1170": {
        "character": "撞",
        "letter": "to hit; to strike; to meet by accident; to run into; to bump against; to bump into",
        "pinyin": "zhuàng"
    },
    "1171": {
        "character": "准\u0001",
        "letter": "preparation; prepare",
        "pinyin": "zhǔnbèi"
    },
    "1172": {
        "character": "准䉯",
        "letter": "accurate; exact; precise",
        "pinyin": "zhǔnquè"
    },
    "1173": {
        "character": "准\u0005",
        "letter": "on time; punctual; on schedule  55/56",
        "pinyin": "zhǔnshí"
    },
    "1174": {
        "character": "䖂子",
        "letter": "table; desk; CL:張|\u0006[zhāng],套[tào]",
        "pinyin": "zhuōzi"
    },
    "1175": {
        "character": "仔\u0005",
        "letter": "careful; attentive; cautious",
        "pinyin": "zǐxì"
    },
    "1176": {
        "character": "字",
        "letter": "letter; symbol; character; word; CL:個|个[gè]; courtesy or style name traditionally given to males aged",
        "pinyin": "zì"
    },
    "1177": {
        "character": "in",
        "letter": "China",
        "pinyin": "dynastic"
    },
    "1178": {
        "character": "字典",
        "letter": "dictionary; character dictionary; CL:本[běn]",
        "pinyin": "zìdiǎn"
    },
    "1179": {
        "character": "自己",
        "letter": "self; (reflexive pronoun); own",
        "pinyin": "zìjǐ"
    },
    "1180": {
        "character": "自然",
        "letter": "nature; natural; naturally",
        "pinyin": "zìrán"
    },
    "1181": {
        "character": "自行",
        "letter": "bicycle; bike; CL:輛|\u0004[liàng]",
        "pinyin": "zìxíngchē"
    },
    "1182": {
        "character": "\b",
        "letter": "to sum up; to conclude; summary; resume; CL:個| 个[gè]",
        "pinyin": "zǒngjié"
    },
    "1183": {
        "character": "\b是",
        "letter": "always",
        "pinyin": "zǒngshì"
    },
    "1184": {
        "character": "走",
        "letter": "to walk; to go; to run; to move (of vehicle); to visit; to leave; to go away; to die (euph.); from; through; away (in compound verbs, such as 撤 走); to change (shape, form, meaning)",
        "pinyin": "zǒu"
    },
    "1185": {
        "character": "租",
        "letter": "to hire; to rent; to charter; to rent out; to lease out; rent; land tax",
        "pinyin": "zū"
    },
    "1186": {
        "character": "成",
        "letter": "component; part; element; constitute; make up",
        "pinyin": "zǔchéng"
    },
    "1187": {
        "character": "\u0007",
        "letter": "to organize; organization; organized system; nerve; tissue; CL:個|个[gè]",
        "pinyin": "zǔzhī"
    },
    "1188": {
        "character": "嘴",
        "letter": "mouth; beak; spout (of teapot etc); CL:張|\u0006 [zhāng],個|个[gè]",
        "pinyin": "zuǐ"
    },
    "1189": {
        "character": "最",
        "letter": "most; the most; -est",
        "pinyin": "zuì"
    },
    "1190": {
        "character": "最好",
        "letter": "best; (you) had better (do what we suggest)",
        "pinyin": "zuìhǎo"
    },
    "1191": {
        "character": "最后",
        "letter": "final; last; finally; ultimate",
        "pinyin": "zuìhòu"
    },
    "1192": {
        "character": "最近",
        "letter": "recent; recently; these days; latest; soon; nearest (of locations); shortest (of routes)",
        "pinyin": "zuìjìn"
    },
    "1193": {
        "character": "尊重",
        "letter": "esteem; respect; to honor; to value sth",
        "pinyin": "zūnzhòng"
    },
    "1194": {
        "character": "昨天",
        "letter": "yesterday",
        "pinyin": "zuótiān"
    },
    "1195": {
        "character": "左\u0001",
        "letter": "left; the left side; to the left of  56/56",
        "pinyin": "zuǒbian"
    },
    "1196": {
        "character": "坐",
        "letter": "to sit; to take a seat; to take (a bus, airplane etc); to bear fruit; surname Zuo",
        "pinyin": "zuò"
    },
    "1197": {
        "character": "做",
        "letter": "to do; to make; to produce; to write; to compose; to act as; to engage in; to hold (a party); to be; to become; to function (in some capacity); to serve as; to be used for; to form (a bond or relationship); to pretend; to feign; to act a part; to put on appearance",
        "pinyin": "zuò"
    },
    "1198": {
        "character": "做生意",
        "letter": "to do business",
        "pinyin": "zuòshēngyì"
    },
    "1199": {
        "character": "座",
        "letter": "seat; base; stand; CL:個|个[gè]; classifier for buildings, mountains and similar immovable objects",
        "pinyin": "zuò"
    },
    "1200": {
        "character": "座位",
        "letter": "seat; CL:個|个[gè]",
        "pinyin": "zuòwèi"
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