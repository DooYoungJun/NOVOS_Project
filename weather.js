const weatherDataActive = function ({ location, weather }) {
    const weatherMainList = [
        'Clear',
        'Clouds',
        'Drizzle',
        'Fog',
        'Rain',
        'Snow',
        'Thunderstorm'
    ];
    weather = weatherMainList.includes(weather) ? weather : 'Fog';
    const locationNameTag = document.querySelector('#location-name-tag');
    locationNameTag.textContent = location;
    const weatherImage = document.querySelector('#weather-image');
    weatherImage.src = `images/${weather}.jpg`;
}

const weatherSearch = function ({ latitude, longitude }) {
    fetch(
    (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f216c486a139af9d9285e363eef14bfd`)
    )
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        const weatherData = {
            location : json.name,
            weather : json.weather[0].main
        }
        weatherDataActive(weatherData);
    })
    .catch((err) => {
        console.log(err)
    })
};

const accessToGeo = function ({ coords }) {
    const { latitude,longitude } = coords
    // shorthand property
    const positionObj ={
        latitude,
        longitude,
    };

    weatherSearch(positionObj);
};

const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
};
askForLocation();