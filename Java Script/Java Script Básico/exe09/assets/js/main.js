//Mudar o padrão do formulario 

const form = document.querySelector('#formulario');
formulario.addEventListener('submit', function (evento) {
   evento.preventDefault()

   const inputPeso = evento.target.querySelector('#Pesovalor')
   const inputAltura = evento.target.querySelector('#Alturavalor')

   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);

   if (!peso) {
      resultados('Peso invalido', false);
      return;
   }

   if (!altura) {
      resultados('Altura invalida', false);
      return;
   }

   const imc = getIMC(peso, altura);
   const nivelIMC= getNivelImc(imc)

   console.log(imc, nivelIMC)


   function getIMC(peso, altura) {
      const imc = peso / altura ** 2;
      return imc.toFixed(2)
   }

   const msg = `Seu IMC é ${imc} (${nivelIMC})`

  resultados(msg, true)

})

function getNivelImc(imc) {
   const nivel =
      ['Abaixo do peso', 'Peso Normal', 'Acima do Peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

   if (imc >= 39.9) return nivel[5]
   if (imc >= 34.9) return nivel[4]
   if (imc >= 29.9) return nivel[3]
   if (imc >= 24.9) return nivel[2]
   if (imc >= 18.9) return nivel[1]
   if (imc < 18.9) return  nivel[0]
  
}



function criaP() {
   const p = document.createElement('p');
   return p;

  
}

function resultados(msg, isValid) {
   const resultado = document.querySelector('#resultado')
   resultado.innerHTML = '';
   const p = criaP()
   if(isValid){ p.classList.add('valido', true)}
   else{p.classList.add('invalido', false)}
   p.innerHTML = msg
   resultado.appendChild(p)

}
