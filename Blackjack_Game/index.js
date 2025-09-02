let player = {
    name: "Abe",
    chips: 200
}
let houseCards = []
let cards = []

let houseSum = 0
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let houseEl = document.getElementById("house-el")
let houseSumEl = document.getElementById("houseSum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let bidEl = document.getElementById("bid-el")

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
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    houseEl.textContent = "House Cards: "
    for (let i = 0; i < houseCards.length; i++){
        houseEl.textContent += houseCards[i] + " "
    }

    // Bid logic
    totalBid = 10
    player.chips -= totalBid

    bidEl.textContent = "bid: $" + totalBid
    sumEl.textContent = "Sum: " + sum
    houseSumEl.textContent = "House Sum: " + houseSum
    playerEl.textContent = player.name + ": $" + player.chips

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += (totalBid * 2)
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    play
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
