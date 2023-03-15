const firstAttractionsEl = document.body.querySelector(".first--attractions");

async function fetchAttractions() {
  const response = await fetch("../.././api/api.json");
  const attractions = await response.json();
  return attractions;
}

fetchAttractions().then((attraction) => {
  firstAttractionsEl.textContent = attraction.attractions[0].locationName;
});
