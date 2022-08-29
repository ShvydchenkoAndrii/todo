(function () {
    const button1 = document.querySelector('.butt1')
    const button2 = document.querySelector('.butt2')
    const button3 = document.querySelector('.butt3')
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')
    const card3 = document.querySelector('.card3')

    button1.addEventListener('click', () => {
        if (card1.style.display === 'none') {
            card1.style.display = 'block'
        } else {
            card1.style.display = 'none'
        }
    })
    button2.addEventListener('click', () => {
        if (card2.style.display === 'none') {
            card2.style.display = 'block'
        } else {
            card2.style.display = 'none'
        }
    })
    button3.addEventListener('click', () => {
        if (card3.style.display === 'none') {
            card3.style.display = 'block'
        } else {
            card3.style.display = 'none'
        }
    })
})();