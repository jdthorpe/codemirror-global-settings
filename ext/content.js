"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vim_1 = require("!!raw-loader!./keymap/vim");
var emacs_1 = require("!!raw-loader!./keymap/emacs");
var sublime_1 = require("!!raw-loader!./keymap/sublime");
var page_1 = require("!!raw-loader!./page");
var inject_1 = require("./inject");
var styles_1 = require("./styles");
var toPairs = require('lodash.topairs');
var stored_state_keys = [
    'theme',
    'keymap',
    'themeOptions',
    'keymapOptions',
    'storedDisabledBindings',
];
function buildBindingKeys(state, mapname, os) {
    var disabledKeys = JSON.parse(state.storedDisabledBindings);
    switch (mapname) {
        case 'Vim':
            var ctrl = toPairs(disabledKeys['vim-ctrl'])
                .filter(function (_a) {
                var key = _a[0], value = _a[1];
                return value;
            })
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "<C-" + key + ">";
            });
            return JSON.stringify(ctrl);
        case 'Emacs':
            return '[]';
        case 'SublimeText':
            return '[]';
        default:
            if (os === 'mac') {
                var ctrl_1 = toPairs(disabledKeys['default-mac-ctrl'])
                    .filter(function (_a) {
                    var key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "Ctrl-" + key;
                });
                var alt = toPairs(disabledKeys['default-mac-alt'])
                    .filter(function (_a) {
                    var key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "Alt-" + key;
                });
                var cmd = toPairs(disabledKeys['default-mac-cmd'])
                    .filter(function (_a) {
                    var key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "Cmd-" + key;
                });
                return JSON.stringify(ctrl_1.concat(alt).concat(cmd));
            }
            else {
                var ctrl_2 = toPairs(disabledKeys['default-pc-ctrl'])
                    .filter(function (_a) {
                    var key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
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
    if (!request)
        sendResponse({
            message: 'got an invalid request',
        });
    try {
        switch (request.action) {
            case 'set_theme':
                inject_1.inject_script("(function(){\nlet __styleName = \"" + (request.theme in styles_1.default ? request.theme : 'default') + "\"\nlet __styleCSS = `" + (request.theme in styles_1.default ? styles_1.default[request.theme] : '') + "`\nwindow.__cm_global_config.set_style(__styleName, __styleCSS) \n})()");
                sendResponse({ message: 'Theme script injected' });
                break;
            case 'apply':
                chrome.storage.sync.get(stored_state_keys, function (state) {
                    var keys = buildBindingKeys(state, state.keymap, request.platform);
                    inject_1.inject_script("(function(){\nlet __styleName = \"" + (state.theme in styles_1.default ? state.theme : 'default') + "\";\nlet __styleCSS = `" + (state.theme in styles_1.default ? styles_1.default[state.theme] : '') + "`;\nwindow.__cm_global_config.set_style(__styleName, __styleCSS);\nwindow.__cm_global_config.set_keymap(\"" + state.keymap + "\"," + keys + ") ;\n})()");
                });
                sendResponse({ message: 'The settings were applied' });
                break;
            default:
                sendResponse({
                    message: 'not sure what to do with ' + JSON.stringify(request),
                });
        }
    }
    catch (err) {
        sendResponse({
            message: 'something went wrong',
            error: err,
        });
    }
});
//# sourceMappingURL=content.js.map