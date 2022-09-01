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
    const card = document.querySelector('.card')



    addButt.addEventListener('click', () => {
        const input = document.getElementById('myInput').value;
        // const input1 = document.getElementById('myInput1').value;
        // const input2 = document.getElementById('myInput2').value;
        // const input3 = document.getElementById('myInput3').value;
        // let createCard = () => {
        //     cards.innerHTML += `
        //     <div class="card" id="card">
        //             <h2 class="first_name">${input}</h2>
        //             <ul>
        //                 <li>Last name: ${input1}</li>
        //                 <li>Age: ${input2}</li>
        //                 <li>Sex: ${input3}</li>
        //             </ul>
        //             <input type="checkbox" class="checkbox">
        //             <button class="butt1" id="butt">Hide</button>
        //     </div>
        //     `
        // }
        if (input !== '') {
            let newElement = document.createElement('h2');
            newElement.textContent = input;
            cards.appendChild(newElement);
            
        }
    })


})();