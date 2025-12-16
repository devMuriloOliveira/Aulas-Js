// Operadores lógicos combinados com comparações
// Os operadores lógicos avaliam expressões e retornam valores booleanos

// AND (&&): retorna true apenas se AMBAS as condições forem verdadeiras
console.log(10 > 2 && 10 < 2); // Retorna: false (primeira é true, segunda é false)

// OR (||): retorna true se PELO MENOS UMA das condições for verdadeira
console.log(10 > 2 || 10 < 2); // Retorna: true (primeira condição é true)

// NOT (!): inverte o resultado booleano da expressão
console.log(!(10 > 2)); // Retorna: false (10 > 2 é true, então !true é false)
console.log(!(10 < 2)); // Retorna: true (10 < 2 é false, então !false é true)

// Negação de maior ou igual
console.log(!(10 >= 2)); // Retorna: false (10 >= 2 é true, então !true é false)

// Negação de menor ou igual
console.log(!(10 <= 2)); // Retorna: true (10 <= 2 é false, então !false é true)

// Negação de igualdade solta
console.log(!(10 == 2)); // Retorna: true (10 == 2 é false, então !false é true)

// Negação de desigualdade solta
console.log(!(10 != 2)); // Retorna: false (10 != 2 é true, então !true é false)

// Negação de igualdade estrita
console.log(!(10 === 2)); // Retorna: true (10 === 2 é false, então !false é true)

// Negação de desigualdade estrita
console.log(!(10 !== 2)); // Retorna: false (10 !== 2 é true, então !true é false)

// Negação do resultado do operador AND
console.log(!(10 && 2)); // Retorna: false (10 && 2 retorna 2 que é truthy, então !truthy é false)

// Negação do resultado do operador OR
console.log(!(10 || 2)); // Retorna: false (10 || 2 retorna 10 que é truthy, então !truthy é false)

// Dupla negação: nega duas vezes, efetivamente convertendo para booleano
console.log(!(!10)); // Retorna: true (!10 é false, então !false é true)