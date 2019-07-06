import React, { Component } from 'react';
import { Row, Col, FormControl, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class SubscriptionForm extends Component {
	render(){
		return (
			<Row className="subscriptionForm">
				<Col lg={{span: 6, offset: 1}}>
					SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS
				</Col>
				<Col lg={4}>
					<Form inline>
			            <InputGroup className="email-subscription">
			              <InputGroup.Prepend>
			                <InputGroup.Text className="mailIcon">
			                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
			                </InputGroup.Text>
			              </InputGroup.Prepend>
			              <FormControl type="text" placeholder="search anything" className="mr-sm-2 mailInput" /> 
			            </InputGroup>
			            <Button variant="danger" className="mailButton">Subscribe</Button>
			         </Form>
				</Col>
			</Row>
		)
	}
}

export default SubscriptionForm;