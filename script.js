// / <---MODALE --->

const modals = [
  document.getElementById("myModal1"),
  document.getElementById("myModal2"),
  // document.getElementById("myModal3"),
];

const btns = [
  document.getElementById("myBtn1"),
  document.getElementById("myBtn2"),
  // document.getElementById("myBtn3"),
];

// Pobierz wszystkie elementy zamykające (span z klasą 'close')
const spans = document.getElementsByClassName("close");

// Otwieranie modala po kliknięciu przycisku
btns.forEach((button, index) => {
  button.onclick = function () {
    const modal = modals[index];

    const content = document.querySelector("modal-content");

    modal.style.display = "block";
    modal.classList.remove("modal-closed");
    content.classList.remove("content-close");
  };
});

// Zamykanie modala po kliknięciu na 'span'
Array.from(spans).forEach((span, index) => {
  span.onclick = function () {
    const modal = modals[index];
    modal.style.display = "none";
    const content = document.querySelector("modal-content");
    modal.classList.add("modal-closed");
    content.classList.add("content-close");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  };
});

// Zamykanie modala po kliknięciu poza nim
window.onclick = function (event) {
  modals.forEach((modal, index) => {
    if (event.target == modal) {
      const modal = modals[index];
      const content = document.querySelector(".modal-content");
      content.classList.add("content-close"); // Dodaje klasę zamknięcia zawartości
      modal.classList.add("modal-closed");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
      console.log("Modal:", modal);
      console.log("Content:", content);
    }
  });
};
// <-- SCROLLOWANIE -->

const aboutUs = document.querySelector("#o-nas");
const showMore = document.querySelector("#showMore");

showMore.addEventListener("click", () => {
  const offset = 115; // Liczba pikseli, o którą chcesz przesunąć scroll wyżej
  const elementPosition = aboutUs.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
});

const offer = document.querySelector("#oferta");
const offerBtn = document.querySelector(".offerBtn");

offerBtn.addEventListener("click", () => {
  const offset = 100;
  const elementPosition = offer.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
});

const galery = document.querySelector("#galeria");
const galleryBtn = document.querySelector(".galleryBtn");

galleryBtn.addEventListener("click", () => {
  const offset = 58;
  const elementPosition = galery.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
});
// ---> LISTA ROZWIJANA -->
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    if (content.classList.contains("show")) {
      content.classList.remove("show");
      this.textContent = "Pokaż więcej";
    } else {
      content.classList.add("show");
      this.textContent = "Zwiń";
    }
  });
});
