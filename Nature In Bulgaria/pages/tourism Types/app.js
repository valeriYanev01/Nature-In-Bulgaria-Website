import { fetchDescription, fetchData } from "./fetchingData.js";

const imgEl = document.querySelectorAll(".grid--img--list");
const gridEl = document.querySelector(".grid");
const img = document.querySelector(".img");
const imgContainerEl = document.querySelector(".img--container");
const headingBtnEl = document.querySelector(".heading-button");
const headingTitleEl = document.querySelector(".heading-title");
const destinationInfoEl = document.querySelector(".destinations--info");

destinationInfoEl.innerHTML = await fetchDescription().then((tour) => {
  return tour.description;
});

async function buildTitleAndDescription(description, title, el) {
  description = await fetchData(el).then((desc) => {
    return desc.tourDescription;
  });
  title = await fetchData(el).then((desc) => {
    return desc.tourName;
  });
  headingTitleEl.textContent = title;
  destinationInfoEl.innerHTML = description;
}

async function showDescription(el) {
  destinationInfoEl.innerHTML = "";
  headingTitleEl.textContent = "";
  let description;
  let title;

  if (imgEl[el].classList.contains("fifth")) {
    buildTitleAndDescription(description, title, 0);
  }

  if (imgEl[el].classList.contains("sixth")) {
    buildTitleAndDescription(description, title, 1);
  }

  if (imgEl[el].classList.contains("seventh")) {
    buildTitleAndDescription(description, title, 3);
  }

  if (imgEl[el].classList.contains("eighth")) {
    buildTitleAndDescription(description, title, 2);
  }
}

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
  headingTitleEl.textContent = "Tourism in Bulgaria";
  destinationInfoEl.innerHTML = await fetchDescription().then((tour) => {
    return tour.description;
  });
}

function unHoverEffect(el) {
  imgEl[el].addEventListener("mouseover", function () {
    imgEl[el].classList.add(".grid--img--list:hover");
    if (imgEl[el].classList.contains(".grid--img--list:hover")) {
      imgEl[el].style.animationDuration = "0.25s";
    }
  });
}

function showImgContainer(el) {
  setTimeout(() => {
    imgContainerEl.classList.remove("hidden");
    headingBtnEl.classList.remove("hidden");

    if (imgEl[el].classList.contains("sixth")) {
      imgBuild("../../img/tourism--page/black-sea-header-img.jpg");
    }
    if (imgEl[el].classList.contains("fifth")) {
      img.style.objectViewBox = "inset(50% 10% 10% 2%)";
      imgBuild("../../img/tourism--page/ski-header-img.jpg");
    }
    if (imgEl[el].classList.contains("seventh")) {
      imgBuild("../../img/tourism--page/eco-header-img.jpg");
    }
    if (imgEl[el].classList.contains("eighth")) {
      imgBuild("../../img/tourism--page/cultural-header-img.jpg");
    }
  }, 550);
  img.style.objectViewBox = "none";
}

function imgBuild(src) {
  img.src = src;
  img.style.borderRadius = "20px";
  imgContainerEl.appendChild(img);
  imgContainerEl.classList.add("show");
}

for (let i = 0; i < imgEl.length; i++) {
  unHoverEffect(i);
  imgEl[i].addEventListener("click", function () {
    hideGrid();
    showImgContainer(i);
    showDescription(i);
  });
}

headingBtnEl.addEventListener("click", backBtn);
