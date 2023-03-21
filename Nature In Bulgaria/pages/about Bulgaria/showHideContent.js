const buttonNatureEl = document.querySelector(".information--button--nature");
const ButtonSeaEl = document.querySelector(".information--button--sea");

const informationNatureTextEl = document.querySelector(".information--text--nature");
const informationSeaTextEl = document.querySelector(".information--text--sea");

const headerNatureEl = document.querySelector(".information--header--h3--nature");
const headerSeaEl = document.querySelector(".information--header--h3--sea");

const infromationHeaderNatureImg = document.querySelector(".information--header--nature");
const infromationHeaderSeaImg = document.querySelector(".information--header--sea");

const nature = () => {
  if (informationNatureTextEl.classList.contains("information--expand")) {
    showHideContent(informationNatureTextEl);
    window.scrollTo({
      behavior: "smooth",
      top: 30,
    });
  } else if (informationNatureTextEl.classList.contains("information--shrink")) {
    informationSeaTextEl.classList.remove("information--expand");
    informationSeaTextEl.classList.add("information--shrink");
    setTimeout(() => {
      showHideContent(informationNatureTextEl);
      window.scrollTo({
        behavior: "smooth",
        top: 170,
      });
    }, 400);
  }
};

const sea = () => {
  if (informationSeaTextEl.classList.contains("information--expand")) {
    showHideContent(informationSeaTextEl, infromationHeaderSeaImg);
    window.scrollTo({
      behavior: "smooth",
      top: 400,
    });
  } else if (informationSeaTextEl.classList.contains("information--shrink")) {
    informationNatureTextEl.classList.remove("information--expand");
    informationNatureTextEl.classList.add("information--shrink");
    setTimeout(() => {
      showHideContent(informationSeaTextEl);
      window.scrollTo({
        behavior: "smooth",
        top: 750,
      });
    }, 400);
  }
};

const showHideContent = (el) => {
  if (el.classList.contains("information--expand")) {
    el.classList.remove("information--expand");
    el.classList.add("information--shrink");
  } else if (el.classList.contains("information--shrink")) {
    el.classList.remove("information--shrink");
    el.classList.add("information--expand");
  }
};

buttonNatureEl.addEventListener("click", nature);
ButtonSeaEl.addEventListener("click", sea);
