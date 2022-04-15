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

const allSyllableMap = {
    '1': {
        'character': 'シロクマくん動物園へ',
        'letter': 'Polar Bear Goes to the Zoo.',
        'pinyin': 'しろくまくんどうぶつえんへ',
        'definition': 'シロクマ くん 動物園 へ',
        'pinyinSpace': 'シロクマ くん どうぶつえん へ'
    },
    '2': {
        'character': 'シロクマくん暇だから何か問題出してよ',
        'letter': "Hey, Polar Bear. I'm a little bored, so give me a problem to solve.",
        'pinyin': 'し',
        'definition': 'シロクマ くん 暇 だから 何か 問題 出して よ',
        'pinyinSpace': 'シロクマ くん ひま だ から なにか もんだい だして よ'
    },
    '3': {
        'character': 'いいよ',
        'letter': 'Sure.',
        'pinyin': 'いいよ',
        'definition': 'いい よ',
        'pinyinSpace': 'いい よ'
    },
    '4': {
        'character': '第１問',
        'letter': 'Question 1:',
        'pinyin': 'だい１もん',
        'definition': '第 １問',
        'pinyinSpace': 'だい いちもん'
    },
    '5': {
        'character': 'Ｔ字路と呼ばれる交差点',
        'letter': "The T-intersection.'",
        'pinyin': 'てぃーじろとよばれるこうさてん',
        'definition': '字 路 と 呼ばれる 交差点',
        'pinyinSpace': 'Ｔ じ/あざ みち/ち と よばれる こうさてん'
    },
    '6': {
        'character': '法令上の正式名称はＴ字路ではありません',
        'letter': "The legal name for this kind of intersection is not actually 'T-intersection.'",
        'pinyin': 'ほうれいじょうのせいしきめいしょうはてぃーじろではありません',
        'definition': '法令 上 の 正式名称 は 字 路 ではあ',
        'pinyinSpace': 'ほうれい うえ の せいしきめいしょう は Ｔ じ/あざ みち/ち ではありません'
    },
    '7': {
        'character': 'さて何と言うでしょう',
        'letter': 'What is the proper name?',
        'pinyin': 'さてなんというでしょう',
        'definition': 'さて 何と 言う でしょう',
        'pinyinSpace': 'さて なんと いう でしょう'
    },
    '8': {
        'character': 'もっとフランクな問題がいいな',
        'letter': "I'd prefer something a little less complicated.",
        'pinyin': 'もっとふらんくなもんだいがいいな',
        'definition': 'もっと フランク な 問題 が いい な',
        'pinyinSpace': 'もっと フランク な もんだい が いい な'
    },
    '9': {
        'character': '無洗米の製法にはいくつかありますが',
        'letter': 'There are many ways of manufacturing pre-washed rice.',
        'pinyin': 'むせんまいのせいほうにはいくつかありますが',
        'definition': '無洗米 の 製法 には いくつか あります が',
        'pinyinSpace': 'むせんまい の せいほう には いくつか あります が'
    },
    '10': {
        'character': 'ＮＴＷＰ加工法という方法ではよく…',
        'letter': "But when using the NTWP manufacturing method, it's common—",
        'pinyin': 'ＮＴＷＰかこうほうというほうほうではよく…',
        'definition': '加工 法 と いう 方法 では よく',
        'pinyinSpace': 'ＮＴＷＰ かこう ほう と いう ほうほう で は よく …'
    },
    '11': {
        'character': 'ごめん、もうい!!',
        'letter': 'Actually, never mind.',
        'pinyin': 'ごめん、もういいや!!',
        'definition': 'ごめん もういい や',
        'pinyinSpace': 'ごめん 、 もういい や !!'
    },
    '12': {
        'character': 'おぉパンダく',
        'letter': 'Oh, hey, Panda.',
        'pinyin': 'おぉぱんだくん',
        'definition': 'おぉ パンダ くん',
        'pinyinSpace': 'おぉ パンダ くん'
    },
    '13': {
        'character': 'いらっしゃい',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃい',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '14': {
        'character': 'パンダくんいつもの？',
        'letter': 'Would you like your usual, Panda?',
        'pinyin': 'ぱんだくんいつもの？',
        'definition': 'パンダ くん いつも の',
        'pinyinSpace': 'パンダ くん いつも の ？'
    },
    '15': {
        'character': 'どうしたの？クイズ出す？',
        'letter': "What's wrong? Want a trivia question?",
        'pinyin': 'どうしたの？くいずだす？',
        'definition': 'どうしたの クイズ 出す',
        'pinyinSpace': 'どうしたの ？ クイズ だす ？'
    },
    '16': {
        'character': 'クイズよ',
        'letter': 'Instead of a trivia question,',
        'pinyin': 'くいずより',
        'definition': 'クイズ より',
        'pinyinSpace': 'クイズ より'
    },
    '17': {
        'character': 'どうしてシロクマくんは動物園に来てく',
        'letter': "why don't you come visit me at the zoo, Polar Bear?",
        'pinyin': 'どうしてしろくまくんはどうぶつえんにきてくれないの？',
        'definition': 'どうして シロクマ くん は 動物園 に 来てくれない の',
        'pinyinSpace': 'どうして シロクマ くん は どうぶつえん に きて くれない の ？'
    },
    '18': {
        'character': '何？急に',
        'letter': "What's this, all of a sudden?",
        'pinyin': 'なに？きゅうに',
        'definition': '何 急に',
        'pinyinSpace': 'なに/なん ？ きゅうに'
    },
    '19': {
        'character': '僕はいつもシロクマくんの仕事場に遊びに来てるのにずるいよ',
        'letter': "I always come to visit you at work. It's not fair.",
        'pinyin': 'ぼくはいつもしろくまくんのしごとばにあそびにきてるのにずるいよ',
        'definition': '僕 は いつも シロクマ くん の 仕事場 に 遊びに来てる のに ずるい よ',
        'pinyinSpace': 'ぼく は いつも シロクマ くん の しごとば に あそびにきてる のに ずるい よ'
    },
    '20': {
        'character': 'カフェにお茶しに来てるだけでしょ',
        'letter': "But you're coming to the café as a customer.",
        'pinyin': 'かふぇにおちゃしにきてるだけでしょ',
        'definition': 'カフェ に お茶 しに 来てる だけ で',
        'pinyinSpace': 'カフェ に おちゃ しに きてる だけ でしょ'
    },
    '21': {
        'character': '僕人にはモテるんだからね',
        'letter': "I'm really popular with people, you know?",
        'pinyin': 'ぼくひとにはもてるんだからね',
        'definition': '僕 人 には モテる ん だから ね',
        'pinyinSpace': 'ぼく ひと には モテる ん だ から ね'
    },
    '22': {
        'character': '聞いてないなぁ…',
        'letter': "He's not listening.",
        'pinyin': 'きいてないなぁ…',
        'definition': '聞いてない なぁ',
        'pinyinSpace': 'きいてない なぁ …'
    },
    '23': {
        'character': '一度動物',
        'letter': 'Come visit me at the zoo at least once.',
        'pinyin': 'いちどどうぶつえんにあそびにきてよ',
        'definition': '一度 動物園 に 遊びに来て よ',
        'pinyinSpace': 'いちど どうぶつえん に あそびにきて よ'
    },
    '24': {
        'character': '大人気でびっくりするよ',
        'letter': "You'll be surprised at how popular I am.",
        'pinyin': 'だいにんきでびっくりするよ',
        'definition': '大人気 で びっくりする よ',
        'pinyinSpace': 'おとなげ/だいにんき で びっくり する よ'
    },
    '25': {
        'character': 'なんで２回言うの?',
        'letter': "Why'd you have to say it twice?",
        'pinyin': 'なんで２かいいうの?',
        'definition': 'なんで ２回 言う の',
        'pinyinSpace': 'なんで にかい いう の ?'
    },
    '26': {
        'character': 'もしもしシロクマくん？',
        'letter': 'Hello, Polar Bear?',
        'pinyin': 'もしもししろくまくん？',
        'definition': 'もしもし シロクマ くん',
        'pinyinSpace': 'もしもし シロクマ くん ？'
    },
    '27': {
        'character': '明日動物園に来る件だけど忘れないでよ',
        'letter': "I'm calling to remind you to come to the zoo tomorrow.",
        'pinyin': 'あしたどうぶつえんにくるけんだけどわすれないでよ',
        'definition': '明日 動物園 に 来る 件 だけど 忘れないで よ',
        'pinyinSpace': 'あした どうぶつえん に くる けん だけど わすれないで よ'
    },
    '28': {
        'character': 'じゃあペンギンさんにも伝えておいてね',
        'letter': 'Please tell Mr. Penguin, too.',
        'pinyin': 'じゃあぺんぎんさんにもつたえておいてね',
        'definition': 'じゃあ ペンギン さん にも 伝えておいて ね',
        'pinyinSpace': 'じゃあ ペンギン さん にも つたえておいて ね'
    },
    '29': {
        'character': 'おはようございま～す',
        'letter': 'Good morning!',
        'pinyin': 'おはようございま～す',
        'definition': 'おはよう ござ いま す',
        'pinyinSpace': 'おはよう ござ いま ～ す'
    },
    '30': {
        'character': 'おはようパンダくん',
        'letter': 'Good morning, Panda.',
        'pinyin': 'おはようぱんだくん',
        'definition': 'おはよう パンダ くん',
        'pinyinSpace': 'おはよう パンダ くん'
    },
    '31': {
        'character': 'なんだか元気だね',
        'letter': "You're in good spirits today.",
        'pinyin': 'なんだかげんきだね',
        'definition': 'なんだか 元気 だ ',
        'pinyinSpace': 'なんだか げんき だ ね'
    },
    '32': {
        'character': '今日友達が僕のこと見に来るの',
        'letter': 'My friends are coming to see me today.',
        'pinyin': 'きょうともだちがぼ',
        'definition': '今日 友達 が 僕 の こと 見に来る の',
        'pinyinSpace': 'きょう ともだち が ぼく の こと みにくる の'
    },
    '33': {
        'character': 'そうなんだ',
        'letter': 'I see...',
        'pinyin': 'そうなんだ',
        'definition': 'そう なんだ',
        'pinyinSpace': 'そう なんだ'
    },
    '34': {
        'character': 'あっそうだ今日は常勤パンダさんが娘さんの参観日だから休むって',
        'letter': "Oh, that's right! Full-time Panda has the day off today because he's visiting his daughter's class.",
        'pinyin': 'あっそうだきょうはじょうきんぱんださんがむすめさんのさんかんびだからやすむって',
        'definition': 'あっそ う だ 今日 は 常勤 パンダ さん が 娘さん の 参観日 だから 休む って',
        'pinyinSpace': 'あっそ う だ きょう は じょうきん パンダ さん が むすめさん の さんかんび だ から やすむ って'
    },
    '35': {
        'character': 'そうなの？',
        'letter': 'Oh, really?',
        'pinyin': 'そうなの？',
        'definition': 'そう なの',
        'pinyinSpace': 'そう なの ？'
    },
    '36': {
        'character': 'あれ？ということは…',
        'letter': 'Wait, that means...',
        'pinyin': 'あれ？ということは…',
        'definition': 'あれ ということは',
        'pinyinSpace': 'あれ ？ ということは …'
    },
    '37': {
        'character': 'パンダは僕ひとり…',
        'letter': "I'll be the only panda.",
        'pinyin': 'ぱんだはぼくひとり…',
        'definition': 'パンダ は 僕 ひとり',
        'pinyinSpace': 'パンダ は ぼく ひとり …'
    },
    '38': {
        'character': 'パンダさんかわいい～！',
        'letter': "You're so cute, Mr. Panda!",
        'pinyin': 'ぱんださんかわいい～！',
        'definition': 'パンダ さん かわいい',
        'pinyinSpace': 'パンダ さん かわいい ～！'
    },
    '39': {
        'character': 'パンダく～ん！かわいい！',
        'letter': "You're so cute, Panda!",
        'pinyin': 'ぱんだく～ん！か',
        'definition': 'パンダ く ん かわいい',
        'pinyinSpace': 'パンダ く ～ ん ！ かわいい ！'
    },
    '40': {
        'character': 'ようし！頑張るぞ～！',
        'letter': "All right! I'll do my best!",
        'pinyin': 'ようし！がんばるぞ～！',
        'definition': 'ようし 頑張る ぞ',
        'pinyinSpace': 'ようし ！ がんばる ぞ ～！'
    },
    '41': {
        'character': 'うわっすっげえ！',
        'letter': 'Oh, my God!',
        'pinyin': 'うわっすっげえ！',
        'definition': 'うわ っすっげえ',
        'pinyinSpace': 'うわ っすっげえ ！'
    },
    '42': {
        'character': '何名様ですか？',
        'letter': 'How many?',
        'pinyin': 'なんめいさまですか？',
        'definition': '何 名様 です か',
        'pinyinSpace': 'なに めいさま です か ？'
    },
    '43': {
        'character': '２名です',
        'letter': 'Two... Animals, please.',
        'pinyin': '２めいです',
        'definition': '２名 です',
        'pinyinSpace': 'にめい です'
    },
    '44': {
        'character': 'ここが動物園か',
        'letter': 'So, this is the zoo.',
        'pinyin': 'ここがどうぶつえんか',
        'definition': 'ここ が 動物園 か',
        'pinyinSpace': 'ここ が どうぶつえん か'
    },
    '45': {
        'character': '思ったより広いね',
        'letter': "It's a lot bigger than I thought.",
        'pinyin': 'おもったよりひろいね',
        'definition': ' より 広い ね',
        'pinyinSpace': 'おもった より ひろい ね'
    },
    '46': {
        'character': 'まずはパンダくんを見に行こう',
        'letter': "Let's go see Panda first.",
        'pinyin': 'まずはぱんだくん',
        'definition': 'まず は パンダ くん を 見に行こう',
        'pinyinSpace': 'まず は パンダ くん を みにいこう'
    },
    '47': {
        'character': 'ただ今からシロクマのおやつタイムを行います',
        'letter': 'We will now start the polar bear feeding time.',
        'pinyin': 'ただいまからしろくまのおやつたいむをおこないます',
        'definition': 'ただ今 から シロクマ の おやつタイム を 行います',
        'pinyinSpace': 'ただいま から シロクマ の おやつタイム を おこないます'
    },
    '48': {
        'character': 'シロクマがプールへダイビングする姿をどうぞお楽しみください',
        'letter': 'Please enjoy watching the polar bear dive into the water!',
        'pinyin': 'しろくまがぷーるへだいびんぐするすがたをどうぞおたのしみください',
        'definition': 'シロクマ が プール へ ダイビング 姿 を どうぞ お 楽しみ ください',
        'pinyinSpace': 'シロクマ が プール へ ダイビング する すがた を どうぞ お たのしみ ください'
    },
    '49': {
        'character': '見たい！すごそう！',
        'letter': 'I want to go see! That sounds amazing!',
        'pinyin': 'みたい！すごそう！',
        'definition': '見たい すごそう',
        'pinyinSpace': 'みたい ！ すごそう ！'
    },
    '50': {
        'character': 'えっ！？見たい！？',
        'letter': 'What? You want to see that?',
        'pinyin': 'えっ！？みたい！？',
        'definition': 'え っ 見たい',
        'pinyinSpace': 'え っ ！？ みたい ！？'
    },
    '51': {
        'character': 'シロクマくんってシロクマだよね？',
        'letter': "You're a polar bear, right, Polar Bear?",
        'pinyin': 'しろくまくんってしろくまだよね？',
        'definition': 'シロクマ くん って シロクマ だよね',
        'pinyinSpace': 'シロクマ くん って シロクマ だよね ？'
    },
    '52': {
        'character': 'シロクマがシロクマのダイビングする姿が見たいの？',
        'letter': 'You want to see a polar bear diving, Polar Bear?',
        'pinyin': 'しろくまがしろくまのだいびんぐするすがたがみたいの？',
        'definition': 'シロクマ が シロクマ の ダイビングする 姿 が 見たい の',
        'pinyinSpace': 'シロクマ が シロクマ の ダイビング する すがた が みたい の ？'
    },
    '53': {
        'character': '行こう行こう！',
        'letter': "Let's go, let's go!",
        'pinyin': 'いこういこう',
        'definition': '行こう 行こう',
        'pinyinSpace': 'いこう いこう ！'
    },
    '54': {
        'character': 'パンダく～ん',
        'letter': 'Panda!',
        'pinyin': 'ぱんだく～ん',
        'definition': 'パンダ く ん',
        'pinyinSpace': 'パンダ く ～ ん'
    },
    '55': {
        'character': 'そんなに飛ばして大丈夫？',
        'letter': 'Are you doing okay, working that hard?',
        'pinyin': 'そんなにとばしてだいじょうぶ？',
        'definition': 'そんなに 飛ばして 大丈夫',
        'pinyinSpace': 'そんなに とばして だいじょうぶ ？'
    },
    '56': {
        'character': '半田さん友達が来たらちゃんと写真撮ってね',
        'letter': 'Mr. Handa, when my friends come, please take our picture.',
        'pinyin': 'はんでんさんともだちがきたらちゃんとしゃしんとってね',
        'definition': '半田 さん 友達 が 来たら ちゃんと 写真 撮って ね',
        'pinyinSpace': 'はんだ さん ともだち が きたら ちゃんと しゃしん とって ね'
    },
    '57': {
        'character': 'でもおかしいなぁ',
        'letter': "But it's strange,",
        'pinyin': 'でもおかしいなぁ',
        'definition': 'でも おかしい なぁ',
        'pinyinSpace': 'でも おかしい なぁ'
    },
    '58': {
        'character': 'シロクマくんたち１時って言ったのに来ないね',
        'letter': "They said they'd be here around 1pm, but I don't see them anywhere.",
        'pinyin': 'しろくまくんたち１じっていったのにこないね',
        'definition': 'シロクマ くん たち １時 って 言った のに 来ない ね',
        'pinyinSpace': 'シロクマ くん たち いちじ って いった のに こない ね'
    },
    '59': {
        'character': 'シロクマくん駄目だよほら',
        'letter': "We can't go in here, Polar Bear. Look.",
        'pinyin': 'しろくまくんだめだよほら',
        'definition': 'シロクマ くん 駄目 だ よ ほら',
        'pinyinSpace': 'シロクマ くん だめ だ よ ほら'
    },
    '60': {
        'character': 'なに？',
        'letter': 'What?',
        'pinyin': 'なに？',
        'definition': 'なに',
        'pinyinSpace': 'なに ？'
    },
    '61': {
        'character': '入館不可だって',
        'letter': "It says you can't enter.",
        'pinyin': 'にゅうかんふかだって',
        'definition': '入館 不可 だって',
        'pinyinSpace': 'にゅうかん ふか だって'
    },
    '62': {
        'character': 'しろくま館へのシロクマの入館はご遠慮ください',
        'letter': 'We apologize for the inconvenience, but polar bears are not allowed in the Polar Bear Hall.',
        'pinyin': 'しろくまかんへのしろくまのにゅうかんはごえんりょください',
        'definition': 'しろくま 館 へ の シロクマ の 入館 は ご遠慮',
        'pinyinSpace': 'しろくま やかた/かん へ の シロクマ の にゅうかん は ごえんりょください'
    },
    '63': {
        'character': 'まぎらわしいので',
        'letter': 'It confuses them!',
        'pinyin': 'まぎらわしいので',
        'definition': 'まぎらわしい ので',
        'pinyinSpace': 'まぎらわしい ので'
    },
    '64': {
        'character': 'こっそり入ればバレないバレないの',
        'letter': "If we sneak in quietly, they'll never even notice.",
        'pinyin': 'こっそりいればばれないばれないの',
        'definition': 'こっそり 入れば バレない バレない の',
        'pinyinSpace': 'こっそり はいれば/いれば バレない バレない の'
    },
    '65': {
        'character': 'いやすごく目立ってるから',
        'letter': "No... I think we're pretty obvious.",
        'pinyin': 'いやすごくめだってるから',
        'definition': 'いや すごく 目立ってる から',
        'pinyinSpace': 'いや すごく めだってる から'
    },
    '66': {
        'character': 'お～！すごい迫力',
        'letter': "Wow! That's incredible!",
        'pinyin': 'お～！すごいはくりょく',
        'definition': 'お すごい 迫力',
        'pinyinSpace': 'お ～！ すごい はくりょく'
    },
    '67': {
        'character': 'シロクマ！',
        'letter': 'A polar bear!',
        'pinyin': 'しろくま！',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ ！'
    },
    '68': {
        'character': 'ちょっとちょっとシロクマは入れないって書いてあったでしょう',
        'letter': 'Hey, hey! The sign clearly says no polar bears allowed!',
        'pinyin': 'ちょっとちょっとしろくまはいれないってかいてあったでしょう',
        'definition': 'ちょっと ちょっと シロクマ は 入れない って 書いてあった でしょう',
        'pinyinSpace': 'ちょっと ちょ シロクマ は はいれない/いれない って かいてあった でしょう'
    },
    '69': {
        'character': '困りますよ',
        'letter': "It's really troublesome.",
        'pinyin': 'こまりますよ',
        'definition': '困ります よ',
        'pinyinSpace': 'こまります よ'
    },
    '70': {
        'character': 'え？これ剥製ですけど',
        'letter': 'Um... This is actually a stuffed animal.',
        'pinyin': 'え？これはくせいですけど',
        'definition': 'え これ 剥製 です けど',
        'pinyinSpace': 'え ？ これ はくせい です けど'
    },
    '71': {
        'character': '今動いてましたよ剥製なわけないでしょう',
        'letter': 'It was just moving!',
        'pinyin': 'いまうごいてましたよはくせいなわけないでしょう',
        'definition': '今 動いてました よ 剥製 な わけないでしょう',
        'pinyinSpace': 'いま うごいてました よ  な わけない·でしょう'
    },
    '72': {
        'character': 'なんで来ないの？',
        'letter': "Why aren't they here yet?",
        'pinyin': 'なんでこないの？',
        'definition': 'なんで 来ない の',
        'pinyinSpace': 'なんで こない の ？'
    },
    '73': {
        'character': 'もう行っていいかな？来たら呼んで',
        'letter': "Um, I'm going to go now. Call me when they get here.",
        'pinyin': 'もういっていいかな？きた',
        'definition': 'もう 行っていい かな 来たら 呼んで',
        'pinyinSpace': 'もう おこなって いい/いって いい かな ？ きたら よんで'
    },
    '74': {
        'character': 'もう叱られたじゃない',
        'letter': 'See? We got in trouble.',
        'pinyin': 'もうしかられたじゃない',
        'definition': 'もう 叱られた じゃない',
        'pinyinSpace': 'もう しかられた じゃない'
    },
    '75': {
        'character': '僕はバレ',
        'letter': "I said we'd get in trouble.",
        'pinyin': 'ぼくはばれるっていったのに',
        'definition': '僕 は バレる って 言った のに',
        'pinyinSpace': 'ぼく は バレる って いった のに'
    },
    '76': {
        'character': 'じゃあパンダくんとこに行こう',
        'letter': "Then let's go see Panda.",
        'pinyin': 'じゃあぱんだくんとこにいこう',
        'definition': 'じゃあ パンダ くん とこ に 行こう',
        'pinyinSpace': 'じゃあ パンダ くん とこ に いこう'
    },
    '77': {
        'character': 'うん',
        'letter': 'Okay.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '78': {
        'character': 'パンダくんかわいいキャ～ッかわいい',
        'letter': "You're so cute, Panda!",
        'pinyin': 'ぱんだくんかわいいきゃ～っかわいい',
        'definition': 'パンダ くん かわいい キャ ッか わ いい',
        'pinyinSpace': 'パンダ くん かわいい キャ ～ ッか わ いい'
    },
    '79': {
        'character': 'パンダく～ん',
        'letter': 'Panda!',
        'pinyin': 'ぱんだく～ん',
        'definition': ' く ん',
        'pinyinSpace': 'パンダ く ～ ん'
    },
    '80': {
        'character': 'パンダくん遅れてごめん',
        'letter': "Sorry we're late, Panda!",
        'pinyin': 'ぱんだくんおくれてごめん',
        'definition': 'パンダ くん 遅れて ごめん',
        'pinyinSpace': 'パンダ くん おくれて ごめん'
    },
    '81': {
        'character': 'あれ？',
        'letter': 'Huh?',
        'pinyin': 'あれ？',
        'definition': 'あれ',
        'pinyinSpace': 'あ ？'
    },
    '82': {
        'character': 'お～いパンダくん',
        'letter': 'Hey, Panda!',
        'pinyin': 'お～いぱんだくん',
        'definition': 'お い パンダ くん',
        'pinyinSpace': 'お ～ い パンダ くん'
    },
    '83': {
        'character': '寝てる',
        'letter': "He's asleep.",
        'pinyin': 'ねてる',
        'definition': '寝てる',
        'pinyinSpace': 'ねてる'
    },
    '84': {
        'character': 'パンダくん起きて',
        'letter': 'Panda! Wake up!',
        'pinyin': 'ぱんだくんおきて',
        'definition': 'パンダ くん 起きて',
        'pinyinSpace': 'パンダ くん おきて'
    },
    '85': {
        'character': '笑ってる',
        'letter': "He's laughing...",
        'pinyin': 'わらってる',
        'definition': '笑ってる',
        'pinyinSpace': 'わらってる'
    },
    '86': {
        'character': 'パンダくんおいパンダくん！',
        'letter': 'Panda!',
        'pinyin': 'ぱんだくんおいぱんだくん！',
        'definition': 'パンダ くん おい パンダ くん',
        'pinyinSpace': 'パンダ くん おい パンダ くん ！'
    },
    '87': {
        'character': '駄目だ',
        'letter': "It's no use.",
        'pinyin': 'だめだ',
        'definition': '駄目 だ',
        'pinyinSpace': 'だめ だ'
    },
    '88': {
        'character': '他のとこ回ってこようか',
        'letter': "Let's go somewhere else.",
        'pinyin': 'ほかのとこまわってこようか',
        'definition': '他 の とこ 回っ か',
        'pinyinSpace': 'た/ほか の とこ まわってこよう か'
    },
    '89': {
        'character': '寝ててもいいなんてうらやましい仕事だね',
        'letter': "I envy the fact that he's allowed to sleep at work.",
        'pinyin': 'ねててもいいなんてうらやましいしごとだね',
        'definition': '寝ててもいい なんて うらやましい 仕事 だ ね',
        'pinyinSpace': 'ねてて もいい なんて うらやましい しごと だ ね'
    },
    '90': {
        'character': 'ハッ今ペンギンさんの声が',
        'letter': 'Hey, I think I just heard Mr. Penguin!',
        'pinyin': 'はっいまぺんぎんさんのこえが',
        'definition': 'ハッ 今 ペンギン さん の 声 が',
        'pinyinSpace': 'ハッ いま ペンギン さん の こえ が'
    },
    '91': {
        'character': 'いない',
        'letter': "Aw, he's not here.",
        'pinyin': 'いない',
        'definition': 'いない',
        'pinyinSpace': 'いない'
    },
    '92': {
        'character': 'あっ半田さん',
        'letter': 'Oh, Mr. Handa.',
        'pinyin': 'あっはんでんさん',
        'definition': 'あっ 半田 さん',
        'pinyinSpace': ' はんだ さん'
    },
    '93': {
        'character': 'なに？',
        'letter': 'Yes?',
        'pinyin': 'なに？',
        'definition': 'なに',
        'pinyinSpace': 'なに ？'
    },
    '94': {
        'character': '友達来なかった？',
        'letter': 'Did my friends happen to stop by?',
        'pinyin': 'ともだちこなかった？',
        'definition': '友達 来なかった',
        'pinyinSpace': 'ともだち こなかった ？'
    },
    '95': {
        'character': 'え？気づかなかったな',
        'letter': "I didn't see them.",
        'pinyin': 'え？きづかなかったな',
        'definition': 'え 気づかなかった な',
        'pinyinSpace': 'え ？ きづかなかった な'
    },
    '96': {
        'character': 'ちゃんと写真撮ってよ',
        'letter': "Make sure you take our picture, 'kay?",
        'pinyin': 'ちゃんとしゃしんとってよ',
        'definition': 'ちゃんと 写真 撮って よ',
        'pinyinSpace': 'ちゃんと しゃしん とって よ'
    },
    '97': {
        'character': 'はいはい',
        'letter': 'Sure, sure...',
        'pinyin': 'はいはい',
        'definition': 'はいはい',
        'pinyinSpace': 'はいはい'
    },
    '98': {
        'character': 'おっあざらし館行こう行こう',
        'letter': "Hey, the Seal Hall! Let's go!",
        'pinyin': 'おっあざらしかんいこういこう',
        'definition': 'お っあ ざら し 館 行こう 行こう',
        'pinyinSpace': 'お っあ ざら し やか/かん いこう いこう'
    },
    '99': {
        'character': 'シロクマの入館はご遠慮ください',
        'letter': 'We apologize for the inconvenience, but polar bears are not allowed in the Seal Hall',
        'pinyin': 'しろくまのにゅうかんはごえんりょください',
        'definition': 'シロクマ の 入館 は ご遠慮ください',
        'pinyinSpace': 'シロクマ の にゅうかん は ごえんりょください'
    },
    '100': {
        'character': 'あざらしが怖がるので…',
        'letter': 'It scares the seals!',
        'pinyin': 'あざらしがこわがるので…',
        'definition': 'あざらし が 怖がる ので',
        'pinyinSpace': 'あざらし が こわがる ので …'
    },
    '101': {
        'character': 'だってさ',
        'letter': 'There ya go.',
        'pinyin': 'だってさ',
        'definition': 'だって さ',
        'pinyinSpace': 'だって さ'
    },
    '102': {
        'character': 'バレないバレない',
        'letter': 'No one will even notice.',
        'pinyin': 'ばれないばれない',
        'definition': 'バレない バレない',
        'pinyinSpace': 'バレない バレない'
    },
    '103': {
        'character': 'いや目立ってるし',
        'letter': "No, we're pretty obvious.",
        'pinyin': 'いやめだってるし',
        'definition': 'いや 目立ってる し',
        'pinyinSpace': 'いや めだってる し'
    },
    '104': {
        'character': '食べない食べないの',
        'letter': "Don't worry, I won't eat you.",
        'pinyin': 'たべないたべないの',
        'definition': '食べない 食べない の',
        'pinyinSpace': 'たべない たべない の'
    },
    '105': {
        'character': 'シロクマ！',
        'letter': 'A polar bear!',
        'pinyin': 'しろくま！',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ ！'
    },
    '106': {
        'character': '食べないとわかっていても実際本物見るとテンション',
        'letter': "Even though I know I won't eat one, I still get a little excited when I see one.",
        'pinyin': 'たべないとわかっていてもじっさいほんものみるとてんしょんあがるなあ',
        'definition': ' と わかっていても 実際 本物 見る と テンション 上がる なあ',
        'pinyinSpace': 'たべない と わかっていても じっさい ほんもの みる と テンション あがる なあ'
    },
    '107': {
        'character': 'シロクマくんの野性が呼び覚まされないうちに早く行こうよ',
        'letter': "Let's leave before your natural instincts take over.",
        'pinyin': 'しろくまくんのやせいがよび',
        'definition': 'シロクマ くん の 野性 が 呼び 覚まされない うち に 早く 行こう よ',
        'pinyinSpace': 'シロクマ くん の やせい が よび さまされない うち  はやく いこう よ'
    },
    '108': {
        'character': 'ちょっとちょっと',
        'letter': 'Hey, hey!',
        'pinyin': 'ちょっとちょっと',
        'definition': 'ちょっと ちょっと',
        'pinyinSpace': 'ちょっと ちょっと'
    },
    '109': {
        'character': 'シロクマは入らないでって書いてあったでしょう',
        'letter': 'The sign clearly said no polar bears allowed!',
        'pinyin': 'しろくまははいらないでってかいてあった',
        'definition': 'シロクマ は 入らないでって 書いてあった でしょう',
        'pinyinSpace': 'シロクマ は はいらないでって/いらないでって かいてあった でしょう'
    },
    '110': {
        'character': 'え？これ絨毯ですよ',
        'letter': 'Oh, this is just a rug.',
        'pinyin': 'え？これじゅうたんですよ',
        'definition': 'え これ 絨毯 です よ',
        'pinyinSpace': 'え ？ これ じゅうたん です よ'
    },
    '111': {
        'character': 'ほ～ら見てみてこんなにふっかふか',
        'letter': "See? Look! It's so fluffy!",
        'pinyin': 'ほ～らみてみてこんなにふっかふか',
        'definition': 'ほ ら 見て みて こんなに ふっか ふか',
        'pinyinSpace': 'ほ ～ ら みて みて こんなに ふっか ふか'
    },
    '112': {
        'character': 'いや～騙せないもんだね',
        'letter': "Wow. We can't seem to pull one over on them.",
        'pinyin': 'いや～だませないもんだね',
        'definition': 'いや 騙せない もんだ ね',
        'pinyinSpace': 'いや ～ だませない もん·だ ね'
    },
    '113': {
        'character': 'もう',
        'letter': 'Jeez.',
        'pinyin': 'もう',
        'definition': 'もう',
        'pinyinSpace': 'もう'
    },
    '114': {
        'character': 'パンダくんそろそろ起きてるんじゃない？',
        'letter': 'Panda might actually be awake now.',
        'pinyin': '',
        'definition': 'パンダ くん そろそろ 起きてる ん じゃない',
        'pinyinSpace': 'パンダ くん そろそろ おきてる ん じゃない ？'
    },
    '115': {
        'character': 'お～いパンダくん',
        'letter': 'Hey, Panda!',
        'pinyin': 'お～いぱんだくん',
        'definition': 'お い パンダ くん',
        'pinyinSpace': 'お ～ い パンダ くん'
    },
    '116': {
        'character': 'また笑ってる',
        'letter': "He's laughing again.",
        'pinyin': 'またわらってる',
        'definition': 'また 笑ってる',
        'pinyinSpace': 'また わらってる'
    },
    '117': {
        'character': 'よくあんな状態で寝られるね',
        'letter': "It's amazing that he can sleep in that position.",
        'pinyin': 'よくあんなじょうたいでねられるね',
        'definition': 'よく あんな 状態 で 寝られる ね',
        'pinyinSpace': 'よく あんな じょうたい で ねられる ね'
    },
    '118': {
        'character': 'あれは逆に尊敬するね',
        'letter': 'I actually admire him for that.',
        'pinyin': 'あれはぎゃくにそんけいするね',
        'definition': 'あれ は 逆 に 尊敬する ね',
        'pinyinSpace': 'あれ は ぎゃく に そんけい する ね'
    },
    '119': {
        'character': 'あのもしかしてパンダくんのお友達ですか？',
        'letter': "Excuse me, are you Panda's friends?",
        'pinyin': 'あのもしかしてぱんだくんのおともだちですか？',
        'definition': 'あの もしかして パンダ くん の お 友達 です か',
        'pinyinSpace': 'あの もしかして パンダ くん の お ともだち です か ？'
    },
    '120': {
        'character': 'あはい',
        'letter': 'Yes, we are.',
        'pinyin': 'あはい',
        'definition': 'あ はい',
        'pinyinSpace': 'あ はい'
    },
    '121': {
        'character': '写真撮りましょうか',
        'letter': 'Could I take a picture?',
        'pinyin': 'しゃしんとりましょうか',
        'definition': '写真 撮りましょう か',
        'pinyinSpace': 'しゃしん とりましょう か'
    },
    '122': {
        'character': '撮ってくれって頼まれてるんで',
        'letter': 'He asked me to take one.',
        'pinyin': 'とってくれってたのまれてるんで',
        'definition': '撮ってくれ って 頼まれてる ん で',
        'pinyinSpace': 'とって くれ って たのまれてる ん で'
    },
    '123': {
        'character': 'キリンさんしろくまカフェに来てくれないかな？',
        'letter': 'I wonder if Mr. Giraffe will come to my café.',
        'pinyin': 'きりんさんしろくまかふぇにきてくれないかな？',
        'definition': 'キリン さんしろ くま カフェ に 来てくれない かな',
        'pinyinSpace': 'キリン さんしろ くま カフェ に きて くれない かな ？'
    },
    '124': {
        'character': 'いやカフェに入れないでしょ',
        'letter': "No, I don't think he can get in.",
        'pinyin': 'いやかふぇにいれないでしょ',
        'definition': 'いや カフェ に 入れないでしょ',
        'pinyinSpace': 'いや カフェ に はいれない でしょ/いれない でしょ'
    },
    '125': {
        'character': '別のところも回ってみよう',
        'letter': "Let's look around the other places, too.",
        'pinyin': 'べつのところもまわってみよう',
        'definition': '別 の ところ も 回って みよう',
        'pinyinSpace': 'べつ の ところ も まわって み'
    },
    '126': {
        'character': 'そうだね',
        'letter': 'Okay.',
        'pinyin': 'そうだね',
        'definition': 'そうだね',
        'pinyinSpace': 'そうだね'
    },
    '127': {
        'character': 'でどこ行こうか？',
        'letter': 'So, where did you want to go?',
        'pinyin': 'でどこいこうか？',
        'definition': 'で どこ 行こう か',
        'pinyinSpace': 'で どこ いこう か ？'
    },
    '128': {
        'character': 'う～んあっ！ペンギンコーナ',
        'letter': 'Oh, how about the Penguin Corner?',
        'pinyin': 'う～んあっ！ぺんぎんこーなー',
        'definition': 'う ん あっ ペンギン コーナー',
        'pinyinSpace': 'う ～ ん あっ ！ ペンギン コ'
    },
    '129': {
        'character': 'えぇ～',
        'letter': 'Oh, my God.',
        'pinyin': 'えぇ～',
        'definition': 'えぇ',
        'pinyinSpace': 'えぇ ～'
    },
    '130': {
        'character': 'ペンギンさん曲芸に飛び入りしてよ',
        'letter': 'You should join in their acrobatics act, Mr. Penguin.',
        'pinyin': 'ぺんぎんさんきょくげいにとびいりしてよ',
        'definition': 'ペンギン さん 曲芸 に 飛び入りして よ',
        'pinyinSpace': 'ペンギン さん きょくげい に とびいり して よ'
    },
    '131': {
        'character': '僕運動神経悪いから',
        'letter': "I'm terrible with exercise.",
        'pinyin': 'ぼくうんどうしんけいわるいから',
        'definition': '僕 運動神経 悪い から',
        'pinyinSpace': 'ぼく うんどうしんけい わるい から'
    },
    '132': {
        'character': 'ちょっとちょっと',
        'letter': 'Hey, there.',
        'pinyin': 'ちょっとちょっと',
        'definition': 'ちょっと ちょっと',
        'pinyinSpace': 'ちょっと ちょっと'
    },
    '133': {
        'character': 'あラマさん',
        'letter': 'Oh, hello, Mr. Llama.',
        'pinyin': 'あらまさん',
        'definition': 'あ ラマ さん',
        'pinyinSpace': 'あ ラマ さん'
    },
    '134': {
        'character': '今日はどうしたんですか？',
        'letter': 'What brings you here today?',
        'pinyin': 'きょうはどうしたんですか？',
        'definition': '今日 は どうしたん です か',
        'pinyinSpace': 'きょう は どうしたん です か ？'
    },
    '135': {
        'character': 'パンダくんに会いにきたのに寝てるんだよね',
        'letter': "We came to see Panda, but he's asleep.",
        'pinyin': 'ぱんだくんにあいにきたのにねてるんだよね',
        'definition': 'パンダ くん に 会い に きた のに 寝てる ん だよね',
        'pinyinSpace': 'パンダ く に あい に きた のに ねてる ん だよね'
    },
    '136': {
        'character': 'たまには起きてますよ',
        'letter': "He's awake sometimes.",
        'pinyin': 'たまにはおきてますよ',
        'definition': 'たまに は 起きてます よ',
        'pinyinSpace': 'たまに は おきてます よ'
    },
    '137': {
        'character': 'そっかいいかげんパンダくん起きてるよね？',
        'letter': 'Oh, okay. Panda should be awake by now.',
        'pinyin': 'そっかいいかげんぱんだくんおきてるよね？',
        'definition': 'そっか いいかげん パンダ くん 起きてる よね',
        'pinyinSpace': 'そっか いいかげん パン くん おきてる よね ？'
    },
    '138': {
        'character': '戻ろう',
        'letter': "Let's go look.",
        'pinyin': 'もどろう',
        'definition': '戻ろう',
        'pinyinSpace': 'もどろう'
    },
    '139': {
        'character': 'また寝てる',
        'letter': "He's asleep, again.",
        'pinyin': 'またねてる',
        'definition': 'また 寝てる',
        'pinyinSpace': 'また ねてる'
    },
    '140': {
        'character': '更にだらしないね',
        'letter': 'And he looks even more shameless.',
        'pinyin': 'さらにだらしないね',
        'definition': '更に だらしない ね',
        'pinyinSpace': 'さらに だらしない ね'
    },
    '141': {
        'character': 'パンダくん僕たちにいったい何を見てもらいたかったんだろうね',
        'letter': 'I wonder what exactly Panda wanted us to see.',
        'pinyin': 'ぱんだくんぼくたちにいったいなにをみてもらいたかったんだろうね',
        'definition': 'パンダ くん 僕たち に いったい 何 を 見てもらいたかった ん だろう ね',
        'pinyinSpace': 'パンダ くん ぼくたち に いったい なに を みて·もらいたかった ん だろう ね'
    },
    '142': {
        'character': 'あのパンダさん寝てばっかりでつまんない',
        'letter': "That panda's so boring. All he does is sleep.",
        'pinyin': 'あのぱんださんねてばっかりでつまんない',
        'definition': 'あの パンダ さん 寝て ばっかり で つまんない',
        'pinyinSpace': 'あの パンダ さん ねて ばっかり で つまんない'
    },
    '143': {
        'character': 'うん行こ',
        'letter': "Yeah, let's go!",
        'pinyin': 'うんいこう',
        'definition': 'うん 行こう',
        'pinyinSpace': 'うん いこう'
    },
    '144': {
        'character': '大人気ねぇ…',
        'letter': "Popular,' huh?",
        'pinyin': 'だいにんきねぇ…',
        'definition': '大人気 ねぇ',
        'pinyinSpace': 'おとなげ/だいにんき ねぇ …'
    },
    '145': {
        'character': 'あまた笑った',
        'letter': "Hey, he's laughing again.",
        'pinyin': 'あまたわらった',
        'definition': 'あまた 笑った',
        'pinyinSpace': 'あまた わらった'
    },
    '146': {
        'character': 'ず～っと待ってたのになんで来てくれなかったの？',
        'letter': "I was waiting the whole day. Why didn't you come?",
        'pinyin': 'ず～っとまってたのになんできてくれなかったの？',
        'definition': 'ず っと 待ってた のに なんで 来てくれなかった の',
        'pinyinSpace': 'ず ～ っと まってた のに なんで きて くれなかった の ？'
    },
    '147': {
        'character': 'いや何度も行ったよ',
        'letter': 'Actually, we came by quite a few times.',
        'pinyin': 'いやなんどもいったよ',
        'definition': 'いや 何度も 行った よ',
        'pinyinSpace': 'いや なんども おこなった/いった よ'
    },
    '148': {
        'character': 'ほんと？',
        'letter': 'Really?',
        'pinyin': 'ほんと？',
        'definition': 'ほんと',
        'pinyinSpace': 'ほんと ？'
    },
    '149': {
        'character': '行ったってば',
        'letter': 'We were there!',
        'pinyin': 'いったってば',
        'definition': '行った ってば',
        'pinyinSpace': 'おこなった/いった ってば'
    },
    '150': {
        'character': 'ねぇラマさん今日動物園で会ったよね？',
        'letter': 'Right, Mr. Llama? We met at the zoo today, right?',
        'pinyin': 'ねぇらまさんきょうどうぶつえんであ',
        'definition': 'ねぇ ラマ さん 今日 動物園 で 会った よね',
        'pinyinSpace': 'ねぇ ラマ さん きょう どうぶつえん で あった よね ？'
    },
    '151': {
        'character': '会いましたよ',
        'letter': 'We did.',
        'pinyin': 'あいましたよ',
        'definition': '会いました よ',
        'pinyinSpace': 'あいました よ'
    },
    '152': {
        'character': 'ほらちゃんと行ったでしょ？',
        'letter': 'See? We did go.',
        'pinyin': 'ほらちゃんといったでしょ？',
        'definition': 'ほら ちゃんと 行った でしょ',
        'pinyinSpace': 'ほら ちゃんと おこなった/いった でしょ ？'
    },
    '153': {
        'character': 'どうして僕のとこには来てくれないの？',
        'letter': "Why didn't you come see me?",
        'pinyin': 'どうしてぼくのとこにはきてくれないの？',
        'definition': 'どうして 僕 の とこ には 来てくれない の',
        'pinyinSpace': 'どうして ぼく の とこ には きて くれない の ？'
    },
    '154': {
        'character': 'だから行ったんだって！',
        'letter': 'I just said we did!',
        'pinyin': 'だからいったんだって！',
        'definition': 'だから 行った ん だって',
        'pinyinSpace': 'だ·から おこなった/いった ん だって ！'
    },
    '155': {
        'character': 'そんなにずっとラマさんを見てたの？',
        'letter': 'You spent that much time watching Mr. Llama?',
        'pinyin': 'そんなにずっとらまさんをみてたの？',
        'definition': 'そんなに ずっと ラマ さん を 見てた の',
        'pinyinSpace': 'そんな ずっと ラマ さん を みてた の ？'
    },
    '156': {
        'character': 'だからパンダくんとこに行ったってば！',
        'letter': "I'm trying to tell you, we went to see you, too!",
        'pinyin': 'だからぱんだくんとこにいったってば！',
        'definition': 'だから パンダ くん とこ に 行った ってば',
        'pinyinSpace': 'だ·から パンダ くん とこ に おこなった/いった ってば ！'
    },
    '157': {
        'character': 'じゃあなんで会えなかったんだろうね',
        'letter': "I wonder why we didn't see each other, then.",
        'pinyin': 'じゃあなんであえなかったんだろうね',
        'definition': 'じゃあ なんで 会えなかった ん だろう ね',
        'pinyinSpace': 'じゃあ なんで あえなかった ん だろう ね'
    },
    '158': {
        'character': 'パンダくんが寝てばっかりだったからでしょ',
        'letter': "It's because you were asleep the whole time.",
        'pinyin': 'ぱんだくんがねてばっかりだったからでしょ',
        'definition': 'パンダ くん が 寝て ばっかり だった から でしょ',
        'pinyinSpace': 'パンダ くん が ねて ばっかり だった から でしょ'
    },
    '159': {
        'character': '起こしてよ',
        'letter': 'You should have woken me up.',
        'pinyin': 'おこしてよ',
        'definition': '起こして よ',
        'pinyinSpace': 'おこして よ'
    },
    '160': {
        'character': '起きなかったよ',
        'letter': "You didn't wake up!",
        'pinyin': 'おきなかったよ',
        'definition': '起きなかっ よ',
        'pinyinSpace': 'おきなかった よ'
    },
    '161': {
        'character': 'せっかく半田さんが写真撮ってくれるって言ってたのに',
        'letter': 'And Mr. Handa even said he would take pictures...',
        'pinyin': 'せっかくはんでんさんがしゃしんとってくれるっていってたのに',
        'definition': 'せっかく 半田 さん が 写真 撮ってくれる って 言ってた のに',
        'pinyinSpace': 'せっかく はんだ さん  しゃしん とって くれる って いってた のに'
    },
    '162': {
        'character': '撮ったよ',
        'letter': 'He did.',
        'pinyin': 'とったよ',
        'definition': '撮った よ',
        'pinyinSpace': 'と よ'
    },
    '163': {
        'character': 'ほんとだ来てたんだね',
        'letter': 'Wow, you really did come!',
        'pinyin': 'ほんとだこてたんだね',
        'definition': 'ほんと だ 来てた ん だ ね',
        'pinyinSpace': 'ほんと だ きてた ん だ ね'
    },
    '164': {
        'character': 'だから言ったのに',
        'letter': "That's what I've been saying.",
        'pinyin': 'だからいったのに',
        'definition': 'だから 言った のに',
        'pinyinSpace': 'だ·から いった のに'
    },
    '165': {
        'character': 'へぇ～僕って寝ててもかわいいなぁ',
        'letter': "I'm so cute even when I'm sleeping.",
        'pinyin': 'へぇ～ぼくってねててもかわいいなぁ',
        'definition': 'へぇ 僕 って 寝てても かわいい なぁ',
        'pinyinSpace': 'へぇ ～ ぼく って ねてても かわいい なぁ'
    },
    '166': {
        'character': 'ねえねえどの寝顔がいちばん好き？',
        'letter': 'Hey, hey. Which sleeping face do you like best?',
        'pinyin': 'ねえねえどのねがおがいちばんすき？',
        'definition': 'ねえねえ どの 寝顔 が いちばん 好き',
        'pinyinSpace': 'ねえねえ どの ねがお が いちばん すき ？'
    },
    '167': {
        'character': 'シロクマくんおかわりくれる？',
        'letter': 'Could I get another, Polar Bear?',
        'pinyin': 'しろくまくんおかわりくれる？',
        'definition': 'シロクマ くん おかわり くれる',
        'pinyinSpace': 'シロクマ くん おかわり くれる ？'
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