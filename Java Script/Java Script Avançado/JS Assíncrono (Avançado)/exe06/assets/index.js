// fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => recebeDados(json))

axios('pessoas.json') // diferente do fetch com axios ja pegamos o valor direto da promise
.then(json => recebeDados(json.data))

function recebeDados(json){
    const table = document.createElement('table')
   for(let pessoa of json){
     const tr = document.createElement('tr')

     let td1 = document.createElement('td');
     td1.innerHTML = pessoa.nome
     tr.appendChild(td1)

     let td2 = document.createElement('td');
     td2.innerHTML = pessoa.email
     tr.appendChild(td2)

     let td3 = document.createElement('td');
     td3.innerHTML = pessoa.estado
     tr.appendChild(td3)

     let td4 = document.createElement('td');
     td4.innerHTML = pessoa.salario
     tr.appendChild(td4)

     table.appendChild(tr)

     
     const resultados = document.querySelector('.resultados')
     resultados.appendChild(table)
   }

}

//Conclusão os dois metodos são bem melhores para fazer requisão http que XmlHttpRequest().