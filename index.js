let player = {
    name: "Player",
    chips: 100
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    return card > 10 ? 10 : card === 1 ? 11 : card;
}

function startGame() {
    isAlive = true;
    hasBlackjack = false; 
    cards = [];
    sum = 0;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    document.getElementById("cards-el").textContent = "Cards: " + cards.join(" ");
    document.getElementById("sum-el").textContent = "Sum: " + sum;
    document.getElementById("player-el").textContent = `${player.name}: $${player.chips}`;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    document.getElementById("message-el").textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    } else if (!isAlive || hasBlackjack) {
        document.getElementById("message-el").textContent =
            "Game over! Start a new game to play again.";
    }
}