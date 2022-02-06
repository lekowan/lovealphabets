// Exercise Type (character, vocabulary )
const chineseHsk2ChartType = "vocabulary";

const chineseHsk2Map = {
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
    "letter": "we or us"
  },
  "大家  (dàjiā)": {
    "letter": "everybody"
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
  "时候  (shíhou)": {
    "letter": "a certain point in time"
  },
  "时间  (shíjiān)": {
    "letter": "a period of time"
  },
  "去年  (qùnián)": {
    "letter": "last year"
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
  "朋友  (péngyǒu)": {
    "letter": "friend"
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
  "医生  (yīshēng)": {
    "letter": "doctor"
  },
  "服务员  (fúwùyuán)": {
    "letter": "waiter or waitress"
  },
  "身体  (shēntǐ)": {
    "letter": "body"
  },
  "眼睛  (yǎnjīng)": {
    "letter": "eye"
  },
  "生日  (shēngrì)": {
    "letter": "birthday"
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
  "菜  (cài)": {
    "letter": "dish"
  },
  "米饭  (mǐfàn)": {
    "letter": "(cooked) rice"
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
  "衣服  (yīfu)": {
    "letter": "clothes"
  },
  "书  (shū)": {
    "letter": "book"
  },
  "报纸  (bàozhǐ)": {
    "letter": "newspaper"
  },
  "票  (piào)": {
    "letter": "ticket"
  },
  "桌子  (zhuōzi)": {
    "letter": "table or desk"
  },
  "椅子  (yǐzi)": {
    "letter": "chair"
  },
  "水果  (shuǐguǒ)": {
    "letter": "fruit"
  },
  "苹果  (píngguǒ)": {
    "letter": "apple"
  },
  "西瓜  (xīguā)": {
    "letter": "watermelon"
  },
  "药  (yào)": {
    "letter": "medicine"
  },
  "杯子  (bēizi)": {
    "letter": "cup or glass"
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
  "电影  (diànyǐng)": {
    "letter": "movie"
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
  "自行车  (zìxíngchē)": {
    "letter": "bike"
  },
  "船  (chuán)": {
    "letter": "boat"
  },
  "门  (mén)": {
    "letter": "door"
  },
  "颜色  (yánsè)": {
    "letter": "color"
  },
  "猫  (māo)": {
    "letter": "cat"
  },
  "狗  (gǒu)": {
    "letter": "dog"
  },
  "天气  (tiānqì)": {
    "letter": "weather"
  },
  "雪  (xuě)": {
    "letter": "snow"
  },
  "字  (zì)": {
    "letter": "character"
  },
  "汉语  (Hànyǔ)": {
    "letter": "Chinese (language)"
  },
  "课  (kè)": {
    "letter": "lesson"
  },
  "考试  (kǎoshì)": {
    "letter": "exam"
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
  "中国  (Zhōngguó)": {
    "letter": "China"
  },
  "北京  (Běijīng)": {
    "letter": "Beijing"
  },
  "家  (jiā)": {
    "letter": "home or family"
  },
  "房间  (fángjiān)": {
    "letter": "room"
  },
  "学校  (xuéxiào)": {
    "letter": "school"
  },
  "教室  (jiàoshì)": {
    "letter": "classroom"
  },
  "公司  (gōngsī)": {
    "letter": "company"
  },
  "饭馆  (fànguǎn)": {
    "letter": "restaurant"
  },
  "商店  (shāngdiàn)": {
    "letter": "shop"
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
  "旁边  (pángbiān)": {
    "letter": "side"
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
  "个  (gè)": {
    "letter": "generic measure word"
  },
  "元  (yuán)": {
    "letter": "basic monetary unit of China"
  },
  "块  (kuài)": {
    "letter": "basic monetary unit of China"
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
  "件  (jiàn)": {
    "letter": "for affairs, clothes, furniture"
  },
  "张  (zhāng)": {
    "letter": "for flat objects"
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
  "吃  (chī)": {
    "letter": "to eat"
  },
  "喝  (hē)": {
    "letter": "to drink"
  },
  "说话  (shuōhuà)": {
    "letter": "to speak"
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
  "给  (gěi)": {
    "letter": "to give"
  },
  "送  (sòng)": {
    "letter": "to give as a gift or to deliver"
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
  "坐  (zuò)": {
    "letter": "to sit"
  },
  "读  (dú)": {
    "letter": "to read"
  },
  "写  (xiě)": {
    "letter": "to write"
  },
  "等  (děng)": {
    "letter": "to wait"
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
  "觉得  (juédé)": {
    "letter": "to feel or to think"
  },
  "懂  (dǒng)": {
    "letter": "to understand"
  },
  "找  (zhǎo)": {
    "letter": "to find"
  },
  "让  (ràng)": {
    "letter": "to let"
  },
  "希望  (xīwàng)": {
    "letter": "to hope"
  },
  "帮助  (bāngzhù)": {
    "letter": "to help"
  },
  "玩  (wán)": {
    "letter": "to play"
  },
  "学习  (xuéxí)": {
    "letter": "to learn"
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
  "踢足球  (tī zúqiú)": {
    "letter": "to play soccer"
  },
  "打篮球  (dǎ lánqiú)": {
    "letter": "to play basketball"
  },
  "休息  (xiūxi)": {
    "letter": "to rest"
  },
  "生病  (shēng bìng)": {
    "letter": "to get sick"
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
  "准备.  (zhǔnbèi)": {
    "letter": "to prepare"
  },
  "欢迎  (huānyíng)": {
    "letter": "to welcome"
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
  "下雨  (xià yǔ)": {
    "letter": "to rain"
  },
  "好  (hǎo)": {
    "letter": "good"
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
  "高  (gāo)": {
    "letter": "tall or high"
  },
  "新  (xīn)": {
    "letter": "new"
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
  "晴  (qíng)": {
    "letter": "sunny"
  },
  "阴  (yīn)": {
    "letter": "cloudy"
  },
  "好吃  (hǎochī)": {
    "letter": "tasty"
  },
  "漂亮  (piàoliang)": {
    "letter": "pretty"
  },
  "高兴  (gāoxìng)": {
    "letter": "happy"
  },
  "快乐  (kuàilè)": {
    "letter": "happy"
  },
  "忙  (máng)": {
    "letter": "busy"
  },
  "累  (lèi)": {
    "letter": "tired"
  },
  "很  (hěn)": {
    "letter": "very"
  },
  "非常  (fēicháng)": {
    "letter": "extremely"
  },
  "太  (tài)": {
    "letter": "too…"
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
  "就  (jiǜ)": {
    "letter": "at once"
  },
  "别  (bié)": {
    "letter": "don’t…"
  },
  "已经  (yǐjīng)": {
    "letter": "already"
  },
  "一起  (yìqǐ)": {
    "letter": "together"
  },
  "可能  (kěnéng)": {
    "letter": "maybe"
  },
  "正在  (zhèngzài)": {
    "letter": "indicating action in progress"
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
  "的  (de)": {
    "letter": "possession particle"
  },
  "得  (de)": {
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
  "和  (hé)": {
    "letter": "and"
  },
  "但是  (dànshì)": {
    "letter": "but"
  },
  "因为  (yīnwèi)": {
    "letter": "because"
  },
  "所以  (suǒyǐ)": {
    "letter": "so"
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
  "第一  (dì-yī)": {
    "letter": "first"
  }
}

const chineseHsk2ChartData = [
   { "subtitle": "", "content": chineseHsk2Map }, 
]