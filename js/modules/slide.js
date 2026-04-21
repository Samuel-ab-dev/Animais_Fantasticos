import debounce from "./debounce.js";

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.onClass = "on";
    this.changeEvent = new Event("changeEvent");
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.eventControl = this.eventControl.bind(this);
    this.onControlItem = this.onControlItem.bind(this);

    this.onPostSlide = this.onPostSlide.bind(this);
    this.onPrevSlide = this.onPrevSlide.bind(this);
  }

  transition(active) {
    this.slide.style.transition = active ? "transform 0.3s" : "";
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  uptadePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.2;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(e) {
    let moveType;
    if (e.type === "mousedown") {
      e.preventDefault();
      this.dist.startX = e.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = e.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);
    this.transition(false);
  }

  onMove(e) {
    const pointerPosition =
      e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;
    const finalPosition = this.uptadePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(e) {
    const moveType = e.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.post !== undefined) {
      this.onPostSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.onPrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { position, element };
    });
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      post: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const onSlide = this.slideArray[index];
    this.moveSlide(onSlide.position);
    this.slideIndexNav(index);
    this.dist.finalPosition = onSlide.position;
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  onPrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }
  onPostSlide() {
    if (this.index.post !== undefined) this.changeSlide(this.index.post);
  }

  changeActiveClass() {
    this.slideArray.forEach((i) => i.element.classList.remove(this.onClass));
    this.slideArray[this.index.active].element.classList.add(this.onClass);
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  init() {
    this.slidesConfig();
    this.transition(true);
    this.bindEvents();
    this.addSlideEvent();
    this.changeSlide(0);
    this.addResizeEvent();
    return this;
  }
}

export class SlideNav extends Slide {
  addArrow(prev, post) {
    this.prevElement = document.querySelector(prev);
    this.postElement = document.querySelector(post);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener("click", this.onPrevSlide);
    this.postElement.addEventListener("click", this.onPostSlide);
  }

  onControlItem() {
    this.controlArray.forEach((i) => i.classList.remove(this.onClass));
    this.controlArray[this.index.active].classList.add(this.onClass);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener("changeEvent", this.onControlItem);
  }

  addControl(custom) {
    this.control = document.querySelector(custom) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.eventControl);
    this.onControlItem();
  }
}
