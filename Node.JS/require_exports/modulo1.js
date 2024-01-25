// Vamos começar a sessão de node.js, o node é um objeto normal com algumas propriedades especiais
// vamos aprender a exportar dados e importar em uma aplicação central. 
// primeiro vamos dar um log no node para ver como ele é 

console.log(module.exports) // um objeto vazio 

function criaProduto (nome, preço, modelo){
    this.nome = nome
    this.preço = preço
    this.modelo = modelo
}

const p1 = new criaProduto('PC', 'R$5000', 'GAMER')

exports.produto1 = p1 // o nome que vou usar para exportar nao precisa ser o mesmo da instância

const nome = 'Eloa'
const sobrenome = 'Jeronymo'

module.exports.nome = nome //Isso tambem é um jeito de exportar o dado
exports.sobrenome = sobrenome // Assim tambem é outra maneira

this.tantoFaz = 'Aleatorio' //O this neste contexto aponta para module.export que é o objeto node

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

exports.classPessoa = Pessoa;
