const entryComponent = require("./Users")

const listElement = document.querySelector(".UserList")

const entryList = (users) => {
    listElement.innerHTML = ""

    users.map(entry => {
        listElement.innerHTML += entryComponent(entry)
    })
}

module.exports = entryList