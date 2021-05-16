// the timestamp is added to prevent javascript file from being cached
// example of result: <script defer="" src="js/Main.js?t=1620902504390" type="module">...
let mainScript = document.createElement('script');
mainScript.setAttribute('defer', '');
mainScript.setAttribute('src', "js/Main.js?t=" + new Date().getTime());
mainScript.setAttribute('type', 'module');
document.body.appendChild(mainScript);
