// continue: palavra-chave que pula o restante da iteração atual do loop
// Quando encontrado, o código volta para o início do loop e continua com a próxima iteração
// Útil para pular certas iterações baseado em uma condição

// Loop que itera de 0 a 10 (11 iterações)
for(let i = 0; i <= 10; i++) {
    // Operador módulo (%): retorna o resto da divisão
    // Se i % 2 == 0, significa que i é um número par (divisível por 2)
    if (i % 2 == 0) {
        console.log("Número par") // Exibe para números pares: 0, 2, 4, 6, 8, 10
        continue // PULA o restante do código desta iteração e vai para a próxima
        // O console.log(i) abaixo NÃO será executado para números pares
    }
    
    // Este código só será executado para números ímpares (1, 3, 5, 7, 9)
    console.log(i) // Exibe apenas os números ímpares
}