// let firstName = "Abe"
// let lastName = "Pasion"
// let name = firstName + " " + lastName

// let greeting = "Hi there,"

// function greets () {
//     let greetings = greeting + " " + firstName
//     console.log(greetings)
// }

// greets()

// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// remove1Point()
// console.log(myPoints)

// console.log("2" + 2) //22
// console.log(11 + 7) //18
// console.log(6 + "5") //65
// console.log("My points: " + 5 + 9) //59
// console.log(2 + 2) // 4
// console.log("11" + "14") // 1114

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase () {
    console.log("button was clicked")
    errorParagraph.textContent = "Something went wrong, please try again"

}