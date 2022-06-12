const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleMenu = $(".toggle");

toggleMenu.onclick = function () {
  if (this.dataset.state === "opened") this.dataset.state = "";
  else this.dataset.state = "opened";
};
