// Vamos estudar metodos que fazem o mesmo que o freeze () 
// Porem podendo selecionar ou uma propriedade com defineProperty
// Ou varias com defineProperties 

function Produto (nome, preco, estoque) {
   this.nome = nome; // Publico
   this. preco = preco // Publico
   //this.estoque = estoque 

   Object.defineProperty(this, 'estoque',{
    enumerable: true , // Aqui controla se pode ou não ser exibida
    value: estoque, // Aqui controla se pode ou não receber os valores
    writable : false, // Aqui controla se o valor pode ou não ser alterado
    configurable: true // Aqui controla se é pode ser reconfigurada ou não 
   })
// Aqui estou definindo que prop estoque é inumeravel e que os valor tambem é recebido por ela ou seja estou definindo
// oque ela deve fazer, no caso estou fazendo mesmo que this.estoque = 'estoque', mesmo comportamento



Object.defineProperty(this, 'estoque',{
    enumerable: true , // Aqui controla se pode ou não ser exibida
    value: estoque, // Aqui controla se pode ou não receber os valores
    writable : true, // Aqui controla se o valor pode ou não ser alterado
    configurable: false // Aqui controla se é pode ser reconfigurada ou não 
   })

// Ou seja alterando o valor configurable eu defino se vou poder ou não reconfigurar ela, ou seja se configurable for true na primeira definição
// mesmo writable sendo false na primeira , se eu mudo pra true na segunda ela é reconfigurada já que o configurable esta true na primeira
// Se eu mudo o configurable da primeira definição para false gera um execessão um erro, cannot redefine property: 'estoque'
}

const p1 = new Produto('Camiseta', 20 , 3)
p1.estoque = 10
console.log(p1)

// Outro detalhe de configurable é se estive false você não pode apagar sem redefinir as propriedades,
// ou seja vamos tentar apagar uma a propriedade estoque ja que esta true na primeira, e false na segunda o estoque nao 
//  sera apagado so se estiver true nos dois

delete p1.estoque
console.log(p1)

// Agora vamos ver o defineProperties

function Reservas (nome, horario, grupo){
    Object.defineProperties(this, {
        nome:{
            enumerable: true , 
            value: nome, 
            writable : true, 
            configurable: false
        }, 
        horario: {
            enumerable: true , 
            value: horario, 
            writable : true, 
            configurable: true
        }, 
        grupo: {
            enumerable: true , 
            value: grupo, 
            writable : true, 
            configurable: true
        }
    })
}

const reserva1 = new Reservas ('Restaurante Sã Louis', '13:20', 'Prioridade 1 ')
console.log(reserva1)

// Ou seja essa funções serve para você ter um controle maior sobre as propriedades dos objects podendo criar uma 
// configuração para cada propriedade. É para algo onde o controle sobre o comportamento das propriedades é essencial
