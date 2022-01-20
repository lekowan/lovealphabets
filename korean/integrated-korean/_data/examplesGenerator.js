let newArr = []

// Loop through Integrated object and create an array of unique characters
let initialArr = Object.keys(allSyllableMap).map(i => allSyllableMap[i].character)
initialArr.forEach(item => {
  let a = item.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
  a.forEach(char => newArr.push(char))
})

// Remove duplicates from array
let arr = [...new Set(newArr)]

console.log(arr);
              
// Loop through corpus and build a new object (examples.js) that includes character from HSK array only
let examples = {}
let count = 1;

for(item in corpusObj){
  let wordMandarin = corpusObj[item].mandarin
  let wordEnglish = corpusObj[item].english

  if(wordMandarin.split(' ')
                 .filter(i => i != " " && i != "。" && i != "!" && i != "?")
                 .some(char => arr.includes(char))
                 )
  {
    examples[count] = { english: wordEnglish, target: wordMandarin} 
    count++
  }
   
}

console.log(examples);

/*
// Build a srsDataExamples array that include original SRS data plus examples 
for(item in allSyllableMap){
    let examplesArray = []
    for(word in examples){
      //console.log(allSyllableMap[item].character);
        if(examples[word].mandarin.includes(allSyllableMap[item].character)){
          //console.log('yay');
            examplesArray.push({mandarin: examples[word].mandarin, english: examples[word].english})
        }
    }
    allSyllableMap[item].examples = examplesArray.slice(0,10);
    //console.log(examplesArray);
}

console.log(allSyllableMap);
*/



