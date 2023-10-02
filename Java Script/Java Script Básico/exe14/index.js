// A primeira diferença entre var e let é que let não pode ser redeclarada novamente
//no mesmo escopo, ja com var podemos. 

var nome = 'gui'
nome = 'joão' // dessa forma com var pode

let nome2 = 'gustavo'
// nome2 = 'joao' isso ja daria erro 

// let tem escopo de {....bloco}  Var tem escopo de função(function)

const teste = true
 
if (teste){
    let nome2 = 'Guilherme'
    console.log (nome, nome2)
}
//como ela tem escopo de bloco o valor de nome2 = 'Guilherme ' que esta dentro do bloco será 
// impresso no console ao inves do valor nome2 = 'gustavo' que esta no escopo global

//fuction possui blocos especiais que protegem as variaveis declarada internamente


// ja para variaves que estão fora do bloco de fuction eu consigo por exemplo acessar 
// dentro da fuction o valor delas 

var nomes = 'Guidoido' // ou seja estou chamando essa variavel de dentro da fuction


function falaOi(){
    var fala = 'Oi'
    console.log(fala , nomes) // Aqui vou conseguir exibir pois estou chamando dentro do bloco

}

falaOi()

//console.log(fala) // ja aqui não conseguir exibir nada pois a var esta protegida 