function refreshWeather(response) {
  let tempElement = document.querySelector("#temp");
  let temp = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temp);

  console.log(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "135f02bffcta720ff4c241394b466o99";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Voorburg");
