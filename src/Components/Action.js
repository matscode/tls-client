/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com> {@link http://michaelakanji.com}
 * @date           2017-11-11
 *
 */

import React from 'react';


export default function Action (props) {

    let allowedChars = {
        c: 'call',
        p: 'put'
    };

    // make sure key exist in allowed chars array
    if (allowedChars[props.char] === undefined) return null;

    const action = allowedChars[props.char];

    return (
        <div className={`action ${action}`}>
            {action}
        </div>
    );
}