const numero = Number (prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const textoDaDiv = document.getElementById('texto');

let testInteiro = Number.isInteger(numero);
let testNaN = Number.isNaN(numero);
let floorA = Math.floor(numero);
let ceilA = Math.ceil(numero);


numeroTitulo.innerHTML = numero;
textoDaDiv.innerHTML += (`<p>Raiz Quadrada: ${Math.sqrt(numero)}</p> <br>`);
textoDaDiv.innerHTML += (`${numero} é inteiro: ${testInteiro}  <br>`);
textoDaDiv.innerHTML += (`${numero} é NaN: ${testNaN} <br>`);
textoDaDiv.innerHTML += (`Aredondando para baixo:${floorA} <br>`);
textoDaDiv.innerHTML +=(`Aredondando para cima: ${ceilA} <br>`);
textoDaDiv.innerHTML += (`Com duas casa decimais: ${numero.toFixed(2)}`)