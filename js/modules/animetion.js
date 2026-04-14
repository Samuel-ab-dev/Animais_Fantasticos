export default function scrollAnime() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((i) => {
      const sectionTop = i.getBoundingClientRect().top;
      const sectionVisible = sectionTop - halfWindow < 0;
      if (sectionVisible) {
        i.classList.add("on");
      } else if (i.classList.contains("on")) {
        i.classList.remove("on");
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
