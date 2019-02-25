import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
class Banner extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Rent</Card.Title>
              <Card.Text>Here you can Rent estate</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Buy</Card.Title>
              <Card.Text>Here you can buy estate</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Banner;
