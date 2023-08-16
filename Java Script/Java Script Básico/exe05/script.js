
//É possivel colocar valores padrão nos parametros caso não envie um valor na chamada
//a function vai assumir os valores padrão ao inves de retorna um NaN 

function soma (x=1 , y=1){  
    const resultado = x + y;
    return resultado ; 
}
console.log(soma (2,6))
console.log(soma (7,8))
console.log(soma (9,7))


//Esse é o modo onde a função fica anônima pois não possui um nome ela é o valor da
//variavel raiz


const raiz = function(n){
    return Math.sqrt(n)
}

console.log(raiz(25))

//tambem temos o jeito de fazer chamado de arrow function

const conta = (n , m) => {
    return n + m
}

console.log (conta(10 , 10))