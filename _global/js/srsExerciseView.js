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
        this.svg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
        this.svg.setAttribute("height", "24px");
        this.svg.setAttribute("viewBox", "0 0 24 24");
        this.svg.setAttribute("width", "24px");
        this.svg.setAttribute("fill", "#2a2142");
        this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.path1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
        this.path1.setAttribute("fill", "none");
        this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let path2d = "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        this.path2.setAttribute("d", path2d); //Set path's data
        this.svg.append(this.path1, this.path2);
        this.settings.append(this.svg);
        this.app.append(this.settings);

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