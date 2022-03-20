class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    ////////////////////
    // Function bindings

    // Change slide
    this.model.bindOnTrackerChanged(this.onTrackerChanged);

    // Toggle button visbility
    this.model.bindOnVisibilityChanged(this.onVisibilityChanged);
    this.view.bindToggleVisibility(this.handleToggleVisibility);

    // Process bad answer
    this.model.bindOnBadAnswerProcessed(this.onBadPressed);
    this.view.bindProcessBadAnswer(this.handleProcessBadAnswer);

    // Process good answer
    this.model.bindOnGoodAnswerProcessed(this.onGoodPressed);
    this.view.bindProcessGoodAnswer(this.handleProcessGoodAnswer);

    // Display initial word + answer
    if (!this.model.showWelcome) this.onNextCardAdded(this.model.initialWord, this.model.initialAnswer);

    // Get slide number upon scrolling
    this.model.bindOnScrolled(this.onScrolled);
    this.view.bindScroll(this.handleScroll);

    // Play audio
    this.model.bindOnPlayedAudio(this.onPlayedAudio);
    this.view.bindPlayAudio(this.handlePlayAudio);

    // Show answer
    this.model.bindOnShowedAnswer(this.onShowedAnswer);
    this.view.bindShowAnswer(this.handleShowAnswer);

    // Go to next slide
    this.model.bindOnWentToNext(this.onWentToNext);
    this.view.bindGoToNext(this.handleGoToNext);


    // Display Welcome popover
    this.onShowWelcomePopoverChanged(this.model.initialWelcomePopover);
    this.model.bindOnShowWelcomePopoverChanged(this.onShowWelcomePopoverChanged);
    this.view.bindDisplayWelcomePopover(this.handleDisplayWelcomePopover);

    // Display definition popover
    this.model.bindOnShowedDefinition(this.onShowedDefinition);
    //this.view.displayDefinition(this.handleShowDefinition);

    // Display Congratulations popover
    //this.onShowCongratulationsPopoverChanged(this.model.initialCongratulationsPopover);
    //this.model.bindOnShowCongratulationsPopoverChanged(this.onShowCongratulationsPopoverChanged);
    //this.view.bindDisplayCongratulationsPopover(this.handleDisplayCongratulationsPopover);

  } // End of constructor

  // Toggle button visibility handlers
  handleToggleVisibility = (boolean) => {
    this.model.toggleVisibility(boolean);
  };

  onVisibilityChanged = (boolean) => {
    this.view.displayButtons(boolean);
  };

  // Process bad answer
  handleProcessBadAnswer = () => {
    this.model.processBadAnswer();
  };

  onBadPressed = () => {
    this.view.bindProcessBadAnswer();
  };

  // Process good answer
  handleProcessGoodAnswer = () => {
    this.model.processGoodAnswer();
  };

  onGoodPressed = () => {
    this.view.bindProcessGoodAnswer();
  };

  onNextCardAdded = (card, answer, isNew) => {
    this.view.addNextCard(card, answer, isNew);
  };

  // Scroll
  handleScroll = (bodyContent, slideCollection) => {
    this.model.scroll(bodyContent, slideCollection);
  };

  onScrolled = (answer) => {
    //this.view.displayAnswer(answer);
  };

  // Play Audio
  handlePlayAudio = () => {
    this.model.playAudio();
  };

  onPlayedAudio = () => {
    this.view.animateAudioIcon();
  };

  // Play Audio
  handleShowDefinition = (span) => {
    this.model.showDefinition(span);
  };

  onShowedDefinition = () => {
    //this.view.addNextCard(card, answer, isNew, handler);
  };


  // Go to next
  handleGoToNext = () => {
    this.model.goToNext();
  };

  onWentToNext = (anchor) => {
    this.view.displayNext(anchor);
  };

  // Show Answer
  handleShowAnswer = () => {
    this.model.showAnswer();
  };

  onShowedAnswer = (id) => {
    this.view.displayAnswer(id);
  };

  // Handle Welcome Popover visibility
  handleDisplayWelcomePopover = (boolean) => {
    this.model.showWelcomePopover(boolean);
  };

  onShowWelcomePopoverChanged = (boolean) => {
    this.view.displayWelcomePopover(boolean);
  };

  // Handle Congratulations Popover visibility
  handleDisplayCongratulationsPopover = (boolean) => {
    this.model.showCongratulationsPopover(boolean);
  };

  onShowCongratulationsPopoverChanged = (boolean) => {
    this.view.displayCongratulationsPopover(boolean);
  };

}

const app = new Controller(new Model(), new View());
