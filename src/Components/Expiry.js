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

/**
 * @return {null}
 */
export default function Expiry (props) {

    if (isNaN(props.time) || props.time === 0) return null;

    return (
        <div className="expiry">
            {props.time}
            <small> Min</small>
        </div>
    );
}