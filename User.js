(function () {
    class User {
        constructor(userDetails) {
            
        }

        displayGreetings() {
            let queryString = location.search;
            let name = queryString.split('=');
            this._DOMElements.greeting.innerHTML = `Welcome ${name[1]}`
        }

        initializeDOMElements() {
            this._DOMElements = {
                greeting: document.getElementById("greeting"),
                createSurveyBtn: document.getElementById("createSurveyBtn")
            };
            this._DOMElements.createSurveyBtn.addEventListener("click", this.createSurvey);
        }

        createSurvey() {
            
        }



    }
    
    let user = new User();
    user.initializeDOMElements();
    user.displayGreetings();
    
})();