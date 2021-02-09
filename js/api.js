function getWeatherUpdate() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=38d348f4f51af1736cb2d746f81cc811');
    .then(response => response.json());
    .then(data => {
        document.getElementById("main").innerText = data.weather;
    });
}
getWeatherByLocation();