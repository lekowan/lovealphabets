// Configuration
const localStorageKey = "japanese" + "Episode2Part2Story" + "Srs";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep2 Part 2 Story";

// localStorage.removeItem(localStorageKey);
// localStorage.removeItem(localStorageKey + "RightAnswers");
// localStorage.removeItem(localStorageKey + "WrongAnswers");

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 2. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    "1": {
        "character": "カフェのお花見",
        "letter": "The Café's Cherry Blossom Viewing Party!",
        "pinyin": "かふぇのおはなみ"
    },
    "2": {
        "character": "誰にも言わないでよ",
        "letter": "Don't tell anyone.",
        "pinyin": "だれにもいわないでよ"
    },
    "3": {
        "character": "はい",
        "letter": "All right.",
        "pinyin": "はい"
    },
    "4": {
        "character": "僕、好きなペンギンさんが居るんだ",
        "letter": "I have a penguin that I like.",
        "pinyin": "ぼく、すきなぺんぎんさんがいるんだ"
    },
    "5": {
        "character": "すみません、抹茶パフェください",
        "letter": "Excuse me. Could I get a green tea parfait?",
        "pinyin": "すみません、まっちゃぱふぇください"
    },
    "6": {
        "character": "それで",
        "letter": "And?",
        "pinyin": "それで"
    },
    "7": {
        "character": "僕好きなペンギンさんが",
        "letter": "I have a penguin that I like—",
        "pinyin": "ぼくすきなぺんぎんさんが"
    },
    "8": {
        "character": "すみません、やっぱりいちごパフェにしてくれますか",
        "letter": "Excuse me, could you change that to a strawberry parfait?",
        "pinyin": "すみません、やっぱりいちごぱふぇにしてくれますか"
    },
    "9": {
        "character": "ちょっと！聞く気ある？！",
        "letter": "Hey! Are you even listening?!",
        "pinyin": "ちょっと！きくきある？！"
    },
    "10": {
        "character": "こんにちは",
        "letter": "Hello!",
        "pinyin": "こんにちは"
    },
    "11": {
        "character": "しろくま君いつもの",
        "letter": "Could I get the usual, Polar Bear?",
        "pinyin": "しろくまくんいつもの"
    },
    "12": {
        "character": "お待ち遠様竹大盛りね",
        "letter": "There you go. A large serving of bamboo.",
        "pinyin": "おまちどおさまたけおおもりね"
    },
    "13": {
        "character": "いただきま～す",
        "letter": "Thanks for the meal!",
        "pinyin": "いただきま～す"
    },
    "14": {
        "character": "やろうか",
        "letter": "Should we do it?",
        "pinyin": "やろうか"
    },
    "15": {
        "character": "何を",
        "letter": "What?",
        "pinyin": "なにを"
    },
    "16": {
        "character": "ん？お花見",
        "letter": "A cherry blossom viewing party.",
        "pinyin": "ん？おはなみ"
    },
    "17": {
        "character": "すごいね、桜",
        "letter": "Look at those cherry blossoms!",
        "pinyin": "すごいね、さくら"
    },
    "18": {
        "character": "綺麗ですね",
        "letter": "Aren't they beautiful?",
        "pinyin": "きれいですね"
    },
    "19": {
        "character": "あそこにしよう",
        "letter": "Let's go over there.",
        "pinyin": "あそこにしよう"
    },
    "20": {
        "character": "すごいね",
        "letter": "It's amazing.",
        "pinyin": "すごいね"
    },
    "21": {
        "character": "今年も綺麗に咲いたね",
        "letter": "They blossomed amazingly again this year.",
        "pinyin": "ことしもきれいにさいたね"
    },
    "22": {
        "character": "お摘みどうしよう",
        "letter": "I wonder what we should do for snacks...",
        "pinyin": "おつまみどうしよう"
    },
    "23": {
        "character": "情緒がないなぁ",
        "letter": "What an unromantic thing to say.",
        "pinyin": "じょうちょがないなぁ"
    },
    "24": {
        "character": "桜は綺麗だなって話してるんだから",
        "letter": "We're talking about how pretty the cherry blossoms are.",
        "pinyin": "さくらはきれいだなってはなしてるんだから"
    },
    "25": {
        "character": "うん、お摘み持ってない？",
        "letter": "Hey, do you have any snacks?",
        "pinyin": "うん、おつまみもってない？"
    },
    "26": {
        "character": "聞いてないなまぁ、いいや",
        "letter": "You're not listening at all.",
        "pinyin": "きいてないなまぁ、いいや"
    },
    "27": {
        "character": "花弁って食べられますかね",
        "letter": "I wonder if the cherry blossoms are edible.",
        "pinyin": "かべんってたべられますかね"
    },
    "28": {
        "character": "もう一人情緒ないのがいるよ",
        "letter": "And another one who doesn't get it.",
        "pinyin": "もうひとりじょうちょないのがいるよ"
    },
    "29": {
        "character": "ラマさんは草が食べられるなら食べられるんじゃない？",
        "letter": "You probably could, considering you eat grass, as well.",
        "pinyin": "らまさんはくさがたべられるならたべられるんじゃない？"
    },
    "30": {
        "character": "ね～竹持ってない？",
        "letter": "Hey, do you have any bamboo?",
        "pinyin": "ね～たけもってない？"
    },
    "31": {
        "character": "持ってないよ",
        "letter": "No.",
        "pinyin": "もってないよ"
    },
    "32": {
        "character": "お弁当なら持って来たよ",
        "letter": "I packed a lunch for us.",
        "pinyin": "おべんとうならもってきたよ"
    },
    "33": {
        "character": "さすがしろくま君",
        "letter": "You're amazing, Polar Bear!",
        "pinyin": "さすがしろくまくん"
    },
    "34": {
        "character": "僕買い出しいって来るね",
        "letter": "I'm... going to... run some errands...",
        "pinyin": "ぼくかいだしいってくるね"
    },
    "35": {
        "character": "なまけもの君？",
        "letter": "Sloth?",
        "pinyin": "なまけものくん？"
    },
    "36": {
        "character": "コンビニで",
        "letter": "I'm going... to buy...",
        "pinyin": "こんびにで"
    },
    "37": {
        "character": "何か乾き物買ってくる",
        "letter": "a drink... at the... convenience store—",
        "pinyin": "なにかかわきものかってくる"
    },
    "38": {
        "character": "いいよ、あるものだけで",
        "letter": "It's all right, we have enough here.",
        "pinyin": "いいよ、あるものだけで"
    },
    "39": {
        "character": "すぐそこだから",
        "letter": "It's just right over there...",
        "pinyin": "すぐそこだから"
    },
    "40": {
        "character": "行ってくるね",
        "letter": "I'll be... right back...",
        "pinyin": "いってくるね"
    },
    "41": {
        "character": "じゃね～",
        "letter": "Bye, now...",
        "pinyin": "じゃね～"
    },
    "42": {
        "character": "いってらっしゃい",
        "letter": "See ya.",
        "pinyin": "いってらっしゃい"
    },
    "43": {
        "character": "乾杯～",
        "letter": "Cheers!",
        "pinyin": "かんぱい～"
    },
    "44": {
        "character": "最高だなぁ",
        "letter": "This is great!",
        "pinyin": "さいこうだなぁ"
    },
    "45": {
        "character": "こんなに綺麗なのに、すぐに散っちゃうんだから",
        "letter": "They're so beautiful, but they fall so quickly.",
        "pinyin": "こんなにきれいなのに、すぐにちっちゃうんだから"
    },
    "46": {
        "character": "ホント儚いよね",
        "letter": "It's all so fleeting.",
        "pinyin": "ほんとはかないよね"
    },
    "47": {
        "character": "これ試しに作って見たんだ",
        "letter": "This is a new recipe I tried.",
        "pinyin": "これためしにつくってみたんだ"
    },
    "48": {
        "character": "あ～美味しそういただきます",
        "letter": "Oh! It looks delicious! Thank you for the food!",
        "pinyin": "あ～おいしそういただきます"
    },
    "49": {
        "character": "ちょっと、食べてばかないで",
        "letter": "Hey! Stop eating",
        "pinyin": "ちょっと、たべてばかないで"
    },
    "50": {
        "character": "もっとお花見らしいことしようよ",
        "letter": "and let's do something more fitting for a cherry blossom viewing party.",
        "pinyin": "もっとおはなみらしいことしようよ"
    },
    "51": {
        "character": "お花見らしいこと？",
        "letter": "More fitting for a cherry blossom viewing party?",
        "pinyin": "おはなみらしいこと？"
    },
    "52": {
        "character": "歌うとか",
        "letter": "Like singing.",
        "pinyin": "うたうとか"
    },
    "53": {
        "character": "僕歌下手",
        "letter": "I'm terrible at singing.",
        "pinyin": "ぼくうたへた"
    },
    "54": {
        "character": "同じく",
        "letter": "Same here.",
        "pinyin": "おなじく"
    },
    "55": {
        "character": "同じく",
        "letter": "I am, as well.",
        "pinyin": "おなじく"
    },
    "56": {
        "character": "踊るとか",
        "letter": "How about dancing?",
        "pinyin": "おどるとか"
    },
    "57": {
        "character": "踊り？",
        "letter": "Dance?",
        "pinyin": "おどり？"
    },
    "58": {
        "character": "踊るんですか",
        "letter": "We're going to dance?",
        "pinyin": "おどるんですか"
    },
    "59": {
        "character": "ダンスですか",
        "letter": "Dancing, you say?",
        "pinyin": "だんすですか"
    },
    "60": {
        "character": "フラダンス？",
        "letter": "Hula dancing?",
        "pinyin": "ふらだんす？"
    },
    "61": {
        "character": "ベリーダンス？",
        "letter": "Belly dancing?",
        "pinyin": "べりーだんす？"
    },
    "62": {
        "character": "腹ダンス？",
        "letter": "Stomach dancing?",
        "pinyin": "はらだんす？"
    },
    "63": {
        "character": "ペンギンさん寝てる",
        "letter": "Mr. Penguin is sleeping.",
        "pinyin": "ぺんぎんさんねてる"
    },
    "64": {
        "character": "違うよ、ダジャレどうしようもなくて倒れちゃったんだよ",
        "letter": "That's not it! I'm just got tired of your stupid puns and fell over!",
        "pinyin": "ちがうよ、だじゃれどうしようもなくてたおれちゃったんだよ"
    },
    "65": {
        "character": "ひどいなぁ、ペンギンさん",
        "letter": "Well, that was rude, Mr. Penguin.",
        "pinyin": "ひどいなぁ、ぺんぎんさん"
    },
    "66": {
        "character": "もっとあるでしょう！",
        "letter": "You know there's more to do at these events!",
        "pinyin": "もっとあるでしょう！"
    },
    "67": {
        "character": "お花見らしいこと、物真似とか",
        "letter": "How about impersonations?!",
        "pinyin": "おはなみらしいこと、ものまねとか"
    },
    "68": {
        "character": "わ～～名倉さんの物真似でしょう",
        "letter": "That's totally an impersonation of Mr. Nagura!",
        "pinyin": "わ～～なぐらさんのものまねでしょう"
    },
    "69": {
        "character": "食べてるだけなのに",
        "letter": "I'm just... eating.",
        "pinyin": "たべてるだけなのに"
    },
    "70": {
        "character": "物足りないね",
        "letter": "We're lacking something.",
        "pinyin": "ものたりないね"
    },
    "71": {
        "character": "よし、しろくま君",
        "letter": "I know! Polar Bear!",
        "pinyin": "よし、しろくまくん"
    },
    "72": {
        "character": "僕をその木の上に挙げて空を飛んでみせるよ",
        "letter": "Lift me up to that tree there! I'll fly!",
        "pinyin": "ぼくをそのきのうえにあげてそらをとんでみせるよ"
    },
    "73": {
        "character": "止めたほうがいいよ",
        "letter": "I don't think that's a good idea.",
        "pinyin": "とめたほうがいいよ"
    },
    "74": {
        "character": "なんで止めるの？",
        "letter": "Why are you trying to stop me?!",
        "pinyin": "なんでとめるの？"
    },
    "75": {
        "character": "じゃパンダ君でいいよ",
        "letter": "Then you do it, Panda!",
        "pinyin": "じゃぱんだくんでいいよ"
    },
    "76": {
        "character": "ほら、僕を木の上に乗せて",
        "letter": "Come on! Lift me up into the tree!",
        "pinyin": "ほら、ぼくをきのうえにのせて"
    },
    "77": {
        "character": "僕ラマですけど",
        "letter": "I'm Llama.",
        "pinyin": "ぼくらまですけど"
    },
    "78": {
        "character": "酔ってますね",
        "letter": "He appears to be rather drunk.",
        "pinyin": "よってますね"
    },
    "79": {
        "character": "飲み過ぎじゃない？",
        "letter": "I think he drank too much.",
        "pinyin": "のみすぎじゃない？"
    },
    "80": {
        "character": "すごいすごい",
        "letter": "Wow, that's amazing!",
        "pinyin": "すごいすごい"
    },
    "81": {
        "character": "お花見らしくなってきたよ、ペンギンさん",
        "letter": "It's like a real cherry blossom viewing party!",
        "pinyin": "おはなみらしくなってきたよ、ぺんぎんさん"
    },
    "82": {
        "character": "寝てる",
        "letter": "He's asleep.",
        "pinyin": "ねてる"
    },
    "83": {
        "character": "熟睡ですね",
        "letter": "He's totally knocked out.",
        "pinyin": "じゅくすいですね"
    },
    "84": {
        "character": "寝るな",
        "letter": "Hey! Don't sleep!",
        "pinyin": "ねるな"
    },
    "85": {
        "character": "起きてるよ",
        "letter": "We're awake.",
        "pinyin": "おきてるよ"
    },
    "86": {
        "character": "最近の若いペンギンはなっちゃないんだよ",
        "letter": "Young penguins these days just don't get it!",
        "pinyin": "さいきんのわかいぺんぎんはなっちゃないんだよ"
    },
    "87": {
        "character": "可愛いだけじゃダメなんだよ",
        "letter": "It's not just about being cute!",
        "pinyin": "かわいいだけじゃだめなんだよ"
    },
    "88": {
        "character": "そうでしょう",
        "letter": "Am I right?!",
        "pinyin": "そうでしょう"
    },
    "89": {
        "character": "絡むね",
        "letter": "Now he's picking fights.",
        "pinyin": "からむね"
    },
    "90": {
        "character": "聞いてる、吉崎さん",
        "letter": "Are you listening, Mr. Yoshizaki?!",
        "pinyin": "きいてる、よしざきさん"
    },
    "91": {
        "character": "誰それ",
        "letter": "Who's that?",
        "pinyin": "だれそれ"
    },
    "92": {
        "character": "吉崎さん、目の周りにあざがあるよ",
        "letter": "Oh no! You have bruises around your eyes, Mr. Yoshizaki!",
        "pinyin": "よしざきさん、めのまわりにあざがあるよ"
    },
    "93": {
        "character": "誰かに殴られたよ？大丈夫？",
        "letter": "Did someone hit you?Are you okay?!",
        "pinyin": "だれかになぐられたよ？だいじょうぶ？"
    },
    "94": {
        "character": "面倒臭いな",
        "letter": "This is getting annoying.",
        "pinyin": "めんどうくさいな"
    },
    "95": {
        "character": "ね～名倉さん、聞いてる？",
        "letter": "Hey, Mr. Nagura. Are you listening?",
        "pinyin": "ね～なぐらさん、きいてる？"
    },
    "96": {
        "character": "食べてるだけなのに",
        "letter": "I'm just... eating.",
        "pinyin": "たべてるだけなのに"
    },
    "97": {
        "character": "誰にも言わないでね",
        "letter": "Don't tell anyone, okay?",
        "pinyin": "だれにもいわないでね"
    },
    "98": {
        "character": "何を",
        "letter": "What?",
        "pinyin": "なにを"
    },
    "99": {
        "character": "好きなペンギンがいるんだよ",
        "letter": "I have a penguin that I like.",
        "pinyin": "すきなぺんぎんがいるんだよ"
    },
    "100": {
        "character": "パン屋のバイトのペンコさんっていうんだけど",
        "letter": "Her name is Miss Penko and she works at the bakery part-time.",
        "pinyin": "ぱんやのばいとのぺんこさんっていうんだけど"
    },
    "101": {
        "character": "ペンコさん！",
        "letter": "Miss Penko!",
        "pinyin": "ぺんこさん！"
    },
    "102": {
        "character": "僕パンダだよ",
        "letter": "I'm Panda!",
        "pinyin": "ぼくぱんだだよ"
    },
    "103": {
        "character": "ペンコさん一生僕と同じ魚を食べてください！",
        "letter": "Please share the same fish with me for as long as we both live, Miss Penko!",
        "pinyin": "ぺんこさんいっしょうぼくとおなじさかなをたべてください！"
    },
    "104": {
        "character": "お願いします",
        "letter": "Please!",
        "pinyin": "おねがいします"
    },
    "105": {
        "character": "助けて！",
        "letter": "Help me!",
        "pinyin": "たすけて！"
    },
    "106": {
        "character": "もう面白いから、見ていいよ",
        "letter": "This is rather amusing, so I'll just watch.",
        "pinyin": "もうおもしろいから、みていいよ"
    },
    "107": {
        "character": "き、聞いてくれますか",
        "letter": "Jeez! W-Will you listen to what I have to say?",
        "pinyin": "き、きいてくれますか"
    },
    "108": {
        "character": "何を",
        "letter": "What?",
        "pinyin": "なにを"
    },
    "109": {
        "character": "僕ペンコさんのポエムを書いたんです",
        "letter": "I wrote a poem about Miss Penko.",
        "pinyin": "ぼくぺんこさんのぽえむをかいたんです"
    },
    "110": {
        "character": "どんな？",
        "letter": "Really? How does it go?",
        "pinyin": "どんな？"
    },
    "111": {
        "character": "theペンコさん",
        "letter": "The Miss Penko'",
        "pinyin": "theぺんこさん"
    },
    "112": {
        "character": "the？",
        "letter": "The'?",
        "pinyin": "the？"
    },
    "113": {
        "character": "ペンコさんが笑う",
        "letter": "Miss Penko laughs.",
        "pinyin": "ぺんこさんがわらう"
    },
    "114": {
        "character": "ペンコさんが歩く",
        "letter": "Miss Penko walks.",
        "pinyin": "ぺんこさんがあるく"
    },
    "115": {
        "character": "ペンコさんが魚を食べる",
        "letter": "Miss Penko eats fish.",
        "pinyin": "ぺんこさんがさかなをたべる"
    },
    "116": {
        "character": "どうですか、ペンコさん",
        "letter": "What do you think, Miss Penko?",
        "pinyin": "どうですか、ぺんこさん"
    },
    "117": {
        "character": "僕？",
        "letter": "Me?",
        "pinyin": "ぼく？"
    },
    "118": {
        "character": "ペンギンさん、ちょっとペンコさんと散歩してきたら、",
        "letter": "Why don't you go on a walk with Miss Penko, Mr. Penguin?",
        "pinyin": "ぺんぎんさん、ちょっとぺんこさんとさんぽしてきたら、"
    },
    "119": {
        "character": "え？いいの",
        "letter": "Wow, really?!",
        "pinyin": "え？いいの"
    },
    "120": {
        "character": "じゃ、行こうか、ペンコさん",
        "letter": "Let's go, Miss Penko.",
        "pinyin": "じゃ、いこうか、ぺんこさん"
    },
    "121": {
        "character": "なんでまた僕？",
        "letter": "Why is it me again?",
        "pinyin": "なんでまたぼく？"
    },
    "122": {
        "character": "ほら、行こう",
        "letter": "Come on, let's go.",
        "pinyin": "ほら、いこう"
    },
    "123": {
        "character": "二人きりのロマンチックな夜だね",
        "letter": "It'll be a romantic evening with just the two of us.",
        "pinyin": "ふたりきりのろまんちっくなよるだね"
    },
    "124": {
        "character": "いろいろ違ってる気がするよ",
        "letter": "I can't help but feel there's a lot wrong with this.",
        "pinyin": "いろいろちがってるきがするよ"
    },
    "125": {
        "character": "いつまでもこうして歩いていたいなぁ",
        "letter": "I wish we could walk like this forever.",
        "pinyin": "いつまでもこうしてあるいていたいなぁ"
    },
    "126": {
        "character": "帰りたいよ",
        "letter": "I want to go home.",
        "pinyin": "かえりたいよ"
    },
    "127": {
        "character": "ペンコさん！よかったら僕と付き合い……",
        "letter": "Miss Penko, will you go out with—  What?!",
        "pinyin": "ぺんこさん！よかったらぼくとつきあい……"
    },
    "128": {
        "character": "あれ！吉崎さん、いつの間に",
        "letter": "Where did you come from, Mr. Yoshizaki?!",
        "pinyin": "あれ！よしざきさん、いつのまに"
    },
    "129": {
        "character": "吉崎さんって誰",
        "letter": "Who is Mr. Yoshizaki?",
        "pinyin": "よしざきさんってだれ"
    },
    "130": {
        "character": "ペンコさん、どこ！ペンコさん！",
        "letter": "Miss Penko, where did you go?! Miss Penko!",
        "pinyin": "ぺんこさん、どこ！ぺんこさん！"
    },
    "131": {
        "character": "ペンギンさん！",
        "letter": "Mr. Penguin!",
        "pinyin": "ぺんぎんさん！"
    },
    "132": {
        "character": "寝ている",
        "letter": "He's asleep.",
        "pinyin": "ねている"
    },
    "133": {
        "character": "お待たせ",
        "letter": "I'm back...",
        "pinyin": "おまたせ"
    },
    "134": {
        "character": "コンビニ行ってきたよ",
        "letter": "I went... to the convenience store...",
        "pinyin": "こんびにいってきたよ"
    },
    "135": {
        "character": "誰もいない",
        "letter": "No one's... here...",
        "pinyin": "だれもいない"
    },
    "136": {
        "character": "夜桜も綺麗だよ",
        "letter": "The night blossoms are pretty, too.",
        "pinyin": "よざくらもきれいだよ"
    },
    "137": {
        "character": "昨日はびっくりしたね",
        "letter": "Yesterday was pretty crazy.",
        "pinyin": "きのうはびっくりしたね"
    },
    "138": {
        "character": "毎年こうだから",
        "letter": "It's like that every year.",
        "pinyin": "まいとしこうだから"
    },
    "139": {
        "character": "ペンギンさんって酒癖悪いね",
        "letter": "Mr. Penguin doesn't handle  alcohol very well.",
        "pinyin": "ぺんぎんさんってさけぐせわるいね"
    },
    "140": {
        "character": "いらっしゃい",
        "letter": "Hello.",
        "pinyin": "いらっしゃい"
    },
    "141": {
        "character": "なんか頭が痛いよ",
        "letter": "My head is pounding for some reason.",
        "pinyin": "なんかあたまがいたいよ"
    },
    "142": {
        "character": "あれそれでペンコさんのパン屋さんで買ったの",
        "letter": "Oh, did you buy that from the bakery Miss Penko works at?",
        "pinyin": "あれそれでぺんこさんのぱんやさんでかったの"
    },
    "143": {
        "character": "え？なんで知ってるの",
        "letter": "What?! How do you know about that?!",
        "pinyin": "え？なんでしってるの"
    },
    "144": {
        "character": "theペンコさん",
        "letter": "The Miss Penko'",
        "pinyin": "theぺんこさん"
    },
    "145": {
        "character": "なんで僕のポエムをなんで知ってるの",
        "letter": "How do you know about my poem?!",
        "pinyin": "なんでぼくのぽえむをなんでしってるの"
    },
    "146": {
        "character": "ペンコさん一生僕と同じ魚を食べてください",
        "letter": "Why do you know about it?! 'Please share the same fish with me for as long as we both live, Miss Penko!'",
        "pinyin": "ぺんこさんいっしょうぼくとおなじさかなをたべてください"
    },
    "147": {
        "character": "僕が考えてるプロポーズの言葉！！",
        "letter": "The words I was going to use for my proposal!",
        "pinyin": "ぼくがかんがえてるぷろぽーずのことば！！"
    },
    "148": {
        "character": "な何でそれを！",
        "letter": "How do you know about that?!",
        "pinyin": "ななんでそれを！"
    },
    "149": {
        "character": "覚えてないんですか",
        "letter": "You don't remember?",
        "pinyin": "おぼえてないんですか"
    },
    "150": {
        "character": "誰にも話してないのに",
        "letter": "I-I haven't even told anyone!",
        "pinyin": "だれにもはなしてないのに"
    },
    "151": {
        "character": "ペンコさんが笑う",
        "letter": "Miss Penko laughs.'",
        "pinyin": "ぺんこさんがわらう"
    },
    "152": {
        "character": "ペンコさんが歩く",
        "letter": "Miss Penko walks.'",
        "pinyin": "ぺんこさんがあるく"
    },
    "153": {
        "character": "ペンコさんが魚を食べる",
        "letter": "Miss Penko eats fish.'",
        "pinyin": "ぺんこさんがさかなをたべる"
    },
    "154": {
        "character": "やめて",
        "letter": "Knock it off!",
        "pinyin": "やめて"
    },
    "155": {
        "character": "ペンギンさんペンギンさん",
        "letter": "Mr. Penguin, Mr. Penguin!",
        "pinyin": "ぺんぎんさんぺんぎんさん"
    },
    "156": {
        "character": "プチ整形した？",
        "letter": "Did you have some plastic surgery done?",
        "pinyin": "ぷちせいけいした？"
    },
    "157": {
        "character": "してないよ",
        "letter": "No, I didn't.",
        "pinyin": "してないよ"
    },
    "158": {
        "character": "逆に聞くけど、何でそう思った？",
        "letter": "But let me ask, why did you think that?",
        "pinyin": "ぎゃくにきくけど、なんでそうおもった？"
    },
    "159": {
        "character": "じゃ僕も逆に聞くけど",
        "letter": "But now let me ask",
        "pinyin": "じゃぼくもぎゃくにきくけど"
    },
    "160": {
        "character": "ナタデココってなんで出来てると思う？",
        "letter": "What do you think nata de coco is made from?",
        "pinyin": "なたでここってなんでできてるとおもう？"
    },
    "161": {
        "character": "何の逆？",
        "letter": "How did you think to ask that?",
        "pinyin": "なんのぎゃく？"
    },
    "162": {
        "character": "しろくま君纏めて",
        "letter": "Could you wrap this up, Polar Bear?",
        "pinyin": "しろくまくんまとめて"
    },
    "163": {
        "character": "次回のしろくまカフェは",
        "letter": "The next Polar Bear's Café",
        "pinyin": "じかいのしろくまかふぇは"
    },
    "164": {
        "character": "実写版でお送りしますお楽しみに",
        "letter": "will be presented in live-action.",
        "pinyin": "じっしゃばんでおおくりしますおたのしみに"
    },
    "165": {
        "character": "送らないよアニメだよ",
        "letter": "I'm not sending you anything, it's a cartoon.",
        "pinyin": "おくらないよあにめだよ"
    },
    "166": {
        "character": "お楽しみに",
        "letter": "Enjoy!",
        "pinyin": "おたのしみに"
    }
}


function getCharacter(n) {
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