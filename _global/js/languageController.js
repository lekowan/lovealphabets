class Controller {


    constructor(model, view) {
        this.model = model;
        this.view = view;

        ////////////////////
        // Function bindings


        // Display New items popover        
        //this.model.bindOnShowChartChanged(this.onShowNewItemsPopoverChanged);
        this.view.bindShowChart(this.handleDisplayChart);


    } // End of constructor


    // Handle Congratulations Popover visibility
    handleDisplayCongratulationsPopover = (boolean) => {
        //this.model.showCongratulationsPopover(boolean);
    }


}

const app = new Controller(new Model(), new View());