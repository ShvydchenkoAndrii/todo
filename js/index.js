(function () {
    // const button1 = document.querySelector('.butt1')
    // const button2 = document.querySelector('.butt2')
    // const button3 = document.querySelector('.butt3')

    // button1.addEventListener('click', () => {

    //     const all = button1.closest('.card')
    //     all.remove();
    // })
    // button2.addEventListener('click', () => {
    //     const all = button2.closest('.card')
    //     all.remove();
    // })
    // button3.addEventListener('click', () => {
    //     const all = button3.closest('.card')
    //     all.remove();
    // })

    const allButt = document.querySelectorAll('#card button .butt1')

    for (let element of allButt) {
        allButt.addEventListener('click', () => {
            const all = element.closest('.card')
            all.remove();
        })
    }

})();