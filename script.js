document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const toggleMenu = () => menu.classList.toggle('active');
    menuIcon?.addEventListener('click', toggleMenu);

    // Preloader
    const preloader = document.getElementById("preloader");
    const dotsElement = document.getElementById("loadingDots");
    let dotsInterval;

    const updateDots = () => {
        dotsElement.textContent = dotsElement.textContent.length < 3 ?
            dotsElement.textContent + '.' : '';
    };

    const hidePreloader = () => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
            clearInterval(dotsInterval);
        }, 500);
    };

    // Start preloader animation
    dotsInterval = setInterval(updateDots, 500);

    // GSAP Animations
    const startAnimations = () => {
        gsap.timeline()
            .from(".menu", {
                y: -50,
                opacity: 0,
                duration: 0.8,
                delay: 0.5
            })
            .from(".home-content > *", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            })
            .from(".profile-image", {
                y: 30,
                opacity: 0,
                delay: 0.1,
                duration: 0.6
            });
    };

    // Handle page load
    window.addEventListener("load", () => {
        setTimeout(hidePreloader, 1500);
        startAnimations();
    });
});