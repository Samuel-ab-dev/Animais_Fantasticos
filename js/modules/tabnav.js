export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("on");

    const activeTab = (i) => {
      tabContent.forEach((section) => {
        section.classList.remove("on");
      });
      const direction = tabContent[i].dataset.anime;
      tabContent[i].classList.add("on", direction);
    };

    tabMenu.forEach((menuitem, i) => {
      menuitem.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}
