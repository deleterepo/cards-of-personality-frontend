import React from 'react';
import Landing from './Landing';
import Game from './Game';
import CreateADeck from './CreateADeck';
import EditADeck from './EditADeck';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/g/:roomId">
          <Game />
        </Route>
        <Route path="/create-deck">
          <CreateADeck title="Cards of Personality: Create Deck" />
        </Route>
        <Route path="/edit-deck">
          <EditADeck title="Cards of Personality: Edit Deck" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
