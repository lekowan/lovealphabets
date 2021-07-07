//localStorage.clear();

class Model {

    constructor() {


       


    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
   

    // Chart Popover
    showChart(boolean, chart) {
        console.log(boolean, chart);
        let chartData;

        languageContent.forEach(item => {
            if(item.chartName == chart){
                chartData = item.chartData 
            }
        })

        this.onShowChartChanged(boolean, chartData);
    }

    bindOnShowChartChanged(callback) {
        this.onShowChartChanged = callback;
    }


    // Save in local storage methods
    _commitNextDate(nextDate) {
        localStorage.setItem(localStorageKey + 'NextDate', JSON.stringify(nextDate))
    }

}