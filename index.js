document.addEventListener("DOMContentLoaded", function () {
    const botaoAbrir = document.querySelector("#pagamento button");
    const botaoFechar = document.querySelector("#fechar");
    const divCompra = document.querySelector("#compra");

    const botaoModulo1 = document.querySelector("#ebooks button:first-child");
    
    const botaoBonus = document.querySelector("#bonus-btn"); 
    const botaoGarantia = document.querySelector("#garantia button");


    const botaoModuloSumario = document.querySelector("#modulo1 .mod");
    botaoModuloSumario.addEventListener("click", function () {
        divCompra.classList.remove("hidden");
    })

    botaoAbrir.addEventListener("click", function () {
        divCompra.classList.remove("hidden");
    })

    botaoFechar.addEventListener("click", function () {
        divCompra.classList.add("hidden");
    })

    botaoModulo1.addEventListener("click", function () {
        window.open("https://pay.herospark.com/matematica-do-zero-modulo-i-410186");
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


    function scrollToPayment() {
        const pagamentoSection = document.getElementById('pagamento');
        pagamentoSection.scrollIntoView({ 
            behavior: 'smooth' 
        })
    }

    
    const botaoNovaTurma = document.querySelector('button[type="button"]'); 
    if (botaoNovaTurma) {
        botaoNovaTurma.addEventListener("click", scrollToPayment);
    }
})
