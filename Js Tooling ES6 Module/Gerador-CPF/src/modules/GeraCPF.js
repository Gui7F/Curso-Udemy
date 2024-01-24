import ValidaCPF  from "./validaCPF";

export default class GeraCPF{
  rand(min = 100000000 , max = 999999999){
    return String(Math.floor(Math.random() * (max - min) + min))
  }

formatado(cpf){
    return(
        cpf.slice(0, 3)+ '.' +
        cpf.slice(3, 6)+ '.' +
        cpf.slice(6, 9)+ '-' +
        cpf.slice(9 , 11)
    )
}

  geraNovoCpf(){
    const cpfSemDigito = this.rand();
    const digito = ValidaCPF.calculaCPF(cpfSemDigito);
    const digito2 = ValidaCPF.calculaCPF(cpfSemDigito + digito);
    const novoCPF = cpfSemDigito + digito + digito2;
    return this.formatado(novoCPF)
  }
}