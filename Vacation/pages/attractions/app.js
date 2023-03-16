const attractionsListEl = document.querySelector(".attractions--list");
const vitoshaEl = document.querySelector(".vitosha");
const StaraPlaninaEl = document.querySelector(".staraPlanina");
const rilaEl = document.querySelector(".rila");
const pirinEl = document.querySelector(".pirin");

let keys;

let locationWrapper;
let locationName;
let locationPhoto;
let locationDescription;

async function fetchAttractions() {
  const response = await fetch("../.././api/api.json");
  const attractions = await response.json();
  return attractions;
}

fetchAttractions().then((attractionData) => {
  printAttractions("Vitosha", attractionData, 0);
  printAttractions("StaraPlanina", attractionData, 1);
  printAttractions("Rila", attractionData, 2);
  printAttractions("Pirin", attractionData, 3);
});

const printAttractions = (attractionName, data, counter) => {
  keys = data.attractions[counter];
  for (const attraction of data.attractions[counter][attractionName]) {
    createAttractions(attraction);
    sortAttractions();
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

  locationWrapper.setAttribute("class", "locationWrapper");
  locationName.setAttribute("class", "locationName");
  locationPhoto.setAttribute("class", "locationPhoto");
  locationDescription.setAttribute("class", "locationDescription");
};
console.log(locationWrapper);
const sortAttractions = () => {
  if (Object.keys(keys)[0] === "Vitosha") {
    vitoshaEl.appendChild(locationName);
    vitoshaEl.appendChild(locationWrapper);
    locationWrapper.appendChild(locationPhoto);
    locationWrapper.appendChild(locationDescription);
  }

  if (Object.keys(keys)[0] === "StaraPlanina") {
    StaraPlaninaEl.appendChild(locationName);
    StaraPlaninaEl.appendChild(locationWrapper);
    locationWrapper.appendChild(locationPhoto);
    locationWrapper.appendChild(locationDescription);
  }

  if (Object.keys(keys)[0] === "Rila") {
    rilaEl.appendChild(locationName);
    rilaEl.appendChild(locationWrapper);
    locationWrapper.appendChild(locationPhoto);
    locationWrapper.appendChild(locationDescription);
  }

  if (Object.keys(keys)[0] === "Pirin") {
    pirinEl.appendChild(locationName);
    pirinEl.appendChild(locationWrapper);
    locationWrapper.appendChild(locationPhoto);
    locationWrapper.appendChild(locationDescription);
  }
};
