const DataManager = require("./DataManager")
const $ = require("jquery")
// module for the login form. Using jquery!

const LoginFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#usernameTitle").val("")
            $("#passwordTitle").val("")
            $("#nameTitle").val("")
            $("#emailTitle").val("")
            $("#createPassWordTitle").val("")
        }
    },
    // creating the form for login
    renderLoginForm: {
        value: () => {
            return `
            <h1>Welcome!</h1>
            <h2>Sign In</h2>
            <article class="userField">
            <label for="username">Username:</label>
            <input required type="text" id="usernameTitle" placeholder="username">
            </article>
            <article class="passwordField">
            <label for="password">Password:</label>
                    <input type="password" id="passwordTitle" placeholder="password">
                    </article>

                    <button id="LoginButton" class="LoginButton">Login</button>
                    <h2>Create Account</h2>
                    <article class="nameField">
                    <label for="createName">Username:</label>
                    <input required type="text" id="nameTitle" placeholder="username">
                    </article>
                    <article class="userField">
                    <label for="createUser">Email Address:</label>
                    <input required type="text" id="emailTitle" placeholder="email address">
                    </article>
                    <article class="passwordField">
                    <label for="password">Password:</label>
                    <input type="password" id="createPassWordTitle" placeholder="password">
                    </article>

                <button id="create">Create Account</button>
                `
        }
    },
})

// exporting so other module may use it.
module.exports = LoginFormManager

