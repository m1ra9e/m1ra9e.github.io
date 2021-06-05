import Logo from "./Logo.js";
import SearchForm from "./SearchForm.js";

export default class Disguise {

    static NEW_TITLE_NAME = 'CLAN';

    static mask(isEnabled) {
        let logoElement = document.getElementById("logo");
        let infoElement = document.getElementById("info");

        if (isEnabled) {
            Disguise._hideContent(logoElement, infoElement);
        } else {
            Disguise._showContent(logoElement, infoElement);
        }
    }

    static _hideContent(logoElement, infoElement) {
        let searchElement = document.getElementById("search");
        let searchTextElement = document.getElementById("search-text");

        const logo = new Logo(logoElement, searchElement, searchTextElement);
        logo.activateListeningOfMouseClick();
        logo.activateListeningOfKeyPress();

        new SearchForm(infoElement, searchElement, searchTextElement, Disguise.NEW_TITLE_NAME)
            .activateListeningOfFormActions();
    }

    static _showContent(logoElement, infoElement) {
        // removes logoElement
        logoElement.outerHTML = "";
        // shows information block
        infoElement.hidden = false;
        // sets new text for the title
        document.title = Disguise.NEW_TITLE_NAME;
    }
}
