import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import TransportDetails from './Components/Transport Details/TransportDetails';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/allTransport/:Tid/">
            <TransportDetails></TransportDetails>
          </Route>
          <Route path="*">
            <h1 className="text-center my-5">404 - Not Found!</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
