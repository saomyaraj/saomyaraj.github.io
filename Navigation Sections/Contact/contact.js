// contact.js
document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init('X-f4_HQ_7kJUJKcxz'); // Replace with your EmailJS user ID
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_2ic20gc', 'template_4dljcrr', {
        firstName,
        lastName,
        email,
        subject,
        message
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, (error) => {
        console.log('FAILED...', error);
        alert('Message failed to send.');
    });
});

let tl = gsap.timeline();
tl.from(".contact-container > *", {
    y: 50,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
});

let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('header-hidden');
    } else {
        // Scroll up
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});