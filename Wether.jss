document.getElementById('search-btn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = 'YOUR_API_KEY'; // Insert your actual API key here
    const weatherInfo = document.getElementById('weatherInfo');
    const error = document.getElementById('error');

    if (!city) {
        error.textContent = 'Please enter a city name.';
        error.classList.remove('hidden');
        weatherInfo.classList.add('hidden');
        return;
    }

    try {
        const response = await fetch(
            https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        document.getElementById('cityName').textContent = data.name;
        document.getElementById('icon').src = https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('temp').textContent = ${data.main.temp} °C;
        document.getElementById('feels-like').textContent = Feels like: ${data.main.feels_like} °C;
        document.getElementById('humidity').textContent = Humidity: ${data.main.humidity}%;
        document.getElementById('wind').textContent = Wind: ${data.wind.speed} m/s;

        weatherInfo.classList.remove('hidden');
        error.classList.add('hidden');
    } catch (err) {
        error.textContent = err.message;
        error.classList.remove('hidden');
        weatherInfo.classList.add('hidden');
    }
}
