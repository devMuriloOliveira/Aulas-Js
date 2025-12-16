// Strings avançadas: diferentes formas de trabalhar com texto em JavaScript

// \n é um caractere de escape que cria uma quebra de linha
console.log('Primeira linha \n Segunda linha');
// Exibe:
// Primeira linha
//  Segunda linha

// Usando aspas duplas, podemos incluir aspas simples dentro da string sem problemas
console.log("o meu nome é 'João'"); // Exibe: o meu nome é 'João'

// Template literals (backticks `) permitem interpolação de variáveis e expressões usando ${}
// Qualquer expressão JavaScript dentro de ${} será avaliada e convertida em string
console.log(`a soma de 1 + 1 é ${1 + 1}`); // Exibe: a soma de 1 + 1 é 2

// Concatenação de strings: o operador + une múltiplas strings em uma única string
console.log('o' + 'meu' + 'nome' + 'é' + 'João'); // Exibe: omenomeéJoão
// Nota: sem espaços entre as strings, elas ficam juntas. Para espaços, use: 'o' + ' ' + 'meu'...