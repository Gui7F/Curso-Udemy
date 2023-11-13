// Vamos aprender sobre Filter, uma função muito importante dos arrays 

// Retorne os numeros maiores que 10
const numeros = [1 , 3 , 50 , 40 , 55 , 60 , 7 , 87 , 5 , 4, 7 , 12]

// Primeiro vamos fazer da forma longa e depois retafatorada

function callbackF(valor){
  if (valor > 10){
    return true
  }else {
    return false
  }
}

const novoArray = numeros.filter(callbackF)
//console.log(novoArray)

// Então aqui vimos que o filter não modifica o array original, tambem vimos que ele precisa de uma functio
// de callback para poder executar ela varias vezes e ir alocando os valores no novo array

// Agora a forma refatorada

const novoArray1 = numeros.filter(function (valor){
  return valor > 10
  
} )
//console.log (novoArray1)

const novoArray2 = numeros.filter(valor => {return valor > 10})
//console.log(novoArray2)

const novoArray3 = numeros.filter(valor => valor > 10 )
//console.log(novoArray3)


// Ou seja tres formas de fazer a mesma coisa porem sempre diminuindo o tamanho do codigo

// O filter manda por padrão o valor de elemento, o indice, e o array original completo 
// vamos ver isso na pratica 

const testeParametro = numeros.filter(function(valor,indice,array){
  //console.log(valor,indice,array)
})
// Ou seja a cada iteração do filter todos esses dados são passados por ele basta voce como dev, sabe 
// como eles podem ser util para criar funcoes desejas para seu problema



const pessoas = [
  {nome: 'Bruce', idade: 35},
  {nome: 'Leonardo', idade: 65},
  {nome: 'Gustavo', idade: 90},
  {nome: 'Leon', idade: 70},
  {nome: 'Jorge', idade: 50},
  {nome: 'Luffy', idade: 17},
  {nome: 'Nami', idade: 49},
  {nome: 'Zoro', idade: 19},
  {nome: 'Sanji', idade: 20},
]


//Retorne as pessoas que tem nome com 5 letras ou mais.

const listaNomes = pessoas.filter((valor)=>{
    return valor.nome.length >= 5  
  }
)

console.log(listaNomes)

// Retorne as pessoas com idade maior ou igual a 50

const listaIdade = pessoas.filter((valor)=>{
  return valor.idade >= 50
})

console.log(listaIdade)

//Retorne as pessoas cujo o nome termina com 'o' 

const listaTerminaO = pessoas.filter((valor) => {
  return valor.nome.toLowerCase().endsWith('o');
})
console.log(listaTerminaO)

//Aqui teve um novo metodo que temos dentro de strings que o endsWith() 'termina com', junto com 
//toLowerCase que converte tudo para letra miniscula, assim conseguimos pegar os nomes que termina
// com a letra o atraves do filter() 



