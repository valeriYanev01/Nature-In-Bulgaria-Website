const navbarEl = document.querySelector(".navbar");
const h1El = document.querySelector("h1");
const h1LinkEl = document.querySelector(".h1--link");
const navLinksEl = document.querySelector(".nav--links");
const linkFirstEl = document.querySelector(".link-1");
const linkSecondEl = document.querySelector(".link-2");
const linkThirdEl = document.querySelector(".link-3");
const linkFourthEl = document.querySelector(".link-4");
const mainContainer = document.querySelector(".main--container");

const scrollBtnEl = document.querySelector(".scrTop");

const scrollFnc = () => {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    scrollBtnEl.style.display = "block";
  } else {
    scrollBtnEl.style.display = "none";
  }
};

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

if (!scrollBtnEl) {
} else {
  scrollBtnEl.addEventListener("click", backToTop);
}

window.onscroll = function () {
  scrollFunction();
  if (!scrollBtnEl) {
  } else {
    scrollFnc();
  }
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbarEl.style.height = "5em";
    navbarEl.style.opacity = "0.8";
    navbarEl.style.backgroundColor = "#343a40";
    navbarEl.style.padding = "0";

    h1El.style.backgroundColor = "#343a40";
    h1LinkEl.style.color = "#fff";
    h1LinkEl.style.background = "#343a40";

    navLinksEl.style.background = "#343a40";

    linkFirstEl.style.background = "#343a40";
    linkSecondEl.style.background = "#343a40";
    linkThirdEl.style.background = "#343a40";
    linkFourthEl.style.background = "#343a40";

    linkFirstEl.style.color = "#fff";
    linkSecondEl.style.color = "#fff";
    linkThirdEl.style.color = "#76ba99";
    linkFourthEl.style.color = "#fff";
  } else {
    navbarEl.style.height = "5.5em";
    navbarEl.style.opacity = "1";
    navbarEl.style.backgroundColor = "#fff";
    navbarEl.style.padding = "10px 0";

    h1El.style.backgroundColor = "#fff";
    h1LinkEl.style.color = "#343a40";
    h1LinkEl.style.background = "#fff";

    navLinksEl.style.background = "#fff";

    linkFirstEl.style.background = "#fff";
    linkSecondEl.style.background = "#fff";
    linkThirdEl.style.background = "#fff";
    linkFourthEl.style.background = "#fff";

    linkFirstEl.style.color = "#343a40";
    linkSecondEl.style.color = "#343a40";
    linkThirdEl.style.color = "#76ba99";
    linkFourthEl.style.color = "#343a40";
  }
};
