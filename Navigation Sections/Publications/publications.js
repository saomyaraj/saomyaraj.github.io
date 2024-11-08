document.addEventListener('DOMContentLoaded', () => {
    let tl = gsap.timeline();

    // Animate research papers section
    tl.from('.research-papers', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    })
    .from('.paper-card', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.4')
    
    // Animate blogs section
    .from('.blogs', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.2')
    .from('.blog-card', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.4');

    // Header hide/show on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});