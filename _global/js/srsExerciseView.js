class View {
    constructor() {
        this.app = this.$("#root");

        // Create content container
        this.content = this.createElement("div", "content");

        // Create body-content container
        this.bodyContent = this.createElement("div", "body-content");

        // Create container container
        this.container = this.createElement("div", "container");

        // Create header
        this.header = this.createElement("div", "header");
        this.header.classList.add("pink-background");

        // Create close button
        this.closeButton = this.createElement("div", "close-button");
        this.closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.closeSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
        this.closeSvg.setAttribute("height", "24px");
        this.closeSvg.setAttribute("viewBox", "0 0 24 24");
        this.closeSvg.setAttribute("width", "24px");
        this.closeSvg.setAttribute("fill", "#2a2142");
        this.closeSvgPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.closeSvgPath1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
        this.closeSvgPath1.setAttribute("fill", "none");
        this.closeSvgPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let closePath2d = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        this.closeSvgPath2.setAttribute("d", closePath2d); //Set path's data
        this.closeSvg.append(this.closeSvgPath1, this.closeSvgPath2);
        this.closeButton.append(this.closeSvg);

        this.closeButton.addEventListener('click', event => {
            return window.location.href = "../";
        });

        // Create SRS practice header title
        this.languagePractice = this.createElement("p", "language-practice");
        this.languagePractice.textContent = "SRS Practice";

        // Append close button + title to header
        this.header.append(this.languagePractice, this.closeButton);

        // Create slider container
        this.slider = this.createElement("div", "slider");

        // Create slides container and append
        this.slides = this.createElement("div", "slides");
        this.slider.append(this.slides);

        // Create button area
        this.buttonArea = this.createElement("div", "button-area");

        // Create Good button
        this.goodButton = this.createElement("button", "good");
        this.goodButton.innerHTML = "GOOD";
        this.goodButton.style.display = "none"

        // Create Bad button
        this.badButton = this.createElement("button", "bad");
        this.badButton.innerHTML = "BAD";
        this.badButton.style.display = "none";

        // Create Show button
        this.showButton = this.createElement("button", "pink-background");
        this.showButton.id = "show-button"
        this.showButton.innerHTML = "SHOW";

        // Append buttons to button area
        this.buttonArea.append(this.badButton, this.goodButton, this.showButton);
        this.container.append(this.slider);
        this.bodyContent.append(this.container);

        // Create word div
        this.answer = this.createElement("div", "show-answer");
        this.answer.style.display = "none";

        // Append the title, form, and todo list to the content div
        this.content.append(this.header, this.bodyContent, this.buttonArea, this.answer);

        // Append content div to app
        this.app.append(this.content);

        // Create setting button
        this.settings = this.createElement("div", "settings");
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.style.overflow = "visible";
        this.svg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
        this.svg.setAttribute("height", "16px");
        this.svg.setAttribute("viewBox", "0 0 16 16");
        this.svg.setAttribute("width", "16px");
        this.svg.setAttribute("fill", "#2a2142");
        this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //this.path1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
        //this.path1.setAttribute("fill", "none");
        this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let path2d = "M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
        this.path2.setAttribute("d", path2d); //Set path's data
        this.svg.append(this.path2);
        this.settings.append(this.svg);
        this.app.append(this.settings);

/*
<svg class="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" 
d=""></path></svg> */


        // Create counters
        this.counter = this.createElement("div", "counter");
        this.newItemsCounter = this.createElement("div");
        this.newItemsCounter.id = "new-items";
        this.revisionItemsCounter = this.createElement("div");
        this.revisionItemsCounter.id = "revision-items";
        this.counter.append(this.newItemsCounter, this.revisionItemsCounter);
        this.app.append(this.counter);

        // Loader
        this.overlay = this.createElement("div")
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
        //this.welcomeContainer.style.display = "block";
        this.welcomeTitle = this.createElement("div", "shortcut-title");
        this.welcomeTitle.textContent = "Welcome!";
        this.welcomeContent = this.createElement("div", "popover-content");
        this.welcomeContent.innerText = welcomeIntro;
        this.welcomeContinueContainer = this.createElement("div", "continue-popover-container");
        this.welcomeContinueButton = this.createElement("div", "continue-popover");
        this.welcomeContinueButton.id = "continue-welcome";
        this.welcomeContinueButton.classList.add("pink-background");
        this.welcomeContinueButton.textContent = "CONTINUE";
        this.welcomeContinueContainer.append(this.welcomeContinueButton);
        this.welcomeCloseButton = this.createElement("div", "popover-close");
        this.welcomeCloseButton.textContent = "x";
        this.welcomeContainer.append(this.welcomeTitle, this.welcomeContent, this.welcomeContinueContainer, this.welcomeCloseButton);

        // New Items Popover
        this.newItemsContainer = this.createElement("div", "popover");
        this.newItemsTitle = this.createElement("div", "shortcut-title");
        this.newItemsTitle.textContent = "New characters settings";
        this.newItemsContent = this.createElement("div", "popover-content");
        this.newItemsContent.classList.add("popover-content-center");
        this.newItemsContentText = this.createElement("div", "popover-content-text");
        this.newItemsContentText.innerHTML = "How many new characters do you want to learn everyday?"
        this.newItemsContinueContainer = this.createElement("div", "continue-popover-container");
        this.newItemsContinueButton = this.createElement("div", "continue-popover");
        this.newItemsContinueButton.id = "continue-new-items";
        this.newItemsContinueButton.classList.add("pink-background");
        this.newItemsContinueButton.textContent = "CONTINUE";
        this.newItemsContinueContainer.append(this.newItemsContinueButton);
        this.newItemsCloseButton = this.createElement("div", "popover-close");
        this.newItemsCloseButton.textContent = "x";

        // The form, with a [type="text"] input, and a submit button
        this.newItemsForm = this.createElement("form", "new-items-form");

        // Input
        this.input = this.createElement("input", "new-items-input");
        this.input.type = "text";
        this.input.placeholder = "5";
        this.input.name = "todo";

        // Submit button
        //this.submitButton = this.createElement("button");
        //this.submitButton.textContent = "Submit";

        // Append the input and submit button to the form
        this.newItemsForm.append(this.input);
        this.newItemsContent.append(this.newItemsContentText, this.newItemsForm );

        this.newItemsContainer.append(this.newItemsTitle, this.newItemsContent, this.newItemsContinueContainer, this.newItemsCloseButton);

        // Today's Items Popover
        this.todayContainer = this.createElement("div", "popover");
        //this.todayContainer.style.display = "block";
        this.todayTitle = this.createElement("div", "shortcut-title");
        this.todayTitle.textContent = "Today's items";
        this.todayContent = this.createElement("div", "popover-content");
        this.todayWelcomeCharacter = this.createElement("div", "welcome-character");
        this.todayContinueContainer = this.createElement("div", "continue-popover-container");
        this.todayContinueButton = this.createElement("div", "continue-popover");
        this.todayContinueButton.id = "continue-new-items";
        this.todayContinueButton.classList.add("pink-background");
        this.todayContinueButton.textContent = "CONTINUE";
        this.todayContinueContainer.append(this.todayContinueButton);
        this.todayCloseButton = this.createElement("div", "popover-close");
        this.todayCloseButton.textContent = "x";

        // Append containes
        this.todayContent.append(this.todayWelcomeCharacter);
        this.todayContainer.append(this.todayTitle, this.todayContent, this.todayContinueContainer, this.todayCloseButton);

        // Congratulations Popover
        this.congratulationsContainer = this.createElement("div", "popover");
        this.congratulationsContainer.style.display = "none";
        this.congratulationsTitle = this.createElement("div", "shortcut-title");
        this.congratulationsTitle.textContent = "Congratulations!";
        this.congratulationsContent = this.createElement("div", "popover-content");
        this.congratulationsContent.innerText = "Congratulations! You've completed all items for today.";
        this.congratulationsContinueContainer = this.createElement("div", "continue-popover-container");
        this.congratulationsContinueButton = this.createElement("div", "continue-popover");
        this.congratulationsContinueButton.id = "continue-congratulations";
        this.congratulationsContinueButton.classList.add("pink-background");
        this.congratulationsContinueButton.textContent = "FINISH";
        this.congratulationsContinueContainer.append(this.congratulationsContinueButton);
        this.congratulationsCloseButton = this.createElement("div", "popover-close");
        this.congratulationsCloseButton.textContent = "x";
        this.congratulationsContainer.append(this.congratulationsTitle, this.congratulationsContent, this.congratulationsContinueContainer, this.congratulationsCloseButton);


        // Append All Popovers
        this.app.append(this.popoverBackground, this.todayContainer, this.newItemsContainer, this.welcomeContainer, this.congratulationsContainer);

        console.log(this._isLastPopover);

    } // End of constructor

    //
    createElement(el, clsName) {
        const elem = document.createElement(el);
        if (clsName) elem.classList.add(clsName);
        return elem;
    }

    $ = (n) => document.querySelector(n);


    // Generate Today's Items cards and add into Today's Item popover
    addTodaysCards(array) {

        this.todayWelcomeCharacter.innerHTML = "";

        array.forEach(item => {
            let card = this.createElement("div", "today-character-card");
            let cardTop = this.createElement("div", "top");
            cardTop.innerHTML = item;
            let cardBottom = this.createElement("div", "bottom");
            cardBottom.innerHTML = item.romanize();
            card.append(cardTop, cardBottom);
            this.todayWelcomeCharacter.append(card);
        })
    }

    addNextCard(card) {

        console.log(exerciseType);

        let nextCard;

        if (exerciseType == "character") {
            nextCard = this.createElement("div", "character");
        }

        if (exerciseType == "vocabulary") {
            nextCard = this.createElement("div", "word");
            //grammarInfo = this.createElement("div", "grammar");
            //grammarInfo.textContent = grammar;
            //nextCard.append(grammarInfo);
        }

        nextCard.textContent = card;
        let nextCardSlide = this.createElement("div", "slide")

        nextCardSlide.append(nextCard)
        this.slides.append(nextCardSlide);
    }

    bindDisplayNextCard(handler) {
        this.badButton.addEventListener('click', event => {
            handler();
        });
        this.goodButton.addEventListener('click', event => {
            handler();
        })
    }

    get _number() {
        return this.input.value;
    }

    get _isLastPopover() {
        // Collect all .popover nodes
        let popoverCollection = document.querySelectorAll('.popover');

        // Convert collection into node
        // Convert nodes into display block/none state
        // Filter out block states
        let popoverArray = [...popoverCollection].map(popover => popover.style.display)
            .filter(display => display == "block");

        // If popoverArray only has 1 block state, then there is only one popover left on the DOM
        console.log(popoverArray);
        return popoverArray.length;
    }

    _resetInput() {
        this.input.value = "";
    }

    bindChangeNumber(handler) {
        this.newItemsContinueButton.addEventListener('click', event => {
            event.preventDefault();

            if (this._number) {
                handler(this._number);
                // this._resetInput;
            }
        })
    }

    displayNewItemsCount(item) {
        console.log(item);
        let _number = JSON.parse(localStorage.getItem(localStorageKey + 'Number'));
        if (_number) {
            this.newItemsCounter.style.display = "block";
        } else {
            this.newItemsCounter.style.display = "none";

        }

        this.newItemsCounter.innerHTML = "NEW: " + item;
    }

    displayRevisionItemsCount(item) {
        let _number = JSON.parse(localStorage.getItem(localStorageKey + 'Number'));
        if (_number) {
            this.revisionItemsCounter.style.display = "block";
        } else {
            this.revisionItemsCounter.style.display = "none";
        }
        this.revisionItemsCounter.innerHTML = "REVISION: " + item;
    }

    displayInitialWord(item) {
        this.word.innerHTML = item;
    }

    displayAnswer(item) {
        this.answer.innerHTML = item;
    }

    bindIncrementTracker(handler) {
        this.goodButton.addEventListener('click', event => {
            handler();
        })
        this.badButton.addEventListener('click', event => {
            handler();
        })
    }

    displayButtons(boolean) {
        if (boolean == false) {
            this.badButton.style.display = "none";
            this.goodButton.style.display = "none";
            this.answer.style.display = "none";
            this.showButton.style.display = "block";
        } else {
            this.badButton.style.display = "block";
            this.goodButton.style.display = "block";
            this.answer.style.display = "block";
            this.showButton.style.display = "none";
        }
    }

    animateSlider(number) {
        // Slide next slide in
        this.slider.style.transform = "translate(" + number * -100 + "vw)";
    }

    bindToggleVisibility(handler) {
        this.showButton.addEventListener('click', event => {
            let boolean = true;
            handler(boolean);
        });

        this.goodButton.addEventListener('click', event => {
            let boolean = false;
            handler(boolean);
        });

        this.badButton.addEventListener('click', event => {
            let boolean = false;
            handler(boolean);
        });
    }


    bindProcessBadAnswer(handler) {
        this.badButton.addEventListener('click', event => {
            handler();
        })
    }

    bindProcessGoodAnswer(handler) {
        this.goodButton.addEventListener('click', event => {
            handler();
        })
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

            //console.log(this._isLastPopover);
        }
    }

    displayNewItemsPopover(boolean) {
        if (boolean == false) {
            this.newItemsContainer.style.display = "none";

            if (this._isLastPopover == 0) {
                this.popoverBackground.style.display = "none";
            }

        } else {
            this.newItemsContainer.style.display = "block";

            if (this._isLastPopover == 1) {
                this.popoverBackground.style.display = "block";
            }

            let _number = JSON.parse(localStorage.getItem(localStorageKey + 'Number'));
            this.input.value = _number || "";

        }

        //console.log(this._isLastPopover);
    }

    displayTodaysItemsPopover(boolean) {
        if (boolean == false) {
            this.todayContainer.style.display = "none";

            if (this._isLastPopover == 0) {
                this.popoverBackground.style.display = "none";
            }

        } else {
            this.todayContainer.style.display = "block";

            if (this._isLastPopover == 1) {
                this.popoverBackground.style.display = "block";
            }
        }
    }


    bindDisplayWelcomePopover(handler) {
        this.welcomeCloseButton.addEventListener('click', event => {
            let boolean = false;
            console.log("clicked");
            handler(boolean);
        })

        this.welcomeContinueButton.addEventListener('click', event => {
            let boolean = false;
            console.log("clicked");
            handler(boolean);
        })

    }

    bindDisplayTodaysItemsPopover(handler) {
        this.todayCloseButton.addEventListener('click', event => {
            let boolean = false;
            console.log("clicked");
            handler(boolean);
        })

        this.todayContinueButton.addEventListener('click', event => {
            let boolean = false;
            console.log("clicked");
            handler(boolean);
        })

    }

    bindDisplayCongratulationsPopover(handler) {
        this.congratulationsCloseButton.addEventListener('click', event => {
            let boolean = false;
            handler(boolean);
        })

        this.congratulationsContinueButton.addEventListener('click', event => {
            //let boolean = false;
            //handler(boolean);
            return window.location.href = "../";
        })

    }

    bindDisplayNewItemsPopover(handler) {
        this.newItemsCloseButton.addEventListener('click', event => {
            let boolean = false;
            if(this._number){
                handler(boolean);
            }
        })

        this.newItemsContinueButton.addEventListener('click', event => {
            let boolean = false;
            console.log("clicked");
            
            let newNum = this._number;
            console.log(newNum);
            this.displayNewItemsCount(newNum);

            if(this._number){
                handler(boolean, newNum);
            }
        })

        this.settings.addEventListener('click', event => {
            let boolean = true;
            handler(boolean);
        })


    }


}