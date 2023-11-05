function recursiva(max){
    if(max >= 10 ) return
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)

// Neste estudo de function recursiva estamos vendo uma função que chama ela mesmo ate que um lógica ou
// laço seja satisfeito, funciona parecida com um for ou while so que feito em uma função

