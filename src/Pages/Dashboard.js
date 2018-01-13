/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com>
 * @date           2017-10-24
 *
 */

import React, { Component } from 'react';
import Navigation from "../Components/Navigation";
import socketIO from '../Components/socketIO';

import Asset from '../Components/Asset';
import Expiry from "../Components/Expiry";
import Action from "../Components/Action";


class Dashboard extends Component {


    constructor (props) {
        super(props);

        this.state = {
            assetsJsx : '',
            expiry    : 0,
            actionChar: ''
        }
    }

    componentDidMount () {

        let assetsJsx = '';

        socketIO.on('new asset', (assets) => {
            // render asset component
            assetsJsx = assets.map((asset, index) => <Asset key={index} name={asset.name} isActive={asset.isActive} />);

            this.setState({ assetsJsx: assetsJsx });
        });

        socketIO.on('new command', (command) => {

            // proccess commands
            let cParts = command.toLowerCase().split('');

            let expiry     = cParts[0];
            let actionChar = (cParts[1] !== undefined) ? cParts[1] : '';


            // first char is always set and is the expiry time
            this.setState({
                expiry    : expiry,
                actionChar: actionChar
            });

            console.log(`Expiry is ${expiry} and Action char is ${actionChar}`);

        });
    }

    render () {
        return (
            <section className="Dashboard">

                <Navigation />

                <div className="inner cover">

                    <div className="big-tlscontainer">

                        <h2 className="cover-heading">Dashboard</h2>

                        <div className="panel panel-body">
                            <div className="status">
                                -- Ready --
                            </div>

                            <hr />

                            <div className="row">

                                <div className="col-sm-6">
                                    <div className="assets">
                                        <h4>Assets</h4>
                                        <ul className="list-inline">
                                            {this.state.assetsJsx ||
                                            <li className="alert alert-danger">No Asset selected currently...</li>}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="expiry-action">
                                        <h4>
                                            <small>Expiry/</small>
                                            Action
                                        </h4>
                                        <Expiry time={this.state.expiry} />
                                        <Action char={this.state.actionChar} />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        );
    }

}

export default Dashboard;