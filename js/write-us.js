try {
  var link = document.querySelector(".write-us-link");
  var popup = document.querySelector(".write-us");
  var close = document.querySelector(".button-close");
  var user = document.getElementById("form-name");
  var email = document.getElementById("form-email");
  var comment = document.getElementById("form-comment");
  var form = document.getElementById("form");
  var isStorageSupport = true;

  try {
    var nameFromStorage = localStorage.getItem("name");
  } catch (error) {
    isStorageSupport = false;
  }

  form.addEventListener("submit", function (event) {
    if (!user.value || !email.value || !comment.value) {
      event.preventDefault();
      console.log("Нужно ввести данные");
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", user.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-hidden");
    popup.classList.add("modal-show");

    if (isStorageSupport) {
      var nameFromStorage = localStorage.getItem("name");
      var emailFromStorage = localStorage.getItem("email");
      if (nameFromStorage) {
        user.value = nameFromStorage;
      } else {
        user.focus();
      }
      if (emailFromStorage) {
        email.value = emailFromStorage;
      }
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
} catch (error) {}
