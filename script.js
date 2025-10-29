const list = document.getElementById("todo-list");
const addButton = document.getElementById("add-item");
const input = document.getElementById("text-input");
const showAll = document.getElementById("button-all");
const showDone = document.getElementById("button-done");


addButton.addEventListener("click", () => {
    const item = document.createElement("li")
    if (input.value.trim() !== "") {
        item.textContent = input.value
        list.appendChild(item);
        input.value = "";
    }
})

input.addEventListener('keydown', (event) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
        let item = document.createElement("li")
        item.textContent = input.value
        list.appendChild(item);
        input.value = "";
    }
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
})

showDone.addEventListener('click', () => {
    for (item of list.children) {
        if (!item.classList.contains("done")) {
            item.classList.add("hidden");
        }
    }
})

showAll.addEventListener('click', () => {
    for (item of list.children) {
        item.classList.remove("hidden")
    }
})
