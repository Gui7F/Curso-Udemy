// Vamos estudar funções geradoras que faz o seguinte, ela pode executar uma vez e entregar um valor X
// Na segunda vez que ela executar ela vai entregar um valor Z, e na ultima vez um valor Y
// Ela faz um 'lazy avaliation' que seria traduzido uma avaliação preguiçosa 
// Funciona como uma pause no codigo isso é bom em casos de performace e outros pontos no desenvolvimento

function* geradora1(){
    //Codigo Qualquer...
    yield 'Valor 1'
    //Codigo Qualquer...
    yield 'Valor 2'
    //Codigo Qualquer...
    yield 'Valor 3'
}

const g1 = geradora1()
// Uma outra coisa é possivel iterar sobre a função geradora 
for (let valor of g1){
    console.log(valor)
}


console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())// Aqui a chave done:true 

// Primeira diferença na sixtaxe da function geradora é o simbolo '*' junto do nome function
// A palavara yield é como return porem não para execução da função quando passa pela engine
// A função retorna objects, com duas chaves value:'valorX' done:false ou true, a chave done
// Mostra se tem mais valores para ser enviado na function geradora, a palavra next() é um metodo 
// Que esta dentro do object gerador global da linguagem, sem next não é possivel ver o proximo valor ou objeto


function* geradora2(){
    let i = 0 
    while (true){
        yield i
        i++
    }    
}
const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value) // Neste exemplo é uma geradora infinita que vai me gerar valores a cada log seguindo uma contagem


// Tambem é possivel ligar um geradora a outra e com yield* function(), dessa forma parte do codigo de uma 
// é chama na outra em determinada parte que voce delegar o yield

function* geradora3Part1 (){
    yield 0
    yield 1
    yield 2
}
function* geradora3Part2(){
    yield* geradora3Part1()
    yield 3
    yield 4
    yield 5

}

const g3 = geradora3Part2()
for (let valor of g3){
    console.log(valor)
}

// Ou seja uma função geradora executou outra atraves de uma ligação entra os yields

function* geradora4 (){
    yield function(){
        console.log('Sou yield 1')
    }

    yield function(){
        console.log('Sou yield 2')
    }
}

const g4 = geradora4()
const func1 = g4.next().value;
const func2 = g4.next().value;

func1()
func2()

// Ou seja posso utilizar qualque coisa depois de yield como valor até mesmo outras funções









