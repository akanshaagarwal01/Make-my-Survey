(function () {
    class User {
        constructor(userDetails) {
            this.initializeDOMElements();
        }

        initializeDOMElements() {
            this._DOMElements = {
                page2: document.getElementById("page2"),
                createSurveyBtn: document.getElementById("createSurveyBtn")
            }
        }

        createSurvey() {
            this._DOMElements.page2.innerHTML = "";
            
        }



    }
    window.User = User;
})();