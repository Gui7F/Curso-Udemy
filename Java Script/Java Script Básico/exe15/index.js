// Vamos estudar a atribuição via desestruturação dos arrays 
// nos pegamos os valores de varias variaveis e desestrutar elas e reatribui novos
// valores mesmo sendo variaveis declaradas com let

let a = 'A' // B
let b = "B" // C
let c = 'C' // A

const letras = [b, c ,a]; // Aqui criamos a array com a nova estrutura de valores

[a, b , c] = letras // aqui selecionamos as variaveis em um array para atribuir a estrutu
                    // criada em const letras = []
console.log (a,b,c)

//Outro exemplo da desestruturação, com ela é possivel pegar os valores do array atraves
// da atribuição sem precisar indicar os indices 

const numeros = [10, 20, 30, 40, 50, 60, 70, 80]
const [dez, vinte, trinta , ... resto] = numeros; //Aqui estou criando tres variavel e atribuindo 
                                      // valores para cada uma na sequencia do index
console.log (dez, vinte, trinta, resto)

//Obs: Esses tres pontos (...) é o operador REST que pega o resto todo do array e aloca
// na variavel criada apos ele no caso com nome de resto mesmo. 
// ele serve para duas coisas tanto para pegar o resto e tambem para espalha
// ...REST and ...SPREAD