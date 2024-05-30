let tl = gsap.timeline();

    tl.from(".heading, .about, .intro, .education, .experience, .skills, .achievements, .cocurriculars", {
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