const attractionsListEl = document.querySelector(".attractions--list");
const vitoshaEl = document.querySelector(".vitosha");
const StaraPlaninaEl = document.querySelector(".staraPlanina");
const rilaEl = document.querySelector(".rila");
const pirinEl = document.querySelector(".pirin");
const scrollEl = document.querySelector(".scroll");
const arrowsEl = document.querySelector(".arrows");
const errorEl = document.querySelector(".error");

scrollEl.style.display = "none";

let keys;

let locationWrapper;
let locationName;
let locationPhoto;
let locationDescription;

let zlatniMostoveID;

async function fetchAttractions() {
  const response = await fetch("https://api.jsonbin.io/v3/b/641553d5ebd26539d090b2e6");
  const attractions = await response.json();
  return attractions;
}

fetchAttractions()
  .then((attractionData) => {
    printAttractions("Vitosha", attractionData, 0);
    printAttractions("StaraPlanina", attractionData, 1);
    printAttractions("Rila", attractionData, 2);
    printAttractions("Pirin", attractionData, 3);
  })
  .catch((error) => {
    console.error(error);
    arrowsEl.style.display = "none";
    errorEl.textContent = error;
    errorEl.style.display = "block";
    StaraPlaninaEl.style.display = "none";
    rilaEl.style.display = "none";
    pirinEl.style.display = "none";
  });

const printAttractions = (attractionName, data, counter) => {
  keys = data.record.attractions[counter];
  for (const attraction of data.record.attractions[counter][attractionName]) {
    createAttractions(attraction);
    sortAttractions(keys, counter);
  }
};

const createAttractions = (attraction) => {
  locationWrapper = document.createElement("div");
  locationName = document.createElement("h3");
  locationPhoto = document.createElement("img");
  locationDescription = document.createElement("p");

  locationName.textContent = attraction.locationName;
  locationPhoto.src = attraction.locationPhoto;
  locationDescription.textContent = attraction.locationDescription;

  locationName.setAttribute("class", "locationName");
  locationWrapper.setAttribute("class", "locationWrapper");

  if (attraction.id % 2 == 0) {
    locationPhoto.setAttribute("class", "locationPhoto--left");
    locationDescription.setAttribute("class", "locationDescription--right locationDescription--style");
  } else {
    locationPhoto.setAttribute("class", "locationPhoto--right");
    locationDescription.setAttribute("class", "locationDescription--left locationDescription--style");
  }

  if (locationName.innerText === "Zlatnite Mostove") {
    locationName.setAttribute("id", "zlatniMostoveID");
  }
};

const sortAttractions = (keys, counter) => {
  if (Object.keys(keys)[counter] === "Vitosha") {
    filterAttractions(vitoshaEl, locationName, locationWrapper, locationDescription, locationPhoto);
  }

  if (Object.keys(keys)[0] === "StaraPlanina") {
    filterAttractions(StaraPlaninaEl, locationName, locationWrapper, locationDescription, locationPhoto);
  }

  if (Object.keys(keys)[0] === "Rila") {
    filterAttractions(rilaEl, locationName, locationWrapper, locationDescription, locationPhoto);
  }

  if (Object.keys(keys)[0] === "Pirin") {
    filterAttractions(pirinEl, locationName, locationWrapper, locationDescription, locationPhoto);
  }
};

const filterAttractions = (locationEl, locationName, locationWrapper, locationDescription, locationPhoto) => {
  locationEl.appendChild(locationName);
  locationEl.appendChild(locationWrapper);
  locationWrapper.appendChild(locationDescription);
  locationWrapper.appendChild(locationPhoto);
};

setTimeout(() => {
  scrollEl.style.display = "block";
  zlatniMostoveID = document.getElementById("zlatniMostoveID");
  scrollEl.addEventListener("click", function () {
    zlatniMostoveID.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}, 1000);
