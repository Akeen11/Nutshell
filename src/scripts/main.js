const LoginFormManager = require("./login")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

$("#loginForm").on("click", event => {
    if (event.target.classList.contains("LoginButton"))
        (console.log("IT WORKS"))
})

