function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString( 'pt-br',{
    datastyle: 'full' ,
    timestyle: 'short' ,
    hour12 : false

})
}

const data = mostraHora()

console.log(data)

// Para colocar um intervalo de atualização como por exemplo o relogio temos em JS
// a função chamada setInterval que serve justamente para isso para atualizar informações 
// automaticamente

const relogio = setInterval(function(){
    console.log(mostraHora())
},1000)

setTimeout (function (){
    clearInterval(relogio)
},10000)

// O setTimeout serve para executar alguma coisa uma unica vez dentro de um prazo de tempo tambem
// ou seja no codigo acima coloquei 1000ms para setInterval e 10000ms para setTimeout
// o setInterval executou por 10 segundos que o tempo que esta no timeout para limpar ele.