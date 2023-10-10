const inputTarefa = document.querySelector('.input-tarefa')
const buttonTarefa = document.querySelector('.button-tarefa')
const listaTarefa = document.querySelector('.lista-tarefa')


function criaLi() {
    const li = document.createElement('li')
    return li
}
function criaTarefa(tarefa) {
    const li = criaLi()
    li.innerText = tarefa
    listaTarefa.appendChild(li)

    li.setAttribute('class', 'li')

    limpaInput()

    criaBotaoApagar(li)

    salvaTarefas()
}
function salvaTarefas() {
    const liTarefas = listaTarefa.querySelectorAll('li')
    const listadeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Remover', '').trim();
        listadeTarefas.push(tarefaTexto)

        console.log(listadeTarefas)
    }

    const tarefasJSON = JSON.stringify(listadeTarefas)

    localStorage.setItem('tarefas', tarefasJSON)
}
function recuperarJSON (){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    for(let index of listaDeTarefas){
        criaTarefa(index)
    }
}

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    const botao = document.createElement('button')
    botao.innerText = 'Remover'
    li.innerText += ' '
    botao.setAttribute('class', 'remover',)
    botao.setAttribute('title', 'Remover esta tarefa',)

    li.appendChild(botao)
}

document.addEventListener('click', function (e) {
    const element = e.target
    if (element.classList.contains('remover')) {
        element.parentElement.remove()

        salvaTarefas()
    }
})

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }


})


buttonTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)


})

recuperarJSON ()