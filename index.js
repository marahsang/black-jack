let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
hasBlackJack = false
isAlive = true 
let message = ""
let starEL = document.querySelector("#start-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let player1Time = 102
let player2Time = 107 

function startGame() {
    console.log("Refactoring")
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent ="Cards: " 

    for(i = 0; i < cards.length; i++) {
       cardsEl.textContent += cards[i] + " "
    }

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
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
    function totalRaceTime() {
        let players = player1Time + player2Time
        return players
    }    
     player = totalRaceTime()
    console.log(player)

    function getRandomCard() {
        return 5
    }