
function mostrar() {
    let marcados = document.querySelector("input[type=checkbox]:checked"); // Verifica se o checkbox está selecionado
    let botao = document.getElementById("inv");                            // Pega o input text invisível
    botao.style.display = (marcados != null) ? "block" : "none";           // Condição
  }