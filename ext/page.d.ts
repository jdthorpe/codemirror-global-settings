
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

