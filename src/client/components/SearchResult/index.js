import React, { useState, Component } from 'react';
import {Row, Col, Card, Image, Button } from 'react-bootstrap';
import shirt from '../../static/product_images/afghan-flower.gif';

class SearchResult extends Component {
	render(){
		return (
			<Row>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={shirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={shirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={shirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={shirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={shirt} className="itemImage" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Button variant="danger">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="resultItem">
						<Card.Img variant="top" src={shirt} className="itemImage" />
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

export default SearchResult;