const nomes = ['Clark', 'Bruce', 'Jason']

// Vamos revisar o basico de array 
// Primeira coisa é possivel alterar um valor de um elemento de um array via atribuição

nomes[2] = 'Tony'
console.log(nomes)

// Tambem é possivel deletar o valor de um index, sem deletar o index

delete nomes[2]
console.log(nomes) // Agora ele tem valor 'empty'


// Arrays tem valor passado por referencia, ou seja caso eu crie um novo array referenciando nomes
// qualquer alteração feito em um dos dois reflete no dois, pois eles vão esta com pointer no mesmo buffer
// da memória 

const novoNomes = nomes
novoNomes.pop()

console.log(nomes, novoNomes)// Os dois perderam o valor empty que estava no nomes, pois foi alterado por referência 

// Uma coisa que altera esse comportamento é o restOP '...', vou cria um novo array e adicionar um novo nome
// utilizando o restOP e vamos ve apenas o valor desse novo array sera altera por causa do rest

const novo = [...nomes]
novo[3] = 'Jonas'
console.log(novo, nomes, novoNomes) // Valor original de nomes foi passado para novo e não faz referancia ao mesmo buffer da memoria

// Agora um pouco sobre metodos basicos vamos utilizar primeiro o pop()
// pop() remove o ultimo elemento do array e tambem retorna o valor removido 

const removidoLast = novo.pop()
console.log(novo, removidoLast)// Jonas foi removido e salvo na variavel removido, isso é muito util

// Similar a isso temos o metodo shift(), que remove o primeiro elemento do array e conseguentimente ele desloca
// os indices do array 

const removidoFirst = novo.shift()
console.log(novo, removidoFirst) // Clarck foi removido e bruce passou a ser o indice 0 do array

// Para adicionar elementos no array temos o metodo push()
novo.push('Wayne', 'Joel')
console.log(novo) // Foi adicionado mais dois elementos aqui.

// Para adicionar elementos no inicio do array utiliza unshift(), ele desloca os indices dos array tambem

novo.unshift('Sanji', 'Zoro')
console.log(novo)// Foi adicionado dois elementos no inicio do array

// Tambem temos um forma de 'fatiar' os array, com metodo slice(), vamos ve os exemplos
//                    0        1       2       3       4        5
const novoArray = ['Luffy', 'Zoro', 'Nami', 'Usop', 'Robin', 'Brook']
console.log(novoArray)//Aqui mostra o original
const novo2 =  novoArray.slice(0, -1) // Aqui no parametro estou passando o indice 0, e utilizo o numero negativo para retira o Brook
console.log(novo2)
const novo3 = novo2.slice(1,4) // Aqui estou começando do zoro e parando no usop, porque o ultimo indice, não é adicionado  
console.log(novo3) // Aqui pegamos os indices 1 = zoro, 2 = nami, 3 = usop

// Para separar uma string em um array utiliza o split(), ele ja faz tudo apenas passando os parametros

const nomeCompleto = 'Jonas Marks James'
const nomeArray = nomeCompleto.split(' ')
console.log(nomeArray) // Aqui a cada espaço dentro da string o split pega um elemento.

// Outro exemplo com split pegando um string so que agora usando um ponto como referencia ao inves do espaço

const numeroCpf = '352.157.780.10'
const cpfArray = numeroCpf.split('.')
console.log(cpfArray)

// Ou seja a cada ponto que metodo encontra ele separa um elemento dentro do array

// Tambem temos o metodo que faz esse processo contrario de conversão de array para string que é o join(), veja o exemplo

const nomeSeparado = ['D','R','A','C','U','L','A']
const nomeJunto = nomeSeparado.join('')
console.log(nomeJunto)

// Ou seja o metodo pegou cada elemento e como coloquei uma string vazia como separador ele infilerou as letras e formou o nome
