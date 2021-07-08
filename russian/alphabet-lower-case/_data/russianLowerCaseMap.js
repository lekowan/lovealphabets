const russianLowerCaseMap = {
    "а": { "letter":"a" },
    "б": { "letter":"b" },
    "в": { "letter":"v" },
    "г": { "letter":"g" },
    "д": { "letter":"d" },
    "е": { "letter":["ye","je","e"] },
    "ё": { "letter":["yo","jo"] },
    "ж": { "letter":"zh" },
    "з": { "letter":"z" },
    "и": { "letter":"i" },
    "й": { "letter":["y","i","j"] },
    "к": { "letter":"k" },
    "л": { "letter":"l" },
    "м": { "letter":"m" },
    "н": { "letter":"n" },
    "о": { "letter":"o" },
    "п": { "letter":"p" },
    "р": { "letter":"r" },
    "с": { "letter":"s" },
    "т": { "letter":"t" },
    "у": { "letter":"u" },
    "ф": { "letter":"f" },
    "х": { "letter": ["kh","h"] },
    "ц": { "letter": ["ts","c"] },
    "ч": { "letter":"ch" },
    "ш": { "letter": ["sh","s"] },
    "щ": { "letter": ["shch","sch"] },
    "ъ": { "letter": "-" },
    "ы": { "letter":"y" },
    "ь": { "letter": "-" },
    "э": { "letter": ["e","è"] },
    "ю": { "letter": ["yu","ju"] },
    "я": { "letter": ["ya","ja"] },
}

const russianLowerCaseChartData = [
   { "subtitle": "", "content": russianLowerCaseMap },
]