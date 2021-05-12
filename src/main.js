import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css';

const button = document.querySelector('.geraButton');

button.addEventListener('click', function (e) {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})



