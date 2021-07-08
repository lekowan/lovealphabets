//localStorage.clear();

class Model {

    constructor() {


       


    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
   

    // Chart Popover
    showChart(boolean, chart) {
        console.log(boolean, chart);
        let chartData, chartTitle;

        languageContent.forEach(item => {
            if(item.chartName == chart){
                chartData = item.chartData 
                chartTitle = item.chartTitle;
            }
        })

        this.onShowChartChanged(boolean, chartData,chartTitle);
    }

    bindOnShowChartChanged(callback) {
        this.onShowChartChanged = callback;
    }


    // Save in local storage methods
    _commitNextDate(nextDate) {
        localStorage.setItem(localStorageKey + 'NextDate', JSON.stringify(nextDate))
    }

}