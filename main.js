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
    var DoneButton = document.createElement("button");
    DoneButton.id = "DoneTodo";
    DoneButton.textContent = "Done";
    DoneButton.onclick = function () {
      todoContant.style.textDecoration = "line-through";
      todoContant.style.color = "#000";
    };
    var todoBTNS = document.createElement("div");
    todoBTNS.className = "todoBtn";
    todoBTNS.appendChild(deleteButton);
    todoBTNS.appendChild(DoneButton);
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
// delete all todos
function deleteTODOS() {
  localStorage.removeItem("todos");
  alert("All TODOS Deleted");
}
// start dark mood
let darkToggle = document.getElementById("dark-containr");
let darkIcon = document.getElementById("darkIcon");
let lightIcon = document.getElementById("ligthIcon");
let mainPAGE = document.getElementById("mainPAGE");
let logo = document.getElementById("LogoPage");
let body = document.getElementById("bodyPage");

function saveDarkModePreference(isDarkModeOn) {
  localStorage.setItem("darkMode", isDarkModeOn);
}

function loadDarkModePreference() {
  return localStorage.getItem("darkMode") === "true";
}

function enableDarkMode() {
  darkIcon.style.display = "none";
  lightIcon.style.display = "block";
  lightIcon.style.right = "5px";
  lightIcon.style.textAlign = "right";
  mainPAGE.style.backgroundColor = "rgb(36 35 35)";
  logo.style.color = "#fff";
  body.style.backgroundColor = "#000";
  darkToggle.style.backgroundColor = "#fff";
  lightIcon.style.color = "#000";
}

function disableDarkMode() {
  darkIcon.style.display = "block";
  lightIcon.style.display = "none";
  darkIcon.style.left = "5px";
  darkIcon.style.textAlign = "left";
  logo.style.color = "#000";
  mainPAGE.style.backgroundColor = "#fff";
  darkToggle.style.backgroundColor = "#000";
  body.style.backgroundColor = "rgb(138, 132, 132)";
}

window.onload = function () {
  const isDarkModeOn = loadDarkModePreference();
  if (isDarkModeOn) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

darkToggle.addEventListener("click", function () {
  const isDarkModeOn = loadDarkModePreference();
  if (isDarkModeOn) {
    disableDarkMode();
    saveDarkModePreference(false);
  } else {
    enableDarkMode();
    saveDarkModePreference(true);
  }
});
