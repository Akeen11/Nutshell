
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
            <div class="border">
                <fieldset>
                    <label for="taskName">Task</label>
                    <input required type="text" id="taskName"


                    <label for="taskDescription">task Instructions</label>
                    <textarea id="taskDescription"></textarea>


                <label for="#taskCompletionDate">Completion Date:</label>
                <input required type="date" id="taskCompletionDate">
            
                <button id="savetasktButton">Save Task</button>
                </fieldset>

            </div>
            `
        }
    }
})

module.exports = taskFormManager


