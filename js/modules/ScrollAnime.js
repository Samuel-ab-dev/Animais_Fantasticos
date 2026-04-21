import debounce from "./debounce.js";

export default class ScrollAnime {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.4;

    this.checkDistance = debounce(this.checkDistance.bind(this), 150);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((i) => {
      if (window.pageYOffset > i.offset) {
        i.element.classList.add("on");
      } else if (i.element.classList.contains("on")) {
        i.element.classList.remove("on");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  destroy() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
