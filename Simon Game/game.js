let buttonColor = ['green', 'red', 'yellow', 'blue']
let gamePattern = []
userClickedPattern = []
let started = false
let level = 0

$('.btn').click(function () {
  let userChosenColor = $(this).attr('id')
  userClickedPattern.push(userChosenColor)
  console.log(userClickedPattern)
  playSound(userChosenColor)
  animatePress(userChosenColor)
  checkAnswer(userClickedPattern.length - 1)
})

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColor = buttonColor[randomNumber]
  gamePattern.push(randomChosenColor)

  $('#' + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)
  playSound(randomChosenColor)

  level++
  $('#level-title').text('Level ' + level)
  userClickedPattern = []
}

function playSound(randomChosenColor) {
  var audio = new Audio('sounds/' + randomChosenColor + '.mp3')
  audio.play()
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed')

  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed')
  }, 100)
}

$(document).keypress(function () {
  if (!started) {
    nextSequence()
    $('#level-title').text('Level ' + level)
    started = true
  }
})
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log('succes')
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence()
      }, 1000)
    }
  } else {
    playSound('wrong')
    $('body').addClass('game-over')
    setTimeout(function () {
      $('body').removeClass('game-over')
    }, 200)
    console.log('wrong')
    $('#level-title').text('Game Over, Press Any Key to Restart')
    startOver()
  }
}
function startOver() {
  level = 0
  gamePattern = []
  started = false
}
