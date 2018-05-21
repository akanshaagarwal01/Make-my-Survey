(function () {
    class OnboardUser {
        constructor() {
            this._DOMElements = {};
        }

        initializeDOMElements() {
            this._DOMElements = {
                page1: document.getElementById("page1"),
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
            }

            this._DOMElements.signUpButton.addEventListener("click", this.signUpNewUser.bind(this));
            this._DOMElements.loginButton.addEventListener("click", this.logInUser.bind(this));
        }

        signUpNewUser() {
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
            }).then(resp => resp.json()).then(rsp => signUpSuccessful.call(this,rsp.msg));

            function signUpSuccessful(message) {
                location.href = `userPage.html?text=${message}`;
            }
        }

        logInUser() {
            let userDetails = {
                username: this._DOMElements.loginUserName.value,
                password: this._DOMElements.loginPassword.value
            };
            fetch("http://localhost:8081/login", {
                method: "post",
                body: JSON.stringify(userDetails),
                headers: {
                    'content-Type': 'application/json',
                    'accept': 'application/json'
                }
            }).then(resp => resp.json()).then(rsp => loginSuccessful.call(this,rsp.msg));

            function loginSuccessful(message) {
                location.href = `userPage.html?text=${message}`;
            }
        }
    }

    new OnboardUser().initializeDOMElements();

})();