const createTask = require("./newtasks.js")
const DataManager = require("./DataManager.js")
const $ = require("jquery")

listTasks = () => {
    DataManager.getAllTasks()
        .then(results => {
            results.forEach(tasks => {
                let taskComponent = createTask( tasks.name, tasks.description, tasks.date, tasks.id)
                writeEventsToDOM(taskComponent)
            })
        });


    writeEventsToDOM = (tasks => {
        $("#taskList").append(tasks)
    }
    )
}
module.exports = listTasks
