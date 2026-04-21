export default class WorkingHour {
  constructor(working) {
    this.working = document.querySelector(working);
    this.onClass = "open";
  }

  dataSetWorking() {
    this.daysOfWeek = this.working.dataset.week.split(",").map(Number);
    this.weekHour = this.working.dataset.hours.split(",").map(Number);
  }

  dataCurrentTime() {
    this.timeNow = new Date();
    this.dayOfWeek = this.timeNow.getDay();
    this.hourNow = this.timeNow.getUTCHours() - 3;
  }

  isWorking() {
    this.openWeek = this.daysOfWeek.indexOf(this.dayOfWeek) !== -1;

    this.openTime =
      this.hourNow >= this.weekHour[0] && this.hourNow < this.weekHour[1];
    return this.openWeek && this.openTime;
  }

  currentlyWorking() {
    if (this.isWorking()) {
      this.working.classList.add(this.onClass);
    }
  }

  init() {
    if (this.working) {
      this.dataSetWorking();
      this.dataCurrentTime();
      this.currentlyWorking();
    }
    return this;
  }
}
