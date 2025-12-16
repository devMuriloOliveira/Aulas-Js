// break: palavra-chave que interrompe imediatamente a execução de um loop
// Quando encontrado, o código sai do loop e continua após o bloco do loop
// Útil para parar um loop quando uma condição específica é atendida

// Loop que itera de 0 a 9 (10 iterações)
for(let i = 0; i < 10; i++) {
    // Solicita um nome ao usuário a cada iteração
    let nome = prompt("Digite um nome:")
    
    // Exibe o número da iteração atual
    console.log(i)
    
    // Verifica se o nome digitado é "Murilo"
    if (nome == "Murilo") {
        console.log("Nome encontrado") // Exibe quando encontra o nome
        break // INTERROMPE o loop imediatamente, mesmo que ainda haja iterações restantes
        // Após o break, o código continua após o fechamento do loop for
    }
    // Se o nome não for "Murilo", o loop continua para a próxima iteração
}