const DataManager = require("./DataManager")
const LoginFormManager = require("./login")
const ArticleForm = require("./ArticleForm")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

$("#loginForm").on("click", "#LoginButton", event => {
    (console.log("IT WORKS"))
})

$("#loginForm").on("click", "#create", event => {
    (console.log("Make account"))
})

// const listUsers = () => {
//     DataManager.getAllUsers()
//         .then(allUsers =>
// }

$("#create").on("click", event => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newUser = {
        name: $("#nameTitle").val(),
        email: $("#emailTitle").val(),
        password: $("#createPassWordTitle").val(),
    }
    DataManager.saveUserEntry(newUser)
    $("#usernameTitle").val("")
    $("#passwordTitle").val("")
    $("#nameTitle").val("")
    $("#emailTitle").val("")
    $("#createPassWordTitle").val("")
})

$("#articleForm").html(ArticleForm.renderArticleForm())