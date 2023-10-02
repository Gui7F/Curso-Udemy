const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Ribeiro',
    idade : 24 ,
    endereço : {
        rua: 'Luiz Borges',
        numero : 125
    }
}
//Atribuição via desestruturação Object{}
const {nome, sobrenome, idade , endereço:{rua, numero}} = pessoa
console.log(nome, sobrenome,idade , rua , numero)

// tambem é possivel utilizar o rest no object como nos arrays
