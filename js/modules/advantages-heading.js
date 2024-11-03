export function initTitleAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".title-animation");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add("visible"); // Добавляем класс для анимации
          observer.unobserve(title); // Удаляем наблюдателя после срабатывания
        }
      });
    });

    observer.observe(title); // Начинаем наблюдение за заголовком
  });
}
