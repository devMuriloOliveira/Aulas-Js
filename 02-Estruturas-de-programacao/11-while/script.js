// Loop while: repete um bloco de código enquanto uma condição for verdadeira
// Sintaxe: while (condição) { código a repetir }
// IMPORTANTE: certifique-se de que a condição eventualmente se torne falsa,
// caso contrário terá um loop infinito

// Inicializa a variável contador com o valor 0
let contador = 0

// Enquanto contador for menor que 10, executa o bloco
while (contador < 10) {
    console.log(contador) // Exibe o valor atual do contador (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    contador++ // Incrementa contador em 1 (equivalente a contador = contador + 1)
    // Quando contador chegar a 10, a condição se torna falsa e o loop para
}