import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import { Videogames } from './components/Videogames/Videogames';

function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/videogames' component={NavBar}/>
        <Route exact path='/videogames' component={Videogames}/>
        
      </React.Fragment>
    </div>
  );
}

export default App;
