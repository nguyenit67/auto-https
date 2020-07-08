const WIDTH = 350;
const HEIGHT = 420;

const h = {
  s: "https://dict.laban.vn",
  w: WIDTH,
  h: HEIGHT,
  hl: 1,
  th: 3
};

document.addEventListener("DOMContentLoaded", event => {
  var lbDictPluginFrame = new function () {
    var t = function (t, e) {
        var n = new XMLHttpRequest;
        n.onreadystatechange = function () {
          4 == n.readyState && 200 == n.status && e(n.responseText)
        }, n.open("GET", t, !0), n.send(null)
      },
      e = function (t) {
        var e = "";
        for (var n in t) e += ("" != e ? "&" : "") + n + "=" + encodeURIComponent(t[n]);
        return e
      },
      n = function (n) {
        var i = {
          action: 1,
          type: 1,
          url: window.location.href,
          w: n.w,
          h: n.h,
          th: n.th,
          hl: n.hl
        };
        t("https://laban.vn/stats/dictplg?" + e(i), function () {})
      },
      i = function (t) {
        var e = document.createElement("div");
        e.id = "lbdict_frame_view", e.innerHTML = '<iframe style="border:0; padding:0;width:' + t.w + "px;height:" + t.h + 'px;" src="' + t.s + "/widget/widget?w=" + t.w + "&h=" + t.h + "&hl=" + t.hl + "&th=" + t.th + '"></iframe>';
        var i = document.getElementById("lbdict_plugin_frame");
        i.parentNode.insertBefore(e, i), n(t)
      };
    this.init = i;
  };

  lbDictPluginFrame.init(h);
  console.log("done! :>");
});