
const $ = require("jquery")

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
            <div class="border">
                <fieldset>
                    <label for="taskTitle">Task</label>
                    <input required type="text" id="taskName">
                </fieldset>
                <fieldset>
                    <label for="taskDescription">task Instructions</label>
                    <textarea id="taskDescription"></textarea>
                </fieldset>
                <fieldset>
                <label for="#taskCompletionDate">Completion Date:</label>
                <input required type="date" id="taskCompletionDate">
                </fieldset>
                <button id="savetasktButton">Save Task</button>
                <fieldset><input type="button" value="completed">
                <input type="checkbox"></fieldset>

            </div>
            `
        }
    }
})

module.exports = taskFormManager


