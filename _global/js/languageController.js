class Controller {


    constructor(model, view) {
        this.model = model;
        this.view = view;

        ////////////////////
        // Function bindings


        // Display Chart        
        this.model.bindOnShowChartChanged(this.onShowChartChanged);
        this.view.bindShowChart(this.handleDisplayChart);

        // Display Menu        
        this.view.bindShowMenu(this.handleDisplayMenu);


    } // End of constructor


    // Handle Congratulations Popover visibility
    handleDisplayChart = (boolean, chart) => {
        this.model.showChart(boolean, chart);
    }

    onShowChartChanged = (boolean, chart, chartTitle) => {
        this.view.displayChart(boolean);
        this.view.addCharacterChart(chart, chartTitle);
    }

    // Handle Congratulations Popover visibility
    handleDisplayMenu = (boolean) => {
        this.view.displayMenu(boolean);
    }

}

const app = new Controller(new Model(), new View());