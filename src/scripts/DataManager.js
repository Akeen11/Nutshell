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
            return fetch(`http://localhost:8088/users/${id}`).then(r => r.json())
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
    getMassage: {
        value: (Id) => {
            return fetch("http://localhost:8088/Message")
                .then(res => res.json())
        }
    },
    postMessage(msg, user) {
        return fetch ("http://localhost:8088/Messages",{
             method: "POST",
             data: {
                 "userId": user,
                 "message": msg
             }
         })
         .then(res=>res.json())
     },
     putMessage(user, msg, id) {
        return fetch (`http://localhost:8088/Messages/${id}`,{
             method: "PUT",
             data: {
                 "userId": user,
                 "Message": msg
             }
         })
         .then(res=>res.json())
     },
     deleteMessage(user, msg, id) {
        return fetch (`http://localhost:8088/Messages/${id}`,{
             method: "DELETE",
             data: {
                 "userId": user,
                 "Message": msg
             }
         })
         .then(res=>res.json())
     }


})


module.exports = APIManager