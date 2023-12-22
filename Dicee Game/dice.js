// random first dice
let randomNumber1 = Math.floor(Math.random() * 6 + 1)
let diceimage1 = 'images/dice' + randomNumber1 + '.png'
document.querySelector('.img1').setAttribute('src', diceimage1)

// random second dice
let randomNumber2 = Math.floor(Math.random() * 6 + 1)
let diceimage2 = 'images/dice' + randomNumber2 + '.png'
document.querySelector('.img2').setAttribute('src', diceimage2)

// The player who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!'
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!'
} else {
  document.querySelector('h1').innerHTML = 'Draw !'
}
