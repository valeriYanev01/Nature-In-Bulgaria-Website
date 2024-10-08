const buttonNatureEl = document.querySelector(".information--button--nature");
const ButtonSeaEl = document.querySelector(".information--button--sea");

const infoNatureIDEl = document.querySelector("#information--text--nature");
const infoSeaIDEl = document.querySelector("#information--text--sea");

const informationNatureTextEl = document.querySelector(".information--text--nature");
const informationSeaTextEl = document.querySelector(".information--text--sea");

const headerNatureEl = document.querySelector(".information--header--h3--nature");
const headerSeaEl = document.querySelector(".information--header--h3--sea");

const infromationHeaderNatureImg = document.querySelector(".information--header--nature");
const infromationHeaderSeaImg = document.querySelector(".information--header--sea");

const nature = () => {
  infoNatureIDEl.scrollIntoView({ behavior: "smooth", block: "center" });
  if (informationNatureTextEl.classList.contains("information--expand")) {
    showHideContent(informationNatureTextEl, buttonNatureEl);
  } else if (informationNatureTextEl.classList.contains("information--shrink")) {
    informationSeaTextEl.classList.remove("information--expand");
    informationSeaTextEl.classList.add("information--shrink");
    ButtonSeaEl.textContent = "Show More";
    showHideContent(informationNatureTextEl, buttonNatureEl);
  }
};

function sea() {
  headerSeaEl.scrollIntoView({ behavior: "smooth", block: "center" });
  if (informationSeaTextEl.classList.contains("information--expand")) {
    showHideContent(informationSeaTextEl, ButtonSeaEl);
  } else if (informationSeaTextEl.classList.contains("information--shrink")) {
    buttonNatureEl.textContent = "Show More";

    if (informationNatureTextEl.classList.contains("information--expand")) {
      setTimeout(() => {
        showHideContent(informationSeaTextEl, ButtonSeaEl);
      }, 500);
    } else {
      showHideContent(informationSeaTextEl, ButtonSeaEl);
    }

    informationNatureTextEl.classList.remove("information--expand");
    informationNatureTextEl.classList.add("information--shrink");
  }
}

function showHideContent(infoEl, btnEl) {
  if (infoEl.classList.contains("information--expand")) {
    infoEl.classList.remove("information--expand");
    infoEl.classList.add("information--shrink");
    btnEl.textContent = "Show More";
  } else if (infoEl.classList.contains("information--shrink")) {
    infoEl.classList.remove("information--shrink");
    infoEl.classList.add("information--expand");
    btnEl.textContent = "Show Less";
  }
}

buttonNatureEl.addEventListener("click", nature);
ButtonSeaEl.addEventListener("click", sea);
