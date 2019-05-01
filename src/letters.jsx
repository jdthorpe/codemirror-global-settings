import React from 'react'
import classNames from 'classnames'
import './letters.css'

function Key(props) {
    let cls = ''
    if (props.letter in props.state) {
        cls = props.state[props.letter] ? 'white-text red acent-4': ""
    } else {
        cls = 'grey'
    }
    return (
        <div
            onClick={() => props.cb(props.letter)}
            className={classNames('key valign-wrapper', cls, props.classNames)}
        >
            <p>{props.letter.toUpperCase()}</p>
        </div>
    )
}

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'

export function Letters(props) {
    return (
        <div className="keys">
            {LETTERS.split('').map((letter, i) =>
                Key({
                    letter: letter,
                    classNames: i > 12 ? 'bottom-row' : undefined,
                    ...props,
                })
            )}
        </div>
    )
}
