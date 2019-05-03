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
declare var __vim_key_map: KeyMap
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
    keyMaps: { [x: string]: KeyMap }

    styleName: string

    loaded_styles: string[]
    disabled_key_bindings: {[x:string]:string[]}

    //------------------------------
    // Constructor
    //------------------------------
    constructor(
        mapName: string,
        vimKeyMap: KeyMap,
        styleName: string,
        styleCSS: string,
        vim_disable_keys: string[],
        default_disable_keys: string[]
    ) {
        this.loaded_styles = []
        this.queue = []
        this.mirrors = []
        this.set_style(styleName, styleCSS)
        this.keyMaps = { 
            Vim: vimKeyMap ,
            "default": function(){}
        }

        this.disabled_key_bindings = {}
        this.disabled_key_bindings["Vim"] = vim_disable_keys
        this.disabled_key_bindings["default"] = default_disable_keys
        this.set_keymap(mapName, this.disabled_key_bindings[mapName])
        this.find_and_inject()
        this.__find_and_inject = this.find_and_inject.bind(this)
        setInterval(this.__find_and_inject, 500)
        console.log('constructor got vim_disable_keys: ', vim_disable_keys)
        console.log(
            'PS: this is why the page has to be re-loaded to update the bindings '
        )
    }

    __find_and_inject: () => void

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

                if(this.mapName === "default"){
                    // this is non-reversable, so only do it if necessary
                    this.disabled_key_bindings["default"].forEach(key => {
                        delete cm.constructor['keyMap'].emacsy[key]
                    })
                }
                // this is reversable...
                cm.constructor['vim_disable_keys'] = this.disabled_key_bindings['Vim']

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
            console.log('injecting syle: ' + this.styleName)
            cm_data.cm.setOption('theme', this.styleName)
        }
    }

    //------------------------------
    // inject key map
    //------------------------------
    inject_bindings(cm: CodeMirror) {
        if (typeof cm === 'undefined') {
            console.log('inject_bindings was not passed a CodeMirror Instance!')
            return
        }

        // ------------------------------
        // set up the disabled keys
        // ------------------------------
        if(this.mapName === "default"){
            // this is non-reversable, so only do it if necessary
            this.disabled_key_bindings["default"].forEach(key => {
                delete cm.constructor['keyMap'].emacsy[key]
            })
        }
        // this is reversable...
        cm.constructor['vim_disable_keys'] = this.disabled_key_bindings['Vim']


        // ------------------------------
        // inject the keymap
        // ------------------------------
        if (this.mapName !== 'default') {
            // note that when the bindings change, then the keymap needs to be re-installed
            if(cm.constructor[this.mapName]){
                delete cm.constructor[this.mapName]
            }
            console.log('about to add KeyMap')
            this.keyMaps[this.mapName](cm.constructor)
            console.log('KeyMap added')
        }

        // ------------------------------
        // set the keyMap option
        // ------------------------------
        console.log('about to set options: ' + this.mapName.toLowerCase())
        try {
            cm.setOption('keyMap', this.mapName.toLowerCase())
            console.log('keymap options set')
        } catch (e) {
            console.log('got error: ', e)
        }
    }

    //------------------------------
    // set configuration
    //------------------------------

    set_keymap(mapName: string,disabled_keys: string[] ) {
        this.mapName = mapName
        if (!(mapName in this.keyMaps))
            throw new Error('unknown keymap ' + mapName)
        this.disabled_key_bindings[mapName] = disabled_keys;

        this.mirrors.map(cm_data => this.inject_bindings(cm_data.cm))

    }

    set_style(styleName: string, styleCSS: string) {
        if (
            styleName !== 'default' &&
            this.loaded_styles.indexOf(styleName) === -1
        ) {
            console.log('injecting CSS: ' + styleCSS.substr(0, 40) + '...')
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
    __vim_key_map: KeyMap,
    __styleName,
    __styleCSS,
    __vim_disable_keys: string[],
    __default_disable_keys: string[]
) {
    window.__cm_global_config = new cm_bindings(
        __mapName,
        __vim_key_map,
        __styleName,
        __styleCSS,
        __vim_disable_keys,
        __default_disable_keys
    )
})(
    __mapName,
    __vim_key_map,
    __styleName,
    __styleCSS,
    __vim_disable_keys,
    __default_disable_keys
)
