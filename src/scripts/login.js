const LoginFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#").value = ""
            document.querySelector("#").value = ""
        }
    },
    // creating the form
    renderLoginForm: {
        value: () => {
            return `
                <h2>Sign In</h2>
                <article class="userField">
                    <label for="username">Username:</label>
                    <input required type="text" id="" placeholder="username">
                </article>
                <article class="passwordField">
                    <label for="password">Password:</label>
                    <input required type="text" id="" placeholder="password">
                </article>
                
                <button id="LoginButton">Login</button>
                <h2>Create Account</h2>
                <article class="userField">
                    <label for="createUser">Username:</label>
                    <input required type="text" id="" placeholder="email address">
                </article>
                <article class="passwordField">
                    <label for="password">Password:</label>
                    <input required type="text" id="" placeholder="password">
                </article>
                
                <button id="create">Create Account</button>
            `
        }
    }

})

module.exports = LoginFormManager

