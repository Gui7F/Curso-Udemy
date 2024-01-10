// Vamos aprender sobre AJAX, e como fazer requição do AJAX date com XMLHttpRequest(GET) + Promise
// ou seja vamos resquistar dados AJAX, neste caso paginas HTML

// Os verbos http serve para manda instruçoes ao servidor qual tipo de requisão que estamos fazendo
// GET-> Para pegar um pagina  xhr.open('GET', 'URL', true); o true é o valor que mostra se é assincrono=true ou sincrono=false
// POST -> Para enviar um dado ao servidor, mais neste caso não vamos enviar nada
// Temos varios outros verbos do XMLHttpRequest 
const requestAJAX = obj =>{
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load' , ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve (xhr.responseText);                // Aqui vamos cria uma função para receber o response da requisição
            }else{
                reject (xhr.statusText);
            }
        })

    })

}

//Obs: Codigos Https, é uma boa pesquisa para fazer, para entender oque cada codigo do protocolo siginifica
// codigos entre 200 e 300, são referente a sucesso na requisição

document.addEventListener('click', event =>{
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();
    if(tag === 'a' ){
        event.preventDefault()
        carregaRequest(elemento)
    }
})

function carregaRequest(elemento){
  const href = elemento.getAttribute('href');
  
  const objectConfig = {
    method:'GET',
    url:href,
  }
  requestAJAX(objectConfig).then(response =>{
    loadRequest(response)
  }).catch(error=> console.log(error));
}

function loadRequest(response){
   const request = document.querySelector('.resultado');
   request.innerHTML = response 
}