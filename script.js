// получаем ссылки на все модальные окна и кнопки открытия
const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll(".button");

// получаем ссылки на элементы закрытия модальных окон
const closeButtons = document.querySelectorAll(".close");

// получаем ссылки на все кнопки "Submit"
const submitButtons = document.querySelectorAll(".submit-button .button");

// функция для открытия модального окна
function openModal(event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();

  // получаем ссылку на модальное окно, которое нужно открыть
  const modal = document.querySelector(event.target.getAttribute("href"));

  // добавляем класс для показа модального окна
  modal.classList.add("show");
}

// функция для закрытия модального окна
function closeModal(event) {
  // получаем ссылку на родительский элемент кнопки закрытия
  const modal = event.target.parentNode.parentNode;

  // удаляем класс для показа модального окна
  modal.classList.remove("show");

  // вызываем функцию alert
  setTimeout(function () {
    alert("Form submitted");
  }, 500);
}

// назначаем обработчики событий для кнопок открытия и закрытия модальных окон
buttons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));

// получаем все кнопки для открытия модальных окон
const openButtons = document.querySelectorAll(".button");

// добавляем обработчики событий клика на кнопки
openButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modals[index].style.display = "block";
  });
});

// добавляем обработчики событий клика на крестики для закрытия модальных окон

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = button.parentElement.parentElement;
    modal.style.display = "none";
  });
});

// функция для обработки отправки формы
function handleSubmit(event) {
  // отменяем стандартное поведение формы
  event.preventDefault();

  // получаем значение, введенное в поле ввода
  const input = event.target.previousElementSibling;
  const value = input.value;
  // выводим сообщение в алерт
  alert(`Submitted value: ${value}`);

  // закрываем модальное окно
  const modal = event.target.closest(".modal");
  modal.classList.remove("show");
}

// привязываем обработчик событий click к каждой кнопке "Submit"
submitButtons.forEach((button) => {
  button.addEventListener("click", handleSubmit);
});

//алерт после нажатия на кнопку submit для проверки значения поля ввода
submitButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = event.target.closest(".modal");
    const input = modal.querySelector("input");
    alert("Submitted: " + input.value);
    modal.classList.remove("show");
  });
});

// получаем ссылку на кнопку "submit"
const submitButton = document.querySelector("#modal1 .submit-button .button");

// получаем ссылки на все формы
const forms = document.querySelectorAll("form");

// добавляем обработчик событий submit для каждой формы
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // получаем значение, введенное в поле ввода
    const input = event.target.querySelector(
      "input[type=text], input[type=email], input[type=tel]"
    );
    const value = input.value;

    // выводим сообщение в алерт
    alert(`Submitted value: ${value}`);

    // закрываем модальное окно
    const modal = event.target.closest(".modal");
    modal.classList.remove("show");
  });
});
