const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');
addSavedTasks();

function createLi(){
    const li = document.createElement('li');
    return li;
}
function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createButton(li){
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    li.appendChild(button);
    button.setAttribute('class', 'btn-clear');
    button.setAttribute('title', 'Apagar');
}

function addTask(inputText){
    const li = createLi();
    li.innerText = inputText;
    tasks.appendChild(li);
    createButton(li);
    saveTasks();
}

function saveTasks(){
    let liTasks = tasks.querySelectorAll('li');
    let taskList = [];
    for (let task of liTasks){
        let taskText = task.firstChild.nodeValue
        console.log(taskText);
        taskList.push(taskText);
        taskText = taskText.innerText;}

    const tasksJSON = JSON.stringify(taskList);
    console.log(tasksJSON.length);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    for(let task of taskList)
        addTask(task);
}


btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    addTask(inputTask.value);
    clearInput()
});

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        addTask(inputTask.value);
        clearInput()
    }});

document.addEventListener('click', function(e){
    const element = e.target;
    if(element.classList.contains('btn-clear')){
        element.parentElement.remove();
        saveTasks();
    }
});






