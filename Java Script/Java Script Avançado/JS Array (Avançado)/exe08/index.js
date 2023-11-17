// Vamos aprender sobre forEach() ele é um for disponivel apenas em arrays

// forEach é similar as metodos map reduce e filter na questao dos parametros, ele tambem possui
//  forEach(valor, indice, array)

const numeros = [1 , 3 , 50 , 40 , 55 , 60 , 7 , 87 , 5 , 4, 7 , 12]

const testParametros = numeros.forEach((valor, indice, array) => {
    //console.log(valor, indice, array)
})


// Ele serve a apenas para iterar sobre o array assim como os outros fors porem ele é um metodo

let total  = 0;
const somar = numeros.forEach((valor) => {total += valor})

console.log(total)

// Enfim forEach é util para diversa tipos de iterações dentro de arrays

 

