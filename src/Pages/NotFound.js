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


export default class NotFound extends Component {
	render () {
		return (
			<section className="NotFound">

				<Navigation/>

				<h2>Page Not Found</h2>
				<p>Please check the link and try again...</p>
			</section>
		);
	}
}