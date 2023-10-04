// Exercicio de lógica de programação 01

// Escreva uma função que recebe dois numeros e retorna o maior deles 

const primeroNum = 500
const segundoNum = 70

function retornaMaior (){

    if (primeroNum > segundoNum){
        return primeroNum
    }else{
        return segundoNum
    }
}

retornaMaior()
const resolução = retornaMaior()

console.log(resolução)

// Essa foi minha resolução


// Agora resolução do professor

function max (num,num2){
    if(num > num2){
        return num;
    }else {
        return num2
    }
}

let resultado = max(120,300);
console.log(resultado)

// Algumas Refatorações do mesma função feita pelo professor

function refatorada (num,num2){
    if (num > num2) return num
    return num2
}

console.log (refatorada(200,600));

//Mais uma refatoração com op ternário 

function refatorada2 (num , num2){
    return num > num2 ? num : num2
}
console.log(refatorada2(700,200))

// Aqui mais uma refatorção com arrow fuction

const max2 = (num,num2) =>{
    return num > num2 ? num : num2
}

console.log(max(100,1000))