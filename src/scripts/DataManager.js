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
    // potential "delete user" feature that may or may not be implemented
    deleteUser: {
        value: (id) => {
            return fetch(`http://localhost:8088/users/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },
    // getting articles
    saveArticleEntry: {
        value: (article) => {
            return fetch ("http://localhost:8088/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            })
            .then(response => response.json())
        }
    },
    getAllArticles: {
        value: () => {
            return fetch("http://localhost:8088/articles?_order=desc&_sort=date").then(r => r.json())
        }
    },
    // deleting an article. Targetting articleId
    deleteArticle: {
        value: (id) => {
            return fetch (`http://localhost:8088/articles/${id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    }
})

module.exports = APIManager