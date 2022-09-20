(function () {
  let cards = document.getElementById("todo_items_list");
  const addButt = document.querySelector(".add_todo");
  const txtInput = document.querySelector(".what_todo");
  const all = document.querySelector(".all_todo_items");
  const active = document.querySelector(".active_todo_items");
  const completed = document.querySelector(".completed_todo_items");
  const clear = document.querySelector(".clear_todo_items");
  let newArr = [];
  // let newCounter = 0;
  let count = 0;

  function createNewToDo() {
    let input = document.getElementById("myInput").value;

    if (input !== "") {
      document.getElementById("myInput").value = "";
      let newElement = document.createElement("div");
      // newElement.setAttribute("class", "todo_item");
      newElement.innerHTML = `<div class='todo_item'><input type='checkbox' class='checkbox'><h2 class='txt'>${input}</h2><button class='butt1' id='butt'>delete</button></div>`;
      cards.appendChild(newElement);
      newArr.push(newElement.innerHTML);
      document.getElementById("todo_items_list").appendChild(newElement);
      count++;
      document.getElementById("counter").innerHTML = count;
      newElement.addEventListener("change", () => {
        const name2 = newElement.closest("div").querySelector(".txt");
        name2.classList.toggle("active");
        if (all.classList.contains("checked")) {
          if (!name2.classList.contains("active")) {
            count++;
            document.getElementById("counter").innerHTML = count;
          }
          if (name2.classList.contains("active")) {
            count--;
            document.getElementById("counter").innerHTML = count;
          }
        }
        if (active.classList.contains("checked")) {
          newElement.classList.add("hide");
          count--;
          document.getElementById("counter").innerHTML = count;
        }
        if (completed.classList.contains("checked")) {
          newElement.classList.add("hide");
          count++;
          document.getElementById("counter").innerHTML = count;
        }
      });

      const button = newElement.querySelector(".butt1");
      button.addEventListener("click", () => {
        let name = newElement.querySelector(".txt");
        if (name.classList.contains("active")) {
          newElement.remove();
        }
        if (!name.classList.contains("active")) {
          count--;
          document.getElementById("counter").innerHTML = count;
          newElement.remove();
        }
      });
    }
    localStorage.setItem("newArr", JSON.stringify(newArr));
  }

  addButt.addEventListener("click", createNewToDo);
  txtInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createNewToDo();
    }
  });

  all.addEventListener("click", () => {
    all.classList.add("checked");
    active.classList.remove("checked");
    completed.classList.remove("checked");
    const allCards = document.querySelectorAll(".todo_item");
    for (let card of allCards) {
      if (card.classList.contains("hide")) {
        card.classList.remove("hide");
      }
    }
  });

  active.addEventListener("click", () => {
    active.classList.add("checked");
    all.classList.remove("checked");
    completed.classList.remove("checked");
    const allCards = document.querySelectorAll(".todo_item");
    for (let elem of allCards) {
      let txt = elem.querySelector(".txt");
      if (txt.classList.contains("active")) {
        elem.classList.add("hide");
      }
      if (!txt.classList.contains("active")) {
        elem.classList.remove("hide");
      }
    }
  });

  completed.addEventListener("click", () => {
    active.classList.remove("checked");
    all.classList.remove("checked");
    completed.classList.add("checked");
    const allCards = document.querySelectorAll(".todo_item");
    for (let elem of allCards) {
      let txt = elem.querySelector(".txt");
      if (!txt.classList.contains("active")) {
        elem.classList.add("hide");
      }
      if (txt.classList.contains("active")) {
        elem.classList.remove("hide");
      }
    }
  });

  clear.addEventListener("click", () => {
    active.classList.remove("checked");
    all.classList.add("checked");
    completed.classList.remove("checked");
    const allCards = document.querySelectorAll(".todo_item");
    for (let card of allCards) {
      card.remove();
    }
    count = 0;
    document.getElementById("counter").innerHTML = count;
    localStorage.clear();
    newArr = [];
  });

  window.addEventListener("load", () => {
    for (let i = 0; i < localStorage.length; i++) {
      let element = document.createElement("div");
      element.innerHTML = localStorage.getItem(localStorage.key(i));
      cards.appendChild(element);
    }
    //   newCounter++;
    //   document.getElementById("new_counter").innerHTML = newCounter;
    //   localStorage.setItem("new_counter", newCounter);
  });
  // newCounter = localStorage.getItem("new_counter");
  localStorage.getItem("newArr");
})();
