document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM loaded')
    var data = new Date()
    // Rotate effect
    // const tiltImageContainer = document.querySelector('.tilt-image');
    // const image = tiltImageContainer.querySelector('img');

    // tiltImageContainer.addEventListener('mousemove', (e) => {
    //     const width = tiltImageContainer.offsetWidth;
    //     const height = tiltImageContainer.offsetHeight;
    //     const centerX = tiltImageContainer.offsetLeft + width / 2;
    //     const centerY = tiltImageContainer.offsetTop + height / 2;
    //     const mouseX = e.clientX - centerX;
    //     const mouseY = e.clientY - centerY;

    //     const rotateX = (mouseY / height) * -20;
    //     const rotateY = (mouseX / width) * 20;

    //     image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // });

    // tiltImageContainer.addEventListener('mouseleave', () => {
    //     image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    // });


    const images = [
        './assets/3_1.jpg',
        './assets/3_2.jpg',
        './assets/3_3.jpg',
        './assets/3_4.jpg',
      ]
      window.onload = () => {
        // preloading
        document.querySelector('#slideshow-image').style.backgroundImage = `url(${images[0]})`
        document.querySelector('.hidden').src = images[1]
        let i = 1
        setInterval(() => {
          document.querySelector('#slideshow-image').style.backgroundImage = `url(${images[i++]})`

          if (i === images.length) i = 0
          else {
            document.querySelector('.hidden').src = images[i]
          }
        }, 7000)
      }
    // typewritereffect
    const words = ["twoją Nieruchomością", "twoim Mieszkaniem", "twoim Domem", "twoim Biurem", "twoją Działką"];
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
        setTimeout(type, isDeleting ? 100 / 2 : 100);
    }
    type()
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});