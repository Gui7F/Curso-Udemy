// A palavra 'continue' para engine do js siginifica continuar, um exemplo de uso a baixo
// vou colocar varios numeros '10' dentro do array porem não vai imprimir nenhum
// pois vou colocar  a palavra continue em um condição e sempre que for encotrado o '10'
// a engine vai pular para proxima iteração



const numeros = [1, 2,10, 3, 4, 10, 5, 6, 10,7, 8 ,9 ,11,12]

for (let index of numeros) {

    if (index ===10){
        continue;
    }
    console.log (index);

    
if ( index === 9 ){
    console.log('Encontrei o nove');
    break;
}
}

// ja a palavra break siginifica para, ela serve para encontrar as coisas, e tambem serve para controle de fluxo
//do codigo ja que quando ela é encontrada pela engine o bloco e parado e o codigo continua

