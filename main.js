//Inicialização: Criar instâncias e iniciar a aplicação

document.addEventListener("DOMContentLoaded", function () {
  const model = new LojaModel();
  const view = new LojaView();
  const controller = new LojaController(model, view);
});
