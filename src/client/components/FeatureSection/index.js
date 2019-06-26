import React, { useState, Component } from 'react';
import {Row, Col, Card, Image, Button } from 'react-bootstrap';
import coolerShirt from '../../static/product_images/buffalo.gif';

class FeatureSection extends Component {
	render(){
		return (
			<Row className="featureSection">
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={coolerShirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={coolerShirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={coolerShirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		)
	}

}

export default FeatureSection;