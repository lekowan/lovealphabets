// Configuration
const localStorageKey = "japanese" + "Episode1Part1" + "Story";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep1 Part 1 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 1. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "しろくまカフェへようこそ",
        "letter": "Welcome to Shirokuma Cafe",
        "pinyin": "しろくまかふぇへようこそ",
        "definition": "しろくまカフェへ ようこそ",
        "pinyinSpace": "しろくまかふぇへ ようこそ",
    },
  "2": {
        "character": "笹を食べながらのんびりするのは最高だなぁ",
        "letter": "I love relaxing while eating bamboo grass.",
        "pinyin": "ささをたべながらのんびりするのはさいこうだなぁ",
        "definition": "笹 を 食べながら のんびりする のは 最高 だ なぁ",
        "pinyinSpace": "ささ を たべながら のんびりする のは さいこう だ なぁ",
    },
    "3": {
        "character": "ちょっとまたこの子は昼間からゴロゴロして",
        "letter": "Look at you, being so lazy so early in the day",
        "pinyin": "ちょっとまたこのこはひるまからごろごろして",
        "definition" : "ちょっと また この 子 は 昼間 から ゴロゴロして",
        "pinyinSpace": "ちょっと また この こ は ひるま から ごろごろして",
    },
    "4": {
        "character": "掃除の邪魔よどきなさい",
        "letter": "You're interrupting my cleaning, so get out of my way.",
        "pinyin": "そうじのじゃまよどきなさい",
        "definition" : "掃除 の 邪魔 よ どきなさい",
        "pinyinSpace": "そうじ の じゃま よ どきなさい",
    },
    "5": {
        "character": "はいー",
        "letter": "Okay",
        "pinyin": "はいー",
        "definition": "はいー",
        "pinyinSpace":"はいー"
    },
    "6": {
        "character": "お母さんおかわり",
        "letter": "Seconds, please Mum",
        "pinyin": "おかあさんおかわり",
        "definition": "お母さん おかわり",
        "pinyinSpace": "おかあさん おかわり",
    },
    "7": {
        "character": "どうするのあなた将来は",
        "letter": "Exactly what do you have planned for your future?",
        "pinyin": "どうするのあなたしょうらいは",
        "definition": "どう する の あなた 将来 は",
        "pinyinSpace": "どう する の あなた しょうらい は",
    },
    "8": {
        "character": "もうゴロゴロしてるときに将来の話なんかしないでよ",
        "letter": "Could we not talk about my future when I'm relaxing?",
        "pinyin": "もうごろごろしてるときにしょうらいのはなしなんかしないでよ",
        "definition": "もう ゴロゴロしてる とき に 将来 の 話 なんか しないで よ",
        "pinyinSpace": "もう ごろごろしてる とき に しょうらい の はなし なんか しないで よ",
    },
    "9": {
        "character": "暇があるならちょっとはバイトでも探しなさい",
        "letter": "If you've got time to kill, why don't you get a part-time job?",
        "pinyin": "ひまがあるならちょっとはばいとでもさがしなさい",
        "definition": "暇 が ある なら ちょっと は バイト でも 探しなさい",
        "pinyinSpace": "ひま が ある なら ちょっと は ばいと でも さがしなさい",
    },
    "10": {
        "character": "ええゴロゴロするのに忙しいから後にするよ",
        "letter": "I'm too busy relaxing, so I'll do it later.",
        "pinyin": "ええごろごろするのにいそがしいからあとにするよ",
        "definition": "ええ ゴロゴロする のに 忙しい から 後 に する よ",
        "pinyinSpace": "ええ ごろごろする の に いそがしい から あと に する よ",
    },
    "11": {
        "character": "ああー吸わないで",
        "letter": "Don't try to suck me up!",
        "pinyin": "ああーすわないで",
        "definition": "ああー 吸わないで",
        "pinyinSpace":"ああー すわないで",
    },
    "12": {
        "character": "もう",
        "letter": "Jeez",
        "pinyin": "もう",
        "definition": "もう",
        "pinyinSpace":"もう",
    },
    "13": {
        "character": "どうしてお母さんはゴロゴロする忙しさが分かんないんだろな",
        "letter": "I wonder why Mom can't understand how much time relaxing takes up",
        "pinyin": "どうしておかあさんはごろごろするいそがしさがわかんないんだろな",
        "definition": "どうして お母さん は ゴロゴロ する 忙し さが 分かんない ん だろ な",
        "pinyinSpace": "どうして おかあさん は ごろごろする いそがし さが わかんない ん だろな",
    },
    "14": {
        "character": "えーと働かないでお金がもらえる仕事が載っているのはどれですか",
        "letter": "Excuse me, which ones of these will have jobs where I can get paid to do nothing?",
        "pinyin": "えーとはたらかないでおかねがもらえるしごとがのっているのはどれですか",
        "definition" : "えーと 働かない で お金 が もらえる 仕事 が 載っている の は どれ です か",
        "pinyinSpace": "えーと はたらかない で おかね が もらえる しごと が のっている の は どれ です か",
    },
    "15": {
        "character": "ないと思います",
        "letter": "I don't think there is one",
        "pinyin": "ないとおもいます",
        "definition": "ない と 思います",
        "pinyinSpace": "ない と おもいます"
    },
    "16": {
        "character": "え",
        "letter": "What?",
        "pinyin": "え",
        "definition": "え",
        "pinyinSpace": "え",
    },
    
    "17": {
        "character": "どうせならお洒落なバイトがいいなぁ",
        "letter": "I'd like a stylish job anyway.",
        "pinyin": "どうせならおしゃれなばいとがいいなぁ",
        "definition" : "どうせなら お洒落 な バイト が いい なぁ",
        "pinyinSpace": "どうせなら おしゃれ な ばいと が いい なぁ",
    },
    "18": {
        "character": "あこれいいな",
        "letter": "Oh, this looks good",
        "pinyin": "あこれいいな",
        "definition": "あ これ いい な",
        "pinyinSpace": "あ これ いい な",
    },
    "19": {
        "character": "はい",
        "letter": "Yes?",
        "pinyin": "はい",
        "definition": "はい",
        "pinyinSpace": "はい",
    },
    "20": {
        "character": "あもしもしパンダと申しますが",
        "letter": "Hello, my name is Panda.",
        "pinyin": "あもしもしぱんだともうしますが",
        "definition": "あ もしもし パンダ と 申します が",
        "pinyinSpace": "あ もしもし ぱんだ と もうします が",
    },
    
    "21": {
        "character": "そちらでデザインなーデザイナーのアルバイト募集してますよね",
        "letter": "You're looking for a part-time designer, right?",
        "pinyin": "そちらででざいんなーでざいなーのあるばいとぼしゅうしてますよね",
        "definition" : "そちらで でざいんなー でざいなー の あるばいと ぼ しゅうしてます よね",
        "pinyinSpace": "そちらで でざいんなー でざいなー の あるばいと ぼしゅうしてます よね",
    },
    "22": {
        "character": "ええそうですよ経験は？",
        "letter": "Do you have any experience?",
        "pinyin": "ええそうですよけいけんは？",
        "definition": "ええ そう です よ けいけん は？",
        "pinyinSpace": "ええ そう です よ けいけん は？",

    },
    
    "23": {
        "character": "ありません",
        "letter": "Not at all",
        "pinyin": "ありません",
        "definition": "ありません",
        "pinyinSpace": "ありません",
    },
    "24": {
        "character": "パソコンのマウスは使えますか",
        "letter": "Can you use a computer mouse?",
        "pinyin": "ぱそこんのまうすはつかえますか",
        "definition": "パソコン の マウス は 使えますか",
        "pinyinSpace": "ぱそこんのまうすはつかえますか",
    },
    "25": {
        "character": "使えないですあんまり細かい作業はできません",
        "letter": "I'm not very good with detailed work",
        "pinyin": "つかえないですあんまりこまかいさぎょうはできません",
        "definition": "使えない です あんまり 細かい 作業 は できません",
        "pinyinSpace": "つかえない です あんまり こまかい さぎょう は できません",
    },
    "26": {
        "character": "そうですか得意なことはありますか",
        "letter": "Is there anything you're good at?",
        "pinyin": "そうですかとくいなことはありますか",
        "definition": "そう です か 得意 な こと は あります か",
        "pinyinSpace": "そう です か とくい な こと は ありますか",
    },
    "27": {
        "character": "あります",
        "letter": "Yes, there is",
        "pinyin": "あります",
        "definition": "あります",
        "pinyinSpace": "あります",
    },
    "28": {
        "character": "笹を食べたり寝ながらぼんやりするのが得意です",
        "letter": "I'm good at eating bamboo grass and zoning out while lying down",
        "pinyin": "ささをたべたりねながらぼんやりするのがとくいです",
        "definition" : "ささ を たべたり ねながら ぼんやりする の が とくい です",
        "pinyinSpace": "ささ を たべたり ねながら ぼんやりする の が とくい です",
    },
    "29": {
        "character": "あれもしもーし",
        "letter": "Oh, hello?",
        "pinyin": "あれもしもーし",
        "definition": "あれ もしもーし",
        "pinyinSpace": "あれ もしもーし",
    },
    "30": {
        "character": "もしもしそちらでインテリアコーディネーターも募集してますよね",
        "letter": "Hello? You're also looking for an interior decorator, right?",
        "pinyin": "もしもしそちらでいんてりあこーでぃねーたーもぼしゅうしてますよね",
        "definition" : "もしもし そちらで インテリアコーディネーター も 募集してます よね",
        "pinyinSpace": "もしもし そちらで いんてりあこーでぃねーたー も ぼしゅうしてます よね",
    },
    "31": {
        "character": "インテリアコーディネーターってなんですか",
        "letter": "What's an interior decorator?",
        "pinyin": "いんてりあこーでぃねーたーってなんですか",
        "definition": "インテリアコーディネーター って なん です か",
        "pinyinSpace": "いんてりあこーでぃねーたー って なん です か",
    },
    "32": {
        "character": "またゴロゴロして",
        "letter": "There you are being lazy again",
        "pinyin": "またごろごろして",
        "definition": "また ゴロゴロして",
        "pinyinSpace": "また ゴロゴロして",
    },
    "33": {
        "character": "アルバイト見つかったの",
        "letter": "Did you find a part-time job?",
        "pinyin": "あるばいとみつかったの",
        "definition" : "アルバイト 見つかった の",
        "pinyinSpace": "あるばいと みつかった の",
    },
    "34": {
        "character": "全然ないよ",
        "letter": "There aren't any!",
        "pinyin": "ぜんぜんないよ",
        "definition": "全然 ない よ",
        "pinyinSpace": "ぜんぜん ない よ",
    },
    "35": {
        "character": "確かコンビニで募集してたでしょう",
        "letter": "I'm pretty sure there was an opening at the convenience store.",
        "pinyin": "たしかこんびにでぼしゅうしてたでしょう",
        "character": "確か コンビニ で 募集してた でしょう",
        "pinyinSpace": "たしか こんびに で ぼしゅうしてた でしょう",
    },
    "36": {
        "character": "コンビニ",
        "letter": "Convenience store",
        "character": "コンビニ",
        "pinyin": "こんびに",
        "pinyinSpace": "こんびに"
    },
    "37": {
        "character": "品数多過ぎるよ覚えられないよ",
        "letter": "They have too many thins, I won't be able to remember them all!",
        "pinyin": "しなかずおおすぎるよおぼえられないよ",
        "definition" : "品数 多 過ぎる よ 覚えられない よ",
        "pinyinSpace": "しなかず おお すぎる よ おぼえられない よ",
    },
    "38": {
        "character": "あー吸わないで",
        "letter": "Don't try to suck me up!",
        "definition": "あー 吸わないで",
        "pinyin": "あーすわないで",
        "pinyinSpace": "あー すわないで"
    },
    "39": {
        "character": "もう外でだらだらしようっと",
        "letter": "I think I'll wander outside",
        "pinyin": "もうそとでだらだらしようっと",
        "definition": "もう 外 で だらだらしよう っと",
        "pinyinSpace": "もう そと で だらだらしよう っと",
    },
        /*
    "40": {
        "character": "はははあら糸屑",
        "letter": "Huh?  A string",
        "pinyin": "はははあらいとくず",
        "definition": "ははは あら 糸屑",
        "pinyinSpace": "ははは あら いとくず",
    },
    "41": {
        "character": "あ取って",
        "letter": "Could you get it?",
        "pinyin": "あとって",
        "definition": "あ 取って",
        "pinyinSpace": "あ とって",
    },
    "42": {
        "character": "うん取れた",
        "letter": "Yeah, I got it.",
        "pinyin": "うんとれた"
    },
    "43": {
        "character": "ありがとう",
        "letter": "Thank you.",
        "pinyin": "ありがとう"
    },
    "44": {
        "character": "じっとしてて",
        "letter": "Stay right there",
        "pinyin": "じっとしてて",
        "definition" : 
    },
    "45": {
        "character": "あ待って",
        "letter": "Oh, wait.",
        "pinyin": "あまって"
    },
    "46": {
        "character": "へぇーこんな所にカフェがあったんだ",
        "letter": "Wow, I didn't know there was a cafe here.",
        "pinyin": "へぇーこんなところにかふぇがあったんだ"
    },
    "47": {
        "character": "いらっしゃいませ",
        "letter": "Welcome.",
        "pinyin": "いらっしゃいませ"
    },
    "48": {
        "character": "ようこそしろくまカフェへ",
        "letter": "Welcome to the Shirokuma Cafe.",
        "pinyin": "ようこそしろくまかふぇへ"
    },
    "49": {
        "character": "お客様お一人様ですか",
        "letter": "Table for one, sir?",
        "pinyin": "おきゃくさまおひとりさまですか"
    },
    "50": {
        "character": "あ別に僕は",
        "letter": "Oh, I'm not really a customer",
        "pinyin": "あべつにぼくは"
    },
    "51": {
        "character": "お好きな席へどうぞ",
        "letter": "Please have a seat anywhere you like",
        "pinyin": "おすきなせきへどうぞ"
    },
    "52": {
        "character": "ご注文は",
        "letter": "May I take your order?",
        "pinyin": "ごちゅうもんは"
    },
    "53": {
        "character": "えーと竹はありますか",
        "letter": "Uh, do you have bamboo?",
        "pinyin": "えーとたけはありますか"
    },
    "54": {
        "character": "竹はないです",
        "letter": "We don't have bamboo.",
        "pinyin": "たけはないです"
    },
    "55": {
        "character": "じゃ笹ください",
        "letter": "Then I'll have some bamboo grass, please.",
        "pinyin": "じゃささください"
    },
    "56": {
        "character": "笹もないです",
        "letter": "We don't have any bamboo grass either.",
        "pinyin": "ささもないです"
    },
    "57": {
        "character": "じゃアイスコーヒー",
        "letter": "Iced coffee, then.",
        "pinyin": "じゃあいすこーひー"
    },
    "58": {
        "character": "ねえ白熊くん",
        "letter": "Hey, polar bear.",
        "pinyin": "ねえしろくまくん"
    },
    "59": {
        "character": "財布のポイントカードって増えすぎちゃわない",
        "letter": "Don't you have too many loyalty cards in your wallet?",
        "pinyin": "さいふのぽいんとかーどってふえすぎちゃわない"
    },
    "60": {
        "character": "ペンギンさんポイント貯める派",
        "letter": "You collect points, Mr. Penguin?",
        "pinyin": "ぺんぎんさんぽいんとためるは",
        "definition" : 
    },
    "61": {
        "character": "うん",
        "letter": "Yeah. - Mm-hm.",
        "pinyin": "うん"
    },
    "62": {
        "character": "あカフェモカお願いおかわり",
        "letter": "Yep.  Oh, could I get another café mocha?",
        "pinyin": "あかふぇもかおねがいおかわり"
    },
    "63": {
        "character": "それはひまわり",
        "letter": "That's a sunflower.",
        "pinyin": "それはひまわり"
    },
    "64": {
        "character": "それは日替わり",
        "letter": "That's the daily special",
        "pinyin": "それはひがわり"
    },
    "65": {
        "character": "それは薪割り",
        "letter": "It is chopping wood",
        "pinyin": "それはまきわり"
    },
    "66": {
        "character": "それは西瓜割り",
        "letter": "That's watermelon splitting",
        "pinyin": "それはすいかわり"
    },
    "67": {
        "character": "「おかわり」ね",
        "letter": "Another one.",
        "pinyin": "「おかわり」ね"
    },
    "68": {
        "character": "はいカフェモカ",
        "letter": "Yes, Cafe Mocha",
        "pinyin": "はいかふぇもか"
    },
    "69": {
        "character": "このカフェダジャレがなければなぁ",
        "letter": "You know, if it weren't for all the puns in this café...",
        "pinyin": "このかふぇだじゃれがなければなぁ",
        "definition" : 
    },
    "70": {
        "character": "そういえばアルバイト募集してるんだって",
        "letter": "By the way, I heard you were looking for a part-timer?",
        "pinyin": "そういえばあるばいとぼしゅうしてるんだって",
        "definition" : 
    },
    "71": {
        "character": "うん人手が足りなくて",
        "letter": "Yeah, we're short-staffed",
        "pinyin": "うんひとでがたりなくて"
    },
    "72": {
        "character": "ペンギンさんどう",
        "letter": "Are you interested, Mr. Penguin?",
        "pinyin": "ぺんぎんさんどう"
    },
    "73": {
        "character": "え？ぼくお客とバイトの両立できるかな",
        "letter": "I wonder if I could handle being a customer and a part-timer",
        "pinyin": "え？ぼくおきゃくとばいとのりょうりつできるかな",
        "definition" : 
    },
    "74": {
        "character": "ウーソこれから四名ほど面接に来るんだよ",
        "letter": "Just kidding. I have about four interviews lined up",
        "pinyin": "うーそこれからよんめいほどめんせつにくるんだよ",
        "definition" : 
    },
    "75": {
        "character": "なんだちょっと考えちゃったよ",
        "letter": "And here I was actually considering it",
        "pinyin": "なんだちょっとかんがえちゃったよ"
    },
    "76": {
        "character": "僕もいいですか",
        "letter": "Can I get an interview too?",
        "pinyin": "ぼくもいいですか"
    },
    "77": {
        "character": "僕もアルバイトしたいと思って",
        "letter": ",I was also thinking of working part-time",
        "pinyin": "ぼくもあるばいとしたいとおもって"
    },
    "78": {
        "character": "受けてみる面接",
        "letter": "I'll take it.",
        "pinyin": "うけてみるめんせつ"
    },
    "79": {
        "character": "あ",
        "letter": "Oh.",
        "pinyin": "あ"
    },
    "80": {
        "character": "では最初の方どうぞ",
        "letter": "Okay, first one, please.",
        "pinyin": "ではさいしょのほうどうぞ"
    },
    "81": {
        "character": "穴熊です",
        "letter": "I'm Badger",
        "pinyin": "あなぐまです"
    },
    "82": {
        "character": "えーとホール係やれますか",
        "letter": "Well, would you be able to work the hall?",
        "pinyin": "えーとほーるかかりやれますか"
    },
    "83": {
        "character": "はいホールなら任せてください",
        "letter": "Yes! You can leave the holes to me!",
        "pinyin": "はいほーるならまかせてください"
    },
    "84": {
        "character": "穴を掘るの得意なんです",
        "letter": "I'm a pro at digging holes!",
        "pinyin": "あなをほるのとくいなんです",
        "definition" : 
    },
    "85": {
        "character": "いやそのホールは違うし",
        "letter": "Hall not hole.",
        "pinyin": "いやそのほーるはちがうし"
    },
    "86": {
        "character": "次の方",
        "letter": "Next.",
        "pinyin": "つぎのほう"
    },
    "87": {
        "character": "ゾ～ウ～ガ～メ～で～す",
        "letter": "I'm... Giant... Tortoise...",
        "pinyin": "ぞ～う～が～め～で～す"
    },
    "88": {
        "character": "料理とか運べますか",
        "letter": "Are you able to carry orders?",
        "pinyin": "りょうりとかはこべますか"
    },
    "89": {
        "character": "は～い～",
        "letter": "Yes, yes, yes.",
        "pinyin": "は～い～"
    },
    "90": {
        "character": "ヨ～イ～ショー",
        "letter": "Here we go...",
        "pinyin": "よ～い～しょー"
    },
    "91": {
        "character": "ゆっくりだね",
        "letter": "Definitely taking his time",
        "pinyin": "ゆっくりだね"
    },
    "92": {
        "character": "百年くらい働かせて～",
        "letter": "Please let me work about a hundred years",
        "pinyin": "ひゃくねんくらいはたらかせて～"
    },
    "93": {
        "character": "いえそんなには",
        "letter": "Er, I don't think that'll be possible",
        "pinyin": "いえそんなには"
    },
    "94": {
        "character": "マンドリルです",
        "letter": "Mandrill.",
        "pinyin": "まんどりるです"
    },
    "95": {
        "character": "食べるのが得意です",
        "letter": "I'm good at eating",
        "pinyin": "たべるのがとくいです"
    },
    "96": {
        "character": "ちょっとそれは",
        "letter": "Hey, that's...",
        "pinyin": "ちょっとそれは"
    },
    "97": {
        "character": "小蟻食です",
        "letter": "I'm Little Anteater.",
        "pinyin": "しょうありくいです"
    },
    "98": {
        "character": "い威嚇ができます",
        "letter": "I can intimidate.",
        "pinyin": "いいかくができます"
    },
    "99": {
        "character": "うんわぁ",
        "letter": "Wow.",
        "pinyin": "うんわぁ"
    },
    "100": {
        "character": "それだけ",
        "letter": "That's it.",
        "pinyin": "それだけ"
    },
    "101": {
        "character": "みたいだね",
        "letter": "Sounds like it.",
        "pinyin": "みたいだね"
    },
    "102": {
        "character": "最後の方どうぞ",
        "letter": "Last one, please.",
        "pinyin": "さいごのほうどうぞ"
    },
    "103": {
        "character": "パンダと申します",
        "letter": "My name is Panda.",
        "pinyin": "ぱんだともうします"
    },
    "104": {
        "character": "よろしくです",
        "letter": "Nice to meet you.",
        "pinyin": "よろしくです"
    },
    "105": {
        "character": "やっとまともな人が来たね",
        "letter": "Finally, someone decent.",
        "pinyin": "やっとまともなひとがきたね",
        "definition" : 
    },
    "106": {
        "character": "パンダ君何か得意なことはありますか",
        "letter": "Panda, is there anything you're good at?",
        "pinyin": "ぱんだくんなにかとくいなことはありますか"
    },
    "107": {
        "character": "はいゴロゴロしながら笹を食べることです",
        "letter": "I'm very good at lying around and eating bamboo grass",
        "pinyin": "はいごろごろしながらささをたべることです"
    },
    "108": {
        "character": "あれ",
        "letter": "That's...",
        "pinyin": "あれ"
    },
    "109": {
        "character": "えーと条件に希望はありますか",
        "letter": "Are there any specific conditions you'd like to request?",
        "pinyin": "えーとじょうけんにきぼうはありますか"
    },
    "110": {
        "character": "週二日希望です",
        "letter": "Two days a week.",
        "pinyin": "しゅうふつかきぼうです"
    },
    "111": {
        "character": "うん週二日ですか",
        "letter": "Two days a week?",
        "pinyin": "うんしゅうふつかですか"
    },
    "112": {
        "character": "え週一日でいいんですか",
        "letter": "What? One day a week is fine?",
        "pinyin": "えしゅういちにちでいいんですか"
    },
    "113": {
        "character": "いやせめて週四日くらい",
        "letter": "No, at least four days a week.",
        "pinyin": "いやせめてしゅうよっかくらい"
    },
    "114": {
        "character": "そんなの無理です",
        "letter": "I can't do that.",
        "pinyin": "そんなのむりです"
    },
    "115": {
        "character": "あけど",
        "letter": "Oh, but...",
        "pinyin": "あけど"
    },
    "116": {
        "character": "呼びに来てくれたらすぐ行きます",
        "letter": "I'll be there as soon as you call me.",
        "pinyin": "よびにきてくれたらすぐいきます"
    },
    "117": {
        "character": "僕が呼びに行くんですか",
        "letter": "I'm going to go get him?",
        "pinyin": "ぼくがよびにいくんですか"
    },
    "118": {
        "character": "あそんなそんな",
        "letter": "Oh, no, no, no, no.",
        "pinyin": "あそんなそんな"
    },
    "119": {
        "character": "遅刻した場合だけですよ",
        "letter": "Only if you're late.",
        "pinyin": "ちこくしたばあいだけですよ"
    },
    "120": {
        "character": "遅刻する気満々だね",
        "letter": "You're going to be late.",
        "pinyin": "ちこくするきまんまんだね"
    },
    "121": {
        "character": "ちなみにやる気はありますか",
        "letter": "By the way, are you willing to do it?",
        "pinyin": "ちなみにやるきはありますか"
    },
    "122": {
        "character": "そんなにありません",
        "letter": "Not so much.",
        "pinyin": "そんなにありません"
    },
    "123": {
        "character": "発表します",
        "letter": "Announcement.",
        "pinyin": "はっぴょうします"
    },
    "124": {
        "character": "全員不合格",
        "letter": "Failed all of them",
        "pinyin": "ぜんいんふごうかく"
    },
    "125": {
        "character": "えー????",
        "letter": "What????",
        "pinyin": "ええー????"
    },
    "126": {
        "character": "そこ驚くとこ",
        "letter": "That's the part that surprises me.",
        "pinyin": "そこおどろくとこ"
    },
    "127": {
        "character": "結局バイトの人",
        "letter": "A part-timer after all.",
        "pinyin": "けっきょくばいとのひと"
    },
    "128": {
        "character": "見つからなかったね",
        "letter": "You didn't find him.",
        "pinyin": "みつからなかったね"
    },
    "129": {
        "character": "残念だね",
        "letter": "That's too bad.",
        "pinyin": "ざんねんだね"
    },
    "130": {
        "character": "まだいたの",
        "letter": "You're still here.",
        "pinyin": "まだいたの"
    },
    "131": {
        "character": "家に帰るとお母さんに吸われるし",
        "letter": "If I go home, my mom will try to suck me up",
        "pinyin": "いえにかえるとおかあさんにすわれるし"
    },
    "132": {
        "character": "す吸われる",
        "letter": "Suck you up?",
        "pinyin": "すすわれる"
    },
    "133": {
        "character": "うんゴーって",
        "letter": "Yep.  Like whirrr",
        "pinyin": "うんごーって"
    },
    "134": {
        "character": "あのう面接中すみません",
        "letter": "I hate to interrupt you during your interviews",
        "pinyin": "あのうめんせつちゅうすみません"
    },
    "135": {
        "character": "住み込み希望でーす",
        "letter": "I'd like to live here.",
        "pinyin": "すみこみきぼうでーす"
    },
    "136": {
        "character": "不合格",
        "letter": "Rejected.",
        "pinyin": "ふごうかく"
    },
    "137": {
        "character": "あのうアルバイト希望じゃないみたいですよ",
        "letter": "I don't think he wants a part-time job.",
        "pinyin": "あのうあるばいときぼうじゃないみたいですよ"
    },
    "138": {
        "character": "庭に住み込みたいんですー",
        "letter": "I want to live in your yard.",
        "pinyin": "にわにすみこみたいんですー"
    },
    "139": {
        "character": "ここまで運んで欲しいって頼まれちゃいまして",
        "letter": "He asked me to bring him here.",
        "pinyin": "ここまではこんでほしいってたのまれちゃいまして"
    },
    "140": {
        "character": "あなたお名前は",
        "letter": "What's your name?",
        "pinyin": "あなたおなまえは"
    },
    "141": {
        "character": "え私ですか",
        "letter": "Oh, is that me?",
        "pinyin": "えわたしですか"
    },
    "142": {
        "character": "笹子ですけど",
        "letter": "I'm Sasako.",
        "pinyin": "ささこですけど"
    },
    "143": {
        "character": "笹子さん合格",
        "letter": "Miss Sasako passed.",
        "pinyin": "ささごさんごうかく"
    },
    "144": {
        "character": "ねぇお母さん",
        "letter": "Hey, Mom.",
        "pinyin": "ねぇおかあさん"
    },
    "145": {
        "character": "僕今日、すごくいい感じのカフェ見つけちゃったよ",
        "letter": "I found a really nice cafe today!",
        "pinyin": "ぼくきょう、すごくいいかんじのかふぇみつけちゃったよ"
    },
    "146": {
        "character": "しろくまカフェって言うんだけど",
        "letter": "It's called the Polar Bear Cafe.",
        "pinyin": "しろくまかふぇっていうんだけど"
    },
    "147": {
        "character": "なんに言ってるの？知ってるわよ",
        "letter": "What are you talking about? Of course I know about it",
        "pinyin": "なんにいってるの？しってるわよ"
    },
    "148": {
        "character": "へ？！そうなの？",
        "letter": "What? Really?",
        "pinyin": "へ？！そうなの？"
    },
    "149": {
        "character": "ずっと前からあるじゃない？",
        "letter": "It's been around for a long time, hasn't it?",
        "pinyin": "ずっとまえからあるじゃない？"
    },
    "150": {
        "character": "あ？",
        "letter": "Huh?",
        "pinyin": "あ？"
    },
    "151": {
        "character": "うちの隣りに～",
        "letter": "Right next door to us",
        "pinyin": "うちのとなりに～"
    },
    "152": {
        "character": "へーーーーーーーー！！！！",
        "letter": "Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ！！！！",
        "pinyin": "へーーーーーーーー！！！！"
    },
    */
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