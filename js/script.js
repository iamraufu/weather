const apiKey = "38d348f4f51af1736cb2d746f81cc811";
const report = document.getElementById("report");
const search = document.getElementById("search");
const city = document.getElementById("city");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const url2 = (city) => `https://api.openweathermap.org/data/2.5/weather?q=London&appid=38d348f4f51af1736cb2d746f81cc811`;

function getWeatherByLocation(city) {
    const response = fetch(url(city), { origin: "cors" });
    const responseData = response.json();

    console.log(responseData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.report.temp);
    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small>
    `;

    report.innerHTML = "";

    report.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

city.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = city.value;

    if (city) {
        getWeatherByLocation(city);
    }
});