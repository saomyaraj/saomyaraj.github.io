let tl = gsap.timeline();

    tl.from(".about, .intro, .education, .experience, .skills, .achievements", {
        y: 50,
        duration: 1,
        delay: 2.5,
        opacity: 0,
        stagger: 0.3
    });