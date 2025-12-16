// Operador ternário: forma compacta de escrever if/else
// Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso
// Se a condição for verdadeira, retorna o primeiro valor; caso contrário, retorna o segundo

// Se 10 > 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 > 2 ? 'verdadeiro' : 'falso'); // Retorna: "verdadeiro"

// Se 10 < 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 < 2 ? 'verdadeiro' : 'falso'); // Retorna: "falso"

// Se 10 >= 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 >= 2 ? 'verdadeiro' : 'falso'); // Retorna: "verdadeiro"

// Se 10 <= 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 <= 2 ? 'verdadeiro' : 'falso'); // Retorna: "falso"

// Se 10 == 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 == 2 ? 'verdadeiro' : 'falso'); // Retorna: "falso"

// Se 10 != 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 != 2 ? 'verdadeiro' : 'falso'); // Retorna: "verdadeiro"

// Se 10 === 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 === 2 ? 'verdadeiro' : 'falso'); // Retorna: "falso"

// Se 10 !== 2 for verdadeiro, retorna 'verdadeiro', senão retorna 'falso'
console.log(10 !== 2 ? 'verdadeiro' : 'falso'); // Retorna: "verdadeiro"

// Se 10 && 2 for truthy (retorna 2), retorna 'verdadeiro', senão retorna 'falso'
console.log(10 && 2 ? 'verdadeiro' : 'falso'); // Retorna: "verdadeiro" (2 é truthy)

// Se 10 || 2 for truthy (retorna 10), retorna 'verdadeiro', senão retorna 'falso'
console.log(10 || 2 ? 'verdadeiro' : 'falso'); // Retorna: "verdadeiro" (10 é truthy)

// Se !10 for verdadeiro (false), retorna 'verdadeiro', senão retorna 'falso'
console.log(!10 ? 'verdadeiro' : 'falso'); // Retorna: "falso" (!10 é false)