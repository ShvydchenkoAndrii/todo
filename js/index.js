(function () {
    const button = document.querySelectorAll('.butt1')

    for (let element of button) {
        element.addEventListener('click', () => {
            let all = element.closest('.card')
            all.remove();
        })
    }

    const check = document.querySelectorAll('.checkbox');

    for (let elem of check) {
    elem.addEventListener('click', () => {
        const name = elem.closest('.first_name')
        name.classList.toggle('active')
    })
    }
})();