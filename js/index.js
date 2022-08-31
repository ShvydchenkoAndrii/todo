(function () {
    const button = document.querySelectorAll('.butt1')

    for (let element of button) {
        element.addEventListener('click', () => {
            let all = element.closest('.card')
            all.remove();
        })
    }

})();