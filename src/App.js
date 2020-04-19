import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Home from './components/Home'

class App extends React.Component {
  render() {
    return(
      <Route exact path={'/'} render={ (routerProps) => <Home routerProps={routerProps} />} />
    )
  }
}

export default App;
