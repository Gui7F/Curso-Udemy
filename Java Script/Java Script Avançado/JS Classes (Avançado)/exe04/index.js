class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0 ;
    }
    aumentarVolume(){
        this.volume += 2
    }
    // Metodo de instância, que no caso chamamos com a instancia neste caso controle1. 
    //Fica assim controle1.diminuirVolume()
    diminuirVolume(){
        this.volume -= 2
    }

// A palavra static, torna o metodo diagnosticoControles, um metodo estático que faz referencia do this para
// a classe não para objetos que vão ser criados atraves dela. 
    
    static diagnosticoControles(){
        console.log('Controle Funcionando', this) // Aqui no this vemos a classe como um todo ou seja o static, faz o this
                                                  // ser a classe.
    }
    
}

ControleRemoto.diagnosticoControles() // Ou  seja um metodo static é uma função que esta dentro da classe  

const controle1 = new ControleRemoto ('LG');
controle1.aumentarVolume()
console.log(controle1)