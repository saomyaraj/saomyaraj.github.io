document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    
    // Set a minimum duration for the preloader to be visible (in milliseconds)
    var minimumDuration = 1000;

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
        }, 500);
    }
});
