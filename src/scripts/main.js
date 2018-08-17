const DataManager = require("./DataManager")
const LoginFormManager = require("./login")
const ArticleForm = require("./ArticleForm")
const listArticles = require("./ArticleList")
const EventFormManager = require("./EventForm")
const taskFormManager = require("./taskform")
const listTasks = require("./tasklist")
const listEvents = require("./EventList")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm()) //renders login form to DOM

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
            $("#eventForm").html(EventFormManager.renderEventForm()).show()
            $("#taskForm").html(taskFormManager.renderTaskForm()).show()
            $("#articleForm").html(ArticleForm.renderArticleForm()).show()

            sessionStorage.setItem("activeUser", JSON.stringify(user)) //sets active user to session storage
            LoginFormManager.clearForm() //clears form after button click

            $("#loginForm").hide() //hides login form after user login

            $("#eventForm").html(EventFormManager.renderEventForm()).show() //writes eventform to DOM after login form is hidden

            listEvents() //writes eventlist to DOM
            listArticles()
            listTasks()

            $("#eventForm").on("click", "#logoutButton", event => {
                sessionStorage.removeItem("activeUser")
                $("#taskForm").html("")
                $("#taskList").html("")
                $("#articleForm").html("")
                $("#articleEntry").html("")
                $("#eventForm").html("")
                $("#eventList").html("")
                $("#loginForm").html(LoginFormManager.renderLoginForm()).show()
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

// !!! Start of Article Stuff !!!

// Event listener for saving the article into the database
$("#articleForm").on("click", "#saveArticle", event => {
    const userIDName = JSON.parse(sessionStorage.getItem("activeUser"))
    const newArticle = {
        userName: userIDName.name,
        title: $("#articleTitle").val(),
        content: $("#articleContent").val(),
        date: $("#articleDate").val(),
        URL: $("#articleURL").val(),
    }

    DataManager.saveArticleEntry(newArticle).then(() => {
        ArticleForm.clearForm()

        $("#articleEntry").html("")
        listArticles()
    })
})

// Handle delete button clicks
$("#articleEntry").on("click", evt => {
    if (evt.target.classList.contains("article__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deleteArticle(id)
            .then(() => {
                $("#articleEntry").empty()
                listArticles()
            })
    }
})

// !!! End of Article Stuff !!!

$("#eventForm").on("click", "#saveEventButton", event => { //puts click event on save event button
    const userObject = JSON.parse(sessionStorage.getItem("activeUser"))
    const newEvent = { //creates event to be pushed to DB
        userId: userObject.id, //grabs id from active user in session storage
        userName: userObject.name,
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

