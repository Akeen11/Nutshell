console.log("Welcome to Browserify")
//const $=require("jquery")
const DataManager=require("./DataManager")
const LoginFormManager = require("./login")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

$("#loginForm").on("click", event => {
    if (event.target.classList.contains("LoginButton"))
        (console.log("IT WORKS"))
})

