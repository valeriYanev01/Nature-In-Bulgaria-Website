const firstButtonEl = document.body.querySelector(".el--button--first");
const secondButtonEl = document.body.querySelector(".el--button--second");
const thirdButtonEl = document.body.querySelector(".el--button--third");

const transformContent = (e) => {
  const wrapperEl = e.currentTarget.parentElement.previousSibling.previousSibling;
  const additionalContentEl =
    e.currentTarget.parentElement.previousSibling.previousSibling.previousSibling.previousSibling;
  if (wrapperEl.style.display === "none") {
    wrapperEl.style.display = "block";
    additionalContentEl.style.display = "none";
    e.currentTarget.innerText = "See more";
  } else {
    wrapperEl.style.display = "none";
    additionalContentEl.style.display = "block";
    e.currentTarget.innerText = "See less";
  }
};

firstButtonEl.addEventListener("click", transformContent);
secondButtonEl.addEventListener("click", transformContent);
thirdButtonEl.addEventListener("click", transformContent);
