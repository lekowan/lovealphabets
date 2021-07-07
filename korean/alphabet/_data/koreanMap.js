const koreanMap =  {
  'ㅏ': { 'letter':'a' },
  'ㅐ': { 'letter':'ae' },
  'ㅑ': { 'letter':'ya' },
  'ㅒ': { 'letter':'yae' },
  'ㅓ': { 'letter':'eo' },
  'ㅔ': { 'letter':'e' },
  'ㅕ': { 'letter':'yeo' },
  'ㅖ': { 'letter':'ye' },
  'ㅗ': { 'letter':'o' },
  'ㅘ': { 'letter':'wa' },
  'ㅙ': { 'letter':'wae' },
  'ㅚ': { 'letter':'oe' },
  'ㅛ': { 'letter':'yo' },
  'ㅜ': { 'letter':'u' },
  'ㅝ': { 'letter':'wo' },
  'ㅞ': { 'letter':'we' },
  'ㅟ': { 'letter':'wi' },
  'ㅠ': { 'letter':'yu' },
  'ㅡ': { 'letter':'eu' },
  'ㅢ': { 'letter':'ui' },
  'ㅣ': { 'letter':'i' },
  "ㄱ": { 'letter':"g" },
  'ㄲ': { 'letter':"kk" },
  "ㄴ": { 'letter':"n" },
  "ㄷ": { 'letter':"d" },
  "ㄸ": { 'letter':"tt" },
  "ㄹ": { 'letter':"r, l" },
  "ㅁ": { 'letter':"m" },
  "ㅂ": { 'letter':"b" },
  "ㅃ": { 'letter':"pp" },
  "ㅅ": { 'letter':"s" },
  "ㅆ": { 'letter':"ss" },
  "ㅇ": { 'letter':"-, ng" },
  "ㅈ": { 'letter':"j" },
  "ㅉ": { 'letter':"jj" },
  "ㅊ": { 'letter':"ch" },
  "ㅋ": { 'letter':"k" },
  "ㅌ": { 'letter':"t" },
  "ㅍ": { 'letter':"p" },
  "ㅎ": { 'letter':"h" },
}

const koreanDataArray = Object.keys(koreanMap);

const koreanConsonants1 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ"] 
const koreanConsonants2 = ["ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const tensekoreanConsonants = ["ㄲ", "ㄸ", "ㅃ", "ㅉ", "ㅆ"]
const koreanVowels1 =   ["ㅏ", "ㅑ", "ㅓ", "ㅕ"];
const koreanVowels2 = ["ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ" ,"ㅣ"];
const complexkoreanVowels1 = ["ㅢ", "ㅚ", "ㅐ", "ㅟ", "ㅔ", "ㅒ"];
const complexkoreanVowels2 = ["ㅖ", "ㅘ", "ㅝ", "ㅙ", "ㅞ"];

const koreanVowels = koreanVowels1.concat(koreanVowels2);
const complexkoreanVowels = complexkoreanVowels1.concat(complexkoreanVowels2);
const koreanConsonants = koreanConsonants1.concat(koreanConsonants2)


const koreanChartData = [
  {"subtitle":"Vowels","icon": koreanVowels[0], "content": koreanVowels },
  {"subtitle":"Consonants","icon": koreanConsonants[0], "content": koreanConsonants },
  {"subtitle":"Complex Vowels","icon": complexkoreanVowels[0], "content": complexkoreanVowels},
  {"subtitle":"Tense Consonants","icon": tensekoreanConsonants[0], "content": tensekoreanConsonants},
]
