(function() {
    emailjs.init("X-f4_HQ_7kJUJKcxz");
})();

document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animation
    const tl = gsap.timeline();
    tl.from(".contact-info", {
        x: -50,
        duration: 1,
        opacity: 0,
    })
    .from(".contact-form", {
        x: 50,
        duration: 1,
        opacity: 0,
    }, "-=0.8")
    .from(".social-icons a", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, "-=0.5");
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
   
    const submitButton = document.getElementById('submitButton');
    const buttonText = submitButton.querySelector('.button-text');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const successMessage = document.getElementById('successMessage');
   
    submitButton.disabled = true;
    buttonText.textContent = 'Sending...';
    loadingSpinner.style.display = 'inline-block';

    try {
        const templateParams = {
            from_name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
            to_name: "Admin",
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };
        const response = await emailjs.send('service_2ic20gc', 'template_70gwzio', templateParams);
       
        if (response.status === 200) {
            successMessage.classList.add('show');
            document.getElementById('contactForm').reset();
           
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        }
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
    } finally {
        submitButton.disabled = false;
        buttonText.textContent = 'Send Message';
        loadingSpinner.style.display = 'none';
    }
});

let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});