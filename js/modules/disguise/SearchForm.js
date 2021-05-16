export default class SearchForm {

    constructor(searchElement, searchFormElement, searchTextElement,
                searchBtnElement, emptyInfoElement, infoElement, newTitleName) {
        this.searchElement = searchElement;
        this.searchFormElement = searchFormElement;
        this.searchTextElement = searchTextElement;
        this.searchBtnElement = searchBtnElement;
        this.emptyInfoElement = emptyInfoElement;
        this.infoElement = infoElement;
        this.newTitleName = newTitleName;
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
        // gets the value of the current date
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        let dd = String(today.getDate()).padStart(2, '0');
        today = yyyy + '.' + mm + '.' + dd;

        // compares the value of the current date with the value entered in the input field
        if (today == this.searchTextElement.value.trim()) {
            this._showInfoElement();
            // resets the value entered in the input field
            this.searchTextElement.value = "";
        } else {
            this._showEmptyInfoElement();
        }
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
