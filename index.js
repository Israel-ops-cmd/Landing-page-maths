document.addEventListener("DOMContentLoaded", function () {
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