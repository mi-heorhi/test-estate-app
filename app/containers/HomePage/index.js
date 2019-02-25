import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from 'react-bootstrap/Container';
import Banner from '../../components/Banner';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <Banner />
      </Container>
    );
  }
}
