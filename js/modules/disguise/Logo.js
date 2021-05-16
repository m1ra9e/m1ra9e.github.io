export default class Logo {

    ENTER_CODE = "Enter";
    ENTER_NUMPAD_CODE = "NumpadEnter";
    ENTER_KEY = "Enter";
    ENTER_CHAR_CODE = 13;
    ENTER_KEY_CODE = 13;
    ENTER_WHICH = 13;

    SPACE_CODE = "Space";
    SPACE_KEY = " ";
    SPACE_CHAR_CODE = 32;
    SPACE_KEY_CODE = 32;
    SPACE_WHICH = 32;

    constructor(logoElement, searchElement, searchTextElement) {
        this.logoElement = logoElement;
        this.searchElement = searchElement;
        this.searchTextElement = searchTextElement;
    }

    activateListeningOfMouseClick() {
        this.logoElement.onclick = () => this._showSearchDivElement();
    }

    activateListeningOfKeyPress() {
        this._setFocusOnLogo();

        this.logoElement.onkeydown = (keyboardEvent) => {
            if (this._isEnterOrSpace(keyboardEvent)) {
                // sets to element 'hover' style
                this.logoElement.style.background = 'url(img/logo_cat_eyes.png) 0 0 no-repeat';
            }
        }

        this.logoElement.onkeyup = (keyboardEvent) => {
            if (this._isEnterOrSpace(keyboardEvent)) {
                // sets to element 'active' style
                this.logoElement.style.background = 'url(img/logo_cat_eyes_active.png) 0 0 no-repeat';

                setTimeout(() => this._showSearchDivElement(), 100);
            }
        }
    }

    _setFocusOnLogo() {
        this.logoElement.focus();
    }

    _isEnterOrSpace(keyboardEvent) {
        let code = keyboardEvent.code;
        let key = keyboardEvent.key;
        let keyCode = keyboardEvent.keyCode;
        let charCode = keyboardEvent.charCode;
        let which = keyboardEvent.which;
        return this.ENTER_CODE === code || this.SPACE_CODE === code || this.ENTER_NUMPAD_CODE === code
            || this.ENTER_KEY == key || this.SPACE_KEY == key
            || this.ENTER_KEY_CODE == keyCode || this.SPACE_KEY_CODE == keyCode
            || this.ENTER_CHAR_CODE == charCode || this.SPACE_CHAR_CODE == charCode
            || this.ENTER_WHICH == which || this.SPACE_WHICH == which
    }

    _showSearchDivElement() {
        // removes logoElement
        this.logoElement.outerHTML = "";

        // shows search form
        this.searchElement.hidden = false;

        // set focus to the input field
        this.searchTextElement.focus();
    }
}
