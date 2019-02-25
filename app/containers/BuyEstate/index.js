import React from 'react';
import EstateFilter from '../EstateFilter';
import EstateList from '../EstateList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* eslint-disable react/prefer-stateless-function */
export default class BuyEstate extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={2} className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <EstateFilter action="BUY" />
            </div>
          </Col>
          <Col className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <EstateList />
          </Col>
        </Row>
      </Container>
    );
  }
}
