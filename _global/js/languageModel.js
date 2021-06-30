//localStorage.clear();

class Model {

    constructor() {


       


    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
   

    // Save in local storage methods
    _commitNextDate(nextDate) {
        localStorage.setItem(localStorageKey + 'NextDate', JSON.stringify(nextDate))
    }

}