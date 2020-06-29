var addLinks = document.querySelectorAll(".button-to-bookmarks");
var notifyPopup = document.querySelector(".notify");
var notifyClose = document.querySelector(".notify-close");

addLinks.forEach((link) =>
  link.addEventListener("click", function (event) {
    event.preventDefault();
    notifyPopup.classList.add("modal-show");
    notifyPopup.classList.remove("modal-hidden");
  })
);

notifyClose.addEventListener("click", function (event) {
  event.preventDefault();
  notifyPopup.classList.remove("modal-show");
  notifyPopup.classList.remove("modal-error");
  notifyPopup.classList.add("modal-hidden");
  console.log("TCL:", notifyPopup);
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (notifyPopup.classList.contains("modal-show")) {
      event.preventDefault();
      notifyPopup.classList.remove("modal-show");
      notifyPopup.classList.add("modal-hidden");
    }
  }
});
