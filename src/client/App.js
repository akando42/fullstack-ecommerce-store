import React, { useState, Component } from 'react';
import { Container, Row, Col, Button, Jumbotron, Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import ReactImage from './react.png';

import TopBar from './components/TopBar';
import TopInfo from './components/TopInfo';
import CategoryMenu from './components/CategoryMenu';

import ReactDOM from 'react-dom';
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
      </Container>
    );
  }
}
