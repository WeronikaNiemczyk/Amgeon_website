// import lightGallery from "./node_modules/lightgallery";

// Plugins;
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "./node_modules/lightgallery/plugins/zoom";

// Inicjalizacja LightGallery
const galleryElement = document.getElementById("lightgallery");
lightGallery(galleryElement, {
  plugins: [lgZoom],
  speed: 500,
  controls: true, // Tylko strzałki nawigacji
});

// lightGallery(document.getElementById("lightgallery"), {
//   plugins: [lgZoom, lgThumbnail],
//   speed: 500,
//   mode: "lg-fade",
//   thumbnail: true,
//   zoom: true,

//   controls: true,
//   download: true,
//   allowMediaOverlap: true,
//   closable: true,
//   mobileSettings: {
//     controls: false,
//     showCloseIcon: false,
//     download: false,
//     rotate: false,
//   },
// });

// const moreBtn = document.querySelector(".moreBtn");
// const aboutUs = document.querySelector("#o-nas");

// moreBtn.addEventListener("click", () => {
//   aboutUs.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// });
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
