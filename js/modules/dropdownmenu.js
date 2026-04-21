import handleOutside from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropdownmenus, events) {
    this.dropdownmenus = document.querySelectorAll(dropdownmenus);
    this.onClass = "on";

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.onClass);
    handleOutside(element, this.events, () => {
      element.classList.remove(this.onClass);
    });
  }

  addDropDownMenuEvent() {
    this.dropdownmenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownmenus.length) {
      this.addDropDownMenuEvent();
    }
    return this;
  }
}
