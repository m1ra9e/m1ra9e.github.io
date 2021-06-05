var IS_EDGE_BROWSER_DETECT_TOO = true;

var userAgent = window.navigator.userAgent;
var isIE;
if (IS_EDGE_BROWSER_DETECT_TOO) {
    isIE = /MSIE|Trident|Edge\//.test(userAgent);
} else {
    isIE = /MSIE|Trident/.test(userAgent);
}

if (isIE) {
    // hides bodyElement
    document.getElementsByTagName("body")[0].style.display = "none";

    // shows confirm window with message
    var newLine = "\r\n";
    var browser = "Internet Explorer";
    if (IS_EDGE_BROWSER_DETECT_TOO) {
        browser += " and Microsoft Edge";
    }
    var msg = "Hello!"
        + newLine
        + newLine + "Browser " + browser + " is not supported."
        + newLine
        + newLine + "Please, use another browser, for example:"
        + newLine + "Mozilla Firefox, Opera, Google Chrome."
        + newLine
        + newLine + "If you click [Ok] you would be redirected to the [google.com]."
        + newLine + "[Cancel] will close this message.";
    if (window.confirm(msg)) {
        window.location.href = 'https://www.google.com';
    }
}
