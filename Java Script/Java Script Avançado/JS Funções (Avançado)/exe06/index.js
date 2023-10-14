// Nessa aula vamos estudar fuction factory 

// Vamos aprender um pouco sobre factory e metedos, e como utilizar a palavra this(isso)
// para poder manipular chaves dentro de um objeto 

function criaPessoa(nome,sobrenome,peso,altura){
  return{
    nome,
    sobrenome,
    altura,
    peso,

    // Agora parecido com get vamos usar o set para setar valores na pessoa4 atraves de this
    // e outros metodos como split(divide tudo em um array), shift (remove o primero elemento de um array)

    set nomeCompleto(valor){
      valor = valor.split(" ")// Aqui estou a cada espaço dividindo o nome passado e adicionando num array
      this.nome = valor.shift()// Aqui estou pegando a chave nome atraves de this, com metodo shift removo o primeiro elemento do array e add na chave nome 
      this.sobrenome = valor.join(' ') // Agora estou usando metodo join( ) que pega o restante da string e add na chave sobre nome separada por um espaço
      
    },
   
   //Aqui mais um get para transformando um metodo. 

   get nomeCompleto(){
     return `${this.nome} ${this.sobrenome}`

   },

   // A palavra get é um getter um palavra que faz com que o metodo agora seja passado
   // apenas o valor dele e não ele como completo, isso faz com que eu possa acessar o valor com notação de atributo

   get imc(){ //Quando uma fuction esta dentro de um objeto ela é um metodo
      const indice = `${this.peso}` / (`${this.altura ** 2}`)
      return indice.toFixed(2)
    }
   
  }
}

const p1 = criaPessoa('Bruce','Wayne', 80, 1.90)
const p2 = criaPessoa('Clark','Kent', 120, 1.90)
const p3 = criaPessoa('James','Queen', 75, 1.80)
const p4 = criaPessoa("  ", "  ",40, 1.65) // As strings vazias é nome e sobrenome que foram adicionado atraves de get e set la em cima
p4.nomeCompleto = 'Jonas August James '


console.log(p1.nomeCompleto,p1.imc)
console.log(p2.nomeCompleto,p2.imc)
console.log(p3.nomeCompleto,p3.imc)

console.log(p4.nomeCompleto ,p4.imc) // Aqui vamos adicionar o nome da pessoa atraves de set

// No codigo assim estou acessando o peso e a altura atraves da palvra this que faz
// referencia ao objecto como um todo no momento da execução, ou seja a cada pessoa 
// onde executo o metedo, a palvra this toma valor de cada pessoa a cada execução do metedo
