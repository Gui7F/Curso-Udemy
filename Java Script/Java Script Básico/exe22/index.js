//let i = 0;

//while (i < 10){
  //i++
 // console.log(i)
//

function random (min,max){
    const math = Math.random() * (max - min) + min
    return math.toFixed(0)
}
const min = 1
const max = 20
let rand = random(min,max)


while (rand !== 10 ){
    rand = random(max ,min);
    console.log(rand)
}

// A diferença entre do while e while 
// while checa a condição primeiro e depois executa o bloco de codigo ja o 
//Do while ele executa um bloco de codigo e depois checa a codição

let num = 0;

do {
    console.log ('numero')
    num++;
} while (num < 10);