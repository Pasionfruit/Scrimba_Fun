let firstName = "Abe"
let lastName = "Pasion"
let name = firstName + " " + lastName

let greeting = "Hi there,"

function greets () {
    let greetings = greeting + " " + firstName
    console.log(greetings)
}

greets()

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
remove1Point()
console.log(myPoints)