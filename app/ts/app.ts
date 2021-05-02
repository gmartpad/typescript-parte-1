document.querySelector('.form').addEventListener('submit', e => new NegociacaoController().adiciona(e))
const negociacao = new Negociacao( new Date(), 1, 100);
console.log(negociacao);