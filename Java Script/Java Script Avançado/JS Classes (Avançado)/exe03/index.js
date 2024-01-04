class Eletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar (){
        if(this.ligado){
            console.log(`${this.nome} Já ligado`)
            return
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} Já desligado`)
            return
        }
        this.ligado = false

    }
}

const E1 = new Eletronico('PC Gamer')
E1.ligar() // Aqui liga
E1.ligar() // Aqui executar o console log
E1.desligar() // Aqui desliga
E1.desligar() // Aqui executa o console log
console.log(E1)


// Agora vamos criar a herança atraves de extends

class Monitor extends Eletronico { // Com essa linha tudo que tem em Eletronico agora tem em Monitor, mais vamo add coisas nela
    constructor(nome,cor, modelo){
        super(nome)  // Aqui mesma coisa que o call em funções construtora, estou chamando a superclass Eletronico para pegar o this.nome
        this.cor = cor  // Agora imagina se a super tivesse varios parametros entende a utilidade de super()
        this.modelo = modelo
    }
} 

const Oled = new Monitor('Oled', 'Branco', 'X405')
Oled.ligar()
Oled.ligar()
Oled.desligar()
Oled.desligar()
console.log(Oled)