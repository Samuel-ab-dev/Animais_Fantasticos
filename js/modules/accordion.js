export default function innitAccord() {
  const accordionItem = document.querySelectorAll(
    "[data-anime='accordion'] dt",
  );
  if (accordionItem.length) {
    accordionItem[0].classList.add("on");
    accordionItem[0].nextElementSibling.classList.add("on");

    const activeAccordion = (e) => {
      e.currentTarget.classList.toggle("on");
      e.currentTarget.nextElementSibling.classList.toggle("on");
    };

    accordionItem.forEach((i) => {
      i.addEventListener("click", activeAccordion);
    });
  }
}
