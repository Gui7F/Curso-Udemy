// JS assincrono, trata-se de promises, que são 'promessas', quando precisamos sincronizar algo 
// um request de serve ou qualquer outro dado, utiliza elas 


//Aqui em baixo temos um exemplo do uso de fuction de callback para 'resolver' um problema de sicronia
// porem esse codigo vira facilmente uma "arvore de natal", e não é escalavel para codigos maiores 

function rand(min, max) {
    min = 1000;
    max = 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, callback) {
    setTimeout(() => {
        if (callback) callback()
        console.log(msg);
    }, tempo)
}

// esperaAi('Frase1', rand(1, 3), function () {
//     esperaAi('Frase2', rand(1, 3), function () {
//         esperaAi('Frase3', rand(1, 3))
//     })
// })

// Esse codigo acima faz imprimir no console, as frases na sequencia porem não é boa pratica nem escalavel 


// Agora vamos resolver mesmo problema com promises

function dePromise(msg, tempo) {
    // Resolve é quando da certo, e reject é quando não da certo, isso é controle da promise
    return new Promise((resolve, reject) => {
        if (typeof msg === 'number' ){
            reject(`Os valores não poder ser number ${msg}`)
        }
        setTimeout(() => {
            resolve(msg); // O parametro resolve vai passar pra dentro da resposta do then o conteudo do console.log()
        }, tempo)

    })
}

//.then() é uma concatenação de um metodo interno do construtor Promise que siginifica 'quando'
// ou seja 'quando' o codigo antes dele for executado, ai sim o codigo inteno nele é executado
// ou seja da pra encadeiar varios then para criar uma sincronia 

// o parametro dentro do then, resposta é o dado que esta vindo antes dele e sendo exibido depois 
// de sua execução

dePromise('Conectando ao BD...', rand(1,3))
.then(resposta =>{
    console.log(resposta)
    return dePromise('Buscando os dados no BD...', rand(1,3));
})

// O conteudo retornado pelo primeiro then, deve ser pego por outro then assim por diante
// o ponto antes do then é a concatenação

.then(resposta =>{
    console.log(resposta)
    return dePromise('Trantando dados do BD...', rand(1,3))
})

.then(resposta =>[
    console.log(resposta)
])

.then(() =>{
    console.log('Exibir os dados do BD')
})

.then(() =>{
    console.log()
    return dePromise(222222, rand(1, 3))
})

.catch(error =>{
    console.log('Erro', error)
})

//Temos tambem o catch que serve para tratar errors na execução do codigo ou seja se a condição antes do 
// reject for true, o valor cai no catch que trata o erro. 


// Neste exemplo então vemos um codigo que executa com a sicronia que a gente programa, e não com a sicronia
// da engine do JS um exemplo e console.log que coloquei aqui em baixo sendo executado primeiro que toda a promise

console.log('Sou executado antes das promises')