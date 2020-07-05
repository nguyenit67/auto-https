var lbplugin_event_opt = {
  extension_enable: true,
  dict_type: 2,
  dbclk_event: { trigger: "none", enable: true, display: 1 },
  select_event: { trigger: "none", enable: true, display: 1 }
};

let callbackFun = code => Function("", `
  ${code}
  lbDictPlugin.init(lbplugin_event_opt);
`).call();

let proxyurl = "https://cors-anywhere.herokuapp.com/";
proxyurl = "";

let url =
  "https://stc-laban.zdn.vn/dictionary/js/plugin/lbdictplugin.min.js?" + Date.now() % 1e4;

fetch(proxyurl + url)
  .then(response => response.text())
  .then(callbackFun)
  .catch(error => console.log(error));
