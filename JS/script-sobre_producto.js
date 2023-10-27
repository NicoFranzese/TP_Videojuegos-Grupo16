const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;


// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Configura un intervalo para avanzar automáticamente cada 3 segundos (3000 milisegundos)
let autoAdvanceInterval = setInterval(nextSlide, 3000);

// Detén el intervalo al pasar el mouse sobre el botón "Siguiente"
nextButton.addEventListener('mouseover', () => {
    clearInterval(autoAdvanceInterval);
});

// Reanuda el avance automático cuando el mouse sale del botón "Siguiente"
nextButton.addEventListener('mouseout', () => {
    autoAdvanceInterval = setInterval(nextSlide, 3000);
});

function showSlide(index) {
    if (index == -1) {
        index = 2;
    } else if (index == -2) {
        index = 1;
    }
    //const slideWidth = 100 / slides.length;
    const slideWidth = 300;
    const translateX = -index * slideWidth;
    slides.forEach((slide, i) => {
        //slide.style.transform = `translateX(${translateX}%)`;
        slide.style.transform = `translateX(${translateX}px)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1) % slides.length;
    //currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);

function irAInicio() {
    window.location.href = "index.html";
}

function irANovedades() {
    window.location.href = "Novedades.html";
}

function irAQuienesSomos() {
    window.location.href = "Quienes_Somos.html";
}
