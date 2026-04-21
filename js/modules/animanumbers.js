export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static addNumber(number) {
    const total = +number.innerText;
    const increase = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      number.innerText = start;
      start += increase;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumbers() {
    this.numbers.forEach((number) => this.constructor.addNumber(number));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
