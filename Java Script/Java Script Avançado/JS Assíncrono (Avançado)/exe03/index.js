// Vamos aprender agora sobre Async/Await. Nas promises

function randNum (min, max ){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min )
return ;
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

// Vamos primeiro recriar uma cadeia de promises com then() e depois retofator com Async/Await

// novaPromessa('Dado 1', randNum(1, 3))
// .then((dado)=>{
//     console.log(dado)
//     return novaPromessa('Dado 2', randNum(1, 3))
// })
// .then((dado)=>{
//     console.log(dado)
//     return novaPromessa('Dado 3', randNum(1, 3))
// })
// .then((dado)=>{
//     console.log(dado)
// })
// .catch((erro)=>{
//     console.log(erro)
// })

// Agora vamos refatorar, os dados 4,5,6 com async/await, serve como then(), porem menos codigos



async function myFirstAsync(){

  try{
    const dado4 = await novaPromessa('Dado 4', randNum(1, 3))
    console.log(dado4)

    const dado5 = await novaPromessa('Dado 5', randNum(1, 3))
    console.log(dado5)

    const dado6 = await novaPromessa('Dado 6', randNum(1, 3))
    console.log(dado6)

    const dado7 = await novaPromessa(7, randNum(1, 3))
    console.log(dado7)
  }
  catch(erro){
    console.log(erro)
  }
  
}

myFirstAsync(); // Aqui executamos no escopo global para funcionar

// E o tratamento de erro com try catch comum, ou seja tenta todas as promises encontrou o erro cai, no catch

// Estados possiveis de uma promise
// pendente -> quando ela foi enviada, mais não foi resolvida
// resolvida -> quando ela foi enviada e retornou um valor
// rejeitada -> quando ela foi enviada e retornou um valor que causou um erro catch(e)