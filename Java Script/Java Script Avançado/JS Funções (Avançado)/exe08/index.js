// Funcões construtoras assim como funções factory retornam objetos 
// A diferença entre elas é que a constructor utiliza convenção primeira letra maiuscula
// Pessoa(new), ja a factory utiliza camelCase, criaPessoa()

function Pessoa(nome, sobrenome ){
  // Atributos, variveis, metodos privados do objeto
   const variavelInterna = ''
   const metodoInterno = () =>{

   }

  //Atributos ou Metodos Publicos 
   this.nome = nome
   this.sobrenome = sobrenome

   this.falaP1 = () =>{
    console.log(this.nome + this.sobrenome + ':S de SSSperança')
   }

   this.falaP2 = () =>{
    console.log(this.nome + this.sobrenome + ':Sou Batman')
   }

}

const p1 = new Pessoa('Clack', 'Kent')
const p2 = new Pessoa('Bruce', 'Wayne')

console.log(p1.falaP1())
console.log( p2.falaP2())

// A palavra new mostra claramente a construção de novos objetos. Ou seja sempre que for
// utilizar a function constructor é necessário a palvra 'new'

// Por conta do uso da palavra this um metodo ou atributo se torna publico para variaveis
// que vão assumir o valor de this quando chamar um metodo ou atributo 

// Ja variaveis declarada internamente sem uso da palavra this estão no escopo lexico
// da fuction e são protegidas dos clusers externos a ela

