const nome = prompt('Seu nome é')




document.body.innerHTML += (`Seu nome é: ${nome} <br/>`)
document.body.innerHTML += (`Seu nome tem qunatas letras? ${nome.length}  <br/>`)
document.body.innerHTML += (`A segunda letra do seu nome é? ${nome [1]} <br/>`)
document.body.innerHTML += (`Qual primeiro indice da letra "e" do seu nome? ${nome.indexOf('e')} <br/>`)
document.body.innerHTML += (`Qual ultimo o indice da letra "e" seu nome? ${nome.lastIndexOf('e')}<br/>`)
document.body.innerHTML += (`As ultimas 3 letras do seu nome? ${nome.slice(-3)} <br/>`)
document.body.innerHTML += (`As palavras do seu nome é ? ${nome.split('  ')}<br/>`)
document.body.innerHTML += (`Seu nome com letra maiuscula: ${nome.toUpperCase} <br/>`)
document.body.innerHTML += (`Seu nome com letra minuscula: ${nome.toLowerCase} <br/>`)