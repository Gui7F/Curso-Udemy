// Neste estudo veremos o For in , diferente do for classico que colocamos um contador
// o for in le os indices do arrays ou as propriedades de um objeto


const frutas = ['Maçã', 'Banana', 'Maracuja', 'Laranja']

//este é o jeito classico 

for (let index = 0 ; index < frutas.length ; index++){
    //console.log(frutas[index])
}

// este é o jeito com for in

for(let index in frutas){
    console.log(frutas[index])
}

// Agora vamos vê esse mesmo for in com iteração com um obeject 

const pessoa = {
    nome: 'Edemarcos',
    sobrenome:'Otariano',
    idade: 45
}

for (let keys in pessoa){
   console.log(keys,pessoa[keys])
}

//Quando vamos pega o valor de uma propriedade utilizamos ou notação de ponto 
// ou os colchetes com valor da propriedade.Então a cada iteração esta sendo salva
// o valor da propriedade dentro de keys porem so é acessivel se utilizar os colchetes
// ou o nome da propriedade

