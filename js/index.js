(function () {
  const cards = document.getElementById("todo_items_list");
  const addButt = document.querySelector(".add_todo");
  const txtInput = document.querySelector(".what_todo");

  let count = 0;

  function createNewToDo() {
    let input = document.getElementById("myInput").value;
    if (input !== "") {
      document.getElementById("myInput").value = "";
      let newElement = document.createElement("div");
      newElement.setAttribute("class", "todo_item");
      newElement.innerHTML = `
                            <input type="checkbox" class="checkbox">
                            <h2 class="txt">${input}</h2>
                            <button class="butt1" id="butt">delete</button>
                     `;
      cards.appendChild(newElement);
      document.getElementById("todo_items_list").appendChild(newElement);
      count++;
      document.getElementById("counter").innerHTML = count;
      newElement.addEventListener("change", () => {
        const name2 = newElement.closest("div").querySelector(".txt");
        name2.classList.toggle("active");
      });

      const button = newElement.querySelector(".butt1");
      button.addEventListener("click", () => {
        count--;
        document.getElementById("counter").innerHTML = count;

        newElement.remove();
      });
    }
  }
  const clear = document.querySelector(".clear_todo_items");

  clear.addEventListener("click", () => {
    const allCards = document.querySelectorAll(".todo_item");
    for (let card of allCards) {
      card.remove();
    }
    count = 0;
    document.getElementById("counter").innerHTML = count;
  });

  addButt.addEventListener("click", createNewToDo);
  txtInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createNewToDo();
    }
  });
})();
