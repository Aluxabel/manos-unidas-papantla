document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad para el botón "Regresar al Inicio"
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Muestra u oculta el botón basado en el desplazamiento de la página
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Desplaza la página al inicio al hacer clic en el botón
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // 2. Validación de Formulario BÁSICA (Cliente-side)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío real del formulario por defecto

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validación simple
            if (nombre === '' || email === '' || mensaje === '') {
                displayMessage('Por favor, completa todos los campos obligatorios.', 'error');
            } else if (!isValidEmail(email)) {
                displayMessage('Por favor, ingresa un correo electrónico válido.', 'error');
            } else {
                // Aquí simularías el envío de datos a un servidor.
                // En un proyecto real, usarías Fetch API o XMLHttpRequest.
                console.log('Datos del formulario:', { nombre, email, mensaje });
                displayMessage('¡Mensaje enviado con éxito! Pronto nos pondremos en contacto.', 'success');
                contactForm.reset(); // Limpia el formulario después del "envío"
            }
        });
    }

    function isValidEmail(email) {
        // Expresión regular simple para validar formato de correo
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message'; // Resetear clases
        formMessage.classList.add(type); // Añadir clase 'success' o 'error'
        formMessage.classList.remove('hidden'); // Mostrar el mensaje

        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000); // Ocultar después de 5 segundos
    }

    // 3. Simulación de carga de video de YouTube (¡IMPORTANTE! Necesitas un ID de video real)
    // Reemplaza 'VID_DE_PAPANTLA_AQUI' con un ID de video de YouTube real.
    // Puedes buscar videos sobre Papantla, la cultura Totonaca, etc.
    const youtubeVideoId = 'K-DtUEsIgdA'; // Video real sobre cultura Totonaca y Papantla
    const iframe = document.querySelector('.video-container iframe');
    if (iframe && youtubeVideoId !== 'VID_DE_PAPANTLA_AQUI') {
        iframe.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
    } else if (iframe) {
        // Si no se proporciona un ID de video real, poner un video de marcador de posición
        iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&showinfo=0&rel=0'; // Rick Roll como placeholder
        console.warn('Advertencia: El ID del video de YouTube no ha sido reemplazado en script.js. Mostrando un placeholder.');
    }
});