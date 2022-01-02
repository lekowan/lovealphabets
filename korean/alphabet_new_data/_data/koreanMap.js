const koreanVowels = {
    'ㅏ': { 'letter': 'a' },
    'ㅑ': { 'letter': 'ya' },
    'ㅓ': { 'letter': 'eo' },
    'ㅕ': { 'letter': 'yeo' },
    'ㅗ': { 'letter': 'o' },
    'ㅛ': { 'letter': 'yo' },
    'ㅜ': { 'letter': 'u' },
    'ㅠ': { 'letter': 'yu' },
    'ㅡ': { 'letter': 'eu' },
    'ㅣ': { 'letter': 'i' },
}

const complexkoreanVowels = {
    'ㅐ': { 'letter': 'ae' },
    'ㅒ': { 'letter': 'yae' },
    'ㅖ': { 'letter': 'ye' },
    'ㅔ': { 'letter': 'e' },
    'ㅘ': { 'letter': 'wa' },
    'ㅙ': { 'letter': 'wae' },
    'ㅚ': { 'letter': 'oe' },
    'ㅝ': { 'letter': 'wo' },
    'ㅞ': { 'letter': 'we' },
    'ㅟ': { 'letter': 'wi' },
    'ㅢ': { 'letter': 'ui' },
}

const koreanConsonants = {
    "ㄱ": { 'letter': "g" },
    "ㄴ": { 'letter': "n" },
    "ㄷ": { 'letter': "d" },
    "ㄹ": { 'letter': "r, l" },
    "ㅁ": { 'letter': "m" },
    "ㅂ": { 'letter': "b" },
    "ㅅ": { 'letter': "s" },
    "ㅇ": { 'letter': "-, ng" },
    "ㅈ": { 'letter': "j" },
    "ㅊ": { 'letter': "ch" },
    "ㅋ": { 'letter': "k" },
    "ㅌ": { 'letter': "t" },
    "ㅍ": { 'letter': "p" },
    "ㅎ": { 'letter': "h" },
}

const tensekoreanConsonants = {
    'ㄲ': { 'letter': "kk" },
    "ㄸ": { 'letter': "tt" },
    "ㅃ": { 'letter': "pp" },
    "ㅉ": { 'letter': "jj" },
    "ㅆ": { 'letter': "ss" },
}


const koreanChartData = [
    { "subtitle": "Vowels", "content": koreanVowels },
    { "subtitle": "Consonants", "content": koreanConsonants },
    { "subtitle": "Complex Vowels", "content": complexkoreanVowels },
    { "subtitle": "Tense Consonants", "content": tensekoreanConsonants },
]