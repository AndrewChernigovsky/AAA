export function initIHereAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".advantages-list__item");
    let index = 0;

    // Функция для показа букв текущего элемента
    function showLetters(item) {
      const text = item.textContent;
      item.textContent = ""; // Очищаем текст элемента

      let letterIndex = 0;

      const interval = setInterval(() => {
        if (letterIndex < text.length) {
          item.textContent += text[letterIndex]; // Добавляем одну букву
          letterIndex++;
        } else {
          clearInterval(interval); // Останавливаем интервал, если все буквы показаны
          index++; // Переходим к следующему элементу
          showNextItem(); // Запускаем показ следующего элемента
        }
      }, 50); // Задержка между буквами (100 мс)

      item.classList.add("visible"); // Добавляем класс для анимации появления
    }

    // Функция для показа следующего элемента
    function showNextItem() {
      if (index < items.length) {
        const item = items[index];
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(item); // Удаляем наблюдателя для текущего элемента
              showLetters(item); // Показываем буквы текущего элемента
            }
          });
        });

        observer.observe(item); // Начинаем наблюдение за текущим элементом
      }
    }

    showNextItem(); // Запускаем показ элементов
  });
}
