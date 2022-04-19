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

const allSyllableMap = {
    '1': {
        'character': 'パンダくんの悩み',
        'letter' : "Panda's troubles",
        'definition': 'パンダ くん の 悩み',
        'pinyinSpace': 'パンダ くん の なやみ'
    },
    '2': {
        'character': '笹子さん肉じゃがが好きな男ってどう思う',
        'letter': 'Miss Sasako, how do you feel about men who like meat and potato stew?',
        'pinyin': 'ささごさんにくじゃががすきなおとこってどうおもう？',
        'definition': '笹 子 さん 肉じゃが が 好き な 男 って どう 思う',
        'pinyinSpace': 'ささ こ さん にくじゃが が すき な おとこ って どう おもう ？'
    },
    '3': {
        'character': 'え！？今答えなくていいですか？',
        'letter': "I'd rather not answer right now, if that's okay.",
        'pinyin': 'え！？いまこたえなくていいですか？',
        'definition': 'え 今 答えなくていい です か',
        'pinyinSpace': 'え ！？ いま こたえなくて いい です か ？'
    },
    '4': {
        'character': 'いいですよ',
        'letter': "That's fine.",
        'pinyin': 'いいですよ',
        'definition': 'いいです よ',
        'pinyinSpace': 'いいです よ'
    },
    '5': {
        'character': 'つれないなぁ',
        'letter': 'That was standoffish.',
        'pinyin': 'つれないなぁ',
        'definition': 'つれない なぁ',
        'pinyinSpace': 'つれない なぁ'
    },
    '6': {
        'character': 'ねえ僕いまだに自然体っていうのがわからないの',
        'letter': "You know, I still can't figure out this 'act naturally' thing.",
        'pinyin': 'ねえぼくいまだにしぜんたいっていうのがわからないの',
        'definition': 'ね え 僕 いまだに 自然体 っていう の が わからない の',
        'pinyinSpace': 'ね え ぼく いまだに しぜんたい っていう の が わからない の'
    },
    '7': {
        'character': '自然体でいいです',
        'letter': 'Just act naturally.',
        'pinyin': 'しぜんたいでいいです',
        'definition': '自然体 で いいです',
        'pinyinSpace': 'しぜんたい で いいです'
    },
    '8': {
        'character': 'いくら考えても答えが出なくて',
        'letter': "No matter how much I think about it, I can't find the answer.",
        'pinyin': 'いくらかんがえてもこたえがでなくて',
        'definition': 'いくら 考えても 答え が 出なくて',
        'pinyinSpace': 'いくら かんがえても こたえ が でなくて'
    },
    '9': {
        'character': '常勤パンダさん自然体って何？',
        'letter': 'What does it mean to act naturally, Mr. Full-time Panda?',
        'pinyin': 'じょうきんぱんださんしぜんたいってなに？',
        'definition': '常勤 パンダ さん 自然体 って 何',
        'pinyinSpace': 'じょうきん パンダ さん しぜんたい って なに/なん ？'
    },
    '10': {
        'character': '寝てる！',
        'letter': "He's asleep!",
        'pinyin': 'ねてる！',
        'definition': '寝てる',
        'pinyinSpace': 'ねてる ！'
    },
    '11': {
        'character': 'ねえ半田さん',
        'letter': 'Hey, Mr. Handa,',
        'pinyin': 'ねえはんでんさん',
        'definition': 'ね え 半田 さん',
        'pinyinSpace': 'ね え はんだ さん'
    },
    '12': {
        'character': '自然体って何？',
        'letter': "what does it mean to 'act naturally'?",
        'pinyin': 'しぜんたいってなに？',
        'definition': '自然体 って 何',
        'pinyinSpace': 'しぜんたい って なに/なん ？'
    },
    '13': {
        'character': '言ったでしょ「自然体でいいです」って',
        'letter': "You said it yourself, 'just act naturally.'",
        'pinyin': 'いったでしょ「しぜんたいでいいです」って',
        'definition': '言った でしょ 自然体 で いいです って',
        'pinyinSpace': 'いった でしょ 「 しぜんたい で いいです 」 って'
    },
    '14': {
        'character': '自然でいることが自然体じゃないかな',
        'letter': "I think the act of acting naturally is 'acting natural.'",
        'pinyin': 'しぜんでいることがしぜんたいじゃないかな',
        'definition': '自然 で いる こと が 自然体 じゃない かな',
        'pinyinSpace': 'しぜん で いる こと が しぜんたい じゃない かな'
    },
    '15': {
        'character': 'ちょっとお手本見せてよ',
        'letter': 'Could you give me an example?',
        'pinyin': 'ちょっとおてほん',
        'definition': 'ちょっと お手本 見せて よ',
        'pinyinSpace': 'ちょっと おてほん みせて よ'
    },
    '16': {
        'character': 'えぇ～',
        'letter': 'Oh, yeah.',
        'pinyin': 'えぇ～',
        'definition': 'えぇ',
        'pinyinSpace': 'えぇ ～'
    },
    '17': {
        'character': 'こんな感じだけど',
        'letter': 'Something like this.',
        'pinyin': 'こんなかんじだけど',
        'definition': 'こんな 感じ だけど',
        'pinyinSpace': 'こんな かんじ だけど'
    },
    '18': {
        'character': 'う～ん',
        'letter': "That's not cute.",
        'pinyin': 'う～ん',
        'definition': 'う ん',
        'pinyinSpace': 'う ～ ん'
    },
    '19': {
        'character': '自',
        'letter': "What does it mean to 'act naturally'?",
        'pinyin': 'しぜんたいってどういうことなの？',
        'definition': '自然体 って どういう こと なの',
        'pinyinSpace': 'しぜんたい って ど こと なの ？'
    },
    '20': {
        'character': 'こんな表情？',
        'letter': 'Something like this?',
        'pinyin': 'こんなひょうじょう？',
        'definition': 'こんな 表情',
        'pinyinSpace': 'こんな ひょ ？'
    },
    '21': {
        'character': '自然体かどうかわかんないけどかわいいね',
        'letter': "I don't know if that's acting natural or not, but it is cute.",
        'pinyin': 'しぜんたいかどうかわかんないけどかわいいね',
        'definition': '自然体 かどうか わかんない けど かわいい ね',
        'pinyinSpace': 'しぜんたい かどうか わかんない けど かわいい ね'
    },
    '22': {
        'character': 'これは？o(=∩ω∩=)m',
        'letter': 'How about this?',
        'pinyin': 'これは？o(=∩ω∩=)m',
        'definition': 'これ は',
        'pinyinSpace': 'これ は ？o(=∩ω∩=)m'
    },
    '23': {
        'character': 'かわいい',
        'letter': "It's cute.",
        'pinyin': 'かわいい',
        'definition': 'かわいい',
        'pinyinSpace': 'かわいい'
    },
    '24': {
        'character': 'これは～?',
        'letter': 'And this?',
        'pinyin': 'これは～？n(*≧▽≦*)n',
        'definition': 'これ は',
        'pinyinSpace': 'これ は ～?'
    },
    '25': {
        'character': 'もうかわいいのはわかったよ',
        'letter': "We get it. You're cute.",
        'pinyin': 'もうかわいいのはわかったよ',
        'definition': 'もう かわいい の は わかった よ',
        'pinyinSpace': 'もう かわいい の は わかった よ'
    },
    '26': {
        'character': 'そうなんだよね',
        'letter': 'I know.',
        'pinyin': 'そうなんだよね',
        'definition': 'そう な ん だよね',
        'pinyinSpace': 'そう な ん だよね'
    },
    '27': {
        'character': 'かわいいかわいいって言われてもどうしていいかわかんなくて',
        'letter': "I keep getting called cute, but I still don't know what to do.",
        'pinyin': 'かわいいかわいいっていわれてもどうしていいかわかんなくて',
        'definition': 'かわいい かわいい って 言われても どうして いい かわかん なくて',
        'pinyinSpace': 'かわいい かわいい って いわれても どうして いい かわかん なくて'
    },
    '28': {
        'character': 'いいなぁ僕もかわいいって言われてみたいですよ',
        'letter': 'How nice. I wish someone would call me cute.',
        'pinyin': 'いいなぁぼくもかわいいっていわれてみたいですよ',
        'definition': 'いい なぁ 僕 も かわ いいって言われて みたいです よ',
        'pinyinSpace': 'いい なぁ ぼく も かわ いいっていわれて みたいです よ'
    },
    '29': {
        'character': 'ゴロゴロしてるだけなのになぁ',
        'letter': "All I'm doing is lounging around.",
        'pinyin': 'ごろごろしてるだけなのになぁ',
        'definition': 'ゴロゴロしてる だけ な のに なぁ',
        'pinyinSpace': 'ゴロゴロ してる だけ な のに なぁ'
    },
    '30': {
        'character': '',
        'letter': "You always look like you're having fun. I'm jealous.",
        'pinyin': 'たのしそうでうらやましいよ',
        'definition': '楽しそう で うらやましい よ',
        'pinyinSpace': 'たのしそう で うらやましい よ'
    },
    '31': {
        'character': 'ラッコさん？',
        'letter': 'Mr. Otter?',
        'pinyin': 'らっこさん？',
        'definition': 'ラッコ さん',
        'pinyinSpace': 'ラッコ さん ？'
    },
    '32': {
        'character': '僕さお腹で貝割るでしょ？ヾ(≧へ≦)〃',
        'letter': 'You know I break shellfish on my tummy, right?',
        'pinyin': 'ぼくさおなかでかいわるでしょ？ヾ(≧へ≦)〃',
        'definition': '僕 さ お腹 で 貝  でしょ ヾ へ',
        'pinyinSpace': 'ぼく さ おなか で かい わる でしょ ？ ヾ (≧ へ ≦)〃'
    },
    '33': {
        'character': 'あれって大変だよお腹痛くなる',
        'letter': "It's harder than it looks. It hurts my tummy.",
        'pinyin': 'あれってたいへんだよおなかいたくなる',
        'definition': 'あれ って 大変 だ よ お腹 痛くなる',
        'pinyinSpace': 'あれ って たいへん だ よ おなか いたくなる'
    },
    '34': {
        'character': 'お腹に石だよ笹子さん',
        'letter': "I'm banging a rock on my tummy, Miss Sasako.",
        'pinyin': 'おなかにいしだよささごさん',
        'definition': 'お腹 に 石 だ よ 笹 子 さん',
        'pinyinSpace': 'おなか に こく/いし だ よ ささ こ さん'
    },
    '35': {
        'character': 'はい？',
        'letter': "I'm sorry?",
        'pinyin': 'はい？',
        'definition': 'はい',
        'pinyinSpace': 'はい ？'
    },
    '36': {
        'character': '自分のお腹を石で叩いてみなよ',
        'letter': 'You should try banging a rock on your tummy.',
        'pinyin': 'じぶんのおなか',
        'definition': '自分 の お腹 を 石 で 叩いて みな よ',
        'pinyinSpace': 'じぶん の おなか を こく/いし で たたいて みな よ'
    },
    '37': {
        'character': '痛いでしょ？',
        'letter': 'It would hurt, right?',
        'pinyin': 'いたいでしょ？',
        'definition': '痛い でしょ',
        'pinyinSpace': 'いたい でしょ ？'
    },
    '38': {
        'character': 'はい…',
        'letter': 'Yes...',
        'pinyin': 'はい…',
        'definition': 'はい',
        'pinyinSpace': 'はい …'
    },
    '39': {
        'character': 'お腹で割らなければいいのに',
        'letter': "Then you shouldn't try breaking it on your tummy.",
        'pinyin': 'おなかでわらなければいいのに',
        'definition': 'お腹 で 割らなければ いい のに',
        'pinyinSpace': 'おなか で わらなければ いい のに'
    },
    '40': {
        'character': 'あれをやるとお客がわくからさ',
        'letter': 'But the audience loves seeing that.',
        'pinyin': 'あれをやるとおきゃくがわくからさ',
        'definition': 'あれ を やる とお 客 が わく から さ',
        'pinyinSpace': 'あれ を やる とお きゃく が わく から さ'
    },
    '41': {
        'character': 'もうやめたら？その出し物',
        'letter': "Why don't you give up that act?",
        'pinyin': 'もうやめたら？そのだしもの',
        'definition': 'もう やめたら その 出し物',
        'pinyinSpace': 'もう やめたら ？ その だしもの'
    },
    '42': {
        'character': '出し物っていうか習性だからね',
        'letter': "It's not really an act. It's more of a trait.",
        'pinyin': 'だしものっていうかしゅうせいだからね',
        'definition': '出し物 っていうか 習性 だから ね',
        'pinyinSpace': 'だしもの っていうか しゅうせい  から ね'
    },
    '43': {
        'character': 'かわいいからいいじゃないですか',
        'letter': "I think it's fine since it's cute.",
        'pinyin': 'かわいいからいいじゃないですか',
        'definition': 'かわいい から  じゃないです か',
        'pinyinSpace': 'かわいい から いい じゃないです か'
    },
    '44': {
        'character': 'かわいいんだけどさもうお腹が限界',
        'letter': "It's cute, but my tummy's had enough.",
        'pinyin': 'かわいいんだけどさもうおなかがげんかい',
        'definition': 'かわいい ん だけど さ もう お腹 が 限界',
        'pinyinSpace': 'かわいい ん だけど さ もう おなか が げんかい'
    },
    '45': {
        'character': 'かわいいで言ったら私もかわいいんですけど',
        'letter': "Since we're on the topic of cute, I'm cute, too.",
        'pinyin': 'かわいいでいったらわたしもかわ',
        'definition': 'かわいい で 言ったら 私 も かわいい ん です けど',
        'pinyinSpace': 'かわいい で いったら わたし も かわいい ん です けど'
    },
    '46': {
        'character': 'コアラさん？',
        'letter': 'Mr. Koala?',
        'pinyin': 'こあらさん？',
        'definition': 'コアラ さん',
        'pinyinSpace': 'コアラ さん ？'
    },
    '47': {
        'character': 'ユーカリ？かわいく食べてます',
        'letter': "I'm cutely eating eucalyptus, but I'm at my limit. I'm sick of it.",
        'pinyin': 'ゆーかり？かわいくたべてますけどもうあれげんかいです',
        'definition': 'ユーカリ かわいく 食べてます けど もう あれ 限界 です',
        'pinyinSpace': 'ユーカリ ？ かわいく たべてます けど もう あれ げんかい です'
    },
    '48': {
        'character': '１日それを１キロくらい食べるんですから',
        'letter': 'I eat about one kilogram of that stuff a day.',
        'pinyin': '１にちそれを１きろくらいたべるんですから',
        'definition': '１日 それ を １キロ くらい 食べる ん ですから',
        'pinyinSpace': 'ついたち/いちにち それ を いちキロ くらい たべる ん ですから'
    },
    '49': {
        'character': '涙目にもなりますよ(-。-)',
        'letter': "You'd get teary-eyed, too, if you had to do it.",
        'pinyin': 'なみだめにもなりますよ(-。-)',
        'definition': '涙目 に も なります よ',
        'pinyinSpace': 'なみだめ に も なります よ (-。-)'
    },
    '50': {
        'character': 'わかるわかるよ～',
        'letter': 'I know! I totally get you!',
        'pinyin': 'わかるわかるよ～',
        'definition': 'わかる わかる よ',
        'pinyinSpace': 'わかる わかる よ ～'
    },
    '51': {
        'character': 'コアリクイくんも？',
        'letter': 'You, too, Anteater?',
        'pinyin': 'こありくいくんも？',
        'definition': 'コ アリクイ くん も',
        'pinyinSpace': 'コ アリクイ くん も ？'
    },
    '52': {
        'character': 'アリクイってやめて！',
        'letter': "I don't like the name Anteater!",
        'pinyin': 'ありくいってやめて！',
        'definition': 'アリクイ って やめて',
        'pinyinSpace': 'アリクイ って やめて ！'
    },
    '53': {
        'character': '僕だってねアリばっかり食べたくないよ！飽きたよ。',
        'letter': "I don't want to eat  only ants all the time! I'm sick of them!",
        'pinyin': 'ぼくだってねあ',
        'definition': '僕 だって ね アリ ばっかり 食べたくない よ 飽きた よ',
        'pinyinSpace': 'ぼく だって ね アリ ばっかり たべたくない よ ！ あきた よ 。'
    },
    '54': {
        'character': '笹子さんアリばっかり食べる気持わかる？',
        'letter': 'Do you know how it feels to have to eat ants all the time, Miss Sasako?!',
        'pinyin': 'ささごさんありばっかりたべるきもちわかる？',
        'definition': '笹 子 さん アリ ばっかり 食べる 気持 わかる',
        'pinyinSpace': 'ささ こ さん アリ ばっかり たべる きもち わかる ？'
    },
    '55': {
        'character': 'アリクイだからね',
        'letter': 'Well, you are an anteater...',
        'pinyin': 'ありくいだからね',
        'definition': 'アリクイ だから ね',
        'pinyinSpace': 'アリクイ だ から ね'
    },
    '56': {
        'character': 'しかたないね',
        'letter': "You don't have much of a choice.",
        'pinyin': 'しかたないね',
        'definition': 'しかたない ね',
        'pinyinSpace': 'しかたない ね'
    },
    '57': {
        'character': '確かにそうだけどもっといろんなもの食べてみたいよ',
        'letter': 'I know, but I want to eat other things, too!',
        'pinyin': 'たしかにそうだけどもっといろんなものたべてみたいよ',
        'definition': '確かに そう だけど もっと いろんな もの 食べて みたい よ',
        'pinyinSpace': 'たしかに そう だけど もっと いろんな もの たべて みたい よ'
    },
    '58': {
        'character': 'いろんなもの？',
        'letter': 'Other things?',
        'pinyin': 'いろんなもの？',
        'definition': 'いろんな もの',
        'pinyinSpace': 'いろんな もの ？'
    },
    '59': {
        'character': '何食べたいの？',
        'letter': 'Like what?',
        'pinyin': 'なにたべたいの？',
        'definition': '何 食べたい の',
        'pinyinSpace': 'なん たべたい の ？'
    },
    '60': {
        'character': 'ほらラーメンとかさ',
        'letter': 'You know, like ramen!',
        'pinyin': 'ほららーめんとかさ',
        'definition': 'ほら ラーメン とか さ',
        'pinyinSpace': 'ほら ラーメン とか さ'
    },
    '61': {
        'character': 'チャーシュー食べられないんじゃない？',
        'letter': "But I don't think you can eat chashu pork.",
        'pinyin': 'ちゃーしゅーたべられないんじゃない？',
        'definition': 'チャーシュー 食べられない ん じゃない',
        'pinyinSpace': 'チャーシュー たべられない ん じゃない ？'
    },
    '62': {
        'character': 'いいんだよ細かいところは',
        'letter': "You don't have to be concerned with the little things.",
        'pinyin': 'いいんだよこまかいところは',
        'definition': 'いい ん だ よ 細かい ところ は',
        'pinyinSpace': 'いい ん だ よ こまかい ところ は'
    },
    '63': {
        'character': '見てくれるだけいいじゃないですか',
        'letter': 'At least people look at you.',
        'pinyin': 'みてくれるだけいいじゃないですか',
        'definition': '見てくれる だけ いい じゃないです か',
        'pinyinSpace': 'みて くれる だけ いい じゃないです か'
    },
    '64': {
        'character': 'ラマさん？',
        'letter': 'Mr. Llama?',
        'pinyin': 'らまさん？',
        'definition': 'ラマ さん',
        'pinyinSpace': 'ラマ さん ？'
    },
    '65': {
        'character': '僕なんてみんなほぼ素通りですよ',
        'letter': 'Everyone pretty much passes right by me.',
        'pinyin': 'ぼくなんてみんなほぼすどおりですよ',
        'definition': '僕 なんて みんな ほぼ 素通り です よ',
        'pinyinSpace': 'ぼく なんて みんな ほぼ すどおり です よ'
    },
    '66': {
        'character': 'いるの気づいてます？',
        'letter': 'Did you even know I was there?',
        'pinyin': 'い',
        'definition': 'いる の 気づいてます',
        'pinyinSpace': 'いる の きづいてます ？'
    },
    '67': {
        'character': 'そういえば…',
        'letter': 'Come to think of it...',
        'pinyin': 'そういえば…',
        'definition': 'そういえば',
        'pinyinSpace': 'そういえば …'
    },
    '68': {
        'character': '動物園に行ったとき…',
        'letter': 'When we went to the zoo...',
        'pinyin': 'どうぶつえんにいったとき…',
        'definition': '動物園 に 行った とき',
        'pinyinSpace': 'どうぶつえん に おこなった/いった とき …'
    },
    '69': {
        'character': 'みごとに素通りしたね',
        'letter': 'We did pretty much pass right by.',
        'pinyin': 'みごとにすどおりしたね',
        'definition': 'みごと に 素通りした ね',
        'pinyinSpace': 'みごと に すどおり した ね'
    },
    '70': {
        'character': 'ほらねラマなんてそんなものですよ',
        'letter': "See? That's how it is, being a llama.",
        'pinyin': 'ほらねらまなんてそんなものですよ',
        'definition': 'ほらね ラマ なんて そんなもの です よ',
        'pinyinSpace': 'ほらね ラマ なんて そんなもの です よ'
    },
    '71': {
        'character': '行列つくって感想とか言ってほしいですΣ(￣д￣)',
        'letter': 'I wish people would look longer, and form huge lines to tell me what they think of me.',
        'pinyin': 'ぎょうれつつくってかんそうとかいってほしいですしぐま(￣д￣)',
        'definition': '行列 つくって 感想 とか 言って ほしいです',
        'pinyinSpace': 'ぎょうれつ つくって かんそう とか いって ほしいです Σ(￣д￣)'
    },
    '72': {
        'character': 'わぁ～いラマさん！',
        'letter': "Wow, it's a llama!",
        'pinyin': 'わぁ～いらまさん！',
        'definition': 'わぁ  ラマ さん',
        'pinyinSpace': 'わぁ ～ い ラマ さん ！'
    },
    '73': {
        'character': 'おい見ろよ！草食ってるぞ！写真写真撮れって！',
        'letter': "Look, it's eating grass! Hurry! Take a picture!",
        'pinyin': 'おいみろよ！くさくってるぞ！しゃしんしゃしんとれって！',
        'definition': 'おい 見ろ よ 草 食ってる ぞ 写真 写真 撮れ って',
        'pinyinSpace': 'おい みろ よ ！ くさ くっ ぞ ！ しゃしん しゃしん とれ って ！'
    },
    '74': {
        'character': '草食べてるだけ？',
        'letter': 'You just eat grass?',
        'pinyin': 'くさたべてるだけ？',
        'definition': '草 食べてる だけ',
        'pinyinSpace': 'くさ たべてる だけ ？'
    },
    '75': {
        'character': '地味だね',
        'letter': "That's a little boring.",
        'pinyin': 'じみだね',
        'definition': '地味 だ ね',
        'pinyinSpace': 'じみ だ ね'
    },
    '76': {
        'character': 'ラマさんってロバなの？',
        'letter': 'Are you a donkey, Mr. Llama?',
        'pinyin': 'らまさんってろばなの？',
        'definition': 'ラマ さん って ロバ なの',
        'pinyinSpace': 'ラマ さん って ロバ なの ？'
    },
    '77': {
        'character': 'だからラマです',
        'letter': "As I said, I'm a llama.",
        'pinyin': 'だかららまです',
        'definition': 'だから  です',
        'pinyinSpace': 'だ·から ラマ です'
    },
    '78': {
        'character': 'どっちかというとラクダです',
        'letter': "If you had to compare, I'm closer to a camel.",
        'pinyin': 'どっちかというとらくだです',
        'definition': 'どっちかというと ラクダ です',
        'pinyinSpace': 'どっちかというと ラクダ です'
    },
    '79': {
        'character': 'コブは？',
        'letter': 'Do you have a hump?',
        'pinyin': '',
        'definition': 'コブ は',
        'pinyinSpace': 'コブ は ？'
    },
    '80': {
        'character': 'ないです',
        'letter': 'I do not.',
        'pinyin': 'ないです',
        'definition': 'ないです',
        'pinyinSpace': 'ないです'
    },
    '81': {
        'character': 'あの…何か芸とかないんですか？',
        'letter': 'Can you do any tricks or anything?',
        'pinyin': 'あの…なにかげいとかないんですか？',
        'definition': 'あの 何か 芸 とかない ん で か',
        'pinyinSpace': 'あの … なにか げい とかない ん です か ？'
    },
    '82': {
        'character': '草を食べるくらいです',
        'letter': 'Just eating grass.',
        'pinyin': 'くさをたべるくらいです',
        'definition': '草 を 食べる くらいです',
        'pinyinSpace': 'くさ を たべる くらいです'
    },
    '83': {
        'character': 'できるといいね行列',
        'letter': 'I hope you get that huge line of yours.',
        'pinyin': 'できるといいねぎょうれつ',
        'definition': 'できる と いいね 行列',
        'pinyinSpace': 'できる と いいね ぎょうれつ'
    },
    '84': {
        'character': '見られればいいっ',
        'letter': "Being looked at isn't all that great.",
        'pinyin': 'みられればいいってもんじゃないよ',
        'definition': '見られれば いい って もん じゃない よ',
        'pinyinSpace': 'みられれば いい って もん じゃない よ'
    },
    '85': {
        'character': 'バクさん',
        'letter': 'Mr. Tapir.',
        'pinyin': 'ばくさん',
        'definition': 'バク さん',
        'pinyinSpace': 'バク さん'
    },
    '86': {
        'character': '僕なんて夢を食べる動物って言われがちだけど',
        'letter': "I'm rumored to be an animal that eats dreams,",
        'pinyin': 'ぼくなんてゆめをたべるどうぶつっていわれがちだけど',
        'definition': '僕 なんて 夢 を 食べる 動物 って 言われがち だけど',
        'pinyinSpace': 'ぼく なんて ゆめ を たべる どうぶつ って いわれがち だけど'
    },
    '87': {
        'character': '見た人に夢がないなんて言われてさ',
        'letter': 'but everyone who sees me is unimpressed.',
        'pinyin': 'みたひとにゆめがないなんていわれてさ',
        'definition': '見た 人 に 夢 が ない なんて 言われて さ',
        'pinyinSpace': 'みた ひと に ゆめ が ない なんて いわれて さ'
    },
    '88': {
        'character': '夢を食べる動物って何？',
        'letter': 'What kind of animal eats dreams, anyway?',
        'pinyin': 'ゆめをたべるどうぶつってなに？',
        'definition': '夢 を 食べる 動物 って 何',
        'pinyinSpace': 'ゆめ を たべる どうぶつ って なに/なん ？'
    },
    '89': {
        'character': 'ハードル上げすぎなんだよ',
        'letter': "They're setting the bar much too high.",
        'pinyin': 'はーどるあげすぎなんだよ',
        'definition': 'ハードル 上げ すぎ なんだ よ',
        'pinyinSpace': 'ハードル あげ すぎ なんだ よ'
    },
    '90': {
        'character': 'まぁまぁ…ジュゴンさんよりはいいよ',
        'letter': "Now, now. You're better off than the sea cow.",
        'pinyin': 'まぁまぁ…じゅごんさんよりはいいよ',
        'definition': 'まぁまぁ ジュゴン さん より は いい よ',
        'pinyinSpace': 'まぁまぁ … ジュゴン さん より は いい よ'
    },
    '91': {
        'character': '人魚って前振りされてるんだから',
        'letter': 'They get compared to mermaids.',
        'pinyin': 'にんぎょってまえぶりされてるんだから',
        'definition': '人魚 って 前振り されてる ん だから',
        'pinyinSpace': 'にんぎょ って まえふり されてる ん だ から'
    },
    '92': {
        'character': 'ママ！人魚さんどこ？',
        'letter': "Mommy, where's the mermaid?",
        'pinyin': 'まま！にんぎょさん',
        'definition': 'ママ 人魚 さん どこ',
        'pinyinSpace': 'ママ ！ にんぎょ さん どこ ？'
    },
    '93': {
        'character': '見た人みんな黙っちゃうよ',
        'letter': "Everyone who sees it doesn't know what to say.",
        'pinyin': 'みたひとみんなだまっちゃうよ',
        'definition': '見た 人 みんな 黙っちゃう よ',
        'pinyinSpace': 'みた じん/ひと/にん みんな だまっちゃう よ'
    },
    '94': {
        'character': 'ねぇ？',
        'letter': 'Right?',
        'pinyin': 'ねぇ？',
        'definition': 'ねぇ',
        'pinyinSpace': 'ねぇ ？'
    },
    '95': {
        'character': '私に聞かないでください…',
        'letter': "Please don't ask me.",
        'pinyin': 'わたしにきかないでください…',
        'definition': '私 に 聞かないでください',
        'pinyinSpace': 'わたし に きかないで ください …'
    },
    '96': {
        'character': 'あぁそうだね…',
        'letter': 'You have a point.',
        'pinyin': 'あぁそうだね…',
        'definition': 'あぁ そうだね',
        'pinyinSpace': 'あぁ そうだね …'
    },
    '97': {
        'character': 'ジュゴンさんに比べたら僕はまだマシかもね',
        'letter': "If you compare me to Ms. Sea Cow, I'm probably better off.",
        'pinyin': 'じゅごんさんにくらべたらぼくはまだましかもね',
        'definition': 'ジュゴン さん に 比べたら 僕 は まだ マシ かも ね',
        'pinyinSpace': 'ジュゴン さん に くらべたら ぼく は まだ マシ かも ね'
    },
    '98': {
        'character': '僕も…',
        'letter': 'Me, too...',
        'pinyin': 'ぼくも…',
        'definition': '僕 も',
        'pinyinSpace': 'ぼく も …'
    },
    '99': {
        'character': 'ナマケモノくん',
        'letter': 'Sloth.',
        'pinyin': 'なまけものくん',
        'definition': 'ナマケモノ くん',
        'pinyinSpace': 'ナマ くん'
    },
    '100': {
        'character': '動物園とは関係ないけど…',
        'letter': "I'm not associated with the zoo, but...",
        'pinyin': 'どうぶつえんとはかんけいないけど…',
        'definition': '動物園 とは 関係ない けど',
        'pinyinSpace': 'どうぶつえん と·は かんけいない けど …'
    },
    '101': {
        'character': '僕って一日中木にぶら下がってるイメージあるけど…',
        'letter': 'People think I just hang from a tree all day.',
        'pinyin': 'ぼくっていちにちじゅうきにぶらさがってるいめーじあるけど…',
        'definition': '僕 って 一日中 木 に ぶら下がってる イメージ ある けど',
        'pinyinSpace': 'ぼく って いちにちじゅう き に ぶらさがってる イメージ ある けど …'
    },
    '102': {
        'character': '実際どうなの？',
        'letter': 'And in reality?',
        'pinyin': 'じっさいどうなの？',
        'definition': '実際 どう なの',
        'pinyinSpace': 'じっさい どう なの ？'
    },
    '103': {
        'character': '実際そうだけど…大変腕パンパン',
        'letter': "I do in reality... But it's hard. My arms tingle.",
        'pinyin': 'じっさいそうだけど…たいへんうでぱんぱん',
        'definition': '実際 そう だけど 大変 腕 パンパン',
        'pinyinSpace': 'じっさい そう だけど … たいへん うで パンパン'
    },
    '104': {
        'character': '一日中木にぶら下がったことある？笹子さん',
        'letter': 'Have you ever hung from a tree all day, Miss Sasako?',
        'pinyin': 'いちにちじゅうきにぶらさがったことある？ささごさん',
        'definition': '一日中 木 に ぶら下がった こと ある 笹 子 さん',
        'pinyinSpace': 'いちにちじゅう き に ぶらさがった こと ある ？ ささ こ さん'
    },
    '105': {
        'character': 'ナマケモノくんってナマケモノじゃないな',
        'letter': "I guess Sloth isn't really a sloth.",
        'pinyin': 'なまけものくんってなまけものじゃないな',
        'definition': 'ナマケモノ くん って ナマケモノ じゃない な',
        'pinyinSpace': 'ナマケモノ くん って ナマケモノ じゃない な'
    },
    '106': {
        'character': '頑張り者だね',
        'letter': "He's a really hard worker.",
        'pinyin': 'がんばりしゃだね',
        'definition': '頑張り 者 だ ね',
        'pinyinSpace': 'がんばり もの だ ね'
    },
    '107': {
        'character': 'もっと言って',
        'letter': 'Tell me more.',
        'pinyin': 'もっといって',
        'definition': 'もっと 言って',
        'pinyinSpace': 'もっと いって'
    },
    '108': {
        'character': 'みんな悩んでるんだな',
        'letter': 'Apparently everyone has problems.',
        'pinyin': 'みんななやんでるんだな',
        'definition': 'みんな 悩んでる ん だ な',
        'pinyinSpace': 'みんな なやんでる ん だ な'
    },
    '109': {
        'character': '実は好きなペンギンがいてさ',
        'letter': 'I have a problem too. You see, I have this penguin that I like.',
        'pinyin': 'じつはすきなぺんぎんがいてさ',
        'definition': '実は 好き な ペンギン が いて さ',
        'pinyinSpace': 'じつは すき な ペンギン が いて さ'
    },
    '110': {
        'character': '誰にも言わないでほしいんだけどね',
        'letter': "Don't tell anyone though, okay?",
        'pinyin': 'だれにもいわないでほしいんだけどね',
        'definition': '誰にも 言わないで ほしい ん だけど ね',
        'pinyinSpace': 'だれにも いわないで ほしい ん だけど ね'
    },
    '111': {
        'character': 'あぁやっぱりいろいろと皆さん悩みが尽きないんですね',
        'letter': "It seems that there isn't an end to everyone's problems.",
        'pinyin': 'あぁやっぱりいろいろとみなさんなやみがつきないんですね',
        'definition': 'あぁ やっぱり いろいろ と 皆さん 悩み が 尽きない ん です ね',
        'pinyinSpace': 'あぁ やっぱり いろいろ と みなさん なやみ が つきない ん です ね'
    },
    '112': {
        'character': 'そうだよね',
        'letter': "You're right.",
        'pinyin': 'そうだよね',
        'definition': 'そう だよね',
        'pinyinSpace': 'そう だよね'
    },
    '113': {
        'character': 'ほんとですね',
        'letter': 'No kidding.',
        'pinyin': 'ほんとですね',
        'definition': 'ほんと です ね',
        'pinyinSpace': 'ほんと です ね'
    },
    '114': {
        'character': 'ちょっと聞いてよ',
        'letter': 'Hey, listen to me.',
        'pinyin': 'ちょっときいてよ',
        'definition': 'ちょっと 聞いて よ',
        'pinyinSpace': 'ちょっと きいて よ'
    },
    '115': {
        'character': 'シロクマさんは悩みはないの？',
        'letter': "Don't you have any problems, Mr. Polar Bear?",
        'pinyin': 'しろくまさんはなやみはないの？',
        'definition': 'シロクマ さん は 悩み は ない の',
        'pinyinSpace': 'シロクマ さん は なやみ は ない の ？'
    },
    '116': {
        'character': 'あるよ',
        'letter': 'I do.',
        'pinyin': 'あるよ',
        'definition': 'ある よ',
        'pinyinSpace': 'ある よ'
    },
    '117': {
        'character': 'え？そうなの？意外',
        'letter': "Really? You do? That's unexpected.",
        'pinyin': 'え？そうなの？いがい',
        'definition': 'え そう なの 意外',
        'pinyinSpace': 'え ？ そう なの ？ いがい'
    },
    '118': {
        'character': 'アイドルにならないかって言われてるんだけど',
        'letter': "I've been asked if I wanted to become an idol,",
        'pinyin': 'あいどるにならないかっていわれてるんだけど',
        'definition': 'アイドル に ならない か って 言われてる ん だけど',
        'pinyinSpace': 'アイドル に ならない か って いわれてる ん だけど'
    },
    '119': {
        'character': 'アイドルと学業の両立がねぇ',
        'letter': 'but fitting that in with my studies would be hard.',
        'pinyin': 'あいどるとがくぎょうのりょうりつがねぇ',
        'definition': 'アイドル と 学業 の 両立 が ねぇ',
        'pinyinSpace': 'アイド と がくぎょう の りょうりつ が ねぇ'
    },
    '120': {
        'character': 'また嘘ばっかり',
        'letter': 'There you go, lying again.',
        'pinyin': 'またうそばっかり',
        'definition': 'また 嘘 ばっかり',
        'pinyinSpace': 'また うそ ばっかり'
    },
    '121': {
        'character': '笹子さんは？',
        'letter': 'How about you, Miss Sasako?',
        'pinyin': 'ささごさんは？',
        'definition': '笹 子 さん は',
        'pinyinSpace': 'ささ こ さん は ？'
    },
    '122': {
        'character': 'え？ありません',
        'letter': "I don't have any.",
        'pinyin': 'え？ありません',
        'definition': 'え ありません',
        'pinyinSpace': 'え ？ ありません'
    },
    '123': {
        'character': 'ひとつも？',
        'letter': 'Not even one?',
        'pinyin': 'ひとつも？',
        'definition': 'ひとつ も',
        'pinyinSpace': 'ひとつ も ？'
    },
    '124': {
        'character': 'はい',
        'letter': 'Indeed.',
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '125': {
        'character': 'あ…',
        'letter': 'Uh...',
        'pinyin': 'あ…',
        'definition': 'あ',
        'pinyinSpace': 'あ …'
    },
    '126': {
        'character': 'ん？何？',
        'letter': 'What is it?',
        'pinyin': 'ん？なに？',
        'definition': 'ん 何',
        'pinyinSpace': 'ん ？ なに/なん ？'
    },
    '127': {
        'character': '雛人形って燃えるゴミなのか、燃えないゴミなのかどっちなんだろうって',
        'letter': 'I was wondering if Hina dolls should go with the burnable or non-burnable garbage.',
        'pinyin': 'ひなにんぎょうってもえるごみなのか、もえないごみなのかどっちなんだろうって',
        'definition': '雛人形 って 燃えるゴミ な のか 燃えないゴミ な のか どっち な ん だろう って',
        'pinyinSpace': 'ひなにんぎょう  もえるゴミ な のか 、 もえないゴミ な のか どっち な ん だろう って'
    },
    '128': {
        'character': 'いいかな？それはあとで',
        'letter': 'How about we discuss that later?',
        'pinyin': 'いいかな？それはあとで',
        'definition': 'いい かな それは あとで',
        'pinyinSpace': 'いい かな ？ それは あとで'
    },
    '129': {
        'character': '僕なんてさパン',
        'letter': 'Every time I go to the bakery, I think about it.',
        'pinyin': 'ぼくなんてさぱんやにいくたびにおもうよ',
        'definition': '僕 なんて さ パン屋 に 行く たびに 思う よ',
        'pinyinSpace': 'ぼく なんて さ パンや に いく たびに おもう よ'
    },
    '130': {
        'character': 'いい？誰にも言わないでよ',
        'letter': "Listen, don't tell anyone, okay?",
        'pinyin': 'いい？だれにもいわないでよ',
        'definition': 'いい 誰にも 言わないで よ',
        'pinyinSpace': 'いい ？ だれにも いわないで よ'
    },
    '131': {
        'character': 'どうやって告白しようか悩みは尽きないよ',
        'letter': 'I keep trying to figure out how to ask her out.',
        'pinyin': 'どうやってこくはくしようかなやみはつきないよ',
        'definition': 'どうやって 告白しよう か 悩み は 尽きない よ',
        'pinyinSpace': 'どうやって こくはく しよう か なやみ は つきない よ'
    },
    '132': {
        'character': 'どう思う？パンダくん',
        'letter': 'What do you think, Panda?',
        'pinyin': 'どうおもう？ぱんだくん',
        'definition': 'どう 思う パンダ くん',
        'pinyinSpace': 'どう おもう ？ パンダ くん'
    },
    '133': {
        'character': 'フフフ…',
        'letter': 'Hmph...',
        'pinyin': 'ふふふ…',
        'definition': 'フフフ',
        'pinyinSpace': 'フフフ …'
    },
    '134': {
        'character': 'ちょっと笑いごとじゃないよ',
        'letter': 'Hey, this is no laughing matter.',
        'pinyin': 'ちょっとわらいごとじゃないよ',
        'definition': 'ちょっと 笑い ごと じゃない よ',
        'pinyinSpace': 'ちょっと わらい ごと じゃない よ'
    },
    '135': {
        'character': '寝てる！W(ﾟДﾟ)w',
        'letter': "He's asleep!",
        'pinyin': 'ねてる！W(゜Д゜)w',
        'definition': '寝てる',
        'pinyinSpace': 'ねてる ！W(ﾟДﾟ)w'
    },
    '136': {
        'character': 'えぇと…',
        'letter': 'Hm...',
        'pinyin': 'えぇと…',
        'definition': 'えぇ と',
        'pinyinSpace': 'えぇ と …'
    },
    '137': {
        'character': 'いつから寝てたんですかね？',
        'letter': "I wonder how long he's been asleep.",
        'pinyin': 'いつからねてたんですかね？',
        'definition': 'いつから 寝 ん です かね',
        'pinyinSpace': 'いつから ねてた ん です かね ？'
    },
    '138': {
        'character': 'チャーシューの話のあとくらいじゃない？',
        'letter': 'Probably somewhere right after the talk of chashu pork.',
        'pinyin': 'ちゃーしゅーのはなしのあとくらいじゃない？',
        'definition': 'チャーシュー の 話 の あと くらい じゃない',
        'pinyinSpace': 'チャーシュー の はなし の あと くらい じゃない ？'
    },
    '139': {
        'character': '前半ですね',
        'letter': 'So somewhere at the beginning of the conversation.',
        'pinyin': 'ぜんはんですね',
        'definition': ' です ね',
        'pinyinSpace': 'ぜんはん です ね'
    },
    '140': {
        'character': 'あっシロクマさん',
        'letter': 'Oh, Mr. Polar Bear.',
        'pinyin': 'あっしろくまさん',
        'definition': 'あっシロ クマ さ',
        'pinyinSpace': 'あっシロ クマ さん'
    },
    '141': {
        'character': 'おかわりお願いします',
        'letter': 'Could I get seconds, please?',
        'pinyin': 'おかわりおねがいします',
        'definition': 'おかわり お願いします',
        'pinyinSpace': 'おかわり おねがい·します'
    },
    '142': {
        'character': 'うん',
        'letter': 'Sure.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '143': {
        'character': '自然体かぁ',
        'letter': "Acting naturally,' huh?",
        'pinyin': 'しぜんたいかぁ',
        'definition': '自然体 かぁ',
        'pinyinSpace': 'しぜんたい かぁ'
    },
    '144': {
        'character': 'どうしたらいいんだろう…',
        'letter': 'I wonder what I should do?',
        'pinyin': 'どうしたらいいんだろう…',
        'definition': 'どうしたらいい ん だろう',
        'pinyinSpace': 'どうしたらいい ん だろう …'
    },
    '145': {
        'character': 'パンダくんすっかり自然体だね',
        'letter': 'Panda is totally acting naturally right now.',
        'pinyin': 'ぱんだくんすっかりしぜんたいだね',
        'definition': 'パンダ くん すっかり 自然体 だ ね',
        'pinyinSpace': 'パンダ くん すっかり しぜんたい だ ね'
    },
    '146': {
        'character': 'そうですね',
        'letter': 'Indeed he is.',
        'pinyin': 'そうですね',
        'definition': 'そうですね',
        'pinyinSpace': 'そうですね'
    },
    '147': {
        'character': 'いらっしゃい(＾?＾）／＼(＾?＾）',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃい(＾?＾）／＼(＾?＾）',
        'definition': 'いら',
        'pinyinSpace': 'いらっしゃい (＾?＾）／＼(＾?＾）'
    },
    '148': {
        'character': 'はぁ…今日は疲れちゃった',
        'letter': "I'm so tired today.",
        'pinyin': 'はぁ…きょうはつかれちゃった',
        'definition': 'はぁ 今日 は 疲れちゃった',
        'pinyinSpace': 'はぁ … きょう は つかれちゃった'
    },
    '149': {
        'character': 'パンダくん',
        'letter': 'Hey, Panda.',
        'pinyin': 'ぱんだくん',
        'definition': 'パンダ くん',
        'pinyinSpace': 'パンダ くん'
    },
    '150': {
        'character': 'なぁに？',
        'letter': 'What?',
        'pinyin': 'なぁに？',
        'definition': 'なぁ に',
        'pinyinSpace': 'なぁ に ？'
    },
    '151': {
        'character': 'あれからずっと考えてたんだけどさ',
        'letter': "I've been thinking since then...",
        'pinyin': 'あれからずっとかんがえてたんだけどさ',
        'definition': 'あれから ずっと 考えてた ん だけど ',
        'pinyinSpace': 'あれから ずっと かんがえてた ん だけど さ'
    },
    '152': {
        'character': 'パンダくんにとって自然体っていうのはさ',
        'letter': "Acting naturally' for you is",
        'pinyin': 'ぱんだくんにとってしぜんたいっていうのはさ',
        'definition': 'パンダ くん にとって 自然体 っていう の は さ',
        'pinyinSpace': 'パンダ くん にとって しぜんたい っていう の は さ'
    },
    '153': {
        'character': '君がいちばんリラックスできる場所',
        'letter': 'being in the place you can relax the most.',
        'pinyin': 'きみがいちばんりらっくすできるばしょ',
        'definition': '君 が いちばん リラックスできる 場所',
        'pinyinSpace': 'きみ/くん が いちばん リラックス できる ばしょ'
    },
    '154': {
        'character': 'あっ！',
        'letter': 'Oh!',
        'pinyin': 'あっ！',
        'definition': 'あっ',
        'pinyinSpace': 'あっ ！'
    },
    '155': {
        'character': 'つまりさ…',
        'letter': 'Meaning―',
        'pinyin': 'つまりさ…',
        'definition': 'つまり さ',
        'pinyinSpace': 'つまり さ …'
    },
    '156': {
        'character': 'そんなことよりペンギンさん',
        'letter': 'Never mind that, Mr. Penguin.',
        'pinyin': 'そんなことよりぺんぎんさん',
        'definition': 'そんな こと より ペンギン さん',
        'pinyinSpace': 'そんな こと より ペンギン さん'
    },
    '157': {
        'character': '新しいパンダグッズ買っちゃったんだけど',
        'letter': 'I bought new panda merchandise.',
        'pinyin': 'あたらしいぱんだぐっずかっちゃったんだけど',
        'definition': '新しい パンダ グッズ 買っちゃった ん だけど',
        'pinyinSpace': 'あたらしい パンダ グッズ かっちゃった ん だけど'
    },
    '158': {
        'character': '何入れればいいと思う？O(*≧▽≦)ツ',
        'letter': 'What do you think I should put in here?',
        'pinyin': 'なにいれればいいとおもう？O(*≧▽≦)つ',
        'definition': '何 入れ いい と 思う ツ',
        'pinyinSpace': 'なに いれれば/はいれれば いい と おもう ？O(*≧▽≦) ツ'
    },
    '159': {
        'character': '肉まんでいいんじゃない？',
        'letter': 'How about a meat bun?',
        'pinyin': 'にくまんでいいんじゃない？',
        'definition': '肉まん でいい ん じゃない',
        'pinyinSpace': 'にくまん で いい ん じゃない ？'
    },
    '160': {
        'character': 'ペンギンさんペンギ',
        'letter': 'Mr. Penguin, Mr. Penguin!',
        'pinyin': 'ぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん'
    },
    '161': {
        'character': 'しろくまカフェが来週から駐車場になっちゃうって本当',
        'letter': "Is it true that Polar Bear's Café is being turned into a parking lot next week?",
        'pinyin': 'しろくまかふぇがら',
        'definition': 'しろくま カフェ が 来週 から 駐車場 に なっちゃう って 本当',
        'pinyinSpace': 'しろくま カフェ が らいしゅう から ちゅうしゃじょう に なっち って ほんとう'
    },
    '162': {
        'character': 'そんな噂聞いてないよ',
        'letter': "I didn't hear a rumor like that.",
        'pinyin': 'そんなうわさきいてないよ',
        'definition': 'そんな 噂 聞いてない よ',
        'pinyinSpace': 'そんな うわさ きいてない よ'
    },
    '163': {
        'character': 'やっぱりプチ整形してない',
        'letter': "Are you sure you haven't had plastic surgery?",
        'pinyin': 'やっぱりぷちせいけいしてない',
        'definition': 'やっぱり プチ 整形してない',
        'pinyinSpace': 'やっぱり プチ せいけい してない'
    },
    '164': {
        'character': 'してないよ',
        'letter': 'I did not.',
        'pinyin': 'してないよ',
        'definition': 'してない よ',
        'pinyinSpace': 'してない よ'
    },
    '165': {
        'character': 'だから逆にどこを見て思ったの',
        'letter': 'I ask again, what makes you think I did?',
        'pinyin': 'だからぎゃくにどこをみておもったの',
        'definition': 'だから 逆 に どこ を 見て 思った の',
        'pinyinSpace': 'だ·から ぎゃく に どこ を みて おもった の'
    },
    '166': {
        'character': 'しろくまくん終わって',
        'letter': 'Polar Bear, could you finish it?',
        'pinyin': 'しろくまくんおわって',
        'definition': 'しろくま くん 終わって',
        'pinyinSpace': 'しろくま くん おわって'
    },
    '167': {
        'character': '次回のしろくま???',
        'letter': "Next time on Polar Bear's...",
        'pinyin': 'じかいのしろくま???',
        'definition': '次回 の しろくま',
        'pinyinSpace': 'じかい の しろくま ???'
    },
    '168': {
        'character': 'カフェでしょう忘れちゃった',
        'letter': "It's 'Café.' Did you actually forget?",
        'pinyin': 'かふぇでしょうわすれちゃった',
        'definition': 'カフェ でしょう 忘れちゃった',
        'pinyinSpace': 'カフェ でしょう わすれちゃった'
    },
    '169': {
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