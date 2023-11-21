// Vamos nesta aula revisar os objetos primeiro do basico ate o avançado 

const pessoa = {
    nome: 'Luffy',
    sobrenome : 'Monkey D.'
}

// Formas de acessar as propriedas do objeto 

// 1° Forma 

console.log(pessoa.nome, pessoa.sobrenome) // Notação de ponto

// 2° Forma 

console.log(pessoa['nome'], pessoa['sobrenome'])// Notação de colchete
// Essa serve para pega valores dinâmicamente, tipo valor de uma variavel ou de um banco de dados, situações 
// que voce não sabe exatamente qual nome da chave Exemplo

const chaves = 'nome' 

console.log(pessoa[chaves]) // Ou seja acessado dinâmicamente

// Objetos assim como arrays tem construtor 'new' que serve para voce criar um novo objeto 

const pessoa2 = new Object(); 
pessoa2.nome = 'Rorona'
pessoa2.sobrenome = 'Zoro'

console.log(pessoa2.nome, pessoa2.sobrenome)

// Desta forma usando construtor podemos criar um objeto modular para ir recebendo valores apos sua criação

// Para apagar propriedades de objetos pode usar a palavra delete e em seguida seleção da chave 

delete pessoa2.nome
console.log(pessoa2)

// Agora vamos falar sobre os metodos dos objects a maior vantagem do metedos e que ele tem acesso as propriedades 
// dos object, ou seja voce pode criar metodos para os mais diversos proposito. 


// Vamos cria um metodo que atraves da idade de uma pessoa pega o ano que ela nasceu

const pessoa3 = {
    nome: 'Sanji',
    sobrenome: 'Vismoke',
    idade : 24
}
pessoa3.getDataNascimeto = function () {
    const data = new Date()
    return data.getFullYear() - this.idade
}

pessoa3.falaData = function(){
    return `${this.nome} nasceu em ${this.getDataNascimeto()} e tem ${this.idade} anos`
}


console.log(pessoa3.falaData()) 

// Ou seja é possivel manipular as propriedades atraves dos metodos. Basta você pensa na sua necessidade e criar metodos
// relativos a sua necessidade 


// Objectos tambem são iteraveis atraves do 'for in', consigo ver as proriedades e metodos, o seus valores literais e tipos

for (let prop in pessoa3){
    console.log(prop) // Aqui seu os nomes da cada propriedade
    console.log(pessoa3[prop]) // Aqui são os valor de cada propriedade
}


// Os projetos do mundo real utilizam padrões de projeto na criação de object tambem podemos usar padrões 
// atraves de modulos que podem ser criados por fuction factory e constructor function 

// Vamos primeiro cria uma factory function para relembrar 

const criaPessoa = function(nome,sobrenome,idade){
    return{
        nome,sobrenome,idade,
        get fullDados(){
            return `${this.nome} ${this.sobrenome} ${this.idade}`
        }
    }
}

const p1 = criaPessoa('Luke','Skywalker', 45)
console.log(p1.fullDados)

const p2 = criaPessoa('Bruce', 'Wayne', 32)
console.log(p2.fullDados)

// Ou seja posso criar infinitas pessoas atraves da factory function.

// Agora vamos criar uma constructor function

const Pessoa = function (nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this) // Agora nenhum object criado por Pessoa pode ter seus valores alterado, deve ser usado com muito cuidado.
}

const pearson1 = new Pessoa('Clark', 'Kent')
console.log(pearson1)

const pearson2 = new Pessoa('James', 'Web')
console.log(pearson2)

// Obs: Constructor function sempre tem o nome unico e com letra maiscula no começo

// Basicamente a palvra this assume o objecto que esta sendo criado ou seja por isso é possivel criar varia pessoas
// a palvra new cria um object vazio e le oque esta sendo passado em this cria add no object vazio 
// e depois retorna o valor de this para dentro da variavel com valores que this tem no momento de sua criação 

// new {} <-- this.propriedade --> retorn this.propriedade { nome: 'Valor' }


// Outra coisa interessante é a possibilidade de 'travar' os valores tanto de object quanto de arrays com metodo interno 
// freeze(obj, array)

Object.freeze(pearson1)

pearson1.nome = 'Batman'

console.log(pearson1.nome)// Continua sendo clark mesmo eu tendo alterado para batman 

pearson2.nome = 'Luiz'
console.log(pearson2.nome)
