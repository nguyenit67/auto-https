var lbplugin_event_opt = {
  extension_enable: true,
  dict_type: 1,
  dbclk_event: { trigger: "none", enable: true, display: 1 },
  select_event: { trigger: "none", enable: true, display: 1 }
};
function loadScript(t, e) {
  var n = document.createElement("script");
  (n.type = "text/javascript"),
    n.readyState
      ? (n.onreadystatechange = function() {
          ("loaded" === n.readyState || "complete" === n.readyState) &&
            ((n.onreadystatechange = null), e("From `OnReadyStateChange` with ❤"));
        })
      : (n.onload = function() {
          e("From `OnLoad` with ❤");
        }),
    (n.src = t),
    document.getElementsByTagName("head")[0].appendChild(n);
}
setTimeout(function() {
  null == document.getElementById("lbdictex_find_popup") &&
    loadScript(
      "https://stc-laban.zdn.vn/dictionary/js/plugin/lbdictplugin.min.js?" +
        (Date.now() % 1e4),
      function(msg) {
        console.log("msg");
        let tryTillDie = setInterval(() => {
          try {
            lbDictPlugin.init(lbplugin_event_opt);
            clearInterval(tryTillDie);
          } catch {
            console.log("Oh no :<");
          }
        }, 1e3);
      }
    );
}, 1e3);
