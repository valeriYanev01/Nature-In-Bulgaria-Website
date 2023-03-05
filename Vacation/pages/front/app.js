const buttonEl = document.body.querySelector("button");
const centerEl = document.body.querySelector(".el--center");
const infoHeightEl = document.body.querySelector(".el--info--height");

const transform = () => {
  console.log("hello");
  infoHeightEl.classList.remove("el--center");
};

buttonEl.addEventListener("click", transform);

console.log("heelo");
