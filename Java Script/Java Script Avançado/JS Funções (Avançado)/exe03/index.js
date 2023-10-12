// Vamos nessa Aula estudar sobre o retorno nas funções (return;)
// Quando utilizamos a palvra return em fuction a função retorna um valor
// Outro detalhe basico quando engine le a palavra return a função acaba ali


//Podemos retorna objetos em funções 

function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const usuário1 = criaPessoa('Jason', 'Toddy', 25)
const usuario2 = criaPessoa('Bruce', 'Wayne', 45)
const usuario3 = criaPessoa('Oliver', 'Queen', 35)

console.log(usuário1,usuario2,usuario3)

// Ou seja posso cria varias pessoas com uma função que retorna um objeto literal 
// com as chaves que estão no parametro da função

// Funções aninhadas necessitam de return para criar uma utilidade maior, ou seja caso eu
// precise cria por exemplo funções que vão duplicar, triplicar, quadruplica um valor
// ao inves de fazer varias funções posso aninhar returns para cria isso em uma 

function multiplicador(multiplicador){
    return function (n){
        return n * multiplicador
    }
}

const duplicar = multiplicador(2)
const triplicar = multiplicador (3)
const quadruplica = multiplicador(4)

console.log(duplicar(10), triplicar(10), quadruplica(10));

// Ou seja a função multiplicador tem internamente um retorno de um função anônima
// que recebe um parametro que é um numero, dentro da função anônima é retornado 
// o numero * multiplicador, ai em baixo eu crio um const que recebe o multiplicador
// e passo o valor que sera atribuido ao multiplicador, ai a const vira uma function
// que recebe no seu parametro o valor de n que no caso sera passo para fuction anonima
// ou seja a multiplicação acontece atraves de retornos internos entre duas funçções aninhadas