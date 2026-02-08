$(document).ready(function() {
    // --- 1. Gestion de la navigation au scroll ---
    const navbar = document.getElementById('navbar-veille');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Si on a scrollé de plus de 50px, on ajoute la classe 'scrolled'
            navbar.classList.add('scrolled');
            // On change le style pour qu'il soit plus opaque et blanc
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-light', 'bg-white', 'shadow-sm');
        } else {
            // Sinon on revient à l'état initial
            navbar.classList.remove('scrolled', 'bg-white', 'shadow-sm');
            navbar.classList.add('navbar-light');
        }
    });

    // --- 2. Animations d'apparition au scroll (Intersection Observer) ---
    // C'est une API moderne pour détecter quand un élément entre dans l'écran

    const observerOptions = {
        root: null, // Utilise le viewport du navigateur
        threshold: 0.2, // Déclenche quand 20% de l'élément est visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si l'élément entre dans l'écran
            if (entry.isIntersecting) {
                // On ajoute la classe 'visible' qui lance l'animation CSS
                entry.target.classList.add('visible');
                // On arrête d'observer cet élément une fois qu'il est apparu
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // On cible tous les éléments qui ont la classe '.animate-block'
    document.querySelectorAll('.animate-block').forEach(block => {
        observer.observe(block);
    });

    // --- 3. Smooth Scroll pour les liens de navigation (Correction pour Bootstrap 5) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculer l'offset de la navbar fixée
                const navHeight = document.getElementById('navbar-veille').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});