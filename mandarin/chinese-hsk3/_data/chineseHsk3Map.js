// Exercise Type (character, vocabulary )
const chineseHsk3ChartType = "vocabulary";

const chineseHsk3Map = {
  "我  (wǒ)": {
    "letter": "I or me"
  },
  "你  (nǐ)": {
    "letter": "you (singular)"
  },
  "您  (nín)": {
    "letter": "you (singular/honorific)"
  },
  "他  (tā)": {
    "letter": "he or him"
  },
  "她  (tā)": {
    "letter": "she or her"
  },
  "它  (tā)": {
    "letter": "it"
  },
  "我们  (wǒmen)": {
    "letter": "we or me"
  },
  "自己  (zìjǐ)": {
    "letter": "oneself"
  },
  "大家  (dàjiā)": {
    "letter": "everybody"
  },
  "其他  (qítā)": {
    "letter": "other"
  },
  "别人  (biéren)": {
    "letter": "other people"
  },
  "这/这儿  (zhè/zhèr)": {
    "letter": "this/here"
  },
  "那/那儿  (nà/nàr)": {
    "letter": "that/there"
  },
  "哪/哪儿  (nǎ/nǎr)": {
    "letter": "which/where"
  },
  "谁  (shéi)": {
    "letter": "who"
  },
  "什么  (shénme)": {
    "letter": "what"
  },
  "多少  (duōshao)": {
    "letter": "how many or how much"
  },
  "几  (jǐ)": {
    "letter": "how many or how much"
  },
  "怎么  (zěnme)": {
    "letter": "how"
  },
  "怎么样  (zěnmeyàng)": {
    "letter": "how about"
  },
  "为什么  (wèi shénme)": {
    "letter": "why"
  },
  "现在  (xiànzài)": {
    "letter": "now"
  },
  "刚才  (gāngcái)": {
    "letter": "just now"
  },
  "今天  (jīntiān)": {
    "letter": "today"
  },
  "明天  (míngtiān)": {
    "letter": "tomorrow"
  },
  "昨天  (zuótiān)": {
    "letter": "yesterday"
  },
  "早上  (zǎoshàng)": {
    "letter": "early morning"
  },
  "上午  (shàngwǔ)": {
    "letter": "morning"
  },
  "中午  (zhōngwǔ)": {
    "letter": "noon"
  },
  "下午  (xiàwǔ)": {
    "letter": "afternoon"
  },
  "晚上  (wǎnshàng)": {
    "letter": "evening"
  },
  "点  (diǎn)": {
    "letter": "o’clock"
  },
  "小时  (xiǎoshí)": {
    "letter": "hour"
  },
  "分钟  (fēnzhōng)": {
    "letter": "minute"
  },
  "年  (nián)": {
    "letter": "year"
  },
  "月  (yuè)": {
    "letter": "month"
  },
  "日  (rì)": {
    "letter": "day"
  },
  "号  (hào)": {
    "letter": "date or number"
  },
  "星期  (xīngqī)": {
    "letter": "week"
  },
  "周末  (zhōumò)": {
    "letter": "weekend"
  },
  "时候  (shíhou)": {
    "letter": "a certain point in time"
  },
  "时间  (shíjiān)": {
    "letter": "a period of time"
  },
  "一会儿  (yíhuìr)": {
    "letter": "a short while"
  },
  "以前  (yǐqián)": {
    "letter": "before or ago"
  },
  "以后  (yǐhòu)": {
    "letter": "after or later"
  },
  "最近  (zuìjìn)": {
    "letter": "recent time"
  },
  "过去  (guòqù)": {
    "letter": "past"
  },
  "去年  (qùnián)": {
    "letter": "last year"
  },
  "季节  (jìjié)": {
    "letter": "season"
  },
  "春  (chūn)": {
    "letter": "spring"
  },
  "夏  (xià)": {
    "letter": "summer"
  },
  "秋  (qiū)": {
    "letter": "autumn"
  },
  "冬  (dōng)": {
    "letter": "winter"
  },
  "节日  (jiérì)": {
    "letter": "festival"
  },
  "生日  (shēngrì)": {
    "letter": "birthday"
  },
  "人  (rén)": {
    "letter": "person or people"
  },
  "男人  (nánrén)": {
    "letter": "man"
  },
  "女人  (nǚrén)": {
    "letter": "woman"
  },
  "名字  (míngzì)": {
    "letter": "name"
  },
  "妈妈  (māma)": {
    "letter": "mom"
  },
  "爸爸  (bàba)": {
    "letter": "dad"
  },
  "丈夫  (zhàngfu)": {
    "letter": "husband"
  },
  "妻子  (qīzi)": {
    "letter": "wife"
  },
  "孩子  (háizi)": {
    "letter": "child"
  },
  "儿子  (érzi)": {
    "letter": "son"
  },
  "女儿  (nǚ’ér)": {
    "letter": "daughter"
  },
  "哥哥  (gēge)": {
    "letter": "elder brother"
  },
  "姐姐  (jiějie)": {
    "letter": "elder sister"
  },
  "弟弟  (dìdi)": {
    "letter": "younger brother"
  },
  "妹妹  (mèimei)": {
    "letter": "younger sister"
  },
  "爷爷  (yéye)": {
    "letter": "grandpa"
  },
  "奶奶  (nǎinai)": {
    "letter": "grandma"
  },
  "叔叔  (shūshu)": {
    "letter": "uncle"
  },
  "阿姨  (āyí)": {
    "letter": "aunt or maid"
  },
  "朋友  (péngyǒu)": {
    "letter": "friend"
  },
  "客人  (kèren)": {
    "letter": "guest"
  },
  "邻居  (línjū)": {
    "letter": "neighbor"
  },
  "先生  (xiānsheng)": {
    "letter": "Mr or sir"
  },
  "小姐  (xiǎojiě)": {
    "letter": "Miss"
  },
  "老师  (lǎoshī)": {
    "letter": "teacher"
  },
  "学生  (xuésheng)": {
    "letter": "student"
  },
  "同学  (tóngxué)": {
    "letter": "schoolmate"
  },
  "同事  (tóngshì)": {
    "letter": "colleague"
  },
  "校长  (xiàozhǎng)": {
    "letter": "head of a school"
  },
  "医生  (yīshēng)": {
    "letter": "doctor"
  },
  "司机  (sījī)": {
    "letter": "driver"
  },
  "服务员  (fúwùyuán)": {
    "letter": "waiter or waitress"
  },
  "经理  (jīnglǐ)": {
    "letter": "manager"
  },
  "身体  (shēntǐ)": {
    "letter": "body"
  },
  "脸  (liǎn)": {
    "letter": "face"
  },
  "眼睛  (yǎnjīng)": {
    "letter": "eye"
  },
  "耳朵  (ěrduo)": {
    "letter": "ear"
  },
  "鼻子  (bízi)": {
    "letter": "nose"
  },
  "口  (kǒu)": {
    "letter": "mouth"
  },
  "头发  (tóufa)": {
    "letter": "hair"
  },
  "腿  (tuǐ)": {
    "letter": "leg"
  },
  "脚  (jiǎo)": {
    "letter": "foot"
  },
  "声音  (shēngyīn)": {
    "letter": "sound or voice"
  },
  "东西  (dōngxi)": {
    "letter": "thing"
  },
  "钱  (qián)": {
    "letter": "money"
  },
  "水  (shuǐ)": {
    "letter": "water"
  },
  "茶  (chá)": {
    "letter": "tea"
  },
  "咖啡  (kāfēi)": {
    "letter": "coffee"
  },
  "牛奶  (niúnǎi)": {
    "letter": "milk"
  },
  "面包  (miànbāo)": {
    "letter": "bread"
  },
  "蛋糕  (dàngāo)": {
    "letter": "cake"
  },
  "糖  (táng)": {
    "letter": "candy or sugar"
  },
  "菜  (cài)": {
    "letter": "dish"
  },
  "米饭  (mǐfàn)": {
    "letter": "(cooked) rice"
  },
  "面条  (miàntiáo)": {
    "letter": "noodle"
  },
  "鸡蛋  (jīdàn)": {
    "letter": "egg"
  },
  "鱼  (yú)": {
    "letter": "fish"
  },
  "羊肉  (yángròu)": {
    "letter": "lamb or mutton"
  },
  "菜单  (càidān)": {
    "letter": "menu"
  },
  "衣服  (yīfu)": {
    "letter": "clothes"
  },
  "衬衫  (chènshān)": {
    "letter": "shirt"
  },
  "裤子  (kùzi)": {
    "letter": "pants"
  },
  "裙子  (qúnzi)": {
    "letter": "skirt"
  },
  "帽子  (màozi)": {
    "letter": "hat or cap"
  },
  "鞋  (xié)": {
    "letter": "shoe"
  },
  "包  (bāo)": {
    "letter": "bag"
  },
  "行李箱  (xínglǐxiāng)": {
    "letter": "suitcase"
  },
  "伞  (sǎn)": {
    "letter": "umbrella"
  },
  "眼镜  (yǎnjìng)": {
    "letter": "glasses"
  },
  "书  (shū)": {
    "letter": "book"
  },
  "报纸  (bàozhǐ)": {
    "letter": "newspaper"
  },
  "字典  (zìdiǎn)": {
    "letter": "dictionary"
  },
  "地图  (dìtú)": {
    "letter": "map"
  },
  "票  (piào)": {
    "letter": "ticket"
  },
  "信  (xìn)": {
    "letter": "letter"
  },
  "照片  (zhàopiàn)": {
    "letter": "photo"
  },
  "护照  (hùzhào)": {
    "letter": "passport"
  },
  "照相机  (zhàoxiàngjī)": {
    "letter": "camera"
  },
  "桌子  (zhuōzi)": {
    "letter": "table or desk"
  },
  "椅子  (yǐzi)": {
    "letter": "chair"
  },
  "黑板  (hēibǎn)": {
    "letter": "blackboard"
  },
  "铅笔  (qiānbǐ)": {
    "letter": "pencil"
  },
  "水果  (shuǐguǒ)": {
    "letter": "fruit"
  },
  "苹果  (píngguǒ)": {
    "letter": "apple"
  },
  "香蕉  (xiāngjiāo)": {
    "letter": "banana"
  },
  "西瓜  (xīguā)": {
    "letter": "watermelon"
  },
  "葡萄  (pútáo)": {
    "letter": "grape"
  },
  "果汁  (guǒzhī)": {
    "letter": "juice"
  },
  "啤酒  (píjiǔ)": {
    "letter": "beer"
  },
  "草  (cǎo)": {
    "letter": "grass"
  },
  "药  (yào)": {
    "letter": "medicine"
  },
  "杯子  (bēizi)": {
    "letter": "cup or glass"
  },
  "碗  (wǎn)": {
    "letter": "bowl"
  },
  "筷子  (kuàizi)": {
    "letter": "chopsticks"
  },
  "盘子  (pánzi)": {
    "letter": "plate"
  },
  "手表  (shǒubiǎo)": {
    "letter": "watch"
  },
  "手机  (shǒujī)": {
    "letter": "mobile phone"
  },
  "电视  (diànshì)": {
    "letter": "TV"
  },
  "电脑  (diànnǎo)": {
    "letter": "computer"
  },
  "电子邮件  (diànzǐ yóujiàn)": {
    "letter": "email"
  },
  "冰箱  (bīngxiāng)": {
    "letter": "refrigerator"
  },
  "空调  (kōngtiáo)": {
    "letter": "air conditioner"
  },
  "灯  (dēng)": {
    "letter": "light"
  },
  "电影  (diànyǐng)": {
    "letter": "movie"
  },
  "礼物  (lǐwù)": {
    "letter": "gift"
  },
  "飞机  (fēijī)": {
    "letter": "plane"
  },
  "出租车  (chūzūchē)": {
    "letter": "taxi"
  },
  "公共汽车  (gōnggòng qìchē)": {
    "letter": "bus"
  },
  "地铁  (dìtiě)": {
    "letter": "metro"
  },
  "自行车  (zìxíngchē)": {
    "letter": "bike"
  },
  "船  (chuán)": {
    "letter": "boat"
  },
  "门  (mén)": {
    "letter": "door"
  },
  "电梯  (diàntī)": {
    "letter": "elevator"
  },
  "颜色  (yánsè)": {
    "letter": "color"
  },
  "动物  (dòngwù)": {
    "letter": "animal"
  },
  "猫  (māo)": {
    "letter": "cat"
  },
  "狗  (gǒu)": {
    "letter": "dog"
  },
  "马  (mǎ)": {
    "letter": "horse"
  },
  "熊猫  (xióngmāo)": {
    "letter": "panda"
  },
  "鸟  (niǎo)": {
    "letter": "bird"
  },
  "树  (shù)": {
    "letter": "tree"
  },
  "天气  (tiānqì)": {
    "letter": "weather"
  },
  "太阳  (tàiyáng)": {
    "letter": "sun"
  },
  "月亮  (yuèliang)": {
    "letter": "moon"
  },
  "云  (yún)": {
    "letter": "cloud"
  },
  "雪  (xuě)": {
    "letter": "snow"
  },
  "字  (zì)": {
    "letter": "character"
  },
  "词语  (cíyǔ)": {
    "letter": "word"
  },
  "句子  (jùzi)": {
    "letter": "sentence"
  },
  "汉语  (Hànyǔ)": {
    "letter": "Chinese (language)"
  },
  "普通话  (pǔtōnghuà)": {
    "letter": "(standard) Mandarin"
  },
  "数学  (shùxué)": {
    "letter": "math"
  },
  "课  (kè)": {
    "letter": "lesson"
  },
  "班  (bān)": {
    "letter": "class"
  },
  "年级  (niánjí)": {
    "letter": "grade"
  },
  "作业  (zuòyè)": {
    "letter": "homework"
  },
  "考试  (kǎoshì)": {
    "letter": "exam"
  },
  "成绩  (chéngjì)": {
    "letter": "score"
  },
  "水平  (shuǐpíng)": {
    "letter": "level or standard"
  },
  "问题  (wèntí)": {
    "letter": "question"
  },
  "题  (tí)": {
    "letter": "question (exam, exercise)"
  },
  "意思  (yìsi)": {
    "letter": "meaning"
  },
  "事情  (shìqing)": {
    "letter": "matter"
  },
  "兴趣  (xìngqù)": {
    "letter": "interest"
  },
  "爱好  (àihào)": {
    "letter": "hobby"
  },
  "音乐  (yīnyuè)": {
    "letter": "music"
  },
  "体育  (tǐyù)": {
    "letter": "sports or physical education"
  },
  "办法  (bànfǎ)": {
    "letter": "method"
  },
  "习惯  (xíguàn)": {
    "letter": "habit"
  },
  "比赛  (bǐsài)": {
    "letter": "match"
  },
  "游戏  (yóuxì)": {
    "letter": "game"
  },
  "故事  (gùshi)": {
    "letter": "story"
  },
  "关系  (guānxì)": {
    "letter": "relation"
  },
  "环境  (huánjìng)": {
    "letter": "environment"
  },
  "会议  (huìyì)": {
    "letter": "meeting"
  },
  "机会  (jīhuì)": {
    "letter": "opportunity or chance"
  },
  "节目  (jiémù)": {
    "letter": "program"
  },
  "世界  (shìjiè)": {
    "letter": "world"
  },
  "历史  (lìshǐ)": {
    "letter": "history"
  },
  "文化  (wénhuà)": {
    "letter": "culture"
  },
  "新闻  (xīnwén)": {
    "letter": "news"
  },
  "作用  (zuòyòng)": {
    "letter": "effect"
  },
  "中国  (Zhōngguó)": {
    "letter": "China"
  },
  "北京  (Běijīng)": {
    "letter": "Beijing"
  },
  "国家  (guójiā)": {
    "letter": "nation"
  },
  "城市  (chéngshì)": {
    "letter": "city"
  },
  "地方  (dìfāng)": {
    "letter": "place"
  },
  "家  (jiā)": {
    "letter": "home or family"
  },
  "楼  (lóu)": {
    "letter": "building or floor"
  },
  "房间  (fángjiān)": {
    "letter": "room"
  },
  "厨房  (chúfáng)": {
    "letter": "kitchen"
  },
  "洗手间  (xǐshǒujiān)": {
    "letter": "washroom"
  },
  "学校  (xuéxiào)": {
    "letter": "school"
  },
  "教室  (jiàoshì)": {
    "letter": "classroom"
  },
  "图书馆  (túshūguǎn)": {
    "letter": "library"
  },
  "公司  (gōngsī)": {
    "letter": "company"
  },
  "办公室  (bàngōngshì)": {
    "letter": "office"
  },
  "饭馆  (fànguǎn)": {
    "letter": "restaurant"
  },
  "宾馆  (bīngguǎn)": {
    "letter": "hotel"
  },
  "商店  (shāngdiàn)": {
    "letter": "shop"
  },
  "超市  (chāoshì)": {
    "letter": "supermarket"
  },
  "公园  (gōngyuán)": {
    "letter": "park"
  },
  "花园  (huāyuán)": {
    "letter": "garden"
  },
  "银行  (yínháng)": {
    "letter": "bank"
  },
  "医院  (yīyuàn)": {
    "letter": "hospital"
  },
  "机场  (jīchǎng)": {
    "letter": "airport"
  },
  "火车站  (huǒchēzhàn)": {
    "letter": "train station"
  },
  "路  (lù)": {
    "letter": "road"
  },
  "街道  (jiēdào)": {
    "letter": "street"
  },
  "河  (hé)": {
    "letter": "river"
  },
  "上  (shàng)": {
    "letter": "on, above or last"
  },
  "下  (xià)": {
    "letter": "under, below or next"
  },
  "左边  (zuǒbiān)": {
    "letter": "left"
  },
  "右边  (yòubiān)": {
    "letter": "right"
  },
  "中间  (zhōngjiān)": {
    "letter": "middle"
  },
  "旁边  (pángbiān)": {
    "letter": "side"
  },
  "附近  (fùjìn)": {
    "letter": "surrounding area"
  },
  "前面  (qiánmiàn)": {
    "letter": "front"
  },
  "后面  (hòumiàn)": {
    "letter": "back"
  },
  "里  (lǐ)": {
    "letter": "inside"
  },
  "外  (wài)": {
    "letter": "outside"
  },
  "东  (dōng)": {
    "letter": "east"
  },
  "南  (nán)": {
    "letter": "south"
  },
  "西  (xī)": {
    "letter": "west"
  },
  "北方  (běifāng)": {
    "letter": "north or northern China"
  },
  "个  (gè)": {
    "letter": "generic measure word"
  },
  "元  (yuán)": {
    "letter": "basic monetary unit of China"
  },
  "块  (kuài)": {
    "letter": "basic monetary unit of China"
  },
  "角  (jiǎo)": {
    "letter": "1/10 of Chinese Yuan"
  },
  "位  (wèi)": {
    "letter": "measure word for people"
  },
  "本  (běn)": {
    "letter": "for books"
  },
  "岁  (suì)": {
    "letter": "year (of age)"
  },
  "些  (xiē)": {
    "letter": "some"
  },
  "次  (cì)": {
    "letter": "time (frequency of an act)"
  },
  "公斤  (gōngjīn)": {
    "letter": "kilo"
  },
  "米  (mǐ)": {
    "letter": "meter"
  },
  "件  (jiàn)": {
    "letter": "for affairs, clothes, furniture"
  },
  "张  (zhāng)": {
    "letter": "for flat objects"
  },
  "条  (tiáo)": {
    "letter": "for long objects"
  },
  "辆  (liàng)": {
    "letter": "for vehicles"
  },
  "把  (bǎ)": {
    "letter": "for things with a handle"
  },
  "种  (zhǒng)": {
    "letter": "type"
  },
  "层  (céng)": {
    "letter": "floor"
  },
  "双  (shuāng)": {
    "letter": "pair"
  },
  "段  (duàn)": {
    "letter": "span of time or distance"
  },
  "刻  (kè)": {
    "letter": "quarter (time)"
  },
  "做  (zuò)": {
    "letter": "to do"
  },
  "是  (shì)": {
    "letter": "to be"
  },
  "姓  (xìng)": {
    "letter": "to be surnamed"
  },
  "在  (zài)": {
    "letter": "to be in"
  },
  "有  (yǒu)": {
    "letter": "to have"
  },
  "住  (zhù)": {
    "letter": "to live or to stay"
  },
  "来  (lái)": {
    "letter": "to come"
  },
  "去  (qù)": {
    "letter": "to go"
  },
  "回  (huí)": {
    "letter": "to return"
  },
  "进  (jìn)": {
    "letter": "to enter"
  },
  "出  (chū)": {
    "letter": "to get out"
  },
  "到  (dào)": {
    "letter": "to arrive"
  },
  "想  (xiǎng)": {
    "letter": "to think"
  },
  "要  (yào)": {
    "letter": "to want"
  },
  "需要  (xūyào)": {
    "letter": "to need"
  },
  "吃  (chī)": {
    "letter": "to eat"
  },
  "喝  (hē)": {
    "letter": "to drink"
  },
  "说话  (shuōhuà)": {
    "letter": "to speak"
  },
  "讲  (jiǎng)": {
    "letter": "to say or to speak"
  },
  "告诉  (gàosù)": {
    "letter": "to tell"
  },
  "问  (wèn)": {
    "letter": "to ask"
  },
  "回答  (huídá)": {
    "letter": "to answer"
  },
  "看  (kàn)": {
    "letter": "to look or to watch"
  },
  "看见  (kànjiàn)": {
    "letter": "to see"
  },
  "听  (tīng)": {
    "letter": "to listen"
  },
  "笑  (xiào)": {
    "letter": "to smile or to laugh"
  },
  "哭  (kū)": {
    "letter": "to cry"
  },
  "见面  (jiànmiàn)": {
    "letter": "to meet"
  },
  "遇到  (yùdào)": {
    "letter": "to encounter"
  },
  "给  (gěi)": {
    "letter": "to give"
  },
  "送  (sòng)": {
    "letter": "to give as a gift or to deliver"
  },
  "带  (dài)": {
    "letter": "to bring"
  },
  "拿  (ná)": {
    "letter": "to hold or to take"
  },
  "放  (fàng)": {
    "letter": "to put"
  },
  "叫  (jiào)": {
    "letter": "to call"
  },
  "买  (mǎi)": {
    "letter": "to buy"
  },
  "卖  (mài)": {
    "letter": "to sell"
  },
  "穿  (chuān)": {
    "letter": "to wear"
  },
  "开  (kāi)": {
    "letter": "to drive or to open"
  },
  "关  (guān)": {
    "letter": "to close or to shut"
  },
  "坐  (zuò)": {
    "letter": "to sit"
  },
  "站  (zhàn)": {
    "letter": "to stand"
  },
  "读  (dú)": {
    "letter": "to read"
  },
  "写  (xiě)": {
    "letter": "to write"
  },
  "画  (huà)": {
    "letter": "to draw or to paint"
  },
  "等  (děng)": {
    "letter": "to wait"
  },
  "花  (huā)": {
    "letter": "to spend or to cost"
  },
  "打电话  (dǎ diànhuà)": {
    "letter": "to make a phone call"
  },
  "介绍  (jièshào)": {
    "letter": "to introduce"
  },
  "认识  (rènshi)": {
    "letter": "to know"
  },
  "知道  (zhīdao)": {
    "letter": "to know"
  },
  "了解  (liǎojiě)": {
    "letter": "to know well"
  },
  "觉得  (juédé)": {
    "letter": "to feel or to think"
  },
  "认为  (rènwéi)": {
    "letter": "to think or to consider"
  },
  "以为  (yǐwéi)": {
    "letter": "to think (wrongly)"
  },
  "懂  (dǒng)": {
    "letter": "to understand"
  },
  "明白  (míngbai)": {
    "letter": "to understand"
  },
  "找  (zhǎo)": {
    "letter": "to find"
  },
  "发现  (fāxiàn)": {
    "letter": "to discover"
  },
  "记得  (jìde)": {
    "letter": "to remember"
  },
  "忘记  (wàngjì)": {
    "letter": "to forget"
  },
  "让  (ràng)": {
    "letter": "to let"
  },
  "使  (shǐ)": {
    "letter": "to make"
  },
  "用  (yòng)": {
    "letter": "to use"
  },
  "希望  (xīwàng)": {
    "letter": "to hope"
  },
  "帮助  (bāngzhù)": {
    "letter": "to help"
  },
  "帮忙  (bāngmáng)": {
    "letter": "to help"
  },
  "玩  (wán)": {
    "letter": "to play"
  },
  "学习  (xuéxí)": {
    "letter": "to learn"
  },
  "教  (jiāo)": {
    "letter": "to teach"
  },
  "复习  (fùxí)": {
    "letter": "to review"
  },
  "上网  (shàngwǎng)": {
    "letter": "to get online"
  },
  "工作  (gōngzuò)": {
    "letter": "to work"
  },
  "上班  (shàng bān)": {
    "letter": "to go to work"
  },
  "睡觉  (shuìjiào)": {
    "letter": "to sleep"
  },
  "起床  (qǐ chuáng)": {
    "letter": "to get up"
  },
  "刷牙  (shuāyá)": {
    "letter": "to brush teeth"
  },
  "洗澡  (xǐzǎo)": {
    "letter": "to bathe"
  },
  "喜欢  (xǐhuan)": {
    "letter": "to like"
  },
  "爱  (ài)": {
    "letter": "to love"
  },
  "唱歌  (chàng gē)": {
    "letter": "to sing"
  },
  "跳舞  (tiào wǔ)": {
    "letter": "to dance"
  },
  "旅游  (lǚyóu)": {
    "letter": "to travel"
  },
  "运动  (yùndòng)": {
    "letter": "to do sports"
  },
  "走  (zǒu)": {
    "letter": "to walk"
  },
  "跑步  (pǎo bù)": {
    "letter": "to run"
  },
  "游泳  (yóu yǒng)": {
    "letter": "to swim"
  },
  "骑  (qí)": {
    "letter": "to ride"
  },
  "踢足球  (tī zúqiú)": {
    "letter": "to play soccer"
  },
  "打篮球  (dǎ lánqiú)": {
    "letter": "to play basketball"
  },
  "爬山  (pá shān)": {
    "letter": "to climb mountain"
  },
  "锻炼  (duànliàn)": {
    "letter": "to work out"
  },
  "休息  (xiūxi)": {
    "letter": "to rest"
  },
  "生病  (shēng bìng)": {
    "letter": "to get sick"
  },
  "发烧  (fāshāo)": {
    "letter": "to have a fever"
  },
  "感冒  (gǎnmào)": {
    "letter": "to have a cold"
  },
  "疼  (téng)": {
    "letter": "to ache"
  },
  "洗  (xǐ)": {
    "letter": "to wash"
  },
  "开始  (kāishǐ)": {
    "letter": "to begin"
  },
  "完  (wán)": {
    "letter": "to finish"
  },
  "结束  (jiéshù)": {
    "letter": "to end"
  },
  "完成  (wánchéng)": {
    "letter": "to complete or accomplish"
  },
  "打算  (dǎsuàn)": {
    "letter": "to plan"
  },
  "决定  (juédìng)": {
    "letter": "to decide"
  },
  "选择  (xuǎnzé)": {
    "letter": "to choose"
  },
  "准备.  (zhǔnbèi)": {
    "letter": "to prepare"
  },
  "同意  (tóngyì)": {
    "letter": "to agree"
  },
  "解决  (jiějué)": {
    "letter": "to solve"
  },
  "担心  (dānxīn)": {
    "letter": "to worry"
  },
  "生气  (shēngqì)": {
    "letter": "to get angry"
  },
  "欢迎  (huānyíng)": {
    "letter": "to welcome"
  },
  "搬  (bān)": {
    "letter": "to move"
  },
  "还  (huán)": {
    "letter": "to return (sth)"
  },
  "接  (jiē)": {
    "letter": "to catch or to pick up"
  },
  "比较  (bǐjiào)": {
    "letter": "to compare"
  },
  "变化  (biànhuà)": {
    "letter": "to change"
  },
  "换  (huàn)": {
    "letter": "to exchange"
  },
  "借  (jiè)": {
    "letter": "to borrow or to lend"
  },
  "表示  (biǎoshì)": {
    "letter": "to express"
  },
  "要求  (yāoqiú)": {
    "letter": "to require"
  },
  "祝  (zhù)": {
    "letter": "to wish"
  },
  "注意  (zhùyì)": {
    "letter": "to pay attention to"
  },
  "表演  (biǎoyǎn)": {
    "letter": "to perform"
  },
  "参加  (cānjiā)": {
    "letter": "to attend"
  },
  "迟到  (chídào)": {
    "letter": "to be late"
  },
  "出现  (chūxiàn)": {
    "letter": "to appear"
  },
  "离开  (líkāi)": {
    "letter": "to leave"
  },
  "经过  (jīngguò)": {
    "letter": "to pass"
  },
  "练习  (liànxí)": {
    "letter": "to practice"
  },
  "提高  (tígāo)": {
    "letter": "to improve"
  },
  "检查  (jiǎnchá)": {
    "letter": "to check"
  },
  "打扫  (dǎsǎo)": {
    "letter": "to clean"
  },
  "相信  (xiāngxìn)": {
    "letter": "to believe"
  },
  "放心  (fàngxīn)": {
    "letter": "to rest assured"
  },
  "着急  (zháojí)": {
    "letter": "to worry"
  },
  "关心  (guānxīn)": {
    "letter": "to concern"
  },
  "照顾  (zhàogù)": {
    "letter": "to look after"
  },
  "分  (fēn)": {
    "letter": "to divide or separate"
  },
  "长  (zhǎng)": {
    "letter": "to grow"
  },
  "敢  (gǎn)": {
    "letter": "to dare"
  },
  "害怕  (hàipà)": {
    "letter": "to fear"
  },
  "小心  (xiǎoxīn)": {
    "letter": "to be careful"
  },
  "影响  (yǐngxiǎng)": {
    "letter": "to affect"
  },
  "结婚  (jiéhūn)": {
    "letter": "to marry"
  },
  "举行  (jǔxíng)": {
    "letter": "to hold (event)"
  },
  "会  (huì)": {
    "letter": "can (to know how to)"
  },
  "能  (néng)": {
    "letter": "can (to be able to)"
  },
  "可以  (kěyǐ)": {
    "letter": "can (to be permitted to)"
  },
  "必须  (bìxū)": {
    "letter": "must"
  },
  "应该  (yīnggāi)": {
    "letter": "should"
  },
  "愿意  (yuànyì)": {
    "letter": "to be willing to"
  },
  "下雨  (xià yǔ)": {
    "letter": "to rain"
  },
  "刮风  (guā fēng)": {
    "letter": "to blow (wind)"
  },
  "好  (hǎo)": {
    "letter": "good"
  },
  "坏  (huài)": {
    "letter": "bad"
  },
  "差  (chà)": {
    "letter": "bad (in quality)"
  },
  "大  (dà)": {
    "letter": "big"
  },
  "小  (xiǎo)": {
    "letter": "small"
  },
  "多  (duō)": {
    "letter": "many"
  },
  "少  (shǎo)": {
    "letter": "few"
  },
  "热  (rè)": {
    "letter": "hot"
  },
  "冷  (lěng)": {
    "letter": "cold"
  },
  "快  (kuài)": {
    "letter": "fast"
  },
  "慢  (màn)": {
    "letter": "slow"
  },
  "远  (yuǎn)": {
    "letter": "far"
  },
  "近  (jìn)": {
    "letter": "near"
  },
  "对  (duì)": {
    "letter": "right"
  },
  "错  (cuò)": {
    "letter": "wrong"
  },
  "长  (cháng)": {
    "letter": "long"
  },
  "久  (jiǔ)": {
    "letter": "long (in time)"
  },
  "短  (duǎn)": {
    "letter": "short"
  },
  "高  (gāo)": {
    "letter": "tall or high"
  },
  "矮  (ǎi)": {
    "letter": "short (in height)"
  },
  "低  (dī)": {
    "letter": "low"
  },
  "胖  (pàng)": {
    "letter": "fat"
  },
  "瘦  (shòu)": {
    "letter": "thin"
  },
  "新  (xīn)": {
    "letter": "new"
  },
  "旧  (jiù)": {
    "letter": "old or used"
  },
  "年轻  (niánqīng)": {
    "letter": "young"
  },
  "老  (lǎo)": {
    "letter": "old (in age)"
  },
  "贵  (guì)": {
    "letter": "expensive"
  },
  "便宜  (piányi)": {
    "letter": "cheap"
  },
  "黑  (hēi)": {
    "letter": "black"
  },
  "白  (bái)": {
    "letter": "white"
  },
  "红  (hóng)": {
    "letter": "red"
  },
  "黄  (huáng)": {
    "letter": "yellow"
  },
  "蓝  (lán)": {
    "letter": "blue"
  },
  "绿  (lǜ)": {
    "letter": "green"
  },
  "晴  (qíng)": {
    "letter": "sunny"
  },
  "阴  (yīn)": {
    "letter": "cloudy"
  },
  "好吃  (hǎochī)": {
    "letter": "tasty"
  },
  "甜  (tián)": {
    "letter": "sweet"
  },
  "新鲜  (xīnxiān)": {
    "letter": "fresh"
  },
  "容易  (róngyì)": {
    "letter": "easy"
  },
  "简单  (jiǎndān)": {
    "letter": "simple"
  },
  "难  (nán)": {
    "letter": "difficult"
  },
  "奇怪  (qíguài)": {
    "letter": "strange"
  },
  "特别  (tèbié)": {
    "letter": "special"
  },
  "重要  (zhòngyào)": {
    "letter": "important"
  },
  "有名  (yǒumíng)": {
    "letter": "famous"
  },
  "漂亮  (piàoliang)": {
    "letter": "pretty"
  },
  "聪明  (cōngming)": {
    "letter": "smart"
  },
  "可爱  (Kě’ài)": {
    "letter": "cute"
  },
  "高兴  (gāoxìng)": {
    "letter": "happy"
  },
  "快乐  (kuàilè)": {
    "letter": "happy"
  },
  "难过  (nánguò)": {
    "letter": "sad"
  },
  "满意  (mǎnyì)": {
    "letter": "satisfied"
  },
  "忙  (máng)": {
    "letter": "busy"
  },
  "累  (lèi)": {
    "letter": "tired"
  },
  "饿  (è)": {
    "letter": "hungry"
  },
  "渴  (kě)": {
    "letter": "thirsty"
  },
  "饱  (bǎo)": {
    "letter": "full"
  },
  "相同  (xiāngtóng)": {
    "letter": "same"
  },
  "一样  (yíyàng)": {
    "letter": "same"
  },
  "主要  (zhǔyào)": {
    "letter": "main"
  },
  "方便  (fāngbiàn)": {
    "letter": "convenient"
  },
  "安静  (ānjìng)": {
    "letter": "quiet"
  },
  "干净  (gānjìng)": {
    "letter": "clean"
  },
  "清楚  (qīngchu)": {
    "letter": "clear"
  },
  "健康  (jiànkāng)": {
    "letter": "healthy"
  },
  "舒服  (shūfu)": {
    "letter": "comfortable"
  },
  "热情  (rèqíng)": {
    "letter": "enthusiastic"
  },
  "认真  (rènzhēn)": {
    "letter": "serious or careful"
  },
  "努力  (nǔlì)": {
    "letter": "studious or hardworking"
  },
  "很  (hěn)": {
    "letter": "very"
  },
  "非常  (fēicháng)": {
    "letter": "extremely"
  },
  "极  (jí)": {
    "letter": "extremely"
  },
  "太  (tài)": {
    "letter": "too…"
  },
  "多么  (duōme)": {
    "letter": "how…"
  },
  "都  (dōu)": {
    "letter": "both or all"
  },
  "不  (bù)": {
    "letter": "not"
  },
  "没  (méi)": {
    "letter": "not"
  },
  "每  (měi)": {
    "letter": "every"
  },
  "最  (zuì)": {
    "letter": "most"
  },
  "真  (zhēn)": {
    "letter": "really"
  },
  "也  (yě)": {
    "letter": "also"
  },
  "还  (hái)": {
    "letter": "still"
  },
  "再  (zài)": {
    "letter": "again"
  },
  "又  (yòu)": {
    "letter": "again"
  },
  "只  (zhǐ)": {
    "letter": "only"
  },
  "就  (jiǜ)": {
    "letter": "at once"
  },
  "马上  (mǎshàng)": {
    "letter": "immediately"
  },
  "才  (cái)": {
    "letter": "just"
  },
  "更  (gèng)": {
    "letter": "more"
  },
  "越  (yuè)": {
    "letter": "more"
  },
  "别  (bié)": {
    "letter": "don’t…"
  },
  "先  (xiān)": {
    "letter": "first"
  },
  "已经  (yǐjīng)": {
    "letter": "already"
  },
  "几乎  (jīhū)": {
    "letter": "almost"
  },
  "一定  (yídìng)": {
    "letter": "definitely"
  },
  "一起  (yìqǐ)": {
    "letter": "together"
  },
  "一共  (yígòng)": {
    "letter": "altogether"
  },
  "可能  (kěnéng)": {
    "letter": "maybe"
  },
  "其实  (qíshí)": {
    "letter": "actually"
  },
  "突然  (tūrán)": {
    "letter": "suddenly"
  },
  "正在  (zhèngzài)": {
    "letter": "indicating action in progress"
  },
  "一边  (yìbiān)": {
    "letter": "at the same time"
  },
  "终于  (zhōngyú)": {
    "letter": "finally"
  },
  "总是  (zǒngshì)": {
    "letter": "always"
  },
  "经常  (jīngcháng)": {
    "letter": "often"
  },
  "一般  (yìbān)": {
    "letter": "generally"
  },
  "一直  (yìzhí)": {
    "letter": "constantly"
  },
  "从  (cóng)": {
    "letter": "from"
  },
  "向  (xiàng)": {
    "letter": "towards"
  },
  "离  (lí)": {
    "letter": "away from"
  },
  "比  (bǐ)": {
    "letter": "than"
  },
  "跟  (gēn)": {
    "letter": "with"
  },
  "被  (bèi)": {
    "letter": "by"
  },
  "为  (wèi)": {
    "letter": "for (sb/sth)"
  },
  "为了  (wèile)": {
    "letter": "for (purpose)"
  },
  "关于  (guānyú)": {
    "letter": "about, regarding"
  },
  "像  (xiàng)": {
    "letter": "as or like"
  },
  "除了  (chúle)": {
    "letter": "besides or except"
  },
  "根据  (gēnjù)": {
    "letter": "according to"
  },
  "的  (de)": {
    "letter": "possession particle"
  },
  "得  (de)": {
    "letter": "structure particle"
  },
  "地  (de)": {
    "letter": "structure particle"
  },
  "了  (le)": {
    "letter": "aspect particle"
  },
  "着  (zhe)": {
    "letter": "aspect particle"
  },
  "过  (guò)": {
    "letter": "aspect particle"
  },
  "吗  (ma)": {
    "letter": "question particle"
  },
  "呢  (ne)": {
    "letter": "question particle"
  },
  "吧  (ba)": {
    "letter": "question particle"
  },
  "啊  (a)": {
    "letter": "exclamatory particle"
  },
  "和  (hé)": {
    "letter": "and"
  },
  "但是  (dànshì)": {
    "letter": "but"
  },
  "虽然  (suīrán)": {
    "letter": "although"
  },
  "因为  (yīnwèi)": {
    "letter": "because"
  },
  "所以  (suǒyǐ)": {
    "letter": "so"
  },
  "还是  (háishì)": {
    "letter": "or"
  },
  "或者  (huòzhě)": {
    "letter": "or"
  },
  "然后  (ránhòu)": {
    "letter": "then, afterwards"
  },
  "如果  (rúguǒ)": {
    "letter": "if"
  },
  "而且  (érqiě)": {
    "letter": "moreover"
  },
  "喂  (wèi)": {
    "letter": "hello (on the phone)"
  },
  "谢谢  (xièxie)": {
    "letter": "thanks"
  },
  "不客气  (bú kèqi)": {
    "letter": "you’re welcome"
  },
  "再见  (zàijiàn)": {
    "letter": "goodbye"
  },
  "请  (qǐng)": {
    "letter": "please…"
  },
  "对不起  (duìbuqǐ)": {
    "letter": "sorry"
  },
  "没关系  (méi guānxi)": {
    "letter": "it’s all right"
  },
  "当然  (dāngrán)": {
    "letter": "of course"
  },
  "零  (líng)": {
    "letter": "zero"
  },
  "一  (yī)": {
    "letter": "one"
  },
  "二  (èr)": {
    "letter": "two"
  },
  "三  (sān)": {
    "letter": "three"
  },
  "四  (sì)": {
    "letter": "four"
  },
  "五  (wǔ)": {
    "letter": "five"
  },
  "六  (liù)": {
    "letter": "six"
  },
  "七  (qī)": {
    "letter": "seven"
  },
  "八  (bā)": {
    "letter": "eight"
  },
  "九  (jiǔ)": {
    "letter": "nine"
  },
  "十  (shí)": {
    "letter": "ten"
  },
  "两  (liǎng)": {
    "letter": "two"
  },
  "百  (bǎi)": {
    "letter": "hundred"
  },
  "千  (qiān)": {
    "letter": "thousand"
  },
  "万  (wàn)": {
    "letter": "ten thousand"
  },
  "第一  (dì-yī)": {
    "letter": "first"
  },
  "半  (bàn)": {
    "letter": "half"
  }
}

const chineseHsk3ChartData = [
   { "subtitle": "", "content": chineseHsk3Map }, 
]