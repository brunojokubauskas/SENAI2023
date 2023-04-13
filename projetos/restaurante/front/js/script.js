const todos = document.getElementById("todos");
const categorias = document.querySelectorAll(".filter-container ul li");

categorias.forEach((categoria) => {
  categoria.addEventListener("click", () => {
    console.log(categoria);
    categorias.forEach((categoria) => {
      categoria.classList.remove("active");
    });
    categoria.classList.add("active");
  });
});
