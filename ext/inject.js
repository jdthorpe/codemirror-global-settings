"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inject_script(src) {
    var script = document.constructor.prototype.createElement.call(document, 'script');
    script.innerHTML = src;
    script.charset = 'utf-8';
    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
}
exports.inject_script = inject_script;
function inject_style(src) {
    var script = document.constructor.prototype.createElement.call(document, 'style');
    script.innerHTML = src;
    script.charset = 'utf-8';
    document.documentElement.appendChild(script);
}
exports.inject_style = inject_style;
//# sourceMappingURL=inject.js.map