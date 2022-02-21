class Controller {


    constructor(model, view) {
        this.model = model;
        this.view = view;

        ////////////////////
        // Function bindings

        // Display Chart        
        this.model.bindOnShowChartChanged(this.onShowChartChanged);
        this.view.bindShowChart(this.handleDisplayChart);


        // Display new settings popover        
        this.model.bindOnShowNewSettingsChanged(this.onShowNewSettingsChanged);
        this.view.bindShowNewSettings(this.handleDisplayNewItemsPopover);

        // Display Menu        
        this.view.bindShowMenu(this.handleDisplayMenu);


    } // End of constructor


    // Handle Chart Popover visibility
    handleDisplayChart = (boolean, chart) => {
        this.model.showChart(boolean, chart);
    }

    onShowChartChanged = (boolean, chart, chartTitle, chartType) => {
        this.view.displayChart(boolean);
        this.view.addCharacterChart(chart, chartTitle, chartType);
    }

    // Handle New Settings Popover visibility
    handleDisplayNewItemsPopover = (boolean, chart) => {
        this.model.showNewItemsPopover(boolean, chart);
    }

    onShowNewSettingsChanged = (boolean) => {
        this.view.displayNewSettings(boolean);
        this.view.addNewSettingsPopover();
    }


    // Handle Congratulations Popover visibility
    handleDisplayMenu = (boolean) => {
        this.view.displayMenu(boolean);
    }

}

const app = new Controller(new Model(), new View());