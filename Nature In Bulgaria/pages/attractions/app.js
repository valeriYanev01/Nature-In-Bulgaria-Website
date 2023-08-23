const attractionsListEl = document.querySelector(".attractions--list");
const vitoshaEl = document.querySelector(".vitosha");
const StaraPlaninaEl = document.querySelector(".staraPlanina");
const rilaEl = document.querySelector(".rila");
const pirinEl = document.querySelector(".pirin");
const scrollEl = document.querySelector(".scroll");
const arrowsEl = document.querySelector(".arrows");
const errorEl = document.querySelector(".error");

const arrowsVitoshaEl = document.querySelector(".arrows--vitosha");
const arrowsStaraPlaninaEl = document.querySelector(".arrows--staraPlanina");
const arrowsRilaEl = document.querySelector(".arrows--rila");
const arrowsPirinEl = document.querySelector(".arrows--pirin");

let zlatniMostoveID;
let buzludjaPeakID;
let rilskiManastirID;
let vihrenPeakID;

let locationWrapper;
let locationName;
let locationPhoto;
let locationDescription;

let keys;

let imagesList = [];

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
  for (const attraction of keys[attractionName]) {
    createAttractions(attraction);
    sortAttractions(keys);
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
    locationPhoto.setAttribute("class", "locationPhoto locationPhoto--left");
    locationDescription.setAttribute("class", "locationDescription--right locationDescription--style");
  } else {
    locationPhoto.setAttribute("class", "locationPhoto locationPhoto--right");
    locationDescription.setAttribute("class", "locationDescription--left locationDescription--style");
  }

  if (locationName.innerText === "Zlatnite Mostove") {
    locationName.setAttribute("id", "zlatniMostoveID");
  }

  if (locationName.innerText === "Buzludzha Peak") {
    locationName.setAttribute("id", "buzludzhaPeakID");
  }

  if (locationName.innerText === "Rilski Manastir") {
    locationName.setAttribute("id", "rilskiManastirID");
  }

  if (locationName.innerText === "Vihren Peak") {
    locationName.setAttribute("id", "vihrenPeakID");
  }
};

const sortAttractions = (keys) => {
  if (Object.keys(keys)[0] === "Vitosha") {
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

scrollEl.style.display = "none";

setTimeout(() => {
  scrollEl.style.display = "block";
  zlatniMostoveID = document.getElementById("zlatniMostoveID");
  buzludjaPeakID = document.getElementById("buzludzhaPeakID");
  rilskiManastirID = document.getElementById("rilskiManastirID");
  vihrenPeakID = document.getElementById("vihrenPeakID");

  addEventsToElements(arrowsVitoshaEl, zlatniMostoveID);
  addEventsToElements(arrowsStaraPlaninaEl, buzludjaPeakID);
  addEventsToElements(arrowsRilaEl, rilskiManastirID);
  addEventsToElements(arrowsPirinEl, vihrenPeakID);
}, 1000);

const addEventsToElements = (el, id) => {
  el.addEventListener("click", function () {
    if (id.id == "zlatniMostoveID") {
      window.scrollTo({
        behavior: "smooth",
        top: id.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 110,
      });
    } else {
      window.scrollTo({
        behavior: "smooth",
        top: id.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80,
      });
    }
  });
};
