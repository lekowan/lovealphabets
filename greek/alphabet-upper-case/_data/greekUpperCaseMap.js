const greekUpperCaseMap = {
    "Α": { "letter" :  "a" },
    "Β": { "letter" :  "v" },
    "Γ": { "letter" :  "g" },
    "Δ": { "letter" :  "d" },
    "Ε": { "letter" :  "e" },
    "Ζ": { "letter" :  "z" },
    "Η": { "letter" :  "ī" },
    "Θ": { "letter" :  "th" },
    "Ι": { "letter" :  "i" },
    "Κ": { "letter" :  "k" },
    "Λ": { "letter" :  "l" },
    "Μ": { "letter" :  "m" },
    "Ν": { "letter" :  "n" },
    "Ξ": { "letter" :  "x" },
    "Ο": { "letter" :  "o" },
    "Π": { "letter" :  "p" },
    "Ρ": { "letter" :  "r" },
    "Σ": { "letter" :  "s" },
    "Τ": { "letter" :  "t" },
    "Υ": { "letter" :  "y" },
    "Φ": { "letter" :  "f" },
    "Χ": { "letter" :  "ch" },
    "Ψ": { "letter" :  "ps" },
    "Ω": { "letter" :  "ō" }
}

const greekUpperCaseDataArray = Object.keys(greekUpperCaseMap);

const greekLowerCaseChartData = {
   "1": { "subtitle": "Uppercase letters", "content": greekUpperCaseDataArray }, 
}