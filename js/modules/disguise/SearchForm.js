export default class SearchForm {

    constructor(infoElement, searchElement, searchTextElement, newTitleName) {
        this.infoElement = infoElement;
        this.searchElement = searchElement;
        this.searchTextElement = searchTextElement;
        this.newTitleName = newTitleName;

        this.searchFormElement = document.getElementById("search-form");
        this.searchBtnElement = document.getElementById("search-btn");
        this.emptyInfoElement = document.getElementById("empty-info");
    }

    activateListeningOfFormActions() {
        this.searchFormElement.onsubmit = () => this._searchFormSubmitAction();
        this.searchBtnElement.onclick = () => this._checkSearchRequest();
    }

    _searchFormSubmitAction() {
        this._checkSearchRequest();

        // returning 'false' disables the standard submit-action for the search form
        return false;
    }

    _checkSearchRequest() {
        // compares the value of the current date with the value entered in the input field
        if (this._getCurrentDate() == this.searchTextElement.value.trim()) {
            this._showInfoElement();
            // resets the value entered in the input field
            this.searchTextElement.value = "";
        } else {
            this._showEmptyInfoElement();
        }
    }

    _getCurrentDate() {
        // gets the value of the current date
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        let dd = String(today.getDate()).padStart(2, '0');
        return yyyy + '.' + mm + '.' + dd;
    }

    _showEmptyInfoElement() {
        // changes the position of the search form
        this.searchElement.style.top = 'auto';
        this.searchElement.style.marginTop = '10px';
        this.searchElement.style.marginBottom = '10px';

        // shows the search form
        this.searchElement.hidden = false;

        // sets focus to the input field
        this.searchTextElement.focus();

        // shows an empty information block
        this.emptyInfoElement.hidden = false;

        // fills the current date hint
        let currentDateHintElement = document.getElementById("current-date-hint");
        let currentDate = this._getCurrentDate();
        if ('textContent' in currentDateHintElement) {
            currentDateHintElement.textContent = currentDate;
        } else {
            currentDateHintElement.innerText = currentDate;
        }
    }

    _showInfoElement() {
        // hides the search form
        this.searchElement.hidden = true;
        // hides an empty information block
        this.emptyInfoElement.hidden = true;
        // shows information block
        this.infoElement.hidden = false;
        // sets new text for the title
        document.title = this.newTitleName;
    }
}
