import React, { Component } from 'react';
import { BrowserRouter, Route, Link , Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
//import ListContainer from "./components/ListsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
