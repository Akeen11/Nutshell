console.log("Welcome to Browserify")

const LoginFormManager = require("./login")

document.querySelector("#loginForm").innerHTML = LoginFormManager.renderLoginForm()
