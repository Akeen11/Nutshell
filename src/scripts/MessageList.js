const createMessage = require("./message")
const DataManager = require("./DataManager")
const $ = require("jquery")

listMessage = () => {
    DataManager.getMessage() //calls function to get message from DB
        .then(results => {
            $("#messageList").empty() //clears div before rendering list of message
            results.forEach(message => { //loops through each message grabbing info
                let messageComponent = createMessage(message.userId,message.name, message.message, message.id)
                writeMessageToDOM(messageComponent) //calls function to write 0 list to DOM
            })
        });
    }
    writeMessageToDOM = (message) => { //specifies id in index where message  get appended onto DOM
        $("#messageList").append(message) //replaces innerHTML =+
}

module.exports = listMessage