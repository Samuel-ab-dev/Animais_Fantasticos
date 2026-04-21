export default class Modal {
  constructor(onButton, closeButton, modalContainer) {
    this.onButton = document.querySelector(onButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outClick = this.outClick.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("on");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  outClick(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.onButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.outClick);
  }

  init() {
    if (this.onButton && this.closeButton && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
