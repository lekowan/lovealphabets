class Controller {


    constructor(model, view) {
        this.model = model;
        this.view = view;

        ////////////////////
        // Function bindings


        // Display Chart        
        this.model.bindOnShowChartChanged(this.onShowChartChanged);
        this.view.bindShowChart(this.handleDisplayChart);


    } // End of constructor


    // Handle Congratulations Popover visibility
    handleDisplayChart = (boolean, chart) => {
        this.model.showChart(boolean, chart);
    }

    onShowChartChanged = (boolean, chart) => {
        this.view.displayChart(boolean);
        this.view.addCharacterChart(chart);
    }


}

const app = new Controller(new Model(), new View());