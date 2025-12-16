let idade = prompt('Digite a sua idade:')
let possuiHabilitacao = prompt('Você possui habilitação? (s/n):')

if(idade >= 18 && possuiHabilitacao == 's'){
    alert('Você pode dirigir')
}else if(idade >= 18 && possuiHabilitacao == 'n'){
    alert('Você não pode dirigir')
}else{
    alert('Você não pode dirigir')
}