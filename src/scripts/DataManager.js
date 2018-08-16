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
    getMassage: {
        value: (Id) => {
            return fetch("http://localhost:8088/Messages")
                .then(res => res.json())
        }
    },

    saveMessage: {
        value: (message) => {
            return fetch("http://localhost:8088/Messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            })
                .then(res => res.json())
        }
    },
    putMessage: {
        value: (id) => {
            return fetch(`http://localhost:8088/Messages/${id}`, {
                method: "PUT",

            })
                .then(res => res.json())
        }
    },
    deleteMessage: {
        value: (id) => {
            return fetch(`http://localhost:8088/Messages/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
        }
    },

    getAllEvents: {
        value: () => {
            return fetch("http://localhost:8088/events").then(r => r.json())
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
        }
    },

















})


module.exports = APIManager