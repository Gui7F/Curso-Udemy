// IIFE -> Immediately invoked function expression
// Sera esse o assunto expressao de função imediata

// Essas funções de IIFE nao tocam o escopo global, diferente de uma function comum 
// onde tenho que declaram e depois chama-la no escopo global, as IIFE são invocadas
// imediatamente apos sua declaracão

//function comum(){
    //console.log('Toquei escopo global')
//}
//comum()

// A sintaxe das IIFE:

(function (){
    console.log('Eu não toquei escopo global')
})();

// Codigo pode ser escrito dentro dela normalmente, ela serve apenas como um escudo 
// para o escopo global 

(function (){

function criaPessoa (nome,sobrenome,idade){
    return nome,sobrenome,idade
}

const pessoa1 = criaPessoa('Robin','Hood', 25 )
const pessoa2 = criaPessoa('Willian','Shakespper', 40 )
const pessoa3 = criaPessoa('Bruce','Wayne', 35 )

console.log(pessoa1,pessoa2,pessoa3)


})();