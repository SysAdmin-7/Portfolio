/**
 * SCRIPT ACCUEIL - PORTFOLIO BTS SIO SISR
 * Mathis Dubos
 */

document.addEventListener("DOMContentLoaded", function () {
    // --- 1. Uptime dynamique dans le terminal fictif ---
    const uptimeElement = document.getElementById("terminal-uptime");
    if (uptimeElement) {
        let seconds = 3600 * 48 + 1420; // Début fictif (2 jours et quelques)
        setInterval(() => {
            seconds++;
            const days = Math.floor(seconds / 86400);
            const hours = Math.floor((seconds % 86400) / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            uptimeElement.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
        }, 1000);
    }

    // --- 2. Copie du mail au clic avec tooltip ---
    const emailBadge = document.getElementById("btn-copy-email");
    if (emailBadge) {
        emailBadge.addEventListener("click", function (e) {
            e.preventDefault();
            const email = "mathisdubos15@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailBadge.innerHTML;
                emailBadge.innerHTML = '<i class="fas fa-check" style="color:#10b981;"></i> Email copié !';
                setTimeout(() => {
                    emailBadge.innerHTML = originalText;
                }, 2500);
            }).catch(() => {
                window.location.href = `mailto:${email}`;
            });
        });
    }

    // --- 3. Animation douce au défilement (Smooth Scroll) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
