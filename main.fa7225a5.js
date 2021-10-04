// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = void 0;
var string = "\n/* \u753B\u4E00\u4E2A\u8138\u8D85\u5927\u7684\u80D6\u7EA2\u9E1F\uFF0C\u79FB\u52A8\u7AEF\u8138\u53EF\u4EE5\u5927\u5F97\u8D85\u51FA\u5C4F\u5E55 */\n\n:root {\n    --background: #64c2ed;\n    --body: #d7202d;\n    --mark: #a81725;\n    --beak: #fcba1e;\n    --chest: #e9caae;\n    --white: #ffffff;\n    --black: #000000;\n}\n\n#bird {\n    background: var(--background);\n}\n\n.head {\n    position: absolute;\n    width: 420px;\n    height: 405px;\n    top: 52%;\n    left: 50%;\n    transform: translate(-42%, -50%);\n    border-radius: 100% 100% 100% 100% / 100% 110% 80% 100%;\n    background: var(--body);\n    border: 10px solid var(--black);\n}\n\n.eyebrow {\n    position: absolute;\n    width: 27px;\n    border-top: 130px solid var(--black);\n    border-bottom: 1px solid transparent;\n    border-left: 14px solid transparent;\n    border-right: 0;\n    z-index: 2;\n}\n\n\n.eyebrow.eyebrow-left {\n    top: 87px;\n    left: 200px;\n    transform: scaleX(-1) rotate(80deg);\n}\n\n\n.eyebrow.eyebrow-right {\n    top: 87px;\n    left: 324px;\n    transform: rotate(80deg);\n}\n\n\n.eye {\n    position: absolute;\n    width: 98px;\n    height: 86px;\n    border-radius: 65% 0 40% 100% / 100% 100% 64% 100%;\n    background: var(--white);\n    border: 6px solid var(--black);\n    z-index: 1;\n}\n\n\n.eye.eye-left {\n    top: 164px;\n    left: 174px;\n}\n\n\n.eye.eye-right {\n    top: 158px;\n    left: 282px;\n    transform: scaleX(-1) rotate(5deg);\n}\n\n\n.eye::after {\n    content: \"\";\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    background: var(--black);\n    border-radius: 50%;\n    left: 50px;\n    top: 18px;\n}\n\n\n.beak-left {\n    position: absolute;\n    height: 116px;\n    width: 126px;\n    border: 6px solid;\n    border-color: transparent transparent transparent var(--black);\n    border-radius: 35% 45% 13% 20% / 75% 100% 100% 75%;\n    z-index: 3;\n    top: 228px;\n    left: 223px;\n    transform: rotate(44deg);\n}\n\n\n.beak-left::after {\n    content: \"\";\n    position: absolute;\n    height: 82px;\n    border: 6px solid;\n    border-color: transparent transparent transparent var(--black);\n    top: 58px;\n    left: 46px;\n    transform: rotate(-90deg);\n    border-radius: 40%;\n}\n\n\n.beak-right {\n    position: absolute;\n    height: 118px;\n    width: 126px;\n    border: 6px solid;\n    transform: rotate(-50deg);\n    border-color: transparent var(--black) transparent transparent;\n    z-index: 3;\n    top: 227px;\n    left: 219px;\n    border-radius: 35% 45% 13% 20% / 75% 100% 100% 75%;\n}\n\n\n.beak-right::after {\n    content: \"\";\n    position: absolute;\n    height: 90px;\n    border: 6px solid;\n    border-color: transparent var(--black) transparent transparent;\n    top: 47px;\n    left: 56px;\n    transform: rotate(105deg);\n    border-radius: 30%;\n}\n\n\n.beak-bottom {\n    position: absolute;\n    height: 134px;\n    width: 186px;\n    border: 6px solid;\n    border-color: transparent transparent var(--black) transparent;\n    z-index: 3;\n    top: 152px;\n    left: 192px;\n    border-radius: 26%;\n}\n\n.beak-background-one {\n    position: absolute;\n    width: 96px;\n    height: 98px;\n    background: var(--beak);\n    top: 233px;\n    left: 231px;\n    z-index: 2;\n    transform: rotate(44deg);\n}\n\n\n.beak-background-one::after {\n    content: '';\n    position: absolute;\n    width: 106px;\n    height: 118px;\n    background: var(--beak);\n    top: -22px;\n    left: 4px;\n    z-index: 2;\n    transform: rotate(-95deg);\n    border-radius: 0 46% 0 120% / 55%;\n}\n\n.mark-one {\n    position: absolute;\n    width: 72px;\n    height: 88px;\n    background: var(--mark);\n    top: 189px;\n    left: 150px;\n    border-radius: 50%;\n    transform: rotate(10deg);\n}\n\n\n.mark-one::after {\n    content: '';\n    position: absolute;\n    width: 72px;\n    height: 88px;\n    background: var(--mark);\n    top: -39px;\n    left: 182px;\n    border-radius: 50%;\n    transform: rotate(-10deg);\n}\n\n\n.mark-two {\n    position: absolute;\n    width: 38px;\n    height: 70px;\n    background: var(--mark);\n    top: 214px;\n    left: 104px;\n    border-radius: 50%;\n}\n\n\n.mark-three {\n    position: absolute;\n    width: 30px;\n    height: 40px;\n    background: var(--mark);\n    top: 256px;\n    left: 58px;\n    border-radius: 50%;\n}\n\n\n.tail-one {\n    position: absolute;\n    width: 18px;\n    border-bottom: 68px solid var(--black);\n    border-top: 1px solid transparent;\n    border-left: 24px solid transparent;\n    border-right: 0;\n    top: 96px;\n    left: -37px;\n    transform: rotate(138deg);\n    z-index: -1;\n}\n\n\n.tail-two {\n    position: absolute;\n    width: 14px;\n    border-bottom: 110px solid var(--black);\n    border-top: 1px solid transparent;\n    border-left: 32px solid transparent;\n    border-right: 0;\n    top: 96px;\n    left: -76px;\n    transform: rotate(100deg);\n    z-index: -1;\n}\n\n\n.tail-three {\n    position: absolute;\n    width: 6px;\n    border-bottom: 58px solid var(--black);\n    border-top: 1px solid transparent;\n    border-left: 20px solid transparent;\n    border-right: 0;\n    top: 160px;\n    left: -44px;\n    transform: rotate(48deg);\n    z-index: -1;\n}\n\n.crest {\n    position: absolute;\n    width: 130px;\n    height: 50px;\n    border-radius: 9% 60% 10% 20% / 50% 194% 17% 100%;\n    background: var(--body);\n    left: 140px;\n    top: -37px;\n    border-right: 10px solid var(--black);\n    border-top: 10px solid var(--black);\n    transform: rotate(-10deg);\n}\n\n\n.crest:after {\n    content: \"\";\n    position: absolute;\n    width: 135px;\n    height: 56px;\n    border-radius: 50% 50% 50% 50%/50% 50% 50% 38%;\n    background-color: var(--body);\n    left: -25px;\n    top: -73px;\n    border: 10px solid var(--black);\n    transform: rotate(-138deg);\n}\n\n\n.crest:before {\n    content: \"\";\n    position: absolute;\n    width: 158px;\n    height: 45px;\n    border-radius: 50%;\n    background-color: var(--body);\n    left: -84px;\n    top: -34px;\n    border: 10px solid;\n    border-color: var(--black) var(--black) var(--black) transparent;\n    transform: rotate(-167deg);\n}\n\n.hide-chest-lines {\n    position: absolute;\n    width: 87px;\n    height: 45px;\n    top: -11px;\n    left: 134px;\n    background-color: var(--body);\n    z-index: 2;\n    transform: rotate(8deg);\n}\n\n.hide-chest-lines:after {\n    content: \"\";\n    position: absolute;\n    width: 67px;\n    height: 34px;\n    top: -44px;\n    left: 53px;\n    background-color: var(--body);\n    z-index: 2;\n    transform: rotate(39deg);\n}\n\n@media (max-width: 960px) {\n    .eyebrow {\n        width: 16px;\n        border-top: 78px solid var(--black);\n        border-bottom: 1px solid transparent;\n        border-left: 8px solid transparent;\n    }\n    .eyebrow.eyebrow-left {\n        top: 52px;\n        left: 120px;\n    }\n    .eyebrow.eyebrow-right {\n        top: 50px;\n        left: 194px;\n    }\n    .eye {\n        width: 59px;\n        height: 52px;\n    }\n    .eye.eye-left {\n        top: 98px;\n        left: 104px;\n    }\n    .eye.eye-right {\n        top: 95px;\n        left: 169px;\n    }\n    .eye::after {\n        width: 21px;\n        height: 21px;\n        left: 30px;\n        top: 11px;\n    }\n    .beak-left {\n        height: 67px;\n        width: 76px;\n        top: 137px;\n        left: 134px;\n    }\n    .beak-left::after {\n        height: 49px;\n        top: 32px;\n        left: 28px;\n    }\n    .beak-right {\n        height: 71px;\n        width: 76px;\n        top: 136px;\n        left: 130px;\n    }\n    .beak-right::after {\n        height: 54px;\n        top: 28px;\n        left: 31px;\n    }\n    .beak-bottom {\n        height: 80px;\n        width: 112px;\n        top: 90px;\n        left: 115px;\n    }\n    .beak-background-one {\n        width: 58px;\n        height: 59px;\n        top: 143px;\n        left: 139px;\n    }\n    .beak-background-one::after {\n        width: 64px;\n        height: 71px;\n        top: -13px;\n        left: 4px;\n        border-radius: 0 0 0 200% / 58%;\n    }\n    .mark-one {\n        width: 43px;\n        height: 53px;\n        top: 113px;\n        left: 90px;\n    }\n    .mark-one::after {\n        width: 43px;\n        height: 53px;\n        top: -23px;\n        left: 110px;\n    }\n    .mark-two {\n        width: 23px;\n        height: 42px;\n        top: 128px;\n        left: 62px;\n    }\n    .mark-three {\n        width: 18px;\n        height: 24px;\n        top: 154px;\n        left: 35px;\n    }\n    .tail-one {\n        width: 11px;\n        border-bottom: 41px solid var(--black);\n        border-top: 1px solid transparent;\n        border-left: 14px solid transparent;\n        border-right: 0;\n        top: 58px;\n        left: -22px;\n    }\n    .tail-two {\n        width: 8px;\n        border-bottom: 44px solid var(--black);\n        border-top: 1px solid transparent;\n        border-left: 19px solid transparent;\n        border-right: 0;\n        top: 69px;\n        left: -41px;\n    }\n    .tail-three {\n        width: 6px;\n        border-bottom: 35px solid var(--black);\n        border-top: 1px solid transparent;\n        border-left: 12px solid transparent;\n        border-right: 0;\n        top: 96px;\n        left: -28px;\n    }\n    .crest {\n        width: 78px;\n        height: 30px;\n        left: 84px;\n        top: -22px;\n        border-right: 6px solid var(--black);\n        border-top: 6px solid var(--black);\n    }\n    .hide-chest-lines {\n        width: 52px;\n        height: 27px;\n        top: -3px;\n        left: 90px;\n    }\n    .hide-chest-lines:after {\n        width: 40px;\n        height: 30px;\n        top: -24px;\n        left: 24px;\n    }\n    .crest:after {\n        width: 81px;\n        height: 34px;\n        left: -15px;\n        top: -44px;\n    }\n    .crest:before {\n        width: 95px;\n        height: 27px;\n        left: -50px;\n        top: -20px;\n    }\n    .head {\n        width: 252px;\n        height: 243px;\n    }\n}\n\n";
exports.string = string;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var player = {
  n: 1,
  id: undefined,
  speedCase: 2,
  time: 100,
  ui: {
    htmlStyle: document.getElementById("htmlStyle"),
    text: document.getElementById("text"),
    speedStatus: document.getElementById("speedStatus")
  },
  viewText: "",
  init: function init() {
    player.ui.htmlStyle.innerHTML = _css.string.substr(0, player.n);
    player.ui.text.innerText = _css.string.substr(0, player.n);
    player.id = setInterval(player.run, player.time);
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSpeed": "changeSpeed"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    if (_css.string[player.n] === "\n") {
      player.viewText += '<br>';
    } else if (_css.string[player.n] === " ") {
      player.viewText += "&nbsp;";
    } else {
      player.viewText += _css.string[player.n];
    }

    player.n += 1;

    if (player.n > _css.string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.htmlStyle.innerHTML = _css.string.substr(0, player.n);
    player.ui.text.innerHTML = player.viewText;
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
  },
  play: function play() {
    if (!player.id) {
      player.id = setInterval(player.run, player.time);
    }
  },
  pause: function pause() {
    window.clearInterval(player.id);
    player.id = undefined;
  },
  selectCase: function selectCase() {
    player.speedCase += 1;

    if (player.speedCase > 4) {
      player.speedCase = 1;
    }

    switch (player.speedCase) {
      case 1:
        player.time = 100;
        player.ui.speedStatus.innerText = "0.5×";
        break;

      case 2:
        player.time = 50;
        player.ui.speedStatus.innerText = "1.0×";
        break;

      case 3:
        player.time = 25;
        player.ui.speedStatus.innerText = "1.5×";
        break;

      case 4:
        player.time = 0;
        player.ui.speedStatus.innerText = "2.0×";
        break;

      default:
        return 0;
    }
  },
  changeSpeed: function changeSpeed() {
    player.selectCase();
    player.pause();
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.fa7225a5.js.map