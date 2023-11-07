//Vamos fala sobre Splice um metodo que faz as mesma coisas que pop(), push(), shift() e unshift() e mais um pouco
// Os parametro tem a seguinte funções:
//nome.splice(indice, deleteQntd, elem1, elem2, elem3)
// primeiro parametro é o indice onde quero começar a mexer no array
// segundo é a quantidade de elemento que quero remover do array
// e os parametros seguintes serve para ir adicionando elementos no array

//                0       1        2         3        4
const nomes = ['Elie', 'Joel', 'Kratos', 'Nathan', 'Lara']
console.log(nomes)

// Vamos fazer oque pop() faz remover o ultimo elemento

nomes.splice(4, 1)
console.log(nomes)

// Lara foi removida do index 4 e quantidade é 1

// Tambem assim como pop(), o valor removido é retornado porem em um novo array veja o exemplo

const nomes2 = ['Elie', 'Joel', 'Kratos', 'Nathan', 'Lara']

const removidos = nomes2.splice(0, 2)
console.log(nomes2, removidos)

// A Elie e o Joel agora estão salvos em removidos em um novo array

// Vamos fazer oque push(), shift () e unshift () faz:

const nomes3 = ['Elie', 'Joel', 'Kratos', 'Nathan', 'Lara']

nomes3.splice(nomes3.length , 0 , 'Peter')
console.log(nomes3) // Ou seja coloquei o indice 5, removi 0, e add o Peter

// Vamos fazer o unshift()

nomes3.splice(0, 0 , 'Tsuchima')
console.log(nomes3) // Ou seja no indice 0, remove 0  e add o Tsuchima, como faria o unshift()

// Vamos fazer o shift()

nomes3.splice(0 , 1 )
console.log(nomes3) // Ou seja no indice 0, remove 1 elemento, como faria o shift()


