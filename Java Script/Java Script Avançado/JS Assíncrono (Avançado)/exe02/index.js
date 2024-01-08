// Vamos aprender alguns metodos uteis para promisse


function randNum (min, max ){
    min = 1000;
    max = 1000;
    return Math.floor(Math.random() * (max - min) * min);
}

function novaPromessa(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg === 'number'){
            reject('Erro')
            return;
        }

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    } )
}

// 1° Metodo: Promise.all(), ele resolve todas as promises e retorna todas de uma vez.
// serve em casos onde a sequencia em que os dados são passados não importa. 

const arraydoALL = [
    'Primeiro valor', 
    novaPromessa('Promise valor 1', randNum(1, 3)),
    novaPromessa('Promise valor 2', randNum(1, 3)),
    novaPromessa('Promise valor 3', randNum(1, 3)),
    'Ultimo valor'
]

Promise.all(arraydoALL)
  .then((dados)=>{
    console.log(dados)
  })

  .catch((erro) =>{      
    console.log(erro)
  })

// 2° Metedo: Promise.race(), a primeira promise a ser resolvida ou rejetada é exibe, é como uma corrida
// o primeiro a chega é retornado.

const arraydoRACE = [
    novaPromessa('Promise valor 1', 5000),
    novaPromessa('Promise valor 2', 1000),
    novaPromessa('Promise valor 3', 500)
]

Promise.race(arraydoRACE)
  .then((dados) => {
    console.log(dados)
  })


//3° Metedo: Promise.resolve(), é um metodo que entrega promise ja resolvida, no exemplo vamos utilizar 
// a promise.resolve para entrega uma pagina se ela ja estive em chace, ou baixar a pagina caso nao em uma 
// funçao

function baixarPagina(){
    const statusCache = Math.random().toFixed(1) * 10
    console.log(statusCache)

    if (statusCache <= 5){
        return Promise.resolve('Pagina em cache')
    }else{
        return novaPromessa('Baixei a pagina para o cache', 3000);
    }
   
    
}

baixarPagina().then((dadosPagina => {
    console.log(dadosPagina)
}))


// Comportamento do cacth em cada metodo:
// Promise.all(), se uma rejeita ele rejeita todas e retorna so o erro
// Promise.race(), so rejeita se a promise com erro for a primeira.
// Promise.resolve(), o catch depende do Promise.reject, ou seja ou retorna uma promessa resolvida
// ou retorno uma promessa rejeitada a logica é a mesma. 