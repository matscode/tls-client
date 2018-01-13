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
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Navigation from "../Components/Navigation";
import {
	Form,
	FormGroup,
	FormControl,
	InputGroup
} from "react-bootstrap";


class Login extends Component {
	render () {
		return (
			<section className="SignIn">

				<Navigation />

				<div className="inner cover">

					<div className="tlscontainer">

						<h2 className="cover-heading">Authorization</h2>

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
								</FormGroup>

								<FormGroup className="text-right">
									<Button bsStyle="primary" type="submit">Sign In</Button>
								</FormGroup>

							</Form>

						</div>

						{/*Sign Up button*/}
						<NavLink to="/sign-up">Sign Up for Free</NavLink>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;