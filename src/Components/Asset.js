/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com>
 * @date           2017-11-03
 *
 */

import React from 'react';

export default function Asset (props) {
    if (props.name) {
        return <li className={props.isActive ? 'active' : ''}>{props.name}</li>;
    }

    return null;
}
