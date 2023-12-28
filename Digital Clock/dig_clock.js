function getTime() {
  //Get tag of parameter
  let hours = document.querySelector('.hours')
  let minutes = document.querySelector('.minutes')
  let seconds = document.querySelector('.seconds')

  //Get data of date
  let newHour = new Date().getHours()
  let newMinutes = new Date().getMinutes()
  let newSeconds = new Date().getSeconds()

  //Check AM or PM
  let changedParamater = document.querySelector('.am_pm')
  if (newHour >= 12) {
    newHour = newHour - 12
    changedParamater.innerHTML = `<h2>PM</h2>`
  }

  //Add zero if one digit
  if (newHour < 10) {
    newHour = '0' + newHour
  }
  if (newMinutes < 10) {
    newMinutes = '0' + newMinutes
  }
  if (newSeconds < 10) {
    newSeconds = '0' + newSeconds
  }

  //Print the screen
  hours.innerHTML = `<h3>${newHour}</h3>`
  minutes.innerHTML = `<h3>${newMinutes}</h3>`
  seconds.innerHTML = `<h3>${newSeconds}</h3>`
}

//Call get time function instantly
getTime()

// Call get time function every one second
setInterval(() => {
  getTime()
}, 1000)
