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
        //this.model.bindOnShowChartChanged(this.onShowNewItemsPopoverChanged);
        this.view.bindShowChart(this.handleDisplayChart);


    } // End of constructor

 

    // Handle Congratulations Popover visibility
    handleDisplayChart = (boolean) => {
        this.model.showChart(boolean);
    }

    onShowChartChanged = boolean => {
        this.view.displayChart(boolean);
    }


    /*
    // Handle Today's Items Popover visibility
    handleDisplayTodaysItemsPopover = (boolean) => {
        this.model.showTodaysItemsPopover(boolean);
    }

    onShowTodaysItemsPopoverChanged = boolean => {
        this.view.displayTodaysItemsPopover(boolean);
    }
    */


}

const app = new Controller(new Model(), new View());