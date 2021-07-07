const greekLowerCaseMap = {
    "α": { "letter": "a" },
    "β": { "letter": "v" },
    "γ": { "letter": "g" },
    "δ": { "letter": "d" },
    "ε": { "letter": "e" },
    "ζ": { "letter": "z" },
    "η": { "letter": "ī" },
    "θ": { "letter": "th" },
    "ι": { "letter": "i" },
    "κ": { "letter": "k" },
    "λ": { "letter": "l" },
    "μ": { "letter": "m" },
    "ν": { "letter": "n" },
    "ξ": { "letter": "x" },
    "ο": { "letter": "o" },
    "π": { "letter": "p" },
    "ρ": { "letter": "r" },
    "σ": { "letter": "s" },
    "ς": { "letter": "s" },
    "τ": { "letter": "t" },
    "υ": { "letter": "y" },
    "φ": { "letter": "f" },
    "χ": { "letter": "ch" },
    "ψ": { "letter": "ps" },
    "ω": { "letter": "ō" }
}

const greekLowerCaseDataArray = Object.keys(greekLowerCaseMap);

const greekLowerCaseChartData = [
   { "subtitle": "Lowercase letters", "content": greekLowerCaseDataArray }, 
]