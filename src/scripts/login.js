const $ = require("jquery")

const LoginFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#userNameTitle").val("")
            $("#passwordTitle").val("")
            $("#emailTitle").val("")
            $("#createPassWordTitle").val("")
        }
    },
    // creating the form for login
    renderLoginForm: {
        value: () => {
            return `
                <h2>Sign In</h2>
                <article class="userField">
                    <label for="username">Username:</label>
                    <input required type="text" id="usernameTitle" placeholder="username">
                </article>
                <article class="passwordField">
                    <label for="password">Password:</label>
                    <input required type="text" id="passwordTitle" placeholder="password">
                </article>
                
                <button id="LoginButton" class="LoginButton">Login</button>
                <h2>Create Account</h2>
                <article class="nameField">
                    <label for="createName">Name:</label>
                    <input required type="text" id="nameTitle" placeholder="name">
                </article>
                <article class="userField">
                    <label for="createUser">Username:</label>
                    <input required type="text" id="emailTitle" placeholder="email address">
                </article>
                <article class="passwordField">
                    <label for="password">Password:</label>
                    <input type="password" id="createPassWordTitle" placeholder="password">
                </article>
                
                <button id="create">Create Account</button>
            `
        }
    }

})

module.exports = LoginFormManager

