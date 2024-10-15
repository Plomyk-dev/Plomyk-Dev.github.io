document.addEventListener("DOMContentLoaded", (event) => {
    // Rotate effect
    const tiltImageContainer = document.querySelector('.tilt-image');
    const image = tiltImageContainer.querySelector('img');

    tiltImageContainer.addEventListener('mousemove', (e) => {
        const width = tiltImageContainer.offsetWidth;
        const height = tiltImageContainer.offsetHeight;
        const centerX = tiltImageContainer.offsetLeft + width / 2;
        const centerY = tiltImageContainer.offsetTop + height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / height) * -20;
        const rotateY = (mouseX / width) * 20;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    tiltImageContainer.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });


    // typewritereffect
    const words = ["Nieruchomością", "Mieszkaniem", "Domem", "Biurem", "Działką"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;
    const typewriter = document.querySelector('.typewriter');

    async function type() {
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        currentWord = words[wordIndex];
        
        if (!isDeleting) {
            typewriter.textContent = currentWord.substring(0, charIndex);
            charIndex++;

            if (charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000);
                return;
            }
        } else {
            typewriter.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex++;
            }
        }
        setTimeout(type, isDeleting ? 150 / 2 : 150);
    }
    type()
});

// particlesJS.load('particles-js', 'particles.json', function() {
//     console.log('callback - particles.js config loaded');
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});