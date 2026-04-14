import handleOutside from "./outsideclick.js";

export default function innitMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ["click", "touchstart"];

  if (menuButton) {
    const openMenu = (e) => {
      menuList.classList.toggle("on");
      menuButton.classList.toggle("on");
      handleOutside(menuList, events, () => {
        menuButton.classList.remove("on");
        menuList.classList.remove("on");
      });
    };

    events.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
