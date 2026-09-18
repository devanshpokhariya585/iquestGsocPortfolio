"use strict";

/* -------- 1. Category filter -------- */
const filterBtns = document.querySelectorAll("[data-filter]");
const blogCards = document.querySelectorAll("[data-category]");

for (let i = 0; i < filterBtns.length; i++) {
  var filter = filterBtns[i].dataset.filter;
  filterBtns[i].addEventListener("click", function () {
    filterBtns.forEach((b) => b.classList.remove("active"));
    filterBtns[i].classList.add("active");
    blogCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.style.display = show ? "" : "none";
    });
  });
}

/* -------- 2. Read more / less -------- */
const readBtns = document.querySelectorAll("[data-readmore]");
readBtns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    const more = this.previousElementSibling;
    more.hidden = !more.hidden;
    this.textContent = more.hidden ? "Read more" : "Read less";
  });
});

/* -------- 3. Newsletter email validation -------- */
const form = document.querySelector("[data-newsletter]");
const emailInput = form.querySelector("input");
const msg = form.querySelector("[data-msg]");
const emailPattern = /^[a-z0-9_]+@[a-z]+\.[a-z]+$/;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailPattern.test(emailInput.value)) {
    msg.style.color = "#4ade80";
    msg.textContent = "Subscribed! Check your inbox.";
    form.reset();
  } else {
    msg.style.color = "#f87171";
    msg.textContent = "Please enter a valid email address.";
  }
});

/* -------- 4. Dynamic footer year -------- */
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
