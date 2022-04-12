// Configuration
const localStorageKey = "japanese" + "Episode3Part1" + "Story";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep3 Part 1 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 3 Part 1. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "シロクマくん動物園へ",
        "letter": "Polar Bear Goes to the Zoo.",
        "pinyin": "しろくまくんどうぶつえんへ"
    },
    "2": {
        "character": "シロクマくん暇だから何か問題出してよ",
        "letter": "Hey, Polar Bear. I'm a little bored, so give me a problem to solve.",
        "pinyin": "しろくまくんひまだからなにかもんだいだしてよ"
    },
    "3": {
        "character": "いいよ",
        "letter": "Sure.",
        "pinyin": "いいよ"
    },
    "4": {
        "character": "第１問",
        "letter": "Question 1:",
        "pinyin": "だい１もん"
    },
    "5": {
        "character": "Ｔ字路と呼ばれる交差点",
        "letter": "The T-intersection.'",
        "pinyin": "てぃーじろとよばれるこうさてん"
    },
    "6": {
        "character": "法令上の正式名称はＴ字路ではありません",
        "letter": "The legal name for this kind of intersection is not actually 'T-intersection.'",
        "pinyin": "ほうれいじょうのせいしきめいしょうはてぃーじろではありません"
    },
    "7": {
        "character": "さて何と言うでしょう",
        "letter": "What is the proper name?",
        "pinyin": "さてなんというでしょう"
    },
    "8": {
        "character": "もっとフランクな問題がいいな",
        "letter": "I'd prefer something a little less complicated.",
        "pinyin": "もっとふらんくなもんだいがいいな"
    },
    "9": {
        "character": "無洗米の製法にはいくつかありますが",
        "letter": "There are many ways of manufacturing pre-washed rice.",
        "pinyin": "むせんまいのせいほうにはいくつかありますが"
    },
    "10": {
        "character": "ＮＴＷＰ加工法という方法ではよく…",
        "letter": "But when using the NTWP manufacturing method, it's common—",
        "pinyin": "ＮＴＷＰかこうほうというほうほうではよく…"
    },
    "11": {
        "character": "ごめん、もういいや!!",
        "letter": "Actually, never mind.",
        "pinyin": "ごめん、もういいや!!"
    },
    "12": {
        "character": "おぉパンダくん",
        "letter": "Oh, hey, Panda.",
        "pinyin": "おぉぱんだくん"
    },
    "13": {
        "character": "いらっしゃい",
        "letter": "Welcome.",
        "pinyin": "いらっしゃい"
    },
    "14": {
        "character": "パンダくんいつもの？",
        "letter": "Would you like your usual, Panda?",
        "pinyin": "ぱんだくんいつもの？"
    },
    "15": {
        "character": "どうしたの？クイズ出す？",
        "letter": "What's wrong? Want a trivia question?",
        "pinyin": "どうしたの？くいずだす？"
    },
    "16": {
        "character": "クイズより",
        "letter": "Instead of a trivia question,",
        "pinyin": "くいずより"
    },
    "17": {
        "character": "どうしてシロクマくんは動物園に来てくれないの？",
        "letter": "why don't you come visit me at the zoo, Polar Bear?",
        "pinyin": "どうしてしろくまくんはどうぶつえんにきてくれないの？"
    },
    "18": {
        "character": "何？急に",
        "letter": "What's this, all of a sudden?",
        "pinyin": "なに？きゅうに"
    },
    "19": {
        "character": "僕はいつもシロクマくんの仕事場に遊びに来てるのにずるいよ",
        "letter": "I always come to visit you at work. It's not fair.",
        "pinyin": "ぼくはいつもしろくまくんのしごとばにあそびにきてるのにずるいよ"
    },
    "20": {
        "character": "カフェにお茶しに来てるだけでしょ",
        "letter": "But you're coming to the café as a customer.",
        "pinyin": "かふぇにおちゃしにきてるだけでしょ"
    },
    "21": {
        "character": "僕人にはモテるんだからね",
        "letter": "I'm really popular with people, you know?",
        "pinyin": "ぼくひとにはもてるんだからね"
    },
    "22": {
        "character": "聞いてないなぁ…",
        "letter": "He's not listening.",
        "pinyin": "きいてないなぁ…"
    },
    "23": {
        "character": "一度動物園に遊びに来てよ",
        "letter": "Come visit me at the zoo at least once.",
        "pinyin": "いちどどうぶつえんにあそびにきてよ"
    },
    "24": {
        "character": "大人気でびっくりするよ",
        "letter": "You'll be surprised at how popular I am.",
        "pinyin": "だいにんきでびっくりするよ"
    },
    "25": {
        "character": "なんで２回言うの?",
        "letter": "Why'd you have to say it twice?",
        "pinyin": "なんで２かいいうの?"
    },
    "26": {
        "character": "もしもしシロクマくん？",
        "letter": "Hello, Polar Bear?",
        "pinyin": "もしもししろくまくん？"
    },
    "27": {
        "character": "明日動物園に来る件だけど忘れないでよ",
        "letter": "I'm calling to remind you to come to the zoo tomorrow.",
        "pinyin": "あしたどうぶつえんにくるけんだけどわすれないでよ"
    },
    "28": {
        "character": "じゃあペンギンさんにも伝えておいてね",
        "letter": "Please tell Mr. Penguin, too.",
        "pinyin": "じゃあぺんぎんさんにもつたえておいてね"
    },
    "29": {
        "character": "おはようございま～す",
        "letter": "Good morning!",
        "pinyin": "おはようございま～す"
    },
    "30": {
        "character": "おはようパンダくん",
        "letter": "Good morning, Panda.",
        "pinyin": "おはようぱんだくん"
    },
    "31": {
        "character": "なんだか元気だね",
        "letter": "You're in good spirits today.",
        "pinyin": "なんだかげんきだね"
    },
    "32": {
        "character": "今日友達が僕のこと見に来るの",
        "letter": "My friends are coming to see me today.",
        "pinyin": "きょうともだちがぼくのことみにくるの"
    },
    "33": {
        "character": "そうなんだ",
        "letter": "I see...",
        "pinyin": "そうなんだ"
    },
    "34": {
        "character": "あっそうだ今日は常勤パンダさんが娘さんの参観日だから休むって",
        "letter": "Oh, that's right! Full-time Panda has the day off today because he's visiting his daughter's class.",
        "pinyin": "あっそうだきょうはじょうきんぱんださんがむすめさんのさんかんびだからやすむって"
    },
    "35": {
        "character": "そうなの？",
        "letter": "Oh, really?",
        "pinyin": "そうなの？"
    },
    "36": {
        "character": "あれ？ということは…",
        "letter": "Wait, that means...",
        "pinyin": "あれ？ということは…"
    },
    "37": {
        "character": "パンダは僕ひとり…",
        "letter": "I'll be the only panda.",
        "pinyin": "ぱんだはぼくひとり…"
    },
    "38": {
        "character": "パンダさんかわいい～！",
        "letter": "You're so cute, Mr. Panda!",
        "pinyin": "ぱんださんかわいい～！"
    },
    "39": {
        "character": "パンダく～ん！かわいい！",
        "letter": "You're so cute, Panda!",
        "pinyin": "ぱんだく～ん！かわいい！"
    },
    "40": {
        "character": "ようし！頑張るぞ～！",
        "letter": "All right! I'll do my best!",
        "pinyin": "ようし！がんばるぞ～！"
    },
    "41": {
        "character": "うわっすっげえ！",
        "letter": "Oh, my God!",
        "pinyin": "うわっすっげえ！"
    },
    "42": {
        "character": "何名様ですか？",
        "letter": "How many?",
        "pinyin": "なんめいさまですか？"
    },
    "43": {
        "character": "２名です",
        "letter": "Two... Animals, please.",
        "pinyin": "２めいです"
    },
    "44": {
        "character": "ここが動物園か",
        "letter": "So, this is the zoo.",
        "pinyin": "ここがどうぶつえんか"
    },
    "45": {
        "character": "思ったより広いね",
        "letter": "It's a lot bigger than I thought.",
        "pinyin": "おもったよりひろいね"
    },
    "46": {
        "character": "まずはパンダくんを見に行こう",
        "letter": "Let's go see Panda first.",
        "pinyin": "まずはぱんだくんをみにいこう"
    },
    "47": {
        "character": "ただ今からシロクマのおやつタイムを行います",
        "letter": "We will now start the polar bear feeding time.",
        "pinyin": "ただいまからしろくまのおやつたいむをおこないます"
    },
    "48": {
        "character": "シロクマがプールへダイビングする姿をどうぞお楽しみください",
        "letter": "Please enjoy watching the polar bear dive into the water!",
        "pinyin": "しろくまがぷーるへだいびんぐするすがたをどうぞおたのしみください"
    },
    "49": {
        "character": "見たい！すごそう！",
        "letter": "I want to go see! That sounds amazing!",
        "pinyin": "みたい！すごそう！"
    },
    "50": {
        "character": "えっ！？見たい！？",
        "letter": "What? You want to see that?",
        "pinyin": "えっ！？みたい！？"
    },
    "51": {
        "character": "シロクマくんってシロクマだよね？",
        "letter": "You're a polar bear, right, Polar Bear?",
        "pinyin": "しろくまくんってしろくまだよね？"
    },
    "52": {
        "character": "シロクマがシロクマのダイビングする姿が見たいの？",
        "letter": "You want to see a polar bear diving, Polar Bear?",
        "pinyin": "しろくまがしろくまのだいびんぐするすがたがみたいの？"
    },
    "53": {
        "character": "行こう行こう！",
        "letter": "Let's go, let's go!",
        "pinyin": "いこういこう！"
    },
    "54": {
        "character": "パンダく～ん",
        "letter": "Panda!",
        "pinyin": "ぱんだく～ん"
    },
    "55": {
        "character": "そんなに飛ばして大丈夫？",
        "letter": "Are you doing okay, working that hard?",
        "pinyin": "そんなにとばしてだいじょうぶ？"
    },
    "56": {
        "character": "半田さん友達が来たらちゃんと写真撮ってね",
        "letter": "Mr. Handa, when my friends come, please take our picture.",
        "pinyin": "はんでんさんともだちがきたらちゃんとしゃしんとってね"
    },
    "57": {
        "character": "でもおかしいなぁ",
        "letter": "But it's strange,",
        "pinyin": "でもおかしいなぁ"
    },
    "58": {
        "character": "シロクマくんたち１時って言ったのに来ないね",
        "letter": "They said they'd be here around 1pm, but I don't see them anywhere.",
        "pinyin": "しろくまくんたち１じっていったのにこないね"
    },
    "59": {
        "character": "シロクマくん駄目だよほら",
        "letter": "We can't go in here, Polar Bear. Look.",
        "pinyin": "しろくまくんだめだよほら"
    },
    "60": {
        "character": "なに？",
        "letter": "What?",
        "pinyin": "なに？"
    },
    "61": {
        "character": "入館不可だって",
        "letter": "It says you can't enter.",
        "pinyin": "にゅうかんふかだって"
    },
    "62": {
        "character": "しろくま館へのシロクマの入館はご遠慮ください",
        "letter": "We apologize for the inconvenience, but polar bears are not allowed in the Polar Bear Hall.",
        "pinyin": "しろくまかんへのしろくまのにゅうかんはごえんりょください"
    },
    "63": {
        "character": "まぎらわしいので",
        "letter": "It confuses them!",
        "pinyin": "まぎらわしいので"
    },
    "64": {
        "character": "こっそり入ればバレないバレないの",
        "letter": "If we sneak in quietly, they'll never even notice.",
        "pinyin": "こっそりいればばれないばれないの"
    },
    "65": {
        "character": "いやすごく目立ってるから",
        "letter": "No... I think we're pretty obvious.",
        "pinyin": "いやすごくめだってるから"
    },
    "66": {
        "character": "お～！すごい迫力",
        "letter": "Wow! That's incredible!",
        "pinyin": "お～！すごいはくりょく"
    },
    "67": {
        "character": "シロクマ！",
        "letter": "A polar bear!",
        "pinyin": "しろくま！"
    },
    "68": {
        "character": "ちょっとちょっとシロクマは入れないって書いてあったでしょう",
        "letter": "Hey, hey! The sign clearly says no polar bears allowed!",
        "pinyin": "ちょっとちょっとしろくまはいれないってかいてあったでしょう"
    },
    "69": {
        "character": "困りますよ",
        "letter": "It's really troublesome.",
        "pinyin": "こまりますよ"
    },
    "70": {
        "character": "え？これ剥製ですけど",
        "letter": "Um... This is actually a stuffed animal.",
        "pinyin": "え？これはくせいですけど"
    },
    "71": {
        "character": "今動いてましたよ剥製なわけないでしょう",
        "letter": "It was just moving!",
        "pinyin": "いまうごいてましたよはくせいなわけないでしょう"
    },
    "72": {
        "character": "なんで来ないの？",
        "letter": "Why aren't they here yet?",
        "pinyin": "なんでこないの？"
    },
    "73": {
        "character": "もう行っていいかな？来たら呼んで",
        "letter": "Um, I'm going to go now. Call me when they get here.",
        "pinyin": "もういっていいかな？きたらよんで"
    },
    "74": {
        "character": "もう叱られたじゃない",
        "letter": "See? We got in trouble.",
        "pinyin": "もうしかられたじゃない"
    },
    "75": {
        "character": "僕はバレるって言ったのに",
        "letter": "I said we'd get in trouble.",
        "pinyin": "ぼくはばれるっていったのに"
    },
    "76": {
        "character": "じゃあパンダくんとこに行こう",
        "letter": "Then let's go see Panda.",
        "pinyin": "じゃあぱんだくんとこにいこう"
    },
    "77": {
        "character": "うん",
        "letter": "Okay.",
        "pinyin": "うん"
    },
    "78": {
        "character": "パンダくんかわいいキャ～ッかわいい",
        "letter": "You're so cute, Panda!",
        "pinyin": "ぱんだくんかわいいきゃ～っかわいい"
    },
    "79": {
        "character": "パンダく～ん",
        "letter": "Panda!",
        "pinyin": "ぱんだく～ん"
    },
    "80": {
        "character": "パンダくん遅れてごめん",
        "letter": "Sorry we're late, Panda!",
        "pinyin": "ぱんだくんおくれてごめん"
    },
    "81": {
        "character": "あれ？",
        "letter": "Huh?",
        "pinyin": "あれ？"
    },
    "82": {
        "character": "お～いパンダくん",
        "letter": "Hey, Panda!",
        "pinyin": "お～いぱんだくん"
    },
    "83": {
        "character": "寝てる",
        "letter": "He's asleep.",
        "pinyin": "ねてる"
    },
    "84": {
        "character": "パンダくん起きて",
        "letter": "Panda! Wake up!",
        "pinyin": "ぱんだくんおきて"
    },
    "85": {
        "character": "笑ってる",
        "letter": "He's laughing...",
        "pinyin": "わらってる"
    },
    "86": {
        "character": "パンダくんおいパンダくん！",
        "letter": "Panda!",
        "pinyin": "ぱんだくんおいぱんだくん！"
    },
    "87": {
        "character": "駄目だ",
        "letter": "It's no use.",
        "pinyin": "だめだ"
    },
    "88": {
        "character": "他のとこ回ってこようか",
        "letter": "Let's go somewhere else.",
        "pinyin": "ほかのとこまわってこようか"
    },
    "89": {
        "character": "寝ててもいいなんてうらやましい仕事だね",
        "letter": "I envy the fact that he's allowed to sleep at work.",
        "pinyin": "ねててもいいなんてうらやましいしごとだね"
    },
    "90": {
        "character": "ハッ今ペンギンさんの声が",
        "letter": "Hey, I think I just heard Mr. Penguin!",
        "pinyin": "はっいまぺんぎんさんのこえが"
    },
    "91": {
        "character": "いない",
        "letter": "Aw, he's not here.",
        "pinyin": "いない"
    },
    "92": {
        "character": "あっ半田さん",
        "letter": "Oh, Mr. Handa.",
        "pinyin": "あっはんでんさん"
    },
    "93": {
        "character": "なに？",
        "letter": "Yes?",
        "pinyin": "なに？"
    },
    "94": {
        "character": "友達来なかった？",
        "letter": "Did my friends happen to stop by?",
        "pinyin": "ともだちこなかった？"
    },
    "95": {
        "character": "え？気づかなかったな",
        "letter": "I didn't see them.",
        "pinyin": "え？きづかなかったな"
    },
    "96": {
        "character": "ちゃんと写真撮ってよ",
        "letter": "Make sure you take our picture, 'kay?",
        "pinyin": "ちゃんとしゃしんとってよ"
    },
    "97": {
        "character": "はいはい",
        "letter": "Sure, sure...",
        "pinyin": "はいはい"
    },
    "98": {
        "character": "おっあざらし館行こう行こう",
        "letter": "Hey, the Seal Hall! Let's go!",
        "pinyin": "おっあざらしかんいこういこう"
    },
    "99": {
        "character": "シロクマの入館はご遠慮ください",
        "letter": "We apologize for the inconvenience, but polar bears are not allowed in the Seal Hall",
        "pinyin": "しろくまのにゅうかんはごえんりょください"
    },
    "100": {
        "character": "あざらしが怖がるので…",
        "letter": "It scares the seals!",
        "pinyin": "あざらしがこわがるので…"
    },
    "101": {
        "character": "だってさ",
        "letter": "There ya go.",
        "pinyin": "だってさ"
    },
    "102": {
        "character": "バレないバレない",
        "letter": "No one will even notice.",
        "pinyin": "ばれないばれない"
    },
    "103": {
        "character": "いや目立ってるし",
        "letter": "No, we're pretty obvious.",
        "pinyin": "いやめだってるし"
    },
    "104": {
        "character": "食べない食べないの",
        "letter": "Don't worry, I won't eat you.",
        "pinyin": "たべないたべないの"
    },
    "105": {
        "character": "シロクマ！",
        "letter": "A polar bear!",
        "pinyin": "しろくま！"
    },
    "106": {
        "character": "食べないとわかっていても実際本物見るとテンション上がるなあ",
        "letter": "Even though I know I won't eat one, I still get a little excited when I see one.",
        "pinyin": "たべないとわかっていてもじっさいほんものみるとてんしょんあがるなあ"
    },
    "107": {
        "character": "シロクマくんの野性が呼び覚まされないうちに早く行こうよ",
        "letter": "Let's leave before your natural instincts take over.",
        "pinyin": "しろくまくんのやせいがよびさまされないうちにはやくいこうよ"
    },
    "108": {
        "character": "ちょっとちょっと",
        "letter": "Hey, hey!",
        "pinyin": "ちょっとちょっと"
    },
    "109": {
        "character": "シロクマは入らないでって書いてあったでしょう",
        "letter": "The sign clearly said no polar bears allowed!",
        "pinyin": "しろくまははいらないでってかいてあったでしょう"
    },
    "110": {
        "character": "え？これ絨毯ですよ",
        "letter": "Oh, this is just a rug.",
        "pinyin": "え？これじゅうたんですよ"
    },
    "111": {
        "character": "ほ～ら見てみてこんなにふっかふか",
        "letter": "See? Look! It's so fluffy!",
        "pinyin": "ほ～らみてみてこんなにふっかふか"
    },
    "112": {
        "character": "いや～騙せないもんだね",
        "letter": "Wow. We can't seem to pull one over on them.",
        "pinyin": "いや～だませないもんだね"
    },
    "113": {
        "character": "もう",
        "letter": "Jeez.",
        "pinyin": "もう"
    },
    "114": {
        "character": "パンダくんそろそろ起きてるんじゃない？",
        "letter": "Panda might actually be awake now.",
        "pinyin": "ぱんだくんそろそろおきてるんじゃない？"
    },
    "115": {
        "character": "お～いパンダくん",
        "letter": "Hey, Panda!",
        "pinyin": "お～いぱんだくん"
    },
    "116": {
        "character": "また笑ってる",
        "letter": "He's laughing again.",
        "pinyin": "またわらってる"
    },
    "117": {
        "character": "よくあんな状態で寝られるね",
        "letter": "It's amazing that he can sleep in that position.",
        "pinyin": "よくあんなじょうたいでねられるね"
    },
    "118": {
        "character": "あれは逆に尊敬するね",
        "letter": "I actually admire him for that.",
        "pinyin": "あれはぎゃくにそんけいするね"
    },
    "119": {
        "character": "あのもしかしてパンダくんのお友達ですか？",
        "letter": "Excuse me, are you Panda's friends?",
        "pinyin": "あのもしかしてぱんだくんのおともだちですか？"
    },
    "120": {
        "character": "あはい",
        "letter": "Yes, we are.",
        "pinyin": "あはい"
    },
    "121": {
        "character": "写真撮りましょうか",
        "letter": "Could I take a picture?",
        "pinyin": "しゃしんとりましょうか"
    },
    "122": {
        "character": "撮ってくれって頼まれてるんで",
        "letter": "He asked me to take one.",
        "pinyin": "とってくれってたのまれてるんで"
    },
    "123": {
        "character": "キリンさんしろくまカフェに来てくれないかな？",
        "letter": "I wonder if Mr. Giraffe will come to my café.",
        "pinyin": "きりんさんしろくまかふぇにきてくれないかな？"
    },
    "124": {
        "character": "いやカフェに入れないでしょ",
        "letter": "No, I don't think he can get in.",
        "pinyin": "いやかふぇにいれないでしょ"
    },
    "125": {
        "character": "別のところも回ってみよう",
        "letter": "Let's look around the other places, too.",
        "pinyin": "べつのところもまわってみよう"
    },
    "126": {
        "character": "そうだね",
        "letter": "Okay.",
        "pinyin": "そうだね"
    },
    "127": {
        "character": "でどこ行こうか？",
        "letter": "So, where did you want to go?",
        "pinyin": "でどこいこうか？"
    },
    "128": {
        "character": "う～んあっ！ペンギンコーナー",
        "letter": "Oh, how about the Penguin Corner?",
        "pinyin": "う～んあっ！ぺんぎんこーなー"
    },
    "129": {
        "character": "えぇ～",
        "letter": "Oh, my God.",
        "pinyin": "えぇ～"
    },
    "130": {
        "character": "ペンギンさん曲芸に飛び入りしてよ",
        "letter": "You should join in their acrobatics act, Mr. Penguin.",
        "pinyin": "ぺんぎんさんきょくげいにとびいりしてよ"
    },
    "131": {
        "character": "僕運動神経悪いから",
        "letter": "I'm terrible with exercise.",
        "pinyin": "ぼくうんどうしんけいわるいから"
    },
    "132": {
        "character": "ちょっとちょっと",
        "letter": "Hey, there.",
        "pinyin": "ちょっとちょっと"
    },
    "133": {
        "character": "あラマさん",
        "letter": "Oh, hello, Mr. Llama.",
        "pinyin": "あらまさん"
    },
    "134": {
        "character": "今日はどうしたんですか？",
        "letter": "What brings you here today?",
        "pinyin": "きょうはどうしたんですか？"
    },
    "135": {
        "character": "パンダくんに会いにきたのに寝てるんだよね",
        "letter": "We came to see Panda, but he's asleep.",
        "pinyin": "ぱんだくんにあいにきたのにねてるんだよね"
    },
    "136": {
        "character": "たまには起きてますよ",
        "letter": "He's awake sometimes.",
        "pinyin": "たまにはおきてますよ"
    },
    "137": {
        "character": "そっかいいかげんパンダくん起きてるよね？",
        "letter": "Oh, okay. Panda should be awake by now.",
        "pinyin": "そっかいいかげんぱんだくんおきてるよね？"
    },
    "138": {
        "character": "戻ろう",
        "letter": "Let's go look.",
        "pinyin": "もどろう"
    },
    "139": {
        "character": "また寝てる",
        "letter": "He's asleep, again.",
        "pinyin": "またねてる"
    },
    "140": {
        "character": "更にだらしないね",
        "letter": "And he looks even more shameless.",
        "pinyin": "さらにだらしないね"
    },
    "141": {
        "character": "パンダくん僕たちにいったい何を見てもらいたかったんだろうね",
        "letter": "I wonder what exactly Panda wanted us to see.",
        "pinyin": "ぱんだくんぼくたちにいったいなにをみてもらいたかったんだろうね"
    },
    "142": {
        "character": "あのパンダさん寝てばっかりでつまんない",
        "letter": "That panda's so boring. All he does is sleep.",
        "pinyin": "あのぱんださんねてばっかりでつまんない"
    },
    "143": {
        "character": "うん行こう",
        "letter": "Yeah, let's go!",
        "pinyin": "うんいこう"
    },
    "144": {
        "character": "大人気ねぇ…",
        "letter": "Popular,' huh?",
        "pinyin": "だいにんきねぇ…"
    },
    "145": {
        "character": "あまた笑った",
        "letter": "Hey, he's laughing again.",
        "pinyin": "あまたわらった"
    },
    "146": {
        "character": "ず～っと待ってたのになんで来てくれなかったの？",
        "letter": "I was waiting the whole day. Why didn't you come?",
        "pinyin": "ず～っとまってたのになんできてくれなかったの？"
    },
    "147": {
        "character": "いや何度も行ったよ",
        "letter": "Actually, we came by quite a few times.",
        "pinyin": "いやなんどもいったよ"
    },
    "148": {
        "character": "ほんと？",
        "letter": "Really?",
        "pinyin": "ほんと？"
    },
    "149": {
        "character": "行ったってば",
        "letter": "We were there!",
        "pinyin": "いったってば"
    },
    "150": {
        "character": "ねぇラマさん今日動物園で会ったよね？",
        "letter": "Right, Mr. Llama? We met at the zoo today, right?",
        "pinyin": "ねぇらまさんきょうどうぶつえんであったよね？"
    },
    "151": {
        "character": "会いましたよ",
        "letter": "We did.",
        "pinyin": "あいましたよ"
    },
    "152": {
        "character": "ほらちゃんと行ったでしょ？",
        "letter": "See? We did go.",
        "pinyin": "ほらちゃんといったでしょ？"
    },
    "153": {
        "character": "どうして僕のとこには来てくれないの？",
        "letter": "Why didn't you come see me?",
        "pinyin": "どうしてぼくのとこにはきてくれないの？"
    },
    "154": {
        "character": "だから行ったんだって！",
        "letter": "I just said we did!",
        "pinyin": "だからいったんだって！"
    },
    "155": {
        "character": "そんなにずっとラマさんを見てたの？",
        "letter": "You spent that much time watching Mr. Llama?",
        "pinyin": "そんなにずっとらまさんをみてたの？"
    },
    "156": {
        "character": "だからパンダくんとこに行ったってば！",
        "letter": "I'm trying to tell you, we went to see you, too!",
        "pinyin": "だからぱんだくんとこにいったってば！"
    },
    "157": {
        "character": "じゃあなんで会えなかったんだろうね",
        "letter": "I wonder why we didn't see each other, then.",
        "pinyin": "じゃあなんであえなかったんだろうね"
    },
    "158": {
        "character": "パンダくんが寝てばっかりだったからでしょ",
        "letter": "It's because you were asleep the whole time.",
        "pinyin": "ぱんだくんがねてばっかりだったからでしょ"
    },
    "159": {
        "character": "起こしてよ",
        "letter": "You should have woken me up.",
        "pinyin": "おこしてよ"
    },
    "160": {
        "character": "起きなかったよ",
        "letter": "You didn't wake up!",
        "pinyin": "おきなかったよ"
    },
    "161": {
        "character": "せっかく半田さんが写真撮ってくれるって言ってたのに",
        "letter": "And Mr. Handa even said he would take pictures...",
        "pinyin": "せっかくはんでんさんがしゃしんとってくれるっていってたのに"
    },
    "162": {
        "character": "撮ったよ",
        "letter": "He did.",
        "pinyin": "とったよ"
    },
    "163": {
        "character": "ほんとだ来てたんだね",
        "letter": "Wow, you really did come!",
        "pinyin": "ほんとだこてたんだね"
    },
    "164": {
        "character": "だから言ったのに",
        "letter": "That's what I've been saying.",
        "pinyin": "だからいったのに"
    },
    "165": {
        "character": "へぇ～僕って寝ててもかわいいなぁ",
        "letter": "I'm so cute even when I'm sleeping.",
        "pinyin": "へぇ～ぼくってねててもかわいいなぁ"
    },
    "166": {
        "character": "ねえねえどの寝顔がいちばん好き？",
        "letter": "Hey, hey. Which sleeping face do you like best?",
        "pinyin": "ねえねえどのねがおがいちばんすき？"
    },
    "167": {
        "character": "シロクマくんおかわりくれる？",
        "letter": "Could I get another, Polar Bear?",
        "pinyin": "しろくまくんおかわりくれる？"
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