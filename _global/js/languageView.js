class View {
    constructor() {


        // Get today's date and end of day timestamp
        let now = new Date();
        let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        let endOfDay = startOfDay + (24 * 60 * 60 * 1000) - 1;

        this.app = this.$("#root");

        // Create content container
        this.content = this.createElement("div", "content");

        // Create body-content container
        this.homeContainer = this.createElement("div", "home-container");

        // Create header
        this.header = this.createElement("header", "main-background");
        this.header.classList.add("logo");
        this.header.classList.add("header");
        this.logo = this.createElement("logo", "top-nav");
        this.logoText = this.createElement("p", "logo-text");
        this.logoText.innerText = "love alphabets";
        this.logo.append(this.logoText);

        this.logo.addEventListener('click', event => {
            window.location.href = "../";
        });

        this.header.append(this.logo);

        // Create language header
        this.languageHeader = this.createElement("nav", "language-header");
        this.languageHeaderContainer = this.createElement("div", "language-header-container");
        this.languageTitle = this.createElement("h1", "language-title");
        this.languageTitle.innerText = languageTitle;
        this.languageGeoTitle = this.createElement("span", "language-geo-title");

        if (typeof languageGeo == 'undefined') {
            this.languageGeoTitle.innerText = "";
        } else {
            this.languageGeoTitle.innerText = languageGeo;
        }

        this.languageSub = this.createElement("p", "sub");
        this.languageSub.innerText = languageSub;
        this.languageHeaderContainer.append(this.languageGeoTitle, this.languageTitle, this.languageSub);
        this.languageHeader.append(this.languageHeaderContainer);

        // Create Main Section
        this.homeWrapper = this.createElement("section", "home-wrapper");
        this.home = this.createElement("div", "home");

        this.languageViewCtaArray = [];

        // Go through languageContent array and display content
        languageContent.forEach((item, number) => {

            let homeLanguage = this.createElement("article", "home-language");
            let homeLanguageCard = this.createElement("div", "home-language-card");

            let homeLanguageIcon = this.createElement("span", "home-language-icon");
            homeLanguageIcon.innerHTML = item.icon;

            let languageHeading = this.createElement("div", "language-heading");
            let languageHeadingTitle = this.createElement("span", "language-heading-title");
            languageHeadingTitle.innerHTML = item.title;

            let languageSubHeading = this.createElement("div", "language-subheading");
            languageSubHeading.innerHTML = item.sub;

            let languageInfo = this.createElement("div", "language-info");
            languageInfo.innerHTML = item.info;

            let languageButtonsBar = this.createElement("div", "language-button-bar");

            let languageCta = this.createElement("button", "language-cta");
            languageCta.innerHTML = "LAUNCH SRS";

            let languageViewChart = this.createElement("button", "language-view-chart-cta");
            languageViewChart.innerHTML = "PREVIEW";
            languageViewChart.id = item.chartName;

            // Push View Chart CTAs into array so they can be accessed later
            this.languageViewCtaArray.push(languageViewChart);

            let languageStatus = this.createElement("span", "language-status");

            let nextDate = JSON.parse(localStorage.getItem(item.localStorageKey + 'NextDate'));

            if (!nextDate) {
                languageStatus.innerHTML = "";
            } else if (nextDate <= endOfDay) {
                languageStatus.innerHTML = "due";
                languageStatus.classList.add("due");
            } else {
                languageStatus.innerHTML = "done";
                languageStatus.classList.add("done");
            }


            languageHeading.append(languageHeadingTitle, languageStatus);
            homeLanguageCard.append(homeLanguageIcon);
            languageButtonsBar.append(languageCta, languageViewChart, languageInfo);
            homeLanguage.append(homeLanguageCard, languageHeading, languageSubHeading, languageButtonsBar);
            this.home.append(homeLanguage);

            languageCta.addEventListener("click", function() {
                window.location.href = item.url;
            });

        });

        // Popover background
        this.popoverBackground = this.createElement("div", "popover-background");
        this.popoverBackground.style.display = "none";

        // Characters chart popover
        this.chartContainer = this.createElement("div", "chart-popover");
        this.chartContainer.style.display = "none";

        

        // Create generic close button
        let closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
        closeSvg.setAttribute("height", "24px");
        closeSvg.setAttribute("viewBox", "0 0 24 24");
        closeSvg.setAttribute("width", "24px");
        closeSvg.setAttribute("fill", "#2a2142");
        let closeSvgPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closeSvgPath1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
        closeSvgPath1.setAttribute("fill", "none");
        let closeSvgPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let closePath2d = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        closeSvgPath2.setAttribute("d", closePath2d); //Set path's data
        closeSvg.append(closeSvgPath1, closeSvgPath2);

        // Clone generic SVG button
        this.closeSvg = closeSvg.cloneNode(true);
        this.closeButton = this.createElement("div", "chart-close");

        this.homeWrapper.append(this.home)

        // Append all elements
        this.homeContainer.append(this.header, this.languageHeader, this.homeWrapper, this.popoverBackground, this.chartContainer);
        this.app.append(this.homeContainer);

    } // End of constructor

    //
    createElement(el, clsName) {
        const elem = document.createElement(el);
        if (clsName) elem.classList.add(clsName);
        return elem;
    }

    $ = (n) => document.querySelector(n);

    // Generate character chart items
    addCharacterChart(chart,chartTitle) {

        this.chartContainer.innerHTML = "";
        // Create close button

        this.closeButton.append(this.closeSvg);
        this.chartTitle = this.createElement("div", "chart-title");
        this.chartTitle.innerHTML = chartTitle;

        this.chartContainer.append(this.chartTitle, this.closeButton);

        this.chartPopoverContent = this.createElement("div", "chart-popover-content"); 
        this.chartWrapper = this.createElement("div", "chart-wrapper"); 
        this.category = this.createElement("div", "category"); 

        chart.forEach(subChart => {
            let subChartTitle = this.createElement("div", "character-title"); 
            console.log(subChart.subtitle);
            subChartTitle.innerHTML = subChart.subtitle;
            this.category.append(subChartTitle);

            let characterColumn = this.createElement("div", "character-content-11-column");
            console.log(subChart.content);

            let charMap = subChart.content;
            console.log(charMap);
            for(let item in charMap){

                let charCard = this.createElement("div", "character-card");
                let top = this.createElement("div", "top");
                top.innerHTML = item;
                let bottom = this.createElement("div", "bottom");
                bottom.innerHTML = charMap[item].letter;

                charCard.append(top, bottom);
                characterColumn.append(charCard);
            }

            this.category.append(characterColumn);
        })

        this.chartWrapper.append(this.category);
        this.chartPopoverContent.append(this.chartWrapper);
        this.chartContainer.append(this.chartPopoverContent);

        /*
        let popover = this.createElement("div", "chart-popover");
        let popoverTitle = this.createElement("div", "chart-title");
        popoverTitle.innerHTML = "title";

        array.forEach(item => {
            console.log(item);
        })

        popover.append(popoverTitle);
        */
    }

    displayChart(boolean) {
        if (boolean == false) {
            this.popoverBackground.style.display = "none";
            this.chartContainer.style.display = "none";

        } else {
            console.log("show chart");
            this.popoverBackground.style.display = "block";
            this.chartContainer.style.display = "block";        }
    }

    bindShowChart(handler) {

        console.log(this.languageViewCtaArray);
        let boolean;

        this.languageViewCtaArray.forEach(cta => {

            console.log(cta);

            cta.addEventListener('click', event => {

                boolean = true;
                console.log(boolean);

                if (event.target.id == cta.id) {
                    console.log(cta.id)
                    let chart = cta.id
                    handler(boolean, chart);
                }
            });
        })

        this.closeButton.addEventListener('click', event => {
            boolean = false;
            handler(boolean, "");
        })

    }

}