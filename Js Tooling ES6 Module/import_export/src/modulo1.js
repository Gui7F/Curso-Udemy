export const nome = 'Luffy'
export const sobrenome  = 'Monkey D'
export const idade = 19

export function cacula (cal){
    return eval(cal)
}

// export {nome, sobrenome as segundoNome, idade, cacula} Podemos tambem export direto

export class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}
 