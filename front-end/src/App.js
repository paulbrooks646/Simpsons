import React from 'react';
import './App.css';
import Routes from './routes'
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (

    <div>
      <Nav/>
      <Router>
      {Routes}
      </Router>
    </div>
  );
}

export default App;
