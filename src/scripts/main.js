const DataManager = require("./DataManager")
const LoginFormManager = require("./login")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

$("#loginForm").on("click", "#LoginButton", event => {
    (console.log("IT WORKS"))
})

$("#loginForm").on("click", "#createAccount", event => {
    (console.log("Make account"))
})
