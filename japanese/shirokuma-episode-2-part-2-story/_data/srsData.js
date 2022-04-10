// Configuration
const localStorageKey = "japanese" + "Episode2Part2Story" + "Srs";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep2 Part 2 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 2. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    '1': {
        'character': 'カフェのお花見',
        'letter': 'Cherry blossom viewing at the cafe',
        'pinyin': 'かふぇのおはなみ',
        'definition': 'カフェ の お 花見',
        'pinyinSpace': 'カフェ の お はなみ'
    },
    '2': {
        'character': '誰にも言わないでよ',
        'letter': "Don't tell anyone.",
        'pinyin': 'だれにもいわないでよ',
        'definition': '誰にも 言わないで よ',
        'pinyinSpace': 'だれにも いわないで よ'
    },
    '3': {
        'character': 'はい',
        'letter': 'Yes, sir.',
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '4': {
        'character': '僕、好きなペンギンさんが居るんだ',
        'letter': 'I have a favorite penguin.',
        'pinyin': 'ぼく、すきなぺんぎんさんがいるん',
        'definition': '僕 好き な ペンギン さん が 居る ん だ',
        'pinyinSpace': 'ぼく 、 すき な ペンギン さん が おる/いる ん だ'
    },
    '5': {
        'character': 'すみません、抹茶パフェください',
        'letter': 'Excuse me. Matcha parfait, please.',
        'pinyin': 'すみません、まっちゃぱふぇください',
        'definition': 'すみません 抹茶 パフェ ください',
        'pinyinSpace': 'すみません 、 まっちゃ パフェ ください'
    },
    '6': {
        'character': 'それで',
        'letter': 'So...',
        'pinyin': 'それで',
        'definition': 'それで',
        'pinyinSpace': 'それで'
    },
    '7': {
        'character': '僕好きなペンギンさんが',
        'letter': 'My favorite penguin...',
        'pinyin': 'ぼくすきなぺんぎんさんが',
        'definition': '僕 好き な ペンギン さん が',
        'pinyinSpace': 'ぼく すき な ペンギン さん が'
    },
    '8': {
        'character': 'すみません、やっぱりいちごパフェにしてくれますか',
        'letter': 'Excuse me, can I still have the strawberry parfait?',
        'pinyin': 'すみません、やっぱりいちごぱふぇにしてくれますか',
        'definition': 'すみません やっぱり いちご パフェ に してくれます か',
        'pinyinSpace': 'すみません 、 やっぱり いちご パフェ に して くれます か'
    },
    '9': {
        'character': 'ちょっ',
        'letter': 'Hey! Are you listening to me?',
        'pinyin': 'ちょっと！きくきある？！',
        'definition': 'ちょっと 聞く 気 ある',
        'pinyinSpace': 'ちょっと ！ きく き ある ？！'
    },
    '10': {
        'character': 'こんにちは',
        'letter': 'Hello.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '11': {
        'character': 'しろくま君いつもの',
        'letter': 'Mr. Polar Bear, as always.',
        'pinyin': 'しろくまくんいつもの',
        'definition': 'しろくま 君 いつも の',
        'pinyinSpace': 'しろくま きみ/くん いつも の'
    },
    '12': {
        'character': 'お待ち遠様竹大盛りね',
        'letter': "I've been waiting for you... a big bowl of bamboo.",
        'pinyin': '',
        'definition': 'お待ち遠様 竹 大盛り ね',
        'pinyinSpace': 'おまちどおさま たけ おおもり ね'
    },
    '13': {
        'character': '',
        'letter': 'Bon appétit!',
        'pinyin': 'いただきま～す',
        'definition': 'いただき ま す',
        'pinyinSpace': 'いただき ま ～ す'
    },
    '14': {
        'character': 'やろうか',
        'letter': 'Shall we?',
        'pinyin': 'やろうか',
        'definition': 'やろう か',
        'pinyinSpace': 'やろう か'
    },
    '15': {
        'character': '何を',
        'letter': 'What are you doing?',
        'pinyin': 'なにを',
        'definition': '何 を',
        'pinyinSpace': 'なに を'
    },
    '16': {
        'character': 'ん？お花見',
        'letter': 'Hmm? Cherry blossom viewing',
        'pinyin': 'ん？おはなみ',
        'definition': 'ん  花見',
        'pinyinSpace': 'ん ？ お はなみ'
    },
    '17': {
        'character': 'すごいね、桜',
        'letter': 'Wow, cherry blossoms.',
        'pinyin': 'すごいね、さくら',
        'definition': 'すごい ね 桜',
        'pinyinSpace': 'すごい ね 、 さくら'
    },
    '18': {
        'character': '綺麗ですね',
        'letter': 'Beautiful.',
        'pinyin': 'きれいですね',
        'definition': '綺麗 です ね',
        'pinyinSpace': 'きれい です ね'
    },
    '19': {
        'character': 'あそこにしよう',
        'letter': "Let's go over there.",
        'pinyin': 'あそこにしよう',
        'definition': 'あそこ に しよう',
        'pinyinSpace': 'あそこ に しよう'
    },
    '20': {
        'character': 'すごいね',
        'letter': "That's great.",
        'pinyin': 'すごいね',
        'definition': 'すごい ね',
        'pinyinSpace': 'すごい ね'
    },
    '21': {
        'character': '今年も綺麗に咲いたね',
        'letter': 'It bloomed beautifully this year, too.',
        'pinyin': 'ことしもきれいにさいたね',
        'definition': '今年 も 綺麗 に 咲いた ね',
        'pinyinSpace': 'ことし も きれい に さいた ね'
    },
    '22': {
        'character': 'お摘みどうしよう',
        'letter': 'What shall we do about picking?',
        'pinyin': 'おつまみどうしよう',
        'definition': 'お 摘み どうしよう',
        'pinyinSpace': 'お つみ/つまみ どうしよう'
    },
    '23': {
        'character': '情緒がないなぁ',
        'letter': "You're so unemotional.",
        'pinyin': 'じょうちょがないなぁ',
        'definition': '情緒 が ない なぁ',
        'pinyinSpace': 'じょうちょ が ない なぁ'
    },
    '24': {
        'character': '桜は綺麗だなって話してるんだから',
        'letter': "I'm talking about how beautiful cherry blossoms are.",
        'pinyin': 'さくらはきれいだなってはなしてるんだから',
        'definition': '桜 は 綺麗 だ なっ 話してる ん だから',
        'pinyinSpace': 'さくら は きれい だ なって はなしてる ん だ から'
    },
    '25': {
        'character': 'うん、お摘み持ってない？',
        'letter': 'Yeah. Do you have any pickles?',
        'pinyin': 'うん、おつまみもってない？',
        'definition': 'うん お 摘み 持ってない',
        'pinyinSpace': 'うん 、 お つみ/つまみ もってない ？'
    },
    '26': {
        'character': '聞いてな',
        'letter': "You didn't say.",
        'pinyin': 'きいてないなまぁ、いいや',
        'definition': '聞いてない な まぁ いい や',
        'pinyinSpace': 'きいてない な まぁ 、 いい や'
    },
    '27': {
        'character': '花弁って食べられますかね',
        'letter': 'Can we eat the petals?',
        'pinyin': 'かべんってたべられますかね',
        'definition': '花弁 って 食べられます かね',
        'pinyinSpace': 'はなびら って たべら かね'
    },
    '28': {
        'character': 'もう一人情緒ないのがいるよ',
        'letter': "There's another emotionless one.",
        'pinyin': 'もうひとり',
        'definition': 'もう一人 情緒 ない の が いる よ',
        'pinyinSpace': 'もうひとり じょうちょ ない の が いる よ'
    },
    '29': {
        'character': 'ラマさんは草が食べられるなら食べられるんじゃない？',
        'letter': 'Llama, if you can eat grass, you can eat it.',
        'pinyin': 'らまさんはくさがたべられるならたべられるんじゃない？',
        'definition': 'ラマ さん は 草 が 食べられる なら 食 ん じゃない',
        'pinyinSpace': 'ラマ さん は くさ が たべられる なら たべられる ん じゃ ？'
    },
    '30': {
        'character': 'ね～竹持ってない？',
        'letter': 'Hey~ Do you have any bamboo?',
        'pinyin': 'ね～たけもってない？',
        'definition': 'ね 竹 持ってない',
        'pinyinSpace': 'ね ～ たけ もってない ？'
    },
    '31': {
        'character': '持ってないよ',
        'letter': "I don't have any.",
        'pinyin': 'もってないよ',
        'definition': '持ってない よ',
        'pinyinSpace': 'もってない よ'
    },
    '32': {
        'character': 'お',
        'letter': 'I brought your lunch.',
        'pinyin': 'おべんとうならもってきたよ',
        'definition': 'お弁当 なら 持って来た よ',
        'pinyinSpace': 'おべんとう なら もってきた よ'
    },
    '33': {
        'character': 'さすがしろくま君',
        'letter': "That's my boy.",
        'pinyin': 'さすがしろくまくん',
        'definition': 'さすが しろくま 君',
        'pinyinSpace': 'さすが しろくま きみ/くん'
    },
    '34': {
        'character': '僕買い出しいって来るね',
        'letter': "I'm gonna go shopping.",
        'pinyin': 'ぼくかいだしいってくるね',
        'definition': '僕 買い出し いって来る ね',
        'pinyinSpace': 'ぼく かいだし いってくる ね'
    },
    '35': {
        'character': 'なまけもの君？',
        'letter': 'Sloth?',
        'pinyin': 'なまけものくん？',
        'definition': 'なまけもの 君',
        'pinyinSpace': 'なまけもの きみ/くん ？'
    },
    '36': {
        'character': 'コンビニで',
        'letter': 'At the convenience store.',
        'pinyin': 'こんびにで',
        'definition': 'コンビニ で',
        'pinyinSpace': 'コンビニ で'
    },
    '37': {
        'character': '何か乾き物買ってくる',
        'letter': "I'll get you something dry.",
        'pinyin': 'なにかかわきものかって',
        'definition': '何か 乾き物 買ってくる',
        'pinyinSpace': 'なにか かわきもの かってくる'
    },
    '38': {
        'character': 'いいよ、あるものだけで',
        'letter': "No, I'm good. Just what I have.",
        'pinyin': 'いいよ、あるものだけで',
        'definition': 'いい よ ある もの だけ で',
        'pinyinSpace': 'いい よ 、 ある もの だけ で'
    },
    '39': {
        'character': 'すぐそこだから',
        'letter': "It's just around the corner.",
        'pinyin': 'すぐそこだから',
        'definition': 'すぐそこ だから',
        'pinyinSpace': 'すぐそこ だ·から'
    },
    '40': {
        'character': '行ってくるね',
        'letter': "I'll see you later.",
        'pinyin': 'いってくるね',
        'definition': '行ってくる ね',
        'pinyinSpace': 'いってくる ね'
    },
    '41': {
        'character': 'じゃね～',
        'letter': 'See you later.',
        'pinyin': 'じゃね～',
        'definition': 'じゃ ね',
        'pinyinSpace': 'じゃ ね ～'
    },
    '42': {
        'character': 'いってらっしゃい',
        'letter': 'Have a good day.',
        'pinyin': 'いってらっしゃい',
        'definition': 'いってらっしゃい',
        'pinyinSpace': 'いってらっしゃい'
    },
    '43': {
        'character': '乾杯～',
        'letter': 'Cheers!',
        'pinyin': 'かんぱい～',
        'definition': '乾杯',
        'pinyinSpace': 'かんぱい ～'
    },
    '44': {
        'character': '最高だなぁ',
        'letter': 'This is great.',
        'pinyin': 'さいこうだなぁ',
        'definition': '最高 だ なぁ',
        'pinyinSpace': 'さいこう だ なぁ'
    },
    '45': {
        'character': 'こんなに綺麗なのに、すぐに散っちゃうんだから',
        'letter': "It's so beautiful, but it'll be gone soon.",
        'pinyin': 'こんなにきれいなのに、すぐにちっちゃうんだから',
        'definition': 'こんなに 綺麗 な のに すぐに 散っちゃう ん だから',
        'pinyinSpace': 'こんなに  な のに 、 すぐに ちっちゃう ん だ から'
    },
    '46': {
        'character': 'ホント儚いよね',
        'letter': "It's really ephemeral, isn't it?",
        'pinyin': 'ほんとはかないよね',
        'definition': 'ホント 儚い よね',
        'pinyinSpace': 'ホント はかない よね'
    },
    '47': {
        'character': 'これ試しに作って見たんだ',
        'letter': 'I made these for you to try.',
        'pinyin': 'これためしにつくってみたんだ',
        'definition': 'これ 試しに 作って 見た ん だ',
        'pinyinSpace': 'これ ためしに つくって みた ん だ'
    },
    '48': {
        'character': 'あ～美味しそういただきます',
        'letter': 'Oh, that looks so good!',
        'pinyin': 'あ～おいしそういただきます',
        'definition': 'あ 美味しそう いただきます',
        'pinyinSpace': 'あ ～ おいしそう いただきます'
    },
    '49': {
        'character': 'ちょっと、食べ',
        'letter': "Don't be silly eating.",
        'pinyin': 'ちょっと、たべてばかないで',
        'definition': 'ちょっと 食べて ばか ないで',
        'pinyinSpace': 'ちょっと 、 たべて ばか ないで'
    },
    '50': {
        'character': 'もっとお花見らしいことしようよ',
        'letter': "Let's do something more hanami-like.",
        'pinyin': 'もっとおはなみらしいことしようよ',
        'definition': 'もっと お 花見 らしい こと しよう よ',
        'pinyinSpace': 'もっと お はなみ らしい こと しよう よ'
    },
    '51': {
        'character': 'お花見らしいこと？',
        'letter': "What's typical for cherry blossom viewing?",
        'pinyin': 'おはなみらしいこと？',
        'definition': 'お 花見 らしい こと',
        'pinyinSpace': 'お はなみ らしい こと ？'
    },
    '52': {
        'character': '歌うとか',
        'letter': 'Singing.',
        'pinyin': 'うたうとか',
        'definition': '歌う とか',
        'pinyinSpace': 'うたう とか'
    },
    '53': {
        'character': '僕歌下手',
        'letter': "I'm a terrible singer.",
        'pinyin': 'ぼくうたへた',
        'definition': '僕 歌 下手',
        'pinyinSpace': 'ぼく うた へた/したて'
    },
    '54': {
        'character': '同じく',
        'letter': 'Likewise.',
        'pinyin': 'おなじく',
        'definition': '同じく',
        'pinyinSpace': 'おなじく'
    },
    '55': {
        'character': '同じく',
        'letter': 'The same.',
        'pinyin': 'おなじく',
        'definition': '同じく',
        'pinyinSpace': 'おなじく'
    },
    '56': {
        'character': '踊るとか',
        'letter': 'Dancing.',
        'pinyin': 'おどるとか',
        'definition': '踊る とか',
        'pinyinSpace': 'おどる とか'
    },
    '57': {
        'character': '踊り？',
        'letter': 'Dancing?',
        'pinyin': 'おどり？',
        'definition': '踊り',
        'pinyinSpace': 'おどり ？'
    },
    '58': {
        'character': '踊るんですか',
        'letter': 'You dance?',
        'pinyin': 'おどるんですか',
        'definition': '踊る ん です か',
        'pinyinSpace': 'おどる ん です か'
    },
    '59': {
        'character': 'ダンスですか',
        'letter': 'Dance?',
        'pinyin': 'だんすですか',
        'definition': 'ダンス です か',
        'pinyinSpace': 'ダンス です か'
    },
    '60': {
        'character': 'フラダンス？',
        'letter': 'Hula dancing?',
        'pinyin': 'ふらだんす？',
        'definition': 'フラダンス',
        'pinyinSpace': 'フラダンス ？'
    },
    '61': {
        'character': 'ベリーダンス？',
        'letter': 'Belly dancing?',
        'pinyin': '',
        'definition': 'ベリーダンス',
        'pinyinSpace': 'ベリーダンス ？'
    },
    '62': {
        'character': '腹ダンス？',
        'letter': 'Belly dance?',
        'pinyin': 'はらだんす？',
        'definition': '腹 ダンス',
        'pinyinSpace': 'はら ダンス ？'
    },
    '63': {
        'character': 'ペンギンさん寝てる',
        'letter': "Penguin, you're sleeping.",
        'pinyin': 'ぺんぎんさんねてる',
        'definition': 'ペンギン さん 寝てる',
        'pinyinSpace': 'ペンギ さん ねてる'
    },
    '64': {
        'character': '違うよ、ダジャレどうしようもなくて倒れちゃったんだよ',
        'letter': "No, I couldn't help myself with the pun. I collapsed.",
        'pinyin': 'ちがうよ、だじゃれどうしようもなくてたおれちゃったんだよ',
        'definition': '違う よ  どうしようもなくて 倒れちゃった ん だ よ',
        'pinyinSpace': 'ちがう よ 、 ダジャレ どうしようもなくて たおれちゃった ん だ よ'
    },
    '65': {
        'character': 'ひどいなぁ、ペンギンさん',
        'letter': "You're terrible, Penguin.",
        'pinyin': 'ひどい',
        'definition': 'ひどい なぁ ペンギン さん',
        'pinyinSpace': 'ひどい なぁ 、 ペンギン さん'
    },
    '66': {
        'character': 'もっと',
        'letter': "There's got to be more!",
        'pinyin': 'もっとあるでしょう！',
        'definition': 'もっと ある でしょう',
        'pinyinSpace': 'もっと ある でしょう ！'
    },
    '67': {
        'character': 'お花見らしいこと、物真似とか',
        'letter': 'Something hanami-like, like an impersonation.',
        'pinyin': 'おはなみらしいこと、ものまねとか',
        'definition': 'お 花見 らしい こと 物真似 とか',
        'pinyinSpace': 'お はなみ らしい こと 、 ものまね とか'
    },
    '68': {
        'character': 'わ～～名倉さんの物真似でしょう',
        'letter': "Wow~~ I'm sure it's an impersonation of Mr. Nagura.",
        'pinyin': 'わ～～なぐらさんのものまねでしょう',
        'definition': 'わ 名 倉 さん の 物真似 ',
        'pinyinSpace': 'わ ～～ な くら さん の ものまね でしょう'
    },
    '69': {
        'character': '食べてるだけなのに',
        'letter': "We're just eating.",
        'pinyin': 'たべてるだけなのに',
        'definition': '食べてる だけ な のに',
        'pinyinSpace': 'たべてる だけ な のに'
    },
    '70': {
        'character': '物足りないね',
        'letter': "That's not enough.",
        'pinyin': 'ものたりないね',
        'definition': '物足りない ね',
        'pinyinSpace': 'ものたりない ね'
    },
    '71': {
        'character': 'よし、しろくま君',
        'letter': 'Okay, Shirokuma.',
        'pinyin': 'よし、しろくまくん',
        'definition': 'よし しろくま 君',
        'pinyinSpace': 'よし 、 しろくま きみ/くん'
    },
    '72': {
        'character': '僕をその木の上に挙げて空を飛んでみせるよ',
        'letter': "I'm gonna get up in that tree and I'm gonna fly through the air.",
        'pinyin': 'ぼくをそのきのうえにあげてそらをとんでみせるよ',
        'definition': '僕 を その 木 の 上 に 挙げて 空を飛んで みせる よ',
        'pinyinSpace': 'ぼく を その き の うえ/かみ/じょう に あげて そらをとんで みせる よ'
    },
    '73': {
        'character': '止めたほうがいいよ',
        'letter': 'You better not.',
        'pinyin': 'とめたほうがいいよ',
        'definition': '止めた ほ よ',
        'pinyinSpace': 'とめた/やめた ほうがいい よ'
    },
    '74': {
        'character': 'なんで止めるの？',
        'letter': 'Why would I stop you?',
        'pinyin': 'なんでとめるの？',
        'definition': 'なんで 止める の',
        'pinyinSpace': 'なんで とめる/やめる の ？'
    },
    '75': {
        'character': 'じゃパンダ君でいいよ',
        'letter': 'Okay, you can call me Mr. Panda.',
        'pinyin': 'じゃぱんだくんでいいよ',
        'definition': 'じゃ パンダ 君 でいい よ',
        'pinyinSpace': 'じゃ パンダ きみ/くん で いい よ'
    },
    '76': {
        'character': 'ほら、僕を木の上に乗せて',
        'letter': 'Come on. Put me on top of the tree.',
        'pinyin': 'ほら、ぼくをきのうえにのせて',
        'definition': 'ほら 僕 を 木 の 上 に 乗せて',
        'pinyinSpace': 'ほら 、 ぼく を き の うえ/かみ/じょう に のせて'
    },
    '77': {
        'character': '僕ラマですけど',
        'letter': "I'm a llama.",
        'pinyin': 'ぼくらまですけど',
        'definition': '僕 ラマ です けど',
        'pinyinSpace': 'ぼく ラマ です けど'
    },
    '78': {
        'character': '酔ってますね',
        'letter': "You're drunk.",
        'pinyin': 'よってますね',
        'definition': '酔ってます ね',
        'pinyinSpace': 'よってます ね'
    },
    '79': {
        'character': '飲み過ぎじゃない？',
        'letter': "You're drinking too much, aren't you?",
        'pinyin': 'のみすぎじゃない？',
        'definition': '飲み過ぎ じゃない',
        'pinyinSpace': 'のみすぎ じゃない ？'
    },
    '80': {
        'character': 'すごいすごい',
        'letter': 'Oh, my God. Oh, my God.',
        'pinyin': 'すごいすごい',
        'definition': 'すごい すごい',
        'pinyinSpace': 'すごい すごい'
    },
    '81': {
        'character': 'お花見らしくなってきたよ、ペンギンさん',
        'letter': "It's starting to look a lot like cherry blossom viewing, Penguin.",
        'pinyin': 'おはなみらしくなってきたよ、ぺんぎんさん',
        'definition': 'お 花見 らしくなってきた よ ペンギン さん',
        'pinyinSpace': 'お はなみ らしくなってきた よ 、 ペンギン さん'
    },
    '82': {
        'character': '寝てる',
        'letter': "He's sleeping.",
        'pinyin': 'ねてる',
        'definition': '寝てる',
        'pinyinSpace': 'ねてる'
    },
    '83': {
        'character': '熟睡ですね',
        'letter': "You're sound asleep.",
        'pinyin': 'じゅくすいですね',
        'definition': '熟睡 です ね',
        'pinyinSpace': 'じゅくすい です ね'
    },
    '84': {
        'character': '寝るな',
        'letter': "Don't sleep.",
        'pinyin': 'ねるな',
        'definition': '寝る な',
        'pinyinSpace': 'ねる な'
    },
    '85': {
        'character': '起きてるよ',
        'letter': "I'm awake.",
        'pinyin': 'おきてるよ',
        'definition': '起きてる よ',
        'pinyinSpace': 'おきてる よ'
    },
    '86': {
        'character': '最近の若いペンギンはなっちゃないんだよ',
        'letter': "Young penguins these days aren't what they used to be.",
        'pinyin': 'さいきんのわかいぺんぎんはなっちゃないんだよ',
        'definition': '最近 の 若い ペンギン は なっちゃ な いん だ よ',
        'pinyinSpace': 'さいきん の わかい ペンギン は なっち な いん だ よ'
    },
    '87': {
        'character': '可愛いだけじゃダメなんだよ',
        'letter': "It's not enough to be cute.",
        'pinyin': 'かわいいだけじゃだめなんだよ',
        'definition': '可愛い だけ じゃ ダメ な ん だ よ',
        'pinyinSpace': 'かわいい だけ  ダメ な ん だ よ'
    },
    '88': {
        'character': 'そうでしょう',
        'letter': 'Of course you are.',
        'pinyin': 'そうで',
        'definition': 'そう でしょう',
        'pinyinSpace': 'そう でしょう'
    },
    '89': {
        'character': '絡むね',
        'letter': "I'm involved.",
        'pinyin': 'からむね',
        'definition': '絡む ね',
        'pinyinSpace': 'からむ ね'
    },
    '90': {
        'character': '聞いてる、吉崎さん',
        'letter': 'I hear you, Mr. Yoshizaki.',
        'pinyin': 'きいてる、よしざきさん',
        'definition': '聞いてる 吉 崎 さん',
        'pinyinSpace': 'きいてる 、 /よ さき さん'
    },
    '91': {
        'character': '誰それ',
        'letter': "Who's that?",
        'pinyin': 'だれそれ',
        'definition': '誰それ',
        'pinyinSpace': 'だれそれ'
    },
    '92': {
        'character': '吉崎さん、目の周りにあざがあるよ',
        'letter': 'Mr. Yoshizaki, you have bruises around your eyes.',
        'pinyin': 'よしざきさん、めのまわりにあざがあるよ',
        'definition': '吉 崎 さん 目 の 周り に あざ が ある よ',
        'pinyinSpace': 'きち/よ さき さん 、 め の まわり に あざ が ある よ'
    },
    '93': {
        'character': '誰かに殴られたよ？大丈夫？',
        'letter': 'Someone hit you, okay? Are you okay?',
        'pinyin': 'だれかになぐられたよ？だいじょうぶ？',
        'definition': '誰か に 殴られた よ 大丈夫',
        'pinyinSpace': 'だれか に なぐられた よ ？ だいじょうぶ ？'
    },
    '94': {
        'character': '面倒臭いな',
        'letter': "You're a pain in the ass.",
        'pinyin': 'めんどうくさいな',
        'definition': '面倒臭い な',
        'pinyinSpace': 'めんどくさい な'
    },
    '95': {
        'character': 'ね～名倉さん、聞いてる？',
        'letter': 'Hey, Mr. Nagura, are you listening?',
        'pinyin': 'ね～なぐらさん、きいてる？',
        'definition': 'ね 名 倉 さん 聞いてる',
        'pinyinSpace': 'ね ～ な くら さん 、 きいてる '
    },
    '96': {
        'character': '食べてるだけなのに',
        'letter': "I'm just eating.",
        'pinyin': 'たべてるだけなのに',
        'definition': '食べてる だけ な のに',
        'pinyinSpace': 'たべてる だけ な のに'
    },
    '97': {
        'character': '誰にも言わないでね',
        'letter': "Don't tell anyone.",
        'pinyin': 'だれにもいわないでね',
        'definition': '誰にも 言わないで ね',
        'pinyinSpace': 'だれにも いわないで ね'
    },
    '98': {
        'character': '何を',
        'letter': 'What the hell?',
        'pinyin': 'なにを',
        'definition': '何 を',
        'pinyinSpace': 'なに を'
    },
    '99': {
        'character': '好きなペンギンがいるんだよ',
        'letter': "There's a penguin I like.",
        'pinyin': 'すきなぺんぎんがいるんだよ',
        'definition': '好き な ペンギン が いる ん だ よ',
        'pinyinSpace': 'すき な ペンギン が いる ん  よ'
    },
    '100': {
        'character': 'パン屋のバイトのペンコさんっていうんだけど',
        'letter': 'I work part-time at a bakery. Her name is Penco.',
        'pinyin': 'ぱんやのばいとのぺんこさんっていうんだけど',
        'definition': 'パン屋 の バイト の ペン コ さん っていう ん だけど',
        'pinyinSpace': 'パンや の バイト の ペン コ さん っていう ん だけど'
    },
    '101': {
        'character': 'ペンコさん！',
        'letter': 'Mr. Penco!',
        'pinyin': 'ぺんこさん！',
        'definition': 'ペン コ さん',
        'pinyinSpace': 'ペン コ さん ！'
    },
    '102': {
        'character': '僕パンダだよ',
        'letter': "I'm a panda.",
        'pinyin': 'ぼくぱんだだよ',
        'definition': '僕 パ だ よ',
        'pinyinSpace': 'ぼく パンダ だ よ'
    },
    '103': {
        'character': 'ペンコさん一生僕と同じ魚を食べてください！',
        'letter': 'Mr. Penco, please eat the same fish as me for the rest of your life!',
        'pinyin': 'ぺんこさんいっしょうぼくとおなじさかなをたべてください！',
        'definition': 'ペン コ さん 一生 僕 と 同じ 魚 を 食べてください',
        'pinyinSpace': 'ペン コ さん い ぼく と おなじ/どうじ さかな を たべて ください ！'
    },
    '104': {
        'character': 'お願いします',
        'letter': 'Please.',
        'pinyin': 'おねがいします',
        'definition': 'お願いします',
        'pinyinSpace': 'おねがい·します'
    },
    '105': {
        'character': '助け',
        'letter': 'Help!',
        'pinyin': 'たすけて！',
        'definition': '助けて',
        'pinyinSpace': 'たすけて ！'
    },
    '106': {
        'character': 'もう面白',
        'letter': "It's funny already. You can watch.",
        'pinyin': 'もうおもしろいから、みていいよ',
        'definition': 'もう 面白い から 見て よ',
        'pinyinSpace': 'もう おもしろい から 、 みて いい よ'
    },
    '107': {
        'character': 'き、聞いてくれますか',
        'letter': 'Can I have your attention, please?',
        'pinyin': 'き、きいてくれますか',
        'definition': 'き 聞いてくれます か',
        'pinyinSpace': 'き 、 きいて くれます か'
    },
    '108': {
        'character': '何を',
        'letter': 'What?',
        'pinyin': 'なにを',
        'definition': '何 を',
        'pinyinSpace': 'なに を'
    },
    '109': {
        'character': '僕ペンコさんのポエムを書いたんです',
        'letter': 'I wrote a poem about Penco.',
        'pinyin': 'ぼくぺんこさんのぽえむをかいたんです',
        'definition': '僕 ペン コ さん の ポエム を 書いた ん です',
        'pinyinSpace': 'ぼく ペン コ さん の ポエム を かいた ん です'
    },
    '110': {
        'character': 'どんな？',
        'letter': 'What kind?',
        'pinyin': 'どんな？',
        'definition': 'どんな',
        'pinyinSpace': 'どんな ？'
    },
    '111': {
        'character': 'theペンコさん',
        'letter': 'The Penco.',
        'pinyin': 'theぺんこさん',
        'definition': 'ペン コ さん',
        'pinyinSpace': 'the ペン コ さん'
    },
    '112': {
        'character': 'the？',
        'letter': 'The?',
        'pinyin': 'the？',
        'definition': '',
        'pinyinSpace': 'the？'
    },
    '113': {
        'character': 'ペンコさんが笑う',
        'letter': 'Mr. Penco laughs.',
        'pinyin': 'ぺんこさんがわらう',
        'definition': 'ペン コ さん が 笑う',
        'pinyinSpace': 'ペン  さん が わらう'
    },
    '114': {
        'character': 'ペンコさんが歩く',
        'letter': 'Mr. Penco walks.',
        'pinyin': 'ぺんこさんがあるく',
        'definition': 'ペン コ さん が 歩く',
        'pinyinSpace': 'ペン コ さん が あるく'
    },
    '115': {
        'character': 'ペンコさんが魚を食べる',
        'letter': 'Mr. Penco eats fish',
        'pinyin': 'ぺんこさんがさかなをたべる',
        'definition': 'ペン コ さん が 魚 を 食べる',
        'pinyinSpace': 'ペン コ さん が さかな を たべる'
    },
    '116': {
        'character': 'どうですか、ペンコさん',
        'letter': 'What do you think, Mr. Penco?',
        'pinyin': 'どうですか、ぺんこさん',
        'definition': 'どう です か ペン コ さん',
        'pinyinSpace': 'どう です か 、 ペン コ さん'
    },
    '117': {
        'character': '僕？',
        'letter': 'Me?',
        'pinyin': 'ぼく？',
        'definition': '僕',
        'pinyinSpace': 'ぼく ？'
    },
    '118': {
        'character': 'ペンギンさん、ちょっとペンコさんと散歩してきたら、',
        'letter': "Penguin, why don't you go for a little walk with Mr. Penco.",
        'pinyin': 'ぺんぎんさん、ちょっとぺんこさんとさんぽしてきたら、',
        'definition': 'ペンギン さん ちょっと ペン コ さん と 散歩してきたら',
        'pinyinSpace': 'ペンギン さん 、 ちょっと ペン コ さん と さんぽ してきたら 、'
    },
    '119': {
        'character': 'え？いいの',
        'letter': "Huh? It's okay.",
        'pinyin': 'え？いいの',
        'definition': 'え いい の',
        'pinyinSpace': 'え ？ いい の'
    },
    '120': {
        'character': 'じゃ、行こうか、ペンコさん',
        'letter': "Well, let's go, Mr. Penco.",
        'pinyin': 'じゃ、いこうか、ぺんこさん',
        'definition': 'じゃ 行こう か ペン コ さん',
        'pinyinSpace': 'じゃ 、 いこう か 、 ペン コ さん'
    },
    '121': {
        'character': 'なんでまた僕？',
        'letter': 'Why me again?',
        'pinyin': 'なんでまたぼく？',
        'definition': 'なんで また 僕',
        'pinyinSpace': 'なんで また ぼく ？'
    },
    '122': {
        'character': 'ほら、行こう',
        'letter': "Come on. Let's go.",
        'pinyin': 'ほら、いこう',
        'definition': 'ほら 行こう',
        'pinyinSpace': 'ほら 、 いこう'
    },
    '123': {
        'character': '二人きりのロマンチックな夜だね',
        'letter': "It's a romantic evening, just the two of us.",
        'pinyin': 'ふたりきりのろまんちっくなよるだね',
        'definition': '二人きり の ロマンチック な 夜 だ ね',
        'pinyinSpace': 'ふたりきり の ロマンチック な よる だ ね'
    },
    '124': {
        'character': 'いろいろ違ってる気がするよ',
        'letter': 'I feel different about a lot of things.',
        'pinyin': 'いろいろちがってるきがするよ',
        'definition': 'いろいろ 違ってる 気がする よ',
        'pinyinSpace': 'いろいろ ちがってる きがする よ'
    },
    '125': {
        'character': 'いつまでもこうして歩いていたいなぁ',
        'letter': 'I wish we could walk like this forever.',
        'pinyin': 'いつまでもこうしてあるいていたいなぁ',
        'definition': 'いつまでも こうして 歩いていたい なぁ',
        'pinyinSpace': 'いつまでも こうして あるいていたい なぁ'
    },
    '126': {
        'character': '帰りたいよ',
        'letter': 'I wanna go home.',
        'pinyin': 'かえりたいよ',
        'definition': '帰りたい よ',
        'pinyinSpace': 'かえりたい よ'
    },
    '127': {
        'character': 'ペンコさん！よかったら僕と付き合い……',
        'letter': 'Mr. Penco! You can go out with me if you want. ......',
        'pinyin': 'ぺんこさん！よかったらぼくとつきあい……',
        'definition': 'ペン コ さん よかったら 僕 と 付き合い',
        'pinyinSpace': 'ペン コ さん ！ よかったら ぼく と つきあい ……'
    },
    '128': {
        'character': 'あれ！吉崎さん、いつの間に',
        'letter': 'Hey! Mr. Yoshizaki, when did you...',
        'pinyin': 'あれ！よしざきさん、いつのまに',
        'definition': 'あれ 吉 崎 さん いつの間に',
        'pinyinSpace': 'あれ ！ きち/よ さき さん 、 いつのまに'
    },
    '129': {
        'character': '吉崎さんって誰',
        'letter': "Who's Mr. Yoshizaki?",
        'pinyin': 'よしざきさんってだれ',
        'definition': '吉 崎 さん って 誰',
        'pinyinSpace': 'きち/よ さき さん って だれ'
    },
    '130': {
        'character': 'ペンコさん、どこ！ペンコさん！',
        'letter': 'Penko, where are you! Mr. Penko!',
        'pinyin': 'ぺんこさん、どこ！ぺんこさん！',
        'definition': 'ペン コ さん どこ ペン コ さん',
        'pinyinSpace': 'ペン コ さん 、 どこ ！ ペン コ さん ！'
    },
    '131': {
        'character': 'ペンギンさん！',
        'letter': 'Penguin!',
        'pinyin': 'ぺんぎんさん！',
        'definition': 'ペンギン さん',
        'pinyinSpace': 'ペンギン さん ！'
    },
    '132': {
        'character': '寝ている',
        'letter': "He's sleeping.",
        'pinyin': 'ねている',
        'definition': '寝ている',
        'pinyinSpace': 'ねている'
    },
    '133': {
        'character': 'お待たせ',
        'letter': 'Here you go.',
        'pinyin': 'おまたせ',
        'definition': 'お 待たせ',
        'pinyinSpace': 'お またせ'
    },
    '134': {
        'character': 'コンビニ行ってきたよ',
        'letter': 'I went to the convenience store.',
        'pinyin': 'こんびにいってきたよ',
        'definition': 'コンビニ 行ってきた よ',
        'pinyinSpace': 'コンビニ いってきた よ'
    },
    '135': {
        'character': '誰もいない',
        'letter': "There's no one here.",
        'pinyin': 'だれもいない',
        'definition': '誰も いない',
        'pinyinSpace': 'だれも いない'
    },
    '136': {
        'character': '夜桜も綺麗だよ',
        'letter': 'Cherry blossoms are beautiful at night.',
        'pinyin': 'よざくらもき',
        'definition': '夜桜 も 綺麗 だ よ',
        'pinyinSpace': 'よざくら も きれい だ よ'
    },
    '137': {
        'character': '昨日は',
        'letter': 'You surprised me yesterday.',
        'pinyin': 'きのうはびっくりしたね',
        'definition': '昨日 は びっくりした ね',
        'pinyinSpace': 'きのう は びっくりした ね'
    },
    '138': {
        'character': '毎年こうだから',
        'letter': "It's like this every year.",
        'pinyin': 'まいとしこうだから',
        'definition': '毎年 こう だから',
        'pinyinSpace': 'まいとし こう だ·から'
    },
    '139': {
        'character': 'ペンギンさんって酒癖悪いね',
        'letter': "You penguins have a bad drinking problem, don't you?",
        'pinyin': 'ぺんぎんさんってさけぐせわるいね',
        'definition': 'ペンギン さん って 酒癖 悪い ね',
        'pinyinSpace': 'ペンギン さん って さけぐせ わ ね'
    },
    '140': {
        'character': 'いらっしゃい',
        'letter': 'Hi, honey.',
        'pinyin': 'いらっしゃい',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '141': {
        'character': 'なんか頭が痛いよ',
        'letter': 'My head hurts somehow.',
        'pinyin': 'なんかあたまがいたいよ',
        'definition': 'なんか 頭が痛い よ',
        'pinyinSpace': 'なんか あたまがいたい よ'
    },
    '142': {
        'character': 'あれそれでペンコさんのパン屋さんで買ったの',
        'letter': "That's why I bought it at Penco's bakery.",
        'pinyin': 'あれそれでぺんこさんのぱんやさんでかったの',
        'definition': 'あれ それで ペン コ さん の パン屋 さん で 買った の',
        'pinyinSpace': 'あれ それで ペン コ さん の パンや さん で かった の'
    },
    '143': {
        'character': 'え？なんで知ってるの',
        'letter': 'What? How did you know?',
        'pinyin': 'え？なんでしってるの',
        'definition': 'え なんで 知ってる の',
        'pinyinSpace': 'え ？ なんで しってる の'
    },
    '144': {
        'character': 'theペンコさん',
        'letter': 'The Penco.',
        'pinyin': 'theぺんこさん',
        'definition': 'ペン コ さん',
        'pinyinSpace': 'the ペン コ さん'
    },
    '145': {
        'character': 'なんで僕のポエムをなんで知ってるの',
        'letter': 'How do you know my poem?',
        'pinyin': 'なんでぼくのぽえむをなんでしってるの',
        'definition': 'なんで 僕 の ポエム を なんで 知ってる の',
        'pinyinSpace': 'なんで ぼく の ポエム を なんで しってる の'
    },
    '146': {
        'character': 'ペンコさん一生僕と同じ魚を食べてください',
        'letter': 'Mr. Penco, please eat the same fish as me for the rest of your life.',
        'pinyin': 'ぺ',
        'definition': 'ペン コ さん 一生 僕 と 同じ 魚 を 食べてください',
        'pinyinSpace': 'ペン コ さん いっしょう ぼく と おなじ/どうじ さかな を たべて ください'
    },
    '147': {
        'character': '僕が考えてるプロポーズの言葉！！',
        'letter': "That's what I'm thinking of proposing!",
        'pinyin': 'ぼくがかんがえてるぷろぽーずのことば！！',
        'definition': '僕 が 考えてる プロポーズ の 言葉',
        'pinyinSpace': 'ぼく が かんがえてる プロポーズ の ことば ！！'
    },
    '148': {
        'character': 'な何でそれを！',
        'letter': 'What the hell did you do that for?',
        'pinyin': 'ななんでそれを！',
        'definition': 'な 何で それ を',
        'pinyinSpace': 'な なんで それ を ！'
    },
    '149': {
        'character': '覚えてないんですか',
        'letter': "You don't remember?",
        'pinyin': 'おぼえてないんですか',
        'definition': '覚えてない ん です か',
        'pinyinSpace': 'おぼえてない ん です '
    },
    '150': {
        'character': '誰にも話してないのに',
        'letter': "I haven't told anyone.",
        'pinyin': 'だれにもはなしてないのに',
        'definition': '誰にも 話してない のに',
        'pinyinSpace': 'だれにも はなしてない のに'
    },
    '151': {
        'character': 'ペンコさんが笑う',
        'letter': 'Mr. Penko laughs',
        'pinyin': 'ぺんこさんがわらう',
        'definition': 'ペン コ さん が 笑う',
        'pinyinSpace': 'ペン コ さん が わらう'
    },
    '152': {
        'character': 'ペンコさんが歩く',
        'letter': 'Mr. Penko walks.',
        'pinyin': 'ぺんこさんがあるく',
        'definition': 'ペン コ さん が 歩く',
        'pinyinSpace': 'ペン コ さん が あるく'
    },
    '153': {
        'character': 'ペンコさ',
        'letter': 'Mr. Penko eats fish.',
        'pinyin': 'ぺんこさんがさかなをたべる',
        'definition': 'ペン コ さん が 魚 を 食べる',
        'pinyinSpace': 'ペン コ さん が さかな を たべる'
    },
    '154': {
        'character': 'やめて',
        'letter': 'Stop it.',
        'pinyin': 'やめて',
        'definition': 'やめて',
        'pinyinSpace': 'やめて'
    },
    '155': {
        'character': 'ペンギンさんペンギンさん',
        'letter': 'Mr. Penguin. Mr. Penguin.',
        'pinyin': 'ぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん'
    },
    '156': {
        'character': 'プチ整形した？',
        'letter': 'Have you had a petit facelift?',
        'pinyin': '',
        'definition': 'プチ整形 した',
        'pinyinSpace': 'プチせいけい した ？'
    },
    '157': {
        'character': 'してないよ',
        'letter': "I didn't.",
        'pinyin': 'してないよ',
        'definition': 'してない よ',
        'pinyinSpace': 'してない よ'
    },
    '158': {
        'character': '逆に聞くけど、',
        'letter': 'On the contrary, I ask you, what makes you think that?',
        'pinyin': 'ぎゃくにきくけど、なんでそうおもった？',
        'definition': '逆 に 聞く けど 何 でそう 思った',
        'pinyinSpace': 'ぎゃく に きく けど 、 なん でそう おもった ？'
    },
    '159': {
        'character': 'じゃ僕も逆に聞くけど',
        'letter': "I'll ask you the same thing.",
        'pinyin': 'じゃぼくもぎゃくにきくけど',
        'definition': 'じゃ 僕 も 逆 に 聞く けど',
        'pinyinSpace': 'じゃ ぼく も ぎゃく に きく けど'
    },
    '160': {
        'character': 'ナタデココってなんで出来てると思う？',
        'letter': 'What do you think nata de coco is made of?',
        'pinyin': 'なたでここ',
        'definition': 'ナタデココ って なんで 出来てる と 思う',
        'pinyinSpace': 'ナタデココ って なんで できてる と おもう ？'
    },
    '161': {
        'character': '何の逆？',
        'letter': 'Reverse of what?',
        'pinyin': 'なんのぎゃく？',
        'definition': '何の 逆',
        'pinyinSpace': 'なんの ぎゃく ？'
    },
    '162': {
        'character': 'しろくま君纏めて',
        'letter': 'Polly Bear, put it all together.',
        'pinyin': 'しろくまくんまとめて',
        'definition': 'しろくま 君 纏めて',
        'pinyinSpace': 'しろくま きみ/くん まとめて'
    },
    '163': {
        'character': '次回のしろくまカフェは',
        'letter': 'Next time at the Shirokuma Cafe',
        'pinyin': 'じかいのしろくまかふぇは',
        'definition': '次回 の しろくま カフェ は',
        'pinyinSpace': 'じかい の しろくま カフェ は'
    },
    '164': {
        'character': '実',
        'letter': "We'll be sending you a live-action version.",
        'pinyin': 'じっしゃばんでおおくりしますおたのしみに',
        'definition': '実 版 で お 送り します お 楽しみ に',
        'pinyinSpace': 'じっしゃ はん で お おくり します お たのし に'
    },
    '165': {
        'character': '送らないよアニメだよ',
        'letter': "I'm not sending you anything, it's a cartoon.",
        'pinyin': 'おく',
        'definition': '送らない よ アニメ だ よ',
        'pinyinSpace': 'おくらない よ アニメ だ よ'
    },
    '166': {
        'character': 'お楽しみに',
        'letter': 'Enjoy!',
        'pinyin': 'おたのしみに',
        'definition': 'お 楽しみ に',
        'pinyinSpace': 'お たのしみ に'
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