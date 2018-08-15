const createEvent = (userId, name, description, date, id) => {
    return `
    <article class="entry border border-dark">
        <section>
            ${userId}
        </section>
        <header>
            <h2>${name}</h2>
        </header>
        <section>
            ${description}
        </section>
        <footer>
            <time>${date}</time>
        </footer>
        <button id="deleteEntryButton--${id}" class="entry__delete">Delete Entry</button>
    </article>
    `
}

module.exports = createEvent