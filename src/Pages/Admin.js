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

/*Components*/
import AssetForm from "../Components/AssetForm";
import CommandForm from "../Components/CommandForm";

/*Toast Notification*/
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


export default class Admin extends Component {

    constructor (props) {
        super(props);

        this.state = {
            assetBroadcasted: false
        }

    }

    handleAssetBroadcasted = () => {
        this.setState({
            assetBroadcasted: true
        });

        // empty command input

    };

    render () {

        return (
            <section className="Admin Dashboard">

                <Navigation />

                {/*Make a Toast Placeholder*/}
                <ToastContainer />

                <div className="inner cover">

                    <div className="big-tlscontainer">

                        <h2 className="cover-heading">Signal</h2>

                        <div className="panel panel-body">

                            <div className="row">

                                {/*Asset Column*/}
                                <div className="col-sm-7">

                                    <div className="assets">
                                        <h4>Asset</h4>
                                        <AssetForm onAssetBroadcasted={this.handleAssetBroadcasted} />
                                    </div>

                                </div>

                                {/*Command Column*/}
                                <div className="col-sm-5">

                                    <div className="command">
                                        <h4> Command </h4>
                                        <CommandForm assetBroadcasted={this.state.assetBroadcasted} />
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