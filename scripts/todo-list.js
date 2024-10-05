const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  // Loop through the todo list and create the HTML
  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div class="todo-item">
      <div class="todo-name">${name}</div>
      <div class="todo-date">${dueDate}</div>
      <button class="delete-button" onclick="deleteTodo(${index});">Delete</button>
    </div>
    `;
    todoListHTML += html;
  });

  // Update the DOM with the newly generated HTML
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value.trim();
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if (name === "" || dueDate === "") {
    alert("Please provide both a task name and a due date.");
    return;
  }

  todoList.push({
    name,
    dueDate,
  });

  // Clear the input fields
  inputElement.value = "";
  dateInputElement.value = "";

  // Re-render the list
  renderTodoList();
}

// Function to delete a todo item
function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

// Initial render
renderTodoList();
