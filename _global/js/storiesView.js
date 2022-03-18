class View {
  constructor() {

    this.app = this.$("#root");

    // Create content container
    this.content = this.createElement("div", "content");

    // Create body-content container
    this.bodyContent = this.createElement("div", "body-content");
    //this.bodyContent.classList.add("scrolling");

    // Create container container
    //this.container = this.createElement("div", "container");

    // Create header
    this.header = this.createElement("div", "header");
    // this.header.classList.add("pink-background");

    this.mainHeading = this.createElement("div", "main-heading");
    this.mainHeading.innerHTML = srsTitle;

    // Create progres
    this.progress = this.createElement("div", "progress");

    // Create generic close button
    let closeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    closeSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    closeSvg.setAttribute("height", "24px");
    closeSvg.setAttribute("viewBox", "0 0 24 24");
    closeSvg.setAttribute("width", "24px");
    closeSvg.setAttribute("fill", "#2a2142");
    let closeSvgPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    closeSvgPath1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
    closeSvgPath1.setAttribute("fill", "none");
    let closeSvgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let closePath2d = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z";
    closeSvgPath2.setAttribute("d", closePath2d); //Set path's data
    closeSvg.append(closeSvgPath1, closeSvgPath2);

    // Clone generic SVG button
    this.closeSvg = closeSvg.cloneNode(true);

    // Create close button
    this.closeButton = this.createElement("div", "close-button");
    this.closeButton.append(this.closeSvg);

    this.closeButton.addEventListener("click", (event) => {
      return (window.location.href = "../");
    });

    // If language is Mandarin
      if(language == "zh-CN" || language == "ja-JP" ){
        // Create pinyin button
        this.pinyinButton = this.createElement("div", "pinyin-button");
        
        if(language == "zh-CN") this.pinyinButton.textContent = "pinyin";
        else this.pinyinButton.textContent = "kana";

        this.showPinyin = true;

        this.pinyinButton.addEventListener("click", (event) => {
          this.displayPinyin();
        });
    }

    // If language is Mandarin, append pinyin button
    if(this.showPinyin){
      this.progress.append(this.pinyinButton);
    }

    // Append progressBar to progress
    //this.progress.append(this.progressBar, this.moreButton);

    // Create SRS practice header title
    this.languagePractice = this.createElement("p", "language-practice");
    this.languagePractice.textContent = "SRS Practice";

    // Append close button + title to header
    this.header.append(this.mainHeading, this.closeButton);

    // Create button area
    this.buttonArea = this.createElement("div", "button-area");

    // Create Good / Bad button area
    this.goodBadButton = this.createElement("div", "good-bad");

    // Create Good button
    this.goodButton = this.createElement("button", "good");
    this.goodButton.innerHTML = "GOOD";
    //this.goodButton.style.display = "none";

    // Create Bad button
    this.badButton = this.createElement("button", "bad");
    this.badButton.innerHTML = "BAD";
    //this.badButton.style.display = "none";

    // Create Show button
    this.showButton = this.createElement("button", "purple-cta");
    this.showButton.id = "show-button";
    this.showButton.innerHTML = "SHOW";

    // Create Show button
    this.nextButton = this.createElement("button", "pink-cta");
    this.nextButton.id = "next-button";
    this.nextButton.innerHTML = "NEXT";

    // Append buttons to button area
    //this.goodBadButton.append(this.badButton, this.goodButton);
    this.buttonArea.append(this.nextButton, this.showButton);
 
    // Append the title, form, and todo list to the content div
    this.content.append(this.header, this.progress, this.bodyContent, this.buttonArea);

    // Append content div to app
    this.app.append(this.content);

    // Loader
    this.overlay = this.createElement("div");
    this.overlay.id = "overlay";
    this.overlay.style.top = 0;
    this.overlay.style.height = "100%";
    this.loader = this.createElement("div", "loader");
    this.loader.id = "loader";
    this.loader.classList.add(loadergradientBackground);
    this.overlay.append(this.loader);
    this.app.append(this.overlay);

    // Popover background
    this.popoverBackground = this.createElement("div", "popover-background");

    // Welcome Popover
    this.welcomeContainer = this.createElement("div", "popover");
    this.welcomeContainer.style.display = "none";
    this.welcomeTitle = this.createElement("div", "shortcut-title");
    this.welcomeTitle.textContent = "Welcome!";
    this.welcomeContent = this.createElement("div", "popover-content-welcome");
    this.welcomeContent.innerText = welcomeIntro;
    this.welcomeContinueContainer = this.createElement("div", "continue-popover-container");
    this.welcomeContinueButton = this.createElement("div", "continue-popover");
    this.welcomeContinueButton.id = "continue-welcome";
    this.welcomeContinueButton.classList.add("purple-background");
    this.welcomeContinueButton.textContent = "CONTINUE";
    this.welcomeContinueContainer.append(this.welcomeContinueButton);

    // Clone original SVG button
    this.welcomeCloseButtonSvg = closeSvg.cloneNode(true);

    // Create close button
    this.welcomeCloseButton = this.createElement("div", "popover-close");
    this.welcomeCloseButton.append(this.welcomeCloseButtonSvg);
    this.welcomeContainer.append(this.welcomeTitle, this.welcomeContent, this.welcomeContinueContainer, this.welcomeCloseButton);


    // Congratulations Popover
    this.congratulationsContainer = this.createElement("div", "popover");
    this.congratulationsContainer.style.display = "none";
    this.congratulationsTitle = this.createElement("div", "shortcut-title");
    this.congratulationsTitle.textContent = "Congratulations!";
    this.congratulationsContent = this.createElement("div", "welcome-popover-content");
    this.congratulationsContent.innerText = "You've completed all of the items that were due today.";
    this.congratulationsContinueContainer = this.createElement("div", "continue-popover-container");
    this.congratulationsContinueButton = this.createElement("div", "continue-popover");
    this.congratulationsContinueButton.id = "continue-congratulations";
    this.congratulationsContinueButton.classList.add("purple-background");
    this.congratulationsContinueButton.textContent = "FINISH";
    this.congratulationsContinueContainer.append(this.congratulationsContinueButton);

    // Clone original SVG button
    this.congratulationsCloseButtonSVg = closeSvg.cloneNode(true);

    // Create close button
    this.congratulationsCloseButton = this.createElement("div", "popover-close");
    this.congratulationsCloseButton.append(this.congratulationsCloseButtonSVg);

    this.congratulationsContainer.append(this.congratulationsTitle, this.congratulationsContent, this.congratulationsContinueContainer, this.congratulationsCloseButton);

    // Play audio on button press

    // Create audio icon
    this.svgAudio = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svgAudio.classList.add("audio-icon");
    this.svgAudio.id = "audio-icon-" + this.count;
    this.svgAudio.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    this.svgAudio.setAttribute("height", "20px");
    this.svgAudio.setAttribute("viewBox", "0 0 24 24");
    this.svgAudio.setAttribute("width", "20px");
    this.svgAudio.setAttribute("fill", "none");
    this.svgAudio.setAttribute("stroke", "#18093e");
    this.svgAudio.setAttribute("stroke-width", "2");

    this.svgAudioPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgAudioPath1.setAttribute("d", "M0 0h24v24H0z");
    this.svgAudioPath1.setAttribute("fill", "none");
    this.svgAudioPath1.setAttribute("stroke", "none");

    this.svgAudioPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgAudioPath2.setAttribute("d", "M15 8a5 5 0 0 1 0 8" );

    this.svgAudioPath3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgAudioPath3.setAttribute("d", "M17.7 5a9 9 0 0 1 0 14" );

    this.svgAudioPath4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgAudioPath4.setAttribute("d", "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" );

    this.svgAudio.append(this.svgAudioPath1, this.svgAudioPath2, this.svgAudioPath3, this.svgAudioPath4);
    this.content.append(this.svgAudio);
  
    // Append All Popovers
    this.app.append(this.popoverBackground, this.welcomeContainer, this.congratulationsContainer);

    this.svgAudioCtaArray = [];
    this.count = 1;
    this.slideCollection = [];
    this.slideArray = [];
    this.currentSlide = 1;

  } // End of constructor

  //
  createElement(el, clsName) {
    const elem = document.createElement(el);
    if (clsName) elem.classList.add(clsName);
    return elem;
  }

  $ = (n) => document.querySelector(n);


  // Display Pinyin

  displayPinyin(){
    if(this.showPinyin){
      this.pinyinTitle.style.display = "none";
      this.pinyin.style.display = "none";
      this.pinyinButton.classList.add("hidden");
      //this.pinyinButton.textContent = "pinyin";
    }
    else {
      this.pinyinTitle.style.display = "inline";
      this.pinyin.style.display = "inline";
      this.pinyinButton.classList.remove("hidden");
      //this.pinyinButton.textContent = "pinyin ✓";
    }
    this.showPinyin = !this.showPinyin;
  }

  addNextCard(cardsSet, isNew) {

    cardsSet.forEach((card, id) => {

    if(card != undefined){
      let nextCardWordOriginal;
      //let nextCardWordTranslation;
      //let nextCardWordSeparator;
      let newIcon;
      let audioValue = "";

      let nextCard = this.createElement("div", "word");
      nextCardWordOriginal = this.createElement("p", "word-original");
  
      let answer = this.createElement("p", "word-translation");
      answer.innerHTML = allSyllableMap[card].letter;
      answer.id = "word-translation-" + (id + 1);
      answer.style.opacity = 0;

      //let targetLanguage = this.createElement("p", "target-language");
      //targetLanguage.innerHTML = languageTitle;
      //targetLanguage.style.display = "none";

      //let englishLanguage = this.createElement("p", "english");
      //englishLanguage.innerHTML = "English";
      //englishLanguage.style.display = "none";

      if(isNew){
        newIcon = this.createElement("div", "new-icon");
        newIcon.textContent = "new";
        nextCard.append(newIcon);
      } 

      let nextCardOriginalContainer = this.createElement("div", "original-container");

      if(allSyllableMap[card].pinyin){
        let pinyin = this.createElement("p", "pinyin");
        pinyin.textContent = allSyllableMap[card].pinyin;
        nextCardWordOriginal.innerHTML = allSyllableMap[card].character;

        //let pinyinTitle = this.createElement("p", "pinyin-title");
        //if(language == "zh-CN") pinyinTitle.textContent = "pinyin"; 
        //else pinyinTitle.textContent = "hiragana";

        if(this.showPinyin){
          //pinyinTitle.style.display = "inline";
          pinyin.style.display = "inline";
        }

        else {
          //pinyinTitle.style.display = "none";
          pinyin.style.display = "none"; 
        }

        let pinyinIcon = this.createElement("p", "pinyin-icon");
        pinyinIcon.textContent = "show pinyin";

        nextCardOriginalContainer.append(nextCardWordOriginal, pinyin)
      }

      else {
        nextCardWordOriginal.textContent = allSyllableMap[card].character; 
        nextCardOriginalContainer.append(targetLanguage, nextCardWordOriginal);
      }
      
      nextCard.append(nextCardOriginalContainer, answer);
      
      let svgAudioCtaArray = [];

      let stringDefined = nextCardWordOriginal.innerHTML;

      /*
      // If definition exists
      if(allSyllableMap[card].definition){

        // Parse defined words and add span tags around them 
        allSyllableMap[card].definition.forEach(word => {
          let newWord = '<span>' + word.target + '</span>';
          stringDefined = stringDefined.replace(word.target, newWord);
        })

        nextCardWordOriginal.innerHTML = stringDefined;

        // Collect all span tags from string
        // Convert into array
        let spanCollection = nextCardWordOriginal.getElementsByTagName('span');
        let spanArray = [...spanCollection];


        // Create popover element
        let definitionPopover = this.createElement("div", "definition-popover");
        this.app.append(definitionPopover);

        // Go through all span tags and assign event listeners and populate
        spanArray.forEach((span, number) => {

          span.addEventListener("click", (event) => {

            // Reset popover content
            definitionPopover.innerHTML = '';

            // Anchor position of popover
            definitionPopover.style.bottom = "0";

            // Create generic close button
            let closeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            closeSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
            closeSvg.setAttribute("height", "24px");
            closeSvg.setAttribute("viewBox", "0 0 24 24");
            closeSvg.setAttribute("width", "24px");
            closeSvg.setAttribute("fill", "#2a2142");
            let closeSvgPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            closeSvgPath1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
            closeSvgPath1.setAttribute("fill", "none");
            let closeSvgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let closePath2d = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z";
            closeSvgPath2.setAttribute("d", closePath2d); //Set path's data
            closeSvg.append(closeSvgPath1, closeSvgPath2);


            // Clone original close button
            let definitionPopoverCloseButtonSvg = this.createElement("div", "definition-popover-close");
            definitionPopoverCloseButtonSvg.append(closeSvg);

            // On click reset position
            definitionPopoverCloseButtonSvg.addEventListener("click", (event) => {
              definitionPopover.style.bottom = "-40%";
             })

            // 
            let definitionPopoverTarget = this.createElement("div", "definition-popover-target");

            if(allSyllableMap[card].definition[number].infinitive){
              definitionPopoverTarget.innerHTML = allSyllableMap[card].definition[number].infinitive;
            }
            else {
              definitionPopoverTarget.innerHTML = allSyllableMap[card].definition[number].target; 
            }

            let definitionPopoverEnglish = this.createElement("div", "definition-popover-english");
             definitionPopoverEnglish.innerHTML = allSyllableMap[card].definition[number].english;


            if(allSyllableMap[card].definition[number].pinyin){
              let definitionPopoverPinyin = this.createElement("div", "definition-popover-pinyin");
              definitionPopoverPinyin.innerHTML = allSyllableMap[card].definition[number].pinyin;

              definitionPopover.append(definitionPopoverPinyin, definitionPopoverTarget, definitionPopoverEnglish, definitionPopoverCloseButtonSvg);
            }
            else {
              definitionPopover.append(definitionPopoverTarget, definitionPopoverEnglish, definitionPopoverCloseButtonSvg); 
            }                     
             

          });
        }) 

        this.slideArray = [...this.slideCollection];

      } */
    
      // Autoplay audio
      //this.playSpeech(allSyllableMap[card].character);

      let nextCardSlide = this.createElement("div", "slide");
      nextCardSlide.id = "" + (id + 1);
      nextCardSlide.append(nextCard);

      this.slideCollection.push(nextCardSlide);
      this.bodyContent.append(nextCardSlide);

    }

    this.count++;
    })
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }

  // Play audio
  bindPlayAudio(handler){
   this.svgAudio.addEventListener("click", (event) => {
    handler();
   })
  }


  bindDisplayNextCard(handler) {
    this.badButton.addEventListener("click", (event) => {
      handler();
    });
    this.goodButton.addEventListener("click", (event) => {
      handler();
    });

  }

  get _isLastPopover() {
    // Collect all .popover nodes
    let popoverCollection = document.querySelectorAll(".popover");

    // Convert collection into node
    // Convert nodes into display block/none state
    // Filter out block states
    let popoverArray = [...popoverCollection].map((popover) => popover.style.display).filter((display) => display == "block");

    // If popoverArray only has 1 block state, then there is only one popover left on the DOM
    return popoverArray.length;
  }

  displayButtons(boolean) {
    //console.log(this.answer);
    if (boolean == false) {
      //this.answer.style.opacity = 0;
      this.nextButton.style.display = "none";
      this.showButton.style.display = "block";
      //this.englishLanguage.style.display = 'none';

    } else {
      //this.answer.style.opacity = 1;
      //this.nextCard.style.height = "auto";  
      this.nextButton.style.display = "block";
      this.showButton.style.display = "none";
      //this.englishLanguage.style.display = 'inline';
      //this.nextCardWordSeparator.style.display = "block";

      //if(this.pinyin) this.pinyin.style.display = "inline";
    }
  }

  animateSlider(number) {

  }

  bindToggleVisibility(handler) {
    this.showButton.addEventListener("click", (event) => {
      let boolean = true;
      handler(boolean);
    });

    this.nextButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

  }

  bindProcessBadAnswer(handler) {
    this.badButton.addEventListener("click", (event) => {
      handler();
    });
  }

  bindProcessGoodAnswer(handler) {
    this.goodButton.addEventListener("click", (event) => {
      handler();
    });
  }


  displayCongratulationsPopover(boolean) {
    if (boolean == false) {
      this.congratulationsContainer.style.display = "none";

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none";
      }
    } else {
      this.congratulationsContainer.style.display = "block";

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block";
      }
    }
  }

  displayWelcomePopover(boolean) {
    if (boolean == false) {
      this.welcomeContainer.style.display = "none";

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none";
      }
    } else {
      this.welcomeContainer.style.display = "block";

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block";
      }
    }
  }

  bindDisplayWelcomePopover(handler) {
    this.welcomeCloseButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.welcomeContinueButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });
  }

  bindDisplayCongratulationsPopover(handler) {
    this.congratulationsCloseButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.congratulationsContinueButton.addEventListener("click", (event) => {
      return (window.location.href = "../");
    });
  }

  animateAudioIcon(){

    console.log('test');
    
    // Animate audio icon
    let audioIcon = this.svgAudio;
    
    // Add key frame animation
    audioIcon.classList.add("audio-icon-animation");
    
    // Remove key frame animation
    setTimeout(function() {
        audioIcon.classList.remove("audio-icon-animation");
    }, 150);
  }



  bindScroll(handler){
    let bodyContent = this.bodyContent;
    let slideCollection = this.slideCollection;

    // Setup isScrolling variable
    let isScrolling;

    this.bodyContent.addEventListener('scroll', function ( event ) {
      
      // Clear our timeout throughout the scroll
      window.clearTimeout( isScrolling );

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {

      // Run the callback
      console.log( 'Scrolling has stopped.' );

      handler(bodyContent, slideCollection);
      
      }, 500);

    }, false);

  }

  displayAnswer(element){
    console.log(element);
    let answer = document.getElementById("word-translation-" + element);
    console.log(answer);
    answer.style.opacity = 1;
  }

  bindShowAnswer(handler) {
    this.showButton.addEventListener("click", (event) => {
      handler();
    });
  }

  displayNext(id){
    id++;
    console.log('id:', id);
    let slide = document.getElementById(id);
    slide.scrollIntoView();
  }


  bindGoToNext(handler) {
    this.nextButton.addEventListener("click", (event) => {
      handler();
    });
  }
    
}
