// Operadores de incremento: formas de aumentar o valor de uma variável

let i = 0

// Loop while com incremento customizado
while (i < 10) {
    console.log(i) // Exibe: 0, 2, 4, 6, 8 (números pares até 10)
    i += 2 // Incrementa i em 2 a cada iteração (equivalente a i = i + 2)
    // Outras formas: i += 3 (incrementa em 3), i += 5 (incrementa em 5), etc.
}

// Loop for com incremento padrão
// i++ é equivalente a i += 1 ou i = i + 1
for(let i = 0; i < 10; i++) {
    console.log(i) // Exibe: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (incrementa de 1 em 1)
}

// Outros operadores de incremento:
// i++  : incrementa depois de usar o valor (pós-incremento)
// ++i  : incrementa antes de usar o valor (pré-incremento)
// i--  : decrementa depois de usar o valor (pós-decremento)
// --i  : decrementa antes de usar o valor (pré-decremento)
// i += n: incrementa i em n (i = i + n)
// i -= n: decrementa i em n (i = i - n)
// i *= n: multiplica i por n (i = i * n)
// i /= n: divide i por n (i = i / n)