// const $ = require("jquery")
// const makeMessage = require("./message")
// const messageFormManager = require("./BuildMessage")
// const DataManager = require("./DataManager")
// document.querySelector("#message-btn").addEventListener("click", () => {

//     const activateMeassgeForm = () => {
//         console.log("Submit Message")
//         let message = $("#message-input").val()
//         let user = JSON.parse(sessionStorage.getItem("activeUser"))
//         const userMessage = {
//             userId: user.id,
//             message: message
//         }

//         DataManager.saveMessage(activateMeassgeForm).then(() => {
//             messageFormManager.clearForm()
//         })
//     })
//    }  // makeMessage (message, userId) =>

// module.exports = activateMeassgeForm
