let tl = gsap.timeline();

tl.from(".blogs, .blog-content, .linux, .git, .genai-Ed", {
    y: 50,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.3
});