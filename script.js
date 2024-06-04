document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    let preloader = document.getElementById("preloader");
    let dotsElement = document.getElementById("loadingDots");
    let dotsInterval;

    // Function to update dots animation
    function updateDots() {
        let dots = dotsElement.innerHTML;
        dots = dots.length < 3 ? dots + '.' : '';
        dotsElement.innerHTML = dots;
    }

    // Start updating dots every 500 milliseconds
    dotsInterval = setInterval(updateDots, 500);

    // Set a minimum duration for the preloader to be visible (in milliseconds)
    const minimumDuration = 2000;

    // Record the start time
    let startTime = new Date().getTime();

    window.addEventListener("load", function () {
        // Calculate the elapsed time
        let elapsedTime = new Date().getTime() - startTime;

        // If less than the minimum duration, delay the hiding of the preloader
        if (elapsedTime < minimumDuration) {
            setTimeout(function () {
                hidePreloader();
            }, minimumDuration - elapsedTime);
        } else {
            hidePreloader();
        }
    });

    // Function to hide the preloader
    function hidePreloader() {
        preloader.style.transition = "opacity 0.5s";
        preloader.style.opacity = "0";

        // Set a timeout to ensure the preloader is hidden after the transition
        setTimeout(function () {
            preloader.style.display = "none";
            clearInterval(dotsInterval); // Clear the dots interval when the preloader is hidden
        }, 500);
    }

    let tl = gsap.timeline();

    tl.from(".logo, .menu, .home h1, .home h3, .home-para, .home .btn-box", {
        y: 50,
        duration: 1,
        delay: 2.5,
        opacity: 0,
        stagger: 0.3
    });

    let t2 = gsap.timeline();

    t2.from(".home .profile-image", {
        y: 50,
        duration: 1.5,
        delay: 3.5,
        opacity: 0,
        stagger: 0.3
    });
});