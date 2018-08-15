const createEvent = require("./events")
const DataManager = require("./DataManager")
const $ = require("jquery")

listEvents = () => {
    DataManager.getAllEvents()
        .then(results => {
            results.forEach(entries => {
                let eventComponent = createEvent(events.userId, events.name, events.description, events.date, events.id)
            })
        });
}

writeEventsToDOM = (events) => {
    $("#eventList").html += (events)
}

module.exports = listEvents