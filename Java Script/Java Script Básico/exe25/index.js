// Escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura 
//de uma imagem (number).Retorne true se a imagem estiver no modo paisagem 

function ePaisagem (alt, lag){
    if (alt < lag)
        return true
        return false
    
}
const imagem = ePaisagem(1080,1920)
console.log(imagem)

// Essa acima foi minha solução 

//Agora vamos para as do professor 

function ePaisagem2(largura, altura){
    return largura > altura ? true : false
}

console.log(ePaisagem2(1920,1080))

// Refatoração com arrow fuction 

const eRefatorada = (largura,altura) => largura > altura
console.log(eRefatorada(1920,1080))