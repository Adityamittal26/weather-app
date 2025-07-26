// http://api.weatherapi.com/v1/current.json?key=781984e2aa824aa1852141014252607&q=&(mumbai)&aqi=no
const tempraturefeild = document.querySelector('#temp')
const locationfeild = document.querySelector('#location')
const datefeild = document.querySelector('#date')
const conditionfeild = document.querySelector('#condition')
const searchfeild = document.querySelector('.search')
const form = document.querySelector('form')

form.addEventListener('submit', search)

let target = 'london'
const getWeather = async (city) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=781984e2aa824aa1852141014252607&q=${city}&aqi=no`

    const res = await fetch(url)
    const data = await res.json()

    let temp = data.current.temp_c
    let location = data.location.name
    let date = data.location.localtime
    let condition = data.current.condition.text

    updateWeather(temp, location, date, condition)

    // console.log(temp, location, date, condition)

}

function updateWeather(temp, location, date, condition) {

    let splitDate = date.split(' ')[0]
    let splitTime = date.split(' ')[1]
    let day = getdayname(new Date(splitDate).getDay())

    tempraturefeild.innerHTML = `${temp}°C`
    locationfeild.innerHTML = `in ${location}`
    datefeild.innerHTML = splitDate + ' ' + day + ' ' + splitTime
    conditionfeild.innerHTML = condition
}

function search(e) {
    e.preventDefault()
    target = searchfeild.value
    getWeather(target)
    searchfeild.value = ''
}

function getdayname(number) {
    switch (number){
    case 0:
        return 'Sunday'
        break
    case 1:
        return 'monday'
        break
    case 2:
        return 'tuesday'
        break
    case 3:
        return 'wednesday'
        break
    case 4:
        return 'thursday'
        break
    case 5:
        return 'friday'
        break
    case 6:
        return 'saturday'
        break
    }
}

    getWeather(target)
