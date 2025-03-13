document.addEventListener("DOMContentLoaded", function () {
    const botaoAbrir = document.querySelector("#pagamento button");
    const botaoFechar = document.querySelector("#fechar");
    const divCompra = document.querySelector("#compra");
    const botaoModulo1 = document.querySelector("#ebooks button:first-child"); 

    botaoAbrir.addEventListener("click", function () {
        divCompra.classList.remove("hidden");
    });

    botaoFechar.addEventListener("click", function () {
        divCompra.classList.add("hidden");
    });

    botaoModulo1.addEventListener("click", function () {
        window.open("https://adriel-lucas.herospark.co/matematica-do-zero-modulo-i", "_blank");
    });
});