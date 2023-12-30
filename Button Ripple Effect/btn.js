const butonCls = document.querySelector('.btn')

butonCls.addEventListener('mouseover', (event) => {
  const x = event.pageX - butonCls.offsetLeft
  const y = event.pageY - butonCls.offsetTop

  butonCls.style.setProperty('--xPos', x + 'px')
  butonCls.style.setProperty('--yPos', y + 'px')
})
