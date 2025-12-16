// JavaScript possui três formas de declarar variáveis: var, let e const

// var: declaração antiga (ES5), tem escopo de função e pode ser redeclarada
// Hoje em dia não é recomendado usar var, prefira let ou const
var nome = "Murilo"

// let: declaração moderna (ES6), tem escopo de bloco e pode ser reatribuída
// Use quando o valor precisa mudar durante a execução do código
let idade = 18

// const: declaração moderna (ES6), tem escopo de bloco e NÃO pode ser reatribuída
// Use quando o valor não vai mudar (constante)
const altura = 1.75

// Exibe os valores das variáveis no console
console.log(nome)    // Exibe: Murilo
console.log(idade)   // Exibe: 18
console.log(altura)   // Exibe: 1.75
