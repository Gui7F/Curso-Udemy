//(Condição) ? 'Valor para true' : 'Valor para false' ;

const pontuaçãoUsuário = 1000

//if (pontuaçãoUsuário >= 1000){
  //  console.log('VIP');
//}else{
  //  console.log('Normal')
//}

//Vamos fazer a mesma condição com (OP Ternário)

const nivelUsuario = (pontuaçãoUsuário >= 1000) ? 'VIP' : 'Normal'
console.log(nivelUsuario)