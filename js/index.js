(function () {
    const button = document.querySelectorAll('.butt1')

    for (let element of button) {
        element.addEventListener('click', () => {
            let all = element.closest('.card')
            all.remove();
        })
    }

    const check = document.querySelectorAll('.card');

    for (let elem of check) {
    elem.addEventListener('change', () => {
        const name = elem.closest('.card').querySelector('.first_name')
        name.classList.toggle('active')
    })
    }
})();