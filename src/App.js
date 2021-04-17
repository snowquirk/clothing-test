import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Homepage/HomePage';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      Hats Page
      <h1>{props.match.params.id}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats/:id' component={HatsPage} />
    </div>
  );
}

export default App;
