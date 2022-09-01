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

    const cards = document.getElementById('section_cards');
    const addButt = document.querySelector('.add_todo');

    addButt.addEventListener('click', () => {
        const input = document.getElementById('myInput').value;

        if (input !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = `
                <div class="card" id="card">
                        <h2 class="first_name">${input}</h2>
                         <ul>
                            <li>Last name: ${input}</li>
                            <li>Age: ${input}</li>
                            <li>Sex: ${input}</li>
                        </ul>
                        <input type="checkbox" class="checkbox">
                        <button class="butt1" id="butt">Hide</button>
                 </div>
                 `;
            cards.appendChild(newElement);

        }
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
    })


})();