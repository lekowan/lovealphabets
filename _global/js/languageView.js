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

        // Go through languageContent array and display content
        languageContent.forEach((item, number) => {

            let homeLanguage = this.createElement("article", "home-language");
            let homeLanguageCard = this.createElement("div", "home-language-card");
            //homeLanguageCard.id = "home-language-card-" + (number + 1);
            let cardOverlay = this.createElement("div", "card-overlay");
            cardOverlay.style.opacity = 0;

            // Hover/tap overlay
            let chartCta = this.createElement("div", "home-cta");
            chartCta.classList.add("top-cta");
            chartCta.innerHTML = "See the characters →";
            let srsCta = this.createElement("div", "home-cta");
            srsCta.classList.add("bottom-cta");
            srsCta.innerHTML = "Launch SRS practice →";

            /*
            srsCta.addEventListener("click", function() {
                window.location.href = item.url; 
            });
            */

            cardOverlay.append(chartCta, srsCta);

            let homeLanguageIcon = this.createElement("span", "home-language-icon");
            homeLanguageIcon.innerHTML = item.icon;
            let headingContent = this.createElement("div", "heading-content");
            let languageHeading = this.createElement("div", "language-heading");
            languageHeading.innerHTML = item.title;
            let languageStatus = this.createElement("div", "language-status");

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


            homeLanguageCard.append(cardOverlay, homeLanguageIcon);
            headingContent.append(languageHeading, languageStatus);
            homeLanguage.append(homeLanguageCard, headingContent);
            this.home.append(homeLanguage);

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

    // Check if device if Mobile/Tablet or Desktop
    isMobileTablet() {
        let check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }


    displayCtas() {
        console.log("display");
        this._overlay[0].style.display = "block";
    }

    get _cards() {
        return document.querySelectorAll(".home-language-card");
    }

    get _overlay() {
        //console.log(document.querySelector(".card-overlay")[0]);
        return document.querySelector(".card-overlay");
    }

    bindDisplayCtas(handler) {

        this._cards.forEach((item, number) => {

            // If device is desktop
            if (!this.isMobileTablet == false) {

                // Add event listener on hover
                item.addEventListener('mouseover', event => {

                    // Fade in overlay
                    item.querySelector(".card-overlay").style.opacity = 1;

                    // Add event listener to top CTA
                    item.querySelector(".top-cta").addEventListener('click', event => {
                        // trigger popover
                    });

                    // Add event listener to bottom CTA
                    item.querySelector(".bottom-cta").addEventListener('click', event => {

                        // Get URL from languaeContent object
                        window.location.href = languageContent[number].url;
                    })
                })

                // Fade out on mouse out
                item.addEventListener('mouseout', event => {
                    item.querySelector(".card-overlay").style.opacity = 0;
                    // handler(); 
                })

            // If device is mobile       
            } else {

                // Add event listener on tap
                item.addEventListener('click', event => {

                    // Fade out all open overlays
                    let cardOverlayCollection = document.querySelectorAll(".card-overlay");
                    [...cardOverlayCollection].forEach(element => {
                        element.style.opacity = 0;
                    });

                    // Fade in this overlay
                    item.querySelector(".card-overlay").style.opacity = 1;

                    event.stopPropagation();

                    // Add event listener to top CTA
                    item.querySelector(".top-cta").addEventListener('click', topEvent => {
                        // trigger popover
                    });

                    // Add event listener to bottom CTA
                    //setTimeout(function() {
                        item.querySelector(".bottom-cta").addEventListener('click', bottomEvent => {

                            // Get URL from languaeContent object
                            window.location.href = languageContent[number].url;
                        })
                    //}, 500);

                })
            }
        })
    }

}