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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/Acrom/Acrom-Light.woff":[["Acrom-Light.68ac2d43.woff","fonts/Acrom/Acrom-Light.woff"],"fonts/Acrom/Acrom-Light.woff"],"./../fonts/Acrom/Acrom-Light.woff2":[["Acrom-Light.494b6d45.woff2","fonts/Acrom/Acrom-Light.woff2"],"fonts/Acrom/Acrom-Light.woff2"],"./../fonts/Acrom/Acrom-Regular.woff":[["Acrom-Regular.96326574.woff","fonts/Acrom/Acrom-Regular.woff"],"fonts/Acrom/Acrom-Regular.woff"],"./../fonts/Acrom/Acrom-Regular.woff2":[["Acrom-Regular.c8780340.woff2","fonts/Acrom/Acrom-Regular.woff2"],"fonts/Acrom/Acrom-Regular.woff2"],"./../fonts/Acrom/Acrom-Medium.woff":[["Acrom-Medium.333c9898.woff","fonts/Acrom/Acrom-Medium.woff"],"fonts/Acrom/Acrom-Medium.woff"],"./../fonts/Acrom/Acrom-Bold.woff":[["Acrom-Bold.3700b40e.woff","fonts/Acrom/Acrom-Bold.woff"],"fonts/Acrom/Acrom-Bold.woff"],"./../fonts/Acrom/Acrom-Bold.woff2":[["Acrom-Bold.d618a077.woff2","fonts/Acrom/Acrom-Bold.woff2"],"fonts/Acrom/Acrom-Bold.woff2"],"./../fonts/Acrom/Acrom-ExtraBold.woff":[["Acrom-ExtraBold.5a836c4e.woff","fonts/Acrom/Acrom-ExtraBold.woff"],"fonts/Acrom/Acrom-ExtraBold.woff"],"./../fonts/Acrom/Acrom-ExtraBold.woff2":[["Acrom-ExtraBold.ff500640.woff2","fonts/Acrom/Acrom-ExtraBold.woff2"],"fonts/Acrom/Acrom-ExtraBold.woff2"],"./../images/emoji/what-1.png":[["what-1.bfd8716b.png","images/emoji/what-1.png"],"images/emoji/what-1.png"],"./../images/emoji/what-2.png":[["what-2.dc1a4ae9.png","images/emoji/what-2.png"],"images/emoji/what-2.png"],"./../images/emoji/what-3.png":[["what-3.5504b525.png","images/emoji/what-3.png"],"images/emoji/what-3.png"],"./../images/emoji/profit-icon.png":[["profit-icon.231bca81.png","images/emoji/profit-icon.png"],"images/emoji/profit-icon.png"],"./../images/icon/profit-1.svg":[["profit-1.f51f4d52.svg","images/icon/profit-1.svg"],"images/icon/profit-1.svg"],"./../images/icon/profit-2.svg":[["profit-2.db7d3fae.svg","images/icon/profit-2.svg"],"images/icon/profit-2.svg"],"./../images/icon/profit-3.svg":[["profit-3.f2385c8e.svg","images/icon/profit-3.svg"],"images/icon/profit-3.svg"],"./../images/icon/profit-4.svg":[["profit-4.468e0533.svg","images/icon/profit-4.svg"],"images/icon/profit-4.svg"],"./../images/emoji/offer-icon.png":[["offer-icon.9b4a1bfd.png","images/emoji/offer-icon.png"],"images/emoji/offer-icon.png"],"./../images/emoji/why-1.png":[["why-1.427fda62.png","images/emoji/why-1.png"],"images/emoji/why-1.png"],"./../images/emoji/why-2.png":[["why-2.dab48463.png","images/emoji/why-2.png"],"images/emoji/why-2.png"],"./../images/emoji/why-3.png":[["why-3.c0997f92.png","images/emoji/why-3.png"],"images/emoji/why-3.png"],"./../images/emoji/why-4.png":[["why-4.03ba2591.png","images/emoji/why-4.png"],"images/emoji/why-4.png"],"./../images/emoji/pains-icon.png":[["pains-icon.67334fbc.png","images/emoji/pains-icon.png"],"images/emoji/pains-icon.png"],"./../images/icon/pains-icon.svg":[["pains-icon.c2e21532.svg","images/icon/pains-icon.svg"],"images/icon/pains-icon.svg"],"./../images/pattern.svg":[["pattern.8f7299fd.svg","images/pattern.svg"],"images/pattern.svg"],"./../images/emoji/1.png":[["1.c1564dcd.png","images/emoji/1.png"],"images/emoji/1.png"],"./../images/emoji/1em.png":[["1em.adf5eb9c.png","images/emoji/1em.png"],"images/emoji/1em.png"],"./../images/emoji/2.png":[["2.65469337.png","images/emoji/2.png"],"images/emoji/2.png"],"./../images/emoji/2em.png":[["2em.0c856c75.png","images/emoji/2em.png"],"images/emoji/2em.png"],"./../images/emoji/3.png":[["3.4c8569c5.png","images/emoji/3.png"],"images/emoji/3.png"],"./../images/emoji/3em.png":[["3em.5ed06f3e.png","images/emoji/3em.png"],"images/emoji/3em.png"],"./../images/emoji/4.png":[["4.63426397.png","images/emoji/4.png"],"images/emoji/4.png"],"./../images/emoji/4em.png":[["4em.a5401a31.png","images/emoji/4em.png"],"images/emoji/4em.png"],"./../images/emoji/5.png":[["5.554af18d.png","images/emoji/5.png"],"images/emoji/5.png"],"./../images/emoji/rocket.png":[["rocket.4aa21986.png","images/emoji/rocket.png"],"images/emoji/rocket.png"],"./../images/emoji/6.png":[["6.502db5b8.png","images/emoji/6.png"],"images/emoji/6.png"],"./../images/emoji/6em.png":[["6em.8c2c2bcd.png","images/emoji/6em.png"],"images/emoji/6em.png"],"./../images/lable-tech.svg":[["lable-tech.74774408.svg","images/lable-tech.svg"],"images/lable-tech.svg"],"./../images/lable-soft.svg":[["lable-soft.08a5d2db.svg","images/lable-soft.svg"],"images/lable-soft.svg"],"./../images/lable-hr.svg":[["lable-hr.42478661.svg","images/lable-hr.svg"],"images/lable-hr.svg"],"./../images/path-white-bg.svg":[["path-white-bg.94d223dc.svg","images/path-white-bg.svg"],"images/path-white-bg.svg"],"./../images/path-orange-bg.svg":[["path-orange-bg.c70ad6e6.svg","images/path-orange-bg.svg"],"images/path-orange-bg.svg"],"./../images/icon/arrow.svg":[["arrow.9a5119e9.svg","images/icon/arrow.svg"],"images/icon/arrow.svg"],"./../images/icon/arrow-dots.svg":[["arrow-dots.f59c6f2d.svg","images/icon/arrow-dots.svg"],"images/icon/arrow-dots.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60442" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map