const DataManager = require("./DataManager")
const LoginFormManager = require("./login")
const ArticleForm = require("./ArticleForm")
const articleEntry = require("./ArticleEntry")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

$("#loginForm").on("click", "#LoginButton", event => {
    DataManager.getAllUsers().then((users) => {
        const user = users.find(user => {
            return user.name === $("#usernameTitle").val() && user.password === $("#passwordTitle").val()
        })

        if (user) {
            sessionStorage.setItem("activeUser", JSON.stringify(user))
            LoginFormManager.clearForm()
            //WORKING
            $("#loginForm").hide()
            //WORKING         
            $("#articleForm").html(ArticleForm.renderArticleForm())
            listArticles()

        } else {
            LoginFormManager.clearForm()
            alert("You need to register")
        }
    })
})

$("#create").on("click", event => {
    const newUser = {
        name: $("#nameTitle").val(),
        email: $("#emailTitle").val(),
        password: $("#createPassWordTitle").val(),
    }

    DataManager.saveUserEntry(newUser).then(() => {
        LoginFormManager.clearForm()
    })
        .then(() => {
            alert("Thank you for creating an account! Go log in!")
        })
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

const listArticles = () => {
    DataManager.getAllArticles()
        .then(allEntries => {
            articleEntry(allEntries)
        })
}

// // Handle delete button clicks
// $(".articleEntry").on("click", evt => {
//     if (evt.target.classList.contains("entry__delete")) {
//         const id = parseInt(evt.target.id.split("--")[1])
//         DataManager.deleteArticle(id).then(listEntries)
//     }
// })