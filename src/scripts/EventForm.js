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
            <div>
                    <label for="eventTitle">Title:</label>
                    <input required type="text" id="eventTitle">
                    <label for="eventContent">Location:</label>
                    <input required type="text" id="eventContent">
                    <label for="eventDate">Date:</label>
                    <input required type="date" id="eventDate">
                <button id="saveEventButton">Save Event</button>
            </div>
            
            `
        }
    }
})

module.exports = FormManager