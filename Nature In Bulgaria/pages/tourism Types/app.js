import { fetchItems } from "./fetchingData.js";

const imgEl = document.querySelectorAll(".grid--img--list");
const gridEl = document.querySelector(".grid");
const img = document.querySelector(".img");
const imgContainerEl = document.querySelector(".img--container");
const headingBtnEl = document.querySelector(".heading-button");

const destinationInfoEl = document.querySelector(".destinations--info");

destinationInfoEl.innerHTML = await fetchItems().then((tour) => {
  return tour.description;
});

function hideGrid() {
  gridEl.classList.add("hide");
  setTimeout(() => {
    gridEl.classList.add("hidden");
  }, 500);
}

async function backBtn() {
  imgContainerEl.classList.add("hide");
  imgContainerEl.classList.add("hidden");
  headingBtnEl.classList.remove("hidden");
  imgContainerEl.classList.remove("hide");
  gridEl.classList.remove("hide");
  gridEl.classList.remove("hidden");
  headingBtnEl.classList.add("hidden");
  destinationInfoEl.innerHTML = await fetchItems().then((tour) => {
    return tour.description;
  });
}

function showImgContainer(el) {
  setTimeout(() => {
    imgContainerEl.classList.remove("hidden");
    headingBtnEl.classList.remove("hidden");

    if (imgEl[el].classList.contains("sixth")) {
      imgBuild("../../img/tourism--page/black-sea-header-img.jpg", "Black Sea");
    }
    if (imgEl[el].classList.contains("fifth")) {
      img.style.objectViewBox = "inset(50% 10% 10% 2%)";
      imgBuild("../../img/tourism--page/ski-header-img.jpg", "Ski");
    }
    if (imgEl[el].classList.contains("seventh")) {
      imgBuild("../../img/tourism--page/eco-header-img.jpg", "Eco");
    }
    if (imgEl[el].classList.contains("eighth")) {
      imgBuild("../../img/tourism--page/cultural-header-img.jpg", "Culture");
    }
  }, 550);
  img.style.objectViewBox = "none";
}

function imgBuild(src, content) {
  img.src = src;
  img.style.borderRadius = "20px";
  imgContainerEl.appendChild(img);
  destinationInfoEl.textContent = content;
  imgContainerEl.classList.add("show");
}

for (let i = 0; i < imgEl.length; i++) {
  imgEl[i].addEventListener("click", function () {
    hideGrid();
    showImgContainer(i);
  });
}

headingBtnEl.addEventListener("click", backBtn);
