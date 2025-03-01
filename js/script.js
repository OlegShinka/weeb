"use strict";

let documentActions = (e) => {
  const targetElement = e.target;
  if (targetElement.closest(".icon-menu")) {
    document.documentElement.classList.add("open-menu");
    document.documentElement.classList.remove("close-menu");
  }
  if (targetElement.closest(".menu-close")) {
    document.documentElement.classList.add("close-menu");
    document.documentElement.classList.remove("open-menu");
  }
};

document.addEventListener("click", documentActions);
