const $ = require("jquery")

const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#eventTitle").val("")
            $("#eventContent").val("")
            $("#eventDate").val("")
        }
    },
    renderEventForm: {
        value: () => {
            return `
            <div class="border">
                <fieldset>
                    <label for="eventTitle">Title:</label>
                    <input required type="text" id="eventTitle">
                </fieldset>
                <fieldset>
                    <label for="eventContent">Dope Events:</label>
                    <textarea id="eventContent"></textarea>
                </fieldset>
                <fieldset>
                    <label for="eventDate">Event Date:</label>
                    <input required id="eventDate">
                </fieldset>
                <button id="saveEventButton">Save Event</button>
            </div>
            `
        }
    }
})

module.exports = FormManager