import React from 'react';
import MyComponent from './Components/MyComponent';
import ExtendedComponent from './Components/ExtendedComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router >

      <Route exact path="/" component={MyComponent} />
      <Route path="/chart" component={ExtendedComponent} />

    </Router>
  );
}

export default App;
