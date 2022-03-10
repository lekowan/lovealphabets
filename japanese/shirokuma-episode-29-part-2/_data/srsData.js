// Configuration
const localStorageKey = "japanese" + "Episode29Part2" + "Srs";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep29 Part 2";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 29 Part 2. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "pinyin": "Flying penguins.",
        "character": "空飛ぶペンギンさん",
        "letter": "そらとぶぺんぎんさん"
    },
    "2": {
        "character": "いい陽気だ",
        "letter": "いいようきだ",
        "pinyin": "It's a beautiful day."
    },
    "3": {
        "character": "気持よさそうだな",
        "letter": "きもちよさそうだな",
        "pinyin": "You look like you're having a good time."
    },
    "4": {
        "character": "僕はね実は地肌は黒いんだよ",
        "letter": "ぼくはねじつはじはだはくろいんだよ",
        "pinyin": "I actually have dark skin."
    },
    "5": {
        "character": "ふ～ん",
        "letter": "ふ～ん",
        "pinyin": "Hmm."
    },
    "6": {
        "character": "全身白い毛で覆われてるからわかんないだろうけど",
        "letter": "ぜんしんしろいけでおおわれてるからわかんないだろうけど",
        "pinyin": "You wouldn't know it, though, because you're covered in white hair."
    },
    "7": {
        "character": "わかんないですね",
        "letter": "わかんないですね",
        "pinyin": "You can't tell."
    },
    "8": {
        "character": "どこか剃ってみようか",
        "letter": "どこかそってみようか",
        "pinyin": "I'll shave somewhere."
    },
    "9": {
        "character": "結構です",
        "letter": "けっこうです",
        "pinyin": "No, thank you."
    },
    "10": {
        "character": "空飛びたいんだけど",
        "letter": "そらとびたいんだけど",
        "pinyin": "I'd like to fly."
    },
    "11": {
        "character": "ふ～んおかわりどうする",
        "letter": "ふ～んおかわりどうする",
        "pinyin": "Hmm... what do you want another one of those?"
    },
    "12": {
        "character": "あっさり流すね",
        "letter": "あっさりながすね",
        "pinyin": "You're so easy to flush."
    },
    "13": {
        "character": "別に飛ばなくてもいいよ",
        "letter": "べつにとばなくてもいいよ",
        "pinyin": "You don't have to fly."
    },
    "14": {
        "character": "即座に否定するな",
        "letter": "そくざにひていするな",
        "pinyin": "Don't deny it immediately."
    },
    "15": {
        "character": "確かに空飛べたらいいですよね",
        "letter": "たしかにそらとべたらいいですよね",
        "pinyin": "It sure would be nice to fly, wouldn't it?"
    },
    "16": {
        "character": "家からカフェまで楽に来られるし",
        "letter": "いえからかふぇまでらくにこられるし",
        "pinyin": "It's easy to get from the house to the café."
    },
    "17": {
        "character": "そういうことじゃないんだよ…",
        "letter": "そういうことじゃないんだよ…",
        "pinyin": "That's not what I meant..."
    },
    "18": {
        "character": "どういうことなんですか",
        "letter": "どういうことなんですか",
        "pinyin": "What do you mean?"
    },
    "19": {
        "character": "なんていうか海で泳ぐとすごく楽しいけど",
        "letter": "なんていうかうみでおよぐとすごくたのしいけど",
        "pinyin": "I mean, swimming in the ocean is a lot of fun, but..."
    },
    "20": {
        "character": "きっと空を飛ぶのもすてきだと思うんだよね",
        "letter": "きっとそらをとぶのもすてきだとおもうんだよね",
        "pinyin": "I think it would be great to fly."
    },
    "21": {
        "character": "全然飛べないんだね",
        "letter": "ぜんぜんとべないんだね",
        "pinyin": "You can't fly at all."
    },
    "22": {
        "character": "だから言ったじゃない。",
        "letter": "だからいったじゃない。",
        "pinyin": "I told you."
    },
    "23": {
        "character": "羽があるのに",
        "letter": "はねがあるのに",
        "pinyin": "You have wings."
    },
    "24": {
        "character": "これは羽じゃないから",
        "letter": "これははねじゃないから",
        "pinyin": "Because these aren't wings."
    },
    "25": {
        "character": "フリッパー",
        "letter": "ふりっぱー",
        "pinyin": "Flipper."
    },
    "26": {
        "character": "それはスリッパ",
        "letter": "それはすりっぱ",
        "pinyin": "Those are slippers."
    },
    "27": {
        "character": "それはカッパ",
        "letter": "それはかっぱ",
        "pinyin": "That's Kappa"
    },
    "28": {
        "character": "ヘイメーン",
        "letter": "へいめーん",
        "pinyin": "Hey Mene."
    },
    "29": {
        "character": "それはラッパー",
        "letter": "それはらっぱー",
        "pinyin": "That's a wrapper."
    },
    "30": {
        "character": "フリッパーってヒレみたいなもんなんだよね",
        "letter": "ふりっぱーってひれみたいなもんなんだよね",
        "pinyin": "Flippers are like fins."
    },
    "31": {
        "character": "羽じゃないのか…",
        "letter": "はねじゃないのか…",
        "pinyin": "Not wings..."
    },
    "32": {
        "character": "じゃあどうやって飛べばいいの",
        "letter": "じゃあどうやってとべばいいの",
        "pinyin": "Then how do I fly?"
    },
    "33": {
        "character": "う～ん",
        "letter": "う～ん",
        "pinyin": "Hmmm..."
    },
    "34": {
        "character": "根性",
        "letter": "こんじょう",
        "pinyin": "Guts"
    },
    "35": {
        "character": "それで飛べたらみんな飛べちゃうんじゃないかな",
        "letter": "それでとべたらみんなとべちゃうんじゃないかな",
        "pinyin": "If we could fly with that, we'd all be able to fly."
    },
    "36": {
        "character": "僕いいこと思いついたよ",
        "letter": "ぼくいいことおもいついたよ",
        "pinyin": "I've got an idea."
    },
    "37": {
        "character": "さあペンギンさん",
        "letter": "さあぺんぎんさん",
        "pinyin": "Come on, penguins."
    },
    "38": {
        "character": "羽ばたいてみて",
        "letter": "はばたいてみて",
        "pinyin": "Flap your wings."
    },
    "39": {
        "character": "これで飛べるわけないじゃない",
        "letter": "これでとべるわけないじゃない",
        "pinyin": "How am I supposed to fly with this?"
    },
    "40": {
        "character": "ペンギンさんこっちこっち",
        "letter": "ぺんぎんさんこっちこっち",
        "pinyin": "Hey, Penguin, come here, come here."
    },
    "41": {
        "character": "焚き火するためにこんなものつけたんじゃないんだけど",
        "letter": "たきびするためにこんなものつけたんじゃないんだけど",
        "pinyin": "I didn't put this thing on to build a fire."
    },
    "42": {
        "character": "他に方法ないの",
        "letter": "ほかにほうほうないの",
        "pinyin": "There's no other way."
    },
    "43": {
        "character": "え～じゃあ",
        "letter": "え～じゃあ",
        "pinyin": "Oh, well..."
    },
    "44": {
        "character": "羽くっつけただけじゃ意味ないね",
        "letter": "はねくっつけただけじゃいみないね",
        "pinyin": "Just sticking a feather on it doesn't make any sense."
    },
    "45": {
        "character": "つける前に気づいてよ",
        "letter": "つけるまえにきづいてよ",
        "pinyin": "You should have noticed that before you put it on."
    },
    "46": {
        "character": "今度は風船くっつけるの",
        "letter": "こんどはふうせんくっつけるの",
        "pinyin": "Now we stick balloons on them."
    },
    "47": {
        "character": "すごいね",
        "letter": "すごいね",
        "pinyin": "That's great."
    },
    "48": {
        "character": "目的見失ってるから",
        "letter": "もくてきみうしなってるから",
        "pinyin": "Because you're missing the point."
    },
    "49": {
        "character": "扇風機背中にくっつけていったい何がしたいの",
        "letter": "せんぷうきせなかにくっつけていったいなにがしたいの",
        "pinyin": "What the hell do you want with a fan attached to your back?"
    },
    "50": {
        "character": "プロペラ",
        "letter": "ぷろぺら",
        "pinyin": "Propeller."
    },
    "51": {
        "character": "そもそも無理のあるプランだけど電源は",
        "letter": "そもそもむりのあるぷらんだけどでんげんは",
        "pinyin": "I know it's a crazy plan to begin with, but the power source..."
    },
    "52": {
        "character": "延長コードで",
        "letter": "えんちょうこーどで",
        "pinyin": "With an extension cord."
    },
    "53": {
        "character": "空まで届かないでしょ",
        "letter": "そらまでとどかないでしょ",
        "pinyin": "You can't reach the sky."
    },
    "54": {
        "character": "いやこれで空まで飛べないから",
        "letter": "いやこれでそらまでとべないから",
        "pinyin": "No, because you can't fly with this."
    },
    "55": {
        "character": "花火はどう",
        "letter": "はなびはどう",
        "pinyin": "How about fireworks?"
    },
    "56": {
        "character": "それダメなパターンだよね",
        "letter": "それだめなぱたーんだよね",
        "pinyin": "That's a bad pattern."
    },
    "57": {
        "character": "文句多いね",
        "letter": "もんくおおいね",
        "pinyin": "You complain a lot."
    },
    "58": {
        "character": "僕たち鳥じゃないからわからないよね",
        "letter": "ぼくたちとりじゃないからわからないよね",
        "pinyin": "We don't know, right? We're not birds."
    },
    "59": {
        "character": "どうやったら空飛べるの",
        "letter": "どうやったらそらとべるの",
        "pinyin": "How do you fly?"
    },
    "60": {
        "character": "それ僕に聞くの",
        "letter": "それぼくにきくの",
        "pinyin": "You're asking me that."
    },
    "61": {
        "character": "ちょっと待ってて",
        "letter": "ちょっとまってて",
        "pinyin": "Just a minute."
    },
    "62": {
        "character": "カンムリワシさんどうも",
        "letter": "かんむりわしさんどうも",
        "pinyin": "Mr. crested serpent eagle."
    },
    "63": {
        "character": "急に呼び出しといて何",
        "letter": "きゅうによびだしといてなに",
        "pinyin": "You called me out of the blue."
    },
    "64": {
        "character": "どうしても飛びたいってペンギンさんがね",
        "letter": "どうしてもとびたいってぺんぎんさんがね",
        "pinyin": "There's a penguin who really wants to fly."
    },
    "65": {
        "character": "ああそうじゃあいくよ",
        "letter": "ああそうじゃあいくよ",
        "pinyin": "Okay, I'm going."
    },
    "66": {
        "character": "あっイタタタ",
        "letter": "あっいたたた",
        "pinyin": "Oh, no, no, no, no, no, no, no, no, no, no, no..."
    },
    "67": {
        "character": "痛い痛い…",
        "letter": "いたいいたい…",
        "pinyin": "Ow, ow, ow..."
    },
    "68": {
        "character": "あっ浮いた",
        "letter": "あっういた",
        "pinyin": "Oh, it floated."
    },
    "69": {
        "character": "ああああイタタ…",
        "letter": "ああああいたた…",
        "pinyin": "Oh, God, that's painful..."
    },
    "70": {
        "character": "よし飛んだね",
        "letter": "よしとんだね",
        "pinyin": "Okay, you flew."
    },
    "71": {
        "character": "よかったね",
        "letter": "よかったね",
        "pinyin": "That's great."
    },
    "72": {
        "character": "ああいい嫌だ",
        "letter": "ああいいいやだ",
        "pinyin": "Oh, God, I hate it."
    },
    "73": {
        "character": "もういい？",
        "letter": "もういい？",
        "pinyin": "Are we done?"
    },
    "74": {
        "character": "もういいです",
        "letter": "もういいです",
        "pinyin": "That's enough."
    },
    "75": {
        "character": "またね",
        "letter": "またね",
        "pinyin": "See you later."
    },
    "76": {
        "character": "ご苦労さま",
        "letter": "ごくろうさま",
        "pinyin": "Thank you very much for your help."
    },
    "77": {
        "character": "ほら飛んでるよ",
        "letter": "ほらとんでるよ",
        "pinyin": "Look, it's flying."
    },
    "78": {
        "character": "全然飛んだ気がしないんだけど",
        "letter": "ぜんぜんとんだきがしないんだけど",
        "pinyin": "I don't feel like I flew at all."
    },
    "79": {
        "character": "痛かったことしか記憶にないし",
        "letter": "いたかったことしかきおくにないし",
        "pinyin": "And all I remember is that it hurt."
    },
    "80": {
        "character": "ペンギンさんの夢が叶ったのに",
        "letter": "ぺんぎんさんのゆめがかなったのに",
        "pinyin": "Penguin's dream come true."
    },
    "81": {
        "character": "できたできたよ",
        "letter": "できたできたよ",
        "pinyin": "We did it. We did it."
    },
    "82": {
        "character": "でも全然達成感ないんだよね",
        "letter": "でもぜんぜんたっせいかんないんだよね",
        "pinyin": "But I don't feel accomplished at all."
    },
    "83": {
        "character": "ほら焼き芋できたよ",
        "letter": "ほらやきいもできたよ",
        "pinyin": "Look, I made a baked sweet potato."
    },
    "84": {
        "character": "あそっちね…",
        "letter": "あそっちね…",
        "pinyin": "That way..."
    },
    "85": {
        "character": "焚き火で焼くとひと味違うよね",
        "letter": "たきびでやくとひとあじちがうよね",
        "pinyin": "It's a little different when you roast them over a bonfire, isn't it?"
    },
    "86": {
        "character": "ホクホクですね",
        "letter": "ほくほくですね",
        "pinyin": "You're all hot and fluffy."
    },
    "87": {
        "character": "おいしいけど",
        "letter": "おいしいけど",
        "pinyin": "It's delicious, but..."
    },
    "88": {
        "character": "僕が空飛ぶ話はどうなったのかな",
        "letter": "ぼくがそらとぶはなしはどうなったのかな",
        "pinyin": "I wonder what happened to my flying story."
    },
    "89": {
        "character": "ペンギンさん私考えたんです",
        "letter": "ぺんぎんさんわたしかんがえたんです",
        "pinyin": "Penguin, I've been thinking."
    },
    "90": {
        "character": "目を閉じてみてください",
        "letter": "めをとじてみてください",
        "pinyin": "Close your eyes."
    },
    "91": {
        "character": "想像の世界で空を飛ぶ楽しさを味わってみて",
        "letter": "そうぞうのせかいでそらをとぶたのしさをあじわってみて",
        "pinyin": "Try the joy of flying in the world of your imagination."
    },
    "92": {
        "character": "却下",
        "letter": "きゃっか",
        "pinyin": "Rejected."
    },
    "93": {
        "character": "よぉ",
        "letter": "よぉ",
        "pinyin": "Yo."
    },
    "94": {
        "character": "あ～グリズリーさん",
        "letter": "あ～ぐりずりーさん",
        "pinyin": "Oh, Mr. Grizzly."
    },
    "95": {
        "character": "ペンギンさんが空飛ぶいい方法ない",
        "letter": "ぺんぎんさんがそらとぶいいほうほうない",
        "pinyin": "There's no good way for penguins to fly."
    },
    "96": {
        "character": "ほぉそんなの簡単じゃねえか",
        "letter": "ほぉそんなのかんたんじゃねえか",
        "pinyin": "Oh, that's so easy."
    },
    "97": {
        "character": "あっ",
        "letter": "あっ",
        "pinyin": "Ah!"
    },
    "98": {
        "character": "そういうことじゃないんだよ",
        "letter": "そういうことじゃないんだよ",
        "pinyin": "That's not what I meant."
    },
    "99": {
        "character": "悪かったな",
        "letter": "わるかったな",
        "pinyin": "Sorry about that."
    },
    "100": {
        "character": "あぁやっぱり気持よさそうだな～",
        "letter": "あぁやっぱりきもちよさそうだな～",
        "pinyin": "Oh, I knew that would feel good."
    },
    "101": {
        "character": "僕ねいいこと思いついたよ",
        "letter": "ぼくねいいことおもいついたよ",
        "pinyin": "I've got an idea."
    },
    "102": {
        "character": "よいしょ…",
        "letter": "よいしょ…",
        "pinyin": "There we go..."
    },
    "103": {
        "character": "鳥ってこんな景色を見てるんだ…",
        "letter": "とりってこんなけしきをみてるんだ…",
        "pinyin": "Birds have such a view..."
    },
    "104": {
        "character": "なんだか海の中にもよく似てる",
        "letter": "なんだかうみのなかにもよくにてる",
        "pinyin": "It's kind of like being in the ocean."
    },
    "105": {
        "character": "お疲れ～",
        "letter": "おつかれ～",
        "pinyin": "Good night."
    },
    "106": {
        "character": "お疲れさまでした",
        "letter": "おつかれさまでした",
        "pinyin": "Good work, sir."
    },
    "107": {
        "character": "あ～うまい",
        "letter": "あ～うまい",
        "pinyin": "Oh, it's so good!"
    },
    "108": {
        "character": "疲れたよ…",
        "letter": "つかれたよ…",
        "pinyin": "I'm tired..."
    },
    "109": {
        "character": "でもペンギンさんよかったですね",
        "letter": "でもぺんぎんさんよかったですね",
        "pinyin": "But I'm happy for you, Penguin."
    },
    "110": {
        "character": "一時はどうなることかと思ったけどね",
        "letter": "いちじはどうなることかとおもったけどね",
        "pinyin": "At one point I wondered what was going to happen."
    },
    "111": {
        "character": "まったくだ",
        "letter": "まったくだ",
        "pinyin": "Absolutely."
    },
    "112": {
        "character": "お～いお～いお～い",
        "letter": "お～いお～いお～い",
        "pinyin": "Hey, hey, hey, hey, hey."
    },
    "113": {
        "character": "そろそろおりたいんだけどな～",
        "letter": "そろそろおりたいんだけどな～",
        "pinyin": "I'd like to get off."
    },
    "114": {
        "character": "どうしたもんかな",
        "letter": "どうしたもんかな",
        "pinyin": "I don't know what to do."
    },
    "115": {
        "character": "あ～の～",
        "letter": "あ～の～",
        "pinyin": "Ah~no~"
    },
    "116": {
        "character": "こ～こ～で～す～",
        "letter": "こ～こ～で～す～",
        "pinyin": "This is... this is... this is... this is... this is... this is..."
    },
    "117": {
        "character": "待ってて～",
        "letter": "まってて～",
        "pinyin": "Wait for me!"
    },
    "118": {
        "character": "い～ま助けに～いくよ～",
        "letter": "い～またすけに～いくよ～",
        "pinyin": "I'm coming to save you!"
    },
    "119": {
        "character": "僕…いつになったらおりられるのかな",
        "letter": "ぼく…いつになったらおりられるのかな",
        "pinyin": "I wonder when I'll be able to get off."
    },
    "120": {
        "character": "ペンギンさんペンギンさん",
        "letter": "ぺんぎんさんぺんぎんさん",
        "pinyin": "Penguin! Penguin! Penguin!"
    },
    "121": {
        "character": "何パンダ君",
        "letter": "なにぱんだくん",
        "pinyin": "What's up, panda?"
    },
    "122": {
        "character": "どうしてお金持ちのおじさんは",
        "letter": "どうしておかねもちのおじさんは",
        "pinyin": "Why does your rich uncle"
    },
    "123": {
        "character": "僕を遺産のそうぞくにんにしないんだろう",
        "letter": "ぼくをいさんのそうぞくにんにしないんだろう",
        "pinyin": "I don't know why they won't make me a member of the estate's family."
    },
    "124": {
        "character": "君と全く関係ないからだよ",
        "letter": "きみとまったくかんけいないからだよ",
        "pinyin": "Because it has nothing to do with you."
    },
    "125": {
        "character": "じゃペンギンさん僕に毎月仕送りしてよ",
        "letter": "じゃぺんぎんさんぼくにまいつきしおくりしてよ",
        "pinyin": "Well, then, Mr. Penguin, send me money every month."
    },
    "126": {
        "character": "即断るよ",
        "letter": "そくことわるよ",
        "pinyin": "I'd say no in a heartbeat."
    },
    "127": {
        "character": "ペンギンさんって自分勝手だね",
        "letter": "ぺんぎんさんってじぶんかってだね",
        "pinyin": "You're so selfish, Mr. Penguin."
    },
    "128": {
        "character": "自分勝手の概念が今ここで変わったね",
        "letter": "じぶんかってのがいねんがいまここでかわったね",
        "pinyin": "Your concept of selfishness just changed right here, right now."
    },
    "129": {
        "character": "白熊君終わろ",
        "letter": "しろくまくんおわろ",
        "pinyin": "Polar bear, finish."
    },
    "130": {
        "character": "来週のしろくまカフェは",
        "letter": "らいしゅうのしろくまかふぇは",
        "pinyin": "Next week at the Shirokuma Cafe"
    },
    "131": {
        "character": "モザイクでお送りします",
        "letter": "もざいくでおおくりします",
        "pinyin": "We'll be sending you a mosaic."
    },
    "132": {
        "character": "ちゃんと見せます",
        "letter": "ちゃんとみせます",
        "pinyin": "I'll show you."
    },
    "133": {
        "character": "お楽しみに",
        "letter": "おたのしみに",
        "pinyin": "Enjoy!"
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