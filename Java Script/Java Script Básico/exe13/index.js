//const dataHtml = document.querySelector('#Data')
//const valorData = dataHtml.innerHTML = dataTempoReal()

//Essa foi a minha solução incial

/*function dataTempoReal (){
    const dataReal = new Date ()
    
    const diaFormatado = [dataReal.getDate(),dataReal.getMonth(), dataReal.getFullYear() 
    ,dataReal.getHours(), dataReal.getMinutes()]

    return `Data: ${diaFormatado[0]}/${diaFormatado[1]}/${diaFormatado[2]} 
    Horário: ${diaFormatado[3]}: ${diaFormatado[4]}`
}

dataTempoReal()*/

const dataHtml = document.querySelector('#Data')


const dataNovo = new Date()
let numberYear = dataNovo.getFullYear()
let numberDay = dataNovo.getDate()
let weekDay = dataNovo.getDay()
const dia = nomeDoDia(weekDay);

let hora = dataNovo.getHours()
let minuto = dataNovo.getMinutes()

if (hora <= 10 ){  
    hora = `0${hora}`
} else if (minuto <= 10){
    minuto = `0${minuto}`
}




function nomeDoDia(weekDay) {

    let textoDia;

    switch (weekDay) {
        case 0:
            textoDia = 'Domingo'
            return textoDia 

        case 1:
            textoDia = 'Segunda-feira'
            return textoDia

        case 2:
            textoDia = 'Terça-feira'
            return textoDia

        case 3:
            textoDia = 'Quarta-feira'
            return textoDia

        case 4:
            textoDia = 'Quinta-feira'
            return textoDia;

        case 5:
            textoDia = 'Sexta-feira'
            return textoDia;

        case 6:
            textoDia = 'Sabado'
            return textoDia;

        default: 
            textoDia = 'Dia não existe'
            return textoDia
    }

}

let nomeMes = dataNovo.getMonth()
const mes = nomeDoMes(nomeMes)


function nomeDoMes(nameMonth){

    let nomeMes;
    switch(nameMonth){
        case 0:
            nomeMes = 'Janeiro'
            return nomeMes;
        case 1:
            nomeMes = 'Feveiro'
            return nomeMes;
        case 2:
            nomeMes = 'Março'
            return nomeMes;
        case 3:
            nomeMes = 'Abril'
            return nomeMes;
        case 4:
            nomeMes = 'Maio'
            return nomeMes;
         case 5:
          nomeMes = 'Junho'
        return nomeMes;     
        case 6:
            nomeMes = 'Julho'
          return nomeMes;     
        case 7:
            nomeMes = 'Agosto'
            return nomeMes;
        case 8:
            nomeMes = 'Setembro'
            return nomeMes;
        case 9:
            nomeMes = 'Outubro'
            return nomeMes;
        case 10:
            nomeMes = 'Novembro'
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro'
            return nomeMes;     
    }

}

const dataCompleta = dataHtml.innerHTML =
 `${dia}, ${numberDay} de ${mes} de ${numberYear} <br></br> Horário: ${hora}:${minuto}`

// E essa minha solução final, estou progredindo...

// Outra forma de fazer também é como tá escrito na documentação do MDN com recursos nativos do Objeto Date()

const dataH1 = document.querySelector("#Data")
const data = new Date() 

h1.innerHTML = data.toLocaleDateString("pt-br"{datestyle:"full", timestyle: "short"}) 