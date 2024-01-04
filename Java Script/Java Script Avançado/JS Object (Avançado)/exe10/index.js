// Vamos relembrar factory functions e aprender mexer nos prototypes

const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}

const pessoaHerança = {...falar, ...beber, ...comer}

function criaPessoa(nome,sobrenome){

    return Object.create(pessoaHerança, {  // Aqui estamos linkando a herança de metodos e ja retornando o objeto 
        nome: {value: nome},               // com as chaves que recebem o valor dos parametros, sendo então possivel
        sobrenome: {value: sobrenome}      // criar varias pessoas atraves de um unica função como tem que ser em uma factory function

    })
}

const p1 = criaPessoa('Luffy', 'D.Monkey')
console.log(p1)

const p2 = criaPessoa('Sanji', 'Vinsmoke')
console.log(p2)
/* 
 Oque esse codigo faz é uma economia de recursos do computador, ao inves de criar os metodos beber comer e falar para cada
 pessoa que a gente cria com factory criaPessoa, apenas linkamos o object herança com metodo Object.create no momento da criação
 ou seja todas as pessoas criadas acessam o metodo, não é criado um para cada isso reduz muito o cosumo de processamento
*/

