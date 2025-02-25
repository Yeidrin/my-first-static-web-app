// Obtener todos los inputs del carrusel
const inputs = document.querySelectorAll('.carousel-open');

// Gradientes de fondo para el carrusel
const backgroundGradients = [
    'linear-gradient(to top, #FFFFFF 0%, #D6A8C2 100%)',  // Gradiente para el slide 1
    'linear-gradient(to top, #FFFFFF 0%, #623826 100%)',  // Gradiente para el slide 2
    'linear-gradient(to top, #FFFFFF 0%, #FFD07C 100%)'   // Gradiente para el slide 3
];

// Colores sólidos para el div 'envios'
const backgroundColors = [
    '#D6A8C2', // Color sólido para el slide 1
    '#623826', // Color sólido para el slide 2
    '#FFD07C'  // Color sólido para el slide 3
];

// Div envios
const enviosDiv = document.querySelector('#envios'); // Asegúrate de que este ID sea correcto

// Contenedor del carrusel
const carousel = document.querySelector('.carousel');

// Inicializar el carrusel al cargar la página
let currentIndex = 0; // Índice actual del input seleccionado
function initializeCarousel() {
    // Activar el primer input del carrusel
    inputs[currentIndex].checked = true;

    // Establecer el fondo inicial del carrusel
    carousel.style.background = backgroundGradients[currentIndex];

    // Establecer el fondo inicial del div 'envios'
    enviosDiv.style.background = backgroundColors[currentIndex];
}

// Configurar el intervalo de 15 segundos para el carrusel
setInterval(() => {
    // Desactivar el input actual
    inputs[currentIndex].checked = false;

    // Pasar al siguiente input (o volver al primero si se llega al final)
    currentIndex = (currentIndex + 1) % inputs.length;

    // Activar el nuevo input
    inputs[currentIndex].checked = true;

    // Cambiar el fondo del carrusel al gradiente correspondiente
    carousel.style.background = backgroundGradients[currentIndex];

    // Cambiar el fondo del div 'envios' al color sólido correspondiente
    enviosDiv.style.background = backgroundColors[currentIndex];
}, 10000); 
// Llamar a la función de inicialización al cargar la página
window.onload = initializeCarousel;
