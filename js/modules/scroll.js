export default class Scroll {
  constructor(links, options) {
    this.internalLink = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  AddLinkEvent() {
    this.internalLink.forEach((i) => {
      i.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    this.AddLinkEvent();
    return this;
  }
}
