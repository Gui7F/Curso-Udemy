//Criação de objecto literal essa é uma das formas basicas de objeto

const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Ribeiro',
    idade: 24
}

console.log(pessoa1.nome,pessoa1.sobrenome,pessoa1.idade);

//Criação de função factory que cria objetos

function criaPessoa (nome , sobrenome , idade) {
    return{nome,sobrenome,idade};
}

const indivíduo1 = criaPessoa('Jorge', 'Brabo' , 45);
const indivíduo2 = criaPessoa('Mila', 'Cristie' , 27);
const indivíduo3 = criaPessoa('Luffy', 'D. Monkey' , 24);
const indivíduo4 = criaPessoa('Roronoa', 'Zoro' , 25);

console.log (indivíduo4.nome, indivíduo4.sobrenome, indivíduo4.idade);
console.log(indivíduo3.nome, indivíduo3.sobrenome, indivíduo3.idade );

//Criação de um metodo dentro de um objeto

const reiDosPiratas  = {
    nome:"Luffy" ,
    sobrenome: "D.Monkey",
    idade : 25,

    fala(){
        console.log(`Eu vou ser o rei dos piratas, minha atual ${this.idade}`)
    },

    tempo(){
      this.idade++

    }
}

reiDosPiratas.fala();
reiDosPiratas.tempo();
reiDosPiratas.fala();
reiDosPiratas.tempo();
reiDosPiratas.fala();
reiDosPiratas.tempo();