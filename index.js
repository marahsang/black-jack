let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
hasBlackJack = false
isAlive = true
let message = ""
//let starEL = document.getElementById("start-el")
//let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

let starEL = document.querySelector("#start-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")

function startGame () {
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card? 🌝"
    }   else if (sum === 21) {
        message = "Woohoo you've got blackjack 😇"
        hasBlackJack = true
    
    }   else {
        message = "You are out of the game 😦"
        isAlive = false
    }
    messageEl.textContent = message
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

*/