const createTask = require("./newtasks.js")
const DataManager = require("./DataManager.js")
const $ = require("jquery")

listTasks = () => {
    DataManager.getAllTasks()
        .then(results => {
            let incompleteTasks = results.filter( task =>{
                return task.completed===false
            })
            incompleteTasks.forEach(tasks => {
                let taskComponent = createTask( tasks.name, tasks.description, tasks.date, tasks.id)
                writeTasksToDOM(taskComponent)
            })
        });


    writeTasksToDOM = (tasks => {
        $("#taskList").append(tasks)
    }
    )
}
module.exports = listTasks
