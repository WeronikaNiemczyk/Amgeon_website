

const moreBtn = document.querySelector(".moreBtn");
const aboutUs = document.querySelector("#o-nas");

moreBtn.addEventListener("click", () => {
  const offset = 50; // Liczba pikseli, o którą chcesz przesunąć scroll wyżej
  const elementPosition = aboutUs.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
});
