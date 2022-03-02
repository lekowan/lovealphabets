// Configuration
const localStorageKey = "japanese" + "Episode20" + "Srs";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 20. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "憧れの一人暮らし",
        "letter": "My dream life alone",
        "pinyin": "あこがれのひとりぐらし"
    },
    "2": {
        "character": "ねぇねぇペンギンさん",
        "letter": "Hey, hey, Mr. Penguin.",
        "pinyin": "ねぇねぇぺんぎんさん"
    },
    "3": {
        "character": "僕に向いてると思わない？",
        "letter": "Don't you think I'd be good at this?",
        "pinyin": "ぼくにむいてるとおもわない？"
    },
    "4": {
        "character": "え動物園のバイト？やっと本気出すの",
        "letter": "A job at the zoo? I'm finally getting serious.",
        "pinyin": "えどうぶつえんのばいと？やっとほんきだすの"
    },
    "5": {
        "character": "違うよ一人暮らしだよ",
        "letter": "No, I'm living alone.",
        "pinyin": "ちがうよひとりぐらしだよ"
    },
    "6": {
        "character": "一人暮らし？",
        "letter": "Living alone?",
        "pinyin": "ひとりぐらし？"
    },
    "7": {
        "character": "何また家出するの",
        "letter": "What are you doing, running away from home again?",
        "pinyin": "なにまたいえでするの"
    },
    "8": {
        "character": "家出じゃないよ一人暮らし",
        "letter": "I'm not running away, I'm living alone.",
        "pinyin": "いえでじゃないよひとりぐらし"
    },
    "9": {
        "character": "一人一人",
        "letter": "One person at a time.",
        "pinyin": "ひとりひとり"
    },
    "10": {
        "character": "パンダくんが？無理でしょ",
        "letter": "A panda? That's impossible.",
        "pinyin": "ぱんだくんが？むりでしょ"
    },
    "11": {
        "character": "即答ですね",
        "letter": "That's a quick answer.",
        "pinyin": "そくとうですね"
    },
    "12": {
        "character": "即答",
        "letter": "Quick answer.",
        "pinyin": "そくとう"
    },
    "13": {
        "character": "それは木刀",
        "letter": "That's a wooden sword.",
        "pinyin": "それはぼくとう"
    },
    "14": {
        "character": "それは格闘",
        "letter": "That's fighting.",
        "pinyin": "それはかくとう"
    },
    "15": {
        "character": "それは食堂",
        "letter": "That's a diner.",
        "pinyin": "それはしょくどう"
    },
    "16": {
        "character": "それは給湯",
        "letter": "That's hot water.",
        "pinyin": "それはきゅうとう"
    },
    "17": {
        "character": "いいよね休養",
        "letter": "It's good to rest.",
        "pinyin": "いいよねきゅうよう"
    },
    "18": {
        "character": "たまにはのんびりしたいね",
        "letter": "It's nice to take it easy once in a while.",
        "pinyin": "たまにはのんびりしたいね"
    },
    "19": {
        "character": "いいよねのんびり",
        "letter": "It's nice to relax",
        "pinyin": "いいよねのんびり"
    },
    "20": {
        "character": "一人暮らししたいな",
        "letter": "I want to live alone.",
        "pinyin": "ひとりぐらししたいな"
    },
    "21": {
        "character": "いつものんびりしてるじゃない",
        "letter": "You're always taking it easy.",
        "pinyin": "いつものんびりしてるじゃない"
    },
    "22": {
        "character": "違うよ僕はのんびり一人暮らしがしたいんだよ",
        "letter": "No, I just want to live alone and relax.",
        "pinyin": "ちがうよぼくはのんびりひとりぐらしがしたいんだよ"
    },
    "23": {
        "character": "え～大変だよ",
        "letter": "It's hard work.",
        "pinyin": "え～たいへんだよ"
    },
    "24": {
        "character": "自分のことは自分でしなくちゃいけないから",
        "letter": "I'd have to take care of myself.",
        "pinyin": "じぶんのことはじぶんでしなくちゃいけないから"
    },
    "25": {
        "character": "それがいいんじゃない",
        "letter": "I think that's good.",
        "pinyin": "それがいいんじゃない"
    },
    "26": {
        "character": "パンダくんひょっとして過剰な夢見てない",
        "letter": "You're not dreaming too much, are you, panda?",
        "pinyin": "ぱんだくんひょっとしてかじょうなゆめみてない"
    },
    "27": {
        "character": "どういう生活考えてるの？",
        "letter": "What kind of life do you have in mind?",
        "pinyin": "どういうせいかつかんがえてるの？"
    },
    "28": {
        "character": "聞く？",
        "letter": "Do you want to ask?",
        "pinyin": "きく？"
    },
    "29": {
        "character": "いややめとく",
        "letter": "No, I'm not.",
        "pinyin": "いややめとく"
    },
    "30": {
        "character": "えっと…",
        "letter": "Well...",
        "pinyin": "えっと…"
    },
    "31": {
        "character": "話すの？",
        "letter": "Do you talk?",
        "pinyin": "はなすの？"
    },
    "32": {
        "character": "朝はね大きなベッドで目を覚ますの",
        "letter": "In the morning, I wake up in my big bed.",
        "pinyin": "あさはねおおきなべっどでめをさますの"
    },
    "33": {
        "character": "そしたらカーテンが開いて",
        "letter": "And then the curtains open.",
        "pinyin": "そしたらかーてんがひらいて"
    },
    "34": {
        "character": "都会の景色がダーッて広がって",
        "letter": "The view of the city spreads out before me.",
        "pinyin": "とかいのけしきがだーってひろがって"
    },
    "35": {
        "character": "その下には一面の竹林",
        "letter": "And underneath, a bamboo forest.",
        "pinyin": "そのしたにはいちめんのたけばやし"
    },
    "36": {
        "character": "都会なのか竹林なのかどっちかにしてよ",
        "letter": "It's either the city or the bamboo forest.",
        "pinyin": "とかいなのかたけばやしなのかどっちかにしてよ"
    },
    "37": {
        "character": "起きたらねその景色を眺めながら…",
        "letter": "When I wake up... with that view...",
        "pinyin": "おきたらねそのけしきをながめながら…"
    },
    "38": {
        "character": "朝はフレッシュジュースで目覚めるんだ",
        "letter": "I wake up with a fresh juice.",
        "pinyin": "あさはふれっしゅじゅーすでめざめるんだ"
    },
    "39": {
        "character": "それってもしかして笹ジュース？",
        "letter": "Is that bamboo grass juice, by any chance?",
        "pinyin": "それってもしかしてささじゅーす？"
    },
    "40": {
        "character": "笹ジュースのあとは…",
        "letter": "After the bamboo juice...",
        "pinyin": "ささじゅーすのあとは…"
    },
    "41": {
        "character": "笹でしょ",
        "letter": "Bamboos.",
        "pinyin": "ささでしょ"
    },
    "42": {
        "character": "何だか全体緑だね",
        "letter": "It's all green.",
        "pinyin": "なんだかぜんたいみどりだね"
    },
    "43": {
        "character": "っていうかいつもと同じじゃない",
        "letter": "I mean, it's the same as always.",
        "pinyin": "っていうかいつもとおなじじゃない"
    },
    "44": {
        "character": "一人暮らしなんてする必要ある？",
        "letter": "Why do you have to live alone?",
        "pinyin": "ひとりぐらしなんてするひつようある？"
    },
    "45": {
        "character": "それで聞いて",
        "letter": "So, listen.",
        "pinyin": "それできいて"
    },
    "46": {
        "character": "ノックの音がしたら…",
        "letter": "If you hear a knock at the door...",
        "pinyin": "のっくのおとがしたら…"
    },
    "47": {
        "character": "おはようございますパンダ様",
        "letter": "Good morning, panda.",
        "pinyin": "おはようございますぱんださま"
    },
    "48": {
        "character": "何で僕？",
        "letter": "Why me?",
        "pinyin": "なんでぼく？"
    },
    "49": {
        "character": "本日のご予定は",
        "letter": "What are your plans for today?",
        "pinyin": "ほんじつのごよていは"
    },
    "50": {
        "character": "１０時からゴロゴロ１２時からご昼食",
        "letter": "10:00 a.m. rumble, 12:00 p.m. lunch.",
        "pinyin": "１０じからごろごろ１２じからごちゅうしょく"
    },
    "51": {
        "character": "１時からゴロゴロ",
        "letter": "Rumble at 1:00.",
        "pinyin": "１じからごろごろ"
    },
    "52": {
        "character": "３時のおやつののちゴロゴロとなっております",
        "letter": "We will have a snack at 3:00, and then go to sleep.",
        "pinyin": "３じのおやつののちごろごろとなっております"
    },
    "53": {
        "character": "レストランに到着したら…",
        "letter": "When you arrive at the restaurant...",
        "pinyin": "れすとらんにとうちゃくしたら…"
    },
    "54": {
        "character": "いらっしゃいませ",
        "letter": "Welcome!",
        "pinyin": "いらっしゃいませ"
    },
    "55": {
        "character": "お待ちしておりましたパンダ様",
        "letter": "We've been waiting for you, panda.",
        "pinyin": "おまちしておりましたぱんださま"
    },
    "56": {
        "character": "え～っそれも僕？",
        "letter": "Is that me too?",
        "pinyin": "え～っそれもぼく？"
    },
    "57": {
        "character": "お店のテーブルについたら豪華なディナーが用意されてるの",
        "letter": "When you get to the table at the restaurant, a sumptuous dinner has been prepared for you.",
        "pinyin": "おみせのてーぶるについたらごうかなでぃなーがよういされてるの"
    },
    "58": {
        "character": "どうぞお召し上がりください",
        "letter": "Please enjoy your meal.",
        "pinyin": "どうぞおめしあがりください"
    },
    "59": {
        "character": "まぁまぁだね",
        "letter": "That's not so bad.",
        "pinyin": "まぁまぁだね"
    },
    "60": {
        "character": "バイトの気分じゃないな",
        "letter": "I'm not in the mood for a part-time job.",
        "pinyin": "ばいとのきぶんじゃないな"
    },
    "61": {
        "character": "代わりに行ってきてくれる？",
        "letter": "Can you go and do it for me?",
        "pinyin": "かわりにいってきてくれる？"
    },
    "62": {
        "character": "かしこまりました",
        "letter": "Yes, ma'am.",
        "pinyin": "かしこまりました"
    },
    "63": {
        "character": "何で僕が？",
        "letter": "Why would I do that?",
        "pinyin": "なんでぼくが？"
    },
    "64": {
        "character": "っていうかそれだと一人暮らしじゃないよね",
        "letter": "I mean, that's not living alone, is it?",
        "pinyin": "っていうかそれだとひとりぐらしじゃないよね"
    },
    "65": {
        "character": "楽しくなってきたな早く一人暮らししたいよ",
        "letter": "I can't wait to live alone.",
        "pinyin": "たのしくなってきたなはやくひとりぐらししたいよ"
    },
    "66": {
        "character": "そんな物件あるわけないでしょ！",
        "letter": "I can't believe there's such a place!",
        "pinyin": "そんなぶっけんあるわけないでしょ！"
    },
    "67": {
        "character": "ありますよ",
        "letter": "Yes, there is.",
        "pinyin": "ありますよ"
    },
    "68": {
        "character": "一人暮らし用の物件ですよね？",
        "letter": "It's for a single person, right?",
        "pinyin": "ひとりぐらしようのぶっけんですよね？"
    },
    "69": {
        "character": "６畳に押し入れつきですから",
        "letter": "It's 6 tatami mats with a closet.",
        "pinyin": "６じょうにおしいれつきですから"
    },
    "70": {
        "character": "一人暮らしには広めだと思いますよ",
        "letter": "I think it's spacious for a single person.",
        "pinyin": "ひとりぐらしにはひろめだとおもいますよ"
    },
    "71": {
        "character": "ちゃんとゴロゴロもできますし",
        "letter": "You can even lounge around.",
        "pinyin": "ちゃんとごろごろもできますし"
    },
    "72": {
        "character": "窓からは竹林も見えますしね",
        "letter": "And you can see the bamboo grove from the window.",
        "pinyin": "まどからはたけばやしもみえますしね"
    },
    "73": {
        "character": "なんかもうちょっと…ワーッとしてダーッとしてるのがいいんだけど",
        "letter": "I'd like it to be a little more open and airy, but...",
        "pinyin": "なんかもうちょっと…わーっとしてだーっとしてるのがいいんだけど"
    },
    "74": {
        "character": "ワーッとしてダーッ…",
        "letter": "Warbling and darting...",
        "pinyin": "わーっとしてだーっ…"
    },
    "75": {
        "character": "曖昧すぎるでしょパンダくん",
        "letter": "You're too vague, panda.",
        "pinyin": "あいまいすぎるでしょぱんだくん"
    },
    "76": {
        "character": "すみません…",
        "letter": "I'm sorry.",
        "pinyin": "すみません…"
    },
    "77": {
        "character": "ありますよワーッとしてダーッ",
        "letter": "There is such a thing as warp and dart.",
        "pinyin": "ありますよわーっとしてだーっ"
    },
    "78": {
        "character": "本当？",
        "letter": "Really?",
        "pinyin": "ほんとう？"
    },
    "79": {
        "character": "なんか普通だね",
        "letter": "That's pretty normal.",
        "pinyin": "なんかふつうだね"
    },
    "80": {
        "character": "ワーッとしてませんか？",
        "letter": "You don't get all worked up?",
        "pinyin": "わーっとしてませんか？"
    },
    "81": {
        "character": "してない",
        "letter": "No.",
        "pinyin": "してない"
    },
    "82": {
        "character": "ダーッとは？",
        "letter": "No darting?",
        "pinyin": "だーっとは？"
    },
    "83": {
        "character": "パンダくんの理想が高すぎるんだよ",
        "letter": "Your ideals are too high, panda.",
        "pinyin": "ぱんだくんのりそうがたかすぎるんだよ"
    },
    "84": {
        "character": "そんなことないよ",
        "letter": "That's not true.",
        "pinyin": "そんなことないよ"
    },
    "85": {
        "character": "絶対どこかにあるはずだよ",
        "letter": "I'm sure it's out there somewhere.",
        "pinyin": "ぜったいどこかにあるはずだよ"
    },
    "86": {
        "character": "僕の理想の一人暮らしハウス",
        "letter": "My ideal house.",
        "pinyin": "ぼくのりそうのひとりぐらしはうす"
    },
    "87": {
        "character": "あるかなぁ…",
        "letter": "I wonder if there is...",
        "pinyin": "あるかなぁ…"
    },
    "88": {
        "character": "だってペンギンさんがいるものあとは家だけでしょ？",
        "letter": "I mean, with Mr. Penguin around, all that's left is the house, right?",
        "pinyin": "だってぺんぎんさんがいるものあとはいえだけでしょ？"
    },
    "89": {
        "character": "僕を理想の一部に組み込まないでくれる？",
        "letter": "Don't make me a part of your dream, okay?",
        "pinyin": "ぼくをりそうのいちぶにくみこまないでくれる？"
    },
    "90": {
        "character": "ああ…絶対あるはずなんだ",
        "letter": "Oh... there's got to be.",
        "pinyin": "ああ…ぜったいあるはずなんだ"
    },
    "91": {
        "character": "竹林！そうそうこんな感じの竹林が理想だよ",
        "letter": "A bamboo forest! Yeah, a bamboo grove like this would be ideal.",
        "pinyin": "たけばやし！そうそうこんなかんじのたけばやしがりそうだよ"
    },
    "92": {
        "character": "あっ…ちょっ…ちょっと！パンダくん！",
        "letter": "Wait, wait, wait! Panda!",
        "pinyin": "あっ…ちょっ…ちょっと！ぱんだくん！"
    },
    "93": {
        "character": "うわ～っ…いい感じ",
        "letter": "It's so nice.",
        "pinyin": "うわ～っ…いいかんじ"
    },
    "94": {
        "character": "ワーッとしてダーッとしてるよ！",
        "letter": "It's so warm and cozy!",
        "pinyin": "わーっとしてだーっとしてるよ！"
    },
    "95": {
        "character": "こんなところに住みたいな…",
        "letter": "I want to live in a place like this...",
        "pinyin": "こんなところにすみたいな…"
    },
    "96": {
        "character": "はあ？って…ここパンダくんちじゃないの？",
        "letter": "Huh? Isn't this the panda's house?",
        "pinyin": "はあ？って…ここぱんだくんちじゃないの？"
    },
    "97": {
        "character": "あっ本当だ",
        "letter": "Oh, it's true.",
        "pinyin": "あっほんとうだ"
    },
    "98": {
        "character": "やっぱり一人暮らしする必要なんてないんじゃない？",
        "letter": "I guess I don't have to live alone after all.",
        "pinyin": "やっぱりひとりぐらしするひつようなんてないんじゃない？"
    },
    "99": {
        "character": "あれ？",
        "letter": "Huh?",
        "pinyin": "あれ？"
    },
    "100": {
        "character": "アナグマくんじゃない？",
        "letter": "Isn't that Badger?",
        "pinyin": "あなぐまくんじゃない？"
    },
    "101": {
        "character": "何してんの？物件探し？",
        "letter": "What are you doing? Looking for a place?",
        "pinyin": "なにしてんの？ぶっけんさがし？"
    },
    "102": {
        "character": "あっ…もう耐えられなくてさ",
        "letter": "I just couldn't take it anymore.",
        "pinyin": "あっ…もうたえられなくてさ"
    },
    "103": {
        "character": "大失敗",
        "letter": "Big mistake.",
        "pinyin": "だいしっぱい"
    },
    "104": {
        "character": "パンダくんしっかり聞いておいたほうがいいよ",
        "letter": "You should have listened to me, panda.",
        "pinyin": "ぱんだくんしっかりきいておいたほうがいいよ"
    },
    "105": {
        "character": "一人暮らしっていいことばかりじゃないんだから",
        "letter": "Living alone isn't all it's cracked up to be.",
        "pinyin": "ひとりぐらしっていいことばかりじゃないんだから"
    },
    "106": {
        "character": "フローリングの部屋はよくないよ引っ越したい",
        "letter": "Wooden floors aren't good.",
        "pinyin": "ふろーりんぐのへやはよくないよひっこしたい"
    },
    "107": {
        "character": "えっそうなの？掃除しやすくない？",
        "letter": "Really? Isn't that easy to clean?",
        "pinyin": "えっそうなの？そうじしやすくない？"
    },
    "108": {
        "character": "掃除ならペンギンさんに頼めばいいよ",
        "letter": "If you want to clean, you can ask Mr. Penguin.",
        "pinyin": "そうじならぺんぎんさんにたのめばいいよ"
    },
    "109": {
        "character": "だから僕を召し使いにしないで！",
        "letter": "So don't make me your servant!",
        "pinyin": "だからぼくをめしつかいにしないで！"
    },
    "110": {
        "character": "どうして引っ越したいの？",
        "letter": "Why do you want to move?",
        "pinyin": "どうしてひっこしたいの？"
    },
    "111": {
        "character": "だって…",
        "letter": "Because...",
        "pinyin": "だって…"
    },
    "112": {
        "character": "穴…穴掘れなくて…もう辛くて辛くて",
        "letter": "I can't... dig a hole... and I'm having a hard time.",
        "pinyin": "あな…あなほれなくて…もうからくてからくて"
    },
    "113": {
        "character": "え～…そんなに辛いかな？",
        "letter": "Is it really that hard?",
        "pinyin": "え～…そんなにからいかな？"
    },
    "114": {
        "character": "パンダくんでいうとゴロゴロを止められるくらい辛いと思うよ",
        "letter": "If you were a panda, I'd say it's as hard as having to stop rumbling.",
        "pinyin": "ぱんだくんでいうとごろごろをとめられるくらいからいとおもうよ"
    },
    "115": {
        "character": "ハッ…それは辛いね",
        "letter": "Haha... that's harsh.",
        "pinyin": "はっ…それはからいね"
    },
    "116": {
        "character": "他のみんなはどんなところに住んでるんだろうね？",
        "letter": "I wonder what kind of place everyone else lives in?",
        "pinyin": "ほかのみんなはどんなところにすんでるんだろうね？"
    },
    "117": {
        "character": "いらっしゃい！",
        "letter": "Come on!",
        "pinyin": "いらっしゃい！"
    },
    "118": {
        "character": "近い近い近い",
        "letter": "Close, close, close.",
        "pinyin": "ちかいちかいちかい"
    },
    "119": {
        "character": "さあどうぞ",
        "letter": "Come on in.",
        "pinyin": "さあどうぞ"
    },
    "120": {
        "character": "ゆっくりくつろいでください",
        "letter": "Make yourself at home.",
        "pinyin": "ゆっくりくつろいでください"
    },
    "121": {
        "character": "いらっしゃい",
        "letter": "Come on.",
        "pinyin": "いらっしゃい"
    },
    "122": {
        "character": "すごいねコアリクイくん",
        "letter": "That's great, Mr. Koalikui.",
        "pinyin": "すごいねこありくいくん"
    },
    "123": {
        "character": "一軒家？",
        "letter": "A house?",
        "pinyin": "いっけんや？"
    },
    "124": {
        "character": "買っちゃいました３５年ローンです",
        "letter": "I bought it... with a 35-year mortgage.",
        "pinyin": "かっちゃいました３５ねんろーんです"
    },
    "125": {
        "character": "うわ～っ！上がって見ていってください",
        "letter": "Wow! Come on up and take a look.",
        "pinyin": "うわ～っ！あがってみていってください"
    },
    "126": {
        "character": "寂しい話するけど…",
        "letter": "I'm going to tell you something sad...",
        "pinyin": "さびしいはなしするけど…"
    },
    "127": {
        "character": "親子ローンかな？平均寿命的に",
        "letter": "A parent-child loan? In terms of average life expectancy.",
        "pinyin": "おやころーんかな？へいきんじゅみょうてきに"
    },
    "128": {
        "character": "親子孫ローンかもね",
        "letter": "Maybe it's a parenthood loan.",
        "pinyin": "おやこまごろーんかもね"
    },
    "129": {
        "character": "あっゾウガメさんだ",
        "letter": "Hey, there's a turtle.",
        "pinyin": "あっぞうがめさんだ"
    },
    "130": {
        "character": "どこ行くの？",
        "letter": "Where are you going?",
        "pinyin": "どこいくの？"
    },
    "131": {
        "character": "家に…",
        "letter": "Home...",
        "pinyin": "いえに…"
    },
    "132": {
        "character": "一緒に行ってもいい？",
        "letter": "Can I come with you?",
        "pinyin": "いっしょにいってもいい？"
    },
    "133": {
        "character": "一人暮らし見せてよ",
        "letter": "Let me see you live alone.",
        "pinyin": "ひとりぐらしみせてよ"
    },
    "134": {
        "character": "いいよ",
        "letter": "Sure.",
        "pinyin": "いいよ"
    },
    "135": {
        "character": "へぇ～オシャレなマンションだね",
        "letter": "Wow, that's a stylish apartment.",
        "pinyin": "へぇ～おしゃれなまんしょんだね"
    },
    "136": {
        "character": "間取りは？",
        "letter": "What's the layout?",
        "pinyin": "まどりは？"
    },
    "137": {
        "character": "２ＬＳ",
        "letter": "2LS.",
        "pinyin": "２ＬＳ"
    },
    "138": {
        "character": "Ｓ？それって何？サービスルーム？",
        "letter": "What's that? A service room?",
        "pinyin": "Ｓ？それってなに？さーびするーむ？"
    },
    "139": {
        "character": "ううん",
        "letter": "No.",
        "pinyin": "ううん"
    },
    "140": {
        "character": "セレブって感じだね",
        "letter": "It's like a celebrity.",
        "pinyin": "せれぶってかんじだね"
    },
    "141": {
        "character": "ＳってセレブのＳ？",
        "letter": "S for celebrity?",
        "pinyin": "ＳってせれぶのＳ？"
    },
    "142": {
        "character": "砂",
        "letter": "Sand.",
        "pinyin": "すな"
    },
    "143": {
        "character": "こだわりの２ＬＳ",
        "letter": "I'm a stickler for 2LS.",
        "pinyin": "こだわりの２ＬＳ"
    },
    "144": {
        "character": "は～い",
        "letter": "Yes!",
        "pinyin": "は～い"
    },
    "145": {
        "character": "あれ？どうしたの２人とも",
        "letter": "Huh? What's wrong with you two?",
        "pinyin": "あれ？どうしたの２にんとも"
    },
    "146": {
        "character": "おじゃまします",
        "letter": "Sorry to bother you.",
        "pinyin": "おじゃまします"
    },
    "147": {
        "character": "結構きれいにしてるんだ",
        "letter": "It's pretty clean.",
        "pinyin": "けっこうきれいにしてるんだ"
    },
    "148": {
        "character": "あっちょっと！",
        "letter": "Hey!",
        "pinyin": "あっちょっと！"
    },
    "149": {
        "character": "ここは水飲み場？",
        "letter": "Is this a water fountain?",
        "pinyin": "ここはみずのみば？"
    },
    "150": {
        "character": "お風呂場",
        "letter": "Bathrooms.",
        "pinyin": "おふろば"
    },
    "151": {
        "character": "じゃあこっちが水飲み場？",
        "letter": "Is this the water fountain?",
        "pinyin": "じゃあこっちがみずのみば？"
    },
    "152": {
        "character": "トイレだよ",
        "letter": "It's a toilet.",
        "pinyin": "といれだよ"
    },
    "153": {
        "character": "見直したよ半田さん",
        "letter": "I'm impressed, Mr. Handa.",
        "pinyin": "みなおしたよはんでんさん"
    },
    "154": {
        "character": "お風呂もトイレもきれいにしてあるじゃない",
        "letter": "Your bathroom and toilet are both clean.",
        "pinyin": "おふろもといれもきれいにしてあるじゃない"
    },
    "155": {
        "character": "う…うん",
        "letter": "Yeah...",
        "pinyin": "う…うん"
    },
    "156": {
        "character": "あれ？これで終わり？",
        "letter": "Huh? Is this it?",
        "pinyin": "あれ？これでおわり？"
    },
    "157": {
        "character": "これで全部だよ",
        "letter": "That's everything.",
        "pinyin": "これでぜんぶだよ"
    },
    "158": {
        "character": "まあ半田さんならしようがないか",
        "letter": "Well, I guess Mr. Handa can't help it.",
        "pinyin": "まあはんでんさんならしようがないか"
    },
    "159": {
        "character": "僕ここでいいよ",
        "letter": "I'll leave it here.",
        "pinyin": "ぼくここでいいよ"
    },
    "160": {
        "character": "何が？どういうこと？",
        "letter": "What? What do you mean?",
        "pinyin": "なにが？どういうこと？"
    },
    "161": {
        "character": "半田さんはそっちの奥で寝たら？",
        "letter": "Why don't you go sleep in the back there?",
        "pinyin": "はんでんさんはそっちのおくでねたら？"
    },
    "162": {
        "character": "えっ！？なんで？",
        "letter": "What? Why?",
        "pinyin": "えっ！？なんで？"
    },
    "163": {
        "character": "真ん中の段に僕のものを入れるね",
        "letter": "I'll put my stuff in the middle bunk.",
        "pinyin": "まんなかのだんにぼくのものをいれるね"
    },
    "164": {
        "character": "勝手に笹ジュース飲まないでね",
        "letter": "Don't drink the bamboo juice without permission.",
        "pinyin": "かってにささじゅーすのまないでね"
    },
    "165": {
        "character": "飲まないよ",
        "letter": "I'm not drinking it.",
        "pinyin": "のまないよ"
    },
    "166": {
        "character": "ってか入れないで！",
        "letter": "I mean, don't put it in there!",
        "pinyin": "ってかいれないで！"
    },
    "167": {
        "character": "自分のリズムで起きたいから朝出るときは静かにしてね",
        "letter": "I want to wake up in my own rhythm, so when I leave in the morning, please be quiet.",
        "pinyin": "じぶんのりずむでおきたいからあさでるときはしずかにしてね"
    },
    "168": {
        "character": "だから寝ないで！",
        "letter": "So don't sleep!",
        "pinyin": "だからねないで！"
    },
    "169": {
        "character": "バイトはどうするの！？",
        "letter": "What about your part-time job?",
        "pinyin": "ばいとはどうするの！？"
    },
    "170": {
        "character": "忠実なペンギンさんが代わりに行ってくれるよ",
        "letter": "My faithful penguin will take your place.",
        "pinyin": "ちゅうじつなぺんぎんさんがかわりにいってくれるよ"
    },
    "171": {
        "character": "だから召し使いにしないでってば！",
        "letter": "I told you, don't make me your servant!",
        "pinyin": "だからめしつかいにしないでってば！"
    },
    "172": {
        "character": "ホントは一人暮らしがしたいんだけどしようがないよね",
        "letter": "I really want to live on my own... but there's nothing I can do about it.",
        "pinyin": "ほんとはひとりぐらしがしたいんだけどしようがないよね"
    },
    "173": {
        "character": "３人で頑張っていこう",
        "letter": "We'll just have to make do with the three of us.",
        "pinyin": "３にんでがんばっていこう"
    },
    "174": {
        "character": "じゃあ僕寝るからご飯ができたら起こしてね",
        "letter": "I'm going to bed, so wake me up when dinner's ready.",
        "pinyin": "じゃあぼくねるからごはんができたらおこしてね"
    },
    "175": {
        "character": "で半田さんにお風呂掃除するからって追い返されたの？",
        "letter": "So Mr. Handa sent you away to clean the bathroom?",
        "pinyin": "ではんでんさんにおふろそうじするからっておいかえされたの？"
    },
    "176": {
        "character": "ひどいよね",
        "letter": "That's terrible.",
        "pinyin": "ひどいよね"
    },
    "177": {
        "character": "まぁ無理もない気がするよ",
        "letter": "Well, I guess it's understandable.",
        "pinyin": "まぁむりもないきがするよ"
    },
    "178": {
        "character": "パンダくんまだ一人暮らししたいの？",
        "letter": "Do you still want to live alone, panda?",
        "pinyin": "ぱんだくんまだひとりぐらししたいの？"
    },
    "179": {
        "character": "ふぅ～もう諦めたよ",
        "letter": "I've given up.",
        "pinyin": "ふぅ～もうあきらめたよ"
    },
    "180": {
        "character": "あっでも召し使いは見つけたよ",
        "letter": "But I did find a servant.",
        "pinyin": "あっでもめしつかいはみつけたよ"
    },
    "181": {
        "character": "僕のことも諦めてくれる？",
        "letter": "Will you give me up, too?",
        "pinyin": "ぼくのこともあきらめてくれる？"
    },
    "182": {
        "character": "夏のお祭り",
        "letter": "Summer Festival",
        "pinyin": "なつのおまつり"
    },
    "183": {
        "character": "今日はしろくまカフェとグリズリーバーのジョイント企画で",
        "letter": "Today is the joint project of Shirokuma Cafe and Grizzly Bar.",
        "pinyin": "きょうはしろくまかふぇとぐりずりーばーのじょいんときかくで"
    },
    "184": {
        "character": "屋台をやりま～す！",
        "letter": "We're having a food stall today!",
        "pinyin": "やたいをやりま～す！"
    },
    "185": {
        "character": "いいね",
        "letter": "Sounds great!",
        "pinyin": "いいね"
    },
    "186": {
        "character": "楽しみ！",
        "letter": "I'm looking forward to it!",
        "pinyin": "たのしみ！"
    },
    "187": {
        "character": "似合ってるね笹子さん",
        "letter": "You look great, Sasako-san!",
        "pinyin": "にあってるねささごさん"
    },
    "188": {
        "character": "みんなで盛り上げましょう！",
        "letter": "Let's make it a success!",
        "pinyin": "みんなでもりあげましょう！"
    },
    "189": {
        "character": "は～い！",
        "letter": "Yes!",
        "pinyin": "は～い！"
    },
    "190": {
        "character": "祭りなら任せろ！",
        "letter": "I'll take care of the festival!",
        "pinyin": "まつりならまかせろ！"
    },
    "191": {
        "character": "炎上炎上！",
        "letter": "Flame on, flame on!",
        "pinyin": "えんじょうえんじょう！"
    },
    "192": {
        "character": "かっこいい！",
        "letter": "It's so cool!",
        "pinyin": "かっこいい！"
    },
    "193": {
        "character": "グリズリーくんは焼そばを作ってね",
        "letter": "Grizzly, make some fried noodles.",
        "pinyin": "ぐりずりーくんはやきそばをつくってね"
    },
    "194": {
        "character": "おうガンガン作ってやるぜ",
        "letter": "I'll do my best.",
        "pinyin": "おうがんがんつくってやるぜ"
    },
    "195": {
        "character": "パンダくんはソースを塗ったりする担当",
        "letter": "Panda is in charge of spreading the sauce.",
        "pinyin": "ぱんだくんはそーすをぬったりするたんとう"
    },
    "196": {
        "character": "任せて！",
        "letter": "I'll take care of it!",
        "pinyin": "まかせて！"
    },
    "197": {
        "character": "ペンギンさんは呼び込みで",
        "letter": "Penguin, you're in charge of inviting people in.",
        "pinyin": "ぺんぎんさんはよびこみで"
    },
    "198": {
        "character": "了解！",
        "letter": "Got it!",
        "pinyin": "りょうかい！"
    },
    "199": {
        "character": "あの僕も何かお手伝いしましょうか？",
        "letter": "Can I help with anything?",
        "pinyin": "あのぼくもなにかおてつだいしましょうか？"
    },
    "200": {
        "character": "ああお久しぶり！",
        "letter": "Long time no see!",
        "pinyin": "ああおひさしぶり！"
    },
    "201": {
        "character": "パンダくんの知り合い？",
        "letter": "You know the panda?",
        "pinyin": "ぱんだくんのしりあい？"
    },
    "202": {
        "character": "うんお兄さん！",
        "letter": "Yeah, he's my brother.",
        "pinyin": "うんおにいさん！"
    },
    "203": {
        "character": "お兄さん？",
        "letter": "Big brother?",
        "pinyin": "おにいさん？"
    },
    "204": {
        "character": "みたいな",
        "letter": "Sort of.",
        "pinyin": "みたいな"
    },
    "205": {
        "character": "ど…どういう関係？",
        "letter": "What's the connection?",
        "pinyin": "ど…どういうかんけい？"
    },
    "206": {
        "character": "名前は同じだけど",
        "letter": "We share the same name.",
        "pinyin": "なまえはおなじだけど"
    },
    "207": {
        "character": "種属違いの親戚",
        "letter": "But we're related by a different species.",
        "pinyin": "たねぞくちがいのしんせき"
    },
    "208": {
        "character": "うん？",
        "letter": "What?",
        "pinyin": "うん？"
    },
    "209": {
        "character": "もともとパンダって呼ばれてたのは僕たちだったんですよ",
        "letter": "We're the ones who were originally called pandas.",
        "pinyin": "もともとぱんだってよばれてたのはぼくたちだったんですよ"
    },
    "210": {
        "character": "へぇ～そうだったんですか",
        "letter": "Oh, I didn't know that.",
        "pinyin": "へぇ～そうだったんですか"
    },
    "211": {
        "character": "でもジャイアントパンダくんが出てきてから",
        "letter": "But after the giant panda came out.",
        "pinyin": "でもじゃいあんとぱんだくんがでてきてから"
    },
    "212": {
        "character": "僕たちは小さいほうのパンダレッサーパンダって呼ばれるようになったんです",
        "letter": "We came to be called the smaller panda, the red panda.",
        "pinyin": "ぼくたちはちいさいほうのぱんだれっさーぱんだってよばれるようになったんです"
    },
    "213": {
        "character": "へぇ～",
        "letter": "Wow!",
        "pinyin": "へぇ～"
    },
    "214": {
        "character": "今も笹情報まわしたりとか",
        "letter": "Do you still pass around information about bamboo grass?",
        "pinyin": "いまもささじょうほうまわしたりとか"
    },
    "215": {
        "character": "親戚づきあいは続いてるんだよね",
        "letter": "We still keep in touch with our relatives, right?",
        "pinyin": "しんせきづきあいはつづいてるんだよね"
    },
    "216": {
        "character": "笹情報って？",
        "letter": "What's bamboo information?",
        "pinyin": "ささじょうほうって？"
    },
    "217": {
        "character": "はいどこの笹がおいしいとか調べたり",
        "letter": "Yes, like finding out which bamboo is good.",
        "pinyin": "はいどこのささがおいしいとかしらべたり"
    },
    "218": {
        "character": "僕たちも笹大好きなんで",
        "letter": "We love bamboo, too.",
        "pinyin": "ぼくたちもささだいすきなんで"
    },
    "219": {
        "character": "こまめに動くタイプなんです",
        "letter": "We like bamboo, too, so we're very active.",
        "pinyin": "こまめにうごくたいぷなんです"
    },
    "220": {
        "character": "へぇ～！",
        "letter": "Oh, really?",
        "pinyin": "へぇ～！"
    },
    "221": {
        "character": "じゃあ私は注文やお客さんをさばいたりするから",
        "letter": "Then I'll be taking orders and dealing with customers.",
        "pinyin": "じゃあわたしはちゅうもんやおきゃくさんをさばいたりするから"
    },
    "222": {
        "character": "お勘定係お願いしてもいいかな？",
        "letter": "May I ask you to take care of the check?",
        "pinyin": "おかんじょうかかりおねがいしてもいいかな？"
    },
    "223": {
        "character": "はい！",
        "letter": "Yes!",
        "pinyin": "はい！"
    },
    "224": {
        "character": "すげぇ！",
        "letter": "That's great!",
        "pinyin": "すげぇ！"
    },
    "225": {
        "character": "これがいい！",
        "letter": "I love this!",
        "pinyin": "これがいい！"
    },
    "226": {
        "character": "きれい！",
        "letter": "Beautiful!",
        "pinyin": "きれい！"
    },
    "227": {
        "character": "そうそう…これを立てておこう",
        "letter": "Oh, yeah... let's get this up.",
        "pinyin": "そうそう…これをたてておこう"
    },
    "228": {
        "character": "タイムサービス？",
        "letter": "Time service?",
        "pinyin": "たいむさーびす？"
    },
    "229": {
        "character": "どんなサービスするんだ？",
        "letter": "What kind of service do you do?",
        "pinyin": "どんなさーびすするんだ？"
    },
    "230": {
        "character": "増量か？値引きか？",
        "letter": "Extra volume? A discount?",
        "pinyin": "ぞうりょうか？ねびきか？"
    },
    "231": {
        "character": "別に何も",
        "letter": "Nothing.",
        "pinyin": "べつになにも"
    },
    "232": {
        "character": "あぁ？",
        "letter": "What?",
        "pinyin": "あぁ？"
    },
    "233": {
        "character": "でもこれを見たら",
        "letter": "But when I see this.",
        "pinyin": "でもこれをみたら"
    },
    "234": {
        "character": "今買わなきゃって思う",
        "letter": "I'm gonna have to buy it now.",
        "pinyin": "いまかわなきゃっておもう"
    },
    "235": {
        "character": "正々堂々とやれ！",
        "letter": "Do it fair and square!",
        "pinyin": "せいせいどうどうとやれ！"
    },
    "236": {
        "character": "いらっしゃいいらっしゃい！",
        "letter": "Welcome, welcome, welcome!",
        "pinyin": "いらっしゃいいらっしゃい！"
    },
    "237": {
        "character": "シロクマ風お好み焼とグリズリー焼そばだよ",
        "letter": "Polar bear style okonomiyaki and grizzly yakisoba.",
        "pinyin": "しろくまふうおこのみやきとぐりずりーやきそばだよ"
    },
    "238": {
        "character": "一度食べたら忘れられない味",
        "letter": "Once you try them, you'll never forget the taste.",
        "pinyin": "いちどたべたらわすれられないあじ"
    },
    "239": {
        "character": "しかもめったに食べられないよ",
        "letter": "And you don't get to eat them often.",
        "pinyin": "しかもめったにたべられないよ"
    },
    "240": {
        "character": "え～い！まどろっこしい！！",
        "letter": "Oh, no! It's so sloppy!",
        "pinyin": "え～い！まどろっこしい！！"
    },
    "241": {
        "character": "おりゃ～！オラオラ！！",
        "letter": "Oh, no! Oh, no!",
        "pinyin": "おりゃ～！おらおら！！"
    },
    "242": {
        "character": "グリズリー焼そばの激うまさに驚け！",
        "letter": "You'll be amazed at how delicious this grizzly yakisoba is!",
        "pinyin": "ぐりずりーやきそばのげきうまさにおどろけ！"
    },
    "243": {
        "character": "グリズリーくん勢いよすぎ",
        "letter": "You're too good to be a grizzly.",
        "pinyin": "ぐりずりーくんいきおいよすぎ"
    },
    "244": {
        "character": "焼そば２つ！",
        "letter": "Two yakisoba!",
        "pinyin": "やきそば２つ！"
    },
    "245": {
        "character": "お好み焼１つと焼そば１つ！",
        "letter": "One okonomiyaki and one yakisoba!",
        "pinyin": "おこのみやき１つとやきそば１つ！"
    },
    "246": {
        "character": "焼そば３つとお好み焼１つ",
        "letter": "Three yakisoba and one okonomiyaki.",
        "pinyin": "やきそば３つとおこのみやき１つ"
    },
    "247": {
        "character": "モダン焼できる？",
        "letter": "Can you make modern-yaki?",
        "pinyin": "もだんやきできる？"
    },
    "248": {
        "character": "はいできますよ",
        "letter": "Yes, we can.",
        "pinyin": "はいできますよ"
    },
    "249": {
        "character": "パンダくん早くお好み焼お願い！",
        "letter": "Hurry up, panda, okonomiyaki!",
        "pinyin": "ぱんだくんはやくおこのみやきおねがい！"
    },
    "250": {
        "character": "う…うん今…",
        "letter": "Now...",
        "pinyin": "う…うんいま…"
    },
    "251": {
        "character": "あっ！自分にソース塗っちゃった",
        "letter": "Oh! I put sauce on myself.",
        "pinyin": "あっ！じぶんにそーすぬっちゃった"
    },
    "252": {
        "character": "パンダ急げ！",
        "letter": "Hurry up, panda!",
        "pinyin": "ぱんだいそげ！"
    },
    "253": {
        "character": "ぐわっ！何しやがる！？",
        "letter": "Oh, no! What are you doing?",
        "pinyin": "ぐわっ！なにしやがる！？"
    },
    "254": {
        "character": "あっ！逆だった",
        "letter": "Oh! It's the other way.",
        "pinyin": "あっ！ぎゃくだった"
    },
    "255": {
        "character": "笹子に代われ！",
        "letter": "Put Sasago on!",
        "pinyin": "ささこにかわれ！"
    },
    "256": {
        "character": "はいどうぞ",
        "letter": "Here you go.",
        "pinyin": "はいどうぞ"
    },
    "257": {
        "character": "やった～！",
        "letter": "Yes!",
        "pinyin": "やった～！"
    },
    "258": {
        "character": "よかったわね",
        "letter": "Good for you.",
        "pinyin": "よかったわね"
    },
    "259": {
        "character": "ありがとうございました",
        "letter": "Thank you very much.",
        "pinyin": "ありがとうございました"
    },
    "260": {
        "character": "うりきれ！店じまいです",
        "letter": "Sold out! We're closing up.",
        "pinyin": "うりきれ！みせじまいです"
    },
    "261": {
        "character": "お疲れさまでした",
        "letter": "Thank you for your hard work.",
        "pinyin": "おつかれさまでした"
    },
    "262": {
        "character": "ふぅ…お疲れ！",
        "letter": "Good night!",
        "pinyin": "ふぅ…おつかれ！"
    },
    "263": {
        "character": "お疲れさま",
        "letter": "Good work.",
        "pinyin": "おつかれさま"
    },
    "264": {
        "character": "あぁ…疲れた！",
        "letter": "I'm so tired!",
        "pinyin": "あぁ…つかれた！"
    },
    "265": {
        "character": "働くのって大変",
        "letter": "Working is hard.",
        "pinyin": "はたらくのってたいへん"
    },
    "266": {
        "character": "パンダくんは途中でクビになったでしょ",
        "letter": "You got fired in the middle of the day.",
        "pinyin": "ぱんだくんはとちゅうでくびになったでしょ"
    },
    "267": {
        "character": "他の屋台回ってみようよ",
        "letter": "Let's go to the other stalls.",
        "pinyin": "ほかのやたいまわってみようよ"
    },
    "268": {
        "character": "おっ！いいね",
        "letter": "Whoa! Nice.",
        "pinyin": "おっ！いいね"
    },
    "269": {
        "character": "わぁ～！たくさんあるね",
        "letter": "Wow! There's so many.",
        "pinyin": "わぁ～！たくさんあるね"
    },
    "270": {
        "character": "僕これにする",
        "letter": "I'll take this one.",
        "pinyin": "ぼくこれにする"
    },
    "271": {
        "character": "パンダインパンダ！",
        "letter": "Panda in panda!",
        "pinyin": "ぱんだいんぱんだ！"
    },
    "272": {
        "character": "変だよそれ…",
        "letter": "That's weird...",
        "pinyin": "へんだよそれ…"
    },
    "273": {
        "character": "じゃあ…",
        "letter": "Well, then...",
        "pinyin": "じゃあ…"
    },
    "274": {
        "character": "パンダアンドパンダ",
        "letter": "Panda and panda.",
        "pinyin": "ぱんだあんどぱんだ"
    },
    "275": {
        "character": "なんか怖いよ…",
        "letter": "I'm scared...",
        "pinyin": "なんかこわいよ…"
    },
    "276": {
        "character": "あれおもしろそうやってみたい！",
        "letter": "I want to try that!",
        "pinyin": "あれおもしろそうやってみたい！"
    },
    "277": {
        "character": "またそんなご迷惑なことを…",
        "letter": "You are such a pain in the ass.",
        "pinyin": "またそんなごめいわくなことを…"
    },
    "278": {
        "character": "いいよやってみるかい？",
        "letter": "Do you want to try it?",
        "pinyin": "いいよやってみるかい？"
    },
    "279": {
        "character": "やるやる！",
        "letter": "I'm in!",
        "pinyin": "やるやる！"
    },
    "280": {
        "character": "別の生きものになっちゃってるよ",
        "letter": "You're turning into something else.",
        "pinyin": "べつのいきものになっちゃってるよ"
    },
    "281": {
        "character": "う～ん…ベロが届かないよ！",
        "letter": "I can't reach my tongue!",
        "pinyin": "う～ん…べろがとどかないよ！"
    },
    "282": {
        "character": "あぁ～！惜しい…",
        "letter": "Oh, no! That was close.",
        "pinyin": "あぁ～！おしい…"
    },
    "283": {
        "character": "もう１回もう１回！",
        "letter": "One more time, one more time!",
        "pinyin": "もう１かいもう１かい！"
    },
    "284": {
        "character": "あっ今…",
        "letter": "Oh, now...",
        "pinyin": "あっいま…"
    },
    "285": {
        "character": "銃がよくないよおじさん交換して",
        "letter": "The gun's not good, Uncle.",
        "pinyin": "じゅうがよくないよおじさんこうかんして"
    },
    "286": {
        "character": "またそんなワガママ言って",
        "letter": "You're being so selfish again.",
        "pinyin": "またそんなわがままいって"
    },
    "287": {
        "character": "やった！ねぇほら！",
        "letter": "I did it! Hey, come on!",
        "pinyin": "やった！ねぇほら！"
    },
    "288": {
        "character": "貸してみろ",
        "letter": "Give it to me.",
        "pinyin": "かしてみろ"
    },
    "289": {
        "character": "おらぁっ！",
        "letter": "Hey!",
        "pinyin": "おらぁっ！"
    },
    "290": {
        "character": "どうだ！",
        "letter": "Look at that!",
        "pinyin": "どうだ！"
    },
    "291": {
        "character": "俺にかかりゃこんなもんよ",
        "letter": "That's what I'm talking about.",
        "pinyin": "おれにかかりゃこんなもんよ"
    },
    "292": {
        "character": "あ…ほらよ",
        "letter": "Here you go.",
        "pinyin": "あ…ほらよ"
    },
    "293": {
        "character": "あ…ありがとうございます",
        "letter": "Thank you...",
        "pinyin": "あ…ありがとうございます"
    },
    "294": {
        "character": "細かすぎんだよ",
        "letter": "You're too detailed!",
        "pinyin": "こまかすぎんだよ"
    },
    "295": {
        "character": "コイツら！サケやマスなら一発なのによ！",
        "letter": "These guys! Salmon and trout are easy!",
        "pinyin": "こいつら！さけやますならいちはつなのによ！"
    },
    "296": {
        "character": "シロクマさんすご～い",
        "letter": "Polar bears are amazing!",
        "pinyin": "しろくまさんすご～い"
    },
    "297": {
        "character": "もう２０匹目ですよ",
        "letter": "You've already caught 20!",
        "pinyin": "もう２０ひきめですよ"
    },
    "298": {
        "character": "さすがだね",
        "letter": "That's impressive.",
        "pinyin": "さすがだね"
    },
    "299": {
        "character": "いっそのこと直に…",
        "letter": "Maybe we should just...",
        "pinyin": "いっそのことじかに…"
    },
    "300": {
        "character": "お客さん困ります",
        "letter": "We've got a problem.",
        "pinyin": "おきゃくさんこまります"
    },
    "301": {
        "character": "あれ？半田さん",
        "letter": "What? Handa-san.",
        "pinyin": "あれ？はんでんさん"
    },
    "302": {
        "character": "あっパンダくん",
        "letter": "Panda-kun.",
        "pinyin": "あっぱんだくん"
    },
    "303": {
        "character": "仕事終わって今来たところなんだ",
        "letter": "I just got off work.",
        "pinyin": "しごとおわっていまきたところなんだ"
    },
    "304": {
        "character": "笹子さん…あいや屋台は？",
        "letter": "Sasago-san... where's the stall?",
        "pinyin": "ささごさん…あいややたいは？"
    },
    "305": {
        "character": "うん完売でもうみんな遊んでるよ",
        "letter": "It's sold out and everyone's already playing.",
        "pinyin": "うんかんばいでもうみんなあそんでるよ"
    },
    "306": {
        "character": "そ…そう",
        "letter": "I see.",
        "pinyin": "そ…そう"
    },
    "307": {
        "character": "何？それ…",
        "letter": "What? That...",
        "pinyin": "なに？それ…"
    },
    "308": {
        "character": "笹子さ…あいや！みんなに差し入れをと思って…",
        "letter": "Sasago-san... no! I thought I'd bring something for everyone...",
        "pinyin": "ささこさ…あいや！みんなにさしいれをとおもって…"
    },
    "309": {
        "character": "お茶とかジュース",
        "letter": "Tea, juice...",
        "pinyin": "おちゃとかじゅーす"
    },
    "310": {
        "character": "笹子さんならあっちにいるよ",
        "letter": "Sasago-san's over there.",
        "pinyin": "ささごさんならあっちにいるよ"
    },
    "311": {
        "character": "え？あ～そう…",
        "letter": "What? Oh, right...",
        "pinyin": "え？あ～そう…"
    },
    "312": {
        "character": "渡しにいこうよ",
        "letter": "Let's go give it to her.",
        "pinyin": "わたりしにいこうよ"
    },
    "313": {
        "character": "えっ！",
        "letter": "What?",
        "pinyin": "えっ！"
    },
    "314": {
        "character": "みんなじゃなくて２人で飲めばいいと思うよ",
        "letter": "I think it's better if we drink together.",
        "pinyin": "みんなじゃなくて２にんでのめばいいとおもうよ"
    },
    "315": {
        "character": "いやいや…",
        "letter": "No, no...",
        "pinyin": "いやいや…"
    },
    "316": {
        "character": "あれ？半田さん？",
        "letter": "Huh? Handa-san?",
        "pinyin": "あれ？はんでんさん？"
    },
    "317": {
        "character": "さ…笹子さん",
        "letter": "Sasago-san.",
        "pinyin": "さ…ささごさん"
    },
    "318": {
        "character": "こんばんは",
        "letter": "Good evening.",
        "pinyin": "こんばんは"
    },
    "319": {
        "character": "ど…ど…どうも",
        "letter": "Do you...do you...hi.",
        "pinyin": "ど…ど…どうも"
    },
    "320": {
        "character": "半田さんが差し入れにきてくれたよ",
        "letter": "Handa-san brought you some food.",
        "pinyin": "はんでんさんがさしいれにきてくれたよ"
    },
    "321": {
        "character": "ど…どうぞ",
        "letter": "Here you go.",
        "pinyin": "ど…どうぞ"
    },
    "322": {
        "character": "あら…ありがとうございます",
        "letter": "Oh...thank you.",
        "pinyin": "あら…ありがとうございます"
    },
    "323": {
        "character": "いやいやつまらないものだから",
        "letter": "No, it's just boring stuff.",
        "pinyin": "いやいやつまらないものだから"
    },
    "324": {
        "character": "ちょっと…パンダくん",
        "letter": "Hey, panda.",
        "pinyin": "ちょっと…ぱんだくん"
    },
    "325": {
        "character": "おう半田ありがたくもらうぜ",
        "letter": "Oh, Handa, thank you very much.",
        "pinyin": "おうはんでんありがたくもらうぜ"
    },
    "326": {
        "character": "僕も飲む～！",
        "letter": "I'll have some too!",
        "pinyin": "ぼくものむ～！"
    },
    "327": {
        "character": "僕ももらおうかな",
        "letter": "I think I'll have one too.",
        "pinyin": "ぼくももらおうかな"
    },
    "328": {
        "character": "もう一本！",
        "letter": "One more!",
        "pinyin": "もういっぽん！"
    },
    "329": {
        "character": "せっかくなんでいただきます",
        "letter": "I'll take it for what it's worth.",
        "pinyin": "せっかくなんでいただきます"
    },
    "330": {
        "character": "あ…どうぞどうぞ",
        "letter": "Here you go.",
        "pinyin": "あ…どうぞどうぞ"
    },
    "331": {
        "character": "半田さん…間が悪いなぁ",
        "letter": "Handa-san... your timing is terrible.",
        "pinyin": "はんでんさん…まがわるいなぁ"
    },
    "332": {
        "character": "わぁ…花火",
        "letter": "Wow... fireworks.",
        "pinyin": "わぁ…はなび"
    },
    "333": {
        "character": "始まったみたいですね",
        "letter": "It looks like they've started.",
        "pinyin": "はじまったみたいですね"
    },
    "334": {
        "character": "わぁ…きれい",
        "letter": "wow...beautiful.",
        "pinyin": "わぁ…きれい"
    },
    "335": {
        "character": "私花火大好きなんですよ",
        "letter": "I love fireworks.",
        "pinyin": "わたしはなびだいすきなんですよ"
    },
    "336": {
        "character": "僕も…僕も大好きです",
        "letter": "Me too... me too.",
        "pinyin": "ぼくも…ぼくもだいすきです"
    },
    "337": {
        "character": "いいですよね花火",
        "letter": "Fireworks are good, aren't they?",
        "pinyin": "いいですよねはなび"
    },
    "338": {
        "character": "は…はい",
        "letter": "Yes...",
        "pinyin": "は…はい"
    },
    "339": {
        "character": "笹子さんは座ってください",
        "letter": "Sasago-san, please sit down.",
        "pinyin": "ささごさんはすわってください"
    },
    "340": {
        "character": "あ…すみません",
        "letter": "I'm sorry.",
        "pinyin": "あ…すみません"
    },
    "341": {
        "character": "ダメだよ半田さん遠慮してちゃ",
        "letter": "Don't be shy, Mr. Handa.",
        "pinyin": "だめだよはんでんさんえんりょしてちゃ"
    },
    "342": {
        "character": "でもこれで一緒に並んで座れたでしょ？",
        "letter": "But now we can sit together in a row, right?",
        "pinyin": "でもこれでいっしょにならんですわれたでしょ？"
    },
    "343": {
        "character": "あ…あの…最後の１本になっちゃいましたが",
        "letter": "Well... it's the last one, but...",
        "pinyin": "あ…あの…さいごの１ぽんになっちゃいましたが"
    },
    "344": {
        "character": "お茶どうぞ",
        "letter": "Here's your tea.",
        "pinyin": "おちゃどうぞ"
    },
    "345": {
        "character": "ありがとうございます",
        "letter": "Thank you very much.",
        "pinyin": "ありがとうございます"
    },
    "346": {
        "character": "すごくノドが渇いてたんですよ",
        "letter": "I was really thirsty.",
        "pinyin": "すごくのどがかわいてたんですよ"
    },
    "347": {
        "character": "冷たくて気持いい",
        "letter": "It's nice and cold.",
        "pinyin": "つめたくてきもちいい"
    },
    "348": {
        "character": "きれ～い！",
        "letter": "It's beautiful!",
        "pinyin": "きれ～い！"
    },
    "349": {
        "character": "おぉ～！炎上炎上！",
        "letter": "Ooh! Fire, fire, fire!",
        "pinyin": "おぉ～！えんじょうえんじょう！"
    },
    "350": {
        "character": "グリズリーくんそれ違うから",
        "letter": "That's not right, Mr. Grizzly.",
        "pinyin": "ぐりずりーくんそれちがうから"
    },
    "351": {
        "character": "きらめいてます！",
        "letter": "It's sparkling.",
        "pinyin": "きらめいてます！"
    },
    "352": {
        "character": "もう…みんな空気読まないんだから",
        "letter": "Oh, my... you guys are so airheaded.",
        "pinyin": "もう…みんなくうきよまないんだから"
    },
    "353": {
        "character": "ペンギンさんペンギンさん",
        "letter": "Mr. Penguin. Mr. Penguin.",
        "pinyin": "ぺんぎんさんぺんぎんさん"
    },
    "354": {
        "character": "何",
        "letter": "What?",
        "pinyin": "なに"
    },
    "355": {
        "character": "ぺんぎんさんって十回言うと呪われるっていう噂",
        "letter": "Rumor has it that if you say Mr. Penguin ten times, you'll be cursed.",
        "pinyin": "ぺんぎんさんってじゅっかいいうとのろわれるっていううわさ"
    },
    "356": {
        "character": "流していい",
        "letter": "You can spread it.",
        "pinyin": "ながしていい"
    },
    "357": {
        "character": "ダメ",
        "letter": "No!",
        "pinyin": "だめ"
    },
    "358": {
        "character": "そう簡単に呪われたら大忙しだよ",
        "letter": "If it's that easy to get cursed, we'll be busy.",
        "pinyin": "そうかんたんにのろわれたらおおいそがしだよ"
    },
    "359": {
        "character": "じゃペンギンさんが考えた",
        "letter": "So, Mr. Penguin, what's your idea?",
        "pinyin": "じゃぺんぎんさんがかんがえた"
    },
    "360": {
        "character": "せこく思われないように割り勘って言い出す方法を聞かせてよ",
        "letter": "So, penguins, tell us what you've come up with so we don't feel so guilty about splitting the bill.",
        "pinyin": "せこくおもわれないようにわりかんっていいだすほうほうをきかせてよ"
    },
    "361": {
        "character": "海でする話じゃないだな",
        "letter": "I don't think we're supposed to be talking about this at sea.",
        "pinyin": "うみでするはなしじゃないだな"
    },
    "362": {
        "character": "ていうか終わろ",
        "letter": "I mean, end of story.",
        "pinyin": "ていうかおわろ"
    },
    "363": {
        "character": "来週のしろくまカフェは急ぎ足でお送りします",
        "letter": "Next week's Shirokuma Cafe will be rushed!",
        "pinyin": "らいしゅうのしろくまかふぇはいそぎあしでおおくりします"
    },
    "364": {
        "character": "一歩一歩行こう",
        "letter": "Let's go step by step.",
        "pinyin": "いっぽいっぽいこう"
    },
    "365": {
        "character": "お楽しみに",
        "letter": "Enjoy!",
        "pinyin": "おたのしみに"
    }
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