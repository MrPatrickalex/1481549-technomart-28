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
