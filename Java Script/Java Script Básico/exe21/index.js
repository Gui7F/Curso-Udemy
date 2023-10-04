//Neste exercicio vamos pegar os estilos computados pelo browser no body e vamos 
//passa para os paragrafos que estao selecionados, querySelectorAll pegou todos eles
// diferente do querySelector que é apenas um elemento.



const div = document.querySelector('#paragrafos');
const p = document.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);//Pegando todos estilos do body
const corBody = estiloBody.backgroundColor// Pegando a cor do background



for (let index of p){
   index.style.backgroundColor = corBody // Aqui mudando a cor do background
   index.style.color = '#FFFFFF' //Aqui estamos mudando a cor das letras 
}

// getComputedStyle ('Aqui vai o elemento' ) tem essa sixtaxe serve para pega 
// todas as folhas de estilo de um elemento para dentro de uma variavel em JS