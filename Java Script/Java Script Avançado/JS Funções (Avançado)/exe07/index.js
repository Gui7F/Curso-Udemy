function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        



        inicia() {
            this.clickBtn()
            this.precionaEnter()
        },

        precionaEnter(){
           this.display.addEventListener('keyup', (e) =>{
            if(e.keyCode === 13){
                this.realizaConta()
            }
           })
        },


        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
             let conta = this.display.value;

             try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta Inválida')
                    return;
                }
                  this.display.value = String(conta)

             }catch(e){
                alert('Conta Inválida')
                return
             }
        },




        clickBtn() {
            document.addEventListener('click', (e) => {
                const element = e.target;
                if (element.classList.contains('button')) {
                    this.linkarDisplay(element.innerText)
                }

                if (element.classList.contains('button-clear')) {
                    this.clearDisplay()
                };

                if (element.classList.contains('button-del')) {
                    this.deleteOne()
                }

                if (element.classList.contains('button-eq')) {
                    this.realizaConta()
                }

            })  // Aqui poderia usar bind() com a palavra function para conserva o this
            //Ou utilizar a arrow function que conserva o this automaticamente

        },

        linkarDisplay(valor) {
            this.display.value += valor
        }
    };


}

const calculadora = criaCalculadora();
calculadora.inicia() 