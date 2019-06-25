import React, { useState, Component } from 'react';
import { Container, Row, Col, Button, Jumbotron, Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import ReactImage from './react.png';
import TopBar from './components/TopBar';
import TopInfo from './components/TopInfo';
import ReactDOM from 'react-dom';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

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
          <Row className="justify-content-md-center">
            <Col lg={{span: 6, offset: 3}} xs={{span: 10, offset: 1}}>
              <ExampleToast className="toast">
                We now have Toasts
                <span role="img" aria-label="tada">
                  🎉
                </span>
              </ExampleToast>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}
