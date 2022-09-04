(function () {
    const cards = document.getElementById("todo_items_list");
    const addButt = document.querySelector(".add_todo");
    const txtInput = document.querySelector('.what_todo');

    addButt.addEventListener('click', () => {
        let input = document.getElementById("myInput").value;
        if (input !== '') {
            document.getElementById("myInput").value = '';
            let newElement = document.createElement("div");
            newElement.setAttribute("class", "todo_item");
            newElement.innerHTML = `
                          <input type="checkbox" class="checkbox">
                          <h2 class="txt">${input}</h2>
                          <button class="butt1" id="butt">delete</button>
                   `;
            cards.appendChild(newElement);
            newElement.addEventListener("change", () => {
                const name2 = newElement.closest(".todo_item").querySelector(".txt");
                name2.classList.toggle("active");
            })
            const button = document.querySelectorAll(".butt1");

        for (let element of button) {
            element.addEventListener("click", () => {
                let all = element.closest("div");
                all.remove();
            });
        }
        }
    })

    txtInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            let input = document.getElementById("myInput").value;
            if (input !== '') {
                document.getElementById("myInput").value = '';
                let newElement = document.createElement("div");
                newElement.setAttribute("class", "todo_item");
                newElement.innerHTML = `
                          <input type="checkbox" class="checkbox">
                          <h2 class="txt">${input}</h2>
                          <button class="butt1" id="butt">delete</button>
                   `;
                cards.appendChild(newElement);

                newElement.addEventListener("change", () => {
                    const name2 = newElement.closest(".todo_item").querySelector(".txt");
                    name2.classList.toggle("active");
                });
            }

        }
        const button = document.querySelectorAll(".butt1");

        for (let element of button) {
            element.addEventListener("click", () => {
                let all = element.closest("div");
                all.remove();
            });
        }
    });
// +
})();
