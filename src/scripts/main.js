console.log("Welcome to Browserify")
//const $=require("jquery")
const DataManager=require("./DataManager")
const userList=require("./Userlist")
const LoginFormManager = require("./login")
const EventFormManager = require("./EventForm")
const $ = require("jquery")
console.log(EventFormManager)
$("#loginForm").html(LoginFormManager.renderLoginForm())

// $("#loginForm").on("click", event => {
//     if (event.target.classList.contains("LoginButton"))
//         (console.log("IT WORKS"))
// })
$("#loginForm").on("click", "#LoginButton", event => {
    DataManager.getAllUsers().then((users) => {
        const user = users.find(user => {
            return user.name === $("#usernameTitle").val() && user.email === $("#email").val()
        })

        if (user) {
            sessionStorage.setItem("activeUser", JSON.stringify(user))
            LoginFormManager.clearForm()
            //WORKING
            $("#loginForm").hide()
            //WORKING
            $("#eventForm").html(EventFormManager.renderEventForm()).show()

        }else{
            LoginFormManager.clearForm()
            alert("You need to register")
        }
    })
})

$("#create").on("click", event => {
    // Get form field values
    // Create object from them
    // Add timestamp
    console.log("it works")
    const newUser = {
        name: $("#nameTitle").val(),
        email: $("#emailTitle").val(),
    }


    DataManager.saveUserEntry(newUser).then(() => {
        LoginFormManager.clearForm()
    })
        .then(() => {
            alert("Thank you for creating an account! Go log in!")
        })
})

$("#eventForm").on("click", "#saveEventButton", event => {
    const newEvent = {
        name: $("#eventTitle").val(),
        description: $("#eventContent").val(),
        date: $("#eventDate").val(),
    }
    console.log(newEvent)

    DataManager.saveEvent(newEvent).then(() => {
        EventFormManager.clearForm()
    })
})
