import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Container/Home'
import CreateTrip from './Container/CreateTrip'
import TripList from './Container/TripList'
import Container from '@material-ui/core/Container';
import BottomTabBar from './Components/BottomTabs'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-trip" component={CreateTrip} />
        <Route exact path="/trip-list" component={TripList  } />
      </Switch>
        <BottomTabBar />
    </div>
  );
}
}

export default App;
