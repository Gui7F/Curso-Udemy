// Vamos fazer agora o mesmo exercicio de validação CPF utilizando Classes

class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpf = cpfEnviado
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
        
    }

    éSequência(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }


    geraNovoCPF(){
         const cpfParcial = this.cpfLimpo.slice(0, -2)
         const digito1 = ValidaCPF.calculaCPF(cpfParcial)
         const digito2 = ValidaCPF.calculaCPF(cpfParcial + digito1)
         this.novoCPF = cpfParcial + digito1 + digito2
         console.log(digito1)
    }

    static calculaCPF(cpfParcial){
         let total = 0 
         let regressivo = cpfParcial.length + 1

         for( let stringCount of cpfParcial){
            
            total += regressivo * Number(stringCount)

            console.log(stringCount, regressivo,total)

            regressivo -- 
        }

        let digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)

         
    }

     validação(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if(this.éSequência()) return false
        this.geraNovoCPF()
        console.log(this.novoCPF)
        return 'Cheguei aqui'
        
    }
    


}

let cpf = new ValidaCPF('705.484.450-52')
 // cpf = new ValidaCPF('999.999.999-99')

if(this.novoCPF === this.cpfLimpo){
    console.log('CPf válido')
}else{
    console.log('CPF inválido')
}