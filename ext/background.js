console.log('[bacground] start')
var default_keyMap = 'vim'
var default_theme = 'rubyblue'
var default_default_disable_keys = ['Ctrl-V']
var default_vim_disable_keys = ['<C-c>', '<C-v>']
chrome.runtime.onInstalled.addListener(function() {
    console.log('[bacground] onInstalled()')
    chrome.storage.local.set(
        {
            theme: default_theme,
            keyMap: default_keyMap,
            default_disable_keys: JSON.stringify(default_default_disable_keys),
            vim_disable_keys: JSON.stringify(default_vim_disable_keys),
        },
        function() {
            console.log('[bacground] data set!!!')
        }
    )
})
