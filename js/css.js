// the timestamp is added to prevent css file from being cached
// example of result: <link href="css/style.css?t=1621090880373" rel="stylesheet" type="text/css">

function addStyle(fileName, timestamp) {
    let style = document.createElement('link');
    style.setAttribute('href', "css/" + fileName + "?t=" + timestamp);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    document.head.appendChild(style);
}

let timestamp = new Date().getTime();

addStyle("common.css", timestamp);
addStyle("disguise.css", timestamp);
addStyle("creeping_line.css", timestamp);
addStyle("info.css", timestamp);
addStyle("tabs.css", timestamp);