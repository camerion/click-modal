var button = document.querySelector("button");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've Got This !!!";
});

modalX.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
});
