// prompt(): função que exibe uma caixa de diálogo para o usuário inserir dados
// Retorna sempre uma STRING, mesmo que o usuário digite números

// Exibe uma caixa de diálogo pedindo a idade e armazena a resposta na variável
let idade = prompt("Qual a sua idade?")
// Exibe a idade usando template literal
console.log(`A idade do usuário é ${idade}`)

// Exibe uma caixa de diálogo pedindo o nome e armazena a resposta na variável
let nome = prompt("Qual o seu nome?")
// Exibe o nome usando template literal
console.log(`O nome do usuário é ${nome}`)

// Exibe ambas as informações juntas usando template literal
console.log(`A idade do usuário é ${idade} e o nome é ${nome}`)