export default function tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(e) {
    const tooltipBox = createToolTipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  function createToolTipBox(e) {
    const tooltipBox = document.createElement("div");
    const text = e.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 10 + "px";
      this.tooltipBox.style.left = e.pageX + 10 + "px";
    },
  };

  tooltips.forEach((i) => {
    i.addEventListener("mouseover", onMouseOver);
  });
}
