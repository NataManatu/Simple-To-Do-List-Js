let buttonTask = document.getElementById('button-task')
let inputTask = document.getElementById('input-task')
let tasktdl = document.getElementById('task-tdl')

function clickButton() {
    let newTasks = document.createElement('div');
    newTasks.classList.add('new-tasks');
    newTasks.innerHTML = inputTask.value;
    tasktdl.appendChild(newTasks);

     inputTask.value = ''



}

buttonTask.addEventListener('click',clickButton)
