let quantidade = 0;

document.getElementById('btnGanharRobux').addEventListener('click', function() {
  quantidade += Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
  document.getElementById('quantidadeRobux').textContent = `Robux: ${quantidade}`;
});
