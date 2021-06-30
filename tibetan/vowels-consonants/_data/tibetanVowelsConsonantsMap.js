const tibetanVowelsConsonantsMap = {
    "ི": {
        "letter": "i"
    },
    "ུ": {
        "letter": "u"
    },
    "ེ": {
        "letter": "e"
    },
    "ོ": {
        "letter": "o"
    },
    "ཀ": {
        "letter": "ka"
    },
    "ཅ": {
        "letter": "ca"
    },
    "ཏ": {
        "letter": "ta"
    },
    "པ": {
        "letter": "pa"
    },
    "ཙ": {
        "letter": "tsa"
    },
    "ཞ": {
        "letter": "zha"
    },
    "ར": {
        "letter": "ra"
    },
    "ཧ": {
        "letter": "ha"
    },
    "ཁ": {
        "letter": "kha"
    },
    "ཆ": {
        "letter": "cha"
    },
    "ཐ": {
        "letter": "tha"
    },
    "ཕ": {
        "letter": "pha"
    },
    "ཚ": {
        "letter": "tsha"
    },
    "ཟ": {
        "letter": "za"
    },
    "ལ": {
        "letter": "la"
    },
    "ཨ": {
        "letter": "a"
    },
    "ག": {
        "letter": "ga"
    },
    "ཇ": {
        "letter": "ja"
    },
    "ད": {
        "letter": "da"
    },
    "བ": {
        "letter": "ba"
    },
    "ཛ": {
        "letter": "dza"
    },
    "འ": {
        "letter": "(')a"
    },
    "ཤ": {
        "letter": "sha"
    },
    "ང": {
        "letter": "nga"
    },
    "ཉ": {
        "letter": "nya"
    },
    "ན": {
        "letter": "na"
    },
    "མ": {
        "letter": "ma"
    },
    "ཝ": {
        "letter": "wa"
    },
    "ཡ": {
        "letter": "ya"
    },
    "ས": {
        "letter": "sa"
    },
}

const tibetanVowelsConsonantsDataArray = Object.keys(tibetanVowelsConsonantsMap);
const tibetanVowelsArray = tibetanVowelsConsonantsDataArray.slice(0, 4);


const tibetanChartData = {
    "1": { "subtitle": "Vowels", "content": tibetanVowelsArray },
    "2": { "subtitle": "Consonants", "content": tibetanVowelsConsonantsDataArray.slice(4, 34) },
}