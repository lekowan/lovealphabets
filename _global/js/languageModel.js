//localStorage.clear();

class Model {

    constructor() {


    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
   

    // Chart Popover
    showChart(boolean, chart) {
        console.log(boolean, chart);
        let chartData, chartTitle, chartType;

        languageContent.forEach(item => {
            if(item.chartName == chart){
                chartData = item.chartData 
                chartTitle = item.chartTitle;
                chartType = item.chartType;
            }
        })

        this.onShowChartChanged(boolean, chartData,chartTitle,chartType);
    }

    bindOnShowChartChanged(callback) {
        this.onShowChartChanged = callback;
    }


    // New settings Popover
    showNewItemsPopover(boolean, localStorageKey) {
        
        languageContent.forEach(item => {
            if(item.localStorageKey == localStorageKey){
                console.log(localStorageKey);
            }
        })

        this.onShowNewSettingsChanged(boolean);
    }

    bindOnShowNewSettingsChanged(callback) {
        this.onShowNewSettingsChanged = callback;
    }


    // Save in local storage methods
    _commitNextDate(nextDate) {
        localStorage.setItem(localStorageKey + 'NextDate', JSON.stringify(nextDate))
    }

}