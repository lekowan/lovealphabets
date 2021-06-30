const bengaliVowelsConsonantsMap = {
    "অ": {
        "letter": "ô"
    },
    "আ": {
        "letter": "a"
    },
    "ই": {
        "letter": "i"
    },
    "ঈ": {
        "letter": "ī"
    },
    "উ": {
        "letter": "u"
    },
    "ঊ": {
        "letter": "ū"
    },
    "ঋ": {
        "letter": "ṛ"
    },
    "এ": {
        "letter": "e"
    },
    "ঐ": {
        "letter": "oi"
    },
    "ও": {
        "letter": "o"
    },
    "ঔ": {
        "letter": "ou"
    },
    "ক": {
        "letter": "kô"
    },
   
    "খ": {
        "letter": "khô"
    },
   
    "গ": {
        "letter": "gô"
    },
   
    "ঘ": {
        "letter": "ghô"
    },
   
    "ঙ": {
        "letter": "ṅô"
    },
   
    "চ": {
        "letter": "chô"
    },
   
    "ছ": {
        "letter": "chhô"
    },
   
    "জ": {
        "letter": "jô"
    },
   
    "ঝ": {
        "letter": "jhô"
    },
   
    "ঞ": {
        "letter": "ñô"
    },
  
    "ট": {
        "letter": "ṭô"
    },
   
    "ঠ": {
        "letter": "ṭhô"
    },
   
    "ড": {
        "letter": "ḍô"
    },
   
    "ঢ": {
        "letter": "ḍhô"
    },
  
    "ণ": {
        "letter": "ṇô"
    },
  
    "ত": {
        "letter": "tô"
    },
   
    "থ": {
        "letter": "thô"
    },
   
    "দ": {
        "letter": "dô"
    },
  
    "ধ": {
        "letter": "dhô"
    },
   
    "ন": {
        "letter": "nô"
    },
   
    "প": {
        "letter": "pô"
    },
   
    "ফ": {
        "letter": "phô"
    },
   
    "ব": {
        "letter": "bô"
    },
   
    "ভ": {
        "letter": "bhô"
    },
   
    "ম": {
        "letter": "mô"
    },
   
    "য": {
        "letter": "yô"
    },
   
    "র": {
        "letter": "rô"
    },
   
    "ল": {
        "letter": "lô"
    },
  
    "শ": {
        "letter": "shô"
    },
   
    "ষ": {
        "letter": "ṣô"
    },
   
    "স": {
        "letter": "sô"
    },
   
    "হ": {
        "letter": "hô"
    },
  
    "য়": {
        "letter": "ẏô"
    },
  
    "ড়": {
        "letter": "rô"
    },
   
    "ঢ়": {
        "letter": "rhô"
    },
   
}

const bengaliVowelsConsonantsDataArray = Object.keys(bengaliVowelsConsonantsMap);


const bengaliVowelsConsonantsChartData = {
  "1": {"subtitle":"Vowels", "content": bengaliVowelsConsonantsDataArray.slice(0, 11) },
  "2": {"subtitle":"Consonants", "content": bengaliVowelsConsonantsDataArray.slice(11) },
}