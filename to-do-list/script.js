const addButton = document.querySelector("#add-button");
const clearCompletedButton = document.querySelector("#clear-completed-button");
const emptyListButton = document.querySelector("#empty-button");
const saveListButton = document.querySelector("#save-button");
const loadListButton = document.querySelector("#load-button");
const body = document.querySelector("body");

const toDoEntryBox = document.querySelector("#todo-entry-box");
const toDoList = document.querySelector("#todo-list");

addButton.addEventListener("click", addToDoItem);
clearCompletedButton.addEventListener("click", clearCompletedToDoItems);
emptyListButton.addEventListener("click", emptyList);
saveListButton.addEventListener("click", saveList);
window.addEventListener('DOMContentLoaded', loadList);

function addToDoItem() {
  const itemText = toDoEntryBox.value;
  if (itemText) {
    newToDoItem(itemText, false);
  } 
  
  toDoEntryBox.value = "";
}

function clearCompletedToDoItems() {
  const completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function emptyList() {
  const toDoItems = toDoList.children;

  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}

function saveList() {
  const toDos = [];

  for (let i = 0; i < toDoList.children.length; i++) {
    const toDo = toDoList.children.item(i);

    const toDoInfo = {
      "task": toDo.innerText,
      "completed": toDo.classList.contains("completed")
    };

    toDos.push(toDoInfo);

  }

  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
  if (localStorage.getItem("toDos") != null) {
    const toDos = JSON.parse(localStorage.getItem("toDos"));

    for (let i = 0; i < toDos.length; i++) {
      const toDo = toDos[i];
      newToDoItem(toDo.task, toDo.completed);
    }
  }
}

function newToDoItem(itemText, completed) {
  const toDoItem = document.createElement("li");
  const toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } 
  else {
    this.classList.add("completed");
  }
}
