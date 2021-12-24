import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import './App.css';
import CocaCola from './CocaCola';
import FreshFish from './FreshFish';
import VendingMachine from './VendingMachine';
import Lays from './Lays';
import Navbar from './Navbar';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
    <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/cocacola' render={() => <CocaCola />} />
          <Route exact path='/freshfish' render={() => <FreshFish />} />
          <Route exact path='/lays' render={() => <Lays />} />
   </Switch>
    </div>
  );
}
}

export default App;
