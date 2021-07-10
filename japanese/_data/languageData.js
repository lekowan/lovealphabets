const languageTitle = "Japanese";
const languageSub = "日本語";

const language = "ja-JP";
const activateSpeech = true;

const languageContent = [
        { "chartTitle": "The Hiragana Chart", "chartName" : "hiragana-map", "chartData": japaneseHiraganaChartData, "title": "Hiragana", "sub": "Memorize all Hiragana", "view": "View the Hiragana", "info" : "104 characters", "icon": "あ", "url": "hiragana", "localStorageKey": "japanese" + "Hiragana" + "Srs" },
        { "chartTitle": "The Katakana Chart", "chartName" : "katakana-map", "chartData": japaneseKatakanaChartData, "title": "Katakana","sub": "Memorize all Katakana", "view": "View the Katakana", "info" : "104 characters", "icon": "ア", "url": "katakana", "localStorageKey": "japanese" + "Katakana" + "Srs" },
        { "chartTitle": "The Kana Chart", "chartName" : "kana-map", "chartData": japaneseAllKanaChartData, "title": "All Kana", "sub": "Memorize all Kana (Hiragana and Katakana)", "info" : "208 characters", "view": "View all Kana","icon": "あア", "url": "all-kana", "localStorageKey": "japanese" + "AllKana" + "Srs" },
]
