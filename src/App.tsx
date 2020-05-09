import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './components/layout/Page';
import Main from './components/pages/Main';
import Details from './components/pages/Details';

import './App.css';

function App() {
  return (
    <Page>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/details/:day">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </Page>
  );
}

export default App;
