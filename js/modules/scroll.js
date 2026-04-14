export default function scroll() {
  const internalLink = document.querySelectorAll(
    "[data-menu='soft'] a[href^='#']",
  );
  if (internalLink.length) {
    const scrollToSection = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    internalLink.forEach((i) => {
      i.addEventListener("click", scrollToSection);
    });
  }
}
