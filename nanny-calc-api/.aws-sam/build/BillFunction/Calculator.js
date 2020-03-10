class Calculator {

    constructor() {

        this._week = "latest";
        this._bill = "one million"

    }

    get bill() { 

        return this._bill;

    }

    buildDialogAction() {

        return {

            type : "Close",
            fulfillmentState : "Fulfilled",
            message : {
                contentType : "PlainText",
                content : "You owe " + this._bill + " dollars"
            }

        };
        
    }

}

module.exports = Calculator