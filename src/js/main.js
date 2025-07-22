// ==========================
// 🧩 1. Importar Header y Footer
// ==========================
document.getElementById("header-placeholder").innerHTML = await fetch("../components/header.html").then(res => res.text());
document.getElementById("footer-placeholder").innerHTML = await fetch("../components/footer.html").then(res => res.text());


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

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const contents = document.querySelectorAll('.carousel-content');

function showSlide(index) {
    slides.forEach((s, i) => s.style.display = i === index ? 'block' : 'none');
    contents.forEach((c, i) => c.style.display = i === index ? 'flex' : 'none');
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // Cambia cada 5 segundos

// FAQ Toggle Functionality
    document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const expanded = button.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded
            button.setAttribute('aria-expanded', !expanded);

            // Toggle visibility
            answer.style.display = expanded ? 'none' : 'block';

            // Toggle icon
            const icon = button.querySelector('.faq-icon');
            if (icon) {
                icon.textContent = expanded ? '+' : '−';
            }
        });
    });
});
