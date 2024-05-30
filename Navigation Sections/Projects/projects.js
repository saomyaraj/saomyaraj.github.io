document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Attendi-Fi", description: "Wi-Fi based Classroom Attendance Application", image: "project1.jpg", url: "https://github.com/saomyaraj/Attendi-Fi" },
        { title: "DermaX", description: "Skin Disease Detection Application", image: "project2.jpg", url: "https://github.com/saomyaraj/DermaX" },
        { title: "Sentivoice", description: "Speech Emotion Recognition", image: "project3.jpg", url: "https://github.com/saomyaraj/Speech-Emotion-Recognition" },
        { title: "OS Project", description: "CPU Scheduling Algorithm", image: "project3.jpg", url: "https://scheduling-algorithm-os.vercel.app/" },
        { title: "DBMS Project", description: "Supermarket Management System", image: "project3.jpg", url: "https://github.com/saomyaraj/Supermarket-Management-System" }
    ];

    const projectList = document.querySelector(".project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = `${project.title} Image`;

        const projectInfo = document.createElement("div");
        projectInfo.classList.add("project-info");

        const projectTitle = document.createElement("h3");
        const projectLink = document.createElement("a");
        projectLink.href = project.url;
        projectLink.textContent = project.title;
        projectLink.target = "_blank"; // Open link in a new tab

        projectTitle.appendChild(projectLink);

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectDescription);

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectInfo);

        projectList.appendChild(projectDiv);
    });
});

let tl = gsap.timeline();

    tl.from(".projects, .project-head, .project-list, .home h3, .home .profile-image, .home p, .home .btn-box, .home .social-icons", {
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