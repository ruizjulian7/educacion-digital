const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});


// JavaScript para hacer que el botón de WhatsApp titilee

const whatsappButton = document.getElementById('whatsapp-button');

function toggleBlink() {
    whatsappButton.classList.toggle('blink');
}

// Iniciar el parpadeo después de un retraso de 2 segundos
setTimeout(() => {
    toggleBlink();
}, 2000);
