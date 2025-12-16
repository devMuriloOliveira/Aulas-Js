// Estrutura condicional if/else: executa um bloco se a condição for verdadeira,
// ou outro bloco se a condição for falsa
// Sintaxe: if (condição) { código se verdadeiro } else { código se falso }

let idade = 19

// Se idade > 18 for verdadeiro, executa o primeiro bloco
// Caso contrário, executa o bloco do else
if (idade > 18) {
    console.log("Você é maior de idade") // Exibe: Você é maior de idade
} else {
    console.log("Você é menor de idade") // Não será executado neste caso
}

// Esta condição é impossível: idade não pode ser maior que 22 E menor que 18 ao mesmo tempo
// Portanto, sempre executará o bloco else
if (idade > 22 && idade < 18) {
    console.log("Você é maior de idade e menor de 22 anos") // Nunca será executado
} else {
    console.log("Você é menor de idade e maior de 22 anos") // Sempre será executado
}