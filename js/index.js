(function () {
  const cards = document.getElementById("todo_items_list");
  const addButt = document.querySelector(".add_todo");
  const txtInput = document.querySelector(".what_todo");
  const all = document.querySelector(".all_todo_items");
  const active = document.querySelector(".active_todo_items");
  const completed = document.querySelector(".completed_todo_items");
  const clear = document.querySelector(".clear_todo_items");
  const newArr = [];
  let count = 0;

  function createNewToDo() {
    let input = document.getElementById("myInput").value;
    if (input !== "") {
      document.getElementById("myInput").value = "";
      let newElement = document.createElement("div");
      newElement.setAttribute("class", "todo_item");
      newElement.innerHTML = `<input type='checkbox' class='checkbox'><h2 class='txt'>${input}</h2><button class='butt1' id='butt'>delete</button>`;
      cards.appendChild(newElement);
      newArr.push(newElement.innerHTML);
      document.getElementById("todo_items_list").appendChild(newElement);
      count++;
      document.getElementById("counter").innerHTML = count;

      checkbox()

      deleteBtn();

      localStorage.setItem("newArr", JSON.stringify(newArr));
    }
  }

  addButt.addEventListener("click", createNewToDo);
  txtInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createNewToDo();
    }
  });

  function deleteBtn() {
    const button = document.querySelectorAll(".butt1");
    for (let but of button) {
      but.addEventListener("click", () => {
        count--;
        document.getElementById("counter").innerHTML = count;
        const item = but.closest(".todo_item");
        item.remove();
      });
    }
  }

  function checkbox() {
    const items = document.querySelectorAll(".todo_item");
    for (const item of items) {
      item.addEventListener("change", () => {
        const name = item.querySelector(".txt");
        name.classList.toggle("active");
        if (all.classList.contains("checked")) {
          if (!name.classList.contains("active")) {
            count++;
            document.getElementById("counter").innerHTML = count;
          }
          if (name.classList.contains("active")) {
            count--;
            document.getElementById("counter").innerHTML = count;
          }
        }
        if (active.classList.contains("checked")) {
          item.classList.add("hide");
          count--;
          document.getElementById("counter").innerHTML = count;
        }
        if (completed.classList.contains("checked")) {
          item.classList.add("hide");
          count++;
          document.getElementById("counter").innerHTML = count;
        }
      });
    }
  }

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
    localStorage.removeItem("newArr");
  });

  const val = JSON.parse(localStorage.getItem("newArr"));
  window.addEventListener("load", () => {
    for (let i = 0; i < val.length; i++) {
      let element = document.createElement("div");
      element.setAttribute("class", "todo_item");
      element.innerHTML = val[i];
      cards.appendChild(element);
      count++;
      document.getElementById("counter").innerHTML = count;
      element.addEventListener("change", () => {
        const name2 = element.closest("div").querySelector(".txt");
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
          element.classList.add("hide");
          count--;
          document.getElementById("counter").innerHTML = count;
        }
        if (completed.classList.contains("checked")) {
          element.classList.add("hide");
          count++;
          document.getElementById("counter").innerHTML = count;
        }
      });

      deleteBtn();
    }
  });
  
})();
