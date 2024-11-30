document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "ScholarNet Research",
            description: "Academic Collaboration Platform for Research and Discussion",
            image: "../Images/Projects/scholarnet.png",
            url: "https://scholarnet-research.vercel.app/"
        },
        {
            title: "Attendi-Fi",
            description: "Wi-Fi based Classroom Attendance Application",
            image: "../Images/Projects/attendifi.png",
            url: "https://github.com/saomyaraj/Attendi-Fi"
        },
        {
            title: "Backlit Flutter",
            description: "Low-Light Image Enhancement App",
            image: "../Images/Projects/backlit.png",
            url: "https://github.com/saomyaraj/Backlit-Image-App"
        },
        {
            title: "OnlyPDEU",
            description: "Campus Networking and Collaboration Platform",
            image: "../Images/Projects/onlypdeu.jpg",
            url: "https://github.com/saomyaraj/OnlyPDEU"
        }, 
        {
            title: "ByteBite",
            description: "An AI Based Micro-Learning Platform",
            image: "../Images/Projects/bytebite.jpg",
            url: "https://github.com/saomyaraj/ByteBite"
        },
        {
            title: "SmartMart",
            description: "Supermarket Management System",
            image: "../Images/Projects/smartmart.jpg",
            url: "https://github.com/saomyaraj/Supermarket-Management-System"
        }
    ];

    const projectsGrid = document.querySelector(".projects-grid");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = `${project.title} Image`;

        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const projectLink = document.createElement("a");
        projectLink.href = project.url;
        projectLink.textContent = "View Project";
        projectLink.target = "_blank";

        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectLink);

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectContent);

        projectsGrid.appendChild(projectCard);
    });

    let tl = gsap.timeline();

    tl.from(".projects-section > *", {
        y: 50,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.2
    });
});