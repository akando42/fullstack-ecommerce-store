import React, { Component } from 'react';
import { Row, Col, Button, Jumbotron, Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import ReactImage from './react.png';



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
      <Jumbotron fluid>
        <Row>
          <Col>
            {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" size="lg">
              Large button
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
