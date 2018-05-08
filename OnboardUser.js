(function () {
    class OnboardUser {
        constructor() {
            this._DOMElements = {};
        }

        initializeDOMElements() {
            this._DOMElements = {
                signUpContainer: document.getElementById("signUpContainer"),
                signUpUserName: document.getElementById("signUpUserName"),
                signUpPassword: document.getElementById("signUpPassword"),
                email: document.getElementById("email"),
                firstName: document.getElementById("firstName"),
                lastName: document.getElementById("lastName"),
                signUpButton: document.getElementById("signUpButton"),
                loginContainer: document.getElementById("loginContainer"),
                loginUserName: document.getElementById("loginUserName"),
                loginPassword: document.getElementById("loginPassword"),
                loginButton: document.getElementById("loginButton")
            };

            this._DOMElements.signUpButton.addEventListener("click", this.signUpNewUser.bind(this));
            this._DOMElements.loginButton.addEventListener("click", this.logInUser.bind(this));
        }

        signUpNewUser(event) {
            let userDetails = {
                username: this._DOMElements.signUpUserName.value,
                password: this._DOMElements.signUpPassword.value,
                email: this._DOMElements.email.value,
                firstName: this._DOMElements.firstName.value,
                lastName: this._DOMElements.lastName.value
            };
            fetch("http://localhost:8081/signUp", {
                method: "post",
                body: JSON.stringify(userDetails),
                headers: {
                    'content-type': 'application/json',
                    "accept": 'application/json',
                }
            }).then(resp => resp);

            // function signUpSuccessful() {
            //     alert("Successfully signed in !!");
            //     alert(`Welocme ${userDetails.firstName} !!`)
            //     // let user = new User();
            // }
        }

        logInUser(event) {
            let userDetails = {
                username: this._DOMElements.signUpUserName.value,
                password: this._DOMElements.signUpPassword.value
            };
            fetch("http://localhost:8081/login", {
                method: "post",
                body: JSON.stringify(userDetails),
                headers: {
                    'content-Type': 'application/json',
                    'accept': 'application/json'
                }
            }).then(resp => loginSuccessful());

            function loginSuccessful() {

            }

        }

    }

    new OnboardUser().initializeDOMElements();

})();