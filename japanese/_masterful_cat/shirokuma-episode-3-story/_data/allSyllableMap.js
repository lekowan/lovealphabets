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
        'pinyin': 'しろくまくんひまだからなにかもんだいだしてよ',
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
        'definition': '法令 上 の 正式名称 は 字 路 ではありません',
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
        'character': 'ごめん、もういいや!!',
        'letter': 'Actually, never mind.',
        'pinyin': 'ごめん、もういいや!!',
        'definition': 'ごめん もういい や',
        'pinyinSpace': 'ごめん 、 もういい や !!'
    },
    '12': {
        'character': 'おぉパンダくん',
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
        'character': 'クイズより',
        'letter': 'Instead of a trivia question,',
        'pinyin': 'くいずより',
        'definition': 'クイズ より',
        'pinyinSpace': 'クイズ より'
    },
    '17': {
        'character': 'どうしてシロクマくんは動物園に来てくれないの？',
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
        'definition': 'カフェ に お茶 しに 来てる だけ でしょ',
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
        'character': '一度動物園に遊びに来てよ',
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
        'definition': 'なんだか 元気 だ ね',
        'pinyinSpace': 'なんだか げんき だ ね'
    },
    '32': {
        'character': '今日友達が僕のこと見に来るの',
        'letter': 'My friends are coming to see me today.',
        'pinyin': 'きょうともだちがぼくのことみにくるの',
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
        'pinyin': 'ぱんだく～ん！かわいい！',
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
        'definition': '思った より 広い ね',
        'pinyinSpace': 'おもった より ひろい ね'
    },
    '46': {
        'character': 'まずはパンダくんを見に行こう',
        'letter': "Let's go see Panda first.",
        'pinyin': 'まずはぱんだくんをみにいこう',
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
        'definition': 'シロクマ が プール へ ダイビングする 姿 を どうぞ お 楽しみ ください',
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
        'pinyin': 'いこういこう！',
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
        'letter': "But it's strange",
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
        'definition': 'しろくま 館 へ の シロクマ の 入館 は ご遠慮ください',
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
        'pinyinSpace': 'ちょっと ちょっと シロクマ は はいれない/いれない って かいてあった でしょう'
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
        'pinyinSpace': 'いま うごいてました よ はくせい な わけない·でしょう'
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
        'pinyin': 'もういっていいかな？きたらよんで',
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
        'character': '僕はバレるって言ったのに',
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
        'definition': 'パンダ く ん',
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
        'pinyinSpace': 'あれ ？'
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
        'definition': '他 の とこ 回ってこよう か',
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
        'pinyinSpace': 'あっ はんだ さん'
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
        'pinyinSpace': 'お っあ ざら し やかた/かん いこう いこう'
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
        'character': '食べないとわかっていても実際本物見るとテンション上がるなあ',
        'letter': "Even though I know I won't eat one, I still get a little excited when I see one.",
        'pinyin': 'たべないとわかっていてもじっさいほんものみるとてんしょんあがるなあ',
        'definition': '食べない と わかっていても 実際 本物 見る と テンション 上がる なあ',
        'pinyinSpace': 'たべない と わかっていても じっさい ほんもの みる と テンション あがる なあ'
    },
    '107': {
        'character': 'シロクマくんの野性が呼び覚まされないうちに早く行こうよ',
        'letter': "Let's leave before your natural instincts take over.",
        'pinyin': 'しろくまくんのやせいがよびさまされないうちにはやくいこうよ',
        'definition': 'シロクマ くん の 野性 が 呼び 覚まされない うち に 早く 行こう よ',
        'pinyinSpace': 'シロクマ くん の やせい が よび さまされない うち に はやく いこう よ'
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
        'pinyin': 'しろくまははいらないでってかいてあったでしょう',
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
        'pinyin': 'ぱんだくんそろそろおきてるんじゃない？',
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
        'pinyinSpace': 'べつ の ところ も まわって みよう'
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
        'character': 'う～んあっ！ペンギンコーナー',
        'letter': 'Oh, how about the Penguin Corner?',
        'pinyin': 'う～んあっ！ぺんぎんこーなー',
        'definition': 'う ん あっ ペンギン コーナー',
        'pinyinSpace': 'う ～ ん あっ ！ ペンギン コーナー'
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
        'pinyinSpace': 'パンダ くん に あい に きた のに ねてる ん だよね'
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
        'pinyinSpace': 'そっか いいかげん パンダ くん おきてる よね ？'
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
        'character': 'うん行こう',
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
        'pinyin': 'ねぇらまさんきょうどうぶつえんであったよね？',
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
        'pinyinSpace': 'そんなに ずっと ラマ さん を みてた の ？'
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
        'definition': '起きなかった よ',
        'pinyinSpace': 'おきなかった よ'
    },
    '161': {
        'character': 'せっかく半田さんが写真撮ってくれるって言ってたのに',
        'letter': 'And Mr. Handa even said he would take pictures...',
        'pinyin': 'せっかくはんでんさんがしゃしんとってくれるっていってたのに',
        'definition': 'せっかく 半田 さん が 写真 撮ってくれる って 言ってた のに',
        'pinyinSpace': 'せっかく はんだ さん が しゃしん とって くれる って いってた のに'
    },
    '162': {
        'character': '撮ったよ',
        'letter': 'He did.',
        'pinyin': 'とったよ',
        'definition': '撮った よ',
        'pinyinSpace': 'とった よ'
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
    },
    '168': {
        'character': 'パンダくんの悩み',
        'letter': "Panda's Problems.",
        'pinyin': 'ぱんだくんのなやみ',
        'definition': 'パンダ くん の 悩み',
        'pinyinSpace': 'パンダ くん の なやみ'
    },
    '169': {
        'character': '笹子さん肉じゃがが好きな男ってどう思う？',
        'letter': 'Miss Sasako, how do you feel about men who like meat and potato stew?',
        'pinyin': 'ささごさんにくじゃががすきなおとこってどうおもう？',
        'definition': '笹 子 さん 肉じゃが が 好き な 男 って どう 思う',
        'pinyinSpace': 'ささ こ さん にくじゃが が すき な おとこ って どう おもう ？'
    },
    '170': {
        'character': 'え！？今答えなくていいですか？',
        'letter': "I'd rather not answer right now, if that's okay.",
        'pinyin': 'え！？いまこたえなくていいですか？',
        'definition': 'え 今 答えなくていい です か',
        'pinyinSpace': 'え ！？ いま こたえなくて いい です か ？'
    },
    '171': {
        'character': 'いいですよ',
        'letter': "That's fine.",
        'pinyin': 'いいですよ',
        'definition': 'いいです よ',
        'pinyinSpace': 'いいです よ'
    },
    '172': {
        'character': 'つれないなぁ',
        'letter': 'That was standoffish.',
        'pinyin': 'つれないなぁ',
        'definition': 'つれない なぁ',
        'pinyinSpace': 'つれない なぁ'
    },
    '173': {
        'character': 'ねえ僕いまだに自然体っていうのがわからないの',
        'letter': "You know, I still can't figure out this 'act naturally' thing.",
        'pinyin': 'ねえぼくいまだにしぜんたいっていうのがわからないの',
        'definition': 'ね え 僕 いまだに 自然体 っていう の が わからない の',
        'pinyinSpace': 'ね え ぼく いまだに しぜんたい っていう の が わからない の'
    },
    '174': {
        'character': '自然体でいいです',
        'letter': 'Just act naturally.',
        'pinyin': 'しぜんたいでいいです',
        'definition': '自然体 で いいです',
        'pinyinSpace': 'しぜんたい で いいです'
    },
    '175': {
        'character': 'いくら考えても答えが出なくて',
        'letter': "No matter how much I think about it, I can't find the answer.",
        'pinyin': 'いくらかんがえてもこたえがでなくて',
        'definition': 'いくら 考えても 答え が 出なくて',
        'pinyinSpace': 'いくら かんがえても こたえ が でなくて'
    },
    '176': {
        'character': '常勤パンダさん自然体って何？',
        'letter': 'What does it mean to act naturally, Mr. Full-time Panda?',
        'pinyin': 'じょうきんぱんださんしぜんたいってなに？',
        'definition': '常勤 パンダ さん 自然体 って 何',
        'pinyinSpace': 'じょうきん パンダ さん しぜんたい って なに/なん ？'
    },
    '177': {
        'character': '寝てる！',
        'letter': "He's asleep!",
        'pinyin': 'ねてる！',
        'definition': '寝てる',
        'pinyinSpace': 'ねてる ！'
    },
    '178': {
        'character': 'ねえ半田さん',
        'letter': 'Hey, Mr. Handa,',
        'pinyin': 'ねえはんでんさん',
        'definition': 'ね え 半田 さん',
        'pinyinSpace': 'ね え はんだ さん'
    },
    '179': {
        'character': '自然体って何？',
        'letter': "what does it mean to 'act naturally'?",
        'pinyin': 'しぜんたいってなに？',
        'definition': '自然体 って 何',
        'pinyinSpace': 'しぜんたい って なに/なん ？'
    },
    '180': {
        'character': '言ったでしょ「自然体でいいです」って',
        'letter': "You said it yourself, 'just act naturally.'",
        'pinyin': 'いったでしょ「しぜんたいでいいです」って',
        'definition': '言った でしょ 自然体 で いいです って',
        'pinyinSpace': 'いった でしょ 「 しぜんたい で いいです 」 って'
    },
    '181': {
        'character': '自然でいることが自然体じゃないかな',
        'letter': "I think the act of acting naturally is 'acting natural.'",
        'pinyin': 'しぜんでいることがしぜんたいじゃないかな',
        'definition': '自然 で いる こと が 自然体 じゃない かな',
        'pinyinSpace': 'しぜん で いる こと が しぜんたい じゃない かな'
    },
    '182': {
        'character': 'ちょっとお手本見せてよ',
        'letter': 'Could you give me an example?',
        'pinyin': 'ちょっとおてほんみせてよ',
        'definition': 'ちょっと お手本 見せて よ',
        'pinyinSpace': 'ちょっと おてほん みせて よ'
    },
    '183': {
        'character': 'えぇ～',
        'letter': 'Oh, yeah.',
        'pinyin': 'えぇ～',
        'definition': 'えぇ',
        'pinyinSpace': 'えぇ ～'
    },
    '184': {
        'character': 'こんな感じだけど',
        'letter': 'Something like this.',
        'pinyin': 'こんなかんじだけど',
        'definition': 'こんな 感じ だけど',
        'pinyinSpace': 'こんな かんじ だけど'
    },
    '185': {
        'character': 'う～ん',
        'letter': "That's not cute.",
        'pinyin': 'う～ん',
        'definition': 'う ん',
        'pinyinSpace': 'う ～ ん'
    },
    '186': {
        'character': '自然体ってどういうことなの？',
        'letter': "What does it mean to 'act naturally'?",
        'pinyin': 'しぜんたいってどういうことなの？',
        'definition': '自然体 って どういう こと なの',
        'pinyinSpace': 'しぜんたい って どういう こと なの ？'
    },
    '187': {
        'character': 'こんな表情？',
        'letter': 'Something like this?',
        'pinyin': 'こんなひょうじょう？',
        'definition': 'こんな 表情',
        'pinyinSpace': 'こんな ひょうじょう ？'
    },
    '188': {
        'character': '自然体かどうかわかんないけどかわいいね',
        'letter': "I don't know if that's acting natural or not, but it is cute.",
        'pinyin': 'しぜんたいかどうかわかんないけどかわいいね',
        'definition': '自然体 かどうか わかんない けど かわいい ね',
        'pinyinSpace': 'しぜんたい かどうか わかんない けど かわいい ね'
    },
    '189': {
        'character': 'これは？o(=∩ω∩=)m',
        'letter': 'How about this?',
        'pinyin': 'これは？o(=∩ω∩=)m',
        'definition': 'これ は',
        'pinyinSpace': 'これ は ？o(=∩ω∩=)m'
    },
    '190': {
        'character': 'かわいい',
        'letter': "It's cute.",
        'pinyin': 'かわいい',
        'definition': 'かわいい',
        'pinyinSpace': 'かわいい'
    },
    '191': {
        'character': 'これは～?',
        'letter': 'And this?',
        'pinyin': 'これは～？n(*≧▽≦*)n',
        'definition': 'これ は',
        'pinyinSpace': 'これ は ～?'
    },
    '192': {
        'character': 'もうかわいいのはわかったよ',
        'letter': "We get it. You're cute.",
        'pinyin': 'もうかわいいのはわかったよ',
        'definition': 'もう かわいい の は わかった よ',
        'pinyinSpace': 'もう かわいい の は わかった よ'
    },
    '193': {
        'character': 'そうなんだよね',
        'letter': 'I know.',
        'pinyin': 'そうなんだよね',
        'definition': 'そう な ん だよね',
        'pinyinSpace': 'そう な ん だよね'
    },
    '194': {
        'character': 'かわいいかわいいって言われてもどうしていいかわかんなくて',
        'letter': "I keep getting called cute, but I still don't know what to do.",
        'pinyin': 'かわいいかわいいっていわれてもどうしていいかわかんなくて',
        'definition': 'かわいい かわいい って 言われても どうして いい かわかん なくて',
        'pinyinSpace': 'かわいい かわいい って いわれても どうして いい かわかん なくて'
    },
    '195': {
        'character': 'いいなぁ僕もかわいいって言われてみたいですよ',
        'letter': 'How nice. I wish someone would call me cute.',
        'pinyin': 'いいなぁぼくもかわいいっていわれてみたいですよ',
        'definition': 'いい なぁ 僕 も かわ いいって言われて みたいです よ',
        'pinyinSpace': 'いい なぁ ぼく も かわ いいっていわれて みたいです よ'
    },
    '196': {
        'character': 'ゴロゴロしてるだけなのになぁ',
        'letter': "All I'm doing is lounging around.",
        'pinyin': 'ごろごろしてるだけなのになぁ',
        'definition': 'ゴロゴロしてる だけ な のに なぁ',
        'pinyinSpace': 'ゴロゴロ してる だけ な のに なぁ'
    },
    '197': {
        'character': '楽しそうでうらやましいよ',
        'letter': "You always look like you're having fun. I'm jealous.",
        'pinyin': 'たのしそうでうらやましいよ',
        'definition': '楽しそう で うらやましい よ',
        'pinyinSpace': 'たのしそう で うらやましい よ'
    },
    '198': {
        'character': 'ラッコさん？',
        'letter': 'Mr. Otter?',
        'pinyin': 'らっこさん？',
        'definition': 'ラッコ さん',
        'pinyinSpace': 'ラッコ さん ？'
    },
    '199': {
        'character': '僕さお腹で貝割るでしょ？ヾ(≧へ≦)〃',
        'letter': 'You know I break shellfish on my tummy, right?',
        'pinyin': 'ぼくさおなかでかいわるでしょ？ヾ(≧へ≦)〃',
        'definition': '僕 さ お腹 で 貝 割る でしょ ヾ へ',
        'pinyinSpace': 'ぼく さ おなか で かい わる でしょ ？ ヾ (≧ へ ≦)〃'
    },
    '200': {
        'character': 'あれって大変だよお腹痛くなる',
        'letter': "It's harder than it looks. It hurts my tummy.",
        'pinyin': 'あれってたいへんだよおなかいたくなる',
        'definition': 'あれ って 大変 だ よ お腹 痛くなる',
        'pinyinSpace': 'あれ って たいへん だ よ おなか いたくなる'
    },
    '201': {
        'character': 'お腹に石だよ笹子さん',
        'letter': "I'm banging a rock on my tummy, Miss Sasako.",
        'pinyin': 'おなかにいしだよささごさん',
        'definition': 'お腹 に 石 だ よ 笹 子 さん',
        'pinyinSpace': 'おなか に こく/いし だ よ ささ こ さん'
    },
    '202': {
        'character': 'はい？',
        'letter': "I'm sorry?",
        'pinyin': 'はい？',
        'definition': 'はい',
        'pinyinSpace': 'はい ？'
    },
    '203': {
        'character': '自分のお腹を石で叩いてみなよ',
        'letter': 'You should try banging a rock on your tummy.',
        'pinyin': 'じぶんのおなかをいしでたたいてみなよ',
        'definition': '自分 の お腹 を 石 で 叩いて みな よ',
        'pinyinSpace': 'じぶん の おなか を こく/いし で たたいて みな よ'
    },
    '204': {
        'character': '痛いでしょ？',
        'letter': 'It would hurt, right?',
        'pinyin': 'いたいでしょ？',
        'definition': '痛い でしょ',
        'pinyinSpace': 'いたい でしょ ？'
    },
    '205': {
        'character': 'はい…',
        'letter': 'Yes...',
        'pinyin': 'はい…',
        'definition': 'はい',
        'pinyinSpace': 'はい …'
    },
    '206': {
        'character': 'お腹で割らなければいいのに',
        'letter': "Then you shouldn't try breaking it on your tummy.",
        'pinyin': 'おなかでわらなければいいのに',
        'definition': 'お腹 で 割らなければ いい のに',
        'pinyinSpace': 'おなか で わらなければ いい のに'
    },
    '207': {
        'character': 'あれをやるとお客がわくからさ',
        'letter': 'But the audience loves seeing that.',
        'pinyin': 'あれをやるとおきゃくがわくからさ',
        'definition': 'あれ を やる とお 客 が わく から さ',
        'pinyinSpace': 'あれ を やる とお きゃく が わく から さ'
    },
    '208': {
        'character': 'もうやめたら？その出し物',
        'letter': "Why don't you give up that act?",
        'pinyin': 'もうやめたら？そのだしもの',
        'definition': 'もう やめたら その 出し物',
        'pinyinSpace': 'もう やめたら ？ その だしもの'
    },
    '209': {
        'character': '出し物っていうか習性だからね',
        'letter': "It's not really an act. It's more of a trait.",
        'pinyin': 'だしものっていうかしゅうせいだからね',
        'definition': '出し物 っていうか 習性 だから ね',
        'pinyinSpace': 'だしもの っていうか しゅうせい だ から ね'
    },
    '210': {
        'character': 'かわいいからいいじゃないですか',
        'letter': "I think it's fine since it's cute.",
        'pinyin': 'かわいいからいいじゃないですか',
        'definition': 'かわいい から いい じゃないです か',
        'pinyinSpace': 'かわいい から いい じゃないです か'
    },
    '211': {
        'character': 'かわいいんだけどさもうお腹が限界',
        'letter': "It's cute, but my tummy's had enough.",
        'pinyin': 'かわいいんだけどさもうおなかがげんかい',
        'definition': 'かわいい ん だけど さ もう お腹 が 限界',
        'pinyinSpace': 'かわいい ん だけど さ もう おなか が げんかい'
    },
    '212': {
        'character': 'かわいいで言ったら私もかわいいんですけど',
        'letter': "Since we're on the topic of cute, I'm cute, too.",
        'pinyin': 'かわいいでいったらわたしもかわいいんですけど',
        'definition': 'かわいい で 言ったら 私 も かわいい ん です けど',
        'pinyinSpace': 'かわいい で いったら わたし も かわいい ん です けど'
    },
    '213': {
        'character': 'コアラさん？',
        'letter': 'Mr. Koala?',
        'pinyin': 'こあらさん？',
        'definition': 'コアラ さん',
        'pinyinSpace': 'コアラ さん ？'
    },
    '214': {
        'character': 'ユーカリ？かわいく食べてますけどもうあれ限界です',
        'letter': "I'm cutely eating eucalyptus, but I'm at my limit. I'm sick of it.",
        'pinyin': 'ゆーかり？かわいくたべてますけどもうあれげんかいです',
        'definition': 'ユーカリ かわいく 食べてます けど もう あれ 限界 です',
        'pinyinSpace': 'ユーカリ ？ かわいく たべてます けど もう あれ げんかい です'
    },
    '215': {
        'character': '１日それを１キロくらい食べるんですから',
        'letter': 'I eat about one kilogram of that stuff a day.',
        'pinyin': '１にちそれを１きろくらいたべるんですから',
        'definition': '１日 それ を １キロ くらい 食べる ん ですから',
        'pinyinSpace': 'ついたち/いちにち それ を いちキロ くらい たべる ん ですから'
    },
    '216': {
        'character': '涙目にもなりますよ(-。-)',
        'letter': "You'd get teary-eyed, too, if you had to do it.",
        'pinyin': 'なみだめにもなりますよ(-。-)',
        'definition': '涙目 に も なります よ',
        'pinyinSpace': 'なみだめ に も なります よ (-。-)'
    },
    '217': {
        'character': 'わかるわかるよ～',
        'letter': 'I know! I totally get you!',
        'pinyin': 'わかるわかるよ～',
        'definition': 'わかる わかる よ',
        'pinyinSpace': 'わかる わかる よ ～'
    },
    '218': {
        'character': 'コアリクイくんも？',
        'letter': 'You, too, Anteater?',
        'pinyin': 'こありくいくんも？',
        'definition': 'コ アリクイ くん も',
        'pinyinSpace': 'コ アリクイ くん も ？'
    },
    '219': {
        'character': 'アリクイってやめて！',
        'letter': "I don't like the name Anteater!",
        'pinyin': 'ありくいってやめて！',
        'definition': 'アリクイ って やめて',
        'pinyinSpace': 'アリクイ って やめて ！'
    },
    '220': {
        'character': '僕だってねアリばっかり食べたくないよ！飽きたよ。',
        'letter': "I don't want to eat  only ants all the time! I'm sick of them!",
        'pinyin': 'ぼくだってねありばっかりたべたくないよ！あきたよ。',
        'definition': '僕 だって ね アリ ばっかり 食べたくない よ 飽きた よ',
        'pinyinSpace': 'ぼく だって ね アリ ばっかり たべたくない よ ！ あきた よ 。'
    },
    '221': {
        'character': '笹子さんアリばっかり食べる気持わかる？',
        'letter': 'Do you know how it feels to have to eat ants all the time, Miss Sasako?!',
        'pinyin': 'ささごさんありばっかりたべるきもちわかる？',
        'definition': '笹 子 さん アリ ばっかり 食べる 気持 わかる',
        'pinyinSpace': 'ささ こ さん アリ ばっかり たべる きもち わかる ？'
    },
    '222': {
        'character': 'アリクイだからね',
        'letter': 'Well, you are an anteater...',
        'pinyin': 'ありくいだからね',
        'definition': 'アリクイ だから ね',
        'pinyinSpace': 'アリクイ だ から ね'
    },
    '223': {
        'character': 'しかたないね',
        'letter': "You don't have much of a choice.",
        'pinyin': 'しかたないね',
        'definition': 'しかたない ね',
        'pinyinSpace': 'しかたない ね'
    },
    '224': {
        'character': '確かにそうだけどもっといろんなもの食べてみたいよ',
        'letter': 'I know, but I want to eat other things, too!',
        'pinyin': 'たしかにそうだけどもっといろんなものたべてみたいよ',
        'definition': '確かに そう だけど もっと いろんな もの 食べて みたい よ',
        'pinyinSpace': 'たしかに そう だけど もっと いろんな もの たべて みたい よ'
    },
    '225': {
        'character': 'いろんなもの？',
        'letter': 'Other things?',
        'pinyin': 'いろんなもの？',
        'definition': 'いろんな もの',
        'pinyinSpace': 'いろんな もの ？'
    },
    '226': {
        'character': '何食べたいの？',
        'letter': 'Like what?',
        'pinyin': 'なにたべたいの？',
        'definition': '何 食べたい の',
        'pinyinSpace': 'なん たべたい の ？'
    },
    '227': {
        'character': 'ほらラーメンとかさ',
        'letter': 'You know, like ramen!',
        'pinyin': 'ほららーめんとかさ',
        'definition': 'ほら ラーメン とか さ',
        'pinyinSpace': 'ほら ラーメン とか さ'
    },
    '228': {
        'character': 'チャーシュー食べられないんじゃない？',
        'letter': "But I don't think you can eat chashu pork.",
        'pinyin': 'ちゃーしゅーたべられないんじゃない？',
        'definition': 'チャーシュー 食べられない ん じゃない',
        'pinyinSpace': 'チャーシュー たべられない ん じゃない ？'
    },
    '229': {
        'character': 'いいんだよ細かいところは',
        'letter': "You don't have to be concerned with the little things.",
        'pinyin': 'いいんだよこまかいところは',
        'definition': 'いい ん だ よ 細かい ところ は',
        'pinyinSpace': 'いい ん だ よ こまかい ところ は'
    },
    '230': {
        'character': '見てくれるだけいいじゃないですか',
        'letter': 'At least people look at you.',
        'pinyin': 'みてくれるだけいいじゃないですか',
        'definition': '見てくれる だけ いい じゃないです か',
        'pinyinSpace': 'みて くれる だけ いい じゃないです か'
    },
    '231': {
        'character': 'ラマさん？',
        'letter': 'Mr. Llama?',
        'pinyin': 'らまさん？',
        'definition': 'ラマ さん',
        'pinyinSpace': 'ラマ さん ？'
    },
    '232': {
        'character': '僕なんてみんなほぼ素通りですよ',
        'letter': 'Everyone pretty much passes right by me.',
        'pinyin': 'ぼくなんてみんなほぼすどおりですよ',
        'definition': '僕 なんて みんな ほぼ 素通り です よ',
        'pinyinSpace': 'ぼく なんて みんな ほぼ すどおり です よ'
    },
    '233': {
        'character': 'いるの気づいてます？',
        'letter': 'Did you even know I was there?',
        'pinyin': 'いるのきづいてます？',
        'definition': 'いる の 気づいてます',
        'pinyinSpace': 'いる の きづいてます ？'
    },
    '234': {
        'character': 'そういえば…',
        'letter': 'Come to think of it...',
        'pinyin': 'そういえば…',
        'definition': 'そういえば',
        'pinyinSpace': 'そういえば …'
    },
    '235': {
        'character': '動物園に行ったとき…',
        'letter': 'When we went to the zoo...',
        'pinyin': 'どうぶつえんにいったとき…',
        'definition': '動物園 に 行った とき',
        'pinyinSpace': 'どうぶつえん に おこなった/いった とき …'
    },
    '236': {
        'character': 'みごとに素通りしたね',
        'letter': 'We did pretty much pass right by.',
        'pinyin': 'みごとにすどおりしたね',
        'definition': 'みごと に 素通りした ね',
        'pinyinSpace': 'みごと に すどおり した ね'
    },
    '237': {
        'character': 'ほらねラマなんてそんなものですよ',
        'letter': "See? That's how it is, being a llama.",
        'pinyin': 'ほらねらまなんてそんなものですよ',
        'definition': 'ほらね ラマ なんて そんなもの です よ',
        'pinyinSpace': 'ほらね ラマ なんて そんなもの です よ'
    },
    '238': {
        'character': '行列つくって感想とか言ってほしいですΣ(￣д￣)',
        'letter': 'I wish people would look longer, and form huge lines to tell me what they think of me.',
        'pinyin': 'ぎょうれつつくってかんそうとかいってほしいですしぐま(￣д￣)',
        'definition': '行列 つくって 感想 とか 言って ほしいです',
        'pinyinSpace': 'ぎょうれつ つくって かんそう とか いって ほしいです Σ(￣д￣)'
    },
    '239': {
        'character': 'わぁ～いラマさん！',
        'letter': "Wow, it's a llama!",
        'pinyin': 'わぁ～いらまさん！',
        'definition': 'わぁ い ラマ さん',
        'pinyinSpace': 'わぁ ～ い ラマ さん ！'
    },
    '240': {
        'character': 'おい見ろよ！草食ってるぞ！写真写真撮れって！',
        'letter': "Look, it's eating grass! Hurry! Take a picture!",
        'pinyin': 'おいみろよ！くさくってるぞ！しゃしんしゃしんとれって！',
        'definition': 'おい 見ろ よ 草 食ってる ぞ 写真 写真 撮れ って',
        'pinyinSpace': 'おい みろ よ ！ くさ くってる ぞ ！ しゃしん しゃしん とれ って ！'
    },
    '241': {
        'character': '草食べてるだけ？',
        'letter': 'You just eat grass?',
        'pinyin': 'くさたべてるだけ？',
        'definition': '草 食べてる だけ',
        'pinyinSpace': 'くさ たべてる だけ ？'
    },
    '242': {
        'character': '地味だね',
        'letter': "That's a little boring.",
        'pinyin': 'じみだね',
        'definition': '地味 だ ね',
        'pinyinSpace': 'じみ だ ね'
    },
    '243': {
        'character': 'ラマさんってロバなの？',
        'letter': 'Are you a donkey, Mr. Llama?',
        'pinyin': 'らまさんってろばなの？',
        'definition': 'ラマ さん って ロバ なの',
        'pinyinSpace': 'ラマ さん って ロバ なの ？'
    },
    '244': {
        'character': 'だからラマです',
        'letter': "As I said, I'm a llama.",
        'pinyin': 'だかららまです',
        'definition': 'だから ラマ です',
        'pinyinSpace': 'だ·から ラマ です'
    },
    '245': {
        'character': 'どっちかというとラクダです',
        'letter': "If you had to compare, I'm closer to a camel.",
        'pinyin': 'どっちかというとらくだです',
        'definition': 'どっちかというと ラクダ です',
        'pinyinSpace': 'どっちかというと ラクダ です'
    },
    '246': {
        'character': 'コブは？',
        'letter': 'Do you have a hump?',
        'pinyin': 'こぶは？',
        'definition': 'コブ は',
        'pinyinSpace': 'コブ は ？'
    },
    '247': {
        'character': 'ないです',
        'letter': 'I do not.',
        'pinyin': 'ないです',
        'definition': 'ないです',
        'pinyinSpace': 'ないです'
    },
    '248': {
        'character': 'あの…何か芸とかないんですか？',
        'letter': 'Can you do any tricks or anything?',
        'pinyin': 'あの…なにかげいとかないんですか？',
        'definition': 'あの 何か 芸 とかない ん です か',
        'pinyinSpace': 'あの … なにか げい とかない ん です か ？'
    },
    '249': {
        'character': '草を食べるくらいです',
        'letter': 'Just eating grass.',
        'pinyin': 'くさをたべるくらいです',
        'definition': '草 を 食べる くらいです',
        'pinyinSpace': 'くさ を たべる くらいです'
    },
    '250': {
        'character': 'できるといいね行列',
        'letter': 'I hope you get that huge line of yours.',
        'pinyin': 'できるといいねぎょうれつ',
        'definition': 'できる と いいね 行列',
        'pinyinSpace': 'できる と いいね ぎょうれつ'
    },
    '251': {
        'character': '見られればいいってもんじゃないよ',
        'letter': "Being looked at isn't all that great.",
        'pinyin': 'みられればいいってもんじゃないよ',
        'definition': '見られれば いい って もん じゃない よ',
        'pinyinSpace': 'みられれば いい って もん じゃない よ'
    },
    '252': {
        'character': 'バクさん',
        'letter': 'Mr. Tapir.',
        'pinyin': 'ばくさん',
        'definition': 'バク さん',
        'pinyinSpace': 'バク さん'
    },
    '253': {
        'character': '僕なんて夢を食べる動物って言われがちだけど',
        'letter': "I'm rumored to be an animal that eats dreams,",
        'pinyin': 'ぼくなんてゆめをたべるどうぶつっていわれがちだけど',
        'definition': '僕 なんて 夢 を 食べる 動物 って 言われがち だけど',
        'pinyinSpace': 'ぼく なんて ゆめ を たべる どうぶつ って いわれがち だけど'
    },
    '254': {
        'character': '見た人に夢がないなんて言われてさ',
        'letter': 'but everyone who sees me is unimpressed.',
        'pinyin': 'みたひとにゆめがないなんていわれてさ',
        'definition': '見た 人 に 夢 が ない なんて 言われて さ',
        'pinyinSpace': 'みた ひと に ゆめ が ない なんて いわれて さ'
    },
    '255': {
        'character': '夢を食べる動物って何？',
        'letter': 'What kind of animal eats dreams, anyway?',
        'pinyin': 'ゆめをたべるどうぶつってなに？',
        'definition': '夢 を 食べる 動物 って 何',
        'pinyinSpace': 'ゆめ を たべる どうぶつ って なに/なん ？'
    },
    '256': {
        'character': 'ハードル上げすぎなんだよ',
        'letter': "They're setting the bar much too high.",
        'pinyin': 'はーどるあげすぎなんだよ',
        'definition': 'ハードル 上げ すぎ なんだ よ',
        'pinyinSpace': 'ハードル あげ すぎ なんだ よ'
    },
    '257': {
        'character': 'まぁまぁ…ジュゴンさんよりはいいよ',
        'letter': "Now, now. You're better off than the sea cow.",
        'pinyin': 'まぁまぁ…じゅごんさんよりはいいよ',
        'definition': 'まぁまぁ ジュゴン さん より は いい よ',
        'pinyinSpace': 'まぁまぁ … ジュゴン さん より は いい よ'
    },
    '258': {
        'character': '人魚って前振りされてるんだから',
        'letter': 'They get compared to mermaids.',
        'pinyin': 'にんぎょってまえぶりされてるんだから',
        'definition': '人魚 って 前振り されてる ん だから',
        'pinyinSpace': 'にんぎょ って まえふり されてる ん だ から'
    },
    '259': {
        'character': 'ママ！人魚さんどこ？',
        'letter': "Mommy, where's the mermaid?",
        'pinyin': 'まま！にんぎょさんどこ？',
        'definition': 'ママ 人魚 さん どこ',
        'pinyinSpace': 'ママ ！ にんぎょ さん どこ ？'
    },
    '260': {
        'character': '見た人みんな黙っちゃうよ',
        'letter': "Everyone who sees it doesn't know what to say.",
        'pinyin': 'みたひとみんなだまっちゃうよ',
        'definition': '見た 人 みんな 黙っちゃう よ',
        'pinyinSpace': 'みた じん/ひと/にん みんな だまっちゃう よ'
    },
    '261': {
        'character': 'ねぇ？',
        'letter': 'Right?',
        'pinyin': 'ねぇ？',
        'definition': 'ねぇ',
        'pinyinSpace': 'ねぇ ？'
    },
    '262': {
        'character': '私に聞かないでください…',
        'letter': "Please don't ask me.",
        'pinyin': 'わたしにきかないでください…',
        'definition': '私 に 聞かないでください',
        'pinyinSpace': 'わたし に きかないで ください …'
    },
    '263': {
        'character': 'あぁそうだね…',
        'letter': 'You have a point.',
        'pinyin': 'あぁそうだね…',
        'definition': 'あぁ そうだね',
        'pinyinSpace': 'あぁ そうだね …'
    },
    '264': {
        'character': 'ジュゴンさんに比べたら僕はまだマシかもね',
        'letter': "If you compare me to Ms. Sea Cow, I'm probably better off.",
        'pinyin': 'じゅごんさんにくらべたらぼくはまだましかもね',
        'definition': 'ジュゴン さん に 比べたら 僕 は まだ マシ かも ね',
        'pinyinSpace': 'ジュゴン さん に くらべたら ぼく は まだ マシ かも ね'
    },
    '265': {
        'character': '僕も…',
        'letter': 'Me, too...',
        'pinyin': 'ぼくも…',
        'definition': '僕 も',
        'pinyinSpace': 'ぼく も …'
    },
    '266': {
        'character': 'ナマケモノくん',
        'letter': 'Sloth.',
        'pinyin': 'なまけものくん',
        'definition': 'ナマケモノ くん',
        'pinyinSpace': 'ナマケモノ くん'
    },
    '267': {
        'character': '動物園とは関係ないけど…',
        'letter': "I'm not associated with the zoo, but...",
        'pinyin': 'どうぶつえんとはかんけいないけど…',
        'definition': '動物園 とは 関係ない けど',
        'pinyinSpace': 'どうぶつえん と·は かんけいない けど …'
    },
    '268': {
        'character': '僕って一日中木にぶら下がってるイメージあるけど…',
        'letter': 'People think I just hang from a tree all day.',
        'pinyin': 'ぼくっていちにちじゅうきにぶらさがってるいめーじあるけど…',
        'definition': '僕 って 一日中 木 に ぶら下がってる イメージ ある けど',
        'pinyinSpace': 'ぼく って いちにちじゅう き に ぶらさがってる イメージ ある けど …'
    },
    '269': {
        'character': '実際どうなの？',
        'letter': 'And in reality?',
        'pinyin': 'じっさいどうなの？',
        'definition': '実際 どう なの',
        'pinyinSpace': 'じっさい どう なの ？'
    },
    '270': {
        'character': '実際そうだけど…大変腕パンパン',
        'letter': "I do in reality... But it's hard. My arms tingle.",
        'pinyin': 'じっさいそうだけど…たいへんうでぱんぱん',
        'definition': '実際 そう だけど 大変 腕 パンパン',
        'pinyinSpace': 'じっさい そう だけど … たいへん うで パンパン'
    },
    '271': {
        'character': '一日中木にぶら下がったことある？笹子さん',
        'letter': 'Have you ever hung from a tree all day, Miss Sasako?',
        'pinyin': 'いちにちじゅうきにぶらさがったことある？ささごさん',
        'definition': '一日中 木 に ぶら下がった こと ある 笹 子 さん',
        'pinyinSpace': 'いちにちじゅう き に ぶらさがった こと ある ？ ささ こ さん'
    },
    '272': {
        'character': 'ナマケモノくんってナマケモノじゃないな',
        'letter': "I guess Sloth isn't really a sloth.",
        'pinyin': 'なまけものくんってなまけものじゃないな',
        'definition': 'ナマケモノ くん って ナマケモノ じゃない な',
        'pinyinSpace': 'ナマケモノ くん って ナマケモノ じゃない な'
    },
    '273': {
        'character': '頑張り者だね',
        'letter': "He's a really hard worker.",
        'pinyin': 'がんばりしゃだね',
        'definition': '頑張り 者 だ ね',
        'pinyinSpace': 'がんばり もの だ ね'
    },
    '274': {
        'character': 'もっと言って',
        'letter': 'Tell me more.',
        'pinyin': 'もっといって',
        'definition': 'もっと 言って',
        'pinyinSpace': 'もっと いって'
    },
    '275': {
        'character': 'みんな悩んでるんだな',
        'letter': 'Apparently everyone has problems.',
        'pinyin': 'みんななやんでるんだな',
        'definition': 'みんな 悩んでる ん だ な',
        'pinyinSpace': 'みんな なやんでる ん だ な'
    },
    '276': {
        'character': '実は好きなペンギンがいてさ',
        'letter': 'I have a problem too. You see, I have this penguin that I like.',
        'pinyin': 'じつはすきなぺんぎんがいてさ',
        'definition': '実は 好き な ペンギン が いて さ',
        'pinyinSpace': 'じつは すき な ペンギン が いて さ'
    },
    '277': {
        'character': '誰にも言わないでほしいんだけどね',
        'letter': "Don't tell anyone though, okay?",
        'pinyin': 'だれにもいわないでほしいんだけどね',
        'definition': '誰にも 言わないで ほしい ん だけど ね',
        'pinyinSpace': 'だれにも いわないで ほしい ん だけど ね'
    },
    '278': {
        'character': 'あぁやっぱりいろいろと皆さん悩みが尽きないんですね',
        'letter': "It seems that there isn't an end to everyone's problems.",
        'pinyin': 'あぁやっぱりいろいろとみなさんなやみがつきないんですね',
        'definition': 'あぁ やっぱり いろいろ と 皆さん 悩み が 尽きない ん です ね',
        'pinyinSpace': 'あぁ やっぱり いろいろ と みなさん なやみ が つきない ん です ね'
    },
    '279': {
        'character': 'そうだよね',
        'letter': "You're right.",
        'pinyin': 'そうだよね',
        'definition': 'そう だよね',
        'pinyinSpace': 'そう だよね'
    },
    '280': {
        'character': 'ほんとですね',
        'letter': 'No kidding.',
        'pinyin': 'ほんとですね',
        'definition': 'ほんと です ね',
        'pinyinSpace': 'ほんと です ね'
    },
    '281': {
        'character': 'ちょっと聞いてよ',
        'letter': 'Hey, listen to me.',
        'pinyin': 'ちょっときいてよ',
        'definition': 'ちょっと 聞いて よ',
        'pinyinSpace': 'ちょっと きいて よ'
    },
    '282': {
        'character': 'シロクマさんは悩みはないの？',
        'letter': "Don't you have any problems, Mr. Polar Bear?",
        'pinyin': 'しろくまさんはなやみはないの？',
        'definition': 'シロクマ さん は 悩み は ない の',
        'pinyinSpace': 'シロクマ さん は なやみ は ない の ？'
    },
    '283': {
        'character': 'あるよ',
        'letter': 'I do.',
        'pinyin': 'あるよ',
        'definition': 'ある よ',
        'pinyinSpace': 'ある よ'
    },
    '284': {
        'character': 'え？そうなの？意外',
        'letter': "Really? You do? That's unexpected.",
        'pinyin': 'え？そうなの？いがい',
        'definition': 'え そう なの 意外',
        'pinyinSpace': 'え ？ そう なの ？ いがい'
    },
    '285': {
        'character': 'アイドルにならないかって言われてるんだけど',
        'letter': "I've been asked if I wanted to become an idol,",
        'pinyin': 'あいどるにならないかっていわれてるんだけど',
        'definition': 'アイドル に ならない か って 言われてる ん だけど',
        'pinyinSpace': 'アイドル に ならない か って いわれてる ん だけど'
    },
    '286': {
        'character': 'アイドルと学業の両立がねぇ',
        'letter': 'but fitting that in with my studies would be hard.',
        'pinyin': 'あいどるとがくぎょうのりょうりつがねぇ',
        'definition': 'アイドル と 学業 の 両立 が ねぇ',
        'pinyinSpace': 'アイドル と がくぎょう の りょうりつ が ねぇ'
    },
    '287': {
        'character': 'また嘘ばっかり',
        'letter': 'There you go, lying again.',
        'pinyin': 'またうそばっかり',
        'definition': 'また 嘘 ばっかり',
        'pinyinSpace': 'また うそ ばっかり'
    },
    '288': {
        'character': '笹子さんは？',
        'letter': 'How about you, Miss Sasako?',
        'pinyin': 'ささごさんは？',
        'definition': '笹 子 さん は',
        'pinyinSpace': 'ささ こ さん は ？'
    },
    '289': {
        'character': 'え？ありません',
        'letter': "I don't have any.",
        'pinyin': 'え？ありません',
        'definition': 'え ありません',
        'pinyinSpace': 'え ？ ありません'
    },
    '290': {
        'character': 'ひとつも？',
        'letter': 'Not even one?',
        'pinyin': 'ひとつも？',
        'definition': 'ひとつ も',
        'pinyinSpace': 'ひとつ も ？'
    },
    '291': {
        'character': 'はい',
        'letter': 'Indeed.',
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '292': {
        'character': 'あ…',
        'letter': 'Uh...',
        'pinyin': 'あ…',
        'definition': 'あ',
        'pinyinSpace': 'あ …'
    },
    '293': {
        'character': 'ん？何？',
        'letter': 'What is it?',
        'pinyin': 'ん？なに？',
        'definition': 'ん 何',
        'pinyinSpace': 'ん ？ なに/なん ？'
    },
    '294': {
        'character': '雛人形って燃えるゴミなのか、燃えないゴミなのかどっちなんだろうって',
        'letter': 'I was wondering if Hina dolls should go with the burnable or non-burnable garbage.',
        'pinyin': 'ひなにんぎょうってもえるごみなのか、もえないごみなのかどっちなんだろうって',
        'definition': '雛人形 って 燃えるゴミ な のか 燃えないゴミ な のか どっち な ん だろう って',
        'pinyinSpace': 'ひなにんぎょう って もえるゴミ な のか 、 もえないゴミ な のか どっち な ん だろう って'
    },
    '295': {
        'character': 'いいかな？それはあとで',
        'letter': 'How about we discuss that later?',
        'pinyin': 'いいかな？それはあとで',
        'definition': 'いい かな それは あとで',
        'pinyinSpace': 'いい かな ？ それは あとで'
    },
    '296': {
        'character': '僕なんてさパン屋に行くたびに思うよ',
        'letter': 'Every time I go to the bakery, I think about it.',
        'pinyin': 'ぼくなんてさぱんやにいくたびにおもうよ',
        'definition': '僕 なんて さ パン屋 に 行く たびに 思う よ',
        'pinyinSpace': 'ぼく なんて さ パンや に いく たびに おもう よ'
    },
    '297': {
        'character': 'いい？誰にも言わないでよ',
        'letter': "Listen, don't tell anyone, okay?",
        'pinyin': 'いい？だれにもいわないでよ',
        'definition': 'いい 誰にも 言わないで よ',
        'pinyinSpace': 'いい ？ だれにも いわないで よ'
    },
    '298': {
        'character': 'どうやって告白しようか悩みは尽きないよ',
        'letter': 'I keep trying to figure out how to ask her out.',
        'pinyin': 'どうやってこくはくしようかなやみはつきないよ',
        'definition': 'どうやって 告白しよう か 悩み は 尽きない よ',
        'pinyinSpace': 'どうやって こくはく しよう か なやみ は つきない よ'
    },
    '299': {
        'character': 'どう思う？パンダくん',
        'letter': 'What do you think, Panda?',
        'pinyin': 'どうおもう？ぱんだくん',
        'definition': 'どう 思う パンダ くん',
        'pinyinSpace': 'どう おもう ？ パンダ くん'
    },
    '300': {
        'character': 'フフフ…',
        'letter': 'Hmph...',
        'pinyin': 'ふふふ…',
        'definition': 'フフフ',
        'pinyinSpace': 'フフフ …'
    },
    '301': {
        'character': 'ちょっと笑いごとじゃないよ',
        'letter': 'Hey, this is no laughing matter.',
        'pinyin': 'ちょっとわらいごとじゃないよ',
        'definition': 'ちょっと 笑い ごと じゃない よ',
        'pinyinSpace': 'ちょっと わらい ごと じゃない よ'
    },
    '302': {
        'character': '寝てる！W(ﾟДﾟ)w',
        'letter': "He's asleep!",
        'pinyin': 'ねてる！W(゜Д゜)w',
        'definition': '寝てる',
        'pinyinSpace': 'ねてる ！W(ﾟДﾟ)w'
    },
    '303': {
        'character': 'えぇと…',
        'letter': 'Hm...',
        'pinyin': 'えぇと…',
        'definition': 'えぇ と',
        'pinyinSpace': 'えぇ と …'
    },
    '304': {
        'character': 'いつから寝てたんですかね？',
        'letter': "I wonder how long he's been asleep.",
        'pinyin': 'いつからねてたんですかね？',
        'definition': 'いつから 寝てた ん です かね',
        'pinyinSpace': 'いつから ねてた ん です かね ？'
    },
    '305': {
        'character': 'チャーシューの話のあとくらいじゃない？',
        'letter': 'Probably somewhere right after the talk of chashu pork.',
        'pinyin': 'ちゃーしゅーのはなしのあとくらいじゃない？',
        'definition': 'チャーシュー の 話 の あと くらい じゃない',
        'pinyinSpace': 'チャーシュー の はなし の あと くらい じゃない ？'
    },
    '306': {
        'character': '前半ですね',
        'letter': 'So somewhere at the beginning of the conversation.',
        'pinyin': 'ぜんはんですね',
        'definition': '前半 です ね',
        'pinyinSpace': 'ぜんはん です ね'
    },
    '307': {
        'character': 'あっシロクマさん',
        'letter': 'Oh, Mr. Polar Bear.',
        'pinyin': 'あっしろくまさん',
        'definition': 'あっシロ クマ さん',
        'pinyinSpace': 'あっシロ クマ さん'
    },
    '308': {
        'character': 'おかわりお願いします',
        'letter': 'Could I get seconds, please?',
        'pinyin': 'おかわりおねがいします',
        'definition': 'おかわり お願いします',
        'pinyinSpace': 'おかわり おねがい·します'
    },
    '309': {
        'character': 'うん',
        'letter': 'Sure.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '310': {
        'character': '自然体かぁ',
        'letter': "Acting naturally,' huh?",
        'pinyin': 'しぜんたいかぁ',
        'definition': '自然体 かぁ',
        'pinyinSpace': 'しぜんたい かぁ'
    },
    '311': {
        'character': 'どうしたらいいんだろう…',
        'letter': 'I wonder what I should do?',
        'pinyin': 'どうしたらいいんだろう…',
        'definition': 'どうしたらいい ん だろう',
        'pinyinSpace': 'どうしたらいい ん だろう …'
    },
    '312': {
        'character': 'パンダくんすっかり自然体だね',
        'letter': 'Panda is totally acting naturally right now.',
        'pinyin': 'ぱんだくんすっかりしぜんたいだね',
        'definition': 'パンダ くん すっかり 自然体 だ ね',
        'pinyinSpace': 'パンダ くん すっかり しぜんたい だ ね'
    },
    '313': {
        'character': 'そうですね',
        'letter': 'Indeed he is.',
        'pinyin': 'そうですね',
        'definition': 'そうですね',
        'pinyinSpace': 'そうですね'
    },
    '314': {
        'character': 'いらっしゃい(＾?＾）／＼(＾?＾）',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃい(＾?＾）／＼(＾?＾）',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい (＾?＾）／＼(＾?＾）'
    },
    '315': {
        'character': 'はぁ…今日は疲れちゃった',
        'letter': "I'm so tired today.",
        'pinyin': 'はぁ…きょうはつかれちゃった',
        'definition': 'はぁ 今日 は 疲れちゃった',
        'pinyinSpace': 'はぁ … きょう は つかれちゃった'
    },
    '316': {
        'character': 'パンダくん',
        'letter': 'Hey, Panda.',
        'pinyin': 'ぱんだくん',
        'definition': 'パンダ くん',
        'pinyinSpace': 'パンダ くん'
    },
    '317': {
        'character': 'なぁに？',
        'letter': 'What?',
        'pinyin': 'なぁに？',
        'definition': 'なぁ に',
        'pinyinSpace': 'なぁ に ？'
    },
    '318': {
        'character': 'あれからずっと考えてたんだけどさ',
        'letter': "I've been thinking since then...",
        'pinyin': 'あれからずっとかんがえてたんだけどさ',
        'definition': 'あれから ずっと 考えてた ん だけど さ',
        'pinyinSpace': 'あれから ずっと かんがえてた ん だけど さ'
    },
    '319': {
        'character': 'パンダくんにとって自然体っていうのはさ',
        'letter': "Acting naturally' for you is",
        'pinyin': 'ぱんだくんにとってしぜんたいっていうのはさ',
        'definition': 'パンダ くん にとって 自然体 っていう の は さ',
        'pinyinSpace': 'パンダ くん にとって しぜんたい っていう の は さ'
    },
    '320': {
        'character': '君がいちばんリラックスできる場所',
        'letter': 'being in the place you can relax the most.',
        'pinyin': 'きみがいちばんりらっくすできるばしょ',
        'definition': '君 が いちばん リラックスできる 場所',
        'pinyinSpace': 'きみ/くん が いちばん リラックス できる ばしょ'
    },
    '321': {
        'character': 'あっ！',
        'letter': 'Oh!',
        'pinyin': 'あっ！',
        'definition': 'あっ',
        'pinyinSpace': 'あっ ！'
    },
    '322': {
        'character': 'つまりさ…',
        'letter': 'Meaning―',
        'pinyin': 'つまりさ…',
        'definition': 'つまり さ',
        'pinyinSpace': 'つまり さ …'
    },
    '323': {
        'character': 'そんなことよりペンギンさん',
        'letter': 'Never mind that, Mr. Penguin.',
        'pinyin': 'そんなことよりぺんぎんさん',
        'definition': 'そんな こと より ペンギン さん',
        'pinyinSpace': 'そんな こと より ペンギン さん'
    },
    '324': {
        'character': '新しいパンダグッズ買っちゃったんだけど',
        'letter': 'I bought new panda merchandise.',
        'pinyin': 'あたらしいぱんだぐっずかっちゃったんだけど',
        'definition': '新しい パンダ グッズ 買っちゃった ん だけど',
        'pinyinSpace': 'あたらしい パンダ グッズ かっちゃった ん だけど'
    },
    '325': {
        'character': '何入れればいいと思う？O(*≧▽≦)ツ',
        'letter': 'What do you think I should put in here?',
        'pinyin': 'なにいれればいいとおもう？O(*≧▽≦)つ',
        'definition': '何 入れれば いい と 思う ツ',
        'pinyinSpace': 'なに いれれば/はいれれば いい と おもう ？O(*≧▽≦) ツ'
    },
    '326': {
        'character': '肉まんでいいんじゃない？',
        'letter': 'How about a meat bun?',
        'pinyin': 'にくまんでいいんじゃない？',
        'definition': '肉まん でいい ん じゃない',
        'pinyinSpace': 'にくまん で いい ん じゃない ？'
    },
    '327': {
        'character': 'ペンギンさんペンギンさん',
        'letter': 'Mr. Penguin, Mr. Penguin!',
        'pinyin': 'ぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん'
    },
    '328': {
        'character': 'しろくまカフェが来週から駐車場になっちゃうって本当',
        'letter': "Is it true that Polar Bear's Café is being turned into a parking lot next week?",
        'pinyin': 'しろくまかふぇがらいしゅうからちゅうしゃじょうになっちゃうってほんとう',
        'definition': 'しろくま カフェ が 来週 から 駐車場 に なっちゃう って 本当',
        'pinyinSpace': 'しろくま カフェ が らいしゅう から ちゅうしゃじょう に なっちゃう って ほんとう'
    },
    '329': {
        'character': 'そんな噂聞いてないよ',
        'letter': "I didn't hear a rumor like that.",
        'pinyin': 'そんなうわさきいてないよ',
        'definition': 'そんな 噂 聞いてない よ',
        'pinyinSpace': 'そんな うわさ きいてない よ'
    },
    '330': {
        'character': 'やっぱりプチ整形してない',
        'letter': "Are you sure you haven't had plastic surgery?",
        'pinyin': 'やっぱりぷちせいけいしてない',
        'definition': 'やっぱり プチ 整形してない',
        'pinyinSpace': 'やっぱり プチ せいけい してない'
    },
    '331': {
        'character': 'してないよ',
        'letter': 'I did not.',
        'pinyin': 'してないよ',
        'definition': 'してない よ',
        'pinyinSpace': 'してない よ'
    },
    '332': {
        'character': 'だから逆にどこを見て思ったの',
        'letter': 'I ask again, what makes you think I did?',
        'pinyin': 'だからぎゃくにどこをみておもったの',
        'definition': 'だから 逆 に どこ を 見て 思った の',
        'pinyinSpace': 'だ·から ぎゃく に どこ を みて おもった の'
    },
    '333': {
        'character': 'しろくまくん終わって',
        'letter': 'Polar Bear, could you finish it?',
        'pinyin': 'しろくまくんおわって',
        'definition': 'しろくま くん 終わって',
        'pinyinSpace': 'しろくま くん おわって'
    },
    '334': {
        'character': '次回のしろくま???',
        'letter': "Next time on Polar Bear's...",
        'pinyin': 'じかいのしろくま???',
        'definition': '次回 の しろくま',
        'pinyinSpace': 'じかい の しろくま ???'
    },
    '335': {
        'character': 'カフェでしょう忘れちゃった',
        'letter': "It's 'Café.' Did you actually forget?",
        'pinyin': 'かふぇでしょうわすれちゃった',
        'definition': 'カフェ でしょう 忘れちゃった',
        'pinyinSpace': 'カフェ でしょう わすれちゃった'
    },
    '336': {
        'character': 'お楽しみに',
        'letter': 'Enjoy!',
        'pinyin': 'おたのしみに',
        'definition': 'お 楽しみ に',
        'pinyinSpace': 'お たのしみ に'
    }
}