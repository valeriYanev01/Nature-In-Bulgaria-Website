const navbarEl = document.querySelector(".navbar");
const h1El = document.querySelector("h1");
const h1LinkEl = document.querySelector(".h1--link");
const navLinksEl = document.querySelector(".nav--links");
const linkFirstEl = document.querySelector(".link-1");
const linkSecondEl = document.querySelector(".link-2");
const linkThirdEl = document.querySelector(".link-3");
const linkFourthEl = document.querySelector(".link-4");
const linkFifthEl = document.querySelector(".link-5");
const mainContainer = document.querySelector(".main--container");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbarEl.style.height = "5em";
    navbarEl.style.opacity = "0.9";
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
    linkFifthEl.style.background = "#343a40";

    linkFirstEl.style.color = "#fff";
    linkSecondEl.style.color = "#fff";
    linkThirdEl.style.color = "#76ba99";
    linkFourthEl.style.color = "#fff";
    linkFifthEl.style.color = "#fff";

    mainContainer.style.borderTop = "none";
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
    linkFifthEl.style.background = "#fff";

    linkFirstEl.style.color = "#343a40";
    linkSecondEl.style.color = "#343a40";
    linkThirdEl.style.color = "#76ba99";
    linkFourthEl.style.color = "#343a40";
    linkFifthEl.style.color = "#343a40";

    mainContainer.style.borderTop = "solid #343a40 0.2em";
    mainContainer.style.borderWidth = "thin";
  }
};
