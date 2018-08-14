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
    DataManager.getAllUsers().then((users) => {
        const user = users.find(user => {
            return user.name === $("#usernameTitle").val() && user.password === $("#passwordTitle").val()
        })

        if (user) {
            sessionStorage.setItem("activeUser", JSON.stringify(user))
            //hide

        }else{
            alert("You need to register")
            LoginFormManager.clearForm()
        }
    })
    // (console.log("IT WORKS"))
})

$("#create").on("click", event => {
    // Get form field values
    // Create object from them
    // Add timestamp
    console.log("it works")
    const newUser = {
        name: $("#nameTitle").val(),
        email: $("#emailTitle").val(),
        password: $("#createPassWordTitle").val(),
    }


    DataManager.saveUserEntry(newUser).then(() => {
        LoginFormManager.clearForm()
        // $("#usernameTitle").val("")
        // $("#passwordTitle").val("")
        // $("#nameTitle").val("")
        // $("#emailTitle").val("")
        // $("#createPassWordTitle").val("")
    })
        .then(() => {
            alert("Thank you for creating an account! Go log in!")
        })
})
