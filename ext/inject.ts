export function inject_script(src:string):void {
    var script = document.constructor.prototype.createElement.call(
        document,
        'script'
    )
    script.innerHTML = src
    script.charset = 'utf-8'
    document.documentElement.appendChild(script)
    script.parentNode.removeChild(script)
}

export function inject_style(src:string):void {
    var script = document.constructor.prototype.createElement.call(
        document,
        'style'
    )
    script.innerHTML = src
    script.charset = 'utf-8'
    document.documentElement.appendChild(script)
}
