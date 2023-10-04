// Neste estudo vamos estudar o for classico, vamos ver a sintaxe dele e como ele 
// funciona, quais parametros que vão dentro dos parentes tambem.

for (let i = 0 ; i <= 5 ; i++){
    console.log (i)

}

//Sintaxe do for e como em cima, primeiro criamos a variavel i=index, depois criamos
//uma condição para o fim do laço, e incrementamos i ate ele satisfazer a condição
// VAR ; Condição ; Incremento ou Decremento. 

for (let i = 10 ; i <= 50 ; i += 10){
    console.log (`Dez em dez ${i}`)
}
// Quando eu coloco += significa que estou somando mais 10 a i 
// Ou seja a cada volta somo mais 10 ate chega em 50

for (let i = 0 ; i <= 10 ; i++){
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log (i,par)
}

//Tambem é possivel fazer esse tipo de controle podendo diferenciar os numeros
// de par e impar atraves da expressão matematica e do operador ternario conseguimos
// fazer a distinção 

//                 0       1         2         3          4
const frutas = ['Maça', 'Pera' , 'Banana' , 'Mamão' , 'Laranja'];

for (let i = 0 ; i < frutas.length ; i++){
    console.log (`Indice ${i}`, frutas[i]);
}

// Aqui eu utilizei o laço for para percorrer um array automaticamente, e peguuei cada
// valor dele e exibe pelo console atraves do laço. 