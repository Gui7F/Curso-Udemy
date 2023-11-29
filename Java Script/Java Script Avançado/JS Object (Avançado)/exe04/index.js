// Nesta aula vamos estudar metodos uteis para object 


// Já vimos:
// Object.keys(retorna as propriedades(chaves))
// Object.freeze(congela o objeto)
// Object.defineProperty(define uma propriedade)
// Object.defineProperties(define varias propriedades)



// Vamos ver agora:
// Object.values
//Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(object, 'propriedade')
// Object ...(spread)

const produto = {
    nome: 'Canceca',
    preco: 19.99
}

//const produto02 = produto // Aqui o valor esta sendo passado por referencia
const produto02 = {...produto} // Aqui eu copiei o produto pra dentro de um novo objeto e atribui a produto02

produto02.nome = 'Bule'
produto02.preco = 20.55

console.log(produto, produto02) 

// Como sabemos arrays e objects são passados por referencia tanto produto e produto02 tem o mesmo valor na memoria
// Agora vamos aprender como copia o object e produto pra dentro de produto02, pra ai sim ser dois objects distintos


// Outro modo de copiar um object é com object.assing(destino{}, object que vai copiar, any= qualquer coisa)

const produto03 = Object.assign({}, produto)
produto03.nome = 'Jarra'
produto03.preco = 10.50
console.log(produto03)


// Agora vamos para o Object.getOwnPropertyDescriptor(), ele serve para ver a descrição dos valores de definição
// os mesmo valores que manipulamos com defineProrperty, value, enumerable, configurable...

console.log(Object.getOwnPropertyDescriptor(produto03, 'nome')) // Ou seja aqui consigo ver como ta as definições de 'nome'

// Agora Object.values que simplesmente retorna os valores das prorpriedades, em um array

console.log(Object.values(produto03)) // Aqui valores da proprieda
console.log(Object.keys(produto03)) // Aqui as chaves da propriedae]

// Agora ver os dois juntos dentro de um array usa o entries

console.log(Object.entries(produto03))
