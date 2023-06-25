const languageTitle = "Japanese";
const languageSub = "日本語";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

const languageContent = [
  {
    chartTitle: "Japanese / Hiragana",
    chartName: "hiragana-map",
    chartData: japaneseHiraganaChartData,
    title: "Hiragana",
    sub: "Memorize all Hiragana",
    icon: "ひ",
    url: "hiragana",
    localStorageKey: "japanese" + "Hiragana" + "Srs"
  },

  {
    chartTitle: "Japanese / Katakana",
    chartName: "katakana-map",
    chartData: japaneseKatakanaChartData,
    title: "Katakana",
    sub: "Memorize all Katakana",
    icon: "カ",
    url: "katakana",
    localStorageKey: "japanese" + "Katakana" + "Srs"
  },

  {
    chartTitle: "Japanese / Vocabulary",
    chartName: "vocabulary-map",
    chartData: japaneseVocabChartData,
    title: "Vocabulary",
    sub: "Memorize the 2,000 most frequent Japanese words",
    icon: "日",
    url: "vocab",
    localStorageKey: "japanese2000VocabularySrs"
  }
];
