const btnAdd = document.querySelector("#btn-add")
const tasksGrid = document.querySelector(".tasks")
const taskInput = document.querySelector("#new-task")
const totalTasks = document.querySelector("#total")
const doneTasks = document.querySelector("#done")

const tasks = [{id:1, description:"Jugar con la Domi", done:false},
{id:2, description:"Botar la basura", done:false},
{id:3, description:"Terminar el desafío", done:false}]

// Función contadora de tareas
const counter = () => {
    const countTask = tasks.length
    totalTasks.innerHTML = countTask
}

// Función contadora de tareas realizadas
const counterDone = () => {
    const done = tasks.filter(task => task.done === true).length
    doneTasks.innerHTML = done
}

// Función para renderizar tareas
const renderTask = () => {
    let template = `
        <p class="grid-item">ID</p>
        <p class="grid-item">Tarea</p> 
        <p class="grid-item">Realizada</p>
        <p class="grid-item">Borrar</p>
    `
    for (const task of tasks) {
        template += `
        <p class="grid-item">${task.id}</p>
        <p class="grid-item" ${task.done ? "style='text-decoration:line-through;'" : "style='text-decoration:none;'"}>${task.description}</p> 
        <div class="grid-item"><input type="checkbox" ${task.done ? "checked" : "" } onclick="checkTask(${task.id})"></div>
        <div class="grid-item"><button onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></div>
        `
    }

    tasksGrid.innerHTML = template
    counter()
    counterDone()   

}

// Función para agregar tareas
btnAdd.addEventListener("click", () =>{
    if (taskInput.value !== "") {
        const taskDesc = taskInput.value
        const lastTask = tasks[tasks.length-1]
        const newTask = {id: lastTask ? lastTask.id + 1 : 1,description: taskDesc, done: false} 
        tasks.push(newTask)
        taskInput.value = ""
        renderTask()
    }
    else alert("Escribe una tarea")
})

// Función para borrar tareas 
const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index,1)
    renderTask()
}

// Función para marcar tareas realizadas
const checkTask = (id) => {
    const findedTask = tasks.find((task) => task.id === id)
    findedTask.done === false ? findedTask.done = true : findedTask.done = false
    renderTask()
}

renderTask()

