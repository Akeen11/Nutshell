console.log("Welcome to Browserify")
//const $=require("jquery")
const DataManager=require("./DataManager")
const userList=require("./Userlist")
const LoginFormManager = require("./login")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

// $("#loginForm").on("click", event => {
//     if (event.target.classList.contains("LoginButton"))
//         (console.log("IT WORKS"))
// })
$("#loginForm").on("click", "#LoginButton", event => {
    (console.log("IT WORKS"))
 })

$("#loginForm").on("click", "#createAccount", event => {
    (console.log("Make account"))
 })

 const listUsers = () => {
    DataManager.getAllUsers()
        .then(allUser => userList(allUser))
}
listUsers()

DataManager.saveUserEntry(newUser)
.then(() => {
    // Clear the form fields
    //FormManager.clearForm()
    listUsers()
})