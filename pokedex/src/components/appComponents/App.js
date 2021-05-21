import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';
import React, { Component }from 'react';
import Nav from '../page1Components/Nav'
import HomePage from '../../pages/HomePage';
import CharacterPage from '../../pages/CharacterPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} /> 
              <Route exact path="/pokemon/:pokemonIndex" component={CharacterPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
