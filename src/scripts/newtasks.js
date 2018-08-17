const createNewtask = ( taskName, description,date, id) => {
    return `
    <article class="entry boxed">

        <header>

            <h2>To Do:${taskName}
            <button type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-edit"></span> Edit
            </button>
            </h2>

        </header>
        <section> Description:
            ${description}

        </section>
        <footer>
            <time> Completion date: ${date} <input type="checkbox" id="completedTasks--${id}" class="task__completed" value="completed">
           </time>
        </footer>
        <button id="deleteTask--${id}" class="task__delete">Delete Task</button>
    </article>
    `
}

module.exports = createNewtask
