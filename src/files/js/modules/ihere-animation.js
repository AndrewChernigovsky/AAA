export function initIHereAnimation() {
  const items = document.querySelectorAll(".advantages-list__item");
  let index = 0;

  function showLetters(item) {
    const text = item.textContent;
    item.textContent = "";

    let letterIndex = 0;

    const interval = setInterval(() => {
      if (letterIndex < text.length) {
        item.textContent += text[letterIndex];
        letterIndex++;
      } else {
        clearInterval(interval);
        index++;
        showNextItem();
      }
    }, 30);

    item.classList.add("visible");
  }

  function showNextItem() {
    if (index < items.length) {
      const item = items[index];
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(item);
            showLetters(item);
          }
        });
      });
      observer.observe(item);
    }
  }
  showNextItem();
}
