let firstCard = 9
let secondCard = 11
let thirdCard = 5
let sum = firstCard + secondCard + thirdCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')



function startGame() {
    sumEl.innerText = 'Sum: ' + sum
    cardsEl.innerText = 'Cards: ' +  firstCard + ' - ' + secondCard
    if (sum <= 20) {
         message = 'do you want to draw a new card?'
         
    } else if ( sum === 21) {
        hasBlackJack = true
        message = 'wtf!!! you got black jack!!!'
        
    } else {
        isAlive = false
        message = 'you are out of the game!!!'
        
    }
    messageEl.textContent = message
    
}

function newCard() {
    console.log('render new card')
}



