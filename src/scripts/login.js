const $ = require("jquery")
// module for the login form. Using jquery!

const LoginFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#usernameTitle").val("")
            $("#email").val("")
            $("#nameTitle").val("")
            $("#emailTitle").val("")
        }
    },
    // creating the form for login
    renderLoginForm: {
        value: () => {
            return `
                    <h2>Sign In</h2>
                    <article class="userField">
                    <label id="username">Username:</label>
                    <input required type="text" id="usernameTitle" placeholder="username">
                    <p></p>
                    </article>
                    <article class="emailField">
                    <label for="email">Email Address:</label>
                    <input required type="text" id="email" placeholder="email address">
                    </article>
                    <button id="LoginButton" class="LoginButton">Login</button>
                    <script>
var input = document.getElementById("email");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("LoginButton").click();
    }
});
</script>
                    <h2>Create Account</h2>
                    <article class="nameField">
                    <label id="createName">Username:</label>
                    <input required type="text" id="nameTitle" placeholder="username">
                    <p></p>
                    </article>
                    <article class="userField">
                    <label for="createUser">Email Address:</label>
                    <input required type="text" id="emailTitle" placeholder="email address">
                    </article>
                    <button id="create">Create Account</button>
                `
        }
    },

})

// exporting so other module may use it.
module.exports = LoginFormManager

