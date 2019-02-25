import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';

import HomePage from 'containers/HomePage/Loadable';
import BuyEstate from 'containers/BuyEstate';
import RentEstate from 'containers/RentEstate/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from '../../components/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Jumbotron fluid>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/bye" component={BuyEstate} />
        <Route exact path="/rent" component={RentEstate} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Jumbotron>
  );
}
