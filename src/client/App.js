import React, { useState, Component } from 'react';
import { Container, Row, Col, Button, Jumbotron, Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import ReactImage from './react.png';

import TopBar from './components/TopBar';
import TopInfo from './components/TopInfo';
import CategoryMenu from './components/CategoryMenu';
import SearchFilter from './components/SearchFilter';
import SearchResult from './components/SearchResult';
import FeatureSection from './components/FeatureSection';
import AdvertisingBanner from './components/AdvertisingBanner';
import SubscriptionForm from './components/SubscriptionForm';
import StoreFooter from './components/StoreFooter';

import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <Container fluid>
        <TopInfo></TopInfo>
        <TopBar></TopBar>
        <CategoryMenu></CategoryMenu>
        <Row className="shoppingSection">
          <Col lg={3} className="filterSection">
            <SearchFilter></SearchFilter>
          </Col>
          <Col lg={9} className="resultSection">
            <SearchResult></SearchResult>
          </Col>
        </Row>
        <FeatureSection></FeatureSection>
        <AdvertisingBanner></AdvertisingBanner>
        <SubscriptionForm></SubscriptionForm>
        <StoreFooter></StoreFooter>
      </Container>
    );
  }
}
