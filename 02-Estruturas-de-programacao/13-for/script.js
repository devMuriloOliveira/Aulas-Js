// Solicita um número ao usuário através de uma caixa de diálogo
let numero = prompt("Digite um número para ver a tabuada:")

// parseInt(): converte uma string para um número inteiro
// Necessário porque prompt() sempre retorna uma string
numero = parseInt(numero)

// Loop for: estrutura de repetição mais comum e compacta
// Sintaxe: for (inicialização; condição; incremento) { código }
// - Inicialização: executa uma vez no início
// - Condição: verifica antes de cada iteração
// - Incremento: executa após cada iteração

// i começa em 0, continua enquanto i <= 10, e incrementa i em 1 a cada iteração
for (let i = 0; i <= 10; i++) {
    // Exibe a tabuada usando template literal
    // Multiplica o número informado pelo valor atual de i
    console.log(`${numero} x ${i} = ${numero * i}`)
    // Exemplo se numero = 5: "5 x 0 = 0", "5 x 1 = 5", "5 x 2 = 10", etc.
}