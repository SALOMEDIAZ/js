
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") return;

    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.innerText = taskText;


    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);

    document.getElementById("pending-list").appendChild(task);
    document.getElementById("new-task").value = ""; 
}

let draggedTask = null;

function dragStart() {
    draggedTask = this;
    setTimeout(() => this.style.display = "none", 0);
}

function dragEnd() {
    setTimeout(() => {
        this.style.display = "block";
        draggedTask = null;
    }, 0);
}


function allowDrop(event) {
    event.preventDefault();
}


function dropTask(event) {
    event.preventDefault();
    if (draggedTask) {
        this.appendChild(draggedTask);
    }
}

document.querySelectorAll(".task-list").forEach(list => {
    list.addEventListener("dragover", allowDrop);
    list.addEventListener("drop", dropTask);
});
