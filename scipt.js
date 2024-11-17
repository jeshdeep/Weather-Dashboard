document.getElementById('searchBtn').addEventListener('click', fetchWeather);

function fetchWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  if (city === '') {
    alert('Please enter a city name!');
    return;
  }

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found!');
      }
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => {
      document.getElementById('weatherDisplay').innerHTML = `<p>${error.message}</p>`;
    });
}

function displayWeather(data) {
  const weatherHtml = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
  document.getElementById('weatherDisplay').innerHTML = weatherHtml;
}
