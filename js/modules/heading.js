export function addHeadingAnimation() {
  let duration = 0.8;
  let delay = 0.3;
  let revealText = document.querySelector(".primary-title");
  let letters = "Cоздание сайта. \nРазработка сайта"
    .split(/\s+/)
    .filter((word) => word.match(/[\s\n]/));
  revealText.textContent = "";
  let middle = letters.length / 2;
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
    revealText.append(span);
  });
}
