// Operadores de comparação e lógicos que retornam valores booleanos

// Maior que (>): compara se 10 é maior que 2
console.log(10 > 2); // Retorna: true

// Menor que (<): compara se 10 é menor que 2
console.log(10 < 2); // Retorna: false

// Maior ou igual (>=): compara se 10 é maior ou igual a 2
console.log(10 >= 2); // Retorna: true

// Menor ou igual (<=): compara se 10 é menor ou igual a 2
console.log(10 <= 2); // Retorna: false

// Igualdade solta (==): compara valores com conversão automática de tipo
// Exemplo: '10' == 10 retornaria true (não recomendado usar ==)
console.log(10 == 2); // Retorna: false

// Desigualdade solta (!=): verifica se valores são diferentes (com conversão)
console.log(10 != 2); // Retorna: true

// Igualdade estrita (===): compara valores E tipos sem conversão (RECOMENDADO)
// Exemplo: '10' === 10 retornaria false (tipos diferentes)
console.log(10 === 2); // Retorna: false

// Desigualdade estrita (!==): verifica diferença de valor OU tipo
console.log(10 !== 2); // Retorna: true

// Operador AND (&&): retorna o último valor truthy ou o primeiro falsy
// Se o primeiro valor for truthy, retorna o segundo; caso contrário, retorna o primeiro
console.log(10 && 2); // Retorna: 2 (10 é truthy, então retorna 2)

// Operador OR (||): retorna o primeiro valor truthy ou o último falsy
// Se o primeiro valor for truthy, retorna ele; caso contrário, retorna o segundo
console.log(10 || 2); // Retorna: 10 (10 é truthy, então retorna 10)

// Operador NOT (!): converte o valor para booleano e inverte
// Valores truthy (números diferentes de 0, strings não vazias, etc.) viram false
// Valores falsy (0, '', null, undefined, NaN, false) viram true
console.log(!10); // Retorna: false (10 é truthy, então !10 é false)