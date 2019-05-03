'set strict'
import styles from './styles'

const default_keyMap = 'vim'
const default_theme = 'rubyblue'
const default_default_disable_keys = ['Ctrl-V']
const default_vim_disable_keys = ['<C-c>', '<C-v>']

const KEY_MAPS = ['default', 'vim']

// --------------------------------------------------
// Saves options to chrome.storage
// --------------------------------------------------
function save_options() {
    var theme = document.getElementById('theme').value
    var keyMap = document.getElementById('keymap').value
    chrome.storage.sync.set(
        {
            keyMap: keyMap,
            theme: theme,
        },
        function(items) {
            // alert('Saved!')
            // document.getElementById('like').checked = items.likesColor;
        }
    )
}

// --------------------------------------------------
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
// --------------------------------------------------
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get(
        {
            keyMap: default_keyMap,
            theme: default_theme,
            default_disable_keys: default_default_disable_keys,
            vim_disable_keys: default_vim_disable_keys,
        },
        function(items) {
            document.getElementById('theme').value = items.theme
            document.getElementById('keymap').value = items.keyMap
            // document.getElementById('like').checked = items.likesColor;
        }
    )
}

// --------------------------------------------------
// build the options
// --------------------------------------------------
function set_options(el, options) {
    console.log(options)
    for (let option of options) {
        var opt = document.constructor.prototype.createElement.call(
            document,
            'option'
        )
        opt.innerHTML = option
        opt.setAttribute('value', option)
        el.appendChild(opt)
    }
}

set_options(document.getElementById('theme'), Object.keys(styles))
set_options(document.getElementById('keymap'), KEY_MAPS)

document.getElementById('save').addEventListener('click', save_options)
document.addEventListener('DOMContentLoaded', restore_options)
