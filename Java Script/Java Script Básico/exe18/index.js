const elementos = [
    {tag: 'p' , texto: 'Frase 1'}, //0
    {tag: 'div', texto : 'Frase 2'},//1
    {tag: 'footer', texto: 'Frase 3'},//2
    {tag: 'section' , texto:'Frase 4'}//3
]

const container = document.querySelector('#container');
const div = document.createElement('div')

for(let i = 0 ; i < elementos.length ; i++){
   let {tag ,texto} = elementos [i]
   let tagCriada = document.createElement(tag);
   tagCriada.innerHTML = texto;
   div.appendChild(tagCriada)
   
}

container.appendChild(div)

// Neste exercicio utilizei a desestruturação para pegar os elementos dentro dos objetos
// utilizei o for para criar um laço e cada iteração uma tag era criada, e um texto alocado
// depois passei o texto para dentro das tags criadas, e apos isso adicionei no html
// a div com todas as tags, depois disso adicionei ela dentro do container pre-criado.

