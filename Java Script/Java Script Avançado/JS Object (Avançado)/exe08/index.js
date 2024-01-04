// Neste exercicio vamos fazer um algoritmo para validar CPF com uma formula original do governo para 
// validação de CPF 

function ValidaCPF(cpfEnviado){
  Object.defineProperty(this ,'cpfLimpo',{
    enumerable: true,
    get: function(){
        return cpfEnviado.replace(/\D+/g , '') // Isso vai trocar tudo que não for numero por nada
    }
  })
}

ValidaCPF.prototype.valida = function(){
   if (typeof this.cpfLimpo === 'undefined') return false; 
   if (this.cpfLimpo.length !== 11 ) return false;
   if (this.isSequencia()) return false;
   
   const cpfParcial = this.cpfLimpo.slice(0, -2) // Aqui estou pegando apenas os primeiros 9 digitos
   const digito1 = this.calculaCPF(cpfParcial)
   const digito2 = this.calculaCPF(cpfParcial + digito1)

   const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo
}

ValidaCPF.prototype.calculaCPF = function (cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length +1
    let total = cpfArray.reduce((ac, val )=>{
    ac += (regressivo * Number(val));
    regressivo--
    return ac
    },0)
     
    let digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
   
     
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}


const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida())


// CPF de TESTE: '705.484.450-52'  '070.987.720-03'