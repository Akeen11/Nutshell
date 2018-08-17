const APIManager = Object.create(null, {
    // saving users
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
    // getting users
    getAllUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },
    getAllArticles: {
        value: () => {
            return fetch("http://localhost:8088/articles?_order=desc&_sort=date").then(r => r.json())
        }
    },
    // getting articles
    saveArticleEntry: {
        value: (article) => {
            return fetch("http://localhost:8088/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            })
                .then(response => response.json())
        }
    },
    // deleting an article. Targetting Id
    deleteArticle: {
        value: (id) => {
            return fetch(`http://localhost:8088/articles/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },
    getAllEvents: {
        value: () => {
            return fetch("http://localhost:8088/events?_order=desc&_sort=date").then(r => r.json())
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

    editEvent: {
        value: (id, event) => {
            return fetch(`http://localhost:8088/events/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            })
                .then(r => r.json())
        },
    },  

    deleteEvent: {
        value: (id) => {
            return fetch(`http://localhost:8088/events/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        },
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
<<<<<<< HEAD
        }
    },
})
=======
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
    },


editedTasks: {
    value: (id,task) => {
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

















>>>>>>> ad6a4e0c6bf641d66087b411f979cb331d424707


module.exports = APIManager