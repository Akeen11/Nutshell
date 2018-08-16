const DataManager = require("./DataManager")
const LoginFormManager = require("./login")
const ArticleForm = require("./ArticleForm")
const articleEntryList = require("./ArticleList")
const EventFormManager = require("./EventForm")
const listEvents = require("./EventList")
const $ = require("jquery")

console.log("something", articleEntryList)

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
            $("#articleForm").html(ArticleForm.renderArticleForm())
            // listArticles()
            sessionStorage.setItem("activeUser", JSON.stringify(user)) //sets active user to session storage
            LoginFormManager.clearForm() //clears form after button click

            $("#loginForm").hide() //hides login form after user login

            $("#eventForm").html(EventFormManager.renderEventForm()).show() //writes eventform to DOM after login form is hidden
            listEvents() //writes eventlist to DOM

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

const listArticles = () => {
    DataManager.getAllArticles()
        .then(allEntries => {
            articleEntryList(allEntries)
            console.log(allEntries)
        })
}

listArticles()

// Handle delete button clicks
$(".articleEntry").on("click", evt => {
    if (evt.target.classList.contains("entry__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deleteArticle(id).then(listEntries)
    }
})
// Event listener for saving the article into the database
$("#articleForm").on("click", "#saveArticle", () => {
    console.log("please work")
    const newArticle = {
        title: $("#articleTitle").val(),
        content: $("#articleContent").val(),
        date: Date.now()
    }
    // Post entries into the to API
    DataManager.saveArticleEntry(newArticle).then(() => {
        ArticleForm.clearForm()
        listArticles()
    })
})

$("#eventForm").on("click", "#saveEventButton", event => { //puts click event on save event button
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
        )}
})
