document.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop == 19 ||
    document.documentElement.scrollTop == 20 ||
    document.documentElement.scrollTop == 21 ||
    document.documentElement.scrollTop == 22 ||
    document.documentElement.scrollTop == 23 ||
    document.documentElement.scrollTop == 24 ||
    document.documentElement.scrollTop == 25
  ) {
    document.documentElement.scrollTo({ top: 0 });
  }
  console.log(document.documentElement.scrollTop);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown" && document.documentElement.scrollTop < 15) {
    document.documentElement.scrollTo({ top: 30 });
  }

  if (e.key == "ArrowUp" && document.documentElement.scrollTop < 45) {
    document.documentElement.scrollTo(0, 0);
  }
});
