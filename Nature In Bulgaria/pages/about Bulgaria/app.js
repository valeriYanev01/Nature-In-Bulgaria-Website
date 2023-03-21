document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop >= 19 && document.documentElement.scrollTop <= 21) {
    document.documentElement.scrollTo({ top: 26 });
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown" && document.documentElement.scrollTop < 15) {
    document.documentElement.scrollTo({ top: 30 });
  }

  if (e.key == "ArrowUp" && document.documentElement.scrollTop < 45) {
    document.documentElement.scrollTo(0, 0);
  }
});
