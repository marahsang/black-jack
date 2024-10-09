let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
if(sum <= 20) {
    console.log("Do you want to draw a new card? 🌝")
}   else if (sum === 21) {
    console.log("Woohoo you've got blackjack 😇")
    hasBlackJack = true
    console.log(hasBlackJack)
}   else {
    console.log("You are out of the game 😦")
}



