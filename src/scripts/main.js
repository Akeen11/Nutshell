console.log("Welcome to Browserify")
const $=require("jquery")

const LoginFormManager = require("./login")

document.querySelector("#loginForm").innerHTML = LoginFormManager.renderLoginForm()
