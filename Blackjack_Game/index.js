let player = {
    name: "Abe",
    chips: 200
}
let houseCards = []
let cards = []

let houseSum = 0
let sum = 0

let win = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let houseEl = document.getElementById("house-el")
let houseSumEl = document.getElementById("houseSum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let bidEl = document.getElementById("bid-el")

let startGameBtn = document.getElementById("startGame-btn")
let newCardBtn = document.getElementById("newCard-btn")

let totalBid = 0
bidEl.textContent = "bid: $" + totalBid
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let houseFirstCard = getRandomCard()
    let houseSecondCard = getRandomCard()
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    houseCards = [houseFirstCard, houseSecondCard]
    houseSum = houseFirstCard + houseSecondCard
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    displayCards()
    newCardBtn.disabled = false

    houseEl.textContent = "House Cards: " + houseCards[0] + " ?"
    houseSumEl.textContent += " ?"

    // Bid logic
    totalBid = 10
    player.chips -= totalBid
    bidEl.textContent = "bid: $" + totalBid
    playerEl.textContent = player.name + ": $" + player.chips
    startGameBtn.blocked = true

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        win = true
        gameOver(totalBid, win)
    } else {
        win = false
        gameOver(totalBid, win)
    }
}

function displayCards() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}

function displayHouseCards() {
    houseEl.textContent = "House Cards: "
    for (let i = 0; i < houseCards.length; i++) {
        houseEl.textContent += houseCards[i] + " "
    }
    houseSumEl.textContent = "House Sum: " + houseSum
}

function gameOver(totalBid, win) {
    displayHouseCards()
    if (win) {
        message = "You've got win!"
        player.chips += (totalBid * 2)
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "You've lost!"
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && win === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        displayCards()
        if (sum > 21){
            win = false 
            gameOver(totalBid, win)
        } else if (sum === 21) {
            win = true
            gameOver(totalBid, win)
        }
    }
}

function stay() {
    newCardBtn.disabled = true

    displayCards()
    displayHouseCards()

    while (houseSumEl < 17) {
        if (houseSumEl > 21) {
            win
            startGameBtn.disabled = false
            break
        } 
        newEl = getRandomCard()
        houseCards.append(newEl)
        houseSumEl += newEl
        displayHouseCards()  
    }
    if (houseSumEl >= sumEl){
        win = false
        gameOver(totalBid, win)
    } else {
        win = true
        gameOver(totalBid, win)
    }
    startGameBtn.disabled = true
    messageEl.textContent = message
}
