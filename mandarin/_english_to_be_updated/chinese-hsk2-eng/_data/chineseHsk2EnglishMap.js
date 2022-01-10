// Exercise Type (character, vocabulary )
const chineseHsk2EnglishChartType = "vocabularyEnglish";

const chineseHsk2EnglishMap = {
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
  "everybody": {
    "letter": "大家 \n dàjiā"
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
  "a certain point in time": {
    "letter": "时候 \n shíhou"
  },
  "a period of time": {
    "letter": "时间 \n shíjiān"
  },
  "last year": {
    "letter": "去年 \n qùnián"
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
  "friend": {
    "letter": "朋友 \n péngyǒu"
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
  "doctor": {
    "letter": "医生 \n yīshēng"
  },
  "waiter or waitress": {
    "letter": "服务员 \n fúwùyuán"
  },
  "body": {
    "letter": "身体 \n shēntǐ"
  },
  "eye": {
    "letter": "眼睛 \n yǎnjīng"
  },
  "birthday": {
    "letter": "生日 \n shēngrì"
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
  "dish": {
    "letter": "菜 \n cài"
  },
  "(cooked) rice": {
    "letter": "米饭 \n mǐfàn"
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
  "clothes": {
    "letter": "衣服 \n yīfu"
  },
  "book": {
    "letter": "书 \n shū"
  },
  "newspaper": {
    "letter": "报纸 \n bàozhǐ"
  },
  "ticket": {
    "letter": "票 \n piào"
  },
  "table or desk": {
    "letter": "桌子 \n zhuōzi"
  },
  "chair": {
    "letter": "椅子 \n yǐzi"
  },
  "fruit": {
    "letter": "水果 \n shuǐguǒ"
  },
  "apple": {
    "letter": "苹果 \n píngguǒ"
  },
  "watermelon": {
    "letter": "西瓜 \n xīguā"
  },
  "medicine": {
    "letter": "药 \n yào"
  },
  "cup or glass": {
    "letter": "杯子 \n bēizi"
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
  "movie": {
    "letter": "电影 \n diànyǐng"
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
  "bike": {
    "letter": "自行车 \n zìxíngchē"
  },
  "boat": {
    "letter": "船 \n chuán"
  },
  "door": {
    "letter": "门 \n mén"
  },
  "color": {
    "letter": "颜色 \n yánsè"
  },
  "cat": {
    "letter": "猫 \n māo"
  },
  "dog": {
    "letter": "狗 \n gǒu"
  },
  "weather": {
    "letter": "天气 \n tiānqì"
  },
  "snow": {
    "letter": "雪 \n xuě"
  },
  "character": {
    "letter": "字 \n zì"
  },
  "Chinese (language)": {
    "letter": "汉语 \n Hànyǔ"
  },
  "lesson": {
    "letter": "课 \n kè"
  },
  "exam": {
    "letter": "考试 \n kǎoshì"
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
  "China": {
    "letter": "中国 \n Zhōngguó"
  },
  "Beijing": {
    "letter": "北京 \n Běijīng"
  },
  "home or family": {
    "letter": "家 \n jiā"
  },
  "room": {
    "letter": "房间 \n fángjiān"
  },
  "school": {
    "letter": "学校 \n xuéxiào"
  },
  "classroom": {
    "letter": "教室 \n jiàoshì"
  },
  "company": {
    "letter": "公司 \n gōngsī"
  },
  "restaurant": {
    "letter": "饭馆 \n fànguǎn"
  },
  "shop": {
    "letter": "商店 \n shāngdiàn"
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
  "side": {
    "letter": "旁边 \n pángbiān"
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
  "generic measure word": {
    "letter": "个 \n gè"
  },
  "basic monetary unit of China": {
    "letter": "块 \n kuài"
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
  "for affairs, clothes, furniture": {
    "letter": "件 \n jiàn"
  },
  "for flat objects": {
    "letter": "张 \n zhāng"
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
  "to eat": {
    "letter": "吃 \n chī"
  },
  "to drink": {
    "letter": "喝 \n hē"
  },
  "to speak": {
    "letter": "说话 \n shuōhuà"
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
  "to give": {
    "letter": "给 \n gěi"
  },
  "to give as a gift or to deliver": {
    "letter": "送 \n sòng"
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
  "to sit": {
    "letter": "坐 \n zuò"
  },
  "to read": {
    "letter": "读 \n dú"
  },
  "to write": {
    "letter": "写 \n xiě"
  },
  "to wait": {
    "letter": "等 \n děng"
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
  "to feel or to think": {
    "letter": "觉得 \n juédé"
  },
  "to understand": {
    "letter": "懂 \n dǒng"
  },
  "to find": {
    "letter": "找 \n zhǎo"
  },
  "to let": {
    "letter": "让 \n ràng"
  },
  "to hope": {
    "letter": "希望 \n xīwàng"
  },
  "to help": {
    "letter": "帮助 \n bāngzhù"
  },
  "to play": {
    "letter": "玩 \n wán"
  },
  "to learn": {
    "letter": "学习 \n xuéxí"
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
  "to play soccer": {
    "letter": "踢足球 \n tī zúqiú"
  },
  "to play basketball": {
    "letter": "打篮球 \n dǎ lánqiú"
  },
  "to rest": {
    "letter": "休息 \n xiūxi"
  },
  "to get sick": {
    "letter": "生病 \n shēng bìng"
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
  "to prepare": {
    "letter": "准备. \n zhǔnbèi"
  },
  "to welcome": {
    "letter": "欢迎 \n huānyíng"
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
  "to rain": {
    "letter": "下雨 \n xià yǔ"
  },
  "good": {
    "letter": "好 \n hǎo"
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
  "tall or high": {
    "letter": "高 \n gāo"
  },
  "new": {
    "letter": "新 \n xīn"
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
  "sunny": {
    "letter": "晴 \n qíng"
  },
  "cloudy": {
    "letter": "阴 \n yīn"
  },
  "tasty": {
    "letter": "好吃 \n hǎochī"
  },
  "pretty": {
    "letter": "漂亮 \n piàoliang"
  },
  "happy": {
    "letter": "快乐 \n kuàilè"
  },
  "busy": {
    "letter": "忙 \n máng"
  },
  "tired": {
    "letter": "累 \n lèi"
  },
  "very": {
    "letter": "很 \n hěn"
  },
  "extremely": {
    "letter": "非常 \n fēicháng"
  },
  "too…": {
    "letter": "太 \n tài"
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
    "letter": "再 \n zài"
  },
  "at once": {
    "letter": "就 \n jiǜ"
  },
  "don’t…": {
    "letter": "别 \n bié"
  },
  "already": {
    "letter": "已经 \n yǐjīng"
  },
  "together": {
    "letter": "一起 \n yìqǐ"
  },
  "maybe": {
    "letter": "可能 \n kěnéng"
  },
  "indicating action in progress": {
    "letter": "正在 \n zhèngzài"
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
  "possession particle": {
    "letter": "的 \n de"
  },
  "structure particle": {
    "letter": "得 \n de"
  },
  "aspect particle": {
    "letter": "过 \n guò"
  },
  "question particle": {
    "letter": "吧 \n ba"
  },
  "and": {
    "letter": "和 \n hé"
  },
  "but": {
    "letter": "但是 \n dànshì"
  },
  "because": {
    "letter": "因为 \n yīnwèi"
  },
  "so": {
    "letter": "所以 \n suǒyǐ"
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
  "first": {
    "letter": "第一 \n dì-yī"
  }
}

const chineseHsk2EnglishChartData = [
   { "subtitle": "", "content": chineseHsk2EnglishMap }, 
]