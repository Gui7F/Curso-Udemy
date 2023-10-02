const data = new Date('2023-05-13 00:00:00');
let diaSemana = data.getDay()
let diaTexto;

//Em um caso parecido com esse de baixo é onde eu utilizo o switch porque estou testando
//varios valores para uma variavel, então com switch consigo fazer dessa forma

//A condição é nome da varialve apenas no atributo
switch (diaSemana) {
    case 0:
        diaTexto = 'Dom'
        break; // diferente de if o switch precisa da palavra break para sair do bloco e continua a execução.

    case 1:
        diaTexto
        break;

    case 2:
        diaTexto = 'Ter'
        break;

    case 3:
        diaTexto = 'Qua'
        break;

    case 4:
        diaTexto = 'Qui'
        break;

    case 5:
        diaTexto = 'Sex'
        break;

    case 6:
        diaTexto = 'Sab'
        break;

    default: //isso é como else, para deixar um valor padrão caso não de match com nenhum case
        diaTexto = 'Dia não existe'
        break;
}

/*
if (diaSemana === 0){
    diaTexto = 'Dom'
}else if (diaSemana ===1){
    diaTexto = 'Seg'
}else if (diaSemana ===1){
    diaTexto = 'Ter'
}else if (diaSemana ===1){
    diaTexto = 'Qua'
}else if (diaSemana ===1){
    diaTexto = 'Qui'
}else if (diaSemana ===1){
    diaTexto = 'Sex'
}else if (diaSemana ===1){
    diaTexto = 'Sab'
}*/
console.log(diaSemana, diaTexto)

//Tambem podemos utilizar o swtich dentro de uma função e assim poder reutilizar em qualquer 
//parte do codigo

const dataNovo = new Date('2023-05-14 00:00:00')
let weekDay = dataNovo.getDay()
const dia = swtichFuction(weekDay);

function swtichFuction(weekDay) {

    let textoDia;

    switch (weekDay) {
        case 0:
            textoDia = 'Dom'
            return textoDia // Dentro da função podemos utilizar a palavra return que vai funcionar como break e retorna o valor para fora fuction

        case 1:
            textoDia = 'Seg'
            return textoDia

        case 2:
            textoDia = 'Ter'
            return textoDia

        case 3:
            textoDia = 'Qua'
            return textoDia

        case 4:
            textoDia = 'Qui'
            return textoDia;

        case 5:
            textoDia = 'Sex'
            return textoDia;

        case 6:
            textoDia = 'Sab'
            return textoDia;

        default: //isso é como else, para deixar um valor padrão caso não de match com nenhum case
            textoDia = 'Dia não existe'
            return textoDia
    }

}

console.log (weekDay,dia)


