const list = document.getElementById("todo-list");
const addButton = document.getElementById("add-item");


addButton.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 1000)
    const item = document.createElement("li")
    item.textContent = "item number: " + number
    list.appendChild(item);
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        list.removeChild(event.target);
    }
})
