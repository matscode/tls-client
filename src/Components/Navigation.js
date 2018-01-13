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
import { NavLink }          from 'react-router-dom';

class Navigation extends Component {
	render () {
		return (
			<div className="masthead clearfix">
				<div className="inner">
					<h3 className="masthead-brand">TLSignal</h3>
					<nav>
						<ul className="nav masthead-nav">

							<li>
								<NavLink to="/">Home</NavLink>
							</li>

							<li>
								<NavLink to="/dashboard">Dashboard</NavLink>
							</li>

							<li>
								<NavLink to="/admin">Admin</NavLink>
							</li>

							<li>
								<NavLink to="/sign-up">Sign Up</NavLink>
							</li>

						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Navigation;