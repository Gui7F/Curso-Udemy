// Vamos aprender sobre Polimorfismo = Algo que tem varias formas 
// Nesta aula vamos aprender oque é o polimorfismo dentro do JS, que nada mais é do que metodos sendo sobreescritos
// para ter comportamentos diferentes em classes que herdam as caracteristicas da classe pai 

// Neste exercicio vamos crias uma classe pai (conta bancária), e depois duas classes filhas (conta corrente) (conta poupança)



// __________Classe PAI____________

function contaBancaria(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

contaBancaria.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)

        return
    }
    this.saldo -= valor
    this.verSaldo()
}
contaBancaria.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}
contaBancaria.prototype.verSaldo = function () {
    console.log(`Ag:${this.agencia}/Conta:${this.conta}/Saldo:R$${this.saldo.toFixed(2)}`)
}

//___________Classe Filha(Conta Corrente)__________

function contaCorrente(agencia,conta,saldo,limite){
    contaBancaria.call(this, agencia,conta,saldo)
    this.limite = limite
}

contaCorrente.prototype = Object.create(contaBancaria.prototype)
contaCorrente.prototype.constructor = contaCorrente

contaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)

        return
    }
    this.saldo -= valor
    this.verSaldo()
}

const conta = new contaCorrente(111, 222, 0 , 100)
console.log(conta)

conta.sacar(100)

// ______Classe Filha(Conta Poupança)______

function contaPoupança(agencia,conta,saldo){
    contaBancaria.call(this, agencia,conta,saldo)
}

contaPoupança.prototype = Object.create(contaBancaria.prototype)
contaPoupança.prototype.constructor = contaPoupança

const contaCP = new contaPoupança(333, 444, 0)

contaCP.depositar(100)
contaCP.sacar(100)
contaCP.sacar(1)

