const apiKey = '48d0a471c6ffa5728be02f992ddad3b8'
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bangalore"

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    const data = response.json
    console.log(data)
}

checkWeather()