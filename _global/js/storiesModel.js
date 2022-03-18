//localStorage.clear();

class Model {
    constructor() {

        // Get data from  localStorage
        let _data = JSON.parse(localStorage.getItem(localStorageKey + "Data"));
        let _progress = JSON.parse(localStorage.getItem(localStorageKey + "Progress"));

        this.allNewCards = Object.keys(allSyllableMap);

        // Display first word
        this.word = this.allNewCards[0];

        this.currentSlide;

        
    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

    get initialWelcomePopover() {
        return this.showWelcome;
    }

    get whatSlide(){
        return this.currentSlide;
    }


    get initialCongratulationsPopover() {
        return this.showCongratulations;
    }

    get initialWord() {
        if(this.allNewCards.length > 0){
          return this.allNewCards
       }
    }


    // Check if element is within parent's viewport
    isInViewport(el, bodyContent) {
          const rect = el.getBoundingClientRect();

          return (
              rect.top >= bodyContent.getBoundingClientRect().top * 0.9  &&
              rect.bottom <= bodyContent.getBoundingClientRect().bottom * 1.1
          )
    }
      
    scroll(bodyContent, slideCollection){

        slideCollection.forEach(slide => {
          if(this.isInViewport(slide, bodyContent)){
            this.currentSlide = slide.id;
            console.log(this.currentSlide);
          }
        })
    }


    bindOnScrolled(callback) {
        this.onScrolled = callback;
    }


    bindOnCardsChanged(callback) {
        this.onCardsChanged = callback;
    }

    bindOnTrackerChanged(callback) {
        this.onTrackerChanged = callback;
    }

    toggleVisibility(boolean) {
        // if (boolean == true) this.sayIt();
        this.onVisibilityChanged(boolean);
    }

    bindOnVisibilityChanged(callback) {
        this.onVisibilityChanged = callback;
    }

    // Add new card to the DOM
    addCard() {
        this.onCardAdded(this.nextCard, this.newAnswer, this.isWordNew);
    }

    // Initiate audio
    playAudio(url) {
        new Audio(url).play();
    }

    bindOnNextCardAdded(callback) {
        this.onCardAdded = callback;
    }

    // Process bad answer:
    // Add answer to incorrect array
    // Update SRS data
    processBadAnswer() {
       
    }

    // Process good answer:
    // Update SRS data
    processGoodAnswer() {
       
    }

    bindOnBadAnswerProcessed(callback) {
        this.onBadPressed = callback;
    }

    bindOnGoodAnswerProcessed(callback) {
        this.onGoodPressed = callback;
    }
    
    // Welcome Popover
    showWelcomePopover(boolean) {
        this.onShowWelcomePopoverChanged(boolean);
    }

    bindOnShowWelcomePopoverChanged(callback) {
        this.onShowWelcomePopoverChanged = callback;
    }

    // Congratulations Popover
    showCongratulationsPopover(boolean) {
        this.onShowCongratulationsPopoverChanged(boolean);
    }

    bindOnShowCongratulationsPopoverChanged(callback) {
        this.onShowCongratulationsPopoverChanged = callback;
    }

    _commitData(data) {
        localStorage.setItem(localStorageKey + "Data", JSON.stringify(data));
    }

    _commitProgress(progress) {
        localStorage.setItem(localStorageKey + "Progress", JSON.stringify(progress));
    }

    _commitNextDate(nextDate) {
        localStorage.setItem(localStorageKey + "NextDate", JSON.stringify(nextDate));
    }
}