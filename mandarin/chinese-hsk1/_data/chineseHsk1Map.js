// Exercise Type (character, vocabulary )
const chineseHsk1ChartType = "vocabulary";

const chineseHsk1Map = {
   "我  (wǒ)": {
    "letter": "I or me"
  },
  "你  (nǐ)": {
    "letter": "you (singular)"
  },
  "他  (tā)": {
    "letter": "he or him"
  },
  "她  (tā)": {
    "letter": "she or her"
  },
  "我们  (wǒmen)": {
    "letter": "we or us"
  },
  "人  (rén)": {
    "letter": "person or people"
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
  "儿子  (érzi)": {
    "letter": "son"
  },
  "女儿  (nǚ’ér)": {
    "letter": "daughter"
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
  "菜  (cài)": {
    "letter": "dish"
  },
  "米饭  (mǐfàn)": {
    "letter": "(cooked) rice"
  },
  "衣服  (yīfu)": {
    "letter": "clothes"
  },
  "书  (shū)": {
    "letter": "book"
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
  "杯子  (bēizi)": {
    "letter": "cup or glass"
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
  "猫  (māo)": {
    "letter": "cat"
  },
  "狗  (gǒu)": {
    "letter": "dog"
  },
  "天气  (tiānqì)": {
    "letter": "weather"
  },
  "字  (zì)": {
    "letter": "character"
  },
  "汉语  (Hànyǔ)": {
    "letter": "Chinese (language)"
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
  "上午  (shàngwǔ)": {
    "letter": "morning"
  },
  "中午  (zhōngwǔ)": {
    "letter": "noon"
  },
  "下午  (xiàwǔ)": {
    "letter": "afternoon"
  },
  "点  (diǎn)": {
    "letter": "o’clock"
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
  "星期  (xīngqī)": {
    "letter": "week"
  },
  "时候  (shíhou)": {
    "letter": "a certain point in time"
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
  "学校  (xuéxiào)": {
    "letter": "school"
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
  "火车站  (huǒchēzhàn)": {
    "letter": "train station"
  },
  "上  (shàng)": {
    "letter": "on, above or last"
  },
  "下  (xià)": {
    "letter": "under, below or next"
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
  "个  (gè)": {
    "letter": "generic measure word"
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
  "做  (zuò)": {
    "letter": "to do"
  },
  "是  (shì)": {
    "letter": "to be"
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
  "想  (xiǎng)": {
    "letter": "to think"
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
  "看  (kàn)": {
    "letter": "to look or to watch"
  },
  "看见  (kànjiàn)": {
    "letter": "to see"
  },
  "听  (tīng)": {
    "letter": "to listen"
  },
  "叫  (jiào)": {
    "letter": "to call"
  },
  "买  (mǎi)": {
    "letter": "to buy"
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
  "打电话  (dǎ diànhuà)": {
    "letter": "to make a phone call"
  },
  "认识  (rènshi)": {
    "letter": "to know"
  },
  "学习  (xuéxí)": {
    "letter": "to learn"
  },
  "工作  (gōngzuò)": {
    "letter": "to work"
  },
  "睡觉  (shuìjiào)": {
    "letter": "to sleep"
  },
  "喜欢  (xǐhuan)": {
    "letter": "to like"
  },
  "爱  (ài)": {
    "letter": "to love"
  },
  "会  (huì)": {
    "letter": "can (to know how to)"
  },
  "能  (néng)": {
    "letter": "can (to be able to)"
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
  "漂亮  (piàoliang)": {
    "letter": "pretty"
  },
  "高兴  (gāoxìng)": {
    "letter": "happy"
  },
  "很  (hěn)": {
    "letter": "very"
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
  "的  (de)": {
    "letter": "possession particle"
  },
  "了  (le)": {
    "letter": "aspect particle"
  },
  "吗  (ma)": {
    "letter": "question particle"
  },
  "呢  (ne)": {
    "letter": "question particle"
  },
  "和  (hé)": {
    "letter": "and"
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
  }
}

const chineseHsk1ChartData = [
   { "subtitle": "", "content": chineseHsk1Map }, 
]