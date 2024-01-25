// Temos alguns jeitos de requerir os dados deste lado

const modulo1 = require('./modulo1')
console.log(modulo1.produto1)

// Pelo node ser um objeto tambem podemos fazer associação via Desestrutução 

const  {nome, sobrenome} = require('./modulo1')
console.log(nome, sobrenome)

// Agora um exemplos com class

const {classPessoa} = require('./modulo1')
const pessoa = new classPessoa('Luffy', 'Monkey D.')
console.log(pessoa)


// E os modulos do node mesmo não precisam do caminho relativo que é o ./'caminho' posso manda direto o nome 
// do modulo exemplos seria require('axios') e require('path')
