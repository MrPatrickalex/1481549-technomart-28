try {
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
} catch (error) {}

try {
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

  form.addEventListener("submit", function (event) {
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
} catch (error) {}

try {
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [59.938635, 30.323118],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15,
      controls: [],
    });

    myMap.geoObjects.add(
      new ymaps.Placemark(
        [59.938635, 30.323118],
        {
          iconCaption: "Большая Конюшенная улица, 19",
        },
        {
          preset: "islands#icon",
          iconColor: "red",
        }
      )
    );
  }

  var mapLink = document.querySelector(".map-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = document.querySelector(".map-button-close");

  mapLink.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-show");
    mapPopup.classList.remove("modal-hidden");
  });

  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-show");
    mapPopup.classList.remove("modal-error");
    mapPopup.classList.add("modal-hidden");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        event.preventDefault();
        mapPopup.classList.remove("modal-show");
        mapPopup.classList.add("modal-hidden");
      }
    }
  });
} catch (error) {}
