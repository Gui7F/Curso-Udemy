// Classe em java script são a mesma coisa que uma fuction constructor, vamos aprender como criar classes e vamos
// fazer um comparativo de como ficaria em uma função constructor

class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Zoro', 'Roronoa');
console.log(p1)

// Uma diferença muito boa é que criando class todos os metodos são automaticamente colocados dentro do prototype da class
// isso diminui a complexidade do codigo

// Agora mesma codigo so que com função construtora

function Pessoa2 (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}

const p2 = new Pessoa2 ('Sanji' ,'Vismoke')
console.log(p2)