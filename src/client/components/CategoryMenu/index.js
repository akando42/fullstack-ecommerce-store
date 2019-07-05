import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import shirt from '../../static/product_images/afghan-flower.gif';

class CategoryMenu extends Component {
	state = { itemGroup: []} ;
	render(){
		return (
			<Row className="categorySection">
				<Row className="categoryTitle">
					<Col lg={{span: 4, offset: 1}}>Mens Wear</Col>
				</Row>
				<Row className="categoryMenu">
					<Col lg={{span: 3, offset: 1}} className="categoryCol">
						<div className="categoryItem">First Colum</div>
						<div className="categoryItem">First Colum</div>
						<div className="categoryItem">First Colum</div>
						<div className="categoryItem">First Colum</div>
						<div className="categoryItem">First Colum</div>
					</Col>
					<Col lg={3} className="categoryCol">
						<div className="categoryItem">Second Colum</div>
						<div className="categoryItem">Second Colum</div>
						<div className="categoryItem">Second Colum</div>
						<div className="categoryItem">Second Colum</div>
						<div className="categoryItem">Second Colum</div>
					</Col>					
					<Col lg={4} className="categoryCol">
						<div className="categoryItem">Third Colum</div>
						<div className="categoryItem">Third Colum</div>
						<div className="categoryItem">Third Colum</div>
						<div className="categoryItem">Third Colum</div>
						<div className="categoryItem">Third Colum</div>
					</Col>
				</Row>
			Name</Row>
		)
	}
}

export default CategoryMenu