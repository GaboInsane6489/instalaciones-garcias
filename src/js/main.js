// ==========================
// 🧩 1. Importar Header y Footer
// ==========================
document.getElementById("header-placeholder").innerHTML = await fetch("../components/header.html").then(res => res.text());
document.getElementById("footer-placeholder").innerHTML = await fetch("../components/footer.html").then(res => res.text());

// ==========================
// 🖼️ 2. Rotación de fondo en sección HERO
// ==========================
const heroSection = document.querySelector('.hero');

const fondoImages = [
    "../assets/fondo-hero/1.jpg",
    "../assets/fondo-hero/2.jpg",
    "../assets/fondo-hero/3.jpg",
    "../assets/fondo-hero/4.jpg",
    "../assets/fondo-hero/5.jpg"
];

let fondoIndex = 0;

/**
    * Cambia el fondo de la sección HERO de forma cíclica
*/
function cambiarFondo() {
    heroSection.style.backgroundImage = `url('${fondoImages[fondoIndex]}')`;
    fondoIndex = (fondoIndex + 1) % fondoImages.length;
}

// Inicializa el fondo al cargar
cambiarFondo();

// Cambia el fondo cada 6 segundos
setInterval(cambiarFondo, 6000);

// ==========================
// 📱 3. Comportamiento del menú responsive
// ==========================
const toggleBtn = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

/**
    * Activa/desactiva el menú de navegación en móviles
*/
toggleBtn.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

// ==========================
// 🧩 JavaScript acordeón
// ==========================

document.querySelectorAll('[data-toggle="submenu"]').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const submenu = item.nextElementSibling;
        submenu.classList.toggle('active');

        // Cierra otros submenús si quieres comportamiento exclusivo
        document.querySelectorAll('.submenu').forEach(other => {
            if (other !== submenu) {
                other.classList.remove('active');
            }
        });
    });
});

// ==========================
// 🎞️ Carrusel HERO: Rotación automática de slides
// ==========================

const heroSlides = document.querySelectorAll('.carousel-slide'); // Colección de slides
let currentSlide = 0;

/**
    * Muestra el siguiente slide en el carrusel principal
*/
function actualizarCarruselHero() {
    // Oculta todos los slides
    heroSlides.forEach(slide => slide.classList.remove('active'));

    // Muestra el slide actual
    heroSlides[currentSlide].classList.add('active');

    // Prepara el índice para el siguiente ciclo
    currentSlide = (currentSlide + 1) % heroSlides.length;
}

// Activa la rotación automática cada 6 segundos
setInterval(actualizarCarruselHero, 6000);

// Carga el primer slide al iniciar
actualizarCarruselHero();