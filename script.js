document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    var preloader = document.getElementById("preloader");
    var dotsElement = document.getElementById("loadingDots");
    var dotsInterval;

    // Function to update dots animation
    function updateDots() {
        var dots = dotsElement.innerHTML;
        dots = dots.length < 3 ? dots + '.' : '';
        dotsElement.innerHTML = dots;
    }

    // Start updating dots every 500 milliseconds
    dotsInterval = setInterval(updateDots, 500);

    // Set a minimum duration for the preloader to be visible (in milliseconds)
    var minimumDuration = 2000;

    // Record the start time
    var startTime = new Date().getTime();

    window.addEventListener("load", function () {
        // Calculate the elapsed time
        var elapsedTime = new Date().getTime() - startTime;

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

    var tl = gsap.timeline();

    tl.from(".logo, .menu", {
        y: 100,
        duration: 1,
        delay: 1,
        opacity: 0,
        stagger: 0.1
    });

    tl.from(".home h1, .home h3, .home p, .home .btn-box", {
        y: 50,
        duration: 1,
        delay: 1,
        opacity: 0,
        stagger: 0.5
    });
});
