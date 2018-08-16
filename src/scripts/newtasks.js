const createNewtask = ( taskName, description,date, id) => {
    return `
    <article class="entry boxed">

        <header>
            <h2>To Do:${taskName} </h2>
        </header>
        <section> Description:
            ${description}

        </section>
        <footer>
            <time> Completion date: ${date} <input type="button" class"task__completed" value="completed">
            <input type="checkbox"></time>
        </footer>
        <button id="deleteTask--${id}" class="task__delete">Delete Task</button>
    </article>
    `
}

module.exports = createNewtask
