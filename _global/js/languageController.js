class Controller {


    constructor(model, view) {
        this.model = model;
        this.view = view;

        ////////////////////
        // Function bindings

       /*
        // Display initial word + answer
        this.onNextCardAdded(this.model.initialWord, this.model.initialAnswer);

       
        // Display Congratulations popover 
        this.onShowCongratulationsPopoverChanged(this.model.initialCongratulationsPopover);
        this.model.bindOnShowCongratulationsPopoverChanged(this.onShowCongratulationsPopoverChanged);
        this.view.bindDisplayCongratulationsPopover(this.handleDisplayCongratulationsPopover);
        */

        // Display New items popover         
        //this.model.bindOnShowNewItemsPopoverChanged(this.onShowNewItemsPopoverChanged);
        this.view.bindDisplayCtas();


    } // End of constructor

 
    // Handle Congratulations Popover visibility
    handleDisplayCongratulationsPopover = (boolean) => {
        //this.model.showCongratulationsPopover(boolean);
    }

    /*
    onShowCongratulationsPopoverChanged = boolean => {
        console.log('fucking function', boolean);
        this.view.displayCongratulationsPopover(boolean);
    }
    */


}

const app = new Controller(new Model(), new View());