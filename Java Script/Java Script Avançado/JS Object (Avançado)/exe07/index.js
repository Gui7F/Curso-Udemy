// Vamos aprender como funciona a herança dentro do JS 
      // Abstração
// Produtos = caracteristicas genericas 
// Camiseta, PC Gamer


function Produto (nome, preco){
 this.nome = nome
 this.preco = preco

}

Produto.prototype.aumento = function (valor){
    this.preco += valor
}
Produto.prototype.desconto = function (valor){
    this.preco -= valor
}

function Camiseta (nome,preco, cor){
  Produto.call(this, nome, preco)
  this.cor = cor

}

Camiseta.prototype = Object.create(Produto.prototype)



const adidas = new Camiseta ('Polo', 10 , 'Azul')

adidas.aumento(10)
console.log(adidas)


// Ou seja a herança entre funçoes constructor atraves de prototype funciona muito bem, Camiseta herda os atributos
// de Produto, e por ser outra constructor pode ter outras caracteristicas unicas de Camiseta 

// Vamos fazer mais uma agora com o segundo produto

function Computador(nome, preco, cpu, gpu){
    Produto.call(this, nome, preco)
    this.cpu = cpu
    this.gpu= gpu
}

Computador.prototype = Object.create(Produto.prototype)

const amdRyzen = new Computador('Gamer', 3500, 'Ryzen 5500','rtx 4060');
amdRyzen.aumento(500)
console.log(amdRyzen)