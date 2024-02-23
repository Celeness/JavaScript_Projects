const navbarEl = document.querySelector('.navbar')
console.log(navbarEl.offsetHeight)
const aboutEl = document.querySelector('.about')
console.log(aboutEl.offsetTop)

window.addEventListener('scroll', () => {
  if (window.scrollY > aboutEl.offsetTop - navbarEl.offsetHeight - 50) {
    navbarEl.classList.add('active')
  } else {
    navbarEl.classList.remove('active')
  }
})
