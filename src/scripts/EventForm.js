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
            <h2>Events</h2>
                <fieldset>
                <legend>Events</legend>
                    <label for="eventTitle">Title:</label>
                    <input required type="text" id="eventTitle">
                </fieldset>
                <fieldset>
                    <label for="eventContent">Location:</label>
                    <input required type="text" id="eventContent">
                </fieldset>
                <fieldset>
                    <label for="eventDate">Event Date:</label>
                    <input required type="date" id="eventDate">
                </fieldset>
                <button id="saveEventButton">Save Event</button>
            </div>
            `
        }
    }
})

module.exports = FormManager