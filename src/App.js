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
        <Route exact path="/">
            <News  key="general" pageSize={5} country="in" category="general"></News>
        </Route>
        <Route exact path="/Business">
            <News key="business"  pageSize={5} country="in" category="business"></News>
        </Route>
        <Route exact path="/Entertainment">
            <News  key="entertainment" pageSize={5} country="in" category="entertainment"></News>
        </Route>
        <Route exact path="/science">
            <News  key="science" pageSize={5} country="in" category="science"></News>
        </Route>
        <Route exact path="/Health">
            <News  key="health" pageSize={5} country="in" category="health"></News>
        </Route>
      </Switch>   
      </Router>
      
      </div>
    ) 
  }
}
