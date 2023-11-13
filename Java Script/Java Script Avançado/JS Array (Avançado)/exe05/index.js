// Nesta aula vamos estudar metodo Map()
// map() tambem retorna um array exatamente do mesmo tamanho que o original porem podemos
// fazer alterações mapeadas nos elementos, segue primeiro exemplo

//Retorne valores dobrados de numeros

const numeros = [1 , 3 , 50 , 40 , 55 , 60 , 7 , 87 , 5 , 4, 7 , 12]

const valoresDobrados = numeros.map((valor => {
    return valor * 2
}))
console.log(valoresDobrados)

// Obs map tem automaticamente os mesmo parametros que filter, ou seja (valor | indice | array).
// Exemplo

const mostraParametros = numeros.map((valor,indice,array) => {
    //console.log(valor,indice,array)
})

// Agora vamos fazer alguns exercicios com object

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
  

// Retorne apenas uma string com o nome das pessoas

const apenasNomes = pessoas.map((valor)=>{
    return valor.nome
})

console.log(apenasNomes)

//Remova apenas a chave nome: do object 

const removeNomeChave = pessoas.map((object) => {
    return {idade : object.idade}
})

console.log(removeNomeChave)

// Adicione um id para elemento do array

const addID = pessoas.map((object,indice) =>{
    const newObj = {...object}
    newObj.id = indice
    return newObj
})
console.log(addID)
console.log(pessoas)

// Este exemplo do final usamos um novo objeto e copiamos o original, porque se alterassemos valor sem copia
// alteraria o original porque array e objc sao passados por referencia na memoria