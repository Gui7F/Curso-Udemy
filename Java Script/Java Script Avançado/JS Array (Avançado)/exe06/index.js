// Vamos aprender como metedo reduce() funciona 
// Ele basicamente reduz todos os elementos do array em um unico elemento 

// Vamos ao primeiro exemplo basico
// Diferente de filter e map o reduce tem mais um parametro que é o acumulador, ou seja 
// reduce(acumulador, valor , indice, array)

const numeros = [1 , 3 , 50 , 40 , 55 , 60 , 7 , 87 , 5 , 4, 7 , 12]
const total = numeros.reduce((acumulador,valor)=> {
    acumulador += valor
    console.log(acumulador,valor) // Aqui da pra entender melhor oque esta acontecendo entre os parametros
    return acumulador
}, 0) // Bem aqui apos o bloco da função podemos definir um valor para o acumulador começar, neste caso ele ta em 0

console.log(total)

// Agora alguns exemplos da utilização do reduce em cenário onde poderiamos fazer com filter porem apenas para 
// ver o funcionamento do acumulador do reduce()

const numerosPares = numeros.reduce((acumulador,valor)=>{
      if (valor % 2 ===0) acumulador.push(valor)
        return acumulador   
},[])

console.log(numerosPares)

// Agora vamos fazer um exemplo como se fosse map()

const numeroDobro = numeros.reduce((acumulador,valor)=>{
     acumulador.push(valor * 2)  
     return acumulador
},[])

console.log(numeroDobro)


// Agora vamos para exemplos com objetos 

// Retorne a pessoa mais velha do array de objetos 

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

const maisVelha = pessoas.reduce(function (acumulador,valor ){
    if (acumulador.idade > valor.idade ) return acumulador
    return valor
})

console.log(maisVelha)

// Aqui como o acumulador e o valor são dois parametro com valores diferente no incio do laço a gente pode faze comparção
// logica entre eles e chegar ate pessoa mais velha 