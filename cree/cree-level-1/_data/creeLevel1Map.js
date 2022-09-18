// Exercise Type (character, vocabulary )
const creeLevel1ChartType = "vocabulary";

const creeLevel1Map = {
    "1": {
        "character": "ᓀᐦᐃᔭᐍᐏᐣ",
        "letter": "Cree language",
        "pinyin": "nēhiyawēwin (P)"
    },
    "2": {
        "character": "ᐋᐦᐊ",
        "letter": "yes",
        "pinyin": "āha (P)"
    },
    "3": {
        "character": "ᓂᔭ",
        "letter": "me/I",
        "pinyin": "niya (Pr)"
    },
    "4": {
        "character": "ᓀᐦᐃᔭᐍ",
        "letter": "speak Cree",
        "pinyin": "nēhiyawē (VAI)"
    },
    "5": {
        "character": "ᓀᐦᐃᔭᐤ",
        "letter": "Cree person",
        "pinyin": "nēhiyaw (NA)"
    },
    "6": {
        "character": "ᓃᑭ",
        "letter": "my home",
        "pinyin": "nīki (NI)"
    },
    "7": {
        "character": "ᓂᔮᐠ",
        "letter": "go",
        "pinyin": "niyāk (P-pl)"
    },
    "8": {
        "character": "ᐁᐦᐊ",
        "letter": "yes",
        "pinyin": "ēha (P)"
    },
    "9": {
        "character": "ᓂᔮ",
        "letter": "go",
        "pinyin": "niyā (P-sg)"
    },
    "10": {
        "character": "ᐃᓯᔨᐦᑳᓱ",
        "letter": "be named/called",
        "pinyin": "isiyihkāso (VAI)"
    },
    "11": {
        "character": "ᓅᐦᑌ",
        "letter": "to want",
        "pinyin": "nōhtē- (Pv)"
    },
    "12": {
        "character": "ᐑᐦᐅᐏᐣ",
        "letter": "name",
        "pinyin": "wīhowin (NI)"
    },
    "13": {
        "character": "ᐏᔭ",
        "letter": "him/her",
        "pinyin": "wiya (Pr)"
    },
    "14": {
        "character": "ᐁᑿ",
        "letter": "and/now",
        "pinyin": "ēkwa (P)"
    },
    "15": {
        "character": "ᐊᔮ",
        "letter": "be",
        "pinyin": "ayā (VAI)"
    },
    "16": {
        "character": "ᐯ",
        "letter": "come [action coming towards speaker]",
        "pinyin": "pē- (Pv)"
    },
    "17": {
        "character": "ᐯᒋ",
        "letter": "come [action coming towards speaker]",
        "pinyin": "pēci- (Pv)"
    },
    "18": {
        "character": "ᒦᑭᐚᒼ",
        "letter": "home",
        "pinyin": "mīkiwām (NI)"
    },
    "19": {
        "character": "ᐊᔮ",
        "letter": "have it",
        "pinyin": "ayā (VTI-2)"
    },
    "20": {
        "character": "ᐊᔨᓯᔨᓂᐤ",
        "letter": "person",
        "pinyin": "ayisiyiniw (NA)"
    },
    "21": {
        "character": "ᐊᔭᒥ",
        "letter": "talk",
        "pinyin": "ayami (VAI)"
    },
    "22": {
        "character": "ᐸᒥᓇᐘᓱ",
        "letter": "cook/prepare a meal",
        "pinyin": "paminawaso (VAI)"
    },
    "23": {
        "character": "ᓂᐹ",
        "letter": "sleep",
        "pinyin": "nipā (VAI)"
    },
    "24": {
        "character": "ᓂᑳᐏᐩ",
        "letter": "my mother",
        "pinyin": "nikāwiy (NA)"
    },
    "25": {
        "character": "ᓂᒫᒫ",
        "letter": "my mother",
        "pinyin": "nimāmā (NA)"
    },
    "26": {
        "character": "ᑰᐦᑖᐏᐩ",
        "letter": "your father",
        "pinyin": "kōhtāwiy (NA)"
    },
    "27": {
        "character": "ᓅᐦᑖᐏᐩ",
        "letter": "my father",
        "pinyin": "nōhtāwiy (NA)"
    },
    "28": {
        "character": "ᑭᒐᐚᓯᒥᐢ",
        "letter": "child, your",
        "pinyin": "kicawāsimis (NA)"
    },
    "29": {
        "character": "ᑭᒐᐚᓯᒥᓴᐠ",
        "letter": "children, your",
        "pinyin": "kicawāsimisak (NA)"
    },
    "30": {
        "character": "ᒦᒋ",
        "letter": "eat",
        "pinyin": "mīci (VTI-3)"
    },
    "31": {
        "character": "ᒦᒋᐏᐣ",
        "letter": "food",
        "pinyin": "mīciwin (NI)"
    },
    "32": {
        "character": "ᒦᒋᓱ",
        "letter": "eat",
        "pinyin": "mīciso (VAI)"
    },
    "33": {
        "character": "ᒦᒋᓱᐏᓈᐦᑎᐠ",
        "letter": "table",
        "pinyin": "mīcisowināhtik (NI)"
    },
    "34": {
        "character": "ᓂᒥᐢ",
        "letter": "my older sister",
        "pinyin": "nimis (NA)"
    },
    "35": {
        "character": "ᓂᒧᓲᒼ",
        "letter": "my grandfather(s)",
        "pinyin": "nimosōm(ak) (NA)"
    },
    "36": {
        "character": "ᓂᓈᐯᒼ/ᓂᐑᑭᒫᑲᐣ",
        "letter": "my man/my husband",
        "pinyin": "nināpēm/niwīkimākan (NA)"
    },
    "37": {
        "character": "ᓂᑯᓯᐢ",
        "letter": "my son",
        "pinyin": "nikosis (NA)"
    },
    "38": {
        "character": "ᑭᑖᓂᐢ",
        "letter": "your daughter",
        "pinyin": "kitānis (NA)"
    },
    "39": {
        "character": "ᓂᑑᑌᒼ",
        "letter": "my friend(s)",
        "pinyin": "nitōtēm(ak) (NA)"
    },
    "40": {
        "character": "ᐁᑳ",
        "letter": "don’t",
        "pinyin": "ēkā (P)"
    },
    "41": {
        "character": "ᐁᑳᐏᔭ",
        "letter": "don’t",
        "pinyin": "ēkāwiya (P)"
    },
    "42": {
        "character": "ᑳᑮᓯᑳᐠ",
        "letter": "today",
        "pinyin": "kā-kīsikāk (vP)"
    },
    "43": {
        "character": "ᓂᑳ",
        "letter": "Mom [vocative only]",
        "pinyin": "nikā (NA)"
    },
    "44": {
        "character": "ᓂᐚᐦᑰᒫᑲᐣ",
        "letter": "my relative",
        "pinyin": "niwāhkōmākan (NA)"
    },
    "45": {
        "character": "ᓂᐑᐦᐅᐏᐣ",
        "letter": "my name",
        "pinyin": "niwīhowin (NI)"
    },
    "46": {
        "character": "ᓂᒐᐚᓯᒥᐢ",
        "letter": "my child(ren)",
        "pinyin": "nicawāsimis(ak) (NA)"
    },
    "47": {
        "character": "ᒥᔪ",
        "letter": "good/nice/well",
        "pinyin": "miyo- (Pv/Pn)"
    },
    "48": {
        "character": "ᒥᔪᒪᐦᒋᐦ",
        "letter": "feel well",
        "pinyin": "miyomahciho (VAI)"
    },
    "49": {
        "character": "ᐊᐢᑭᐩ",
        "letter": "earth/land",
        "pinyin": "askiy (NI)"
    },
    "50": {
        "character": "ᓀᐦᐃᔭᐤᒪᐏᒧᐢᒋᑫᐏᐣ",
        "letter": "Cree ceremony",
        "pinyin": "nēhiyaw-mawimoscikēwin (NI)"
    },
    "51": {
        "character": "ᐃᐢᑵᐤ",
        "letter": "woman",
        "pinyin": "iskwēw (NA)"
    },
    "52": {
        "character": "ᓈᐯᐤ",
        "letter": "man",
        "pinyin": "nāpēw (NA)"
    },
    "53": {
        "character": "ᐃᐢᐸᔨᑭ",
        "letter": "to be",
        "pinyin": "ispayiki (vP)"
    },
    "54": {
        "character": "ᐅᐢᑭᓃᑭᐢᑵᐤ",
        "letter": "young woman [adolescent]",
        "pinyin": "oskinīkiskwēw (NA)"
    },
    "55": {
        "character": "ᐅᐢᑭᓃᑭᐤ",
        "letter": "young man [adolescent]",
        "pinyin": "oskinīkiw (NA)"
    },
    "56": {
        "character": "ᐚᐸᐦᑭ",
        "letter": "tomorrow",
        "pinyin": "wāpahki (vP)"
    },
    "57": {
        "character": "ᑖᓀᐦᑭ",
        "letter": "why?",
        "pinyin": "tānēhki (Pr)"
    },
    "58": {
        "character": "ᐚᐢᑲᐦᐃᑲᐣ",
        "letter": "house",
        "pinyin": "wāskahikan (NI)"
    },
    "59": {
        "character": "ᑖᓂᓯ",
        "letter": "how/how are you?",
        "pinyin": "tānisi (Pr)"
    },
    "60": {
        "character": "ᑖᓂᐢᐲᕽ",
        "letter": "when?",
        "pinyin": "tānispīhk (Pr)"
    },
    "61": {
        "character": "ᑮᓯᑳᐏᐲᓯᒼ",
        "letter": "sun",
        "pinyin": "kīsikāwi-pīsim (NA)"
    },
    "62": {
        "character": "ᑭᓯᓈᐤ",
        "letter": "it is cold",
        "pinyin": "kisināw (VII-1)"
    },
    "63": {
        "character": "ᒥᒋᐦᒋᐩ",
        "letter": "hand",
        "pinyin": "micihciy (NI)"
    },
    "64": {
        "character": "ᒥᓴᑎᒼ/ᒥᐢᑕᑎᒼ",
        "letter": "horse",
        "pinyin": "misatim/mistatim (NA)"
    },
    "65": {
        "character": "ᒥᔭᐤ",
        "letter": "body",
        "pinyin": "miyaw (NI)"
    },
    "66": {
        "character": "ᐊᔨᐚᐠ",
        "letter": "more",
        "pinyin": "ayiwāk (P)"
    },
    "67": {
        "character": "ᑫᐦᑌᐊᔭᐠ",
        "letter": "Elders",
        "pinyin": "kēhtē-ayak (NA)"
    },
    "68": {
        "character": "ᓈᐯᓯᐢ",
        "letter": "boy",
        "pinyin": "nāpēsis (NA)"
    },
    "69": {
        "character": "ᓃᐢᑕ",
        "letter": "me too/also",
        "pinyin": "nīsta (Pr)"
    },
    "70": {
        "character": "ᐊᓯᒋ",
        "letter": "with",
        "pinyin": "asici (P)"
    },
    "71": {
        "character": "ᐃᑘ",
        "letter": "say it",
        "pinyin": "itwē (VTI-3)"
    },
    "72": {
        "character": "ᐃᔨᓂᐤ",
        "letter": "First Nations person/Indian person",
        "pinyin": "iyiniw (NA)"
    },
    "73": {
        "character": "ᑖᓂᑌ",
        "letter": "where?",
        "pinyin": "tānitē (Pr)"
    },
    "74": {
        "character": "ᐃᑑᑕ",
        "letter": "do it",
        "pinyin": "itōta (VTI-1)"
    },
    "75": {
        "character": "ᑖᓂᐚ",
        "letter": "where is he/she?",
        "pinyin": "tāniwā (Pr-A/sg)"
    },
    "76": {
        "character": "ᐃᑕᒪᐦᒋᐦ",
        "letter": "feel [as in health]",
        "pinyin": "itamahciho (VAI)"
    },
    "77": {
        "character": "ᑖᓂᔨᑯᕽ/ᑖᓂᒪᔨᑯᕽ",
        "letter": "how much? [quantity]",
        "pinyin": "tāniyikohk/tānimayikohk (Pr)"
    },
    "78": {
        "character": "ᑎᐱᐢᑳᑭ",
        "letter": "tonight",
        "pinyin": "tipiskāki (vP)"
    },
    "79": {
        "character": "ᑎᐱᐢᑳᐏᐲᓯᒼ",
        "letter": "moon",
        "pinyin": "tipiskāwi-pīsim (NA)"
    },
    "80": {
        "character": "ᐚᐸᐦᑕ",
        "letter": "see it",
        "pinyin": "wāpahta (VTI-1)"
    },
    "81": {
        "character": "ᐅᑳᐏᔭ",
        "letter": "his/her mother",
        "pinyin": "okāwiya (NA)"
    },
    "82": {
        "character": "ᓅᑐᑵᐤ",
        "letter": "an old lady",
        "pinyin": "nōtokwēw (NA)"
    },
    "83": {
        "character": "ᐊᒑᐦᑯᐢ",
        "letter": "star",
        "pinyin": "acāhkos (NA)"
    },
    "84": {
        "character": "ᐋᐦᑯᓯ",
        "letter": "be sick",
        "pinyin": "āhkosi (VAI)"
    },
    "85": {
        "character": "ᒣᐢᑲᓇᐤ",
        "letter": "road",
        "pinyin": "mēskanaw (NI)"
    },
    "86": {
        "character": "ᒣᑕᐍ",
        "letter": "play",
        "pinyin": "mētawē (VAI)"
    },
    "87": {
        "character": "ᒌᐦᑫᔨᐦᑕ",
        "letter": "like it",
        "pinyin": "cīhkēyihta (VTI-1)"
    },
    "88": {
        "character": "ᒌᐦᑫᔨᒼ",
        "letter": "like him/her",
        "pinyin": "cīhkēyim (VTA-1)"
    },
    "89": {
        "character": "ᓃᑳᓂᕽ",
        "letter": "in the future",
        "pinyin": "nīkānihk (P)"
    },
    "90": {
        "character": "ᓂᑕᐍᔨᐦᑕ",
        "letter": "want it",
        "pinyin": "nitawēyihta (VTI-1)"
    },
    "91": {
        "character": "ᓂᑕᐍᔨᒼ",
        "letter": "want it/him/her",
        "pinyin": "nitawēyim (VTA-1)"
    },
    "92": {
        "character": "ᐊᐱᓰᓯᓯ",
        "letter": "little, (be)",
        "pinyin": "apisīsisi (VAI)"
    },
    "93": {
        "character": "ᐋᐦᑯᓯᐏᑲᒥᐠ",
        "letter": "hospital",
        "pinyin": "āhkosiwikamik (NI)"
    },
    "94": {
        "character": "ᐋᐱᐦᑕᐤ",
        "letter": "half",
        "pinyin": "āpihtaw (P)"
    },
    "95": {
        "character": "ᐋᐦᑯᓯᐏᐣ",
        "letter": "sickness",
        "pinyin": "āhkosiwin (NI)"
    },
    "96": {
        "character": "ᐊᓄᐦᐨ ᑳᑮᓯᑳᐠ",
        "letter": "today",
        "pinyin": "anohc kā-kīsikāk (vP)"
    },
    "97": {
        "character": "ᐊᓄᐦᐨ",
        "letter": "today, now",
        "pinyin": "anohc (P)"
    },
    "98": {
        "character": "ᓅᐦᑯᒼ",
        "letter": "my grandmother(s)",
        "pinyin": "nōhkom(ak) (NA)"
    },
    "99": {
        "character": "ᓅᐦᑌᐦᑲᑌ",
        "letter": "hungry, (be)",
        "pinyin": "nōhtēhkatē (VAI)"
    },
    "100": {
        "character": "ᒪᒌ",
        "letter": "was it not, wasn’t it",
        "pinyin": "macī (P)"
    },
    "101": {
        "character": "ᒫᒥᑐᓀᔨᐦᑕ",
        "letter": "think about it",
        "pinyin": "māmitonēyihta (VTI-1)"
    },
    "102": {
        "character": "ᒋᐸᐦᐃᑲᓂᐢ",
        "letter": "minute",
        "pinyin": "cipahikanis (NI)"
    },
    "103": {
        "character": "ᐅᑭᒫᐦᑳᐣ",
        "letter": "chief",
        "pinyin": "okimāhkān (NA)"
    },
    "104": {
        "character": "ᐅᐢᑳᔨᐏ",
        "letter": "young, (be)",
        "pinyin": "oskāyiwi (VAI)"
    },
    "105": {
        "character": "ᓅᐦᑌᐦᑿᓯ",
        "letter": "sleepy, (be)",
        "pinyin": "nōhtēhkwasi (VAI)"
    },
    "106": {
        "character": "ᐋᑲᔮᓰᒧᐏᐣ",
        "letter": "English",
        "pinyin": "ākayāsīmowin (NI)"
    },
    "107": {
        "character": "ᐅᓵᒼ",
        "letter": "because",
        "pinyin": "osām (Cj)"
    },
    "108": {
        "character": "ᐋᑲᔮᓰᒧ",
        "letter": "speak English",
        "pinyin": "ākayāsīmo (VAI)"
    },
    "109": {
        "character": "ᐋᑲᔭᓰᒧᑐᑕᐤ",
        "letter": "speak English to him/her",
        "pinyin": "ākayasīmototaw (VTA-2)"
    },
    "110": {
        "character": "ᐊᑭᐦᑖᓱᓇ",
        "letter": "numbers",
        "pinyin": "akihtāsona (NI)"
    },
    "111": {
        "character": "ᐋᐱᐦᑖᑮᓯᑳᐤ",
        "letter": "midday/noon",
        "pinyin": "āpihtā-kīsikāw (vP)"
    },
    "112": {
        "character": "ᐋᐱᐦᑖᑎᐱᐢᑳᐤ",
        "letter": "midnight",
        "pinyin": "āpihtā-tipiskāw (vP)"
    },
    "113": {
        "character": "ᐊᐱ",
        "letter": "sit/be at home",
        "pinyin": "api (VAI)"
    },
    "114": {
        "character": "ᐊᐢᑭᑇᐏ",
        "letter": "potato",
        "pinyin": "askipwāwi (NI)"
    },
    "115": {
        "character": "ᐊᐢᑮᐏᐣ",
        "letter": "year",
        "pinyin": "askīwin (NI)"
    },
    "116": {
        "character": "ᐋᐢᑕᒼ",
        "letter": "come here",
        "pinyin": "āstam [Imperative only]"
    },
    "117": {
        "character": "ᓇᒼ ᐋᐏᔭᐠ",
        "letter": "nobody",
        "pinyin": "nam āwiyak (Pr)"
    },
    "118": {
        "character": "ᓇᒪ ᑮᑿᐩ",
        "letter": "nothing",
        "pinyin": "nama kīkway (Pr)"
    },
    "119": {
        "character": "ᓂᐱᐩ",
        "letter": "water",
        "pinyin": "nipiy (NI)"
    },
    "120": {
        "character": "ᑲᐢᑭᐦᑖ",
        "letter": "be able to do it",
        "pinyin": "kaskihtā (VTI-2)"
    },
    "121": {
        "character": "ᐅᓰᐦᑖ",
        "letter": "make it",
        "pinyin": "osīhtā (VTI-2)"
    },
    "122": {
        "character": "ᐋᐢᑕᒼ ᐆᑕ",
        "letter": "Come here",
        "pinyin": "āstam ōta (Ph)"
    },
    "123": {
        "character": "ᒥᔪᐢᐸᑿᐣ",
        "letter": "it tastes nice",
        "pinyin": "miyospakwan (VII-2)"
    },
    "124": {
        "character": "ᐅᓰᐦᑕᒪᐤ",
        "letter": "make it for him/her",
        "pinyin": "osīhtamaw (VTA-2)"
    },
    "125": {
        "character": "ᐋᐢᑕᒼ!",
        "letter": "Come!",
        "pinyin": "āstam! (P)"
    },
    "126": {
        "character": "ᐊᑐᐢᑫ",
        "letter": "work",
        "pinyin": "atoskē (VAI)"
    },
    "127": {
        "character": "ᐊᑐᐢᑲᐤ",
        "letter": "work for him/her",
        "pinyin": "atoskaw (VTA-2)"
    },
    "128": {
        "character": "ᐊᑖᐍᐏᑲᒥᐠ",
        "letter": "store",
        "pinyin": "atāwēwikamik (NI)"
    },
    "129": {
        "character": "ᐊᐚᓯᐢ",
        "letter": "child",
        "pinyin": "awāsis (NA)"
    },
    "130": {
        "character": "ᐊᐚᓯᓴᐠ",
        "letter": "children",
        "pinyin": "awāsisak (NA)"
    },
    "131": {
        "character": "ᐁᑿ ᒦᓇ",
        "letter": "also",
        "pinyin": "ēkwa mīna (Ph)"
    },
    "132": {
        "character": "ᐃᐢᑯᑌᐓᑖᐹᓈᐢᐠ",
        "letter": "train",
        "pinyin": "iskotēwotāpānāsk (NA)"
    },
    "133": {
        "character": "ᐁᑿᔨᑯᕽ",
        "letter": "that much",
        "pinyin": "ēkwayikohk (P)"
    },
    "134": {
        "character": "ᑭᐦᐨᐆᑌᓇᐤ",
        "letter": "city",
        "pinyin": "kihc-ōtēnaw (NI)"
    },
    "135": {
        "character": "ᐊᐏᔭᐠ",
        "letter": "someone",
        "pinyin": "awiyak (Pr)"
    },
    "136": {
        "character": "ᑖᓂᒪᔨᑯᕽ/ᑖᓂᔨᑯᕽ",
        "letter": "how much? [quantity]",
        "pinyin": "tānimayikohk/tāniyikohk (Pr)"
    },
    "137": {
        "character": "ᑖᓂᐢ ᐄᓯ",
        "letter": "how (in what way?)",
        "pinyin": "tānis īsi (Pr)"
    },
    "138": {
        "character": "ᑖᓂᑕᐦᑐ",
        "letter": "how many? [number]",
        "pinyin": "tānitahto (Pr)"
    },
    "139": {
        "character": "ᑖᓂᑕᐦᑤᐤ",
        "letter": "how many times?",
        "pinyin": "tānitahtwāw (Pr)"
    },
    "140": {
        "character": "ᑖᓂᑐᐘᕽ",
        "letter": "what kind?",
        "pinyin": "tānitowahk (Pr)"
    },
    "141": {
        "character": "ᑖᓂᐍ",
        "letter": "where is it?",
        "pinyin": "tāniwē (Pr-I/sg)"
    },
    "142": {
        "character": "ᑖᓂᐍᐦᐋ",
        "letter": "where are they?",
        "pinyin": "tāniwēhā (Pr-I/pl)"
    },
    "143": {
        "character": "ᐆᐦᐃ",
        "letter": "these",
        "pinyin": "ōhi (Pr-I/pl)"
    },
    "144": {
        "character": "ᐹᒷᔦᐢ",
        "letter": "before",
        "pinyin": "pāmwayēs (Cj)"
    },
    "145": {
        "character": "ᑭᐦᒋ",
        "letter": "big/large/great",
        "pinyin": "kihci- (Pv/Pn)"
    },
    "146": {
        "character": "ᐊᐏᔭᑲᐠ",
        "letter": "some people",
        "pinyin": "awiyakak (Pr)"
    },
    "147": {
        "character": "ᑭᐦᒋᑭᐢᑭᓌᐦᐊᒫᑐᐏᑲᒥᐠ",
        "letter": "university",
        "pinyin": "kihci-kiskinwahamātowikamik (NI)"
    },
    "148": {
        "character": "ᑮᑭᓭᑊ",
        "letter": "this morning",
        "pinyin": "kīkisēp (P)"
    },
    "149": {
        "character": "ᑮᑭᓭᐹᔮᐤ",
        "letter": "morning",
        "pinyin": "kīkisēpāyāw (NI)"
    },
    "150": {
        "character": "ᑮᒁᐩ?",
        "letter": "what?",
        "pinyin": "kīkwāy? (Pr)"
    },
    "151": {
        "character": "ᓵᑭᐦ",
        "letter": "love him/her",
        "pinyin": "sākih (VTA-1)"
    },
    "152": {
        "character": "ᓵᑭᐦᐃᑐᐏᐣ",
        "letter": "love",
        "pinyin": "sākihitowin (NI)"
    },
    "153": {
        "character": "ᓵᑭᐦᑖ",
        "letter": "love it",
        "pinyin": "sākihtā (VTI-2)"
    },
    "154": {
        "character": "ᓴᐍᔨᒼ",
        "letter": "love him/her",
        "pinyin": "sawēyim (VTA-1)"
    },
    "155": {
        "character": "ᓰᐱᐩ",
        "letter": "river",
        "pinyin": "sīpiy (NI)"
    },
    "156": {
        "character": "ᒧᐤ",
        "letter": "eat it",
        "pinyin": "mow (VTA-1)"
    },
    "157": {
        "character": "ᐱᒥᓇᐘᓱ",
        "letter": "cook a meal",
        "pinyin": "piminawaso (VAI)"
    },
    "158": {
        "character": "ᓲᓂᔮᐤ",
        "letter": "money",
        "pinyin": "sōniyāw (NA)"
    },
    "159": {
        "character": "ᒥᐢᑕᑭᐦᑌᐤ",
        "letter": "it is expensive",
        "pinyin": "mistakihtēw (VII-2)"
    },
    "160": {
        "character": "ᒥᓵᐤ",
        "letter": "it is large/big",
        "pinyin": "misāw (VII-2)"
    },
    "161": {
        "character": "ᒥᐢᑕᑭᓱ",
        "letter": "expensive, (be)",
        "pinyin": "mistakiso (VAI)"
    },
    "162": {
        "character": "ᒥᔪᓈᑯᓯ",
        "letter": "be beautiful",
        "pinyin": "miyonākosi (VAI)"
    },
    "163": {
        "character": "ᒥᔪᓈᑿᐣ",
        "letter": "it is beautiful",
        "pinyin": "miyonākwan (VII)"
    },
    "164": {
        "character": "ᒥᔪᓯ",
        "letter": "be nice",
        "pinyin": "miyosi (VAI)"
    },
    "165": {
        "character": "ᒥᔪᓯᓯ",
        "letter": "be nice",
        "pinyin": "miyosisi (VAI)"
    },
    "166": {
        "character": "ᑯᑕᐠ",
        "letter": "other/another",
        "pinyin": "kotak (Pr)"
    },
    "167": {
        "character": "ᒥᐦᒉᐟ",
        "letter": "many, lots",
        "pinyin": "mihcēt (P)"
    },
    "168": {
        "character": "ᑭᒥᐢ",
        "letter": "your (sg.) older sister",
        "pinyin": "kimis (NA)"
    },
    "169": {
        "character": "ᑳᑭᑫ/ᑖᐱᑕᐏ",
        "letter": "always",
        "pinyin": "kākikē/tāpitawi (P)"
    },
    "170": {
        "character": "ᐱᒧᐦᑌᐦ",
        "letter": "travel",
        "pinyin": "pimohtēho (VAI)"
    },
    "171": {
        "character": "ᐱᓯᐢᑭᐤ",
        "letter": "animal",
        "pinyin": "pisiskiw (NA)"
    },
    "172": {
        "character": "ᑭᓄᓭᐤ",
        "letter": "fish [generic term]",
        "pinyin": "kinosēw (NA)"
    },
    "173": {
        "character": "ᑮᓯᑳᔮᐢᑌᐤ",
        "letter": "it is moonlight",
        "pinyin": "kīsikāyāstēw (VII-1)"
    },
    "174": {
        "character": "ᑭᓵᐢᑌᐤ",
        "letter": "it is hot [weather]",
        "pinyin": "kisāstēw (VII-1)"
    },
    "175": {
        "character": "ᑮᓯᑳᐤ",
        "letter": "it is day, it is daylight",
        "pinyin": "kīsikāw (VII-1)"
    },
    "176": {
        "character": "ᑭᓯᑌᐤ",
        "letter": "it is hot [temperature]",
        "pinyin": "kisitēw (VII-1)"
    },
    "177": {
        "character": "ᑭᓯᐚᓯ",
        "letter": "angry, (be)",
        "pinyin": "kisiwāsi (VAI)"
    },
    "178": {
        "character": "ᑮᓱᐍᔮᐤ",
        "letter": "it is warm weather",
        "pinyin": "kīsowēyāw (VII-1)"
    },
    "179": {
        "character": "ᑮᓯᑌᐳ",
        "letter": "cook",
        "pinyin": "kīsitēpo (VAI)"
    },
    "180": {
        "character": "ᑲ/ᑕ",
        "letter": "future tense markers",
        "pinyin": "ka-/ta- (Pv)"
    },
    "181": {
        "character": "ᓅᐦᒑᐑᐢ",
        "letter": "my uncle [father’s brother]",
        "pinyin": "nōhcāwīs (NA)"
    },
    "182": {
        "character": "ᐅᓯᐯᐦᐊ",
        "letter": "write it",
        "pinyin": "osipēha (VTI-1)"
    },
    "183": {
        "character": "ᐅᓰᐦ",
        "letter": "make it",
        "pinyin": "osīh (VTA-1)"
    },
    "184": {
        "character": "ᐯᐦ",
        "letter": "wait",
        "pinyin": "pēho (VAI)"
    },
    "185": {
        "character": "ᐯᐦᑕ",
        "letter": "hear it",
        "pinyin": "pēhta (VTI-1)"
    },
    "186": {
        "character": "ᐱᒧᐦᑌ",
        "letter": "walk",
        "pinyin": "pimohtē (VAI)"
    },
    "187": {
        "character": "ᑭᑐᐦᒋᑫ",
        "letter": "make music",
        "pinyin": "kitohcikē (VAI)"
    },
    "188": {
        "character": "ᓂᐑᑭᒫᑲᐣ",
        "letter": "my wife/husband",
        "pinyin": "niwīkimākan (NA)"
    },
    "189": {
        "character": "ᐱᒥᐸᐦᑖ",
        "letter": "run",
        "pinyin": "pimipahtā (VAI)"
    },
    "190": {
        "character": "ᑮᐍ",
        "letter": "go home",
        "pinyin": "kīwē (VAI)"
    },
    "191": {
        "character": "ᑰᓇ",
        "letter": "snow",
        "pinyin": "kōna (NA)"
    },
    "192": {
        "character": "ᒥᔪᐢᑲᒥᐣ",
        "letter": "it is spring",
        "pinyin": "miyoskamin (VII-1)"
    },
    "193": {
        "character": "ᒥᔪᐢᐸᑯᓯᐤ",
        "letter": "it tastes nice",
        "pinyin": "miyospakosiw (VAI)"
    },
    "194": {
        "character": "ᓀᐦᐃᔮᓈᕽ",
        "letter": "Cree country/region",
        "pinyin": "nēhiyānāhk (P)"
    },
    "195": {
        "character": "ᓂᐦᑎᐩ/ᒪᐢᑭᐦᑮᐚᐳᐩ",
        "letter": "tea",
        "pinyin": "nihtiy/maskihkīwāpoy (NI)"
    },
    "196": {
        "character": "ᓂᑲᒧ",
        "letter": "sing",
        "pinyin": "nikamo (VAI)"
    },
    "197": {
        "character": "ᓂᑲᒧᐢᑭ",
        "letter": "sing [habitually]",
        "pinyin": "nikamoski (VAI)"
    },
    "198": {
        "character": "ᐋᒋᒧ",
        "letter": "tell a story/inform",
        "pinyin": "ācimo (VAI)"
    },
    "199": {
        "character": "ᐋᒋᒧᐢᑕᐤ",
        "letter": "tell him/her a story/inform him/her",
        "pinyin": "ācimostaw (VTA-2)"
    },
    "200": {
        "character": "ᐊᐘ",
        "letter": "this one",
        "pinyin": "awa (Pr-A/sg)"
    },
    "201": {
        "character": "ᐊᓇ",
        "letter": "that one",
        "pinyin": "ana (Pr-A/sg)"
    },
    "202": {
        "character": "ᐊᓂᐦᐃ",
        "letter": "those ones",
        "pinyin": "anihi (Pr-I/pl)"
    },
    "203": {
        "character": "ᐊᓂᑭ",
        "letter": "those ones",
        "pinyin": "aniki (Pr-A/pl)"
    },
    "204": {
        "character": "ᐊᓂᒪ",
        "letter": "that one",
        "pinyin": "anima (Pr-I/sg)"
    },
    "205": {
        "character": "ᐊᐢᑭᑇᐘ",
        "letter": "potatoes",
        "pinyin": "askipwāwa (NI)"
    },
    "206": {
        "character": "ᐊᔭᒥᐦᒋᑫ",
        "letter": "read",
        "pinyin": "ayamihcikē (VAI)"
    },
    "207": {
        "character": "ᐊᑖᐍ",
        "letter": "buy",
        "pinyin": "atāwē (VAI)"
    },
    "208": {
        "character": "ᐃᐢᑵᓯᓵᐳᐩ",
        "letter": "beer",
        "pinyin": "iskwēsisāpoy (NI)"
    },
    "209": {
        "character": "ᐃᐢᐲᐦᑎᓰ",
        "letter": "reach a certain age [he is  years old]",
        "pinyin": "ispīhtisī (VAI)"
    },
    "210": {
        "character": "ᐃᑕᐦᑐᐱᐳᓀ",
        "letter": "be a certain age [he is_  years old]",
        "pinyin": "itahtopiponē (VAI)"
    },
    "211": {
        "character": "ᐃᑕᑭᐦᑌᐤ",
        "letter": "cost [so much]",
        "pinyin": "itakihtēw (VII-2)"
    },
    "212": {
        "character": "ᐃᑕᑭᓱ",
        "letter": "cost [so much]",
        "pinyin": "itakiso (VAI)"
    },
    "213": {
        "character": "ᑲᐦᑭᔭᐤ",
        "letter": "all",
        "pinyin": "kahkiyaw (P)"
    },
    "214": {
        "character": "ᑲᐦᑭᔭᐤ ᐊᐏᔭᐠ",
        "letter": "all (everybody)",
        "pinyin": "kahkiyaw awiyak (Pr)"
    },
    "215": {
        "character": "ᑭᐦᐨᐆᑭᓂᐩ",
        "letter": "tomato",
        "pinyin": "kihc-ōkiniy (NA)"
    },
    "216": {
        "character": "ᑲᐦᑭᔭᐤ ᑮᑿᐩ",
        "letter": "all (everything)",
        "pinyin": "kahkiyaw kīkway (Pr)"
    },
    "217": {
        "character": "ᑭᑳᐑᐢ",
        "letter": "your (sg.) aunt (mother’s sister)",
        "pinyin": "kikāwīs (NA)"
    },
    "218": {
        "character": "ᑮᑭ",
        "letter": "your home",
        "pinyin": "kīki (NI)"
    },
    "219": {
        "character": "ᓂᐢᑕᒼ",
        "letter": "first",
        "pinyin": "nistam (P)"
    },
    "220": {
        "character": "ᓃᐢᑕᓈᐣ",
        "letter": "us too/also",
        "pinyin": "nīstanān (Pr)"
    },
    "221": {
        "character": "ᓂᐢᑌᐢ",
        "letter": "my older brother",
        "pinyin": "nistēs (NA)"
    },
    "222": {
        "character": "ᓂᑖᓂᐢ",
        "letter": "my daughter",
        "pinyin": "nitānis (NA)"
    },
    "223": {
        "character": "ᓃᑎᓵᐣ",
        "letter": "my sibling(s)",
        "pinyin": "nītisān(ak) (NA)"
    },
    "224": {
        "character": "ᓂᑎᐢᑵᒼ",
        "letter": "my woman/my wife",
        "pinyin": "nitiskwēm (NA)"
    },
    "225": {
        "character": "ᓂᑐᐦᑕ",
        "letter": "listen to it",
        "pinyin": "nitohta (VTI-1)"
    },
    "226": {
        "character": "ᓂᑐᐦᑕᐤ",
        "letter": "listen to him/her/it",
        "pinyin": "nitohtaw (VTA-2)"
    },
    "227": {
        "character": "ᐋᒋᑳᐢᑌᐱᒋᑲᐣ",
        "letter": "a movie",
        "pinyin": "ācikāstēpicikan (NI)"
    },
    "228": {
        "character": "ᐋᒋᒧᐘᓯᓇᐦᐃᑲᐣ",
        "letter": "newspaper",
        "pinyin": "ācimowasinahikan (NI)"
    },
    "229": {
        "character": "ᐋᒋᒧᐏᐣ",
        "letter": "story/news",
        "pinyin": "ācimowin (NI)"
    },
    "230": {
        "character": "ᑕᐦᑭᓀ",
        "letter": "always",
        "pinyin": "tahkinē (vP)"
    },
    "231": {
        "character": "ᐳᐢᑕᔨᐏᓂᓭ",
        "letter": "put on clothes",
        "pinyin": "postayiwinisē (VAI)"
    },
    "232": {
        "character": "ᐱᐦᑲᐦᑌᐚᐳᐩ",
        "letter": "coffee",
        "pinyin": "pihkahtēwāpoy (NI)"
    },
    "233": {
        "character": "ᐱᒋᒁᐢ",
        "letter": "apple",
        "pinyin": "picikwās (NA)"
    },
    "234": {
        "character": "ᐃᑕᑯᒋᓂ",
        "letter": "travel to",
        "pinyin": "itakocini (VAI) (irreg)"
    },
    "235": {
        "character": "ᐸᑲᐦᐊᑐᐍ",
        "letter": "play ball",
        "pinyin": "pakahatowē (VAI)"
    },
    "236": {
        "character": "ᐃᐢᒁᐦᑌᒼ",
        "letter": "door",
        "pinyin": "iskwāhtēm (NI)"
    },
    "237": {
        "character": "ᐹᐦᐱ",
        "letter": "laugh",
        "pinyin": "pāhpi (VAI)"
    },
    "238": {
        "character": "ᐊᐘᓯᐢᐲᕽ",
        "letter": "before then",
        "pinyin": "awasispīhk (P)"
    },
    "239": {
        "character": "ᐁᑯᑌ",
        "letter": "over there",
        "pinyin": "ēkotē (P)"
    },
    "240": {
        "character": "ᐊᑖᐍᐢᑕᒪᐤ",
        "letter": "buy it for him/her",
        "pinyin": "atāwēstamaw (VTA-2)"
    },
    "241": {
        "character": "ᐋᒨᓰᓯᐹᐢᑿᐟ",
        "letter": "honey",
        "pinyin": "āmōsīsipāskwat (NI)"
    },
    "242": {
        "character": "ᐋᒧᐤ",
        "letter": "bee",
        "pinyin": "āmow (NA)"
    },
    "243": {
        "character": "ᑲᑵᒋᐦᑫᒧᐏᓇ",
        "letter": "questions",
        "pinyin": "kakwēcihkēmowina (NI)"
    },
    "244": {
        "character": "ᐋᒨᒣᔨ",
        "letter": "honey",
        "pinyin": "āmōmēyi (NI)"
    },
    "245": {
        "character": "ᐊᑳᒥᑎᐸᐦᐊᐢᑳᐣ / ᑭᐦᒋᒨᐦᑯᒫᓂᓈᕽ",
        "letter": "United States",
        "pinyin": "akāmi-tipahaskān (NI)/ kihcimōhkomānināhk (P)"
    },
    "246": {
        "character": "ᐋᐦᑿᑭᐦᑌᐤ",
        "letter": "it is expensive",
        "pinyin": "āhkwakihtēw (VII-2)"
    },
    "247": {
        "character": "ᐋᐦᑿᑭᓱ",
        "letter": "(be) expensive",
        "pinyin": "āhkwakiso (VAI)"
    },
    "248": {
        "character": "ᐊᒋᔭᐤ",
        "letter": "awhile (for)",
        "pinyin": "aciyaw (P)"
    },
    "249": {
        "character": "ᒨᒋᑭᐦᑖ",
        "letter": "have fun",
        "pinyin": "mōcikihtā (VAI)"
    },
    "250": {
        "character": "ᓂᑐᒼ",
        "letter": "invite him/her",
        "pinyin": "nitom (VTA-1)"
    }
}

const creeLevel1ChartData = [
   { "subtitle": "", "content": creeLevel1Map }, 
]