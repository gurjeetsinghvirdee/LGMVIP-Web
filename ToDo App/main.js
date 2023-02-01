const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodo.addEventListener("click", function() {
    if (todoInput.value === "") return;

    const todoItem = document.createElement("span");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
        ${todoInput.value}
        <button class="done">Done</button>
    `;
    todoList.appendChild(todoItem);
    todoInput.value = "";

    const doneButton = todoItem.querySelector(".done");
    doneButton.addEventListener("click", function() {
        todoItem.remove();
    });

    todoItem.addEventListener("click", function() {
        todoItem.classList.toggle("completed");
    });
});