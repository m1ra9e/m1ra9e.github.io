import Logo from "./Logo.js";
import SearchForm from "./SearchForm.js";

export default class Disguise {

    static mask(isEnabled) {
        let logoElement = document.getElementById("logo");
        let searchElement = document.getElementById("search");
        let searchFormElement = document.getElementById("search-form");
        let searchTextElement = document.getElementById("search-text");
        let searchBtnElement = document.getElementById("search-btn");
        let emptyInfoElement = document.getElementById("empty-info");
        let infoElement = document.getElementById("info");
        let newTitleName = 'CLAN';

        if (isEnabled) {
            Disguise._hideContent(logoElement, searchElement, searchFormElement,
                searchTextElement, searchBtnElement, emptyInfoElement, infoElement, newTitleName);
        } else {
            Disguise._showContent(logoElement, infoElement, newTitleName);
        }
    }

    static _hideContent(logoElement, searchElement, searchFormElement, searchTextElement,
                        searchBtnElement, emptyInfoElement, infoElement, newTitleName) {
        const logo = new Logo(logoElement, searchElement, searchTextElement);
        logo.activateListeningOfMouseClick();
        logo.activateListeningOfKeyPress();

        const searchForm = new SearchForm(searchElement, searchFormElement, searchTextElement,
            searchBtnElement, emptyInfoElement, infoElement, newTitleName);
        searchForm.activateListeningOfFormActions();
    }

    static _showContent(logoElement, infoElement, newTitleName) {
        // removes logoElement
        logoElement.outerHTML = "";
        // shows information block
        infoElement.hidden = false;
        // sets new text for the title
        document.title = newTitleName;
    }
}
