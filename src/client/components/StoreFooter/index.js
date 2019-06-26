import React, { Component } from 'react';
import {Row, Col, Nav} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faPinterest, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

class StoreFooter extends Component {
	render(){
		return (
			<Row className="storeFooter">
				<Col lg={{span: 8, offset: 2}}>
					<Row>
						<Nav className="justify-content-center" activeKey="/home">
							<Nav.Item className="footer-item">
								<Nav.Link href="/women" className="footer-item">Women</Nav.Link>
							</Nav.Item>
							<Nav.Item className="footer-item">
								<Nav.Link eventKey="link-1" className="footer-item">Men</Nav.Link>
							</Nav.Item>
							<Nav.Item className="footer-item">
								<Nav.Link eventKey="link-2" className="footer-item">Kids</Nav.Link>
							</Nav.Item>
							<Nav.Item className="footer-item">
								<Nav.Link eventKey="link-2" className="footer-item">Shoes</Nav.Link>
							</Nav.Item>
							<Nav.Item className="footer-item">
								<Nav.Link eventKey="link-2" className="footer-item">Brands</Nav.Link>
							</Nav.Item>
						</Nav>
					</Row>
					<Row className="socialMedia">
						<Col lg={{span: 6, offset: 3}}>
							<FontAwesomeIcon className="socialIcon" icon={faInstagram} size="2x" />
							<FontAwesomeIcon className="socialIcon" icon={faPinterest} size="2x" />
							<FontAwesomeIcon className="socialIcon" icon={faTwitter} size="2x" />
							<FontAwesomeIcon className="socialIcon" icon={faFacebook} size="2x" />
						</Col>
					</Row>
					<Row className="copyRights">
						<Col lg={{span: 6, offset: 3}}>
							@2021 Forturing * 
							<a href="/contact"> Contact * </a>
							<a href="/policies"> Privacy Policy </a>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}

export default StoreFooter;