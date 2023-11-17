// Vamos fazer um pequeno exercicio unindo os tres metodos filter, map e reduce 

// Anuncio Exercicio
//Retorne a soma do dobro dos numeros pares do seguinte array
// --> Filtrar numero pares (filter)  --> Dobrar os pares (map) --> Somar os valor (reduce)

const numeros = [1 , 3 , 50 , 40 , 55 , 60 , 7 , 87 , 5 , 4, 7 , 12]

const numeroPares = numeros.filter((numerosPar) => {
    if (numerosPar % 2 === 0) return numerosPar
})

const dobroPares = numeroPares.map((dobroNumero) => {
    return dobroNumero * 2
})

const somaPares = dobroPares.reduce((soma, valor) =>{
   return soma += valor
})

console.log(somaPares)


// Esse é só um exercicio bem simples mais mostra o poder desses tres metodos unidos