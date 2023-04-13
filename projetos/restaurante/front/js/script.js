const categorias = document.getElementById("categorias");
const restaurantes = document.querySelectorAll(".restaurant-item");

categorias.addEventListener("click", function (event) {
  const categoriaSelecionada = event.target.dataset.categoria;

  // Remover classe "active" de todas as categorias
  categorias.querySelectorAll("li").forEach(function (categoria) {
    categoria.classList.remove("active");
  });

  // Adicionar classe "active" na categoria selecionada
  event.target.classList.add("active");

  // Exibir ou ocultar restaurantes com base na categoria selecionada
  if (categoriaSelecionada === "todos") {
    // Mostrar todos os restaurantes
    restaurantes.forEach(function (restaurante) {
      restaurante.style.display = "block";
    });
  } else {
    // Mostrar apenas os restaurantes da categoria selecionada
    restaurantes.forEach(function (restaurante) {
      if (restaurante.classList.contains(categoriaSelecionada)) {
        restaurante.style.display = "block";
      } else {
        restaurante.style.display = "none";
      }
    });
  }
});
