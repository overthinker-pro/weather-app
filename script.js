const apiKey = "65bc7c96f9f7a53a874515c0ac8b7145";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherSection = document.querySelector(".weather");
const errorSection = document.querySelector(".error");
const weatherIcon = document.querySelector(".weather-icon");

// Weather icon mapping
const weatherIcons = {
  Clouds: "images/clouds.png",
  Clear: "images/clear.png",
  Rain: "images/rain.png",
  Drizzle: "images/drizzle.png",
  Mist: "images/mist.png",
};

async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    showError();
  }
}

function updateUI(data) {
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

  weatherIcon.src = weatherIcons[data.weather[0].main] || "images/default.png";

  // Show weather section, hide error
  weatherSection.style.display = "block";
  errorSection.style.display = "none";
}

function showError() {
  errorSection.style.display = "block";
  weatherSection.style.display = "none";
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }
  fetchWeather(city);
});
