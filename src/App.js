import React from 'react';
import './Styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/nav';
import HomePage from './Components/home_page';
import Update from './Components/update_animal';
import speciesEnum from './Models/enums';

/**
 * App Component drives website setup rendering
 * @returns the renderings of HomePage (Cat), HomePage(Dog), or the Staff Update depending on Route
 */
const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route
          path="/cats"
          exact
          component={() => <HomePage species={speciesEnum.CAT} />}
        />
        <Route
          path="/dogs"
          exact
          component={() => <HomePage species={speciesEnum.DOG} />}
        />
        <Route path="/update" exact component={Update} />
      </Switch>
    </div>
  </Router>
);

export default App;
