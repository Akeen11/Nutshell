const createEvent = require("./taskentry")
const DataManager = require("./DataManager")
const $ = require("jquery")

listTasks = () => {
    DataManager.getAllTasks()
        .then(results => {
            results.forEach(entries => {
                let taskComponent = createTask(tasks.userId, tasks.title, tasks.description, tasks.date, tasks.id)
            })
        });
}

writeEventsToDOM = (tasks => {
    $("#taskList").html += (tasks)
}
)
module.exports = listTasks