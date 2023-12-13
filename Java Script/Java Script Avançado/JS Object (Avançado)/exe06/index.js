// Vamos aprender agora como manipular os prototypes em JS

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chaveC: 'C'
}

// Para que os object B e C tenha herança de A, temos um metodo expecifico que ser justamente para manipular 
// prototype de cada object, esse metodo tem seguinte sintaxce : Object.setPrototypeof(objeto1, objeto2) ou seja o valor
// do prototype do objeto1 agora é o objeto2 veja o codigo de exemplo 

Object.setPrototypeOf(objB, objA) // Agora o proto de B e o A

Object.setPrototypeOf(objC, objB) // Agora o valor de pode ser acessado por C e B e o valor de B pode ser acessado por C

console.log(objB.chaveA) // A
console.log(objC.chaveB, objC.chaveA)// B A

// Ou seja é uma herança em cadeia que vai de um objeto pai para um objeto filho ou de um para outro em cadeia sendo passado pelo proto
// de cada objeto

// Conclusão disso é que podemos herdar codigos de um objeto pra outro isso é poderoso demais, e serve para melhorar performace e criar 
// objetos complexos com mais facilidade


// Vamos agora para outro exemplo de manipulação de herança(prototype) atraves do JS. 

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
  return  this.preco = this.preco - (this.preco * (percentual / 100) )
}

Produto.prototype.aumento = function(percentual){
    return  this.preco = this.preco + (this.preco * (percentual / 100) )
  }

const Eletrônico = new Produto ('Mouse', 100)

console.log(Eletrônico.desconto(30)) // Ou seja diminui o preço do mouse em 30%

console.log (Eletrônico.aumento(100)) // Agora dobrei o preço do mouse era 70 por causa dos 30% de desconto agora é 140

// Outro exemplo vamos cria um object literal com as mesma chaves das proriedades utilizada na constructor Produto
// assim vamos utilizar os metodos que esta no proto da Produto em objeto literal, passando atraves de setPrototypeof

const produtoLiteral = {
    nome: 'Teclado',
    preco: '150'
}

Object.setPrototypeOf(produtoLiteral, Produto.prototype)

produtoLiteral.desconto(100) // Resultado 0 herança funcionando

console.log(produtoLiteral)

/* Tambem é possivel criar um objeto que ja tenha um o protype setado no momento da criação atraves do metodo 
Object.create(pai.prototype,{
  chave: {defineproperty}
 } ) */

const produto = Object.create(Produto.prototype,{
   nome: {
    writable:true,
    configurable: true ,
    enumerable : true,
    value: 'PC Gamer'
   },

   preco:{
    writable:true,
    configurable: true ,
    enumerable : true,
    value: 1500
   }
})

produto.aumento(100)

console.log(produto) // Valor 3000 herança funcionando desse jeito tambem