const APIManager = Object.create(null, {
    saveUserEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getAllEntries: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },
    deleteEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/users/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager