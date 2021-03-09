import React from 'react';
import './App.css';
import AllPlayers from './Components/AllPlayers/AllPlayers';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import PlayerDetails from './Components/Player Details/PlayerDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <AllPlayers></AllPlayers>
        </Route>
        <Route path="/allPlayer/:jersey_number/">
          <PlayerDetails></PlayerDetails>
        </Route>
        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
