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

class Features extends Component {
	render () {
		return (
			<section className="Features">

				<Navigation />

				<div className="inner cover">

					<h2 className="cover-heading">Features</h2>

					<div className="panel panel-body">
						<ul>
							<li>I am a boy</li>
							<li>yes, for i am return</li>
							<li>shut the ** super</li>
							<li>play around as you wish</li>
						</ul>
					</div>
				</div>
			</section>
		)
			;
	}
}

export default Features;