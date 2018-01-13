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
import { Button, Form, FormControl, FormGroup, HelpBlock, InputGroup } from "react-bootstrap";
import socketIO from "./socketIO";
import { toast } from "react-toastify";

export default class AssetForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        // get asset
        let asset = this.state.value;

        /*Debugging Purpose*/
        //console.log(`Button click with value: ${asset}`);

        if (asset.length > 3) {
            // do emit
            socketIO.emit('asset change', [{name: asset, isActive: true}, {name: 'Gold', isActive: false}]);

            this.props.onAssetBroadcasted();

            toast.success('Asset is broadcasted successfully');
        } else {
            // show error message
            toast.error("Asset cants be less than 4 Chars");
        }
    };

    handleChange = e => {
        this.setState({ value: e.target.value.toUpperCase() });
    };

    render () {

        return (
            <Form onSubmit={this.handleSubmit}>

                <FormGroup>
                    <InputGroup>

                        <FormControl
                            type="text"
                            placeholder="EUR/USD"
                            value={this.state.value}
                            onChange={this.handleChange} />

                        <InputGroup.Button>
                            <Button type="submit"
                                    bsStyle="primary">
                                Broadcast
                            </Button>
                        </InputGroup.Button>

                    </InputGroup>

                    <HelpBlock className="small text-muted">
                        Enter Asset identifier
                    </HelpBlock>
                </FormGroup>

            </Form>
        );
    }
}
