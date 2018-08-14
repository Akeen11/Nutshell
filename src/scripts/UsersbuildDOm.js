const SignInForm = Object.create({}, {
    buildForm: {
        value: () => {
            const $formDiv = $("<div>").attr("id", "form");
            $("<input>").attr("id", "logIn-input").attr("placeholder", "Log In").appendTo($formDiv)
            $("<button>").attr("id", "signIn-btn").text("Sign In").appendTo($formDiv)
            $("<input>").attr("id", "name-input").attr("placeholder", "User Name").appendTo($formDiv);
            $("<button>").attr("id", "submit-btn").text("Create Account").appendTo($formDiv);
            $formDiv.appendTo($("#form-container"))
        }
    }
})

module.exports = SignInForm;