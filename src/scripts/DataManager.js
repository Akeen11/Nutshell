const APIManager = Object.create(null, {
    saveUserEntry: {
        value: (user) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
        }
    },
    getAllUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },
    deleteUser: {
        value: (id) => {
            return fetch(`http://localhost:8088/users/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },

    saveEvent: {
        value: (event) => {
            return fetch("http://localhost:8088/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            })
                .then(response => response.json())
        }
    },
    getAllEvents: {
        value: () => {
            return fetch("http://localhost:8088/events").then(r => r.json())
        }
    },
    deleteEvent: {
        value: (id) => {
            return fetch(`http://localhost:8088/events/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },

    saveTask: {
        value: (tasks) => {
            return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tasks)
            })
                .then(response => response.json())
        }
    },
    getAllTasks: {
        value: () => {
            return fetch("http://localhost:8088/tasks").then(r => r.json())
        }
    },
    deleteTask: {
        value: (id) => {
            return fetch(`http://localhost:8088/tasks/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },
    completedTasks: {
        value: (id, task) => {
            return fetch(`http://localhost:8088/tasks/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
                .then(response => response.json())
        }
    }

})


//use put method pass two values (id,tasks) use post and delete method functions to do this


















module.exports = APIManager