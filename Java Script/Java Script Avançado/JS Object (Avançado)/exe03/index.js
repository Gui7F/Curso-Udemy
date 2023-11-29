// Nesta aula vamos aprender como funciona os Getters e Setters
// 


function Produto(nome, preco, estoque) {
    this.nome = nome; // Publico
    this.preco = preco // Publico
    //this.estoque = estoque 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Aqui controla se pode ou não ser exibida
        configurable: true, // Aqui controla se é pode ser reconfigurada ou não 
        get: function () {
            return estoque  // Agora estoque é uma propriedade dentro da fuction get 
        },
        set: function (valor) {  // O parametro valor é qualquer valor que for atribuido á estoque de qualquer object criado
            if (typeof valor !== 'number') { // pela function constructor Produto
                //throw new TypeError('Valor de estoque so pode ser numeros')
            }
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1.estoque) // Aqui mostro que valor foi protegido pelo set, e pego pelo get quando ele retornou esse valor.
p1.estoque = 'Qualquer valor'

// O get serve para pegar o valor e retornar
// O set serve para setar o valor na memoria ou seja quando valor é atribuido a alguma propriedade, variavel ou fuction

// Agora imagine que queremos validar o valor recebido em estoque, para apenas poder ser um numero nada mais
// ai utilizamos oque esta sendo feito no set acima.

// Ou seja no momento de settar o valor foi validado e deu false.


// Agora vamos ver em factory o get e set 

// Diferente da constructor fuction podemos colocar o get e set direto no object 
// ja na constructor temos que esta dentro de uma definePropety ou difeneProperties

function criaProduto (nome){
    return {
        get nome(){
            return nome
        },
        set nome (valor){
            if(typeof valor !== 'string'){
                //throw new TypeError ('Valor de nome so pode ser string')
            }
        }
    }
}

const p2 = criaProduto('Camiseta Adidas')
p2.nome = 123 
console.log(p2.nome)

// Mesmo validação feita com factory function, ai é so tira o comentário para ver os erros no seu console.