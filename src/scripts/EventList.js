const createEvent = require("./events")
const DataManager = require("./DataManager")
const $ = require("jquery")

listEvents = () => {
    DataManager.getAllEvents() //calls function to get event from DB
        .then(results => {
            $("#eventList").empty() //clears div before rendering list of events
            results.forEach(event => { //loops through each event grabbing info
                let eventComponent = createEvent(event.userId, event.name, event.location, event.date, event.id)
                writeEventsToDOM(eventComponent) //calls function to write event list to DOM
            })
        });
    }
    writeEventsToDOM = (event) => { //specifies id in index where event list get appended onto DOM
        $("#eventList").append(event) //replaces innerHTML =+
}

module.exports = listEvents