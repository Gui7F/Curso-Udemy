// Concatenando arrays 

const array = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array.concat(array2 ,[7, 8, 9 ,10],'Clarck Kent')

console.log(array3)

//Ou seja posso passa um array literal, ou string que metedo concact( ) vai concatenar tudo em um array

// Ou maneira é utilizando o spreadOp '...' 

const a1 = ['Batman', 'Superman', 'Lanterna Verde']
const a2 = ['Luffy', 'Zoro', 'Nami']
const a3 = [...a1, ...a2,'Herois', ...['Brook', 'Sanji'] ]
console.log(a3)

// Ou seja tambem posso colocar strings, arrays literais e outros dados que serão concatenados

// Isso tambem funciona em objetos

const dadosNumericos = {
    cpf: '205.605.707-14',
    dataNascimento: '05/07/1995',
    RG: '36.456.771-9'
}

const dadosAlfabeticos = {
    nome: 'Yago Perreira Santos',
    endereço :'Rua Dom Pedro 145'
}

const dadosPessoa = {
    ...dadosAlfabeticos, ...dadosNumericos
}

console.log(dadosPessoa)

// Ou seja uni as informações numericas com as alfabeticas em um outro objeto dadosPessoa
