const musculos = document.querySelectorAll(".musculo");

musculos.forEach((musculo) => {
    musculo.addEventListener("click", () => {
        musculo.classList.toggle("seleccionado");
    });
});