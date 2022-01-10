const examples = {
    "1": {
        "english": "I miss you.",
        "mandarin": "我很想你。"
    },
    "2": {
        "english": "Where is the railroad station?",
        "mandarin": "火车站在哪里?"
    },
    "3": {
        "english": "I love you.",
        "mandarin": "我爱你。"
    },
    "4": {
        "english": "This is my mother.",
        "mandarin": "这是我的妈妈。"
    },
    "5": {
        "english": "This is my mom.",
        "mandarin": "这是我的妈妈。"
    },
    "6": {
        "english": "I have several dozens of them.",
        "mandarin": "我有好几打呢。"
    },
    "7": {
        "english": "I don't want anything to drink.",
        "mandarin": "我什么都不想喝。"
    },
    "8": {
        "english": "I don't want to drink anything.",
        "mandarin": "我什么都不想喝。"
    },
    "9": {
        "english": "Do whatever you want.",
        "mandarin": "做你想做的。"
    },
    "10": {
        "english": "The old man sat down.",
        "mandarin": "老人坐了下来。"
    },
    "11": {
        "english": "It's fine today.",
        "mandarin": "今天天气很好。"
    },
    "12": {
        "english": "Today, the weather is very nice.",
        "mandarin": "今天天气很好。"
    },
    "13": {
        "english": "All of them are good teachers.",
        "mandarin": "他们都是好老师。"
    },
    "14": {
        "english": "There are some books on the desk.",
        "mandarin": "书桌上有几本书。"
    },
    "15": {
        "english": "How many books do you have?",
        "mandarin": "你有几本书?"
    },
    "16": {
        "english": "A year has twelve months.",
        "mandarin": "一年有十二个月。"
    },
    "17": {
        "english": "There are twelve months in a year.",
        "mandarin": "一年有十二个月。"
    },
    "18": {
        "english": "One year has twelve months.",
        "mandarin": "一年有十二个月。"
    },
    "19": {
        "english": "My dad is not at home for the moment.",
        "mandarin": "现在我爸爸不在家。"
    },
    "20": {
        "english": "My friend is seventeen years old.",
        "mandarin": "我的朋友十七岁了。"
    },
    "21": {
        "english": "My friend is seventeen.",
        "mandarin": "我的朋友十七岁了。"
    },
    "22": {
        "english": "Who is your Chinese teacher?",
        "mandarin": "谁是你的汉语老师?"
    },
    "23": {
        "english": "Where's his home?",
        "mandarin": "他的家在哪儿?"
    },
    "24": {
        "english": "Where is his house?",
        "mandarin": "他的家在哪儿?"
    },
    "25": {
        "english": "He will be at home tomorrow.",
        "mandarin": "他明天会在家。"
    },
    "26": {
        "english": "No problem.",
        "mandarin": "没关系。"
    },
    "27": {
        "english": "He is as tall as I.",
        "mandarin": "他和我一样高。"
    },
    "28": {
        "english": "We're classmates.",
        "mandarin": "我们是同学。"
    },
    "29": {
        "english": "I can't afford that.",
        "mandarin": "我买不起那个。"
    },
    "30": {
        "english": "I am getting off at the next station.",
        "mandarin": "我在下一站下车。"
    },
    "31": {
        "english": "Your father is tall.",
        "mandarin": "你爸爸很高。"
    },
    "32": {
        "english": "Your father is pretty tall.",
        "mandarin": "你爸爸很高。"
    },
    "33": {
        "english": "Yours is over there.",
        "mandarin": "你的在那儿呢。"
    },
    "34": {
        "english": "This is my book.",
        "mandarin": "这是我的书。"
    },
    "35": {
        "english": "I am eating rice.",
        "mandarin": "我在吃米饭。"
    },
    "36": {
        "english": "It's cold.",
        "mandarin": "天很冷。"
    },
    "37": {
        "english": "There is an apple on the table.",
        "mandarin": "桌上有个苹果。"
    },
    "38": {
        "english": "I don't speak Japanese.",
        "mandarin": "我不说日语。"
    },
    "39": {
        "english": "I don't love you anymore.",
        "mandarin": "我不再爱你了。"
    },
    "40": {
        "english": "He knows a lot of people.",
        "mandarin": "他认识很多人。"
    },
    "41": {
        "english": "We're the same age.",
        "mandarin": "他和我同岁。"
    },
    "42": {
        "english": "He is the same age as me.",
        "mandarin": "他和我同岁。"
    },
    "43": {
        "english": "I am Chinese.",
        "mandarin": "我是中国人。"
    },
    "44": {
        "english": "He studies Chinese.",
        "mandarin": "他学习汉语。"
    },
    "45": {
        "english": "He is as tall as her.",
        "mandarin": "他和她一样高。"
    },
    "46": {
        "english": "He is as tall as she.",
        "mandarin": "他和她一样高。"
    },
    "47": {
        "english": "It's me.",
        "mandarin": "是我。"
    },
    "48": {
        "english": "It is I.",
        "mandarin": "是我。"
    },
    "49": {
        "english": "You're a human.",
        "mandarin": "你是人。"
    },
    "50": {
        "english": "You're a person.",
        "mandarin": "你是人。"
    },
    "51": {
        "english": "My house is big.",
        "mandarin": "我家很大。"
    },
    "52": {
        "english": "I am at home.",
        "mandarin": "我在家。"
    },
    "53": {
        "english": "I'm at home.",
        "mandarin": "我在家。"
    },
    "54": {
        "english": "I don't like school.",
        "mandarin": "我不喜欢学校。"
    },
    "55": {
        "english": "I am a student of this school.",
        "mandarin": "我是这个学校的学生。"
    },
    "56": {
        "english": "That is our school.",
        "mandarin": "那是我们的学校。"
    },
    "57": {
        "english": "Come and see me tomorrow.",
        "mandarin": "明天来看看我。"
    },
    "58": {
        "english": "Whether you like it or not doesn't matter.",
        "mandarin": "你喜不喜欢没关系。"
    },
    "59": {
        "english": "This is a book.",
        "mandarin": "这是一本书。"
    },
    "60": {
        "english": "He is happy.",
        "mandarin": "他很高兴。"
    },
    "61": {
        "english": "This book is very small.",
        "mandarin": "这本书很小。"
    },
    "62": {
        "english": "This is my dog.",
        "mandarin": "这是我的狗。"
    },
    "63": {
        "english": "Very many people know him.",
        "mandarin": "很多人认识他。"
    },
    "64": {
        "english": "He is as tall as his father.",
        "mandarin": "他和他爸爸一样高。"
    },
    "65": {
        "english": "Her father is Japanese.",
        "mandarin": "她老爸是日本人。"
    },
    "66": {
        "english": "Her father is Japanese.",
        "mandarin": "她爸是日本人。"
    },
    "67": {
        "english": "I was happy yesterday.",
        "mandarin": "我昨天很高兴。"
    },
    "68": {
        "english": "Where are you?",
        "mandarin": "你在哪儿?"
    },
    "69": {
        "english": "He was absent from school yesterday.",
        "mandarin": "他昨天没来上学。"
    },
    "70": {
        "english": "It is raining.",
        "mandarin": "下雨了。"
    },
    "71": {
        "english": "It's raining.",
        "mandarin": "下雨了。"
    },
    "72": {
        "english": "He is watching TV.",
        "mandarin": "他在看电视。"
    },
    "73": {
        "english": "He is a Japanese boy.",
        "mandarin": "他是个日本少年。"
    },
    "74": {
        "english": "The cat is sitting on the table.",
        "mandarin": "猫坐在桌子上。"
    },
    "75": {
        "english": "He is in college.",
        "mandarin": "他在读大学。"
    },
    "76": {
        "english": "He is a doctor.",
        "mandarin": "他是医生。"
    },
    "77": {
        "english": "It's Monday.",
        "mandarin": "今天是星期一。"
    },
    "78": {
        "english": "It's Monday today.",
        "mandarin": "今天是星期一。"
    },
    "79": {
        "english": "Divide these apples between you three.",
        "mandarin": "这些苹果你们三个人分。"
    },
    "80": {
        "english": "You're right.",
        "mandarin": "你是对的。"
    },
    "81": {
        "english": "She looked at me.",
        "mandarin": "她看我。"
    },
    "82": {
        "english": "Follow your sister's example.",
        "mandarin": "学学你姐姐。"
    },
    "83": {
        "english": "I am eighteen years old.",
        "mandarin": "我十八岁。"
    },
    "84": {
        "english": "I'm 18 years old.",
        "mandarin": "我十八岁。"
    },
    "85": {
        "english": "I am 18 years old.",
        "mandarin": "我十八岁。"
    },
    "86": {
        "english": "I love reading books.",
        "mandarin": "我很喜欢看书。"
    },
    "87": {
        "english": "She seldom goes out.",
        "mandarin": "她很少出去。"
    },
    "88": {
        "english": "She went home.",
        "mandarin": "她回家了。"
    },
    "89": {
        "english": "I think you worry too much.",
        "mandarin": "你想太多了。"
    },
    "90": {
        "english": "He's a good person.",
        "mandarin": "他是个好人。"
    },
    "91": {
        "english": "He's a good man.",
        "mandarin": "他是个好人。"
    },
    "92": {
        "english": "Hello!",
        "mandarin": "你好。"
    },
    "93": {
        "english": "Hi.",
        "mandarin": "你好。"
    },
    "94": {
        "english": "I'm a nice guy.",
        "mandarin": "我是好人。"
    },
    "95": {
        "english": "I'm a good person.",
        "mandarin": "我是好人。"
    },
    "96": {
        "english": "Thank you!",
        "mandarin": "谢谢你。"
    },
    "97": {
        "english": "Thank you.",
        "mandarin": "谢谢你。"
    },
    "98": {
        "english": "I am getting off at the next station.",
        "mandarin": "我下一站下车。"
    },
    "99": {
        "english": "I'm getting off at the next station.",
        "mandarin": "我下一站下车。"
    },
    "100": {
        "english": "I have many friends.",
        "mandarin": "我有很多朋友。"
    },
    "101": {
        "english": "I am eating an apple.",
        "mandarin": "我在吃个苹果。"
    },
    "102": {
        "english": "I am a university student.",
        "mandarin": "我是一个大学生。"
    },
    "103": {
        "english": "I want to sleep.",
        "mandarin": "我想睡觉。"
    },
    "104": {
        "english": "It is very cold here.",
        "mandarin": "这里很冷。"
    },
    "105": {
        "english": "Everybody knows his name.",
        "mandarin": "大家都认识他的名字。"
    },
    "106": {
        "english": "I have many friends.",
        "mandarin": "我有好多朋友。"
    },
    "107": {
        "english": "We don't know him.",
        "mandarin": "我们不认识他。"
    },
    "108": {
        "english": "He has three daughters.",
        "mandarin": "他有三个女儿。"
    },
    "109": {
        "english": "He went out to see a movie. How was the movie? Good.",
        "mandarin": "他出去看电影了。 电影好看吗? 好看。"
    },
    "110": {
        "english": "I'm going out for a while.",
        "mandarin": "我出去一会儿。"
    },
    "111": {
        "english": "I don't want to go to school.",
        "mandarin": "我不想去学校。"
    },
    "112": {
        "english": "He got angry.",
        "mandarin": "他生气了。"
    },
    "113": {
        "english": "It's better.",
        "mandarin": "好多了。"
    },
    "114": {
        "english": "I am not well at all.",
        "mandarin": "我一点都不好。"
    },
    "115": {
        "english": "Do you speak Japanese?",
        "mandarin": "你说日语吗?"
    },
    "116": {
        "english": "We are at school together.",
        "mandarin": "我们一起在学校。"
    },
    "117": {
        "english": "I wrote this book.",
        "mandarin": "我写了这本书。"
    },
    "118": {
        "english": "I want to go with you.",
        "mandarin": "我想和你一起去。"
    },
    "119": {
        "english": "I'd love to come with you.",
        "mandarin": "我想和你一起去。"
    },
    "120": {
        "english": "She is my girlfriend.",
        "mandarin": "她是我的女朋友。"
    },
    "121": {
        "english": "I bought the book yesterday.",
        "mandarin": "这本书我昨天买了。"
    },
    "122": {
        "english": "My son is now as tall as I am.",
        "mandarin": "我儿子现在和我一样高了。"
    },
    "123": {
        "english": "It's the third of October.",
        "mandarin": "是十月三日。"
    },
    "124": {
        "english": "It's October the third.",
        "mandarin": "是十月三日。"
    },
    "125": {
        "english": "I have a daughter.",
        "mandarin": "我有一个女儿。"
    },
    "126": {
        "english": "I like tea.",
        "mandarin": "我喜欢茶。"
    },
    "127": {
        "english": "Please eat something.",
        "mandarin": "请吃点菜。"
    },
    "128": {
        "english": "There is a book on the table.",
        "mandarin": "桌子上有本书。"
    },
    "129": {
        "english": "How's the weather there?",
        "mandarin": "那里的气候怎么样?"
    },
    "130": {
        "english": "How is the weather there?",
        "mandarin": "那里的气候怎么样?"
    },
    "131": {
        "english": "What's the climate there like?",
        "mandarin": "那里的气候怎么样?"
    },
    "132": {
        "english": "I do not have a cat.",
        "mandarin": "我没有猫。"
    },
    "133": {
        "english": "I don't have a cat.",
        "mandarin": "我没有猫。"
    },
    "134": {
        "english": "We're friends from way back.",
        "mandarin": "我们是老朋友了。"
    },
    "135": {
        "english": "We're old friends.",
        "mandarin": "我们是老朋友了。"
    },
    "136": {
        "english": "I don't like your girlfriend.",
        "mandarin": "我不喜欢你的女朋友。"
    },
    "137": {
        "english": "It is Sunday tomorrow.",
        "mandarin": "明天是星期天。"
    },
    "138": {
        "english": "Tomorrow is Sunday.",
        "mandarin": "明天是星期天。"
    },
    "139": {
        "english": "It is raining.",
        "mandarin": "在下雨。"
    },
    "140": {
        "english": "It's raining.",
        "mandarin": "在下雨。"
    },
    "141": {
        "english": "All three of us are students.",
        "mandarin": "我们三个都是学生。"
    },
    "142": {
        "english": "It was hot yesterday.",
        "mandarin": "昨天的天气很热。"
    },
    "143": {
        "english": "He became famous.",
        "mandarin": "他出名了。"
    },
    "144": {
        "english": "Please sit down.",
        "mandarin": "请坐一下。"
    },
    "145": {
        "english": "I would like something to drink.",
        "mandarin": "我想喝点什么。"
    },
    "146": {
        "english": "I can come tomorrow.",
        "mandarin": "我明天能来。"
    },
    "147": {
        "english": "Like it?",
        "mandarin": "你喜欢吗 ?"
    },
    "148": {
        "english": "You like it?",
        "mandarin": "你喜欢吗 ?"
    },
    "149": {
        "english": "Do you like it?",
        "mandarin": "你喜欢吗 ?"
    },
    "150": {
        "english": "He returned at six.",
        "mandarin": "他六点回来了。"
    },
    "151": {
        "english": "Here is Japan.",
        "mandarin": "这是日本。"
    },
    "152": {
        "english": "That's too much.",
        "mandarin": "太多了。"
    },
    "153": {
        "english": "He has three sons.",
        "mandarin": "他有三个儿子。"
    },
    "154": {
        "english": "Do you know him?",
        "mandarin": "你认识他吗?"
    },
    "155": {
        "english": "He has no girlfriend.",
        "mandarin": "他没有女朋友。"
    },
    "156": {
        "english": "His birthday is August 21st.",
        "mandarin": "他的生日是八月二十一日。"
    },
    "157": {
        "english": "You're the boss.",
        "mandarin": "服了你了。"
    },
    "158": {
        "english": "I like to eat apples.",
        "mandarin": "我喜欢吃苹果。"
    },
    "159": {
        "english": "I'd like something to eat.",
        "mandarin": "我想吃点东西。"
    },
    "160": {
        "english": "It's hot today.",
        "mandarin": "今天天气很热。"
    },
    "161": {
        "english": "Read this book.",
        "mandarin": "看这本书。"
    },
    "162": {
        "english": "This is your dog.",
        "mandarin": "这是你的狗。"
    },
    "163": {
        "english": "I'm glad that I didn't buy something like this.",
        "mandarin": "我很高兴没有买这样的东西。"
    },
    "164": {
        "english": "I don't like this one.",
        "mandarin": "我不喜欢这个。"
    },
    "165": {
        "english": "He has three elder sisters.",
        "mandarin": "他有三个姐姐。"
    },
    "166": {
        "english": "He has three older sisters.",
        "mandarin": "他有三个姐姐。"
    },
    "167": {
        "english": "She's my older sister.",
        "mandarin": "她是我的姐姐。"
    },
    "168": {
        "english": "Today is my treat.",
        "mandarin": "今天是我请客。"
    },
    "169": {
        "english": "That's my coat.",
        "mandarin": "那是我的大衣。"
    },
    "170": {
        "english": "He seldom comes to see me.",
        "mandarin": "他很少来看我。"
    },
    "171": {
        "english": "You are now an adult.",
        "mandarin": "你现在是大人了。"
    },
    "172": {
        "english": "I am cold.",
        "mandarin": "我冷。"
    },
    "173": {
        "english": "I'm cold.",
        "mandarin": "我冷。"
    },
    "174": {
        "english": "That's my cat.",
        "mandarin": "那是我的猫。"
    },
    "175": {
        "english": "I'm sorry.",
        "mandarin": "对不起。"
    },
    "176": {
        "english": "Excuse me.",
        "mandarin": "对不起。"
    },
    "177": {
        "english": "I don't want to eat lunch now.",
        "mandarin": "我现在不想吃午饭。"
    },
    "178": {
        "english": "Now I remember.",
        "mandarin": "现在我想起来了。"
    },
    "179": {
        "english": "Turn on the TV.",
        "mandarin": "开电视。"
    },
    "180": {
        "english": "That's not a cat. That's a dog.",
        "mandarin": "那不是猫。那是狗。"
    },
    "181": {
        "english": "That's not a cat. It's a dog.",
        "mandarin": "那不是猫。那是狗。"
    },
    "182": {
        "english": "Yes.",
        "mandarin": "是的。"
    },
    "183": {
        "english": "He has a lot of money.",
        "mandarin": "他有很多钱。"
    },
    "184": {
        "english": "This is their house.",
        "mandarin": "这是他们家。"
    },
    "185": {
        "english": "He is acquainted with my wife.",
        "mandarin": "他是我太太认识的一个人。"
    },
    "186": {
        "english": "He is my friend.",
        "mandarin": "他是我的朋友。"
    },
    "187": {
        "english": "He's my friend.",
        "mandarin": "他是我的朋友。"
    },
    "188": {
        "english": "I watch television.",
        "mandarin": "我看电视。"
    },
    "189": {
        "english": "I am delighted to meet you.",
        "mandarin": "很高兴认识你。"
    },
    "190": {
        "english": "It's nice meeting you.",
        "mandarin": "很高兴认识你。"
    },
    "191": {
        "english": "I'm 1.9 meters tall.",
        "mandarin": "我有一米九高。"
    },
    "192": {
        "english": "No one came.",
        "mandarin": "没有人来了。"
    },
    "193": {
        "english": "You have some books.",
        "mandarin": "你有一些书。"
    },
    "194": {
        "english": "I'll come back.",
        "mandarin": "我会回来的。"
    },
    "195": {
        "english": "He lives inside an apple.",
        "mandarin": "他住在苹果里面。"
    },
    "196": {
        "english": "He does not like us.",
        "mandarin": "他不喜欢我们。"
    },
    "197": {
        "english": "This is very good.",
        "mandarin": "这很好。"
    },
    "198": {
        "english": "He refuses to accept his old age.",
        "mandarin": "他不服老。"
    },
    "199": {
        "english": "I have a book.",
        "mandarin": "我有一本书。"
    },
    "200": {
        "english": "This school has many students.",
        "mandarin": "这个学校有很多学生。"
    },
    "201": {
        "english": "I was born on March 22, 1962.",
        "mandarin": "我是在一九六二年三月二十二日出生的。"
    },
    "202": {
        "english": "Man doesn't eat man.",
        "mandarin": "人不吃人。"
    },
    "203": {
        "english": "Thanks in advance.",
        "mandarin": "先谢谢了。"
    },
    "204": {
        "english": "I am a university student.",
        "mandarin": "我是大学生。"
    },
    "205": {
        "english": "I'm a college student.",
        "mandarin": "我是大学生。"
    },
    "206": {
        "english": "I'm a university student.",
        "mandarin": "我是大学生。"
    },
    "207": {
        "english": "I'm back.",
        "mandarin": "我回来了。"
    },
    "208": {
        "english": "I have returned.",
        "mandarin": "我回来了。"
    },
    "209": {
        "english": "I've returned.",
        "mandarin": "我回来了。"
    },
    "210": {
        "english": "I've got to catch some Z's.",
        "mandarin": "我小睡了一会儿。"
    },
    "211": {
        "english": "He will come to you tomorrow.",
        "mandarin": "他想明天去看你。"
    },
    "212": {
        "english": "I don't see anything.",
        "mandarin": "我什么都看不见。"
    },
    "213": {
        "english": "I can't see anything.",
        "mandarin": "我什么都看不见。"
    },
    "214": {
        "english": "He drank three glasses of water.",
        "mandarin": "他喝了三杯水。"
    },
    "215": {
        "english": "I do not think that she is at home.",
        "mandarin": "我想她不会在家里。"
    },
    "216": {
        "english": "I like apples.",
        "mandarin": "我很喜欢苹果。"
    },
    "217": {
        "english": "I love apples.",
        "mandarin": "我很喜欢苹果。"
    },
    "218": {
        "english": "Today is Saturday.",
        "mandarin": "今天是星期六。"
    },
    "219": {
        "english": "I am fond of the cinema.",
        "mandarin": "我喜欢看电影。"
    },
    "220": {
        "english": "I like movies.",
        "mandarin": "我喜欢看电影。"
    },
    "221": {
        "english": "Is he sleeping?",
        "mandarin": "他在睡觉吗?"
    },
    "222": {
        "english": "I went to bed at ten yesterday.",
        "mandarin": "昨天我十点去睡觉了。"
    },
    "223": {
        "english": "Everybody likes him.",
        "mandarin": "大家都喜欢他。"
    },
    "224": {
        "english": "Everybody loves him.",
        "mandarin": "大家都喜欢他。"
    },
    "225": {
        "english": "Everyone loves him.",
        "mandarin": "大家都喜欢他。"
    },
    "226": {
        "english": "Have you eaten?",
        "mandarin": "吃了没。"
    },
    "227": {
        "english": "Many students bought the book.",
        "mandarin": "很多学生买了这本书。"
    },
    "228": {
        "english": "He wants to come with us.",
        "mandarin": "他想和我们一起来。"
    },
    "229": {
        "english": "I have no money.",
        "mandarin": "我没有钱。"
    },
    "230": {
        "english": "I don't have money.",
        "mandarin": "我没有钱。"
    },
    "231": {
        "english": "When were you born?",
        "mandarin": "你什么时候出生的?"
    },
    "232": {
        "english": "He can speak Japanese.",
        "mandarin": "他会说日语。"
    },
    "233": {
        "english": "He's able to speak Japanese.",
        "mandarin": "他会说日语。"
    },
    "234": {
        "english": "You're welcome.",
        "mandarin": "不客气。"
    },
    "235": {
        "english": "He will come this afternoon.",
        "mandarin": "他今天下午会来的。"
    },
    "236": {
        "english": "You have many books.",
        "mandarin": "你们有很多书。"
    },
    "237": {
        "english": "I don't have a computer at home.",
        "mandarin": "我家没有电脑。"
    },
    "238": {
        "english": "May I eat this?",
        "mandarin": "我能吃这个吗?"
    },
    "239": {
        "english": "I don't feel like going out right now.",
        "mandarin": "我现在不想出去。"
    },
    "240": {
        "english": "That was all Chinese to me.",
        "mandarin": "看起来这都是天书。"
    },
    "241": {
        "english": "A student wants to see you.",
        "mandarin": "有个学生想见你。"
    },
    "242": {
        "english": "I told him to come.",
        "mandarin": "我叫他来的。"
    },
    "243": {
        "english": "She lives in Kyoto.",
        "mandarin": "她住在京都。"
    },
    "244": {
        "english": "I was born on October 10th, 1972.",
        "mandarin": "我在一九七二年十月十日出生。"
    },
    "245": {
        "english": "I was born October 10th, 1972.",
        "mandarin": "我在一九七二年十月十日出生。"
    },
    "246": {
        "english": "She is beautiful.",
        "mandarin": "她很漂亮。"
    },
    "247": {
        "english": "She's beautiful.",
        "mandarin": "她很漂亮。"
    },
    "248": {
        "english": "She's pretty.",
        "mandarin": "她很漂亮。"
    },
    "249": {
        "english": "There is an apple on the desk.",
        "mandarin": "书桌上有一个苹果。"
    },
    "250": {
        "english": "There is one apple on the desk.",
        "mandarin": "书桌上有一个苹果。"
    },
    "251": {
        "english": "I am a woman.",
        "mandarin": "我是女人。"
    },
    "252": {
        "english": "I'm a woman.",
        "mandarin": "我是女人。"
    },
    "253": {
        "english": "I study.",
        "mandarin": "我学习。"
    },
    "254": {
        "english": "I didn't say it.",
        "mandarin": "我没说。"
    },
    "255": {
        "english": "How tall are you?",
        "mandarin": "你多高?"
    },
    "256": {
        "english": "I fell in love with you.",
        "mandarin": "我爱上了你。"
    },
    "257": {
        "english": "This book isn't mine.",
        "mandarin": "这本书不是我的。"
    },
    "258": {
        "english": "I like your car.",
        "mandarin": "我喜欢你的车。"
    },
    "259": {
        "english": "He's not home.",
        "mandarin": "他不在家。"
    },
    "260": {
        "english": "She despised him.",
        "mandarin": "她看不起他。"
    },
    "261": {
        "english": "He was loved by everyone that knew him.",
        "mandarin": "认识他的人都爱他。"
    },
    "262": {
        "english": "It is less cold today than it was yesterday.",
        "mandarin": "今天没昨天冷。"
    },
    "263": {
        "english": "He went to the store.",
        "mandarin": "他去了商店。"
    },
    "264": {
        "english": "Her father is tall.",
        "mandarin": "她爸爸很高。"
    },
    "265": {
        "english": "Her writing is very good.",
        "mandarin": "她的写作很好。"
    },
    "266": {
        "english": "This is my car.",
        "mandarin": "这是我的车。"
    },
    "267": {
        "english": "It is becoming warmer day by day.",
        "mandarin": "一天天热起来了。"
    },
    "268": {
        "english": "Yesterday was my birthday.",
        "mandarin": "昨天是我的生日。"
    },
    "269": {
        "english": "I'm fine.",
        "mandarin": "我很好。"
    },
    "270": {
        "english": "Is he a teacher?",
        "mandarin": "他是老师吗?"
    },
    "271": {
        "english": "He went back to the store.",
        "mandarin": "他回店里去了。"
    },
    "272": {
        "english": "I went there yesterday.",
        "mandarin": "我昨天去那儿了。"
    },
    "273": {
        "english": "She is very pretty.",
        "mandarin": "她十分漂亮。"
    },
    "274": {
        "english": "I can't say.",
        "mandarin": "我不能说。"
    },
    "275": {
        "english": "Sunday is not a workday for me.",
        "mandarin": "星期天不是我的工作日。"
    },
    "276": {
        "english": "Sunday is not a workday for me.",
        "mandarin": "我在星期日不工作。"
    },
    "277": {
        "english": "He sometimes comes to see me.",
        "mandarin": "他有时会来看我。"
    },
    "278": {
        "english": "The students have returned.",
        "mandarin": "学生们回来了。"
    },
    "279": {
        "english": "All of these books are mine.",
        "mandarin": "这些书都是我的。"
    },
    "280": {
        "english": "He said that it was nine o'clock.",
        "mandarin": "他说九点了。"
    },
    "281": {
        "english": "Good afternoon.",
        "mandarin": "下午好。"
    },
    "282": {
        "english": "I missed you.",
        "mandarin": "我想你。"
    },
    "283": {
        "english": "I want to see what there is inside.",
        "mandarin": "我想看一下里面有什么。"
    },
    "284": {
        "english": "I fell in love with her.",
        "mandarin": "我爱上了她。"
    },
    "285": {
        "english": "Zero comes before one.",
        "mandarin": "零在一前面。"
    },
    "286": {
        "english": "He is my type!",
        "mandarin": "他是我的菜!"
    },
    "287": {
        "english": "It's true.",
        "mandarin": "这是对的。"
    },
    "288": {
        "english": "That's true.",
        "mandarin": "这是对的。"
    },
    "289": {
        "english": "That's very big.",
        "mandarin": "那是很大的。"
    },
    "290": {
        "english": "It rained yesterday.",
        "mandarin": "昨天下雨了。"
    },
    "291": {
        "english": "He didn't hear his name called.",
        "mandarin": "他没听见有人叫他的名字。"
    },
    "292": {
        "english": "How about you?",
        "mandarin": "那你呢?"
    },
    "293": {
        "english": "Those dogs are big.",
        "mandarin": "那些狗都很大。"
    },
    "294": {
        "english": "Someone is calling you.",
        "mandarin": "有人在叫你。"
    },
    "295": {
        "english": "He drank a lot yesterday.",
        "mandarin": "昨天他喝了很多。"
    },
    "296": {
        "english": "It rained hard yesterday morning.",
        "mandarin": "昨天上午下大雨。"
    },
    "297": {
        "english": "She had a little money.",
        "mandarin": "她有一点钱。"
    },
    "298": {
        "english": "I'm very happy now.",
        "mandarin": "我现在很高兴。"
    },
    "299": {
        "english": "He looks down on women.",
        "mandarin": "他小看女人。"
    },
    "300": {
        "english": "The weather is cold now.",
        "mandarin": "天气冷了。"
    },
    "301": {
        "english": "She's a doctor now.",
        "mandarin": "她是医生了。"
    },
    "302": {
        "english": "He can drive a car now.",
        "mandarin": "他会开车了。"
    },
    "303": {
        "english": "He's been asleep for ten hours now.",
        "mandarin": "他睡了十个小时觉了。"
    },
    "304": {
        "english": "There were lots of people.",
        "mandarin": "有很多人。"
    },
    "305": {
        "english": "This isn't money.",
        "mandarin": "这不是钱。"
    },
    "306": {
        "english": "I don't drink water.",
        "mandarin": "我不喝水。"
    },
    "307": {
        "english": "I study at school.",
        "mandarin": "我在学校读书。"
    },
    "308": {
        "english": "It was yesterday that she went.",
        "mandarin": "她是昨天去的。"
    },
    "309": {
        "english": "Tomorrow is my birthday.",
        "mandarin": "明天是我生日。"
    },
    "310": {
        "english": "It was not very cold yesterday.",
        "mandarin": "昨天不是很冷。"
    },
    "311": {
        "english": "I'm as old as he is.",
        "mandarin": "我和他同年。"
    },
    "312": {
        "english": "I want to learn Chinese next year.",
        "mandarin": "我明年想学汉语。"
    },
    "313": {
        "english": "I stayed at his place yesterday.",
        "mandarin": "我昨天住在他家。"
    },
    "314": {
        "english": "I've been studying in China for ten months.",
        "mandarin": "我在中国学习了十个月了。"
    },
    "315": {
        "english": "You're very pretty.",
        "mandarin": "你很漂亮。"
    },
    "316": {
        "english": "You and I are good friends.",
        "mandarin": "你和我是好朋友。"
    },
    "317": {
        "english": "We had a heavy rain yesterday.",
        "mandarin": "昨天下大雨。"
    },
    "318": {
        "english": "There was a light rain yesterday.",
        "mandarin": "昨天下小雨。"
    },
    "319": {
        "english": "I didn't really feel like going out.",
        "mandarin": "我不是很想出去。"
    },
    "320": {
        "english": "He drank very little of the water.",
        "mandarin": "他喝很少的水。"
    },
    "321": {
        "english": "I would like to eat.",
        "mandarin": "我想吃"
    },
    "322": {
        "english": "I lived in Japan three years ago.",
        "mandarin": "我三年前住在日本。"
    },
    "323": {
        "english": "She goes to a girls' high school.",
        "mandarin": "她上女子高中。"
    },
    "324": {
        "english": "I came.",
        "mandarin": "我来了。"
    },
    "325": {
        "english": "Father came home.",
        "mandarin": "爸爸回家了。"
    },
    "326": {
        "english": "I feel homesick.",
        "mandarin": "我想家了。"
    },
    "327": {
        "english": "We have many rainy days in June.",
        "mandarin": "六月下了很多天的雨。"
    },
    "328": {
        "english": "We had a lot of rain yesterday.",
        "mandarin": "昨天下很多雨。"
    },
    "329": {
        "english": "I'm closing my store.",
        "mandarin": "关店了。"
    },
    "330": {
        "english": "My birthday falls on Sunday.",
        "mandarin": "我的生日在星期日。"
    },
    "331": {
        "english": "I like to go to school.",
        "mandarin": "我喜欢去学校"
    },
    "332": {
        "english": "Today is a good day.",
        "mandarin": "今天是个好日子。"
    },
    "333": {
        "english": "You are my friend.",
        "mandarin": "你是我的朋友。"
    },
    "334": {
        "english": "You're my friend.",
        "mandarin": "你是我的朋友。"
    },
    "335": {
        "english": "She talks a lot.",
        "mandarin": "她的话很多。"
    },
    "336": {
        "english": "That's how it is.",
        "mandarin": "是这样的。"
    },
    "337": {
        "english": "I'm a teacher.",
        "mandarin": "我是老师。"
    },
    "338": {
        "english": "I am a teacher.",
        "mandarin": "我是老师。"
    },
    "339": {
        "english": "He doesn't have much money.",
        "mandarin": "他没有很多钱。"
    },
    "340": {
        "english": "It's cold today.",
        "mandarin": "今天很冷。"
    },
    "341": {
        "english": "Very happy to meet you.",
        "mandarin": "认识你很高兴"
    },
    "342": {
        "english": "Does he like China?",
        "mandarin": "他喜欢中国吗?"
    },
    "343": {
        "english": "I don't want to work today.",
        "mandarin": "我今天不想工作。"
    },
    "344": {
        "english": "He is reading a book.",
        "mandarin": "他在看书。"
    },
    "345": {
        "english": "He is reading.",
        "mandarin": "他在看书。"
    },
    "346": {
        "english": "He is eating.",
        "mandarin": "他在吃饭。"
    },
    "347": {
        "english": "You are a student.",
        "mandarin": "你是学生。"
    },
    "348": {
        "english": "Do you like school?",
        "mandarin": "你喜欢学校吗?"
    },
    "349": {
        "english": "She is Japanese.",
        "mandarin": "她是日本人。"
    },
    "350": {
        "english": "Is she at home?",
        "mandarin": "她在家吗?"
    },
    "351": {
        "english": "He likes this book.",
        "mandarin": "他喜欢这本书。"
    },
    "352": {
        "english": "He is in hospital.",
        "mandarin": "他在医院。"
    },
    "353": {
        "english": "I'll miss you.",
        "mandarin": "我会想你。"
    },
    "354": {
        "english": "These books and clothes are all yours.",
        "mandarin": "这些书和衣服都是你的。"
    },
    "355": {
        "english": "Looks really nice.",
        "mandarin": "很好看。"
    },
    "356": {
        "english": "Today is Sunday.",
        "mandarin": "今天是星期日。"
    },
    "357": {
        "english": "I saw a friend.",
        "mandarin": "我见了一个朋友。"
    },
    "358": {
        "english": "I'm eating.",
        "mandarin": "我在吃饭。"
    },
    "359": {
        "english": "I am eating.",
        "mandarin": "我在吃饭。"
    },
    "360": {
        "english": "Somebody is eating.",
        "mandarin": "有人在吃东西。"
    },
    "361": {
        "english": "I love her.",
        "mandarin": "我爱她。"
    },
    "362": {
        "english": "I'm rarely this angry.",
        "mandarin": "我很少这么生气。"
    },
    "363": {
        "english": "I don't love you.",
        "mandarin": "我不爱你。"
    },
    "364": {
        "english": "There are so few things like this.",
        "mandarin": "这样的东西很少。"
    },
    "365": {
        "english": "He came back at five o'clock.",
        "mandarin": "他五点钟回来的。"
    },
    "366": {
        "english": "He came back at five.",
        "mandarin": "他五点钟回来的。"
    },
    "367": {
        "english": "They eat these things.",
        "mandarin": "他们吃这些东西。"
    },
    "368": {
        "english": "They eat these things.",
        "mandarin": "她们吃这些东西。"
    },
    "369": {
        "english": "I'm friends with him.",
        "mandarin": "我和他是朋友。"
    },
    "370": {
        "english": "Me and him are friends.",
        "mandarin": "我和他是朋友。"
    },
    "371": {
        "english": "I've known him for ten years.",
        "mandarin": "我认识了他有十年了。"
    },
    "372": {
        "english": "I don't know any of the five ladies.",
        "mandarin": "这五个女人我一个都不认识。"
    },
    "373": {
        "english": "I like China.",
        "mandarin": "我喜欢中国。"
    },
    "374": {
        "english": "You are my mother.",
        "mandarin": "你是我妈妈。"
    },
    "375": {
        "english": "He is very tall.",
        "mandarin": "他很高。"
    },
    "376": {
        "english": "I don't like this.",
        "mandarin": "我不喜欢。"
    },
    "377": {
        "english": "Your book is on the desk.",
        "mandarin": "你的书在书桌上。"
    },
    "378": {
        "english": "His girlfriend is Japanese.",
        "mandarin": "他的女朋友是日本人。"
    },
    "379": {
        "english": "Isn't it a bit small?",
        "mandarin": "不是有一点小吗?"
    },
    "380": {
        "english": "I won't be here tomorrow.",
        "mandarin": "我明天不在这儿。"
    },
    "381": {
        "english": "The family is watching a movie together.",
        "mandarin": "这一家人一起看电影。"
    },
    "382": {
        "english": "I haven't eaten for many days.",
        "mandarin": "我好多天没吃东西了。"
    },
    "383": {
        "english": "I like you.",
        "mandarin": "我喜欢你。"
    },
    "384": {
        "english": "She's my daughter.",
        "mandarin": "她是我女儿。"
    },
    "385": {
        "english": "She doesn't have any friends.",
        "mandarin": "她一个朋友都没有。"
    },
    "386": {
        "english": "I don't mind if the weather is hot.",
        "mandarin": "天气热点儿没关系。"
    },
    "387": {
        "english": "He will come tomorrow.",
        "mandarin": "他明天会来。"
    },
    "388": {
        "english": "December has thirty-one days.",
        "mandarin": "十二月有三十一天。"
    },
    "389": {
        "english": "I will not see him any more.",
        "mandarin": "我不会再见他了。"
    },
    "390": {
        "english": "I'd like to see your sister.",
        "mandarin": "我想见你的姐姐。"
    },
    "391": {
        "english": "I'll see you next Wednesday.",
        "mandarin": "我下星期三见你。"
    },
    "392": {
        "english": "She can't write or read.",
        "mandarin": "她不会读书写字。"
    },
    "393": {
        "english": "Today is my birthday.",
        "mandarin": "今天是我的生日。"
    },
    "394": {
        "english": "She asked him to sit down.",
        "mandarin": "她叫他坐下。"
    },
    "395": {
        "english": "He was angry with his son.",
        "mandarin": "他对他儿子很生气。"
    },
    "396": {
        "english": "I saw you cooking.",
        "mandarin": "我看见你做饭了。"
    },
    "397": {
        "english": "He was very old.",
        "mandarin": "他很老。"
    },
    "398": {
        "english": "They didn't listen.",
        "mandarin": "他们没听。"
    },
    "399": {
        "english": "What's the next station?",
        "mandarin": "下一个站叫什么?"
    },
    "400": {
        "english": "He is not here.",
        "mandarin": "他不在。"
    },
    "401": {
        "english": "I like that person.",
        "mandarin": "我喜欢那个人。"
    },
    "402": {
        "english": "You're not dogs.",
        "mandarin": "你们不是狗。"
    },
    "403": {
        "english": "This isn't good.",
        "mandarin": "这不好。"
    },
    "404": {
        "english": "You are as tall as I am.",
        "mandarin": "你和我一样高。"
    },
    "405": {
        "english": "I'm a good guy.",
        "mandarin": "我是一个好人。"
    },
    "406": {
        "english": "I have a home.",
        "mandarin": "我有一个家。"
    },
    "407": {
        "english": "My sister has a job.",
        "mandarin": "我的姐姐有工作。"
    },
    "408": {
        "english": "They are at lunch.",
        "mandarin": "他们在吃午饭。"
    },
    "409": {
        "english": "I am studying kanji.",
        "mandarin": "我在学汉字。"
    },
    "410": {
        "english": "I have a lot of money.",
        "mandarin": "我有很多钱。"
    },
    "411": {
        "english": "He had no money.",
        "mandarin": "他没有钱。"
    },
    "412": {
        "english": "You didn't say anything.",
        "mandarin": "你什么都没说。"
    },
    "413": {
        "english": "You said nothing.",
        "mandarin": "你什么都没说。"
    },
    "414": {
        "english": "This book is mine.",
        "mandarin": "这本书是我的。"
    },
    "415": {
        "english": "She didn't say even one word to me.",
        "mandarin": "她一个字都没对我说。"
    },
    "416": {
        "english": "I love my daughter.",
        "mandarin": "我爱我的女儿。"
    },
    "417": {
        "english": "She came to see us yesterday.",
        "mandarin": "她昨天来看我们。"
    },
    "418": {
        "english": "Please get into the car.",
        "mandarin": "请上车。"
    },
    "419": {
        "english": "Today I turn four years old.",
        "mandarin": "今天我四岁了。"
    },
    "420": {
        "english": "I'll miss you very much.",
        "mandarin": "我会很想你的。"
    },
    "421": {
        "english": "I'm not your mother.",
        "mandarin": "我不是你的妈妈。"
    },
    "422": {
        "english": "I'm not your father.",
        "mandarin": "我不是你爸爸。"
    },
    "423": {
        "english": "I'm not your daughter.",
        "mandarin": "我不是你女儿。"
    },
    "424": {
        "english": "I'm not your son.",
        "mandarin": "我不是你儿子。"
    },
    "425": {
        "english": "We had little rain last month.",
        "mandarin": "上个月没怎么下雨。"
    },
    "426": {
        "english": "See you later.",
        "mandarin": "再见。"
    },
    "427": {
        "english": "He has books galore.",
        "mandarin": "他有很多书。"
    },
    "428": {
        "english": "No students went there yesterday.",
        "mandarin": "昨天没学生去那。"
    },
    "429": {
        "english": "He came by car.",
        "mandarin": "他开车来的。"
    },
    "430": {
        "english": "He's your friend.",
        "mandarin": "他是你的朋友。"
    },
    "431": {
        "english": "Look at the sky.",
        "mandarin": "看天上。"
    },
    "432": {
        "english": "He likes sleeping.",
        "mandarin": "他喜欢睡觉。"
    },
    "433": {
        "english": "This is his plane.",
        "mandarin": "这是他的飞机。"
    },
    "434": {
        "english": "He is a very good teacher.",
        "mandarin": "他是个很好的老师。"
    },
    "435": {
        "english": "That book's over here.",
        "mandarin": "那本书在这里。"
    },
    "436": {
        "english": "What'd I do?",
        "mandarin": "我怎么了?"
    },
    "437": {
        "english": "I eat here.",
        "mandarin": "我在这里吃饭。"
    },
    "438": {
        "english": "I'm a cat.",
        "mandarin": "我是猫。"
    },
    "439": {
        "english": "She spoke Japanese well.",
        "mandarin": "她日语说的很好。"
    },
    "440": {
        "english": "He's buying apples.",
        "mandarin": "他在买苹果"
    },
    "441": {
        "english": "She's going out to buy some things.",
        "mandarin": "她去买东西。"
    },
    "442": {
        "english": "This isn't love.",
        "mandarin": "这不是爱。"
    },
    "443": {
        "english": "He does not have any friends.",
        "mandarin": "他一个朋友都没有。"
    },
    "444": {
        "english": "He doesn't have any friends.",
        "mandarin": "他没有朋友。"
    },
    "445": {
        "english": "I've got a few friends.",
        "mandarin": "我有一些朋友。"
    },
    "446": {
        "english": "I'm twenty-five.",
        "mandarin": "我二十五岁了。"
    },
    "447": {
        "english": "I haven't eaten.",
        "mandarin": "我没吃饭。"
    },
    "448": {
        "english": "I don't work tomorrow.",
        "mandarin": "我明天不工作。"
    },
    "449": {
        "english": "I didn't work yesterday.",
        "mandarin": "我昨天没工作。"
    },
    "450": {
        "english": "The food's ready.",
        "mandarin": "饭做好了。"
    },
    "451": {
        "english": "Be nice to her.",
        "mandarin": "对她好点。"
    },
    "452": {
        "english": "I am learning Chinese.",
        "mandarin": "我学习汉语。"
    },
    "453": {
        "english": "I'm learning Chinese.",
        "mandarin": "我学习汉语。"
    },
    "454": {
        "english": "The book is on the table.",
        "mandarin": "书在桌子上。"
    },
    "455": {
        "english": "Everybody thinks so.",
        "mandarin": "大家都是这样想的。"
    },
    "456": {
        "english": "This is my computer.",
        "mandarin": "这是我的电脑。"
    },
    "457": {
        "english": "I'm listening.",
        "mandarin": "我在听。"
    },
    "458": {
        "english": "I don't feel like watching TV.",
        "mandarin": "我不高兴看电视。"
    },
    "459": {
        "english": "That’s the first point.",
        "mandarin": "这是一。"
    },
    "460": {
        "english": "I'm a doctor.",
        "mandarin": "我是医生。"
    },
    "461": {
        "english": "She wasn't there last month.",
        "mandarin": "她上个月不在。"
    },
    "462": {
        "english": "I like cats very much.",
        "mandarin": "我很喜欢猫。"
    },
    "463": {
        "english": "There's a book on my desk.",
        "mandarin": "在我的桌上有一本书。"
    },
    "464": {
        "english": "Why are there so many people?",
        "mandarin": "怎么这么多人。"
    },
    "465": {
        "english": "I'm old.",
        "mandarin": "我老了。"
    },
    "466": {
        "english": "I can talk for a bit.",
        "mandarin": "我会说一点儿。"
    },
    "467": {
        "english": "She can't drive.",
        "mandarin": "她不会开车。"
    },
    "468": {
        "english": "It's no big deal.",
        "mandarin": "这没什么大不了的。"
    },
    "469": {
        "english": "It rained.",
        "mandarin": "下了雨。"
    },
    "470": {
        "english": "The dog is barking.",
        "mandarin": "狗在叫。"
    },
    "471": {
        "english": "The dog couldn't bark.",
        "mandarin": "狗不会叫。"
    },
    "472": {
        "english": "The cat is old.",
        "mandarin": "猫老了。"
    },
    "473": {
        "english": "The old dog barked.",
        "mandarin": "老狗叫了。"
    },
    "474": {
        "english": "This is not to his liking.",
        "mandarin": "这是他不喜欢的。"
    },
    "475": {
        "english": "I went to the hospital.",
        "mandarin": "我去了医院。"
    },
    "476": {
        "english": "I went to school yesterday.",
        "mandarin": "我昨天去学校。"
    },
    "477": {
        "english": "I'm able to speak.",
        "mandarin": "我能说。"
    },
    "478": {
        "english": "I like him.",
        "mandarin": "我喜欢他。"
    },
    "479": {
        "english": "What about me?",
        "mandarin": "那我呢?"
    },
    "480": {
        "english": "You don't seem happy.",
        "mandarin": "你看起来不高兴。"
    },
    "481": {
        "english": "I went to middle school in Japan.",
        "mandarin": "我是在日本上的中学。"
    },
    "482": {
        "english": "I came to Beijing last month.",
        "mandarin": "我是上个月来的北京。"
    },
    "483": {
        "english": "I am here.",
        "mandarin": "我在。"
    },
    "484": {
        "english": "This is a good hospital.",
        "mandarin": "这是一家好医院。"
    },
    "485": {
        "english": "I went to the cinema yesterday.",
        "mandarin": "昨天我去电影院。"
    },
    "486": {
        "english": "These are my books.",
        "mandarin": "这些是我的书。"
    },
    "487": {
        "english": "These are our desks.",
        "mandarin": "这些是我们的书桌。"
    },
    "488": {
        "english": "We'll cook.",
        "mandarin": "我们会做饭的。"
    },
    "489": {
        "english": "I'm 25 years old.",
        "mandarin": "我二十五岁了。"
    },
    "490": {
        "english": "I want to go to school.",
        "mandarin": "我想去学校。"
    },
    "491": {
        "english": "The weather is good today.",
        "mandarin": "今天天气很好。"
    },
    "492": {
        "english": "It was rainy for three days.",
        "mandarin": "雨下了三天。"
    },
    "493": {
        "english": "The cat sleeps on the chair.",
        "mandarin": "猫在椅子上睡觉。"
    },
    "494": {
        "english": "I'm alive in Tokyo.",
        "mandarin": "我住在东京。"
    },
    "495": {
        "english": "I like this one.",
        "mandarin": "我喜欢这个。"
    },
    "496": {
        "english": "I'm glad you liked my friends.",
        "mandarin": "我高兴你喜欢我的朋友们。"
    },
    "497": {
        "english": "I'm glad you liked my friends.",
        "mandarin": "我高兴你喜欢我的朋友。"
    },
    "498": {
        "english": "Tomorrow I'm going back home.",
        "mandarin": "明天我回家。"
    },
    "499": {
        "english": "This one won't.",
        "mandarin": "这个不会。"
    },
    "500": {
        "english": "She knows how to cook.",
        "mandarin": "她会做饭。"
    },
    "501": {
        "english": "I will be back to join you in one month.",
        "mandarin": "我会在一个月后回来和你们见面。"
    },
    "502": {
        "english": "I want to go to the store.",
        "mandarin": "我想去商店。"
    },
    "503": {
        "english": "I can not sleep well.",
        "mandarin": "我睡不好。"
    },
    "504": {
        "english": "We don't do it.",
        "mandarin": "我们不做这样。"
    },
    "505": {
        "english": "He came yesterday to see you.",
        "mandarin": "昨天他来见你。"
    },
    "506": {
        "english": "Yesterday was Thursday.",
        "mandarin": "昨天是星期四。"
    },
    "507": {
        "english": "You cannot do this.",
        "mandarin": "你们不能这么做。"
    },
    "508": {
        "english": "We're all angry.",
        "mandarin": "我们都很生气。"
    },
    "509": {
        "english": "You do me wrong.",
        "mandarin": "你对不起我。"
    },
    "510": {
        "english": "No.",
        "mandarin": "不是。"
    },
    "511": {
        "english": "This is a Chinese language book.",
        "mandarin": "这是本汉语书。"
    },
    "512": {
        "english": "This is my Japanese friend.",
        "mandarin": "这是我的日本朋友。"
    },
    "513": {
        "english": "This is a book.",
        "mandarin": "这是书。"
    },
    "514": {
        "english": "This is Chinese food.",
        "mandarin": "这是中国菜。"
    },
    "515": {
        "english": "This is not my Japanese friend.",
        "mandarin": "这不是我的日本朋友。"
    },
    "516": {
        "english": "It's OK.",
        "mandarin": "没关系。"
    },
    "517": {
        "english": "I know the Chinese characters.",
        "mandarin": "我认识汉字。"
    },
    "518": {
        "english": "I am happy.",
        "mandarin": "我很高兴。"
    },
    "519": {
        "english": "I ate apples.",
        "mandarin": "我吃苹果了。"
    },
    "520": {
        "english": "I ate that apple.",
        "mandarin": "我吃了那个苹果。"
    },
    "521": {
        "english": "I go to university.",
        "mandarin": "我去上大学。"
    },
    "522": {
        "english": "We are in school.",
        "mandarin": "我们在学校里。"
    },
    "523": {
        "english": "We work together.",
        "mandarin": "我们一起工作。"
    },
    "524": {
        "english": "We go to school together.",
        "mandarin": "我们一起去学校。"
    },
    "525": {
        "english": "I am not happy.",
        "mandarin": "我不高兴。"
    },
    "526": {
        "english": "I have money.",
        "mandarin": "我有钱。"
    },
    "527": {
        "english": "Sorry.",
        "mandarin": "对不起。"
    },
    "528": {
        "english": "Did you drink tea?",
        "mandarin": "你喝茶了吗?"
    },
    "529": {
        "english": "He is good to me.",
        "mandarin": "他对我很好。"
    },
    "530": {
        "english": "They are here.",
        "mandarin": "他们在这里。"
    },
    "531": {
        "english": "They go to movies together.",
        "mandarin": "他们一起去看电影。"
    },
    "532": {
        "english": "I don't like him.",
        "mandarin": "我不喜欢他。"
    },
    "533": {
        "english": "She is aged seventeen.",
        "mandarin": "她十七岁了。"
    },
    "534": {
        "english": "She's seventeen.",
        "mandarin": "她十七岁了。"
    },
    "535": {
        "english": "She's seventeen years old.",
        "mandarin": "她十七岁了。"
    },
    "536": {
        "english": "They're watching.",
        "mandarin": "他们在看。"
    },
    "537": {
        "english": "That's your car.",
        "mandarin": "那是你的车。"
    },
    "538": {
        "english": "That's my hobby.",
        "mandarin": "那是我的爱好。"
    },
    "539": {
        "english": "I want to sit down.",
        "mandarin": "我想坐下来。"
    },
    "540": {
        "english": "He lives in Tokyo.",
        "mandarin": "他住在东京。"
    },
    "541": {
        "english": "There was no cat.",
        "mandarin": "那儿没有猫。"
    },
    "542": {
        "english": "I do not speak Chinese.",
        "mandarin": "我不会说汉语。"
    },
    "543": {
        "english": "I don't speak Chinese.",
        "mandarin": "我不会说汉语。"
    },
    "544": {
        "english": "Oh, my God!",
        "mandarin": "我的天哪!"
    },
    "545": {
        "english": "I will not come.",
        "mandarin": "我不会来。"
    },
    "546": {
        "english": "The weather is getting cold.",
        "mandarin": "天气冷了。"
    },
    "547": {
        "english": "She will sit there reading a book.",
        "mandarin": "她会坐在那里看书。"
    },
    "548": {
        "english": "Whenever you come, you are welcome.",
        "mandarin": "来的都是朋友。"
    },
    "549": {
        "english": "I'm glad to know you.",
        "mandarin": "很高兴认识你。"
    },
    "550": {
        "english": "I like dogs very much.",
        "mandarin": "我很喜欢狗。"
    },
    "551": {
        "english": "You're not my friend anymore.",
        "mandarin": "你不是我的朋友了。"
    },
    "552": {
        "english": "She's my type.",
        "mandarin": "她是我的菜。"
    },
    "553": {
        "english": "I don't want to talk anymore.",
        "mandarin": "我不想再说了。"
    },
    "554": {
        "english": "I know her.",
        "mandarin": "我认识她。"
    },
    "555": {
        "english": "I know these students.",
        "mandarin": "我认识这些学生。"
    },
    "556": {
        "english": "It's twenty past six.",
        "mandarin": "六点二十分了。"
    },
    "557": {
        "english": "She adores cats.",
        "mandarin": "她很喜欢猫。"
    },
    "558": {
        "english": "I like cats.",
        "mandarin": "我喜欢猫。"
    },
    "559": {
        "english": "I'm a high school student.",
        "mandarin": "我是个高中生。"
    },
    "560": {
        "english": "I'm a senior high school student.",
        "mandarin": "我是个高中生。"
    },
    "561": {
        "english": "Please have a seat.",
        "mandarin": "请坐一下。"
    },
    "562": {
        "english": "It doesn't matter.",
        "mandarin": "没关系。"
    },
    "563": {
        "english": "The tall woman is beautiful.",
        "mandarin": "那高个儿女人很漂亮。"
    },
    "564": {
        "english": "I can cook.",
        "mandarin": "我会做饭。"
    },
    "565": {
        "english": "Tomorrow's going to be a big day.",
        "mandarin": "明天是个大日子。"
    },
    "566": {
        "english": "Is there anyone here?",
        "mandarin": "这儿有人吗?"
    },
    "567": {
        "english": "Where do you want to go?",
        "mandarin": "你想去哪儿?"
    },
    "568": {
        "english": "How can I return home?",
        "mandarin": "我怎么回家?"
    },
    "569": {
        "english": "Where is the taxi?",
        "mandarin": "哪儿有出租车?"
    },
    "570": {
        "english": "I'm glad you were right.",
        "mandarin": "很高兴你是对的。"
    },
    "571": {
        "english": "My friends are all really nice.",
        "mandarin": "我的朋友人都很好。"
    },
    "572": {
        "english": "I don't like studying.",
        "mandarin": "我不喜欢学习。"
    },
    "573": {
        "english": "I don't like anything.",
        "mandarin": "我什么都不喜欢。"
    },
    "574": {
        "english": "I don't like you.",
        "mandarin": "我不喜欢你。"
    },
    "575": {
        "english": "I don't like tea.",
        "mandarin": "我不喜欢喝茶。"
    },
    "576": {
        "english": "She went to hospital.",
        "mandarin": "她去医院了"
    },
    "577": {
        "english": "He come here by plane.",
        "mandarin": "他是坐飞机来的"
    },
    "578": {
        "english": "I can cook.",
        "mandarin": "我会做饭"
    },
    "579": {
        "english": "How is this book?",
        "mandarin": "这本书怎吗样"
    },
    "580": {
        "english": "We all saw that man.",
        "mandarin": "我们都看见那个人了"
    },
    "581": {
        "english": "She is very happy.",
        "mandarin": "她很高兴"
    },
    "582": {
        "english": "He didn't go to hospital.",
        "mandarin": "他没去医院"
    },
    "583": {
        "english": "She didn't go to watch movie.",
        "mandarin": "她没去看电影"
    },
    "584": {
        "english": "Which fruit do you like?",
        "mandarin": "你爱吃什么水果"
    },
    "585": {
        "english": "How old are you?",
        "mandarin": "你几岁了"
    },
    "586": {
        "english": "Is he a doctor?",
        "mandarin": "他是医生吗"
    },
    "587": {
        "english": "He is not at the restaurant.",
        "mandarin": "他不在饭店"
    },
    "588": {
        "english": "I arrived yesterday.",
        "mandarin": "我是昨天来的"
    },
    "589": {
        "english": "I bought this at the train station.",
        "mandarin": "这是在火车站买的"
    },
    "590": {
        "english": "They are eating.",
        "mandarin": "他们在吃饭"
    },
    "591": {
        "english": "I live in Beijing.",
        "mandarin": "我住在北京"
    },
    "592": {
        "english": "I am not a student.",
        "mandarin": "我不是学生"
    },
    "593": {
        "english": "Not one friend came.",
        "mandarin": "没有一个朋友来了。"
    },
    "594": {
        "english": "No friends came.",
        "mandarin": "没有一个朋友来了。"
    },
    "595": {
        "english": "I can go to your house tomorrow.",
        "mandarin": "明天我能去你家。"
    },
    "596": {
        "english": "What stop is this?",
        "mandarin": "这一站是什么?"
    },
    "597": {
        "english": "You're right.",
        "mandarin": "你说的对。"
    },
    "598": {
        "english": "They seldom watch television these days.",
        "mandarin": "这些天他们很少看电视。"
    },
    "599": {
        "english": "Today we have a lot of food.",
        "mandarin": "我们今天吃了很多饭。"
    },
    "600": {
        "english": "We drank a little.",
        "mandarin": "我们喝了一点水。"
    },
    "601": {
        "english": "You aren't Japanese.",
        "mandarin": "你不是日本人。"
    },
    "602": {
        "english": "My son doesn't obey me.",
        "mandarin": "我儿子不听我话。"
    },
    "603": {
        "english": "You're way too drunk.",
        "mandarin": "你喝多了。"
    },
    "604": {
        "english": "I can drive a car.",
        "mandarin": "我会开车。"
    },
    "605": {
        "english": "This is mine.",
        "mandarin": "这是我的。"
    },
    "606": {
        "english": "She is different from how she looks.",
        "mandarin": "她不是她看起来的那样。"
    },
    "607": {
        "english": "We had a lot to drink.",
        "mandarin": "我们喝了很多。"
    },
    "608": {
        "english": "He won't be back tomorrow.",
        "mandarin": "他明天不回来。"
    },
    "609": {
        "english": "It's eight o'clock.",
        "mandarin": "现在八点钟。"
    },
    "610": {
        "english": "You are a good driver.",
        "mandarin": "你开车很好。"
    },
    "611": {
        "english": "You're a good driver.",
        "mandarin": "你开车很好。"
    },
    "612": {
        "english": "She slept in the car.",
        "mandarin": "她在车子里睡觉。"
    },
    "613": {
        "english": "She sleeps in the car.",
        "mandarin": "她在车子里睡觉。"
    },
    "614": {
        "english": "This is cold.",
        "mandarin": "这是冷的。"
    },
    "615": {
        "english": "He isn't home.",
        "mandarin": "他不在家。"
    },
    "616": {
        "english": "He isn't at home.",
        "mandarin": "他不在家。"
    },
    "617": {
        "english": "We'll meet again.",
        "mandarin": "后会有期。"
    },
    "618": {
        "english": "I don't want to go home.",
        "mandarin": "我不想回家。"
    },
    "619": {
        "english": "I don't want to eat.",
        "mandarin": "我不想吃。"
    },
    "620": {
        "english": "We cannot see them.",
        "mandarin": "我们看不见他们。"
    },
    "621": {
        "english": "We can't see them.",
        "mandarin": "我们看不见他们。"
    },
    "622": {
        "english": "I go to school.",
        "mandarin": "我去学校。"
    },
    "623": {
        "english": "He is tall.",
        "mandarin": "他高。"
    },
    "624": {
        "english": "You didn't say a word.",
        "mandarin": "你什么都没说。"
    },
    "625": {
        "english": "We'll come back tomorrow.",
        "mandarin": "我们明天回来。"
    },
    "626": {
        "english": "Today is Wednesday.",
        "mandarin": "今天是星期三。"
    },
    "627": {
        "english": "They say that I'm an old woman.",
        "mandarin": "他们说我是老女人。"
    },
    "628": {
        "english": "He's an author.",
        "mandarin": "他是作家。"
    },
    "629": {
        "english": "He is an author.",
        "mandarin": "他是作家。"
    },
    "630": {
        "english": "That's no big deal.",
        "mandarin": "那没什么大不了的。"
    },
    "631": {
        "english": "You look very good.",
        "mandarin": "你看上去很好。"
    },
    "632": {
        "english": "Who cares?",
        "mandarin": "爱谁谁。"
    },
    "633": {
        "english": "Study hard.",
        "mandarin": "好好学习。"
    },
    "634": {
        "english": "Someone came.",
        "mandarin": "有人来了。"
    },
    "635": {
        "english": "Nice timing.",
        "mandarin": "好时机。"
    },
    "636": {
        "english": "Dogs bark.",
        "mandarin": "狗会叫。"
    },
    "637": {
        "english": "Look there.",
        "mandarin": "看那里。"
    },
    "638": {
        "english": "Be nice.",
        "mandarin": "和气点。"
    },
    "639": {
        "english": "He came.",
        "mandarin": "他来了。"
    },
    "640": {
        "english": "I heard about them.",
        "mandarin": "我听说了他们。"
    },
    "641": {
        "english": "I want to have a little look.",
        "mandarin": "我想看看。"
    },
    "642": {
        "english": "He'll be back home tomorrow.",
        "mandarin": "他明天会在家。"
    },
    "643": {
        "english": "I want to speak.",
        "mandarin": "我想说话"
    },
    "644": {
        "english": "I'm not a doctor.",
        "mandarin": "我不是医生"
    },
    "645": {
        "english": "This year is 2011.",
        "mandarin": "今年是二零一一年。"
    },
    "646": {
        "english": "It's too small.",
        "mandarin": "太小了。"
    },
    "647": {
        "english": "He will come back.",
        "mandarin": "他会回来的。"
    },
    "648": {
        "english": "It will not rain tomorrow.",
        "mandarin": "明天不会下雨。"
    },
    "649": {
        "english": "I can't convince them.",
        "mandarin": "我说服不了他们。"
    },
    "650": {
        "english": "See you in two days.",
        "mandarin": "后天见。"
    },
    "651": {
        "english": "Be friendly.",
        "mandarin": "友好点。"
    },
    "652": {
        "english": "They all did it.",
        "mandarin": "他们都做了。"
    },
    "653": {
        "english": "Drink a cup of water.",
        "mandarin": "喝一杯水。"
    },
    "654": {
        "english": "He doesn't listen.",
        "mandarin": "他没听。"
    },
    "655": {
        "english": "You don't look so happy.",
        "mandarin": "你看来不大高兴。"
    },
    "656": {
        "english": "He's not here.",
        "mandarin": "他不在这里。"
    },
    "657": {
        "english": "I am in Beijing right now.",
        "mandarin": "我现在在北京。"
    },
    "658": {
        "english": "On the table there are some books.",
        "mandarin": "桌上有些书。"
    },
    "659": {
        "english": "What day was yesterday?",
        "mandarin": "昨天星期几?"
    },
    "660": {
        "english": "It looks like he'll be coming here next month.",
        "mandarin": "看来他会在下个月来。"
    },
    "661": {
        "english": "Nobody wants to visit my country.",
        "mandarin": "没人想去我的国家。"
    },
    "662": {
        "english": "They loved her.",
        "mandarin": "他们爱她。"
    },
    "663": {
        "english": "The students are all at their desks now.",
        "mandarin": "学生们现在都坐在桌前。"
    },
    "664": {
        "english": "Please have a look at this book.",
        "mandarin": "请看这本书。"
    },
    "665": {
        "english": "Are you home?",
        "mandarin": "你在家吗"
    },
    "666": {
        "english": "Are you home?",
        "mandarin": "你们在家吗"
    },
    "667": {
        "english": "I'm never coming back here again.",
        "mandarin": "我不会再回来了。"
    },
    "668": {
        "english": "That wasn't very good.",
        "mandarin": "那不太好。"
    },
    "669": {
        "english": "I got a good night's sleep.",
        "mandarin": "我睡了个好觉。"
    },
    "670": {
        "english": "They would never meet again.",
        "mandarin": "他们不会再见面了。"
    },
    "671": {
        "english": "She paid me a visit yesterday.",
        "mandarin": "她昨天来见我了。"
    },
    "672": {
        "english": "That wasn't nice.",
        "mandarin": "那不好。"
    },
    "673": {
        "english": "Those are their books.",
        "mandarin": "这是他们的书。"
    },
    "674": {
        "english": "Her birthday is May 5th.",
        "mandarin": "她的生日是五月五日。"
    },
    "675": {
        "english": "We'll meet him there.",
        "mandarin": "我们会在那里见他。"
    },
    "676": {
        "english": "I'm glad you came over.",
        "mandarin": "我很高兴你回来了。"
    },
    "677": {
        "english": "I'm calling them back.",
        "mandarin": "我在叫他们回来。"
    },
    "678": {
        "english": "It seems that he is fine.",
        "mandarin": "看来他很好。"
    },
    "679": {
        "english": "We were friends.",
        "mandarin": "我们是朋友。"
    },
    "680": {
        "english": "He is here.",
        "mandarin": "他在这里。"
    },
    "681": {
        "english": "He has seven sons.",
        "mandarin": "他有七个儿子。"
    },
    "682": {
        "english": "I'm reading.",
        "mandarin": "我在读书。"
    },
    "683": {
        "english": "I am going to sleep.",
        "mandarin": "我睡觉了。"
    },
    "684": {
        "english": "I have a certain amount of money on me.",
        "mandarin": "我有些钱。"
    },
    "685": {
        "english": "He's looking at us.",
        "mandarin": "他在看我们。"
    },
    "686": {
        "english": "We didn't start the fire.",
        "mandarin": "我们没点火。"
    },
    "687": {
        "english": "She hit him.",
        "mandarin": "她打了他。"
    },
    "688": {
        "english": "It's not mine.",
        "mandarin": "不是我的。"
    },
    "689": {
        "english": "I've finished eating.",
        "mandarin": "我吃好饭了。"
    },
    "690": {
        "english": "I'm not Chinese.",
        "mandarin": "我不是中国人。"
    },
    "691": {
        "english": "I can become angry.",
        "mandarin": "我会生气。"
    },
    "692": {
        "english": "He's exactly my age.",
        "mandarin": "他和我同岁。"
    },
    "693": {
        "english": "I like these.",
        "mandarin": "我喜欢这些东西。"
    },
    "694": {
        "english": "He's as tall as me.",
        "mandarin": "他和我一样高。"
    },
    "695": {
        "english": "I love the people here.",
        "mandarin": "我爱这里的人们。"
    },
    "696": {
        "english": "Please take your seat.",
        "mandarin": "请坐。"
    },
    "697": {
        "english": "I don't like watching TV.",
        "mandarin": "我不喜欢看电视。"
    },
    "698": {
        "english": "That feels good.",
        "mandarin": "那看来很好。"
    },
    "699": {
        "english": "We want to hear it.",
        "mandarin": "我们想听听。"
    },
    "700": {
        "english": "It's over there.",
        "mandarin": "在那里。"
    },
    "701": {
        "english": "I paid him a visit yesterday.",
        "mandarin": "我昨天去见他了。"
    },
    "702": {
        "english": "We're very different.",
        "mandarin": "我们很不一样。"
    },
    "703": {
        "english": "Here's your tea.",
        "mandarin": "这是你的茶。"
    },
    "704": {
        "english": "I'd like to get some sleep.",
        "mandarin": "我想睡点觉。"
    },
    "705": {
        "english": "It's her fifth birthday tomorrow.",
        "mandarin": "明天是她五岁生日。"
    },
    "706": {
        "english": "This book is small.",
        "mandarin": "这本书小。"
    },
    "707": {
        "english": "This is my school.",
        "mandarin": "这是我们的学校。"
    },
    "708": {
        "english": "I am sleeping.",
        "mandarin": "我在睡觉。"
    },
    "709": {
        "english": "She didn't come.",
        "mandarin": "她不来了。"
    },
    "710": {
        "english": "You all didn't come.",
        "mandarin": "你们不来了。"
    },
    "711": {
        "english": "You haven't eaten.",
        "mandarin": "你没有吃。"
    },
    "712": {
        "english": "He hasn't eaten.",
        "mandarin": "他没有吃。"
    },
    "713": {
        "english": "She hasn't eaten.",
        "mandarin": "她没有吃。"
    },
    "714": {
        "english": "You all are reading.",
        "mandarin": "你们在读书。"
    },
    "715": {
        "english": "They didn't like you.",
        "mandarin": "他们不喜欢你。"
    },
    "716": {
        "english": "He went there ten years ago.",
        "mandarin": "他十年前去了那里。"
    },
    "717": {
        "english": "She was born last year.",
        "mandarin": "她去年出生。"
    },
    "718": {
        "english": "I stay at home on Sundays.",
        "mandarin": "我星期天在家。"
    },
    "719": {
        "english": "My cats will love this.",
        "mandarin": "我的猫会爱上这个。"
    },
    "720": {
        "english": "She is absent.",
        "mandarin": "她不在。"
    },
    "721": {
        "english": "There's somebody in there.",
        "mandarin": "有人在那里。"
    },
    "722": {
        "english": "Read this now.",
        "mandarin": "现在读这个。"
    },
    "723": {
        "english": "I'm sitting here in my car.",
        "mandarin": "我坐在我车里。"
    },
    "724": {
        "english": "We have one of your friends here with us.",
        "mandarin": "你的一个朋友在我们这里。"
    },
    "725": {
        "english": "I don't feel like eating anything today.",
        "mandarin": "我今天不想吃东西。"
    },
    "726": {
        "english": "That would be relevant.",
        "mandarin": "那会有关系。"
    },
    "727": {
        "english": "They love that.",
        "mandarin": "他们喜欢那个"
    },
    "728": {
        "english": "Turn back, please.",
        "mandarin": "请回来。"
    },
    "729": {
        "english": "We've not done well.",
        "mandarin": "我们没有做好。"
    },
    "730": {
        "english": "You did not come to school yesterday.",
        "mandarin": "你昨天没来学校。"
    },
    "731": {
        "english": "He is my father.",
        "mandarin": "他是我的爸爸。"
    },
    "732": {
        "english": "He's my father.",
        "mandarin": "他是我的爸爸。"
    },
    "733": {
        "english": "He's my dad.",
        "mandarin": "他是我的爸爸。"
    },
    "734": {
        "english": "He is my dad.",
        "mandarin": "他是我的爸爸。"
    },
    "735": {
        "english": "I think he isn't Chinese.",
        "mandarin": "我想他不是中国人。"
    },
    "736": {
        "english": "I think he is not Chinese.",
        "mandarin": "我想他不是中国人。"
    },
    "737": {
        "english": "I am your father.",
        "mandarin": "我是你爸爸。"
    },
    "738": {
        "english": "I was so homesick.",
        "mandarin": "我很想家。"
    },
    "739": {
        "english": "I was so cold.",
        "mandarin": "我很冷。"
    },
    "740": {
        "english": "You're a celebrity now.",
        "mandarin": "你现在是名人了。"
    },
    "741": {
        "english": "You and he are both very kind.",
        "mandarin": "你和他都很友好 。"
    },
    "742": {
        "english": "I'm not turning back.",
        "mandarin": "我不回去。"
    },
    "743": {
        "english": "Today is one of my friends' birthday.",
        "mandarin": "今天是我一个朋友的生日。"
    },
    "744": {
        "english": "I have a lot of cats.",
        "mandarin": "我有很多狗。"
    },
    "745": {
        "english": "I saw the sunrise.",
        "mandarin": "我看了日出。"
    },
    "746": {
        "english": "He is at home today.",
        "mandarin": "他今天在家。"
    },
    "747": {
        "english": "I did not recognise them.",
        "mandarin": "我没有认出来他们。"
    },
    "748": {
        "english": "These apples are very big.",
        "mandarin": "这些苹果很大。"
    },
    "749": {
        "english": "You've done a lot.",
        "mandarin": "你做了很多。"
    },
    "750": {
        "english": "I don't go to school.",
        "mandarin": "我不去学校。"
    },
    "751": {
        "english": "I love reading novels.",
        "mandarin": "我爱看小说。"
    },
    "752": {
        "english": "Speaking.",
        "mandarin": "喂。"
    },
    "753": {
        "english": "Where shall we meet?",
        "mandarin": "我们在哪儿见面?"
    },
    "754": {
        "english": "I go out for lunch at twelve.",
        "mandarin": "我十二点出去吃午饭。"
    },
    "755": {
        "english": "I bought several books yesterday.",
        "mandarin": "我昨天买了好几本书。"
    },
    "756": {
        "english": "You are not coming.",
        "mandarin": "你不来了。"
    },
    "757": {
        "english": "I will be here Wednesday afternoon.",
        "mandarin": "星期三下午我在。"
    },
    "758": {
        "english": "No one was watching.",
        "mandarin": "没有人在看。"
    },
    "759": {
        "english": "It's very cold here.",
        "mandarin": "这里很冷。"
    },
    "760": {
        "english": "I don't know that person.",
        "mandarin": "我不认识那个人。"
    },
    "761": {
        "english": "There's somebody who wants to meet you.",
        "mandarin": "有一个人想见你。"
    },
    "762": {
        "english": "That is mine.",
        "mandarin": "那是我的。"
    },
    "763": {
        "english": "Don't mention it.",
        "mandarin": "不客气"
    },
    "764": {
        "english": "I miss you!",
        "mandarin": "我想你!"
    },
    "765": {
        "english": "Okay.",
        "mandarin": "好的。"
    },
    "766": {
        "english": "Drink water.",
        "mandarin": "喝水。"
    },
    "767": {
        "english": "He hasn't eaten.",
        "mandarin": "他没吃。"
    },
    "768": {
        "english": "Delicious.",
        "mandarin": "很好吃。"
    },
    "769": {
        "english": "Eat fruit.",
        "mandarin": "吃水果。"
    },
    "770": {
        "english": "We don't have any water.",
        "mandarin": "我们没水。"
    },
    "771": {
        "english": "They work together.",
        "mandarin": "他们在一起工作。"
    },
    "772": {
        "english": "We won't see you again.",
        "mandarin": "我们不会再见你了。"
    },
    "773": {
        "english": "Those are hers.",
        "mandarin": "那些是她的。"
    },
    "774": {
        "english": "The cat is sleeping.",
        "mandarin": "猫在睡觉。"
    },
    "775": {
        "english": "My lover is great at cooking.",
        "mandarin": "我的爱人很会做饭。"
    },
    "776": {
        "english": "Where is the train station?",
        "mandarin": "火车站在哪里?"
    },
    "777": {
        "english": "Do you want to?",
        "mandarin": "你想吗?"
    },
    "778": {
        "english": "Where are you going?",
        "mandarin": "你们去哪里?"
    },
    "779": {
        "english": "The food is ready.",
        "mandarin": "饭做好了。"
    },
    "780": {
        "english": "I stayed in hospital for a week.",
        "mandarin": "我在医院住了一个星期。"
    },
    "781": {
        "english": "Yesterday I went to the movies.",
        "mandarin": "昨天我去电影院。"
    },
    "782": {
        "english": "It's not.",
        "mandarin": "不是。"
    },
    "783": {
        "english": "She has returned.",
        "mandarin": "她回来了。"
    },
    "784": {
        "english": "She is sleeping.",
        "mandarin": "她在睡觉。"
    },
    "785": {
        "english": "My name is Xiao Yu.",
        "mandarin": "我叫小雨。"
    },
    "786": {
        "english": "This is a hospital.",
        "mandarin": "这是医院。"
    },
    "787": {
        "english": "He is out now.",
        "mandarin": "他现在出去了。"
    },
    "788": {
        "english": "He's out now.",
        "mandarin": "他现在出去了。"
    },
    "789": {
        "english": "He has left now.",
        "mandarin": "他现在出去了。"
    },
    "790": {
        "english": "I drive everywhere.",
        "mandarin": "我去哪里都开车。"
    },
    "791": {
        "english": "He's the same age as I.",
        "mandarin": "他和我同岁。"
    },
    "792": {
        "english": "He is as old as I.",
        "mandarin": "他和我同岁。"
    },
    "793": {
        "english": "He's the same age as me.",
        "mandarin": "他和我同岁。"
    },
    "794": {
        "english": "I was wondering if you were going to show up today.",
        "mandarin": "我在想你今天会不会来。"
    },
    "795": {
        "english": "He is reading a book.",
        "mandarin": "他在读书。"
    },
    "796": {
        "english": "He is reading books.",
        "mandarin": "他在读书。"
    },
    "797": {
        "english": "I drank a cup of water.",
        "mandarin": "我喝了一杯水。"
    },
    "798": {
        "english": "He came back.",
        "mandarin": "他回来了。"
    },
    "799": {
        "english": "He is back.",
        "mandarin": "他回来了。"
    },
    "800": {
        "english": "You are a very happy person.",
        "mandarin": "很高兴人是你"
    },
    "801": {
        "english": "You are not me.",
        "mandarin": "你不是我。"
    },
    "802": {
        "english": "This person is not my friend.",
        "mandarin": "这个人不是我的朋友。"
    },
    "803": {
        "english": "The meals are not too good.",
        "mandarin": "饭菜不太好。"
    },
    "804": {
        "english": "The food isn't too great.",
        "mandarin": "饭菜不太好。"
    },
    "805": {
        "english": "He's studying.",
        "mandarin": "他在读书。"
    },
    "806": {
        "english": "He is studying.",
        "mandarin": "他在读书。"
    },
    "807": {
        "english": "He reads a book.",
        "mandarin": "他在看书。"
    },
    "808": {
        "english": "He's reading.",
        "mandarin": "他在看书。"
    },
    "809": {
        "english": "This water cannot be drunk.",
        "mandarin": "这水不能喝。"
    },
    "810": {
        "english": "You cannot drink this water.",
        "mandarin": "这水不能喝。"
    },
    "811": {
        "english": "He eats.",
        "mandarin": "他吃。"
    },
    "812": {
        "english": "They like apples.",
        "mandarin": "他们喜欢苹果。"
    },
    "813": {
        "english": "We can do nothing.",
        "mandarin": "我们什么都做不了。"
    },
    "814": {
        "english": "Yes.",
        "mandarin": "是。"
    },
    "815": {
        "english": "You're here.",
        "mandarin": "你在这里。"
    },
    "816": {
        "english": "I am a student.",
        "mandarin": "我是个学生。"
    },
    "817": {
        "english": "I'm a student.",
        "mandarin": "我是个学生。"
    },
    "818": {
        "english": "I have no friends.",
        "mandarin": "我没有朋友。"
    },
    "819": {
        "english": "I've got no friends.",
        "mandarin": "我没有朋友。"
    },
    "820": {
        "english": "He is a teacher.",
        "mandarin": "他是老师。"
    },
    "821": {
        "english": "We are now at Tokyo station.",
        "mandarin": "我们现在在东京站。"
    },
    "822": {
        "english": "They are reading books.",
        "mandarin": "他们在读书。"
    },
    "823": {
        "english": "Yesterday it rained all day.",
        "mandarin": "昨天下了一天的雨。"
    },
    "824": {
        "english": "Where has Dad gone?",
        "mandarin": "爸爸去哪了?"
    },
    "825": {
        "english": "They are not all at home right now.",
        "mandarin": "他们现在都不在家"
    },
    "826": {
        "english": "I like them.",
        "mandarin": "我喜欢他们。"
    },
    "827": {
        "english": "He said something.",
        "mandarin": "他说了些什么。"
    },
    "828": {
        "english": "So they say.",
        "mandarin": "人们是这样说的。"
    },
    "829": {
        "english": "I'm going to the cinema.",
        "mandarin": "我去看电影。"
    },
    "830": {
        "english": "I am tall.",
        "mandarin": "我个子高。"
    },
    "831": {
        "english": "I'm tall.",
        "mandarin": "我个子高。"
    },
    "832": {
        "english": "She wants to work at the hospital.",
        "mandarin": "她想在医院工作。"
    },
    "833": {
        "english": "I don't have a dog.",
        "mandarin": "我没有狗。"
    },
    "834": {
        "english": "Today I'm going home.",
        "mandarin": "今天我回家"
    },
    "835": {
        "english": "You returned.",
        "mandarin": "你回来了。"
    },
    "836": {
        "english": "I don't want to go.",
        "mandarin": "我不想去。"
    },
    "837": {
        "english": "I have a lot of Japanese friends.",
        "mandarin": "我有很多日本朋友。"
    },
    "838": {
        "english": "They are reading a book.",
        "mandarin": "她们在读书。"
    },
    "839": {
        "english": "I don't want to eat again.",
        "mandarin": "我不想再吃了。"
    },
    "840": {
        "english": "We would like to go very much.",
        "mandarin": "我们很想去。"
    },
    "841": {
        "english": "You are at work.",
        "mandarin": "你在工作。"
    },
    "842": {
        "english": "I am not famous.",
        "mandarin": "我不出名。"
    },
    "843": {
        "english": "I want to go home.",
        "mandarin": "我想回家。"
    },
    "844": {
        "english": "I am going to buy clothes today.",
        "mandarin": "我今天去买衣服了。"
    },
    "845": {
        "english": "Your clothes are extremely beautiful.",
        "mandarin": "你的衣服太漂亮了。"
    },
    "846": {
        "english": "All of her daughters are beautiful.",
        "mandarin": "她的女儿都很漂亮。"
    },
    "847": {
        "english": "I want to study Chinese and go to China.",
        "mandarin": "我想学汉语和去中国。"
    },
    "848": {
        "english": "I don't like going to school.",
        "mandarin": "我不喜欢上学。"
    },
    "849": {
        "english": "I am not at home tomorrow.",
        "mandarin": "我明天不在家。"
    },
    "850": {
        "english": "He rarely eats with his family.",
        "mandarin": "他很少和家里人吃饭。"
    },
    "851": {
        "english": "She is at work.",
        "mandarin": "她在工作。"
    },
    "852": {
        "english": "I want to go to see a doctor.",
        "mandarin": "我想去看医生。"
    },
    "853": {
        "english": "She went out.",
        "mandarin": "她出去了"
    },
    "854": {
        "english": "I didn't go to school yesterday.",
        "mandarin": "昨天你没有去学校。"
    },
    "855": {
        "english": "You are at home today noon time.",
        "mandarin": "今天中午你在家。"
    },
    "856": {
        "english": "This afternoon it is going to rain.",
        "mandarin": "今天下午下雨。"
    },
    "857": {
        "english": "The weather is getting colder day by day.",
        "mandarin": "天气一天天冷下来了。"
    },
    "858": {
        "english": "I am not famous.",
        "mandarin": "我没名气。"
    },
    "859": {
        "english": "It will rain this morning.",
        "mandarin": "今天上午下雨。"
    },
    "860": {
        "english": "I'm reading your book.",
        "mandarin": "我在读你的书。"
    },
    "861": {
        "english": "He seldom eats fruits.",
        "mandarin": "他很少吃水果。"
    },
    "862": {
        "english": "I don't have any Japanese friends.",
        "mandarin": "我没有日本朋友。"
    },
    "863": {
        "english": "It's my treat today.",
        "mandarin": "今天我来请客。"
    },
    "864": {
        "english": "He said he wasn't coming back.",
        "mandarin": "他说他不回来了。"
    },
    "865": {
        "english": "I like watching movies.",
        "mandarin": "我喜欢看电影。"
    },
    "866": {
        "english": "I'm sleeping.",
        "mandarin": "我在睡觉。"
    },
    "867": {
        "english": "He knows many people.",
        "mandarin": "他认识很多人。"
    },
    "868": {
        "english": "I want to eat something delicious.",
        "mandarin": "我想吃点好吃的。"
    },
    "869": {
        "english": "I want to eat something tasty.",
        "mandarin": "我想吃点好吃的。"
    },
    "870": {
        "english": "I'll be absent from home in the afternoon.",
        "mandarin": "下午我不在家。"
    },
    "871": {
        "english": "He likes to live in Tokyo.",
        "mandarin": "他喜欢住在东京。"
    },
    "872": {
        "english": "She doesn't like to go to school.",
        "mandarin": "她不喜欢去学校。"
    },
    "873": {
        "english": "Drink tea.",
        "mandarin": "喝茶。"
    },
    "874": {
        "english": "Eat vegetables.",
        "mandarin": "吃菜。"
    },
    "875": {
        "english": "Are you talking?",
        "mandarin": "你说吗?"
    },
    "876": {
        "english": "Do you talk?",
        "mandarin": "你说吗?"
    },
    "877": {
        "english": "Did you talk?",
        "mandarin": "你说吗?"
    },
    "878": {
        "english": "Do you write?",
        "mandarin": "你写吗?"
    },
    "879": {
        "english": "Did you write?",
        "mandarin": "你写吗?"
    },
    "880": {
        "english": "Are you writing?",
        "mandarin": "你写吗?"
    },
    "881": {
        "english": "I am a doctor.",
        "mandarin": "我是医生。"
    },
    "882": {
        "english": "She rarely goes out.",
        "mandarin": "她很少出去。"
    },
    "883": {
        "english": "I'm his friend.",
        "mandarin": "我是他的朋友。"
    },
    "884": {
        "english": "I bought some apples.",
        "mandarin": "我买一点儿苹果。"
    },
    "885": {
        "english": "He came on the 18th of April.",
        "mandarin": "他四月十八日来了。"
    },
    "886": {
        "english": "He won't be coming here again.",
        "mandarin": "他不会再来这儿了。"
    },
    "887": {
        "english": "He won't come here again.",
        "mandarin": "他不会再来这儿了。"
    },
    "888": {
        "english": "Why would there be?",
        "mandarin": "怎么会有"
    },
    "889": {
        "english": "Do you have it?",
        "mandarin": "你们有吗?"
    },
    "890": {
        "english": "Tell him to come.",
        "mandarin": "你去叫他来。"
    },
    "891": {
        "english": "I was born on October 10, 1972.",
        "mandarin": "我在一九七二年十月十日出生。"
    },
    "892": {
        "english": "You think too much.",
        "mandarin": "你想太多了。"
    },
    "893": {
        "english": "You're thinking too much.",
        "mandarin": "你想太多了。"
    },
    "894": {
        "english": "You're reading too much into this.",
        "mandarin": "你想太多了。"
    },
    "895": {
        "english": "You're reading too much into things.",
        "mandarin": "你想太多了。"
    },
    "896": {
        "english": "We haven't eaten.",
        "mandarin": "我们没有吃。"
    },
    "897": {
        "english": "We haven't eaten.",
        "mandarin": "我们没吃。"
    },
    "898": {
        "english": "Thank you.",
        "mandarin": "谢谢。"
    },
    "899": {
        "english": "I'm eating rice.",
        "mandarin": "我在吃米饭。"
    },
    "900": {
        "english": "There is an apple on the desk.",
        "mandarin": "桌上有个苹果。"
    },
    "901": {
        "english": "There is one apple on the desk.",
        "mandarin": "桌上有个苹果。"
    },
    "902": {
        "english": "An apple sits on the table.",
        "mandarin": "桌上有个苹果。"
    },
    "903": {
        "english": "I no longer love you.",
        "mandarin": "我不再爱你了。"
    },
    "904": {
        "english": "He is just my age.",
        "mandarin": "他和我同岁。"
    },
    "905": {
        "english": "I don't like that.",
        "mandarin": "我不喜欢。"
    },
    "906": {
        "english": "I don't like it.",
        "mandarin": "我不喜欢。"
    },
    "907": {
        "english": "The cup is on the table.",
        "mandarin": "杯子在桌上。"
    },
    "908": {
        "english": "I love you!",
        "mandarin": "我爱你。"
    },
    "909": {
        "english": "She is tall.",
        "mandarin": "她高。"
    },
    "910": {
        "english": "That's mine.",
        "mandarin": "那是我的。"
    },
    "911": {
        "english": "She knows me.",
        "mandarin": "她认识我。"
    },
    "912": {
        "english": "Somebody came.",
        "mandarin": "有人来了。"
    },
    "913": {
        "english": "I do not like you.",
        "mandarin": "我不喜欢你。"
    },
    "914": {
        "english": "He's in the hospital.",
        "mandarin": "他在医院。"
    },
    "915": {
        "english": "He's in hospital.",
        "mandarin": "他在医院。"
    },
    "916": {
        "english": "I'm glad you guys are here.",
        "mandarin": "我很高兴你们都在。"
    },
    "917": {
        "english": "I'm glad that you guys are here.",
        "mandarin": "我很高兴你们都在。"
    },
    "918": {
        "english": "I have a few friends here.",
        "mandarin": "我在这儿有一些朋友。"
    },
    "919": {
        "english": "I am a cat.",
        "mandarin": "我是猫。"
    },
    "920": {
        "english": "I saw you looking at her.",
        "mandarin": "我看见你在看她。"
    },
    "921": {
        "english": "The cat is sleeping on the chair.",
        "mandarin": "猫在椅子上睡觉。"
    },
    "922": {
        "english": "The cat is sleeping on the chair.",
        "mandarin": "猫儿在椅子上睡觉。"
    },
    "923": {
        "english": "The cat sleeps on the chair.",
        "mandarin": "猫儿在椅子上睡觉。"
    },
    "924": {
        "english": "We like you.",
        "mandarin": "我们喜欢你们。"
    },
    "925": {
        "english": "He's happy.",
        "mandarin": "他很高兴。"
    },
    "926": {
        "english": "I'm so happy.",
        "mandarin": "我太高兴了。"
    },
    "927": {
        "english": "You can't say that.",
        "mandarin": "你不能这么说。"
    },
    "928": {
        "english": "I know her sister.",
        "mandarin": "我认识她的姐姐。"
    },
    "929": {
        "english": "They spoke to me.",
        "mandarin": "他们对我说话了。"
    },
    "930": {
        "english": "The cat is sitting on top of the table.",
        "mandarin": "猫坐在桌子上。"
    },
    "931": {
        "english": "I don't have money now.",
        "mandarin": "我现在没有钱。"
    },
    "932": {
        "english": "I have bought some clothes.",
        "mandarin": "我买了些衣服。"
    },
    "933": {
        "english": "He is a doctor.",
        "mandarin": "他是医生来的。"
    },
    "934": {
        "english": "He's a doctor.",
        "mandarin": "他是医生。"
    },
    "935": {
        "english": "He reads a good deal.",
        "mandarin": "他读很多书。"
    },
    "936": {
        "english": "He reads a lot.",
        "mandarin": "他读很多书。"
    },
    "937": {
        "english": "He reads a great deal.",
        "mandarin": "他读很多书。"
    },
    "938": {
        "english": "He reads a lot of books.",
        "mandarin": "他读很多书。"
    },
    "939": {
        "english": "You are right.",
        "mandarin": "你说的对。"
    },
    "940": {
        "english": "You're correct.",
        "mandarin": "你说的对。"
    },
    "941": {
        "english": "I don't fly.",
        "mandarin": "我不飞"
    },
    "942": {
        "english": "You're stupid.",
        "mandarin": "你二了。"
    },
    "943": {
        "english": "I was here.",
        "mandarin": "我在。"
    },
    "944": {
        "english": "That is his house.",
        "mandarin": "那是他家。"
    },
    "945": {
        "english": "That's his house.",
        "mandarin": "那是他家。"
    },
    "946": {
        "english": "Please remain seated for a few minutes.",
        "mandarin": "请坐一会。"
    },
    "947": {
        "english": "You're mine.",
        "mandarin": "你是我的。"
    },
    "948": {
        "english": "He can't buy a car.",
        "mandarin": "他不能买车。"
    },
    "949": {
        "english": "He isn't able to buy a car.",
        "mandarin": "他不能买车。"
    },
    "950": {
        "english": "He can't buy himself a car.",
        "mandarin": "他不能买车。"
    },
    "951": {
        "english": "He is unable to buy a car.",
        "mandarin": "他不能买车。"
    },
    "952": {
        "english": "I'd like to see you tomorrow.",
        "mandarin": "明天我想见你。"
    },
    "953": {
        "english": "I didn't mean to do that.",
        "mandarin": "我没想那样做的。"
    },
    "954": {
        "english": "It's my money.",
        "mandarin": "那是我的钱。"
    },
    "955": {
        "english": "That's my money.",
        "mandarin": "那是我的钱。"
    },
    "956": {
        "english": "You don't look so well.",
        "mandarin": "你看上去不太好。"
    },
    "957": {
        "english": "You seem to be a little under the weather.",
        "mandarin": "你看上去不太好。"
    },
    "958": {
        "english": "I want to learn Chinese and Japanese.",
        "mandarin": "我想学汉语和日语。"
    },
    "959": {
        "english": "I will do it tomorrow.",
        "mandarin": "我明天再做。"
    },
    "960": {
        "english": "I'll do it tomorrow.",
        "mandarin": "我明天再做。"
    },
    "961": {
        "english": "I am nothing.",
        "mandarin": "我什么都不是。"
    },
    "962": {
        "english": "Please take a look at this.",
        "mandarin": "请看看这里。"
    },
    "963": {
        "english": "She is tall.",
        "mandarin": "她个子很高。"
    },
    "964": {
        "english": "I haven't eaten for days.",
        "mandarin": "我好多天没吃东西了。"
    },
    "965": {
        "english": "I haven't eaten anything for days.",
        "mandarin": "我好多天没吃东西了。"
    },
    "966": {
        "english": "You are not Japanese.",
        "mandarin": "你不是日本人。"
    },
    "967": {
        "english": "You're not Japanese.",
        "mandarin": "你不是日本人。"
    },
    "968": {
        "english": "I have few friends.",
        "mandarin": "我朋友很少。"
    },
    "969": {
        "english": "I don't have many friends.",
        "mandarin": "我朋友很少。"
    },
    "970": {
        "english": "We will come back tomorrow.",
        "mandarin": "我们明天回来。"
    },
    "971": {
        "english": "I'm your father.",
        "mandarin": "我是你爸爸。"
    },
    "972": {
        "english": "I didn't hear it.",
        "mandarin": "我没听见。"
    },
    "973": {
        "english": "I do not sleep well.",
        "mandarin": "我睡不好。"
    },
    "974": {
        "english": "I don't sleep well.",
        "mandarin": "我睡不好。"
    },
    "975": {
        "english": "I can't sleep well.",
        "mandarin": "我睡不好。"
    },
    "976": {
        "english": "The book is here.",
        "mandarin": "那本书在这里。"
    },
    "977": {
        "english": "She is my daughter.",
        "mandarin": "她是我女儿。"
    },
    "978": {
        "english": "I am able to drive a car.",
        "mandarin": "我会开车。"
    },
    "979": {
        "english": "My mother cannot drive a car.",
        "mandarin": "我妈不会开车。"
    },
    "980": {
        "english": "My mother can't drive a car.",
        "mandarin": "我妈不会开车。"
    },
    "981": {
        "english": "He has lots of money.",
        "mandarin": "他有很多钱。"
    },
    "982": {
        "english": "At seven I'll be back.",
        "mandarin": "我七点钟再回来。"
    },
    "983": {
        "english": "I'm happy.",
        "mandarin": "我很高兴。"
    },
    "984": {
        "english": "I'll be back at ten.",
        "mandarin": "我十点回来。"
    },
    "985": {
        "english": "I am a university student.",
        "mandarin": "我是个大学生。"
    },
    "986": {
        "english": "I'm a college student.",
        "mandarin": "我是个大学生。"
    },
    "987": {
        "english": "I'm a university student.",
        "mandarin": "我是个大学生。"
    },
    "988": {
        "english": "I am a college student.",
        "mandarin": "我是个大学生。"
    },
    "989": {
        "english": "See you tomorrow.",
        "mandarin": "明天见。"
    },
    "990": {
        "english": "You are good.",
        "mandarin": "你很好。"
    },
    "991": {
        "english": "She eats.",
        "mandarin": "她吃。"
    },
    "992": {
        "english": "She is eating.",
        "mandarin": "她吃。"
    },
    "993": {
        "english": "I thank you.",
        "mandarin": "谢谢你。"
    },
    "994": {
        "english": "Good.",
        "mandarin": "好。"
    },
    "995": {
        "english": "No.",
        "mandarin": "不。"
    },
    "996": {
        "english": "Yesterday was Friday.",
        "mandarin": "昨天是星期五。"
    },
    "997": {
        "english": "We're friends.",
        "mandarin": "我们是朋友。"
    },
    "998": {
        "english": "You're not me.",
        "mandarin": "你不是我。"
    },
    "999": {
        "english": "Where did dad go?",
        "mandarin": "爸爸去哪了?"
    },
    "1000": {
        "english": "He's back.",
        "mandarin": "他回来了。"
    },
    "1001": {
        "english": "You are at work.",
        "mandarin": "你们在工作。"
    },
    "1002": {
        "english": "I have a Chinese friend.",
        "mandarin": "我有一个中国朋友。"
    },
    "1003": {
        "english": "I'm not famous.",
        "mandarin": "我不出名。"
    },
    "1004": {
        "english": "I'm not famous.",
        "mandarin": "我没名气。"
    },
    "1005": {
        "english": "I called you.",
        "mandarin": "我叫了你。"
    },
    "1006": {
        "english": "Your daughter is tall.",
        "mandarin": "你的女儿很高。"
    },
    "1007": {
        "english": "She worked.",
        "mandarin": "她工作了。"
    },
    "1008": {
        "english": "He is in the hospital at present.",
        "mandarin": "他现在在医院。"
    },
    "1009": {
        "english": "He's in the hospital right now.",
        "mandarin": "他现在在医院。"
    },
    "1010": {
        "english": "They have many friends.",
        "mandarin": "他们有很多朋友。"
    },
    "1011": {
        "english": "I feel homesick.",
        "mandarin": "我想家。"
    },
    "1012": {
        "english": "I am homesick.",
        "mandarin": "我想家。"
    },
    "1013": {
        "english": "I'm homesick.",
        "mandarin": "我想家。"
    },
    "1014": {
        "english": "I am acquainted with him.",
        "mandarin": "我和他认识。"
    },
    "1015": {
        "english": "We love Dad.",
        "mandarin": "我们爱爸爸。"
    },
    "1016": {
        "english": "I couldn't hear you.",
        "mandarin": "我听不见你。"
    },
    "1017": {
        "english": "I can't hear you.",
        "mandarin": "我听不见你。"
    },
    "1018": {
        "english": "She is forty years old.",
        "mandarin": "她是四十岁。"
    },
    "1019": {
        "english": "I want money.",
        "mandarin": "我想钱。"
    },
    "1020": {
        "english": "I like my job.",
        "mandarin": "我喜欢我的工作。"
    },
    "1021": {
        "english": "You have a telephone.",
        "mandarin": "你有一个电话。"
    },
    "1022": {
        "english": "They said that.",
        "mandarin": "他们说了那个。"
    },
    "1023": {
        "english": "They said no.",
        "mandarin": "他们说了不。"
    },
    "1024": {
        "english": "You're a very good teacher.",
        "mandarin": "你是一名很好的老师。"
    },
    "1025": {
        "english": "I'll be back by seven or eight o'clock.",
        "mandarin": "我会在七八点回家。"
    },
    "1026": {
        "english": "I'm going to school.",
        "mandarin": "我去学校了。"
    },
    "1027": {
        "english": "The cat meowed.",
        "mandarin": "猫叫了叫。"
    },
    "1028": {
        "english": "He said that he wanted to meet her.",
        "mandarin": "他说想见她。"
    },
    "1029": {
        "english": "They are all good teachers.",
        "mandarin": "他们都是好老师。"
    },
    "1030": {
        "english": "She slept for a few hours.",
        "mandarin": "她睡了几小时。"
    },
    "1031": {
        "english": "I can't afford to buy that.",
        "mandarin": "我买不起那个。"
    }
}