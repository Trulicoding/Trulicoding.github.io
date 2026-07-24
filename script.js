const sections = document.querySelectorAll("#about, #skills, #projects, #contact");

const navLinks = document.querySelectorAll(".nav-left a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`
        );
    });
});
