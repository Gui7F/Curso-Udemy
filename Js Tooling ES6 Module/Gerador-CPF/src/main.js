import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'



(function (){ //IFFE
  const gerado = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gerado.geraNovoCpf()
})();