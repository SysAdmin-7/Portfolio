     document.getElementById('download-pdf').addEventListener('click', function () {
        // 1. On sélectionne l'élément à transformer en PDF (ta feuille de papier)
        const element = document.querySelector('.paper');

        // 2. Configuration des options du PDF
        const opt = {
            margin:       0, // Marge à 0 car ton CSS gère déjà le padding interne
            filename:     'Lettre_Motivation_Mathis_Dubos.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true }, // scale: 2 améliore la qualité du texte
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // 3. On génère le PDF
        // On change temporairement le style pour que le PDF soit parfait
        // (html2pdf peut parfois être capricieux avec les ombres CSS)
        element.style.boxShadow = 'none'; 
        element.style.marginTop = '0';
        
        html2pdf().set(opt).from(element).save().then(function(){
            // Une fois le téléchargement fini, on remet les styles pour l'écran
            element.style.boxShadow = ''; 
            element.style.marginTop = '';
        });
    });
