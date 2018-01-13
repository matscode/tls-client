/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com> {@link http://michaelakanji.com}
 * @date           2017-11-10
 *
 */

import React, { Component } from 'react';
import { Form, FormControl, FormGroup, HelpBlock } from "react-bootstrap";

import socketIO from "./socketIO";
import { toast } from "react-toastify";

export default class CommandForm extends Component {

    handleChange = (e) => {
        // make sure asset as been broadcasted
        if (this.props.assetBroadcasted) {
            //get command
            let command = e.target.value;

            // @todo: validate commands with pattern matching
            if (true) {
                socketIO.emit('command change', command);
            } else {
                toast.error('Invalid Command format..');
            }

        } else {

            toast.error('Broadcast Asset before typing Commands');
            // empty command input
            e.target.value = '';
        }
    };

    render () {

        return (
            <Form>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="2p"
                        onChange={this.handleChange} />

                    <HelpBlock className="small text-muted">
                        Enter desired Trade commands
                    </HelpBlock>
                </FormGroup>
            </Form>
        );
    }
}