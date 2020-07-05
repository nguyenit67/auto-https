let callbackFun = code => Function("", `
  ${code}
  lbDictPlugin.init(lbplugin_event_opt);
`).call();

let proxyurl = "https://cors-anywhere.herokuapp.com/";

let url = "https://stc-laban.zdn.vn/dictionary/js/plugin/lbdictplugin.min.js?" + Date.now() % 1e4;

fetch(proxyurl + url)
.then(response =>  response.text())
.then(callbackFun)
.catch(error => console.log(error));


