// document.getElementById("count-el").innerText = 2;

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch

// let humanDogRatio = 7
// let myAge = 22
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoint = 50 
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// console.log(count)

// Laps Challenge
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLaps() {
//     let total = lap1 + lap2 + lap3
//     console.log(total)
// }

// let lapsCompleted = 0

// function addLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// addLap()
// addLap()
// addLap()
// console.log(lapsCompleted)

let countEl = document.getElementById("count-el")
let passenger = 0
let logs = document.getElementById("logs")
let stringLogs = "Previous entries: "

function increment() {
    // console.log("button was clicked")
    passenger += 1
    countEl.innerText = passenger
}

function decrement() {
    passenger -= 1
    countEl.innerText = passenger
}

function save() {
    stringLogs += passenger + ", " 
    console.log(stringLogs)
    logs.textContent = stringLogs
    countEl.innerText = 0
    passenger = 0
}


