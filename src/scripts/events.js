const createEvent = (name, location, date, id, userName) => {
    return `
    <fieldset>
        <section>
            ${userName}
        </section>
        <section>
            <h4 id="eventField--${id}">${name}</h4>
        </section>
        <section>
            ${location}
        </section>
        <section>
            <time>${date}</time>
        </section>
        <button id="deleteEventButton--${id}" class="event__delete">Delete Event</button>
        <button id="editEventButton--${id}" class="event__edit">Edit Event</button>
    </fieldset>
    `
}

module.exports = createEvent