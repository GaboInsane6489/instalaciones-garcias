console.log('✅ main.js cargado');




(async () => {

    const lofiClick = new Audio('../assets/audio/light-clicking-perc_173bpm.wav');
    lofiClick.volume = 0.5;

    document.querySelectorAll('.main-nav a, .main-nav button, .main-nav [role="menu"] li').forEach(el => {
        el.addEventListener('click', () => {
            playClickSound();
        });
    });

    function playClickSound() {
        lofiClick.currentTime = 0;
        lofiClick.play();
    }

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

    toggleBtn.addEventListener('click', () => {
        playClickSound();
        navItems.classList.toggle('active');
    });

    // ==========================
    // 🧩 JavaScript acordeón
    // ==========================
    document.querySelectorAll('[data-toggle="submenu"]').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            playClickSound();
            const submenu = item.nextElementSibling;
            submenu.classList.toggle('active');

            document.querySelectorAll('.submenu').forEach(other => {
                if (other !== submenu) {
                    other.classList.remove('active');
                }
            });
        });
    });

    // ==========================
    // 🎞️ Carrusel HERO
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
    }, 5000);

    // ==========================
    // ❓ Lógica para FAQ
    // ==========================
    console.log('✅ JS cargado');
    const faqButtons = document.querySelectorAll('.faq-question');
    console.log('👉 Detectados:', faqButtons.length);

    faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        playClickSound();

        const faqItem = button.parentElement;
        const expanded = button.getAttribute('aria-expanded') === 'true';

        const existingAnswer = faqItem.querySelector('.faq-answer');
        if (existingAnswer) existingAnswer.remove();

        if (!expanded) {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('faq-answer');
            const p = document.createElement('p');

            const textoOriginal = button.textContent.replace(/\s+/g, ' ').trim();
            let texto = '';

            if (textoOriginal.includes('¿Qué servicios ofrece Instalaciones García')) {
                texto = 'Ofrecemos drywall, electricidad, mantenimiento técnico y remodelaciones integrales para hogares y empresas.';
            } else if (textoOriginal.includes('¿Cómo solicito una cotización')) {
                texto = 'Puedes solicitarla desde el botón principal o en la sección de contacto. Respondemos en menos de 24 horas.';
            } else if (textoOriginal.includes('¿Trabajan en todo el país')) {
                texto = 'Sí, atendemos proyectos en Caracas, Valencia, Maracay y otras ciudades principales de Venezuela.';
            } else {
                texto = 'Contenido no disponible.';
            }

            p.textContent = texto;
            answerDiv.appendChild(p);
            faqItem.appendChild(answerDiv);

            button.setAttribute('aria-expanded', 'true');
            button.querySelector('.faq-icon').textContent = '−';
        } else {
            button.setAttribute('aria-expanded', 'false');
            button.querySelector('.faq-icon').textContent = '+';
        }
    });
});

})();
