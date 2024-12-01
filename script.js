const curriculo = document.getElementById('curriculo');

curriculo.addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = "/Curriculo-Gustavo-Neves.pdf"; // Coloque aqui a URL do PDF
    link.download = "Curriculo-Gustavo-Neves.pdf"; // Nome sugerido para o arquivo baixado
    document.body.appendChild(link); // Adiciona o link temporariamente ao DOM
    link.click(); // Simula o clique no link
    document.body.removeChild(link);
});

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

// CARROSEL

const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    let currentSlide = 0;

    function updateCarousel(newIndex) {
      track.style.transform = `translateX(-${newIndex * 100}%)`;
      indicators[currentSlide].classList.remove('active');
      indicators[newIndex].classList.add('active');
      currentSlide = newIndex;
    }

    prevButton.addEventListener('click', () => {
      const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      updateCarousel(newIndex);
    });

    nextButton.addEventListener('click', () => {
      const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      updateCarousel(newIndex);
    });

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        updateCarousel(index);
        
    });
  });
