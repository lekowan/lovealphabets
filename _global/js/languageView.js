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
        
        if(typeof languageGeo == 'undefined' ){
            this.languageGeoTitle.innerText = "";
        }
        else {
            this.languageGeoTitle.innerText = languageGeo;
        }

        this.languageSub = this.createElement("p", "sub");
        this.languageSub.innerText = languageSub;
        this.languageHeaderContainer.append(this.languageGeoTitle, this.languageTitle, this.languageSub);
        this.languageHeader.append(this.languageHeaderContainer);

        // Create Main Section
        this.homeWrapper = this.createElement("section", "home-wrapper");
        this.home = this.createElement("div", "home");

        // Go through languageContent array and display content
        languageContent.forEach((item, number) => {

            let homeLanguage = this.createElement("article", "home-language");
            let homeLanguageCard = this.createElement("div", "home-language-card");
            
            let homeLanguageIcon = this.createElement("span", "home-language-icon");
            homeLanguageIcon.innerHTML = item.icon;
            
            let languageHeading = this.createElement("div", "language-heading");
            languageHeading.innerHTML = item.title;

            let languageSubHeading = this.createElement("div", "language-subheading");
            languageSubHeading.innerHTML = item.sub;

            let languageInfo = this.createElement("div", "language-info");
            languageInfo.innerHTML = item.info;

            let languageButtonsBar = this.createElement("div", "language-button-bar");
           
            let languageCta = this.createElement("button", "language-cta");
            languageCta.innerHTML = "LAUNCH SRS";

            let languageViewChart = this.createElement("button", "language-view-chart-cta");
            languageViewChart.innerHTML = "PREVIEW";

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


            languageHeading.append(languageStatus);
            homeLanguageCard.append(homeLanguageIcon);
            languageButtonsBar.append(languageCta,languageViewChart, languageInfo);
            homeLanguage.append(homeLanguageCard, languageHeading,languageSubHeading, languageButtonsBar);
            this.home.append(homeLanguage);

            languageCta.addEventListener("click", function() { 
                window.location.href = item.url 
            });
        });

        this.homeWrapper.append(this.home)

        // Append All Popovers
        this.homeContainer.append(this.header, this.languageHeader, this.homeWrapper);
        this.app.append(this.homeContainer);

        /*
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
        */

    } // End of constructor

    //
    createElement(el, clsName) {
        const elem = document.createElement(el);
        if (clsName) elem.classList.add(clsName);
        return elem;
    }

    $ = (n) => document.querySelector(n);





}