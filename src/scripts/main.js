const DataManager = require("./DataManager")
const LoginFormManager = require("./login")
const ArticleForm = require("./ArticleForm")
const $ = require("jquery")

$("#loginForm").html(LoginFormManager.renderLoginForm())

$("#loginForm").on("click", "#LoginButton", event => {
    DataManager.getAllUsers().then((users) => {
        const user = users.find(user => {
            return user.name === $("#usernameTitle").val() && user.password === $("#passwordTitle").val()
        })

        if (user) {
            sessionStorage.setItem("activeUser", JSON.stringify(user))
            $("#form_sub_container2").hide();

        }else{
            alert("You need to register")
            LoginFormManager.clearForm()
        }
    })
    // (console.log("IT WORKS"))
})

$("#create").on("click", event => {
    console.log("it works")
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

$("#articleForm").html(ArticleForm.renderArticleForm())