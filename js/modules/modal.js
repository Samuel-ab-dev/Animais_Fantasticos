export default function innitModal() {
  const onButton = document.querySelector('[data-modal="on"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  const toggleModal = (e) => {
    e.preventDefault();
    modalContainer.classList.toggle("on");
  };

  function outClick(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (onButton && closeButton && modalContainer) {
    onButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", outClick);
  }
}
