// As varias maneiras de declarar funções:

//Declaração de função só dessa maneira acontece o (fuction hoisting)
//que nada mais é a engine do js eleva a função para topo do documento na 
//hora da execução, ou seja posso chamar ela antes de declarar que não vai dar erro
falaOi();


function falaOi(){
    console.log('oi')
}

// Funções são em JS First-class objects, siginifica que funções tambem 
// pode ser atribuidas como um dado em uma const ou var, isso se chama 
// function-expression

const souUmDado = function(){
    console.log('Sou um dado.')
}
souUmDado();


//Arrow fuction recurso novo do ES6, é parecido com fuction-expression
// porem mais curta.

const fuctionArrow = () =>{
    console.log('Sou uma arrow fuction')
}
fuctionArrow();
 
// Tambem podemos usar fuction dentro dos objetos normalmente, para executar
// usar concatenação de ponto funciona igual, quando é para propriedades

const objecto = {
    falar : function(){
        console.log('Estou vivo, e falando')
    }
}
objecto.falar()

// Com novos recursos tambem é possivel omitir a palavra fuction e ja manda direto

const objecto2 ={
    falar(){
        console.log('Tambem estou falando')
    }
}

objecto2.falar()
