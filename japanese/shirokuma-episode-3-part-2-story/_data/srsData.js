// Configuration
const localStorageKey = "japanese" + "Episode3Part2" + "Story";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep3 Part 2 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 3 Part 2. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "パンダくんの悩み", 
        "definition": "パンダ くん の 悩み", 
        "pinyinSpace": 'パンダ くん の なやみ'},
    "2": {
        "character": "笹子さん肉じゃがが好きな男ってどう思う？",
        "letter": "Miss Sasako, how do you feel about men who like meat and potato stew?",
        "pinyin": "ささごさんにくじゃががすきなおとこってどうおもう？"
    },
    "3": {
        "character": "え！？今答えなくていいですか？",
        "letter": "I'd rather not answer right now, if that's okay.",
        "pinyin": "え！？いまこたえなくていいですか？"
    },
    "4": {
        "character": "いいですよ",
        "letter": "That's fine.",
        "pinyin": "いいですよ"
    },
    "5": {
        "character": "つれないなぁ",
        "letter": "That was standoffish.",
        "pinyin": "つれないなぁ"
    },
    "6": {
        "character": "ねえ僕いまだに自然体っていうのがわからないの",
        "letter": "You know, I still can't figure out this 'act naturally' thing.",
        "pinyin": "ねえぼくいまだにしぜんたいっていうのがわからないの"
    },
    "7": {
        "character": "自然体でいいです",
        "letter": "Just act naturally.",
        "pinyin": "しぜんたいでいいです"
    },
    "8": {
        "character": "いくら考えても答えが出なくて",
        "letter": "No matter how much I think about it, I can't find the answer.",
        "pinyin": "いくらかんがえてもこたえがでなくて"
    },
    "9": {
        "character": "常勤パンダさん自然体って何？",
        "letter": "What does it mean to act naturally, Mr. Full-time Panda?",
        "pinyin": "じょうきんぱんださんしぜんたいってなに？"
    },
    "10": {
        "character": "寝てる！",
        "letter": "He's asleep!",
        "pinyin": "ねてる！"
    },
    "11": {
        "character": "ねえ半田さん",
        "letter": "Hey, Mr. Handa,",
        "pinyin": "ねえはんでんさん"
    },
    "12": {
        "character": "自然体って何？",
        "letter": "what does it mean to 'act naturally'?",
        "pinyin": "しぜんたいってなに？"
    },
    "13": {
        "character": "言ったでしょ「自然体でいいです」って",
        "letter": "You said it yourself, 'just act naturally.'",
        "pinyin": "いったでしょ「しぜんたいでいいです」って"
    },
    "14": {
        "character": "自然でいることが自然体じゃないかな",
        "letter": "I think the act of acting naturally is 'acting natural.'",
        "pinyin": "しぜんでいることがしぜんたいじゃないかな"
    },
    "15": {
        "character": "ちょっとお手本見せてよ",
        "letter": "Could you give me an example?",
        "pinyin": "ちょっとおてほんみせてよ"
    },
    "16": {
        "character": "えぇ～",
        "letter": "Oh, yeah.",
        "pinyin": "えぇ～"
    },
    "17": {
        "character": "こんな感じだけど",
        "letter": "Something like this.",
        "pinyin": "こんなかんじだけど"
    },
    "18": {
        "character": "う～ん",
        "letter": "That's not cute.",
        "pinyin": "う～ん"
    },
    "19": {
        "character": "自然体ってどういうことなの？",
        "letter": "What does it mean to 'act naturally'?",
        "pinyin": "しぜんたいってどういうことなの？"
    },
    "20": {
        "character": "こんな表情？",
        "letter": "Something like this?",
        "pinyin": "こんなひょうじょう？"
    },
    "21": {
        "character": "自然体かどうかわかんないけどかわいいね",
        "letter": "I don't know if that's acting natural or not, but it is cute.",
        "pinyin": "しぜんたいかどうかわかんないけどかわいいね"
    },
    "22": {
        "character": "これは？o(=∩ω∩=)m",
        "letter": "How about this?",
        "pinyin": "これは？o(=∩ω∩=)m"
    },
    "23": {
        "character": "かわいい",
        "letter": "It's cute.",
        "pinyin": "かわいい"
    },
    "24": {
        "character": "これは～?",
        "letter": "And this?",
        "pinyin": "これは～？n(*≧▽≦*)n"
    },
    "25": {
        "character": "もうかわいいのはわかったよ",
        "letter": "We get it. You're cute.",
        "pinyin": "もうかわいいのはわかったよ"
    },
    "26": {
        "character": "そうなんだよね",
        "letter": "I know.",
        "pinyin": "そうなんだよね"
    },
    "27": {
        "character": "かわいいかわいいって言われてもどうしていいかわかんなくて",
        "letter": "I keep getting called cute, but I still don't know what to do.",
        "pinyin": "かわいいかわいいっていわれてもどうしていいかわかんなくて"
    },
    "28": {
        "character": "いいなぁ僕もかわいいって言われてみたいですよ",
        "letter": "How nice. I wish someone would call me cute.",
        "pinyin": "いいなぁぼくもかわいいっていわれてみたいですよ"
    },
    "29": {
        "character": "ゴロゴロしてるだけなのになぁ",
        "letter": "All I'm doing is lounging around.",
        "pinyin": "ごろごろしてるだけなのになぁ"
    },
    "30": {
        "character": "楽しそうでうらやましいよ",
        "letter": "You always look like you're having fun. I'm jealous.",
        "pinyin": "たのしそうでうらやましいよ"
    },
    "31": {
        "character": "ラッコさん？",
        "letter": "Mr. Otter?",
        "pinyin": "らっこさん？"
    },
    "32": {
        "character": "僕さお腹で貝割るでしょ？ヾ(≧へ≦)〃",
        "letter": "You know I break shellfish on my tummy, right?",
        "pinyin": "ぼくさおなかでかいわるでしょ？ヾ(≧へ≦)〃"
    },
    "33": {
        "character": "あれって大変だよお腹痛くなる",
        "letter": "It's harder than it looks. It hurts my tummy.",
        "pinyin": "あれってたいへんだよおなかいたくなる"
    },
    "34": {
        "character": "お腹に石だよ笹子さん",
        "letter": "I'm banging a rock on my tummy, Miss Sasako.",
        "pinyin": "おなかにいしだよささごさん"
    },
    "35": {
        "character": "はい？",
        "letter": "I'm sorry?",
        "pinyin": "はい？"
    },
    "36": {
        "character": "自分のお腹を石で叩いてみなよ",
        "letter": "You should try banging a rock on your tummy.",
        "pinyin": "じぶんのおなかをいしでたたいてみなよ"
    },
    "37": {
        "character": "痛いでしょ？",
        "letter": "It would hurt, right?",
        "pinyin": "いたいでしょ？"
    },
    "38": {
        "character": "はい…",
        "letter": "Yes...",
        "pinyin": "はい…"
    },
    "39": {
        "character": "お腹で割らなければいいのに",
        "letter": "Then you shouldn't try breaking it on your tummy.",
        "pinyin": "おなかでわらなければいいのに"
    },
    "40": {
        "character": "あれをやるとお客がわくからさ",
        "letter": "But the audience loves seeing that.",
        "pinyin": "あれをやるとおきゃくがわくからさ"
    },
    "41": {
        "character": "もうやめたら？その出し物",
        "letter": "Why don't you give up that act?",
        "pinyin": "もうやめたら？そのだしもの"
    },
    "42": {
        "character": "出し物っていうか習性だからね",
        "letter": "It's not really an act. It's more of a trait.",
        "pinyin": "だしものっていうかしゅうせいだからね"
    },
    "43": {
        "character": "かわいいからいいじゃないですか",
        "letter": "I think it's fine since it's cute.",
        "pinyin": "かわいいからいいじゃないですか"
    },
    "44": {
        "character": "かわいいんだけどさもうお腹が限界",
        "letter": "It's cute, but my tummy's had enough.",
        "pinyin": "かわいいんだけどさもうおなかがげんかい"
    },
    "45": {
        "character": "かわいいで言ったら私もかわいいんですけど",
        "letter": "Since we're on the topic of cute, I'm cute, too.",
        "pinyin": "かわいいでいったらわたしもかわいいんですけど"
    },
    "46": {
        "character": "コアラさん？",
        "letter": "Mr. Koala?",
        "pinyin": "こあらさん？"
    },
    "47": {
        "character": "ユーカリ？かわいく食べてますけどもうあれ限界です",
        "letter": "I'm cutely eating eucalyptus, but I'm at my limit. I'm sick of it.",
        "pinyin": "ゆーかり？かわいくたべてますけどもうあれげんかいです"
    },
    "48": {
        "character": "１日それを１キロくらい食べるんですから",
        "letter": "I eat about one kilogram of that stuff a day.",
        "pinyin": "１にちそれを１きろくらいたべるんですから"
    },
    "49": {
        "character": "涙目にもなりますよ(-。-)",
        "letter": "You'd get teary-eyed, too, if you had to do it.",
        "pinyin": "なみだめにもなりますよ(-。-)"
    },
    "50": {
        "character": "わかるわかるよ～",
        "letter": "I know! I totally get you!",
        "pinyin": "わかるわかるよ～"
    },
    "51": {
        "character": "コアリクイくんも？",
        "letter": "You, too, Anteater?",
        "pinyin": "こありくいくんも？"
    },
    "52": {
        "character": "アリクイってやめて！",
        "letter": "I don't like the name Anteater!",
        "pinyin": "ありくいってやめて！"
    },
    "53": {
        "character": "僕だってねアリばっかり食べたくないよ！飽きたよ。",
        "letter": "I don't want to eat  only ants all the time! I'm sick of them!",
        "pinyin": "ぼくだってねありばっかりたべたくないよ！あきたよ。"
    },
    "54": {
        "character": "笹子さんアリばっかり食べる気持わかる？",
        "letter": "Do you know how it feels to have to eat ants all the time, Miss Sasako?!",
        "pinyin": "ささごさんありばっかりたべるきもちわかる？"
    },
    "55": {
        "character": "アリクイだからね",
        "letter": "Well, you are an anteater...",
        "pinyin": "ありくいだからね"
    },
    "56": {
        "character": "しかたないね",
        "letter": "You don't have much of a choice.",
        "pinyin": "しかたないね"
    },
    "57": {
        "character": "確かにそうだけどもっといろんなもの食べてみたいよ",
        "letter": "I know, but I want to eat other things, too!",
        "pinyin": "たしかにそうだけどもっといろんなものたべてみたいよ"
    },
    "58": {
        "character": "いろんなもの？",
        "letter": "Other things?",
        "pinyin": "いろんなもの？"
    },
    "59": {
        "character": "何食べたいの？",
        "letter": "Like what?",
        "pinyin": "なにたべたいの？"
    },
    "60": {
        "character": "ほらラーメンとかさ",
        "letter": "You know, like ramen!",
        "pinyin": "ほららーめんとかさ"
    },
    "61": {
        "character": "チャーシュー食べられないんじゃない？",
        "letter": "But I don't think you can eat chashu pork.",
        "pinyin": "ちゃーしゅーたべられないんじゃない？"
    },
    "62": {
        "character": "いいんだよ細かいところは",
        "letter": "You don't have to be concerned with the little things.",
        "pinyin": "いいんだよこまかいところは"
    },
    "63": {
        "character": "見てくれるだけいいじゃないですか",
        "letter": "At least people look at you.",
        "pinyin": "みてくれるだけいいじゃないですか"
    },
    "64": {
        "character": "ラマさん？",
        "letter": "Mr. Llama?",
        "pinyin": "らまさん？"
    },
    "65": {
        "character": "僕なんてみんなほぼ素通りですよ",
        "letter": "Everyone pretty much passes right by me.",
        "pinyin": "ぼくなんてみんなほぼすどおりですよ"
    },
    "66": {
        "character": "いるの気づいてます？",
        "letter": "Did you even know I was there?",
        "pinyin": "いるのきづいてます？"
    },
    "67": {
        "character": "そういえば…",
        "letter": "Come to think of it...",
        "pinyin": "そういえば…"
    },
    "68": {
        "character": "動物園に行ったとき…",
        "letter": "When we went to the zoo...",
        "pinyin": "どうぶつえんにいったとき…"
    },
    "69": {
        "character": "みごとに素通りしたね",
        "letter": "We did pretty much pass right by.",
        "pinyin": "みごとにすどおりしたね"
    },
    "70": {
        "character": "ほらねラマなんてそんなものですよ",
        "letter": "See? That's how it is, being a llama.",
        "pinyin": "ほらねらまなんてそんなものですよ"
    },
    "71": {
        "character": "行列つくって感想とか言ってほしいですΣ(￣д￣)",
        "letter": "I wish people would look longer, and form huge lines to tell me what they think of me.",
        "pinyin": "ぎょうれつつくってかんそうとかいってほしいですしぐま(￣д￣)"
    },
    "72": {
        "character": "わぁ～いラマさん！",
        "letter": "Wow, it's a llama!",
        "pinyin": "わぁ～いらまさん！"
    },
    "73": {
        "character": "おい見ろよ！草食ってるぞ！写真写真撮れって！",
        "letter": "Look, it's eating grass! Hurry! Take a picture!",
        "pinyin": "おいみろよ！くさくってるぞ！しゃしんしゃしんとれって！"
    },
    "74": {
        "character": "草食べてるだけ？",
        "letter": "You just eat grass?",
        "pinyin": "くさたべてるだけ？"
    },
    "75": {
        "character": "地味だね",
        "letter": "That's a little boring.",
        "pinyin": "じみだね"
    },
    "76": {
        "character": "ラマさんってロバなの？",
        "letter": "Are you a donkey, Mr. Llama?",
        "pinyin": "らまさんってろばなの？"
    },
    "77": {
        "character": "だからラマです",
        "letter": "As I said, I'm a llama.",
        "pinyin": "だかららまです"
    },
    "78": {
        "character": "どっちかというとラクダです",
        "letter": "If you had to compare, I'm closer to a camel.",
        "pinyin": "どっちかというとらくだです"
    },
    "79": {
        "character": "コブは？",
        "letter": "Do you have a hump?",
        "pinyin": "こぶは？"
    },
    "80": {
        "character": "ないです",
        "letter": "I do not.",
        "pinyin": "ないです"
    },
    "81": {
        "character": "あの…何か芸とかないんですか？",
        "letter": "Can you do any tricks or anything?",
        "pinyin": "あの…なにかげいとかないんですか？"
    },
    "82": {
        "character": "草を食べるくらいです",
        "letter": "Just eating grass.",
        "pinyin": "くさをたべるくらいです"
    },
    "83": {
        "character": "できるといいね行列",
        "letter": "I hope you get that huge line of yours.",
        "pinyin": "できるといいねぎょうれつ"
    },
    "84": {
        "character": "見られればいいってもんじゃないよ",
        "letter": "Being looked at isn't all that great.",
        "pinyin": "みられればいいってもんじゃないよ"
    },
    "85": {
        "character": "バクさん",
        "letter": "Mr. Tapir.",
        "pinyin": "ばくさん"
    },
    "86": {
        "character": "僕なんて夢を食べる動物って言われがちだけど",
        "letter": "I'm rumored to be an animal that eats dreams,",
        "pinyin": "ぼくなんてゆめをたべるどうぶつっていわれがちだけど"
    },
    "87": {
        "character": "見た人に夢がないなんて言われてさ",
        "letter": "but everyone who sees me is unimpressed.",
        "pinyin": "みたひとにゆめがないなんていわれてさ"
    },
    "88": {
        "character": "夢を食べる動物って何？",
        "letter": "What kind of animal eats dreams, anyway?",
        "pinyin": "ゆめをたべるどうぶつってなに？"
    },
    "89": {
        "character": "ハードル上げすぎなんだよ",
        "letter": "They're setting the bar much too high.",
        "pinyin": "はーどるあげすぎなんだよ"
    },
    "90": {
        "character": "まぁまぁ…ジュゴンさんよりはいいよ",
        "letter": "Now, now. You're better off than the sea cow.",
        "pinyin": "まぁまぁ…じゅごんさんよりはいいよ"
    },
    "91": {
        "character": "人魚って前振りされてるんだから",
        "letter": "They get compared to mermaids.",
        "pinyin": "にんぎょってまえぶりされてるんだから"
    },
    "92": {
        "character": "ママ！人魚さんどこ？",
        "letter": "Mommy, where's the mermaid?",
        "pinyin": "まま！にんぎょさんどこ？"
    },
    "93": {
        "character": "見た人みんな黙っちゃうよ",
        "letter": "Everyone who sees it doesn't know what to say.",
        "pinyin": "みたひとみんなだまっちゃうよ"
    },
    "94": {
        "character": "ねぇ？",
        "letter": "Right?",
        "pinyin": "ねぇ？"
    },
    "95": {
        "character": "私に聞かないでください…",
        "letter": "Please don't ask me.",
        "pinyin": "わたしにきかないでください…"
    },
    "96": {
        "character": "あぁそうだね…",
        "letter": "You have a point.",
        "pinyin": "あぁそうだね…"
    },
    "97": {
        "character": "ジュゴンさんに比べたら僕はまだマシかもね",
        "letter": "If you compare me to Ms. Sea Cow, I'm probably better off.",
        "pinyin": "じゅごんさんにくらべたらぼくはまだましかもね"
    },
    "98": {
        "character": "僕も…",
        "letter": "Me, too...",
        "pinyin": "ぼくも…"
    },
    "99": {
        "character": "ナマケモノくん",
        "letter": "Sloth.",
        "pinyin": "なまけものくん"
    },
    "100": {
        "character": "動物園とは関係ないけど…",
        "letter": "I'm not associated with the zoo, but...",
        "pinyin": "どうぶつえんとはかんけいないけど…"
    },
    "101": {
        "character": "僕って一日中木にぶら下がってるイメージあるけど…",
        "letter": "People think I just hang from a tree all day.",
        "pinyin": "ぼくっていちにちじゅうきにぶらさがってるいめーじあるけど…"
    },
    "102": {
        "character": "実際どうなの？",
        "letter": "And in reality?",
        "pinyin": "じっさいどうなの？"
    },
    "103": {
        "character": "実際そうだけど…大変腕パンパン",
        "letter": "I do in reality... But it's hard. My arms tingle.",
        "pinyin": "じっさいそうだけど…たいへんうでぱんぱん"
    },
    "104": {
        "character": "一日中木にぶら下がったことある？笹子さん",
        "letter": "Have you ever hung from a tree all day, Miss Sasako?",
        "pinyin": "いちにちじゅうきにぶらさがったことある？ささごさん"
    },
    "105": {
        "character": "ナマケモノくんってナマケモノじゃないな",
        "letter": "I guess Sloth isn't really a sloth.",
        "pinyin": "なまけものくんってなまけものじゃないな"
    },
    "106": {
        "character": "頑張り者だね",
        "letter": "He's a really hard worker.",
        "pinyin": "がんばりしゃだね"
    },
    "107": {
        "character": "もっと言って",
        "letter": "Tell me more.",
        "pinyin": "もっといって"
    },
    "108": {
        "character": "みんな悩んでるんだな",
        "letter": "Apparently everyone has problems.",
        "pinyin": "みんななやんでるんだな"
    },
    "109": {
        "character": "実は好きなペンギンがいてさ",
        "letter": "I have a problem too. You see, I have this penguin that I like.",
        "pinyin": "じつはすきなぺんぎんがいてさ"
    },
    "110": {
        "character": "誰にも言わないでほしいんだけどね",
        "letter": "Don't tell anyone though, okay?",
        "pinyin": "だれにもいわないでほしいんだけどね"
    },
    "111": {
        "character": "あぁやっぱりいろいろと皆さん悩みが尽きないんですね",
        "letter": "It seems that there isn't an end to everyone's problems.",
        "pinyin": "あぁやっぱりいろいろとみなさんなやみがつきないんですね"
    },
    "112": {
        "character": "そうだよね",
        "letter": "You're right.",
        "pinyin": "そうだよね"
    },
    "113": {
        "character": "ほんとですね",
        "letter": "No kidding.",
        "pinyin": "ほんとですね"
    },
    "114": {
        "character": "ちょっと聞いてよ",
        "letter": "Hey, listen to me.",
        "pinyin": "ちょっときいてよ"
    },
    "115": {
        "character": "シロクマさんは悩みはないの？",
        "letter": "Don't you have any problems, Mr. Polar Bear?",
        "pinyin": "しろくまさんはなやみはないの？"
    },
    "116": {
        "character": "あるよ",
        "letter": "I do.",
        "pinyin": "あるよ"
    },
    "117": {
        "character": "え？そうなの？意外",
        "letter": "Really? You do? That's unexpected.",
        "pinyin": "え？そうなの？いがい"
    },
    "118": {
        "character": "アイドルにならないかって言われてるんだけど",
        "letter": "I've been asked if I wanted to become an idol,",
        "pinyin": "あいどるにならないかっていわれてるんだけど"
    },
    "119": {
        "character": "アイドルと学業の両立がねぇ",
        "letter": "but fitting that in with my studies would be hard.",
        "pinyin": "あいどるとがくぎょうのりょうりつがねぇ"
    },
    "120": {
        "character": "また嘘ばっかり",
        "letter": "There you go, lying again.",
        "pinyin": "またうそばっかり"
    },
    "121": {
        "character": "笹子さんは？",
        "letter": "How about you, Miss Sasako?",
        "pinyin": "ささごさんは？"
    },
    "122": {
        "character": "え？ありません",
        "letter": "I don't have any.",
        "pinyin": "え？ありません"
    },
    "123": {
        "character": "ひとつも？",
        "letter": "Not even one?",
        "pinyin": "ひとつも？"
    },
    "124": {
        "character": "はい",
        "letter": "Indeed.",
        "pinyin": "はい"
    },
    "125": {
        "character": "あ…",
        "letter": "Uh...",
        "pinyin": "あ…"
    },
    "126": {
        "character": "ん？何？",
        "letter": "What is it?",
        "pinyin": "ん？なに？"
    },
    "127": {
        "character": "雛人形って燃えるゴミなのか、燃えないゴミなのかどっちなんだろうって",
        "letter": "I was wondering if Hina dolls should go with the burnable or non-burnable garbage.",
        "pinyin": "ひなにんぎょうってもえるごみなのか、もえないごみなのかどっちなんだろうって"
    },
    "128": {
        "character": "いいかな？それはあとで",
        "letter": "How about we discuss that later?",
        "pinyin": "いいかな？それはあとで"
    },
    "129": {
        "character": "僕なんてさパン屋に行くたびに思うよ",
        "letter": "Every time I go to the bakery, I think about it.",
        "pinyin": "ぼくなんてさぱんやにいくたびにおもうよ"
    },
    "130": {
        "character": "いい？誰にも言わないでよ",
        "letter": "Listen, don't tell anyone, okay?",
        "pinyin": "いい？だれにもいわないでよ"
    },
    "131": {
        "character": "どうやって告白しようか悩みは尽きないよ",
        "letter": "I keep trying to figure out how to ask her out.",
        "pinyin": "どうやってこくはくしようかなやみはつきないよ"
    },
    "132": {
        "character": "どう思う？パンダくん",
        "letter": "What do you think, Panda?",
        "pinyin": "どうおもう？ぱんだくん"
    },
    "133": {
        "character": "フフフ…",
        "letter": "Hmph...",
        "pinyin": "ふふふ…"
    },
    "134": {
        "character": "ちょっと笑いごとじゃないよ",
        "letter": "Hey, this is no laughing matter.",
        "pinyin": "ちょっとわらいごとじゃないよ"
    },
    "135": {
        "character": "寝てる！W(ﾟДﾟ)w",
        "letter": "He's asleep!",
        "pinyin": "ねてる！W(゜Д゜)w"
    },
    "136": {
        "character": "えぇと…",
        "letter": "Hm...",
        "pinyin": "えぇと…"
    },
    "137": {
        "character": "いつから寝てたんですかね？",
        "letter": "I wonder how long he's been asleep.",
        "pinyin": "いつからねてたんですかね？"
    },
    "138": {
        "character": "チャーシューの話のあとくらいじゃない？",
        "letter": "Probably somewhere right after the talk of chashu pork.",
        "pinyin": "ちゃーしゅーのはなしのあとくらいじゃない？"
    },
    "139": {
        "character": "前半ですね",
        "letter": "So somewhere at the beginning of the conversation.",
        "pinyin": "ぜんはんですね"
    },
    "140": {
        "character": "あっシロクマさん",
        "letter": "Oh, Mr. Polar Bear.",
        "pinyin": "あっしろくまさん"
    },
    "141": {
        "character": "おかわりお願いします",
        "letter": "Could I get seconds, please?",
        "pinyin": "おかわりおねがいします"
    },
    "142": {
        "character": "うん",
        "letter": "Sure.",
        "pinyin": "うん"
    },
    "143": {
        "character": "自然体かぁ",
        "letter": "Acting naturally,' huh?",
        "pinyin": "しぜんたいかぁ"
    },
    "144": {
        "character": "どうしたらいいんだろう…",
        "letter": "I wonder what I should do?",
        "pinyin": "どうしたらいいんだろう…"
    },
    "145": {
        "character": "パンダくんすっかり自然体だね",
        "letter": "Panda is totally acting naturally right now.",
        "pinyin": "ぱんだくんすっかりしぜんたいだね"
    },
    "146": {
        "character": "そうですね",
        "letter": "Indeed he is.",
        "pinyin": "そうですね"
    },
    "147": {
        "character": "いらっしゃい(＾?＾）／＼(＾?＾）",
        "letter": "Welcome.",
        "pinyin": "いらっしゃい(＾?＾）／＼(＾?＾）"
    },
    "148": {
        "character": "はぁ…今日は疲れちゃった",
        "letter": "I'm so tired today.",
        "pinyin": "はぁ…きょうはつかれちゃった"
    },
    "149": {
        "character": "パンダくん",
        "letter": "Hey, Panda.",
        "pinyin": "ぱんだくん"
    },
    "150": {
        "character": "なぁに？",
        "letter": "What?",
        "pinyin": "なぁに？"
    },
    "151": {
        "character": "あれからずっと考えてたんだけどさ",
        "letter": "I've been thinking since then...",
        "pinyin": "あれからずっとかんがえてたんだけどさ"
    },
    "152": {
        "character": "パンダくんにとって自然体っていうのはさ",
        "letter": "Acting naturally' for you is",
        "pinyin": "ぱんだくんにとってしぜんたいっていうのはさ"
    },
    "153": {
        "character": "君がいちばんリラックスできる場所",
        "letter": "being in the place you can relax the most.",
        "pinyin": "きみがいちばんりらっくすできるばしょ"
    },
    "154": {
        "character": "あっ！",
        "letter": "Oh!",
        "pinyin": "あっ！"
    },
    "155": {
        "character": "つまりさ…",
        "letter": "Meaning―",
        "pinyin": "つまりさ…"
    },
    "156": {
        "character": "そんなことよりペンギンさん",
        "letter": "Never mind that, Mr. Penguin.",
        "pinyin": "そんなことよりぺんぎんさん"
    },
    "157": {
        "character": "新しいパンダグッズ買っちゃったんだけど",
        "letter": "I bought new panda merchandise.",
        "pinyin": "あたらしいぱんだぐっずかっちゃったんだけど"
    },
    "158": {
        "character": "何入れればいいと思う？O(*≧▽≦)ツ",
        "letter": "What do you think I should put in here?",
        "pinyin": "なにいれればいいとおもう？O(*≧▽≦)つ"
    },
    "159": {
        "character": "肉まんでいいんじゃない？",
        "letter": "How about a meat bun?",
        "pinyin": "にくまんでいいんじゃない？"
    },
    "160": {
        "character": "ペンギンさんペンギンさん",
        "letter": "Mr. Penguin, Mr. Penguin!",
        "pinyin": "ぺんぎんさんぺんぎんさん"
    },
    "161": {
        "character": "しろくまカフェが来週から駐車場になっちゃうって本当",
        "letter": "Is it true that Polar Bear's Café is being turned into a parking lot next week?",
        "pinyin": "しろくまかふぇがらいしゅうからちゅうしゃじょうになっちゃうってほんとう"
    },
    "162": {
        "character": "そんな噂聞いてないよ",
        "letter": "I didn't hear a rumor like that.",
        "pinyin": "そんなうわさきいてないよ"
    },
    "163": {
        "character": "やっぱりプチ整形してない",
        "letter": "Are you sure you haven't had plastic surgery?",
        "pinyin": "やっぱりぷちせいけいしてない"
    },
    "164": {
        "character": "してないよ",
        "letter": "I did not.",
        "pinyin": "してないよ"
    },
    "165": {
        "character": "だから逆にどこを見て思ったの",
        "letter": "I ask again, what makes you think I did?",
        "pinyin": "だからぎゃくにどこをみておもったの"
    },
    "166": {
        "character": "しろくまくん終わって",
        "letter": "Polar Bear, could you finish it?",
        "pinyin": "しろくまくんおわって"
    },
    "167": {
        "character": "次回のしろくま???",
        "letter": "Next time on Polar Bear's...",
        "pinyin": "じかいのしろくま???"
    },
    "168": {
        "character": "カフェでしょう忘れちゃった",
        "letter": "It's 'Café.' Did you actually forget?",
        "pinyin": "かふぇでしょうわすれちゃった"
    },
    "169": {
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