export default class Accordion {
  constructor(list) {
    this.accordionItem = document.querySelectorAll(list);
    this.onClass = "on";
  }
  toggleAccordion(i) {
    i.classList.toggle(this.onClass);
    i.nextElementSibling.classList.toggle(this.onClass);
  }

  addAccordionEvent() {
    this.accordionItem.forEach((i) => {
      i.addEventListener("click", () => this.toggleAccordion(i));
    });
  }

  init() {
    if (this.accordionItem.length) {
      this.toggleAccordion(this.accordionItem[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
