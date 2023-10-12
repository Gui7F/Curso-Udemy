// Uma função pode receber parametros que posteriomente pode ser preenchidos por um 
// valor chamado 'argumento', porem tambem posso enviar argumentos para uma função sem
// parametros no JS, isso porque internamente na função tem um object que sustenta os argumentos
// chamado 'arguments' , nele posso alocar quantos argumentos eu quiser

function fuctionArguments (){
    console.log(arguments [5])// Por possuir indice acredito que seja iteravel
}

fuctionArguments('Valor', 1, 2, 3, 4, 'Joao' )

// Agora vamos ver uma iteração com esse object constructor arguments 

function soma(){
    let total = 0
    for(let index of arguments)
    total += index
   console.log(total)
}

soma(10, 20 , 30 , 40,)

// Resultado foi 100 da soma dos argumentos que estão dentro de arguments
// OBS: O object arguments so existe para funções declara coma palavra 'fuction'

// Tambem é possivel fazer com que os parametros assuma valores padrão que voce atribuir
// no parentes da função isso serve para quanto um valor não for enviado não gera erro 
// em casos aritimeticos 

function somaValores(a , b = 0, c = 10 ){
    console.log(a + b + c)
}

somaValores(2 , 4 , undefined) // unica maneira de passar o valor padrão é enviando 'undefined'

// Ai no caso passei valores de 'b' e 'a' e obtive o resultado mesmo não passando valor de 'c'
// isso porque dentro da declaração do parametro ele tem um valor padrão de 0

// Tambem é possivel fazer em funções atribuição via desestruturação tanto para objeto
// Quanto para arrays vamos ver os dois exemplos, criar eles dentro do paramentro de uma função


function chavesObj({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade)
}

let pessoa = {nome: 'João', sobrenome: 'Bobão', idade:45}
chavesObj(pessoa) 
// Ou seja os valores estão sendo atribuido via parametro. 

function valorArray ([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
} 
let valores = [50, 70, 80]
valorArray (valores)

// Ou seja aqui tambem os valores estão sendo passados via parametro para o array

// Agora vamos ver uma função onde vamos usar os parametros para criar um tipo de calculadora
// porem bem simples 

function calculadora (operador, acumulador, ...numeros){ // Aqui coloco o rest op para pegar qualquer valor depois do acumulador
   
   for (let index of numeros) {
    if (operador === '+'){acumulador += index}
    if (operador === '-'){acumulador -= index}
    if (operador === '%'){acumulador %= index}
    if (operador === '/'){acumulador /= index}
    if (operador === '*'){acumulador *= index}
  }  

  console.log(acumulador)

}

calculadora('+', 0 , 25, 5 , 70 , 50) // ou seja posso ir somando adicionando valores um atravas do outro.

