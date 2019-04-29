function __inject_style(src) {
    var script = document.constructor.prototype.createElement.call(document, 'style');
    script.innerHTML = src;
    document.documentElement.appendChild(script);
}
var cm_bindings = (function () {
    function cm_bindings(mapName, addKeyMap, styleName, styleCSS, vim_disable_keys, disable_keys) {
        this.loaded_styles = [];
        this.queue = [];
        this.mirrors = [];
        this.set_style(styleName, styleCSS);
        this.set_keymap(mapName, addKeyMap);
        this.vim_disable_keys = vim_disable_keys;
        this.disable_keys = disable_keys;
        this.find_and_inject();
        setInterval(this.find_and_inject.bind(this), 500);
    }
    cm_bindings.prototype.find_and_inject = function () {
        var _this = this;
        document
            .querySelectorAll('.CodeMirror:not([__cm-instance])')
            .forEach(function (el) {
            el.setAttribute('__cm-instance', '');
            _this.queue.push(el);
        });
        var _loop_1 = function (i) {
            var el = this_1.queue[i];
            if (el['CodeMirror']) {
                var cm_1 = el['CodeMirror'];
                this_1.disable_keys.forEach(function (key) {
                    delete cm_1.constructor['keyMap'].emacsy[key];
                });
                cm_1.constructor['vim_disable_keys'] = this_1.vim_disable_keys;
                this_1.inject_bindings(cm_1);
                var _data = { cm: cm_1, theme: cm_1.options.theme };
                this_1.inject_style(_data);
                this_1.mirrors.push(_data);
                this_1.queue.splice(i, 1);
                i--;
            }
            out_i_1 = i;
        };
        var this_1 = this, out_i_1;
        for (var i = 0; i < this.queue.length; i++) {
            _loop_1(i);
            i = out_i_1;
        }
    };
    cm_bindings.prototype.inject_style = function (cm_data) {
        if (this.styleName === 'default') {
            console.log('injecting default syle: ' + cm_data.theme);
            cm_data.cm.setOption('theme', cm_data.theme);
            console.log('injecting default syle');
        }
        else {
            console.log('injecting default syle: ' + this.styleName);
            cm_data.cm.setOption('theme', this.styleName);
        }
    };
    cm_bindings.prototype.inject_bindings = function (cm) {
        if (!cm.constructor[this.mapName]) {
            console.log('about to add KeyMap');
            this.addKeyMap(cm.constructor);
            console.log('KeyMap added');
        }
        console.log('about to set options');
        try {
            cm.setOption('keyMap', this.mapName);
        }
        catch (e) {
            console.log('got error: ', e);
        }
        console.log('options set');
    };
    cm_bindings.prototype.set_keymap = function (mapName, addKeyMap) {
        var _this = this;
        this.mapName = mapName;
        this.addKeyMap = addKeyMap;
        this.mirrors.map(function (cm_data) { return _this.inject_bindings(cm_data.cm); });
    };
    cm_bindings.prototype.set_style = function (styleName, styleCSS) {
        var _this = this;
        if (styleName !== 'default' &&
            this.loaded_styles.indexOf(styleName) === -1) {
            console.log('injecting CSS: ', styleCSS);
            __inject_style(styleCSS);
            this.loaded_styles.push(styleName);
        }
        this.styleName = styleName;
        this.mirrors.map(function (cm_data) { return _this.inject_style(cm_data); });
    };
    return cm_bindings;
}());
;
(function (__mapName, __addKeyMap, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys) {
    window.__cm_global_config = new cm_bindings(__mapName, __addKeyMap, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys);
})(__mapName, __addKeyMap, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys);
//# sourceMappingURL=page.js.map