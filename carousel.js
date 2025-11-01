document.addEventListener('DOMContentLoaded', () => {

    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {

        const isMini = carousel.classList.contains('carousel-mini');
        const images = carousel.querySelectorAll('img');
        let currentIndex = Math.floor(images.length / 2); // départ sur la photo centrale

        // Appliquer la classe active initialement
        images.forEach((img, i) => img.classList.remove('active'));
        images[currentIndex].classList.add('active');

        if (isMini) {
            // Défilement continu pour mini-carrousel
            let scrollPos = 0;
            const speed = 1; // pixels par frame
            function miniScroll() {
                scrollPos += speed;
                carousel.scrollLeft = scrollPos;

                // Reboucler quand on atteint la fin
                if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;

                // Gestion active : photo du centre
                const center = scrollPos + carousel.offsetWidth / 2;
                let closest = 0;
                let minDiff = Infinity;
                images.forEach((img, i) => {
                    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
                    const diff = Math.abs(center - imgCenter);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closest = i;
                    }
                });
                images.forEach(img => img.classList.remove('active'));
                images[closest].classList.add('active');

                requestAnimationFrame(miniScroll);
            }
            requestAnimationFrame(miniScroll);

        } else {
            // Grand carrousel : image par image avec pause 3 sec
            setInterval(() => {
                // retirer active
                images[currentIndex].classList.remove('active');

                // avancer à l'image suivante
                currentIndex = (currentIndex + 1) % images.length;

                // ajouter active
                images[currentIndex].classList.add('active');

                // faire défiler la photo au centre
                const img = images[currentIndex];
                const containerCenter = carousel.offsetWidth / 2;
                const imgCenter = img.offsetLeft + img.offsetWidth / 2;
                const scrollTo = imgCenter - containerCenter;
                carousel.scrollTo({ left: scrollTo, behavior: 'smooth' });

            }, 4000); // 3 secondes
        }

    });

});
