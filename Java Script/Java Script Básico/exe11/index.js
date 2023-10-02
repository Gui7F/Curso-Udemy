// Sempre que eu utilizar a palavra 'new' antes de um objeto significa que ele é um
// objeto construtor no caso os estudos de hoje é sobre o objeto Date(), que é um
// objeto construtor

const dataAtual = new Date()
console.log(dataAtual)
//Quando mando apenas escrito o objeto vazio ele retorna a data atual em tempo real.


const date = new Date(1999, 6, 5, 18, 5, 25, 500)
//                  Ano, Mes, Dia, Hora , Segundo, Milessimo de Segundo
// para monta uma data manualmente podemos fazer seguindo essa sintax dos paramentros
console.log(date)

const dataString = new Date('1995-10-20 21:25:45')
console.log(dataString)

//Tambem podemos mandar data no formato string.

//Agora vamos ver como pegar os dados das data individualmente, com as funções que temos dentro do objeto Date()

const dataIndividual = new Date()
console.log ('Dia' , dataIndividual.getDate())
console.log ('Mês' ,dataIndividual.getMonth() + 1)// Os meses 0 é Jan e Dezembro é 11
console.log ('Ano' ,dataIndividual.getFullYear())
console.log ('Hora' ,dataIndividual.getHours())
console.log ('Min' ,dataIndividual.getMinutes())
console.log ('Seg' ,dataIndividual.getSeconds())
console.log ('Milessimo de Seg', dataIndividual.getMilliseconds())
console.log ('Dia da Semana', dataIndividual.getDay() + 1)//0 é Domingo e 6 é Sabado por + 1


//Agora vamos criar duas fuction que formata a hora para o padrão brasileiro 


// Na fuction zeroAEsquerda to adicionando o "0" a esquerda de cada num menor que 10

function zeroAESquerda(num){
    return num >= 10 ? num : `0${num}`
}

//Na função formataData estou pegando os dados envolvendo eles na função zeroAEsquerda e depois retorno
// a data formatada no padrão brasileiro

function formataData (data){

    const dia = zeroAESquerda(data.getDate() )    
    const mes = zeroAESquerda(data.getMonth() + 1)
    const ano = zeroAESquerda(data.getFullYear())
    
    
    const hora = zeroAESquerda(data.getHours())
    const minutos = zeroAESquerda(data.getMinutes())
    const seg = zeroAESquerda(data.getSeconds())
    
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${seg}`

}

const data = new Date();
const dataBrasil = formataData(data)
console.log (dataBrasil)