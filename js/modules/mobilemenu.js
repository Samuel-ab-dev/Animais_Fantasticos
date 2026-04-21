import handleOutside from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.onClass = "on";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.onClass);
    this.menuButton.classList.add(this.onClass);
    handleOutside(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.onClass);
      this.menuList.classList.remove(this.onClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
