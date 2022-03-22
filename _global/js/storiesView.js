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

    // If language is Mandarin or Japanese
      if(language == "zh-CN" || language == "ja-JP" ){

        // Create pinyin button
        this.pinyinButton = this.createElement("div", "pinyin-button");
        
        if(language == "zh-CN") this.pinyinButton.textContent = "pinyin";
        else this.pinyinButton.textContent = "kana";

        this.showPinyin = true;

        // Create no space button
        this.noSpaceButton = this.createElement("div", "no-space-button");
        this.noSpaceButton.textContent = "spaces";
        this.noSpaceButton.classList.add("hidden");

        this.showNoSpaceButton = true;

        this.progress.append(this.pinyinButton, this.noSpaceButton);
    }

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
    this.nextButton = this.createElement("button");
    this.nextButton.id = "next-button";
    this.nextButton.innerHTML = "NEXT";

    // Append buttons to button area
    this.goodBadButton.append(this.badButton, this.goodButton);
    this.buttonArea.append(this.goodBadButton, this.showButton);
 
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

    // Definition popover
    this.definitionPopover = this.createElement("div", "definition-popover");
    
    // Anchor position of popover
    this.definitionPopover.style.bottom = "-70%";

    // Clone generic close button
    this.definitionCloseSvg = closeSvg.cloneNode(true);
 
    // Create definition popover content
    this.definitionCloseButton = this.createElement("div", "definition-popover-close");
    this.definitionCloseButton.append(this.definitionCloseSvg);
    this.definitionPopoverTarget = this.createElement("div", "definition-popover-target");
    this.definitionPopoverEnglish = this.createElement("div", "definition-popover-english");
    this.definitionPopoverPinyin = this.createElement("div", "definition-popover-pinyin");
    this.definitionPopover.append(this.definitionPopoverPinyin, this.definitionPopoverTarget, this.definitionPopoverEnglish, this.definitionCloseButton); 
  
    // Append All Popovers
    this.app.append(this.popoverBackground, this.welcomeContainer, this.congratulationsContainer, this.definitionPopover);

    this.svgAudioCtaArray = [];
    this.count = 1;
    this.slideCollection = [];
    this.slideArray = [];
    this.currentSlide = 1;
    this.spanArray = [];
    this.originalWordNoSpaceArray = [];
    this.originalWordSpaceArray = [];
    this.pinyinWordNoSpaceArrray = [];
    this.pinyinWordSpaceArrray = [];

  } // End of constructor

  //
  createElement(el, clsName) {
    const elem = document.createElement(el);
    if (clsName) elem.classList.add(clsName);
    return elem;
  }

  $ = (n) => document.querySelector(n);


  addNextCard(cardsSet, isNew) {

    cardsSet.forEach((card, id) => {

    if(card != undefined){
      let nextCardWordOriginal;
      let newIcon;
      let audioValue = "";

      let nextCard = this.createElement("div", "word");

      // Insert original word
      nextCardWordOriginal = this.createElement("p", "word-original");
      nextCardWordOriginal.innerHTML = allSyllableMap[card].character;

      let answer = this.createElement("p", "word-translation");
      answer.innerHTML = allSyllableMap[card].letter;
      answer.id = "word-translation-" + (id + 1);
      answer.style.opacity = 0;

      if(isNew){
        newIcon = this.createElement("div", "new-icon");
        newIcon.textContent = "new";
        nextCard.append(newIcon);
      } 

      let nextCardOriginalContainer = this.createElement("div", "original-container");

      if(allSyllableMap[card].pinyin){
        let pinyin = this.createElement("p", "pinyin");
        pinyin.textContent = allSyllableMap[card].pinyin;
        
        this.pinyinWordNoSpaceArrray.push(allSyllableMap[card].pinyin);
        this.pinyinWordSpaceArrray.push(allSyllableMap[card].pinyinSpace);

        if(this.showPinyin){
          pinyin.style.display = "inline";
        }

        else {
          pinyin.style.display = "none"; 
        }

        let pinyinIcon = this.createElement("p", "pinyin-icon");
        pinyinIcon.textContent = "show pinyin";

        nextCardOriginalContainer.append(nextCardWordOriginal, pinyin);
      }

      else {
        nextCardOriginalContainer.append(targetLanguage, nextCardWordOriginal);
      }
      
      nextCard.append(nextCardOriginalContainer, answer);
      
      let svgAudioCtaArray = [];

      let stringDefined = nextCardWordOriginal.innerHTML;

  
      // If definition exists
      if(allSyllableMap[card].definition){

        let stringDefinedSpaces = allSyllableMap[card].definition;
        //let stringDefinedSpaces = nextCardWordOriginalSpaces.innerHTML;
        let definitionArray = allSyllableMap[card].definition.split(' ');

        // Parse defined words and add span tags around them 
        
        let newArr = [];

        definitionArray.forEach(word => 
          dictionary[word] ? newArr.push('<span class=\'definition\'>' + word + '</span>') : newArr.push(word)
        );

        this.originalWordSpaceArray.push(newArr.join(' '));
        this.originalWordNoSpaceArray.push(newArr.join(''));

        nextCardWordOriginal.innerHTML = newArr.join('');

      }

      // Collect all span tags from string
      // Convert into array
      let spanCollection = nextCardWordOriginal.getElementsByTagName('span');
      let spanArray = [...spanCollection]; 

      // Add event listeners to all span tags
      this.showDefinition(spanArray);


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
    return element;
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

    if (boolean == false) {
      this.goodBadButton.style.bottom = "-80px";
      this.showButton.style.display = "block";
    } 

    else {
      this.goodBadButton.style.bottom = 0;
      this.showButton.style.display = "none";
    }
  }


  bindToggleVisibility(handler) {
    this.showButton.addEventListener("click", (event) => {
      let boolean = true;
      handler(boolean);
    });

    this.goodButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.badButton.addEventListener("click", (event) => {
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

      handler(bodyContent, slideCollection);
      
      }, 150);

    }, false);

  }

  displayAnswer(element){
    let answer = document.getElementById("word-translation-" + element);
    answer.style.opacity = 1;
  }

  bindShowAnswer(handler) {
    this.showButton.addEventListener("click", (event) => {
      handler();
    });
  }

  showDefinition(spanArray) {

    spanArray.forEach(span => {
      span.addEventListener("click", (event) => {
        let word = span.innerHTML;
        this.definitionPopover.style.bottom = "0%";
        this.definitionPopoverTarget.innerHTML = word;
        this.definitionPopoverEnglish.innerHTML = dictionary[word].english;
      });

      this.definitionCloseButton.addEventListener("click", (event) => {
        this.definitionPopover.style.bottom = "-70%";
      });
    }) 
  }


  displayNext(id){
    id++;
    let slide = document.getElementById(id);
    slide.scrollIntoView();
  }


  bindGoToNext(handler) {
    this.goodButton.addEventListener("click", (event) => {
      handler();
    });
    this.badButton.addEventListener("click", (event) => {
      handler();
    });
  }

  displayPinyin(array,boolean){

    if(boolean == false){
      this.pinyinButton.classList.add("hidden");
      array.forEach(item => item.style.display = "none");
    }

    else {

      this.pinyinButton.classList.remove("hidden");
      array.forEach(item => item.style.display = "block");

    }
  }

  bindDisplayPinyin(handler){
    
    this.pinyinButton.addEventListener("click", (event) => {
      
      let pinyinCollection = document.getElementsByClassName("pinyin");
      let pinyinArray = [...pinyinCollection];
      
      this.showPinyin = !this.showPinyin;
    
      handler(pinyinArray, this.showPinyin);
    
    });
  }
    
  displayNoSpace(boolean){

    //console.log(this.pinyinWordSpaceArrray);
    //console.log(this.pinyinWordNoSpaceArrray);

    let noSpaceCollection = document.getElementsByClassName("word-original");
    let noSpaceArray = [...noSpaceCollection];

    let noSpacePinyinCollection = document.getElementsByClassName("pinyin");
    let noSpacePinyinArray = [...noSpacePinyinCollection];

    if(boolean == true){

      this.noSpaceButton.classList.add("hidden");

      // Loop through all word-original elements
      noSpaceArray.forEach((item, number) => {
      
        item.innerHTML = this.originalWordNoSpaceArray[number];
            
        let noSpaceItemCollection = item.getElementsByClassName("definition");
        let noSpaceItemArray = [...noSpaceItemCollection];
      
        //console.log(noSpaceItemArray);
        this.showDefinition(noSpaceItemArray);

      });


      // Loop through all pinyin elements
      // Replace all innerHTML with No Space version
      noSpacePinyinArray.forEach((item, number) => {

        item.innerHTML = this.pinyinWordNoSpaceArrray[number];
        console.log(item.innerHTML);

      })

    }

    else {

      this.noSpaceButton.classList.remove("hidden");
      
      // Loop through all word-original elements
      noSpaceArray.forEach((item, number) => {

        item.innerHTML = this.originalWordSpaceArray[number];
        
        let spaceItemCollection = item.getElementsByClassName("definition");
        let spaceItemArray = [...spaceItemCollection];
        this.showDefinition(spaceItemArray);

      });

      // Loop through all pinyin elements
      // Replace all innerHTML with space version  
      noSpacePinyinArray.forEach((item, number) => {

          item.innerHTML = this.pinyinWordSpaceArrray[number];
          //console.log(item.innerHTML);

      })
    }

  }

  bindDisplayNoSpace(handler){
    
    this.noSpaceButton.addEventListener("click", (event) => {
      this.showNoSpaceButton = !this.showNoSpaceButton;
     
      handler(this.showNoSpaceButton);
    });
  }


}
