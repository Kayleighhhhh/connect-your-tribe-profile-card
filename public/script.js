// GET ELEMENTS
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const dateText = document.getElementById("date");
const lock = document.getElementById("lock");
const profile = document.getElementById("profile");
const screen = document.getElementById("screen");

// UPDATE TIME
function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  hour.textContent = hours;
  minute.textContent = minutes;

  const options = { weekday: "short", day: "numeric", month: "long" };
  dateText.textContent = now.toLocaleDateString(undefined, options);
}

// RUN CLOCK
updateTime();
setInterval(updateTime, 1000);

// UNLOCK PHONE
screen.addEventListener("click", () => {
  lock.classList.add("up");
  profile.classList.add("show");
});
