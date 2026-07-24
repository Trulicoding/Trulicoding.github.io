const sections = document.querySelectorAll(
    "#about, #skills, #projects, #contact"
);

const navLinks = document.querySelectorAll(".nav-left a");

function updateActiveNavigation() {
    let current = "";

    const reachedBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

    if (reachedBottom) {
        current = "contact";
    } else {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect();

            if (sectionPosition.top <= 180) {
                current = section.id;
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);