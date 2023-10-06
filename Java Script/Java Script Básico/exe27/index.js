// Vamos estudar sobre tratamento de erros nessa aula 
// Try e Catch são mecanismo de tratamento de erro da linguagem javascript 
// Vamos ve aqui alguns exemplos de uso para eles 

try {
    console.log (varivel)
}catch (error){
    let varivel = 'Foi criada uma nova variavel'
    console.log(varivel)
}

// aqui vimos que o bloco try, tentou exibir uma variavel que não estava definida 
// e caiu no parametro 'Error' do bloco catch que tratou o erro criando uma variavel e 
// a exibiu pro console. 

// Agora vamos ve como lança um erro em uma fuction para depois tratar ele
// lançamos erros com a palavra throw que siginifica lançar e pegamos novos errors 
// com as construtoras de new Error

function soma (num, num2){
    if (num !== Number || num2 !== Number){
        throw new Error ('Digite um numero por favor.')
    } 

    return num + num2
}

try {
    console.log (soma(25,25))

    console.log (soma('12' + 12))
}catch(error) {
    console.log(error)
}

// Ou seja erro tratado caso alguem digite uma letra ao inves de um numero a mensagem 
// que esta em new Error sera exibida.