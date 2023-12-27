getTime()
let changedParamater = document.querySelector('.am_pm')
// changedParamater.innerHTML=`<h2>AM</h2>`
function getTime() {
  //Get data of hours
  let hours = document.querySelector('.hours')
  let newHour = new Date().getHours()
  if (newHour < 10) {
    newHour = '0' + newHour
  }
  if (newHour >= 12) {
    newHour = newHour - 12
    changedParamater.innerHTML = `<h2>PM</h2>`
  }
  hours.innerHTML = `<h3>${newHour}</h3>`
  //Get data of minutes
  let minutes = document.querySelector('.minutes')
  let newMinutes = new Date().getMinutes()
  if (newMinutes < 10) {
    newMinutes = '0' + newMinutes
  }
  minutes.innerHTML = `<h3>${newMinutes}</h3>`
  //Get data of seconds
  let seconds = document.querySelector('.seconds')
  let newSeconds = new Date().getSeconds()
  if (newSeconds < 10) {
    newSeconds = '0' + newSeconds
  }
  seconds.innerHTML = `<h3>${newSeconds}</h3>`
}
setInterval(() => {
  getTime()
}, 1000)
