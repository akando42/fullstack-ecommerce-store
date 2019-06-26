import React, { useState, Component } from 'react';
import {Row, Col, Card, Image, Button } from 'react-bootstrap';

class AdvertisingBanner extends Component {
	render(){
		return (
			<Row className="advertisingBanner">
				<Col lg={{span: 4, offset: 7}}>
					<div class="adsTitle">
						Converse
					</div>
					<p>
						Explore styles tough enough to
						handle all your workouts
					</p>
					<Button variant="light" className="adsButton">Go somewhere</Button>
				</Col>
			</Row>
		)
	}

}

export default AdvertisingBanner;