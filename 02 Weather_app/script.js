
const temperatureField = document.querySelector(".temp")
const locationField = document.querySelector(".time_location p")
const dateAndTimeField = document.querySelector(".time_location span")
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector("form")

form.addEventListener('submit', searchForLocation)

let target = "Bangalore"


const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=1cd37935de224431a21122257252705&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let location = data.location.name

    let time = data.location.localtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text

    updateDetails(temp, location, time, condition)

}

function searchForLocation(e) {
    e.preventDefault()

    target = searchField.value

    fetchResults(target)
}

function updateDetails(temp, locationName, time, condition) {
    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]

    let currentDay = getDayName(new Date(splitDate).getDay())

    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateAndTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    conditionField.innerText = condition

}

fetchResults(target)


function getDayName(number) {
    switch (number) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}