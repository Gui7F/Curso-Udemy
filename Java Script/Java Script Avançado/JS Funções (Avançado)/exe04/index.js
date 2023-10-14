function criaFuction (){
    const nome = 'Joao'
    return function (){
       return nome
    }
}

const funcao =  criaFuction();

console.dir(funcao)

// Como ja sabemos um fuction possui escopo lexico que siginifica que ela tem o escopo dela propria 
// e tambem possui habilidade de utilizar os closuers que estão internamente ou externamente a fuction
// neste exemplo acima a função tem acesso a tres escopo o global o interno onde esta o closure que neste
// caso é a varivel nome, e tem acesso a outra fuction anonima. 

// Agora no codigo a baixo vamos ver funçoes de callback


function rand(min=1000, max=3000 ){
    const num = Math.random() * (max-min) + min
    return Math.floor(num)

}



function f1 (callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    },rand())
}


function f2 (callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    }, rand())
}


function f3 (callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, rand())
}

// Aqui caso com as fucoes assim estamos simulando um atraso na chegada dos dados, com se fosse
// pedidos em um base de dados, ou seja preciso que chegue na ordem f1, f2, f3 porem o tempo de resposta
// é aletorio vamos resolver agora com funções de callback



f1(f1callBack)

function f1callBack (){
    f2(f2callBack)
}

function f2callBack(){
   f3(f3callBack)
}

function f3callBack(){
    console.log('Ordem Certa')
}

// Desta forma conseguimos trazer os dados na ordem certa com a execução de processo por chamadas de callback
// uma fuction chama a outra na ordem certa. 
