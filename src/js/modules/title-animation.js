export function initTitleAnimation() {
  const titles = document.querySelectorAll(".title-animation");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });
  titles.forEach((title) => {
    observer.observe(title);
  });
}
