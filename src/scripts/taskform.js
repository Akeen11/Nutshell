
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
                <section>
                    <label for="taskName">Task:</label>
                    <input required type="text" id="taskName"
                    <p></p>
                </section>
                <section>
                    <label for="taskDescription">Details:</label>
                    <textarea id="taskDescription"></textarea>
                    <p></p>
                </section>
                <section>
                <label for="#taskCompletionDate">Completion Date:</label>
                <input required type="date" id="taskCompletionDate">
                <p></p>
                </section>
                <button id="savetasktButton">Save Task</button>
            </div>
            `
        }
    }
})

module.exports = taskFormManager


