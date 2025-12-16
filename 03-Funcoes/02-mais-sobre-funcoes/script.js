function multiplicacao(a, b, e) {
    return a * b * e
}

console.log(multiplicacao(1, 2, 3))

const mult = multiplicacao(1, 2, 3)
console.log(`O resultado da multiplicação é ${mult}`)

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh === true) {
        return 'Pode dirigir'
    } else if(idade >= 18 && cnh === false) {
        return 'Não pode dirigir'
    } else if(idade < 18 && cnh === true) {
        return 'Não pode dirigir'
    } else {
        return 'Não pode dirigir'
    }
}

console.log(podeDirigir(18, true))
console.log(podeDirigir(17, false))
console.log(podeDirigir(16, true))
console.log(podeDirigir(15, false))