import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectEstates,
  makeSelectLoading
} from './selectors';
import { loadEstates, setFilter } from './actions';
import reducer from './reducer';
import saga from './saga';
import Container from 'react-bootstrap/Container';

export class EstateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: this.props.action,
      priceFrom: '',
      priceTo: '',
      squreFrom: '',
      squreTo: '',
      isHouse: false,
      isTownhouse: false,
      isAppartment: false,
      isRoom: false,
      isElite: false,
      isEuro: false,
      isRegular: false,
      isNothing: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  componentDidMount() {
    this.props.setFilter(this.state);
  }
  handleChange = e => {
    let newState = {...this.state};
    newState[e.target.name] = JSON.parse(e.target.checked);
    this.setState(newState);
    this.props.setFilter(newState);
  };
  handleChangeInput = e => {
    let newState = {...this.state};
    newState[e.target.name] = JSON.parse(e.target.value);
    this.setState(newState);
    this.props.setFilter(newState);
  };
  handleSubmit = e => {
    this.props.loadEstates();
    event.preventDefault();
  };
  render() {
    console.log(this.state)
    return (
      <Container>
      <Form onSubmit={this.handleSubmit} className="nav flex-column">
        <Form.Group>
          <Form.Label>Price</Form.Label>
        </Form.Group> 
        <Form.Group>
          <Form.Label>From</Form.Label>
          <Form.Control
            type="number"
            placeholder="From"
            name="priceFrom"
            onChange={this.handleChangeInput}
            checked={this.state.priceFrom}
          />
          <Form.Label>To</Form.Label>
          <Form.Control
            type="number"
            placeholder="To"
            name="priceTo"
            onChange={this.handleChangeInput}
            checked={this.state.priceTo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Squre</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>from</Form.Label>
          <Form.Control
            type="number"
            placeholder="From"
            name="squreFrom"
            onChange={this.handleChangeInput}
            checked={this.state.squreFrom}
          />
          <Form.Label>To</Form.Label>
          <Form.Control
            type="number"
            placeholder="To"
            name="squreTo"
            onChange={this.handleChangeInput}
            checked={this.state.squreTo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="House"
            name="isHouse"
            onChange={this.handleChange}
            checked={this.state.isHouse}
          />
          <Form.Check
            type="checkbox"
            label="Townhouse"
            name="isTownhouse"
            onChange={this.handleChange}
            checked={this.state.isTownhouse}
          />
          <Form.Check
            type="checkbox"
            label="Appartment"
            name="isAppartment"
            onChange={this.handleChange}
            checked={this.state.isAppartment}
          />
          <Form.Check
            type="checkbox"
            label="Room"
            name="isRoom"
            onChange={this.handleChange}
            checked={this.state.isRoom}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Elite"
            name="isElite"
            onChange={this.handleChange}
            checked={this.state.isElite}
          />
          <Form.Check
            type="checkbox"
            label="Euro"
            name="isEuro"
            onChange={this.handleChange}
            checked={this.state.isEuro}
          />
          <Form.Check
            type="checkbox"
            label="Regular"
            name="isRegular"
            onChange={this.handleChange}
            checked={this.state.isRegular}
          />
          <Form.Check
            type="checkbox"
            label="None"
            name="isNothing"
            onChange={this.handleChange}
            checked={this.state.isNothing}
          />
        </Form.Group>
      </Form>
      </Container>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    loadEstates: evt => dispatch(loadEstates()),
    setFilter: evt => dispatch(setFilter(evt)),
  };
}

const mapStateToProps = createStructuredSelector({
  estates: makeSelectEstates(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'estates', reducer });
const withSaga = injectSaga({ key: 'estates', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EstateFilter);