class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', evento =>{
            this.handleSubmit(evento)
        });
    }

    handleSubmit(evento){
        evento.preventDefault();
       const inputValido = this.validaInput();
    }

    validaInput(){
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for ( let input of this.formulario.querySelectorAll('.validar')){
            const label = input.previousElementSibling.innerText
            if(!input.value){
                this.criaErro(input, `Campo ${label} não pode estar em branco.`)
                valid = false
            }
        }
    }

    criaErro(input, msg){
        const aviso = document.createElement('p')
        aviso.innerHTML = msg
        aviso.classList.add('error-text')
        input.insertAdjacentElement('afterend', aviso)
    }
}

const valida = new ValidaFormulario();