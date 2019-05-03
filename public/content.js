/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ext/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ext/content.js":
/*!************************!*\
  !*** ./ext/content.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vim_1 = __webpack_require__(/*! !raw-loader!./keymap/vim */ "./node_modules/raw-loader/dist/cjs.js!./ext/keymap/vim.js");

var emacs_1 = __webpack_require__(/*! !raw-loader!./keymap/emacs */ "./node_modules/raw-loader/dist/cjs.js!./ext/keymap/emacs.js");

var sublime_1 = __webpack_require__(/*! !raw-loader!./keymap/sublime */ "./node_modules/raw-loader/dist/cjs.js!./ext/keymap/sublime.js");

var page_1 = __webpack_require__(/*! !raw-loader!./page */ "./node_modules/raw-loader/dist/cjs.js!./ext/page.js");

var inject_1 = __webpack_require__(/*! ./inject */ "./ext/inject.js");

var styles_1 = __webpack_require__(/*! ./styles */ "./ext/styles.js");

var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var stored_state_keys = ['theme', 'keymap', 'themeOptions', 'keymapOptions', 'storedDisabledBindings'];

function buildBindingKeys(state, mapname, os) {
  var disabledKeys = JSON.parse(state.storedDisabledBindings);

  switch (mapname) {
    case 'Vim':
      var ctrl = lodash_1.toPairs(disabledKeys['vim-ctrl']).filter(function (_a) {
        var key = _a[0],
            value = _a[1];
        return value;
      }).map(function (_a) {
        var key = _a[0],
            value = _a[1];
        return "<C-" + key + ">";
      });
      return JSON.stringify(ctrl);

    case 'Emacs':
      return '[]';

    case 'SublimeText':
      return '[]';

    default:
      if (os === 'mac') {
        var ctrl_1 = lodash_1.toPairs(disabledKeys['default-mac-ctrl']).filter(function (_a) {
          var key = _a[0],
              value = _a[1];
          return value;
        }).map(function (_a) {
          var key = _a[0],
              value = _a[1];
          return "Ctrl-" + key;
        });
        var alt = lodash_1.toPairs(disabledKeys['default-mac-alt']).filter(function (_a) {
          var key = _a[0],
              value = _a[1];
          return value;
        }).map(function (_a) {
          var key = _a[0],
              value = _a[1];
          return "Alt-" + key;
        });
        var cmd = lodash_1.toPairs(disabledKeys['default-mac-cmd']).filter(function (_a) {
          var key = _a[0],
              value = _a[1];
          return value;
        }).map(function (_a) {
          var key = _a[0],
              value = _a[1];
          return "Cmd-" + key;
        });
        return JSON.stringify(ctrl_1.concat(alt).concat(cmd));
      } else {
        var ctrl_2 = lodash_1.toPairs(disabledKeys['default-pc-ctrl']).filter(function (_a) {
          var key = _a[0],
              value = _a[1];
          return value;
        }).map(function (_a) {
          var key = _a[0],
              value = _a[1];
          return "<C-" + key + ">";
        });
        return JSON.stringify(ctrl_2);
      }

  }
}

chrome.storage.sync.get(stored_state_keys, function (state) {
  var keys = buildBindingKeys(state, 'Vim', 'mac');
  var os = /Mac/.test(navigator.platform) ? "mac" : "other";
  var script = "\nvar __mapName = \"" + state.keymap + "\";\nvar __vim_disable_keys = " + buildBindingKeys(state, 'Vim', os) + ";\nvar __default_disable_keys = " + buildBindingKeys(state, 'default', os) + ";\nvar __vim_key_map = " + vim_1.default + ";\nvar __emacs_key_map = " + emacs_1.default + ";\nvar __sublime_key_map = " + sublime_1.default + ";\nvar __styleName = \"" + (state.theme in styles_1.default ? state.theme : 'default') + "\"\nvar __styleCSS = `" + (state.theme in styles_1.default ? styles_1.default[state.theme] : '') + "`\n";
  inject_1.inject_script("(function(){" + script + ";" + page_1.default + ";\n})()");
});

function getBindings(name) {
  switch (name) {
    case 'Vim':
      return vim_1.default;

    case 'Emacs':
      return vim_1.default;

    case 'SublimeText':
      return vim_1.default;

    default:
      return 'function(){}';
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (!request) sendResponse({
    message: 'got an invalid request'
  });

  try {
    switch (request.action) {
      case 'set_theme':
        inject_1.inject_script("(function(){\nlet __styleName = \"" + (request.theme in styles_1.default ? request.theme : 'default') + "\"\nlet __styleCSS = `" + (request.theme in styles_1.default ? styles_1.default[request.theme] : '') + "`\nwindow.__cm_global_config.set_style(__styleName, __styleCSS) \n})()");
        sendResponse({
          message: 'Theme script injected'
        });
        break;

      case 'apply':
        chrome.storage.sync.get(stored_state_keys, function (state) {
          var keys = buildBindingKeys(state, state.keymap, request.platform);
          inject_1.inject_script("(function(){\nlet __styleName = \"" + (state.theme in styles_1.default ? state.theme : 'default') + "\";\nlet __styleCSS = `" + (state.theme in styles_1.default ? styles_1.default[state.theme] : '') + "`;\nwindow.__cm_global_config.set_style(__styleName, __styleCSS);\nwindow.__cm_global_config.set_keymap(\"" + state.keymap + "\"," + keys + ") ;\n})()");
        });
        sendResponse({
          message: 'The settings were applied'
        });
        break;

      default:
        sendResponse({
          message: 'not sure what to do with ' + JSON.stringify(request)
        });
    }
  } catch (err) {
    sendResponse({
      message: 'something went wrong',
      error: err
    });
  }
});

/***/ }),

/***/ "./ext/inject.js":
/*!***********************!*\
  !*** ./ext/inject.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function inject_script(src) {
  var script = document.constructor.prototype.createElement.call(document, 'script');
  script.innerHTML = src;
  script.charset = 'utf-8';
  document.documentElement.appendChild(script);
  script.parentNode.removeChild(script);
}

exports.inject_script = inject_script;

function inject_style(src) {
  var script = document.constructor.prototype.createElement.call(document, 'style');
  script.innerHTML = src;
  script.charset = 'utf-8';
  document.documentElement.appendChild(script);
}

exports.inject_style = inject_style;

/***/ }),

/***/ "./ext/styles.js":
/*!***********************!*\
  !*** ./ext/styles.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _3024_day_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/3024-day.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/3024-day.css");

var _3024_night_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/3024-night.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/3024-night.css");

var abcdef_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/abcdef.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/abcdef.css");

var ambiance_mobile_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/ambiance-mobile.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ambiance-mobile.css");

var ambiance_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/ambiance.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ambiance.css");

var base16_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/base16-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/base16-dark.css");

var base16_light_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/base16-light.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/base16-light.css");

var bespin_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/bespin.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/bespin.css");

var blackboard_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/blackboard.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/blackboard.css");

var cobalt_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/cobalt.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/cobalt.css");

var colorforth_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/colorforth.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/colorforth.css");

var darcula_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/darcula.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/darcula.css");

var dracula_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/dracula.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/dracula.css");

var duotone_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/duotone-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/duotone-dark.css");

var duotone_light_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/duotone-light.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/duotone-light.css");

var eclipse_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/eclipse.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/eclipse.css");

var elegant_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/elegant.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/elegant.css");

var erlang_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/erlang-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/erlang-dark.css");

var gruvbox_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/gruvbox-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/gruvbox-dark.css");

var hopscotch_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/hopscotch.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/hopscotch.css");

var icecoder_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/icecoder.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/icecoder.css");

var idea_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/idea.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/idea.css");

var isotope_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/isotope.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/isotope.css");

var lesser_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/lesser-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/lesser-dark.css");

var liquibyte_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/liquibyte.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/liquibyte.css");

var lucario_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/lucario.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/lucario.css");

var material_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/material.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/material.css");

var mbo_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/mbo.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/mbo.css");

var mdn_like_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/mdn-like.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/mdn-like.css");

var midnight_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/midnight.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/midnight.css");

var monokai_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/monokai.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/monokai.css");

var neat_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/neat.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/neat.css");

var neo_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/neo.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/neo.css");

var night_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/night.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/night.css");

var nord_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/nord.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/nord.css");

var oceanic_next_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/oceanic-next.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/oceanic-next.css");

var panda_syntax_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/panda-syntax.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/panda-syntax.css");

var paraiso_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/paraiso-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/paraiso-dark.css");

var paraiso_light_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/paraiso-light.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/paraiso-light.css");

var pastel_on_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/pastel-on-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/pastel-on-dark.css");

var railscasts_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/railscasts.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/railscasts.css");

var rubyblue_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/rubyblue.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/rubyblue.css");

var seti_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/seti.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/seti.css");

var shadowfox_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/shadowfox.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/shadowfox.css");

var solarized_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/solarized.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/solarized.css");

var ssms_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/ssms.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ssms.css");

var the_matrix_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/the-matrix.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/the-matrix.css");

var tomorrow_night_bright_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/tomorrow-night-bright.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/tomorrow-night-bright.css");

var tomorrow_night_eighties_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/tomorrow-night-eighties.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/tomorrow-night-eighties.css");

var ttcn_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/ttcn.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ttcn.css");

var twilight_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/twilight.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/twilight.css");

var vibrant_ink_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/vibrant-ink.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/vibrant-ink.css");

var xq_dark_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/xq-dark.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/xq-dark.css");

var xq_light_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/xq-light.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/xq-light.css");

var yeti_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/yeti.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/yeti.css");

var yonce_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/yonce.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/yonce.css");

var zenburn_css_1 = __webpack_require__(/*! !raw-loader!../CodeMirror/theme/zenburn.css */ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/zenburn.css");

var styles = {
  '3024-day': _3024_day_css_1.default,
  '3024-night': _3024_night_css_1.default,
  abcdef: abcdef_css_1.default,
  'ambiance-mobile': ambiance_mobile_css_1.default,
  ambiance: ambiance_css_1.default,
  'base16-dark': base16_dark_css_1.default,
  'base16-light': base16_light_css_1.default,
  bespin: bespin_css_1.default,
  blackboard: blackboard_css_1.default,
  cobalt: cobalt_css_1.default,
  colorforth: colorforth_css_1.default,
  darcula: darcula_css_1.default,
  dracula: dracula_css_1.default,
  'duotone-dark': duotone_dark_css_1.default,
  'duotone-light': duotone_light_css_1.default,
  eclipse: eclipse_css_1.default,
  elegant: elegant_css_1.default,
  'erlang-dark': erlang_dark_css_1.default,
  'gruvbox-dark': gruvbox_dark_css_1.default,
  hopscotch: hopscotch_css_1.default,
  icecoder: icecoder_css_1.default,
  idea: idea_css_1.default,
  isotope: isotope_css_1.default,
  'lesser-dark': lesser_dark_css_1.default,
  liquibyte: liquibyte_css_1.default,
  lucario: lucario_css_1.default,
  material: material_css_1.default,
  mbo: mbo_css_1.default,
  'mdn-like': mdn_like_css_1.default,
  midnight: midnight_css_1.default,
  monokai: monokai_css_1.default,
  neat: neat_css_1.default,
  neo: neo_css_1.default,
  night: night_css_1.default,
  nord: nord_css_1.default,
  'oceanic-next': oceanic_next_css_1.default,
  'panda-syntax': panda_syntax_css_1.default,
  'paraiso-dark': paraiso_dark_css_1.default,
  'paraiso-light': paraiso_light_css_1.default,
  'pastel-on-dark': pastel_on_dark_css_1.default,
  railscasts: railscasts_css_1.default,
  rubyblue: rubyblue_css_1.default,
  seti: seti_css_1.default,
  shadowfox: shadowfox_css_1.default,
  solarized: solarized_css_1.default,
  ssms: ssms_css_1.default,
  'the-matrix': the_matrix_css_1.default,
  'tomorrow-night-bright': tomorrow_night_bright_css_1.default,
  'tomorrow-night-eighties': tomorrow_night_eighties_css_1.default,
  ttcn: ttcn_css_1.default,
  twilight: twilight_css_1.default,
  'vibrant-ink': vibrant_ink_css_1.default,
  'xq-dark': xq_dark_css_1.default,
  'xq-light': xq_light_css_1.default,
  yeti: yeti_css_1.default,
  yonce: yonce_css_1.default,
  zenburn: zenburn_css_1.default
};
exports.default = styles;

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.17.11';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper='['+rsUpperRange+']',rsZWJ="\\u200d";/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',rsOrdUpper='\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
"\u0100":'A',"\u0102":'A',"\u0104":'A',"\u0101":'a',"\u0103":'a',"\u0105":'a',"\u0106":'C',"\u0108":'C',"\u010A":'C',"\u010C":'C',"\u0107":'c',"\u0109":'c',"\u010B":'c',"\u010D":'c',"\u010E":'D',"\u0110":'D',"\u010F":'d',"\u0111":'d',"\u0112":'E',"\u0114":'E',"\u0116":'E',"\u0118":'E',"\u011A":'E',"\u0113":'e',"\u0115":'e',"\u0117":'e',"\u0119":'e',"\u011B":'e',"\u011C":'G',"\u011E":'G',"\u0120":'G',"\u0122":'G',"\u011D":'g',"\u011F":'g',"\u0121":'g',"\u0123":'g',"\u0124":'H',"\u0126":'H',"\u0125":'h',"\u0127":'h',"\u0128":'I',"\u012A":'I',"\u012C":'I',"\u012E":'I',"\u0130":'I',"\u0129":'i',"\u012B":'i',"\u012D":'i',"\u012F":'i',"\u0131":'i',"\u0134":'J',"\u0135":'j',"\u0136":'K',"\u0137":'k',"\u0138":'k',"\u0139":'L',"\u013B":'L',"\u013D":'L',"\u013F":'L',"\u0141":'L',"\u013A":'l',"\u013C":'l',"\u013E":'l',"\u0140":'l',"\u0142":'l',"\u0143":'N',"\u0145":'N',"\u0147":'N',"\u014A":'N',"\u0144":'n',"\u0146":'n',"\u0148":'n',"\u014B":'n',"\u014C":'O',"\u014E":'O',"\u0150":'O',"\u014D":'o',"\u014F":'o',"\u0151":'o',"\u0154":'R',"\u0156":'R',"\u0158":'R',"\u0155":'r',"\u0157":'r',"\u0159":'r',"\u015A":'S',"\u015C":'S',"\u015E":'S',"\u0160":'S',"\u015B":'s',"\u015D":'s',"\u015F":'s',"\u0161":'s',"\u0162":'T',"\u0164":'T',"\u0166":'T',"\u0163":'t',"\u0165":'t',"\u0167":'t',"\u0168":'U',"\u016A":'U',"\u016C":'U',"\u016E":'U',"\u0170":'U',"\u0172":'U',"\u0169":'u',"\u016B":'u',"\u016D":'u',"\u016F":'u',"\u0171":'u',"\u0173":'u',"\u0174":'W',"\u0175":'w',"\u0176":'Y',"\u0177":'y',"\u0178":'Y',"\u0179":'Z',"\u017B":'Z',"\u017D":'Z',"\u017A":'z',"\u017C":'z',"\u017E":'z',"\u0132":'IJ',"\u0133":'ij',"\u0152":'Oe',"\u0153":'oe',"\u0149":"'n","\u017F":'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r',"\u2028":'u2028',"\u2029":'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=( false?undefined:_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?undefined:_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*/ /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var asciiSize=baseProperty('length');/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function asciiToArray(string){return string.split('');}/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function baseIsNaN(value){return value!==value;}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN;}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(func){return function(value){return func(value);};}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function cacheHas(cache,key){return cache.has(key);}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var deburrLetter=basePropertyOf(deburredLetters);/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key];}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(string){return reHasUnicode.test(string);}/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*/ /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,_Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined,symIterator=_Symbol?_Symbol.iterator:undefined,symToStringTag=_Symbol?_Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function baseLodash(){}// No operation performed.
/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */lodash.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'escape':reEscape,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'evaluate':reEvaluate,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'interpolate':reInterpolate,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */'variable':'',/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */'imports':{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*/ /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*/ /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*/ /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function listCacheClear(){this.__data__=[];this.size=0;}/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*/ /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*/ /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*/ /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function stackGet(key){return this.__data__.get(key);}/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function stackHas(key){return this.__data__.has(key);}/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*/ /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index]);}return result;}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});return result;}if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEach=createBaseEach(baseForOwn);/**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseFor=createBaseFor();/**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseForRight=createBaseFor(true);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function baseGt(value,other){return value>other;}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args);}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(_typeof(value)=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function baseLt(value,other){return value<other;}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(safeGet(object,key),srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function baseSample(collection){return arraySample(values(collection));}/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function castFunction(value){return typeof value=='function'?value:identity;}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */var castRest=baseRest;/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function customOmitClone(value){return isPlainObject(value)?undefined:value;}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function isIndex(value,length){var type=_typeof(value);length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function isKey(value,object){if(isArray(value)){return false;}var type=_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */function isKeyable(value){var type=_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var isMaskable=coreJsData?isFunction:stubFalse;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */function objectToString(value){return nativeObjectToString.call(value);}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
     * Gets the value at `key`, unless `key` is "__proto__".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */function safeGet(object,key){if(key=='__proto__'){return;}return object[key];}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var setData=shortOut(baseSetData);/**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var setToString=shortOut(baseSetToString);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*/ /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function head(array){return array&&array.length?array[0]:undefined;}/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var pull=baseRest(pullAll);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function reverse(array){return array==null?array:nativeReverse.call(array);}/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[];}/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});/**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */var zip=baseRest(unzip);/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function tap(value,interceptor){interceptor(value);return value;}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function thru(value,interceptor){return interceptor(value);}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function wrapperChain(){return chain(this);}/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function wrapperToIterator(){return this;}/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*/ /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */var find=createFind(findIndex);/**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */var findLast=createFind(findLastIndex);/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*/ /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*/ /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function once(func){return before(2,func);}/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders);});/**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes);});/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function unary(func){return ary(func,1);}/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function wrap(value,wrapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*/ /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var gt=createRelationalOperation(baseGt);/**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */var isArray=Array.isArray;/**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var isBuffer=nativeIsBuffer||stubFalse;/**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function isEqual(value,other){return baseIsEqual(value,other);}/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result;}/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function isNull(value){return value===null;}/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function isNil(value){return value==null;}/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function isSymbol(value){return _typeof(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function isUndefined(value){return value===undefined;}/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */var lt=createRelationalOperation(baseLt);/**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*/ /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */var at=flatRest(baseAt);/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}/**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var defaults=baseRest(function(object,sources){object=Object(object);var index=-1;var length=sources.length;var guard=length>2?sources[2]:undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){length=1;}while(++index<length){var source=sources[index];var props=keysIn(source);var propsIndex=-1;var propsLength=props.length;while(++propsIndex<propsLength){var key=props[propsIndex];var value=object[key];if(value===undefined||eq(value,objectProto[key])&&!hasOwnProperty.call(object,key)){object[key]=source[key];}}}return object;});/**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args);});/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var invert=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}result[value]=key;},constant(identity));/**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */var invertBy=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */var invoke=baseRest(baseInvoke);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var toPairs=createToPairs(keys);/**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */var toPairsIn=createToPairs(keysIn);/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*/ /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*/ /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */var lowerFirst=createCaseFirst('toLowerCase');/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
var sourceURL='//# sourceURL='+('sourceURL'in options?options.sourceURL:'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function toLower(value){return toString(value).toLowerCase();}/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function toUpper(value){return toString(value).toUpperCase();}/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */var upperFirst=createCaseFirst('toUpperCase');/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*/ /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function constant(value){return function(){return value;};}/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var flow=createFlow();/**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */var flowRight=createFlow(true);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function identity(value){return value;}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function noop(){}// No operation performed.
/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var over=createOver(arrayMap);/**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */var overEvery=createOver(arrayEvery);/**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */var overSome=createOver(arraySome);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var range=createRange();/**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */var rangeRight=createRange(true);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function stubArray(){return[];}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function stubFalse(){return false;}/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function stubObject(){return{};}/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function stubString(){return'';}/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function stubTrue(){return true;}/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*/ /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */var ceil=createRound('ceil');/**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */var floor=createRound('floor');/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function mean(array){return baseMean(array,identity);}/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */var round=createRound('round');/**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*/ /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'',names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/ // Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if( true&&_typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"))=='object'&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")){// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return _;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}// Check for `exports` after `define` in case a build optimizer adds it.
else if(freeModule){// Export for Node.js.
(freeModule.exports=_)._=_;// Export for CommonJS support.
freeExports._=_;}else{// Export to the global object.
root._=_;}}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/3024-day.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/3024-day.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       3024 day\n    Author:     Jan T. Sott (http://github.com/idleberg)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-3024-day.CodeMirror { background: #f7f7f7; color: #3a3432; }\n.cm-s-3024-day div.CodeMirror-selected { background: #d6d5d4; }\n\n.cm-s-3024-day .CodeMirror-line::selection, .cm-s-3024-day .CodeMirror-line > span::selection, .cm-s-3024-day .CodeMirror-line > span > span::selection { background: #d6d5d4; }\n.cm-s-3024-day .CodeMirror-line::-moz-selection, .cm-s-3024-day .CodeMirror-line > span::-moz-selection, .cm-s-3024-day .CodeMirror-line > span > span::selection { background: #d9d9d9; }\n\n.cm-s-3024-day .CodeMirror-gutters { background: #f7f7f7; border-right: 0px; }\n.cm-s-3024-day .CodeMirror-guttermarker { color: #db2d20; }\n.cm-s-3024-day .CodeMirror-guttermarker-subtle { color: #807d7c; }\n.cm-s-3024-day .CodeMirror-linenumber { color: #807d7c; }\n\n.cm-s-3024-day .CodeMirror-cursor { border-left: 1px solid #5c5855; }\n\n.cm-s-3024-day span.cm-comment { color: #cdab53; }\n.cm-s-3024-day span.cm-atom { color: #a16a94; }\n.cm-s-3024-day span.cm-number { color: #a16a94; }\n\n.cm-s-3024-day span.cm-property, .cm-s-3024-day span.cm-attribute { color: #01a252; }\n.cm-s-3024-day span.cm-keyword { color: #db2d20; }\n.cm-s-3024-day span.cm-string { color: #fded02; }\n\n.cm-s-3024-day span.cm-variable { color: #01a252; }\n.cm-s-3024-day span.cm-variable-2 { color: #01a0e4; }\n.cm-s-3024-day span.cm-def { color: #e8bbd0; }\n.cm-s-3024-day span.cm-bracket { color: #3a3432; }\n.cm-s-3024-day span.cm-tag { color: #db2d20; }\n.cm-s-3024-day span.cm-link { color: #a16a94; }\n.cm-s-3024-day span.cm-error { background: #db2d20; color: #5c5855; }\n\n.cm-s-3024-day .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-3024-day .CodeMirror-matchingbracket { text-decoration: underline; color: #a16a94 !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/3024-night.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/3024-night.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       3024 night\n    Author:     Jan T. Sott (http://github.com/idleberg)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-3024-night.CodeMirror { background: #090300; color: #d6d5d4; }\n.cm-s-3024-night div.CodeMirror-selected { background: #3a3432; }\n.cm-s-3024-night .CodeMirror-line::selection, .cm-s-3024-night .CodeMirror-line > span::selection, .cm-s-3024-night .CodeMirror-line > span > span::selection { background: rgba(58, 52, 50, .99); }\n.cm-s-3024-night .CodeMirror-line::-moz-selection, .cm-s-3024-night .CodeMirror-line > span::-moz-selection, .cm-s-3024-night .CodeMirror-line > span > span::-moz-selection { background: rgba(58, 52, 50, .99); }\n.cm-s-3024-night .CodeMirror-gutters { background: #090300; border-right: 0px; }\n.cm-s-3024-night .CodeMirror-guttermarker { color: #db2d20; }\n.cm-s-3024-night .CodeMirror-guttermarker-subtle { color: #5c5855; }\n.cm-s-3024-night .CodeMirror-linenumber { color: #5c5855; }\n\n.cm-s-3024-night .CodeMirror-cursor { border-left: 1px solid #807d7c; }\n\n.cm-s-3024-night span.cm-comment { color: #cdab53; }\n.cm-s-3024-night span.cm-atom { color: #a16a94; }\n.cm-s-3024-night span.cm-number { color: #a16a94; }\n\n.cm-s-3024-night span.cm-property, .cm-s-3024-night span.cm-attribute { color: #01a252; }\n.cm-s-3024-night span.cm-keyword { color: #db2d20; }\n.cm-s-3024-night span.cm-string { color: #fded02; }\n\n.cm-s-3024-night span.cm-variable { color: #01a252; }\n.cm-s-3024-night span.cm-variable-2 { color: #01a0e4; }\n.cm-s-3024-night span.cm-def { color: #e8bbd0; }\n.cm-s-3024-night span.cm-bracket { color: #d6d5d4; }\n.cm-s-3024-night span.cm-tag { color: #db2d20; }\n.cm-s-3024-night span.cm-link { color: #a16a94; }\n.cm-s-3024-night span.cm-error { background: #db2d20; color: #807d7c; }\n\n.cm-s-3024-night .CodeMirror-activeline-background { background: #2F2F2F; }\n.cm-s-3024-night .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/abcdef.css":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/abcdef.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-abcdef.CodeMirror { background: #0f0f0f; color: #defdef; }\n.cm-s-abcdef div.CodeMirror-selected { background: #515151; }\n.cm-s-abcdef .CodeMirror-line::selection, .cm-s-abcdef .CodeMirror-line > span::selection, .cm-s-abcdef .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }\n.cm-s-abcdef .CodeMirror-line::-moz-selection, .cm-s-abcdef .CodeMirror-line > span::-moz-selection, .cm-s-abcdef .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }\n.cm-s-abcdef .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }\n.cm-s-abcdef .CodeMirror-guttermarker { color: #222; }\n.cm-s-abcdef .CodeMirror-guttermarker-subtle { color: azure; }\n.cm-s-abcdef .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-abcdef .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-abcdef span.cm-keyword { color: darkgoldenrod; font-weight: bold; }\n.cm-s-abcdef span.cm-atom { color: #77F; }\n.cm-s-abcdef span.cm-number { color: violet; }\n.cm-s-abcdef span.cm-def { color: #fffabc; }\n.cm-s-abcdef span.cm-variable { color: #abcdef; }\n.cm-s-abcdef span.cm-variable-2 { color: #cacbcc; }\n.cm-s-abcdef span.cm-variable-3, .cm-s-abcdef span.cm-type { color: #def; }\n.cm-s-abcdef span.cm-property { color: #fedcba; }\n.cm-s-abcdef span.cm-operator { color: #ff0; }\n.cm-s-abcdef span.cm-comment { color: #7a7b7c; font-style: italic;}\n.cm-s-abcdef span.cm-string { color: #2b4; }\n.cm-s-abcdef span.cm-meta { color: #C9F; }\n.cm-s-abcdef span.cm-qualifier { color: #FFF700; }\n.cm-s-abcdef span.cm-builtin { color: #30aabc; }\n.cm-s-abcdef span.cm-bracket { color: #8a8a8a; }\n.cm-s-abcdef span.cm-tag { color: #FFDD44; }\n.cm-s-abcdef span.cm-attribute { color: #DDFF00; }\n.cm-s-abcdef span.cm-error { color: #FF0000; }\n.cm-s-abcdef span.cm-header { color: aquamarine; font-weight: bold; }\n.cm-s-abcdef span.cm-link { color: blueviolet; }\n\n.cm-s-abcdef .CodeMirror-activeline-background { background: #314151; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ambiance-mobile.css":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ambiance-mobile.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-ambiance.CodeMirror {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ambiance.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ambiance.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ambiance theme for codemirror */\n\n/* Color scheme */\n\n.cm-s-ambiance .cm-header { color: blue; }\n.cm-s-ambiance .cm-quote { color: #24C2C7; }\n\n.cm-s-ambiance .cm-keyword { color: #cda869; }\n.cm-s-ambiance .cm-atom { color: #CF7EA9; }\n.cm-s-ambiance .cm-number { color: #78CF8A; }\n.cm-s-ambiance .cm-def { color: #aac6e3; }\n.cm-s-ambiance .cm-variable { color: #ffb795; }\n.cm-s-ambiance .cm-variable-2 { color: #eed1b3; }\n.cm-s-ambiance .cm-variable-3, .cm-s-ambiance .cm-type { color: #faded3; }\n.cm-s-ambiance .cm-property { color: #eed1b3; }\n.cm-s-ambiance .cm-operator { color: #fa8d6a; }\n.cm-s-ambiance .cm-comment { color: #555; font-style:italic; }\n.cm-s-ambiance .cm-string { color: #8f9d6a; }\n.cm-s-ambiance .cm-string-2 { color: #9d937c; }\n.cm-s-ambiance .cm-meta { color: #D2A8A1; }\n.cm-s-ambiance .cm-qualifier { color: yellow; }\n.cm-s-ambiance .cm-builtin { color: #9999cc; }\n.cm-s-ambiance .cm-bracket { color: #24C2C7; }\n.cm-s-ambiance .cm-tag { color: #fee4ff; }\n.cm-s-ambiance .cm-attribute { color: #9B859D; }\n.cm-s-ambiance .cm-hr { color: pink; }\n.cm-s-ambiance .cm-link { color: #F4C20B; }\n.cm-s-ambiance .cm-special { color: #FF9D00; }\n.cm-s-ambiance .cm-error { color: #AF2018; }\n\n.cm-s-ambiance .CodeMirror-matchingbracket { color: #0f0; }\n.cm-s-ambiance .CodeMirror-nonmatchingbracket { color: #f22; }\n\n.cm-s-ambiance div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-ambiance.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-ambiance .CodeMirror-line::selection, .cm-s-ambiance .CodeMirror-line > span::selection, .cm-s-ambiance .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-ambiance .CodeMirror-line::-moz-selection, .cm-s-ambiance .CodeMirror-line > span::-moz-selection, .cm-s-ambiance .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n/* Editor styling */\n\n.cm-s-ambiance.CodeMirror {\n  line-height: 1.40em;\n  color: #E6E1DC;\n  background-color: #202020;\n  -webkit-box-shadow: inset 0 0 10px black;\n  -moz-box-shadow: inset 0 0 10px black;\n  box-shadow: inset 0 0 10px black;\n}\n\n.cm-s-ambiance .CodeMirror-gutters {\n  background: #3D3D3D;\n  border-right: 1px solid #4D4D4D;\n  box-shadow: 0 10px 20px black;\n}\n\n.cm-s-ambiance .CodeMirror-linenumber {\n  text-shadow: 0px 1px 1px #4d4d4d;\n  color: #111;\n  padding: 0 5px;\n}\n\n.cm-s-ambiance .CodeMirror-guttermarker { color: #aaa; }\n.cm-s-ambiance .CodeMirror-guttermarker-subtle { color: #111; }\n\n.cm-s-ambiance .CodeMirror-cursor { border-left: 1px solid #7991E8; }\n\n.cm-s-ambiance .CodeMirror-activeline-background {\n  background: none repeat scroll 0% 0% rgba(255, 255, 255, 0.031);\n}\n\n.cm-s-ambiance.CodeMirror,\n.cm-s-ambiance .CodeMirror-gutters {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAABFFUlEQVQYGbzBCeDVU/74/6fj9HIcx/FRHx9JCFmzMyGRURhLZIkUsoeRfUjS2FNDtr6WkMhO9sm+S8maJfu+Jcsg+/o/c+Z4z/t97/vezy3z+z8ekGlnYICG/o7gdk+wmSHZ1z4pJItqapjoKXWahm8NmV6eOTbWUOp6/6a/XIg6GQqmenJ2lDHyvCFZ2cBDbmtHA043VFhHwXxClWmeYAdLhV00Bd85go8VmaFCkbVkzlQENzfBDZ5gtN7HwF0KDrTwJ0dypSOzpaKCMwQHKTIreYIxlmhXTzTWkVm+LTynZhiSBT3RZQ7aGfjGEd3qyXQ1FDymqbKxpspERQN2MiRjNZlFFQXfCNFm9nM1zpAsoYjmtRTc5ajwuaXc5xrWskT97RaKzAGe5ARHhVUsDbjKklziiX5WROcJwSNCNI+9w1Jwv4Zb2r7lCMZ4oq5C0EdTx+2GzNuKpJ+iFf38JEWkHJn9DNF7mmBDITrWEg0VWL3pHU20tSZnuqWu+R3BtYa8XxV1HO7GyD32UkOpL/yDloINFTmvtId+nmAjxRw40VMwVKiwrKLE4bK5UOVntYwhOcSSXKrJHKPJedocpGjVz/ZMIbnYUPB10/eKCrs5apqpgVmWzBYWpmtKHecJPjaUuEgRDDaU0oZghCJ6zNMQ5ZhDYx05r5v2muQdM0EILtXUsaKiQX9WMEUotagQzFbUNN6NUPC2nm5pxEWGCjMc3GdJHjSU2kORLK/JGSrkfGEIjncU/CYUnOipoYemwj8tST9NsJmB7TUVXtbUtXATJVZXBMvYeTXJfobgJUPmGMP/yFaWonaa6BcFO3nqcIqCozSZoZoSr1g4zJOzuyGnxTEX3lUEJ7WcZgme8ddaWvWJo2AJR9DZU3CUIbhCSG6ybSwN6qtJVnCU2svDTP2ZInOw2cBTrqtQahtNZn9NcJ4l2NaSmSkkP1noZWnVwkLmdUPOwLZEwy2Z3S3R+4rIG9hcbpPXHFVWcQdZkn2FOta3cKWQnNRC5g1LsJah4GCzSVsKnCOY5OAFRTBekyyryeyilhFKva75r4Mc0aWanGEaThcy31s439KKxTzJYY5WTHPU1FtIHjQU3Oip4xlNzj/lBw23dYZVliQa7WAXf4shetcQfatI+jWRDBPmyNeW6A1P5kdDgyYJlba0BIM8BZu1JfrFwItyjcAMR3K0BWOIrtMEXyhyrlVEx3ui5dUBjmB/Q3CXW85R4mBD0s7B+4q5tKUjOlb9qqmhi5AZ6GFIC5HXtOobdYGlVdMVbNJ8toNTFcHxnoL+muBagcctjWnbNMuR00uI7nQESwg5q2qqrKWIfrNUmeQocY6HuyxJV02wj36w00yhpmUFenv4p6fUkZYqLyuinx2RGOjhCXYyJF84oiU00YMOOhhquNdfbOB7gU88pY4xJO8LVdp6/q2voeB4R04vIdhSE40xZObx1HGGJ/ja0LBthFInKaLPPFzuCaYaoj8JjPME8yoyxo6zlBqkiUZYgq00OYMswbWO5NGmq+xhipxHLRW29ARjNKXO0wRnear8XSg4XFPLKEPUS1GqvyLwiuBUoa7zpZ0l5xxFwWmWZC1H5h5FwU8eQ7K+g8UcVY6TMQreVQT/8uQ8Z+ALIXnSEa2pYZQneE9RZbSBNYXfWYJzW/h/4j4Dp1tYVcFIC5019Vyi4ThPqSFCzjGWaHQTBU8q6vrVwgxP9Lkm840imWKpcLCjYTtrKuwvsKSnrvHCXGkSMk9p6lhckfRpIeis+N2PiszT+mFLspyGleUhDwcLrZqmyeylxwjBcKHEapqkmyangyLZRVOijwOtCY5SsG5zL0OwlCJ4y5KznF3EUNDDrinwiyLZRzOXtlBbK5ITHFGLp8Q0R6ab6mS7enI2cFrxOyHvOCFaT1HThS1krjCwqWeurCkk+willhCC+RSZnRXBiZaC5RXRIZYKp2lyfrHwiKPKR0JDzrdU2EFgpidawlFDR6FgXUMNa+g1FY3bUQh2cLCwosRdnuQTS/S+JVrGLeWIvtQUvONJxlqSQYYKpwoN2kaocLjdVsis4Mk80ESF2YpSkzwldjHkjFCUutI/r+EHDU8oCs6yzL3PhWiEooZdFMkymlas4AcI3KmoMMNSQ3tHzjGWCrcJJdYyZC7QFGwjRL9p+MrRkAGWzIaWCn9W0F3TsK01c2ZvQw0byvxuQU0r1lM0qJO7wW0kRIMdDTtXEdzi4VIh+EoIHm0mWtAtpCixlabgn83fKTI7anJe9ST7WIK1DMGpQmYeA58ImV6ezOGOzK2Kgq01pd60cKWiUi9Lievb/0vIDPHQ05Kzt4ddPckQBQtoaurjyHnek/nKzpQLrVgKPjIkh2v4uyezpv+Xoo7fPFXaGFp1vaLKxQ4uUpQQS5VuQs7BCq4xRJv7fwpVvvFEB3j+620haOuocqMhWd6TTPAEx+mdFNGHdranFe95WrWmIvlY4F1Dle2ECgc6cto7SryuqGGGha0tFQ5V53migUKmg6XKAo4qS3mik+0OZpAhOLeZKicacgaYcyx5hypYQE02ZA4xi/pNhOQxR4klNKyqacj+mpxnLTnnGSo85++3ZCZq6lrZkXlGEX3o+C9FieccJbZWVFjC0Yo1FZnJhoYMFoI1hEZ9r6hwg75HwzBNhbZCdJEfJwTPGzJvaKImw1yYX1HDAmpXR+ZJQ/SmgqMNVQb5vgamGwLtt7VwvP7Qk1xpiM5x5Cyv93E06MZmgs0Nya2azIKOYKCGBQQW97RmhKNKF02JZqHEJ4o58qp7X5EcZmc56trXEqzjCBZ1MFGR87Ql2tSTs6CGxS05PTzRQorkbw7aKoKXFDXsYW42VJih/q+FP2BdTzDTwVqOYB13liM50vG7wy28qagyuIXMeQI/Oqq8bcn5wJI50xH00CRntyfpL1T4hydYpoXgNiFzoIUTDZnLNRzh4TBHwbYGDvZkxmlyJloyr6tRihpeUG94GnKtIznREF0tzJG/OOr73JBcrSh1k6WuTprgLU+mnSGnv6Zge0NNz+kTDdH8nuAuTdJDCNb21LCiIuqlYbqGzT3RAoZofQfjFazkqeNWdYaGvYTM001EW2oKPvVk1ldUGSgUtHFwjKM1h9jnFcmy5lChoLNaQMGGDsYbKixlaMBmmsx1QjCfflwTfO/gckW0ruZ3jugKR3R5W9hGUWqCgxuFgsuaCHorotGKzGaeZB9DMsaTnKCpMtwTvOzhYk0rdrArKCqcaWmVk1+F372ur1YkKxgatI8Qfe1gIX9wE9FgS8ESmuABIXnRUbCapcKe+nO7slClSZFzpV/LkLncEb1qiO42fS3R855Su2mCLh62t1SYZZYVmKwIHjREF2uihTzB20JOkz7dkxzYQnK0UOU494wh+VWRc6Un2kpTaVgLDFEkJ/uhzRcI0YKGgpGWOlocBU/a4fKoJ/pEaNV6jip3+Es9VXY078rGnmAdf7t9ylPXS34RBSuYPs1UecZTU78WanhBCHpZ5sAoTz0LGZKjPf9TRypqWEiTvOFglL1fCEY3wY/++rbk7C8bWebA6p6om6PgOL2kp44TFJlVNBXae2rqqdZztOJpT87GQsE9jqCPIe9VReZuQ/CIgacsyZdCpIScSYqcZk8r+nsyCzhyfhOqHGOIvrLknC8wTpFcaYiGC/RU1NRbUeUpocQOnkRpGOrIOcNRx+1uA0UrzhSSt+VyS3SJpnFWkzNDqOFGIWcfR86DnmARTQ1HKIL33ExPiemeOhYSSjzlSUZZuE4TveoJLnBUOFof6KiysCbnAEcZgcUNTDOwkqWu3RWtmGpZwlHhJENdZ3miGz0lJlsKnjbwqSHQjpxnFDlTLLwqJPMZMjd7KrzkSG7VsxXBZE+F8YZkb01Oe00yyRK9psh5SYh29ySPKBo2ylNht7ZkZnsKenjKNJu9PNEyZpaCHv4Kt6RQsLvAVp7M9kIimmCUwGeWqLMmGuIotYMmWNpSahkhZw9FqZsVnKJhsjAHvtHMsTM9fCI06Dx/u3vfUXCqfsKRc4oFY2jMsoo/7DJDwZ1CsIKnJu+J9ldkpmiCxQx1rWjI+T9FwcWWzOuaYH0Hj7klNRVWEQpmaqosakiGNTFHdjS/qnUdmf0NJW5xsL0HhimCCZZSRzmSPTXJQ4aaztAwtZnoabebJ+htCaZ7Cm535ByoqXKbX1WRc4Eh2MkRXWzImVc96Cj4VdOKVxR84VdQsIUM8Psoou2byVHyZFuq7O8otbSQ2UAoeEWTudATLGSpZzVLlXVkPU2Jc+27lsw2jmg5T5VhbeE3BT083K9WsTTkFU/Osi0rC5lRlpwRHUiesNS0sOvmqGML1aRbPAxTJD9ZKtxuob+hhl8cwYGWpJ8nub7t5p6coYbMovZ1BTdaKn1jYD6h4GFDNFyT/Kqe1XCXphXHOKLZmuRSRdBPEfVUXQzJm5YGPGGJdvAEr7hHNdGZnuBvrpciGmopOLf5N0uVMy0FfYToJk90uUCbJupaVpO53UJXR2bVpoU00V2KOo4zMFrBd0Jtz2pa0clT5Q5L8IpQ177mWQejPMEJhuQjS10ref6HHjdEhy1P1EYR7GtO0uSsKJQYLiTnG1rVScj5lyazpqWGl5uBbRWl7m6ixGOOnEsMJR7z8J0n6KMnCdxhiNYQCoZ6CmYLnO8omC3MkW3bktlPmEt/VQQHejL3+dOE5FlPdK/Mq8hZxxJtLyRrepLThYKbLZxkSb5W52vYxNOaOxUF0yxMUPwBTYqCzy01XayYK0sJyWBLqX0MwU5CzoymRzV0EjjeUeLgDpTo6ij42ZAzvD01dHUUTPLU96MdLbBME8nFBn7zJCMtJcZokn8YoqU0FS5WFKyniHobguMcmW8N0XkWZjkyN3hqOMtS08r+/xTBwpZSZ3qiVRX8SzMHHjfUNFjgHEPmY9PL3ykEzxkSre/1ZD6z/NuznuB0RcE1TWTm9zRgfUWVJiG6yrzgmWPXC8EAR4Wxhlad0ZbgQyEz3pG5RVEwwDJH2mgKpjcTiCOzn1lfUWANFbZ2BA8balnEweJC9J0iuaeZoI+ippFCztEKVvckR2iice1JvhVytrQwUAZpgsubCPaU7xUe9vWnaOpaSBEspalykhC9bUlOMpT42ZHca6hyrqKmw/wMR8H5ZmdFoBVJb03O4UL0tSNnvIeRmkrLWqrs78gcrEn2tpcboh0UPOW3UUR9PMk4T4nnNKWmCjlrefhCwxRNztfmIQVdDElvS4m1/WuOujoZCs5XVOjtKPGokJzsYCtFYoWonSPT21DheU/wWhM19FcElwqNGOsp9Q8N/cwXaiND1MmeL1Q5XROtYYgGeFq1aTMsoMmcrKjQrOFQTQ1fmBYhmW6o8Jkjc7iDJRTBIo5kgJD5yMEYA3srCg7VFKwiVJkmRCc5ohGOKhsYMn/XBLdo5taZjlb9YAlGWRimqbCsoY7HFAXLa5I1HPRxMMsQDHFkWtRNniqT9UEeNjcE7RUlrCJ4R2CSJuqlKHWvJXjAUNcITYkenuBRB84TbeepcqTj3zZyFJzgYQdHnqfgI0ddUwS6GqWpsKWhjq9cV0vBAEMN2znq+EBfIWT+pClYw5xsTlJU6GeIBsjGmmANTzJZiIYpgrM0Oa8ZMjd7NP87jxhqGOhJlnQtjuQpB+8aEE00wZFznSJPyHxgH3HkPOsJFvYk8zqCHzTs1BYOa4J3PFU+UVRZxlHDM4YavlNUuMoRveiZA2d7grMNc2g+RbSCEKzmgYsUmWmazFJyoiOZ4KnyhKOGRzWJa0+moyV4TVHDzn51Awtqaphfk/lRQ08FX1iiqxTB/kLwd0VynKfEvI6cd4XMV5bMhZ7gZUWVzYQ6Nm2BYzxJbw3bGthEUUMfgbGeorae6DxHtJoZ6alhZ0+ytiVoK1R4z5PTrOECT/SugseEOlb1MMNR4VRNcJy+V1Hg9ONClSZFZjdHlc6W6FBLdJja2MC5hhpu0DBYEY1TFGwiFAxRRCsYkiM9JRb0JNMVkW6CZYT/2EiTGWmo8k+h4FhDNE7BvppoTSFnmCV5xZKzvcCdDo7VVPnIU+I+Rc68juApC90MwcFCsJ5hDqxgScYKreruyQwTqrzoqDCmhWi4IbhB0Yrt3RGa6GfDv52rKXWhh28dyZaWUvcZeMTBaZoSGyiCtRU5J8iviioHaErs7Jkj61syVzTTgOcUOQ8buFBTYWdL5g3T4qlpe0+wvD63heAXRfCCIed9RbCsp2CiI7raUOYOTU13N8PNHvpaGvayo4a3LLT1lDrVEPT2zLUlheB1R+ZTRfKWJ+dcocLJfi11vyJ51lLqJ0WD7tRwryezjiV5W28uJO9qykzX8JDe2lHl/9oyBwa2UMfOngpXCixvKdXTk3wrsKmiVYdZIqsoWEERjbcUNDuiaQomGoIbFdEHmsyWnuR+IeriKDVLnlawlyNHKwKlSU631PKep8J4Q+ayjkSLKYLhalNHlYvttb6fHm0p6OApsZ4l2VfdqZkjuysy6ysKLlckf1KUutCTs39bmCgEyyoasIWlVaMF7mgmWtBT8Kol5xpH9IGllo8cJdopcvZ2sImlDmMIbtDk3KIpeNiS08lQw11NFPTwVFlPP6pJ2gvRfI7gQUfmNAtf6Gs0wQxDsKGlVBdF8rCa3jzdwMaGHOsItrZk7hAyOzpK9VS06j5F49b0VNGOOfKs3lDToMsMBe9ZWtHFEgxTJLs7qrygKZjUnmCYoeAqeU6jqWuLJup4WghOdvCYJnrSkSzoyRkm5M2StQwVltPkfCAk58tET/CSg+8MUecmotMEnhBKfWBIZsg2ihruMJQaoIm+tkTLKEqspMh00w95gvFCQRtDwTT1gVDDSEVdlwqZfxoQRbK0g+tbiBZxzKlpnpypejdDwTaeOvorMk/IJE10h9CqRe28hhLbe0pMsdSwv4ZbhKivo2BjDWfL8UKJgeavwlwb5KlwhyE4u4XkGE2ytZCznKLCDZZq42VzT8HLCrpruFbIfOIINmh/qCdZ1ZBc65kLHR1Bkyf5zn6pN3SvGKIlFNGplhrO9QSXanLOMQTLCa0YJCRrCZm/CZmrLTm7WzCK4GJDiWUdFeYx1LCFg3NMd0XmCuF3Y5rITLDUsYS9zoHVzwnJoYpSTQoObyEzr4cFBNqYTopoaU/wkyLZ2lPhX/5Y95ulxGTV7KjhWrOZgl8MyUUafjYraNjNU1N3IWcjT5WzWqjwtoarHSUObGYO3GCJZpsBlnJGPd6ZYLyl1GdCA2625IwwJDP8GUKymbzuyPlZlvTUsaUh5zFDhRWFzPKKZLAlWdcQbObgF9tOqOsmB1dqcqYJmWstFbZRRI9poolmqiLnU0POvxScpah2iSL5UJNzgScY5+AuIbpO0YD3NCW+dLMszFSdFCWGqG6eVq2uYVNDdICGD6W7EPRWZEY5gpsE9rUkS3mijzzJnm6UpUFXG1hCUeVoS5WfNcFpblELL2qqrCvMvRfd45oalvKU2tiQ6ePJOVMRXase9iTtLJztPxJKLWpo2CRDcJwn2sWSLKIO1WQWNTCvpVUvOZhgSC40JD0dOctaSqzkCRbXsKlb11Oip6PCJ0IwSJM31j3akRxlP7Rwn6aGaUL0qiLnJkvB3xWZ2+Q1TfCwpQH3G0o92UzmX4o/oJNQMMSQc547wVHhdk+VCw01DFYEnTxzZKAm74QmeNNR1w6WzEhNK15VJzuCdxQ53dRUDws5KvwgBMOEgpcVNe0hZI6RXT1Jd0cyj5nsaEAHgVmGaJIlWdsc5Ui2ElrRR6jrRAttNMEAIWrTDFubkZaok7/AkzfIwfuWVq0jHzuCK4QabtLUMVPB3kJ0oyHTSVFlqMALilJf2Rf8k5aaHtMfayocLBS8L89oKoxpJvnAkDPa0qp5DAUTHKWmCcnthlou8iCKaFFLHWcINd1nyIwXqrSxMNmSs6KmoL2QrKuWtlQ5V0120xQ5vRyZS1rgFkWwhiOwiuQbR0OOVhQM9iS3tiXp4RawRPMp5tDletOOBL95MpM01dZTBM9pkn5qF010rIeHFcFZhmSGpYpTsI6nwhqe5C9ynhlpp5ophuRb6WcJFldkVnVEwwxVfrVkvnWUuNLCg5bgboFHPDlDPDmnK7hUrWiIbjadDclujlZcaokOFup4Ri1kacV6jmrrK1hN9bGwpKEBQ4Q6DvIUXOmo6U5LqQM6EPyiKNjVkPnJkDPNEaxhiFay5ExW1NXVUGqcpYYdPcGiCq7z/TSlbhL4pplWXKd7NZO5QQFrefhRQW/NHOsqcIglc4UhWklR8K0QzbAw08CBDnpbgqXdeD/QUsM4RZXDFBW6WJKe/mFPdH0LtBgiq57wFLzlyQzz82qYx5D5WJP5yVJDW01BfyHnS6HKO/reZqId1WGa4Hkh2kWodJ8i6KoIPlAj2hPt76CzXsVR6koPRzWTfKqIentatYpQw2me4AA3y1Kind3SwoOKZDcFXTwl9tWU6mfgRk9d71sKtlNwrjnYw5tC5n5LdKiGry3JKNlHEd3oaMCFHrazBPMp/uNJ+V7IudcSbeOIdjUEdwl0VHCOZo5t6YluEuaC9mQeMgSfOyKnYGFHcIeQ84yQWbuJYJpZw5CzglDH7gKnWqqM9ZTaXcN0TeYhR84eQtJT76JJ1lREe7WnnvsMmRc9FQ7SBBM9mV3lCUdmHk/S2RAMt0QjFNFqQpWjDPQ01DXWUdDBkXziKPjGEP3VP+zIWU2t7im41FOloyWzn/L6dkUy3VLDaZ6appgDLHPjJEsyvJngWEPUyVBiAaHCTEXwrLvSEbV1e1gKJniicWorC1MUrVjB3uDhJE/wgSOzk1DXpk0k73qCM8xw2UvD5kJmDUfOomqMpWCkJRlvKXGmoeBm18USjVIk04SClxTB6YrgLAPLWYK9HLUt5cmc0vYES8GnTeRc6skZbQkWdxRsIcyBRzx1DbTk9FbU0caTPOgJHhJKnOGIVhQqvKmo0llRw9sabrZkDtdg3PqaKi9oatjY8B+G371paMg6+mZFNNtQ04mWBq3rYLOmtWWQp8KJnpy9DdFensyjdqZ+yY40VJlH8wcdLzC8PZnvHMFUTZUrDTkLyQaGus5X5LzpYAf3i+e/ZlhqGqWhh6Ou6xTR9Z6oi5AZZtp7Mj2EEm8oSpxiYZCHU/1fbGdNNNRRoZMhmilEb2gqHOEJDtXkHK/JnG6IrvbPCwV3NhONVdS1thBMs1T4QOBcTWa2IzhMk2nW5Kyn9tXUtpv9RsG2msxk+ZsQzRQacJncpgke0+T8y5Fzj8BiGo7XlJjaTIlpQs7KFjpqGnKuoyEPeIKnFMkZHvopgh81ySxNFWvJWcKRs70j2FOT012IllEEO1n4pD1513Yg2ssQPOThOkvyrqHUdEXOSEsihmBbTbKX1kLBPWqWkLOqJbjB3GBIZmoa8qWl4CG/iZ7oiA72ZL7TJNeZUY7kFQftDcHHluBzRbCegzMtrRjVQpX2lgoPKKLJAkcbMl01XK2p7yhL8pCBbQ3BN2avJgKvttcrWDK3CiUOVxQ8ZP+pqXKyIxnmBymCg5vJjNfkPK4+c8cIfK8ocVt7kmfd/I5SR1hKvCzUtb+lhgc00ZaO6CyhIQP1Uv4yIZjload72PXX0OIJvnFU+0Zf6MhsJwTfW0r0UwQfW4LNLZl5HK261JCZ4qnBaAreVAS3WrjV0LBnNDUNNDToCEeFfwgcb4gOEqLRhirWkexrCEYKVV711DLYEE1XBEsp5tpTGjorkomKYF9FDXv7fR3BGwbettSxnyL53MBPjsxDZjMh+VUW9NRxq1DhVk+FSxQcaGjV9Pawv6eGByw5qzoy7xk4RsOShqjJwWKe/1pEEfzkobeD/dQJmpqedcyBTy2sr4nGNRH0c0SPWTLrqAc0OQcb/gemKgqucQT7ySWKCn2EUotoCvpZct7RO2sy/QW0IWcXd7pQRQyZVwT2USRO87uhjioTLKV2brpMUcMQRbKH/N2T+UlTpaMls6cmc6CCNy3JdYYSUzzJQ4oSD3oKLncULOiJvjBEC2oqnCJkJluCYy2ZQ5so9YYlZ1VLlQU1mXEW1jZERwj/MUSRc24TdexlqLKfQBtDTScJUV8FszXBEY5ktpD5Ur9hYB4Nb1iikw3JoYpkKX+RodRKFt53MMuRnKSpY31PwYaGaILh3wxJGz9TkTPEETxoCWZrgvOlmyMzxFEwVJE5xZKzvyJ4WxEc16Gd4Xe3Weq4XH2jKRikqOkGQ87hQnC7wBmGYLAnesX3M+S87eFATauuN+Qcrh7xIxXJbUIdMw3JGE3ylCWzrieaqCn4zhGM19TQ3z1oH1AX+pWEqIc7wNGAkULBo/ZxRaV9NNyh4Br3rCHZzbzmSfawBL0dNRwpW1kK9mxPXR9povcdrGSZK9c2k0xwFGzjuniCtRSZCZ6ccZ7gaktmgAOtKbG/JnOkJrjcQTdFMsxRQ2cLY3WTIrlCw1eWKn8R6pvt4GFDso3QoL4a3nLk3G6JrtME3dSenpx7PNFTmga0EaJTLQ061sEeQoWXhSo9LTXsaSjoJQRXeZLtDclbCrYzfzHHeaKjHCVOUkQHO3JeEepr56mhiyaYYKjjNU+Fed1wS5VlhWSqI/hYUdDOkaxiKehoyOnrCV5yBHtbWFqTHCCwtpDcYolesVR5yUzTZBb3RNMd0d6WP+SvhuBmRcGxnuQzT95IC285cr41cLGQ6aJJhmi4TMGempxeimBRQw1tFKV+8jd6KuzoSTqqDxzRtpZkurvKEHxlqXKRIjjfUNNXQsNOsRScoWFLT+YeRZVD3GRN0MdQcKqQjHDMrdGGVu3iYJpQx3WGUvfbmxwFfR20WBq0oYY7LMFhhgYtr8jpaEnaOzjawWWaTP8mMr0t/EPDPoqcnxTBI5o58L7uoWnMrpoqPwgVrlAUWE+V+TQl9rawoyP6QGAlQw2TPRX+YSkxyBC8Z6jhHkXBgQL7WII3DVFnRfCrBfxewv9D6xsyjys4VkhWb9pUU627JllV0YDNHMku/ldNMMXDEo4aFnAkk4U6frNEU4XgZUPmEKHUl44KrzmYamjAbh0JFvGnaTLPu1s9jPCwjFpYiN7z1DTOk/nc07CfDFzmCf7i+bfNHXhDtLeBXzTBT5rkMvWOIxpl4EMh2LGJBu2syDnAEx2naEhHDWMMzPZEhygyS1mS5RTJr5ZkoKbEUoYqr2kqdDUE8ztK7OaIntJkFrIECwv8LJTaVx5XJE86go8dFeZ3FN3rjabCAYpoYEeC9zzJVULBbmZhDyd7ko09ydpNZ3nm2Kee4FPPXHnYEF1nqOFEC08LUVcDvYXkJHW8gTaKCk9YGOeIJhqiE4ToPEepdp7IWFjdwnWaufGMwJJCMtUTTBBK9BGCOy2tGGrJTHIwyEOzp6aPzNMOtlZkDvcEWpP5SVNhfkvDxhmSazTJXYrM9U1E0xwFVwqZQwzJxw6+kGGGUj2FglGGmnb1/G51udRSMNlTw6GGnCcUwVcOpmsqTHa06o72sw1RL02p9z0VbnMLOaIX3QKaYKSCFQzBKEUNHTSc48k53RH9wxGMtpQa5KjjW0W0n6XCCCG4yxNNdhQ4R4l1Ff+2sSd6UFHiIEOyqqFgT01mEUMD+joy75jPhOA+oVVLm309FR4yVOlp4RhLiScNmSmaYF5Pw0STrOIoWMSR2UkRXOMp+M4SHW8o8Zoi6OZgjKOaFar8zZDzkWzvKOjkKBjmCXby8JahhjXULY4KlzgKLvAwxVGhvyd4zxB1d9T0piazmKLCVZY5sKiD0y2ZSYrkUEPUbIk+dlQ4SJHTR50k1DPaUWIdTZW9NJwnJMOECgd7ou/MnppMJ02O1VT4Wsh85MnZzcFTngpXGKo84qmwgKbCL/orR/SzJ2crA+t6Mp94KvxJUeIbT3CQu1uIdlQEOzlKfS3UMcrTiFmOuroocrZrT2AcmamOKg8YomeEKm/rlT2sociMaybaUlFhuqHCM2qIJ+rg4EcDFymiDSxzaHdPcpE62pD5kyM5SBMoA1PaUtfIthS85ig1VPiPPYXgYEMNk4Qq7TXBgo7oT57gPUdwgCHzhIVFPFU6OYJzHAX9m5oNrVjeE61miDrqQ4VSa1oiURTsKHC0IfjNwU2WzK6eqK8jWln4g15TVBnqmDteCJ501PGAocJhhqjZdtBEB6lnhLreFJKxmlKbeGrqLiSThVIbCdGzloasa6lpMQXHCME2boLpJgT7yWaemu6wBONbqGNVRS0PKIL7LckbjmQtR7K8I5qtqel+T/ChJTNIKLjdUMNIRyvOEko9YYl2cwQveBikCNawJKcLBbc7+JM92mysNvd/Fqp8a0k6CNEe7cnZrxlW0wQXaXjaktnRwNOGZKYiONwS7a1JVheq3WgJHlQUGKHKmp4KAxXR/ULURcNgoa4zhKSLpZR3kxRRb0NmD0OFn+UCS7CzI1nbP6+o4x47QZE5xRCt3ZagnYcvmpYQktXdk5YKXTzBC57kKEe0VVuiSYqapssMS3C9p2CKkHOg8B8Pa8p5atrIw3qezIWanMGa5HRDNF6RM9wcacl0N+Q8Z8hsIkSnaIIdHRUOEebAPy1zbCkhM062FCJtif7PU+UtoVXzWKqM1PxXO8cfdruhFQ/a6x3JKYagvVDhQEtNiyiiSQ7OsuRsZUku0CRNDs4Sog6KKjsZgk2bYJqijgsEenoKeniinRXBn/U3lgpPdyDZynQx8IiioMnCep5Ky8mjGs6Wty0l1hUQTcNWswS3WRp2kCNZwJG8omG8JphPUaFbC8lEfabwP7VtM9yoaNCAjpR41VNhrD9LkbN722v0CoZMByFzhaW+MyzRYEWFDQwN2M4/JiT76PuljT3VU/A36eaIThb+R9oZGOAJ9tewkgGvqOMNRWYjT/Cwu99Q8LqDE4TgbLWxJ1jaDDAERsFOFrobgjUsBScaguXU8kKm2RL19tRypSHnHNlHiIZqgufs4opgQdVdwxBNNFBR6kVFqb8ogimOzB6a6HTzrlDHEpYaxjiiA4TMQobkDg2vejjfwJGWmnbVFAw3H3hq2NyQfG7hz4aC+w3BbwbesG0swYayvpAs6++Ri1Vfzx93mFChvyN5xVHTS+0p9aqCAxyZ6ZacZyw5+7uuQkFPR9DDk9NOiE7X1PCYJVjVUqq7JlrHwWALF5nfHNGjApdpqgzx5OwilDhCiDYTgnc9waGW4BdLNNUQvOtpzDOWHDH8D7TR/A/85KljEQu3NREc4Pl/6B1Hhc8Umb5CsKMmGC9EPcxoT2amwHNCmeOEnOPbklnMkbOgIvO5UMOpQrS9UGVdt6iH/fURjhI/WOpaW9OKLYRod6HCUEdOX000wpDZQ6hwg6LgZfOqo1RfT/CrJzjekXOGhpc1VW71ZLbXyyp+93ILbC1kPtIEYx0FIx1VDrLoVzXRKRYWk809yYlC9ImcrinxtabKnzRJk3lAU1OLEN1j2zrYzr2myHRXJFf4h4QKT1qSTzTB5+ZNTzTRkAxX8FcLV2uS8eoQQ2aAkFzvCM72sJIcJET3WPjRk5wi32uSS9rfZajpWEvj9hW42F4o5NytSXYy8IKHay10VYdrcl4SkqscrXpMwyGOgtkajheSxdQqmpxP1L3t4R5PqasFnrQEjytq6qgp9Y09Qx9o4S1FzhUCn1kyHSzBWLemoSGvOqLNhZyBjmCaAUYpMgt4Ck7wBBMMwWKWgjsUwTaGVsxWC1mYoKiyqqeGKYqonSIRQ3KIkHO0pmAxTdBHkbOvfllfr+AA+7gnc50huVKYK393FOyg7rbPO/izI7hE4CnHHHnJ0ogNPRUGeUpsrZZTBJcrovUcJe51BPsr6GkJdhCCsZ6aTtMEb2pqWkqeVtDXE/QVggsU/Nl86d9RMF3DxvZTA58agu810RWawCiSzzXBeU3MMW9oyJUedvNEvQyNu1f10BSMddR1vaLCYpYa/mGocLSiYDcLbQz8aMn5iyF4xBNMs1P0QEOV7o5gaWGuzSeLue4tt3ro7y4Tgm4G/mopdZgl6q0o6KzJWE3mMksNr3r+a6CbT8g5wZNzT9O7fi/zpaOmnz3BRoqos+tv9zMbdpxsqDBOEewtJLt7cg5wtKKbvldpSzRRCD43VFheCI7yZLppggMVBS/KMAdHODJvOwq2NQSbKKKPLdFWQs7Fqo+mpl01JXYRgq8dnGLhTiFzqmWsUMdpllZdbKlyvSdYxhI9YghOtxR8LgSLWHK62mGGVoxzBE8LNWzqH9CUesQzFy5RQzTc56mhi6fgXEWwpKfE5Z7M05ZgZUPmo6auiv8YKzDYwWBLMErIbKHJvOwIrvEdhOBcQ9JdU1NHQ7CXn2XIDFBKU2WAgcX9UAUzDXWd5alwuyJ41Z9rjKLCL4aCp4WarhPm2rH+SaHUYE001JDZ2ZAzXPjdMpZWvC9wmqIB2lLhQ01D5jO06hghWMndbM7yRJMsoCj1vYbnFQVrW9jak3OlEJ3s/96+p33dEPRV5GxiqaGjIthUU6FFEZyqCa5qJrpBdzSw95IUnOPIrCUUjRZQFrbw5PR0R1qiYx3cb6nrWUMrBmmiBQxVHtTew5ICP/ip6g4hed/Akob/32wvBHsIOX83cI8hGeNeNPCIkPmXe8fPKx84OMSRM1MTdXSwjCZ4S30jVGhvqTRak/OVhgGazHuOCud5onEO1lJr6ecVyaOK6H7zqlBlIaHE0oroCgfvGJIdPcmfLNGLjpz7hZwZQpUbFME0A1cIJa7VNORkgfsMBatbKgwwJM9bSvQXeNOvbIjelg6WWvo5kvbKaJJNHexkKNHL9xRyFlH8Ti2riB5wVPhUk7nGkJnoCe428LR/wRGdYIlmWebCyxou1rCk4g/ShugBDX0V0ZQWkh0dOVsagkM0yV6OoLd5ye+pRlsCr0n+KiQrGuq5yJDzrTAXHtLUMduTDBVKrSm3eHL+6ijxhFDX9Z5gVU/wliHYTMiMFpKLNMEywu80wd3meoFmt6VbRMPenhrOc6DVe4pgXU8DnnHakLOIIrlF4FZPIw6R+zxBP0dyq6OOZ4Q5sLKCcz084ok+VsMMyQhNZmmBgX5xIXOEJTmi7VsGTvMTNdHHhpzdbE8Du2oKxgvBqQKdDDnTFOylCFaxR1syz2iqrOI/FEpNc3C6f11/7+ASS6l2inq2ciTrCCzgyemrCL5SVPjQkdPZUmGy2c9Sw9FtR1sS30RmsKPCS4rkIC/2U0MduwucYolGaPjKEyhzmiPYXagyWbYz8LWBDdzRimAXzxx4z8K9hpzlhLq+NiQ97HuKorMUfK/OVvC2JfiHUPCQI/q7J2gjK+tTDNxkCc4TMssqCs4TGtLVwQihyoAWgj9bosU80XGW6Ac9TJGziaUh5+hnFcHOnlaM1iRn29NaqGENTTTSUHCH2tWTeV0osUhH6psuVLjRUmGWhm6OZEshGeNowABHcJ2Bpy2ZszRcKkRXd2QuKVEeXnbfaEq825FguqfgfE2whlChSRMdron+LATTPQ2Z369t4B9C5gs/ylzv+CMmepIDPclFQl13W0rspPd1JOcbghGOEutqCv5qacURQl3dDKyvyJlqKXGPgcM9FfawJAMVmdcspcYKOZc4GjDYkFlK05olNMHyHn4zFNykyOxt99RkHlfwmiHo60l2EKI+mhreEKp080Tbug08BVPcgoqC5zWt+NLDTZ7oNSF51N1qie7Va3uCCwyZbkINf/NED6jzOsBdZjFN8oqG3wxVunqCSYYKf3EdhJyf9YWGf7tRU2oH3VHgPr1fe5J9hOgHd7xQ0y7qBwXr23aGErP0cm64JVjZwsOGqL+mhNgZmhJLW2oY4UhedsyBgzrCKrq7BmcpNVhR6jBPq64Vgi+kn6XE68pp8J5/+0wRHGOpsKenQn9DZntPzjRLZpDAdD2fnSgkG9tmIXnUwQ6WVighs7Yi2MxQ0N3CqYaCXkJ0oyOztMDJjmSSpcpvlrk0RMMOjmArQ04PRV1DO1FwhCVaUVPpKUM03JK5SxPsIWRu8/CGHi8UHChiqGFDTbSRJWeYUDDcH6vJWUxR4k1FXbMUwV6e4AJFXS8oMqsZKqzvYQ9DDQdZckY4aGsIhtlubbd2r3j4QBMoTamdPZk7O/Bf62lacZwneNjQoGcdVU7zJOd7ghsUHOkosagic6cnWc8+4gg285R6zZP5s1/LUbCKIznTwK36PkdwlOrl4U1LwfdCCa+IrvFkmgw1PCAUXKWo0sURXWcI2muKJlgyFzhynCY4RBOsqCjoI1R5zREco0n2Vt09BQtYSizgKNHfUmUrQ5UOCh51BFcLmY7umhYqXKQomOop8bUnWNNQcIiBcYaC6xzMNOS8JQQfeqKBmmglB+97ok/lfk3ygaHSyZaCRTzRxQo6GzLfa2jWBPepw+UmT7SQEJyiyRkhBLMVOfcoMjcK0eZChfUNzFAUzCsEN5vP/X1uP/n/aoMX+K+nw/Hjr/9xOo7j7Pju61tLcgvJpTWXNbfN5jLpi6VfCOviTktKlFusQixdEKWmEBUKNaIpjZRSSOXSgzaaKLdabrm1/9nZ+/f+vd/vz/v9+Xy+zZ7PRorYoZqyLrCwQdEAixxVOEXNNnjX2nUSRlkqGmWowk8lxR50JPy9Bo6qJXaXwNvREBvnThPEPrewryLhcAnj5WE15Fqi8W7R1sAuEu86S4ENikItFN4xkv9Af4nXSnUVcLiA9xzesFpivRRVeFKtsMRaKBhuSbjOELnAUtlSQUpXgdfB4Z1oSbnFEetbQ0IrAe+Y+pqnDcEJFj6S8LDZzZHwY4e3XONNlARraomNEt2bkvGsosA3ioyHm+6jCMbI59wqt4eeara28IzEmyPgoRaUOEDhTVdEJhmCoTWfC0p8aNkCp0oYqih2iqGi4yXeMkOsn4LdLLnmKfh/YogjNsPebeFGR4m9BJHLzB61XQ3BtpISfS2FugsK9FAtLWX1dCRcrCnUp44CNzuCowUZmxSRgYaE6Za0W2u/E7CVXCiI/UOR8aAm1+OSyE3mOUcwyc1zBBeoX1kiKy0Zfxck1Gsyulti11i83QTBF5Kg3pDQThFMVHiPSlK+0cSedng/VaS8bOZbtsBcTcZAR8JP5KeqQ1OYKAi20njdNNRpgnsU//K+JnaXJaGTomr7aYIphoRn9aeShJWKEq9LcozSF7QleEfDI5LYm5bgVkFkRwVDBCVu0DDIkGupo8TZBq+/pMQURYErJQmPKGKjNDkWOLx7Jd5QizdUweIaKrlP7SwJDhZvONjLkOsBBX9UpGxnydhXkfBLQ8IxgojQbLFnJf81JytSljclYYyEFyx0kVBvKWOFJmONpshGAcsduQY5giVNCV51eOdJYo/pLhbvM0uDHSevNKRcrKZIqnCtJeEsO95RoqcgGK4ocZcho1tTYtcZvH41pNQ7vA0WrhIfOSraIIntIAi+NXWCErdbkvrWwjRLrt0NKUdL6KSOscTOdMSOUtBHwL6OLA0vNSdynaWQEnCpIvKaIrJJEbvHkmuNhn6OjM8VkSGSqn1uYJCGHnq9I3aLhNME3t6GjIkO7xrNFumpyTNX/NrwX7CrIRiqqWijI9JO4d1iieykyfiposQIQ8YjjsjlBh6oHWbwRjgYJQn2NgSnNycmJAk3NiXhx44Sxykihxm8ybUwT1OVKySc7vi3OXVkdBJ4AyXBeksDXG0IhgtYY0lY5ahCD0ehborIk5aUWRJviMA7Xt5kyRjonrXENkm8yYqgs8VzgrJmClK20uMM3jRJ0FiQICQF9hdETlLQWRIb5ki6WDfWRPobvO6a4GP5mcOrNzDFELtTkONLh9dXE8xypEg7z8A9jkhrQ6Fhjlg/QVktJXxt4WXzT/03Q8IaQWSqIuEvloQ2mqC9Jfi7wRul4RX3pSPlzpoVlmCtI2jvKHCFhjcM3sN6lqF6HxnKelLjXWbwrpR4xzuCrTUZx2qq9oAh8p6ixCUGr78g8oyjRAtB5CZFwi80VerVpI0h+IeBxa6Zg6kWvpDHaioYYuEsRbDC3eOmC2JvGYLeioxGknL2UATNJN6hmtj1DlpLvDVmocYbrGCVJKOrg4X6DgddLA203BKMFngdJJFtFd7vJLm6KEpc5yjQrkk7M80SGe34X24nSex1Ra5Omgb71JKyg8SrU3i/kARKwWpH0kOGhKkObyfd0ZGjvyXlAkVZ4xRbYJ2irFMkFY1SwyWxr2oo4zlNiV+7zmaweFpT4kR3kaDAFW6xpSqzJay05FtYR4HmZhc9UxKbbfF2V8RG1MBmSaE+kmC6JnaRXK9gsiXhJHl/U0qM0WTcbyhwkYIvFGwjSbjfwhiJt8ZSQU+Bd5+marPMOkVkD0muxYLIfEuhh60x/J92itguihJSEMySVPQnTewnEm+620rTQEMsOfo4/kP/0ARvWjitlpSX7GxBgcMEsd3EEeYWvdytd+Saawi6aCIj1CkGb6Aj9rwhx16Cf3vAwFy5pyLhVonXzy51FDpdEblbkdJbUcEPDEFzQ8qNmhzzLTmmKWKbFCXeEuRabp6rxbvAtLF442QjQ+wEA9eL1xSR7Q0JXzlSHjJ4exq89yR0laScJ/FW6z4a73pFMEfDiRZvuvijIt86RaSFOl01riV2mD1UEvxGk/Geg5aWwGki1zgKPG9J2U8PEg8qYvMsZeytiTRXBMslCU8JSlxi8EabjwUldlDNLfzTUmCgxWsjqWCOHavYAqsknKFIO0yQ61VL5AVFxk6WhEaCAkdJgt9aSkzXlKNX2jEa79waYuc7gq0N3GDJGCBhoiTXUEPsdknCUE1CK0fwsiaylSF2uiDyO4XX3pFhNd7R4itFGc0k/ElBZwWvq+GC6szVeEoS/MZ+qylwpKNKv9Z469UOjqCjwlusicyTxG6VpNxcQ8IncoR4RhLbR+NdpGGmJWOcIzJGUuKPGpQg8rrG21dOMqQssJQ4RxH5jaUqnZuQ0F4Q+cjxLwPtpZbIAk3QTJHQWBE5S1BokoVtDd6lhqr9UpHSUxMcIYl9pojsb8h4SBOsMQcqvOWC2E8EVehqiJ1hrrAEbQxeK0NGZ0Gkq+guSRgniM23bIHVkqwx4hiHd7smaOyglyIyQuM978j4VS08J/A2G1KeMBRo4fBaSNhKUEZfQewVQ/C1I+MgfbEleEzCUw7mKXI0M3hd1EESVji8x5uQ41nxs1q4RMJCCXs7Iq9acpxn22oSDnQ/sJTxsCbHIYZiLyhY05TY0ZLIOQrGaSJDDN4t8pVaIrsqqFdEegtizc1iTew5Q4ayBDMUsQMkXocaYkc0hZua412siZ1rSXlR460zRJ5SlHGe5j801RLMlJTxtaOM3Q1pvxJ45zUlWFD7rsAbpfEm1JHxG0eh8w2R7QQVzBUw28FhFp5QZzq8t2rx2joqulYTWSuJdTYfWwqMFMcovFmSyJPNyLhE4E10pHzYjOC3huArRa571ZsGajQpQx38SBP5pyZB6lMU3khDnp0MBV51BE9o2E+TY5Ml2E8S7C0o6w1xvCZjf0HkVEHCzFoyNmqC+9wdcqN+Tp7jSDheE9ws8Y5V0NJCn2bk2tqSY4okdrEhx1iDN8cSudwepWmAGXKcJXK65H9to8jYQRH7SBF01ESUJdd0TayVInaWhLkOjlXE5irKGOnI6GSWGCJa482zBI9rCr0jyTVcEuzriC1vcr6mwFGSiqy5zMwxBH/TJHwjSPhL8+01kaaSUuMFKTcLEvaUePcrSmwn8DZrgikWb7CGPxkSjhQwrRk57tctmxLsb9sZvL9LSlyuSLlWkqOjwduo8b6Uv1DkmudIeFF2dHCgxVtk8dpIvHpBxhEOdhKk7OLIUSdJ+cSRY57B+0DgGUUlNfpthTfGkauzxrvTsUUaCVhlKeteTXCoJDCa2NOKhOmC4G1H8JBd4OBZReSRGkqcb/CO1PyLJTLB4j1q8JYaIutEjSLX8YKM+a6phdMsdLFUoV5RTm9JSkuDN8WcIon0NZMNZWh1q8C7SJEwV5HxrmnnTrf3KoJBlmCYI2ilSLlfEvlE4011NNgjgthzEua0oKK7JLE7HZHlEl60BLMVFewg4EWNt0ThrVNEVkkiTwpKXSWJzdRENgvKGq4IhjsiezgSFtsfCUq8qki5S1LRQeYQQ4nemmCkImWMw3tFUoUBZk4NOeZYEp4XRKTGa6wJjrWNHBVJR4m3FCnbuD6aak2WsMTh3SZImGCIPKNgsDpVwnsa70K31lCFJZYcwwSMFcQulGTsZuEaSdBXkPGZhu0FsdUO73RHjq8MPGGIfaGIbVTk6iuI3GFgucHrIQkmWSJdBd7BBu+uOryWAhY7+Lki9rK5wtEQzWwvtbqGhIMFwWRJsElsY4m9IIg9L6lCX0VklaPAYkfkZEGDnOWowlBJjtMUkcGK4Lg6EtoZInMUBVYLgn0UsdmCyCz7gIGHFfk+k1QwTh5We7A9x+IdJ6CvIkEagms0hR50eH9UnTQJ+2oiKyVlLFUE+8gBGu8MQ3CppUHesnjTHN4QB/UGPhCTHLFPHMFrCqa73gqObUJGa03wgbhHkrCfpEpzNLE7JDS25FMKhlhKKWKfCgqstLCPu1zBXy0J2ztwjtixBu8UTRn9LVtkmCN2iyFhtME70JHRQ1KVZXqKI/KNIKYMCYs1GUMEKbM1bKOI9LDXC7zbHS+bt+1MTWS9odA9DtrYtpbImQJ2VHh/lisEwaHqUk1kjKTAKknkBEXkbkdMGwq0dnhzLJF3NJH3JVwrqOB4Sca2hti75nmJN0WzxS6UxDYoEpxpa4htVlRjkYE7DZGzJVU72uC9IyhQL4i8YfGWSYLLNcHXloyz7QhNifmKSE9JgfGmuyLhc403Xm9vqcp6gXe3xuuv8F6VJNxkyTHEkHG2g0aKXL0MsXc1bGfgas2//dCONXiNLCX+5mB7eZIl1kHh7ajwpikyzlUUWOVOsjSQlsS+M0R+pPje/dzBXRZGO0rMtgQrLLG9VSu9n6CMXS3BhwYmSoIBhsjNBmZbgusE9BCPCP5triU4VhNbJfE+swSP27aayE8tuTpYYjtrYjMVGZdp2NpS1s6aBnKSHDsbKuplKbHM4a0wMFd/5/DmGyKrJSUaW4IBrqUhx0vyfzTBBLPIUcnZdrAkNsKR0sWRspumSns6Ch0v/qqIbBYUWKvPU/CFoyrDJGwSNFhbA/MlzKqjrO80hRbpKx0Jewsi/STftwGSlKc1JZyAzx05dhLEdnfQvhZOqiHWWEAHC7+30FuRcZUgaO5gpaIK+xsiHRUsqaPElTV40xQZQ107Q9BZE1nryDVGU9ZSQ47bmhBpLcYpUt7S+xuK/FiT8qKjwXYw5ypS2iuCv7q1gtgjhuBuB8LCFY5cUuCNtsQOFcT+4Ih9JX+k8Ea6v0iCIRZOtCT0Et00JW5UeC85Cg0ScK0k411HcG1zKtre3SeITBRk7WfwDhEvaYLTHP9le0m8By0JDwn4TlLW/aJOvGHxdjYUes+ScZigCkYQdNdEOhkiezgShqkx8ueKjI8lDfK2oNiOFvrZH1hS+tk7NV7nOmLHicGWEgubkXKdwdtZknCLJXaCpkrjZBtLZFsDP9CdxWsSr05Sxl6CMmoFbCOgryX40uDtamB7SVmXW4Ihlgpmq+00tBKUUa83WbjLUNkzDmY7cow1JDygyPGlhgGKYKz4vcV7QBNbJIgM11TUqZaMdwTeSguH6rOaw1JRKzaaGyxVm2EJ/uCIrVWUcZUkcp2grMsEjK+DMwS59jQk3Kd6SEq1d0S6uVmO4Bc1lDXTUcHjluCXEq+1OlBDj1pi9zgiXxnKuE0SqTXwhqbETW6RggMEnGl/q49UT2iCzgJvRwVXS2K/d6+ZkyUl7jawSVLit46EwxVljDZwoSQ20sDBihztHfk2yA8NVZghiXwrYHQdfKAOtzsayjhY9bY0yE2CWEeJ9xfzO423xhL5syS2TFJofO2pboHob0nY4GiAgRrvGQEDa/FWSsoaaYl0syRsEt3kWoH3B01shCXhTUWe9w3Bt44SC9QCh3eShQctwbaK2ApLroGCMlZrYqvlY3qYhM0aXpFkPOuoqJ3Dm6fxXrGwVF9gCWZagjPqznfkuMKQ8DPTQRO8ZqG1hPGKEm9IgpGW4DZDgTNriTxvFiq+Lz+0cKfp4wj6OCK9JSnzNSn9LFU7UhKZZMnYwcJ8s8yRsECScK4j5UOB95HFO0CzhY4xJxuCix0lDlEUeMdS6EZBkTsUkZ4K74dugyTXS7aNgL8aqjDfkCE0ZbwkCXpaWCKhl8P7VD5jxykivSyxyZrYERbe168LYu9ZYh86IkscgVLE7tWPKmJv11CgoyJltMEbrohtVAQfO4ImltiHEroYEs7RxAarVpY8AwXMcMReFOTYWe5iiLRQxJ5Q8DtJ8LQhWOhIeFESPGsILhbNDRljNbHzNRlTFbk2S3L0NOS6V1KFJYKUbSTcIIhM0wQ/s2TM0SRMNcQmSap3jCH4yhJZKSkwyRHpYYgsFeQ4U7xoCB7VVOExhXepo9ABBsYbvGWKXPME3lyH95YioZ0gssQRWWbI+FaSMkXijZXwgiTlYdPdkNLaETxlyDVIwqeaEus0aTcYcg0RVOkpR3CSJqIddK+90JCxzsDVloyrFd5ZAr4TBKfaWa6boEA7C7s6EpYaeFPjveooY72mjIccLHJ9HUwVlDhKkmutJDJBwnp1rvulJZggKDRfbXAkvC/4l3ozQOG9a8lxjx0i7nV4jSXc7vhe3OwIxjgSHjdEhhsif9YkPGlus3iLFDnWOFhtCZbJg0UbQcIaR67JjthoCyMEZRwhiXWyxO5QxI6w5NhT4U1WsJvDO60J34fW9hwzwlKij6ZAW9ne4L0s8C6XeBMEkd/LQy1VucBRot6QMlbivaBhoBgjqGiCJNhsqVp/S2SsG6DIONCR0dXhvWbJ+MRRZJkkuEjgDXJjFQW6SSL7GXK8Z2CZg7cVsbWGoKmEpzQ5elpiy8Ryg7dMkLLUEauzeO86CuwlSOlgYLojZWeJ9xM3S1PWfEfKl5ISLQ0MEKR8YOB2QfCxJBjrKPCN4f9MkaSsqoVXJBmP7EpFZ9UQfOoOFwSzBN4MQ8LsGrymlipcJQhmy0GaQjPqCHaXRwuCZwRbqK2Fg9wlClZqYicrIgMdZfxTQ0c7TBIbrChxmuzoKG8XRaSrIhhiyNFJkrC7oIAWMEOQa5aBekPCRknCo4IKPrYkvCDI8aYmY7WFtprgekcJZ3oLIqssCSMtFbQTJKwXYy3BY5oCh2iKPCpJOE+zRdpYgi6O2KmOAgvVCYaU4ySRek1sgyFhJ403QFHiVEmJHwtybO1gs8Hr5+BETQX3War0qZngYGgtVZtoqd6vFSk/UwdZElYqyjrF4HXUeFspIi9IGKf4j92pKGAdCYMVsbcV3kRF0N+R8LUd5PCsIGWoxDtBkCI0nKofdJQxT+LtZflvuc8Q3CjwWkq8KwUpHzkK/NmSsclCL0nseQdj5FRH5CNHSgtLiW80Of5HU9Hhlsga9bnBq3fEVltKfO5IaSTmGjjc4J0otcP7QsJUSQM8pEj5/wCuUuC2DWz8AAAAAElFTkSuQmCC\");\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/base16-dark.css":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/base16-dark.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Base16 Default Dark\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }\n.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }\n.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }\n.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }\n.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }\n.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }\n\n.cm-s-base16-dark span.cm-comment { color: #8f5536; }\n.cm-s-base16-dark span.cm-atom { color: #aa759f; }\n.cm-s-base16-dark span.cm-number { color: #aa759f; }\n\n.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }\n.cm-s-base16-dark span.cm-keyword { color: #ac4142; }\n.cm-s-base16-dark span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-dark span.cm-variable { color: #90a959; }\n.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-dark span.cm-def { color: #d28445; }\n.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }\n.cm-s-base16-dark span.cm-tag { color: #ac4142; }\n.cm-s-base16-dark span.cm-link { color: #aa759f; }\n.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }\n\n.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }\n.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/base16-light.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/base16-light.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Base16 Default Light\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }\n.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }\n.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }\n\n.cm-s-base16-light span.cm-comment { color: #8f5536; }\n.cm-s-base16-light span.cm-atom { color: #aa759f; }\n.cm-s-base16-light span.cm-number { color: #aa759f; }\n\n.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }\n.cm-s-base16-light span.cm-keyword { color: #ac4142; }\n.cm-s-base16-light span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-light span.cm-variable { color: #90a959; }\n.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-light span.cm-def { color: #d28445; }\n.cm-s-base16-light span.cm-bracket { color: #202020; }\n.cm-s-base16-light span.cm-tag { color: #ac4142; }\n.cm-s-base16-light span.cm-link { color: #aa759f; }\n.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }\n\n.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }\n.cm-s-base16-light .CodeMirror-matchingbracket { color: #f5f5f5 !important; background-color: #6A9FB5 !important}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/bespin.css":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/bespin.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Bespin\n    Author:     Mozilla / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}\n.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}\n.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}\n.cm-s-bespin .CodeMirror-linenumber {color: #666666;}\n.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}\n\n.cm-s-bespin span.cm-comment {color: #937121;}\n.cm-s-bespin span.cm-atom {color: #9b859d;}\n.cm-s-bespin span.cm-number {color: #9b859d;}\n\n.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}\n.cm-s-bespin span.cm-keyword {color: #cf6a4c;}\n.cm-s-bespin span.cm-string {color: #f9ee98;}\n\n.cm-s-bespin span.cm-variable {color: #54be0d;}\n.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}\n.cm-s-bespin span.cm-def {color: #cf7d34;}\n.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}\n.cm-s-bespin span.cm-bracket {color: #9d9b97;}\n.cm-s-bespin span.cm-tag {color: #cf6a4c;}\n.cm-s-bespin span.cm-link {color: #9b859d;}\n\n.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/blackboard.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/blackboard.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/cobalt.css":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/cobalt.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/colorforth.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/colorforth.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/darcula.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/darcula.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n    Name: IntelliJ IDEA darcula theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-darcula  { font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;}\n.cm-s-darcula.CodeMirror { background: #2B2B2B; color: #A9B7C6; } \n\n.cm-s-darcula span.cm-meta { color: #BBB529; }\n.cm-s-darcula span.cm-number { color: #6897BB; }\n.cm-s-darcula span.cm-keyword { color: #CC7832; line-height: 1em; font-weight: bold; }  \n.cm-s-darcula span.cm-def { color: #A9B7C6; font-style: italic; }\n.cm-s-darcula span.cm-variable { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-2 { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-3 { color: #9876AA; }\n.cm-s-darcula span.cm-type { color: #AABBCC; font-weight: bold; }\n.cm-s-darcula span.cm-property { color: #FFC66D; }\n.cm-s-darcula span.cm-operator { color: #A9B7C6; }\n.cm-s-darcula span.cm-string { color: #6A8759; }\n.cm-s-darcula span.cm-string-2 { color: #6A8759; }\n.cm-s-darcula span.cm-comment { color: #61A151; font-style: italic; } \n.cm-s-darcula span.cm-link { color: #CC7832; }\n.cm-s-darcula span.cm-atom { color: #CC7832; }\n.cm-s-darcula span.cm-error { color: #BC3F3C; }\n.cm-s-darcula span.cm-tag { color: #629755; font-weight: bold; font-style: italic; text-decoration: underline; }\n.cm-s-darcula span.cm-attribute { color: #6897bb; }\n.cm-s-darcula span.cm-qualifier { color: #6A8759; }\n.cm-s-darcula span.cm-bracket { color: #A9B7C6; }\n.cm-s-darcula span.cm-builtin { color: #FF9E59; }\n.cm-s-darcula span.cm-special { color: #FF9E59; }\n\n.cm-s-darcula .CodeMirror-cursor { border-left: 1px solid #A9B7C6; }  \n.cm-s-darcula .CodeMirror-activeline-background { background: #323232; } \n.cm-s-darcula .CodeMirror-gutters { background: #313335; border-right: 1px solid #313335; } \n.cm-s-darcula .CodeMirror-guttermarker { color: #FFEE80; }  \n.cm-s-darcula .CodeMirror-guttermarker-subtle { color: #D0D0D0; }  \n.cm-s-darcula .CodeMirrir-linenumber { color: #606366; } \n.cm-s-darcula .CodeMirror-matchingbracket { background-color: #3B514D; color: #FFEF28 !important; font-weight: bold; } \n\n.cm-s-darcula div.CodeMirror-selected { background: #214283; }  \n\n.CodeMirror-hints.darcula {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #9C9E9E;\n  background-color: #3B3E3F !important;\n}\n\n.CodeMirror-hints.darcula .CodeMirror-hint-active {\n  background-color: #494D4E !important;\n  color: #9C9E9E !important;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/dracula.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/dracula.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/duotone-dark.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/duotone-dark.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/duotone-light.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/duotone-light.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nName:   DuoTone-Light\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-light.CodeMirror { background: #faf8f5; color: #b29762; }\n.cm-s-duotone-light div.CodeMirror-selected { background: #e3dcce !important; }\n.cm-s-duotone-light .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }\n.cm-s-duotone-light .CodeMirror-linenumber { color: #cdc4b1; }\n\n/* begin cursor */\n.cm-s-duotone-light .CodeMirror-cursor { border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */ border-right: .5em solid #93abdc; /* border-right: .5em solid #93abdc80; */ opacity: .5; }\n.cm-s-duotone-light .CodeMirror-activeline-background { background: #e3dcce;  /* background: #e3dcce80; */ opacity: .5; }\n.cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor { background: #93abdc; /* #93abdc80; */ opacity: .5; }\n/* end cursor */\n\n.cm-s-duotone-light span.cm-atom, .cm-s-duotone-light span.cm-number, .cm-s-duotone-light span.cm-keyword, .cm-s-duotone-light span.cm-variable, .cm-s-duotone-light span.cm-attribute, .cm-s-duotone-light span.cm-quote, .cm-s-duotone-light-light span.cm-hr, .cm-s-duotone-light-light span.cm-link { color: #063289; }\n\n.cm-s-duotone-light span.cm-property { color: #b29762; }\n.cm-s-duotone-light span.cm-punctuation, .cm-s-duotone-light span.cm-unit, .cm-s-duotone-light span.cm-negative { color: #063289; }\n.cm-s-duotone-light span.cm-string, .cm-s-duotone-light span.cm-operator { color: #1659df; }\n.cm-s-duotone-light span.cm-positive { color: #896724; }\n\n.cm-s-duotone-light span.cm-variable-2, .cm-s-duotone-light span.cm-variable-3, .cm-s-duotone-light span.cm-type, .cm-s-duotone-light span.cm-string-2, .cm-s-duotone-light span.cm-url { color: #896724; }\n.cm-s-duotone-light span.cm-def, .cm-s-duotone-light span.cm-tag, .cm-s-duotone-light span.cm-builtin, .cm-s-duotone-light span.cm-qualifier, .cm-s-duotone-light span.cm-header, .cm-s-duotone-light span.cm-em { color: #2d2006; }\n.cm-s-duotone-light span.cm-bracket, .cm-s-duotone-light span.cm-comment { color: #b6ad9a; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n/* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */\n.cm-s-duotone-light span.cm-error, .cm-s-duotone-light span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-light span.cm-header { font-weight: normal; }\n.cm-s-duotone-light .CodeMirror-matchingbracket { text-decoration: underline; color: #faf8f5 !important; }\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/eclipse.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/eclipse.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-eclipse span.cm-meta { color: #FF1717; }\n.cm-s-eclipse span.cm-keyword { line-height: 1em; font-weight: bold; color: #7F0055; }\n.cm-s-eclipse span.cm-atom { color: #219; }\n.cm-s-eclipse span.cm-number { color: #164; }\n.cm-s-eclipse span.cm-def { color: #00f; }\n.cm-s-eclipse span.cm-variable { color: black; }\n.cm-s-eclipse span.cm-variable-2 { color: #0000C0; }\n.cm-s-eclipse span.cm-variable-3, .cm-s-eclipse span.cm-type { color: #0000C0; }\n.cm-s-eclipse span.cm-property { color: black; }\n.cm-s-eclipse span.cm-operator { color: black; }\n.cm-s-eclipse span.cm-comment { color: #3F7F5F; }\n.cm-s-eclipse span.cm-string { color: #2A00FF; }\n.cm-s-eclipse span.cm-string-2 { color: #f50; }\n.cm-s-eclipse span.cm-qualifier { color: #555; }\n.cm-s-eclipse span.cm-builtin { color: #30a; }\n.cm-s-eclipse span.cm-bracket { color: #cc7; }\n.cm-s-eclipse span.cm-tag { color: #170; }\n.cm-s-eclipse span.cm-attribute { color: #00c; }\n.cm-s-eclipse span.cm-link { color: #219; }\n.cm-s-eclipse span.cm-error { color: #f00; }\n\n.cm-s-eclipse .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-eclipse .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/elegant.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/elegant.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-elegant span.cm-number, .cm-s-elegant span.cm-string, .cm-s-elegant span.cm-atom { color: #762; }\n.cm-s-elegant span.cm-comment { color: #262; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-meta { color: #555; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-variable { color: black; }\n.cm-s-elegant span.cm-variable-2 { color: #b11; }\n.cm-s-elegant span.cm-qualifier { color: #555; }\n.cm-s-elegant span.cm-keyword { color: #730; }\n.cm-s-elegant span.cm-builtin { color: #30a; }\n.cm-s-elegant span.cm-link { color: #762; }\n.cm-s-elegant span.cm-error { background-color: #fdd; }\n\n.cm-s-elegant .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-elegant .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/erlang-dark.css":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/erlang-dark.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-erlang-dark.CodeMirror { background: #002240; color: white; }\n.cm-s-erlang-dark div.CodeMirror-selected { background: #b36539; }\n.cm-s-erlang-dark .CodeMirror-line::selection, .cm-s-erlang-dark .CodeMirror-line > span::selection, .cm-s-erlang-dark .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-erlang-dark .CodeMirror-line::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-erlang-dark .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-erlang-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-erlang-dark .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-erlang-dark .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-erlang-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-erlang-dark span.cm-quote      { color: #ccc; }\n.cm-s-erlang-dark span.cm-atom       { color: #f133f1; }\n.cm-s-erlang-dark span.cm-attribute  { color: #ff80e1; }\n.cm-s-erlang-dark span.cm-bracket    { color: #ff9d00; }\n.cm-s-erlang-dark span.cm-builtin    { color: #eaa; }\n.cm-s-erlang-dark span.cm-comment    { color: #77f; }\n.cm-s-erlang-dark span.cm-def        { color: #e7a; }\n.cm-s-erlang-dark span.cm-keyword    { color: #ffee80; }\n.cm-s-erlang-dark span.cm-meta       { color: #50fefe; }\n.cm-s-erlang-dark span.cm-number     { color: #ffd0d0; }\n.cm-s-erlang-dark span.cm-operator   { color: #d55; }\n.cm-s-erlang-dark span.cm-property   { color: #ccc; }\n.cm-s-erlang-dark span.cm-qualifier  { color: #ccc; }\n.cm-s-erlang-dark span.cm-special    { color: #ffbbbb; }\n.cm-s-erlang-dark span.cm-string     { color: #3ad900; }\n.cm-s-erlang-dark span.cm-string-2   { color: #ccc; }\n.cm-s-erlang-dark span.cm-tag        { color: #9effff; }\n.cm-s-erlang-dark span.cm-variable   { color: #50fe50; }\n.cm-s-erlang-dark span.cm-variable-2 { color: #e0e; }\n.cm-s-erlang-dark span.cm-variable-3, .cm-s-erlang-dark span.cm-type { color: #ccc; }\n.cm-s-erlang-dark span.cm-error      { color: #9d1e15; }\n\n.cm-s-erlang-dark .CodeMirror-activeline-background { background: #013461; }\n.cm-s-erlang-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/gruvbox-dark.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/gruvbox-dark.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       gruvbox-dark\n    Author:     kRkk (https://github.com/krkk)\n\n    Original gruvbox color scheme by Pavel Pertsev (https://github.com/morhetz/gruvbox)\n\n*/\n\n.cm-s-gruvbox-dark.CodeMirror, .cm-s-gruvbox-dark .CodeMirror-gutters { background-color: #282828; color: #bdae93; }\n.cm-s-gruvbox-dark .CodeMirror-gutters {background: #282828; border-right: 0px;}\n.cm-s-gruvbox-dark .CodeMirror-linenumber {color: #7c6f64;}\n.cm-s-gruvbox-dark .CodeMirror-cursor { border-left: 1px solid #ebdbb2; }\n.cm-s-gruvbox-dark div.CodeMirror-selected { background: #928374; }\n.cm-s-gruvbox-dark span.cm-meta { color: #83a598; }\n\n.cm-s-gruvbox-dark span.cm-comment { color: #928374; }\n.cm-s-gruvbox-dark span.cm-number, span.cm-atom { color: #d3869b; }\n.cm-s-gruvbox-dark span.cm-keyword { color: #f84934; }\n\n.cm-s-gruvbox-dark span.cm-variable { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-2 { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-3, .cm-s-gruvbox-dark span.cm-type { color: #fabd2f; }\n.cm-s-gruvbox-dark span.cm-operator { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-callee { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-def { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-property { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-string { color: #b8bb26; }\n.cm-s-gruvbox-dark span.cm-string-2 { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-qualifier { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-attribute { color: #8ec07c; }\n\n.cm-s-gruvbox-dark .CodeMirror-activeline-background { background: #3c3836; }\n.cm-s-gruvbox-dark .CodeMirror-matchingbracket { background: #928374; color:#282828 !important; }\n\n.cm-s-gruvbox-dark span.cm-builtin { color: #fe8019; }\n.cm-s-gruvbox-dark span.cm-tag { color: #fe8019; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/hopscotch.css":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/hopscotch.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/icecoder.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/icecoder.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nICEcoder default theme by Matt Pass, used in code editor available at https://icecoder.net\n*/\n\n.cm-s-icecoder { color: #666; background: #1d1d1b; }\n\n.cm-s-icecoder span.cm-keyword { color: #eee; font-weight:bold; }  /* off-white 1 */\n.cm-s-icecoder span.cm-atom { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-number { color: #6cb5d9; }                  /* blue */\n.cm-s-icecoder span.cm-def { color: #b9ca4a; }                     /* green */\n\n.cm-s-icecoder span.cm-variable { color: #6cb5d9; }                /* blue */\n.cm-s-icecoder span.cm-variable-2 { color: #cc1e5c; }              /* pink */\n.cm-s-icecoder span.cm-variable-3, .cm-s-icecoder span.cm-type { color: #f9602c; } /* orange */\n\n.cm-s-icecoder span.cm-property { color: #eee; }                   /* off-white 1 */\n.cm-s-icecoder span.cm-operator { color: #9179bb; }                /* purple */\n.cm-s-icecoder span.cm-comment { color: #97a3aa; }                 /* grey-blue */\n\n.cm-s-icecoder span.cm-string { color: #b9ca4a; }                  /* green */\n.cm-s-icecoder span.cm-string-2 { color: #6cb5d9; }                /* blue */\n\n.cm-s-icecoder span.cm-meta { color: #555; }                       /* grey */\n\n.cm-s-icecoder span.cm-qualifier { color: #555; }                  /* grey */\n.cm-s-icecoder span.cm-builtin { color: #214e7b; }                 /* bright blue */\n.cm-s-icecoder span.cm-bracket { color: #cc7; }                    /* grey-yellow */\n\n.cm-s-icecoder span.cm-tag { color: #e8e8e8; }                     /* off-white 2 */\n.cm-s-icecoder span.cm-attribute { color: #099; }                  /* teal */\n\n.cm-s-icecoder span.cm-header { color: #6a0d6a; }                  /* purple-pink */\n.cm-s-icecoder span.cm-quote { color: #186718; }                   /* dark green */\n.cm-s-icecoder span.cm-hr { color: #888; }                         /* mid-grey */\n.cm-s-icecoder span.cm-link { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-error { color: #d00; }                      /* red */\n\n.cm-s-icecoder .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-icecoder div.CodeMirror-selected { color: #fff; background: #037; }\n.cm-s-icecoder .CodeMirror-gutters { background: #1d1d1b; min-width: 41px; border-right: 0; }\n.cm-s-icecoder .CodeMirror-linenumber { color: #555; cursor: default; }\n.cm-s-icecoder .CodeMirror-matchingbracket { color: #fff !important; background: #555 !important; }\n.cm-s-icecoder .CodeMirror-activeline-background { background: #000; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/idea.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/idea.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n    Name:       IDEA default theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-idea span.cm-meta { color: #808000; }\n.cm-s-idea span.cm-number { color: #0000FF; }\n.cm-s-idea span.cm-keyword { line-height: 1em; font-weight: bold; color: #000080; }\n.cm-s-idea span.cm-atom { font-weight: bold; color: #000080; }\n.cm-s-idea span.cm-def { color: #000000; }\n.cm-s-idea span.cm-variable { color: black; }\n.cm-s-idea span.cm-variable-2 { color: black; }\n.cm-s-idea span.cm-variable-3, .cm-s-idea span.cm-type { color: black; }\n.cm-s-idea span.cm-property { color: black; }\n.cm-s-idea span.cm-operator { color: black; }\n.cm-s-idea span.cm-comment { color: #808080; }\n.cm-s-idea span.cm-string { color: #008000; }\n.cm-s-idea span.cm-string-2 { color: #008000; }\n.cm-s-idea span.cm-qualifier { color: #555; }\n.cm-s-idea span.cm-error { color: #FF0000; }\n.cm-s-idea span.cm-attribute { color: #0000FF; }\n.cm-s-idea span.cm-tag { color: #000080; }\n.cm-s-idea span.cm-link { color: #0000FF; }\n.cm-s-idea .CodeMirror-activeline-background { background: #FFFAE3; }\n\n.cm-s-idea span.cm-builtin { color: #30a; }\n.cm-s-idea span.cm-bracket { color: #cc7; }\n.cm-s-idea  { font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;}\n\n\n.cm-s-idea .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n\n.CodeMirror-hints.idea {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #616569;\n  background-color: #ebf3fd !important;\n}\n\n.CodeMirror-hints.idea .CodeMirror-hint-active {\n  background-color: #a2b8c9 !important;\n  color: #5c6065 !important;\n}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/isotope.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/isotope.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Isotope\n    Author:     David Desandro / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-isotope.CodeMirror {background: #000000; color: #e0e0e0;}\n.cm-s-isotope div.CodeMirror-selected {background: #404040 !important;}\n.cm-s-isotope .CodeMirror-gutters {background: #000000; border-right: 0px;}\n.cm-s-isotope .CodeMirror-linenumber {color: #808080;}\n.cm-s-isotope .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}\n\n.cm-s-isotope span.cm-comment {color: #3300ff;}\n.cm-s-isotope span.cm-atom {color: #cc00ff;}\n.cm-s-isotope span.cm-number {color: #cc00ff;}\n\n.cm-s-isotope span.cm-property, .cm-s-isotope span.cm-attribute {color: #33ff00;}\n.cm-s-isotope span.cm-keyword {color: #ff0000;}\n.cm-s-isotope span.cm-string {color: #ff0099;}\n\n.cm-s-isotope span.cm-variable {color: #33ff00;}\n.cm-s-isotope span.cm-variable-2 {color: #0066ff;}\n.cm-s-isotope span.cm-def {color: #ff9900;}\n.cm-s-isotope span.cm-error {background: #ff0000; color: #c0c0c0;}\n.cm-s-isotope span.cm-bracket {color: #e0e0e0;}\n.cm-s-isotope span.cm-tag {color: #ff0000;}\n.cm-s-isotope span.cm-link {color: #cc00ff;}\n\n.cm-s-isotope .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-isotope .CodeMirror-activeline-background { background: #202020; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/lesser-dark.css":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/lesser-dark.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/liquibyte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/liquibyte.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-liquibyte.CodeMirror {\n\tbackground-color: #000;\n\tcolor: #fff;\n\tline-height: 1.2em;\n\tfont-size: 1em;\n}\n.cm-s-liquibyte .CodeMirror-focused .cm-matchhighlight {\n\ttext-decoration: underline;\n\ttext-decoration-color: #0f0;\n\ttext-decoration-style: wavy;\n}\n.cm-s-liquibyte .cm-trailingspace {\n\ttext-decoration: line-through;\n\ttext-decoration-color: #f00;\n\ttext-decoration-style: dotted;\n}\n.cm-s-liquibyte .cm-tab {\n\ttext-decoration: line-through;\n\ttext-decoration-color: #404040;\n\ttext-decoration-style: dotted;\n}\n.cm-s-liquibyte .CodeMirror-gutters { background-color: #262626; border-right: 1px solid #505050; padding-right: 0.8em; }\n.cm-s-liquibyte .CodeMirror-gutter-elt div { font-size: 1.2em; }\n.cm-s-liquibyte .CodeMirror-guttermarker {  }\n.cm-s-liquibyte .CodeMirror-guttermarker-subtle {  }\n.cm-s-liquibyte .CodeMirror-linenumber { color: #606060; padding-left: 0; }\n.cm-s-liquibyte .CodeMirror-cursor { border-left: 1px solid #eee; }\n\n.cm-s-liquibyte span.cm-comment     { color: #008000; }\n.cm-s-liquibyte span.cm-def         { color: #ffaf40; font-weight: bold; }\n.cm-s-liquibyte span.cm-keyword     { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-builtin     { color: #ffaf40; font-weight: bold; }\n.cm-s-liquibyte span.cm-variable    { color: #5967ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-string      { color: #ff8000; }\n.cm-s-liquibyte span.cm-number      { color: #0f0; font-weight: bold; }\n.cm-s-liquibyte span.cm-atom        { color: #bf3030; font-weight: bold; }\n\n.cm-s-liquibyte span.cm-variable-2  { color: #007f7f; font-weight: bold; }\n.cm-s-liquibyte span.cm-variable-3, .cm-s-liquibyte span.cm-type { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-property    { color: #999; font-weight: bold; }\n.cm-s-liquibyte span.cm-operator    { color: #fff; }\n\n.cm-s-liquibyte span.cm-meta        { color: #0f0; }\n.cm-s-liquibyte span.cm-qualifier   { color: #fff700; font-weight: bold; }\n.cm-s-liquibyte span.cm-bracket     { color: #cc7; }\n.cm-s-liquibyte span.cm-tag         { color: #ff0; font-weight: bold; }\n.cm-s-liquibyte span.cm-attribute   { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-error       { color: #f00; }\n\n.cm-s-liquibyte div.CodeMirror-selected { background-color: rgba(255, 0, 0, 0.25); }\n\n.cm-s-liquibyte span.cm-compilation { background-color: rgba(255, 255, 255, 0.12); }\n\n.cm-s-liquibyte .CodeMirror-activeline-background { background-color: rgba(0, 255, 0, 0.15); }\n\n/* Default styles for common addons */\n.cm-s-liquibyte .CodeMirror span.CodeMirror-matchingbracket { color: #0f0; font-weight: bold; }\n.cm-s-liquibyte .CodeMirror span.CodeMirror-nonmatchingbracket { color: #f00; font-weight: bold; }\n.CodeMirror-matchingtag { background-color: rgba(150, 255, 0, .3); }\n/* Scrollbars */\n/* Simple */\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div:hover, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div:hover {\n\tbackground-color: rgba(80, 80, 80, .7);\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {\n\tbackground-color: rgba(80, 80, 80, .3);\n\tborder: 1px solid #404040;\n\tborder-radius: 5px;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {\n\tborder-top: 1px solid #404040;\n\tborder-bottom: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div {\n\tborder-left: 1px solid #404040;\n\tborder-right: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-vertical {\n\tbackground-color: #262626;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal {\n\tbackground-color: #262626;\n\tborder-top: 1px solid #404040;\n}\n/* Overlay */\n.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div, div.CodeMirror-overlayscroll-vertical div {\n\tbackground-color: #404040;\n\tborder-radius: 5px;\n}\n.cm-s-liquibyte div.CodeMirror-overlayscroll-vertical div {\n\tborder: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div {\n\tborder: 1px solid #404040;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/lucario.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/lucario.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Name:       lucario\n  Author:     Raphael Amorim\n\n  Original Lucario color scheme (https://github.com/raphamorim/lucario)\n*/\n\n.cm-s-lucario.CodeMirror, .cm-s-lucario .CodeMirror-gutters {\n  background-color: #2b3e50 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-lucario .CodeMirror-gutters { color: #2b3e50; }\n.cm-s-lucario .CodeMirror-cursor { border-left: solid thin #E6C845; }\n.cm-s-lucario .CodeMirror-linenumber { color: #f8f8f2; }\n.cm-s-lucario .CodeMirror-selected { background: #243443; }\n.cm-s-lucario .CodeMirror-line::selection, .cm-s-lucario .CodeMirror-line > span::selection, .cm-s-lucario .CodeMirror-line > span > span::selection { background: #243443; }\n.cm-s-lucario .CodeMirror-line::-moz-selection, .cm-s-lucario .CodeMirror-line > span::-moz-selection, .cm-s-lucario .CodeMirror-line > span > span::-moz-selection { background: #243443; }\n.cm-s-lucario span.cm-comment { color: #5c98cd; }\n.cm-s-lucario span.cm-string, .cm-s-lucario span.cm-string-2 { color: #E6DB74; }\n.cm-s-lucario span.cm-number { color: #ca94ff; }\n.cm-s-lucario span.cm-variable { color: #f8f8f2; }\n.cm-s-lucario span.cm-variable-2 { color: #f8f8f2; }\n.cm-s-lucario span.cm-def { color: #72C05D; }\n.cm-s-lucario span.cm-operator { color: #66D9EF; }\n.cm-s-lucario span.cm-keyword { color: #ff6541; }\n.cm-s-lucario span.cm-atom { color: #bd93f9; }\n.cm-s-lucario span.cm-meta { color: #f8f8f2; }\n.cm-s-lucario span.cm-tag { color: #ff6541; }\n.cm-s-lucario span.cm-attribute { color: #66D9EF; }\n.cm-s-lucario span.cm-qualifier { color: #72C05D; }\n.cm-s-lucario span.cm-property { color: #f8f8f2; }\n.cm-s-lucario span.cm-builtin { color: #72C05D; }\n.cm-s-lucario span.cm-variable-3, .cm-s-lucario span.cm-type { color: #ffb86c; }\n\n.cm-s-lucario .CodeMirror-activeline-background { background: #243443; }\n.cm-s-lucario .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/material.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/material.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-variable-2 { color: #80CBC4; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #82B1FF; }\n.cm-s-material .cm-builtin { color: #DECB6B; }\n.cm-s-material .cm-atom { color: #F77669; }\n.cm-s-material .cm-number { color: #F77669; }\n.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-string { color: #C3E88D; }\n.cm-s-material .cm-string-2 { color: #80CBC4; }\n.cm-s-material .cm-comment { color: #546E7A; }\n.cm-s-material .cm-variable { color: #82B1FF; }\n.cm-s-material .cm-tag { color: #80CBC4; }\n.cm-s-material .cm-meta { color: #80CBC4; }\n.cm-s-material .cm-attribute { color: #FFCB6B; }\n.cm-s-material .cm-property { color: #80CBAE; }\n.cm-s-material .cm-qualifier { color: #DECB6B; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #DECB6B; }\n.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/mbo.css":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/mbo.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/mdn-like.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/mdn-like.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  MDN-LIKE Theme - Mozilla\n  Ported to CodeMirror by Peter Kroon <plakroon@gmail.com>\n  Report bugs/issues here: https://github.com/codemirror/CodeMirror/issues\n  GitHub: @peterkroon\n\n  The mdn-like theme is inspired on the displayed code examples at: https://developer.mozilla.org/en-US/docs/Web/CSS/animation\n\n*/\n.cm-s-mdn-like.CodeMirror { color: #999; background-color: #fff; }\n.cm-s-mdn-like div.CodeMirror-selected { background: #cfc; }\n.cm-s-mdn-like .CodeMirror-line::selection, .cm-s-mdn-like .CodeMirror-line > span::selection, .cm-s-mdn-like .CodeMirror-line > span > span::selection { background: #cfc; }\n.cm-s-mdn-like .CodeMirror-line::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span > span::-moz-selection { background: #cfc; }\n\n.cm-s-mdn-like .CodeMirror-gutters { background: #f8f8f8; border-left: 6px solid rgba(0,83,159,0.65); color: #333; }\n.cm-s-mdn-like .CodeMirror-linenumber { color: #aaa; padding-left: 8px; }\n.cm-s-mdn-like .CodeMirror-cursor { border-left: 2px solid #222; }\n\n.cm-s-mdn-like .cm-keyword { color: #6262FF; }\n.cm-s-mdn-like .cm-atom { color: #F90; }\n.cm-s-mdn-like .cm-number { color:  #ca7841; }\n.cm-s-mdn-like .cm-def { color: #8DA6CE; }\n.cm-s-mdn-like span.cm-variable-2, .cm-s-mdn-like span.cm-tag { color: #690; }\n.cm-s-mdn-like span.cm-variable-3, .cm-s-mdn-like span.cm-def, .cm-s-mdn-like span.cm-type { color: #07a; }\n\n.cm-s-mdn-like .cm-variable { color: #07a; }\n.cm-s-mdn-like .cm-property { color: #905; }\n.cm-s-mdn-like .cm-qualifier { color: #690; }\n\n.cm-s-mdn-like .cm-operator { color: #cda869; }\n.cm-s-mdn-like .cm-comment { color:#777; font-weight:normal; }\n.cm-s-mdn-like .cm-string { color:#07a; font-style:italic; }\n.cm-s-mdn-like .cm-string-2 { color:#bd6b18; } /*?*/\n.cm-s-mdn-like .cm-meta { color: #000; } /*?*/\n.cm-s-mdn-like .cm-builtin { color: #9B7536; } /*?*/\n.cm-s-mdn-like .cm-tag { color: #997643; }\n.cm-s-mdn-like .cm-attribute { color: #d6bb6d; } /*?*/\n.cm-s-mdn-like .cm-header { color: #FF6400; }\n.cm-s-mdn-like .cm-hr { color: #AEAEAE; }\n.cm-s-mdn-like .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }\n.cm-s-mdn-like .cm-error { border-bottom: 1px solid red; }\n\ndiv.cm-s-mdn-like .CodeMirror-activeline-background { background: #efefff; }\ndiv.cm-s-mdn-like span.CodeMirror-matchingbracket { outline:1px solid grey; color: inherit; }\n\n.cm-s-mdn-like.CodeMirror { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAyCAYAAAAp8UeFAAAHvklEQVR42s2b63bcNgyEQZCSHCdt2vd/0tWF7I+Q6XgMXiTtuvU5Pl57ZQKkKHzEAOtF5KeIJBGJ8uvL599FRFREZhFx8DeXv8trn68RuGaC8TRfo3SNp9dlDDHedyLyTUTeRWStXKPZrjtpZxaRw5hPqozRs1N8/enzIiQRWcCgy4MUA0f+XWliDhyL8Lfyvx7ei/Ae3iQFHyw7U/59pQVIMEEPEz0G7XiwdRjzSfC3UTtz9vchIntxvry5iMgfIhJoEflOz2CQr3F5h/HfeFe+GTdLaKcu9L8LTeQb/R/7GgbsfKedyNdoHsN31uRPWrfZ5wsj/NzzRQHuToIdU3ahwnsKPxXCjJITuOsi7XLc7SG/v5GdALs7wf8JjTFiB5+QvTEfRyGOfX3Lrx8wxyQi3sNq46O7QahQiCsRFgqddjBouVEHOKDgXAQHD9gJCr5sMKkEdjwsarG/ww3BMHBU7OBjXnzdyY7SfCxf5/z6ATccrwlKuwC/jhznnPF4CgVzhhVf4xp2EixcBActO75iZ8/fM9zAs2OMzKdslgXWJ9XG8PQoOAMA5fGcsvORgv0doBXyHrCwfLJAOwo71QLNkb8n2Pl6EWiR7OCibtkPaz4Kc/0NNAze2gju3zOwekALDaCFPI5vjPFmgGY5AZqyGEvH1x7QfIb8YtxMnA/b+QQ0aQDAwc6JMFg8CbQZ4qoYEEHbRwNojuK3EHwd7VALSgq+MNDKzfT58T8qdpADrgW0GmgcAS1lhzztJmkAzcPNOQbsWEALBDSlMKUG0Eq4CLAQWvEVQ9WU57gZJwZtgPO3r9oBTQ9WO8TjqXINx8R0EYpiZEUWOF3FxkbJkgU9B2f41YBrIj5ZfsQa0M5kTgiAAqM3ShXLgu8XMqcrQBvJ0CL5pnTsfMB13oB8athpAq2XOQmcGmoACCLydx7nToa23ATaSIY2ichfOdPTGxlasXMLaL0MLZAOwAKIM+y8CmicobGdCcbbK9DzN+yYGVoNNI5iUKTMyYOjPse4A8SM1MmcXgU0toOq1yO/v8FOxlASyc7TgeYaAMBJHcY1CcCwGI/TK4AmDbDyKYBBtFUkRwto8gygiQEaByFgJ00BH2M8JWwQS1nafDXQCidWyOI8AcjDCSjCLk8ngObuAm3JAHAdubAmOaK06V8MNEsKPJOhobSprwQa6gD7DclRQdqcwL4zxqgBrQcabUiBLclRDKAlWp+etPkBaNMA0AKlrHwTdEByZAA4GM+SNluSY6wAzcMNewxmgig5Ks0nkrSpBvSaQHMdKTBAnLojOdYyGpQ254602ZILPdTD1hdlggdIm74jbTp8vDwF5ZYUeLWGJpWsh6XNyXgcYwVoJQTEhhTYkxzZjiU5npU2TaB979TQehlaAVq4kaGpiPwwwLkYUuBbQwocyQTv1tA0+1UFWoJF3iv1oq+qoSk8EQdJmwHkziIF7oOZk14EGitibAdjLYYK78H5vZOhtWpoI0ATGHs0Q8OMb4Ey+2bU2UYztCtA0wFAs7TplGLRVQCcqaFdGSPCeTI1QNIC52iWNzof6Uib7xjEp07mNNoUYmVosVItHrHzRlLgBn9LFyRHaQCtVUMbtTNhoXWiTOO9k/V8BdAc1Oq0ArSQs6/5SU0hckNy9NnXqQY0PGYo5dWJ7nINaN6o958FWin27aBaWRka1r5myvLOAm0j30eBJqCxHLReVclxhxOEN2JfDWjxBtAC7MIH1fVaGdoOp4qJYDgKtKPSFNID2gSnGldrCqkFZ+5UeQXQBIRrSwocbdZYQT/2LwRahBPBXoHrB8nxaGROST62DKUbQOMMzZIC9abkuELfQzQALWTnDNAm8KHWFOJgJ5+SHIvTPcmx1xQyZRhNL5Qci689aXMEaN/uNIWkEwDAvFpOZmgsBaaGnbs1NPa1Jm32gBZAIh1pCtG7TSH4aE0y1uVY4uqoFPisGlpP2rSA5qTecWn5agK6BzSpgAyD+wFaqhnYoSZ1Vwr8CmlTQbrcO3ZaX0NAEyMbYaAlyquFoLKK3SPby9CeVUPThrSJmkCAE0CrKUQadi4DrdSlWhmah0YL9z9vClH59YGbHx1J8VZTyAjQepJjmXwAKTDQI3omc3p1U4gDUf6RfcdYfrUp5ClAi2J3Ba6UOXGo+K+bQrjjssitG2SJzshaLwMtXgRagUNpYYoVkMSBLM+9GGiJZMvduG6DRZ4qc04DMPtQQxOjEtACmhO7K1AbNbQDEggZyJwscFpAGwENhoBeUwh3bWolhe8BTYVKxQEWrSUn/uhcM5KhvUu/+eQu0Lzhi+VrK0PrZZNDQKs9cpYUuFYgMVpD4/NxenJTiMCNqdUEUf1qZWjppLT5qSkkUZbCwkbZMSuVnu80hfSkzRbQeqCZSAh6huR4VtoM2gHAlLf72smuWgE+VV7XpE25Ab2WFDgyhnSuKbs4GuGzCjR+tIoUuMFg3kgcWKLTwRqanJQ2W00hAsenfaApRC42hbCvK1SlE0HtE9BGgneJO+ELamitD1YjjOYnNYVcraGhtKkW0EqVVeDx733I2NH581k1NNxNLG0i0IJ8/NjVaOZ0tYZ2Vtr0Xv7tPV3hkWp9EFkgS/J0vosngTaSoaG06WHi+xObQkaAdlbanP8B2+2l0f90LmUAAAAASUVORK5CYII=); }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/midnight.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/midnight.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*<!--match-->*/\n.cm-s-midnight span.CodeMirror-matchhighlight { background: #494949; }\n.cm-s-midnight.CodeMirror-focused span.CodeMirror-matchhighlight { background: #314D67 !important; }\n\n/*<!--activeline-->*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/monokai.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/monokai.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-monokai span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-monokai span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-monokai span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3, .cm-s-monokai span.cm-type { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/neat.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/neat.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/neo.css":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/neo.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* neo theme for codemirror */\n\n/* Color scheme */\n\n.cm-s-neo.CodeMirror {\n  background-color:#ffffff;\n  color:#2e383c;\n  line-height:1.4375;\n}\n.cm-s-neo .cm-comment { color:#75787b; }\n.cm-s-neo .cm-keyword, .cm-s-neo .cm-property { color:#1d75b3; }\n.cm-s-neo .cm-atom,.cm-s-neo .cm-number { color:#75438a; }\n.cm-s-neo .cm-node,.cm-s-neo .cm-tag { color:#9c3328; }\n.cm-s-neo .cm-string { color:#b35e14; }\n.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier { color:#047d65; }\n\n\n/* Editor styling */\n\n.cm-s-neo pre {\n  padding:0;\n}\n\n.cm-s-neo .CodeMirror-gutters {\n  border:none;\n  border-right:10px solid transparent;\n  background-color:transparent;\n}\n\n.cm-s-neo .CodeMirror-linenumber {\n  padding:0;\n  color:#e0e2e5;\n}\n\n.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }\n.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }\n\n.cm-s-neo .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: rgba(155,157,162,0.37);\n  z-index: 1;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/night.css":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/night.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/nord.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/nord.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/oceanic-next.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/oceanic-next.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       oceanic-next\n    Author:     Filype Pereira (https://github.com/fpereira1)\n\n    Original oceanic-next color scheme by Dmitri Voronianski (https://github.com/voronianski/oceanic-next-color-scheme)\n\n*/\n\n.cm-s-oceanic-next.CodeMirror { background: #304148; color: #f8f8f2; }\n.cm-s-oceanic-next div.CodeMirror-selected { background: rgba(101, 115, 126, 0.33); }\n.cm-s-oceanic-next .CodeMirror-line::selection, .cm-s-oceanic-next .CodeMirror-line > span::selection, .cm-s-oceanic-next .CodeMirror-line > span > span::selection { background: rgba(101, 115, 126, 0.33); }\n.cm-s-oceanic-next .CodeMirror-line::-moz-selection, .cm-s-oceanic-next .CodeMirror-line > span::-moz-selection, .cm-s-oceanic-next .CodeMirror-line > span > span::-moz-selection { background: rgba(101, 115, 126, 0.33); }\n.cm-s-oceanic-next .CodeMirror-gutters { background: #304148; border-right: 10px; }\n.cm-s-oceanic-next .CodeMirror-guttermarker { color: white; }\n.cm-s-oceanic-next .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-oceanic-next .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-oceanic-next .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-oceanic-next span.cm-comment { color: #65737E; }\n.cm-s-oceanic-next span.cm-atom { color: #C594C5; }\n.cm-s-oceanic-next span.cm-number { color: #F99157; }\n\n.cm-s-oceanic-next span.cm-property { color: #99C794; }\n.cm-s-oceanic-next span.cm-attribute,\n.cm-s-oceanic-next span.cm-keyword { color: #C594C5; }\n.cm-s-oceanic-next span.cm-builtin { color: #66d9ef; }\n.cm-s-oceanic-next span.cm-string { color: #99C794; }\n\n.cm-s-oceanic-next span.cm-variable,\n.cm-s-oceanic-next span.cm-variable-2,\n.cm-s-oceanic-next span.cm-variable-3 { color: #f8f8f2; }\n.cm-s-oceanic-next span.cm-def { color: #6699CC; }\n.cm-s-oceanic-next span.cm-bracket { color: #5FB3B3; }\n.cm-s-oceanic-next span.cm-tag { color: #C594C5; }\n.cm-s-oceanic-next span.cm-header { color: #C594C5; }\n.cm-s-oceanic-next span.cm-link { color: #C594C5; }\n.cm-s-oceanic-next span.cm-error { background: #C594C5; color: #f8f8f0; }\n\n.cm-s-oceanic-next .CodeMirror-activeline-background { background: rgba(101, 115, 126, 0.33); }\n.cm-s-oceanic-next .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/panda-syntax.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/panda-syntax.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\tName:       Panda Syntax\n\tAuthor:     Siamak Mokhtari (http://github.com/siamak/)\n\tCodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)\n*/\n.cm-s-panda-syntax {\n\tbackground: #292A2B;\n\tcolor: #E6E6E6;\n\tline-height: 1.5;\n\tfont-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;\n}\n.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }\n.cm-s-panda-syntax .CodeMirror-activeline-background {\n\tbackground: rgba(99, 123, 156, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-selected {\n\tbackground: #FFF;\n}\n.cm-s-panda-syntax .cm-comment {\n\tfont-style: italic;\n\tcolor: #676B79;\n}\n.cm-s-panda-syntax .cm-operator {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-string {\n\tcolor: #19F9D8;\n}\n.cm-s-panda-syntax .cm-string-2 {\n    color: #FFB86C;\n}\n\n.cm-s-panda-syntax .cm-tag {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-meta {\n\tcolor: #b084eb;\n}\n\n.cm-s-panda-syntax .cm-number {\n\tcolor: #FFB86C;\n}\n.cm-s-panda-syntax .cm-atom {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-keyword {\n\tcolor: #FF75B5;\n}\n.cm-s-panda-syntax .cm-variable {\n\tcolor: #ffb86c;\n}\n.cm-s-panda-syntax .cm-variable-2 {\n\tcolor: #ff9ac1;\n}\n.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {\n\tcolor: #ff9ac1;\n}\n\n.cm-s-panda-syntax .cm-def {\n\tcolor: #e6e6e6;\n}\n.cm-s-panda-syntax .cm-property {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-unit {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-attribute {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .CodeMirror-matchingbracket {\n    border-bottom: 1px dotted #19F9D8;\n    padding-bottom: 2px;\n    color: #e6e6e6;\n}\n.cm-s-panda-syntax .CodeMirror-gutters {\n    background: #292a2b;\n    border-right-color: rgba(255, 255, 255, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-linenumber {\n    color: #e6e6e6;\n    opacity: 0.6;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/paraiso-dark.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/paraiso-dark.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Paraíso (Dark)\n    Author:     Jan T. Sott\n\n    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n\n*/\n\n.cm-s-paraiso-dark.CodeMirror { background: #2f1e2e; color: #b9b6b0; }\n.cm-s-paraiso-dark div.CodeMirror-selected { background: #41323f; }\n.cm-s-paraiso-dark .CodeMirror-line::selection, .cm-s-paraiso-dark .CodeMirror-line > span::selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::selection { background: rgba(65, 50, 63, .99); }\n.cm-s-paraiso-dark .CodeMirror-line::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(65, 50, 63, .99); }\n.cm-s-paraiso-dark .CodeMirror-gutters { background: #2f1e2e; border-right: 0px; }\n.cm-s-paraiso-dark .CodeMirror-guttermarker { color: #ef6155; }\n.cm-s-paraiso-dark .CodeMirror-guttermarker-subtle { color: #776e71; }\n.cm-s-paraiso-dark .CodeMirror-linenumber { color: #776e71; }\n.cm-s-paraiso-dark .CodeMirror-cursor { border-left: 1px solid #8d8687; }\n\n.cm-s-paraiso-dark span.cm-comment { color: #e96ba8; }\n.cm-s-paraiso-dark span.cm-atom { color: #815ba4; }\n.cm-s-paraiso-dark span.cm-number { color: #815ba4; }\n\n.cm-s-paraiso-dark span.cm-property, .cm-s-paraiso-dark span.cm-attribute { color: #48b685; }\n.cm-s-paraiso-dark span.cm-keyword { color: #ef6155; }\n.cm-s-paraiso-dark span.cm-string { color: #fec418; }\n\n.cm-s-paraiso-dark span.cm-variable { color: #48b685; }\n.cm-s-paraiso-dark span.cm-variable-2 { color: #06b6ef; }\n.cm-s-paraiso-dark span.cm-def { color: #f99b15; }\n.cm-s-paraiso-dark span.cm-bracket { color: #b9b6b0; }\n.cm-s-paraiso-dark span.cm-tag { color: #ef6155; }\n.cm-s-paraiso-dark span.cm-link { color: #815ba4; }\n.cm-s-paraiso-dark span.cm-error { background: #ef6155; color: #8d8687; }\n\n.cm-s-paraiso-dark .CodeMirror-activeline-background { background: #4D344A; }\n.cm-s-paraiso-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/paraiso-light.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/paraiso-light.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Paraíso (Light)\n    Author:     Jan T. Sott\n\n    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n\n*/\n\n.cm-s-paraiso-light.CodeMirror { background: #e7e9db; color: #41323f; }\n.cm-s-paraiso-light div.CodeMirror-selected { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-line::selection, .cm-s-paraiso-light .CodeMirror-line > span::selection, .cm-s-paraiso-light .CodeMirror-line > span > span::selection { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-line::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span > span::-moz-selection { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-gutters { background: #e7e9db; border-right: 0px; }\n.cm-s-paraiso-light .CodeMirror-guttermarker { color: black; }\n.cm-s-paraiso-light .CodeMirror-guttermarker-subtle { color: #8d8687; }\n.cm-s-paraiso-light .CodeMirror-linenumber { color: #8d8687; }\n.cm-s-paraiso-light .CodeMirror-cursor { border-left: 1px solid #776e71; }\n\n.cm-s-paraiso-light span.cm-comment { color: #e96ba8; }\n.cm-s-paraiso-light span.cm-atom { color: #815ba4; }\n.cm-s-paraiso-light span.cm-number { color: #815ba4; }\n\n.cm-s-paraiso-light span.cm-property, .cm-s-paraiso-light span.cm-attribute { color: #48b685; }\n.cm-s-paraiso-light span.cm-keyword { color: #ef6155; }\n.cm-s-paraiso-light span.cm-string { color: #fec418; }\n\n.cm-s-paraiso-light span.cm-variable { color: #48b685; }\n.cm-s-paraiso-light span.cm-variable-2 { color: #06b6ef; }\n.cm-s-paraiso-light span.cm-def { color: #f99b15; }\n.cm-s-paraiso-light span.cm-bracket { color: #41323f; }\n.cm-s-paraiso-light span.cm-tag { color: #ef6155; }\n.cm-s-paraiso-light span.cm-link { color: #815ba4; }\n.cm-s-paraiso-light span.cm-error { background: #ef6155; color: #776e71; }\n\n.cm-s-paraiso-light .CodeMirror-activeline-background { background: #CFD1C4; }\n.cm-s-paraiso-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/pastel-on-dark.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/pastel-on-dark.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Pastel On Dark theme ported from ACE editor\n * @license MIT\n * @copyright AtomicPages LLC 2014\n * @author Dennis Thompson, AtomicPages LLC\n * @version 1.1\n * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme\n */\n\n.cm-s-pastel-on-dark.CodeMirror {\n\tbackground: #2c2827;\n\tcolor: #8F938F;\n\tline-height: 1.5;\n}\n.cm-s-pastel-on-dark div.CodeMirror-selected { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::selection, .cm-s-pastel-on-dark .CodeMirror-line > span::selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(221,240,255,0.2); }\n\n.cm-s-pastel-on-dark .CodeMirror-gutters {\n\tbackground: #34302f;\n\tborder-right: 0px;\n\tpadding: 0 3px;\n}\n.cm-s-pastel-on-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-linenumber { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n.cm-s-pastel-on-dark span.cm-comment { color: #A6C6FF; }\n.cm-s-pastel-on-dark span.cm-atom { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-number { color: #CCCCCC; }\n.cm-s-pastel-on-dark span.cm-property { color: #8F938F; }\n.cm-s-pastel-on-dark span.cm-attribute { color: #a6e22e; }\n.cm-s-pastel-on-dark span.cm-keyword { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-string { color: #66A968; }\n.cm-s-pastel-on-dark span.cm-variable { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-variable-2 { color: #BEBF55; }\n.cm-s-pastel-on-dark span.cm-variable-3, .cm-s-pastel-on-dark span.cm-type { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-def { color: #757aD8; }\n.cm-s-pastel-on-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-pastel-on-dark span.cm-tag { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-link { color: #ae81ff; }\n.cm-s-pastel-on-dark span.cm-qualifier,.cm-s-pastel-on-dark span.cm-builtin { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-error {\n\tbackground: #757aD8;\n\tcolor: #f8f8f0;\n}\n.cm-s-pastel-on-dark .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.031); }\n.cm-s-pastel-on-dark .CodeMirror-matchingbracket {\n\tborder: 1px solid rgba(255,255,255,0.25);\n\tcolor: #8F938F !important;\n\tmargin: -1px -1px 0 -1px;\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/railscasts.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/railscasts.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Railscasts\n    Author:     Ryan Bates (http://railscasts.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-railscasts.CodeMirror {background: #2b2b2b; color: #f4f1ed;}\n.cm-s-railscasts div.CodeMirror-selected {background: #272935 !important;}\n.cm-s-railscasts .CodeMirror-gutters {background: #2b2b2b; border-right: 0px;}\n.cm-s-railscasts .CodeMirror-linenumber {color: #5a647e;}\n.cm-s-railscasts .CodeMirror-cursor {border-left: 1px solid #d4cfc9 !important;}\n\n.cm-s-railscasts span.cm-comment {color: #bc9458;}\n.cm-s-railscasts span.cm-atom {color: #b6b3eb;}\n.cm-s-railscasts span.cm-number {color: #b6b3eb;}\n\n.cm-s-railscasts span.cm-property, .cm-s-railscasts span.cm-attribute {color: #a5c261;}\n.cm-s-railscasts span.cm-keyword {color: #da4939;}\n.cm-s-railscasts span.cm-string {color: #ffc66d;}\n\n.cm-s-railscasts span.cm-variable {color: #a5c261;}\n.cm-s-railscasts span.cm-variable-2 {color: #6d9cbe;}\n.cm-s-railscasts span.cm-def {color: #cc7833;}\n.cm-s-railscasts span.cm-error {background: #da4939; color: #d4cfc9;}\n.cm-s-railscasts span.cm-bracket {color: #f4f1ed;}\n.cm-s-railscasts span.cm-tag {color: #da4939;}\n.cm-s-railscasts span.cm-link {color: #b6b3eb;}\n\n.cm-s-railscasts .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-railscasts .CodeMirror-activeline-background { background: #303040; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/rubyblue.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/rubyblue.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-rubyblue.CodeMirror { background: #112435; color: white; }\n.cm-s-rubyblue div.CodeMirror-selected { background: #38566F; }\n.cm-s-rubyblue .CodeMirror-line::selection, .cm-s-rubyblue .CodeMirror-line > span::selection, .cm-s-rubyblue .CodeMirror-line > span > span::selection { background: rgba(56, 86, 111, 0.99); }\n.cm-s-rubyblue .CodeMirror-line::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 86, 111, 0.99); }\n.cm-s-rubyblue .CodeMirror-gutters { background: #1F4661; border-right: 7px solid #3E7087; }\n.cm-s-rubyblue .CodeMirror-guttermarker { color: white; }\n.cm-s-rubyblue .CodeMirror-guttermarker-subtle { color: #3E7087; }\n.cm-s-rubyblue .CodeMirror-linenumber { color: white; }\n.cm-s-rubyblue .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-rubyblue span.cm-comment { color: #999; font-style:italic; line-height: 1em; }\n.cm-s-rubyblue span.cm-atom { color: #F4C20B; }\n.cm-s-rubyblue span.cm-number, .cm-s-rubyblue span.cm-attribute { color: #82C6E0; }\n.cm-s-rubyblue span.cm-keyword { color: #F0F; }\n.cm-s-rubyblue span.cm-string { color: #F08047; }\n.cm-s-rubyblue span.cm-meta { color: #F0F; }\n.cm-s-rubyblue span.cm-variable-2, .cm-s-rubyblue span.cm-tag { color: #7BD827; }\n.cm-s-rubyblue span.cm-variable-3, .cm-s-rubyblue span.cm-def, .cm-s-rubyblue span.cm-type { color: white; }\n.cm-s-rubyblue span.cm-bracket { color: #F0F; }\n.cm-s-rubyblue span.cm-link { color: #F4C20B; }\n.cm-s-rubyblue span.CodeMirror-matchingbracket { color:#F0F !important; }\n.cm-s-rubyblue span.cm-builtin, .cm-s-rubyblue span.cm-special { color: #FF9D00; }\n.cm-s-rubyblue span.cm-error { color: #AF2018; }\n\n.cm-s-rubyblue .CodeMirror-activeline-background { background: #173047; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/seti.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/seti.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/shadowfox.css":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/shadowfox.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/solarized.css":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/solarized.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nSolarized theme for code-mirror\nhttp://ethanschoonover.com/solarized\n*/\n\n/*\nSolarized color palette\nhttp://ethanschoonover.com/solarized/img/solarized-palette.png\n*/\n\n.solarized.base03 { color: #002b36; }\n.solarized.base02 { color: #073642; }\n.solarized.base01 { color: #586e75; }\n.solarized.base00 { color: #657b83; }\n.solarized.base0 { color: #839496; }\n.solarized.base1 { color: #93a1a1; }\n.solarized.base2 { color: #eee8d5; }\n.solarized.base3  { color: #fdf6e3; }\n.solarized.solar-yellow  { color: #b58900; }\n.solarized.solar-orange  { color: #cb4b16; }\n.solarized.solar-red { color: #dc322f; }\n.solarized.solar-magenta { color: #d33682; }\n.solarized.solar-violet  { color: #6c71c4; }\n.solarized.solar-blue { color: #268bd2; }\n.solarized.solar-cyan { color: #2aa198; }\n.solarized.solar-green { color: #859900; }\n\n/* Color scheme for code-mirror */\n\n.cm-s-solarized {\n  line-height: 1.45em;\n  color-profile: sRGB;\n  rendering-intent: auto;\n}\n.cm-s-solarized.cm-s-dark {\n  color: #839496;\n  background-color: #002b36;\n  text-shadow: #002b36 0 1px;\n}\n.cm-s-solarized.cm-s-light {\n  background-color: #fdf6e3;\n  color: #657b83;\n  text-shadow: #eee8d5 0 1px;\n}\n\n.cm-s-solarized .CodeMirror-widget {\n  text-shadow: none;\n}\n\n.cm-s-solarized .cm-header { color: #586e75; }\n.cm-s-solarized .cm-quote { color: #93a1a1; }\n\n.cm-s-solarized .cm-keyword { color: #cb4b16; }\n.cm-s-solarized .cm-atom { color: #d33682; }\n.cm-s-solarized .cm-number { color: #d33682; }\n.cm-s-solarized .cm-def { color: #2aa198; }\n\n.cm-s-solarized .cm-variable { color: #839496; }\n.cm-s-solarized .cm-variable-2 { color: #b58900; }\n.cm-s-solarized .cm-variable-3, .cm-s-solarized .cm-type { color: #6c71c4; }\n\n.cm-s-solarized .cm-property { color: #2aa198; }\n.cm-s-solarized .cm-operator { color: #6c71c4; }\n\n.cm-s-solarized .cm-comment { color: #586e75; font-style:italic; }\n\n.cm-s-solarized .cm-string { color: #859900; }\n.cm-s-solarized .cm-string-2 { color: #b58900; }\n\n.cm-s-solarized .cm-meta { color: #859900; }\n.cm-s-solarized .cm-qualifier { color: #b58900; }\n.cm-s-solarized .cm-builtin { color: #d33682; }\n.cm-s-solarized .cm-bracket { color: #cb4b16; }\n.cm-s-solarized .CodeMirror-matchingbracket { color: #859900; }\n.cm-s-solarized .CodeMirror-nonmatchingbracket { color: #dc322f; }\n.cm-s-solarized .cm-tag { color: #93a1a1; }\n.cm-s-solarized .cm-attribute { color: #2aa198; }\n.cm-s-solarized .cm-hr {\n  color: transparent;\n  border-top: 1px solid #586e75;\n  display: block;\n}\n.cm-s-solarized .cm-link { color: #93a1a1; cursor: pointer; }\n.cm-s-solarized .cm-special { color: #6c71c4; }\n.cm-s-solarized .cm-em {\n  color: #999;\n  text-decoration: underline;\n  text-decoration-style: dotted;\n}\n.cm-s-solarized .cm-error,\n.cm-s-solarized .cm-invalidchar {\n  color: #586e75;\n  border-bottom: 1px dotted #dc322f;\n}\n\n.cm-s-solarized.cm-s-dark div.CodeMirror-selected { background: #073642; }\n.cm-s-solarized.cm-s-dark.CodeMirror ::selection { background: rgba(7, 54, 66, 0.99); }\n.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection, .cm-s-dark .CodeMirror-line > span::-moz-selection, .cm-s-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(7, 54, 66, 0.99); }\n\n.cm-s-solarized.cm-s-light div.CodeMirror-selected { background: #eee8d5; }\n.cm-s-solarized.cm-s-light .CodeMirror-line::selection, .cm-s-light .CodeMirror-line > span::selection, .cm-s-light .CodeMirror-line > span > span::selection { background: #eee8d5; }\n.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection, .cm-s-ligh .CodeMirror-line > span::-moz-selection, .cm-s-ligh .CodeMirror-line > span > span::-moz-selection { background: #eee8d5; }\n\n/* Editor styling */\n\n\n\n/* Little shadow on the view-port of the buffer view */\n.cm-s-solarized.CodeMirror {\n  -moz-box-shadow: inset 7px 0 12px -6px #000;\n  -webkit-box-shadow: inset 7px 0 12px -6px #000;\n  box-shadow: inset 7px 0 12px -6px #000;\n}\n\n/* Remove gutter border */\n.cm-s-solarized .CodeMirror-gutters {\n  border-right: 0;\n}\n\n/* Gutter colors and line number styling based of color scheme (dark / light) */\n\n/* Dark */\n.cm-s-solarized.cm-s-dark .CodeMirror-gutters {\n  background-color: #073642;\n}\n\n.cm-s-solarized.cm-s-dark .CodeMirror-linenumber {\n  color: #586e75;\n  text-shadow: #021014 0 -1px;\n}\n\n/* Light */\n.cm-s-solarized.cm-s-light .CodeMirror-gutters {\n  background-color: #eee8d5;\n}\n\n.cm-s-solarized.cm-s-light .CodeMirror-linenumber {\n  color: #839496;\n}\n\n/* Common */\n.cm-s-solarized .CodeMirror-linenumber {\n  padding: 0 5px;\n}\n.cm-s-solarized .CodeMirror-guttermarker-subtle { color: #586e75; }\n.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker { color: #ddd; }\n.cm-s-solarized.cm-s-light .CodeMirror-guttermarker { color: #cb4b16; }\n\n.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {\n  color: #586e75;\n}\n\n/* Cursor */\n.cm-s-solarized .CodeMirror-cursor { border-left: 1px solid #819090; }\n\n/* Fat cursor */\n.cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor { background: #77ee77; }\n.cm-s-solarized.cm-s-light .cm-animate-fat-cursor { background-color: #77ee77; }\n.cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor { background: #586e75; }\n.cm-s-solarized.cm-s-dark .cm-animate-fat-cursor { background-color: #586e75; }\n\n/* Active line */\n.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {\n  background: rgba(255, 255, 255, 0.06);\n}\n.cm-s-solarized.cm-s-light .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.06);\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ssms.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ssms.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-ssms span.cm-keyword { color: blue; }\n.cm-s-ssms span.cm-comment { color: darkgreen; }\n.cm-s-ssms span.cm-string { color: red; }\n.cm-s-ssms span.cm-def { color: black; }\n.cm-s-ssms span.cm-variable { color: black; }\n.cm-s-ssms span.cm-variable-2 { color: black; }\n.cm-s-ssms span.cm-atom { color: darkgray; }\n.cm-s-ssms .CodeMirror-linenumber { color: teal; }\n.cm-s-ssms .CodeMirror-activeline-background { background: #ffffff; }\n.cm-s-ssms span.cm-string-2 { color: #FF00FF; }\n.cm-s-ssms span.cm-operator, \n.cm-s-ssms span.cm-bracket, \n.cm-s-ssms span.cm-punctuation { color: darkgray; }\n.cm-s-ssms .CodeMirror-gutters { border-right: 3px solid #ffee62; background-color: #ffffff; }\n.cm-s-ssms div.CodeMirror-selected { background: #ADD6FF; }\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/the-matrix.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/the-matrix.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }\n.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }\n.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }\n.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }\n.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }\n.cm-s-the-matrix span.cm-atom { color: #3FF; }\n.cm-s-the-matrix span.cm-number { color: #FFB94F; }\n.cm-s-the-matrix span.cm-def { color: #99C; }\n.cm-s-the-matrix span.cm-variable { color: #F6C; }\n.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }\n.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }\n.cm-s-the-matrix span.cm-property { color: #62FFA0; }\n.cm-s-the-matrix span.cm-operator { color: #999; }\n.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }\n.cm-s-the-matrix span.cm-string { color: #39C; }\n.cm-s-the-matrix span.cm-meta { color: #C9F; }\n.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }\n.cm-s-the-matrix span.cm-builtin { color: #30a; }\n.cm-s-the-matrix span.cm-bracket { color: #cc7; }\n.cm-s-the-matrix span.cm-tag { color: #FFBD40; }\n.cm-s-the-matrix span.cm-attribute { color: #FFF700; }\n.cm-s-the-matrix span.cm-error { color: #FF0000; }\n\n.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/tomorrow-night-bright.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/tomorrow-night-bright.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/tomorrow-night-eighties.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/tomorrow-night-eighties.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       Tomorrow Night - Eighties\n    Author:     Chris Kempson\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-tomorrow-night-eighties.CodeMirror { background: #000000; color: #CCCCCC; }\n.cm-s-tomorrow-night-eighties div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-tomorrow-night-eighties .CodeMirror-line::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-tomorrow-night-eighties .CodeMirror-line::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-tomorrow-night-eighties .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker { color: #f2777a; }\n.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-eighties .CodeMirror-linenumber { color: #515151; }\n.cm-s-tomorrow-night-eighties .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-eighties span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-eighties span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-eighties span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-eighties span.cm-property, .cm-s-tomorrow-night-eighties span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-eighties span.cm-keyword { color: #f2777a; }\n.cm-s-tomorrow-night-eighties span.cm-string { color: #ffcc66; }\n\n.cm-s-tomorrow-night-eighties span.cm-variable { color: #99cc99; }\n.cm-s-tomorrow-night-eighties span.cm-variable-2 { color: #6699cc; }\n.cm-s-tomorrow-night-eighties span.cm-def { color: #f99157; }\n.cm-s-tomorrow-night-eighties span.cm-bracket { color: #CCCCCC; }\n.cm-s-tomorrow-night-eighties span.cm-tag { color: #f2777a; }\n.cm-s-tomorrow-night-eighties span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-eighties span.cm-error { background: #f2777a; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-eighties .CodeMirror-activeline-background { background: #343600; }\n.cm-s-tomorrow-night-eighties .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ttcn.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/ttcn.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-ttcn .cm-quote { color: #090; }\n.cm-s-ttcn .cm-negative { color: #d44; }\n.cm-s-ttcn .cm-positive { color: #292; }\n.cm-s-ttcn .cm-header, .cm-strong { font-weight: bold; }\n.cm-s-ttcn .cm-em { font-style: italic; }\n.cm-s-ttcn .cm-link { text-decoration: underline; }\n.cm-s-ttcn .cm-strikethrough { text-decoration: line-through; }\n.cm-s-ttcn .cm-header { color: #00f; font-weight: bold; }\n\n.cm-s-ttcn .cm-atom { color: #219; }\n.cm-s-ttcn .cm-attribute { color: #00c; }\n.cm-s-ttcn .cm-bracket { color: #997; }\n.cm-s-ttcn .cm-comment { color: #333333; }\n.cm-s-ttcn .cm-def { color: #00f; }\n.cm-s-ttcn .cm-em { font-style: italic; }\n.cm-s-ttcn .cm-error { color: #f00; }\n.cm-s-ttcn .cm-hr { color: #999; }\n.cm-s-ttcn .cm-invalidchar { color: #f00; }\n.cm-s-ttcn .cm-keyword { font-weight:bold; }\n.cm-s-ttcn .cm-link { color: #00c; text-decoration: underline; }\n.cm-s-ttcn .cm-meta { color: #555; }\n.cm-s-ttcn .cm-negative { color: #d44; }\n.cm-s-ttcn .cm-positive { color: #292; }\n.cm-s-ttcn .cm-qualifier { color: #555; }\n.cm-s-ttcn .cm-strikethrough { text-decoration: line-through; }\n.cm-s-ttcn .cm-string { color: #006400; }\n.cm-s-ttcn .cm-string-2 { color: #f50; }\n.cm-s-ttcn .cm-strong { font-weight: bold; }\n.cm-s-ttcn .cm-tag { color: #170; }\n.cm-s-ttcn .cm-variable { color: #8B2252; }\n.cm-s-ttcn .cm-variable-2 { color: #05a; }\n.cm-s-ttcn .cm-variable-3, .cm-s-ttcn .cm-type { color: #085; }\n\n.cm-s-ttcn .cm-invalidchar { color: #f00; }\n\n/* ASN */\n.cm-s-ttcn .cm-accessTypes,\n.cm-s-ttcn .cm-compareTypes { color: #27408B; }\n.cm-s-ttcn .cm-cmipVerbs { color: #8B2252; }\n.cm-s-ttcn .cm-modifier { color:#D2691E; }\n.cm-s-ttcn .cm-status { color:#8B4545; }\n.cm-s-ttcn .cm-storage { color:#A020F0; }\n.cm-s-ttcn .cm-tags { color:#006400; }\n\n/* CFG */\n.cm-s-ttcn .cm-externalCommands { color: #8B4545; font-weight:bold; }\n.cm-s-ttcn .cm-fileNCtrlMaskOptions,\n.cm-s-ttcn .cm-sectionTitle { color: #2E8B57; font-weight:bold; }\n\n/* TTCN */\n.cm-s-ttcn .cm-booleanConsts,\n.cm-s-ttcn .cm-otherConsts,\n.cm-s-ttcn .cm-verdictConsts { color: #006400; }\n.cm-s-ttcn .cm-configOps,\n.cm-s-ttcn .cm-functionOps,\n.cm-s-ttcn .cm-portOps,\n.cm-s-ttcn .cm-sutOps,\n.cm-s-ttcn .cm-timerOps,\n.cm-s-ttcn .cm-verdictOps { color: #0000FF; }\n.cm-s-ttcn .cm-preprocessor,\n.cm-s-ttcn .cm-templateMatch,\n.cm-s-ttcn .cm-ttcn3Macros { color: #27408B; }\n.cm-s-ttcn .cm-types { color: #A52A2A; font-weight:bold; }\n.cm-s-ttcn .cm-visibilityModifiers { font-weight:bold; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/twilight.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/twilight.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cm-s-twilight.CodeMirror { background: #141414; color: #f7f7f7; } /**/\n.cm-s-twilight div.CodeMirror-selected { background: #323232; } /**/\n.cm-s-twilight .CodeMirror-line::selection, .cm-s-twilight .CodeMirror-line > span::selection, .cm-s-twilight .CodeMirror-line > span > span::selection { background: rgba(50, 50, 50, 0.99); }\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n\n.cm-s-twilight .CodeMirror-gutters { background: #222; border-right: 1px solid #aaa; }\n.cm-s-twilight .CodeMirror-guttermarker { color: white; }\n.cm-s-twilight .CodeMirror-guttermarker-subtle { color: #aaa; }\n.cm-s-twilight .CodeMirror-linenumber { color: #aaa; }\n.cm-s-twilight .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-twilight .cm-keyword { color: #f9ee98; } /**/\n.cm-s-twilight .cm-atom { color: #FC0; }\n.cm-s-twilight .cm-number { color:  #ca7841; } /**/\n.cm-s-twilight .cm-def { color: #8DA6CE; }\n.cm-s-twilight span.cm-variable-2, .cm-s-twilight span.cm-tag { color: #607392; } /**/\n.cm-s-twilight span.cm-variable-3, .cm-s-twilight span.cm-def, .cm-s-twilight span.cm-type { color: #607392; } /**/\n.cm-s-twilight .cm-operator { color: #cda869; } /**/\n.cm-s-twilight .cm-comment { color:#777; font-style:italic; font-weight:normal; } /**/\n.cm-s-twilight .cm-string { color:#8f9d6a; font-style:italic; } /**/\n.cm-s-twilight .cm-string-2 { color:#bd6b18; } /*?*/\n.cm-s-twilight .cm-meta { background-color:#141414; color:#f7f7f7; } /*?*/\n.cm-s-twilight .cm-builtin { color: #cda869; } /*?*/\n.cm-s-twilight .cm-tag { color: #997643; } /**/\n.cm-s-twilight .cm-attribute { color: #d6bb6d; } /*?*/\n.cm-s-twilight .cm-header { color: #FF6400; }\n.cm-s-twilight .cm-hr { color: #AEAEAE; }\n.cm-s-twilight .cm-link { color:#ad9361; font-style:italic; text-decoration:none; } /**/\n.cm-s-twilight .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-twilight .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-twilight .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/vibrant-ink.css":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/vibrant-ink.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/xq-dark.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/xq-dark.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-dark.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-xq-dark div.CodeMirror-selected { background: #27007A; }\n.cm-s-xq-dark .CodeMirror-line::selection, .cm-s-xq-dark .CodeMirror-line > span::selection, .cm-s-xq-dark .CodeMirror-line > span > span::selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-line::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-xq-dark .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-xq-dark .CodeMirror-guttermarker-subtle { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-xq-dark span.cm-keyword { color: #FFBD40; }\n.cm-s-xq-dark span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-dark span.cm-number { color: #164; }\n.cm-s-xq-dark span.cm-def { color: #FFF; text-decoration:underline; }\n.cm-s-xq-dark span.cm-variable { color: #FFF; }\n.cm-s-xq-dark span.cm-variable-2 { color: #EEE; }\n.cm-s-xq-dark span.cm-variable-3, .cm-s-xq-dark span.cm-type { color: #DDD; }\n.cm-s-xq-dark span.cm-property {}\n.cm-s-xq-dark span.cm-operator {}\n.cm-s-xq-dark span.cm-comment { color: gray; }\n.cm-s-xq-dark span.cm-string { color: #9FEE00; }\n.cm-s-xq-dark span.cm-meta { color: yellow; }\n.cm-s-xq-dark span.cm-qualifier { color: #FFF700; }\n.cm-s-xq-dark span.cm-builtin { color: #30a; }\n.cm-s-xq-dark span.cm-bracket { color: #cc7; }\n.cm-s-xq-dark span.cm-tag { color: #FFBD40; }\n.cm-s-xq-dark span.cm-attribute { color: #FFF700; }\n.cm-s-xq-dark span.cm-error { color: #f00; }\n\n.cm-s-xq-dark .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-xq-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/xq-light.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/xq-light.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/yeti.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/yeti.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       yeti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)\n\n*/\n\n\n.cm-s-yeti.CodeMirror {\n  background-color: #ECEAE8 !important;\n  color: #d1c9c0 !important;\n  border: none;\n}\n\n.cm-s-yeti .CodeMirror-gutters {\n  color: #adaba6;\n  background-color: #E5E1DB;\n  border: none;\n}\n.cm-s-yeti .CodeMirror-cursor { border-left: solid thin #d1c9c0; }\n.cm-s-yeti .CodeMirror-linenumber { color: #adaba6; }\n.cm-s-yeti.CodeMirror-focused div.CodeMirror-selected { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::selection, .cm-s-yeti .CodeMirror-line > span::selection, .cm-s-yeti .CodeMirror-line > span > span::selection { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::-moz-selection, .cm-s-yeti .CodeMirror-line > span::-moz-selection, .cm-s-yeti .CodeMirror-line > span > span::-moz-selection { background: #DCD8D2; }\n.cm-s-yeti span.cm-comment { color: #d4c8be; }\n.cm-s-yeti span.cm-string, .cm-s-yeti span.cm-string-2 { color: #96c0d8; }\n.cm-s-yeti span.cm-number { color: #a074c4; }\n.cm-s-yeti span.cm-variable { color: #55b5db; }\n.cm-s-yeti span.cm-variable-2 { color: #a074c4; }\n.cm-s-yeti span.cm-def { color: #55b5db; }\n.cm-s-yeti span.cm-operator { color: #9fb96e; }\n.cm-s-yeti span.cm-keyword { color: #9fb96e; }\n.cm-s-yeti span.cm-atom { color: #a074c4; }\n.cm-s-yeti span.cm-meta { color: #96c0d8; }\n.cm-s-yeti span.cm-tag { color: #96c0d8; }\n.cm-s-yeti span.cm-attribute { color: #9fb96e; }\n.cm-s-yeti span.cm-qualifier { color: #96c0d8; }\n.cm-s-yeti span.cm-property { color: #a074c4; }\n.cm-s-yeti span.cm-builtin { color: #a074c4; }\n.cm-s-yeti span.cm-variable-3, .cm-s-yeti span.cm-type { color: #96c0d8; }\n.cm-s-yeti .CodeMirror-activeline-background { background: #E7E4E0; }\n.cm-s-yeti .CodeMirror-matchingbracket { text-decoration: underline; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/yonce.css":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/yonce.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\n    Name:       yoncé\n    Author:     Thomas MacLean (http://github.com/thomasmaclean)\n\n    Original yoncé color scheme by Mina Markham (https://github.com/minamarkham)\n\n*/\n\n.cm-s-yonce.CodeMirror { background: #1C1C1C; color: #d4d4d4; } /**/\n.cm-s-yonce div.CodeMirror-selected { background: rgba(252, 69, 133, 0.478); } /**/\n.cm-s-yonce .CodeMirror-selectedtext,\n.cm-s-yonce .CodeMirror-selected,\n.cm-s-yonce .CodeMirror-line::selection,\n.cm-s-yonce .CodeMirror-line > span::selection,\n.cm-s-yonce .CodeMirror-line > span > span::selection,\n.cm-s-yonce .CodeMirror-line::-moz-selection,\n.cm-s-yonce .CodeMirror-line > span::-moz-selection,\n.cm-s-yonce .CodeMirror-line > span > span::-moz-selection { background: rgba(252, 67, 132, 0.47); }\n\n.cm-s-yonce.CodeMirror pre { padding-left: 0px; }\n.cm-s-yonce .CodeMirror-gutters {background: #1C1C1C; border-right: 0px;}\n.cm-s-yonce .CodeMirror-linenumber {color: #777777;  padding-right: 10px; }\n.cm-s-yonce .CodeMirror-activeline .CodeMirror-linenumber.CodeMirror-gutter-elt { background: #1C1C1C; color: #fc4384; }\n.cm-s-yonce .CodeMirror-linenumber { color: #777; }\n.cm-s-yonce .CodeMirror-cursor { border-left: 2px solid #FC4384; }\n.cm-s-yonce .cm-searching { background: rgb(243, 155, 53, .3) !important; outline: 1px solid #F39B35; }\n.cm-s-yonce .cm-searching.CodeMirror-selectedtext { background: rgb(243, 155, 53, .7) !important; color: white; }\n\n.cm-s-yonce .cm-keyword { color: #00A7AA; } /**/\n.cm-s-yonce .cm-atom { color: #F39B35; }\n.cm-s-yonce .cm-number, .cm-s-yonce span.cm-type { color:  #A06FCA; } /**/\n.cm-s-yonce .cm-def { color: #98E342; }\n.cm-s-yonce .cm-property,\n.cm-s-yonce span.cm-variable { color: #D4D4D4; font-style: italic; }\n.cm-s-yonce span.cm-variable-2 { color: #da7dae; font-style: italic; }\n.cm-s-yonce span.cm-variable-3 { color: #A06FCA; }\n.cm-s-yonce .cm-type.cm-def { color: #FC4384; font-style: normal; text-decoration: underline; }\n.cm-s-yonce .cm-property.cm-def { color: #FC4384; font-style: normal; }\n.cm-s-yonce .cm-callee { color: #FC4384; font-style: normal; }\n.cm-s-yonce .cm-operator { color: #FC4384; } /**/\n.cm-s-yonce .cm-qualifier,\n.cm-s-yonce .cm-tag { color: #FC4384; }\n.cm-s-yonce .cm-tag.cm-bracket { color: #D4D4D4; }\n.cm-s-yonce .cm-attribute { color: #A06FCA; }\n.cm-s-yonce .cm-comment { color:#696d70; font-style:italic; font-weight:normal; } /**/\n.cm-s-yonce .cm-comment.cm-tag { color: #FC4384 }\n.cm-s-yonce .cm-comment.cm-attribute { color: #D4D4D4; }\n.cm-s-yonce .cm-string { color:#E6DB74; } /**/\n.cm-s-yonce .cm-string-2 { color:#F39B35; } /*?*/\n.cm-s-yonce .cm-meta { color: #D4D4D4; background: inherit; }\n.cm-s-yonce .cm-builtin { color: #FC4384; } /*?*/\n.cm-s-yonce .cm-header { color: #da7dae; }\n.cm-s-yonce .cm-hr { color: #98E342; }\n.cm-s-yonce .cm-link { color:#696d70; font-style:italic; text-decoration:none; } /**/\n.cm-s-yonce .cm-error { border-bottom: 1px solid #C42412; }\n\n.cm-s-yonce .CodeMirror-activeline-background { background: #272727; }\n.cm-s-yonce .CodeMirror-matchingbracket { outline:1px solid grey; color:#D4D4D4 !important; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/zenburn.css":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./CodeMirror/theme/zenburn.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * \"\n *  Using Zenburn color palette from the Emacs Zenburn Theme\n *  https://github.com/bbatsov/zenburn-emacs/blob/master/zenburn-theme.el\n *\n *  Also using parts of https://github.com/xavi/coderay-lighttable-theme\n * \"\n * From: https://github.com/wisenomad/zenburn-lighttable-theme/blob/master/zenburn.css\n */\n\n.cm-s-zenburn .CodeMirror-gutters { background: #3f3f3f !important; }\n.cm-s-zenburn .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded { color: #999; }\n.cm-s-zenburn .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-zenburn { background-color: #3f3f3f; color: #dcdccc; }\n.cm-s-zenburn span.cm-builtin { color: #dcdccc; font-weight: bold; }\n.cm-s-zenburn span.cm-comment { color: #7f9f7f; }\n.cm-s-zenburn span.cm-keyword { color: #f0dfaf; font-weight: bold; }\n.cm-s-zenburn span.cm-atom { color: #bfebbf; }\n.cm-s-zenburn span.cm-def { color: #dcdccc; }\n.cm-s-zenburn span.cm-variable { color: #dfaf8f; }\n.cm-s-zenburn span.cm-variable-2 { color: #dcdccc; }\n.cm-s-zenburn span.cm-string { color: #cc9393; }\n.cm-s-zenburn span.cm-string-2 { color: #cc9393; }\n.cm-s-zenburn span.cm-number { color: #dcdccc; }\n.cm-s-zenburn span.cm-tag { color: #93e0e3; }\n.cm-s-zenburn span.cm-property { color: #dfaf8f; }\n.cm-s-zenburn span.cm-attribute { color: #dfaf8f; }\n.cm-s-zenburn span.cm-qualifier { color: #7cb8bb; }\n.cm-s-zenburn span.cm-meta { color: #f0dfaf; }\n.cm-s-zenburn span.cm-header { color: #f0efd0; }\n.cm-s-zenburn span.cm-operator { color: #f0efd0; }\n.cm-s-zenburn span.CodeMirror-matchingbracket { box-sizing: border-box; background: transparent; border-bottom: 1px solid; }\n.cm-s-zenburn span.CodeMirror-nonmatchingbracket { border-bottom: 1px solid; background: none; }\n.cm-s-zenburn .CodeMirror-activeline { background: #000000; }\n.cm-s-zenburn .CodeMirror-activeline-background { background: #000000; }\n.cm-s-zenburn div.CodeMirror-selected { background: #545454; }\n.cm-s-zenburn .CodeMirror-focused div.CodeMirror-selected { background: #4f4f4f; }\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ext/keymap/emacs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ext/keymap/emacs.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n//-- (function(mod) {\n//--   if (typeof exports == \"object\" && typeof module == \"object\") // CommonJS\n//--     mod(require(\"../lib/codemirror\"));\n//--   else if (typeof define == \"function\" && define.amd) // AMD\n//--     define([\"../lib/codemirror\"], mod);\n//--   else // Plain browser env\n//--     mod(CodeMirror);\n//-- })(\nfunction inject_map(CodeMirror) {\n  \"use strict\";\n\n  var Pos = CodeMirror.Pos;\n  function posEq(a, b) { return a.line == b.line && a.ch == b.ch; }\n\n  // Kill 'ring'\n\n  var killRing = [];\n  function addToRing(str) {\n    killRing.push(str);\n    if (killRing.length > 50) killRing.shift();\n  }\n  function growRingTop(str) {\n    if (!killRing.length) return addToRing(str);\n    killRing[killRing.length - 1] += str;\n  }\n  function getFromRing(n) { return killRing[killRing.length - (n ? Math.min(n, 1) : 1)] || \"\"; }\n  function popFromRing() { if (killRing.length > 1) killRing.pop(); return getFromRing(); }\n\n  var lastKill = null;\n\n  function kill(cm, from, to, ring, text) {\n    if (text == null) text = cm.getRange(from, to);\n\n    if (ring == \"grow\" && lastKill && lastKill.cm == cm && posEq(from, lastKill.pos) && cm.isClean(lastKill.gen))\n      growRingTop(text);\n    else if (ring !== false)\n      addToRing(text);\n    cm.replaceRange(\"\", from, to, \"+delete\");\n\n    if (ring == \"grow\") lastKill = {cm: cm, pos: from, gen: cm.changeGeneration()};\n    else lastKill = null;\n  }\n\n  // Boundaries of various units\n\n  function byChar(cm, pos, dir) {\n    return cm.findPosH(pos, dir, \"char\", true);\n  }\n\n  function byWord(cm, pos, dir) {\n    return cm.findPosH(pos, dir, \"word\", true);\n  }\n\n  function byLine(cm, pos, dir) {\n    return cm.findPosV(pos, dir, \"line\", cm.doc.sel.goalColumn);\n  }\n\n  function byPage(cm, pos, dir) {\n    return cm.findPosV(pos, dir, \"page\", cm.doc.sel.goalColumn);\n  }\n\n  function byParagraph(cm, pos, dir) {\n    var no = pos.line, line = cm.getLine(no);\n    var sawText = /\\S/.test(dir < 0 ? line.slice(0, pos.ch) : line.slice(pos.ch));\n    var fst = cm.firstLine(), lst = cm.lastLine();\n    for (;;) {\n      no += dir;\n      if (no < fst || no > lst)\n        return cm.clipPos(Pos(no - dir, dir < 0 ? 0 : null));\n      line = cm.getLine(no);\n      var hasText = /\\S/.test(line);\n      if (hasText) sawText = true;\n      else if (sawText) return Pos(no, 0);\n    }\n  }\n\n  function bySentence(cm, pos, dir) {\n    var line = pos.line, ch = pos.ch;\n    var text = cm.getLine(pos.line), sawWord = false;\n    for (;;) {\n      var next = text.charAt(ch + (dir < 0 ? -1 : 0));\n      if (!next) { // End/beginning of line reached\n        if (line == (dir < 0 ? cm.firstLine() : cm.lastLine())) return Pos(line, ch);\n        text = cm.getLine(line + dir);\n        if (!/\\S/.test(text)) return Pos(line, ch);\n        line += dir;\n        ch = dir < 0 ? text.length : 0;\n        continue;\n      }\n      if (sawWord && /[!?.]/.test(next)) return Pos(line, ch + (dir > 0 ? 1 : 0));\n      if (!sawWord) sawWord = /\\w/.test(next);\n      ch += dir;\n    }\n  }\n\n  function byExpr(cm, pos, dir) {\n    var wrap;\n    if (cm.findMatchingBracket && (wrap = cm.findMatchingBracket(pos, {strict: true}))\n        && wrap.match && (wrap.forward ? 1 : -1) == dir)\n      return dir > 0 ? Pos(wrap.to.line, wrap.to.ch + 1) : wrap.to;\n\n    for (var first = true;; first = false) {\n      var token = cm.getTokenAt(pos);\n      var after = Pos(pos.line, dir < 0 ? token.start : token.end);\n      if (first && dir > 0 && token.end == pos.ch || !/\\w/.test(token.string)) {\n        var newPos = cm.findPosH(after, dir, \"char\");\n        if (posEq(after, newPos)) return pos;\n        else pos = newPos;\n      } else {\n        return after;\n      }\n    }\n  }\n\n  // Prefixes (only crudely supported)\n\n  function getPrefix(cm, precise) {\n    var digits = cm.state.emacsPrefix;\n    if (!digits) return precise ? null : 1;\n    clearPrefix(cm);\n    return digits == \"-\" ? -1 : Number(digits);\n  }\n\n  function repeated(cmd) {\n    var f = typeof cmd == \"string\" ? function(cm) { cm.execCommand(cmd); } : cmd;\n    return function(cm) {\n      var prefix = getPrefix(cm);\n      f(cm);\n      for (var i = 1; i < prefix; ++i) f(cm);\n    };\n  }\n\n  function findEnd(cm, pos, by, dir) {\n    var prefix = getPrefix(cm);\n    if (prefix < 0) { dir = -dir; prefix = -prefix; }\n    for (var i = 0; i < prefix; ++i) {\n      var newPos = by(cm, pos, dir);\n      if (posEq(newPos, pos)) break;\n      pos = newPos;\n    }\n    return pos;\n  }\n\n  function move(by, dir) {\n    var f = function(cm) {\n      cm.extendSelection(findEnd(cm, cm.getCursor(), by, dir));\n    };\n    f.motion = true;\n    return f;\n  }\n\n  function killTo(cm, by, dir, ring) {\n    var selections = cm.listSelections(), cursor;\n    var i = selections.length;\n    while (i--) {\n      cursor = selections[i].head;\n      kill(cm, cursor, findEnd(cm, cursor, by, dir), ring);\n    }\n  }\n\n  function killRegion(cm, ring) {\n    if (cm.somethingSelected()) {\n      var selections = cm.listSelections(), selection;\n      var i = selections.length;\n      while (i--) {\n        selection = selections[i];\n        kill(cm, selection.anchor, selection.head, ring);\n      }\n      return true;\n    }\n  }\n\n  function addPrefix(cm, digit) {\n    if (cm.state.emacsPrefix) {\n      if (digit != \"-\") cm.state.emacsPrefix += digit;\n      return;\n    }\n    // Not active yet\n    cm.state.emacsPrefix = digit;\n    cm.on(\"keyHandled\", maybeClearPrefix);\n    cm.on(\"inputRead\", maybeDuplicateInput);\n  }\n\n  var prefixPreservingKeys = {\"Alt-G\": true, \"Ctrl-X\": true, \"Ctrl-Q\": true, \"Ctrl-U\": true};\n\n  function maybeClearPrefix(cm, arg) {\n    if (!cm.state.emacsPrefixMap && !prefixPreservingKeys.hasOwnProperty(arg))\n      clearPrefix(cm);\n  }\n\n  function clearPrefix(cm) {\n    cm.state.emacsPrefix = null;\n    cm.off(\"keyHandled\", maybeClearPrefix);\n    cm.off(\"inputRead\", maybeDuplicateInput);\n  }\n\n  function maybeDuplicateInput(cm, event) {\n    var dup = getPrefix(cm);\n    if (dup > 1 && event.origin == \"+input\") {\n      var one = event.text.join(\"\\n\"), txt = \"\";\n      for (var i = 1; i < dup; ++i) txt += one;\n      cm.replaceSelection(txt);\n    }\n  }\n\n  function addPrefixMap(cm) {\n    cm.state.emacsPrefixMap = true;\n    cm.addKeyMap(prefixMap);\n    cm.on(\"keyHandled\", maybeRemovePrefixMap);\n    cm.on(\"inputRead\", maybeRemovePrefixMap);\n  }\n\n  function maybeRemovePrefixMap(cm, arg) {\n    if (typeof arg == \"string\" && (/^\\d$/.test(arg) || arg == \"Ctrl-U\")) return;\n    cm.removeKeyMap(prefixMap);\n    cm.state.emacsPrefixMap = false;\n    cm.off(\"keyHandled\", maybeRemovePrefixMap);\n    cm.off(\"inputRead\", maybeRemovePrefixMap);\n  }\n\n  // Utilities\n\n  function setMark(cm) {\n    cm.setCursor(cm.getCursor());\n    cm.setExtending(!cm.getExtending());\n    cm.on(\"change\", function() { cm.setExtending(false); });\n  }\n\n  function clearMark(cm) {\n    cm.setExtending(false);\n    cm.setCursor(cm.getCursor());\n  }\n\n  function getInput(cm, msg, f) {\n    if (cm.openDialog)\n      cm.openDialog(msg + \": <input type=\\\"text\\\" style=\\\"width: 10em\\\"/>\", f, {bottom: true});\n    else\n      f(prompt(msg, \"\"));\n  }\n\n  function operateOnWord(cm, op) {\n    var start = cm.getCursor(), end = cm.findPosH(start, 1, \"word\");\n    cm.replaceRange(op(cm.getRange(start, end)), start, end);\n    cm.setCursor(end);\n  }\n\n  function toEnclosingExpr(cm) {\n    var pos = cm.getCursor(), line = pos.line, ch = pos.ch;\n    var stack = [];\n    while (line >= cm.firstLine()) {\n      var text = cm.getLine(line);\n      for (var i = ch == null ? text.length : ch; i > 0;) {\n        var ch = text.charAt(--i);\n        if (ch == \")\")\n          stack.push(\"(\");\n        else if (ch == \"]\")\n          stack.push(\"[\");\n        else if (ch == \"}\")\n          stack.push(\"{\");\n        else if (/[\\(\\{\\[]/.test(ch) && (!stack.length || stack.pop() != ch))\n          return cm.extendSelection(Pos(line, i));\n      }\n      --line; ch = null;\n    }\n  }\n\n  function quit(cm) {\n    cm.execCommand(\"clearSearch\");\n    clearMark(cm);\n  }\n\n  CodeMirror.emacs = {kill: kill, killRegion: killRegion, repeated: repeated};\n\n  // Actual keymap\n\n  var keyMap = CodeMirror.keyMap.emacs = CodeMirror.normalizeKeyMap({\n    \"Ctrl-W\": function(cm) {kill(cm, cm.getCursor(\"start\"), cm.getCursor(\"end\"), true);},\n    \"Ctrl-K\": repeated(function(cm) {\n      var start = cm.getCursor(), end = cm.clipPos(Pos(start.line));\n      var text = cm.getRange(start, end);\n      if (!/\\S/.test(text)) {\n        text += \"\\n\";\n        end = Pos(start.line + 1, 0);\n      }\n      kill(cm, start, end, \"grow\", text);\n    }),\n    \"Alt-W\": function(cm) {\n      addToRing(cm.getSelection());\n      clearMark(cm);\n    },\n    \"Ctrl-Y\": function(cm) {\n      var start = cm.getCursor();\n      cm.replaceRange(getFromRing(getPrefix(cm)), start, start, \"paste\");\n      cm.setSelection(start, cm.getCursor());\n    },\n    \"Alt-Y\": function(cm) {cm.replaceSelection(popFromRing(), \"around\", \"paste\");},\n\n    \"Ctrl-Space\": setMark, \"Ctrl-Shift-2\": setMark,\n\n    \"Ctrl-F\": move(byChar, 1), \"Ctrl-B\": move(byChar, -1),\n    \"Right\": move(byChar, 1), \"Left\": move(byChar, -1),\n    \"Ctrl-D\": function(cm) { killTo(cm, byChar, 1, false); },\n    \"Delete\": function(cm) { killRegion(cm, false) || killTo(cm, byChar, 1, false); },\n    \"Ctrl-H\": function(cm) { killTo(cm, byChar, -1, false); },\n    \"Backspace\": function(cm) { killRegion(cm, false) || killTo(cm, byChar, -1, false); },\n\n    \"Alt-F\": move(byWord, 1), \"Alt-B\": move(byWord, -1),\n    \"Alt-Right\": move(byWord, 1), \"Alt-Left\": move(byWord, -1),\n    \"Alt-D\": function(cm) { killTo(cm, byWord, 1, \"grow\"); },\n    \"Alt-Backspace\": function(cm) { killTo(cm, byWord, -1, \"grow\"); },\n\n    \"Ctrl-N\": move(byLine, 1), \"Ctrl-P\": move(byLine, -1),\n    \"Down\": move(byLine, 1), \"Up\": move(byLine, -1),\n    \"Ctrl-A\": \"goLineStart\", \"Ctrl-E\": \"goLineEnd\",\n    \"End\": \"goLineEnd\", \"Home\": \"goLineStart\",\n\n    \"Alt-V\": move(byPage, -1), \"Ctrl-V\": move(byPage, 1),\n    \"PageUp\": move(byPage, -1), \"PageDown\": move(byPage, 1),\n\n    \"Ctrl-Up\": move(byParagraph, -1), \"Ctrl-Down\": move(byParagraph, 1),\n\n    \"Alt-A\": move(bySentence, -1), \"Alt-E\": move(bySentence, 1),\n    \"Alt-K\": function(cm) { killTo(cm, bySentence, 1, \"grow\"); },\n\n    \"Ctrl-Alt-K\": function(cm) { killTo(cm, byExpr, 1, \"grow\"); },\n    \"Ctrl-Alt-Backspace\": function(cm) { killTo(cm, byExpr, -1, \"grow\"); },\n    \"Ctrl-Alt-F\": move(byExpr, 1), \"Ctrl-Alt-B\": move(byExpr, -1, \"grow\"),\n\n    \"Shift-Ctrl-Alt-2\": function(cm) {\n      var cursor = cm.getCursor();\n      cm.setSelection(findEnd(cm, cursor, byExpr, 1), cursor);\n    },\n    \"Ctrl-Alt-T\": function(cm) {\n      var leftStart = byExpr(cm, cm.getCursor(), -1), leftEnd = byExpr(cm, leftStart, 1);\n      var rightEnd = byExpr(cm, leftEnd, 1), rightStart = byExpr(cm, rightEnd, -1);\n      cm.replaceRange(cm.getRange(rightStart, rightEnd) + cm.getRange(leftEnd, rightStart) +\n                      cm.getRange(leftStart, leftEnd), leftStart, rightEnd);\n    },\n    \"Ctrl-Alt-U\": repeated(toEnclosingExpr),\n\n    \"Alt-Space\": function(cm) {\n      var pos = cm.getCursor(), from = pos.ch, to = pos.ch, text = cm.getLine(pos.line);\n      while (from && /\\s/.test(text.charAt(from - 1))) --from;\n      while (to < text.length && /\\s/.test(text.charAt(to))) ++to;\n      cm.replaceRange(\" \", Pos(pos.line, from), Pos(pos.line, to));\n    },\n    \"Ctrl-O\": repeated(function(cm) { cm.replaceSelection(\"\\n\", \"start\"); }),\n    \"Ctrl-T\": repeated(function(cm) {\n      cm.execCommand(\"transposeChars\");\n    }),\n\n    \"Alt-C\": repeated(function(cm) {\n      operateOnWord(cm, function(w) {\n        var letter = w.search(/\\w/);\n        if (letter == -1) return w;\n        return w.slice(0, letter) + w.charAt(letter).toUpperCase() + w.slice(letter + 1).toLowerCase();\n      });\n    }),\n    \"Alt-U\": repeated(function(cm) {\n      operateOnWord(cm, function(w) { return w.toUpperCase(); });\n    }),\n    \"Alt-L\": repeated(function(cm) {\n      operateOnWord(cm, function(w) { return w.toLowerCase(); });\n    }),\n\n    \"Alt-;\": \"toggleComment\",\n\n    \"Ctrl-/\": repeated(\"undo\"), \"Shift-Ctrl--\": repeated(\"undo\"),\n    \"Ctrl-Z\": repeated(\"undo\"), \"Cmd-Z\": repeated(\"undo\"),\n    \"Shift-Alt-,\": \"goDocStart\", \"Shift-Alt-.\": \"goDocEnd\",\n    \"Ctrl-S\": \"findPersistentNext\", \"Ctrl-R\": \"findPersistentPrev\", \"Ctrl-G\": quit, \"Shift-Alt-5\": \"replace\",\n    \"Alt-/\": \"autocomplete\",\n    \"Enter\": \"newlineAndIndent\",\n    \"Ctrl-J\": repeated(function(cm) { cm.replaceSelection(\"\\n\", \"end\"); }),\n    \"Tab\": \"indentAuto\",\n\n    \"Alt-G G\": function(cm) {\n      var prefix = getPrefix(cm, true);\n      if (prefix != null && prefix > 0) return cm.setCursor(prefix - 1);\n\n      getInput(cm, \"Goto line\", function(str) {\n        var num;\n        if (str && !isNaN(num = Number(str)) && num == (num|0) && num > 0)\n          cm.setCursor(num - 1);\n      });\n    },\n\n    \"Ctrl-X Tab\": function(cm) {\n      cm.indentSelection(getPrefix(cm, true) || cm.getOption(\"indentUnit\"));\n    },\n    \"Ctrl-X Ctrl-X\": function(cm) {\n      cm.setSelection(cm.getCursor(\"head\"), cm.getCursor(\"anchor\"));\n    },\n    \"Ctrl-X Ctrl-S\": \"save\",\n    \"Ctrl-X Ctrl-W\": \"save\",\n    \"Ctrl-X S\": \"saveAll\",\n    \"Ctrl-X F\": \"open\",\n    \"Ctrl-X U\": repeated(\"undo\"),\n    \"Ctrl-X K\": \"close\",\n    \"Ctrl-X Delete\": function(cm) { kill(cm, cm.getCursor(), bySentence(cm, cm.getCursor(), 1), \"grow\"); },\n    \"Ctrl-X H\": \"selectAll\",\n\n    \"Ctrl-Q Tab\": repeated(\"insertTab\"),\n    \"Ctrl-U\": addPrefixMap\n  });\n\n  var prefixMap = {\"Ctrl-G\": clearPrefix};\n  function regPrefix(d) {\n    prefixMap[d] = function(cm) { addPrefix(cm, d); };\n    keyMap[\"Ctrl-\" + d] = function(cm) { addPrefix(cm, d); };\n    prefixPreservingKeys[\"Ctrl-\" + d] = true;\n  }\n  for (var i = 0; i < 10; ++i) regPrefix(String(i));\n  regPrefix(\"-\");\n}\n\n//-- );\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ext/keymap/sublime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ext/keymap/sublime.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n// A rough approximation of Sublime Text's keybindings\n// Depends on addon/search/searchcursor.js and optionally addon/dialog/dialogs.js\n\n//-- (function(mod) {\n//--   if (typeof exports == \"object\" && typeof module == \"object\") // CommonJS\n//--     mod(require(\"../lib/codemirror\"), require(\"../addon/search/searchcursor\"), require(\"../addon/edit/matchbrackets\"));\n//--   else if (typeof define == \"function\" && define.amd) // AMD\n//--     define([\"../lib/codemirror\", \"../addon/search/searchcursor\", \"../addon/edit/matchbrackets\"], mod);\n//--   else // Plain browser env\n//--     mod(CodeMirror);\n//-- })(\nfunction inject_map(CodeMirror) {\n  \"use strict\";\n\n  var cmds = CodeMirror.commands;\n  var Pos = CodeMirror.Pos;\n\n  // This is not exactly Sublime's algorithm. I couldn't make heads or tails of that.\n  function findPosSubword(doc, start, dir) {\n    if (dir < 0 && start.ch == 0) return doc.clipPos(Pos(start.line - 1));\n    var line = doc.getLine(start.line);\n    if (dir > 0 && start.ch >= line.length) return doc.clipPos(Pos(start.line + 1, 0));\n    var state = \"start\", type;\n    for (var pos = start.ch, e = dir < 0 ? 0 : line.length, i = 0; pos != e; pos += dir, i++) {\n      var next = line.charAt(dir < 0 ? pos - 1 : pos);\n      var cat = next != \"_\" && CodeMirror.isWordChar(next) ? \"w\" : \"o\";\n      if (cat == \"w\" && next.toUpperCase() == next) cat = \"W\";\n      if (state == \"start\") {\n        if (cat != \"o\") { state = \"in\"; type = cat; }\n      } else if (state == \"in\") {\n        if (type != cat) {\n          if (type == \"w\" && cat == \"W\" && dir < 0) pos--;\n          if (type == \"W\" && cat == \"w\" && dir > 0) { type = \"w\"; continue; }\n          break;\n        }\n      }\n    }\n    return Pos(start.line, pos);\n  }\n\n  function moveSubword(cm, dir) {\n    cm.extendSelectionsBy(function(range) {\n      if (cm.display.shift || cm.doc.extend || range.empty())\n        return findPosSubword(cm.doc, range.head, dir);\n      else\n        return dir < 0 ? range.from() : range.to();\n    });\n  }\n\n  cmds.goSubwordLeft = function(cm) { moveSubword(cm, -1); };\n  cmds.goSubwordRight = function(cm) { moveSubword(cm, 1); };\n\n  cmds.scrollLineUp = function(cm) {\n    var info = cm.getScrollInfo();\n    if (!cm.somethingSelected()) {\n      var visibleBottomLine = cm.lineAtHeight(info.top + info.clientHeight, \"local\");\n      if (cm.getCursor().line >= visibleBottomLine)\n        cm.execCommand(\"goLineUp\");\n    }\n    cm.scrollTo(null, info.top - cm.defaultTextHeight());\n  };\n  cmds.scrollLineDown = function(cm) {\n    var info = cm.getScrollInfo();\n    if (!cm.somethingSelected()) {\n      var visibleTopLine = cm.lineAtHeight(info.top, \"local\")+1;\n      if (cm.getCursor().line <= visibleTopLine)\n        cm.execCommand(\"goLineDown\");\n    }\n    cm.scrollTo(null, info.top + cm.defaultTextHeight());\n  };\n\n  cmds.splitSelectionByLine = function(cm) {\n    var ranges = cm.listSelections(), lineRanges = [];\n    for (var i = 0; i < ranges.length; i++) {\n      var from = ranges[i].from(), to = ranges[i].to();\n      for (var line = from.line; line <= to.line; ++line)\n        if (!(to.line > from.line && line == to.line && to.ch == 0))\n          lineRanges.push({anchor: line == from.line ? from : Pos(line, 0),\n                           head: line == to.line ? to : Pos(line)});\n    }\n    cm.setSelections(lineRanges, 0);\n  };\n\n  cmds.singleSelectionTop = function(cm) {\n    var range = cm.listSelections()[0];\n    cm.setSelection(range.anchor, range.head, {scroll: false});\n  };\n\n  cmds.selectLine = function(cm) {\n    var ranges = cm.listSelections(), extended = [];\n    for (var i = 0; i < ranges.length; i++) {\n      var range = ranges[i];\n      extended.push({anchor: Pos(range.from().line, 0),\n                     head: Pos(range.to().line + 1, 0)});\n    }\n    cm.setSelections(extended);\n  };\n\n  function insertLine(cm, above) {\n    if (cm.isReadOnly()) return CodeMirror.Pass\n    cm.operation(function() {\n      var len = cm.listSelections().length, newSelection = [], last = -1;\n      for (var i = 0; i < len; i++) {\n        var head = cm.listSelections()[i].head;\n        if (head.line <= last) continue;\n        var at = Pos(head.line + (above ? 0 : 1), 0);\n        cm.replaceRange(\"\\n\", at, null, \"+insertLine\");\n        cm.indentLine(at.line, null, true);\n        newSelection.push({head: at, anchor: at});\n        last = head.line + 1;\n      }\n      cm.setSelections(newSelection);\n    });\n    cm.execCommand(\"indentAuto\");\n  }\n\n  cmds.insertLineAfter = function(cm) { return insertLine(cm, false); };\n\n  cmds.insertLineBefore = function(cm) { return insertLine(cm, true); };\n\n  function wordAt(cm, pos) {\n    var start = pos.ch, end = start, line = cm.getLine(pos.line);\n    while (start && CodeMirror.isWordChar(line.charAt(start - 1))) --start;\n    while (end < line.length && CodeMirror.isWordChar(line.charAt(end))) ++end;\n    return {from: Pos(pos.line, start), to: Pos(pos.line, end), word: line.slice(start, end)};\n  }\n\n  cmds.selectNextOccurrence = function(cm) {\n    var from = cm.getCursor(\"from\"), to = cm.getCursor(\"to\");\n    var fullWord = cm.state.sublimeFindFullWord == cm.doc.sel;\n    if (CodeMirror.cmpPos(from, to) == 0) {\n      var word = wordAt(cm, from);\n      if (!word.word) return;\n      cm.setSelection(word.from, word.to);\n      fullWord = true;\n    } else {\n      var text = cm.getRange(from, to);\n      var query = fullWord ? new RegExp(\"\\\\b\" + text + \"\\\\b\") : text;\n      var cur = cm.getSearchCursor(query, to);\n      var found = cur.findNext();\n      if (!found) {\n        cur = cm.getSearchCursor(query, Pos(cm.firstLine(), 0));\n        found = cur.findNext();\n      }\n      if (!found || isSelectedRange(cm.listSelections(), cur.from(), cur.to()))\n        return CodeMirror.Pass\n      cm.addSelection(cur.from(), cur.to());\n    }\n    if (fullWord)\n      cm.state.sublimeFindFullWord = cm.doc.sel;\n  };\n\n  function addCursorToSelection(cm, dir) {\n    var ranges = cm.listSelections(), newRanges = [];\n    for (var i = 0; i < ranges.length; i++) {\n      var range = ranges[i];\n      var newAnchor = cm.findPosV(\n          range.anchor, dir, \"line\", range.anchor.goalColumn);\n      var newHead = cm.findPosV(\n          range.head, dir, \"line\", range.head.goalColumn);\n      newAnchor.goalColumn = range.anchor.goalColumn != null ?\n          range.anchor.goalColumn : cm.cursorCoords(range.anchor, \"div\").left;\n      newHead.goalColumn = range.head.goalColumn != null ?\n          range.head.goalColumn : cm.cursorCoords(range.head, \"div\").left;\n      var newRange = {anchor: newAnchor, head: newHead};\n      newRanges.push(range);\n      newRanges.push(newRange);\n    }\n    cm.setSelections(newRanges);\n  }\n  cmds.addCursorToPrevLine = function(cm) { addCursorToSelection(cm, -1); };\n  cmds.addCursorToNextLine = function(cm) { addCursorToSelection(cm, 1); };\n\n  function isSelectedRange(ranges, from, to) {\n    for (var i = 0; i < ranges.length; i++)\n      if (ranges[i].from() == from && ranges[i].to() == to) return true\n    return false\n  }\n\n  var mirror = \"(){}[]\";\n  function selectBetweenBrackets(cm) {\n    var ranges = cm.listSelections(), newRanges = []\n    for (var i = 0; i < ranges.length; i++) {\n      var range = ranges[i], pos = range.head, opening = cm.scanForBracket(pos, -1);\n      if (!opening) return false;\n      for (;;) {\n        var closing = cm.scanForBracket(pos, 1);\n        if (!closing) return false;\n        if (closing.ch == mirror.charAt(mirror.indexOf(opening.ch) + 1)) {\n          var startPos = Pos(opening.pos.line, opening.pos.ch + 1);\n          if (CodeMirror.cmpPos(startPos, range.from()) == 0 &&\n              CodeMirror.cmpPos(closing.pos, range.to()) == 0) {\n            opening = cm.scanForBracket(opening.pos, -1);\n            if (!opening) return false;\n          } else {\n            newRanges.push({anchor: startPos, head: closing.pos});\n            break;\n          }\n        }\n        pos = Pos(closing.pos.line, closing.pos.ch + 1);\n      }\n    }\n    cm.setSelections(newRanges);\n    return true;\n  }\n\n  cmds.selectScope = function(cm) {\n    selectBetweenBrackets(cm) || cm.execCommand(\"selectAll\");\n  };\n  cmds.selectBetweenBrackets = function(cm) {\n    if (!selectBetweenBrackets(cm)) return CodeMirror.Pass;\n  };\n\n  cmds.goToBracket = function(cm) {\n    cm.extendSelectionsBy(function(range) {\n      var next = cm.scanForBracket(range.head, 1);\n      if (next && CodeMirror.cmpPos(next.pos, range.head) != 0) return next.pos;\n      var prev = cm.scanForBracket(range.head, -1);\n      return prev && Pos(prev.pos.line, prev.pos.ch + 1) || range.head;\n    });\n  };\n\n  cmds.swapLineUp = function(cm) {\n    if (cm.isReadOnly()) return CodeMirror.Pass\n    var ranges = cm.listSelections(), linesToMove = [], at = cm.firstLine() - 1, newSels = [];\n    for (var i = 0; i < ranges.length; i++) {\n      var range = ranges[i], from = range.from().line - 1, to = range.to().line;\n      newSels.push({anchor: Pos(range.anchor.line - 1, range.anchor.ch),\n                    head: Pos(range.head.line - 1, range.head.ch)});\n      if (range.to().ch == 0 && !range.empty()) --to;\n      if (from > at) linesToMove.push(from, to);\n      else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;\n      at = to;\n    }\n    cm.operation(function() {\n      for (var i = 0; i < linesToMove.length; i += 2) {\n        var from = linesToMove[i], to = linesToMove[i + 1];\n        var line = cm.getLine(from);\n        cm.replaceRange(\"\", Pos(from, 0), Pos(from + 1, 0), \"+swapLine\");\n        if (to > cm.lastLine())\n          cm.replaceRange(\"\\n\" + line, Pos(cm.lastLine()), null, \"+swapLine\");\n        else\n          cm.replaceRange(line + \"\\n\", Pos(to, 0), null, \"+swapLine\");\n      }\n      cm.setSelections(newSels);\n      cm.scrollIntoView();\n    });\n  };\n\n  cmds.swapLineDown = function(cm) {\n    if (cm.isReadOnly()) return CodeMirror.Pass\n    var ranges = cm.listSelections(), linesToMove = [], at = cm.lastLine() + 1;\n    for (var i = ranges.length - 1; i >= 0; i--) {\n      var range = ranges[i], from = range.to().line + 1, to = range.from().line;\n      if (range.to().ch == 0 && !range.empty()) from--;\n      if (from < at) linesToMove.push(from, to);\n      else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;\n      at = to;\n    }\n    cm.operation(function() {\n      for (var i = linesToMove.length - 2; i >= 0; i -= 2) {\n        var from = linesToMove[i], to = linesToMove[i + 1];\n        var line = cm.getLine(from);\n        if (from == cm.lastLine())\n          cm.replaceRange(\"\", Pos(from - 1), Pos(from), \"+swapLine\");\n        else\n          cm.replaceRange(\"\", Pos(from, 0), Pos(from + 1, 0), \"+swapLine\");\n        cm.replaceRange(line + \"\\n\", Pos(to, 0), null, \"+swapLine\");\n      }\n      cm.scrollIntoView();\n    });\n  };\n\n  cmds.toggleCommentIndented = function(cm) {\n    cm.toggleComment({ indent: true });\n  }\n\n  cmds.joinLines = function(cm) {\n    var ranges = cm.listSelections(), joined = [];\n    for (var i = 0; i < ranges.length; i++) {\n      var range = ranges[i], from = range.from();\n      var start = from.line, end = range.to().line;\n      while (i < ranges.length - 1 && ranges[i + 1].from().line == end)\n        end = ranges[++i].to().line;\n      joined.push({start: start, end: end, anchor: !range.empty() && from});\n    }\n    cm.operation(function() {\n      var offset = 0, ranges = [];\n      for (var i = 0; i < joined.length; i++) {\n        var obj = joined[i];\n        var anchor = obj.anchor && Pos(obj.anchor.line - offset, obj.anchor.ch), head;\n        for (var line = obj.start; line <= obj.end; line++) {\n          var actual = line - offset;\n          if (line == obj.end) head = Pos(actual, cm.getLine(actual).length + 1);\n          if (actual < cm.lastLine()) {\n            cm.replaceRange(\" \", Pos(actual), Pos(actual + 1, /^\\s*/.exec(cm.getLine(actual + 1))[0].length));\n            ++offset;\n          }\n        }\n        ranges.push({anchor: anchor || head, head: head});\n      }\n      cm.setSelections(ranges, 0);\n    });\n  };\n\n  cmds.duplicateLine = function(cm) {\n    cm.operation(function() {\n      var rangeCount = cm.listSelections().length;\n      for (var i = 0; i < rangeCount; i++) {\n        var range = cm.listSelections()[i];\n        if (range.empty())\n          cm.replaceRange(cm.getLine(range.head.line) + \"\\n\", Pos(range.head.line, 0));\n        else\n          cm.replaceRange(cm.getRange(range.from(), range.to()), range.from());\n      }\n      cm.scrollIntoView();\n    });\n  };\n\n\n  function sortLines(cm, caseSensitive) {\n    if (cm.isReadOnly()) return CodeMirror.Pass\n    var ranges = cm.listSelections(), toSort = [], selected;\n    for (var i = 0; i < ranges.length; i++) {\n      var range = ranges[i];\n      if (range.empty()) continue;\n      var from = range.from().line, to = range.to().line;\n      while (i < ranges.length - 1 && ranges[i + 1].from().line == to)\n        to = ranges[++i].to().line;\n      if (!ranges[i].to().ch) to--;\n      toSort.push(from, to);\n    }\n    if (toSort.length) selected = true;\n    else toSort.push(cm.firstLine(), cm.lastLine());\n\n    cm.operation(function() {\n      var ranges = [];\n      for (var i = 0; i < toSort.length; i += 2) {\n        var from = toSort[i], to = toSort[i + 1];\n        var start = Pos(from, 0), end = Pos(to);\n        var lines = cm.getRange(start, end, false);\n        if (caseSensitive)\n          lines.sort();\n        else\n          lines.sort(function(a, b) {\n            var au = a.toUpperCase(), bu = b.toUpperCase();\n            if (au != bu) { a = au; b = bu; }\n            return a < b ? -1 : a == b ? 0 : 1;\n          });\n        cm.replaceRange(lines, start, end);\n        if (selected) ranges.push({anchor: start, head: Pos(to + 1, 0)});\n      }\n      if (selected) cm.setSelections(ranges, 0);\n    });\n  }\n\n  cmds.sortLines = function(cm) { sortLines(cm, true); };\n  cmds.sortLinesInsensitive = function(cm) { sortLines(cm, false); };\n\n  cmds.nextBookmark = function(cm) {\n    var marks = cm.state.sublimeBookmarks;\n    if (marks) while (marks.length) {\n      var current = marks.shift();\n      var found = current.find();\n      if (found) {\n        marks.push(current);\n        return cm.setSelection(found.from, found.to);\n      }\n    }\n  };\n\n  cmds.prevBookmark = function(cm) {\n    var marks = cm.state.sublimeBookmarks;\n    if (marks) while (marks.length) {\n      marks.unshift(marks.pop());\n      var found = marks[marks.length - 1].find();\n      if (!found)\n        marks.pop();\n      else\n        return cm.setSelection(found.from, found.to);\n    }\n  };\n\n  cmds.toggleBookmark = function(cm) {\n    var ranges = cm.listSelections();\n    var marks = cm.state.sublimeBookmarks || (cm.state.sublimeBookmarks = []);\n    for (var i = 0; i < ranges.length; i++) {\n      var from = ranges[i].from(), to = ranges[i].to();\n      var found = ranges[i].empty() ? cm.findMarksAt(from) : cm.findMarks(from, to);\n      for (var j = 0; j < found.length; j++) {\n        if (found[j].sublimeBookmark) {\n          found[j].clear();\n          for (var k = 0; k < marks.length; k++)\n            if (marks[k] == found[j])\n              marks.splice(k--, 1);\n          break;\n        }\n      }\n      if (j == found.length)\n        marks.push(cm.markText(from, to, {sublimeBookmark: true, clearWhenEmpty: false}));\n    }\n  };\n\n  cmds.clearBookmarks = function(cm) {\n    var marks = cm.state.sublimeBookmarks;\n    if (marks) for (var i = 0; i < marks.length; i++) marks[i].clear();\n    marks.length = 0;\n  };\n\n  cmds.selectBookmarks = function(cm) {\n    var marks = cm.state.sublimeBookmarks, ranges = [];\n    if (marks) for (var i = 0; i < marks.length; i++) {\n      var found = marks[i].find();\n      if (!found)\n        marks.splice(i--, 0);\n      else\n        ranges.push({anchor: found.from, head: found.to});\n    }\n    if (ranges.length)\n      cm.setSelections(ranges, 0);\n  };\n\n  function modifyWordOrSelection(cm, mod) {\n    cm.operation(function() {\n      var ranges = cm.listSelections(), indices = [], replacements = [];\n      for (var i = 0; i < ranges.length; i++) {\n        var range = ranges[i];\n        if (range.empty()) { indices.push(i); replacements.push(\"\"); }\n        else replacements.push(mod(cm.getRange(range.from(), range.to())));\n      }\n      cm.replaceSelections(replacements, \"around\", \"case\");\n      for (var i = indices.length - 1, at; i >= 0; i--) {\n        var range = ranges[indices[i]];\n        if (at && CodeMirror.cmpPos(range.head, at) > 0) continue;\n        var word = wordAt(cm, range.head);\n        at = word.from;\n        cm.replaceRange(mod(word.word), word.from, word.to);\n      }\n    });\n  }\n\n  cmds.smartBackspace = function(cm) {\n    if (cm.somethingSelected()) return CodeMirror.Pass;\n\n    cm.operation(function() {\n      var cursors = cm.listSelections();\n      var indentUnit = cm.getOption(\"indentUnit\");\n\n      for (var i = cursors.length - 1; i >= 0; i--) {\n        var cursor = cursors[i].head;\n        var toStartOfLine = cm.getRange({line: cursor.line, ch: 0}, cursor);\n        var column = CodeMirror.countColumn(toStartOfLine, null, cm.getOption(\"tabSize\"));\n\n        // Delete by one character by default\n        var deletePos = cm.findPosH(cursor, -1, \"char\", false);\n\n        if (toStartOfLine && !/\\S/.test(toStartOfLine) && column % indentUnit == 0) {\n          var prevIndent = new Pos(cursor.line,\n            CodeMirror.findColumn(toStartOfLine, column - indentUnit, indentUnit));\n\n          // Smart delete only if we found a valid prevIndent location\n          if (prevIndent.ch != cursor.ch) deletePos = prevIndent;\n        }\n\n        cm.replaceRange(\"\", deletePos, cursor, \"+delete\");\n      }\n    });\n  };\n\n  cmds.delLineRight = function(cm) {\n    cm.operation(function() {\n      var ranges = cm.listSelections();\n      for (var i = ranges.length - 1; i >= 0; i--)\n        cm.replaceRange(\"\", ranges[i].anchor, Pos(ranges[i].to().line), \"+delete\");\n      cm.scrollIntoView();\n    });\n  };\n\n  cmds.upcaseAtCursor = function(cm) {\n    modifyWordOrSelection(cm, function(str) { return str.toUpperCase(); });\n  };\n  cmds.downcaseAtCursor = function(cm) {\n    modifyWordOrSelection(cm, function(str) { return str.toLowerCase(); });\n  };\n\n  cmds.setSublimeMark = function(cm) {\n    if (cm.state.sublimeMark) cm.state.sublimeMark.clear();\n    cm.state.sublimeMark = cm.setBookmark(cm.getCursor());\n  };\n  cmds.selectToSublimeMark = function(cm) {\n    var found = cm.state.sublimeMark && cm.state.sublimeMark.find();\n    if (found) cm.setSelection(cm.getCursor(), found);\n  };\n  cmds.deleteToSublimeMark = function(cm) {\n    var found = cm.state.sublimeMark && cm.state.sublimeMark.find();\n    if (found) {\n      var from = cm.getCursor(), to = found;\n      if (CodeMirror.cmpPos(from, to) > 0) { var tmp = to; to = from; from = tmp; }\n      cm.state.sublimeKilled = cm.getRange(from, to);\n      cm.replaceRange(\"\", from, to);\n    }\n  };\n  cmds.swapWithSublimeMark = function(cm) {\n    var found = cm.state.sublimeMark && cm.state.sublimeMark.find();\n    if (found) {\n      cm.state.sublimeMark.clear();\n      cm.state.sublimeMark = cm.setBookmark(cm.getCursor());\n      cm.setCursor(found);\n    }\n  };\n  cmds.sublimeYank = function(cm) {\n    if (cm.state.sublimeKilled != null)\n      cm.replaceSelection(cm.state.sublimeKilled, null, \"paste\");\n  };\n\n  cmds.showInCenter = function(cm) {\n    var pos = cm.cursorCoords(null, \"local\");\n    cm.scrollTo(null, (pos.top + pos.bottom) / 2 - cm.getScrollInfo().clientHeight / 2);\n  };\n\n  function getTarget(cm) {\n    var from = cm.getCursor(\"from\"), to = cm.getCursor(\"to\");\n    if (CodeMirror.cmpPos(from, to) == 0) {\n      var word = wordAt(cm, from);\n      if (!word.word) return;\n      from = word.from;\n      to = word.to;\n    }\n    return {from: from, to: to, query: cm.getRange(from, to), word: word};\n  }\n\n  function findAndGoTo(cm, forward) {\n    var target = getTarget(cm);\n    if (!target) return;\n    var query = target.query;\n    var cur = cm.getSearchCursor(query, forward ? target.to : target.from);\n\n    if (forward ? cur.findNext() : cur.findPrevious()) {\n      cm.setSelection(cur.from(), cur.to());\n    } else {\n      cur = cm.getSearchCursor(query, forward ? Pos(cm.firstLine(), 0)\n                                              : cm.clipPos(Pos(cm.lastLine())));\n      if (forward ? cur.findNext() : cur.findPrevious())\n        cm.setSelection(cur.from(), cur.to());\n      else if (target.word)\n        cm.setSelection(target.from, target.to);\n    }\n  };\n  cmds.findUnder = function(cm) { findAndGoTo(cm, true); };\n  cmds.findUnderPrevious = function(cm) { findAndGoTo(cm,false); };\n  cmds.findAllUnder = function(cm) {\n    var target = getTarget(cm);\n    if (!target) return;\n    var cur = cm.getSearchCursor(target.query);\n    var matches = [];\n    var primaryIndex = -1;\n    while (cur.findNext()) {\n      matches.push({anchor: cur.from(), head: cur.to()});\n      if (cur.from().line <= target.from.line && cur.from().ch <= target.from.ch)\n        primaryIndex++;\n    }\n    cm.setSelections(matches, primaryIndex);\n  };\n\n\n  var keyMap = CodeMirror.keyMap;\n  keyMap.macSublime = {\n    \"Cmd-Left\": \"goLineStartSmart\",\n    \"Shift-Tab\": \"indentLess\",\n    \"Shift-Ctrl-K\": \"deleteLine\",\n    \"Alt-Q\": \"wrapLines\",\n    \"Ctrl-Left\": \"goSubwordLeft\",\n    \"Ctrl-Right\": \"goSubwordRight\",\n    \"Ctrl-Alt-Up\": \"scrollLineUp\",\n    \"Ctrl-Alt-Down\": \"scrollLineDown\",\n    \"Cmd-L\": \"selectLine\",\n    \"Shift-Cmd-L\": \"splitSelectionByLine\",\n    \"Esc\": \"singleSelectionTop\",\n    \"Cmd-Enter\": \"insertLineAfter\",\n    \"Shift-Cmd-Enter\": \"insertLineBefore\",\n    \"Cmd-D\": \"selectNextOccurrence\",\n    \"Shift-Cmd-Space\": \"selectScope\",\n    \"Shift-Cmd-M\": \"selectBetweenBrackets\",\n    \"Cmd-M\": \"goToBracket\",\n    \"Cmd-Ctrl-Up\": \"swapLineUp\",\n    \"Cmd-Ctrl-Down\": \"swapLineDown\",\n    \"Cmd-/\": \"toggleCommentIndented\",\n    \"Cmd-J\": \"joinLines\",\n    \"Shift-Cmd-D\": \"duplicateLine\",\n    \"F5\": \"sortLines\",\n    \"Cmd-F5\": \"sortLinesInsensitive\",\n    \"F2\": \"nextBookmark\",\n    \"Shift-F2\": \"prevBookmark\",\n    \"Cmd-F2\": \"toggleBookmark\",\n    \"Shift-Cmd-F2\": \"clearBookmarks\",\n    \"Alt-F2\": \"selectBookmarks\",\n    \"Backspace\": \"smartBackspace\",\n    \"Cmd-K Cmd-K\": \"delLineRight\",\n    \"Cmd-K Cmd-U\": \"upcaseAtCursor\",\n    \"Cmd-K Cmd-L\": \"downcaseAtCursor\",\n    \"Cmd-K Cmd-Space\": \"setSublimeMark\",\n    \"Cmd-K Cmd-A\": \"selectToSublimeMark\",\n    \"Cmd-K Cmd-W\": \"deleteToSublimeMark\",\n    \"Cmd-K Cmd-X\": \"swapWithSublimeMark\",\n    \"Cmd-K Cmd-Y\": \"sublimeYank\",\n    \"Cmd-K Cmd-C\": \"showInCenter\",\n    \"Cmd-K Cmd-G\": \"clearBookmarks\",\n    \"Cmd-K Cmd-Backspace\": \"delLineLeft\",\n    \"Cmd-K Cmd-0\": \"unfoldAll\",\n    \"Cmd-K Cmd-J\": \"unfoldAll\",\n    \"Ctrl-Shift-Up\": \"addCursorToPrevLine\",\n    \"Ctrl-Shift-Down\": \"addCursorToNextLine\",\n    \"Cmd-F3\": \"findUnder\",\n    \"Shift-Cmd-F3\": \"findUnderPrevious\",\n    \"Alt-F3\": \"findAllUnder\",\n    \"Shift-Cmd-[\": \"fold\",\n    \"Shift-Cmd-]\": \"unfold\",\n    \"Cmd-I\": \"findIncremental\",\n    \"Shift-Cmd-I\": \"findIncrementalReverse\",\n    \"Cmd-H\": \"replace\",\n    \"F3\": \"findNext\",\n    \"Shift-F3\": \"findPrev\",\n    \"fallthrough\": \"macDefault\"\n  };\n  CodeMirror.normalizeKeyMap(keyMap.macSublime);\n\n  keyMap.pcSublime = {\n    \"Shift-Tab\": \"indentLess\",\n    \"Shift-Ctrl-K\": \"deleteLine\",\n    \"Alt-Q\": \"wrapLines\",\n    \"Ctrl-T\": \"transposeChars\",\n    \"Alt-Left\": \"goSubwordLeft\",\n    \"Alt-Right\": \"goSubwordRight\",\n    \"Ctrl-Up\": \"scrollLineUp\",\n    \"Ctrl-Down\": \"scrollLineDown\",\n    \"Ctrl-L\": \"selectLine\",\n    \"Shift-Ctrl-L\": \"splitSelectionByLine\",\n    \"Esc\": \"singleSelectionTop\",\n    \"Ctrl-Enter\": \"insertLineAfter\",\n    \"Shift-Ctrl-Enter\": \"insertLineBefore\",\n    \"Ctrl-D\": \"selectNextOccurrence\",\n    \"Shift-Ctrl-Space\": \"selectScope\",\n    \"Shift-Ctrl-M\": \"selectBetweenBrackets\",\n    \"Ctrl-M\": \"goToBracket\",\n    \"Shift-Ctrl-Up\": \"swapLineUp\",\n    \"Shift-Ctrl-Down\": \"swapLineDown\",\n    \"Ctrl-/\": \"toggleCommentIndented\",\n    \"Ctrl-J\": \"joinLines\",\n    \"Shift-Ctrl-D\": \"duplicateLine\",\n    \"F9\": \"sortLines\",\n    \"Ctrl-F9\": \"sortLinesInsensitive\",\n    \"F2\": \"nextBookmark\",\n    \"Shift-F2\": \"prevBookmark\",\n    \"Ctrl-F2\": \"toggleBookmark\",\n    \"Shift-Ctrl-F2\": \"clearBookmarks\",\n    \"Alt-F2\": \"selectBookmarks\",\n    \"Backspace\": \"smartBackspace\",\n    \"Ctrl-K Ctrl-K\": \"delLineRight\",\n    \"Ctrl-K Ctrl-U\": \"upcaseAtCursor\",\n    \"Ctrl-K Ctrl-L\": \"downcaseAtCursor\",\n    \"Ctrl-K Ctrl-Space\": \"setSublimeMark\",\n    \"Ctrl-K Ctrl-A\": \"selectToSublimeMark\",\n    \"Ctrl-K Ctrl-W\": \"deleteToSublimeMark\",\n    \"Ctrl-K Ctrl-X\": \"swapWithSublimeMark\",\n    \"Ctrl-K Ctrl-Y\": \"sublimeYank\",\n    \"Ctrl-K Ctrl-C\": \"showInCenter\",\n    \"Ctrl-K Ctrl-G\": \"clearBookmarks\",\n    \"Ctrl-K Ctrl-Backspace\": \"delLineLeft\",\n    \"Ctrl-K Ctrl-0\": \"unfoldAll\",\n    \"Ctrl-K Ctrl-J\": \"unfoldAll\",\n    \"Ctrl-Alt-Up\": \"addCursorToPrevLine\",\n    \"Ctrl-Alt-Down\": \"addCursorToNextLine\",\n    \"Ctrl-F3\": \"findUnder\",\n    \"Shift-Ctrl-F3\": \"findUnderPrevious\",\n    \"Alt-F3\": \"findAllUnder\",\n    \"Shift-Ctrl-[\": \"fold\",\n    \"Shift-Ctrl-]\": \"unfold\",\n    \"Ctrl-I\": \"findIncremental\",\n    \"Shift-Ctrl-I\": \"findIncrementalReverse\",\n    \"Ctrl-H\": \"replace\",\n    \"F3\": \"findNext\",\n    \"Shift-F3\": \"findPrev\",\n    \"fallthrough\": \"pcDefault\"\n  };\n  CodeMirror.normalizeKeyMap(keyMap.pcSublime);\n\n  var mac = keyMap.default == keyMap.macDefault;\n  keyMap.sublime = mac ? keyMap.macSublime : keyMap.pcSublime;\n}\n//-- );\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ext/keymap/vim.js":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ext/keymap/vim.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n/**\n * Supported keybindings:\n *   Too many to list. Refer to defaultKeymap below.\n *\n * Supported Ex commands:\n *   Refer to defaultExCommandMap below.\n *\n * Registers: unnamed, -, a-z, A-Z, 0-9\n *   (Does not respect the special case for number registers when delete\n *    operator is made with these commands: %, (, ),  , /, ?, n, N, {, } )\n *   TODO: Implement the remaining registers.\n *\n * Marks: a-z, A-Z, and 0-9\n *   TODO: Implement the remaining special marks. They have more complex\n *       behavior.\n *\n * Events:\n *  'vim-mode-change' - raised on the editor anytime the current mode changes,\n *                      Event object: {mode: \"visual\", subMode: \"linewise\"}\n *\n * Code structure:\n *  1. Default keymap\n *  2. Variable declarations and short basic helpers\n *  3. Instance (External API) implementation\n *  4. Internal state tracking objects (input state, counter) implementation\n *     and instantiation\n *  5. Key handler (the main command dispatcher) implementation\n *  6. Motion, operator, and action implementations\n *  7. Helper functions for the key handler, motions, operators, and actions\n *  8. Set up Vim to work as a keymap for CodeMirror.\n *  9. Ex command implementations.\n */\n\n//-- (function(mod) {\n//--   if (typeof exports == \"object\" && typeof module == \"object\") // CommonJS\n//--     mod(require(\"../lib/codemirror\"), require(\"../addon/search/searchcursor\"), require(\"../addon/dialog/dialog\"), require(\"../addon/edit/matchbrackets.js\"));\n//--   else if (typeof define == \"function\" && define.amd) // AMD\n//--     define([\"../lib/codemirror\", \"../addon/search/searchcursor\", \"../addon/dialog/dialog\", \"../addon/edit/matchbrackets\"], mod);\n//--   else // Plain browser env\n//--     mod(CodeMirror);\n//-- })(\n\nfunction inject_map(CodeMirror) {\n  'use strict';\n\n  var defaultKeymap = [\n    // Key to key mapping. This goes first to make it possible to override\n    // existing mappings.\n    { keys: '<Left>', type: 'keyToKey', toKeys: 'h' },\n    { keys: '<Right>', type: 'keyToKey', toKeys: 'l' },\n    { keys: '<Up>', type: 'keyToKey', toKeys: 'k' },\n    { keys: '<Down>', type: 'keyToKey', toKeys: 'j' },\n    { keys: '<Space>', type: 'keyToKey', toKeys: 'l' },\n    { keys: '<BS>', type: 'keyToKey', toKeys: 'h', context: 'normal'},\n    { keys: '<Del>', type: 'keyToKey', toKeys: 'x', context: 'normal'},\n    { keys: '<C-Space>', type: 'keyToKey', toKeys: 'W' },\n    { keys: '<C-BS>', type: 'keyToKey', toKeys: 'B', context: 'normal' },\n    { keys: '<S-Space>', type: 'keyToKey', toKeys: 'w' },\n    { keys: '<S-BS>', type: 'keyToKey', toKeys: 'b', context: 'normal' },\n    { keys: '<C-n>', type: 'keyToKey', toKeys: 'j' },\n    { keys: '<C-p>', type: 'keyToKey', toKeys: 'k' },\n    { keys: '<C-[>', type: 'keyToKey', toKeys: '<Esc>' },\n    { keys: '<C-c>', type: 'keyToKey', toKeys: '<Esc>' },\n    { keys: '<C-[>', type: 'keyToKey', toKeys: '<Esc>', context: 'insert' },\n    { keys: '<C-c>', type: 'keyToKey', toKeys: '<Esc>', context: 'insert' },\n    { keys: 's', type: 'keyToKey', toKeys: 'cl', context: 'normal' },\n    { keys: 's', type: 'keyToKey', toKeys: 'c', context: 'visual'},\n    { keys: 'S', type: 'keyToKey', toKeys: 'cc', context: 'normal' },\n    { keys: 'S', type: 'keyToKey', toKeys: 'VdO', context: 'visual' },\n    { keys: '<Home>', type: 'keyToKey', toKeys: '0' },\n    { keys: '<End>', type: 'keyToKey', toKeys: '$' },\n    { keys: '<PageUp>', type: 'keyToKey', toKeys: '<C-b>' },\n    { keys: '<PageDown>', type: 'keyToKey', toKeys: '<C-f>' },\n    { keys: '<CR>', type: 'keyToKey', toKeys: 'j^', context: 'normal' },\n    { keys: '<Ins>', type: 'action', action: 'toggleOverwrite', context: 'insert' },\n    // Motions\n    { keys: 'H', type: 'motion', motion: 'moveToTopLine', motionArgs: { linewise: true, toJumplist: true }},\n    { keys: 'M', type: 'motion', motion: 'moveToMiddleLine', motionArgs: { linewise: true, toJumplist: true }},\n    { keys: 'L', type: 'motion', motion: 'moveToBottomLine', motionArgs: { linewise: true, toJumplist: true }},\n    { keys: 'h', type: 'motion', motion: 'moveByCharacters', motionArgs: { forward: false }},\n    { keys: 'l', type: 'motion', motion: 'moveByCharacters', motionArgs: { forward: true }},\n    { keys: 'j', type: 'motion', motion: 'moveByLines', motionArgs: { forward: true, linewise: true }},\n    { keys: 'k', type: 'motion', motion: 'moveByLines', motionArgs: { forward: false, linewise: true }},\n    { keys: 'gj', type: 'motion', motion: 'moveByDisplayLines', motionArgs: { forward: true }},\n    { keys: 'gk', type: 'motion', motion: 'moveByDisplayLines', motionArgs: { forward: false }},\n    { keys: 'w', type: 'motion', motion: 'moveByWords', motionArgs: { forward: true, wordEnd: false }},\n    { keys: 'W', type: 'motion', motion: 'moveByWords', motionArgs: { forward: true, wordEnd: false, bigWord: true }},\n    { keys: 'e', type: 'motion', motion: 'moveByWords', motionArgs: { forward: true, wordEnd: true, inclusive: true }},\n    { keys: 'E', type: 'motion', motion: 'moveByWords', motionArgs: { forward: true, wordEnd: true, bigWord: true, inclusive: true }},\n    { keys: 'b', type: 'motion', motion: 'moveByWords', motionArgs: { forward: false, wordEnd: false }},\n    { keys: 'B', type: 'motion', motion: 'moveByWords', motionArgs: { forward: false, wordEnd: false, bigWord: true }},\n    { keys: 'ge', type: 'motion', motion: 'moveByWords', motionArgs: { forward: false, wordEnd: true, inclusive: true }},\n    { keys: 'gE', type: 'motion', motion: 'moveByWords', motionArgs: { forward: false, wordEnd: true, bigWord: true, inclusive: true }},\n    { keys: '{', type: 'motion', motion: 'moveByParagraph', motionArgs: { forward: false, toJumplist: true }},\n    { keys: '}', type: 'motion', motion: 'moveByParagraph', motionArgs: { forward: true, toJumplist: true }},\n    { keys: '(', type: 'motion', motion: 'moveBySentence', motionArgs: { forward: false }},\n    { keys: ')', type: 'motion', motion: 'moveBySentence', motionArgs: { forward: true }},\n    { keys: '<C-f>', type: 'motion', motion: 'moveByPage', motionArgs: { forward: true }},\n    { keys: '<C-b>', type: 'motion', motion: 'moveByPage', motionArgs: { forward: false }},\n    { keys: '<C-d>', type: 'motion', motion: 'moveByScroll', motionArgs: { forward: true, explicitRepeat: true }},\n    { keys: '<C-u>', type: 'motion', motion: 'moveByScroll', motionArgs: { forward: false, explicitRepeat: true }},\n    { keys: 'gg', type: 'motion', motion: 'moveToLineOrEdgeOfDocument', motionArgs: { forward: false, explicitRepeat: true, linewise: true, toJumplist: true }},\n    { keys: 'G', type: 'motion', motion: 'moveToLineOrEdgeOfDocument', motionArgs: { forward: true, explicitRepeat: true, linewise: true, toJumplist: true }},\n    { keys: '0', type: 'motion', motion: 'moveToStartOfLine' },\n    { keys: '^', type: 'motion', motion: 'moveToFirstNonWhiteSpaceCharacter' },\n    { keys: '+', type: 'motion', motion: 'moveByLines', motionArgs: { forward: true, toFirstChar:true }},\n    { keys: '-', type: 'motion', motion: 'moveByLines', motionArgs: { forward: false, toFirstChar:true }},\n    { keys: '_', type: 'motion', motion: 'moveByLines', motionArgs: { forward: true, toFirstChar:true, repeatOffset:-1 }},\n    { keys: '$', type: 'motion', motion: 'moveToEol', motionArgs: { inclusive: true }},\n    { keys: '%', type: 'motion', motion: 'moveToMatchedSymbol', motionArgs: { inclusive: true, toJumplist: true }},\n    { keys: 'f<character>', type: 'motion', motion: 'moveToCharacter', motionArgs: { forward: true , inclusive: true }},\n    { keys: 'F<character>', type: 'motion', motion: 'moveToCharacter', motionArgs: { forward: false }},\n    { keys: 't<character>', type: 'motion', motion: 'moveTillCharacter', motionArgs: { forward: true, inclusive: true }},\n    { keys: 'T<character>', type: 'motion', motion: 'moveTillCharacter', motionArgs: { forward: false }},\n    { keys: ';', type: 'motion', motion: 'repeatLastCharacterSearch', motionArgs: { forward: true }},\n    { keys: ',', type: 'motion', motion: 'repeatLastCharacterSearch', motionArgs: { forward: false }},\n    { keys: '\\'<character>', type: 'motion', motion: 'goToMark', motionArgs: {toJumplist: true, linewise: true}},\n    { keys: '`<character>', type: 'motion', motion: 'goToMark', motionArgs: {toJumplist: true}},\n    { keys: ']`', type: 'motion', motion: 'jumpToMark', motionArgs: { forward: true } },\n    { keys: '[`', type: 'motion', motion: 'jumpToMark', motionArgs: { forward: false } },\n    { keys: ']\\'', type: 'motion', motion: 'jumpToMark', motionArgs: { forward: true, linewise: true } },\n    { keys: '[\\'', type: 'motion', motion: 'jumpToMark', motionArgs: { forward: false, linewise: true } },\n    // the next two aren't motions but must come before more general motion declarations\n    { keys: ']p', type: 'action', action: 'paste', isEdit: true, actionArgs: { after: true, isEdit: true, matchIndent: true}},\n    { keys: '[p', type: 'action', action: 'paste', isEdit: true, actionArgs: { after: false, isEdit: true, matchIndent: true}},\n    { keys: ']<character>', type: 'motion', motion: 'moveToSymbol', motionArgs: { forward: true, toJumplist: true}},\n    { keys: '[<character>', type: 'motion', motion: 'moveToSymbol', motionArgs: { forward: false, toJumplist: true}},\n    { keys: '|', type: 'motion', motion: 'moveToColumn'},\n    { keys: 'o', type: 'motion', motion: 'moveToOtherHighlightedEnd', context:'visual'},\n    { keys: 'O', type: 'motion', motion: 'moveToOtherHighlightedEnd', motionArgs: {sameLine: true}, context:'visual'},\n    // Operators\n    { keys: 'd', type: 'operator', operator: 'delete' },\n    { keys: 'y', type: 'operator', operator: 'yank' },\n    { keys: 'c', type: 'operator', operator: 'change' },\n    { keys: '=', type: 'operator', operator: 'indentAuto' },\n    { keys: '>', type: 'operator', operator: 'indent', operatorArgs: { indentRight: true }},\n    { keys: '<', type: 'operator', operator: 'indent', operatorArgs: { indentRight: false }},\n    { keys: 'g~', type: 'operator', operator: 'changeCase' },\n    { keys: 'gu', type: 'operator', operator: 'changeCase', operatorArgs: {toLower: true}, isEdit: true },\n    { keys: 'gU', type: 'operator', operator: 'changeCase', operatorArgs: {toLower: false}, isEdit: true },\n    { keys: 'n', type: 'motion', motion: 'findNext', motionArgs: { forward: true, toJumplist: true }},\n    { keys: 'N', type: 'motion', motion: 'findNext', motionArgs: { forward: false, toJumplist: true }},\n    // Operator-Motion dual commands\n    { keys: 'x', type: 'operatorMotion', operator: 'delete', motion: 'moveByCharacters', motionArgs: { forward: true }, operatorMotionArgs: { visualLine: false }},\n    { keys: 'X', type: 'operatorMotion', operator: 'delete', motion: 'moveByCharacters', motionArgs: { forward: false }, operatorMotionArgs: { visualLine: true }},\n    { keys: 'D', type: 'operatorMotion', operator: 'delete', motion: 'moveToEol', motionArgs: { inclusive: true }, context: 'normal'},\n    { keys: 'D', type: 'operator', operator: 'delete', operatorArgs: { linewise: true }, context: 'visual'},\n    { keys: 'Y', type: 'operatorMotion', operator: 'yank', motion: 'expandToLine', motionArgs: { linewise: true }, context: 'normal'},\n    { keys: 'Y', type: 'operator', operator: 'yank', operatorArgs: { linewise: true }, context: 'visual'},\n    { keys: 'C', type: 'operatorMotion', operator: 'change', motion: 'moveToEol', motionArgs: { inclusive: true }, context: 'normal'},\n    { keys: 'C', type: 'operator', operator: 'change', operatorArgs: { linewise: true }, context: 'visual'},\n    { keys: '~', type: 'operatorMotion', operator: 'changeCase', motion: 'moveByCharacters', motionArgs: { forward: true }, operatorArgs: { shouldMoveCursor: true }, context: 'normal'},\n    { keys: '~', type: 'operator', operator: 'changeCase', context: 'visual'},\n    { keys: '<C-w>', type: 'operatorMotion', operator: 'delete', motion: 'moveByWords', motionArgs: { forward: false, wordEnd: false }, context: 'insert' },\n    //ignore C-w in normal mode\n    { keys: '<C-w>', type: 'idle', context: 'normal' },\n    // Actions\n    { keys: '<C-i>', type: 'action', action: 'jumpListWalk', actionArgs: { forward: true }},\n    { keys: '<C-o>', type: 'action', action: 'jumpListWalk', actionArgs: { forward: false }},\n    { keys: '<C-e>', type: 'action', action: 'scroll', actionArgs: { forward: true, linewise: true }},\n    { keys: '<C-y>', type: 'action', action: 'scroll', actionArgs: { forward: false, linewise: true }},\n    { keys: 'a', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { insertAt: 'charAfter' }, context: 'normal' },\n    { keys: 'A', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { insertAt: 'eol' }, context: 'normal' },\n    { keys: 'A', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { insertAt: 'endOfSelectedArea' }, context: 'visual' },\n    { keys: 'i', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { insertAt: 'inplace' }, context: 'normal' },\n    { keys: 'I', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { insertAt: 'firstNonBlank'}, context: 'normal' },\n    { keys: 'I', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { insertAt: 'startOfSelectedArea' }, context: 'visual' },\n    { keys: 'o', type: 'action', action: 'newLineAndEnterInsertMode', isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: true }, context: 'normal' },\n    { keys: 'O', type: 'action', action: 'newLineAndEnterInsertMode', isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: false }, context: 'normal' },\n    { keys: 'v', type: 'action', action: 'toggleVisualMode' },\n    { keys: 'V', type: 'action', action: 'toggleVisualMode', actionArgs: { linewise: true }},\n    { keys: '<C-v>', type: 'action', action: 'toggleVisualMode', actionArgs: { blockwise: true }},\n    { keys: '<C-q>', type: 'action', action: 'toggleVisualMode', actionArgs: { blockwise: true }},\n    { keys: 'gv', type: 'action', action: 'reselectLastSelection' },\n    { keys: 'J', type: 'action', action: 'joinLines', isEdit: true },\n    { keys: 'p', type: 'action', action: 'paste', isEdit: true, actionArgs: { after: true, isEdit: true }},\n    { keys: 'P', type: 'action', action: 'paste', isEdit: true, actionArgs: { after: false, isEdit: true }},\n    { keys: 'r<character>', type: 'action', action: 'replace', isEdit: true },\n    { keys: '@<character>', type: 'action', action: 'replayMacro' },\n    { keys: 'q<character>', type: 'action', action: 'enterMacroRecordMode' },\n    // Handle Replace-mode as a special case of insert mode.\n    { keys: 'R', type: 'action', action: 'enterInsertMode', isEdit: true, actionArgs: { replace: true }},\n    { keys: 'u', type: 'action', action: 'undo', context: 'normal' },\n    { keys: 'u', type: 'operator', operator: 'changeCase', operatorArgs: {toLower: true}, context: 'visual', isEdit: true },\n    { keys: 'U', type: 'operator', operator: 'changeCase', operatorArgs: {toLower: false}, context: 'visual', isEdit: true },\n    { keys: '<C-r>', type: 'action', action: 'redo' },\n    { keys: 'm<character>', type: 'action', action: 'setMark' },\n    { keys: '\"<character>', type: 'action', action: 'setRegister' },\n    { keys: 'zz', type: 'action', action: 'scrollToCursor', actionArgs: { position: 'center' }},\n    { keys: 'z.', type: 'action', action: 'scrollToCursor', actionArgs: { position: 'center' }, motion: 'moveToFirstNonWhiteSpaceCharacter' },\n    { keys: 'zt', type: 'action', action: 'scrollToCursor', actionArgs: { position: 'top' }},\n    { keys: 'z<CR>', type: 'action', action: 'scrollToCursor', actionArgs: { position: 'top' }, motion: 'moveToFirstNonWhiteSpaceCharacter' },\n    { keys: 'z-', type: 'action', action: 'scrollToCursor', actionArgs: { position: 'bottom' }},\n    { keys: 'zb', type: 'action', action: 'scrollToCursor', actionArgs: { position: 'bottom' }, motion: 'moveToFirstNonWhiteSpaceCharacter' },\n    { keys: '.', type: 'action', action: 'repeatLastEdit' },\n    { keys: '<C-a>', type: 'action', action: 'incrementNumberToken', isEdit: true, actionArgs: {increase: true, backtrack: false}},\n    { keys: '<C-x>', type: 'action', action: 'incrementNumberToken', isEdit: true, actionArgs: {increase: false, backtrack: false}},\n    { keys: '<C-t>', type: 'action', action: 'indent', actionArgs: { indentRight: true }, context: 'insert' },\n    { keys: '<C-d>', type: 'action', action: 'indent', actionArgs: { indentRight: false }, context: 'insert' },\n    // Text object motions\n    { keys: 'a<character>', type: 'motion', motion: 'textObjectManipulation' },\n    { keys: 'i<character>', type: 'motion', motion: 'textObjectManipulation', motionArgs: { textObjectInner: true }},\n    // Search\n    { keys: '/', type: 'search', searchArgs: { forward: true, querySrc: 'prompt', toJumplist: true }},\n    { keys: '?', type: 'search', searchArgs: { forward: false, querySrc: 'prompt', toJumplist: true }},\n    { keys: '*', type: 'search', searchArgs: { forward: true, querySrc: 'wordUnderCursor', wholeWordOnly: true, toJumplist: true }},\n    { keys: '#', type: 'search', searchArgs: { forward: false, querySrc: 'wordUnderCursor', wholeWordOnly: true, toJumplist: true }},\n    { keys: 'g*', type: 'search', searchArgs: { forward: true, querySrc: 'wordUnderCursor', toJumplist: true }},\n    { keys: 'g#', type: 'search', searchArgs: { forward: false, querySrc: 'wordUnderCursor', toJumplist: true }},\n    // Ex command\n    { keys: ':', type: 'ex' }\n  ];\n\n\n    //console.log(\"CodeMirror.vim_disable_keys: \", CodeMirror.vim_disable_keys)\n    if(CodeMirror.vim_disable_keys){\n        //console.log(\"Reducing key bindings from: \" + defaultKeymap.length)\n        defaultKeymap = defaultKeymap.filter(km => CodeMirror.vim_disable_keys.indexOf(km.keys) === -1)\n        //console.log(\"Reducing key bindings to: \" + defaultKeymap.length)\n    }\n\n  var defaultKeymapLength = defaultKeymap.length;\n\n  /**\n   * Ex commands\n   * Care must be taken when adding to the default Ex command map. For any\n   * pair of commands that have a shared prefix, at least one of their\n   * shortNames must not match the prefix of the other command.\n   */\n  var defaultExCommandMap = [\n    { name: 'colorscheme', shortName: 'colo' },\n    { name: 'map' },\n    { name: 'imap', shortName: 'im' },\n    { name: 'nmap', shortName: 'nm' },\n    { name: 'vmap', shortName: 'vm' },\n    { name: 'unmap' },\n    { name: 'write', shortName: 'w' },\n    { name: 'undo', shortName: 'u' },\n    { name: 'redo', shortName: 'red' },\n    { name: 'set', shortName: 'se' },\n    { name: 'set', shortName: 'se' },\n    { name: 'setlocal', shortName: 'setl' },\n    { name: 'setglobal', shortName: 'setg' },\n    { name: 'sort', shortName: 'sor' },\n    { name: 'substitute', shortName: 's', possiblyAsync: true },\n    { name: 'nohlsearch', shortName: 'noh' },\n    { name: 'yank', shortName: 'y' },\n    { name: 'delmarks', shortName: 'delm' },\n    { name: 'registers', shortName: 'reg', excludeFromCommandHistory: true },\n    { name: 'global', shortName: 'g' }\n  ];\n\n  var Pos = CodeMirror.Pos;\n\n  var Vim = function() {\n    function enterVimMode(cm) {\n      cm.setOption('disableInput', true);\n      cm.setOption('showCursorWhenSelecting', false);\n      CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"normal\"});\n      cm.on('cursorActivity', onCursorActivity);\n      maybeInitVimState(cm);\n      CodeMirror.on(cm.getInputField(), 'paste', getOnPasteFn(cm));\n    }\n\n    function leaveVimMode(cm) {\n      cm.setOption('disableInput', false);\n      cm.off('cursorActivity', onCursorActivity);\n      CodeMirror.off(cm.getInputField(), 'paste', getOnPasteFn(cm));\n      cm.state.vim = null;\n    }\n\n    function detachVimMap(cm, next) {\n      if (this == CodeMirror.keyMap.vim) {\n        CodeMirror.rmClass(cm.getWrapperElement(), \"cm-fat-cursor\");\n        if (cm.getOption(\"inputStyle\") == \"contenteditable\" && document.body.style.caretColor != null) {\n          disableFatCursorMark(cm);\n          cm.getInputField().style.caretColor = \"\";\n        }\n      }\n\n      if (!next || next.attach != attachVimMap)\n        leaveVimMode(cm);\n    }\n    function attachVimMap(cm, prev) {\n      if (this == CodeMirror.keyMap.vim) {\n        CodeMirror.addClass(cm.getWrapperElement(), \"cm-fat-cursor\");\n        if (cm.getOption(\"inputStyle\") == \"contenteditable\" && document.body.style.caretColor != null) {\n          enableFatCursorMark(cm);\n          cm.getInputField().style.caretColor = \"transparent\";\n        }\n      }\n\n      if (!prev || prev.attach != attachVimMap)\n        enterVimMode(cm);\n    }\n\n    function fatCursorMarks(cm) {\n      var ranges = cm.listSelections(), result = []\n      for (var i = 0; i < ranges.length; i++) {\n        var range = ranges[i]\n        if (range.empty()) {\n          if (range.anchor.ch < cm.getLine(range.anchor.line).length) {\n            result.push(cm.markText(range.anchor, Pos(range.anchor.line, range.anchor.ch + 1),\n                                    {className: \"cm-fat-cursor-mark\"}))\n          } else {\n            var widget = document.createElement(\"span\")\n            widget.textContent = \"\\u00a0\"\n            widget.className = \"cm-fat-cursor-mark\"\n            result.push(cm.setBookmark(range.anchor, {widget: widget}))\n          }\n        }\n      }\n      return result\n    }\n\n    function updateFatCursorMark(cm) {\n      var marks = cm.state.fatCursorMarks\n      if (marks) for (var i = 0; i < marks.length; i++) marks[i].clear()\n      cm.state.fatCursorMarks = fatCursorMarks(cm)\n    }\n\n    function enableFatCursorMark(cm) {\n      cm.state.fatCursorMarks = fatCursorMarks(cm)\n      cm.on(\"cursorActivity\", updateFatCursorMark)\n    }\n\n    function disableFatCursorMark(cm) {\n      var marks = cm.state.fatCursorMarks\n      if (marks) for (var i = 0; i < marks.length; i++) marks[i].clear()\n      cm.state.fatCursorMarks = null\n      cm.off(\"cursorActivity\", updateFatCursorMark)\n    }\n\n    // Deprecated, simply setting the keymap works again.\n    CodeMirror.defineOption('vimMode', false, function(cm, val, prev) {\n      if (val && cm.getOption(\"keyMap\") != \"vim\")\n        cm.setOption(\"keyMap\", \"vim\");\n      else if (!val && prev != CodeMirror.Init && /^vim/.test(cm.getOption(\"keyMap\")))\n        cm.setOption(\"keyMap\", \"default\");\n    });\n\n    function cmKey(key, cm) {\n      if (!cm) { return undefined; }\n      if (this[key]) { return this[key]; }\n      var vimKey = cmKeyToVimKey(key);\n      if (!vimKey) {\n        return false;\n      }\n      var cmd = CodeMirror.Vim.findKey(cm, vimKey);\n      if (typeof cmd == 'function') {\n        CodeMirror.signal(cm, 'vim-keypress', vimKey);\n      }\n      return cmd;\n    }\n\n    var modifiers = {'Shift': 'S', 'Ctrl': 'C', 'Alt': 'A', 'Cmd': 'D', 'Mod': 'A'};\n    var specialKeys = {Enter:'CR',Backspace:'BS',Delete:'Del',Insert:'Ins'};\n    function cmKeyToVimKey(key) {\n      if (key.charAt(0) == '\\'') {\n        // Keypress character binding of format \"'a'\"\n        return key.charAt(1);\n      }\n      var pieces = key.split(/-(?!$)/);\n      var lastPiece = pieces[pieces.length - 1];\n      if (pieces.length == 1 && pieces[0].length == 1) {\n        // No-modifier bindings use literal character bindings above. Skip.\n        return false;\n      } else if (pieces.length == 2 && pieces[0] == 'Shift' && lastPiece.length == 1) {\n        // Ignore Shift+char bindings as they should be handled by literal character.\n        return false;\n      }\n      var hasCharacter = false;\n      for (var i = 0; i < pieces.length; i++) {\n        var piece = pieces[i];\n        if (piece in modifiers) { pieces[i] = modifiers[piece]; }\n        else { hasCharacter = true; }\n        if (piece in specialKeys) { pieces[i] = specialKeys[piece]; }\n      }\n      if (!hasCharacter) {\n        // Vim does not support modifier only keys.\n        return false;\n      }\n      // TODO: Current bindings expect the character to be lower case, but\n      // it looks like vim key notation uses upper case.\n      if (isUpperCase(lastPiece)) {\n        pieces[pieces.length - 1] = lastPiece.toLowerCase();\n      }\n      return '<' + pieces.join('-') + '>';\n    }\n\n    function getOnPasteFn(cm) {\n      var vim = cm.state.vim;\n      if (!vim.onPasteFn) {\n        vim.onPasteFn = function() {\n          if (!vim.insertMode) {\n            cm.setCursor(offsetCursor(cm.getCursor(), 0, 1));\n            actions.enterInsertMode(cm, {}, vim);\n          }\n        };\n      }\n      return vim.onPasteFn;\n    }\n\n    var numberRegex = /[\\d]/;\n    var wordCharTest = [CodeMirror.isWordChar, function(ch) {\n      return ch && !CodeMirror.isWordChar(ch) && !/\\s/.test(ch);\n    }], bigWordCharTest = [function(ch) {\n      return /\\S/.test(ch);\n    }];\n    function makeKeyRange(start, size) {\n      var keys = [];\n      for (var i = start; i < start + size; i++) {\n        keys.push(String.fromCharCode(i));\n      }\n      return keys;\n    }\n    var upperCaseAlphabet = makeKeyRange(65, 26);\n    var lowerCaseAlphabet = makeKeyRange(97, 26);\n    var numbers = makeKeyRange(48, 10);\n    var validMarks = [].concat(upperCaseAlphabet, lowerCaseAlphabet, numbers, ['<', '>']);\n    var validRegisters = [].concat(upperCaseAlphabet, lowerCaseAlphabet, numbers, ['-', '\"', '.', ':', '/']);\n\n    function isLine(cm, line) {\n      return line >= cm.firstLine() && line <= cm.lastLine();\n    }\n    function isLowerCase(k) {\n      return (/^[a-z]$/).test(k);\n    }\n    function isMatchableSymbol(k) {\n      return '()[]{}'.indexOf(k) != -1;\n    }\n    function isNumber(k) {\n      return numberRegex.test(k);\n    }\n    function isUpperCase(k) {\n      return (/^[A-Z]$/).test(k);\n    }\n    function isWhiteSpaceString(k) {\n      return (/^\\s*$/).test(k);\n    }\n    function isEndOfSentenceSymbol(k) {\n      return '.?!'.indexOf(k) != -1;\n    }\n    function inArray(val, arr) {\n      for (var i = 0; i < arr.length; i++) {\n        if (arr[i] == val) {\n          return true;\n        }\n      }\n      return false;\n    }\n\n    var options = {};\n    function defineOption(name, defaultValue, type, aliases, callback) {\n      if (defaultValue === undefined && !callback) {\n        throw Error('defaultValue is required unless callback is provided');\n      }\n      if (!type) { type = 'string'; }\n      options[name] = {\n        type: type,\n        defaultValue: defaultValue,\n        callback: callback\n      };\n      if (aliases) {\n        for (var i = 0; i < aliases.length; i++) {\n          options[aliases[i]] = options[name];\n        }\n      }\n      if (defaultValue) {\n        setOption(name, defaultValue);\n      }\n    }\n\n    function setOption(name, value, cm, cfg) {\n      var option = options[name];\n      cfg = cfg || {};\n      var scope = cfg.scope;\n      if (!option) {\n        return new Error('Unknown option: ' + name);\n      }\n      if (option.type == 'boolean') {\n        if (value && value !== true) {\n          return new Error('Invalid argument: ' + name + '=' + value);\n        } else if (value !== false) {\n          // Boolean options are set to true if value is not defined.\n          value = true;\n        }\n      }\n      if (option.callback) {\n        if (scope !== 'local') {\n          option.callback(value, undefined);\n        }\n        if (scope !== 'global' && cm) {\n          option.callback(value, cm);\n        }\n      } else {\n        if (scope !== 'local') {\n          option.value = option.type == 'boolean' ? !!value : value;\n        }\n        if (scope !== 'global' && cm) {\n          cm.state.vim.options[name] = {value: value};\n        }\n      }\n    }\n\n    function getOption(name, cm, cfg) {\n      var option = options[name];\n      cfg = cfg || {};\n      var scope = cfg.scope;\n      if (!option) {\n        return new Error('Unknown option: ' + name);\n      }\n      if (option.callback) {\n        var local = cm && option.callback(undefined, cm);\n        if (scope !== 'global' && local !== undefined) {\n          return local;\n        }\n        if (scope !== 'local') {\n          return option.callback();\n        }\n        return;\n      } else {\n        var local = (scope !== 'global') && (cm && cm.state.vim.options[name]);\n        return (local || (scope !== 'local') && option || {}).value;\n      }\n    }\n\n    defineOption('filetype', undefined, 'string', ['ft'], function(name, cm) {\n      // Option is local. Do nothing for global.\n      if (cm === undefined) {\n        return;\n      }\n      // The 'filetype' option proxies to the CodeMirror 'mode' option.\n      if (name === undefined) {\n        var mode = cm.getOption('mode');\n        return mode == 'null' ? '' : mode;\n      } else {\n        var mode = name == '' ? 'null' : name;\n        cm.setOption('mode', mode);\n      }\n    });\n\n    var createCircularJumpList = function() {\n      var size = 100;\n      var pointer = -1;\n      var head = 0;\n      var tail = 0;\n      var buffer = new Array(size);\n      function add(cm, oldCur, newCur) {\n        var current = pointer % size;\n        var curMark = buffer[current];\n        function useNextSlot(cursor) {\n          var next = ++pointer % size;\n          var trashMark = buffer[next];\n          if (trashMark) {\n            trashMark.clear();\n          }\n          buffer[next] = cm.setBookmark(cursor);\n        }\n        if (curMark) {\n          var markPos = curMark.find();\n          // avoid recording redundant cursor position\n          if (markPos && !cursorEqual(markPos, oldCur)) {\n            useNextSlot(oldCur);\n          }\n        } else {\n          useNextSlot(oldCur);\n        }\n        useNextSlot(newCur);\n        head = pointer;\n        tail = pointer - size + 1;\n        if (tail < 0) {\n          tail = 0;\n        }\n      }\n      function move(cm, offset) {\n        pointer += offset;\n        if (pointer > head) {\n          pointer = head;\n        } else if (pointer < tail) {\n          pointer = tail;\n        }\n        var mark = buffer[(size + pointer) % size];\n        // skip marks that are temporarily removed from text buffer\n        if (mark && !mark.find()) {\n          var inc = offset > 0 ? 1 : -1;\n          var newCur;\n          var oldCur = cm.getCursor();\n          do {\n            pointer += inc;\n            mark = buffer[(size + pointer) % size];\n            // skip marks that are the same as current position\n            if (mark &&\n                (newCur = mark.find()) &&\n                !cursorEqual(oldCur, newCur)) {\n              break;\n            }\n          } while (pointer < head && pointer > tail);\n        }\n        return mark;\n      }\n      return {\n        cachedCursor: undefined, //used for # and * jumps\n        add: add,\n        move: move\n      };\n    };\n\n    // Returns an object to track the changes associated insert mode.  It\n    // clones the object that is passed in, or creates an empty object one if\n    // none is provided.\n    var createInsertModeChanges = function(c) {\n      if (c) {\n        // Copy construction\n        return {\n          changes: c.changes,\n          expectCursorActivityForChange: c.expectCursorActivityForChange\n        };\n      }\n      return {\n        // Change list\n        changes: [],\n        // Set to true on change, false on cursorActivity.\n        expectCursorActivityForChange: false\n      };\n    };\n\n    function MacroModeState() {\n      this.latestRegister = undefined;\n      this.isPlaying = false;\n      this.isRecording = false;\n      this.replaySearchQueries = [];\n      this.onRecordingDone = undefined;\n      this.lastInsertModeChanges = createInsertModeChanges();\n    }\n    MacroModeState.prototype = {\n      exitMacroRecordMode: function() {\n        var macroModeState = vimGlobalState.macroModeState;\n        if (macroModeState.onRecordingDone) {\n          macroModeState.onRecordingDone(); // close dialog\n        }\n        macroModeState.onRecordingDone = undefined;\n        macroModeState.isRecording = false;\n      },\n      enterMacroRecordMode: function(cm, registerName) {\n        var register =\n            vimGlobalState.registerController.getRegister(registerName);\n        if (register) {\n          register.clear();\n          this.latestRegister = registerName;\n          if (cm.openDialog) {\n            this.onRecordingDone = cm.openDialog(\n                '(recording)['+registerName+']', null, {bottom:true});\n          }\n          this.isRecording = true;\n        }\n      }\n    };\n\n    function maybeInitVimState(cm) {\n      if (!cm.state.vim) {\n        // Store instance state in the CodeMirror object.\n        cm.state.vim = {\n          inputState: new InputState(),\n          // Vim's input state that triggered the last edit, used to repeat\n          // motions and operators with '.'.\n          lastEditInputState: undefined,\n          // Vim's action command before the last edit, used to repeat actions\n          // with '.' and insert mode repeat.\n          lastEditActionCommand: undefined,\n          // When using jk for navigation, if you move from a longer line to a\n          // shorter line, the cursor may clip to the end of the shorter line.\n          // If j is pressed again and cursor goes to the next line, the\n          // cursor should go back to its horizontal position on the longer\n          // line if it can. This is to keep track of the horizontal position.\n          lastHPos: -1,\n          // Doing the same with screen-position for gj/gk\n          lastHSPos: -1,\n          // The last motion command run. Cleared if a non-motion command gets\n          // executed in between.\n          lastMotion: null,\n          marks: {},\n          // Mark for rendering fake cursor for visual mode.\n          fakeCursor: null,\n          insertMode: false,\n          // Repeat count for changes made in insert mode, triggered by key\n          // sequences like 3,i. Only exists when insertMode is true.\n          insertModeRepeat: undefined,\n          visualMode: false,\n          // If we are in visual line mode. No effect if visualMode is false.\n          visualLine: false,\n          visualBlock: false,\n          lastSelection: null,\n          lastPastedText: null,\n          sel: {},\n          // Buffer-local/window-local values of vim options.\n          options: {}\n        };\n      }\n      return cm.state.vim;\n    }\n    var vimGlobalState;\n    function resetVimGlobalState() {\n      vimGlobalState = {\n        // The current search query.\n        searchQuery: null,\n        // Whether we are searching backwards.\n        searchIsReversed: false,\n        // Replace part of the last substituted pattern\n        lastSubstituteReplacePart: undefined,\n        jumpList: createCircularJumpList(),\n        macroModeState: new MacroModeState,\n        // Recording latest f, t, F or T motion command.\n        lastCharacterSearch: {increment:0, forward:true, selectedCharacter:''},\n        registerController: new RegisterController({}),\n        // search history buffer\n        searchHistoryController: new HistoryController(),\n        // ex Command history buffer\n        exCommandHistoryController : new HistoryController()\n      };\n      for (var optionName in options) {\n        var option = options[optionName];\n        option.value = option.defaultValue;\n      }\n    }\n\n    var lastInsertModeKeyTimer;\n    var vimApi= {\n      buildKeyMap: function() {\n        // TODO: Convert keymap into dictionary format for fast lookup.\n      },\n      // Testing hook, though it might be useful to expose the register\n      // controller anyways.\n      getRegisterController: function() {\n        return vimGlobalState.registerController;\n      },\n      // Testing hook.\n      resetVimGlobalState_: resetVimGlobalState,\n\n      // Testing hook.\n      getVimGlobalState_: function() {\n        return vimGlobalState;\n      },\n\n      // Testing hook.\n      maybeInitVimState_: maybeInitVimState,\n\n      suppressErrorLogging: false,\n\n      InsertModeKey: InsertModeKey,\n      map: function(lhs, rhs, ctx) {\n        // Add user defined key bindings.\n        exCommandDispatcher.map(lhs, rhs, ctx);\n      },\n      unmap: function(lhs, ctx) {\n        exCommandDispatcher.unmap(lhs, ctx);\n      },\n      // Non-recursive map function.\n      // NOTE: This will not create mappings to key maps that aren't present\n      // in the default key map. See TODO at bottom of function.\n      noremap: function(lhs, rhs, ctx) {\n        function toCtxArray(ctx) {\n          return ctx ? [ctx] : ['normal', 'insert', 'visual'];\n        }\n        var ctxsToMap = toCtxArray(ctx);\n        // Look through all actual defaults to find a map candidate.\n        var actualLength = defaultKeymap.length, origLength = defaultKeymapLength;\n        for (var i = actualLength - origLength;\n             i < actualLength && ctxsToMap.length;\n             i++) {\n          var mapping = defaultKeymap[i];\n          // Omit mappings that operate in the wrong context(s) and those of invalid type.\n          if (mapping.keys == rhs &&\n              (!ctx || !mapping.context || mapping.context === ctx) &&\n              mapping.type.substr(0, 2) !== 'ex' &&\n              mapping.type.substr(0, 3) !== 'key') {\n            // Make a shallow copy of the original keymap entry.\n            var newMapping = {};\n            for (var key in mapping) {\n              newMapping[key] = mapping[key];\n            }\n            // Modify it point to the new mapping with the proper context.\n            newMapping.keys = lhs;\n            if (ctx && !newMapping.context) {\n              newMapping.context = ctx;\n            }\n            // Add it to the keymap with a higher priority than the original.\n            this._mapCommand(newMapping);\n            // Record the mapped contexts as complete.\n            var mappedCtxs = toCtxArray(mapping.context);\n            ctxsToMap = ctxsToMap.filter(function(el) { return mappedCtxs.indexOf(el) === -1; });\n          }\n        }\n        // TODO: Create non-recursive keyToKey mappings for the unmapped contexts once those exist.\n      },\n      // Remove all user-defined mappings for the provided context.\n      mapclear: function(ctx) {\n        // Partition the existing keymap into user-defined and true defaults.\n        var actualLength = defaultKeymap.length,\n            origLength = defaultKeymapLength;\n        var userKeymap = defaultKeymap.slice(0, actualLength - origLength);\n        defaultKeymap = defaultKeymap.slice(actualLength - origLength);\n        if (ctx) {\n          // If a specific context is being cleared, we need to keep mappings\n          // from all other contexts.\n          for (var i = userKeymap.length - 1; i >= 0; i--) {\n            var mapping = userKeymap[i];\n            if (ctx !== mapping.context) {\n              if (mapping.context) {\n                this._mapCommand(mapping);\n              } else {\n                // `mapping` applies to all contexts so create keymap copies\n                // for each context except the one being cleared.\n                var contexts = ['normal', 'insert', 'visual'];\n                for (var j in contexts) {\n                  if (contexts[j] !== ctx) {\n                    var newMapping = {};\n                    for (var key in mapping) {\n                      newMapping[key] = mapping[key];\n                    }\n                    newMapping.context = contexts[j];\n                    this._mapCommand(newMapping);\n                  }\n                }\n              }\n            }\n          }\n        }\n      },\n      // TODO: Expose setOption and getOption as instance methods. Need to decide how to namespace\n      // them, or somehow make them work with the existing CodeMirror setOption/getOption API.\n      setOption: setOption,\n      getOption: getOption,\n      defineOption: defineOption,\n      defineEx: function(name, prefix, func){\n        if (!prefix) {\n          prefix = name;\n        } else if (name.indexOf(prefix) !== 0) {\n          throw new Error('(Vim.defineEx) \"'+prefix+'\" is not a prefix of \"'+name+'\", command not registered');\n        }\n        exCommands[name]=func;\n        exCommandDispatcher.commandMap_[prefix]={name:name, shortName:prefix, type:'api'};\n      },\n      handleKey: function (cm, key, origin) {\n        var command = this.findKey(cm, key, origin);\n        if (typeof command === 'function') {\n          return command();\n        }\n      },\n      /**\n       * This is the outermost function called by CodeMirror, after keys have\n       * been mapped to their Vim equivalents.\n       *\n       * Finds a command based on the key (and cached keys if there is a\n       * multi-key sequence). Returns `undefined` if no key is matched, a noop\n       * function if a partial match is found (multi-key), and a function to\n       * execute the bound command if a a key is matched. The function always\n       * returns true.\n       */\n      findKey: function(cm, key, origin) {\n        var vim = maybeInitVimState(cm);\n        function handleMacroRecording() {\n          var macroModeState = vimGlobalState.macroModeState;\n          if (macroModeState.isRecording) {\n            if (key == 'q') {\n              macroModeState.exitMacroRecordMode();\n              clearInputState(cm);\n              return true;\n            }\n            if (origin != 'mapping') {\n              logKey(macroModeState, key);\n            }\n          }\n        }\n        function handleEsc() {\n          if (key == '<Esc>') {\n            // Clear input state and get back to normal mode.\n            clearInputState(cm);\n            if (vim.visualMode) {\n              exitVisualMode(cm);\n            } else if (vim.insertMode) {\n              exitInsertMode(cm);\n            }\n            return true;\n          }\n        }\n        function doKeyToKey(keys) {\n          // TODO: prevent infinite recursion.\n          var match;\n          while (keys) {\n            // Pull off one command key, which is either a single character\n            // or a special sequence wrapped in '<' and '>', e.g. '<Space>'.\n            match = (/<\\w+-.+?>|<\\w+>|./).exec(keys);\n            key = match[0];\n            keys = keys.substring(match.index + key.length);\n            CodeMirror.Vim.handleKey(cm, key, 'mapping');\n          }\n        }\n\n        function handleKeyInsertMode() {\n          if (handleEsc()) { return true; }\n          var keys = vim.inputState.keyBuffer = vim.inputState.keyBuffer + key;\n          var keysAreChars = key.length == 1;\n          var match = commandDispatcher.matchCommand(keys, defaultKeymap, vim.inputState, 'insert');\n          // Need to check all key substrings in insert mode.\n          while (keys.length > 1 && match.type != 'full') {\n            var keys = vim.inputState.keyBuffer = keys.slice(1);\n            var thisMatch = commandDispatcher.matchCommand(keys, defaultKeymap, vim.inputState, 'insert');\n            if (thisMatch.type != 'none') { match = thisMatch; }\n          }\n          if (match.type == 'none') { clearInputState(cm); return false; }\n          else if (match.type == 'partial') {\n            if (lastInsertModeKeyTimer) { window.clearTimeout(lastInsertModeKeyTimer); }\n            lastInsertModeKeyTimer = window.setTimeout(\n              function() { if (vim.insertMode && vim.inputState.keyBuffer) { clearInputState(cm); } },\n              getOption('insertModeEscKeysTimeout'));\n            return !keysAreChars;\n          }\n\n          if (lastInsertModeKeyTimer) { window.clearTimeout(lastInsertModeKeyTimer); }\n          if (keysAreChars) {\n            var selections = cm.listSelections();\n            for (var i = 0; i < selections.length; i++) {\n              var here = selections[i].head;\n              cm.replaceRange('', offsetCursor(here, 0, -(keys.length - 1)), here, '+input');\n            }\n            vimGlobalState.macroModeState.lastInsertModeChanges.changes.pop();\n          }\n          clearInputState(cm);\n          return match.command;\n        }\n\n        function handleKeyNonInsertMode() {\n          if (handleMacroRecording() || handleEsc()) { return true; }\n\n          var keys = vim.inputState.keyBuffer = vim.inputState.keyBuffer + key;\n          if (/^[1-9]\\d*$/.test(keys)) { return true; }\n\n          var keysMatcher = /^(\\d*)(.*)$/.exec(keys);\n          if (!keysMatcher) { clearInputState(cm); return false; }\n          var context = vim.visualMode ? 'visual' :\n                                         'normal';\n          var match = commandDispatcher.matchCommand(keysMatcher[2] || keysMatcher[1], defaultKeymap, vim.inputState, context);\n          if (match.type == 'none') { clearInputState(cm); return false; }\n          else if (match.type == 'partial') { return true; }\n\n          vim.inputState.keyBuffer = '';\n          var keysMatcher = /^(\\d*)(.*)$/.exec(keys);\n          if (keysMatcher[1] && keysMatcher[1] != '0') {\n            vim.inputState.pushRepeatDigit(keysMatcher[1]);\n          }\n          return match.command;\n        }\n\n        var command;\n        if (vim.insertMode) { command = handleKeyInsertMode(); }\n        else { command = handleKeyNonInsertMode(); }\n        if (command === false) {\n          return !vim.insertMode && key.length === 1 ? function() { return true; } : undefined;\n        } else if (command === true) {\n          // TODO: Look into using CodeMirror's multi-key handling.\n          // Return no-op since we are caching the key. Counts as handled, but\n          // don't want act on it just yet.\n          return function() { return true; };\n        } else {\n          return function() {\n            return cm.operation(function() {\n              cm.curOp.isVimOp = true;\n              try {\n                if (command.type == 'keyToKey') {\n                  doKeyToKey(command.toKeys);\n                } else {\n                  commandDispatcher.processCommand(cm, vim, command);\n                }\n              } catch (e) {\n                // clear VIM state in case it's in a bad state.\n                cm.state.vim = undefined;\n                maybeInitVimState(cm);\n                if (!CodeMirror.Vim.suppressErrorLogging) {\n                  console['log'](e);\n                }\n                throw e;\n              }\n              return true;\n            });\n          };\n        }\n      },\n      handleEx: function(cm, input) {\n        exCommandDispatcher.processCommand(cm, input);\n      },\n\n      defineMotion: defineMotion,\n      defineAction: defineAction,\n      defineOperator: defineOperator,\n      mapCommand: mapCommand,\n      _mapCommand: _mapCommand,\n\n      defineRegister: defineRegister,\n\n      exitVisualMode: exitVisualMode,\n      exitInsertMode: exitInsertMode\n    };\n\n    // Represents the current input state.\n    function InputState() {\n      this.prefixRepeat = [];\n      this.motionRepeat = [];\n\n      this.operator = null;\n      this.operatorArgs = null;\n      this.motion = null;\n      this.motionArgs = null;\n      this.keyBuffer = []; // For matching multi-key commands.\n      this.registerName = null; // Defaults to the unnamed register.\n    }\n    InputState.prototype.pushRepeatDigit = function(n) {\n      if (!this.operator) {\n        this.prefixRepeat = this.prefixRepeat.concat(n);\n      } else {\n        this.motionRepeat = this.motionRepeat.concat(n);\n      }\n    };\n    InputState.prototype.getRepeat = function() {\n      var repeat = 0;\n      if (this.prefixRepeat.length > 0 || this.motionRepeat.length > 0) {\n        repeat = 1;\n        if (this.prefixRepeat.length > 0) {\n          repeat *= parseInt(this.prefixRepeat.join(''), 10);\n        }\n        if (this.motionRepeat.length > 0) {\n          repeat *= parseInt(this.motionRepeat.join(''), 10);\n        }\n      }\n      return repeat;\n    };\n\n    function clearInputState(cm, reason) {\n      cm.state.vim.inputState = new InputState();\n      CodeMirror.signal(cm, 'vim-command-done', reason);\n    }\n\n    /*\n     * Register stores information about copy and paste registers.  Besides\n     * text, a register must store whether it is linewise (i.e., when it is\n     * pasted, should it insert itself into a new line, or should the text be\n     * inserted at the cursor position.)\n     */\n    function Register(text, linewise, blockwise) {\n      this.clear();\n      this.keyBuffer = [text || ''];\n      this.insertModeChanges = [];\n      this.searchQueries = [];\n      this.linewise = !!linewise;\n      this.blockwise = !!blockwise;\n    }\n    Register.prototype = {\n      setText: function(text, linewise, blockwise) {\n        this.keyBuffer = [text || ''];\n        this.linewise = !!linewise;\n        this.blockwise = !!blockwise;\n      },\n      pushText: function(text, linewise) {\n        // if this register has ever been set to linewise, use linewise.\n        if (linewise) {\n          if (!this.linewise) {\n            this.keyBuffer.push('\\n');\n          }\n          this.linewise = true;\n        }\n        this.keyBuffer.push(text);\n      },\n      pushInsertModeChanges: function(changes) {\n        this.insertModeChanges.push(createInsertModeChanges(changes));\n      },\n      pushSearchQuery: function(query) {\n        this.searchQueries.push(query);\n      },\n      clear: function() {\n        this.keyBuffer = [];\n        this.insertModeChanges = [];\n        this.searchQueries = [];\n        this.linewise = false;\n      },\n      toString: function() {\n        return this.keyBuffer.join('');\n      }\n    };\n\n    /**\n     * Defines an external register.\n     *\n     * The name should be a single character that will be used to reference the register.\n     * The register should support setText, pushText, clear, and toString(). See Register\n     * for a reference implementation.\n     */\n    function defineRegister(name, register) {\n      var registers = vimGlobalState.registerController.registers;\n      if (!name || name.length != 1) {\n        throw Error('Register name must be 1 character');\n      }\n      if (registers[name]) {\n        throw Error('Register already defined ' + name);\n      }\n      registers[name] = register;\n      validRegisters.push(name);\n    }\n\n    /*\n     * vim registers allow you to keep many independent copy and paste buffers.\n     * See http://usevim.com/2012/04/13/registers/ for an introduction.\n     *\n     * RegisterController keeps the state of all the registers.  An initial\n     * state may be passed in.  The unnamed register '\"' will always be\n     * overridden.\n     */\n    function RegisterController(registers) {\n      this.registers = registers;\n      this.unnamedRegister = registers['\"'] = new Register();\n      registers['.'] = new Register();\n      registers[':'] = new Register();\n      registers['/'] = new Register();\n    }\n    RegisterController.prototype = {\n      pushText: function(registerName, operator, text, linewise, blockwise) {\n        if (linewise && text.charAt(text.length - 1) !== '\\n'){\n          text += '\\n';\n        }\n        // Lowercase and uppercase registers refer to the same register.\n        // Uppercase just means append.\n        var register = this.isValidRegister(registerName) ?\n            this.getRegister(registerName) : null;\n        // if no register/an invalid register was specified, things go to the\n        // default registers\n        if (!register) {\n          switch (operator) {\n            case 'yank':\n              // The 0 register contains the text from the most recent yank.\n              this.registers['0'] = new Register(text, linewise, blockwise);\n              break;\n            case 'delete':\n            case 'change':\n              if (text.indexOf('\\n') == -1) {\n                // Delete less than 1 line. Update the small delete register.\n                this.registers['-'] = new Register(text, linewise);\n              } else {\n                // Shift down the contents of the numbered registers and put the\n                // deleted text into register 1.\n                this.shiftNumericRegisters_();\n                this.registers['1'] = new Register(text, linewise);\n              }\n              break;\n          }\n          // Make sure the unnamed register is set to what just happened\n          this.unnamedRegister.setText(text, linewise, blockwise);\n          return;\n        }\n\n        // If we've gotten to this point, we've actually specified a register\n        var append = isUpperCase(registerName);\n        if (append) {\n          register.pushText(text, linewise);\n        } else {\n          register.setText(text, linewise, blockwise);\n        }\n        // The unnamed register always has the same value as the last used\n        // register.\n        this.unnamedRegister.setText(register.toString(), linewise);\n      },\n      // Gets the register named @name.  If one of @name doesn't already exist,\n      // create it.  If @name is invalid, return the unnamedRegister.\n      getRegister: function(name) {\n        if (!this.isValidRegister(name)) {\n          return this.unnamedRegister;\n        }\n        name = name.toLowerCase();\n        if (!this.registers[name]) {\n          this.registers[name] = new Register();\n        }\n        return this.registers[name];\n      },\n      isValidRegister: function(name) {\n        return name && inArray(name, validRegisters);\n      },\n      shiftNumericRegisters_: function() {\n        for (var i = 9; i >= 2; i--) {\n          this.registers[i] = this.getRegister('' + (i - 1));\n        }\n      }\n    };\n    function HistoryController() {\n        this.historyBuffer = [];\n        this.iterator = 0;\n        this.initialPrefix = null;\n    }\n    HistoryController.prototype = {\n      // the input argument here acts a user entered prefix for a small time\n      // until we start autocompletion in which case it is the autocompleted.\n      nextMatch: function (input, up) {\n        var historyBuffer = this.historyBuffer;\n        var dir = up ? -1 : 1;\n        if (this.initialPrefix === null) this.initialPrefix = input;\n        for (var i = this.iterator + dir; up ? i >= 0 : i < historyBuffer.length; i+= dir) {\n          var element = historyBuffer[i];\n          for (var j = 0; j <= element.length; j++) {\n            if (this.initialPrefix == element.substring(0, j)) {\n              this.iterator = i;\n              return element;\n            }\n          }\n        }\n        // should return the user input in case we reach the end of buffer.\n        if (i >= historyBuffer.length) {\n          this.iterator = historyBuffer.length;\n          return this.initialPrefix;\n        }\n        // return the last autocompleted query or exCommand as it is.\n        if (i < 0 ) return input;\n      },\n      pushInput: function(input) {\n        var index = this.historyBuffer.indexOf(input);\n        if (index > -1) this.historyBuffer.splice(index, 1);\n        if (input.length) this.historyBuffer.push(input);\n      },\n      reset: function() {\n        this.initialPrefix = null;\n        this.iterator = this.historyBuffer.length;\n      }\n    };\n    var commandDispatcher = {\n      matchCommand: function(keys, keyMap, inputState, context) {\n        var matches = commandMatches(keys, keyMap, context, inputState);\n        if (!matches.full && !matches.partial) {\n          return {type: 'none'};\n        } else if (!matches.full && matches.partial) {\n          return {type: 'partial'};\n        }\n\n        var bestMatch;\n        for (var i = 0; i < matches.full.length; i++) {\n          var match = matches.full[i];\n          if (!bestMatch) {\n            bestMatch = match;\n          }\n        }\n        if (bestMatch.keys.slice(-11) == '<character>') {\n          var character = lastChar(keys);\n          if (!character) return {type: 'none'};\n          inputState.selectedCharacter = character;\n        }\n        return {type: 'full', command: bestMatch};\n      },\n      processCommand: function(cm, vim, command) {\n        vim.inputState.repeatOverride = command.repeatOverride;\n        switch (command.type) {\n          case 'motion':\n            this.processMotion(cm, vim, command);\n            break;\n          case 'operator':\n            this.processOperator(cm, vim, command);\n            break;\n          case 'operatorMotion':\n            this.processOperatorMotion(cm, vim, command);\n            break;\n          case 'action':\n            this.processAction(cm, vim, command);\n            break;\n          case 'search':\n            this.processSearch(cm, vim, command);\n            break;\n          case 'ex':\n          case 'keyToEx':\n            this.processEx(cm, vim, command);\n            break;\n          default:\n            break;\n        }\n      },\n      processMotion: function(cm, vim, command) {\n        vim.inputState.motion = command.motion;\n        vim.inputState.motionArgs = copyArgs(command.motionArgs);\n        this.evalInput(cm, vim);\n      },\n      processOperator: function(cm, vim, command) {\n        var inputState = vim.inputState;\n        if (inputState.operator) {\n          if (inputState.operator == command.operator) {\n            // Typing an operator twice like 'dd' makes the operator operate\n            // linewise\n            inputState.motion = 'expandToLine';\n            inputState.motionArgs = { linewise: true };\n            this.evalInput(cm, vim);\n            return;\n          } else {\n            // 2 different operators in a row doesn't make sense.\n            clearInputState(cm);\n          }\n        }\n        inputState.operator = command.operator;\n        inputState.operatorArgs = copyArgs(command.operatorArgs);\n        if (vim.visualMode) {\n          // Operating on a selection in visual mode. We don't need a motion.\n          this.evalInput(cm, vim);\n        }\n      },\n      processOperatorMotion: function(cm, vim, command) {\n        var visualMode = vim.visualMode;\n        var operatorMotionArgs = copyArgs(command.operatorMotionArgs);\n        if (operatorMotionArgs) {\n          // Operator motions may have special behavior in visual mode.\n          if (visualMode && operatorMotionArgs.visualLine) {\n            vim.visualLine = true;\n          }\n        }\n        this.processOperator(cm, vim, command);\n        if (!visualMode) {\n          this.processMotion(cm, vim, command);\n        }\n      },\n      processAction: function(cm, vim, command) {\n        var inputState = vim.inputState;\n        var repeat = inputState.getRepeat();\n        var repeatIsExplicit = !!repeat;\n        var actionArgs = copyArgs(command.actionArgs) || {};\n        if (inputState.selectedCharacter) {\n          actionArgs.selectedCharacter = inputState.selectedCharacter;\n        }\n        // Actions may or may not have motions and operators. Do these first.\n        if (command.operator) {\n          this.processOperator(cm, vim, command);\n        }\n        if (command.motion) {\n          this.processMotion(cm, vim, command);\n        }\n        if (command.motion || command.operator) {\n          this.evalInput(cm, vim);\n        }\n        actionArgs.repeat = repeat || 1;\n        actionArgs.repeatIsExplicit = repeatIsExplicit;\n        actionArgs.registerName = inputState.registerName;\n        clearInputState(cm);\n        vim.lastMotion = null;\n        if (command.isEdit) {\n          this.recordLastEdit(vim, inputState, command);\n        }\n        actions[command.action](cm, actionArgs, vim);\n      },\n      processSearch: function(cm, vim, command) {\n        if (!cm.getSearchCursor) {\n          // Search depends on SearchCursor.\n          return;\n        }\n        var forward = command.searchArgs.forward;\n        var wholeWordOnly = command.searchArgs.wholeWordOnly;\n        getSearchState(cm).setReversed(!forward);\n        var promptPrefix = (forward) ? '/' : '?';\n        var originalQuery = getSearchState(cm).getQuery();\n        var originalScrollPos = cm.getScrollInfo();\n        function handleQuery(query, ignoreCase, smartCase) {\n          vimGlobalState.searchHistoryController.pushInput(query);\n          vimGlobalState.searchHistoryController.reset();\n          try {\n            updateSearchQuery(cm, query, ignoreCase, smartCase);\n          } catch (e) {\n            showConfirm(cm, 'Invalid regex: ' + query);\n            clearInputState(cm);\n            return;\n          }\n          commandDispatcher.processMotion(cm, vim, {\n            type: 'motion',\n            motion: 'findNext',\n            motionArgs: { forward: true, toJumplist: command.searchArgs.toJumplist }\n          });\n        }\n        function onPromptClose(query) {\n          cm.scrollTo(originalScrollPos.left, originalScrollPos.top);\n          handleQuery(query, true /** ignoreCase */, true /** smartCase */);\n          var macroModeState = vimGlobalState.macroModeState;\n          if (macroModeState.isRecording) {\n            logSearchQuery(macroModeState, query);\n          }\n        }\n        function onPromptKeyUp(e, query, close) {\n          var keyName = CodeMirror.keyName(e), up, offset;\n          if (keyName == 'Up' || keyName == 'Down') {\n            up = keyName == 'Up' ? true : false;\n            offset = e.target ? e.target.selectionEnd : 0;\n            query = vimGlobalState.searchHistoryController.nextMatch(query, up) || '';\n            close(query);\n            if (offset && e.target) e.target.selectionEnd = e.target.selectionStart = Math.min(offset, e.target.value.length);\n          } else {\n            if ( keyName != 'Left' && keyName != 'Right' && keyName != 'Ctrl' && keyName != 'Alt' && keyName != 'Shift')\n              vimGlobalState.searchHistoryController.reset();\n          }\n          var parsedQuery;\n          try {\n            parsedQuery = updateSearchQuery(cm, query,\n                true /** ignoreCase */, true /** smartCase */);\n          } catch (e) {\n            // Swallow bad regexes for incremental search.\n          }\n          if (parsedQuery) {\n            cm.scrollIntoView(findNext(cm, !forward, parsedQuery), 30);\n          } else {\n            clearSearchHighlight(cm);\n            cm.scrollTo(originalScrollPos.left, originalScrollPos.top);\n          }\n        }\n        function onPromptKeyDown(e, query, close) {\n          var keyName = CodeMirror.keyName(e);\n          if (keyName == 'Esc' || keyName == 'Ctrl-C' || keyName == 'Ctrl-[' ||\n              (keyName == 'Backspace' && query == '')) {\n            vimGlobalState.searchHistoryController.pushInput(query);\n            vimGlobalState.searchHistoryController.reset();\n            updateSearchQuery(cm, originalQuery);\n            clearSearchHighlight(cm);\n            cm.scrollTo(originalScrollPos.left, originalScrollPos.top);\n            CodeMirror.e_stop(e);\n            clearInputState(cm);\n            close();\n            cm.focus();\n          } else if (keyName == 'Up' || keyName == 'Down') {\n            CodeMirror.e_stop(e);\n          } else if (keyName == 'Ctrl-U') {\n            // Ctrl-U clears input.\n            CodeMirror.e_stop(e);\n            close('');\n          }\n        }\n        switch (command.searchArgs.querySrc) {\n          case 'prompt':\n            var macroModeState = vimGlobalState.macroModeState;\n            if (macroModeState.isPlaying) {\n              var query = macroModeState.replaySearchQueries.shift();\n              handleQuery(query, true /** ignoreCase */, false /** smartCase */);\n            } else {\n              showPrompt(cm, {\n                  onClose: onPromptClose,\n                  prefix: promptPrefix,\n                  desc: searchPromptDesc,\n                  onKeyUp: onPromptKeyUp,\n                  onKeyDown: onPromptKeyDown\n              });\n            }\n            break;\n          case 'wordUnderCursor':\n            var word = expandWordUnderCursor(cm, false /** inclusive */,\n                true /** forward */, false /** bigWord */,\n                true /** noSymbol */);\n            var isKeyword = true;\n            if (!word) {\n              word = expandWordUnderCursor(cm, false /** inclusive */,\n                  true /** forward */, false /** bigWord */,\n                  false /** noSymbol */);\n              isKeyword = false;\n            }\n            if (!word) {\n              return;\n            }\n            var query = cm.getLine(word.start.line).substring(word.start.ch,\n                word.end.ch);\n            if (isKeyword && wholeWordOnly) {\n                query = '\\\\b' + query + '\\\\b';\n            } else {\n              query = escapeRegex(query);\n            }\n\n            // cachedCursor is used to save the old position of the cursor\n            // when * or # causes vim to seek for the nearest word and shift\n            // the cursor before entering the motion.\n            vimGlobalState.jumpList.cachedCursor = cm.getCursor();\n            cm.setCursor(word.start);\n\n            handleQuery(query, true /** ignoreCase */, false /** smartCase */);\n            break;\n        }\n      },\n      processEx: function(cm, vim, command) {\n        function onPromptClose(input) {\n          // Give the prompt some time to close so that if processCommand shows\n          // an error, the elements don't overlap.\n          vimGlobalState.exCommandHistoryController.pushInput(input);\n          vimGlobalState.exCommandHistoryController.reset();\n          exCommandDispatcher.processCommand(cm, input);\n        }\n        function onPromptKeyDown(e, input, close) {\n          var keyName = CodeMirror.keyName(e), up, offset;\n          if (keyName == 'Esc' || keyName == 'Ctrl-C' || keyName == 'Ctrl-[' ||\n              (keyName == 'Backspace' && input == '')) {\n            vimGlobalState.exCommandHistoryController.pushInput(input);\n            vimGlobalState.exCommandHistoryController.reset();\n            CodeMirror.e_stop(e);\n            clearInputState(cm);\n            close();\n            cm.focus();\n          }\n          if (keyName == 'Up' || keyName == 'Down') {\n            CodeMirror.e_stop(e);\n            up = keyName == 'Up' ? true : false;\n            offset = e.target ? e.target.selectionEnd : 0;\n            input = vimGlobalState.exCommandHistoryController.nextMatch(input, up) || '';\n            close(input);\n            if (offset && e.target) e.target.selectionEnd = e.target.selectionStart = Math.min(offset, e.target.value.length);\n          } else if (keyName == 'Ctrl-U') {\n            // Ctrl-U clears input.\n            CodeMirror.e_stop(e);\n            close('');\n          } else {\n            if ( keyName != 'Left' && keyName != 'Right' && keyName != 'Ctrl' && keyName != 'Alt' && keyName != 'Shift')\n              vimGlobalState.exCommandHistoryController.reset();\n          }\n        }\n        if (command.type == 'keyToEx') {\n          // Handle user defined Ex to Ex mappings\n          exCommandDispatcher.processCommand(cm, command.exArgs.input);\n        } else {\n          if (vim.visualMode) {\n            showPrompt(cm, { onClose: onPromptClose, prefix: ':', value: '\\'<,\\'>',\n                onKeyDown: onPromptKeyDown, selectValueOnOpen: false});\n          } else {\n            showPrompt(cm, { onClose: onPromptClose, prefix: ':',\n                onKeyDown: onPromptKeyDown});\n          }\n        }\n      },\n      evalInput: function(cm, vim) {\n        // If the motion command is set, execute both the operator and motion.\n        // Otherwise return.\n        var inputState = vim.inputState;\n        var motion = inputState.motion;\n        var motionArgs = inputState.motionArgs || {};\n        var operator = inputState.operator;\n        var operatorArgs = inputState.operatorArgs || {};\n        var registerName = inputState.registerName;\n        var sel = vim.sel;\n        // TODO: Make sure cm and vim selections are identical outside visual mode.\n        var origHead = copyCursor(vim.visualMode ? clipCursorToContent(cm, sel.head): cm.getCursor('head'));\n        var origAnchor = copyCursor(vim.visualMode ? clipCursorToContent(cm, sel.anchor) : cm.getCursor('anchor'));\n        var oldHead = copyCursor(origHead);\n        var oldAnchor = copyCursor(origAnchor);\n        var newHead, newAnchor;\n        var repeat;\n        if (operator) {\n          this.recordLastEdit(vim, inputState);\n        }\n        if (inputState.repeatOverride !== undefined) {\n          // If repeatOverride is specified, that takes precedence over the\n          // input state's repeat. Used by Ex mode and can be user defined.\n          repeat = inputState.repeatOverride;\n        } else {\n          repeat = inputState.getRepeat();\n        }\n        if (repeat > 0 && motionArgs.explicitRepeat) {\n          motionArgs.repeatIsExplicit = true;\n        } else if (motionArgs.noRepeat ||\n            (!motionArgs.explicitRepeat && repeat === 0)) {\n          repeat = 1;\n          motionArgs.repeatIsExplicit = false;\n        }\n        if (inputState.selectedCharacter) {\n          // If there is a character input, stick it in all of the arg arrays.\n          motionArgs.selectedCharacter = operatorArgs.selectedCharacter =\n              inputState.selectedCharacter;\n        }\n        motionArgs.repeat = repeat;\n        clearInputState(cm);\n        if (motion) {\n          var motionResult = motions[motion](cm, origHead, motionArgs, vim);\n          vim.lastMotion = motions[motion];\n          if (!motionResult) {\n            return;\n          }\n          if (motionArgs.toJumplist) {\n            var jumpList = vimGlobalState.jumpList;\n            // if the current motion is # or *, use cachedCursor\n            var cachedCursor = jumpList.cachedCursor;\n            if (cachedCursor) {\n              recordJumpPosition(cm, cachedCursor, motionResult);\n              delete jumpList.cachedCursor;\n            } else {\n              recordJumpPosition(cm, origHead, motionResult);\n            }\n          }\n          if (motionResult instanceof Array) {\n            newAnchor = motionResult[0];\n            newHead = motionResult[1];\n          } else {\n            newHead = motionResult;\n          }\n          // TODO: Handle null returns from motion commands better.\n          if (!newHead) {\n            newHead = copyCursor(origHead);\n          }\n          if (vim.visualMode) {\n            if (!(vim.visualBlock && newHead.ch === Infinity)) {\n              newHead = clipCursorToContent(cm, newHead, vim.visualBlock);\n            }\n            if (newAnchor) {\n              newAnchor = clipCursorToContent(cm, newAnchor, true);\n            }\n            newAnchor = newAnchor || oldAnchor;\n            sel.anchor = newAnchor;\n            sel.head = newHead;\n            updateCmSelection(cm);\n            updateMark(cm, vim, '<',\n                cursorIsBefore(newAnchor, newHead) ? newAnchor\n                    : newHead);\n            updateMark(cm, vim, '>',\n                cursorIsBefore(newAnchor, newHead) ? newHead\n                    : newAnchor);\n          } else if (!operator) {\n            newHead = clipCursorToContent(cm, newHead);\n            cm.setCursor(newHead.line, newHead.ch);\n          }\n        }\n        if (operator) {\n          if (operatorArgs.lastSel) {\n            // Replaying a visual mode operation\n            newAnchor = oldAnchor;\n            var lastSel = operatorArgs.lastSel;\n            var lineOffset = Math.abs(lastSel.head.line - lastSel.anchor.line);\n            var chOffset = Math.abs(lastSel.head.ch - lastSel.anchor.ch);\n            if (lastSel.visualLine) {\n              // Linewise Visual mode: The same number of lines.\n              newHead = Pos(oldAnchor.line + lineOffset, oldAnchor.ch);\n            } else if (lastSel.visualBlock) {\n              // Blockwise Visual mode: The same number of lines and columns.\n              newHead = Pos(oldAnchor.line + lineOffset, oldAnchor.ch + chOffset);\n            } else if (lastSel.head.line == lastSel.anchor.line) {\n              // Normal Visual mode within one line: The same number of characters.\n              newHead = Pos(oldAnchor.line, oldAnchor.ch + chOffset);\n            } else {\n              // Normal Visual mode with several lines: The same number of lines, in the\n              // last line the same number of characters as in the last line the last time.\n              newHead = Pos(oldAnchor.line + lineOffset, oldAnchor.ch);\n            }\n            vim.visualMode = true;\n            vim.visualLine = lastSel.visualLine;\n            vim.visualBlock = lastSel.visualBlock;\n            sel = vim.sel = {\n              anchor: newAnchor,\n              head: newHead\n            };\n            updateCmSelection(cm);\n          } else if (vim.visualMode) {\n            operatorArgs.lastSel = {\n              anchor: copyCursor(sel.anchor),\n              head: copyCursor(sel.head),\n              visualBlock: vim.visualBlock,\n              visualLine: vim.visualLine\n            };\n          }\n          var curStart, curEnd, linewise, mode;\n          var cmSel;\n          if (vim.visualMode) {\n            // Init visual op\n            curStart = cursorMin(sel.head, sel.anchor);\n            curEnd = cursorMax(sel.head, sel.anchor);\n            linewise = vim.visualLine || operatorArgs.linewise;\n            mode = vim.visualBlock ? 'block' :\n                   linewise ? 'line' :\n                   'char';\n            cmSel = makeCmSelection(cm, {\n              anchor: curStart,\n              head: curEnd\n            }, mode);\n            if (linewise) {\n              var ranges = cmSel.ranges;\n              if (mode == 'block') {\n                // Linewise operators in visual block mode extend to end of line\n                for (var i = 0; i < ranges.length; i++) {\n                  ranges[i].head.ch = lineLength(cm, ranges[i].head.line);\n                }\n              } else if (mode == 'line') {\n                ranges[0].head = Pos(ranges[0].head.line + 1, 0);\n              }\n            }\n          } else {\n            // Init motion op\n            curStart = copyCursor(newAnchor || oldAnchor);\n            curEnd = copyCursor(newHead || oldHead);\n            if (cursorIsBefore(curEnd, curStart)) {\n              var tmp = curStart;\n              curStart = curEnd;\n              curEnd = tmp;\n            }\n            linewise = motionArgs.linewise || operatorArgs.linewise;\n            if (linewise) {\n              // Expand selection to entire line.\n              expandSelectionToLine(cm, curStart, curEnd);\n            } else if (motionArgs.forward) {\n              // Clip to trailing newlines only if the motion goes forward.\n              clipToLine(cm, curStart, curEnd);\n            }\n            mode = 'char';\n            var exclusive = !motionArgs.inclusive || linewise;\n            cmSel = makeCmSelection(cm, {\n              anchor: curStart,\n              head: curEnd\n            }, mode, exclusive);\n          }\n          cm.setSelections(cmSel.ranges, cmSel.primary);\n          vim.lastMotion = null;\n          operatorArgs.repeat = repeat; // For indent in visual mode.\n          operatorArgs.registerName = registerName;\n          // Keep track of linewise as it affects how paste and change behave.\n          operatorArgs.linewise = linewise;\n          var operatorMoveTo = operators[operator](\n            cm, operatorArgs, cmSel.ranges, oldAnchor, newHead);\n          if (vim.visualMode) {\n            exitVisualMode(cm, operatorMoveTo != null);\n          }\n          if (operatorMoveTo) {\n            cm.setCursor(operatorMoveTo);\n          }\n        }\n      },\n      recordLastEdit: function(vim, inputState, actionCommand) {\n        var macroModeState = vimGlobalState.macroModeState;\n        if (macroModeState.isPlaying) { return; }\n        vim.lastEditInputState = inputState;\n        vim.lastEditActionCommand = actionCommand;\n        macroModeState.lastInsertModeChanges.changes = [];\n        macroModeState.lastInsertModeChanges.expectCursorActivityForChange = false;\n      }\n    };\n\n    /**\n     * typedef {Object{line:number,ch:number}} Cursor An object containing the\n     *     position of the cursor.\n     */\n    // All of the functions below return Cursor objects.\n    var motions = {\n      moveToTopLine: function(cm, _head, motionArgs) {\n        var line = getUserVisibleLines(cm).top + motionArgs.repeat -1;\n        return Pos(line, findFirstNonWhiteSpaceCharacter(cm.getLine(line)));\n      },\n      moveToMiddleLine: function(cm) {\n        var range = getUserVisibleLines(cm);\n        var line = Math.floor((range.top + range.bottom) * 0.5);\n        return Pos(line, findFirstNonWhiteSpaceCharacter(cm.getLine(line)));\n      },\n      moveToBottomLine: function(cm, _head, motionArgs) {\n        var line = getUserVisibleLines(cm).bottom - motionArgs.repeat +1;\n        return Pos(line, findFirstNonWhiteSpaceCharacter(cm.getLine(line)));\n      },\n      expandToLine: function(_cm, head, motionArgs) {\n        // Expands forward to end of line, and then to next line if repeat is\n        // >1. Does not handle backward motion!\n        var cur = head;\n        return Pos(cur.line + motionArgs.repeat - 1, Infinity);\n      },\n      findNext: function(cm, _head, motionArgs) {\n        var state = getSearchState(cm);\n        var query = state.getQuery();\n        if (!query) {\n          return;\n        }\n        var prev = !motionArgs.forward;\n        // If search is initiated with ? instead of /, negate direction.\n        prev = (state.isReversed()) ? !prev : prev;\n        highlightSearchMatches(cm, query);\n        return findNext(cm, prev/** prev */, query, motionArgs.repeat);\n      },\n      goToMark: function(cm, _head, motionArgs, vim) {\n        var pos = getMarkPos(cm, vim, motionArgs.selectedCharacter);\n        if (pos) {\n          return motionArgs.linewise ? { line: pos.line, ch: findFirstNonWhiteSpaceCharacter(cm.getLine(pos.line)) } : pos;\n        }\n        return null;\n      },\n      moveToOtherHighlightedEnd: function(cm, _head, motionArgs, vim) {\n        if (vim.visualBlock && motionArgs.sameLine) {\n          var sel = vim.sel;\n          return [\n            clipCursorToContent(cm, Pos(sel.anchor.line, sel.head.ch)),\n            clipCursorToContent(cm, Pos(sel.head.line, sel.anchor.ch))\n          ];\n        } else {\n          return ([vim.sel.head, vim.sel.anchor]);\n        }\n      },\n      jumpToMark: function(cm, head, motionArgs, vim) {\n        var best = head;\n        for (var i = 0; i < motionArgs.repeat; i++) {\n          var cursor = best;\n          for (var key in vim.marks) {\n            if (!isLowerCase(key)) {\n              continue;\n            }\n            var mark = vim.marks[key].find();\n            var isWrongDirection = (motionArgs.forward) ?\n              cursorIsBefore(mark, cursor) : cursorIsBefore(cursor, mark);\n\n            if (isWrongDirection) {\n              continue;\n            }\n            if (motionArgs.linewise && (mark.line == cursor.line)) {\n              continue;\n            }\n\n            var equal = cursorEqual(cursor, best);\n            var between = (motionArgs.forward) ?\n              cursorIsBetween(cursor, mark, best) :\n              cursorIsBetween(best, mark, cursor);\n\n            if (equal || between) {\n              best = mark;\n            }\n          }\n        }\n\n        if (motionArgs.linewise) {\n          // Vim places the cursor on the first non-whitespace character of\n          // the line if there is one, else it places the cursor at the end\n          // of the line, regardless of whether a mark was found.\n          best = Pos(best.line, findFirstNonWhiteSpaceCharacter(cm.getLine(best.line)));\n        }\n        return best;\n      },\n      moveByCharacters: function(_cm, head, motionArgs) {\n        var cur = head;\n        var repeat = motionArgs.repeat;\n        var ch = motionArgs.forward ? cur.ch + repeat : cur.ch - repeat;\n        return Pos(cur.line, ch);\n      },\n      moveByLines: function(cm, head, motionArgs, vim) {\n        var cur = head;\n        var endCh = cur.ch;\n        // Depending what our last motion was, we may want to do different\n        // things. If our last motion was moving vertically, we want to\n        // preserve the HPos from our last horizontal move.  If our last motion\n        // was going to the end of a line, moving vertically we should go to\n        // the end of the line, etc.\n        switch (vim.lastMotion) {\n          case this.moveByLines:\n          case this.moveByDisplayLines:\n          case this.moveByScroll:\n          case this.moveToColumn:\n          case this.moveToEol:\n            endCh = vim.lastHPos;\n            break;\n          default:\n            vim.lastHPos = endCh;\n        }\n        var repeat = motionArgs.repeat+(motionArgs.repeatOffset||0);\n        var line = motionArgs.forward ? cur.line + repeat : cur.line - repeat;\n        var first = cm.firstLine();\n        var last = cm.lastLine();\n        // Vim go to line begin or line end when cursor at first/last line and\n        // move to previous/next line is triggered.\n        if (line < first && cur.line == first){\n          return this.moveToStartOfLine(cm, head, motionArgs, vim);\n        }else if (line > last && cur.line == last){\n            return this.moveToEol(cm, head, motionArgs, vim);\n        }\n        if (motionArgs.toFirstChar){\n          endCh=findFirstNonWhiteSpaceCharacter(cm.getLine(line));\n          vim.lastHPos = endCh;\n        }\n        vim.lastHSPos = cm.charCoords(Pos(line, endCh),'div').left;\n        return Pos(line, endCh);\n      },\n      moveByDisplayLines: function(cm, head, motionArgs, vim) {\n        var cur = head;\n        switch (vim.lastMotion) {\n          case this.moveByDisplayLines:\n          case this.moveByScroll:\n          case this.moveByLines:\n          case this.moveToColumn:\n          case this.moveToEol:\n            break;\n          default:\n            vim.lastHSPos = cm.charCoords(cur,'div').left;\n        }\n        var repeat = motionArgs.repeat;\n        var res=cm.findPosV(cur,(motionArgs.forward ? repeat : -repeat),'line',vim.lastHSPos);\n        if (res.hitSide) {\n          if (motionArgs.forward) {\n            var lastCharCoords = cm.charCoords(res, 'div');\n            var goalCoords = { top: lastCharCoords.top + 8, left: vim.lastHSPos };\n            var res = cm.coordsChar(goalCoords, 'div');\n          } else {\n            var resCoords = cm.charCoords(Pos(cm.firstLine(), 0), 'div');\n            resCoords.left = vim.lastHSPos;\n            res = cm.coordsChar(resCoords, 'div');\n          }\n        }\n        vim.lastHPos = res.ch;\n        return res;\n      },\n      moveByPage: function(cm, head, motionArgs) {\n        // CodeMirror only exposes functions that move the cursor page down, so\n        // doing this bad hack to move the cursor and move it back. evalInput\n        // will move the cursor to where it should be in the end.\n        var curStart = head;\n        var repeat = motionArgs.repeat;\n        return cm.findPosV(curStart, (motionArgs.forward ? repeat : -repeat), 'page');\n      },\n      moveByParagraph: function(cm, head, motionArgs) {\n        var dir = motionArgs.forward ? 1 : -1;\n        return findParagraph(cm, head, motionArgs.repeat, dir);\n      },\n      moveBySentence: function(cm, head, motionArgs) {\n        var dir = motionArgs.forward ? 1 : -1;\n        return findSentence(cm, head, motionArgs.repeat, dir);\n      },\n      moveByScroll: function(cm, head, motionArgs, vim) {\n        var scrollbox = cm.getScrollInfo();\n        var curEnd = null;\n        var repeat = motionArgs.repeat;\n        if (!repeat) {\n          repeat = scrollbox.clientHeight / (2 * cm.defaultTextHeight());\n        }\n        var orig = cm.charCoords(head, 'local');\n        motionArgs.repeat = repeat;\n        var curEnd = motions.moveByDisplayLines(cm, head, motionArgs, vim);\n        if (!curEnd) {\n          return null;\n        }\n        var dest = cm.charCoords(curEnd, 'local');\n        cm.scrollTo(null, scrollbox.top + dest.top - orig.top);\n        return curEnd;\n      },\n      moveByWords: function(cm, head, motionArgs) {\n        return moveToWord(cm, head, motionArgs.repeat, !!motionArgs.forward,\n            !!motionArgs.wordEnd, !!motionArgs.bigWord);\n      },\n      moveTillCharacter: function(cm, _head, motionArgs) {\n        var repeat = motionArgs.repeat;\n        var curEnd = moveToCharacter(cm, repeat, motionArgs.forward,\n            motionArgs.selectedCharacter);\n        var increment = motionArgs.forward ? -1 : 1;\n        recordLastCharacterSearch(increment, motionArgs);\n        if (!curEnd) return null;\n        curEnd.ch += increment;\n        return curEnd;\n      },\n      moveToCharacter: function(cm, head, motionArgs) {\n        var repeat = motionArgs.repeat;\n        recordLastCharacterSearch(0, motionArgs);\n        return moveToCharacter(cm, repeat, motionArgs.forward,\n            motionArgs.selectedCharacter) || head;\n      },\n      moveToSymbol: function(cm, head, motionArgs) {\n        var repeat = motionArgs.repeat;\n        return findSymbol(cm, repeat, motionArgs.forward,\n            motionArgs.selectedCharacter) || head;\n      },\n      moveToColumn: function(cm, head, motionArgs, vim) {\n        var repeat = motionArgs.repeat;\n        // repeat is equivalent to which column we want to move to!\n        vim.lastHPos = repeat - 1;\n        vim.lastHSPos = cm.charCoords(head,'div').left;\n        return moveToColumn(cm, repeat);\n      },\n      moveToEol: function(cm, head, motionArgs, vim) {\n        var cur = head;\n        vim.lastHPos = Infinity;\n        var retval= Pos(cur.line + motionArgs.repeat - 1, Infinity);\n        var end=cm.clipPos(retval);\n        end.ch--;\n        vim.lastHSPos = cm.charCoords(end,'div').left;\n        return retval;\n      },\n      moveToFirstNonWhiteSpaceCharacter: function(cm, head) {\n        // Go to the start of the line where the text begins, or the end for\n        // whitespace-only lines\n        var cursor = head;\n        return Pos(cursor.line,\n                   findFirstNonWhiteSpaceCharacter(cm.getLine(cursor.line)));\n      },\n      moveToMatchedSymbol: function(cm, head) {\n        var cursor = head;\n        var line = cursor.line;\n        var ch = cursor.ch;\n        var lineText = cm.getLine(line);\n        var symbol;\n        for (; ch < lineText.length; ch++) {\n          symbol = lineText.charAt(ch);\n          if (symbol && isMatchableSymbol(symbol)) {\n            var style = cm.getTokenTypeAt(Pos(line, ch + 1));\n            if (style !== \"string\" && style !== \"comment\") {\n              break;\n            }\n          }\n        }\n        if (ch < lineText.length) {\n          // Only include angle brackets in analysis if they are being matched.\n          var re = (ch === '<' || ch === '>') ? /[(){}[\\]<>]/ : /[(){}[\\]]/;\n          var matched = cm.findMatchingBracket(Pos(line, ch), {bracketRegex: re});\n          return matched.to;\n        } else {\n          return cursor;\n        }\n      },\n      moveToStartOfLine: function(_cm, head) {\n        return Pos(head.line, 0);\n      },\n      moveToLineOrEdgeOfDocument: function(cm, _head, motionArgs) {\n        var lineNum = motionArgs.forward ? cm.lastLine() : cm.firstLine();\n        if (motionArgs.repeatIsExplicit) {\n          lineNum = motionArgs.repeat - cm.getOption('firstLineNumber');\n        }\n        return Pos(lineNum,\n                   findFirstNonWhiteSpaceCharacter(cm.getLine(lineNum)));\n      },\n      textObjectManipulation: function(cm, head, motionArgs, vim) {\n        // TODO: lots of possible exceptions that can be thrown here. Try da(\n        //     outside of a () block.\n        var mirroredPairs = {'(': ')', ')': '(',\n                             '{': '}', '}': '{',\n                             '[': ']', ']': '[',\n                             '<': '>', '>': '<'};\n        var selfPaired = {'\\'': true, '\"': true};\n\n        var character = motionArgs.selectedCharacter;\n        // 'b' refers to  '()' block.\n        // 'B' refers to  '{}' block.\n        if (character == 'b') {\n          character = '(';\n        } else if (character == 'B') {\n          character = '{';\n        }\n\n        // Inclusive is the difference between a and i\n        // TODO: Instead of using the additional text object map to perform text\n        //     object operations, merge the map into the defaultKeyMap and use\n        //     motionArgs to define behavior. Define separate entries for 'aw',\n        //     'iw', 'a[', 'i[', etc.\n        var inclusive = !motionArgs.textObjectInner;\n\n        var tmp;\n        if (mirroredPairs[character]) {\n          tmp = selectCompanionObject(cm, head, character, inclusive);\n        } else if (selfPaired[character]) {\n          tmp = findBeginningAndEnd(cm, head, character, inclusive);\n        } else if (character === 'W') {\n          tmp = expandWordUnderCursor(cm, inclusive, true /** forward */,\n                                                     true /** bigWord */);\n        } else if (character === 'w') {\n          tmp = expandWordUnderCursor(cm, inclusive, true /** forward */,\n                                                     false /** bigWord */);\n        } else if (character === 'p') {\n          tmp = findParagraph(cm, head, motionArgs.repeat, 0, inclusive);\n          motionArgs.linewise = true;\n          if (vim.visualMode) {\n            if (!vim.visualLine) { vim.visualLine = true; }\n          } else {\n            var operatorArgs = vim.inputState.operatorArgs;\n            if (operatorArgs) { operatorArgs.linewise = true; }\n            tmp.end.line--;\n          }\n        } else {\n          // No text object defined for this, don't move.\n          return null;\n        }\n\n        if (!cm.state.vim.visualMode) {\n          return [tmp.start, tmp.end];\n        } else {\n          return expandSelection(cm, tmp.start, tmp.end);\n        }\n      },\n\n      repeatLastCharacterSearch: function(cm, head, motionArgs) {\n        var lastSearch = vimGlobalState.lastCharacterSearch;\n        var repeat = motionArgs.repeat;\n        var forward = motionArgs.forward === lastSearch.forward;\n        var increment = (lastSearch.increment ? 1 : 0) * (forward ? -1 : 1);\n        cm.moveH(-increment, 'char');\n        motionArgs.inclusive = forward ? true : false;\n        var curEnd = moveToCharacter(cm, repeat, forward, lastSearch.selectedCharacter);\n        if (!curEnd) {\n          cm.moveH(increment, 'char');\n          return head;\n        }\n        curEnd.ch += increment;\n        return curEnd;\n      }\n    };\n\n    function defineMotion(name, fn) {\n      motions[name] = fn;\n    }\n\n    function fillArray(val, times) {\n      var arr = [];\n      for (var i = 0; i < times; i++) {\n        arr.push(val);\n      }\n      return arr;\n    }\n    /**\n     * An operator acts on a text selection. It receives the list of selections\n     * as input. The corresponding CodeMirror selection is guaranteed to\n    * match the input selection.\n     */\n    var operators = {\n      change: function(cm, args, ranges) {\n        var finalHead, text;\n        var vim = cm.state.vim;\n        vimGlobalState.macroModeState.lastInsertModeChanges.inVisualBlock = vim.visualBlock;\n        if (!vim.visualMode) {\n          var anchor = ranges[0].anchor,\n              head = ranges[0].head;\n          text = cm.getRange(anchor, head);\n          var lastState = vim.lastEditInputState || {};\n          if (lastState.motion == \"moveByWords\" && !isWhiteSpaceString(text)) {\n            // Exclude trailing whitespace if the range is not all whitespace.\n            var match = (/\\s+$/).exec(text);\n            if (match && lastState.motionArgs && lastState.motionArgs.forward) {\n              head = offsetCursor(head, 0, - match[0].length);\n              text = text.slice(0, - match[0].length);\n            }\n          }\n          var prevLineEnd = new Pos(anchor.line - 1, Number.MAX_VALUE);\n          var wasLastLine = cm.firstLine() == cm.lastLine();\n          if (head.line > cm.lastLine() && args.linewise && !wasLastLine) {\n            cm.replaceRange('', prevLineEnd, head);\n          } else {\n            cm.replaceRange('', anchor, head);\n          }\n          if (args.linewise) {\n            // Push the next line back down, if there is a next line.\n            if (!wasLastLine) {\n              cm.setCursor(prevLineEnd);\n              CodeMirror.commands.newlineAndIndent(cm);\n            }\n            // make sure cursor ends up at the end of the line.\n            anchor.ch = Number.MAX_VALUE;\n          }\n          finalHead = anchor;\n        } else {\n          text = cm.getSelection();\n          var replacement = fillArray('', ranges.length);\n          cm.replaceSelections(replacement);\n          finalHead = cursorMin(ranges[0].head, ranges[0].anchor);\n        }\n        vimGlobalState.registerController.pushText(\n            args.registerName, 'change', text,\n            args.linewise, ranges.length > 1);\n        actions.enterInsertMode(cm, {head: finalHead}, cm.state.vim);\n      },\n      // delete is a javascript keyword.\n      'delete': function(cm, args, ranges) {\n        var finalHead, text;\n        var vim = cm.state.vim;\n        if (!vim.visualBlock) {\n          var anchor = ranges[0].anchor,\n              head = ranges[0].head;\n          if (args.linewise &&\n              head.line != cm.firstLine() &&\n              anchor.line == cm.lastLine() &&\n              anchor.line == head.line - 1) {\n            // Special case for dd on last line (and first line).\n            if (anchor.line == cm.firstLine()) {\n              anchor.ch = 0;\n            } else {\n              anchor = Pos(anchor.line - 1, lineLength(cm, anchor.line - 1));\n            }\n          }\n          text = cm.getRange(anchor, head);\n          cm.replaceRange('', anchor, head);\n          finalHead = anchor;\n          if (args.linewise) {\n            finalHead = motions.moveToFirstNonWhiteSpaceCharacter(cm, anchor);\n          }\n        } else {\n          text = cm.getSelection();\n          var replacement = fillArray('', ranges.length);\n          cm.replaceSelections(replacement);\n          finalHead = ranges[0].anchor;\n        }\n        vimGlobalState.registerController.pushText(\n            args.registerName, 'delete', text,\n            args.linewise, vim.visualBlock);\n        var includeLineBreak = vim.insertMode\n        return clipCursorToContent(cm, finalHead, includeLineBreak);\n      },\n      indent: function(cm, args, ranges) {\n        var vim = cm.state.vim;\n        var startLine = ranges[0].anchor.line;\n        var endLine = vim.visualBlock ?\n          ranges[ranges.length - 1].anchor.line :\n          ranges[0].head.line;\n        // In visual mode, n> shifts the selection right n times, instead of\n        // shifting n lines right once.\n        var repeat = (vim.visualMode) ? args.repeat : 1;\n        if (args.linewise) {\n          // The only way to delete a newline is to delete until the start of\n          // the next line, so in linewise mode evalInput will include the next\n          // line. We don't want this in indent, so we go back a line.\n          endLine--;\n        }\n        for (var i = startLine; i <= endLine; i++) {\n          for (var j = 0; j < repeat; j++) {\n            cm.indentLine(i, args.indentRight);\n          }\n        }\n        return motions.moveToFirstNonWhiteSpaceCharacter(cm, ranges[0].anchor);\n      },\n      indentAuto: function(cm, _args, ranges) {\n        cm.execCommand(\"indentAuto\");\n        return motions.moveToFirstNonWhiteSpaceCharacter(cm, ranges[0].anchor);\n      },\n      changeCase: function(cm, args, ranges, oldAnchor, newHead) {\n        var selections = cm.getSelections();\n        var swapped = [];\n        var toLower = args.toLower;\n        for (var j = 0; j < selections.length; j++) {\n          var toSwap = selections[j];\n          var text = '';\n          if (toLower === true) {\n            text = toSwap.toLowerCase();\n          } else if (toLower === false) {\n            text = toSwap.toUpperCase();\n          } else {\n            for (var i = 0; i < toSwap.length; i++) {\n              var character = toSwap.charAt(i);\n              text += isUpperCase(character) ? character.toLowerCase() :\n                  character.toUpperCase();\n            }\n          }\n          swapped.push(text);\n        }\n        cm.replaceSelections(swapped);\n        if (args.shouldMoveCursor){\n          return newHead;\n        } else if (!cm.state.vim.visualMode && args.linewise && ranges[0].anchor.line + 1 == ranges[0].head.line) {\n          return motions.moveToFirstNonWhiteSpaceCharacter(cm, oldAnchor);\n        } else if (args.linewise){\n          return oldAnchor;\n        } else {\n          return cursorMin(ranges[0].anchor, ranges[0].head);\n        }\n      },\n      yank: function(cm, args, ranges, oldAnchor) {\n        var vim = cm.state.vim;\n        var text = cm.getSelection();\n        var endPos = vim.visualMode\n          ? cursorMin(vim.sel.anchor, vim.sel.head, ranges[0].head, ranges[0].anchor)\n          : oldAnchor;\n        vimGlobalState.registerController.pushText(\n            args.registerName, 'yank',\n            text, args.linewise, vim.visualBlock);\n        return endPos;\n      }\n    };\n\n    function defineOperator(name, fn) {\n      operators[name] = fn;\n    }\n\n    var actions = {\n      jumpListWalk: function(cm, actionArgs, vim) {\n        if (vim.visualMode) {\n          return;\n        }\n        var repeat = actionArgs.repeat;\n        var forward = actionArgs.forward;\n        var jumpList = vimGlobalState.jumpList;\n\n        var mark = jumpList.move(cm, forward ? repeat : -repeat);\n        var markPos = mark ? mark.find() : undefined;\n        markPos = markPos ? markPos : cm.getCursor();\n        cm.setCursor(markPos);\n      },\n      scroll: function(cm, actionArgs, vim) {\n        if (vim.visualMode) {\n          return;\n        }\n        var repeat = actionArgs.repeat || 1;\n        var lineHeight = cm.defaultTextHeight();\n        var top = cm.getScrollInfo().top;\n        var delta = lineHeight * repeat;\n        var newPos = actionArgs.forward ? top + delta : top - delta;\n        var cursor = copyCursor(cm.getCursor());\n        var cursorCoords = cm.charCoords(cursor, 'local');\n        if (actionArgs.forward) {\n          if (newPos > cursorCoords.top) {\n             cursor.line += (newPos - cursorCoords.top) / lineHeight;\n             cursor.line = Math.ceil(cursor.line);\n             cm.setCursor(cursor);\n             cursorCoords = cm.charCoords(cursor, 'local');\n             cm.scrollTo(null, cursorCoords.top);\n          } else {\n             // Cursor stays within bounds.  Just reposition the scroll window.\n             cm.scrollTo(null, newPos);\n          }\n        } else {\n          var newBottom = newPos + cm.getScrollInfo().clientHeight;\n          if (newBottom < cursorCoords.bottom) {\n             cursor.line -= (cursorCoords.bottom - newBottom) / lineHeight;\n             cursor.line = Math.floor(cursor.line);\n             cm.setCursor(cursor);\n             cursorCoords = cm.charCoords(cursor, 'local');\n             cm.scrollTo(\n                 null, cursorCoords.bottom - cm.getScrollInfo().clientHeight);\n          } else {\n             // Cursor stays within bounds.  Just reposition the scroll window.\n             cm.scrollTo(null, newPos);\n          }\n        }\n      },\n      scrollToCursor: function(cm, actionArgs) {\n        var lineNum = cm.getCursor().line;\n        var charCoords = cm.charCoords(Pos(lineNum, 0), 'local');\n        var height = cm.getScrollInfo().clientHeight;\n        var y = charCoords.top;\n        var lineHeight = charCoords.bottom - y;\n        switch (actionArgs.position) {\n          case 'center': y = y - (height / 2) + lineHeight;\n            break;\n          case 'bottom': y = y - height + lineHeight;\n            break;\n        }\n        cm.scrollTo(null, y);\n      },\n      replayMacro: function(cm, actionArgs, vim) {\n        var registerName = actionArgs.selectedCharacter;\n        var repeat = actionArgs.repeat;\n        var macroModeState = vimGlobalState.macroModeState;\n        if (registerName == '@') {\n          registerName = macroModeState.latestRegister;\n        }\n        while(repeat--){\n          executeMacroRegister(cm, vim, macroModeState, registerName);\n        }\n      },\n      enterMacroRecordMode: function(cm, actionArgs) {\n        var macroModeState = vimGlobalState.macroModeState;\n        var registerName = actionArgs.selectedCharacter;\n        if (vimGlobalState.registerController.isValidRegister(registerName)) {\n          macroModeState.enterMacroRecordMode(cm, registerName);\n        }\n      },\n      toggleOverwrite: function(cm) {\n        if (!cm.state.overwrite) {\n          cm.toggleOverwrite(true);\n          cm.setOption('keyMap', 'vim-replace');\n          CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"replace\"});\n        } else {\n          cm.toggleOverwrite(false);\n          cm.setOption('keyMap', 'vim-insert');\n          CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"insert\"});\n        }\n      },\n      enterInsertMode: function(cm, actionArgs, vim) {\n        if (cm.getOption('readOnly')) { return; }\n        vim.insertMode = true;\n        vim.insertModeRepeat = actionArgs && actionArgs.repeat || 1;\n        var insertAt = (actionArgs) ? actionArgs.insertAt : null;\n        var sel = vim.sel;\n        var head = actionArgs.head || cm.getCursor('head');\n        var height = cm.listSelections().length;\n        if (insertAt == 'eol') {\n          head = Pos(head.line, lineLength(cm, head.line));\n        } else if (insertAt == 'charAfter') {\n          head = offsetCursor(head, 0, 1);\n        } else if (insertAt == 'firstNonBlank') {\n          head = motions.moveToFirstNonWhiteSpaceCharacter(cm, head);\n        } else if (insertAt == 'startOfSelectedArea') {\n          if (!vim.visualBlock) {\n            if (sel.head.line < sel.anchor.line) {\n              head = sel.head;\n            } else {\n              head = Pos(sel.anchor.line, 0);\n            }\n          } else {\n            head = Pos(\n                Math.min(sel.head.line, sel.anchor.line),\n                Math.min(sel.head.ch, sel.anchor.ch));\n            height = Math.abs(sel.head.line - sel.anchor.line) + 1;\n          }\n        } else if (insertAt == 'endOfSelectedArea') {\n          if (!vim.visualBlock) {\n            if (sel.head.line >= sel.anchor.line) {\n              head = offsetCursor(sel.head, 0, 1);\n            } else {\n              head = Pos(sel.anchor.line, 0);\n            }\n          } else {\n            head = Pos(\n                Math.min(sel.head.line, sel.anchor.line),\n                Math.max(sel.head.ch + 1, sel.anchor.ch));\n            height = Math.abs(sel.head.line - sel.anchor.line) + 1;\n          }\n        } else if (insertAt == 'inplace') {\n          if (vim.visualMode){\n            return;\n          }\n        }\n        cm.setOption('disableInput', false);\n        if (actionArgs && actionArgs.replace) {\n          // Handle Replace-mode as a special case of insert mode.\n          cm.toggleOverwrite(true);\n          cm.setOption('keyMap', 'vim-replace');\n          CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"replace\"});\n        } else {\n          cm.toggleOverwrite(false);\n          cm.setOption('keyMap', 'vim-insert');\n          CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"insert\"});\n        }\n        if (!vimGlobalState.macroModeState.isPlaying) {\n          // Only record if not replaying.\n          cm.on('change', onChange);\n          CodeMirror.on(cm.getInputField(), 'keydown', onKeyEventTargetKeyDown);\n        }\n        if (vim.visualMode) {\n          exitVisualMode(cm);\n        }\n        selectForInsert(cm, head, height);\n      },\n      toggleVisualMode: function(cm, actionArgs, vim) {\n        var repeat = actionArgs.repeat;\n        var anchor = cm.getCursor();\n        var head;\n        // TODO: The repeat should actually select number of characters/lines\n        //     equal to the repeat times the size of the previous visual\n        //     operation.\n        if (!vim.visualMode) {\n          // Entering visual mode\n          vim.visualMode = true;\n          vim.visualLine = !!actionArgs.linewise;\n          vim.visualBlock = !!actionArgs.blockwise;\n          head = clipCursorToContent(\n              cm, Pos(anchor.line, anchor.ch + repeat - 1),\n              true /** includeLineBreak */);\n          vim.sel = {\n            anchor: anchor,\n            head: head\n          };\n          CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"visual\", subMode: vim.visualLine ? \"linewise\" : vim.visualBlock ? \"blockwise\" : \"\"});\n          updateCmSelection(cm);\n          updateMark(cm, vim, '<', cursorMin(anchor, head));\n          updateMark(cm, vim, '>', cursorMax(anchor, head));\n        } else if (vim.visualLine ^ actionArgs.linewise ||\n            vim.visualBlock ^ actionArgs.blockwise) {\n          // Toggling between modes\n          vim.visualLine = !!actionArgs.linewise;\n          vim.visualBlock = !!actionArgs.blockwise;\n          CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"visual\", subMode: vim.visualLine ? \"linewise\" : vim.visualBlock ? \"blockwise\" : \"\"});\n          updateCmSelection(cm);\n        } else {\n          exitVisualMode(cm);\n        }\n      },\n      reselectLastSelection: function(cm, _actionArgs, vim) {\n        var lastSelection = vim.lastSelection;\n        if (vim.visualMode) {\n          updateLastSelection(cm, vim);\n        }\n        if (lastSelection) {\n          var anchor = lastSelection.anchorMark.find();\n          var head = lastSelection.headMark.find();\n          if (!anchor || !head) {\n            // If the marks have been destroyed due to edits, do nothing.\n            return;\n          }\n          vim.sel = {\n            anchor: anchor,\n            head: head\n          };\n          vim.visualMode = true;\n          vim.visualLine = lastSelection.visualLine;\n          vim.visualBlock = lastSelection.visualBlock;\n          updateCmSelection(cm);\n          updateMark(cm, vim, '<', cursorMin(anchor, head));\n          updateMark(cm, vim, '>', cursorMax(anchor, head));\n          CodeMirror.signal(cm, 'vim-mode-change', {\n            mode: 'visual',\n            subMode: vim.visualLine ? 'linewise' :\n                     vim.visualBlock ? 'blockwise' : ''});\n        }\n      },\n      joinLines: function(cm, actionArgs, vim) {\n        var curStart, curEnd;\n        if (vim.visualMode) {\n          curStart = cm.getCursor('anchor');\n          curEnd = cm.getCursor('head');\n          if (cursorIsBefore(curEnd, curStart)) {\n            var tmp = curEnd;\n            curEnd = curStart;\n            curStart = tmp;\n          }\n          curEnd.ch = lineLength(cm, curEnd.line) - 1;\n        } else {\n          // Repeat is the number of lines to join. Minimum 2 lines.\n          var repeat = Math.max(actionArgs.repeat, 2);\n          curStart = cm.getCursor();\n          curEnd = clipCursorToContent(cm, Pos(curStart.line + repeat - 1,\n                                               Infinity));\n        }\n        var finalCh = 0;\n        for (var i = curStart.line; i < curEnd.line; i++) {\n          finalCh = lineLength(cm, curStart.line);\n          var tmp = Pos(curStart.line + 1,\n                        lineLength(cm, curStart.line + 1));\n          var text = cm.getRange(curStart, tmp);\n          text = text.replace(/\\n\\s*/g, ' ');\n          cm.replaceRange(text, curStart, tmp);\n        }\n        var curFinalPos = Pos(curStart.line, finalCh);\n        if (vim.visualMode) {\n          exitVisualMode(cm, false);\n        }\n        cm.setCursor(curFinalPos);\n      },\n      newLineAndEnterInsertMode: function(cm, actionArgs, vim) {\n        vim.insertMode = true;\n        var insertAt = copyCursor(cm.getCursor());\n        if (insertAt.line === cm.firstLine() && !actionArgs.after) {\n          // Special case for inserting newline before start of document.\n          cm.replaceRange('\\n', Pos(cm.firstLine(), 0));\n          cm.setCursor(cm.firstLine(), 0);\n        } else {\n          insertAt.line = (actionArgs.after) ? insertAt.line :\n              insertAt.line - 1;\n          insertAt.ch = lineLength(cm, insertAt.line);\n          cm.setCursor(insertAt);\n          var newlineFn = CodeMirror.commands.newlineAndIndentContinueComment ||\n              CodeMirror.commands.newlineAndIndent;\n          newlineFn(cm);\n        }\n        this.enterInsertMode(cm, { repeat: actionArgs.repeat }, vim);\n      },\n      paste: function(cm, actionArgs, vim) {\n        var cur = copyCursor(cm.getCursor());\n        var register = vimGlobalState.registerController.getRegister(\n            actionArgs.registerName);\n        var text = register.toString();\n        if (!text) {\n          return;\n        }\n        if (actionArgs.matchIndent) {\n          var tabSize = cm.getOption(\"tabSize\");\n          // length that considers tabs and tabSize\n          var whitespaceLength = function(str) {\n            var tabs = (str.split(\"\\t\").length - 1);\n            var spaces = (str.split(\" \").length - 1);\n            return tabs * tabSize + spaces * 1;\n          };\n          var currentLine = cm.getLine(cm.getCursor().line);\n          var indent = whitespaceLength(currentLine.match(/^\\s*/)[0]);\n          // chomp last newline b/c don't want it to match /^\\s*/gm\n          var chompedText = text.replace(/\\n$/, '');\n          var wasChomped = text !== chompedText;\n          var firstIndent = whitespaceLength(text.match(/^\\s*/)[0]);\n          var text = chompedText.replace(/^\\s*/gm, function(wspace) {\n            var newIndent = indent + (whitespaceLength(wspace) - firstIndent);\n            if (newIndent < 0) {\n              return \"\";\n            }\n            else if (cm.getOption(\"indentWithTabs\")) {\n              var quotient = Math.floor(newIndent / tabSize);\n              return Array(quotient + 1).join('\\t');\n            }\n            else {\n              return Array(newIndent + 1).join(' ');\n            }\n          });\n          text += wasChomped ? \"\\n\" : \"\";\n        }\n        if (actionArgs.repeat > 1) {\n          var text = Array(actionArgs.repeat + 1).join(text);\n        }\n        var linewise = register.linewise;\n        var blockwise = register.blockwise;\n        if (linewise) {\n          if(vim.visualMode) {\n            text = vim.visualLine ? text.slice(0, -1) : '\\n' + text.slice(0, text.length - 1) + '\\n';\n          } else if (actionArgs.after) {\n            // Move the newline at the end to the start instead, and paste just\n            // before the newline character of the line we are on right now.\n            text = '\\n' + text.slice(0, text.length - 1);\n            cur.ch = lineLength(cm, cur.line);\n          } else {\n            cur.ch = 0;\n          }\n        } else {\n          if (blockwise) {\n            text = text.split('\\n');\n            for (var i = 0; i < text.length; i++) {\n              text[i] = (text[i] == '') ? ' ' : text[i];\n            }\n          }\n          cur.ch += actionArgs.after ? 1 : 0;\n        }\n        var curPosFinal;\n        var idx;\n        if (vim.visualMode) {\n          //  save the pasted text for reselection if the need arises\n          vim.lastPastedText = text;\n          var lastSelectionCurEnd;\n          var selectedArea = getSelectedAreaRange(cm, vim);\n          var selectionStart = selectedArea[0];\n          var selectionEnd = selectedArea[1];\n          var selectedText = cm.getSelection();\n          var selections = cm.listSelections();\n          var emptyStrings = new Array(selections.length).join('1').split('1');\n          // save the curEnd marker before it get cleared due to cm.replaceRange.\n          if (vim.lastSelection) {\n            lastSelectionCurEnd = vim.lastSelection.headMark.find();\n          }\n          // push the previously selected text to unnamed register\n          vimGlobalState.registerController.unnamedRegister.setText(selectedText);\n          if (blockwise) {\n            // first delete the selected text\n            cm.replaceSelections(emptyStrings);\n            // Set new selections as per the block length of the yanked text\n            selectionEnd = Pos(selectionStart.line + text.length-1, selectionStart.ch);\n            cm.setCursor(selectionStart);\n            selectBlock(cm, selectionEnd);\n            cm.replaceSelections(text);\n            curPosFinal = selectionStart;\n          } else if (vim.visualBlock) {\n            cm.replaceSelections(emptyStrings);\n            cm.setCursor(selectionStart);\n            cm.replaceRange(text, selectionStart, selectionStart);\n            curPosFinal = selectionStart;\n          } else {\n            cm.replaceRange(text, selectionStart, selectionEnd);\n            curPosFinal = cm.posFromIndex(cm.indexFromPos(selectionStart) + text.length - 1);\n          }\n          // restore the the curEnd marker\n          if(lastSelectionCurEnd) {\n            vim.lastSelection.headMark = cm.setBookmark(lastSelectionCurEnd);\n          }\n          if (linewise) {\n            curPosFinal.ch=0;\n          }\n        } else {\n          if (blockwise) {\n            cm.setCursor(cur);\n            for (var i = 0; i < text.length; i++) {\n              var line = cur.line+i;\n              if (line > cm.lastLine()) {\n                cm.replaceRange('\\n',  Pos(line, 0));\n              }\n              var lastCh = lineLength(cm, line);\n              if (lastCh < cur.ch) {\n                extendLineToColumn(cm, line, cur.ch);\n              }\n            }\n            cm.setCursor(cur);\n            selectBlock(cm, Pos(cur.line + text.length-1, cur.ch));\n            cm.replaceSelections(text);\n            curPosFinal = cur;\n          } else {\n            cm.replaceRange(text, cur);\n            // Now fine tune the cursor to where we want it.\n            if (linewise && actionArgs.after) {\n              curPosFinal = Pos(\n              cur.line + 1,\n              findFirstNonWhiteSpaceCharacter(cm.getLine(cur.line + 1)));\n            } else if (linewise && !actionArgs.after) {\n              curPosFinal = Pos(\n                cur.line,\n                findFirstNonWhiteSpaceCharacter(cm.getLine(cur.line)));\n            } else if (!linewise && actionArgs.after) {\n              idx = cm.indexFromPos(cur);\n              curPosFinal = cm.posFromIndex(idx + text.length - 1);\n            } else {\n              idx = cm.indexFromPos(cur);\n              curPosFinal = cm.posFromIndex(idx + text.length);\n            }\n          }\n        }\n        if (vim.visualMode) {\n          exitVisualMode(cm, false);\n        }\n        cm.setCursor(curPosFinal);\n      },\n      undo: function(cm, actionArgs) {\n        cm.operation(function() {\n          repeatFn(cm, CodeMirror.commands.undo, actionArgs.repeat)();\n          cm.setCursor(cm.getCursor('anchor'));\n        });\n      },\n      redo: function(cm, actionArgs) {\n        repeatFn(cm, CodeMirror.commands.redo, actionArgs.repeat)();\n      },\n      setRegister: function(_cm, actionArgs, vim) {\n        vim.inputState.registerName = actionArgs.selectedCharacter;\n      },\n      setMark: function(cm, actionArgs, vim) {\n        var markName = actionArgs.selectedCharacter;\n        updateMark(cm, vim, markName, cm.getCursor());\n      },\n      replace: function(cm, actionArgs, vim) {\n        var replaceWith = actionArgs.selectedCharacter;\n        var curStart = cm.getCursor();\n        var replaceTo;\n        var curEnd;\n        var selections = cm.listSelections();\n        if (vim.visualMode) {\n          curStart = cm.getCursor('start');\n          curEnd = cm.getCursor('end');\n        } else {\n          var line = cm.getLine(curStart.line);\n          replaceTo = curStart.ch + actionArgs.repeat;\n          if (replaceTo > line.length) {\n            replaceTo=line.length;\n          }\n          curEnd = Pos(curStart.line, replaceTo);\n        }\n        if (replaceWith=='\\n') {\n          if (!vim.visualMode) cm.replaceRange('', curStart, curEnd);\n          // special case, where vim help says to replace by just one line-break\n          (CodeMirror.commands.newlineAndIndentContinueComment || CodeMirror.commands.newlineAndIndent)(cm);\n        } else {\n          var replaceWithStr = cm.getRange(curStart, curEnd);\n          //replace all characters in range by selected, but keep linebreaks\n          replaceWithStr = replaceWithStr.replace(/[^\\n]/g, replaceWith);\n          if (vim.visualBlock) {\n            // Tabs are split in visua block before replacing\n            var spaces = new Array(cm.getOption(\"tabSize\")+1).join(' ');\n            replaceWithStr = cm.getSelection();\n            replaceWithStr = replaceWithStr.replace(/\\t/g, spaces).replace(/[^\\n]/g, replaceWith).split('\\n');\n            cm.replaceSelections(replaceWithStr);\n          } else {\n            cm.replaceRange(replaceWithStr, curStart, curEnd);\n          }\n          if (vim.visualMode) {\n            curStart = cursorIsBefore(selections[0].anchor, selections[0].head) ?\n                         selections[0].anchor : selections[0].head;\n            cm.setCursor(curStart);\n            exitVisualMode(cm, false);\n          } else {\n            cm.setCursor(offsetCursor(curEnd, 0, -1));\n          }\n        }\n      },\n      incrementNumberToken: function(cm, actionArgs) {\n        var cur = cm.getCursor();\n        var lineStr = cm.getLine(cur.line);\n        var re = /(-?)(?:(0x)([\\da-f]+)|(0b|0|)(\\d+))/gi;\n        var match;\n        var start;\n        var end;\n        var numberStr;\n        while ((match = re.exec(lineStr)) !== null) {\n          start = match.index;\n          end = start + match[0].length;\n          if (cur.ch < end)break;\n        }\n        if (!actionArgs.backtrack && (end <= cur.ch))return;\n        if (match) {\n          var baseStr = match[2] || match[4]\n          var digits = match[3] || match[5]\n          var increment = actionArgs.increase ? 1 : -1;\n          var base = {'0b': 2, '0': 8, '': 10, '0x': 16}[baseStr.toLowerCase()];\n          var number = parseInt(match[1] + digits, base) + (increment * actionArgs.repeat);\n          numberStr = number.toString(base);\n          var zeroPadding = baseStr ? new Array(digits.length - numberStr.length + 1 + match[1].length).join('0') : ''\n          if (numberStr.charAt(0) === '-') {\n            numberStr = '-' + baseStr + zeroPadding + numberStr.substr(1);\n          } else {\n            numberStr = baseStr + zeroPadding + numberStr;\n          }\n          var from = Pos(cur.line, start);\n          var to = Pos(cur.line, end);\n          cm.replaceRange(numberStr, from, to);\n        } else {\n          return;\n        }\n        cm.setCursor(Pos(cur.line, start + numberStr.length - 1));\n      },\n      repeatLastEdit: function(cm, actionArgs, vim) {\n        var lastEditInputState = vim.lastEditInputState;\n        if (!lastEditInputState) { return; }\n        var repeat = actionArgs.repeat;\n        if (repeat && actionArgs.repeatIsExplicit) {\n          vim.lastEditInputState.repeatOverride = repeat;\n        } else {\n          repeat = vim.lastEditInputState.repeatOverride || repeat;\n        }\n        repeatLastEdit(cm, vim, repeat, false /** repeatForInsert */);\n      },\n      indent: function(cm, actionArgs) {\n        cm.indentLine(cm.getCursor().line, actionArgs.indentRight);\n      },\n      exitInsertMode: exitInsertMode\n    };\n\n    function defineAction(name, fn) {\n      actions[name] = fn;\n    }\n\n    /*\n     * Below are miscellaneous utility functions used by vim.js\n     */\n\n    /**\n     * Clips cursor to ensure that line is within the buffer's range\n     * If includeLineBreak is true, then allow cur.ch == lineLength.\n     */\n    function clipCursorToContent(cm, cur, includeLineBreak) {\n      var line = Math.min(Math.max(cm.firstLine(), cur.line), cm.lastLine() );\n      var maxCh = lineLength(cm, line) - 1;\n      maxCh = (includeLineBreak) ? maxCh + 1 : maxCh;\n      var ch = Math.min(Math.max(0, cur.ch), maxCh);\n      return Pos(line, ch);\n    }\n    function copyArgs(args) {\n      var ret = {};\n      for (var prop in args) {\n        if (args.hasOwnProperty(prop)) {\n          ret[prop] = args[prop];\n        }\n      }\n      return ret;\n    }\n    function offsetCursor(cur, offsetLine, offsetCh) {\n      if (typeof offsetLine === 'object') {\n        offsetCh = offsetLine.ch;\n        offsetLine = offsetLine.line;\n      }\n      return Pos(cur.line + offsetLine, cur.ch + offsetCh);\n    }\n    function getOffset(anchor, head) {\n      return {\n        line: head.line - anchor.line,\n        ch: head.line - anchor.line\n      };\n    }\n    function commandMatches(keys, keyMap, context, inputState) {\n      // Partial matches are not applied. They inform the key handler\n      // that the current key sequence is a subsequence of a valid key\n      // sequence, so that the key buffer is not cleared.\n      var match, partial = [], full = [];\n      for (var i = 0; i < keyMap.length; i++) {\n        var command = keyMap[i];\n        if (context == 'insert' && command.context != 'insert' ||\n            command.context && command.context != context ||\n            inputState.operator && command.type == 'action' ||\n            !(match = commandMatch(keys, command.keys))) { continue; }\n        if (match == 'partial') { partial.push(command); }\n        if (match == 'full') { full.push(command); }\n      }\n      return {\n        partial: partial.length && partial,\n        full: full.length && full\n      };\n    }\n    function commandMatch(pressed, mapped) {\n      if (mapped.slice(-11) == '<character>') {\n        // Last character matches anything.\n        var prefixLen = mapped.length - 11;\n        var pressedPrefix = pressed.slice(0, prefixLen);\n        var mappedPrefix = mapped.slice(0, prefixLen);\n        return pressedPrefix == mappedPrefix && pressed.length > prefixLen ? 'full' :\n               mappedPrefix.indexOf(pressedPrefix) == 0 ? 'partial' : false;\n      } else {\n        return pressed == mapped ? 'full' :\n               mapped.indexOf(pressed) == 0 ? 'partial' : false;\n      }\n    }\n    function lastChar(keys) {\n      var match = /^.*(<[^>]+>)$/.exec(keys);\n      var selectedCharacter = match ? match[1] : keys.slice(-1);\n      if (selectedCharacter.length > 1){\n        switch(selectedCharacter){\n          case '<CR>':\n            selectedCharacter='\\n';\n            break;\n          case '<Space>':\n            selectedCharacter=' ';\n            break;\n          default:\n            selectedCharacter='';\n            break;\n        }\n      }\n      return selectedCharacter;\n    }\n    function repeatFn(cm, fn, repeat) {\n      return function() {\n        for (var i = 0; i < repeat; i++) {\n          fn(cm);\n        }\n      };\n    }\n    function copyCursor(cur) {\n      return Pos(cur.line, cur.ch);\n    }\n    function cursorEqual(cur1, cur2) {\n      return cur1.ch == cur2.ch && cur1.line == cur2.line;\n    }\n    function cursorIsBefore(cur1, cur2) {\n      if (cur1.line < cur2.line) {\n        return true;\n      }\n      if (cur1.line == cur2.line && cur1.ch < cur2.ch) {\n        return true;\n      }\n      return false;\n    }\n    function cursorMin(cur1, cur2) {\n      if (arguments.length > 2) {\n        cur2 = cursorMin.apply(undefined, Array.prototype.slice.call(arguments, 1));\n      }\n      return cursorIsBefore(cur1, cur2) ? cur1 : cur2;\n    }\n    function cursorMax(cur1, cur2) {\n      if (arguments.length > 2) {\n        cur2 = cursorMax.apply(undefined, Array.prototype.slice.call(arguments, 1));\n      }\n      return cursorIsBefore(cur1, cur2) ? cur2 : cur1;\n    }\n    function cursorIsBetween(cur1, cur2, cur3) {\n      // returns true if cur2 is between cur1 and cur3.\n      var cur1before2 = cursorIsBefore(cur1, cur2);\n      var cur2before3 = cursorIsBefore(cur2, cur3);\n      return cur1before2 && cur2before3;\n    }\n    function lineLength(cm, lineNum) {\n      return cm.getLine(lineNum).length;\n    }\n    function trim(s) {\n      if (s.trim) {\n        return s.trim();\n      }\n      return s.replace(/^\\s+|\\s+$/g, '');\n    }\n    function escapeRegex(s) {\n      return s.replace(/([.?*+$\\[\\]\\/\\\\(){}|\\-])/g, '\\\\$1');\n    }\n    function extendLineToColumn(cm, lineNum, column) {\n      var endCh = lineLength(cm, lineNum);\n      var spaces = new Array(column-endCh+1).join(' ');\n      cm.setCursor(Pos(lineNum, endCh));\n      cm.replaceRange(spaces, cm.getCursor());\n    }\n    // This functions selects a rectangular block\n    // of text with selectionEnd as any of its corner\n    // Height of block:\n    // Difference in selectionEnd.line and first/last selection.line\n    // Width of the block:\n    // Distance between selectionEnd.ch and any(first considered here) selection.ch\n    function selectBlock(cm, selectionEnd) {\n      var selections = [], ranges = cm.listSelections();\n      var head = copyCursor(cm.clipPos(selectionEnd));\n      var isClipped = !cursorEqual(selectionEnd, head);\n      var curHead = cm.getCursor('head');\n      var primIndex = getIndex(ranges, curHead);\n      var wasClipped = cursorEqual(ranges[primIndex].head, ranges[primIndex].anchor);\n      var max = ranges.length - 1;\n      var index = max - primIndex > primIndex ? max : 0;\n      var base = ranges[index].anchor;\n\n      var firstLine = Math.min(base.line, head.line);\n      var lastLine = Math.max(base.line, head.line);\n      var baseCh = base.ch, headCh = head.ch;\n\n      var dir = ranges[index].head.ch - baseCh;\n      var newDir = headCh - baseCh;\n      if (dir > 0 && newDir <= 0) {\n        baseCh++;\n        if (!isClipped) { headCh--; }\n      } else if (dir < 0 && newDir >= 0) {\n        baseCh--;\n        if (!wasClipped) { headCh++; }\n      } else if (dir < 0 && newDir == -1) {\n        baseCh--;\n        headCh++;\n      }\n      for (var line = firstLine; line <= lastLine; line++) {\n        var range = {anchor: new Pos(line, baseCh), head: new Pos(line, headCh)};\n        selections.push(range);\n      }\n      cm.setSelections(selections);\n      selectionEnd.ch = headCh;\n      base.ch = baseCh;\n      return base;\n    }\n    function selectForInsert(cm, head, height) {\n      var sel = [];\n      for (var i = 0; i < height; i++) {\n        var lineHead = offsetCursor(head, i, 0);\n        sel.push({anchor: lineHead, head: lineHead});\n      }\n      cm.setSelections(sel, 0);\n    }\n    // getIndex returns the index of the cursor in the selections.\n    function getIndex(ranges, cursor, end) {\n      for (var i = 0; i < ranges.length; i++) {\n        var atAnchor = end != 'head' && cursorEqual(ranges[i].anchor, cursor);\n        var atHead = end != 'anchor' && cursorEqual(ranges[i].head, cursor);\n        if (atAnchor || atHead) {\n          return i;\n        }\n      }\n      return -1;\n    }\n    function getSelectedAreaRange(cm, vim) {\n      var lastSelection = vim.lastSelection;\n      var getCurrentSelectedAreaRange = function() {\n        var selections = cm.listSelections();\n        var start =  selections[0];\n        var end = selections[selections.length-1];\n        var selectionStart = cursorIsBefore(start.anchor, start.head) ? start.anchor : start.head;\n        var selectionEnd = cursorIsBefore(end.anchor, end.head) ? end.head : end.anchor;\n        return [selectionStart, selectionEnd];\n      };\n      var getLastSelectedAreaRange = function() {\n        var selectionStart = cm.getCursor();\n        var selectionEnd = cm.getCursor();\n        var block = lastSelection.visualBlock;\n        if (block) {\n          var width = block.width;\n          var height = block.height;\n          selectionEnd = Pos(selectionStart.line + height, selectionStart.ch + width);\n          var selections = [];\n          // selectBlock creates a 'proper' rectangular block.\n          // We do not want that in all cases, so we manually set selections.\n          for (var i = selectionStart.line; i < selectionEnd.line; i++) {\n            var anchor = Pos(i, selectionStart.ch);\n            var head = Pos(i, selectionEnd.ch);\n            var range = {anchor: anchor, head: head};\n            selections.push(range);\n          }\n          cm.setSelections(selections);\n        } else {\n          var start = lastSelection.anchorMark.find();\n          var end = lastSelection.headMark.find();\n          var line = end.line - start.line;\n          var ch = end.ch - start.ch;\n          selectionEnd = {line: selectionEnd.line + line, ch: line ? selectionEnd.ch : ch + selectionEnd.ch};\n          if (lastSelection.visualLine) {\n            selectionStart = Pos(selectionStart.line, 0);\n            selectionEnd = Pos(selectionEnd.line, lineLength(cm, selectionEnd.line));\n          }\n          cm.setSelection(selectionStart, selectionEnd);\n        }\n        return [selectionStart, selectionEnd];\n      };\n      if (!vim.visualMode) {\n      // In case of replaying the action.\n        return getLastSelectedAreaRange();\n      } else {\n        return getCurrentSelectedAreaRange();\n      }\n    }\n    // Updates the previous selection with the current selection's values. This\n    // should only be called in visual mode.\n    function updateLastSelection(cm, vim) {\n      var anchor = vim.sel.anchor;\n      var head = vim.sel.head;\n      // To accommodate the effect of lastPastedText in the last selection\n      if (vim.lastPastedText) {\n        head = cm.posFromIndex(cm.indexFromPos(anchor) + vim.lastPastedText.length);\n        vim.lastPastedText = null;\n      }\n      vim.lastSelection = {'anchorMark': cm.setBookmark(anchor),\n                           'headMark': cm.setBookmark(head),\n                           'anchor': copyCursor(anchor),\n                           'head': copyCursor(head),\n                           'visualMode': vim.visualMode,\n                           'visualLine': vim.visualLine,\n                           'visualBlock': vim.visualBlock};\n    }\n    function expandSelection(cm, start, end) {\n      var sel = cm.state.vim.sel;\n      var head = sel.head;\n      var anchor = sel.anchor;\n      var tmp;\n      if (cursorIsBefore(end, start)) {\n        tmp = end;\n        end = start;\n        start = tmp;\n      }\n      if (cursorIsBefore(head, anchor)) {\n        head = cursorMin(start, head);\n        anchor = cursorMax(anchor, end);\n      } else {\n        anchor = cursorMin(start, anchor);\n        head = cursorMax(head, end);\n        head = offsetCursor(head, 0, -1);\n        if (head.ch == -1 && head.line != cm.firstLine()) {\n          head = Pos(head.line - 1, lineLength(cm, head.line - 1));\n        }\n      }\n      return [anchor, head];\n    }\n    /**\n     * Updates the CodeMirror selection to match the provided vim selection.\n     * If no arguments are given, it uses the current vim selection state.\n     */\n    function updateCmSelection(cm, sel, mode) {\n      var vim = cm.state.vim;\n      sel = sel || vim.sel;\n      var mode = mode ||\n        vim.visualLine ? 'line' : vim.visualBlock ? 'block' : 'char';\n      var cmSel = makeCmSelection(cm, sel, mode);\n      cm.setSelections(cmSel.ranges, cmSel.primary);\n      updateFakeCursor(cm);\n    }\n    function makeCmSelection(cm, sel, mode, exclusive) {\n      var head = copyCursor(sel.head);\n      var anchor = copyCursor(sel.anchor);\n      if (mode == 'char') {\n        var headOffset = !exclusive && !cursorIsBefore(sel.head, sel.anchor) ? 1 : 0;\n        var anchorOffset = cursorIsBefore(sel.head, sel.anchor) ? 1 : 0;\n        head = offsetCursor(sel.head, 0, headOffset);\n        anchor = offsetCursor(sel.anchor, 0, anchorOffset);\n        return {\n          ranges: [{anchor: anchor, head: head}],\n          primary: 0\n        };\n      } else if (mode == 'line') {\n        if (!cursorIsBefore(sel.head, sel.anchor)) {\n          anchor.ch = 0;\n\n          var lastLine = cm.lastLine();\n          if (head.line > lastLine) {\n            head.line = lastLine;\n          }\n          head.ch = lineLength(cm, head.line);\n        } else {\n          head.ch = 0;\n          anchor.ch = lineLength(cm, anchor.line);\n        }\n        return {\n          ranges: [{anchor: anchor, head: head}],\n          primary: 0\n        };\n      } else if (mode == 'block') {\n        var top = Math.min(anchor.line, head.line),\n            left = Math.min(anchor.ch, head.ch),\n            bottom = Math.max(anchor.line, head.line),\n            right = Math.max(anchor.ch, head.ch) + 1;\n        var height = bottom - top + 1;\n        var primary = head.line == top ? 0 : height - 1;\n        var ranges = [];\n        for (var i = 0; i < height; i++) {\n          ranges.push({\n            anchor: Pos(top + i, left),\n            head: Pos(top + i, right)\n          });\n        }\n        return {\n          ranges: ranges,\n          primary: primary\n        };\n      }\n    }\n    function getHead(cm) {\n      var cur = cm.getCursor('head');\n      if (cm.getSelection().length == 1) {\n        // Small corner case when only 1 character is selected. The \"real\"\n        // head is the left of head and anchor.\n        cur = cursorMin(cur, cm.getCursor('anchor'));\n      }\n      return cur;\n    }\n\n    /**\n     * If moveHead is set to false, the CodeMirror selection will not be\n     * touched. The caller assumes the responsibility of putting the cursor\n    * in the right place.\n     */\n    function exitVisualMode(cm, moveHead) {\n      var vim = cm.state.vim;\n      if (moveHead !== false) {\n        cm.setCursor(clipCursorToContent(cm, vim.sel.head));\n      }\n      updateLastSelection(cm, vim);\n      vim.visualMode = false;\n      vim.visualLine = false;\n      vim.visualBlock = false;\n      CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"normal\"});\n      if (vim.fakeCursor) {\n        vim.fakeCursor.clear();\n      }\n    }\n\n    // Remove any trailing newlines from the selection. For\n    // example, with the caret at the start of the last word on the line,\n    // 'dw' should word, but not the newline, while 'w' should advance the\n    // caret to the first character of the next line.\n    function clipToLine(cm, curStart, curEnd) {\n      var selection = cm.getRange(curStart, curEnd);\n      // Only clip if the selection ends with trailing newline + whitespace\n      if (/\\n\\s*$/.test(selection)) {\n        var lines = selection.split('\\n');\n        // We know this is all whitespace.\n        lines.pop();\n\n        // Cases:\n        // 1. Last word is an empty line - do not clip the trailing '\\n'\n        // 2. Last word is not an empty line - clip the trailing '\\n'\n        var line;\n        // Find the line containing the last word, and clip all whitespace up\n        // to it.\n        for (var line = lines.pop(); lines.length > 0 && line && isWhiteSpaceString(line); line = lines.pop()) {\n          curEnd.line--;\n          curEnd.ch = 0;\n        }\n        // If the last word is not an empty line, clip an additional newline\n        if (line) {\n          curEnd.line--;\n          curEnd.ch = lineLength(cm, curEnd.line);\n        } else {\n          curEnd.ch = 0;\n        }\n      }\n    }\n\n    // Expand the selection to line ends.\n    function expandSelectionToLine(_cm, curStart, curEnd) {\n      curStart.ch = 0;\n      curEnd.ch = 0;\n      curEnd.line++;\n    }\n\n    function findFirstNonWhiteSpaceCharacter(text) {\n      if (!text) {\n        return 0;\n      }\n      var firstNonWS = text.search(/\\S/);\n      return firstNonWS == -1 ? text.length : firstNonWS;\n    }\n\n    function expandWordUnderCursor(cm, inclusive, _forward, bigWord, noSymbol) {\n      var cur = getHead(cm);\n      var line = cm.getLine(cur.line);\n      var idx = cur.ch;\n\n      // Seek to first word or non-whitespace character, depending on if\n      // noSymbol is true.\n      var test = noSymbol ? wordCharTest[0] : bigWordCharTest [0];\n      while (!test(line.charAt(idx))) {\n        idx++;\n        if (idx >= line.length) { return null; }\n      }\n\n      if (bigWord) {\n        test = bigWordCharTest[0];\n      } else {\n        test = wordCharTest[0];\n        if (!test(line.charAt(idx))) {\n          test = wordCharTest[1];\n        }\n      }\n\n      var end = idx, start = idx;\n      while (test(line.charAt(end)) && end < line.length) { end++; }\n      while (test(line.charAt(start)) && start >= 0) { start--; }\n      start++;\n\n      if (inclusive) {\n        // If present, include all whitespace after word.\n        // Otherwise, include all whitespace before word, except indentation.\n        var wordEnd = end;\n        while (/\\s/.test(line.charAt(end)) && end < line.length) { end++; }\n        if (wordEnd == end) {\n          var wordStart = start;\n          while (/\\s/.test(line.charAt(start - 1)) && start > 0) { start--; }\n          if (!start) { start = wordStart; }\n        }\n      }\n      return { start: Pos(cur.line, start), end: Pos(cur.line, end) };\n    }\n\n    function recordJumpPosition(cm, oldCur, newCur) {\n      if (!cursorEqual(oldCur, newCur)) {\n        vimGlobalState.jumpList.add(cm, oldCur, newCur);\n      }\n    }\n\n    function recordLastCharacterSearch(increment, args) {\n        vimGlobalState.lastCharacterSearch.increment = increment;\n        vimGlobalState.lastCharacterSearch.forward = args.forward;\n        vimGlobalState.lastCharacterSearch.selectedCharacter = args.selectedCharacter;\n    }\n\n    var symbolToMode = {\n        '(': 'bracket', ')': 'bracket', '{': 'bracket', '}': 'bracket',\n        '[': 'section', ']': 'section',\n        '*': 'comment', '/': 'comment',\n        'm': 'method', 'M': 'method',\n        '#': 'preprocess'\n    };\n    var findSymbolModes = {\n      bracket: {\n        isComplete: function(state) {\n          if (state.nextCh === state.symb) {\n            state.depth++;\n            if (state.depth >= 1)return true;\n          } else if (state.nextCh === state.reverseSymb) {\n            state.depth--;\n          }\n          return false;\n        }\n      },\n      section: {\n        init: function(state) {\n          state.curMoveThrough = true;\n          state.symb = (state.forward ? ']' : '[') === state.symb ? '{' : '}';\n        },\n        isComplete: function(state) {\n          return state.index === 0 && state.nextCh === state.symb;\n        }\n      },\n      comment: {\n        isComplete: function(state) {\n          var found = state.lastCh === '*' && state.nextCh === '/';\n          state.lastCh = state.nextCh;\n          return found;\n        }\n      },\n      // TODO: The original Vim implementation only operates on level 1 and 2.\n      // The current implementation doesn't check for code block level and\n      // therefore it operates on any levels.\n      method: {\n        init: function(state) {\n          state.symb = (state.symb === 'm' ? '{' : '}');\n          state.reverseSymb = state.symb === '{' ? '}' : '{';\n        },\n        isComplete: function(state) {\n          if (state.nextCh === state.symb)return true;\n          return false;\n        }\n      },\n      preprocess: {\n        init: function(state) {\n          state.index = 0;\n        },\n        isComplete: function(state) {\n          if (state.nextCh === '#') {\n            var token = state.lineText.match(/#(\\w+)/)[1];\n            if (token === 'endif') {\n              if (state.forward && state.depth === 0) {\n                return true;\n              }\n              state.depth++;\n            } else if (token === 'if') {\n              if (!state.forward && state.depth === 0) {\n                return true;\n              }\n              state.depth--;\n            }\n            if (token === 'else' && state.depth === 0)return true;\n          }\n          return false;\n        }\n      }\n    };\n    function findSymbol(cm, repeat, forward, symb) {\n      var cur = copyCursor(cm.getCursor());\n      var increment = forward ? 1 : -1;\n      var endLine = forward ? cm.lineCount() : -1;\n      var curCh = cur.ch;\n      var line = cur.line;\n      var lineText = cm.getLine(line);\n      var state = {\n        lineText: lineText,\n        nextCh: lineText.charAt(curCh),\n        lastCh: null,\n        index: curCh,\n        symb: symb,\n        reverseSymb: (forward ?  { ')': '(', '}': '{' } : { '(': ')', '{': '}' })[symb],\n        forward: forward,\n        depth: 0,\n        curMoveThrough: false\n      };\n      var mode = symbolToMode[symb];\n      if (!mode)return cur;\n      var init = findSymbolModes[mode].init;\n      var isComplete = findSymbolModes[mode].isComplete;\n      if (init) { init(state); }\n      while (line !== endLine && repeat) {\n        state.index += increment;\n        state.nextCh = state.lineText.charAt(state.index);\n        if (!state.nextCh) {\n          line += increment;\n          state.lineText = cm.getLine(line) || '';\n          if (increment > 0) {\n            state.index = 0;\n          } else {\n            var lineLen = state.lineText.length;\n            state.index = (lineLen > 0) ? (lineLen-1) : 0;\n          }\n          state.nextCh = state.lineText.charAt(state.index);\n        }\n        if (isComplete(state)) {\n          cur.line = line;\n          cur.ch = state.index;\n          repeat--;\n        }\n      }\n      if (state.nextCh || state.curMoveThrough) {\n        return Pos(line, state.index);\n      }\n      return cur;\n    }\n\n    /*\n     * Returns the boundaries of the next word. If the cursor in the middle of\n     * the word, then returns the boundaries of the current word, starting at\n     * the cursor. If the cursor is at the start/end of a word, and we are going\n     * forward/backward, respectively, find the boundaries of the next word.\n     *\n     * @param {CodeMirror} cm CodeMirror object.\n     * @param {Cursor} cur The cursor position.\n     * @param {boolean} forward True to search forward. False to search\n     *     backward.\n     * @param {boolean} bigWord True if punctuation count as part of the word.\n     *     False if only [a-zA-Z0-9] characters count as part of the word.\n     * @param {boolean} emptyLineIsWord True if empty lines should be treated\n     *     as words.\n     * @return {Object{from:number, to:number, line: number}} The boundaries of\n     *     the word, or null if there are no more words.\n     */\n    function findWord(cm, cur, forward, bigWord, emptyLineIsWord) {\n      var lineNum = cur.line;\n      var pos = cur.ch;\n      var line = cm.getLine(lineNum);\n      var dir = forward ? 1 : -1;\n      var charTests = bigWord ? bigWordCharTest: wordCharTest;\n\n      if (emptyLineIsWord && line == '') {\n        lineNum += dir;\n        line = cm.getLine(lineNum);\n        if (!isLine(cm, lineNum)) {\n          return null;\n        }\n        pos = (forward) ? 0 : line.length;\n      }\n\n      while (true) {\n        if (emptyLineIsWord && line == '') {\n          return { from: 0, to: 0, line: lineNum };\n        }\n        var stop = (dir > 0) ? line.length : -1;\n        var wordStart = stop, wordEnd = stop;\n        // Find bounds of next word.\n        while (pos != stop) {\n          var foundWord = false;\n          for (var i = 0; i < charTests.length && !foundWord; ++i) {\n            if (charTests[i](line.charAt(pos))) {\n              wordStart = pos;\n              // Advance to end of word.\n              while (pos != stop && charTests[i](line.charAt(pos))) {\n                pos += dir;\n              }\n              wordEnd = pos;\n              foundWord = wordStart != wordEnd;\n              if (wordStart == cur.ch && lineNum == cur.line &&\n                  wordEnd == wordStart + dir) {\n                // We started at the end of a word. Find the next one.\n                continue;\n              } else {\n                return {\n                  from: Math.min(wordStart, wordEnd + 1),\n                  to: Math.max(wordStart, wordEnd),\n                  line: lineNum };\n              }\n            }\n          }\n          if (!foundWord) {\n            pos += dir;\n          }\n        }\n        // Advance to next/prev line.\n        lineNum += dir;\n        if (!isLine(cm, lineNum)) {\n          return null;\n        }\n        line = cm.getLine(lineNum);\n        pos = (dir > 0) ? 0 : line.length;\n      }\n    }\n\n    /**\n     * @param {CodeMirror} cm CodeMirror object.\n     * @param {Pos} cur The position to start from.\n     * @param {int} repeat Number of words to move past.\n     * @param {boolean} forward True to search forward. False to search\n     *     backward.\n     * @param {boolean} wordEnd True to move to end of word. False to move to\n     *     beginning of word.\n     * @param {boolean} bigWord True if punctuation count as part of the word.\n     *     False if only alphabet characters count as part of the word.\n     * @return {Cursor} The position the cursor should move to.\n     */\n    function moveToWord(cm, cur, repeat, forward, wordEnd, bigWord) {\n      var curStart = copyCursor(cur);\n      var words = [];\n      if (forward && !wordEnd || !forward && wordEnd) {\n        repeat++;\n      }\n      // For 'e', empty lines are not considered words, go figure.\n      var emptyLineIsWord = !(forward && wordEnd);\n      for (var i = 0; i < repeat; i++) {\n        var word = findWord(cm, cur, forward, bigWord, emptyLineIsWord);\n        if (!word) {\n          var eodCh = lineLength(cm, cm.lastLine());\n          words.push(forward\n              ? {line: cm.lastLine(), from: eodCh, to: eodCh}\n              : {line: 0, from: 0, to: 0});\n          break;\n        }\n        words.push(word);\n        cur = Pos(word.line, forward ? (word.to - 1) : word.from);\n      }\n      var shortCircuit = words.length != repeat;\n      var firstWord = words[0];\n      var lastWord = words.pop();\n      if (forward && !wordEnd) {\n        // w\n        if (!shortCircuit && (firstWord.from != curStart.ch || firstWord.line != curStart.line)) {\n          // We did not start in the middle of a word. Discard the extra word at the end.\n          lastWord = words.pop();\n        }\n        return Pos(lastWord.line, lastWord.from);\n      } else if (forward && wordEnd) {\n        return Pos(lastWord.line, lastWord.to - 1);\n      } else if (!forward && wordEnd) {\n        // ge\n        if (!shortCircuit && (firstWord.to != curStart.ch || firstWord.line != curStart.line)) {\n          // We did not start in the middle of a word. Discard the extra word at the end.\n          lastWord = words.pop();\n        }\n        return Pos(lastWord.line, lastWord.to);\n      } else {\n        // b\n        return Pos(lastWord.line, lastWord.from);\n      }\n    }\n\n    function moveToCharacter(cm, repeat, forward, character) {\n      var cur = cm.getCursor();\n      var start = cur.ch;\n      var idx;\n      for (var i = 0; i < repeat; i ++) {\n        var line = cm.getLine(cur.line);\n        idx = charIdxInLine(start, line, character, forward, true);\n        if (idx == -1) {\n          return null;\n        }\n        start = idx;\n      }\n      return Pos(cm.getCursor().line, idx);\n    }\n\n    function moveToColumn(cm, repeat) {\n      // repeat is always >= 1, so repeat - 1 always corresponds\n      // to the column we want to go to.\n      var line = cm.getCursor().line;\n      return clipCursorToContent(cm, Pos(line, repeat - 1));\n    }\n\n    function updateMark(cm, vim, markName, pos) {\n      if (!inArray(markName, validMarks)) {\n        return;\n      }\n      if (vim.marks[markName]) {\n        vim.marks[markName].clear();\n      }\n      vim.marks[markName] = cm.setBookmark(pos);\n    }\n\n    function charIdxInLine(start, line, character, forward, includeChar) {\n      // Search for char in line.\n      // motion_options: {forward, includeChar}\n      // If includeChar = true, include it too.\n      // If forward = true, search forward, else search backwards.\n      // If char is not found on this line, do nothing\n      var idx;\n      if (forward) {\n        idx = line.indexOf(character, start + 1);\n        if (idx != -1 && !includeChar) {\n          idx -= 1;\n        }\n      } else {\n        idx = line.lastIndexOf(character, start - 1);\n        if (idx != -1 && !includeChar) {\n          idx += 1;\n        }\n      }\n      return idx;\n    }\n\n    function findParagraph(cm, head, repeat, dir, inclusive) {\n      var line = head.line;\n      var min = cm.firstLine();\n      var max = cm.lastLine();\n      var start, end, i = line;\n      function isEmpty(i) { return !cm.getLine(i); }\n      function isBoundary(i, dir, any) {\n        if (any) { return isEmpty(i) != isEmpty(i + dir); }\n        return !isEmpty(i) && isEmpty(i + dir);\n      }\n      if (dir) {\n        while (min <= i && i <= max && repeat > 0) {\n          if (isBoundary(i, dir)) { repeat--; }\n          i += dir;\n        }\n        return new Pos(i, 0);\n      }\n\n      var vim = cm.state.vim;\n      if (vim.visualLine && isBoundary(line, 1, true)) {\n        var anchor = vim.sel.anchor;\n        if (isBoundary(anchor.line, -1, true)) {\n          if (!inclusive || anchor.line != line) {\n            line += 1;\n          }\n        }\n      }\n      var startState = isEmpty(line);\n      for (i = line; i <= max && repeat; i++) {\n        if (isBoundary(i, 1, true)) {\n          if (!inclusive || isEmpty(i) != startState) {\n            repeat--;\n          }\n        }\n      }\n      end = new Pos(i, 0);\n      // select boundary before paragraph for the last one\n      if (i > max && !startState) { startState = true; }\n      else { inclusive = false; }\n      for (i = line; i > min; i--) {\n        if (!inclusive || isEmpty(i) == startState || i == line) {\n          if (isBoundary(i, -1, true)) { break; }\n        }\n      }\n      start = new Pos(i, 0);\n      return { start: start, end: end };\n    }\n\n    function findSentence(cm, cur, repeat, dir) {\n\n      /*\n        Takes an index object\n        {\n          line: the line string,\n          ln: line number,\n          pos: index in line,\n          dir: direction of traversal (-1 or 1)\n        }\n        and modifies the line, ln, and pos members to represent the\n        next valid position or sets them to null if there are\n        no more valid positions.\n       */\n      function nextChar(cm, idx) {\n        if (idx.pos + idx.dir < 0 || idx.pos + idx.dir >= idx.line.length) {\n          idx.ln += idx.dir;\n          if (!isLine(cm, idx.ln)) {\n            idx.line = null;\n            idx.ln = null;\n            idx.pos = null;\n            return;\n          }\n          idx.line = cm.getLine(idx.ln);\n          idx.pos = (idx.dir > 0) ? 0 : idx.line.length - 1;\n        }\n        else {\n          idx.pos += idx.dir;\n        }\n      }\n\n      /*\n        Performs one iteration of traversal in forward direction\n        Returns an index object of the new location\n       */\n      function forward(cm, ln, pos, dir) {\n        var line = cm.getLine(ln);\n        var stop = (line === \"\");\n\n        var curr = {\n          line: line,\n          ln: ln,\n          pos: pos,\n          dir: dir,\n        }\n\n        var last_valid = {\n          ln: curr.ln,\n          pos: curr.pos,\n        }\n\n        var skip_empty_lines = (curr.line === \"\");\n\n        // Move one step to skip character we start on\n        nextChar(cm, curr);\n\n        while (curr.line !== null) {\n          last_valid.ln = curr.ln;\n          last_valid.pos = curr.pos;\n\n          if (curr.line === \"\" && !skip_empty_lines) {\n            return { ln: curr.ln, pos: curr.pos, };\n          }\n          else if (stop && curr.line !== \"\" && !isWhiteSpaceString(curr.line[curr.pos])) {\n            return { ln: curr.ln, pos: curr.pos, };\n          }\n          else if (isEndOfSentenceSymbol(curr.line[curr.pos])\n            && !stop\n            && (curr.pos === curr.line.length - 1\n              || isWhiteSpaceString(curr.line[curr.pos + 1]))) {\n            stop = true;\n          }\n\n          nextChar(cm, curr);\n        }\n\n        /*\n          Set the position to the last non whitespace character on the last\n          valid line in the case that we reach the end of the document.\n        */\n        var line = cm.getLine(last_valid.ln);\n        last_valid.pos = 0;\n        for(var i = line.length - 1; i >= 0; --i) {\n          if (!isWhiteSpaceString(line[i])) {\n            last_valid.pos = i;\n            break;\n          }\n        }\n\n        return last_valid;\n\n      }\n\n      /*\n        Performs one iteration of traversal in reverse direction\n        Returns an index object of the new location\n       */\n      function reverse(cm, ln, pos, dir) {\n        var line = cm.getLine(ln);\n\n        var curr = {\n          line: line,\n          ln: ln,\n          pos: pos,\n          dir: dir,\n        }\n\n        var last_valid = {\n          ln: curr.ln,\n          pos: null,\n        };\n\n        var skip_empty_lines = (curr.line === \"\");\n\n        // Move one step to skip character we start on\n        nextChar(cm, curr);\n\n        while (curr.line !== null) {\n\n          if (curr.line === \"\" && !skip_empty_lines) {\n            if (last_valid.pos !== null) {\n              return last_valid;\n            }\n            else {\n              return { ln: curr.ln, pos: curr.pos };\n            }\n          }\n          else if (isEndOfSentenceSymbol(curr.line[curr.pos])\n              && last_valid.pos !== null\n              && !(curr.ln === last_valid.ln && curr.pos + 1 === last_valid.pos)) {\n            return last_valid;\n          }\n          else if (curr.line !== \"\" && !isWhiteSpaceString(curr.line[curr.pos])) {\n            skip_empty_lines = false;\n            last_valid = { ln: curr.ln, pos: curr.pos }\n          }\n\n          nextChar(cm, curr);\n        }\n\n        /*\n          Set the position to the first non whitespace character on the last\n          valid line in the case that we reach the beginning of the document.\n        */\n        var line = cm.getLine(last_valid.ln);\n        last_valid.pos = 0;\n        for(var i = 0; i < line.length; ++i) {\n          if (!isWhiteSpaceString(line[i])) {\n            last_valid.pos = i;\n            break;\n          }\n        }\n        return last_valid;\n      }\n\n      var curr_index = {\n        ln: cur.line,\n        pos: cur.ch,\n      };\n\n      while (repeat > 0) {\n        if (dir < 0) {\n          curr_index = reverse(cm, curr_index.ln, curr_index.pos, dir);\n        }\n        else {\n          curr_index = forward(cm, curr_index.ln, curr_index.pos, dir);\n        }\n        repeat--;\n      }\n\n      return Pos(curr_index.ln, curr_index.pos);\n    }\n\n    // TODO: perhaps this finagling of start and end positions belonds\n    // in codemirror/replaceRange?\n    function selectCompanionObject(cm, head, symb, inclusive) {\n      var cur = head, start, end;\n\n      var bracketRegexp = ({\n        '(': /[()]/, ')': /[()]/,\n        '[': /[[\\]]/, ']': /[[\\]]/,\n        '{': /[{}]/, '}': /[{}]/,\n        '<': /[<>]/, '>': /[<>]/})[symb];\n      var openSym = ({\n        '(': '(', ')': '(',\n        '[': '[', ']': '[',\n        '{': '{', '}': '{',\n        '<': '<', '>': '<'})[symb];\n      var curChar = cm.getLine(cur.line).charAt(cur.ch);\n      // Due to the behavior of scanForBracket, we need to add an offset if the\n      // cursor is on a matching open bracket.\n      var offset = curChar === openSym ? 1 : 0;\n\n      start = cm.scanForBracket(Pos(cur.line, cur.ch + offset), -1, undefined, {'bracketRegex': bracketRegexp});\n      end = cm.scanForBracket(Pos(cur.line, cur.ch + offset), 1, undefined, {'bracketRegex': bracketRegexp});\n\n      if (!start || !end) {\n        return { start: cur, end: cur };\n      }\n\n      start = start.pos;\n      end = end.pos;\n\n      if ((start.line == end.line && start.ch > end.ch)\n          || (start.line > end.line)) {\n        var tmp = start;\n        start = end;\n        end = tmp;\n      }\n\n      if (inclusive) {\n        end.ch += 1;\n      } else {\n        start.ch += 1;\n      }\n\n      return { start: start, end: end };\n    }\n\n    // Takes in a symbol and a cursor and tries to simulate text objects that\n    // have identical opening and closing symbols\n    // TODO support across multiple lines\n    function findBeginningAndEnd(cm, head, symb, inclusive) {\n      var cur = copyCursor(head);\n      var line = cm.getLine(cur.line);\n      var chars = line.split('');\n      var start, end, i, len;\n      var firstIndex = chars.indexOf(symb);\n\n      // the decision tree is to always look backwards for the beginning first,\n      // but if the cursor is in front of the first instance of the symb,\n      // then move the cursor forward\n      if (cur.ch < firstIndex) {\n        cur.ch = firstIndex;\n        // Why is this line even here???\n        // cm.setCursor(cur.line, firstIndex+1);\n      }\n      // otherwise if the cursor is currently on the closing symbol\n      else if (firstIndex < cur.ch && chars[cur.ch] == symb) {\n        end = cur.ch; // assign end to the current cursor\n        --cur.ch; // make sure to look backwards\n      }\n\n      // if we're currently on the symbol, we've got a start\n      if (chars[cur.ch] == symb && !end) {\n        start = cur.ch + 1; // assign start to ahead of the cursor\n      } else {\n        // go backwards to find the start\n        for (i = cur.ch; i > -1 && !start; i--) {\n          if (chars[i] == symb) {\n            start = i + 1;\n          }\n        }\n      }\n\n      // look forwards for the end symbol\n      if (start && !end) {\n        for (i = start, len = chars.length; i < len && !end; i++) {\n          if (chars[i] == symb) {\n            end = i;\n          }\n        }\n      }\n\n      // nothing found\n      if (!start || !end) {\n        return { start: cur, end: cur };\n      }\n\n      // include the symbols\n      if (inclusive) {\n        --start; ++end;\n      }\n\n      return {\n        start: Pos(cur.line, start),\n        end: Pos(cur.line, end)\n      };\n    }\n\n    // Search functions\n    defineOption('pcre', true, 'boolean');\n    function SearchState() {}\n    SearchState.prototype = {\n      getQuery: function() {\n        return vimGlobalState.query;\n      },\n      setQuery: function(query) {\n        vimGlobalState.query = query;\n      },\n      getOverlay: function() {\n        return this.searchOverlay;\n      },\n      setOverlay: function(overlay) {\n        this.searchOverlay = overlay;\n      },\n      isReversed: function() {\n        return vimGlobalState.isReversed;\n      },\n      setReversed: function(reversed) {\n        vimGlobalState.isReversed = reversed;\n      },\n      getScrollbarAnnotate: function() {\n        return this.annotate;\n      },\n      setScrollbarAnnotate: function(annotate) {\n        this.annotate = annotate;\n      }\n    };\n    function getSearchState(cm) {\n      var vim = cm.state.vim;\n      return vim.searchState_ || (vim.searchState_ = new SearchState());\n    }\n    function dialog(cm, template, shortText, onClose, options) {\n      if (cm.openDialog) {\n        cm.openDialog(template, onClose, { bottom: true, value: options.value,\n            onKeyDown: options.onKeyDown, onKeyUp: options.onKeyUp,\n            selectValueOnOpen: false});\n      }\n      else {\n        onClose(prompt(shortText, ''));\n      }\n    }\n    function splitBySlash(argString) {\n      return splitBySeparator(argString, '/');\n    }\n\n    function findUnescapedSlashes(argString) {\n      return findUnescapedSeparators(argString, '/');\n    }\n\n    function splitBySeparator(argString, separator) {\n      var slashes = findUnescapedSeparators(argString, separator) || [];\n      if (!slashes.length) return [];\n      var tokens = [];\n      // in case of strings like foo/bar\n      if (slashes[0] !== 0) return;\n      for (var i = 0; i < slashes.length; i++) {\n        if (typeof slashes[i] == 'number')\n          tokens.push(argString.substring(slashes[i] + 1, slashes[i+1]));\n      }\n      return tokens;\n    }\n\n    function findUnescapedSeparators(str, separator) {\n      if (!separator)\n        separator = '/';\n\n      var escapeNextChar = false;\n      var slashes = [];\n      for (var i = 0; i < str.length; i++) {\n        var c = str.charAt(i);\n        if (!escapeNextChar && c == separator) {\n          slashes.push(i);\n        }\n        escapeNextChar = !escapeNextChar && (c == '\\\\');\n      }\n      return slashes;\n    }\n\n    // Translates a search string from ex (vim) syntax into javascript form.\n    function translateRegex(str) {\n      // When these match, add a '\\' if unescaped or remove one if escaped.\n      var specials = '|(){';\n      // Remove, but never add, a '\\' for these.\n      var unescape = '}';\n      var escapeNextChar = false;\n      var out = [];\n      for (var i = -1; i < str.length; i++) {\n        var c = str.charAt(i) || '';\n        var n = str.charAt(i+1) || '';\n        var specialComesNext = (n && specials.indexOf(n) != -1);\n        if (escapeNextChar) {\n          if (c !== '\\\\' || !specialComesNext) {\n            out.push(c);\n          }\n          escapeNextChar = false;\n        } else {\n          if (c === '\\\\') {\n            escapeNextChar = true;\n            // Treat the unescape list as special for removing, but not adding '\\'.\n            if (n && unescape.indexOf(n) != -1) {\n              specialComesNext = true;\n            }\n            // Not passing this test means removing a '\\'.\n            if (!specialComesNext || n === '\\\\') {\n              out.push(c);\n            }\n          } else {\n            out.push(c);\n            if (specialComesNext && n !== '\\\\') {\n              out.push('\\\\');\n            }\n          }\n        }\n      }\n      return out.join('');\n    }\n\n    // Translates the replace part of a search and replace from ex (vim) syntax into\n    // javascript form.  Similar to translateRegex, but additionally fixes back references\n    // (translates '\\[0..9]' to '$[0..9]') and follows different rules for escaping '$'.\n    var charUnescapes = {'\\\\n': '\\n', '\\\\r': '\\r', '\\\\t': '\\t'};\n    function translateRegexReplace(str) {\n      var escapeNextChar = false;\n      var out = [];\n      for (var i = -1; i < str.length; i++) {\n        var c = str.charAt(i) || '';\n        var n = str.charAt(i+1) || '';\n        if (charUnescapes[c + n]) {\n          out.push(charUnescapes[c+n]);\n          i++;\n        } else if (escapeNextChar) {\n          // At any point in the loop, escapeNextChar is true if the previous\n          // character was a '\\' and was not escaped.\n          out.push(c);\n          escapeNextChar = false;\n        } else {\n          if (c === '\\\\') {\n            escapeNextChar = true;\n            if ((isNumber(n) || n === '$')) {\n              out.push('$');\n            } else if (n !== '/' && n !== '\\\\') {\n              out.push('\\\\');\n            }\n          } else {\n            if (c === '$') {\n              out.push('$');\n            }\n            out.push(c);\n            if (n === '/') {\n              out.push('\\\\');\n            }\n          }\n        }\n      }\n      return out.join('');\n    }\n\n    // Unescape \\ and / in the replace part, for PCRE mode.\n    var unescapes = {'\\\\/': '/', '\\\\\\\\': '\\\\', '\\\\n': '\\n', '\\\\r': '\\r', '\\\\t': '\\t'};\n    function unescapeRegexReplace(str) {\n      var stream = new CodeMirror.StringStream(str);\n      var output = [];\n      while (!stream.eol()) {\n        // Search for \\.\n        while (stream.peek() && stream.peek() != '\\\\') {\n          output.push(stream.next());\n        }\n        var matched = false;\n        for (var matcher in unescapes) {\n          if (stream.match(matcher, true)) {\n            matched = true;\n            output.push(unescapes[matcher]);\n            break;\n          }\n        }\n        if (!matched) {\n          // Don't change anything\n          output.push(stream.next());\n        }\n      }\n      return output.join('');\n    }\n\n    /**\n     * Extract the regular expression from the query and return a Regexp object.\n     * Returns null if the query is blank.\n     * If ignoreCase is passed in, the Regexp object will have the 'i' flag set.\n     * If smartCase is passed in, and the query contains upper case letters,\n     *   then ignoreCase is overridden, and the 'i' flag will not be set.\n     * If the query contains the /i in the flag part of the regular expression,\n     *   then both ignoreCase and smartCase are ignored, and 'i' will be passed\n     *   through to the Regex object.\n     */\n    function parseQuery(query, ignoreCase, smartCase) {\n      // First update the last search register\n      var lastSearchRegister = vimGlobalState.registerController.getRegister('/');\n      lastSearchRegister.setText(query);\n      // Check if the query is already a regex.\n      if (query instanceof RegExp) { return query; }\n      // First try to extract regex + flags from the input. If no flags found,\n      // extract just the regex. IE does not accept flags directly defined in\n      // the regex string in the form /regex/flags\n      var slashes = findUnescapedSlashes(query);\n      var regexPart;\n      var forceIgnoreCase;\n      if (!slashes.length) {\n        // Query looks like 'regexp'\n        regexPart = query;\n      } else {\n        // Query looks like 'regexp/...'\n        regexPart = query.substring(0, slashes[0]);\n        var flagsPart = query.substring(slashes[0]);\n        forceIgnoreCase = (flagsPart.indexOf('i') != -1);\n      }\n      if (!regexPart) {\n        return null;\n      }\n      if (!getOption('pcre')) {\n        regexPart = translateRegex(regexPart);\n      }\n      if (smartCase) {\n        ignoreCase = (/^[^A-Z]*$/).test(regexPart);\n      }\n      var regexp = new RegExp(regexPart,\n          (ignoreCase || forceIgnoreCase) ? 'i' : undefined);\n      return regexp;\n    }\n    function showConfirm(cm, text) {\n      if (cm.openNotification) {\n        cm.openNotification('<span style=\"color: red\">' + text + '</span>',\n                            {bottom: true, duration: 5000});\n      } else {\n        alert(text);\n      }\n    }\n    function makePrompt(prefix, desc) {\n      var raw = '<span style=\"font-family: monospace; white-space: pre\">' +\n          (prefix || \"\") + '<input type=\"text\"></span>';\n      if (desc)\n        raw += ' <span style=\"color: #888\">' + desc + '</span>';\n      return raw;\n    }\n    var searchPromptDesc = '(Javascript regexp)';\n    function showPrompt(cm, options) {\n      var shortText = (options.prefix || '') + ' ' + (options.desc || '');\n      var prompt = makePrompt(options.prefix, options.desc);\n      dialog(cm, prompt, shortText, options.onClose, options);\n    }\n    function regexEqual(r1, r2) {\n      if (r1 instanceof RegExp && r2 instanceof RegExp) {\n          var props = ['global', 'multiline', 'ignoreCase', 'source'];\n          for (var i = 0; i < props.length; i++) {\n              var prop = props[i];\n              if (r1[prop] !== r2[prop]) {\n                  return false;\n              }\n          }\n          return true;\n      }\n      return false;\n    }\n    // Returns true if the query is valid.\n    function updateSearchQuery(cm, rawQuery, ignoreCase, smartCase) {\n      if (!rawQuery) {\n        return;\n      }\n      var state = getSearchState(cm);\n      var query = parseQuery(rawQuery, !!ignoreCase, !!smartCase);\n      if (!query) {\n        return;\n      }\n      highlightSearchMatches(cm, query);\n      if (regexEqual(query, state.getQuery())) {\n        return query;\n      }\n      state.setQuery(query);\n      return query;\n    }\n    function searchOverlay(query) {\n      if (query.source.charAt(0) == '^') {\n        var matchSol = true;\n      }\n      return {\n        token: function(stream) {\n          if (matchSol && !stream.sol()) {\n            stream.skipToEnd();\n            return;\n          }\n          var match = stream.match(query, false);\n          if (match) {\n            if (match[0].length == 0) {\n              // Matched empty string, skip to next.\n              stream.next();\n              return 'searching';\n            }\n            if (!stream.sol()) {\n              // Backtrack 1 to match \\b\n              stream.backUp(1);\n              if (!query.exec(stream.next() + match[0])) {\n                stream.next();\n                return null;\n              }\n            }\n            stream.match(query);\n            return 'searching';\n          }\n          while (!stream.eol()) {\n            stream.next();\n            if (stream.match(query, false)) break;\n          }\n        },\n        query: query\n      };\n    }\n    function highlightSearchMatches(cm, query) {\n      var searchState = getSearchState(cm);\n      var overlay = searchState.getOverlay();\n      if (!overlay || query != overlay.query) {\n        if (overlay) {\n          cm.removeOverlay(overlay);\n        }\n        overlay = searchOverlay(query);\n        cm.addOverlay(overlay);\n        if (cm.showMatchesOnScrollbar) {\n          if (searchState.getScrollbarAnnotate()) {\n            searchState.getScrollbarAnnotate().clear();\n          }\n          searchState.setScrollbarAnnotate(cm.showMatchesOnScrollbar(query));\n        }\n        searchState.setOverlay(overlay);\n      }\n    }\n    function findNext(cm, prev, query, repeat) {\n      if (repeat === undefined) { repeat = 1; }\n      return cm.operation(function() {\n        var pos = cm.getCursor();\n        var cursor = cm.getSearchCursor(query, pos);\n        for (var i = 0; i < repeat; i++) {\n          var found = cursor.find(prev);\n          if (i == 0 && found && cursorEqual(cursor.from(), pos)) { found = cursor.find(prev); }\n          if (!found) {\n            // SearchCursor may have returned null because it hit EOF, wrap\n            // around and try again.\n            cursor = cm.getSearchCursor(query,\n                (prev) ? Pos(cm.lastLine()) : Pos(cm.firstLine(), 0) );\n            if (!cursor.find(prev)) {\n              return;\n            }\n          }\n        }\n        return cursor.from();\n      });\n    }\n    function clearSearchHighlight(cm) {\n      var state = getSearchState(cm);\n      cm.removeOverlay(getSearchState(cm).getOverlay());\n      state.setOverlay(null);\n      if (state.getScrollbarAnnotate()) {\n        state.getScrollbarAnnotate().clear();\n        state.setScrollbarAnnotate(null);\n      }\n    }\n    /**\n     * Check if pos is in the specified range, INCLUSIVE.\n     * Range can be specified with 1 or 2 arguments.\n     * If the first range argument is an array, treat it as an array of line\n     * numbers. Match pos against any of the lines.\n     * If the first range argument is a number,\n     *   if there is only 1 range argument, check if pos has the same line\n     *       number\n     *   if there are 2 range arguments, then check if pos is in between the two\n     *       range arguments.\n     */\n    function isInRange(pos, start, end) {\n      if (typeof pos != 'number') {\n        // Assume it is a cursor position. Get the line number.\n        pos = pos.line;\n      }\n      if (start instanceof Array) {\n        return inArray(pos, start);\n      } else {\n        if (end) {\n          return (pos >= start && pos <= end);\n        } else {\n          return pos == start;\n        }\n      }\n    }\n    function getUserVisibleLines(cm) {\n      var scrollInfo = cm.getScrollInfo();\n      var occludeToleranceTop = 6;\n      var occludeToleranceBottom = 10;\n      var from = cm.coordsChar({left:0, top: occludeToleranceTop + scrollInfo.top}, 'local');\n      var bottomY = scrollInfo.clientHeight - occludeToleranceBottom + scrollInfo.top;\n      var to = cm.coordsChar({left:0, top: bottomY}, 'local');\n      return {top: from.line, bottom: to.line};\n    }\n\n    function getMarkPos(cm, vim, markName) {\n      if (markName == '\\'') {\n        var history = cm.doc.history.done;\n        var event = history[history.length - 2];\n        return event && event.ranges && event.ranges[0].head;\n      } else if (markName == '.') {\n        if (cm.doc.history.lastModTime == 0) {\n          return  // If no changes, bail out; don't bother to copy or reverse history array.\n        } else {\n          var changeHistory = cm.doc.history.done.filter(function(el){ if (el.changes !== undefined) { return el } });\n          changeHistory.reverse();\n          var lastEditPos = changeHistory[0].changes[0].to;\n        }\n        return lastEditPos;\n      }\n\n      var mark = vim.marks[markName];\n      return mark && mark.find();\n    }\n\n    var ExCommandDispatcher = function() {\n      this.buildCommandMap_();\n    };\n    ExCommandDispatcher.prototype = {\n      processCommand: function(cm, input, opt_params) {\n        var that = this;\n        cm.operation(function () {\n          cm.curOp.isVimOp = true;\n          that._processCommand(cm, input, opt_params);\n        });\n      },\n      _processCommand: function(cm, input, opt_params) {\n        var vim = cm.state.vim;\n        var commandHistoryRegister = vimGlobalState.registerController.getRegister(':');\n        var previousCommand = commandHistoryRegister.toString();\n        if (vim.visualMode) {\n          exitVisualMode(cm);\n        }\n        var inputStream = new CodeMirror.StringStream(input);\n        // update \": with the latest command whether valid or invalid\n        commandHistoryRegister.setText(input);\n        var params = opt_params || {};\n        params.input = input;\n        try {\n          this.parseInput_(cm, inputStream, params);\n        } catch(e) {\n          showConfirm(cm, e);\n          throw e;\n        }\n        var command;\n        var commandName;\n        if (!params.commandName) {\n          // If only a line range is defined, move to the line.\n          if (params.line !== undefined) {\n            commandName = 'move';\n          }\n        } else {\n          command = this.matchCommand_(params.commandName);\n          if (command) {\n            commandName = command.name;\n            if (command.excludeFromCommandHistory) {\n              commandHistoryRegister.setText(previousCommand);\n            }\n            this.parseCommandArgs_(inputStream, params, command);\n            if (command.type == 'exToKey') {\n              // Handle Ex to Key mapping.\n              for (var i = 0; i < command.toKeys.length; i++) {\n                CodeMirror.Vim.handleKey(cm, command.toKeys[i], 'mapping');\n              }\n              return;\n            } else if (command.type == 'exToEx') {\n              // Handle Ex to Ex mapping.\n              this.processCommand(cm, command.toInput);\n              return;\n            }\n          }\n        }\n        if (!commandName) {\n          showConfirm(cm, 'Not an editor command \":' + input + '\"');\n          return;\n        }\n        try {\n          exCommands[commandName](cm, params);\n          // Possibly asynchronous commands (e.g. substitute, which might have a\n          // user confirmation), are responsible for calling the callback when\n          // done. All others have it taken care of for them here.\n          if ((!command || !command.possiblyAsync) && params.callback) {\n            params.callback();\n          }\n        } catch(e) {\n          showConfirm(cm, e);\n          throw e;\n        }\n      },\n      parseInput_: function(cm, inputStream, result) {\n        inputStream.eatWhile(':');\n        // Parse range.\n        if (inputStream.eat('%')) {\n          result.line = cm.firstLine();\n          result.lineEnd = cm.lastLine();\n        } else {\n          result.line = this.parseLineSpec_(cm, inputStream);\n          if (result.line !== undefined && inputStream.eat(',')) {\n            result.lineEnd = this.parseLineSpec_(cm, inputStream);\n          }\n        }\n\n        // Parse command name.\n        var commandMatch = inputStream.match(/^(\\w+)/);\n        if (commandMatch) {\n          result.commandName = commandMatch[1];\n        } else {\n          result.commandName = inputStream.match(/.*/)[0];\n        }\n\n        return result;\n      },\n      parseLineSpec_: function(cm, inputStream) {\n        var numberMatch = inputStream.match(/^(\\d+)/);\n        if (numberMatch) {\n          // Absolute line number plus offset (N+M or N-M) is probably a typo,\n          // not something the user actually wanted. (NB: vim does allow this.)\n          return parseInt(numberMatch[1], 10) - 1;\n        }\n        switch (inputStream.next()) {\n          case '.':\n            return this.parseLineSpecOffset_(inputStream, cm.getCursor().line);\n          case '$':\n            return this.parseLineSpecOffset_(inputStream, cm.lastLine());\n          case '\\'':\n            var markName = inputStream.next();\n            var markPos = getMarkPos(cm, cm.state.vim, markName);\n            if (!markPos) throw new Error('Mark not set');\n            return this.parseLineSpecOffset_(inputStream, markPos.line);\n          case '-':\n          case '+':\n            inputStream.backUp(1);\n            // Offset is relative to current line if not otherwise specified.\n            return this.parseLineSpecOffset_(inputStream, cm.getCursor().line);\n          default:\n            inputStream.backUp(1);\n            return undefined;\n        }\n      },\n      parseLineSpecOffset_: function(inputStream, line) {\n        var offsetMatch = inputStream.match(/^([+-])?(\\d+)/);\n        if (offsetMatch) {\n          var offset = parseInt(offsetMatch[2], 10);\n          if (offsetMatch[1] == \"-\") {\n            line -= offset;\n          } else {\n            line += offset;\n          }\n        }\n        return line;\n      },\n      parseCommandArgs_: function(inputStream, params, command) {\n        if (inputStream.eol()) {\n          return;\n        }\n        params.argString = inputStream.match(/.*/)[0];\n        // Parse command-line arguments\n        var delim = command.argDelimiter || /\\s+/;\n        var args = trim(params.argString).split(delim);\n        if (args.length && args[0]) {\n          params.args = args;\n        }\n      },\n      matchCommand_: function(commandName) {\n        // Return the command in the command map that matches the shortest\n        // prefix of the passed in command name. The match is guaranteed to be\n        // unambiguous if the defaultExCommandMap's shortNames are set up\n        // correctly. (see @code{defaultExCommandMap}).\n        for (var i = commandName.length; i > 0; i--) {\n          var prefix = commandName.substring(0, i);\n          if (this.commandMap_[prefix]) {\n            var command = this.commandMap_[prefix];\n            if (command.name.indexOf(commandName) === 0) {\n              return command;\n            }\n          }\n        }\n        return null;\n      },\n      buildCommandMap_: function() {\n        this.commandMap_ = {};\n        for (var i = 0; i < defaultExCommandMap.length; i++) {\n          var command = defaultExCommandMap[i];\n          var key = command.shortName || command.name;\n          this.commandMap_[key] = command;\n        }\n      },\n      map: function(lhs, rhs, ctx) {\n        if (lhs != ':' && lhs.charAt(0) == ':') {\n          if (ctx) { throw Error('Mode not supported for ex mappings'); }\n          var commandName = lhs.substring(1);\n          if (rhs != ':' && rhs.charAt(0) == ':') {\n            // Ex to Ex mapping\n            this.commandMap_[commandName] = {\n              name: commandName,\n              type: 'exToEx',\n              toInput: rhs.substring(1),\n              user: true\n            };\n          } else {\n            // Ex to key mapping\n            this.commandMap_[commandName] = {\n              name: commandName,\n              type: 'exToKey',\n              toKeys: rhs,\n              user: true\n            };\n          }\n        } else {\n          if (rhs != ':' && rhs.charAt(0) == ':') {\n            // Key to Ex mapping.\n            var mapping = {\n              keys: lhs,\n              type: 'keyToEx',\n              exArgs: { input: rhs.substring(1) }\n            };\n            if (ctx) { mapping.context = ctx; }\n            defaultKeymap.unshift(mapping);\n          } else {\n            // Key to key mapping\n            var mapping = {\n              keys: lhs,\n              type: 'keyToKey',\n              toKeys: rhs\n            };\n            if (ctx) { mapping.context = ctx; }\n            defaultKeymap.unshift(mapping);\n          }\n        }\n      },\n      unmap: function(lhs, ctx) {\n        if (lhs != ':' && lhs.charAt(0) == ':') {\n          // Ex to Ex or Ex to key mapping\n          if (ctx) { throw Error('Mode not supported for ex mappings'); }\n          var commandName = lhs.substring(1);\n          if (this.commandMap_[commandName] && this.commandMap_[commandName].user) {\n            delete this.commandMap_[commandName];\n            return;\n          }\n        } else {\n          // Key to Ex or key to key mapping\n          var keys = lhs;\n          for (var i = 0; i < defaultKeymap.length; i++) {\n            if (keys == defaultKeymap[i].keys\n                && defaultKeymap[i].context === ctx) {\n              defaultKeymap.splice(i, 1);\n              return;\n            }\n          }\n        }\n        throw Error('No such mapping.');\n      }\n    };\n\n    var exCommands = {\n      colorscheme: function(cm, params) {\n        if (!params.args || params.args.length < 1) {\n          showConfirm(cm, cm.getOption('theme'));\n          return;\n        }\n        cm.setOption('theme', params.args[0]);\n      },\n      map: function(cm, params, ctx) {\n        var mapArgs = params.args;\n        if (!mapArgs || mapArgs.length < 2) {\n          if (cm) {\n            showConfirm(cm, 'Invalid mapping: ' + params.input);\n          }\n          return;\n        }\n        exCommandDispatcher.map(mapArgs[0], mapArgs[1], ctx);\n      },\n      imap: function(cm, params) { this.map(cm, params, 'insert'); },\n      nmap: function(cm, params) { this.map(cm, params, 'normal'); },\n      vmap: function(cm, params) { this.map(cm, params, 'visual'); },\n      unmap: function(cm, params, ctx) {\n        var mapArgs = params.args;\n        if (!mapArgs || mapArgs.length < 1) {\n          if (cm) {\n            showConfirm(cm, 'No such mapping: ' + params.input);\n          }\n          return;\n        }\n        exCommandDispatcher.unmap(mapArgs[0], ctx);\n      },\n      move: function(cm, params) {\n        commandDispatcher.processCommand(cm, cm.state.vim, {\n            type: 'motion',\n            motion: 'moveToLineOrEdgeOfDocument',\n            motionArgs: { forward: false, explicitRepeat: true,\n              linewise: true },\n            repeatOverride: params.line+1});\n      },\n      set: function(cm, params) {\n        var setArgs = params.args;\n        // Options passed through to the setOption/getOption calls. May be passed in by the\n        // local/global versions of the set command\n        var setCfg = params.setCfg || {};\n        if (!setArgs || setArgs.length < 1) {\n          if (cm) {\n            showConfirm(cm, 'Invalid mapping: ' + params.input);\n          }\n          return;\n        }\n        var expr = setArgs[0].split('=');\n        var optionName = expr[0];\n        var value = expr[1];\n        var forceGet = false;\n\n        if (optionName.charAt(optionName.length - 1) == '?') {\n          // If post-fixed with ?, then the set is actually a get.\n          if (value) { throw Error('Trailing characters: ' + params.argString); }\n          optionName = optionName.substring(0, optionName.length - 1);\n          forceGet = true;\n        }\n        if (value === undefined && optionName.substring(0, 2) == 'no') {\n          // To set boolean options to false, the option name is prefixed with\n          // 'no'.\n          optionName = optionName.substring(2);\n          value = false;\n        }\n\n        var optionIsBoolean = options[optionName] && options[optionName].type == 'boolean';\n        if (optionIsBoolean && value == undefined) {\n          // Calling set with a boolean option sets it to true.\n          value = true;\n        }\n        // If no value is provided, then we assume this is a get.\n        if (!optionIsBoolean && value === undefined || forceGet) {\n          var oldValue = getOption(optionName, cm, setCfg);\n          if (oldValue instanceof Error) {\n            showConfirm(cm, oldValue.message);\n          } else if (oldValue === true || oldValue === false) {\n            showConfirm(cm, ' ' + (oldValue ? '' : 'no') + optionName);\n          } else {\n            showConfirm(cm, '  ' + optionName + '=' + oldValue);\n          }\n        } else {\n          var setOptionReturn = setOption(optionName, value, cm, setCfg);\n          if (setOptionReturn instanceof Error) {\n            showConfirm(cm, setOptionReturn.message);\n          }\n        }\n      },\n      setlocal: function (cm, params) {\n        // setCfg is passed through to setOption\n        params.setCfg = {scope: 'local'};\n        this.set(cm, params);\n      },\n      setglobal: function (cm, params) {\n        // setCfg is passed through to setOption\n        params.setCfg = {scope: 'global'};\n        this.set(cm, params);\n      },\n      registers: function(cm, params) {\n        var regArgs = params.args;\n        var registers = vimGlobalState.registerController.registers;\n        var regInfo = '----------Registers----------<br><br>';\n        if (!regArgs) {\n          for (var registerName in registers) {\n            var text = registers[registerName].toString();\n            if (text.length) {\n              regInfo += '\"' + registerName + '    ' + text + '<br>';\n            }\n          }\n        } else {\n          var registerName;\n          regArgs = regArgs.join('');\n          for (var i = 0; i < regArgs.length; i++) {\n            registerName = regArgs.charAt(i);\n            if (!vimGlobalState.registerController.isValidRegister(registerName)) {\n              continue;\n            }\n            var register = registers[registerName] || new Register();\n            regInfo += '\"' + registerName + '    ' + register.toString() + '<br>';\n          }\n        }\n        showConfirm(cm, regInfo);\n      },\n      sort: function(cm, params) {\n        var reverse, ignoreCase, unique, number, pattern;\n        function parseArgs() {\n          if (params.argString) {\n            var args = new CodeMirror.StringStream(params.argString);\n            if (args.eat('!')) { reverse = true; }\n            if (args.eol()) { return; }\n            if (!args.eatSpace()) { return 'Invalid arguments'; }\n            var opts = args.match(/([dinuox]+)?\\s*(\\/.+\\/)?\\s*/);\n            if (!opts && !args.eol()) { return 'Invalid arguments'; }\n            if (opts[1]) {\n              ignoreCase = opts[1].indexOf('i') != -1;\n              unique = opts[1].indexOf('u') != -1;\n              var decimal = opts[1].indexOf('d') != -1 || opts[1].indexOf('n') != -1 && 1;\n              var hex = opts[1].indexOf('x') != -1 && 1;\n              var octal = opts[1].indexOf('o') != -1 && 1;\n              if (decimal + hex + octal > 1) { return 'Invalid arguments'; }\n              number = decimal && 'decimal' || hex && 'hex' || octal && 'octal';\n            }\n            if (opts[2]) {\n              pattern = new RegExp(opts[2].substr(1, opts[2].length - 2), ignoreCase ? 'i' : '');\n            }\n          }\n        }\n        var err = parseArgs();\n        if (err) {\n          showConfirm(cm, err + ': ' + params.argString);\n          return;\n        }\n        var lineStart = params.line || cm.firstLine();\n        var lineEnd = params.lineEnd || params.line || cm.lastLine();\n        if (lineStart == lineEnd) { return; }\n        var curStart = Pos(lineStart, 0);\n        var curEnd = Pos(lineEnd, lineLength(cm, lineEnd));\n        var text = cm.getRange(curStart, curEnd).split('\\n');\n        var numberRegex = pattern ? pattern :\n           (number == 'decimal') ? /(-?)([\\d]+)/ :\n           (number == 'hex') ? /(-?)(?:0x)?([0-9a-f]+)/i :\n           (number == 'octal') ? /([0-7]+)/ : null;\n        var radix = (number == 'decimal') ? 10 : (number == 'hex') ? 16 : (number == 'octal') ? 8 : null;\n        var numPart = [], textPart = [];\n        if (number || pattern) {\n          for (var i = 0; i < text.length; i++) {\n            var matchPart = pattern ? text[i].match(pattern) : null;\n            if (matchPart && matchPart[0] != '') {\n              numPart.push(matchPart);\n            } else if (!pattern && numberRegex.exec(text[i])) {\n              numPart.push(text[i]);\n            } else {\n              textPart.push(text[i]);\n            }\n          }\n        } else {\n          textPart = text;\n        }\n        function compareFn(a, b) {\n          if (reverse) { var tmp; tmp = a; a = b; b = tmp; }\n          if (ignoreCase) { a = a.toLowerCase(); b = b.toLowerCase(); }\n          var anum = number && numberRegex.exec(a);\n          var bnum = number && numberRegex.exec(b);\n          if (!anum) { return a < b ? -1 : 1; }\n          anum = parseInt((anum[1] + anum[2]).toLowerCase(), radix);\n          bnum = parseInt((bnum[1] + bnum[2]).toLowerCase(), radix);\n          return anum - bnum;\n        }\n        function comparePatternFn(a, b) {\n          if (reverse) { var tmp; tmp = a; a = b; b = tmp; }\n          if (ignoreCase) { a[0] = a[0].toLowerCase(); b[0] = b[0].toLowerCase(); }\n          return (a[0] < b[0]) ? -1 : 1;\n        }\n        numPart.sort(pattern ? comparePatternFn : compareFn);\n        if (pattern) {\n          for (var i = 0; i < numPart.length; i++) {\n            numPart[i] = numPart[i].input;\n          }\n        } else if (!number) { textPart.sort(compareFn); }\n        text = (!reverse) ? textPart.concat(numPart) : numPart.concat(textPart);\n        if (unique) { // Remove duplicate lines\n          var textOld = text;\n          var lastLine;\n          text = [];\n          for (var i = 0; i < textOld.length; i++) {\n            if (textOld[i] != lastLine) {\n              text.push(textOld[i]);\n            }\n            lastLine = textOld[i];\n          }\n        }\n        cm.replaceRange(text.join('\\n'), curStart, curEnd);\n      },\n      global: function(cm, params) {\n        // a global command is of the form\n        // :[range]g/pattern/[cmd]\n        // argString holds the string /pattern/[cmd]\n        var argString = params.argString;\n        if (!argString) {\n          showConfirm(cm, 'Regular Expression missing from global');\n          return;\n        }\n        // range is specified here\n        var lineStart = (params.line !== undefined) ? params.line : cm.firstLine();\n        var lineEnd = params.lineEnd || params.line || cm.lastLine();\n        // get the tokens from argString\n        var tokens = splitBySlash(argString);\n        var regexPart = argString, cmd;\n        if (tokens.length) {\n          regexPart = tokens[0];\n          cmd = tokens.slice(1, tokens.length).join('/');\n        }\n        if (regexPart) {\n          // If regex part is empty, then use the previous query. Otherwise\n          // use the regex part as the new query.\n          try {\n           updateSearchQuery(cm, regexPart, true /** ignoreCase */,\n             true /** smartCase */);\n          } catch (e) {\n           showConfirm(cm, 'Invalid regex: ' + regexPart);\n           return;\n          }\n        }\n        // now that we have the regexPart, search for regex matches in the\n        // specified range of lines\n        var query = getSearchState(cm).getQuery();\n        var matchedLines = [], content = '';\n        for (var i = lineStart; i <= lineEnd; i++) {\n          var matched = query.test(cm.getLine(i));\n          if (matched) {\n            matchedLines.push(i+1);\n            content+= cm.getLine(i) + '<br>';\n          }\n        }\n        // if there is no [cmd], just display the list of matched lines\n        if (!cmd) {\n          showConfirm(cm, content);\n          return;\n        }\n        var index = 0;\n        var nextCommand = function() {\n          if (index < matchedLines.length) {\n            var command = matchedLines[index] + cmd;\n            exCommandDispatcher.processCommand(cm, command, {\n              callback: nextCommand\n            });\n          }\n          index++;\n        };\n        nextCommand();\n      },\n      substitute: function(cm, params) {\n        if (!cm.getSearchCursor) {\n          throw new Error('Search feature not available. Requires searchcursor.js or ' +\n              'any other getSearchCursor implementation.');\n        }\n        var argString = params.argString;\n        var tokens = argString ? splitBySeparator(argString, argString[0]) : [];\n        var regexPart, replacePart = '', trailing, flagsPart, count;\n        var confirm = false; // Whether to confirm each replace.\n        var global = false; // True to replace all instances on a line, false to replace only 1.\n        if (tokens.length) {\n          regexPart = tokens[0];\n          replacePart = tokens[1];\n          if (regexPart && regexPart[regexPart.length - 1] === '$') {\n            regexPart = regexPart.slice(0, regexPart.length - 1) + '\\\\n';\n            replacePart = replacePart ? replacePart + '\\n' : '\\n';\n          }\n          if (replacePart !== undefined) {\n            if (getOption('pcre')) {\n              replacePart = unescapeRegexReplace(replacePart);\n            } else {\n              replacePart = translateRegexReplace(replacePart);\n            }\n            vimGlobalState.lastSubstituteReplacePart = replacePart;\n          }\n          trailing = tokens[2] ? tokens[2].split(' ') : [];\n        } else {\n          // either the argString is empty or its of the form ' hello/world'\n          // actually splitBySlash returns a list of tokens\n          // only if the string starts with a '/'\n          if (argString && argString.length) {\n            showConfirm(cm, 'Substitutions should be of the form ' +\n                ':s/pattern/replace/');\n            return;\n          }\n        }\n        // After the 3rd slash, we can have flags followed by a space followed\n        // by count.\n        if (trailing) {\n          flagsPart = trailing[0];\n          count = parseInt(trailing[1]);\n          if (flagsPart) {\n            if (flagsPart.indexOf('c') != -1) {\n              confirm = true;\n              flagsPart.replace('c', '');\n            }\n            if (flagsPart.indexOf('g') != -1) {\n              global = true;\n              flagsPart.replace('g', '');\n            }\n            regexPart = regexPart.replace(/\\//g, \"\\\\/\") + '/' + flagsPart;\n          }\n        }\n        if (regexPart) {\n          // If regex part is empty, then use the previous query. Otherwise use\n          // the regex part as the new query.\n          try {\n            updateSearchQuery(cm, regexPart, true /** ignoreCase */,\n              true /** smartCase */);\n          } catch (e) {\n            showConfirm(cm, 'Invalid regex: ' + regexPart);\n            return;\n          }\n        }\n        replacePart = replacePart || vimGlobalState.lastSubstituteReplacePart;\n        if (replacePart === undefined) {\n          showConfirm(cm, 'No previous substitute regular expression');\n          return;\n        }\n        var state = getSearchState(cm);\n        var query = state.getQuery();\n        var lineStart = (params.line !== undefined) ? params.line : cm.getCursor().line;\n        var lineEnd = params.lineEnd || lineStart;\n        if (lineStart == cm.firstLine() && lineEnd == cm.lastLine()) {\n          lineEnd = Infinity;\n        }\n        if (count) {\n          lineStart = lineEnd;\n          lineEnd = lineStart + count - 1;\n        }\n        var startPos = clipCursorToContent(cm, Pos(lineStart, 0));\n        var cursor = cm.getSearchCursor(query, startPos);\n        doReplace(cm, confirm, global, lineStart, lineEnd, cursor, query, replacePart, params.callback);\n      },\n      redo: CodeMirror.commands.redo,\n      undo: CodeMirror.commands.undo,\n      write: function(cm) {\n        if (CodeMirror.commands.save) {\n          // If a save command is defined, call it.\n          CodeMirror.commands.save(cm);\n        } else if (cm.save) {\n          // Saves to text area if no save command is defined and cm.save() is available.\n          cm.save();\n        }\n      },\n      nohlsearch: function(cm) {\n        clearSearchHighlight(cm);\n      },\n      yank: function (cm) {\n        var cur = copyCursor(cm.getCursor());\n        var line = cur.line;\n        var lineText = cm.getLine(line);\n        vimGlobalState.registerController.pushText(\n          '0', 'yank', lineText, true, true);\n      },\n      delmarks: function(cm, params) {\n        if (!params.argString || !trim(params.argString)) {\n          showConfirm(cm, 'Argument required');\n          return;\n        }\n\n        var state = cm.state.vim;\n        var stream = new CodeMirror.StringStream(trim(params.argString));\n        while (!stream.eol()) {\n          stream.eatSpace();\n\n          // Record the streams position at the beginning of the loop for use\n          // in error messages.\n          var count = stream.pos;\n\n          if (!stream.match(/[a-zA-Z]/, false)) {\n            showConfirm(cm, 'Invalid argument: ' + params.argString.substring(count));\n            return;\n          }\n\n          var sym = stream.next();\n          // Check if this symbol is part of a range\n          if (stream.match('-', true)) {\n            // This symbol is part of a range.\n\n            // The range must terminate at an alphabetic character.\n            if (!stream.match(/[a-zA-Z]/, false)) {\n              showConfirm(cm, 'Invalid argument: ' + params.argString.substring(count));\n              return;\n            }\n\n            var startMark = sym;\n            var finishMark = stream.next();\n            // The range must terminate at an alphabetic character which\n            // shares the same case as the start of the range.\n            if (isLowerCase(startMark) && isLowerCase(finishMark) ||\n                isUpperCase(startMark) && isUpperCase(finishMark)) {\n              var start = startMark.charCodeAt(0);\n              var finish = finishMark.charCodeAt(0);\n              if (start >= finish) {\n                showConfirm(cm, 'Invalid argument: ' + params.argString.substring(count));\n                return;\n              }\n\n              // Because marks are always ASCII values, and we have\n              // determined that they are the same case, we can use\n              // their char codes to iterate through the defined range.\n              for (var j = 0; j <= finish - start; j++) {\n                var mark = String.fromCharCode(start + j);\n                delete state.marks[mark];\n              }\n            } else {\n              showConfirm(cm, 'Invalid argument: ' + startMark + '-');\n              return;\n            }\n          } else {\n            // This symbol is a valid mark, and is not part of a range.\n            delete state.marks[sym];\n          }\n        }\n      }\n    };\n\n    var exCommandDispatcher = new ExCommandDispatcher();\n\n    /**\n    * @param {CodeMirror} cm CodeMirror instance we are in.\n    * @param {boolean} confirm Whether to confirm each replace.\n    * @param {Cursor} lineStart Line to start replacing from.\n    * @param {Cursor} lineEnd Line to stop replacing at.\n    * @param {RegExp} query Query for performing matches with.\n    * @param {string} replaceWith Text to replace matches with. May contain $1,\n    *     $2, etc for replacing captured groups using Javascript replace.\n    * @param {function()} callback A callback for when the replace is done.\n    */\n    function doReplace(cm, confirm, global, lineStart, lineEnd, searchCursor, query,\n        replaceWith, callback) {\n      // Set up all the functions.\n      cm.state.vim.exMode = true;\n      var done = false;\n      var lastPos = searchCursor.from();\n      function replaceAll() {\n        cm.operation(function() {\n          while (!done) {\n            replace();\n            next();\n          }\n          stop();\n        });\n      }\n      function replace() {\n        var text = cm.getRange(searchCursor.from(), searchCursor.to());\n        var newText = text.replace(query, replaceWith);\n        searchCursor.replace(newText);\n      }\n      function next() {\n        // The below only loops to skip over multiple occurrences on the same\n        // line when 'global' is not true.\n        while(searchCursor.findNext() &&\n              isInRange(searchCursor.from(), lineStart, lineEnd)) {\n          if (!global && lastPos && searchCursor.from().line == lastPos.line) {\n            continue;\n          }\n          cm.scrollIntoView(searchCursor.from(), 30);\n          cm.setSelection(searchCursor.from(), searchCursor.to());\n          lastPos = searchCursor.from();\n          done = false;\n          return;\n        }\n        done = true;\n      }\n      function stop(close) {\n        if (close) { close(); }\n        cm.focus();\n        if (lastPos) {\n          cm.setCursor(lastPos);\n          var vim = cm.state.vim;\n          vim.exMode = false;\n          vim.lastHPos = vim.lastHSPos = lastPos.ch;\n        }\n        if (callback) { callback(); }\n      }\n      function onPromptKeyDown(e, _value, close) {\n        // Swallow all keys.\n        CodeMirror.e_stop(e);\n        var keyName = CodeMirror.keyName(e);\n        switch (keyName) {\n          case 'Y':\n            replace(); next(); break;\n          case 'N':\n            next(); break;\n          case 'A':\n            // replaceAll contains a call to close of its own. We don't want it\n            // to fire too early or multiple times.\n            var savedCallback = callback;\n            callback = undefined;\n            cm.operation(replaceAll);\n            callback = savedCallback;\n            break;\n          case 'L':\n            replace();\n            // fall through and exit.\n          case 'Q':\n          case 'Esc':\n          case 'Ctrl-C':\n          case 'Ctrl-[':\n            stop(close);\n            break;\n        }\n        if (done) { stop(close); }\n        return true;\n      }\n\n      // Actually do replace.\n      next();\n      if (done) {\n        showConfirm(cm, 'No matches for ' + query.source);\n        return;\n      }\n      if (!confirm) {\n        replaceAll();\n        if (callback) { callback(); }\n        return;\n      }\n      showPrompt(cm, {\n        prefix: 'replace with <strong>' + replaceWith + '</strong> (y/n/a/q/l)',\n        onKeyDown: onPromptKeyDown\n      });\n    }\n\n    CodeMirror.keyMap.vim = {\n      attach: attachVimMap,\n      detach: detachVimMap,\n      call: cmKey\n    };\n\n    function exitInsertMode(cm) {\n      var vim = cm.state.vim;\n      var macroModeState = vimGlobalState.macroModeState;\n      var insertModeChangeRegister = vimGlobalState.registerController.getRegister('.');\n      var isPlaying = macroModeState.isPlaying;\n      var lastChange = macroModeState.lastInsertModeChanges;\n      if (!isPlaying) {\n        cm.off('change', onChange);\n        CodeMirror.off(cm.getInputField(), 'keydown', onKeyEventTargetKeyDown);\n      }\n      if (!isPlaying && vim.insertModeRepeat > 1) {\n        // Perform insert mode repeat for commands like 3,a and 3,o.\n        repeatLastEdit(cm, vim, vim.insertModeRepeat - 1,\n            true /** repeatForInsert */);\n        vim.lastEditInputState.repeatOverride = vim.insertModeRepeat;\n      }\n      delete vim.insertModeRepeat;\n      vim.insertMode = false;\n      cm.setCursor(cm.getCursor().line, cm.getCursor().ch-1);\n      cm.setOption('keyMap', 'vim');\n      cm.setOption('disableInput', true);\n      cm.toggleOverwrite(false); // exit replace mode if we were in it.\n      // update the \". register before exiting insert mode\n      insertModeChangeRegister.setText(lastChange.changes.join(''));\n      CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"normal\"});\n      if (macroModeState.isRecording) {\n        logInsertModeChange(macroModeState);\n      }\n    }\n\n    function _mapCommand(command) {\n      defaultKeymap.unshift(command);\n    }\n\n    function mapCommand(keys, type, name, args, extra) {\n      var command = {keys: keys, type: type};\n      command[type] = name;\n      command[type + \"Args\"] = args;\n      for (var key in extra)\n        command[key] = extra[key];\n      _mapCommand(command);\n    }\n\n    // The timeout in milliseconds for the two-character ESC keymap should be\n    // adjusted according to your typing speed to prevent false positives.\n    defineOption('insertModeEscKeysTimeout', 200, 'number');\n\n    CodeMirror.keyMap['vim-insert'] = {\n      // TODO: override navigation keys so that Esc will cancel automatic\n      // indentation from o, O, i_<CR>\n      fallthrough: ['default'],\n      attach: attachVimMap,\n      detach: detachVimMap,\n      call: cmKey\n    };\n\n    CodeMirror.keyMap['vim-replace'] = {\n      'Backspace': 'goCharLeft',\n      fallthrough: ['vim-insert'],\n      attach: attachVimMap,\n      detach: detachVimMap,\n      call: cmKey\n    };\n\n    function executeMacroRegister(cm, vim, macroModeState, registerName) {\n      var register = vimGlobalState.registerController.getRegister(registerName);\n      if (registerName == ':') {\n        // Read-only register containing last Ex command.\n        if (register.keyBuffer[0]) {\n          exCommandDispatcher.processCommand(cm, register.keyBuffer[0]);\n        }\n        macroModeState.isPlaying = false;\n        return;\n      }\n      var keyBuffer = register.keyBuffer;\n      var imc = 0;\n      macroModeState.isPlaying = true;\n      macroModeState.replaySearchQueries = register.searchQueries.slice(0);\n      for (var i = 0; i < keyBuffer.length; i++) {\n        var text = keyBuffer[i];\n        var match, key;\n        while (text) {\n          // Pull off one command key, which is either a single character\n          // or a special sequence wrapped in '<' and '>', e.g. '<Space>'.\n          match = (/<\\w+-.+?>|<\\w+>|./).exec(text);\n          key = match[0];\n          text = text.substring(match.index + key.length);\n          CodeMirror.Vim.handleKey(cm, key, 'macro');\n          if (vim.insertMode) {\n            var changes = register.insertModeChanges[imc++].changes;\n            vimGlobalState.macroModeState.lastInsertModeChanges.changes =\n                changes;\n            repeatInsertModeChanges(cm, changes, 1);\n            exitInsertMode(cm);\n          }\n        }\n      }\n      macroModeState.isPlaying = false;\n    }\n\n    function logKey(macroModeState, key) {\n      if (macroModeState.isPlaying) { return; }\n      var registerName = macroModeState.latestRegister;\n      var register = vimGlobalState.registerController.getRegister(registerName);\n      if (register) {\n        register.pushText(key);\n      }\n    }\n\n    function logInsertModeChange(macroModeState) {\n      if (macroModeState.isPlaying) { return; }\n      var registerName = macroModeState.latestRegister;\n      var register = vimGlobalState.registerController.getRegister(registerName);\n      if (register && register.pushInsertModeChanges) {\n        register.pushInsertModeChanges(macroModeState.lastInsertModeChanges);\n      }\n    }\n\n    function logSearchQuery(macroModeState, query) {\n      if (macroModeState.isPlaying) { return; }\n      var registerName = macroModeState.latestRegister;\n      var register = vimGlobalState.registerController.getRegister(registerName);\n      if (register && register.pushSearchQuery) {\n        register.pushSearchQuery(query);\n      }\n    }\n\n    /**\n     * Listens for changes made in insert mode.\n     * Should only be active in insert mode.\n     */\n    function onChange(cm, changeObj) {\n      var macroModeState = vimGlobalState.macroModeState;\n      var lastChange = macroModeState.lastInsertModeChanges;\n      if (!macroModeState.isPlaying) {\n        while(changeObj) {\n          lastChange.expectCursorActivityForChange = true;\n          if (lastChange.ignoreCount > 1) {\n            lastChange.ignoreCount--;\n          } else if (changeObj.origin == '+input' || changeObj.origin == 'paste'\n              || changeObj.origin === undefined /* only in testing */) {\n            var selectionCount = cm.listSelections().length;\n            if (selectionCount > 1)\n              lastChange.ignoreCount = selectionCount;\n            var text = changeObj.text.join('\\n');\n            if (lastChange.maybeReset) {\n              lastChange.changes = [];\n              lastChange.maybeReset = false;\n            }\n            if (text) {\n              if (cm.state.overwrite && !/\\n/.test(text)) {\n                lastChange.changes.push([text]);\n              } else {\n                lastChange.changes.push(text);\n              }\n            }\n          }\n          // Change objects may be chained with next.\n          changeObj = changeObj.next;\n        }\n      }\n    }\n\n    /**\n    * Listens for any kind of cursor activity on CodeMirror.\n    */\n    function onCursorActivity(cm) {\n      var vim = cm.state.vim;\n      if (vim.insertMode) {\n        // Tracking cursor activity in insert mode (for macro support).\n        var macroModeState = vimGlobalState.macroModeState;\n        if (macroModeState.isPlaying) { return; }\n        var lastChange = macroModeState.lastInsertModeChanges;\n        if (lastChange.expectCursorActivityForChange) {\n          lastChange.expectCursorActivityForChange = false;\n        } else {\n          // Cursor moved outside the context of an edit. Reset the change.\n          lastChange.maybeReset = true;\n        }\n      } else if (!cm.curOp.isVimOp) {\n        handleExternalSelection(cm, vim);\n      }\n      if (vim.visualMode) {\n        updateFakeCursor(cm);\n      }\n    }\n    function updateFakeCursor(cm) {\n      var vim = cm.state.vim;\n      var from = clipCursorToContent(cm, copyCursor(vim.sel.head));\n      var to = offsetCursor(from, 0, 1);\n      if (vim.fakeCursor) {\n        vim.fakeCursor.clear();\n      }\n      vim.fakeCursor = cm.markText(from, to, {className: 'cm-animate-fat-cursor'});\n    }\n    function handleExternalSelection(cm, vim) {\n      var anchor = cm.getCursor('anchor');\n      var head = cm.getCursor('head');\n      // Enter or exit visual mode to match mouse selection.\n      if (vim.visualMode && !cm.somethingSelected()) {\n        exitVisualMode(cm, false);\n      } else if (!vim.visualMode && !vim.insertMode && cm.somethingSelected()) {\n        vim.visualMode = true;\n        vim.visualLine = false;\n        CodeMirror.signal(cm, \"vim-mode-change\", {mode: \"visual\"});\n      }\n      if (vim.visualMode) {\n        // Bind CodeMirror selection model to vim selection model.\n        // Mouse selections are considered visual characterwise.\n        var headOffset = !cursorIsBefore(head, anchor) ? -1 : 0;\n        var anchorOffset = cursorIsBefore(head, anchor) ? -1 : 0;\n        head = offsetCursor(head, 0, headOffset);\n        anchor = offsetCursor(anchor, 0, anchorOffset);\n        vim.sel = {\n          anchor: anchor,\n          head: head\n        };\n        updateMark(cm, vim, '<', cursorMin(head, anchor));\n        updateMark(cm, vim, '>', cursorMax(head, anchor));\n      } else if (!vim.insertMode) {\n        // Reset lastHPos if selection was modified by something outside of vim mode e.g. by mouse.\n        vim.lastHPos = cm.getCursor().ch;\n      }\n    }\n\n    /** Wrapper for special keys pressed in insert mode */\n    function InsertModeKey(keyName) {\n      this.keyName = keyName;\n    }\n\n    /**\n    * Handles raw key down events from the text area.\n    * - Should only be active in insert mode.\n    * - For recording deletes in insert mode.\n    */\n    function onKeyEventTargetKeyDown(e) {\n      var macroModeState = vimGlobalState.macroModeState;\n      var lastChange = macroModeState.lastInsertModeChanges;\n      var keyName = CodeMirror.keyName(e);\n      if (!keyName) { return; }\n      function onKeyFound() {\n        if (lastChange.maybeReset) {\n          lastChange.changes = [];\n          lastChange.maybeReset = false;\n        }\n        lastChange.changes.push(new InsertModeKey(keyName));\n        return true;\n      }\n      if (keyName.indexOf('Delete') != -1 || keyName.indexOf('Backspace') != -1) {\n        CodeMirror.lookupKey(keyName, 'vim-insert', onKeyFound);\n      }\n    }\n\n    /**\n     * Repeats the last edit, which includes exactly 1 command and at most 1\n     * insert. Operator and motion commands are read from lastEditInputState,\n     * while action commands are read from lastEditActionCommand.\n     *\n     * If repeatForInsert is true, then the function was called by\n     * exitInsertMode to repeat the insert mode changes the user just made. The\n     * corresponding enterInsertMode call was made with a count.\n     */\n    function repeatLastEdit(cm, vim, repeat, repeatForInsert) {\n      var macroModeState = vimGlobalState.macroModeState;\n      macroModeState.isPlaying = true;\n      var isAction = !!vim.lastEditActionCommand;\n      var cachedInputState = vim.inputState;\n      function repeatCommand() {\n        if (isAction) {\n          commandDispatcher.processAction(cm, vim, vim.lastEditActionCommand);\n        } else {\n          commandDispatcher.evalInput(cm, vim);\n        }\n      }\n      function repeatInsert(repeat) {\n        if (macroModeState.lastInsertModeChanges.changes.length > 0) {\n          // For some reason, repeat cw in desktop VIM does not repeat\n          // insert mode changes. Will conform to that behavior.\n          repeat = !vim.lastEditActionCommand ? 1 : repeat;\n          var changeObject = macroModeState.lastInsertModeChanges;\n          repeatInsertModeChanges(cm, changeObject.changes, repeat);\n        }\n      }\n      vim.inputState = vim.lastEditInputState;\n      if (isAction && vim.lastEditActionCommand.interlaceInsertRepeat) {\n        // o and O repeat have to be interlaced with insert repeats so that the\n        // insertions appear on separate lines instead of the last line.\n        for (var i = 0; i < repeat; i++) {\n          repeatCommand();\n          repeatInsert(1);\n        }\n      } else {\n        if (!repeatForInsert) {\n          // Hack to get the cursor to end up at the right place. If I is\n          // repeated in insert mode repeat, cursor will be 1 insert\n          // change set left of where it should be.\n          repeatCommand();\n        }\n        repeatInsert(repeat);\n      }\n      vim.inputState = cachedInputState;\n      if (vim.insertMode && !repeatForInsert) {\n        // Don't exit insert mode twice. If repeatForInsert is set, then we\n        // were called by an exitInsertMode call lower on the stack.\n        exitInsertMode(cm);\n      }\n      macroModeState.isPlaying = false;\n    }\n\n    function repeatInsertModeChanges(cm, changes, repeat) {\n      function keyHandler(binding) {\n        if (typeof binding == 'string') {\n          CodeMirror.commands[binding](cm);\n        } else {\n          binding(cm);\n        }\n        return true;\n      }\n      var head = cm.getCursor('head');\n      var inVisualBlock = vimGlobalState.macroModeState.lastInsertModeChanges.inVisualBlock;\n      if (inVisualBlock) {\n        // Set up block selection again for repeating the changes.\n        var vim = cm.state.vim;\n        var lastSel = vim.lastSelection;\n        var offset = getOffset(lastSel.anchor, lastSel.head);\n        selectForInsert(cm, head, offset.line + 1);\n        repeat = cm.listSelections().length;\n        cm.setCursor(head);\n      }\n      for (var i = 0; i < repeat; i++) {\n        if (inVisualBlock) {\n          cm.setCursor(offsetCursor(head, i, 0));\n        }\n        for (var j = 0; j < changes.length; j++) {\n          var change = changes[j];\n          if (change instanceof InsertModeKey) {\n            CodeMirror.lookupKey(change.keyName, 'vim-insert', keyHandler);\n          } else if (typeof change == \"string\") {\n            var cur = cm.getCursor();\n            cm.replaceRange(change, cur, cur);\n          } else {\n            var start = cm.getCursor();\n            var end = offsetCursor(start, 0, change[0].length);\n            cm.replaceRange(change[0], start, end);\n          }\n        }\n      }\n      if (inVisualBlock) {\n        cm.setCursor(offsetCursor(head, 0, 1));\n      }\n    }\n\n    resetVimGlobalState();\n    return vimApi;\n  };\n  // Initialize Vim and make it available as an API.\n  CodeMirror.Vim = Vim();\n}\n//-- );\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ext/page.js":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ext/page.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("function __inject_style(src) {\n    var script = document.constructor.prototype.createElement.call(document, 'style');\n    script.innerHTML = src;\n    document.documentElement.appendChild(script);\n}\nvar __keymaps = {\n    Vim: __vim_key_map,\n    Emacs: __emacs_key_map,\n    Sublime: __sublime_key_map,\n};\nvar cm_bindings = (function () {\n    function cm_bindings(mapName, keymaps, styleName, styleCSS, vim_disable_keys, default_disable_keys) {\n        this.loaded_styles = [];\n        this.queue = [];\n        this.mirrors = [];\n        this.set_style(styleName, styleCSS);\n        this.keyMaps = keymaps;\n        this.keyMaps.default = function () { };\n        this.disabled_key_bindings = {};\n        this.disabled_key_bindings[\"Vim\"] = vim_disable_keys;\n        this.disabled_key_bindings[\"default\"] = default_disable_keys;\n        this.set_keymap(mapName, this.disabled_key_bindings[mapName]);\n        this.find_and_inject();\n        this.__find_and_inject = this.find_and_inject.bind(this);\n        setInterval(this.__find_and_inject, 500);\n    }\n    cm_bindings.prototype.find_and_inject = function () {\n        var _this = this;\n        document\n            .querySelectorAll('.CodeMirror:not([__cm-instance])')\n            .forEach(function (el) {\n            el.setAttribute('__cm-instance', '');\n            _this.queue.push(el);\n        });\n        var _loop_1 = function (i) {\n            var el = this_1.queue[i];\n            if (el['CodeMirror']) {\n                var cm_1 = el['CodeMirror'];\n                if (this_1.mapName === \"default\") {\n                    this_1.disabled_key_bindings[\"default\"].forEach(function (key) {\n                        delete cm_1.constructor['keyMap'].emacsy[key];\n                    });\n                }\n                cm_1.constructor['vim_disable_keys'] = this_1.disabled_key_bindings['Vim'];\n                this_1.inject_bindings(cm_1);\n                var _data = { cm: cm_1, theme: cm_1.options.theme };\n                this_1.inject_style(_data);\n                this_1.mirrors.push(_data);\n                this_1.queue.splice(i, 1);\n                i--;\n            }\n            out_i_1 = i;\n        };\n        var this_1 = this, out_i_1;\n        for (var i = 0; i < this.queue.length; i++) {\n            _loop_1(i);\n            i = out_i_1;\n        }\n    };\n    cm_bindings.prototype.inject_style = function (cm_data) {\n        if (this.styleName === 'default') {\n            cm_data.cm.setOption('theme', cm_data.theme);\n        }\n        else {\n            cm_data.cm.setOption('theme', this.styleName);\n        }\n    };\n    cm_bindings.prototype.inject_bindings = function (cm) {\n        if (typeof cm === 'undefined') {\n            return;\n        }\n        if (this.mapName === \"default\") {\n            this.disabled_key_bindings[\"default\"].forEach(function (key) {\n                delete cm.constructor['keyMap'].emacsy[key];\n            });\n        }\n        cm.constructor['vim_disable_keys'] = this.disabled_key_bindings['Vim'];\n        if (this.mapName !== 'default') {\n            if (cm.constructor[this.mapName]) {\n                delete cm.constructor[this.mapName];\n            }\n            this.keyMaps[this.mapName](cm.constructor);\n        }\n        try {\n            cm.setOption('keyMap', this.mapName.toLowerCase());\n        }\n        catch (e) {\n        }\n    };\n    cm_bindings.prototype.set_keymap = function (mapName, disabled_keys) {\n        var _this = this;\n        this.mapName = mapName;\n        if (!(mapName in this.keyMaps))\n            throw new Error('unknown keymap ' + mapName);\n        this.disabled_key_bindings[mapName] = disabled_keys;\n        this.mirrors.map(function (cm_data) { return _this.inject_bindings(cm_data.cm); });\n    };\n    cm_bindings.prototype.set_style = function (styleName, styleCSS) {\n        var _this = this;\n        if (styleName !== 'default' &&\n            this.loaded_styles.indexOf(styleName) === -1) {\n            __inject_style(styleCSS);\n            this.loaded_styles.push(styleName);\n        }\n        this.styleName = styleName;\n        this.mirrors.map(function (cm_data) { return _this.inject_style(cm_data); });\n    };\n    return cm_bindings;\n}());\n;\n(function (__mapName, __keymaps, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys) {\n    window.__cm_global_config = new cm_bindings(__mapName, __keymaps, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys);\n})(__mapName, __keymaps, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys);\n//# sourceMappingURL=page.js.map");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=content.js.map