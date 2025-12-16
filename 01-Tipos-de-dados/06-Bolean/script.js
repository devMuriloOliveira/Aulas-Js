// Boolean é um tipo de dado que representa apenas dois valores: true (verdadeiro) ou false (falso)

// Valores booleanos literais
console.log(true); // Exibe: true
console.log(false); // Exibe: false

// Operadores de comparação retornam valores booleanos

// Maior que (>): verifica se o primeiro número é maior que o segundo
console.log(10 > 2); // Retorna: true (10 é maior que 2)

// Menor que (<): verifica se o primeiro número é menor que o segundo
console.log(10 < 2); // Retorna: false (10 não é menor que 2)

// Maior ou igual (>=): verifica se o primeiro número é maior ou igual ao segundo
console.log(10 >= 2); // Retorna: true (10 é maior que 2)

// Menor ou igual (<=): verifica se o primeiro número é menor ou igual ao segundo
console.log(10 <= 2); // Retorna: false (10 não é menor ou igual a 2)

// Igualdade solta (==): compara valores convertendo tipos se necessário (não recomendado)
console.log(10 == 2); // Retorna: false (10 não é igual a 2)

// Desigualdade solta (!=): verifica se os valores são diferentes (com conversão de tipo)
console.log(10 != 2); // Retorna: true (10 é diferente de 2)

// Igualdade estrita (===): compara valores E tipos sem conversão (recomendado)
console.log(10 === 2); // Retorna: false (10 não é igual a 2)

// Desigualdade estrita (!==): verifica se valores ou tipos são diferentes
console.log(10 !== 2); // Retorna: true (10 é diferente de 2)

// Operador lógico AND (&&): retorna o último valor "truthy" ou o primeiro "falsy"
console.log(10 && 2); // Retorna: 2 (ambos são truthy, retorna o último)

// Operador lógico OR (||): retorna o primeiro valor "truthy" ou o último "falsy"
console.log(10 || 2); // Retorna: 10 (primeiro valor truthy encontrado)

// Operador lógico NOT (!): inverte o valor booleano (negação)
console.log(!10); // Retorna: false (10 é truthy, então !10 é false)