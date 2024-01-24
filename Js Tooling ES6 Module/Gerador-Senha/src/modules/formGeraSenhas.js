import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracter = document.querySelector('.qtd-caracter'); 
const checkMaiscula = document.querySelector('.check-maiuscula');
const checkMinuscula = document.querySelector('.check-minuscula');
const checkNumeros = document.querySelector('.check-numeros');
const checkSimbolos = document.querySelector('.check-simbolos');
const gerarSenha = document.querySelector('.gerar-senha')



export default () =>{
 gerarSenha.addEventListener('click', ()=>{
    senhaGerada.innerHTML = gerar();
 })
}

function gerar(){
    const senha = geraSenha(
        qtdCaracter.value, 
        checkMaiscula.checked, 
        checkMinuscula.checked, 
        checkNumeros.checked, 
        checkSimbolos.checked
   );

   return senha || 'Nada Selecionado.';
}