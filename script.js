
// Função para aplicar a classe 'visible' quando a seção estiver visível na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Seleciona todas as seções com a classe 'fade-in'
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Navegação suave entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
