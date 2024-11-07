document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const toggleMenu = () => menu.classList.toggle('active');
    menuIcon?.addEventListener('click', toggleMenu);

    // GSAP Animations
    const startAnimations = () => {
        const tl = gsap.timeline();

        tl.from(".menu", {
            y: -50,
            opacity: 0,
            duration: 0.8,
            delay: 0.5
        })
        .from(".about-intro", {
            y: 50,
            opacity: 0,
            duration: 0.8,
        })
        .from(".about-details .education, .experience, .about-details .skills, .about-details .achievements", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3
        });
    };

    // Trigger animations on page load
    window.addEventListener("load", startAnimations);
});
