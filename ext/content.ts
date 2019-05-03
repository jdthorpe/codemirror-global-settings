///<reference path="./global.d.ts" />

/*global chrome */

import vim_bindings from '!!raw-loader!./vim'
//import emacs_bindings from '!!raw-loader!./emacs'
//import sublime_bindings from '!!raw-loader!./sublime'
import page from '!!raw-loader!./page'
import { inject_script } from './inject'
import styles from './styles'

import { toPairs } from "lodash"

// const KeyMaps = ['default', 'Vim', 'Emacs', 'SublimeText']

const stored_state_keys = [
    'theme',
    'keymap',
    'themeOptions',
    'keymapOptions',
    'storedDisabledBindings',
]

//--     'vim-ctrl': 'npccfbduwioeyvqraxtd',
//--     'default-pc-ctrl': 'adzysfgu',
//--     'default-mac-ctrl': 'fbpnaevdhkto',
//--     'default-mac-alt': 'fbd',
//--     'default-mac-cmd': 'adzysfgu',

function buildBindingKeys(state:any,mapname:string, os:string) {
    let disabledKeys = JSON.parse(state.storedDisabledBindings)
    switch (mapname) {
        case 'Vim':
            let ctrl = toPairs(disabledKeys['vim-ctrl'])
                .filter(([key, value]:[string, boolean]) => value)
                .map(([key, value]:[string, boolean]) => `<C-${key}>`)
            return JSON.stringify(ctrl)

        case 'Emacs':
            return '[]'

        case 'SublimeText':
            return '[]'

        default:
            if (os === 'mac') {
                let ctrl = toPairs(disabledKeys['default-mac-ctrl'])
                    .filter(([key, value]:[string, boolean]) => value)
                    .map(([key, value]:[string, boolean]) => `Ctrl-${key}`)

                let alt = toPairs(disabledKeys['default-mac-alt'])
                    .filter(([key, value]:[string, boolean]) => value)
                    .map(([key, value]:[string, boolean]) => `Alt-${key}`)

                let cmd = toPairs(disabledKeys['default-mac-cmd'])
                    .filter(([key, value]:[string, boolean]) => value)
                    .map(([key, value]:[string, boolean]) => `Cmd-${key}`)

                return JSON.stringify(ctrl.concat(alt).concat(cmd))
            } else {
                let ctrl = toPairs(disabledKeys['default-pc-ctrl'])
                    .filter(([key, value]:[string, boolean]) => value)
                    .map(([key, value]:[string, boolean]) => `<C-${key}>`)

                return JSON.stringify(ctrl)
            }
    }
}

// var default_default_disable_keys = JSON.stringify(['Ctrl-V'])
// var default_vim_disable_keys = JSON.stringify(['<C-c>', '<C-v>'])

//--------------------------------------------------
// initialize the page
//--------------------------------------------------

chrome.storage.sync.get(
    stored_state_keys, // ['vim_disable_keys', 'default_disable_keys', 'theme', 'keymap']
    function(state) {
            console.log("HARD CODED os", state)
            let keys = buildBindingKeys(state, "Vim","mac")
            console.log('key vindings ', keys)


            inject_script(`(function(){
var __mapName = "${state.keymap}";
var __vim_disable_keys = ${buildBindingKeys(state,"Vim","mac")};
var __default_disable_keys = ${buildBindingKeys(state,"default","mac")};
var __vim_key_map = ${vim_bindings};
var __styleName = "${state.theme in styles ? state.theme : 'default'}"
var __styleCSS = \`${state.theme in styles ? styles[state.theme] : ''}\`
${page};
})()`)
    }
)

function getBindings(name:string) {
    switch (name) {
        case 'Vim':
            return vim_bindings
        case 'Emacs':
            return vim_bindings
        case 'SublimeText':
            return vim_bindings
        default:
            return 'function(){}'
    }
}
//--------------------------------------------------
// responde to messages
//--------------------------------------------------

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (!request)
        sendResponse({
            message: 'got an invalid request',
        })
    console.log(
        sender.tab
            ? 'from a content script:' + sender.tab.url
            : 'from the extension'
    )

    switch (request.action) {
        case 'set_theme':
            inject_script(`(function(){
let __styleName = "${request.theme in styles ? request.theme : 'default'}"
let __styleCSS = \`${request.theme in styles ? styles[request.theme] : ''}\`
window.__cm_global_config.set_style(__styleName, __styleCSS) 
})()`)

            sendResponse({ message: 'Theme script injected' })
            break

        case 'apply':
            chrome.storage.sync.get(stored_state_keys, state => {
                    let keys = buildBindingKeys(state,state.keymap, request.platform)
                    console.log('applying key vindings ', keys)

                    inject_script(`(function(){
let __styleName = "${state.theme in styles ? state.theme : 'default'}";
let __styleCSS = \`${state.theme in styles ? styles[state.theme] : ''}\`;
window.__cm_global_config.set_style(__styleName, __styleCSS);
window.__cm_global_config.set_keymap("${state.keymap}",${keys}) ;
})()`)
            })

            break
        default:
            sendResponse({
                message: 'not sure what to do with ' + JSON.stringify(request),
            })
    }
})
