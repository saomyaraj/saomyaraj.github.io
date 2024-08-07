document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const questions = document.getElementById('questions').value;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        firstName,
        lastName,
        email,
        questions
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log('FAILED...', error);
        alert('Message failed to send.');
    });
});

let tl = gsap.timeline();

    tl.from(".container, .address, #contactForm, .social-icons", {
        y: 50,
        duration: 1,
        delay: 1,
        opacity: 0,
        stagger: 0.3
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