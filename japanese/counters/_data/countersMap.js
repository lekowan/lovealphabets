// Exercise Type (character, vocabulary )
const japaneseCountersChartType = "vocabulary";

const japaneseDays = {
  "1 day": {
    "letter": "ついたち"
  },
  "2 days": {
    "letter": "ふつか"
  },
  "3 days": {
    "letter": "みっか"
  },
  "4 days": {
    "letter": "よっか"
  },
  "5 days": {
    "letter": "いつか"
  },
  "6 days": {
    "letter": "むいか"
  },
  "7 days": {
    "letter": "なのか"
  },
  "8 days": {
    "letter": "ようか"
  },
  "9 days": {
    "letter": "ここのか"
  },
  "10 days": {
    "letter": "とおか"
  },
  "11 days": {
    "letter": "じゅういちにち"
  },
  "12 days": {
    "letter": "じゅうににち"
  },
  "13 days": {
    "letter": "じゅうさんにち"
  },
  "14 days": {
    "letter": "じゅうよっか"
  },
  "15 days": {
    "letter": "じゅうごにち"
  },
  "16 days": {
    "letter": "じゅうろくにち"
  },
  "17 days": {
    "letter": "じゅうしちにち"
  },
  "18 days": {
    "letter": "じゅうはちにち"
  },
  "19 days": {
    "letter": "じゅうくにち"
  },
  "20 days": {
    "letter": "はつか"
  },
  "21 days": {
    "letter": "にじゅういちにち"
  },
  "22 days": {
    "letter": "にじゅうににち"
  },
  "23 days": {
    "letter": "にじゅうさんにち"
  },
  "24 days": {
    "letter": "にじゅうよっか"
  },
  "25 days": {
    "letter": "にじゅうごにち"
  },
  "26 days": {
    "letter": "にじゅうろくにち"
  },
  "27 days": {
    "letter": "にじゅうしちにち"
  },
  "28 days": {
    "letter": "にじゅうはちにち"
  },
  "29 days": {
    "letter": "にじゅうくにち"
  },
  "30 days": {
    "letter": "さんじゅうにち"
  },
    "31 days": {
    "letter": "さんじゅういちにち"
  },
  "how many days / which day ?": {
    "letter": "なんにち"
  },
}

const japanesePeople = {
  "1 people": {
    "letter": "ひとり"
  },
  "2 people": {
    "letter": "ふたり"
  },
  "3 people": {
    "letter": "さんにん"
  },
  "4 people": {
    "letter": "よにん"
  },
  "5 people": {
    "letter": "ごにん"
  },
  "6 people": {
    "letter": "ろくにん"
  },
  "7 people": {
    "letter": "しちにん/ななにん"
  },
  "8 people": {
    "letter": "はちにん"
  },
  "9 people": {
    "letter": "くにん/きゅうにん"
  },
  "10 people": {
    "letter": "じゅうにん"
  },
  "11 people": {
    "letter": "じゅういちにん"
  },
  "12 people": {
    "letter": "じゅうににん"
  },
  "14 people": {
    "letter": "じゅうよにん"
  },
  "20 people": {
    "letter": "にじゅうにん"
  },
  "24 people": {
    "letter": "にじゅうよにん"
  },
  "100 people": {
    "letter": "ひゃくにん"
  },
  "1000 people": {
    "letter": "せんにん"
  },
  "10000 people": {
    "letter": "いちまんにん"
  },
  "how many people ?": {
    "letter": "なんにん"
  },
}

const japaneseHours = {
  "1 o'clock": {
    "letter": "いちじ"
  },
  "2 o'clock": {
    "letter": "にじ"
  },
  "3 o'clock": {
    "letter": "さんじ"
  },
  "4 o'clock": {
    "letter": "よじ"
  },
  "5 o'clock": {
    "letter": "ごじ"
  },
  "6 o'clock": {
    "letter": "ろくじ"
  },
  "7 o'clock": {
    "letter": "しちじ (ななじ)"
  },
  "8 o'clock": {
    "letter": "はちじ"
  },
  "9 o'clock": {
    "letter": "くじ"
  },
  "10 o'clock": {
    "letter": "じゅうじ"
  },
  "11 o'clock": {
    "letter": "じゅういちじ"
  },
  "12 o'clock": {
    "letter": "じゅうにじ"
  },
  "13 o'clock": {
    "letter": "じゅうさんじ"
  },
  "14 o'clock": {
    "letter": "じゅうよじ"
  },
  "15 o'clock": {
    "letter": "じゅうごじ"
  },
  "16 o'clock": {
    "letter": "じゅうろくじ"
  },
  "17 o'clock": {
    "letter": "じゅうしちじ (じゅうななじ)"
  },
  "18 o'clock": {
    "letter": "じゅうはちじ"
  },
  "19 o'clock": {
    "letter": "じゅうくじ"
  },
  "20 o'clock": {
    "letter": "にじゅうじ"
  },
  "21 o'clock": {
    "letter": "にじゅういちじ"
  },
  "22 o'clock": {
    "letter": "にじゅうにじ"
  },
  "23 o'clock": {
    "letter": "にじゅうさんじ"
  },
  "24 o'clock": {
    "letter": "にじゅうよじ"
  },
  "what time ?": {
    "letter": "なんじ"
  },
}

const japaneseThings = {
  "1 thing": {
    "letter": "ひとつ"
  },
  "2 things": {
    "letter": "ふたつ"
  },
  "3 things": {
    "letter": "みっつ"
  },
  "4 things": {
    "letter": "よっつ"
  },
  "5 things": {
    "letter": "いつつ"
  },
  "6 things": {
    "letter": "むっつ"
  },
  "7 things": {
    "letter": "ななつ"
  },
  "8 things": {
    "letter": "やっつ"
  },
  "9 things": {
    "letter": "ここのつ"
  },
  "10 things": {
    "letter": "とお"
  },
  "11 things": {
    "letter": "じゅういち/じゅういっこ"
  },
  "12 things": {
    "letter": "じゅうに/じゅうにこ"
  },
  "100 things": {
    "letter": "ひゃく/ひゃっこ"
  },
  "1000 things": {
    "letter": "せん/せんこ"
  },
  "10000 things": {
    "letter": "いちまん/いちまんこ"
  },
  "how many things ?": {
    "letter": "いくつ"
  }
}

const japaneseCountersChartData = [
  { subtitle: "Counter for Days", content: japaneseDays },
  { subtitle: "Counter for People", content: japanesePeople },
  { subtitle: "Counter for Hours", content: japaneseHours },
  { subtitle: "Counter for Things", content: japaneseThings },
];
