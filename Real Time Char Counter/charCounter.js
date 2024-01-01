$('.input').keydown(function () {
  let userText = $('.input').val()
  let a = userText.length
  $('.character span').text(a)
  $('.remaining span').text(50 - a)
})
$('.input').keydown(function (event) {
  let key = event.key
  if (key === 'Backspace') {
    let userText = $('.input').val()
    let a = userText.length
    $('.character span').text(a)
    $('.remaining span').text(50 - a)
  }
})
