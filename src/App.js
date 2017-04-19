import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, JourneyMap, Navigate, Info, KeyNote } from './components';
import { Select, Main, Home, Nd3_op } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header />
            <Route exact path='/' component={Home}/>
            <Route path='/select' component={Select} />
            <Route path='/main' component={Main} />
            <Route path='/nd3_op' component={Nd3_op} />
        </div>
      </Router>
    );
  }
}

export default App;
