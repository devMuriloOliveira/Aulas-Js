// Indentação: espaçamento usado para organizar o código e mostrar hierarquia
// Código dentro de blocos (chaves {}) deve ser indentado para melhor legibilidade
// A indentação ajuda a identificar quais linhas pertencem a quais blocos

let x = 0
let y = 0

// Primeiro nível: estrutura if externa
if (x == 0 && y == 0) {
    // Segundo nível: código dentro do primeiro if (indentado com 4 espaços ou 1 tab)
    let z = 5
    
    // Segundo nível: estrutura if aninhada (dentro do primeiro if)
    if (z > 3) {
        // Terceiro nível: código dentro do segundo if
        console.log(z) // Exibe: 5

        // Terceiro nível: loop for dentro do segundo if
        for (let i = 0; i < 10; i++) {
            // Quarto nível: código dentro do loop for
            console.log(i) // Exibe: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

            // Quarto nível: estrutura if dentro do loop for
            if (i == 5) {
                // Quinto nível: código dentro do if aninhado no loop
                console.log(i) // Exibe: 5 (quando i for igual a 5)
            }
        }
    }
}