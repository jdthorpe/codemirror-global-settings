function __inject_style(src) {
    var script = document.constructor.prototype.createElement.call(document, 'style');
    script.innerHTML = src;
    document.documentElement.appendChild(script);
}
var cm_bindings = (function () {
    function cm_bindings(mapName, vimKeyMap, styleName, styleCSS, vim_disable_keys, default_disable_keys) {
        this.loaded_styles = [];
        this.queue = [];
        this.mirrors = [];
        this.set_style(styleName, styleCSS);
        this.keyMaps = {
            Vim: vimKeyMap,
            "default": function () { }
        };
        this.disabled_key_bindings = {};
        this.disabled_key_bindings["Vim"] = vim_disable_keys;
        this.disabled_key_bindings["default"] = default_disable_keys;
        this.set_keymap(mapName, this.disabled_key_bindings[mapName]);
        this.find_and_inject();
        this.__find_and_inject = this.find_and_inject.bind(this);
        setInterval(this.__find_and_inject, 500);
        console.log('constructor got vim_disable_keys: ', vim_disable_keys);
        console.log('PS: this is why the page has to be re-loaded to update the bindings ');
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
                if (this_1.mapName === "default") {
                    this_1.disabled_key_bindings["default"].forEach(function (key) {
                        delete cm_1.constructor['keyMap'].emacsy[key];
                    });
                }
                cm_1.constructor['vim_disable_keys'] = this_1.disabled_key_bindings['Vim'];
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
            console.log('injecting syle: ' + this.styleName);
            cm_data.cm.setOption('theme', this.styleName);
        }
    };
    cm_bindings.prototype.inject_bindings = function (cm) {
        if (typeof cm === 'undefined') {
            console.log('inject_bindings was not passed a CodeMirror Instance!');
            return;
        }
        if (this.mapName === "default") {
            this.disabled_key_bindings["default"].forEach(function (key) {
                delete cm.constructor['keyMap'].emacsy[key];
            });
        }
        cm.constructor['vim_disable_keys'] = this.disabled_key_bindings['Vim'];
        if (this.mapName !== 'default') {
            if (cm.constructor[this.mapName]) {
                delete cm.constructor[this.mapName];
            }
            console.log('about to add KeyMap');
            this.keyMaps[this.mapName](cm.constructor);
            console.log('KeyMap added');
        }
        console.log('about to set options: ' + this.mapName.toLowerCase());
        try {
            cm.setOption('keyMap', this.mapName.toLowerCase());
            console.log('keymap options set');
        }
        catch (e) {
            console.log('got error: ', e);
        }
    };
    cm_bindings.prototype.set_keymap = function (mapName, disabled_keys) {
        var _this = this;
        this.mapName = mapName;
        if (!(mapName in this.keyMaps))
            throw new Error('unknown keymap ' + mapName);
        this.disabled_key_bindings[mapName] = disabled_keys;
        this.mirrors.map(function (cm_data) { return _this.inject_bindings(cm_data.cm); });
    };
    cm_bindings.prototype.set_style = function (styleName, styleCSS) {
        var _this = this;
        if (styleName !== 'default' &&
            this.loaded_styles.indexOf(styleName) === -1) {
            console.log('injecting CSS: ' + styleCSS.substr(0, 40) + '...');
            __inject_style(styleCSS);
            this.loaded_styles.push(styleName);
        }
        this.styleName = styleName;
        this.mirrors.map(function (cm_data) { return _this.inject_style(cm_data); });
    };
    return cm_bindings;
}());
;
(function (__mapName, __vim_key_map, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys) {
    window.__cm_global_config = new cm_bindings(__mapName, __vim_key_map, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys);
})(__mapName, __vim_key_map, __styleName, __styleCSS, __vim_disable_keys, __default_disable_keys);
//# sourceMappingURL=page.js.map