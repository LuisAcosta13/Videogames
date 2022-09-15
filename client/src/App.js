import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';



function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/videogames' component={Home}/>   
        
      </React.Fragment>
    </div>
  );
}

export default App;
