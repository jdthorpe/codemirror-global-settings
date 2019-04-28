import vim_bindings from '!!raw-loader!./vim'
import page from '!!raw-loader!./page'
import { inject_script } from './inject'
import styles from './styles'

chrome.storage.local.get(
    ['vim_disable_keys', 'default_disable_keys', 'theme', 'keyMap'],
    function(results) {
        inject_script(`var __mapName = "${results.keyMap}";
var __vim_disable_keys = ${results.vim_disable_keys || ''};
var __default_disable_keys = ${results.default_disable_keys || ''};
var __addKeyMap = ${vim_bindings};
var __styleName = "${results.theme in styles ? results.theme : 'deault'}"
var __styleCSS = \`${results.theme in styles ? styles[results.theme] : ''}\`
${page}`)
    }
)
