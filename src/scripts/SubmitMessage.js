const $ = require("jquery")
const BuildMessage = require("./BuildMessage")
const DataManager = require("./DataManager")

const activateMeassgeForm = () => {
document.querySelector("#message-btn").addEventListener("click", () => {
        let message = $("#message-input").val()
        makeMessage = (message, userId) => {

            let mess = document.createElement("p")
            DataManager.getAllUsers(userId).then(function (response) {
                mess.textContent = `${users.name}: ${message}`
                //mess.className += `message ${id}`
                // $("<button>").attr('type', 'button').attr('class', 'edit-btn').text("Edit").appendTo(mess)
                // editMess(mess)
            })
              $("#message-box").append(mess)
        //     let userIdNum = parseInt(userId)
        //     DataManager.postMessage(message, userIdNum).then(function (response) {
        //         // console.log("this is the message the is being passed to the function:", mess)
        //         mess.id = `${response.id}`

        //     })
        // }


        // let currentUser = sessionStorage.setItem("User")
        // $("#message-input").val("")
        // makeMess(message, currentUse);
        // scrollBottom()
    }
})
}
module.exports = submitMessage
