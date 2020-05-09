import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './components/layout/Page';
import Main from './components/pages/Main';
import Details from './components/pages/Details';

import { useSearch } from './hooks';

import './App.css';

function App() {
  const { filteredTodos, handleSearch } = useSearch();

  return (
    <Page>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main todos={filteredTodos} handleSearch={handleSearch} />
          </Route>

          <Route path="/details/:day">
            <Details todos={filteredTodos} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Page>
  );
}

export default App;
