// Estrutura condicional if/else if/else: permite verificar múltiplas condições
// Sintaxe: if (condição1) { código } else if (condição2) { código } else { código }
// As condições são verificadas em ordem, e apenas o primeiro bloco verdadeiro é executado

let idade = 19

// Verifica a primeira condição: se idade é maior que 18
if (idade > 18) {
    console.log("voto obrigatório") // Exibe: voto obrigatório (idade é 19)
}
// Se a primeira condição for falsa, verifica esta segunda condição
// Verifica se idade é menor que 18 E maior que 16 (voto opcional para 16-17 anos)
else if (idade < 18 && idade > 16) {
    console.log("voto opcional") // Não será executado (idade é 19)
}
// Se nenhuma das condições anteriores for verdadeira, executa este bloco
else {
    console.log("não pode votar") // Não será executado (idade é 19)
}