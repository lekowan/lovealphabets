const languageTitle = "Greek";
const languageSub = "Ελληνικά";

const language = "el-GR";
const activateSpeech = true;

const languageContent = [
    { "chartName": "lowercase-map", "chartData": greekLowerCaseChartData, "chartTitle": "The Greek Alphabet (lowercase letters)", "title": "Alphabet (lowercase)", "sub": "Practice the lowercase letters from the Greek alphabet", "view": "View the characters", "info": "25 letters", "icon": "α", "url": "alphabet-lower-case", "localStorageKey": "greek" + "LowerCaseCharacters" + "Srs" },
    { "chartName": "uppercase-map", "chartData": greekUpperCaseChartData, "chartTitle": "The Greek Alphabet (uppercase letters)", "title": "Alphabet (uppercase)", "sub": "Practice the uppercase letters from the Greek alphabet", "view": "View the characters", "info": "25 letters", "icon": "Α", "url": "alphabet-upper-case", "localStorageKey": "greek" + "UpperCaseCharacters" + "Srs" },
    { "chartName": "all-map", "chartData": greekChartData, "chartTitle": "The Greek Alphabet", "title": "Alphabet (all case)", "sub": "Practice all letters from the Greek alphabet", "view": "View the characters", "info": "50 letters", "icon": "αΑ", "url": "alphabet-all-characters", "localStorageKey": "greek" + "AllCaseCharacters" + "Srs" },
];