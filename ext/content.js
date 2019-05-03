"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vim_1 = require("!!raw-loader!./vim");
var page_1 = require("!!raw-loader!./page");
var inject_1 = require("./inject");
var styles_1 = require("./styles");
var lodash_1 = require("lodash");
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
            var ctrl = lodash_1.toPairs(disabledKeys['vim-ctrl'])
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
                var ctrl_1 = lodash_1.toPairs(disabledKeys['default-mac-ctrl'])
                    .filter(function (_a) {
                    var key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "Ctrl-" + key;
                });
                var alt = lodash_1.toPairs(disabledKeys['default-mac-alt'])
                    .filter(function (_a) {
                    var key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "Alt-" + key;
                });
                var cmd = lodash_1.toPairs(disabledKeys['default-mac-cmd'])
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
                var ctrl_2 = lodash_1.toPairs(disabledKeys['default-pc-ctrl'])
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
    console.log("HARD CODED os", state);
    var keys = buildBindingKeys(state, "Vim", "mac");
    console.log('key vindings ', keys);
    inject_1.inject_script("(function(){\nvar __mapName = \"" + state.keymap + "\";\nvar __vim_disable_keys = " + buildBindingKeys(state, "Vim", "mac") + ";\nvar __default_disable_keys = " + buildBindingKeys(state, "default", "mac") + ";\nvar __vim_key_map = " + vim_1.default + ";\nvar __styleName = \"" + (state.theme in styles_1.default ? state.theme : 'default') + "\"\nvar __styleCSS = `" + (state.theme in styles_1.default ? styles_1.default[state.theme] : '') + "`\n" + page_1.default + ";\n})()");
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
    console.log(sender.tab
        ? 'from a content script:' + sender.tab.url
        : 'from the extension');
    switch (request.action) {
        case 'set_theme':
            inject_1.inject_script("(function(){\nlet __styleName = \"" + (request.theme in styles_1.default ? request.theme : 'default') + "\"\nlet __styleCSS = `" + (request.theme in styles_1.default ? styles_1.default[request.theme] : '') + "`\nwindow.__cm_global_config.set_style(__styleName, __styleCSS) \n})()");
            sendResponse({ message: 'Theme script injected' });
            break;
        case 'apply':
            chrome.storage.sync.get(stored_state_keys, function (state) {
                var keys = buildBindingKeys(state, state.keymap, request.platform);
                console.log('applying key vindings ', keys);
                inject_1.inject_script("(function(){\nlet __styleName = \"" + (state.theme in styles_1.default ? state.theme : 'default') + "\";\nlet __styleCSS = `" + (state.theme in styles_1.default ? styles_1.default[state.theme] : '') + "`;\nwindow.__cm_global_config.set_style(__styleName, __styleCSS);\nwindow.__cm_global_config.set_keymap(\"" + state.keymap + "\"," + keys + ") ;\n})()");
            });
            break;
        default:
            sendResponse({
                message: 'not sure what to do with ' + JSON.stringify(request),
            });
    }
});
//# sourceMappingURL=content.js.map