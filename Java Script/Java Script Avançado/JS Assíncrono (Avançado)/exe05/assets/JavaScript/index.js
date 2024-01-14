// Vamos fazer o mesmo exercicio de resquisão html com fetch API vamos ve como é um codigo mais limpo
// porque a fetch API ja retorna pra gente uma promisse por padrão ai basta pegar com async e await 

document.addEventListener('click', event =>{
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();
    if(tag === 'a' ){
        event.preventDefault()
        carregaRequest(elemento)
    }
})

async function carregaRequest(elemento){
try{
  const href = elemento.getAttribute('href');
  const response = await fetch(href) // Aqui estou utilizando o fetch para pegar a pagina

  if(response.status !== 200) throw new Error ('ERROR-404');

  const html = await response.text()
  loadRequest(html);
}catch(e){
    console.log(e)
}

}

function loadRequest(response){
   const request = document.querySelector('.resultado');
   request.innerHTML = response 
}