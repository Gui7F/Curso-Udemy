const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiscula = () => String.fromCharCode(rand(65, 91)); 
const geraMinuscula = () => String.fromCharCode(rand(97, 123)); 
const geraNumero = () => String.fromCharCode(rand(48, 58)); 
const simbolos = "{}[]=-_@!#$%¨&*()°/;:<>^^"
const geraSimbolos = () => simbolos[rand(0, simbolos.length)]



export default function geraSenha(qtd, maiusculas, minusculas, numero, simbolos){
   const senhaArray = [];
   qtd = Number(qtd)

   for(let i = 0 ; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiscula());
    minusculas && senhaArray.push(geraMinuscula());
    numero && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolos());
   }
   return senhaArray.join('').slice(0 , qtd);

}

