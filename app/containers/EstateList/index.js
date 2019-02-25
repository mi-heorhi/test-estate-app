import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectEstates,
  makeSelectLoading,
} from '../EstateFilter/selectors';
import reducer from '../EstateFilter/reducer';
import LoadingIndicator from 'components/LoadingIndicator';
import saga from '../EstateFilter/saga';
import Container from 'react-bootstrap/Container';

export class EstateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 9,
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage = page => {
    if (page > 0) {
      this.setState({
        currentPage: page,
      });
    }
  };

  render() {
    const { loading, estates } = this.props;
    const { currentPage, itemsPerPage } = this.state;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    let result;
    if (loading) {
      result = <LoadingIndicator />;
    } else {
      result = (
        <Row>
          {estates.slice(indexOfFirst, indexOfLast).map((estate, index) => (
            <Col md={4} key={`card-${index}`}>
              <Card className="mb-4">
                <Card.Img
                  className="card-img-top"
                  src={estate.exampleImages}
                  style={{
                    height: '225px',
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body>
                  <Card.Title>
                    {estate.City} {estate.Street}
                  </Card.Title>
                  <Card.Text>
                    Price: $ {estate.price}.00 
                    Square: {estate.square}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Container>
            <Pagination className="justify-content-center">
              <Pagination.First onClick={() => this.goToPage(1)} />
              <Pagination.Prev
                onClick={() => this.goToPage(this.state.currentPage - 1)}
              />
              <Pagination.Ellipsis />
              <Pagination.Item active>{this.state.currentPage}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next
                onClick={() => this.goToPage(this.state.currentPage + 1)}
              />
              <Pagination.Last
                onClick={() =>
                  this.goToPage(
                    Math.trunc(estates.length / this.state.itemsPerPage),
                  )
                }
              />
            </Pagination>
          </Container>
        </Row>
      );
    }
    return result;
  }
}

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  estates: makeSelectEstates(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(EstateList);
