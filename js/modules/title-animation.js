export function initTitleAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".title-animation"); // Получаем все заголовки

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Добавляем класс для анимации
          observer.unobserve(entry.target); // Удаляем наблюдателя для текущего заголовка
        }
      });
    });

    titles.forEach((title) => {
      observer.observe(title); // Начинаем наблюдение за каждым заголовком
    });
  });
}
