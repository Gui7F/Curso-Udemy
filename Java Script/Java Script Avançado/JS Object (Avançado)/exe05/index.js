// Nesta aula vamos aprender sobre os prototipos (prototype), o JavaScript é baseado em prototipos que servem 
// para passar propriedades e metodos de um object para outro


// Todos os objetos tem uma referencia interna para um prototipo(___proto___), que vem da propriedade 
// prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de uma objeto 
// primeiro a engine do JS tenta encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada
// caso não encontre no proprio objeto

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const pessoa = new Pessoa('Jona', 'Hill') // Pessoa = function constructor 
const data = new Date() // Date = function constructor

console.log(pessoa)
console.dir(data)

// Mesmo data tento varios metodos nenhum aparace de fato no console do navegador não dentro de Date(), porque na 
// verdade essa data que criamos vem de um outro object pai que possui os metodos de Date(), e então passa para 
// data que estamos criando, atraves do proto(prototypes)


Pessoa.prototype.nomeCompleto = function (){
   return this.nome +' '+ this.sobrenome
} 

// A vantagem de utilizar os prototypes é clara, criamos apenas um metodo que serve para todos os objetos que criarmos 
// com a função construtora Pessoa(), vamos fazer alguns testes abaixo criando 

const pessoa2 = new Pessoa ('Bruce', 'Wayne')

console.log(pessoa2.nomeCompleto())

// Ou seja tanto pessoa quanto pessoa2 recebe por herança o metodo nomeCompleto 

// A cadeia de busca da engine é assim 

// 1 a instancia neste caso pessoa2  == não encontrou
// 2 a função construtora == não encontrou 
// 3 o proto da instancia == encontrou 

// Ai caso não encontrace ela buscaria no Object.prototype que é o pai de todos os objetos em Java Script.

