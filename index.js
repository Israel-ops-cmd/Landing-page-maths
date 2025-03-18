document.addEventListener("DOMContentLoaded", function () {
    const botaoAbrir = document.querySelector("#pagamento button");
    const botaoFechar = document.querySelector("#fechar");
    const divCompra = document.querySelector("#compra");

    const botaoModulo1 = document.querySelector("#ebooks button:first-child");
    const botaoModulo2 = document.querySelector("#ebooks button:last-child");

    const modalModulo2 = document.querySelector("#modal-modulo2");
    const fecharModulo2 = document.querySelector("#fechar-modulo2");
    const overlay = document.querySelector("#overlay");

    const botaoBonus = document.querySelector("#bonus-btn"); 
    const botaoGarantia = document.querySelector("#garantia button"); 

    
    botaoAbrir.addEventListener("click", function () {
        divCompra.classList.remove("hidden");
    })

    botaoFechar.addEventListener("click", function () {
        divCompra.classList.add("hidden");
    })

    
    botaoModulo1.addEventListener("click", function () {
        window.open("https://adriel-lucas.herospark.co/matematica-do-zero-modulo-i-e2a0ef2c-2183-4a70-a764-bbb0d58546f9", "_blank");
    })

    
    botaoModulo2.addEventListener("click", function () {
        modalModulo2.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })

    
    fecharModulo2.addEventListener("click", function () {
        modalModulo2.classList.add("hidden");
        overlay.classList.add("hidden");
    })

    
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';  
            } else {
                answer.style.display = 'none';  
            }
        })
    })

    
    const abrirCompra = function() {
        divCompra.classList.remove("hidden");
    }

    botaoBonus.addEventListener("click", abrirCompra);
    botaoGarantia.addEventListener("click", abrirCompra);
})
