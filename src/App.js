import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route } from 'react-router-dom';
import React, { Component } from 'react'
import { Router } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div> 
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route  path="/">
            <News pageSize={5} country="in" category="general"></News>
        </Route>
        <Route  path="/Business">
            <News pageSize={5} country="in" category="business"></News>
        </Route>
        <Route  path="/Entertainment">
            <News pageSize={5} country="in" category="entertainment"></News>
        </Route>
        <Route  path="/science">
            <News pageSize={5} country="in" category="science"></News>
        </Route>
        <Route  path="/Health">
            <News pageSize={5} country="in" category="health"></News>
        </Route>
      </Switch>   
      </Router>
      
      </div>
    ) 
  }
}
