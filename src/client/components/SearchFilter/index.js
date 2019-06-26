import React, { useState, Component } from 'react';
import {InputGroup, Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

class SearchFilter extends Component {
	state = { value: 2 };
	render(){
		return (
			<div class="filterCards">
				<Card className="filterResult">
				  <Card.Body>
				  	<strong>Filter 486 items</strong>
				  	<ul class="selectedFilters">
				  		<li class="selectedFilterItem">
				  			Gender: Man
				  		</li>
				  		<li class="selectedFilterItem">
				  			Category: Dresses
				  		</li>
				  	</ul>
				  </Card.Body>
				</Card>

				<Card className="searchFilter">
				  <Card.Img variant="top" src="" />
				  <Card.Body>
				    <div class="filterItem">Color</div>
				    <div>
				    	<Row className="colorItem">
					    	<InputGroup.Radio className="colorSelection" />
					    	<InputGroup.Radio className="colorSelection" />
					    	<InputGroup.Radio className="colorSelection" />
					    	<InputGroup.Radio className="colorSelection" />
					    	<InputGroup.Radio className="colorSelection" />
					    	<InputGroup.Radio className="colorSelection" />
				    	</Row>
				    </div>
				    <div class="filterItem">Size</div>
				    <div>
				    	<Row className="sizeItem">
				    		<Button variant="danger" className="col-md-4 size-button">XS</Button>
				    		<Button variant="danger" className="col-md-4 size-button">S</Button>
				    		<Button variant="danger" className="col-md-4 size-button">M</Button>
				    		<Button variant="danger" className="col-md-4 size-button">L</Button>
				    		<Button variant="danger" className="col-md-4 size-button">XL</Button>
				    	</Row>
				    </div>
				    <div class="filterItem">Price range</div>
				    <div>
				    	<InputRange
					        maxValue={20}
					        minValue={0}
					        value={this.state.value}
					        onChange={value => this.setState({ value })} 
				        />
				    </div>
				    <div class="filterItem">Brand</div>
				    <div>
				    	<Row className="brandRow">
				    		<InputGroup.Checkbox className="brandSelection" />
				    		<span class="brandName"> Abercrombie</span>
				    	</Row>
				    	<Row className="brandRow">
				    		<InputGroup.Checkbox className="brandSelection" />
				    		<span class="brandName"> Abercrombie</span>
				    	</Row>
				    	<Row className="brandRow">
				    		<InputGroup.Checkbox className="brandSelection" />
				    		<span class="brandName"> Abercrom  bie</span>
				    	</Row>
				    	<Row className="brandRow">
				    		<InputGroup.Checkbox className="brandSelection" />
				    		<span class="brandName"> Abercrombie</span>
				    	</Row>
				    	<Row className="brandRow">
				    		<InputGroup.Checkbox className="brandSelection" />
				    		<span class="brandName"> Abercrombie</span>
				    	</Row>
				    </div>
				  </Card.Body>
				</Card>

				<Card className="searchAction">
				  <Card.Body>
				    <Button variant="danger" id="applyButton">
				    	Apply
				    </Button>

				    <Button variant="link" id="clearButton">
				    	<i class="times"></i>Clear All
				    </Button>

				  </Card.Body>
				</Card>
			</div>
		)
	}
}

export default SearchFilter;