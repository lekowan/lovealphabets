class Controller {


    constructor(model, view) {
        this.model = model;
        this.view = view;

        ////////////////////
        // Function bindings

        // Display Chart        
        this.model.bindOnShowChartChanged(this.onShowChartChanged);
        this.view.bindShowChart(this.handleDisplayChart);


        // Display reset popover        
        //this.model.bindOnShowResetChanged(this.onShowResetChanged);
        this.view.bindShowReset(this.handleDisplayReset);

        // Display Menu        
        this.view.bindShowMenu(this.handleDisplayMenu);

        // Display Settings Menu        
        this.model.bindOnSettingsMenuProcessed(this.onSettingsMenuProcessed)
        this.view.bindShowSettingsMenu(this.handleDisplaySettingsMenu);

        // Change number in array
        this.model.bindOnNumberChanged(this.onNumberChanged);
        this.view.bindChangeNumber(this.handleChangeNumber);


    } // End of constructor


    // Handle Chart Popover visibility
    handleDisplayChart = (boolean, chart) => {
        this.model.showChart(boolean, chart);
    }

    onShowChartChanged = (boolean, chart, chartTitle, chartType, chartLocalStorageKey) => {
        this.view.displayChart(boolean);
        this.view.addCharacterChart(chart, chartTitle, chartType, chartLocalStorageKey);
    }

    // Handle New Settings Popover visibility
    handleDisplayNewItemsPopover = (boolean, localStorageKey) => {
        this.model.showNewItemsPopover(boolean, localStorageKey);
    }

    // Handle reset Popover visibility
    handleDisplayReset = (localStorageKey) => {
        this.model.processReset(localStorageKey);
    }

    onShowResetChanged = (boolean) => {
        this.view.displayReset(boolean);
        //this.view.addResetPopover();
    }

    // Handle Display Menu
    handleDisplayMenu = (boolean) => {
        this.view.displayMenu(boolean);
    }

    // Handle Settings menus
    handleDisplaySettingsMenu = (boolean, id) => {
        this.model.processSettingsMenu(boolean, id);
    }

    onSettingsMenuProcessed = (boolean, id) => {
        this.view.displaySettingsMenu(boolean, id);
    }

    // Change number in array handlers
    handleChangeNumber = (number, localStorageKey) => {
        this.model.changeNumber(number, localStorageKey);
  };

}

const app = new Controller(new Model(), new View());