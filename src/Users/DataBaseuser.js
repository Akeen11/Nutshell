const databaseHandler = Object.create({}, {
    postUser: {
        value: (newUserObject) => {
            return fetch("http://localhost:8088/users",{
                method: "POST",
                data: newUserObject
            })
        }
    },
    getAllUsers: {
        value: () => {
            return fetch ("http://localhost:3000/users")
        }
    },
    deleteUser: {
        value: (id) => {
            return fetch(
                "http://localhost:3000/users/${id}",{
                method: "DELETE",
            })
        }
    },
    getUserByName: {
        value: (name) => {
            console.log(name)
            return fecth(
                "http://localhost:3000/users?name=${name}",{
            })
        }
    }
})
module.exports = databaseHandler;