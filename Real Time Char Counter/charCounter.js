// KeyDown occurs when the user presses a key.
// KeyUp occurs when the user releases a key
$('.input').keyup(function (event) {
  let key = event.key
  if (key === 'Backspace') {
    let userText = $('.input').val()
    let a = userText.length
    $('.character span').text(a)
    $('.remaining span').text(50 - a)
  }
})
$('.input').keyup(function () {
  let userText = $('.input').val()
  let a = userText.length
  $('.character span').text(a)
  $('.remaining span').text(50 - a)
})
