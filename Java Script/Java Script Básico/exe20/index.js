// For Classico - Geralmente com iteráveis (Arrays, strings)
// For in - Retorna o indice ou a propriedade (strings, arrays, objetos)
// For of - Retorna o valor em sí, só com iteráveis (arrays e strings)


//Arrays possui indices tambem entao a gente pode iterar sobre eles.
//            1 2 3... indices
const nomes = ['São Jorge', 'Thomas', 'Tony', 'Clark '];

for (let i = 0 ; i < nomes.length ; i++){
    console.log(nomes[i])
}

console.log('==========')

for (let i in nomes ){
    console.log(nomes[i])
}


console.log('==========')
//Ja o for of que oque vamos ver neste estudo, ele serve para pegar o valor mesmo
// ao inves do indice como o caso do classico e do for in

for (let valor of nomes){
    console.log (valor)

}
console.log('==========')
//Temos tambem dentro dos arrays o metedos forEach que faz a mesma coisa de pegar o
// valor com uma fuction com dois parametros, sendo o primeiro o valor em si e o
// segundo o indice 

nomes.forEach(function(valor,indice){
    console.log(valor,indice)
})

