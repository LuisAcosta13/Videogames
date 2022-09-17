import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';



function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/videogames' component={NavBar}/>
        <Route exact path='/videogames' component={Home}/>   
        <Route path='/videogames/:id' component={VideogameDetail}/>
      </React.Fragment>
    </div>
  );
}

export default App;
