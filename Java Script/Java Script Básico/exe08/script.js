/*
Os operadores em Java Script são Logicos, Comparativos

Logicos     
AND === &&
OUR === ||
NOT === !  

Comparativos
>  Maior que
<  Menor que
>= Maior ou igual
<= Menor ou igual
== Igualdade
=== Igualdade Estrita
!= Diferença
!== Diferença Estrita 
*/

/*
  Vamos montar um sistema que fala Bom dia Boa Tarde e Boa Noite 
  utilizando if else

  Entre 0 - 11 Bom Dia
  Entre 12 - 17 Boa Tarde
  Entre 18 - 23 Boa Noite
*/ 

//if pode ser usado sozinho 
//Sempre que utilizo a palavra else, preciso de um if antes
//Eu posso utilizar quantos else if forem necessarios na checagem
//Só posso ter um else na checagem

const hora = 50 ;

if (hora >= 0 && hora <= 11) {
  console.log('Bom Dia!')
} else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde!')
} else if(hora >= 18 && hora<= 23){
    console.log('Boa Noite!')
}else{
    console.log('Olá')
}