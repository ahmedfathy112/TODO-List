document.addEventListener("DOMContentLoaded", function () {
  loadTodos();
});

function loadTodos() {
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  var todoBody = document.getElementById("toBody");

  todoBody.innerHTML = "";

  todos.forEach(function (todoText, index) {
    var todoCard = document.createElement("div");
    todoCard.className = "cardTodo";
    var todoContant = document.createElement("h3");
    todoContant.textContent = todoText;

    var deleteButton = document.createElement("button");
    deleteButton.id = "DeleteTodo";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      loadTodos();
    };
    var todoBTNS = document.createElement("div");
    todoBTNS.className = "todoBtn";
    todoBTNS.appendChild(deleteButton);
    todoCard.appendChild(todoContant);
    todoCard.appendChild(todoBTNS);
    todoBody.appendChild(todoCard);
  });
}

function addTodo() {
  var todoInput = document.getElementById("todoText");
  var todoText = todoInput.value;
  todoInput.value = "";

  if (todoText.trim() === "") {
    alert("Please enter a todo!");
    return;
  }

  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));

  loadTodos();
}
