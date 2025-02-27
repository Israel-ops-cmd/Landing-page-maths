document.addEventListener("DOMContentLoaded", function () {
    const botaoAbrir = document.querySelector("#pagamento button");
    const botaoFechar = document.querySelector("#fechar");
    const divCompra = document.querySelector("#compra");

    botaoAbrir.addEventListener("click", function () {
        divCompra.classList.remove("hidden");
    });

    botaoFechar.addEventListener("click", function () {
        divCompra.classList.add("hidden");
    });
});
