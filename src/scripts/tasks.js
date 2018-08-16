const createNewtask = (userId, title, description,completiondate, id) => {
    return `
    <article class="entry boxed">
        <section>
            ${userId}
        </section>
        <header>
            <h2>${title}</h2>
        </header>
        <section>
            ${description}
        </section>
        <footer>
            <time>${completiondate}</time>
        </footer>
        <button id="deleteEntryButton--${id}" class="entry__delete">Delete Entry</button>
    </article>
    `
}

module.exports = createNewTask
