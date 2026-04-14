export default function innitWorkingHour() {
  const working = document.querySelector("[data-week]");
  const daysOfWeek = working.dataset.week.split(",").map(Number);
  const weekHour = working.dataset.hours.split(",").map(Number);

  const timeNow = new Date();
  const dayOfWeek = timeNow.getDay();
  const hourNow = timeNow.getHours();

  const openWeek = daysOfWeek.indexOf(dayOfWeek) !== -1;

  const openTime = hourNow >= weekHour[0] && hourNow < weekHour[1];
  if (openTime && openWeek) {
    working.classList.add("open");
  }
}
