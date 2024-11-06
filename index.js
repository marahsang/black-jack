let cards = []
let sum = 0
hasBlackJack = false
isAlive = false
let message = ""
let starEL = document.querySelector("#start-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1) {
        return 11
      }  else if (randomNumber > 10 ) {
            return 10
        } else {
            return randomNumber
        }
    }

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
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
        if(isAlive && !hasBlackJack) {
            let card = getRandomCard();
            sum += card
            cards.push(card);
            renderGame()
        }   else {
            console.log("You can't draw a new card, ")
        }
    }
