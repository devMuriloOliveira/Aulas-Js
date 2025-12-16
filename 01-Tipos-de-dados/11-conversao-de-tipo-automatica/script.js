// Conversão automática de tipos (type coercion) em JavaScript
// JavaScript tenta converter tipos automaticamente para realizar operações

// Quando usamos + com uma string e um número, o JavaScript converte o número em string
// e realiza concatenação ao invés de adição matemática
console.log('5' + 5); // Exibe: "55" (string "5" concatenada com número 5 convertido para "5")

// Verificando o tipo do resultado da operação anterior
console.log(typeof ('5' + 5)); // Retorna: "string" (resultado da concatenação é sempre string)

// Mesmo comportamento: qualquer string + número resulta em concatenação
console.log(typeof ('asdsd' + 5)); // Retorna: "string" (número 5 é convertido para "5" e concatenado)