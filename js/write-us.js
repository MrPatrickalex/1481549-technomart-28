var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".button-close");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var form = popup.querySelector("form");
var isStorageSupport = true;

try {
  var nameFromStorage = localStorage.getItem("name");
} catch (error) {
  isStorageSupport = false;
}

console.log("TCL:", form);

form.addEventListener("submit", function (event) {
  console.log("TCL:", test);
  console.log(name.value, email.value, comment.value);
  if (!name.value || !email.value || !comment.value) {
    event.preventDefault();
    console.log("Нужно ввести данные");
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-hidden");
  popup.classList.add("modal-show");
  console.log("TCL: test", popup);

  if (isStorageSupport) {
    var nameFromStorage = localStorage.getItem("name");
    var emailFromStorage = localStorage.getItem("email");
    if (nameFromStorage) {
      name.value = nameFromStorage;
    }
    if (emailFromStorage) {
      email.value = emailFromStorage;
    }
    comment.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.add("modal-hidden");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      event.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.add("modal-hidden");
    }
  }
});

var deliveryButton = document.querySelector(".button-delivery");
var guaranteeButton = document.querySelector(".button-guarantee");
var creditButton = document.querySelector(".button-credit");
var serviceDescription = document.querySelector(".service-description");
var serviceGuarantee = document.querySelector(".service-guarantee");
var serviceCredit = document.querySelector(".service-credit");

console.log("TCL:", deliveryButton);
console.log("TCL:", guaranteeButton);
console.log("TCL:", creditButton);

deliveryButton.addEventListener("click", function (event) {
  event.preventDefault();
  deliveryButton.classList.add("checked");
  guaranteeButton.classList.remove("checked");
  creditButton.classList.remove("checked");
  serviceDescription.classList.remove("visually-hidden");
  serviceGuarantee.classList.add("visually-hidden");
  serviceCredit.classList.add("visually-hidden");
});

guaranteeButton.addEventListener("click", function (event) {
  event.preventDefault();
  deliveryButton.classList.remove("checked");
  guaranteeButton.classList.add("checked");
  creditButton.classList.remove("checked");
  serviceDescription.classList.add("visually-hidden");
  serviceGuarantee.classList.remove("visually-hidden");
  serviceCredit.classList.add("visually-hidden");
});

creditButton.addEventListener("click", function (event) {
  event.preventDefault();
  deliveryButton.classList.remove("checked");
  guaranteeButton.classList.remove("checked");
  creditButton.classList.add("checked");
  serviceDescription.classList.add("visually-hidden");
  serviceGuarantee.classList.add("visually-hidden");
  serviceCredit.classList.remove("visually-hidden");
});
