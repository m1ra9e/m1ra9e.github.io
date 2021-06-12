// the timestamp is added to prevent css file from being cached
// example of result: <link href="css/style.css?t=1621090880373" rel="stylesheet" type="text/css">

function addStyle(fileName, timestamp, cssDeviceTypeFolder) {
    let style = document.createElement('link');
    style.setAttribute('href', "css/" + cssDeviceTypeFolder + "/" + fileName + "?t=" + timestamp);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    document.head.appendChild(style);
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent);
}

let timestamp = new Date().getTime();
let cssDeviceTypeFolder = isMobileDevice() ? "mobile" : "pc";

addStyle("common.css", timestamp, cssDeviceTypeFolder);
addStyle("disguise.css", timestamp, cssDeviceTypeFolder);
addStyle("creeping_line.css", timestamp, cssDeviceTypeFolder);
addStyle("info.css", timestamp, cssDeviceTypeFolder);
addStyle("tabs.css", timestamp, cssDeviceTypeFolder);
addStyle("side_elements.css", timestamp, cssDeviceTypeFolder);
