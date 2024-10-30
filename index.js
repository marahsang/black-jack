let firstCard = 11
let secondCard = 6
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
hasBlackJack = false
isAlive = true 
let message = ""
let starEL = document.querySelector("#start-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
function startGame() {
    console.log("Refactoring")
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent ="Cards: " + firstCard[0] + " " + secondCard[1]

    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    }   else if (sum === 21) {
        message = "Woohoo you've got blackjack"
        hasBlackJack = true
    
    }   else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    }

    function newCard(){
        console.log("Drawing a new card from the deck")
        let card = 3
        sum += card
        renderGame()
    }

/* let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
message = "Woohoo you've got blackjack 😇"
if(sum <= 20) {
    console.log("Do you want to draw a new card? 🌝")
}   else if (sum === 21) {
    console.log("Woohoo you've got blackjack 😇")
    hasBlackJack = true
    console.log(hasBlackJack)
}   else {
    console.log("You are out of the game 😦") 
    isAlive = false
    console.log(isAlive)
}
console.log(message)

//let starEL = document.getElementById("start-el")
//let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

*/