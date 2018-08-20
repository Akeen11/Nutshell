
const $ = require("jquery")
//new constant task Form Manager equals the object created--
const taskFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#taskName").val("")
            $("#taskDescription").val("")
            $("#taskCompletionDate").val("")
        }
    },
    renderTaskForm: {
        value: () => {
            return `
            <h2>Tasks</h2>
            <div class="border bold-dark">
                <section id="taskFieldset">
                    <label id="thistaskName" for="taskName">To Do:</label>
                    <input required type="text" id="taskName">
                    <label id="thisTaskDescription" for="taskDescription"> Details:</label>
                    <textarea id="taskDescription"></textarea>
                    <label id="thistaskCompletionDate" for="#taskCompletionDate">Completion Date:</label>
                    <input required type="date" id="taskCompletionDate">
                <button id="savetaskButton">Save Task</button>
                </section>
            </div>
            `
        }
    }
})

module.exports = taskFormManager


