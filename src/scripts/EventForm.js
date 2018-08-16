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
            <button id="logoutButton" style="background-color: red; color: white; position: absolute; right: 0px; margin: 12px">Logout</button>
            <h2 style="center: 0; border: 10px, groove; margin-right: 500px">Nutshell</h2>
            <div>
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
                    <label for="eventDate">Date:</label>
                    <input required type="date" id="eventDate">
                </fieldset>
                <button id="saveEventButton">Save Event</button>
            </div>
            <h2>Events</h2>
            `
        }
    }
})

module.exports = FormManager