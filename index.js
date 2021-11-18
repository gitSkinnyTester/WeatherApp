//api key, given by the website
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

//getting the promises and api data using JSON()...
getWeatherData = (city) =>{
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`

    //fetch is taking a promise...
    let weatherPromise = fetch(fullURL);
    //console.log(weatherPromise);

    let sample = weatherPromise.then((x)=>{
        //console.log(x.json())
        return x.json();
    }).then((y)=>{
        displayWeatherData(y);
    }).catch((z)=>{
        console.log("error:202")
    })
}

//search // clicking the search button...
getSearchCity = () =>{
    resetWeatherData();
    console.clear();
    const city = document.getElementById('city-input').value;
    
    getWeatherData(city);
   
}

//letter capitaliztion func...
const letterCap = (s) =>{
       return s.charAt(0).toUpperCase() + s.slice(1)
}

//displaying the data/value...
displayWeatherData = (y) =>{
    //round off...
    let tempC = Math.round(((y.main.temp - 32) * (5/9)) * 100) / 100;
    let minC = Math.round(((y.main.temp_min - 32) * (5/9)) * 100) / 100;
    let maxC = Math.round(((y.main.temp_max - 32) * (5/9)) * 100) / 100;
    let feelC = Math.round(((y.main.feels_like - 32) * (5/9)) * 100) / 100;
    let weather = y.weather[0].description;
    //capitalizing the weather condition output using letterCap() func...
    let capitalized = letterCap(weather);
    
    //displaying values...
    document.getElementById('city-name').innerText = y.name;
    document.getElementById('city-weather').innerText = capitalized;
    document.getElementById('temp').innerText = `${y.main.temp}°F | ${tempC}°C`;
    document.getElementById('max-temp').innerText = `${y.main.temp_max}°F | ${maxC}°C`;
    document.getElementById('min-temp').innerText = `${y.main.temp_min}°F | ${minC}°C`;
    document.getElementById('feels-like').innerText = `${y.main.feels_like}°F | ${feelC}°C`;

    //displaying values(console) ...
    console.log(`Temp: ${y.main.temp}°F | ${tempC}°C`);
    console.log(`Min Temp: ${y.main.temp_min}°F | ${minC}°C`);
    console.log(`Max Temp: ${y.main.temp_max}°F | ${maxC}°C`);
    console.log(`Feels like: ${y.main.feels_like}°F | ${feelC}°C`);
    console.log(`Weather Condition: ${y.weather[0].description}`);
}

//reset
resetWeatherData = () =>{
    //displaying values...
    document.getElementById('city-name').innerText = `---`;
    document.getElementById('city-weather').innerText = `---`;
    document.getElementById('temp').innerText = `---`;
    document.getElementById('max-temp').innerText = `---`;
    document.getElementById('min-temp').innerText = `---`;
    document.getElementById('feels-like').innerText = `---`;
}