// User can only type number
function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false
  return true
}

// At first I created 2 random number
let randomNumber1 = Math.floor(Math.random() * 10) + 1
let randomNumber2 = Math.floor(Math.random() * 30) + 1

// Assigned random numbers in question
let question = document.querySelector('h1')
question.innerHTML = 'What is ' + randomNumber1 + ' multiply by ' + randomNumber2 + ' ?'

// Right Answer
let rightAnswer = randomNumber1 * randomNumber2
console.log(rightAnswer)
// Right answer to convert string
let convertRightAnswer = rightAnswer.toString()

// Get score
let score = document.querySelector('h3')
let count = 0
$('.btn').click(function () {
  // Get value of user Answer
  let userAnswer = $('.input').val()
  console.log(userAnswer)
  console.log(typeof userAnswer)
  if (userAnswer === convertRightAnswer) {
    score.innerHTML = 'Score: ' + count
    count++
    question.innerHTML = 'What is ' + randomNuber1 + ' multiply by ' + randomNumber2 + ' ?'
  }
})
