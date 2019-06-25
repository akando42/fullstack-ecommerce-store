import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

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
						<div class="categoryItem">First Colum</div>
						<div class="categoryItem">First Colum</div>
						<div class="categoryItem">First Colum</div>
						<div class="categoryItem">First Colum</div>
						<div class="categoryItem">First Colum</div>
					</Col>
					<Col lg={3} className="categoryCol">
						<div class="categoryItem">Second Colum</div>
						<div class="categoryItem">Second Colum</div>
						<div class="categoryItem">Second Colum</div>
						<div class="categoryItem">Second Colum</div>
						<div class="categoryItem">Second Colum</div>
					</Col>					
					<Col lg={4} className="categoryCol">
						<div class="categoryItem">Third Colum</div>
						<div class="categoryItem">Third Colum</div>
						<div class="categoryItem">Third Colum</div>
						<div class="categoryItem">Third Colum</div>
						<div class="categoryItem">Third Colum</div>
					</Col>
				</Row>
			</Row>
		)
	}
}

export default CategoryMenu