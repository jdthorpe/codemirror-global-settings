///<reference path="../node_modules/@types/chrome/index.d.ts" />
/*global chrome*/
import React, { Component } from 'react'

import logo from './assets/logo.svg'
import './App.css'
import { Letters } from './letters'
const { Select, Button } = require('react-materialize')

const Aux = (props: any) => {
    return props.children
}

const style_names = [
    'default',
    'abcdef',
    'ambiance-mobile',
    'ambiance',
    'base16-dark',
    'base16-light',
    'bespin',
    'blackboard',
    'cobalt',
    'colorforth',
    'darcula',
    'dracula',
    'duotone-dark',
    'duotone-light',
    'eclipse',
    'elegant',
    'erlang-dark',
    'gruvbox-dark',
    'hopscotch',
    'icecoder',
    'idea',
    'isotope',
    'lesser-dark',
    'liquibyte',
    'lucario',
    'material',
    'mbo',
    'mdn-like',
    'midnight',
    'monokai',
    'neat',
    'neo',
    'night',
    'nord',
    'oceanic-next',
    'panda-syntax',
    'paraiso-dark',
    'paraiso-light',
    'pastel-on-dark',
    'railscasts',
    'rubyblue',
    'seti',
    'shadowfox',
    'solarized',
    'ssms',
    'the-matrix',
    'tomorrow-night-bright',
    'tomorrow-night-eighties',
    'ttcn',
    'twilight',
    'vibrant-ink',
    'xq-dark',
    'xq-light',
    'yeti',
    'yonce',
    'zenburn',
]

const KeyMaps = ['default', 'Vim', 'Emacs', 'SublimeText']

interface appState {
    theme: string
    keymap: string
    themeOptions: string[]
    keymapOptions: string[]
    disabledKeys: disabledBindings
    platform?: string
    messages?: string[]
    storedDisabledBindings: string
}

interface disabledBindings {
    [subset: string]: {
        [letter: string]: boolean
    }
}

type stored_state =
    | 'theme'
    | 'keymap'
    | 'themeOptions'
    | 'keymapOptions'
    | 'storedDisabledBindings'

const stored_state: stored_state[] = [
    'theme',
    'keymap',
    'themeOptions',
    'keymapOptions',
    'storedDisabledBindings',
]
const default_app_state: appState = {
    theme: 'default',
    keymap: 'default',
    themeOptions: [],
    keymapOptions: [],
    disabledKeys: {
        'vim-ctrl': {},
        'default-pc-ctrl': {},
        'default-mac-ctrl': {},
        'default-mac-alt': {},
        'default-mac-cmd': {},
    },
    platform: '',
    messages: [],
    storedDisabledBindings: '',
}

class App extends Component<{}, appState> {
    componentWillMount() {
        this.setState(function(state) {
            return { ...default_app_state, ...state }
        })
    }

    componentDidMount() {
        chrome.runtime.getPlatformInfo(info => {
            this.setState({ platform: info.os })
        })

        chrome.storage.local.get(stored_state, s => {
            if (!s.disabledKeys) {
                console.log('restoring binidngs')
                s.disabledKeys = JSON.parse(s.storedDisabledBindings)
            }
            this.setState(s as Pick<appState, keyof appState>)
        })
    }

    onSave() {
        let _state: any = {
            theme: this.state.theme,
            keymap: this.state.keymap,
            themeOptions: this.state.themeOptions,
            keymapOptions: this.state.keymapOptions,
            storedDisabledBindings: JSON.stringify(this.state.disabledKeys),
        }
        console.log('_state: ', _state)
        chrome.storage.local.set(_state, () => {
            console.log('saved state??? ')
        })
    }

    onCancel() {
        chrome.storage.local.get(stored_state, s => {
            if (!s.disabledKeys) {
                console.log('RESTORING BINIDNGS')
                s.disabledKeys = JSON.parse(s.storedDisabledBindings)
            }
            s.disabledKeys = JSON.parse(s.storedDisabledBindings)
            this.setState(s as Pick<appState, keyof appState>)
        })
    }

    onColorChange(e: Event) {
        console.log('ColorChanged: ', (e.target as HTMLSelectElement).value)
        this.setState({ theme: (e.target as HTMLSelectElement).value })
    }

    onKeyMapChange(e: any) {
        console.log('KeyMapChange: ', (e.target as HTMLSelectElement).value)
        this.setState({ keymap: (e.target as HTMLSelectElement).value })
    }

    onKeyBinding(val: any) {
        console.log('KeyBinding', val)
    }

    render() {
        return (
            <div>
                <div className="heading nudge-right">
                    <p>
                        <img src={logo} className="App-logo" alt="logo" />

                        <span className="title">
                            <span className="red-text text-accent-4">
                                CodeMirror
                            </span>
                            Settings
                        </span>
                    </p>
                </div>

                <MySelect
                    value={this.state.theme}
                    onChange={this.onColorChange.bind(this)}
                    label={'Theme'}
                    options={style_names}
                />

                <MySelect
                    value={this.state.keymap}
                    onChange={this.onKeyMapChange.bind(this)}
                    label={'KeyMap'}
                    options={KeyMaps}
                />

                <hr />
                <DisabledKeys
                    keys={this.state.disabledKeys}
                    platform={this.state.platform}
                    KeyMap={this.state.keymap}
                    onClick={([subset, key]) => {
                        this.setState(state => {
                            if (!(key in state.disabledKeys[subset]))
                                return state

                            let subs = { ...state.disabledKeys[subset] }
                            subs[key] = !subs[key]
                            let _disabled_keys = { ...state.disabledKeys }
                            _disabled_keys[subset] = subs

                            return { ...state, disabledKeys: _disabled_keys }
                        })
                    }}
                />

                <div className="row nudge-left right">
                    <Button
                        className="right red accent-4 white-text"
                        waves="light"
                        style={{ marginRight: '5px' }}
                        onClick={this.onSave.bind(this)}
                    >
                        Save
                    </Button>

                    <Button
                        className="right grey"
                        waves="light"
                        style={{ marginRight: '5px' }}
                        onClick={this.onCancel.bind(this)}
                    >
                        Cancel
                    </Button>
                </div>
                <Messages messages={this.state.messages} />
            </div>
        )
    }
}

//--     'vim-ctrl': 'npccfbduwioeyvqraxtd',
//--     'default-pc-ctrl': 'adzysfgu',
//--     'default-mac-ctrl': 'fbpnaevdhkto',
//--     'default-mac-alt': 'fbd',
//--     'default-mac-cmd': 'adzysfgu',

const DisabledKeys = (props: {
    keys: disabledBindings
    platform: string | undefined
    KeyMap: string
    onClick: { (x: [string, string]): void }
}) => {
    if (props.KeyMap === 'default') {
        if (props.platform === 'mac') {
            return (
                <Aux>
                    <div className="options-label col s4 nudge-right">
                        <p>Disable key bindings</p>
                    </div>
                    <div className="row nudge-left nudge-right">
                        <label>Command Key Bindings</label>
                        <Letters
                            state={props.keys['default-mac-cmd']}
                            cb={(ltr: string) =>
                                props.onClick(['default-mac-cmd', ltr])
                            }
                        />
                    </div>
                    <div className="row nudge-left nudge-right">
                        <label>Control Key Bindings</label>
                        <Letters
                            state={props.keys['default-mac-ctrl']}
                            cb={(ltr: string) =>
                                props.onClick(['default-mac-ctrl', ltr])
                            }
                        />
                    </div>
                    <div className="row nudge-left nudge-right">
                        <label>Alt Key Bindings</label>
                        <Letters
                            state={props.keys['default-mac-alt']}
                            cb={(ltr: string) =>
                                props.onClick(['default-mac-alt', ltr])
                            }
                        />
                    </div>
                    <hr />
                </Aux>
            )
        } else {
            return (
                <Aux>
                    <div className="options-label col s4 nudge-right">
                        <p>Disable key bindings</p>
                    </div>
                    <div className="row nudge-left nudge-right">
                        <label>Control Key Bindings</label>
                        <Letters
                            state={props.keys['default-pc-ctrl']}
                            cb={(ltr: string) =>
                                props.onClick(['default-mac-cmd', ltr])
                            }
                        />
                    </div>
                    <hr />
                </Aux>
            )
        }
    }
    if (props.KeyMap === 'Vim') {
        return (
            <Aux>
                <div className="options-label col s4 nudge-right">
                    <p>Disable key bindings</p>
                </div>
                <div className="row nudge-left nudge-right">
                    <label>Control Key Bindings</label>
                    <Letters
                        state={props.keys['vim-ctrl']}
                        cb={(ltr: string) => props.onClick(['vim-ctrl', ltr])}
                    />
                </div>
                <hr />
            </Aux>
        )
    }

    return null
}

const Messages = (props: {
    messages?: string[]
}): React.ReactElement | null => {
    if (!props.messages) return null
    return (
        <Aux>
            <div className="clearfix" />
            {props.messages.map(m => (
                <div className="row red-text nudge-right">
                    {' '}
                    <p>{m}</p>{' '}
                </div>
            ))}
        </Aux>
    )
}

const MySelect = (props: {
    value: string
    label: string | React.Component
    onChange: (e: Event) => void
    options: string[]
}) => {
    return (
        <div className="row">
            <div className="label col s4 black-text">
                <p>{props.label}</p>
            </div>
            <div className="input-field col s8">
                <Select
                    value={3}
                    onChange={props.onChange}
                    className="m"
                >
                    {props.options.map((name: string) => (
                        <option value={name}>{name}</option>
                    ))}
                </Select>
            </div>
        </div>
    )
}

export default App
