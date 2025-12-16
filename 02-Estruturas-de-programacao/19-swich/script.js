// switch: estrutura condicional que verifica múltiplos valores de uma variável
// Mais limpo e legível que múltiplos if/else if quando comparando o mesmo valor
// Sintaxe: switch (variável) { case valor: código break; default: código }

let dia = 1

// Verifica o valor da variável 'dia'
switch (dia) {
    // Se dia for igual a 1, executa este bloco
    case 1:
        console.log("Domingo") // Exibe: Domingo
        break // IMPORTANTE: break interrompe a execução e sai do switch
        // Sem o break, o código continuaria executando os próximos cases (fall-through)
    
    // Se dia for igual a 2, executa este bloco
    case 2:
        console.log("Segunda-feira")
        break
    
    // Se dia for igual a 3, executa este bloco
    case 3:
        console.log("Terça-feira")
        break
    
    // default: executado quando nenhum case corresponde ao valor
    // É opcional, mas útil para tratar valores inesperados
    default:
        console.log("Dia inválido")
        break
}