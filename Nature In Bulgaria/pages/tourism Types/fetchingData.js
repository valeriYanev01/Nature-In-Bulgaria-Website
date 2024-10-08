export async function fetchDescription() {
  const response = await fetch("https://api.jsonbin.io/v3/b/64ece29cb89b1e2299d72443");
  const tourisms = await response.json();
  return tourisms.record.tourism[0].General[0];
}

export async function fetchData(el) {
  const response = await fetch("https://api.jsonbin.io/v3/b/64ece29cb89b1e2299d72443");
  const tourisms = await response.json();
  return tourisms.record.tourism[0].Types[el];
}
