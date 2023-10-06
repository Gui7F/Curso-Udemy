//Escreva uma função que recebe um numero e retorna o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Se o numero é divisivel por 5 e 3 = FizzBuzz
// Se não retorna o proprio numero
//Checar se o numero é realmente um numero se não for retorna o valor 
// Use a função para fazer isso com numeros de 0 a 100

// Essa foi a minha solução para exercicio


function fizzBuzz (num){

    if (num % 3 === 0 && num % 5 === 0 ){
        return 'FizzBuzz'
    } else if (num % 3 === 0){
        return 'Fizz'
    } else if (num % 5 === 0){
        return 'Buzz'
    }else{
       return num === Number ? num : num 
    }
}


//Essa é a soluçao do professor 


function fizzBuzzProf (numero){
    if (typeof numero !== Number ) return numero;
    if (numero % 3 === 0 && numero % 5 === 0 ) return 'FizzBuzz';
    if (numero % 3 === 0 ) return 'Fizz';
    if (numero % 5 === 0 ) return 'Buzz';
    return numero;
}




for (let i = 0 ; i <= 100 ; i++){
    console.log  (fizzBuzz(i))
    //console.log ( fizzBuzzProf(i))
}



// Agora vamos ve a solução do professor
