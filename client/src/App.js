import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={LandingPage}/>

        <Route path='/videogames' component={SearchBar}/>
      </Switch>
    </div>
  );
}

export default App;
