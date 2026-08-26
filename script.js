/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const firstName = document.querySelector(".typing-first-name");
const lastName = document.querySelector(".typing-last-name");

const typeText = (element, text, delay = 170) => {
    return new Promise(resolve => {
        let characterIndex = 0;

        const typeNextCharacter = () => {
            element.textContent += text[characterIndex];
            characterIndex += 1;

            if (characterIndex < text.length) {
                setTimeout(typeNextCharacter, delay);
            } else {
                resolve();
            }
        };

        typeNextCharacter();
    });
};

const startNameTyping = async () => {
    if (!firstName || !lastName) {
        return;
    }

    await typeText(firstName, "Nelcy");
    await typeText(lastName, "Cabacang");
};

startNameTyping();

const updateActiveNav = () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

};


/* Update navigation while scrolling */

window.addEventListener("scroll", updateActiveNav);


/* Update navigation when page loads */

window.addEventListener("load", updateActiveNav);


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
