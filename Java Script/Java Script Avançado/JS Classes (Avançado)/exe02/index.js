// Para acessar a velocidade da class ai temos que por um getter dentro da classe que returna pra fora da class a velocidade

// Para setar valor dentro da class temos que por um setter porem podemos configurar de forma que proteja o codigo


const _velocidade = Symbol() // Isso vai funcionar como ID aleatorio a cada execução 

class Carro {
    constructor(nome){
        this.nome= nome
        this[_velocidade] = 0
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return
        if (valor > 100 || valor < 0) return
        this[_velocidade] = valor
    }

    get velocidade(){
        return this[_velocidade]  // Assim conseguimos acessar a velocidade
    }

    acelerar(){
        if(this[_velocidade] >= 100)return
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0)return
        this[_velocidade]--
    }
}

const c1 = new Carro ('Mustang')

for(let i = 0 ; i <= 200; i++){
    c1.acelerar()
}


c1.velocidade = 95 
console.log(c1.velocidade)
