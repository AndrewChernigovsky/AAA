export function addHeadingAnimation() {
  let delay = 0.3;
  let revealText = document.querySelector(".primary-title");

  if (revealText) {
    let sentences = revealText.textContent.split(/(?<=[.!?])\s+/);
    revealText.textContent = "";

    sentences.forEach((sentence) => {
      let sentenceContainer = document.createElement("div");
      let letters = sentence.split("");
      let middle = letters.filter((e) => e !== " ").length / 2;

      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        sentenceContainer.append(span);
      });

      revealText.append(sentenceContainer);
    });

  }

}
