export function addHeadingAnimation() {
  let duration = 0.8;
  let delay = 0.3;
  let revealText = document.querySelector(".primary-title");
  let sentences = revealText.textContent.split(/(?<=[.!?])\s+/); // Разделяем текст на предложения
  revealText.textContent = ""; // Очищаем оригинальный текст

  sentences.forEach((sentence) => {
    let sentenceContainer = document.createElement("div"); // Создаем контейнер для предложения
    let letters = sentence.split(""); // Разбиваем предложение на буквы
    let middle = letters.filter((e) => e !== " ").length / 2; // Вычисляем середину без пробелов

    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      sentenceContainer.append(span); // Добавляем буквы в контейнер предложения
    });

    revealText.append(sentenceContainer); // Добавляем контейнер предложения в основной элемент
  });
}
