export default function innitAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll("[data-number]");
    numbers.forEach((number) => {
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
      }, 30 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("on")) {
      observer.disconnect();
      animaNumbers();
    }
  }
  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
