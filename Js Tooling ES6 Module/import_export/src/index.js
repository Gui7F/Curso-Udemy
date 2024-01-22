import {nome as nome2, sobrenome, idade, cacula, Pessoa} from './modulo1'
import Eletronico from './modulo2'

console.log(nome2, sobrenome, idade)
const calculaEval = cacula('4*4')
console.log(calculaEval)

const nome = 'Zorojuro'
console.log(nome)

const p1 = new Pessoa ('Sanji', 'Vismoke', 20)
console.log(p1)

const eletronico = new Eletronico('Notebook','EX-4', '5000R$')
console.log(eletronico)