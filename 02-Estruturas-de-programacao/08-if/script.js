// Estrutura condicional if: executa um bloco de código apenas se a condição for verdadeira
// Sintaxe: if (condição) { código a executar }

let idade = 19

// Se a idade for maior que 18, executa o código dentro das chaves
if (idade > 18) {
    console.log("Você é maior de idade") // Exibe: Você é maior de idade
}

// Esta condição nunca será verdadeira (19 não é maior que 22)
// Portanto, nada será exibido
if (idade > 22) {
    console.log("Você é menor de idade") // Não será executado
}

// Operador AND (&&): ambas as condições devem ser verdadeiras
// Verifica se idade é maior que 18 E menor que 22
if (idade > 18 && idade < 22) {
    console.log("Você é maior de idade e menor de 22 anos") // Exibe a mensagem
}

// Operador OR (||): pelo menos uma condição deve ser verdadeira
// Verifica se idade é maior que 18 OU menor que 22
// Como 19 > 18 é true, a condição é verdadeira mesmo que 19 < 22 também seja true
if (idade > 18 || idade < 22) {
    console.log("Você é maior de idade ou menor de 22 anos") // Exibe a mensagem
}