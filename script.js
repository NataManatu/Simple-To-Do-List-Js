let buttonTask = document.getElementById('button-task');
let inputTask = document.getElementById('input-task');
let tasktdl = document.getElementById('task-tdl');

function clickButton(e) {
    e.preventDefault()

    let newTasks = document.createElement('div');
    newTasks.classList.add('new-tasks');


    let checkbutton = document.createElement('button');
    checkbutton.innerHTML = '<img src="tick.png" class="ic-check" width="20px" height="20px"/>';
    checkbutton.classList.add('check-button');
    newTasks.appendChild(checkbutton);


    let item = document.createElement('p');
    item.classList.add('item');
    item.innerText = inputTask.value;
    newTasks.appendChild(item);

    if (inputTask.value === '') return;

    let trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<img src="delete.png" class="ic-trash"width="22px" height="22px"/>';
    trashbutton.classList.add("trash-button");
    newTasks.appendChild(trashbutton);

    tasktdl.appendChild(newTasks);


    localStorage.setItem("task", JSON.stringify(inputTask.value));

    inputTask.value = ''

    

}



buttonTask.addEventListener('click', clickButton)

function check_del(e) {
    let item = e.target

    if (item.classList[0] === 'check-button') {
        let todolist = item.parentElement;
        todolist.classList.toggle('checklist')
    }

    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement;
        todolist.remove()
    }
}
tasktdl.addEventListener('click', check_del)