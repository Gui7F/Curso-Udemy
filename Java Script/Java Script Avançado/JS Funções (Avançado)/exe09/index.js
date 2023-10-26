function Calculadora() {
    this.display = document.querySelector('.display')


    this.inicia = () => {
        this.interaçãoClick()
        this.enterTecla()
    }

    this.interaçãoClick = () => {
        document.addEventListener('click', e => {
            const element = e.target;

            if (element.classList.contains('button'))
                this.addvalorDisplay(element)

            if (element.classList.contains('button-clear')) {
                this.clearDisplay()
            }

            if (element.classList.contains('button-del')) {
                this.deletarUM()
            }

            if (element.classList.contains('button-eq')) {
                this.calcularValores()
            }

        })
    }


   this.enterTecla = () =>{
        document.addEventListener('keyup', e =>{
            if (e.keyCode === 13){
                this.calcularValores()
            }
        })
    }

    this.calcularValores = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if (!conta) {
                alert('Conta Inválida')
                return
            }

            this.display.value = String(conta)
        } catch (e) {
            alert('Conta Inválida')
            return
        }
    }


    this.deletarUM = () => {
        this.display.value = this.display.value.slice(0, -1)
    }



    this.clearDisplay = () => {
        this.display.value = ''
    }



    this.addvalorDisplay = element => {
        this.display.value += element.innerText
        this.display.focus();
    }



}

const calculadora = new Calculadora()
calculadora.inicia()
