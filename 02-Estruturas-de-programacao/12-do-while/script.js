// Loop do-while: similar ao while, mas garante que o bloco seja executado
// pelo menos UMA VEZ antes de verificar a condição
// Sintaxe: do { código } while (condição)
// Útil quando você precisa executar o código pelo menos uma vez

let x = 0

// Executa o bloco primeiro, depois verifica a condição
do {
    console.log("O valor de x é: " + x) // Exibe: O valor de x é: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    x++ // Incrementa x em 1
} while (x < 10) // Verifica se x é menor que 10, se sim, repete o bloco

// Diferença do while: mesmo que x já fosse >= 10, o bloco seria executado uma vez