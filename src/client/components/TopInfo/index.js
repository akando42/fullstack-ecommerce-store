import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import 'flag-icon-css/css/flag-icon.min.css';

class TopInfo extends Component {
	render(){
		return (
			<Row className="topInfo">
				<Col lg={3} className="userAccount"> 
					Hi! <span class="userButton">Sign in </span> 
					or <span class="userButton">Register</span>
				</Col>
				<Col lg={1}> Daily Deals </Col>
				<Col lg={1}> Sell </Col>
				<Col lg={2}> Help & Contract </Col>
				<Col lg={{span:1, offset:1}}> 
					<span class="flag-icon flag-icon-um"></span>
					<span class="currency">$ USD </span>
				</Col>
				<Col lg={2} className="checkoutTotal">
					<FontAwesomeIcon icon={faShoppingBag} size="1x" />
					<span> Your bag: </span>
					<span> $21.99 </span>
				</Col>
			</Row>
		)
	}
}

export default TopInfo;