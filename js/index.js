(function () {
    const button = document.querySelector('button')
const card = document.querySelector('.card')

button.addEventListener('click', () => {
  if (card.style.display === 'none') {
    card.style.display = 'block'
  } else {
    card.style.display = 'none'
  }
})
})();