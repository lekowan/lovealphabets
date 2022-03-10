// Configuration
const localStorageKey = "japanese" + "Episode29Part1" + "Srs";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep29 Part 1";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 29 Part 1. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "パンダくんの新しいバイト",
        "letter": "ぱんだくんのあたらしいばいと",
        "pinyin": "Panda-kun's new job"
    },
    "2": {
        "character": "こんにちは～",
        "letter": "こんにちは～",
        "pinyin": "Hello."
    },
    "3": {
        "character": "なにその格好",
        "letter": "なにそのかっこう",
        "pinyin": "What's with the outfit?"
    },
    "4": {
        "character": "クフフ…週１で新しいバイト始めるの",
        "letter": "くふふ…しゅう１であたらしいばいとはじめるの",
        "pinyin": "I'm starting a new part-time job once a week."
    },
    "5": {
        "character": "えぇやめるんじゃなくて増やすの",
        "letter": "えぇやめるんじゃなくてふやすの",
        "pinyin": "Yeah, but I'm not stopping. I'm adding."
    },
    "6": {
        "character": "そうだよ",
        "letter": "そうだよ",
        "pinyin": "Yes, it is."
    },
    "7": {
        "character": "かわいいねパンダ柄",
        "letter": "かわいいねぱんだがら",
        "pinyin": "Cute panda print."
    },
    "8": {
        "character": "わかる笹子さん",
        "letter": "わかるささごさん",
        "pinyin": "I understand, Sasago."
    },
    "9": {
        "character": "でどんなバイトなの",
        "letter": "でどんなばいとなの",
        "pinyin": "So what kind of job is it?"
    },
    "10": {
        "character": "ローラー",
        "letter": "ろーらー",
        "pinyin": "Roller."
    },
    "11": {
        "character": "ローラー?",
        "letter": "ろーらー?",
        "pinyin": "Rollers?"
    },
    "12": {
        "character": "皆目見当つかないんだけど",
        "letter": "かいもくけんとうつかないんだけど",
        "pinyin": "I have no idea what you're talking about."
    },
    "13": {
        "character": "知らないのローラーだよローラー",
        "letter": "しらないのろーらーだよろーらー",
        "pinyin": "I don't know."
    },
    "14": {
        "character": "カーラーそれやったよね",
        "letter": "かーらーそれやったよね",
        "pinyin": "Curler, you did that."
    },
    "15": {
        "character": "セーラーそれもやったよね",
        "letter": "せーらーそれもやったよね",
        "pinyin": "Sailor, you did that too."
    },
    "16": {
        "character": "ディーラーそれも…",
        "letter": "でぃーらーそれも…",
        "pinyin": "Dealer, that's..."
    },
    "17": {
        "character": "あ…それだ",
        "letter": "あ…それだ",
        "pinyin": "Uh... that's it."
    },
    "18": {
        "character": "えっ",
        "letter": "えっ",
        "pinyin": "What?"
    },
    "19": {
        "character": "ローラーじゃなくてディーラーだった",
        "letter": "ろーらーじゃなくてでぃーらーだった",
        "pinyin": "I was a dealer, not a roller."
    },
    "20": {
        "character": "カジノで働くの",
        "letter": "かじのではたらくの",
        "pinyin": "I work in a casino."
    },
    "21": {
        "character": "ううんかっこいい車を売るの",
        "letter": "ううんかっこいいくるまをうるの",
        "pinyin": "No, I sell cool cars."
    },
    "22": {
        "character": "それって…車のディーラー",
        "letter": "それって…くるまのでぃーらー",
        "pinyin": "It's a... car dealership."
    },
    "23": {
        "character": "キミが車を売るの",
        "letter": "きみがくるまをうるの",
        "pinyin": "You sell cars."
    },
    "24": {
        "character": "大丈夫ネクタイしてるし",
        "letter": "だいじょうぶねくたいしてるし",
        "pinyin": "I'm fine. I'm wearing a tie."
    },
    "25": {
        "character": "あ…なんでキミを雇ったんだろう",
        "letter": "あ…なんできみをやとったんだろう",
        "pinyin": "Uh... why did I hire you?"
    },
    "26": {
        "character": "あ～あ楽しみだなぁ",
        "letter": "あ～あたのしみだなぁ",
        "pinyin": "Oh, this is gonna be fun."
    },
    "27": {
        "character": "なにをするのかなぁ",
        "letter": "なにをするのかなぁ",
        "pinyin": "I wonder what he's going to do."
    },
    "28": {
        "character": "売るんじゃない車を",
        "letter": "うるんじゃないくるまを",
        "pinyin": "I'm not selling the car."
    },
    "29": {
        "character": "あれお客さんですか",
        "letter": "あれおきゃくさんですか",
        "pinyin": "Is that a customer?"
    },
    "30": {
        "character": "えっそうだけど",
        "letter": "えっそうだけど",
        "pinyin": "Oh, yeah."
    },
    "31": {
        "character": "いらっしゃいませ",
        "letter": "いらっしゃいませ",
        "pinyin": "Welcome."
    },
    "32": {
        "character": "キミは",
        "letter": "きみは",
        "pinyin": "You are."
    },
    "33": {
        "character": "新しく入ったパンダです",
        "letter": "あたらしくはいったぱんだです",
        "pinyin": "I'm the new panda."
    },
    "34": {
        "character": "はぁそうじゃあちょっといいかね",
        "letter": "はぁそうじゃあちょっといいかね",
        "pinyin": "Oh, well, can I have a word with you?"
    },
    "35": {
        "character": "ちょっとだけならいいですよ",
        "letter": "ちょっとだけならいいですよ",
        "pinyin": "Just a little bit is all right."
    },
    "36": {
        "character": "なんですか",
        "letter": "なんですか",
        "pinyin": "Excuse me?"
    },
    "37": {
        "character": "あぁこの車オプションはなにがあるのかね",
        "letter": "あぁこのくるまおぷしょんはなにがあるのかね",
        "pinyin": "What are the options for this car?"
    },
    "38": {
        "character": "オプションってなに",
        "letter": "おぷしょんってなに",
        "pinyin": "What are options?"
    },
    "39": {
        "character": "あ…",
        "letter": "あ…",
        "pinyin": "Uh..."
    },
    "40": {
        "character": "え～っと…エアバックはついてるのかな",
        "letter": "え～っと…えあばっくはついてるのかな",
        "pinyin": "Well... does it have air bags?"
    },
    "41": {
        "character": "バックしますよさせますか",
        "letter": "ばっくしますよさせますか",
        "pinyin": "It'll back up."
    },
    "42": {
        "character": "えっ…じゃあ燃費は",
        "letter": "えっ…じゃあねんぴは",
        "pinyin": "Well... fuel economy then."
    },
    "43": {
        "character": "もっと違う質問ないですか",
        "letter": "もっとちがうしつもんないですか",
        "pinyin": "Do you have a different question?"
    },
    "44": {
        "character": "例えば",
        "letter": "たとえば",
        "pinyin": "For example."
    },
    "45": {
        "character": "パンダのこととか竹のこととか",
        "letter": "ぱんだのこととかたけのこととか",
        "pinyin": "I'm talking about pandas, bamboo..."
    },
    "46": {
        "character": "だれか…他の人いないかな",
        "letter": "だれか…ほかのひといないかな",
        "pinyin": "Anyone else... anyone else?"
    },
    "47": {
        "character": "どっちが聞きたいですか",
        "letter": "どっちがききたいですか",
        "pinyin": "Which one do you want to ask?"
    },
    "48": {
        "character": "え",
        "letter": "え",
        "pinyin": "Eh..."
    },
    "49": {
        "character": "あぁ…じゃあパンダ",
        "letter": "あぁ…じゃあぱんだ",
        "pinyin": "Ah... then pandas."
    },
    "50": {
        "character": "パンダは…こんな感じでぇ～す",
        "letter": "ぱんだは…こんなかんじでぇ～す",
        "pinyin": "Pandas... look like this."
    },
    "51": {
        "character": "あぁ…かわいいはかわいいんだけど…",
        "letter": "あぁ…かわいいはかわいいんだけど…",
        "pinyin": "Yeah... cute is cute, but..."
    },
    "52": {
        "character": "ハッハハハ…困ったなぁ",
        "letter": "はっははは…こまったなぁ",
        "pinyin": "Hahahahaha... you're in trouble."
    },
    "53": {
        "character": "辛抱強いお客さんだね",
        "letter": "しんぼうづよいおきゃくさんだね",
        "pinyin": "You're a patient customer."
    },
    "54": {
        "character": "自然体って大事だよねぇ",
        "letter": "しぜんたいってだいじだよねぇ",
        "pinyin": "It's important to be natural, isn't it?"
    },
    "55": {
        "character": "それが通用するのは動物園だけじゃない",
        "letter": "それがつうようするのはどうぶつえんだけじゃない",
        "pinyin": "And it's not just zoos where it works."
    },
    "56": {
        "character": "車だって売れたよ",
        "letter": "くるまだってうれたよ",
        "pinyin": "I even sold a car."
    },
    "57": {
        "character": "えっどうやって",
        "letter": "えっどうやって",
        "pinyin": "What? How?"
    },
    "58": {
        "character": "だから自然体だよ",
        "letter": "だからしぜんたいだよ",
        "pinyin": "That's why I'm a natural."
    },
    "59": {
        "character": "これでも起きないってすごいなぁ…",
        "letter": "これでもおきないってすごいなぁ…",
        "pinyin": "It's amazing this hasn't happened..."
    },
    "60": {
        "character": "なんでパンダが乗っかってるの",
        "letter": "なんでぱんだがのっかってるの",
        "pinyin": "Why is there a panda on it?"
    },
    "61": {
        "character": "えっ…",
        "letter": "えっ…",
        "pinyin": "What..."
    },
    "62": {
        "character": "こ…このように",
        "letter": "こ…このように",
        "pinyin": "This... this way."
    },
    "63": {
        "character": "パンダを乗せてもヘコまない強靭なボディー",
        "letter": "ぱんだをのせてもへこまないきょうじんなぼでぃー",
        "pinyin": "Strong body that doesn't get bent even with a panda on it."
    },
    "64": {
        "character": "眠りを妨げないエンジン音は",
        "letter": "ねむりをさまたげないえんじんおんは",
        "pinyin": "The engine sound that does not disturb your sleep"
    },
    "65": {
        "character": "他社と比べて頭１つ抜きんでております",
        "letter": "たしゃとくらべてあたま１つぬきんでております",
        "pinyin": "We are a head and shoulders above the competition."
    },
    "66": {
        "character": "気持よさそうだね",
        "letter": "きもちよさそうだね",
        "pinyin": "Looks comfortable."
    },
    "67": {
        "character": "ですね",
        "letter": "ですね",
        "pinyin": "Yes, sir."
    },
    "68": {
        "character": "ちょっと乗ってみていい",
        "letter": "ちょっとのってみていい",
        "pinyin": "You can go for a ride."
    },
    "69": {
        "character": "ありがとうございます",
        "letter": "ありがとうございます",
        "pinyin": "Thank you."
    },
    "70": {
        "character": "店員さんの手柄じゃない",
        "letter": "てんいんさんのてがらじゃない",
        "pinyin": "No credit to the clerk."
    },
    "71": {
        "character": "でも僕のおかげだって褒められたよ",
        "letter": "でもぼくのおかげだってほめられたよ",
        "pinyin": "But they said it was because of me."
    },
    "72": {
        "character": "売り上げがあがったって",
        "letter": "うりあげがあがったって",
        "pinyin": "He said sales went up."
    },
    "73": {
        "character": "また車の上で寝てくれって",
        "letter": "またくるまのうえでねてくれって",
        "pinyin": "He wants me to sleep on the car again."
    },
    "74": {
        "character": "販売員というよりはマスコットキャラだね",
        "letter": "はんばいいんというよりはますこっときゃらだね",
        "pinyin": "You're more of a mascot character than a salesperson."
    },
    "75": {
        "character": "まあ上手くいってるみたいでよかったね",
        "letter": "まあうまくいってるみたいでよかったね",
        "pinyin": "Well, I'm glad it's working out for you."
    },
    "76": {
        "character": "それで転職したんだ",
        "letter": "それでてんしょくしたんだ",
        "pinyin": "So I got a new job."
    },
    "77": {
        "character": "なんで",
        "letter": "なんで",
        "pinyin": "Why?"
    },
    "78": {
        "character": "お得意様の社長さんに気に入られて",
        "letter": "おとくいさまのしゃちょうさんにきにいられて",
        "pinyin": "The president of one of our clients liked me."
    },
    "79": {
        "character": "そこの会社で働くことになったんだ～",
        "letter": "そこのかいしゃではたらくことになったんだ～",
        "pinyin": "I'm going to work for them."
    },
    "80": {
        "character": "今度はどんな仕事なの",
        "letter": "こんどはどんなしごとなの",
        "pinyin": "What kind of work do you do now?"
    },
    "81": {
        "character": "ウリウリカイカイみたいな仕事だよ",
        "letter": "うりうりかいかいみたいなしごとだよ",
        "pinyin": "It's a job like the Uri Uri Kai Kai Kai."
    },
    "82": {
        "character": "ウリウリ",
        "letter": "うりうり",
        "pinyin": "Ulli Ulli"
    },
    "83": {
        "character": "カイカイ",
        "letter": "かいかい",
        "pinyin": "Kai Kai"
    },
    "84": {
        "character": "マルビの株ですが部長の読みどおりでした",
        "letter": "まるびのかぶですがぶちょうのよみどおりでした",
        "pinyin": "Marubi's stock, as read by the department head."
    },
    "85": {
        "character": "そうかヨツビシのほうはどうなって…",
        "letter": "そうかよつびしのほうはどうなって…",
        "pinyin": "I see. What about Yotsubishis?"
    },
    "86": {
        "character": "うん",
        "letter": "うん",
        "pinyin": "Yeah. - Yeah."
    },
    "87": {
        "character": "いつからパンダが部長に…",
        "letter": "いつからぱんだがぶちょうに…",
        "pinyin": "Since when did pandas become department heads..."
    },
    "88": {
        "character": "なに",
        "letter": "なに",
        "pinyin": "what?"
    },
    "89": {
        "character": "あの…ここは何をする会社なんですか",
        "letter": "あの…ここはなにをするかいしゃなんですか",
        "pinyin": "Um... what does this company do?"
    },
    "90": {
        "character": "どうやら部長ってわけでもないみたいですね…",
        "letter": "どうやらぶちょうってわけでもないみたいですね…",
        "pinyin": "Apparently, I'm not the head of the department..."
    },
    "91": {
        "character": "迷子か",
        "letter": "まいごか",
        "pinyin": "Lost."
    },
    "92": {
        "character": "新入社員ですよ",
        "letter": "しんにゅうしゃいんですよ",
        "pinyin": "We're new employees."
    },
    "93": {
        "character": "新入社員",
        "letter": "しんにゅうしゃいん",
        "pinyin": "new employee"
    },
    "94": {
        "character": "こりゃまた人事部も思い切ったことを…",
        "letter": "こりゃまたじんじぶもおもいきったことを…",
        "pinyin": "Oh my, another drastic move by the HR department..."
    },
    "95": {
        "character": "ウリウリカイカイって何",
        "letter": "うりうりかいかいってなに",
        "pinyin": "What is Uri Uri Kaikai?"
    },
    "96": {
        "character": "とりあえずキミ",
        "letter": "とりあえずきみ",
        "pinyin": "You for now."
    },
    "97": {
        "character": "しばらく面倒をみてやれ",
        "letter": "しばらくめんどうをみてやれ",
        "pinyin": "Take care of him for a while."
    },
    "98": {
        "character": "えっ僕がですか",
        "letter": "えっぼくがですか",
        "pinyin": "What? Me?"
    },
    "99": {
        "character": "いいもう１回説明するからよく聞いて",
        "letter": "いいもう１かいせつめいするからよくきいて",
        "pinyin": "Okay, I'm gonna explain it to you one more time, but listen carefully."
    },
    "100": {
        "character": "これをサポートラインといって",
        "letter": "これをさぽーとらいんといって",
        "pinyin": "This is called a support line."
    },
    "101": {
        "character": "これよりも下がったら売り",
        "letter": "これよりもさがったらうり",
        "pinyin": "Sell when it drops below this level."
    },
    "102": {
        "character": "この線に近づいたときが買い",
        "letter": "このせんにちかづいたときがかい",
        "pinyin": "Buy when you get close to this line."
    },
    "103": {
        "character": "反対にこの山の部分をつないだ線を…",
        "letter": "はんたいにこのやまのぶぶんをつないだせんを…",
        "pinyin": "On the other hand, the line connecting these mountains..."
    },
    "104": {
        "character": "寝てる",
        "letter": "ねてる",
        "pinyin": "He's sleeping."
    },
    "105": {
        "character": "かわいいはかわいいんだよな",
        "letter": "かわいいはかわいいんだよな",
        "pinyin": "Cute is cute, right?"
    },
    "106": {
        "character": "ウリウリ…カイ…",
        "letter": "うりうり…かい…",
        "pinyin": "Uli uli uli... kai..."
    },
    "107": {
        "character": "笹…笹大盛り一丁…",
        "letter": "ささ…ささおおもりいっちょう…",
        "pinyin": "Bamboos... a big bowl of bamboos..."
    },
    "108": {
        "character": "で会社のお金で１０万株も買っちゃったの",
        "letter": "でかいしゃのおかねで１０まんかぶもかっちゃったの",
        "pinyin": "And I bought 100,000 shares with company money."
    },
    "109": {
        "character": "どうしてキミを雇ったんだろう",
        "letter": "どうしてきみをやとったんだろう",
        "pinyin": "I don't know why I hired you."
    },
    "110": {
        "character": "でもねすごく儲かったんだって",
        "letter": "でもねすごくもうかったんだって",
        "pinyin": "But, you know, he made a lot of money."
    },
    "111": {
        "character": "ほんとなんで",
        "letter": "ほんとなんで",
        "pinyin": "Really? Why?"
    },
    "112": {
        "character": "う～んたまたま",
        "letter": "う～んたまたま",
        "pinyin": "Well, it just happened."
    },
    "113": {
        "character": "運がいいんだねパンダくん",
        "letter": "うんがいいんだねぱんだくん",
        "pinyin": "You're a lucky panda."
    },
    "114": {
        "character": "けどねキミ運だけじゃこの先やっていけないよ",
        "letter": "けどねきみうんだけじゃこのさきやっていけないよ",
        "pinyin": "But you're not going to make it on luck alone."
    },
    "115": {
        "character": "ボロが出ないうちに辞めたほうがいいんじゃないかな",
        "letter": "ぼろがでないうちにやめたほうがいいんじゃないかな",
        "pinyin": "I think you should quit before you fall apart."
    },
    "116": {
        "character": "辞めたよ",
        "letter": "やめたよ",
        "pinyin": "I quit."
    },
    "117": {
        "character": "そうなの",
        "letter": "そうなの",
        "pinyin": "Yeah."
    },
    "118": {
        "character": "また転職",
        "letter": "またてんしょく",
        "pinyin": "I'm changing jobs again."
    },
    "119": {
        "character": "今度は営業セミナーの講師になるんだ",
        "letter": "こんどはえいぎょうせみなーのこうしになるんだ",
        "pinyin": "This time I'm going to teach a sales seminar."
    },
    "120": {
        "character": "えっキミが何を教えられるっていうの",
        "letter": "えっきみがなにをおしえられるっていうの",
        "pinyin": "What are you supposed to teach?"
    },
    "121": {
        "character": "ところで…",
        "letter": "ところで…",
        "pinyin": "By the way..."
    },
    "122": {
        "character": "あのドアの脇の…観葉植物は何かな",
        "letter": "あのどあのわきの…かんようしょくぶつはなにかな",
        "pinyin": "What's with the... plant by the door?"
    },
    "123": {
        "character": "そっち観葉植物より隣の人でしょあれ誰",
        "letter": "そっちかんようしょくぶつよりとなりのひとでしょあれだれ",
        "pinyin": "That's not a houseplant, that's the guy next to you."
    },
    "124": {
        "character": "僕の秘書",
        "letter": "ぼくのひしょ",
        "pinyin": "My secretary."
    },
    "125": {
        "character": "えぇ",
        "letter": "えぇ",
        "pinyin": "Yeah. - Yeah."
    },
    "126": {
        "character": "丸山と申します",
        "letter": "まるやまともうします",
        "pinyin": "My name is Maruyama."
    },
    "127": {
        "character": "あぁどうもペンギンと申します",
        "letter": "あぁどうもぺんぎんともうします",
        "pinyin": "Oh, hi. I'm Penguin."
    },
    "128": {
        "character": "シロクマくん彼にも笹あげて大盛りでね",
        "letter": "しろくまくんかれにもささあげておおもりでね",
        "pinyin": "Polar bear, give him some bamboo grass, too."
    },
    "129": {
        "character": "コーヒーのほうがいいんじゃないかな",
        "letter": "こーひーのほうがいいんじゃないかな",
        "pinyin": "Maybe coffee would be better."
    },
    "130": {
        "character": "こんにちはパンダです",
        "letter": "こんにちはぱんだです",
        "pinyin": "Hello, I'm Panda."
    },
    "131": {
        "character": "今日皆さんにお話するのは人生のあり方についてです",
        "letter": "きょうみなさんにおはなしするのはじんせいのありかたについてです",
        "pinyin": "What I'm going to talk to you about today is how life is supposed to be."
    },
    "132": {
        "character": "僕は週に２日動物園でバイトをしています",
        "letter": "ぼくはしゅうに２にちどうぶつえんでばいとをしています",
        "pinyin": "I work two days a week at the zoo."
    },
    "133": {
        "character": "これがその写真です",
        "letter": "これがそのしゃしんです",
        "pinyin": "Here's a picture of it."
    },
    "134": {
        "character": "一緒にダラダラしているのは",
        "letter": "いっしょにだらだらしているのは",
        "pinyin": "The one who is lazing around with me..."
    },
    "135": {
        "character": "先輩の常勤パンダさんです",
        "letter": "せんぱいのじょうきんぱんださんです",
        "pinyin": "This is Mr. Panda, a full-time senior staff member."
    },
    "136": {
        "character": "お手元の資料の２ページ目をご覧ください",
        "letter": "おてもとのしりょうの２ぺーじめをごらんください",
        "pinyin": "Please see the second page of your handout."
    },
    "137": {
        "character": "特に重要な写真を載せてあります",
        "letter": "とくにじゅうようなしゃしんをのせてあります",
        "pinyin": "I have included a particularly important photo."
    },
    "138": {
        "character": "お母さんに掃除機で吸われている僕です",
        "letter": "おかあさんにそうじきですわれているぼくです",
        "pinyin": "This is me being vacuumed by my mother."
    },
    "139": {
        "character": "どういう趣旨の講演だ",
        "letter": "どういうしゅしのこうえんだ",
        "pinyin": "What was the point of the speech?"
    },
    "140": {
        "character": "わからん",
        "letter": "わからん",
        "pinyin": "I don't know."
    },
    "141": {
        "character": "だがかわいいのは確かだな",
        "letter": "だがかわいいのはたしかだな",
        "pinyin": "But I'm sure he's cute."
    },
    "142": {
        "character": "続きまして…",
        "letter": "つづきまして…",
        "pinyin": "And now..."
    },
    "143": {
        "character": "いやぁかわいかったね",
        "letter": "いやぁかわいかったね",
        "pinyin": "Well, that was cute."
    },
    "144": {
        "character": "こういうのもたまにはいいですね",
        "letter": "こういうのもたまにはいいですね",
        "pinyin": "This kind of thing is nice sometimes."
    },
    "145": {
        "character": "明日から頑張ろうな",
        "letter": "あしたからがんばろうな",
        "pinyin": "Let's work hard tomorrow."
    },
    "146": {
        "character": "そう社内の空気がよくなって業績が上がったの",
        "letter": "そうしゃないのくうきがよくなってぎょうせきがあがったの",
        "pinyin": "Yes, the atmosphere in the office has improved, and our performance has gone up."
    },
    "147": {
        "character": "ああそう",
        "letter": "ああそう",
        "pinyin": "Oh, yeah."
    },
    "148": {
        "character": "ってそんな甘いもんなの世の中って",
        "letter": "ってそんなあまいもんなのよのなかって",
        "pinyin": "Is the world really that simple?"
    },
    "149": {
        "character": "それから本も出したんだ",
        "letter": "それからほんもだしたんだ",
        "pinyin": "And then I published a book."
    },
    "150": {
        "character": "本",
        "letter": "ほん",
        "pinyin": "Book"
    },
    "151": {
        "character": "こちらでございます",
        "letter": "こちらでございます",
        "pinyin": "This way, sir."
    },
    "152": {
        "character": "サイン入りだよ",
        "letter": "さいんいりだよ",
        "pinyin": "It's signed."
    },
    "153": {
        "character": "へぇ～写真集を出したんだ",
        "letter": "へぇ～しゃしんしゅうをだしたんだ",
        "pinyin": "Wow, you published a photo book?"
    },
    "154": {
        "character": "ビジネス書だよ",
        "letter": "びじねすしょだよ",
        "pinyin": "It's a business book."
    },
    "155": {
        "character": "どう見てもただの写真集だよね",
        "letter": "どうみてもただのしゃしんしゅうだよね",
        "pinyin": "It's just a photo book, no matter how you look at it."
    },
    "156": {
        "character": "でいろいろあって今は…",
        "letter": "でいろいろあっていまは…",
        "pinyin": "So, a lot has happened, and now..."
    },
    "157": {
        "character": "ＣＥＯ",
        "letter": "ＣＥＯ",
        "pinyin": "CEO"
    },
    "158": {
        "character": "はいＣＥＯでございます",
        "letter": "はいＣＥＯでございます",
        "pinyin": "Yes, I'm the CEO."
    },
    "159": {
        "character": "ＣＥＯって何だろうね",
        "letter": "ＣＥＯってなんだろうね",
        "pinyin": "I don't know what a CEO is."
    },
    "160": {
        "character": "ちゃっかりえばって…",
        "letter": "ちゃっかりえばって…",
        "pinyin": "You're all smug and..."
    },
    "161": {
        "character": "はい笹子さん",
        "letter": "はいささごさん",
        "pinyin": "Yes, Sasago-san."
    },
    "162": {
        "character": "おいしいところ",
        "letter": "おいしいところ",
        "pinyin": "Delicious part."
    },
    "163": {
        "character": "まぁそういう解釈もあるかもしれないけどさ",
        "letter": "まぁそういうかいしゃくもあるかもしれないけどさ",
        "pinyin": "Well, that might be one interpretation."
    },
    "164": {
        "character": "ＣＥＯって最高経営責任者でしょ",
        "letter": "ＣＥＯってさいこうけいえいせきにんしゃでしょ",
        "pinyin": "CEO is the chief executive officer."
    },
    "165": {
        "character": "会社でいちばん偉い人じゃない",
        "letter": "かいしゃでいちばんえらいひとじゃない",
        "pinyin": "He's not the most important person in the company."
    },
    "166": {
        "character": "僕かわいいだけじゃなくて偉いんだ",
        "letter": "ぼくかわいいだけじゃなくてえらいんだ",
        "pinyin": "I'm not only cute, I'm great."
    },
    "167": {
        "character": "すごいねパンダくん",
        "letter": "すごいねぱんだくん",
        "pinyin": "That's great, panda."
    },
    "168": {
        "character": "すごいのひと言ですませていいのかな",
        "letter": "すごいのひとことですませていいのかな",
        "pinyin": "I don't know if amazing is the right word."
    },
    "169": {
        "character": "ご歓談中すみません",
        "letter": "ごかんだんちゅうすみません",
        "pinyin": "Excuse me for interrupting your pleasantries."
    },
    "170": {
        "character": "パンダくん様そろそろお時間でございます",
        "letter": "ぱんだくんさまそろそろおじかんでございます",
        "pinyin": "Mr. Panda, I think it's time for you to go."
    },
    "171": {
        "character": "またね～",
        "letter": "またね～",
        "pinyin": "See you later."
    },
    "172": {
        "character": "人生って計り知れない可能性に満ちてるね",
        "letter": "じんせいってはかりしれないかのうせいにみちてるね",
        "pinyin": "Life is full of unfathomable possibilities."
    },
    "173": {
        "character": "いやおかしいでしょ",
        "letter": "いやおかしいでしょ",
        "pinyin": "No, it's crazy."
    },
    "174": {
        "character": "そうですか",
        "letter": "そうですか",
        "pinyin": "Okay."
    },
    "175": {
        "character": "こんにちは",
        "letter": "こんにちは",
        "pinyin": "Hello. - Hello."
    },
    "176": {
        "character": "いらっしゃいあれネクタイは",
        "letter": "いらっしゃいあれねくたいは",
        "pinyin": "Hey, how are you doing? What's with the tie?"
    },
    "177": {
        "character": "今日はお仕事お休み",
        "letter": "きょうはおしごとおやすみ",
        "pinyin": "I'm off work today."
    },
    "178": {
        "character": "もう来なくていいって言われたの",
        "letter": "もうこなくていいっていわれたの",
        "pinyin": "They told me not to come back."
    },
    "179": {
        "character": "そうなんだ残念だね",
        "letter": "そうなんだざんねんだね",
        "pinyin": "I'm sorry to hear that."
    },
    "180": {
        "character": "ていうかいままでよくもったよね",
        "letter": "ていうかいままでよくもったよね",
        "pinyin": "I mean, how have you lasted this long?"
    },
    "181": {
        "character": "あれ今日はペンギンさんは来てないの",
        "letter": "あれきょうはぺんぎんさんはきてないの",
        "pinyin": "Oh, hey, Penguin didn't come today."
    },
    "182": {
        "character": "ちょっと何寝てんの",
        "letter": "ちょっとなにねてんの",
        "pinyin": "Hey, what are you doing sleeping?"
    },
    "183": {
        "character": "えいやぁ…",
        "letter": "えいやぁ…",
        "pinyin": "No, no, no..."
    },
    "184": {
        "character": "ここで寝てたらＣＥＯに…",
        "letter": "ここでねてたらＣＥＯに…",
        "pinyin": "If I sleep here, I'll have to tell the CEO..."
    },

}


function getCharacter(n){
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["character"];   
}

function translation(n) {
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["letter"];
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;