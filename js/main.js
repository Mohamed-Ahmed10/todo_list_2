var myInput = document.getElementById("myInput"),
    addBtn = document.getElementById("addBtn"),
    tasksPackage = document.getElementById("tasksPackage"),
    numOfTasks = document.getElementsByClassName("numOfTasks")[0],
    numOfFinishedTasks = document.getElementsByClassName("numOfFinishedTasks")[0]


addBtn.onclick = function (ev) {
    ev.preventDefault();
    if (myInput.value === "") {
        alert("You can not add an empty task")
    } else {
        addTask();
        calculateTasks();
    }
}


function addTask() {
    let myTask = document.createElement("div"),
        btnContainer = document.createElement("div"),
        taskText = document.createElement("div"),
        deleteBtn = document.createElement("button");


    //task
    tasksPackage.appendChild(myTask);
    myTask.className = "task";

    //tasktext
    myTask.appendChild(taskText);
    taskText.innerHTML = myInput.value;
    taskText.className = "taskText"

    //btnContainer
    myTask.appendChild(btnContainer);
    btnContainer.className = "btnContainer"


    //delete button
    btnContainer.appendChild(deleteBtn);
    deleteBtn.append("Delete");
    deleteBtn.classList.add("btn")
    deleteBtn.classList.add("btn-danger");


    //remove task
    deleteBtn.onclick = function () {
        this.parentNode.parentNode.remove();
        calculateTasks();
    }

    //finish task
    taskText.onclick = function () {
        this.parentNode.classList.toggle("finished");
        calculateTasks()
    }

    myInput.focus();
    myInput.value = ""
}

function calculateTasks() {
    let allTasks = document.querySelectorAll(".task"),
        completedTasks = document.querySelectorAll(".finished");

    numOfTasks.innerHTML = allTasks.length;
    numOfFinishedTasks.innerHTML = completedTasks.length;
}
