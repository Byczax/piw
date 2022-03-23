"use strict";

function addTask() {
  event.preventDefault();
  const task = document.querySelector("form input");
  if (task.value === "") {
    alert("Field must be filled!");
    return;
  }
  let select = document.getElementById("select-list");
  let selectedList = select.options[select.selectedIndex].value;

  const list = document.getElementById(selectedList);
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="completeTask(this)" class="check">
          <input type="text" value="${task.value}" class="task">
          <button onclick="confirmRemoval(this)">-</button><br/>
          <span class="date"></span>`;
  list.insertBefore(li, list.children[0]);
  task.value = "";
}

var remove = "";
function confirmRemoval(event) {
  remove = event;
  console.log(remove);
  $("#modal").toggle();
}

var trash = "";
var trashList = "";
function removeTask() {
  trash = $(remove).closest("li");
  trashList = $(remove).closest("ul").attr("id");
  $(remove).closest("li").remove();
}

function undoRemove() {
  if (trash !== "") {
    $("#" + trashList).append(trash);
    trash = "";
    // no need to clean trashList variable
  }
}

function completeTask(event) {
  event.parentElement.querySelector(".task").classList.toggle("completed");
  const value = event.parentElement.querySelector(".date").innerHTML;
  if (value === "") {
    event.parentElement.querySelector(".date").innerHTML =
      new Date().toDateString();
  } else {
    event.parentElement.querySelector(".date").innerHTML = "";
  }
}

function hide(event) {
  $(event).parent().children("ul").toggle();
  event.parentNode.classList.toggle("compress");
}

let caseSensitive = false;

function toggleCaseSensitive(event) {
  caseSensitive = !caseSensitive;
  event.classList.toggle("sensitive");
}

function searchTasks(event) {
  let taskName = event.value;
  const taskItems = document.getElementsByClassName("task");
  if (!caseSensitive) {
    taskName = taskName.toUpperCase();
  }
  for (let item of taskItems) {
    console.log(item);
    let text = item.value;
    if (!caseSensitive) {
      text = text.toUpperCase();
    }

    if (text.includes(taskName)) {
      item.parentNode.classList.remove("task-not-found");
    } else {
      item.parentNode.classList.add("task-not-found");
    }
  }
}
