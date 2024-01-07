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
       const senhaValida = this.validaSenha()

       if(inputValido && senhaValida){
        alert('Formulário enviado.');
        this.formulario.submit();
       }
    }
    validaSenha(){
        let valid = true
        
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha, 'As senhas devem ser iguais.')
            this.criaErro(repetirSenha, 'As senhas devem ser iguais.')
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid
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

            if(input.classList.contains('cpf')){
                if(!this.validaCPF(input)) valid = false
            }

            if(input.classList.contains('usuario')){
                if(!this.validaUsuario(input)) valid = false
            }
        }
        return valid
    }

    validaUsuario(input){
        const usuario = input.value;
        let valid = true
        if(usuario.length <3 || usuario.length >12){
            this.criaErro(input, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(input, 'Nome de usuário precisar conter apenas letras e/ou números.')
            valid = false
        }     
        return valid
    }

    validaCPF(input){
        const cpf = new ValidaCPF (input.value);
        if(!cpf.validação()){
           this.criaErro(input, 'CPF inválido');
           return false
        }

        return true
    }

    criaErro(input, msg){
        const aviso = document.createElement('p')
        aviso.innerHTML = msg
        aviso.classList.add('error-text')
        input.insertAdjacentElement('afterend', aviso)
    }
}

const valida = new ValidaFormulario();