const count = document.getElementById("counter");

document.getElementById("inc").addEventListener("click", () => {
  count.innerHTML++;
});

document.getElementById("dec").addEventListener("click", () => {
  if (count > 0) {
    count.innerHTML--;
  }
});

document.getElementById("res").addEventListener("click", () => {
  count.innerHTML = 0;
});
