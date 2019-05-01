/*global chrome*/
var default_keyMap = 'default'
var default_theme = 'default'
const defaults = {
    'vim-ctrl': 'npccfbduwioeyvqraxtd',
    'default-pc-ctrl': 'adzysfgu',
    'default-mac-ctrl': 'fbpnaevdhkto',
    'default-mac-alt': 'fbd',
    'default-mac-cmd': 'adzysfgu',
}
var bindings = {}
for (let [k, v] of Object.entries(defaults)) {
    bindings[k] = {}
    for (let letr of v.split('')) {
        bindings[k][letr] = false
    }
}

chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
    alert("failed to clear storage")
        console.error(error);
    }
    alert("cleared storage")
});

// var default_default_disable_keys = ['Ctrl-V']
// var default_vim_disable_keys = ['<C-c>', '<C-v>']

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({
        theme: default_theme,
        keyMap: default_keyMap,
        storedDisabledBindings: JSON.stringify(bindings),
    })
})
