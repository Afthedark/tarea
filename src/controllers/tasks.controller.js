import { Task } from '../models/task.js'

async function getTasks(req, res) {
    res.send('Listando de tareas')
}


async function createTasks(req, res) {
    res.send('Crear tareas')
}

export default{
    getTasks,
    createTasks
}
