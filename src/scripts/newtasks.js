const createNewtask = (taskName, description, date, id) => {
    return `
    <article class="tasklistBox">
            <h2 id="taskNameField--${id}">
            ${taskName}</h2>
            <button class="editTask" id="editTask--${id}" type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-edit"></span> Edit</button>

        <h3> Description:
            ${description}
        </h3>
            <button class="taskcompletebutton"> Completion date: ${date} <input type="checkbox" id="completedTasks--${id}" class="task__completed" value="completed">
        completed task checkbox </button>
        <button id="deleteTask--${id}" class="task__delete">Delete Task</button>
    </article>
    `
}

module.exports = createNewtask
