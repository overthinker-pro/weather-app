const apiKey = "65bc7c96f9f7a53a874515c0ac8b7145";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bengaluru";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();