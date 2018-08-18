console.log("Welcome to Browserify")
//const $=require("jquery")
const DataManager = require("./DataManager")
const userList = require("./Userlist")
const LoginFormManager = require("./login")
const ArticleForm = require("./ArticleForm")
const listArticles = require("./ArticleList")
const EventFormManager = require("./EventForm")
const MessageFormManager = require("./BuildMessage")
const messageComponent = require("./message")
const listMessage = require("./MessageList")
//const scrollBottom = require("./scrollBottom")
const listEvents = require("./EventList")
const taskFormManager = require("./taskform")
const listTasks = require("./tasklist")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm()) //renders login form to DOM

// $("#loginForm").on("click", event => {
//     if (event.target.classList.contains("LoginButton"))
//         (console.log("IT WORKS"))
// })

$("#logoutButton").hide();

$("#loginForm").on("click", "#LoginButton", event => {
    DataManager.getAllUsers().then((users) => {
        const user = users.find(user => {
            return user.name === $("#usernameTitle").val() && user.email === $("#email").val() //verifies account is in DB
        })

        if (user) {
            sessionStorage.setItem("activeUser", JSON.stringify(user))
            LoginFormManager.clearForm()
            //WORKING
            $("#loginForm").hide()
            //WORKING
            $("#messages").html(MessageFormManager.renderMessageForm()).show()
            $("#eventForm").html(EventFormManager.renderEventForm()).show()
            $("#taskForm").html(taskFormManager.renderTaskForm()).show()
            $("#articleForm").html(ArticleForm.renderArticleForm()).show()
            // sessionStorage.setItem("activeUser", JSON.stringify(user)) //sets active user to session storage
            // LoginFormManager.clearForm() //clears form after button click
            $("#logo").hide();
            $("#footer").css("position", "relative");
            $("header").css("position", "relative");
            $("#logoutButton").show();

            // $("#loginForm").hide() //hides login form after user login

            // $("#eventForm").html(EventFormManager.renderEventForm()).show() //writes eventform to DOM after login form is hidden

            listEvents()
            listArticles()
            $("#eventForm").html(EventFormManager.renderEventForm()).show()
            listEvents()
            //writes eventform to DOM after login form is hidden
            $("#taskForm").html(taskFormManager.renderTaskForm()).show() //writes eventlist to DOM
            listTasks()
            listMessage()
            //writes eventlist to DOM

            $(".header-container").on("click", "#logoutButton", event => {
                sessionStorage.removeItem("activeUser")
                $("#eventForm").html("")
                $("#eventList").html("")
                $("#taskForm").html("")
                $("#taskList").html("")
                $("#articleForm").html("")
                $("#articleEntry").html("")
                $("#eventForm").html("")
                $("#eventList").html("")
                $("#messages").html("")
                $("#messageList").html("")
                $("#articleList").html("")
                $("#loginForm").html(LoginFormManager.renderLoginForm()).show()
                $("#footer").css("position", "absolute");
                $("#logoutButton").hide();
            })
        } else {
            LoginFormManager.clearForm()
            alert("You need to register")
        }
    })
})

$("#create").on("click", event => {

    // Get form field values
    // Create object from them
    const newUser = { //creates user to be saved to DB
        name: $("#nameTitle").val(),
        email: $("#emailTitle").val(),
    }

    DataManager.saveUserEntry(newUser).then(() => {
        LoginFormManager.clearForm() //clears form after button click
    })
        .then(() => {
            alert("Thank you for creating an account! Go log in!")
        })
})


$("#messages").on("click", "#message-btn", event => {
    let user = JSON.parse(sessionStorage.getItem("activeUser"))
    const newMessage = {
        message: $("#message-input").val(),
        userId: user.id,
        userName: user.name
    }
    //console.log(newMessage)
    DataManager.saveMessage(newMessage).then(() => {
        MessageFormManager.clearForm()
        $("#messageList").html("") //clears page before rerendering list from DB
        listMessage()
    })

})
$("#messageList").on("click", evt => { //bubbles message event to messaget list ID
    if (evt.target.classList.contains("message__delete")) { //places click message on delete event button
        const id = parseInt(evt.target.id.split("--")[1]) //splits and specifies specific button id's
        DataManager.deleteMessage(id) //calls delete function
            // .then(() => {
            //     $("#messageList").empty() //clears div before rerendering event list
            // })
            .then(() => {
                listMessage() //rerenders message list
            }
            )
    }
})
let editMode = false
$("#messageList").on("click", evt => { //bubbles click event to event list ID
    console.log(evt.target)
    if (evt.target.classList.contains("message_edit") && editMode === false) {
        //places click event on edit message button

        const id = parseInt(evt.target.id.split("--")[1])
        const element = document.getElementById(`messageField--${id}`)


        const msgName = element.innerHTML
        console.log(msgName)
        element.innerHTML = `<input id="newestMessage" type="text" value="${msgName}">`

        editMode = true
    }
    else if (evt.target.classList.contains("message_edit") && editMode === true) {
        let editedMsgName = {
            message: document.getElementById("newestMessage").value
        }
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.patchMessage(id, editedMsgName) //calls edit function
            .then(() => {
                $("#messageList").empty()
                editMode = false
                listMessage()


            })
    }
})

$("#eventList").on("click", evt => { //bubbles click event to event list ID
    if (evt.target.classList.contains("event__delete")) { //places click event on delete event button
        const id = parseInt(evt.target.id.split("--")[1]) //splits and specifies specific button id's
        DataManager.deleteEvent(id) //calls delete function
            .then(() => {
                $("#eventList").empty() //clears div before rerendering event list
                listEvents() //rerenders event list
            })
    }
})
//parseINT keeps there from being issues later with numbers. session storage gets the item active user

//takes id taskForm--jquery The .on() method attaches event handlers-here "click" to the save task button//
$("#taskForm").on("click", "#savetasktButton", task => {
    const userObject = parseInt(JSON.parse(sessionStorage.getItem("activeUser"))) //grabs id from active user in session storage
    const newTask = {
        userId: userObject.id,
        userName: userObject.name,
        name: $("#taskName").val(),
        description: $("#taskDescription").val(),
        date: $("#taskCompletionDate").val(),
        completed: false
    }

    $("#eventForm").on("click", "#saveEventButton", event => {
        // const newEvent = {
        //     $("#eventForm").on("click", "#saveEventButton", event => {//puts click event on save event button
        const newEvent = { //creates event to be pushed to DB
            userId: parseInt(JSON.parse(sessionStorage.getItem("activeUser")).id), //grabs id from active user in session storage
            name: $("#eventTitle").val(),
            location: $("#eventContent").val(),
            date: $("#eventDate").val(),
        }

        DataManager.saveEvent(newEvent).then(() => {
            EventFormManager.clearForm()

            $("eventList").html("") //clears page before rerendering list from DB
            listEvents() //renders event list to DOM
        })
    })

})

$("#taskList").on("click", evt => { //bubbles click event to task list ID
    if (evt.target.classList.contains("task__completed")) { //places click event on delete task button
        const id = parseInt(evt.target.id.split("--")[1])
        let editedTask = {
            completed: true
        }
        DataManager.completedTasks(id, editedTask) //calls delete function
            .then(() => {
                $("#taskList").empty()
                listTasks()

                $("#eventList").on("click", evt => { //bubbles click event to event list ID
                    if (evt.target.classList.contains("event__delete")) { //places click event on delete event button
                        const id = parseInt(evt.target.id.split("--")[1]) //splits and specifies specific button id's
                        DataManager.deleteEvent(id) //calls delete function
                            .then(() => {
                                $("eventList").empty() //clears div before rerendering event list
                            })
                            .then(() => {
                                listEvents() //rerenders event list
                            }
                            )
                    }
                })
                //parseINT keeps there from being issues later with numbers. session storage gets the item active user

                //takes id taskForm--jquery The .on() method attaches event handlers-here "click" to the save task button//
                $("#taskForm").on("click", "#savetasktButton", task => {
                    const userObject = parseInt(JSON.parse(sessionStorage.getItem("activeUser"))) //grabs id from active user in session storage
                    const newTask = {
                        userId: userObject.id,
                        userName: userObject.name,
                        name: $("#taskName").val(),
                        description: $("#taskDescription").val(),
                        date: $("#taskCompletionDate").val(),
                    }

                    DataManager.saveTask(newTask).then(() => {
                        taskFormManager.clearForm()

                        $("#taskList").html("") //clears page before rerendering list from DB
                        listTasks() //renders event list to DOM
                    })
                })
                $("#taskList").on("click", evt => { //bubbles click event to task list ID
                    if (evt.target.classList.contains("task__delete")) { //places click event on delete task button
                        const id = parseInt(evt.target.id.split("--")[1])
                        DataManager.deleteTask(id) //calls delete function
                            .then(() => {
                                $("#taskList").empty()
                                listTasks()


                            })
                    }
                })
                let editMode = false
                $("#taskList").on("click", evt => {
                    if (evt.target.classList.contains("editTask") && editMode === false) {
                        const id = parseInt(evt.target.id.split("--")[1])

                        const element = document.getElementById(`taskNameField--${id}`)
                        const taskName = element.innerHTML
                        element.innerHTML = `<input id="newestTask" type="text" value="${taskName}">`

                        editMode = true

                    } else if (evt.target.classList.contains("editTask") && editMode === true) {
                        let editedTaskName = {
                            name: document.getElementById("newestTask").value
                        }
                        const id = parseInt(evt.target.id.split("--")[1])
                        DataManager.editedTasks(id, editedTaskName)
                            .then(() => {
                                $("#taskList").empty()
                                editMode = false
                                listTasks()

                            })
                    }
                })
              let ediMode=fasle
                $("#eventList").on("click", evt => {
                    if (evt.target.classList.contains("event__edit") && editMode === false) {
                        const id = parseInt(evt.target.id.split("--")[1])

                        const element = document.getElementById(`eventField--${id}`)
                        const name = element.innerHTML
                        element.innerHTML = `
        <input id="newestEventName" type="text" value="${name}">
        `

                        editMode = true

                    } else if (evt.target.classList.contains("event__edit") && editMode === true) {
                        const userObject = JSON.parse(sessionStorage.getItem("activeUser"))
                        const updatedEvent = {
                            userId: userObject.id,
                            userName: userObject.name,
                            name: document.getElementById("newestEventName").value,
                        }
                        const id = parseInt(evt.target.id.split("--")[1])
                        DataManager.editEvent(id, updatedEvent)
                            .then(() => {
                                $("#eventList").empty()
                                editMode = false
                                listEvents()

                            })
                    }
                })