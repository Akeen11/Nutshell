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
            <h2>Create Event</h2>
            <div>
                <section>
                    <label for="eventTitle">Title:</label>
                    <input required type="text" id="eventTitle">
                    <p></p>
                </section>
                <section>
                    <label for="eventContent">Location:</label>
                    <input required type="text" id="eventContent">
                    <p></p>
                </section>
                <section>
                    <label for="eventDate">Date:</label>
                    <input required type="date" id="eventDate">
                    <p></p>
                </section>
                <button id="saveEventButton">Save Event</button>
            </div>
            <h2>Events</h2>
            `
        }
    }
})

module.exports = FormManager