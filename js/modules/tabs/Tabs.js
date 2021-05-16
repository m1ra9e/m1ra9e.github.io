export default class Tabs {

    static activateTabMechanism() {
        let tabLinkElements = document.getElementsByClassName("tab-link");
        let tabContentElements = document.getElementsByClassName("tab-content");
        let tabCloseElements = document.getElementsByClassName("tab-close");

        for (let i = 0; i < tabLinkElements.length; i++) {
            tabLinkElements[i].onclick = (event) => Tabs._openTab(event, tabLinkElements, tabContentElements);
        }

        for (let i = 0; i < tabCloseElements.length; i++) {
            tabCloseElements[i].onclick = (event) => Tabs._closeTab(event);
        }
    }

    static _openTab(event, tabLinkElements, tabContentElements) {
        let tabName = event.target.firstChild.nodeValue;

        // Get all elements with class="tab-content" and hide them
        for (let i = 0; i < tabContentElements.length; i++) {
            tabContentElements[i].style.display = "none";
        }

        // Get all elements with class="tab-links" and remove the class "active"
        for (let i = 0; i < tabLinkElements.length; i++) {
            tabLinkElements[i].className = tabLinkElements[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    static _closeTab(event) {
        event.target.parentElement.style.display = 'none';
    }
}