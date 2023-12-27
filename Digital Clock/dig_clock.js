getTime()

function getTime() {
  let hours = document.querySelector('.hours')
  let newHour = new Date().getHours()
  hours.innerHTML = `<h3>${newHour}</h3>`

  let minutes = document.querySelector('.minutes')
  let newMinutes = new Date().getMinutes()
  minutes.innerHTML = `<h3>${newMinutes}</h3>`

  let seconds = document.querySelector('.seconds')
  let newSeconds = new Date().getSeconds()
  seconds.innerHTML = `<h3>${newSeconds}</h3>`
}
setInterval(() => {
  getTime()
}, 1000)
