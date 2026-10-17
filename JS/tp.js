/**
 * GESTION DYNAMIQUE DES TPs & PROJETS
 * BTS SIO SISR - Mathis Dubos
 */

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("tp-search-input");
    const categoryTabs = document.querySelectorAll(".category-tab");
    const tpCards = document.querySelectorAll(".tp-card");
    const tpSections = document.querySelectorAll(".tp-section");
    const countDisplay = document.getElementById("results-count");

    // Modal elements
    const modalOverlay = document.getElementById("tp-modal");
    const modalTitle = document.getElementById("tp-modal-title");
    const modalMeta = document.getElementById("tp-modal-meta");
    const modalDesc = document.getElementById("tp-modal-desc");
    const modalCompetences = document.getElementById("tp-modal-competences");
    const modalTools = document.getElementById("tp-modal-tools");
    const modalDownload = document.getElementById("tp-modal-download");
    const modalClose = document.getElementById("tp-modal-close");

    // Calcul automatique des compteurs de badges
    const totalCards = document.querySelectorAll(".tp-card").length;
    const totalCountEl = document.getElementById("total-tp-count");
    if (totalCountEl) totalCountEl.textContent = totalCards;

    categoryTabs.forEach(tab => {
        const cat = tab.getAttribute("data-category");
        const badge = tab.querySelector(".tab-badge");
        if (badge) {
            if (cat === "all") {
                badge.textContent = totalCards;
            } else {
                const count = document.querySelectorAll(`.tp-card[data-category="${cat}"]`).length;
                badge.textContent = count;
            }
        }
    });

    // --- 1. Filtrage combiné (Recherche + Catégorie) ---
    function filterTPs() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const activeTab = document.querySelector(".category-tab.active");
        const activeCategory = activeTab ? activeTab.getAttribute("data-category") : "all";

        let visibleCount = 0;

        tpSections.forEach(section => {
            let sectionHasVisibleCards = false;
            const cardsInSection = section.querySelectorAll(".tp-card");

            cardsInSection.forEach(card => {
                const cardCat = card.getAttribute("data-category");
                const cardTitle = card.querySelector(".tp-card-title") ? card.querySelector(".tp-card-title").textContent.toLowerCase() : "";
                const cardDesc = card.querySelector(".tp-card-desc") ? card.querySelector(".tp-card-desc").textContent.toLowerCase() : "";
                const cardSkills = card.querySelector(".tp-skills-tags") ? card.querySelector(".tp-skills-tags").textContent.toLowerCase() : "";
                const cardFormat = card.querySelector(".badge-format") ? card.querySelector(".badge-format").textContent.toLowerCase() : "";

                const matchesCat = (activeCategory === "all" || cardCat === activeCategory);
                const matchesQuery = !query || 
                    cardTitle.includes(query) || 
                    cardDesc.includes(query) || 
                    cardSkills.includes(query) ||
                    cardFormat.includes(query);

                if (matchesCat && matchesQuery) {
                    card.style.display = "flex";
                    sectionHasVisibleCards = true;
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            // Afficher ou masquer la section entière si aucun TP ne correspond
            if (sectionHasVisibleCards) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });

        if (countDisplay) {
            countDisplay.textContent = `${visibleCount} TP${visibleCount > 1 ? 's' : ''} affiché${visibleCount > 1 ? 's' : ''}`;
        }
    }

    // Événement tabs catégories
    categoryTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            categoryTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            filterTPs();
        });
    });

    // Événement recherche instantanée
    if (searchInput) {
        searchInput.addEventListener("input", filterTPs);
    }

    // --- 2. Modal des Détails du TP ---
    document.querySelectorAll(".btn-details").forEach(btn => {
        btn.addEventListener("click", function () {
            const card = this.closest(".tp-card");
            if (!card) return;

            const title = card.getAttribute("data-modal-title") || card.querySelector(".tp-card-title").textContent;
            const category = card.getAttribute("data-modal-category") || "BTS SIO SISR";
            const level = card.getAttribute("data-modal-level") || "Tous niveaux";
            const desc = card.getAttribute("data-modal-desc") || card.querySelector(".tp-card-desc").textContent;
            const competences = card.getAttribute("data-modal-competences") ? card.getAttribute("data-modal-competences").split(";") : [];
            const tools = card.getAttribute("data-modal-tools") || "Outils standard";
            const downloadUrl = card.querySelector(".btn-download") ? card.querySelector(".btn-download").getAttribute("href") : "#";
            const downloadName = card.querySelector(".btn-download") ? card.querySelector(".btn-download").getAttribute("download") : "";

            modalTitle.textContent = title;
            modalMeta.textContent = `${category} • Niveau : ${level}`;
            modalDesc.textContent = desc;
            modalTools.textContent = tools;

            // Remplir compétences
            modalCompetences.innerHTML = "";
            if (competences.length > 0) {
                competences.forEach(comp => {
                    const li = document.createElement("li");
                    li.textContent = comp.trim();
                    modalCompetences.appendChild(li);
                });
            } else {
                const li = document.createElement("li");
                li.textContent = "Acquisition et validation des compétences du référentiel BTS SIO SISR.";
                modalCompetences.appendChild(li);
            }

            // Lien téléchargement
            if (modalDownload) {
                modalDownload.setAttribute("href", downloadUrl);
                if (downloadName) {
                    modalDownload.setAttribute("download", downloadName);
                }
            }

            modalOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });

    // Initialisation
    filterTPs();
});
