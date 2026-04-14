import handleOutside from "./outsideclick.js";

export default function innitDropDownMenu() {
  const dropdownmenus = document.querySelectorAll("[data-dropdown]");
  function handleClick(e) {
    e.preventDefault();
    this.classList.add("on");
    handleOutside(this, ["touchstart", "click"], () => {
      this.classList.remove("on");
    });
  }
  if (dropdownmenus) {
    dropdownmenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}
