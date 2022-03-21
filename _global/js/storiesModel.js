//localStorage.clear();

class Model {
    constructor() {

        // Get data from  localStorage
        let _data = JSON.parse(localStorage.getItem(localStorageKey + "Data"));
        let _progress = JSON.parse(localStorage.getItem(localStorageKey + "Progress"));

        this.allNewCards = Object.keys(allSyllableMap);

        // Display first word
        this.word = this.allNewCards[0];

        this.currentSlide = 1;

        
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
            this.playAudio();
          }
        })

        // Update the view
        this.onScrolled(this.currentSlide);
    }


    playAudio(){

      let word = allSyllableMap[this.whatSlide].character;

      // If speechSynthesis in user's browser
      if (activateSpeech && "speechSynthesis" in window) {
          let audioWord = new SpeechSynthesisUtterance(word.toLowerCase());
          audioWord.lang = language;
          window.speechSynthesis.speak(audioWord);
      }

      this.onPlayedAudio();
    }

    bindOnPlayedAudio(callback) {
        this.onPlayedAudio = callback;
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

    showDefinition(span){
        let word = this.whatSlide;
        let definition = allSyllableMap[word].span;
        this.onShowedDefinition(definition);
    }

    bindOnShowedDefinition(callback) {
        this.onShowedDefinition = callback;
    }


    showAnswer(){
        this.onShowedAnswer(this.whatSlide);
    }

    bindOnShowedAnswer(callback) {
        this.onShowedAnswer = callback;
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


    goToNext(){
        let nextSlide;
        nextSlide = this.whatSlide;

        this.onWentToNext(nextSlide);
    }

    bindOnWentToNext(callback) {
        this.onWentToNext = callback;
    }

    bindOnDisplayedPinyin(callback){
        this.onDisplayedPinyin = callback;
    }

    showPinyin(array,boolean){
        this.onDisplayedPinyin(array, boolean);
    }

    bindOnDisplayedNoSpace(callback){
        this.onDisplayedNoSpace = callback;
    }

    displayNoSpace(boolean){
        this.onDisplayedNoSpace(boolean);
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