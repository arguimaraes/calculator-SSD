// Inicializa a variável 'calculation' com o valor armazenado no localStorage ou uma string vazia.
let calculation = localStorage.getItem('calculation') || '';

// Chama a função para exibir o cálculo inicial.
displayCalculation();

// Função para atualizar o cálculo quando um botão é clicado.
function updateCalculation(value) {
  // Adiciona o valor do botão ao cálculo atual.
  calculation += value;

  // Atualiza a exibição do cálculo.
  displayCalculation();

  // Armazena o cálculo atualizado no localStorage.
  localStorage.setItem('calculation', calculation);
}

// Função para exibir o cálculo na página HTML.
function displayCalculation() {
  // Seleciona o elemento HTML com a classe 'js-calculation' e atualiza seu conteúdo.
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}