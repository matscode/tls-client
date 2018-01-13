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


import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Components/Navigation";

import {
	Form,
	FormGroup,
	FormControl,
	InputGroup,
	Button,
	HelpBlock
} from 'react-bootstrap';

class SignUp extends Component {
	render () {
		return (
			<section className="SignUp">

				<Navigation />

				<div className="inner cover">

					<div className="tlscontainer">

						<h2 className="cover-heading">Sign Up</h2>

						<div className="panel panel-body">

							<Form>

								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<i className="icon ion-person"></i>
										</InputGroup.Addon>
										<FormControl
											type="text"
											placeholder="Username" />
									</InputGroup>
									<HelpBlock>Pick a unique Username</HelpBlock>
								</FormGroup>

								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<i className="icon ion-locked"></i>
										</InputGroup.Addon>
										<FormControl
											type="password"
											placeholder="Password" />
									</InputGroup>
									<HelpBlock>Makeup a secure but memory Password</HelpBlock>
								</FormGroup>

								<FormGroup className="text-right">
									<Button bsStyle="primary" type="submit">Sign Up</Button>
								</FormGroup>

							</Form>

						</div>

						{/*Sign Up button*/}
						<NavLink to="/">Already have an Account?</NavLink>
					</div>
				</div>
			</section>
		);
	}
}

export default SignUp;