const inputEl = document.getElementById("converter-input")
const converterBtn = document.getElementById("converter-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
let meters = 0
let feet = 0
let liters = 0
let gallons = 0
let kilos = 0
let pounds = 0
function feetToMeters(num) {
    let result = num / 3.281
    result = result.toFixed(3)
    return result
}
function metersToFeet(num) {
    let result = num * 3.281
    result = result.toFixed(3)
    return result
} 
function gallonsToLiters(num) {
    let result = num * 0.264
    result = result.toFixed(3)
    return result
}
function litersToGallons(num) {
    let result = num / 0.264
    result = result.toFixed(3)
    return result
}
function poundsToKilos(num) {
    let result = num / 2.204
    result = result.toFixed(3)
    return result
}
function kilosToPounds(num) {
    let result = num * 2.204
    result = result.toFixed(3)
    return result
}
inputEl.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        event.preventDefault()
        converterBtn.click()
    }
})
converterBtn.addEventListener("click", function() {
    let input = inputEl.value 
    lengthResult.innerHTML = `<h3 class = "result-heading">Length (Meter/Feet)</h3>`
    volumeResult.innerHTML = `<h3 class = "result-heading">Volume (Liters/Gallons)</h3>`
    massResult.innerHTML = `<h3 class = "result-heading">Mass (Kilograms/Pounds)</h3>`
    meters = feetToMeters(input)
    feet = metersToFeet(input)
    liters = gallonsToLiters(input)
    gallons = litersToGallons(input)
    kilos = poundsToKilos(input)
    pounds = kilosToPounds(input)
    const paraLength = document.createElement("p")
    paraLength.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
    lengthResult.append(paraLength)
    const paraVolume = document.createElement("p")
    paraVolume.textContent= `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
    volumeResult.append(paraVolume)
    const paraMass = document.createElement("p")
    paraMass.textContent = `${input} kilograms = ${pounds} pounds | ${input} pounds = ${kilos} kilograms`
    massResult.append(paraMass)
})