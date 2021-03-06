const russianUpperCaseMap = {
    "А": { "letter": "a" },
    "Б": { "letter":"b"},
    "В": { "letter":"v"},
    "Г": { "letter":"g"},
    "Д": { "letter":"d"},
    "Е": { "letter": ["ye","je","e"]},
    "Ё": { "letter": ["yo","jo"]},
    "Ж": { "letter":"zh"},
    "З": { "letter":"z"},
    "И": { "letter":"i"},
    "Й": { "letter":["y","i","j"]},
    "К": { "letter":"k"},
    "Л": { "letter":"l"},
    "М": { "letter":"m"},
    "Н": { "letter":"n"},
    "О": { "letter":"o"},
    "П": { "letter":"p"},
    "Р": { "letter":"r"},
    "С": { "letter":"s"},
    "Т": { "letter":"t"},
    "У": { "letter":"u"},
    "Ф": { "letter":"f"},
    "Х": { "letter":["kh","h"]},
    "Ц": { "letter":["ts","c"]},
    "Ч": { "letter":"ch"},
    "Ш": { "letter":["sh","s"]},
    "Щ": { "letter":["shch","sch"]},
    "Ъ": { "letter":"-"},
    "Ы": { "letter":"y"},
    "Ь": { "letter":"-"},
    "Э": { "letter":["e","è"]},
    "Ю": { "letter":["yu","ju"]},
    "Я": { "letter":["ya","ja"]},
  }

const russianUpperCaseChartData = [
   { "subtitle": "", "content": russianUpperCaseMap }, 
]