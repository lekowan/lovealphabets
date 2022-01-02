// Configuration
const localStorageKey = "mandarin" + "Hsk3VocabularyEnglish" + "Srs";


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
const exerciseType = "vocabularyEnglish";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study new words and expressions from the HSK1 vocabulary list everyday. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
  "I or me": {
    "letter": "我 \n wǒ"
  },
  "you (singular)": {
    "letter": "你 \n nǐ"
  },
  "you (singular/honorific)": {
    "letter": "您 \n nín"
  },
  "he or him": {
    "letter": "他 \n tā"
  },
  "she or her": {
    "letter": "她 \n tā"
  },
  "it": {
    "letter": "它 \n tā"
  },
  "we or me": {
    "letter": "我们 \n wǒmen"
  },
  "oneself": {
    "letter": "自己 \n zìjǐ"
  },
  "everybody": {
    "letter": "大家 \n dàjiā"
  },
  "other": {
    "letter": "其他 \n qítā"
  },
  "other people": {
    "letter": "别人 \n biéren"
  },
  "this/here": {
    "letter": "这/这儿 \n zhè/zhèr"
  },
  "that/there": {
    "letter": "那/那儿 \n nà/nàr"
  },
  "which/where": {
    "letter": "哪/哪儿 \n nǎ/nǎr"
  },
  "who": {
    "letter": "谁 \n shéi"
  },
  "what": {
    "letter": "什么 \n shénme"
  },
  "how many or how much": {
    "letter": "几 \n jǐ"
  },
  "how": {
    "letter": "怎么 \n zěnme"
  },
  "how about": {
    "letter": "怎么样 \n zěnmeyàng"
  },
  "why": {
    "letter": "为什么 \n wèi shénme"
  },
  "now": {
    "letter": "现在 \n xiànzài"
  },
  "just now": {
    "letter": "刚才 \n gāngcái"
  },
  "today": {
    "letter": "今天 \n jīntiān"
  },
  "tomorrow": {
    "letter": "明天 \n míngtiān"
  },
  "yesterday": {
    "letter": "昨天 \n zuótiān"
  },
  "early morning": {
    "letter": "早上 \n zǎoshàng"
  },
  "morning": {
    "letter": "上午 \n shàngwǔ"
  },
  "noon": {
    "letter": "中午 \n zhōngwǔ"
  },
  "afternoon": {
    "letter": "下午 \n xiàwǔ"
  },
  "evening": {
    "letter": "晚上 \n wǎnshàng"
  },
  "o’clock": {
    "letter": "点 \n diǎn"
  },
  "hour": {
    "letter": "小时 \n xiǎoshí"
  },
  "minute": {
    "letter": "分钟 \n fēnzhōng"
  },
  "year": {
    "letter": "年 \n nián"
  },
  "month": {
    "letter": "月 \n yuè"
  },
  "day": {
    "letter": "日 \n rì"
  },
  "date or number": {
    "letter": "号 \n hào"
  },
  "week": {
    "letter": "星期 \n xīngqī"
  },
  "weekend": {
    "letter": "周末 \n zhōumò"
  },
  "a certain point in time": {
    "letter": "时候 \n shíhou"
  },
  "a period of time": {
    "letter": "时间 \n shíjiān"
  },
  "a short while": {
    "letter": "一会儿 \n yíhuìr"
  },
  "before or ago": {
    "letter": "以前 \n yǐqián"
  },
  "after or later": {
    "letter": "以后 \n yǐhòu"
  },
  "recent time": {
    "letter": "最近 \n zuìjìn"
  },
  "past": {
    "letter": "过去 \n guòqù"
  },
  "last year": {
    "letter": "去年 \n qùnián"
  },
  "season": {
    "letter": "季节 \n jìjié"
  },
  "spring": {
    "letter": "春 \n chūn"
  },
  "summer": {
    "letter": "夏 \n xià"
  },
  "autumn": {
    "letter": "秋 \n qiū"
  },
  "winter": {
    "letter": "冬 \n dōng"
  },
  "festival": {
    "letter": "节日 \n jiérì"
  },
  "birthday": {
    "letter": "生日 \n shēngrì"
  },
  "person or people": {
    "letter": "人 \n rén"
  },
  "man": {
    "letter": "男人 \n nánrén"
  },
  "woman": {
    "letter": "女人 \n nǚrén"
  },
  "name": {
    "letter": "名字 \n míngzì"
  },
  "mom": {
    "letter": "妈妈 \n māma"
  },
  "dad": {
    "letter": "爸爸 \n bàba"
  },
  "husband": {
    "letter": "丈夫 \n zhàngfu"
  },
  "wife": {
    "letter": "妻子 \n qīzi"
  },
  "child": {
    "letter": "孩子 \n háizi"
  },
  "son": {
    "letter": "儿子 \n érzi"
  },
  "daughter": {
    "letter": "女儿 \n nǚ’ér"
  },
  "elder brother": {
    "letter": "哥哥 \n gēge"
  },
  "elder sister": {
    "letter": "姐姐 \n jiějie"
  },
  "younger brother": {
    "letter": "弟弟 \n dìdi"
  },
  "younger sister": {
    "letter": "妹妹 \n mèimei"
  },
  "grandpa": {
    "letter": "爷爷 \n yéye"
  },
  "grandma": {
    "letter": "奶奶 \n nǎinai"
  },
  "uncle": {
    "letter": "叔叔 \n shūshu"
  },
  "aunt or maid": {
    "letter": "阿姨 \n āyí"
  },
  "friend": {
    "letter": "朋友 \n péngyǒu"
  },
  "guest": {
    "letter": "客人 \n kèren"
  },
  "neighbor": {
    "letter": "邻居 \n línjū"
  },
  "Mr or sir": {
    "letter": "先生 \n xiānsheng"
  },
  "Miss": {
    "letter": "小姐 \n xiǎojiě"
  },
  "teacher": {
    "letter": "老师 \n lǎoshī"
  },
  "student": {
    "letter": "学生 \n xuésheng"
  },
  "schoolmate": {
    "letter": "同学 \n tóngxué"
  },
  "colleague": {
    "letter": "同事 \n tóngshì"
  },
  "head of a school": {
    "letter": "校长 \n xiàozhǎng"
  },
  "doctor": {
    "letter": "医生 \n yīshēng"
  },
  "driver": {
    "letter": "司机 \n sījī"
  },
  "waiter or waitress": {
    "letter": "服务员 \n fúwùyuán"
  },
  "manager": {
    "letter": "经理 \n jīnglǐ"
  },
  "body": {
    "letter": "身体 \n shēntǐ"
  },
  "face": {
    "letter": "脸 \n liǎn"
  },
  "eye": {
    "letter": "眼睛 \n yǎnjīng"
  },
  "ear": {
    "letter": "耳朵 \n ěrduo"
  },
  "nose": {
    "letter": "鼻子 \n bízi"
  },
  "mouth": {
    "letter": "口 \n kǒu"
  },
  "hair": {
    "letter": "头发 \n tóufa"
  },
  "leg": {
    "letter": "腿 \n tuǐ"
  },
  "foot": {
    "letter": "脚 \n jiǎo"
  },
  "sound or voice": {
    "letter": "声音 \n shēngyīn"
  },
  "thing": {
    "letter": "东西 \n dōngxi"
  },
  "money": {
    "letter": "钱 \n qián"
  },
  "water": {
    "letter": "水 \n shuǐ"
  },
  "tea": {
    "letter": "茶 \n chá"
  },
  "coffee": {
    "letter": "咖啡 \n kāfēi"
  },
  "milk": {
    "letter": "牛奶 \n niúnǎi"
  },
  "bread": {
    "letter": "面包 \n miànbāo"
  },
  "cake": {
    "letter": "蛋糕 \n dàngāo"
  },
  "candy or sugar": {
    "letter": "糖 \n táng"
  },
  "dish": {
    "letter": "菜 \n cài"
  },
  "(cooked) rice": {
    "letter": "米饭 \n mǐfàn"
  },
  "noodle": {
    "letter": "面条 \n miàntiáo"
  },
  "egg": {
    "letter": "鸡蛋 \n jīdàn"
  },
  "fish": {
    "letter": "鱼 \n yú"
  },
  "lamb or mutton": {
    "letter": "羊肉 \n yángròu"
  },
  "menu": {
    "letter": "菜单 \n càidān"
  },
  "clothes": {
    "letter": "衣服 \n yīfu"
  },
  "shirt": {
    "letter": "衬衫 \n chènshān"
  },
  "pants": {
    "letter": "裤子 \n kùzi"
  },
  "skirt": {
    "letter": "裙子 \n qúnzi"
  },
  "hat or cap": {
    "letter": "帽子 \n màozi"
  },
  "shoe": {
    "letter": "鞋 \n xié"
  },
  "bag": {
    "letter": "包 \n bāo"
  },
  "suitcase": {
    "letter": "行李箱 \n xínglǐxiāng"
  },
  "umbrella": {
    "letter": "伞 \n sǎn"
  },
  "glasses": {
    "letter": "眼镜 \n yǎnjìng"
  },
  "book": {
    "letter": "书 \n shū"
  },
  "newspaper": {
    "letter": "报纸 \n bàozhǐ"
  },
  "dictionary": {
    "letter": "字典 \n zìdiǎn"
  },
  "map": {
    "letter": "地图 \n dìtú"
  },
  "ticket": {
    "letter": "票 \n piào"
  },
  "letter": {
    "letter": "信 \n xìn"
  },
  "photo": {
    "letter": "照片 \n zhàopiàn"
  },
  "passport": {
    "letter": "护照 \n hùzhào"
  },
  "camera": {
    "letter": "照相机 \n zhàoxiàngjī"
  },
  "table or desk": {
    "letter": "桌子 \n zhuōzi"
  },
  "chair": {
    "letter": "椅子 \n yǐzi"
  },
  "blackboard": {
    "letter": "黑板 \n hēibǎn"
  },
  "pencil": {
    "letter": "铅笔 \n qiānbǐ"
  },
  "fruit": {
    "letter": "水果 \n shuǐguǒ"
  },
  "apple": {
    "letter": "苹果 \n píngguǒ"
  },
  "banana": {
    "letter": "香蕉 \n xiāngjiāo"
  },
  "watermelon": {
    "letter": "西瓜 \n xīguā"
  },
  "grape": {
    "letter": "葡萄 \n pútáo"
  },
  "juice": {
    "letter": "果汁 \n guǒzhī"
  },
  "beer": {
    "letter": "啤酒 \n píjiǔ"
  },
  "grass": {
    "letter": "草 \n cǎo"
  },
  "medicine": {
    "letter": "药 \n yào"
  },
  "cup or glass": {
    "letter": "杯子 \n bēizi"
  },
  "bowl": {
    "letter": "碗 \n wǎn"
  },
  "chopsticks": {
    "letter": "筷子 \n kuàizi"
  },
  "plate": {
    "letter": "盘子 \n pánzi"
  },
  "watch": {
    "letter": "手表 \n shǒubiǎo"
  },
  "mobile phone": {
    "letter": "手机 \n shǒujī"
  },
  "TV": {
    "letter": "电视 \n diànshì"
  },
  "computer": {
    "letter": "电脑 \n diànnǎo"
  },
  "email": {
    "letter": "电子邮件 \n diànzǐ yóujiàn"
  },
  "refrigerator": {
    "letter": "冰箱 \n bīngxiāng"
  },
  "air conditioner": {
    "letter": "空调 \n kōngtiáo"
  },
  "light": {
    "letter": "灯 \n dēng"
  },
  "movie": {
    "letter": "电影 \n diànyǐng"
  },
  "gift": {
    "letter": "礼物 \n lǐwù"
  },
  "plane": {
    "letter": "飞机 \n fēijī"
  },
  "taxi": {
    "letter": "出租车 \n chūzūchē"
  },
  "bus": {
    "letter": "公共汽车 \n gōnggòng qìchē"
  },
  "metro": {
    "letter": "地铁 \n dìtiě"
  },
  "bike": {
    "letter": "自行车 \n zìxíngchē"
  },
  "boat": {
    "letter": "船 \n chuán"
  },
  "door": {
    "letter": "门 \n mén"
  },
  "elevator": {
    "letter": "电梯 \n diàntī"
  },
  "color": {
    "letter": "颜色 \n yánsè"
  },
  "animal": {
    "letter": "动物 \n dòngwù"
  },
  "cat": {
    "letter": "猫 \n māo"
  },
  "dog": {
    "letter": "狗 \n gǒu"
  },
  "horse": {
    "letter": "马 \n mǎ"
  },
  "panda": {
    "letter": "熊猫 \n xióngmāo"
  },
  "bird": {
    "letter": "鸟 \n niǎo"
  },
  "tree": {
    "letter": "树 \n shù"
  },
  "weather": {
    "letter": "天气 \n tiānqì"
  },
  "sun": {
    "letter": "太阳 \n tàiyáng"
  },
  "moon": {
    "letter": "月亮 \n yuèliang"
  },
  "cloud": {
    "letter": "云 \n yún"
  },
  "snow": {
    "letter": "雪 \n xuě"
  },
  "character": {
    "letter": "字 \n zì"
  },
  "word": {
    "letter": "词语 \n cíyǔ"
  },
  "sentence": {
    "letter": "句子 \n jùzi"
  },
  "Chinese (language)": {
    "letter": "汉语 \n Hànyǔ"
  },
  "(standard) Mandarin": {
    "letter": "普通话 \n pǔtōnghuà"
  },
  "math": {
    "letter": "数学 \n shùxué"
  },
  "lesson": {
    "letter": "课 \n kè"
  },
  "class": {
    "letter": "班 \n bān"
  },
  "grade": {
    "letter": "年级 \n niánjí"
  },
  "homework": {
    "letter": "作业 \n zuòyè"
  },
  "exam": {
    "letter": "考试 \n kǎoshì"
  },
  "score": {
    "letter": "成绩 \n chéngjì"
  },
  "level or standard": {
    "letter": "水平 \n shuǐpíng"
  },
  "question": {
    "letter": "问题 \n wèntí"
  },
  "question (exam, exercise)": {
    "letter": "题 \n tí"
  },
  "meaning": {
    "letter": "意思 \n yìsi"
  },
  "matter": {
    "letter": "事情 \n shìqing"
  },
  "interest": {
    "letter": "兴趣 \n xìngqù"
  },
  "hobby": {
    "letter": "爱好 \n àihào"
  },
  "music": {
    "letter": "音乐 \n yīnyuè"
  },
  "sports or physical education": {
    "letter": "体育 \n tǐyù"
  },
  "method": {
    "letter": "办法 \n bànfǎ"
  },
  "habit": {
    "letter": "习惯 \n xíguàn"
  },
  "match": {
    "letter": "比赛 \n bǐsài"
  },
  "game": {
    "letter": "游戏 \n yóuxì"
  },
  "story": {
    "letter": "故事 \n gùshi"
  },
  "relation": {
    "letter": "关系 \n guānxì"
  },
  "environment": {
    "letter": "环境 \n huánjìng"
  },
  "meeting": {
    "letter": "会议 \n huìyì"
  },
  "opportunity or chance": {
    "letter": "机会 \n jīhuì"
  },
  "program": {
    "letter": "节目 \n jiémù"
  },
  "world": {
    "letter": "世界 \n shìjiè"
  },
  "history": {
    "letter": "历史 \n lìshǐ"
  },
  "culture": {
    "letter": "文化 \n wénhuà"
  },
  "news": {
    "letter": "新闻 \n xīnwén"
  },
  "effect": {
    "letter": "作用 \n zuòyòng"
  },
  "China": {
    "letter": "中国 \n Zhōngguó"
  },
  "Beijing": {
    "letter": "北京 \n Běijīng"
  },
  "nation": {
    "letter": "国家 \n guójiā"
  },
  "city": {
    "letter": "城市 \n chéngshì"
  },
  "place": {
    "letter": "地方 \n dìfāng"
  },
  "home or family": {
    "letter": "家 \n jiā"
  },
  "building or floor": {
    "letter": "楼 \n lóu"
  },
  "room": {
    "letter": "房间 \n fángjiān"
  },
  "kitchen": {
    "letter": "厨房 \n chúfáng"
  },
  "washroom": {
    "letter": "洗手间 \n xǐshǒujiān"
  },
  "school": {
    "letter": "学校 \n xuéxiào"
  },
  "classroom": {
    "letter": "教室 \n jiàoshì"
  },
  "library": {
    "letter": "图书馆 \n túshūguǎn"
  },
  "company": {
    "letter": "公司 \n gōngsī"
  },
  "office": {
    "letter": "办公室 \n bàngōngshì"
  },
  "restaurant": {
    "letter": "饭馆 \n fànguǎn"
  },
  "hotel": {
    "letter": "宾馆 \n bīngguǎn"
  },
  "shop": {
    "letter": "商店 \n shāngdiàn"
  },
  "supermarket": {
    "letter": "超市 \n chāoshì"
  },
  "park": {
    "letter": "公园 \n gōngyuán"
  },
  "garden": {
    "letter": "花园 \n huāyuán"
  },
  "bank": {
    "letter": "银行 \n yínháng"
  },
  "hospital": {
    "letter": "医院 \n yīyuàn"
  },
  "airport": {
    "letter": "机场 \n jīchǎng"
  },
  "train station": {
    "letter": "火车站 \n huǒchēzhàn"
  },
  "road": {
    "letter": "路 \n lù"
  },
  "street": {
    "letter": "街道 \n jiēdào"
  },
  "river": {
    "letter": "河 \n hé"
  },
  "on, above or last": {
    "letter": "上 \n shàng"
  },
  "under, below or next": {
    "letter": "下 \n xià"
  },
  "left": {
    "letter": "左边 \n zuǒbiān"
  },
  "right": {
    "letter": "对 \n duì"
  },
  "middle": {
    "letter": "中间 \n zhōngjiān"
  },
  "side": {
    "letter": "旁边 \n pángbiān"
  },
  "surrounding area": {
    "letter": "附近 \n fùjìn"
  },
  "front": {
    "letter": "前面 \n qiánmiàn"
  },
  "back": {
    "letter": "后面 \n hòumiàn"
  },
  "inside": {
    "letter": "里 \n lǐ"
  },
  "outside": {
    "letter": "外 \n wài"
  },
  "east": {
    "letter": "东 \n dōng"
  },
  "south": {
    "letter": "南 \n nán"
  },
  "west": {
    "letter": "西 \n xī"
  },
  "north or northern China": {
    "letter": "北方 \n běifāng"
  },
  "generic measure word": {
    "letter": "个 \n gè"
  },
  "basic monetary unit of China": {
    "letter": "块 \n kuài"
  },
  "1/10 of Chinese Yuan": {
    "letter": "角 \n jiǎo"
  },
  "measure word for people": {
    "letter": "位 \n wèi"
  },
  "for books": {
    "letter": "本 \n běn"
  },
  "year (of age)": {
    "letter": "岁 \n suì"
  },
  "some": {
    "letter": "些 \n xiē"
  },
  "time (frequency of an act)": {
    "letter": "次 \n cì"
  },
  "kilo": {
    "letter": "公斤 \n gōngjīn"
  },
  "meter": {
    "letter": "米 \n mǐ"
  },
  "for affairs, clothes, furniture": {
    "letter": "件 \n jiàn"
  },
  "for flat objects": {
    "letter": "张 \n zhāng"
  },
  "for long objects": {
    "letter": "条 \n tiáo"
  },
  "for vehicles": {
    "letter": "辆 \n liàng"
  },
  "for things with a handle": {
    "letter": "把 \n bǎ"
  },
  "type": {
    "letter": "种 \n zhǒng"
  },
  "floor": {
    "letter": "层 \n céng"
  },
  "pair": {
    "letter": "双 \n shuāng"
  },
  "span of time or distance": {
    "letter": "段 \n duàn"
  },
  "quarter (time)": {
    "letter": "刻 \n kè"
  },
  "to do": {
    "letter": "做 \n zuò"
  },
  "to be": {
    "letter": "是 \n shì"
  },
  "to be surnamed": {
    "letter": "姓 \n xìng"
  },
  "to be in": {
    "letter": "在 \n zài"
  },
  "to have": {
    "letter": "有 \n yǒu"
  },
  "to live or to stay": {
    "letter": "住 \n zhù"
  },
  "to come": {
    "letter": "来 \n lái"
  },
  "to go": {
    "letter": "去 \n qù"
  },
  "to return": {
    "letter": "回 \n huí"
  },
  "to enter": {
    "letter": "进 \n jìn"
  },
  "to get out": {
    "letter": "出 \n chū"
  },
  "to arrive": {
    "letter": "到 \n dào"
  },
  "to think": {
    "letter": "想 \n xiǎng"
  },
  "to want": {
    "letter": "要 \n yào"
  },
  "to need": {
    "letter": "需要 \n xūyào"
  },
  "to eat": {
    "letter": "吃 \n chī"
  },
  "to drink": {
    "letter": "喝 \n hē"
  },
  "to speak": {
    "letter": "说话 \n shuōhuà"
  },
  "to say or to speak": {
    "letter": "讲 \n jiǎng"
  },
  "to tell": {
    "letter": "告诉 \n gàosù"
  },
  "to ask": {
    "letter": "问 \n wèn"
  },
  "to answer": {
    "letter": "回答 \n huídá"
  },
  "to look or to watch": {
    "letter": "看 \n kàn"
  },
  "to see": {
    "letter": "看见 \n kànjiàn"
  },
  "to listen": {
    "letter": "听 \n tīng"
  },
  "to smile or to laugh": {
    "letter": "笑 \n xiào"
  },
  "to cry": {
    "letter": "哭 \n kū"
  },
  "to meet": {
    "letter": "见面 \n jiànmiàn"
  },
  "to encounter": {
    "letter": "遇到 \n yùdào"
  },
  "to give": {
    "letter": "给 \n gěi"
  },
  "to give as a gift or to deliver": {
    "letter": "送 \n sòng"
  },
  "to bring": {
    "letter": "带 \n dài"
  },
  "to hold or to take": {
    "letter": "拿 \n ná"
  },
  "to put": {
    "letter": "放 \n fàng"
  },
  "to call": {
    "letter": "叫 \n jiào"
  },
  "to buy": {
    "letter": "买 \n mǎi"
  },
  "to sell": {
    "letter": "卖 \n mài"
  },
  "to wear": {
    "letter": "穿 \n chuān"
  },
  "to drive or to open": {
    "letter": "开 \n kāi"
  },
  "to close or to shut": {
    "letter": "关 \n guān"
  },
  "to sit": {
    "letter": "坐 \n zuò"
  },
  "to stand": {
    "letter": "站 \n zhàn"
  },
  "to read": {
    "letter": "读 \n dú"
  },
  "to write": {
    "letter": "写 \n xiě"
  },
  "to draw or to paint": {
    "letter": "画 \n huà"
  },
  "to wait": {
    "letter": "等 \n děng"
  },
  "to spend or to cost": {
    "letter": "花 \n huā"
  },
  "to make a phone call": {
    "letter": "打电话 \n dǎ diànhuà"
  },
  "to introduce": {
    "letter": "介绍 \n jièshào"
  },
  "to know": {
    "letter": "知道 \n zhīdao"
  },
  "to know well": {
    "letter": "了解 \n liǎojiě"
  },
  "to feel or to think": {
    "letter": "觉得 \n juédé"
  },
  "to think or to consider": {
    "letter": "认为 \n rènwéi"
  },
  "to think (wrongly)": {
    "letter": "以为 \n yǐwéi"
  },
  "to understand": {
    "letter": "明白 \n míngbai"
  },
  "to find": {
    "letter": "找 \n zhǎo"
  },
  "to discover": {
    "letter": "发现 \n fāxiàn"
  },
  "to remember": {
    "letter": "记得 \n jìde"
  },
  "to forget": {
    "letter": "忘记 \n wàngjì"
  },
  "to let": {
    "letter": "让 \n ràng"
  },
  "to make": {
    "letter": "使 \n shǐ"
  },
  "to use": {
    "letter": "用 \n yòng"
  },
  "to hope": {
    "letter": "希望 \n xīwàng"
  },
  "to help": {
    "letter": "帮忙 \n bāngmáng"
  },
  "to play": {
    "letter": "玩 \n wán"
  },
  "to learn": {
    "letter": "学习 \n xuéxí"
  },
  "to teach": {
    "letter": "教 \n jiāo"
  },
  "to review": {
    "letter": "复习 \n fùxí"
  },
  "to get online": {
    "letter": "上网 \n shàngwǎng"
  },
  "to work": {
    "letter": "工作 \n gōngzuò"
  },
  "to go to work": {
    "letter": "上班 \n shàng bān"
  },
  "to sleep": {
    "letter": "睡觉 \n shuìjiào"
  },
  "to get up": {
    "letter": "起床 \n qǐ chuáng"
  },
  "to brush teeth": {
    "letter": "刷牙 \n shuāyá"
  },
  "to bathe": {
    "letter": "洗澡 \n xǐzǎo"
  },
  "to like": {
    "letter": "喜欢 \n xǐhuan"
  },
  "to love": {
    "letter": "爱 \n ài"
  },
  "to sing": {
    "letter": "唱歌 \n chàng gē"
  },
  "to dance": {
    "letter": "跳舞 \n tiào wǔ"
  },
  "to travel": {
    "letter": "旅游 \n lǚyóu"
  },
  "to do sports": {
    "letter": "运动 \n yùndòng"
  },
  "to walk": {
    "letter": "走 \n zǒu"
  },
  "to run": {
    "letter": "跑步 \n pǎo bù"
  },
  "to swim": {
    "letter": "游泳 \n yóu yǒng"
  },
  "to ride": {
    "letter": "骑 \n qí"
  },
  "to play soccer": {
    "letter": "踢足球 \n tī zúqiú"
  },
  "to play basketball": {
    "letter": "打篮球 \n dǎ lánqiú"
  },
  "to climb mountain": {
    "letter": "爬山 \n pá shān"
  },
  "to work out": {
    "letter": "锻炼 \n duànliàn"
  },
  "to rest": {
    "letter": "休息 \n xiūxi"
  },
  "to get sick": {
    "letter": "生病 \n shēng bìng"
  },
  "to have a fever": {
    "letter": "发烧 \n fāshāo"
  },
  "to have a cold": {
    "letter": "感冒 \n gǎnmào"
  },
  "to ache": {
    "letter": "疼 \n téng"
  },
  "to wash": {
    "letter": "洗 \n xǐ"
  },
  "to begin": {
    "letter": "开始 \n kāishǐ"
  },
  "to finish": {
    "letter": "完 \n wán"
  },
  "to end": {
    "letter": "结束 \n jiéshù"
  },
  "to complete or accomplish": {
    "letter": "完成 \n wánchéng"
  },
  "to plan": {
    "letter": "打算 \n dǎsuàn"
  },
  "to decide": {
    "letter": "决定 \n juédìng"
  },
  "to choose": {
    "letter": "选择 \n xuǎnzé"
  },
  "to prepare": {
    "letter": "准备. \n zhǔnbèi"
  },
  "to agree": {
    "letter": "同意 \n tóngyì"
  },
  "to solve": {
    "letter": "解决 \n jiějué"
  },
  "to worry": {
    "letter": "着急 \n zháojí"
  },
  "to get angry": {
    "letter": "生气 \n shēngqì"
  },
  "to welcome": {
    "letter": "欢迎 \n huānyíng"
  },
  "to move": {
    "letter": "搬 \n bān"
  },
  "to return (sth)": {
    "letter": "还 \n huán"
  },
  "to catch or to pick up": {
    "letter": "接 \n jiē"
  },
  "to compare": {
    "letter": "比较 \n bǐjiào"
  },
  "to change": {
    "letter": "变化 \n biànhuà"
  },
  "to exchange": {
    "letter": "换 \n huàn"
  },
  "to borrow or to lend": {
    "letter": "借 \n jiè"
  },
  "to express": {
    "letter": "表示 \n biǎoshì"
  },
  "to require": {
    "letter": "要求 \n yāoqiú"
  },
  "to wish": {
    "letter": "祝 \n zhù"
  },
  "to pay attention to": {
    "letter": "注意 \n zhùyì"
  },
  "to perform": {
    "letter": "表演 \n biǎoyǎn"
  },
  "to attend": {
    "letter": "参加 \n cānjiā"
  },
  "to be late": {
    "letter": "迟到 \n chídào"
  },
  "to appear": {
    "letter": "出现 \n chūxiàn"
  },
  "to leave": {
    "letter": "离开 \n líkāi"
  },
  "to pass": {
    "letter": "经过 \n jīngguò"
  },
  "to practice": {
    "letter": "练习 \n liànxí"
  },
  "to improve": {
    "letter": "提高 \n tígāo"
  },
  "to check": {
    "letter": "检查 \n jiǎnchá"
  },
  "to clean": {
    "letter": "打扫 \n dǎsǎo"
  },
  "to believe": {
    "letter": "相信 \n xiāngxìn"
  },
  "to rest assured": {
    "letter": "放心 \n fàngxīn"
  },
  "to concern": {
    "letter": "关心 \n guānxīn"
  },
  "to look after": {
    "letter": "照顾 \n zhàogù"
  },
  "to divide or separate": {
    "letter": "分 \n fēn"
  },
  "to grow": {
    "letter": "长 \n zhǎng"
  },
  "to dare": {
    "letter": "敢 \n gǎn"
  },
  "to fear": {
    "letter": "害怕 \n hàipà"
  },
  "to be careful": {
    "letter": "小心 \n xiǎoxīn"
  },
  "to affect": {
    "letter": "影响 \n yǐngxiǎng"
  },
  "to marry": {
    "letter": "结婚 \n jiéhūn"
  },
  "to hold (event)": {
    "letter": "举行 \n jǔxíng"
  },
  "can (to know how to)": {
    "letter": "会 \n huì"
  },
  "can (to be able to)": {
    "letter": "能 \n néng"
  },
  "can (to be permitted to)": {
    "letter": "可以 \n kěyǐ"
  },
  "must": {
    "letter": "必须 \n bìxū"
  },
  "should": {
    "letter": "应该 \n yīnggāi"
  },
  "to be willing to": {
    "letter": "愿意 \n yuànyì"
  },
  "to rain": {
    "letter": "下雨 \n xià yǔ"
  },
  "to blow (wind)": {
    "letter": "刮风 \n guā fēng"
  },
  "good": {
    "letter": "好 \n hǎo"
  },
  "bad": {
    "letter": "坏 \n huài"
  },
  "bad (in quality)": {
    "letter": "差 \n chà"
  },
  "big": {
    "letter": "大 \n dà"
  },
  "small": {
    "letter": "小 \n xiǎo"
  },
  "many": {
    "letter": "多 \n duō"
  },
  "few": {
    "letter": "少 \n shǎo"
  },
  "hot": {
    "letter": "热 \n rè"
  },
  "cold": {
    "letter": "冷 \n lěng"
  },
  "fast": {
    "letter": "快 \n kuài"
  },
  "slow": {
    "letter": "慢 \n màn"
  },
  "far": {
    "letter": "远 \n yuǎn"
  },
  "near": {
    "letter": "近 \n jìn"
  },
  "wrong": {
    "letter": "错 \n cuò"
  },
  "long": {
    "letter": "长 \n cháng"
  },
  "long (in time)": {
    "letter": "久 \n jiǔ"
  },
  "short": {
    "letter": "短 \n duǎn"
  },
  "tall or high": {
    "letter": "高 \n gāo"
  },
  "short (in height)": {
    "letter": "矮 \n ǎi"
  },
  "low": {
    "letter": "低 \n dī"
  },
  "fat": {
    "letter": "胖 \n pàng"
  },
  "thin": {
    "letter": "瘦 \n shòu"
  },
  "new": {
    "letter": "新 \n xīn"
  },
  "old or used": {
    "letter": "旧 \n jiù"
  },
  "young": {
    "letter": "年轻 \n niánqīng"
  },
  "old (in age)": {
    "letter": "老 \n lǎo"
  },
  "expensive": {
    "letter": "贵 \n guì"
  },
  "cheap": {
    "letter": "便宜 \n piányi"
  },
  "black": {
    "letter": "黑 \n hēi"
  },
  "white": {
    "letter": "白 \n bái"
  },
  "red": {
    "letter": "红 \n hóng"
  },
  "yellow": {
    "letter": "黄 \n huáng"
  },
  "blue": {
    "letter": "蓝 \n lán"
  },
  "green": {
    "letter": "绿 \n lǜ"
  },
  "sunny": {
    "letter": "晴 \n qíng"
  },
  "cloudy": {
    "letter": "阴 \n yīn"
  },
  "tasty": {
    "letter": "好吃 \n hǎochī"
  },
  "sweet": {
    "letter": "甜 \n tián"
  },
  "fresh": {
    "letter": "新鲜 \n xīnxiān"
  },
  "easy": {
    "letter": "容易 \n róngyì"
  },
  "simple": {
    "letter": "简单 \n jiǎndān"
  },
  "difficult": {
    "letter": "难 \n nán"
  },
  "strange": {
    "letter": "奇怪 \n qíguài"
  },
  "special": {
    "letter": "特别 \n tèbié"
  },
  "important": {
    "letter": "重要 \n zhòngyào"
  },
  "famous": {
    "letter": "有名 \n yǒumíng"
  },
  "pretty": {
    "letter": "漂亮 \n piàoliang"
  },
  "smart": {
    "letter": "聪明 \n cōngming"
  },
  "cute": {
    "letter": "可爱 \n Kě’ài"
  },
  "happy": {
    "letter": "快乐 \n kuàilè"
  },
  "sad": {
    "letter": "难过 \n nánguò"
  },
  "satisfied": {
    "letter": "满意 \n mǎnyì"
  },
  "busy": {
    "letter": "忙 \n máng"
  },
  "tired": {
    "letter": "累 \n lèi"
  },
  "hungry": {
    "letter": "饿 \n è"
  },
  "thirsty": {
    "letter": "渴 \n kě"
  },
  "full": {
    "letter": "饱 \n bǎo"
  },
  "same": {
    "letter": "一样 \n yíyàng"
  },
  "main": {
    "letter": "主要 \n zhǔyào"
  },
  "convenient": {
    "letter": "方便 \n fāngbiàn"
  },
  "quiet": {
    "letter": "安静 \n ānjìng"
  },
  "clean": {
    "letter": "干净 \n gānjìng"
  },
  "clear": {
    "letter": "清楚 \n qīngchu"
  },
  "healthy": {
    "letter": "健康 \n jiànkāng"
  },
  "comfortable": {
    "letter": "舒服 \n shūfu"
  },
  "enthusiastic": {
    "letter": "热情 \n rèqíng"
  },
  "serious or careful": {
    "letter": "认真 \n rènzhēn"
  },
  "studious or hardworking": {
    "letter": "努力 \n nǔlì"
  },
  "very": {
    "letter": "很 \n hěn"
  },
  "extremely": {
    "letter": "极 \n jí"
  },
  "too…": {
    "letter": "太 \n tài"
  },
  "how…": {
    "letter": "多么 \n duōme"
  },
  "both or all": {
    "letter": "都 \n dōu"
  },
  "not": {
    "letter": "没 \n méi"
  },
  "every": {
    "letter": "每 \n měi"
  },
  "most": {
    "letter": "最 \n zuì"
  },
  "really": {
    "letter": "真 \n zhēn"
  },
  "also": {
    "letter": "也 \n yě"
  },
  "still": {
    "letter": "还 \n hái"
  },
  "again": {
    "letter": "又 \n yòu"
  },
  "only": {
    "letter": "只 \n zhǐ"
  },
  "at once": {
    "letter": "就 \n jiǜ"
  },
  "immediately": {
    "letter": "马上 \n mǎshàng"
  },
  "just": {
    "letter": "才 \n cái"
  },
  "more": {
    "letter": "越 \n yuè"
  },
  "don’t…": {
    "letter": "别 \n bié"
  },
  "first": {
    "letter": "第一 \n dì-yī"
  },
  "already": {
    "letter": "已经 \n yǐjīng"
  },
  "almost": {
    "letter": "几乎 \n jīhū"
  },
  "definitely": {
    "letter": "一定 \n yídìng"
  },
  "together": {
    "letter": "一起 \n yìqǐ"
  },
  "altogether": {
    "letter": "一共 \n yígòng"
  },
  "maybe": {
    "letter": "可能 \n kěnéng"
  },
  "actually": {
    "letter": "其实 \n qíshí"
  },
  "suddenly": {
    "letter": "突然 \n tūrán"
  },
  "indicating action in progress": {
    "letter": "正在 \n zhèngzài"
  },
  "at the same time": {
    "letter": "一边 \n yìbiān"
  },
  "finally": {
    "letter": "终于 \n zhōngyú"
  },
  "always": {
    "letter": "总是 \n zǒngshì"
  },
  "often": {
    "letter": "经常 \n jīngcháng"
  },
  "generally": {
    "letter": "一般 \n yìbān"
  },
  "constantly": {
    "letter": "一直 \n yìzhí"
  },
  "from": {
    "letter": "从 \n cóng"
  },
  "towards": {
    "letter": "向 \n xiàng"
  },
  "away from": {
    "letter": "离 \n lí"
  },
  "than": {
    "letter": "比 \n bǐ"
  },
  "with": {
    "letter": "跟 \n gēn"
  },
  "by": {
    "letter": "被 \n bèi"
  },
  "for (sb/sth)": {
    "letter": "为 \n wèi"
  },
  "for (purpose)": {
    "letter": "为了 \n wèile"
  },
  "about, regarding": {
    "letter": "关于 \n guānyú"
  },
  "as or like": {
    "letter": "像 \n xiàng"
  },
  "besides or except": {
    "letter": "除了 \n chúle"
  },
  "according to": {
    "letter": "根据 \n gēnjù"
  },
  "possession particle": {
    "letter": "的 \n de"
  },
  "structure particle": {
    "letter": "地 \n de"
  },
  "aspect particle": {
    "letter": "过 \n guò"
  },
  "question particle": {
    "letter": "吧 \n ba"
  },
  "exclamatory particle": {
    "letter": "啊 \n a"
  },
  "and": {
    "letter": "和 \n hé"
  },
  "but": {
    "letter": "但是 \n dànshì"
  },
  "although": {
    "letter": "虽然 \n suīrán"
  },
  "because": {
    "letter": "因为 \n yīnwèi"
  },
  "so": {
    "letter": "所以 \n suǒyǐ"
  },
  "or": {
    "letter": "或者 \n huòzhě"
  },
  "then, afterwards": {
    "letter": "然后 \n ránhòu"
  },
  "if": {
    "letter": "如果 \n rúguǒ"
  },
  "moreover": {
    "letter": "而且 \n érqiě"
  },
  "hello (on the phone)": {
    "letter": "喂 \n wèi"
  },
  "thanks": {
    "letter": "谢谢 \n xièxie"
  },
  "you’re welcome": {
    "letter": "不客气 \n bú kèqi"
  },
  "goodbye": {
    "letter": "再见 \n zàijiàn"
  },
  "please…": {
    "letter": "请 \n qǐng"
  },
  "sorry": {
    "letter": "对不起 \n duìbuqǐ"
  },
  "it’s all right": {
    "letter": "没关系 \n méi guānxi"
  },
  "of course": {
    "letter": "当然 \n dāngrán"
  },
  "zero": {
    "letter": "零 \n líng"
  },
  "one": {
    "letter": "一 \n yī"
  },
  "two": {
    "letter": "两 \n liǎng"
  },
  "three": {
    "letter": "三 \n sān"
  },
  "four": {
    "letter": "四 \n sì"
  },
  "five": {
    "letter": "五 \n wǔ"
  },
  "six": {
    "letter": "六 \n liù"
  },
  "seven": {
    "letter": "七 \n qī"
  },
  "eight": {
    "letter": "八 \n bā"
  },
  "nine": {
    "letter": "九 \n jiǔ"
  },
  "ten": {
    "letter": "十 \n shí"
  },
  "hundred": {
    "letter": "百 \n bǎi"
  },
  "thousand": {
    "letter": "千 \n qiān"
  },
  "ten thousand": {
    "letter": "万 \n wàn"
  },
  "half": {
    "letter": "半 \n bàn"
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

