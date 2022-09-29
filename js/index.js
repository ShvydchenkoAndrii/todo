(function () {
  const cards = document.getElementById("todo_items_list");
  const addButt = document.querySelector(".add_todo");
  const txtInput = document.querySelector(".what_todo");
  const all = document.querySelector(".all_todo_items");
  const active = document.querySelector(".active_todo_items");
  const completed = document.querySelector(".completed_todo_items");
  const clear = document.querySelector(".clear_todo_items");
  const newObj = {};
  let count = 0;

  function createNewToDo() {
    let input = document.getElementById("myInput").value;
    if (input !== "") {
      document.getElementById("myInput").value = "";
      let newElement = document.createElement("div");
      newElement.setAttribute("class", "todo_item");
      newElement.innerHTML = `<input type='checkbox' class='checkbox'><h2 class='txt'>${input}</h2><button class='butt1' id='butt'>delete</button>`;
      cards.appendChild(newElement);
      document.getElementById("todo_items_list").appendChild(newElement);
      count++;
      document.getElementById("counter").innerHTML = count;

      checkbox(newElement);

      deleteBtn(newElement);
    }
  }

  addButt.addEventListener("click", createNewToDo);
  txtInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createNewToDo();
    }
  });

  function itemsOnPageToLs() {
    const items = document.querySelectorAll(".todo_item");
    const newItems = [];
    for (let item of items) {
      newItems.push(item.innerHTML);
    }
    localStorage.setItem("newItems", JSON.stringify(newItems));
  }

  function deleteBtn(newElement) {
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
      itemsOnPageToLs();
    });
    itemsOnPageToLs();
  }

  function checkbox(newElement) {
    newElement.addEventListener("change", () => {
      const input = newElement.querySelector("input");
      const name2 = newElement.closest("div").querySelector(".txt");
      name2.classList.toggle("active");
      if (all.classList.contains("checked")) {
        if (!name2.classList.contains("active")) {
          count++;
          document.getElementById("counter").innerHTML = count;
          input.removeAttribute("checked", "");
        }
        if (name2.classList.contains("active")) {
          input.setAttribute("checked", "");
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
      itemsOnPageToLs();
    });
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
    const allClass = all.classList;
    const allStore = [];
    allStore.push(allClass);
    localStorage.removeItem("active");
    localStorage.removeItem("completed");
    localStorage.setItem("all", JSON.stringify(allStore));
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
    const activeClass = active.classList;
    const activeStore = [];
    activeStore.push(activeClass);
    localStorage.removeItem("all");
    localStorage.removeItem("completed");
    localStorage.setItem("active", JSON.stringify(activeStore));
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
    const completedClass = completed.classList;
    const completedStore = [];
    completedStore.push(completedClass);
    localStorage.removeItem("all");
    localStorage.removeItem("active");
    localStorage.setItem("completed", JSON.stringify(completedStore));
  });

  clear.addEventListener("click", () => {
    active.classList.remove("checked");
    all.classList.remove("checked");
    completed.classList.remove("checked");
    const allCards = document.querySelectorAll(".todo_item");
    for (let card of allCards) {
      card.remove();
    }
    count = 0;
    document.getElementById("counter").innerHTML = count;
    localStorage.clear();
  });

  const parseNewArr = JSON.parse(localStorage.getItem("newItems"));
  const parseActive = JSON.parse(localStorage.getItem("active"));
  const parseAll = JSON.parse(localStorage.getItem("all"));
  const parseCompleted = JSON.parse(localStorage.getItem("completed"));
  window.addEventListener("load", () => {
    
    if (parseNewArr) {
      for (let i = 0; i < parseNewArr.length; i++) {
        let newElement = document.createElement("div");
        newElement.setAttribute("class", "todo_item");
        newElement.innerHTML = parseNewArr[i];
        cards.appendChild(newElement);
        const name = newElement.closest("div").querySelector(".txt");
        if (parseActive) {
          active.classList.add("checked");
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
        }
        if (parseAll) {
          all.classList.add("checked");
          const allCards = document.querySelectorAll(".todo_item");
          for (let card of allCards) {
            if (card.classList.contains("hide")) {
              card.classList.remove("hide");
            }
          }
        }
        if (parseCompleted) {
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
        }
        if (name.classList.contains("active")) {
          count--;
          document.getElementById("counter").innerHTML = count;
        }
        count++;
        document.getElementById("counter").innerHTML = count;

        checkbox(newElement);

        deleteBtn(newElement);
      }
    }
  });
})();

// const inProgres = newElement.querySelector("input");
// const info = document.getElementById("myInput").value;
// const newObj = {
//   checkbox: inProgres,
//   input: info
// };
