function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
});