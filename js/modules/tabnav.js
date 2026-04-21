export default class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.onClass = "on";
  }

  activeTab = (i) => {
    this.content.forEach((section) => {
      section.classList.remove(this.onClass);
    });
    const direction = this.content[i].dataset.anime;
    this.content[i].classList.add(this.onClass, direction);
  };

  addTabEvent() {
    this.menu.forEach((menuitem, i) => {
      menuitem.addEventListener("click", () => this.activeTab(i));
    });
  }

  init() {
    if (this.menu.length && this.content.length) {
      this.activeTab(0);
      this.addTabEvent();
    }
    return this;
  }
}
