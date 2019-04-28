//--------------------------------------------------
// typings 
//--------------------------------------------------
interface CMElement extends Element {
    CodeMirror: CodeMirror
}

interface CodeMirror {
    setOption(x: string, value: string): void
    options: CodeMirrorOptions
    constructor: CodeMirrorConstructor
}

interface CodeMirrorConstructor extends Function {
    [x: string]: any
}

interface Window {
    __cm_global_config: cm_bindings
}

interface CodeMirrorOptions {
    theme: string
}
interface KeyMap {
    (x: Function): void
}

interface cm_data {
    cm: CodeMirror
    theme: string
}

declare var __vim_disable_keys: string[]
declare var __default_disable_keys: string[]
declare var __mapName: string
declare var __addKeyMap: KeyMap
declare var __styleName: string
declare var __styleCSS: string

//--------------------------------------------------
// utility
//--------------------------------------------------
function __inject_style(src: string) {
    var script = document.constructor.prototype.createElement.call(
        document,
        'style'
    )
    script.innerHTML = src
    document.documentElement.appendChild(script)
}

//--------------------------------------------------
// classes
//--------------------------------------------------
class cm_bindings {
    queue: CMElement[]
    mirrors: cm_data[]
    mapName: string
    addKeyMap: KeyMap

    styleName: string

    loaded_styles: string[]
    vim_disable_keys: string[]
    disable_keys: string[]

    //------------------------------
    // Constructor
    //------------------------------
    constructor(
        mapName: string,
        addKeyMap: KeyMap,
        styleName: string,
        styleCSS: string,
        vim_disable_keys: string[],
        disable_keys: string[]
    ) {
        this.loaded_styles = []
        this.queue = []
        this.mirrors = []
        this.set_style(styleName, styleCSS)
        this.set_keymap(mapName, addKeyMap)

        this.vim_disable_keys = vim_disable_keys
        this.disable_keys = disable_keys
        this.find_and_inject()
        setInterval(this.find_and_inject.bind(this), 500)
    }

    find_and_inject() {
        document
            .querySelectorAll('.CodeMirror:not([__cm-instance])')
            .forEach((el: CMElement) => {
                el.setAttribute('__cm-instance', '')
                this.queue.push(el)
            })

        for (let i = 0; i < this.queue.length; i++) {
            let el = this.queue[i]
            if (el['CodeMirror']) {
                let cm: CodeMirror = el['CodeMirror']

                this.disable_keys.map(key => {
                    delete cm.constructor['keyMap'].emacsy[key]
                })
                cm.constructor['vim_disable_keys'] = this.vim_disable_keys

                this.inject_bindings(cm)

                let _data: cm_data = { cm: cm, theme: cm.options.theme }
                this.inject_style(_data)
                this.mirrors.push(_data)
                this.queue.splice(i, 1)
                i--
            }
        }
    }
    //------------------------------
    // inject styles
    //------------------------------
    inject_style(cm_data: cm_data) {
        if (this.styleName === 'default') {
            console.log('injecting default syle: ' + cm_data.theme)
            cm_data.cm.setOption('theme', cm_data.theme)
            console.log('injecting default syle')
        } else {
            console.log('injecting default syle: ' + this.styleName)
            cm_data.cm.setOption('theme', this.styleName)
        }
    }

    //------------------------------
    // inject key map
    //------------------------------
    inject_bindings(cm: CodeMirror) {
        if (!cm.constructor[this.mapName]) {
            console.log('about to add KeyMap')
            this.addKeyMap(cm.constructor)
            console.log('KeyMap added')
        }
        console.log('about to set options')
        try {
            cm.setOption('keyMap', this.mapName)
        } catch (e) {
            console.log('got error: ', e)
        }
        console.log('options set')
    }

    //------------------------------
    // set configuration
    //------------------------------

    set_keymap(mapName: string, addKeyMap: KeyMap) {
        this.mapName = mapName
        this.addKeyMap = addKeyMap
        this.mirrors.map(cm_data => this.inject_bindings(cm_data.cm))
    }

    set_style(styleName: string, styleCSS: string) {
        if (
            styleName !== 'default' &&
            this.loaded_styles.indexOf(styleName) === -1
        ) {
            console.log('injecting CSS: ', styleCSS)
            __inject_style(styleCSS)
            this.loaded_styles.push(styleName)
        }
        this.styleName = styleName
        this.mirrors.map(cm_data => this.inject_style(cm_data))
    }
}

//--------------------------------------------------
// actual work
//--------------------------------------------------
;(function(
    __mapName: string,
    __addKeyMap: KeyMap,
    __styleName,
    __styleCSS,
    __vim_disable_keys: string[],
    __default_disable_keys: string[]
) {
    window.__cm_global_config = new cm_bindings(
        __mapName,
        __addKeyMap,
        __styleName,
        __styleCSS,
        __vim_disable_keys,
        __default_disable_keys
    )
})(
    __mapName,
    __addKeyMap,
    __styleName,
    __styleCSS,
    __vim_disable_keys,
    __default_disable_keys
)
